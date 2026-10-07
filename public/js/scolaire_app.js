/**
 * EDUMIND Scolaire — Client Application Logic (CEM & Lycée)
 * Canteen Management, Discipline & Absences, Classes & Certificates
 */

class ScolaireApp {
  constructor() {
    this.currentView = 'dashboard';
    this.settings = {};
    this.stats = {};
    this.classes = [];
    this.students = [];
    this.audioCtx = null;
  }

  async init() {
    this.initAudio();
    this.bindEvents();
    await this.loadSettings();
    await this.navigate('dashboard');
  }

  initAudio() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
    } catch (e) {}
  }

  playBeep(success = true) {
    if (!this.audioCtx) return;
    try {
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      if (success) {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, this.audioCtx.currentTime); // A5 note
        gain.gain.setValueAtTime(0.15, this.audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.25);
        osc.start();
        osc.stop(this.audioCtx.currentTime + 0.25);
      } else {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, this.audioCtx.currentTime); // Low buzz
        gain.gain.setValueAtTime(0.2, this.audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.4);
        osc.start();
        osc.stop(this.audioCtx.currentTime + 0.4);
      }
    } catch (e) {}
  }

  bindEvents() {
    // Navigation items
    document.querySelectorAll('[data-view]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const v = el.getAttribute('data-view');
        this.navigate(v);
      });
    });

    // Canteen barcode input
    const scanInput = document.getElementById('canteenBarcodeInput');
    if (scanInput) {
      scanInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.handleCanteenScan(scanInput.value);
        }
      });
    }
  }

  async navigate(view) {
    this.currentView = view;

    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.getAttribute('data-view') === view) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Hide all view containers
    document.querySelectorAll('.view-container').forEach(c => c.style.display = 'none');

    // Show target view container
    const target = document.getElementById(`view-${view}`);
    if (target) target.style.display = 'block';

    // View specific data load
    if (view === 'dashboard') await this.loadDashboard();
    else if (view === 'canteen') await this.loadCanteenView();
    else if (view === 'kitchen-sheet') await this.loadKitchenSheet();
    else if (view === 'discipline') await this.loadDisciplineView();
    else if (view === 'classes') await this.loadClassesView();
    else if (view === 'students') await this.loadStudentsView();
    else if (view === 'settings') await this.loadSettingsView();
  }

  async loadSettings() {
    try {
      const res = await fetch('/api/settings').then(r => r.json());
      if (res.success) {
        this.settings = res.settings || {};
        const titleEl = document.getElementById('schoolHeaderTitle');
        if (titleEl && this.settings.institution_name) {
          titleEl.textContent = this.settings.institution_name;
        }
        const yearEl = document.getElementById('schoolHeaderYear');
        if (yearEl && this.settings.school_year) {
          yearEl.textContent = this.settings.school_year;
        }
      }
    } catch (e) {
      console.error('Settings load error:', e);
    }
  }

  // =========================================================================
  // 1. DASHBOARD
  // =========================================================================
  async loadDashboard() {
    try {
      const res = await fetch('/api/dashboard/stats').then(r => r.json());
      if (!res.success) return;
      this.stats = res.stats;

      document.getElementById('statTotalStudents').textContent = this.stats.totalStudents || 0;
      document.getElementById('statDemiPension').textContent = this.stats.demiPensionnaires || 0;
      document.getElementById('statExternes').textContent = this.stats.externes || 0;
      document.getElementById('statMealsToday').textContent = this.stats.mealsToday || 0;
      document.getElementById('statMealRate').textContent = `${this.stats.mealAttendanceRate || 0}%`;
      document.getElementById('statAbsencesToday').textContent = this.stats.absencesToday || 0;
      document.getElementById('statClassesCount').textContent = this.stats.classesCount || 0;

      // Load today's live recent canteen scans preview
      this.loadRecentMealsPreview();
    } catch (e) {
      console.error('Dashboard load error:', e);
    }
  }

  async loadRecentMealsPreview() {
    try {
      const res = await fetch('/api/canteen/today').then(r => r.json());
      const tbody = document.getElementById('dashboardRecentMealsBody');
      if (!tbody) return;

      if (!res.success || !res.recentScans || res.recentScans.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="text-center py-4 text-muted">لم يتم تسجيل أي وجبة اليوم بعد</td></tr>`;
        return;
      }

      tbody.innerHTML = res.recentScans.slice(0, 8).map((scan, idx) => `
        <tr>
          <td><span class="badge bg-secondary">#${scan.id}</span></td>
          <td class="fw-bold">${this.escape(scan.last_name)} ${this.escape(scan.first_name)}</td>
          <td><span class="badge bg-primary">${this.escape(scan.class_name || '—')}</span></td>
          <td><span class="text-success fw-bold"><i class="fa-regular fa-clock me-1"></i>${scan.scan_time}</span></td>
          <td><span class="badge bg-success"><i class="fa-solid fa-check me-1"></i>مستلم</span></td>
        </tr>
      `).join('');
    } catch (e) {}
  }

  // =========================================================================
  // 2. CANTEEN SCANNER (الماسح الذكي لدخول المطعم)
  // =========================================================================
  async loadCanteenView() {
    const input = document.getElementById('canteenBarcodeInput');
    if (input) {
      input.value = '';
      input.focus();
    }
    await this.refreshCanteenTodayStats();
  }

  async refreshCanteenTodayStats() {
    try {
      const res = await fetch('/api/canteen/today').then(r => r.json());
      if (res.success) {
        document.getElementById('canteenRegisteredCount').textContent = res.totalRegistered || 0;
        document.getElementById('canteenServedCount').textContent = res.totalServed || 0;
        document.getElementById('canteenRemainingCount').textContent = res.remaining || 0;

        const tbody = document.getElementById('canteenScansTableBody');
        if (tbody) {
          if (!res.recentScans || res.recentScans.length === 0) {
            tbody.innerHTML = `<tr><td colspan="5" class="text-center py-4 text-muted">في انتظار مسح أول تلميذ...</td></tr>`;
          } else {
            tbody.innerHTML = res.recentScans.map(s => `
              <tr>
                <td class="text-muted">${s.matricule}</td>
                <td class="fw-bold text-white">${this.escape(s.last_name)} ${this.escape(s.first_name)}</td>
                <td><span class="badge bg-info">${this.escape(s.class_name || '—')}</span></td>
                <td class="text-success fw-bold">${s.scan_time}</td>
                <td><span class="badge bg-success">وجبة مقدمة</span></td>
              </tr>
            `).join('');
          }
        }
      }
    } catch (e) {}
  }

  async handleCanteenScan(code) {
    const term = (code || '').trim();
    if (!term) return;

    const input = document.getElementById('canteenBarcodeInput');
    const resultBox = document.getElementById('canteenScanResultCard');
    if (!resultBox) return;

    try {
      const res = await fetch('/api/canteen/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: term })
      }).then(r => r.json());

      if (res.success) {
        this.playBeep(true);
        resultBox.className = 'scan-result-card success';
        resultBox.innerHTML = `
          <div class="scan-icon"><i class="fa-solid fa-circle-check"></i></div>
          <div class="scan-info">
            <h2 class="scan-name">${this.escape(res.student.last_name)} ${this.escape(res.student.first_name)}</h2>
            <div class="scan-meta">
              <span class="badge bg-primary font-monospace">${res.student.matricule}</span>
              <span class="badge bg-info">${res.student.class_name || 'القسم'}</span>
              <span class="badge bg-success">نصف داخلي (Demi-Pensionnaire)</span>
            </div>
            <div class="scan-time mt-2 text-success">
              <i class="fa-regular fa-clock me-1"></i> وقت الدخول: <strong>${res.scan_time}</strong> — ${res.message}
            </div>
          </div>
        `;
      } else if (res.duplicate) {
        this.playBeep(false);
        resultBox.className = 'scan-result-card warning';
        resultBox.innerHTML = `
          <div class="scan-icon text-warning"><i class="fa-solid fa-triangle-exclamation"></i></div>
          <div class="scan-info">
            <h2 class="scan-name text-warning">${this.escape(res.student?.last_name || '')} ${this.escape(res.student?.first_name || '')}</h2>
            <div class="scan-meta">
              <span class="badge bg-secondary font-monospace">${res.student?.matricule || ''}</span>
              <span class="badge bg-info">${res.student?.class_name || ''}</span>
            </div>
            <div class="scan-alert alert-warning mt-2">
              <i class="fa-solid fa-ban me-1"></i> ${this.escape(res.error)}
            </div>
          </div>
        `;
      } else {
        this.playBeep(false);
        resultBox.className = 'scan-result-card danger';
        resultBox.innerHTML = `
          <div class="scan-icon text-danger"><i class="fa-solid fa-circle-xmark"></i></div>
          <div class="scan-info">
            <h2 class="scan-name text-danger">${res.student ? `${this.escape(res.student.last_name)} ${this.escape(res.student.first_name)}` : 'تنبيه'}</h2>
            <div class="scan-alert alert-danger mt-2">
              <i class="fa-solid fa-hand me-1"></i> ${this.escape(res.error || 'غير مسموح بالدخول')}
            </div>
          </div>
        `;
      }

      await this.refreshCanteenTodayStats();
    } catch (e) {
      this.playBeep(false);
      resultBox.className = 'scan-result-card danger';
      resultBox.innerHTML = `<div class="p-3 text-danger"><i class="fa-solid fa-triangle-exclamation"></i> خطأ في الاتصال بالخادم</div>`;
    } finally {
      if (input) {
        input.value = '';
        input.focus();
      }
    }
  }

  // =========================================================================
  // 3. KITCHEN SHEET (ورقة المطبخ اليومية للمقتصد)
  // =========================================================================
  async loadKitchenSheet(date = null) {
    const targetDate = date || document.getElementById('kitchenSheetDatePicker')?.value || new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('kitchenSheetDatePicker');
    if (dateInput && !dateInput.value) dateInput.value = targetDate;

    try {
      const res = await fetch(`/api/canteen/kitchen-sheet?date=${targetDate}`).then(r => r.json());
      if (!res.success) return;

      document.getElementById('kitchenTotalEligible').textContent = res.totalEligible || 0;
      document.getElementById('kitchenTotalServed').textContent = res.totalServed || 0;
      document.getElementById('kitchenTotalAbsent').textContent = res.absentCount || 0;
      document.getElementById('kitchenSheetPrintDate').textContent = res.date;

      const tbody = document.getElementById('kitchenSheetTableBody');
      if (tbody) {
        if (!res.classBreakdown || res.classBreakdown.length === 0) {
          tbody.innerHTML = `<tr><td colspan="5" class="text-center py-4 text-muted">لا توجد أقسام مسجلة</td></tr>`;
        } else {
          tbody.innerHTML = res.classBreakdown.map((c, i) => {
            const absent = Math.max(0, c.total_demi_pensionnaires - c.served_count);
            const rate = c.total_demi_pensionnaires > 0 ? Math.round((c.served_count / c.total_demi_pensionnaires) * 100) : 0;
            return `
              <tr>
                <td>${i + 1}</td>
                <td class="fw-bold">${this.escape(c.class_name)} (${this.escape(c.full_name)})</td>
                <td><span class="badge bg-secondary">${c.total_demi_pensionnaires}</span></td>
                <td class="text-success fw-bold">${c.served_count}</td>
                <td class="text-danger fw-bold">${absent}</td>
                <td>
                  <div class="progress" style="height: 14px;">
                    <div class="progress-bar bg-success" style="width: ${rate}%;">${rate}%</div>
                  </div>
                </td>
              </tr>
            `;
          }).join('');
        }
      }
    } catch (e) {
      console.error('Kitchen sheet load error:', e);
    }
  }

  printKitchenSheet() {
    window.print();
  }

  // =========================================================================
  // 4. DISCIPLINE & ABSENCES (الحياة المدرسية وبطاقة الدخول)
  // =========================================================================
  async loadDisciplineView() {
    try {
      const res = await fetch('/api/discipline/absences').then(r => r.json());
      const tbody = document.getElementById('disciplineAbsencesTableBody');
      if (!tbody) return;

      if (!res.success || !res.absences || res.absences.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="text-center py-4 text-muted">لا توجد غيابات مسجلة حديثاً</td></tr>`;
        return;
      }

      tbody.innerHTML = res.absences.map(a => `
        <tr>
          <td><span class="font-monospace">${a.matricule}</span></td>
          <td class="fw-bold text-white">${this.escape(a.last_name)} ${this.escape(a.first_name)}</td>
          <td><span class="badge bg-info">${this.escape(a.class_name || '—')}</span></td>
          <td>${a.absence_date} <small class="text-muted">(${a.time_slot})</small></td>
          <td>
            <span class="badge ${a.period_type === 'retard' ? 'bg-warning text-dark' : 'bg-danger'}">
              ${a.period_type === 'retard' ? 'تأخر' : 'غياب'}
            </span>
          </td>
          <td>
            ${a.is_justified ? `
              <span class="badge bg-success"><i class="fa-solid fa-check me-1"></i>مبرر</span>
              <small class="d-block text-muted">${this.escape(a.justification_reason || '')}</small>
            ` : `
              <span class="badge bg-secondary">غير مبرر</span>
            `}
          </td>
          <td>
            ${!a.is_justified ? `
              <button class="btn btn-sm btn-outline-success" onclick="scolaireApp.openJustifyModal(${a.id}, '${this.escape(a.first_name)} ${this.escape(a.last_name)}')">
                <i class="fa-solid fa-file-signature me-1"></i> تبرير وإصدار بطاقة دخول
              </button>
            ` : `
              <button class="btn btn-sm btn-outline-info" onclick="scolaireApp.printBillet(${a.id})">
                <i class="fa-solid fa-print me-1"></i> طباعة Billet
              </button>
            `}
          </td>
        </tr>
      `).join('');
    } catch (e) {
      console.error('Discipline load error:', e);
    }
  }

  async openJustifyModal(absenceId, studentName) {
    const reason = prompt(`أدخل سبب تبرير الغياب للتلميذ (${studentName}) لإصدار بطاقة الدخول Billet d'entrée:`, 'عذر عائلي معتمد / شهادة طبية');
    if (!reason) return;

    try {
      const res = await fetch('/api/discipline/justify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ absence_id: absenceId, reason })
      }).then(r => r.json());

      if (res.success && res.billet) {
        alert(`✅ تم تبرير الغياب وإصدار بطاقة الدخول رقم: ${res.billet.billet_number}`);
        this.renderPrintableBillet(res.billet);
        await this.loadDisciplineView();
      }
    } catch (e) {
      alert('خطأ أثناء حفظ التبرير');
    }
  }

  renderPrintableBillet(billet) {
    const printArea = document.getElementById('printableModalArea');
    if (!printArea) return;

    printArea.innerHTML = `
      <div class="official-print-document billet-document">
        <div class="doc-header text-center mb-3">
          <div class="fw-bold">الجمهورية الجزائرية الديمقراطية الشعبية</div>
          <div class="fw-bold">وزارة التربية الوطنية</div>
          <div class="h5 mt-1">${this.settings.institution_name || 'المؤسسة التعليمية'}</div>
          <div class="text-muted">مستشارية التربية — بطاقة دخول للتلميذ (Billet d'entrée)</div>
        </div>
        <hr/>
        <div class="row mb-3">
          <div class="col-6"><strong>رقم الوصل:</strong> ${billet.billet_number}</div>
          <div class="col-6 text-end"><strong>تاريخ الإصدار:</strong> ${new Date().toLocaleDateString('fr-FR')} ${new Date().toLocaleTimeString('fr-FR')}</div>
        </div>
        <div class="doc-body p-3 border rounded bg-light text-dark mb-4">
          <p>يُسمح للتلميذ(ة): <strong>${this.escape(billet.last_name)} ${this.escape(billet.first_name)}</strong></p>
          <p>القسم: <strong>${this.escape(billet.class_name)}</strong> — رقم التعريف: <strong>${billet.matricule}</strong></p>
          <p>بالدخول إلى قاعة الدراسة واستئناف الحصص بعد تسوية وضعية غيابه بتاريخ: <strong>${billet.absence_date}</strong> (${billet.time_slot}).</p>
          <p class="mb-0"><strong>سبب التبرير المعتمد:</strong> ${this.escape(billet.justification_reason)}</p>
        </div>
        <div class="row text-center mt-4">
          <div class="col-6">
            <div>تأشيرة أستاذ الحصة</div>
          </div>
          <div class="col-6">
            <div>ختم وإمضاء مستشار التربية</div>
            <div class="mt-4 text-muted fw-bold">${this.settings.cpe_name || 'مستشار التربية'}</div>
          </div>
        </div>
      </div>
    `;

    window.print();
  }

  // =========================================================================
  // 5. CLASSES & DIVISIONS (الأقسام التربوية)
  // =========================================================================
  async loadClassesView() {
    try {
      const res = await fetch('/api/classes').then(r => r.json());
      const container = document.getElementById('classesCardsContainer');
      if (!container) return;

      if (!res.success || !res.classes || res.classes.length === 0) {
        container.innerHTML = `<div class="col-12 text-center text-muted py-5">لا توجد أقسام مسجلة</div>`;
        return;
      }

      this.classes = res.classes;
      container.innerHTML = res.classes.map(c => `
        <div class="col-md-4 col-sm-6 mb-4">
          <div class="card bg-dark border-secondary h-100 shadow-sm class-card">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="badge bg-primary fs-6">${this.escape(c.name)}</span>
                <span class="text-muted small">${c.level_name}</span>
              </div>
              <h5 class="card-title text-white mb-3">${this.escape(c.full_name)}</h5>
              <div class="d-flex justify-content-between text-muted small mb-2 border-top border-secondary pt-2">
                <span><i class="fa-solid fa-users me-1"></i> إجمالي التلاميذ:</span>
                <strong class="text-white">${c.total_students}</strong>
              </div>
              <div class="d-flex justify-content-between text-muted small mb-2">
                <span><i class="fa-solid fa-utensils me-1 text-success"></i> نصف داخلي:</span>
                <strong class="text-success">${c.demi_students}</strong>
              </div>
              <div class="d-flex justify-content-between text-muted small mb-3">
                <span><i class="fa-solid fa-person-walking me-1 text-info"></i> خارجي:</span>
                <strong class="text-info">${c.externe_students}</strong>
              </div>
              <button class="btn btn-sm btn-outline-primary w-100" onclick="scolaireApp.filterStudentsByClass(${c.id})">
                <i class="fa-solid fa-list me-1"></i> عرض تلاميذ القسم
              </button>
            </div>
          </div>
        </div>
      `).join('');
    } catch (e) {
      console.error('Classes load error:', e);
    }
  }

  // =========================================================================
  // 6. STUDENTS & CERTIFICATES (التلاميذ والشهادة المدرسية)
  // =========================================================================
  async loadStudentsView(classId = null) {
    try {
      let url = '/api/students';
      if (classId) url += `?class_id=${classId}`;
      const res = await fetch(url).then(r => r.json());
      const tbody = document.getElementById('studentsTableBody');
      if (!tbody) return;

      if (!res.success || !res.students || res.students.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="text-center py-4 text-muted">لا يوجد تلاميذ مسجلون في هذا القسم</td></tr>`;
        return;
      }

      this.students = res.students;
      tbody.innerHTML = res.students.map(s => `
        <tr>
          <td><span class="font-monospace">${s.matricule}</span></td>
          <td class="fw-bold text-white">${this.escape(s.last_name)} ${this.escape(s.first_name)}</td>
          <td><span class="badge bg-primary">${this.escape(s.class_name || '—')}</span></td>
          <td>
            <span class="badge ${s.regime === 'demi_pensionnaire' ? 'bg-success' : 'bg-secondary'}">
              ${s.regime === 'demi_pensionnaire' ? 'نصف داخلي' : 'خارجي'}
            </span>
          </td>
          <td class="small text-muted">${s.birth_date || '—'} <span class="d-block">${s.birth_place || ''}</span></td>
          <td>${s.parent_phone || '—'}</td>
          <td>
            <div class="btn-group">
              <button class="btn btn-sm btn-outline-info" title="الشهادة المدرسية" onclick="scolaireApp.printSchoolCertificate(${s.id})">
                <i class="fa-solid fa-file-lines me-1"></i> شهادة مدرسية
              </button>
              <button class="btn btn-sm btn-outline-light" title="بطاقة التلميذ" onclick="scolaireApp.printStudentCard(${s.id})">
                <i class="fa-solid fa-id-card"></i>
              </button>
            </div>
          </td>
        </tr>
      `).join('');
    } catch (e) {
      console.error('Students load error:', e);
    }
  }

  filterStudentsByClass(classId) {
    this.navigate('students');
    setTimeout(() => this.loadStudentsView(classId), 150);
  }

  async printSchoolCertificate(studentId) {
    try {
      const res = await fetch(`/api/students/${studentId}/certificate`).then(r => r.json());
      if (!res.success) return alert('تعذر تحميل بيانات الشهادة');

      const s = res.student;
      const sett = res.settings;
      const printArea = document.getElementById('printableModalArea');
      if (!printArea) return;

      printArea.innerHTML = `
        <div class="official-print-document certificate-document p-4">
          <div class="text-center mb-4">
            <h5 class="fw-bold mb-1">الجمهورية الجزائرية الديمقراطية الشعبية</h5>
            <h6 class="fw-bold mb-2">وزارة التربية الوطنية</h6>
            <div class="border-bottom border-dark pb-2 mb-2">
              <div class="fw-bold">${sett.institution_name || 'المؤسسة التعليمية'}</div>
              <div>مديرية التربية لولاية: ${sett.wilaya || '................'}</div>
            </div>
            <h3 class="fw-bold my-4 text-decoration-underline" style="letter-spacing: 2px;">شـهـادة مـدرسـيـة</h3>
          </div>

          <div class="certificate-content my-4 lh-lg fs-5">
            <p>يشهد مدير <strong>${sett.institution_name || 'المؤسسة'}</strong> بأن التلميذ(ة):</p>
            <p>اللقب والاسم: <strong>${this.escape(s.last_name)} ${this.escape(s.first_name)}</strong></p>
            <p>تاريخ ومكان الازدياد: <strong>${s.birth_date || '......'}</strong> بـ: <strong>${s.birth_place || '......'}</strong></p>
            <p>رقم التعريف المدرسي: <strong>${s.matricule}</strong> ${s.national_id ? `| رقم التعريف الوطني (NIN): <strong>${s.national_id}</strong>` : ''}</p>
            <p>مُسجل(ة) نظامياً بالمؤسسة في قسم: <strong>${this.escape(s.class_full_name || s.class_name)}</strong></p>
            <p>صفة التلميذ: <strong>${s.regime === 'demi_pensionnaire' ? 'نصف داخلي (Demi-pensionnaire)' : 'خارجي (Externe)'}</strong></p>
            <p>خلال السنة الدراسية: <strong>${sett.school_year || '2026-2027'}</strong></p>
            <p class="mt-4 text-muted fst-italic fs-6">سُلمت هذه الشهادة للمعني(ة) لتقديمها والإدلاء بها في حدود ما يسمح به القانون.</p>
          </div>

          <div class="row text-center mt-5 pt-3">
            <div class="col-6 text-start">
              <div>حرر بـ: ${sett.wilaya || 'الجزائر'} في: ${new Date().toLocaleDateString('fr-FR')}</div>
            </div>
            <div class="col-6 text-end">
              <div class="fw-bold me-4">ختم وإمضاء المدير</div>
              <div class="mt-4 text-muted">${sett.director_name || 'المدير'}</div>
            </div>
          </div>
        </div>
      `;

      window.print();
    } catch (e) {
      alert('خطأ أثناء تجهيز الشهادة المدرسية');
    }
  }

  escape(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}

const scolaireApp = new ScolaireApp();
document.addEventListener('DOMContentLoaded', () => scolaireApp.init());
