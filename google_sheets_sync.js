/**
 * ==========================================================================
 *  EDUMIND SCOLAIRE — Google Sheets Cloud Synchronization Bridge
 *  جسر المزامنة السحابية مع Google Sheets لتطبيق تسجيل حضور وغياب الأساتذة
 * ==========================================================================
 */

const DB = require('./database');

const DEFAULT_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbylDllDn_uQqnrTkyJt3HlSTtkQ-PwQ-EUfkUZsCj3RZBfN5cQXyxyufss4Y6ZiYdq7/exec';

class GoogleSheetsSync {
  static _syncTimer = null;

  /**
   * Debounced automatic export to Google Sheets whenever relevant school data changes
   */
  static scheduleAutoSync(delayMs = 2500) {
    if (!this.isSyncEnabled()) {
      return;
    }
    if (this._syncTimer) {
      clearTimeout(this._syncTimer);
    }
    this._syncTimer = setTimeout(async () => {
      try {
        console.log('🔄 [GoogleSheetsSync] Déclenchement automatique de la synchronisation vers Google Sheets...');
        const res = await this.exportDataToSheets();
        console.log(`✅ [GoogleSheetsSync] Export automatique terminé avec succès (${res.counts?.teachers || 0} profs, ${res.counts?.groups || 0} classes, ${res.counts?.students || 0} élèves).`);
      } catch (err) {
        console.warn('⚠️ [GoogleSheetsSync] Échec de l\'auto-export vers Google Sheets:', err.message);
      }
    }, delayMs);
  }

  static isSyncEnabled() {
    try {
      const row = DB.queryOne("SELECT value FROM settings WHERE key = 'google_sheets_enabled'");
      if (!row || row.value === null || row.value === undefined) {
        return true;
      }
      return row.value === '1' || row.value === 'true';
    } catch (_) {
      return true;
    }
  }

  static setSyncEnabled(enabled) {
    const val = enabled ? '1' : '0';
    DB.run(`
      INSERT INTO settings (key, value) VALUES ('google_sheets_enabled', ?)
      ON CONFLICT(key) DO UPDATE SET value = excluded.value
    `, [val]);
    return enabled;
  }

  static getScriptUrl() {
    try {
      const row = DB.queryOne("SELECT value FROM settings WHERE key = 'google_sheets_url'");
      return (row && row.value && row.value.trim()) ? row.value.trim() : DEFAULT_SCRIPT_URL;
    } catch (_) {
      return DEFAULT_SCRIPT_URL;
    }
  }

  static setScriptUrl(url) {
    const cleanUrl = (url || '').trim();
    DB.run(`
      INSERT INTO settings (key, value) VALUES ('google_sheets_url', ?)
      ON CONFLICT(key) DO UPDATE SET value = excluded.value
    `, [cleanUrl]);
    return cleanUrl;
  }

  /**
   * Tests connection with the Google Apps Script Web App
   */
  static async testConnection(targetUrl) {
    const url = (targetUrl || this.getScriptUrl() || '').trim();
    if (!url) {
      throw new Error('رابط السحابة غير محدد (Google Apps Script URL manquant)');
    }
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      throw new Error('رابط غير صالح. يجب أن يبدأ بـ https://');
    }

    const startTime = Date.now();
    const testUrl = url.includes('?') ? `${url}&action=ping` : `${url}?action=ping`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      const res = await fetch(testUrl, {
        method: 'GET',
        headers: { 'Accept': 'application/json' },
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (!res.ok && res.status !== 302) {
        throw new Error(`استجابة غير صالحة من السيرفر (HTTP ${res.status})`);
      }

      const text = await res.text();
      let data = {};
      try {
        data = JSON.parse(text);
      } catch (_) {
        throw new Error('الرابط لا يرجع بيانات JSON صالحة. تأكد من نشر Web App بصلاحية "Anyone"');
      }

      if (data.status !== 'ok') {
        throw new Error(data.message || 'فشل الاتصال: السكربت لم يستجب بالحالة المطلوبة');
      }

      const latencyMs = Date.now() - startTime;
      return {
        success: true,
        latencyMs,
        app: data.app || 'EDUMIND Presence',
        version: data.version || '2.0.0',
        message: 'تم التحقق من الاتصال بنجاح مع السحابة'
      };
    } catch (err) {
      clearTimeout(timeoutId);
      if (err.name === 'AbortError') {
        throw new Error('انتهت مهلة الاتصال (10 ثوان). تحقق من اتصال الإنترنت والرابط.');
      }
      throw err;
    }
  }

  /**
   * Updates or sets mobile credentials (phone + password or 4-digit PIN) for a teacher
   */
  static async updateTeacherCredentials(teacherId, { phone, password, mobile_pin }) {
    const teacher = DB.queryOne("SELECT * FROM teachers WHERE id = ?", [teacherId]);
    if (!teacher) {
      throw new Error('Enseignant introuvable');
    }

    const cleanPhone = (phone !== undefined ? phone : teacher.phone || '').trim();
    const cleanPassword = (password !== undefined ? password : teacher.password || '').trim();
    const cleanPin = (mobile_pin !== undefined ? mobile_pin : teacher.mobile_pin || '').trim();

    DB.run(`
      UPDATE teachers
      SET phone = ?, password = ?, mobile_pin = ?
      WHERE id = ?
    `, [cleanPhone, cleanPassword, cleanPin, teacherId]);

    // Push updated teacher record to Google Sheets if configured
    try {
      const scriptUrl = this.getScriptUrl();
      if (scriptUrl) {
        let digits = cleanPhone.replace(/\D/g, '');
        if (digits.length === 9 && !digits.startsWith('0')) digits = '0' + digits;
        const formattedPhone = digits ? ("'" + digits) : '';
        const payload = {
          action: 'upsert_teacher',
          data: {
            id: teacher.id,
            matricule: teacher.matricule,
            name: `${teacher.first_name} ${teacher.last_name}`.trim(),
            phone: formattedPhone,
            password: cleanPassword,
            pin: cleanPin ? ("'" + cleanPin) : '',
            subject: '',
            active: teacher.active ? 1 : 0
          }
        };

        await fetch(scriptUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      }
    } catch (e) {
      console.warn('⚠️ [Sheets Sync] Impossible de synchroniser le compte prof en temps réel sur le cloud:', e.message);
    }

    return { success: true, teacherId, phone: cleanPhone };
  }

  /**
   * Exports teachers, classes, student rosters, and schedules to Google Sheets
   */
  static async exportDataToSheets() {
    const scriptUrl = this.getScriptUrl();
    if (!scriptUrl) {
      throw new Error('URL Google Apps Script non configurée');
    }

    // 1. Teachers
    const rawTeachersRows = DB.queryAll(`
      SELECT t.id, t.matricule, (t.first_name || ' ' || t.last_name) as name,
             t.phone, t.password, t.mobile_pin as pin,
             sub.name as subject, t.active
      FROM teachers t
      LEFT JOIN subjects sub ON t.subject_id = sub.id
      WHERE t.active = 1
    `);

    const teachersRows = rawTeachersRows.map(t => {
      let phone = String(t.phone || '').trim();
      let digits = phone.replace(/\D/g, '');
      if (digits.length === 9 && !digits.startsWith('0')) {
        digits = '0' + digits;
      }
      return {
        ...t,
        phone: digits ? ("'" + digits) : '',
        pin: t.pin ? ("'" + String(t.pin).trim()) : ''
      };
    });

    // 2. Groups
    const groupsRows = DB.queryAll(`
      SELECT g.id, g.name, lvl.name as level_name, sub.name as subject_name,
             r.name as room_name, g.teacher_id
      FROM groups g
      LEFT JOIN levels lvl ON g.level_id = lvl.id
      LEFT JOIN subjects sub ON g.subject_id = sub.id
      LEFT JOIN rooms r ON g.room_id = r.id
      WHERE g.active = 1
    `);

    // 3. Schedules (Combines room_schedules and group schedules)
    const schedulesRows = DB.queryAll(`
      SELECT rs.id, rs.group_id, g.name as group_name,
             rs.teacher_id, (t.first_name || ' ' || t.last_name) as teacher_name,
             rs.day_of_week, rs.start_time, rs.end_time,
             r.name as room_name, sub.name as subject_name
      FROM room_schedules rs
      LEFT JOIN groups g ON rs.group_id = g.id
      LEFT JOIN teachers t ON rs.teacher_id = t.id
      LEFT JOIN rooms r ON rs.room_id = r.id
      LEFT JOIN subjects sub ON rs.subject_id = sub.id
      WHERE g.active = 1 OR rs.group_id IS NULL
    `);

    // If room_schedules has few entries, also fallback to groups timing
    if (schedulesRows.length === 0) {
      const fallbackGroups = DB.queryAll(`
        SELECT g.id as group_id, g.name as group_name,
               g.teacher_id, (t.first_name || ' ' || t.last_name) as teacher_name,
               g.day_of_week, g.start_time, g.end_time,
               r.name as room_name, sub.name as subject_name
        FROM groups g
        LEFT JOIN teachers t ON g.teacher_id = t.id
        LEFT JOIN rooms r ON g.room_id = r.id
        LEFT JOIN subjects sub ON g.subject_id = sub.id
        WHERE g.active = 1 AND g.day_of_week IS NOT NULL
      `);
      fallbackGroups.forEach((fg, idx) => {
        schedulesRows.push({
          id: idx + 1,
          ...fg
        });
      });
    }

    // 4. Students enrolled in active groups
    const studentsRows = DB.queryAll(`
      SELECT DISTINCT s.id, s.matricule, s.first_name, s.last_name,
             (s.first_name || ' ' || s.last_name) as full_name,
             e.group_id, g.name as group_name,
             s.photo_url, s.active
      FROM students s
      JOIN enrollments e ON s.id = e.student_id AND e.status = 'active'
      JOIN groups g ON e.group_id = g.id AND g.active = 1
      WHERE s.active = 1
    `);

    const formattedSchedulesRows = schedulesRows.map(s => {
      let st = String(s.start_time || '').trim();
      let et = String(s.end_time || '').trim();
      if (st.length > 5) st = st.slice(0, 5);
      if (et.length > 5) et = et.slice(0, 5);
      return {
        ...s,
        start_time: st ? ("'" + st) : '',
        end_time: et ? ("'" + et) : ''
      };
    });

    const payload = {
      action: 'sync_desktop_data',
      data: {
        teachers: teachersRows,
        groups: groupsRows,
        schedules: formattedSchedulesRows,
        students: studentsRows
      }
    };

    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Erreur réseau Google Sheets (${response.status})`);
    }

    const result = await response.json();
    return {
      success: true,
      message: result.message || 'Données exportées avec succès',
      counts: {
        teachers: teachersRows.length,
        groups: groupsRows.length,
        schedules: schedulesRows.length,
        students: studentsRows.length
      }
    };
  }

  /**
   * Imports un-synced attendances recorded on mobile phones by teachers
   */
  static async importAttendancesFromSheets() {
    const scriptUrl = this.getScriptUrl();
    if (!scriptUrl) {
      throw new Error('URL Google Apps Script non configurée');
    }

    const url = `${scriptUrl}?action=get_attendances&synced_desktop=0`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erreur réseau Google Sheets (${response.status})`);
    }

    const attendances = await response.json();
    if (!Array.isArray(attendances) || attendances.length === 0) {
      return { success: true, count: 0, message: 'Aucune nouvelle absence sur le cloud' };
    }

    const processedIds = [];
    let importedAbsences = 0;

    DB.transaction(() => {
      for (const att of attendances) {
        const studentId = parseInt(att.student_id, 10);
        const groupId = parseInt(att.group_id, 10);
        if (!studentId || Number.isNaN(studentId)) continue;

        const date = att.session_date || new Date().toISOString().slice(0, 10);
        const timeSlot = att.time_slot || '08:00 - 09:00';
        const status = (att.status || 'present').toLowerCase();
        const note = att.note || '';
        const subjectName = att.subject_name || '';

        // 1. Record into discipline_absences if status is absent or late
        if (status === 'absent' || status === 'late') {
          // Check if already exists for this student on this date and time_slot
          const existing = DB.queryOne(`
            SELECT id FROM discipline_absences
            WHERE student_id = ? AND absence_date = ? AND time_slot = ?
          `, [studentId, date, timeSlot]);

          if (!existing) {
            DB.run(`
              INSERT INTO discipline_absences
              (student_id, group_id, absence_date, time_slot, period_type, subject_name, notes, created_at)
              VALUES (?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
            `, [studentId, groupId || null, date, timeSlot, status, subjectName, note]);
            importedAbsences++;
          }
        }

        // 2. Record into general attendance table if group exists
        if (groupId && !Number.isNaN(groupId)) {
          const checkInTime = timeSlot.split('-')[0].trim() || '08:00';
          const existingAtt = DB.queryOne(`
            SELECT id FROM attendance
            WHERE student_id = ? AND group_id = ? AND session_date = ?
          `, [studentId, groupId, date]);

          if (!existingAtt) {
            DB.run(`
              INSERT INTO attendance (student_id, group_id, session_date, check_in_time, status, notes)
              VALUES (?, ?, ?, ?, ?, ?)
            `, [studentId, groupId, date, checkInTime, status, note]);
          }
        }

        if (att.id) {
          processedIds.push(att.id);
        }
      }
    });

    // 3. Mark attendances as synced in Google Sheets
    if (processedIds.length > 0) {
      try {
        await fetch(scriptUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'mark_attendances_synced',
            ids: processedIds
          })
        });
      } catch (e) {
        console.warn('⚠️ [Sheets Sync] Impossible de marquer les absences comme synchronisées sur le cloud:', e.message);
      }
    }

    return {
      success: true,
      count: importedAbsences,
      totalReceived: attendances.length,
      message: `${importedAbsences} absence(s) et retard(s) importés avec succès`
    };
  }
}

module.exports = GoogleSheetsSync;
