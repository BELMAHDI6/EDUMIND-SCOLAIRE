const DB = require('./database.js');

try {
  // 1. Settings
  DB.run(`UPDATE settings SET value = 'متوسطة العربي بن مهيدي' WHERE key = 'school_name';`);
  DB.run(`INSERT OR IGNORE INTO settings (key, value) VALUES ('school_name', 'متوسطة العربي بن مهيدي');`);
  DB.run(`INSERT OR IGNORE INTO settings (key, value) VALUES ('active_year', '2026-2027');`);
  DB.run(`INSERT OR IGNORE INTO settings (key, value) VALUES ('school_type', 'public_cem');`);
  DB.run(`INSERT OR REPLACE INTO settings (key, value) VALUES ('caisse_categories_entree', '["حقوق التسجيل والتضامن المدرسي","اشتراك المطعم المدرسي (نصف داخلي)","مبيعات الكتب المدرسية","منحة التضامن 5000 دج","مداخيل النشاط الثقافي والرياضي","مساهمات وإعانات أخرى"]');`);
  DB.run(`INSERT OR REPLACE INTO settings (key, value) VALUES ('caisse_categories_sortie', '["لوازم ومواد التغذية للمطعم","تجهيزات وصيانة المطبخ","صيانة وترميم الأقسام والقاعات","طباعة ووسائل التعليم والأمانة","فواتير الماء والكهرباء والغاز","نفقات النشاط الرياضي والتربوي","مصاريف أخرى"]');`);

  // 2. Levels (Niveaux CEM)
  const levelsCount = DB.queryOne('SELECT COUNT(*) as c FROM levels').c;
  if (levelsCount === 0) {
    const levels = [
      ['السنة الأولى متوسط (1AM)', 'CEM', 1],
      ['السنة الثانية متوسط (2AM)', 'CEM', 2],
      ['السنة الثالثة متوسط (3AM)', 'CEM', 3],
      ['السنة الرابعة متوسط (4AM - BEM)', 'CEM', 4]
    ];
    for (const l of levels) {
      DB.run('INSERT INTO levels (name, category, display_order) VALUES (?, ?, ?)', l);
    }
  }

  // 3. Salles (Classrooms)
  const roomsCount = DB.queryOne('SELECT COUNT(*) as c FROM rooms').c;
  if (roomsCount === 0) {
    const rooms = [
      ['قاعة 01 (جناح أ)', 35, 'قاعة تدريس عامة'],
      ['قاعة 02 (جناح أ)', 35, 'قاعة تدريس عامة'],
      ['قاعة 03 (جناح ب)', 32, 'قاعة تدريس عامة'],
      ['مخبر العلوم الطبيعية', 30, 'مخبر مجهز للملاحظة والتجارب'],
      ['مخبر العلوم الفيزيائية', 30, 'مخبر مجهز للتجارب الفيزيائية'],
      ['قاعة الإعلام الآلي', 25, 'قاعة مجهزة بالحواسيب'],
      ['المطعم المدرسي (نصف داخلي)', 180, 'قاعة الإطعام والوجبات اليومية']
    ];
    for (const r of rooms) {
      DB.run('INSERT INTO rooms (name, capacity, description) VALUES (?, ?, ?)', r);
    }
  }

  // 4. Subjects (Matières)
  const subjectsCount = DB.queryOne('SELECT COUNT(*) as c FROM subjects').c;
  if (subjectsCount === 0) {
    const subjects = [
      ['اللغة العربية', 'ARA', '#10b981', 'book'],
      ['الرياضيات', 'MATH', '#3b82f6', 'calculator'],
      ['علوم الطبيعة والحياة', 'SNV', '#059669', 'leaf'],
      ['العلوم الفيزيائية والتكنولوجيا', 'PHYS', '#8b5cf6', 'flask'],
      ['اللغة الفرنسية', 'FRA', '#ec4899', 'language'],
      ['اللغة الإنجليزية', 'ENG', '#f59e0b', 'globe'],
      ['التاريخ والجغرافيا والمدنية', 'HG', '#ef4444', 'landmark']
    ];
    for (const s of subjects) {
      DB.run('INSERT INTO subjects (name, code, color, icon) VALUES (?, ?, ?, ?)', s);
    }
  }

  // 5. Teachers (الأساتذة)
  const teachersCount = DB.queryOne('SELECT COUNT(*) as c FROM teachers').c;
  if (teachersCount === 0) {
    const teachers = [
      ['ENS-001', 'أحمد', 'منصور', '0551112233', 1, 'titulaire'],
      ['ENS-002', 'فاطمة', 'قاسيمي', '0662223344', 2, 'titulaire'],
      ['ENS-003', 'كمال', 'بوزيدي', '0773334455', 3, 'contractuel'],
      ['ENS-004', 'مريم', 'علالي', '0554445566', 4, 'titulaire']
    ];
    for (const t of teachers) {
      DB.run('INSERT INTO teachers (matricule, first_name, last_name, phone, subject_id, active) VALUES (?, ?, ?, ?, ?, 1)', [t[0], t[1], t[2], t[3], t[4]]);
    }
  }

  // 6. Classes / Groups (الأقسام المدرسية)
  const groupsCount = DB.queryOne('SELECT COUNT(*) as c FROM groups').c;
  if (groupsCount === 0) {
    const groups = [
      ['1 متوسط 1 (1AM-1)', 6, 1, 1, 1, '2026-2027', 0, 32],
      ['1 متوسط 2 (1AM-2)', 6, 2, 2, 2, '2026-2027', 0, 30],
      ['2 متوسط 1 (2AM-1)', 7, 1, 1, 3, '2026-2027', 0, 28],
      ['3 متوسط 1 (3AM-1)', 8, 3, 3, 4, '2026-2027', 0, 30],
      ['4 متوسط 1 (4AM-1 BEM)', 9, 2, 2, 1, '2026-2027', 0, 32]
    ];
    for (const g of groups) {
      DB.run('INSERT INTO groups (name, level_id, subject_id, teacher_id, room_id, school_year, price_monthly, max_students) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', g);
    }
  }

  // 7. Students (التلاميذ)
  const studentsCount = DB.queryOne('SELECT COUNT(*) as c FROM students').c;
  if (studentsCount === 0) {
    const students = [
      ['ELE-2026-0001', 'محمد', 'بن علي', 'M', '2013-04-12', '0550112233', 'علي بن علي', '0550112233', 6, 'demi_pensionnaire', 1, 'ELE-2026-0001'],
      ['ELE-2026-0002', 'سارة', 'بوزيد', 'F', '2013-08-25', '0661223344', 'عمر بوزيد', '0661223344', 6, 'demi_pensionnaire', 1, 'ELE-2026-0002'],
      ['ELE-2026-0003', 'ياسين', 'منصوري', 'M', '2013-01-15', '0772334455', 'مراد منصوري', '0772334455', 6, 'externe', 0, 'ELE-2026-0003'],
      ['ELE-2026-0004', 'إكرام', 'خليفي', 'F', '2012-10-09', '0553445566', 'رشيد خليفي', '0553445566', 7, 'demi_pensionnaire', 1, 'ELE-2026-0004'],
      ['ELE-2026-0005', 'وليد', 'إبراهيمي', 'M', '2011-06-30', '0664556677', 'كريم إبراهيمي', '0664556677', 8, 'demi_pensionnaire', 1, 'ELE-2026-0005'],
      ['ELE-2026-0006', 'أمينة', 'بلحاج', 'F', '2010-02-18', '0775667788', 'يوسف بلحاج', '0775667788', 9, 'demi_pensionnaire', 1, 'ELE-2026-0006']
    ];

    for (const s of students) {
      const res = DB.run(`
        INSERT INTO students (
          matricule, first_name, last_name, gender, birth_date,
          phone, parent_name, parent_phone, level_id,
          regime, canteen_active, qr_code
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `, s);

      // Enroll in corresponding group
      const studentId = res.lastInsertRowid;
      const groupList = DB.queryAll('SELECT id FROM groups');
      if (groupList.length > 0) {
        const targetGroup = groupList[(studentId - 1) % groupList.length].id;
        DB.run(`
          INSERT OR IGNORE INTO enrollments (student_id, group_id, school_year, status)
          VALUES (?, ?, '2026-2027', 'active')
        `, [studentId, targetGroup]);
      }
    }
  }

  // 8. Caisse Sample Movements
  const caisseCount = DB.queryOne('SELECT COUNT(*) as c FROM caisse').c;
  if (caisseCount === 0) {
    const movements = [
      ['entree', 'حقوق التسجيل والتضامن المدرسي', 45000, 'تحصيل حقوق التسجيل للفصل الأول (120 تلميذ)', 'REC-2026-001', 'espece', '2026-10-01'],
      ['entree', 'اشتراك المطعم المدرسي (نصف داخلي)', 72000, 'اشتراكات الإطعام المدرسي الثلاثي الأول (120 تلميذ × 600 دج)', 'REC-2026-002', 'baridimob', '2026-10-02'],
      ['entree', 'مبيعات الكتب المدرسية', 185000, 'مبيعات حزم الكتب المدرسية للسنة الدراسية 2026-2027', 'REC-2026-003', 'espece', '2026-10-03'],
      ['sortie', 'لوازم ومواد التغذية للمطعم', 48500, 'شراء لحوم وخضر وفواكه للمطعم المدرسي (أسبوع 1)', 'DEP-2026-001', 'cheque', '2026-10-04'],
      ['sortie', 'طباعة ووسائل التعليم والأمانة', 14200, 'شراء ورق سحب وطباشير وأقلام سبورة لمكتب الأمانة', 'DEP-2026-002', 'espece', '2026-10-05']
    ];
    for (const m of movements) {
      DB.run(`
        INSERT INTO caisse (type, category, amount, title, reference, payment_method, movement_date, movement_time, user_name)
        VALUES (?, ?, ?, ?, ?, ?, ?, '10:00:00', 'المقتصد')
      `, m);
    }
  }

  console.log('✅ Base de données EDUMIND Scolaire pré-remplie avec succès pour les établissements publics !');
} catch (err) {
  console.error('Erreur seed:', err);
}

DB.close();
