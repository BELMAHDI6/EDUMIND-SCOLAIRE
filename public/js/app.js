// ==========================================================================
// EDUMIND - Client Application Logic & Bilingual Engine
// ==========================================================================

const i18n = {
  fr: {
    tagline: 'Établissements Publics (CEM & Lycée)',
    nav_dashboard: 'Tableau de bord',
    cat_quotidien: 'GESTION SCOLAIRE',
    nav_eleves: 'Élèves & Rakmana',
    nav_cantine: 'Cantine Scolaire',
    nav_pointage: 'Vie Scolaire & Absences',
    nav_caisse: 'Intendance & Caisse',
    cat_configuration: 'STRUCTURE & PARAMÈTRES',
    nav_groupes: 'Divisions & Salles',
    nav_enseignants: 'Corps Enseignant',
    nav_settings: 'Paramètres',
    title_salles: 'Salles de Cours',
    subtitle_salles: "Gestion des espaces pédagogiques, capacités d'accueil, équipements et plannings d'occupation",
    btn_new_room: 'Nouvelle salle',
    btn_check_avail: 'Disponibilité en direct',
    view_grid: 'Cartes',
    view_table: 'Tableau',
    kpi_total_rooms: 'Total des salles',
    kpi_total_capacity: "Capacité d'accueil",
    kpi_projectors: 'Avec Vidéoprojecteur',
    kpi_assigned_groups: 'Groupes programmés',
    th_capacite: 'CAPACITÉ',
    th_projecteur: 'VIDÉOPROJECTEUR',
    th_equipement: 'ÉQUIPEMENT & REMARQUES',
    th_groupes_occup: 'GROUPES ASSIGNÉS',
    th_actions: 'ACTIONS',
    lbl_room_name: 'Nom de la Salle *',
    lbl_room_capacity: 'Capacité (Places) *',
    lbl_room_projector: 'Vidéoprojecteur',
    lbl_room_notes: 'Équipements & Remarques / Emplacement',
    btn_save_room: 'Enregistrer la Salle',
    btn_print_schedule: 'Imprimer',
    title_groupes: 'Groupes',
    btn_new_group: 'Nouveau groupe',
    kpi_active_groups: 'Groupes actifs',
    kpi_enrolled_students: 'Élèves inscrits',
    kpi_fill_rate: 'Taux de remplissage',
    list_groups: 'Liste des groupes',
    th_group_name: 'NOM DU GROUPE',
    th_eleves_cap: 'ÉLÈVES / CAP.',
    th_salle: 'SALLE',
    th_statut: 'STATUT',
    greeting_morning: 'Bonjour',
    greeting_afternoon: 'Bon après-midi',
    greeting_evening: 'Bonsoir',
    kpi_eleves: 'Élèves actifs',
    kpi_inscriptions: 'Inscriptions',
    kpi_today: "Collecté aujourd'hui",
    kpi_month: 'Collecté ce mois',
    kpi_unpaid: 'Total impayé',
    kpi_profs: 'Enseignants',
    kpi_matieres: 'Matières',
    chart_title: 'Évolution des encaissements — 12 mois',
    alerts_title: 'Alertes & Notifications',
    all_good: 'Tout est en ordre',
    recent_payments: 'Paiements récents',
    recent_unpaid: 'Impayés récents',
    btn_view_reports: 'Voir les rapports',
    btn_view_all: 'Voir tout',
    btn_batch_badges: 'Badges',
    th_eleve: 'ÉLÈVE',
    th_matiere: 'MATIÈRE',
    th_montant: 'MONTANT',
    th_date: 'DATE',
    th_restedu: 'RESTE DÛ',
    th_nom: 'NOM',
    th_prenom: 'PRÉNOM',
    pointage_title: 'Pointage & Présence Rapide',
    pointage_subtitle: "Scannez le badge/QR de l'élève ou saisissez son matricule pour enregistrer sa présence et vérifier son état de paiement.",
    tip_douchette_ready: 'Lecteur de code-barres (Douchette USB) actif & prêt à scanner',
    tip_douchette_ready_entrance: 'Douchette USB prête pour le pointage rapide',
    btn_scan: 'Pointer',
    title_eleves: 'Élèves',
    btn_add_student: 'Nouvel élève',
    nav_parents: "Parents d'élèves",
    title_parents: "Parents d'élèves",
    subtitle_parents: "Gestion des parents, suivi de la fratrie et remises familiales",
    btn_add_parent: 'Nouveau parent',
    kpi_parents_total: 'TOTAL PARENTS',
    kpi_parents_discount: 'REMISE FAMILIALE',
    kpi_parents_children: 'ENFANTS SCOLARISÉS',
    kpi_parents_debts: 'DETTES FAMILIALES',
    planning_kpi_groups: 'SÉANCES / GROUPES',
    planning_kpi_hours: 'VOLUME HEBDOMADAIRE',
    planning_kpi_teachers: 'ENSEIGNANTS PROGRAMMÉS',
    planning_kpi_rooms: 'SALLES UTILISÉES',
    th_parent_nom: 'PARENT / RESPONSABLE',
    th_enfants_count: 'ENFANTS INSCRITS',
    th_reduction_pct: 'RÉDUCTION (%)',
    th_parent_solde: 'DETTES FAMILIALES',
    lbl_parent: "Parent d'élève",
    lbl_parent_fullname: "Nom complet du parent (Nom et Prénom) *",
    lbl_parent_phone: "Téléphone principal *",
    lbl_parent_phone_sec: "Téléphone secondaire / WhatsApp",
    lbl_parent_email: "Adresse email",
    lbl_parent_address: "Adresse de résidence",
    lbl_parent_discount_title: "Taux de remise accordé à la famille (%)",
    lbl_parent_discount_hint: "Appliqué automatiquement aux inscriptions des enfants",
    lbl_parent_notes: "Notes & observations sur la famille",
    btn_save_parent: "Enregistrer le parent",
    btn_edit_parent: "Modifier le parent",
    dossier_stat_children: "Enfants scolarisés",
    dossier_stat_discount: "Taux de remise",
    dossier_stat_debts: "Reste dû familial",
    dossier_title_children: "Liste des enfants scolarisés dans l'établissement",
    dossier_title_unpaid: "Impayés et cotisations en attente de la famille",
    dossier_th_student: "Élève",
    dossier_th_group: "Groupe / Matière",
    dossier_th_month: "Mois",
    dossier_th_amount: "Montant dû",
    th_nom_prenom: 'NOM & PRÉNOM',
    th_niveau: 'NIVEAU',
    th_phone: 'TÉLÉPHONE',
    th_parent: 'PARENT & CONTACT',
    lbl_eleve: 'Élève',
    profile_kpi_billed: 'Total facturé',
    profile_kpi_paid: 'Total payé',
    profile_kpi_remaining: 'Reste dû',
    profile_kpi_payments: 'Paiements',
    title_paiements: 'Paiements & Reçus Scolarité',
    btn_new_payment: 'Encaisser un Paiement',
    th_groupe: 'GROUPE / MATIÈRE',
    th_mode: 'MODE',
    title_echeances: 'Suivi des Échéances & Impayés',
    th_montant_du: 'MONTANT DÛ',
    title_caisse: 'Trésorerie & Journal de Caisse',
    title_enseignants: 'Gestion du Corps Enseignant',
    btn_add_teacher: 'Ajouter un Enseignant',
    title_planning: 'Emploi du Temps & Groupes',
    title_attendance: "Gestion des Présences & Feuilles d'Appel",
    subtitle_attendance: "Vérification manuelle des présences par groupe, suivi des dates et nombre de séances.",
    tab_manual_attendance: "Feuille d'Appel par Groupe",
    tab_rapid_scan: "Scanner Code-barres / QR",
    tab_entrance_pointage: "Borne d'Entrée (Présence Générale)",
    entrance_title: "Borne d'Entrée & Pointage Rapide (Élèves & Enseignants)",
    entrance_subtitle: "Scannez le badge de l'élève ou de l'enseignant pour enregistrer sa présence instantanément sans sélection de groupe.",
    entrance_scan_mode: "Mode de Pointage",
    entrance_mode_auto: "Détection Auto (Entrée / Sortie)",
    entrance_mode_in: "Entrée seulement",
    entrance_mode_out: "Sortie seulement",
    entrance_kiosk_btn: "Plein Écran (Kiosk)",
    stat_students_today: "Élèves Présents Aujourd'hui",
    stat_teachers_today: "Enseignants Présents",
    stat_total_in_school: "Total Présents à l'Établissement",
    stat_last_scan: "Dernier Pointage Validé",
    title_entrance_live_log: "Journal des Présences d'Entrée",
    btn_print_entrance_journal: "Imprimer le Journal",
    th_type: "TYPE",
    th_classe_matiere: "CLASSE / MATIÈRE",
    th_heure_entree: "HEURE ENTRÉE",
    th_heure_sortie: "HEURE SORTIE",
    th_duree: "DURÉE",
    entrance_empty_state: "Scannez le badge d'un élève ou d'un enseignant pour afficher le journal du jour.",
    opt_all_roles: "Tous (Élèves & Enseignants)",
    opt_students_only: "Élèves seulement",
    opt_teachers_only: "Enseignants seulement",
    lbl_select_group: "Sélectionner le Groupe",
    lbl_session_date: "Date de la Séance",
    lbl_session_num: "N° Séance",
    lbl_session_topic: "Thème / Notes du cours",
    btn_save_attendance: "Enregistrer la présence",
    btn_view_matrix: "Grille des Séances",
    btn_print_matrix: "Imprimer la Grille",
    stat_inscrits: "Total Élèves",
    stat_total_seances: "Séances Effectuées",
    stat_presents: "Présents",
    stat_absents: "Absents",
    stat_retards: "Retards / Excusés",
    stat_paid_ratio: "Abonnement Réglé",
    btn_mark_all_present: "Tous Présents",
    btn_mark_all_absent: "Tous Absents",
    btn_reset: "Réinitialiser",
    th_contact: "CONTACT & TÉL",
    th_assiduite_groupe: "ASSIDUITÉ (SÉANCES)",
    th_cotisation: "COTISATION CE MOIS",
    th_etat_presence: "PRÉSENCE À LA SÉANCE",
    th_notes: "REMARQUES",
    status_present: "Présent",
    status_absent: "Absent",
    status_late: "En retard",
    status_excused: "Justifié",
    lbl_legend: "Légende:",
    lbl_filter_month: "Filtrer par mois :",
    all_months: "Toutes les séances (Tous les mois)",
    lbl_seances_count: "séances affichées",
    lbl_avg_presence: "Moyenne présence",
    btn_close_session_absent: "Clôturer & Marquer les absents",
    title_modal_close_session: "Clôture de la séance & Marquage des Absents",
    note_modal_close_session: "Tous les élèves inscrits qui n'ont pas encore été pointés présents seront automatiquement enregistrés avec le statut Absent.",
    btn_confirm_close_absent: "Confirmer & Marquer les Absents",
    stat_en_attente: "En Attente",
    title_live_scanned: "Élèves pointés dans cette séance",
    tip_barcode_autofocus: "Le champ reste toujours actif pour enchaîner les scans au scanner",
    th_heure: "HEURE",
    login_tagline: "Système de Gestion Scolaire Professionnel",
    login_lbl_role: "Compte utilisateur",
    login_role_admin: "Administrateur",
    login_role_auto: "Sélectionné automatiquement",
    login_lbl_password: "Mot de passe",
    login_mandatory: "Obligatoire",
    login_password_ph: "Entrez votre mot de passe...",
    login_btn_submit: "Se connecter",
    login_secured: "Accès sécurisé & chiffré",
    btn_logout: "Déconnexion",
    login_err_empty: "Veuillez saisir votre mot de passe",
    login_err_invalid: "Mot de passe incorrect. Veuillez réessayer.",
    dev_credit_label: "Programme réalisé par",
    dev_phone_label: "Téléphone Support",
    tab_apropos: "À propos & Support",
    about_title: "À propos d'EDUMIND & Développeur",
    about_desc: "Système professionnel complet pour la gestion scolaire, cours de soutien, élèves, paiements et présences.",
    about_contact_btn: "Appeler",
    about_whatsapp_btn: "WhatsApp",
    admin_developer_lbl: "Développé par",
    admin_phone_lbl: "Téléphone Support",
    license_title: "Protection & Activation",
    license_subtitle: "Protection du logiciel & Licence — Veloce Craft",
    license_alert_trial_expired: "La période d'essai de 7 jours est terminée. Ce logiciel nécessite une clé de licence pour fonctionner sur cet ordinateur.",
    license_alert_tampered: "Alerte de sécurité : Modification de l'horloge système détectée.",
    hwid_label: "Identifiant matériel unique de cet ordinateur (HWID) :",
    btn_copy: "Copier",
    btn_copied: "Copié !",
    hwid_hint: "Transmettez cet identifiant au développeur Veloce Craft pour obtenir votre clé d'activation permanente.",
    license_key_label: "Entrez votre clé d'activation (License Key) :",
    btn_activate: "Activer la licence",
    btn_activating: "Vérification...",
    btn_close: "Fermer",
    trial_banner_txt: "Version d'essai gratuite : reste {days} jour(s)",
    btn_enter_license: "Activer la licence permanente",
    btn_backup_download: "Télécharger la Sauvegarde Instantanée (.sqlite)",
    btn_restore_sqlite: "Restaurer une base (.sqlite)",
    btn_restore_archive: "Restaurer",
    btn_download_card_pdf: "Télécharger PDF",
    setting_lic_title: "État de la Licence du Logiciel",
    setting_lic_hwid: "Identifiant Machine (HWID)",
    setting_lic_status: "Statut de la licence",
    setting_lic_type: "Type de licence",
    setting_lic_expiry: "Date d'expiration",
    setting_lic_btn_renew: "Entrer une nouvelle clé",
    btn_export_payments: "Télécharger Paiements",
    lbl_payments_count: "opérations affichées",
    lbl_total_collected: "Total collecté",
    modal_export_title: "Télécharger & Exporter les Paiements",
    lbl_select_period_mode: "Période à exporter :",
    opt_single_month: "Mois unique",
    opt_multi_months: "Plusieurs mois",
    opt_range_months: "Plage de dates",
    opt_all_months: "Tous les mois",
    lbl_choose_single_month: "Sélectionnez le mois :",
    lbl_choose_multi_months: "Sélectionnez les mois souhaités :",
    btn_select_all: "Tout sélectionner",
    btn_deselect_all: "Désélectionner",
    lbl_from_month: "Du mois :",
    lbl_to_month: "Au mois :",
    msg_export_all_hint: "L'historique complet de tous les paiements enregistrés sera exporté.",
    lbl_filter_group: "Filtrer par groupe (optionnel) :",
    lbl_filter_method: "Mode de paiement (optionnel) :",
    lbl_count_payments: "Nombre d'opérations",
    lbl_count_students: "Élèves concernés",
    lbl_total_amount: "Total collecté",
    btn_download_excel: "Télécharger Excel (CSV)",
    btn_print_report: "Imprimer Rapport / PDF",
    btn_cancel: "Annuler",
    btn_export_caisse: "Télécharger le Journal de Caisse",
    modal_export_caisse_title: "Télécharger & Exporter le Journal de Caisse",
    lbl_select_caisse_period_mode: "Mode de sélection de la période :",
    opt_all_movements: "Tout le journal",
    opt_range_dates: "Période personnalisée",
    lbl_from_date: "Du :",
    lbl_to_date: "Au :",
    lbl_filter_caisse_type: "Type de flux :",
    opt_all_flux: "Tous les flux (Entrées & Sorties)",
    opt_entrees_only: "Entrées uniquement (+)",
    opt_sorties_only: "Sorties uniquement (-)",
    opt_all_categories: "Toutes les catégories",
    opt_all_methods: "Tous les modes de paiement",
    lbl_count_caisse_ops: "Nombre d'opérations",
    lbl_total_entrees: "Total des entrées",
    lbl_total_sorties: "Total des sorties",
    lbl_solde_net: "Solde Net",
    msg_export_caisse_all_hint: "L'historique complet de tous les flux de trésorerie (entrées et sorties) sera exporté.",
    lbl_caisse_movements_count: "opérations affichées",
    btn_quick_excel: "Excel Rapide",
    modal_card_title: "Carte Scolaire de l'Élève",
    card_school_sub: "ÉTABLISSEMENT D'ENSEIGNEMENT",
    card_tag_student: "ÉLÈVE • OFFICIEL",
    card_verified: "OFFICIEL",
    lbl_card_level: "Niveau :",
    lbl_card_phone: "Tél :",
    card_barcode_sublabel: "Pointage Automatique & Présence",
    btn_copy_code: "Copier le code",
    btn_print_card: "Imprimer (CR-80)",
    theme_emerald: "Vert Émeraude",
    theme_purple: "Pourpre Royal",
    theme_gold: "Noir & Or",
    theme_white: "Blanc Économique",
    modal_teacher_card_title: "Badge Professionnel Enseignant",
    card_teacher_school_sub: "CORPS ENSEIGNANT",
    card_tag_teacher: "ENSEIGNANT",
    lbl_teacher_subject: "Matière :",
    card_teacher_barcode_sublabel: "Pointage d'Entrée & Contrôle d'Accès",
    modal_batch_badges_title: "Impression Groupée des Badges",
    modal_batch_badges_desc: "Génération et impression de cartes scolaires professionnelles au format A4 (8 cartes par page)",
    lbl_filter_level: "Filtrer par niveau scolaire",
    opt_all_levels: "-- Tous les niveaux --",
    opt_all_groups: "-- Tous les groupes --",
    lbl_available_students: "Élèves disponibles",
    lbl_selected_students: "Sélectionnés",
    lbl_badges_theme: "Thème et style des cartes :",
    lbl_a4_format: "Format standard A4",
    lbl_cards_per_page: "8 cartes par page",
    btn_print_badges: "Imprimer les badges",
    btn_new_enrollment: "Inscrire un élève",
    title_inscriptions: "Inscriptions aux Groupes",
    th_matricule: "MATRICULE",
    th_groupe_cours: "GROUPE / COURS",
    th_matiere_prof: "MATIÈRE & ENSEIGNANT",
    th_tarif: "TARIF NET (DA)",
    lbl_filter_month: "Mois :",
    btn_prev: "Précédent",
    wizard_title: "Inscrire un Élève dans un Groupe",
    wizard_subtitle: "Assistant en 3 étapes simples et rapides",
    wizard_step1_title: "1. Élève",
    wizard_step1_sub: "Rechercher l'élève",
    wizard_step2_title: "2. Niveau",
    wizard_step2_sub: "Niveau scolaire",
    wizard_step3_title: "3. Groupe",
    wizard_step3_sub: "Matière & Confirmation",
    wizard_pane1_heading: "Étape 1 : Rechercher et sélectionner l'élève",
    wizard_pane1_desc: "Tapez le nom, prénom, numéro de matricule ou téléphone pour une recherche instantanée.",
    wizard_pane2_heading: "Étape 2 : Définir le niveau scolaire requis",
    wizard_pane2_desc: "Cliquez sur le niveau pour afficher les groupes disponibles.",
    wizard_selected_student_lbl: "Élève sélectionné :",
    wizard_pane3_heading: "Étape 3 : Choisir la matière et le groupe, puis confirmer",
    wizard_pane3_desc: "Sélectionnez le groupe souhaité, appliquez une remise mensuelle éventuelle et validez.",
    wizard_lbl_reg_date: "Date d'inscription",
    wizard_lbl_discount: "Remise mensuelle (DA)",
    wizard_lbl_free: "Gratuit",
    wizard_lbl_net_price: "Net à payer mensuel",
    wizard_btn_confirm: "Confirmer l'inscription",
    wizard_btn_confirm_pay: "Inscrire & Encaisser",
    settings_update_title: 'Mises à jour Cloud Automatiques',
    settings_update_subtitle: 'Recevez automatiquement les dernières améliorations sans jamais perdre vos données ni réinstaller le programme.',
    btn_check_update: 'Vérifier les mises à jour',
    btn_view_update: 'Mettre à jour maintenant',
    btn_install_update: 'Installer maintenant',
    update_modal_subtitle: 'Mise à jour Cloud Automatique & Sécurisée',
    update_current_ver: 'Version actuelle',
    update_new_ver: 'Nouvelle version',
    update_notes_title: 'Nouveautés & Corrections :',
    update_safety_note: 'Vos données (élèves, paiements, caisse) et votre licence sont 100% conservées.',
    btn_import_students: "Importer (Excel / الرقمنة)",
    import_modal_title: "Importer la liste des élèves (Excel / Plate-forme)",
    import_modal_subtitle: "Importation et mise à jour automatique depuis Excel, la plate-forme de numérisation ou fichiers Eleve",
    import_tab_excel: "Modèle Excel (Nouveau)",
    import_tab_eleve: "Fichier Eleve (Ministère)",
    import_tab_rakmana: "Fichier HTML (Plate-forme)",
    import_info_text: "Reconnaissance automatique des colonnes : Matricule, Groupe, Statut, Genre, Niveau scolaire, Nom, Prénom, Date et Lieu de naissance, Nom du père/tuteur, Adresse, Téléphone.",
    import_btn_download_template: "Télécharger le modèle Excel (Vierge)",
    import_drop_prompt: "Glissez-déposez le fichier Excel ou Plate-forme ici",
    import_drop_browse: "ou cliquez pour choisir depuis votre ordinateur (.xlsx, .xls, .csv, .html)",
    import_lbl_default_level: "Niveau scolaire par défaut",
    import_opt_level_auto: "-- Optionnel (ou auto-détecté du fichier) --",
    import_lbl_default_group: "Groupe / Classe d'affectation",
    import_opt_group_none: "-- Aucun groupe pour le moment --",
    import_lbl_duplicate_strategy: "Gestion des doublons (élèves existants)",
    import_opt_duplicate_skip: "Ignorer les doublons (Recommandé)",
    import_opt_duplicate_update: "Mettre à jour les données existantes",
    import_lbl_matricule_strategy: "Matricule / Identifiant élève",
    import_opt_mat_keep: "Conserver le matricule du fichier (génération auto si vide)",
    import_opt_mat_gen: "Générer de nouveaux matricules (EDU-2026-XXXX)",
    import_preview_heading: "Aperçu direct avant enregistrement",
    th_num_col: "#",
    th_matricule_col: "MATRICULE / ID",
    th_nom_col: "NOM",
    th_prenom_col: "PRÉNOM",
    th_genre_col: "GENRE",
    th_niveau_col: "NIVEAU SCOLAIRE",
    th_naissance_col: "DATE NAISSANCE",
    th_lieu_col: "LIEU NAISSANCE",
    th_parent_col: "PÈRE / TUTEUR",
    th_adresse_col: "ADRESSE",
    th_groupe_col: "GROUPE / CLASSE",
    th_statut_col: "STATUT",
    import_btn_confirm: "Confirmer et enregistrer l'importation",
    import_btn_executing: "Importation en cours...",
    btn_bulk_enrollment: "Inscription dans les groupes (Multi-inscriptions)",
    bulk_enroll_title: "Inscription dans les Groupes (Multi-inscriptions)",
    bulk_enroll_subtitle: "Sélectionnez les élèves et les groupes cibles pour les inscrire en un seul clic",
    bulk_panel_students: "1. Sélection des élèves",
    bulk_select_all_students: "Tout sélectionner",
    bulk_panel_groups: "2. Sélection des groupes",
    bulk_select_all_groups: "Tous les groupes",
    bulk_lbl_sel_students: "Élèves sélectionnés",
    bulk_lbl_sel_groups: "Groupes sélectionnés",
    bulk_lbl_total_enrollments: "Total des inscriptions générées",
    bulk_btn_confirm: "Confirmer les inscriptions groupées",
    bulk_btn_executing: "Inscriptions en cours...",
    th_annee_scolaire: "Année scolaire :",
    fast_pay_title: "Caisse Rapide & Multi-Paiement (Multi-cours & Mois)",
    fast_pay_subtitle: "Recherchez un élève ou un parent pour encaisser plusieurs cours et générer un reçu unifié",
    fast_pay_search_placeholder: "Rechercher un élève par nom, prénom ou matricule...",
    fast_pay_mode_student: "دفع لتلميذ",
    fast_pay_mode_parent: "دفع عائلي (بالولي)",
    fast_pay_no_student_hint: "Tapez le nom ou matricule de l'élève pour ouvrir ses cours et cotisations",
    fast_pay_no_parent_hint: "ابحث باسم الولي لعرض جميع أبنائه وأفواجهم وتسديد المستحقات دفعة واحدة أو دفع جزء من المبلغ",
    fast_pay_no_parent_sub: "يمكنك إدخال أي مبلغ جزئي وتوزيعه تلقائياً على الأبناء، مع حفظ أي متبقي كدين وإصدار وصل دفع عائلي موحد.",
    fast_pay_selected_courses: "Cours et groupes inscrits",
    fast_pay_lbl_selected_groups: "Groupes sélectionnés",
    fast_pay_lbl_total_due: "Total dû",
    fast_pay_lbl_total_paid: "Total à encaisser",
    fast_pay_btn_submit: "Encaisser & Imprimer le Reçu Unifié",
    fast_pay_btn_change_student: "Changer d'élève",
    fast_pay_status_paid: "Réglé",
    fast_pay_status_unpaid: "Non réglé",
    fast_pay_status_partial: "Partiel",
    tab_etablissement: "Établissement",
    tab_securite: "Sécurité & Accès",
    tab_facturation: "Facturation & Échéances",
    tab_caisse: "Catégories de Caisse",
    tab_donnees: "Sauvegardes & Restauration",
    tab_reseau: "Réseau & Multi-Postes",
    tab_administration: "Administration & Année",
    tab_apropos: "À propos & Support",
    network_panel_title: "Réseau Local & Connexion Multi-Postes (LAN)",
    th_enseignant: "ENSEIGNANT",
    lbl_filter_category: "Catégorie :",
    batch_selected_text: "élève(s) sélectionné(s)",
    modal_payroll_slip_title: "Bulletin de Paie / Fiche d'Honoraires",
    fast_pay_no_student_sub: "Les résultats et groupes s'afficheront instantanément avec la possibilité d'imprimer un reçu unifié.",
    opt_all_months: "Tous les mois",
    opt_all_flux: "Tous les flux (Entrées & Dépenses)",
    opt_entrees_only: "Entrées uniquement (+)",
    opt_sorties_only: "Dépenses uniquement (-)",
    opt_all_categories: "Toutes les catégories",
    opt_all_methods: "Tous les modes",
    opt_method_cash: "Espèces",
    opt_method_baridimob: "BaridiMob / CCP",
    opt_method_cheque: "Chèque",
    lbl_count_caisse_ops: "Nombre d'opérations",
    lbl_caisse_movements_count: "mouvements affichés",
    lbl_total_entrees: "Total Entrées",
    lbl_total_sorties: "Total Dépenses",
    lbl_solde_net: "Solde Net",
    btn_print_report: "Imprimer Rapport PDF",
    btn_download_excel: "Exporter Excel (CSV)",
    btn_export_caisse: "Exporter la Caisse",
    btn_export_payments: "Exporter les Paiements",
    btn_quick_excel: "Excel Rapide"
  },
  ar: {
    tagline: 'تسيير المتوسطات والثانويات',
    nav_dashboard: 'لوحة القيادة',
    cat_quotidien: 'التسيير المدرسي',
    nav_eleves: 'شؤون التلاميذ والرقمنة',
    nav_cantine: 'المطعم المدرسي (نصف داخلي)',
    nav_pointage: 'الحياة المدرسية والغيابات',
    nav_caisse: 'المصالح المالية (المقتصد)',
    cat_configuration: 'الهيكل والإعدادات',
    nav_groupes: 'الأقسام التربوية والقاعات',
    nav_enseignants: 'هيئة التدريس (الأساتذة)',
    nav_settings: 'إعدادات المؤسسة',
    title_salles: 'قاعات التدريس',
    subtitle_salles: 'إدارة الفضاءات التعليمية، السعة الاستيعابية، التجهيزات وجداول الإشغال الأسبوعي',
    btn_new_room: 'إضافة قاعة جديدة',
    btn_check_avail: 'فحص التوفر والإشغال',
    view_grid: 'بطاقات',
    view_table: 'جدول',
    kpi_total_rooms: 'إجمالي القاعات',
    kpi_total_capacity: 'السعة الاستيعابية',
    kpi_projectors: 'مجهزة بعارض (DataShow)',
    kpi_assigned_groups: 'الأفواج المجدولة',
    th_capacite: 'السعة (مقاعد)',
    th_projecteur: 'عارض داتاشو',
    th_equipement: 'التجهيزات والملاحظات',
    th_groupes_occup: 'الأفواج والحصص',
    th_actions: 'الإجراءات',
    lbl_room_name: 'اسم القاعة *',
    lbl_room_capacity: 'السعة (عدد المقاعد) *',
    lbl_room_projector: 'عارض فيديو (DataShow)',
    lbl_room_notes: 'التجهيزات والملاحظات / الموقع والطابق',
    btn_save_room: 'حفظ بيانات القاعة',
    btn_print_schedule: 'طباعة الجدول',
    title_groupes: 'الأفواج',
    btn_new_group: 'فوج جديد',
    kpi_active_groups: 'الأفواج النشطة',
    kpi_enrolled_students: 'التلاميذ المسجلون',
    kpi_fill_rate: 'نسبة الامتلاء',
    list_groups: 'قائمة الأفواج',
    th_group_name: 'اسم الفوج',
    th_eleves_cap: 'التلاميذ / المقاعد',
    th_salle: 'القاعة',
    th_statut: 'الحالة',
    greeting_morning: 'صباح الخير',
    greeting_afternoon: 'طاب مساؤكم',
    greeting_evening: 'مساء الخير',
    kpi_eleves: 'التلاميذ النشطون',
    kpi_inscriptions: 'التسجيلات',
    kpi_today: 'المحصّل اليوم',
    kpi_month: 'المحصّل هذا الشهر',
    kpi_unpaid: 'مجموع الديون',
    kpi_profs: 'الأساتذة',
    kpi_matieres: 'المواد',
    chart_title: 'تطور المداخيل المالية — 12 شهراً',
    alerts_title: 'التنبيهات والإشعارات',
    all_good: 'كل شيء على ما يرام',
    recent_payments: 'آخر المدفوعات المستلمة',
    recent_unpaid: 'آخر الاشتراكات غير المسددة',
    btn_view_reports: 'عرض التقارير',
    btn_view_all: 'عرض الكل',
    btn_batch_badges: 'طباعة البطاقات',
    th_eleve: 'التلميذ',
    th_matiere: 'المادة',
    th_montant: 'المبلغ',
    th_date: 'التاريخ',
    th_restedu: 'المبلغ المتبقي',
    th_nom: 'اللقب',
    th_prenom: 'الاسم',
    pointage_title: 'تسجيل الحضور السريع بالباركود',
    pointage_subtitle: 'مرر بطاقة التلميذ عبر القارئ أو أدخل رقم قيده لتسجيل حضوره والتأكد من دفع اشتراكه فوراً.',
    tip_douchette_ready: 'قارئ الباركود (Douchette USB) متصل وجاهز للمسح المباشر',
    tip_douchette_ready_entrance: 'قارئ الباركود (Douchette) جاهز للمسح السريع والتلقائي',
    btn_scan: 'تسجيل الحضور',
    title_eleves: 'التلاميذ',
    btn_add_student: 'تلميذ جديد',
    nav_parents: 'أولياء التلاميذ',
    title_parents: 'أولياء التلاميذ',
    subtitle_parents: 'إدارة الأولياء، متابعة الأبناء المتمدرسين والتحكم بنسب التخفيض الممنوحة ومستحقات العائلات',
    btn_add_parent: 'إضافة ولي جديد',
    kpi_parents_total: 'إجمالي الأولياء المسجلين',
    kpi_parents_discount: 'أولياء بتخفيض عائلي',
    kpi_parents_children: 'إجمالي الأبناء المتمدرسين',
    kpi_parents_debts: 'مستحقات ديون العائلات',
    planning_kpi_groups: 'الحصص / الأفواج',
    planning_kpi_hours: 'الحجم الساعي الأسبوعي',
    planning_kpi_teachers: 'الأساتذة المبرمجون',
    planning_kpi_rooms: 'القاعات المستعملة',
    th_parent_nom: 'الولي / المسؤول',
    th_enfants_count: 'الأبناء المتمدرسين عندنا',
    th_reduction_pct: 'نسبة التخفيض (%)',
    th_parent_solde: 'مستحقات العائلة',
    lbl_parent: 'ولي التلميذ',
    lbl_parent_fullname: "اسم الولي الكامل (اللقب والاسم) *",
    lbl_parent_phone: "رقم الهاتف الأساسي *",
    lbl_parent_phone_sec: "هاتف ثانوي / واتساب",
    lbl_parent_email: "البريد الإلكتروني",
    lbl_parent_address: "عنوان السكن",
    lbl_parent_discount_title: "نسبة التخفيض الممنوحة للعائلة (%)",
    lbl_parent_discount_hint: "يطبق تلقائياً على اشتراكات أبنائه",
    lbl_parent_notes: "ملاحظات خاصة بالعائلة",
    btn_save_parent: "حفظ بيانات الولي",
    btn_edit_parent: "تعديل بيانات الولي",
    dossier_stat_children: "الأبناء المتمدرسين",
    dossier_stat_discount: "نسبة التخفيض",
    dossier_stat_debts: "مستحقات العائلة المتبقية",
    dossier_title_children: "قائمة الأبناء المتمدرسين بالمؤسسة",
    dossier_title_unpaid: "المستحقات والديون غير المسددة للعائلة",
    dossier_th_student: "الابن / التلميذ",
    dossier_th_group: "الفوج / المادة",
    dossier_th_month: "الشهر",
    dossier_th_amount: "المبلغ المستحق",
    th_nom_prenom: 'الاسم واللقب',
    th_niveau: 'المستوى',
    th_phone: 'الهاتف',
    th_parent: 'ولي الأمر والتواصل',
    lbl_eleve: 'التلميذ',
    profile_kpi_billed: 'إجمالي المفوتر (Facturé)',
    profile_kpi_paid: 'إجمالي المدفوع (Payé)',
    profile_kpi_remaining: 'المبلغ المتبقي (Reste)',
    profile_kpi_payments: 'عدد الدفعات',
    title_paiements: 'المدفوعات ووصولات التسديد',
    btn_new_payment: 'تسجيل دفعة جديدة',
    th_groupe: 'الفوج / المادة',
    th_mode: 'طريقة الدفع',
    title_echeances: 'متابعة الديون والاشتراكات المستحقة',
    th_montant_du: 'المبلغ المستحق',
    title_caisse: 'الخزينة وسجل حركات الصندوق',
    title_enseignants: 'هيئة التدريس (الأساتذة)',
    btn_add_teacher: 'إضافة أستاذ جديد',
    title_planning: 'جدول التوقيت والأفواج',
    title_attendance: "سجل ومتابعة حضور وغياب التلاميذ",
    subtitle_attendance: "تأكيد ومتابعة الحضور والغياب حسب الأفواج، مع استعراض عدد وتواريخ الحصص الشهرية.",
    tab_manual_attendance: "ورقة التحضير اليدوي بالفوج",
    tab_rapid_scan: "المسح السريع بالباركود",
    tab_entrance_pointage: "بوابة المدخل (حضور عام)",
    entrance_title: "بوابة المدخل لتسجيل الحضور السريع (تلاميذ وأساتذة)",
    entrance_subtitle: "مرر بطاقة التلميذ أو الأستاذ عبر الماسح لتسجيل حضوره أو انصرافه فوراً ودون الحاجة لتحديد الفوج.",
    entrance_scan_mode: "نمط تسجيل الحضور",
    entrance_mode_auto: "كشف تلقائي ذكي (دخول / خروج)",
    entrance_mode_in: "تسجيل دخول فقط",
    entrance_mode_out: "تسجيل خروج فقط",
    entrance_kiosk_btn: "وضع ملء الشاشة (Kiosk)",
    stat_students_today: "تلاميذ حاضرون اليوم",
    stat_teachers_today: "أساتذة حاضرون اليوم",
    stat_total_in_school: "إجمالي المتواجدين بالمؤسسة",
    stat_last_scan: "آخر تسجيل حضور",
    title_entrance_live_log: "سجل الحضور اليومي للمدخل",
    btn_print_entrance_journal: "طباعة سجل الحضور",
    th_type: "الصفة",
    th_classe_matiere: "القسم / المادة",
    th_heure_entree: "وقت الدخول",
    th_heure_sortie: "وقت الخروج",
    th_duree: "المدة",
    entrance_empty_state: "مرر بطاقة تلميذ أو أستاذ لعرض سجل الحضور اليومي للمدخل.",
    opt_all_roles: "الكل (تلاميذ وأساتذة)",
    opt_students_only: "التلاميذ فقط",
    opt_teachers_only: "الأساتذة فقط",
    lbl_select_group: "اختيار الفوج الدراسي",
    lbl_session_date: "تاريخ الحصة",
    lbl_session_num: "رقم الحصة",
    lbl_session_topic: "عنوان الدرس / ملاحظات",
    btn_save_attendance: "حفظ سجل الحضور",
    btn_view_matrix: "سجل وشبكة الحصص والمواظبة",
    btn_print_matrix: "طباعة كشف الحصص والمواظبة",
    stat_inscrits: "تلاميذ الفوج",
    stat_total_seances: "الحصص المنجزة",
    stat_presents: "الحاضرون",
    stat_absents: "الغائبون",
    stat_retards: "متأخر / معذور",
    stat_paid_ratio: "الاشتراكات المسددة",
    btn_mark_all_present: "تحديد الكل حاضر",
    btn_mark_all_absent: "تحديد الكل غائب",
    btn_reset: "إعادة ضبط",
    th_contact: "معلومات التواصل",
    th_assiduite_groupe: "مواظبة التلميذ (الحصص)",
    th_cotisation: "اشتراك الشهر الحالي",
    th_etat_presence: "حالة الحضور في هذه الحصة",
    th_notes: "ملاحظات وتوجيهات",
    status_present: "حاضر",
    status_absent: "غائب",
    status_late: "متأخر",
    status_excused: "معذور",
    lbl_legend: "دليل الإشارات:",
    lbl_filter_month: "تصفية حسب الشهر:",
    all_months: "جميع الأشهر (كامل الحصص)",
    lbl_seances_count: "حصص معروضة",
    lbl_avg_presence: "معدل الحضور العام",
    btn_close_session_absent: "إنهاء الحضور وتسجيل البقية غائبين",
    title_modal_close_session: "تأكيد إنهاء الحضور وتسجيل الغائبين",
    note_modal_close_session: "جميع التلاميذ المسجلين في هذا الفوج الذين لم يُسجّل حضورهم بعد، سيتم تسجيلهم تلقائياً كـ (غائبين).",
    btn_confirm_close_absent: "تأكيد وتسجيل الغياب تلقائياً",
    stat_en_attente: "في الانتظار",
    title_live_scanned: "قائمة الحضور اللحظي في هذه الحصة",
    tip_barcode_autofocus: "القارئ جاهز للمسح المتتالي والسريع تلقائياً دون الحاجة للنقر بالفأرة",
    th_heure: "الوقت",
    login_tagline: "نظام إدارة المدارس والمراكز التعليمية الاحترافي",
    login_lbl_role: "حساب المستخدم",
    login_role_admin: "المدير العام (Admin)",
    login_role_auto: "محدد تلقائياً",
    login_lbl_password: "كلمة المرور",
    login_mandatory: "إلزامي",
    login_password_ph: "أدخل كلمة المرور...",
    login_btn_submit: "تسجيل الدخول",
    login_secured: "نظام محمي ومشفر",
    btn_logout: "تسجيل الخروج",
    login_err_empty: "يرجى كتابة كلمة المرور",
    login_err_invalid: "كلمة المرور غير صحيحة، يرجى المحاولة مجدداً",
    dev_credit_label: "البرنامج من طرف",
    dev_phone_label: "الهاتف / الدعم الفني",
    tab_apropos: "حول البرنامج والمطور",
    about_title: "حول نظام EDUMIND والمطور",
    about_desc: "نظام احترافي متكامل لإدارة المدارس ومراكز الدروس الخصوصية، الطلاب، المدفوعات ونقاط الحضور.",
    about_contact_btn: "اتصال هاتفي",
    about_whatsapp_btn: "واتساب",
    admin_developer_lbl: "البرنامج من طرف",
    admin_phone_lbl: "رقم الهاتف / الدعم",
    license_title: "حماية وتفعيل البرنامج",
    license_subtitle: "نظام حماية التراخيص — Veloce Craft",
    license_alert_trial_expired: "انتهت الفترة التجريبية (7 أيام). يتطلب تشغيل هذا البرنامج على هذا الحاسوب تفعيل كود الترخيص.",
    license_alert_tampered: "تنبيه أمني: تم رصد تغيير غير معتاد في تاريخ وساعة النظام.",
    hwid_label: "معرّف هذا الحاسوب الفريد (Hardware ID) :",
    btn_copy: "نسخ",
    btn_copied: "تم النسخ !",
    hwid_hint: "قم بنسخ هذا المعرّف وإرساله للمطور Veloce Craft للحصول على كود التفعيل الدائم الخاص بجهازك.",
    license_key_label: "أدخل كود التفعيل (License Key) :",
    btn_activate: "تفعيل البرنامج الآن",
    btn_activating: "جاري التحقق...",
    btn_close: "إغلاق",
    trial_banner_txt: "نسخة تجريبية مجانية : متبقي {days} يوم",
    btn_enter_license: "تفعيل الترخيص الدائم",
    btn_backup_download: "تحميل نسخة احتياطية فورية (.sqlite)",
    btn_restore_sqlite: "استرجاع قاعدة بيانات (.sqlite)",
    btn_restore_archive: "استرجاع",
    btn_download_card_pdf: "تحميل البطاقة (PDF)",
    setting_lic_title: "حالة ترخيص وتفعيل البرنامج",
    setting_lic_hwid: "معرّف الجهاز الفريد (HWID)",
    setting_lic_status: "حالة الترخيص",
    setting_lic_type: "نوع الترخيص",
    setting_lic_expiry: "تاريخ انتهاء الترخيص",
    setting_lic_btn_renew: "إدخال كود ترخيص جديد",
    btn_export_payments: "تحميل المدفوعات",
    lbl_payments_count: "عملية معروضة",
    lbl_total_collected: "إجمالي المداخيل",
    modal_export_title: "تحميل وتصدير سجل المدفوعات",
    lbl_select_period_mode: "طريقة تحديد الفترة للتصدير :",
    opt_single_month: "شهر محدد",
    opt_multi_months: "عدة أشهر",
    opt_range_months: "مجال زمني",
    opt_all_months: "جميع الأشهر",
    lbl_choose_single_month: "اختر الشهر المطلوب :",
    lbl_choose_multi_months: "حدد الأشهر المطلوبة للتصدير :",
    btn_select_all: "تحديد الكل",
    btn_deselect_all: "إلغاء التحديد",
    lbl_from_month: "من شهر :",
    lbl_to_month: "إلى شهر :",
    msg_export_all_hint: "سيتم استخراج وتصدير السجل الكامل لجميع عمليات الدفع المسجلة في النظام.",
    lbl_filter_group: "تصفية حسب الفوج (اختياري) :",
    lbl_filter_method: "وسيلة الدفع (اختياري) :",
    lbl_count_payments: "عدد العمليات",
    lbl_count_students: "التلاميذ المعنيون",
    lbl_total_amount: "إجمالي المبالغ",
    btn_download_excel: "تحميل ملف Excel",
    btn_print_report: "طباعة تقرير PDF",
    btn_cancel: "إلغاء",
    btn_export_caisse: "تحميل سجل الخزينة",
    modal_export_caisse_title: "تحميل وتصدير سجل الخزينة والصندوق",
    lbl_select_caisse_period_mode: "طريقة تحديد الفترة للتصدير :",
    opt_all_movements: "كامل السجل",
    opt_range_dates: "مجال زمني / تواريخ",
    lbl_from_date: "من تاريخ :",
    lbl_to_date: "إلى تاريخ :",
    lbl_filter_caisse_type: "نوع الحركة :",
    opt_all_flux: "كل الحركات (المداخيل والمصاريف)",
    opt_entrees_only: "مداخيل فقط (+)",
    opt_sorties_only: "مصاريف فقط (-)",
    opt_all_categories: "كل التصنيفات",
    opt_all_methods: "كل الوسائل",
    lbl_count_caisse_ops: "عدد الحركات",
    lbl_total_entrees: "إجمالي المداخيل",
    lbl_total_sorties: "إجمالي المصاريف",
    lbl_solde_net: "الرصيد الصافي",
    msg_export_caisse_all_hint: "سيتم استخراج وتصدير السجل الكامل لجميع حركات الصندوق والخزينة (مداخيل ومصاريف) المسجلة في النظام.",
    lbl_caisse_movements_count: "حركات معروضة",
    btn_quick_excel: "Excel السريع",
    modal_card_title: "بطاقة التلميذ المدرسية",
    card_school_sub: "مؤسسة تعليمية وتدريبية",
    card_tag_student: "بطاقة مدرسية • رسمي",
    card_verified: "رسمي",
    lbl_card_level: "المستوى :",
    lbl_card_phone: "الهاتف :",
    card_barcode_sublabel: "بطاقة الدخول وتسجيل الحضور الذكي",
    btn_copy_code: "نسخ الكود",
    btn_print_card: "طباعة البطاقة (CR-80)",
    theme_emerald: "أخضر زمردي",
    theme_purple: "بنفسجي ملكي",
    theme_gold: "أسود وذهبي",
    theme_white: "أبيض اقتصادي",
    modal_teacher_card_title: "بطاقة الأستاذ المهنية",
    card_teacher_school_sub: "هيئة التدريس والتعليم المتميز",
    card_tag_teacher: "أستاذ",
    lbl_teacher_subject: "المادة :",
    card_teacher_barcode_sublabel: "بطاقة الدخول وتسجيل الحضور والتحضير",
    modal_batch_badges_title: "طباعة بطاقات متعددة",
    modal_batch_badges_desc: "توليد وطباعة بطاقات مدرسية احترافية مع الباركود بتنسيق A4 (8 بطاقات لكل ورقة)",
    lbl_filter_level: "تصفية حسب المستوى الدراسي",
    opt_all_levels: "-- كل المستويات --",
    opt_all_groups: "-- كل الأفواج --",
    lbl_available_students: "قائمة التلاميذ المتاحين",
    lbl_selected_students: "تم تحديد",
    lbl_badges_theme: "تصميم ولون البطاقات :",
    lbl_a4_format: "ورق A4 قياسي",
    lbl_cards_per_page: "8 بطاقات لكل ورقة",
    btn_print_badges: "طباعة البطاقات المحددة",
    btn_new_enrollment: "تسجيل تلميذ في فوج",
    title_inscriptions: "تسجيلات التلاميذ في الأفواج",
    th_matricule: "رقم القيد",
    th_groupe_cours: "الفوج الدراسي",
    th_matiere_prof: "المادة والأستاذ",
    th_tarif: "السعر الصافي (دج)",
    lbl_filter_month: "الشهر :",
    btn_prev: "السابق",
    wizard_title: "تسجيل تلميذ في فوج دراسي",
    wizard_subtitle: "خطوات متسلسلة وسهلة لإتمام عملية التسجيل",
    wizard_step1_title: "1. التلميذ",
    wizard_step1_sub: "اختيار التلميذ",
    wizard_step2_title: "2. المستوى",
    wizard_step2_sub: "المستوى الدراسي",
    wizard_step3_title: "3. المادة والفوج",
    wizard_step3_sub: "الفوج والتأكيد",
    wizard_pane1_heading: "الخطوة الأولى: ابحث عن التلميذ واختره",
    wizard_pane1_desc: "اكتب اسم التلميذ، لقبه، رقم القيد، أو رقم الهاتف للاختيار السريع.",
    wizard_pane2_heading: "الخطوة الثانية: حدد المستوى الدراسي المطلوب",
    wizard_pane2_desc: "اختر المستوى الدراسي لعرض الأفواج المتاحة الخاصة بهذا المستوى فقط.",
    wizard_selected_student_lbl: "التلميذ المختار :",
    wizard_pane3_heading: "الخطوة الثالثة: اختر المادة والفوج الدراسي وأكد التسجيل",
    wizard_pane3_desc: "اختر الفوج المناسب وحدد التخفيض الشهري إن وجد ثم أكد التسجيل.",
    wizard_lbl_reg_date: "تاريخ التسجيل",
    wizard_lbl_discount: "تخفيض شهري (دج)",
    wizard_lbl_free: "مجاني",
    wizard_lbl_net_price: "المبلغ الصافي شهرياً",
    wizard_btn_confirm: "تأكيد التسجيل",
    wizard_btn_confirm_pay: "تسجيل ودفع فوري",
    settings_update_title: 'التحديثات السحابية التلقائية',
    settings_update_subtitle: 'احصل على آخر التحسينات بنقرة زر دون فقدان بياناتك أو إعادة تثبيت البرنامج.',
    btn_check_update: 'فحص التحديثات السحابية',
    btn_view_update: 'تحديث البرنامج الآن',
    btn_install_update: 'تثبيت التحديث الآن',
    update_modal_subtitle: 'تحديث سحابي آمن وتلقائي',
    update_current_ver: 'الإصدار الحالي',
    update_new_ver: 'الإصدار الجديد',
    update_notes_title: 'الجديد في هذا التحديث :',
    update_safety_note: 'بيانات المدرسة (الطلاب، المدفوعات، الصندوق) والترخيص محفوظة ومحمية 100%.',
    btn_import_students: "استيراد (Excel / الرقمنة)",
    import_modal_title: "استيراد قائمة التلاميذ (Excel / الرقمنة)",
    import_modal_subtitle: "استيراد وتحديث بيانات التلاميذ تلقائياً من ملفات Excel، الرقمنة، أو ملفات Eleve",
    import_tab_excel: "استيراد عبر نموذج Excel (جديد)",
    import_tab_eleve: "الاستيراد من ملف Eleve",
    import_tab_rakmana: "استيراد HTML (منصة الرقمنة)",
    import_info_text: "يتعرف البرنامج تلقائياً على الأعمدة: رقم التعريف المدرسي، رقم الفوج، الصفة، الجنس، المستوى الدراسي، اللقب، الاسم، تاريخ الميلاد، مكان الميلاد، إسم الأب، العنوان، ورقم الهاتف.",
    import_btn_download_template: "تحميل نموذج Excel فارغ (Modèle)",
    import_drop_prompt: "اسحب وأفلت ملف Excel أو الرقمنة هنا",
    import_drop_browse: "أو اضغط لاختيار الملف من جهازك (.xlsx, .xls, .csv, .html)",
    import_lbl_default_level: "المستوى الدراسي الافتراضي",
    import_opt_level_auto: "-- اختياري (أو التعرف من الملف) --",
    import_lbl_default_group: "الفوج / القسم الدراسي",
    import_opt_group_none: "-- بدون تسجيل في فوج حالياً --",
    import_lbl_duplicate_strategy: "معالجة التلاميذ المكررين",
    import_opt_duplicate_skip: "تخطي الموجودين مسبقاً (تجنب التكرار)",
    import_opt_duplicate_update: "تحديث وتصحيح بيانات الموجودين",
    import_lbl_matricule_strategy: "رقم التعريف المدرسي (Matricule)",
    import_opt_mat_keep: "الاعتماد على رقم التعريف من الملف (مع توليد تلقائي لمن ليس لديه)",
    import_opt_mat_gen: "توليد أرقام تسجيل جديدة للجميع (EDU-2026-XXXX)",
    import_preview_heading: "معاينة البيانات قبل الحفظ",
    th_num_col: "#",
    th_matricule_col: "رقم التعريف",
    th_nom_col: "اللقب",
    th_prenom_col: "الاسم",
    th_genre_col: "الجنس",
    th_niveau_col: "المستوى الدراسي",
    th_naissance_col: "تاريخ الميلاد",
    th_lieu_col: "مكان الميلاد",
    th_parent_col: "إسم الأب",
    th_adresse_col: "العنوان",
    th_groupe_col: "رقم الفوج",
    th_statut_col: "الحالة",
    import_btn_confirm: "تأكيد وحفظ الاستيراد",
    import_btn_executing: "جاري الاستيراد والحفظ...",
    btn_bulk_enrollment: "تسجيل في الأفواج (تسجيل متعدد)",
    bulk_enroll_title: "تسجيل التلاميذ في الأفواج (تسجيل متعدد)",
    bulk_enroll_subtitle: "اختر قائمة التلاميذ والأفواج المطلوبة بضغطة زر لإتمام التسجيل دفعة واحدة",
    bulk_panel_students: "1. اختيار التلاميذ",
    bulk_select_all_students: "تحديد كل الظاهرين",
    bulk_panel_groups: "2. اختيار الأفواج المستهدفة",
    bulk_select_all_groups: "تحديد كل الأفواج",
    bulk_lbl_sel_students: "التلاميذ المختارون",
    bulk_lbl_sel_groups: "الأفواج المختارة",
    bulk_lbl_total_enrollments: "إجمالي عمليات التسجيل",
    bulk_btn_confirm: "تأكيد التسجيل الجماعي",
    bulk_btn_executing: "جاري التسجيل الجماعي...",
    th_annee_scolaire: "السنة الدراسية :",
    fast_pay_title: "الصندوق السريع والدفع المتعدد (متعدد الأفواج والأشهر)",
    fast_pay_subtitle: "ابحث عن تلميذ أو ولي لاستخلاص عدة اشتراكات وإصدار وصل دفع موحد",
    fast_pay_search_placeholder: "ابحث عن تلميذ بالاسم، اللقب أو رقم القيد...",
    fast_pay_mode_student: "دفع لتلميذ",
    fast_pay_mode_parent: "دفع عائلي (بالولي)",
    fast_pay_no_student_hint: "اكتب اسم التلميذ أو رقم قيده في الحقل أعلاه لعرض جميع أفواجه ومستحقاته وسدادها دفعة واحدة",
    fast_pay_no_parent_hint: "ابحث باسم الولي لعرض جميع أبنائه وأفواجهم وتسديد المستحقات دفعة واحدة أو دفع جزء من المبلغ",
    fast_pay_no_parent_sub: "يمكنك إدخال أي مبلغ جزئي وتوزيعه تلقائياً على الأبناء، مع حفظ أي متبقي كدين وإصدار وصل دفع عائلي موحد.",
    fast_pay_selected_courses: "الأفواج والاشتراكات المسجل بها",
    fast_pay_lbl_selected_groups: "الأفواج المحددة",
    fast_pay_lbl_total_due: "إجمالي المستحق",
    fast_pay_lbl_total_paid: "المبلغ المقبوض",
    fast_pay_btn_submit: "تأكيد الدفع وطباعة الوصل الموحد",
    fast_pay_btn_change_student: "تغيير التلميذ",
    fast_pay_status_paid: "خالص",
    fast_pay_status_unpaid: "غير مسدد",
    fast_pay_status_partial: "مسدد جزئياً",
    tab_etablissement: "المؤسسة",
    tab_securite: "الأمان وكلمة المرور",
    tab_facturation: "الفوترة ومواعيد الاستحقاق",
    tab_caisse: "تصنيفات الصندوق",
    tab_donnees: "النسخ الاحتياطي والاسترجاع",
    tab_reseau: "الشبكة والربط المتعدد",
    tab_administration: "الإدارة والسنة الدراسية",
    tab_apropos: "حول البرنامج والدعم",
    network_panel_title: "الشبكة المحلية والربط متعدد الأجهزة (LAN)",
    th_enseignant: "الأستاذ",
    lbl_filter_category: "التصنيف :",
    batch_selected_text: "تلميذ محدد",
    modal_payroll_slip_title: "كشف أتعاب الأستاذ",
    fast_pay_no_student_sub: "ستظهر نتائج البحث والأفواج فورياً مع إمكانية تحديد عدة أشهر أو أفواج وإصدار وصل موحد",
    opt_all_months: "جميع الأشهر",
    opt_all_flux: "كل الحركات (المداخيل والمصاريف)",
    opt_entrees_only: "مداخيل فقط (+)",
    opt_sorties_only: "مصاريف فقط (-)",
    opt_all_categories: "كل التصنيفات",
    opt_all_methods: "كل الوسائل",
    opt_method_cash: "نقداً / Espèces",
    opt_method_baridimob: "بريدي موب / BaridiMob / CCP",
    opt_method_cheque: "شيك / Chèque",
    lbl_count_caisse_ops: "عدد الحركات",
    lbl_caisse_movements_count: "حركات معروضة",
    lbl_total_entrees: "إجمالي المداخيل",
    lbl_total_sorties: "إجمالي المصاريف",
    lbl_solde_net: "الرصيد الصافي",
    btn_print_report: "طباعة تقرير PDF",
    btn_download_excel: "تحميل ملف Excel (CSV)",
    btn_export_caisse: "تحميل سجل الخزينة",
    btn_export_payments: "تحميل المدفوعات",
    btn_quick_excel: "Excel السريع"
  }
};

class EdumindApp {
  constructor() {
    this.lang = localStorage.getItem('edumind_lang') || 'fr';
    this.theme = localStorage.getItem('edumind_theme') || 'dark';
    this.sidebarCollapsed = localStorage.getItem('edumind_sidebar_collapsed') === 'true';
    this.currentView = 'dashboard';
    this.revenueChart = null;

    // Cache
    this.students = [];
    this.groups = [];
    this.levels = [];
    this.teachers = [];
    this.subjects = [];
    this.rooms = [];
    this.settings = {};

    // Batch Badges Selection State
    this.selectedStudentIds = new Set();
    this.batchCardTheme = 'emerald';
    this.currentCardTheme = 'emerald';
    this.batchModalSelectedIds = new Set();
    this.batchModalAllStudents = [];

    // Attendance & Session state
    this.currentAttendanceGroup = null;
    this.currentAttendanceDate = new Date().toISOString().split('T')[0];
    this.attendanceSheetData = null;
    this.attendanceRecords = {};
    this.attendanceMode = 'sheet';

    // Entrance Gate Pointage state (Students & Teachers)
    this.entranceMode = 'auto'; // 'auto', 'in', 'out'
    this.entranceDate = new Date().toISOString().split('T')[0];
    this.entranceRecords = [];
    this.entranceClockTimer = null;
    this.isEntranceFullscreen = false;

    // Authentication State
    this.isAuthenticated = sessionStorage.getItem('edumind_auth') === 'true' || localStorage.getItem('edumind_auth') === 'true';
    this.currentUser = JSON.parse(sessionStorage.getItem('edumind_user') || localStorage.getItem('edumind_user') || 'null');

    this.initAudioContext();
  }

  initAudioContext() {
    try {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
    } catch (e) {
      console.warn('Web Audio API not supported');
    }
  }

  playChime(type = 'success') {
    if (!this.audioCtx) return;
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    if (type === 'success') {
      // Pleasant high chime
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, this.audioCtx.currentTime); // D5
      osc.frequency.setValueAtTime(880, this.audioCtx.currentTime + 0.1); // A5
      gain.gain.setValueAtTime(0.3, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.5);
      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.5);
    } else if (type === 'warning') {
      // Distinct double notification beep for unpaid / already scanned
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, this.audioCtx.currentTime);
      osc.frequency.setValueAtTime(554.37, this.audioCtx.currentTime + 0.12); // C#5
      gain.gain.setValueAtTime(0.3, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.45);
      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.45);
    } else {
      // Error buzzer
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, this.audioCtx.currentTime);
      gain.gain.setValueAtTime(0.3, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.4);
      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.4);
    }
  }

  escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  debounce(func, wait = 300) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  showToast(message, type = 'info') {
    let container = document.getElementById('edumindToastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'edumindToastContainer';
      container.className = 'edumind-toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `edumind-toast toast-${type}`;
    
    let icon = 'fa-circle-info';
    if (type === 'success') icon = 'fa-circle-check';
    else if (type === 'warning') icon = 'fa-triangle-exclamation';
    else if (type === 'error') icon = 'fa-circle-xmark';

    toast.innerHTML = `
      <i class="fa-solid ${icon}"></i>
      <span class="toast-message">${this.escapeHtml(message)}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('fade-out');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, 3500);
  }

  async init() {
    this.initSidebar();
    this.setupEventListeners();
    this.applyTheme();
    this.applyLanguage();
    this.updateGreetingDate();

    // Check License & 3-Day Trial Status
    const lic = await this.checkLicense();
    if (lic && !lic.isLicensed) {
      this.openActivationModal(false);
      return;
    }

    // Check Authentication Gate
    if (!this.isAuthenticated) {
      this.showLoginScreen();
      return;
    } else {
      this.hideLoginScreen(false);
    }

    // Initial Data Fetch (Only when authenticated)
    await this.loadSettings();
    await this.loadConfigurationData();
    await this.loadDashboardData();

    // Check for Cloud Updates in background (silent)
    this.checkForCloudUpdates(true);
  }

  showLoginScreen() {
    const screen = document.getElementById('loginScreen');
    if (screen) {
      screen.classList.add('active');
      const passInput = document.getElementById('loginPassword');
      if (passInput) {
        passInput.value = '';
        setTimeout(() => passInput.focus(), 150);
      }
      const errAlert = document.getElementById('loginErrorAlert');
      if (errAlert) errAlert.style.display = 'none';
    }
  }

  hideLoginScreen(animated = true) {
    const screen = document.getElementById('loginScreen');
    if (screen) {
      if (animated) {
        screen.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
        screen.style.opacity = '0';
        screen.style.pointerEvents = 'none';
        setTimeout(() => {
          screen.classList.remove('active');
          screen.style.opacity = '';
          screen.style.pointerEvents = '';
        }, 360);
      } else {
        screen.classList.remove('active');
      }
    }
  }

  toggleLoginPasswordVisibility() {
    const input = document.getElementById('loginPassword');
    const eyeIcon = document.getElementById('eyeIconLogin');
    if (!input) return;
    if (input.type === 'password') {
      input.type = 'text';
      if (eyeIcon) {
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
      }
    } else {
      input.type = 'password';
      if (eyeIcon) {
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
      }
    }
  }

  toggleLanguageFromLogin() {
    this.toggleLanguage();
    const btnText = document.getElementById('loginLangText');
    if (btnText) {
      btnText.textContent = this.lang === 'fr' ? 'العربية' : 'Français';
    }
  }

  async handleLogin() {
    const passwordInput = document.getElementById('loginPassword');
    const roleInput = document.getElementById('loginRole');
    const errAlert = document.getElementById('loginErrorAlert');
    const errMsg = document.getElementById('loginErrorMessage');
    const submitBtn = document.getElementById('btnLoginSubmit');
    const btnText = submitBtn?.querySelector('.btn-login-text');
    const btnSpinner = submitBtn?.querySelector('.btn-login-spinner');
    const btnIcon = submitBtn?.querySelector('.btn-login-icon');

    const password = passwordInput?.value?.trim();
    const role = roleInput?.value || 'admin';

    const isAr = this.lang === 'ar';
    const dict = i18n[this.lang] || i18n.fr;

    if (!password) {
      if (errAlert && errMsg) {
        errMsg.textContent = dict.login_err_empty || 'Veuillez saisir votre mot de passe';
        errAlert.style.display = 'flex';
      }
      this.playChime('error');
      passwordInput?.focus();
      return;
    }

    // Loading UI State
    if (submitBtn) submitBtn.disabled = true;
    if (btnText) btnText.style.opacity = '0.5';
    if (btnIcon) btnIcon.style.display = 'none';
    if (btnSpinner) btnSpinner.style.display = 'inline-block';
    if (errAlert) errAlert.style.display = 'none';

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role, password })
      });
      const data = await res.json();

      if (data.success) {
        this.isAuthenticated = true;
        this.currentUser = data.user;
        sessionStorage.setItem('edumind_auth', 'true');
        sessionStorage.setItem('edumind_user', JSON.stringify(data.user));

        this.playChime('success');
        this.hideLoginScreen(true);

        // Fetch application data
        await this.loadSettings();
        await this.loadConfigurationData();
        await this.loadDashboardData();
      } else {
        if (errAlert && errMsg) {
          errMsg.textContent = isAr ? 'كلمة المرور غير صحيحة، يرجى المحاولة مجدداً' : (data.error || 'Mot de passe incorrect');
          errAlert.style.display = 'flex';
          errAlert.classList.remove('errorShake');
          void errAlert.offsetWidth;
          errAlert.classList.add('errorShake');
        }
        this.playChime('warning');
        if (passwordInput) {
          passwordInput.select();
          passwordInput.focus();
        }
      }
    } catch (e) {
      console.error('Login error:', e);
      if (errAlert && errMsg) {
        errMsg.textContent = isAr ? 'تعذر الاتصال بالخادم' : 'Erreur de connexion au serveur';
        errAlert.style.display = 'flex';
      }
      this.playChime('error');
    } finally {
      if (submitBtn) submitBtn.disabled = false;
      if (btnText) btnText.style.opacity = '1';
      if (btnIcon) btnIcon.style.display = 'inline-block';
      if (btnSpinner) btnSpinner.style.display = 'none';
    }
  }

  logout() {
    this.isAuthenticated = false;
    this.currentUser = null;
    sessionStorage.removeItem('edumind_auth');
    sessionStorage.removeItem('edumind_user');
    localStorage.removeItem('edumind_auth');
    localStorage.removeItem('edumind_user');

    this.playChime('warning');
    this.showLoginScreen();
  }

  // ==========================================================================
  // HARDWARE LOCK, TRIAL & LICENSING SYSTEM (VELOCE CRAFT)
  // ==========================================================================
  async checkLicense() {
    try {
      const res = await fetch('/api/license/status');
      const data = await res.json();
      if (data.success) {
        this.licenseStatus = data;
        this.updateLicenseUI(data);
        return data;
      }
      return null;
    } catch (err) {
      console.error('Erreur de vérification de licence :', err);
      return null;
    }
  }

  updateLicenseUI(status) {
    if (!status) return;

    // 1. Update HWID displays
    const hwidEl = document.getElementById('hwidDisplay');
    if (hwidEl && status.hwid) {
      hwidEl.textContent = status.hwid;
    }
    const settingHwidEl = document.getElementById('settingLicHwid');
    if (settingHwidEl && status.hwid) {
      settingHwidEl.textContent = status.hwid;
    }

    // 2. Pre-fill WhatsApp link with HWID
    const btnWa = document.getElementById('btnWhatsappLic');
    if (btnWa && status.hwid) {
      const waMsg = encodeURIComponent(
        `Bonjour Veloce Craft, voici mon HWID pour l'activation EDUMIND :\n${status.hwid}`
      );
      btnWa.href = `https://wa.me/213552225150?text=${waMsg}`;
    }

    // 3. Trial Banner Handling
    const banner = document.getElementById('trialWarningBanner');
    const bannerText = document.getElementById('trialBannerText');
    if (status.isTrial && status.status === 'trial') {
      if (banner) banner.style.display = 'flex';
      if (bannerText) {
        const isAr = this.lang === 'ar';
        const dict = i18n[this.lang] || i18n.fr;
        const msgTpl = dict.trial_banner_txt || (isAr ? "نسخة تجريبية مجانية : متبقي {days} يوم" : "Version d'essai gratuite : reste {days} jour(s)");
        bannerText.textContent = msgTpl.replace('{days}', status.trialDaysRemaining);
      }
    } else {
      if (banner) banner.style.display = 'none';
    }

    // 4. Modal Lock Handling
    const modal = document.getElementById('licenseModal');
    const alertMsg = document.getElementById('licenseAlertMsg');
    const cancelBtn = document.getElementById('btnCancelActivation');

    if (!status.isLicensed) {
      if (modal) modal.style.display = 'flex';
      if (cancelBtn) cancelBtn.style.display = 'none';

      if (alertMsg) {
        if (status.status === 'tampered') {
          alertMsg.textContent = i18n[this.lang]?.license_alert_tampered || 'Modification de l\'heure système détectée.';
        } else {
          alertMsg.textContent = i18n[this.lang]?.license_alert_trial_expired || status.message;
        }
      }
    } else {
      if (!this._activationModalExplicitlyOpen && modal) {
        modal.style.display = 'none';
      }
    }

    // 5. Update Settings Information Card
    const licBadgeEl = document.getElementById('settingLicStatusBadge');
    const licTypeEl = document.getElementById('settingLicType');
    const licExpiryEl = document.getElementById('settingLicExpiry');
    if (licBadgeEl) {
      if (status.status === 'licensed') {
        licBadgeEl.className = 'badge-license active';
        licBadgeEl.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${this.lang === 'ar' ? 'ترخيص مفعل' : 'Licence Active'}`;
      } else if (status.isTrial) {
        licBadgeEl.className = 'badge-license trial';
        licBadgeEl.innerHTML = `<i class="fa-solid fa-hourglass-half"></i> ${this.lang === 'ar' ? `فترة تجريبية (${status.trialDaysRemaining} أيام)` : `Période d'essai (${status.trialDaysRemaining}j)`}`;
      } else {
        licBadgeEl.className = 'badge-license expired';
        licBadgeEl.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> ${this.lang === 'ar' ? 'منتهي الصلاحية' : 'Expirée'}`;
      }
    }
    if (licTypeEl) {
      licTypeEl.textContent = status.licenseType === 'lifetime'
        ? (this.lang === 'ar' ? 'ترخيص دائم (مدى الحياة)' : 'Permanente (À vie)')
        : (status.licenseType === 'annual' ? (this.lang === 'ar' ? 'ترخيص سنوي' : 'Annuelle') : (this.lang === 'ar' ? 'نسخة تجريبية 7 أيام' : 'Essai 7 jours'));
    }
    if (licExpiryEl) {
      licExpiryEl.textContent = status.licenseType === 'lifetime' || !status.expiryDate
        ? (this.lang === 'ar' ? 'دائم (بدون انتهاء)' : 'Illimité (À vie)')
        : new Date(status.expiryDate).toLocaleDateString(this.lang === 'ar' ? 'ar-DZ' : 'fr-FR');
    }
  }

  openActivationModal(allowCancel = false) {
    this._activationModalExplicitlyOpen = true;
    const modal = document.getElementById('licenseModal');
    const cancelBtn = document.getElementById('btnCancelActivation');
    const errBox = document.getElementById('activationErrorAlert');
    const keyInput = document.getElementById('inputLicenseKey');
    if (modal) modal.style.display = 'flex';
    if (cancelBtn) cancelBtn.style.display = allowCancel ? 'inline-flex' : 'none';
    if (errBox) errBox.style.display = 'none';
    if (keyInput) {
      keyInput.value = '';
      setTimeout(() => keyInput.focus(), 150);
    }
    if (this.licenseStatus) {
      this.updateLicenseUI(this.licenseStatus);
    } else {
      this.checkLicense();
    }
  }

  closeActivationModal() {
    this._activationModalExplicitlyOpen = false;
    const modal = document.getElementById('licenseModal');
    if (modal) modal.style.display = 'none';
  }

  copyHWID() {
    const hwidText = document.getElementById('hwidDisplay')?.textContent;
    if (!hwidText) return;
    navigator.clipboard.writeText(hwidText).then(() => {
      const btn = document.getElementById('btnCopyHWID');
      if (btn) {
        const origHtml = btn.innerHTML;
        const dict = i18n[this.lang] || i18n.fr;
        btn.innerHTML = `<i class="fa-solid fa-check"></i> <span>${dict.btn_copied || 'Copié !'}</span>`;
        btn.classList.add('copied');
        setTimeout(() => {
          btn.innerHTML = origHtml;
          btn.classList.remove('copied');
        }, 2500);
      }
    }).catch(() => {
      alert(hwidText);
    });
  }

  async submitActivation() {
    const keyInput = document.getElementById('inputLicenseKey');
    const errBox = document.getElementById('activationErrorAlert');
    const errMsg = document.getElementById('activationErrorMsg');
    const submitBtn = document.getElementById('btnSubmitActivation');

    const key = keyInput?.value?.trim();
    if (!key) return;

    if (errBox) errBox.style.display = 'none';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> <span>${i18n[this.lang]?.btn_activating || 'Vérification...'}</span>`;
    }

    try {
      const res = await fetch('/api/license/activate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key })
      });
      const data = await res.json();

      if (data.success) {
        this.playChime('success');
        this.licenseStatus = data.status;
        this.closeActivationModal();
        this.updateLicenseUI(data.status);
        alert(data.message || (this.lang === 'ar' ? 'تم تفعيل الترخيص بنجاح !' : 'Licence activée avec succès !'));
        location.reload();
      } else {
        this.playChime('error');
        if (errBox && errMsg) {
          errMsg.textContent = data.error || (this.lang === 'ar' ? 'كود التفعيل غير صالح' : 'Clé de licence non valide');
          errBox.style.display = 'flex';
        }
      }
    } catch (err) {
      this.playChime('error');
      if (errBox && errMsg) {
        errMsg.textContent = this.lang === 'ar' ? 'تعذر الاتصال بالخادم' : 'Erreur de communication avec le serveur';
        errBox.style.display = 'flex';
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<i class="fa-solid fa-key"></i> <span>${i18n[this.lang]?.btn_activate || 'Activer la licence'}</span>`;
      }
    }
  }

  // ==========================================================================
  // CLOUD AUTO-UPDATER SYSTEM (VELOCE CRAFT)
  // ==========================================================================
  async checkForCloudUpdates(silent = false) {
    const btn = document.getElementById('btnManualCheckUpdate');
    const resultArea = document.getElementById('settingUpdateResultArea');
    const currentBadge = document.getElementById('settingCurrentVersionBadge');
    const banner = document.getElementById('updateAvailableBanner');
    const bannerText = document.getElementById('updateBannerText');

    if (!silent && btn) {
      btn.disabled = true;
      btn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> <span>${this.lang === 'ar' ? 'جاري الفحص...' : 'Vérification...'}</span>`;
    }

    try {
      const res = await fetch('/api/updates/check');
      const data = await res.json();

      if (data.currentVersion && currentBadge) {
        currentBadge.textContent = 'v' + data.currentVersion;
      }

      if (data.success && data.updateAvailable) {
        this.availableUpdate = data;

        // Show Top Banner
        if (banner) {
          banner.style.display = 'flex';
          if (bannerText) {
            bannerText.textContent = this.lang === 'ar'
              ? `🚀 يتوفر تحديث جديد للبرنامج (v${data.remoteVersion}) مع ميزات وتحسينات جديدة!`
              : `🚀 Une nouvelle mise à jour (v${data.remoteVersion}) est disponible avec des améliorations !`;
          }
        }

        // Show Card in Settings
        if (resultArea) {
          resultArea.style.display = 'block';
          resultArea.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
              <div>
                <span style="display: inline-flex; align-items: center; gap: 6px; color: #10b981; font-weight: 700; font-size: 14px;">
                  <i class="fa-solid fa-sparkles"></i> ${this.lang === 'ar' ? 'تحديث جديد متوفر :' : 'Nouvelle version disponible :'} <strong>v${data.remoteVersion}</strong>
                </span>
                <p style="margin: 4px 0 0 0; font-size: 13px; color: var(--text-color);">
                  ${this.lang === 'ar' ? (data.notes_ar || data.notes) : data.notes}
                </p>
              </div>
              <button type="button" class="btn-primary" onclick="app.openUpdateModal()" style="background: linear-gradient(135deg, #0ea5e9, #2563eb); font-weight: 700; padding: 8px 16px; border-radius: 8px;">
                <i class="fa-solid fa-bolt"></i> ${this.lang === 'ar' ? 'تثبيت التحديث الآن' : 'Installer la mise à jour'}
              </button>
            </div>
          `;
        }

        // If not silent, open modal directly
        if (!silent) {
          this.openUpdateModal();
        }
      } else {
        if (banner) banner.style.display = 'none';

        if (!silent) {
          if (resultArea) {
            resultArea.style.display = 'block';
            resultArea.innerHTML = `
              <div style="color: #10b981; font-size: 13.5px; font-weight: 600; display: flex; align-items: center; gap: 8px;">
                <i class="fa-solid fa-circle-check"></i>
                <span>${this.lang === 'ar' ? `برنامجك في أحدث إصدار بالفعل (v${data.currentVersion})` : `Votre logiciel EDUMIND est à jour avec la dernière version (v${data.currentVersion}).`}</span>
              </div>
            `;
          }
          this.showToast(this.lang === 'ar' ? `البرنامج محدث إلى آخر إصدار (v${data.currentVersion})` : `EDUMIND est à jour (v${data.currentVersion})`, 'success');
        }
      }
    } catch (err) {
      console.warn('[Auto-Updater] Erreur lors de la vérification des mises à jour:', err.message);
      if (!silent) {
        if (resultArea) {
          resultArea.style.display = 'block';
          resultArea.innerHTML = `
            <div style="color: #ef4444; font-size: 13px; display: flex; align-items: center; gap: 8px;">
              <i class="fa-solid fa-triangle-exclamation"></i>
              <span>${this.lang === 'ar' ? 'تعذر الاتصال بخادم التحديثات (تأكد من الاتصال بالإنترنت).' : 'Impossible de contacter le serveur de mise à jour (vérifiez la connexion internet).'}</span>
            </div>
          `;
        }
      }
    } finally {
      if (!silent && btn) {
        btn.disabled = false;
        btn.innerHTML = `<i class="fa-solid fa-rotate"></i> <span>${i18n[this.lang]?.btn_check_update || 'Vérifier les mises à jour'}</span>`;
      }
    }
  }

  openUpdateModal() {
    if (!this.availableUpdate) return;
    const modal = document.getElementById('cloudUpdateModal');
    const curVerEl = document.getElementById('updCurrentVer');
    const newVerEl = document.getElementById('updNewVer');
    const notesEl = document.getElementById('updChangelogText');
    const progressBox = document.getElementById('updateProgressBox');
    const infoContainer = document.getElementById('updateInfoContainer');
    const startBtn = document.getElementById('btnStartCloudUpdate');
    const cancelBtn = document.getElementById('btnCancelUpdate');

    if (curVerEl) curVerEl.textContent = 'v' + this.availableUpdate.currentVersion;
    if (newVerEl) newVerEl.textContent = 'v' + this.availableUpdate.remoteVersion;
    if (notesEl) {
      notesEl.textContent = this.lang === 'ar' 
        ? (this.availableUpdate.notes_ar || this.availableUpdate.notes) 
        : this.availableUpdate.notes;
    }

    if (progressBox) progressBox.style.display = 'none';
    if (infoContainer) infoContainer.style.display = 'block';
    if (startBtn) {
      startBtn.disabled = false;
      startBtn.style.display = 'inline-flex';
    }
    if (cancelBtn) cancelBtn.style.display = 'inline-flex';

    if (modal) modal.style.display = 'flex';
  }

  closeUpdateModal() {
    const modal = document.getElementById('cloudUpdateModal');
    if (modal) modal.style.display = 'none';
  }

  async applyCloudUpdate() {
    if (!this.availableUpdate || !this.availableUpdate.zipUrl) return;

    const progressBox = document.getElementById('updateProgressBox');
    const statusText = document.getElementById('updateProgressStatusText');
    const progressBar = document.getElementById('updateProgressBar');
    const startBtn = document.getElementById('btnStartCloudUpdate');
    const cancelBtn = document.getElementById('btnCancelUpdate');

    if (startBtn) startBtn.style.display = 'none';
    if (cancelBtn) cancelBtn.style.display = 'none';
    if (progressBox) progressBox.style.display = 'block';

    const isAr = this.lang === 'ar';

    try {
      // Step 1: Backup
      if (statusText) statusText.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> ${isAr ? '1/3 - جاري إنشاء نسخة احتياطية من قاعدة البيانات...' : '1/3 - Sauvegarde automatique de sécurité SQLite...'}`;
      if (progressBar) progressBar.style.width = '30%';

      await new Promise(r => setTimeout(r, 600));

      // Step 2: Download & Extract
      if (statusText) statusText.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> ${isAr ? '2/3 - جاري تحميل وتثبيت التحديث بأمان...' : '2/3 - Téléchargement et application de la mise à jour...'}`;
      if (progressBar) progressBar.style.width = '75%';

      const res = await fetch('/api/updates/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ zipUrl: this.availableUpdate.zipUrl })
      });
      const data = await res.json();

      if (!data.success) {
        throw new Error(data.error || 'Erreur lors de l\'installation du patch.');
      }

      // Step 3: Success & Restart
      if (progressBar) progressBar.style.width = '100%';
      if (statusText) {
        statusText.style.color = '#10b981';
        statusText.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${isAr ? `تم التحديث بنجاح إلى v${data.newVersion}! جاري إعادة التشغيل...` : `Mise à jour v${data.newVersion} installée avec succès ! Redémarrage...`}`;
      }

      this.playChime('success');

      // Trigger restart
      setTimeout(async () => {
        try {
          await fetch('/api/updates/restart', { method: 'POST' });
        } catch(e) {}
        setTimeout(() => location.reload(), 1200);
      }, 1500);

    } catch (err) {
      this.playChime('error');
      if (statusText) {
        statusText.style.color = '#ef4444';
        statusText.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> ${isAr ? 'فشل التحديث : ' : 'Échec de la mise à jour : '} ${err.message}`;
      }
      if (cancelBtn) {
        cancelBtn.style.display = 'inline-flex';
        cancelBtn.textContent = isAr ? 'إغلاق' : 'Fermer';
      }
    }
  }

  initSidebar() {
    // Apply saved collapsed state on larger screens
    if (this.sidebarCollapsed && window.innerWidth > 900) {
      document.body.classList.add('sidebar-collapsed');
    } else {
      document.body.classList.remove('sidebar-collapsed');
    }
    this.updateSidebarTooltips();
  }

  toggleSidebar(forceState = null) {
    const isMobile = window.innerWidth <= 900;
    if (isMobile) {
      const isOpen = document.body.classList.contains('sidebar-mobile-open');
      const newState = forceState !== null ? forceState : !isOpen;
      if (newState) {
        document.body.classList.add('sidebar-mobile-open');
      } else {
        document.body.classList.remove('sidebar-mobile-open');
      }
    } else {
      const isCollapsed = document.body.classList.contains('sidebar-collapsed');
      const newState = forceState !== null ? forceState : !isCollapsed;
      this.sidebarCollapsed = newState;
      localStorage.setItem('edumind_sidebar_collapsed', this.sidebarCollapsed);
      if (newState) {
        document.body.classList.add('sidebar-collapsed');
      } else {
        document.body.classList.remove('sidebar-collapsed');
      }
      this.updateSidebarTooltips();

      // Dispatch resize event smoothly so canvas / charts adapt to new container width
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
        if (this.revenueChart) {
          try { this.revenueChart.resize(); } catch (e) { }
        }
      }, 350);
    }
  }

  updateSidebarTooltips() {
    document.querySelectorAll('.sidebar .nav-item').forEach(item => {
      const label = item.querySelector('span:not(.nav-icon)');
      if (label) {
        item.setAttribute('data-tooltip', label.textContent.trim());
      }
    });

    const isAr = this.lang === 'ar';
    const isCollapsed = document.body.classList.contains('sidebar-collapsed');
    const collapseBtn = document.getElementById('btnSidebarCollapse');
    const toggleBtn = document.getElementById('btnSidebarToggle');

    const collapseTitle = isCollapsed
      ? (isAr ? 'توسيع القائمة (Ctrl+B)' : 'Développer le menu (Ctrl+B)')
      : (isAr ? 'تصغير القائمة (Ctrl+B)' : 'Réduire le menu (Ctrl+B)');

    if (collapseBtn) collapseBtn.title = collapseTitle;
    if (toggleBtn) toggleBtn.title = isAr ? 'القائمة الجانبية (Ctrl+B)' : 'Menu latéral (Ctrl+B)';
  }

  setupEventListeners() {
    // Navigation Items
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', () => {
        const view = item.getAttribute('data-view');
        if (view) this.switchView(view);
        // On mobile, auto close drawer on navigation
        if (window.innerWidth <= 900) {
          document.body.classList.remove('sidebar-mobile-open');
        }
      });
    });

    // Top Header Sidebar Toggle Button
    const btnSidebarToggle = document.getElementById('btnSidebarToggle');
    if (btnSidebarToggle) {
      btnSidebarToggle.addEventListener('click', () => {
        this.toggleSidebar();
      });
    }

    // Sidebar Inner Collapse Button
    const btnSidebarCollapse = document.getElementById('btnSidebarCollapse');
    if (btnSidebarCollapse) {
      btnSidebarCollapse.addEventListener('click', () => {
        this.toggleSidebar();
      });
    }

    // Brand Logo Click: expands if currently collapsed
    const brandLogo = document.getElementById('brandLogoTrigger');
    if (brandLogo) {
      brandLogo.addEventListener('click', () => {
        if (document.body.classList.contains('sidebar-collapsed')) {
          this.toggleSidebar(false);
        }
      });
    }

    // Mobile Backdrop Click: close drawer
    const sidebarBackdrop = document.getElementById('sidebarBackdrop');
    if (sidebarBackdrop) {
      sidebarBackdrop.addEventListener('click', () => {
        document.body.classList.remove('sidebar-mobile-open');
      });
    }

    // Global Keyboard Shortcut: Ctrl+B or Cmd+B to toggle sidebar
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'b') {
        const tag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
        if (tag !== 'input' && tag !== 'textarea') {
          e.preventDefault();
          this.toggleSidebar();
        }
      }
    });

    // Language Toggle
    const btnLang = document.getElementById('btnLangToggle');
    if (btnLang) {
      btnLang.addEventListener('click', () => {
        this.lang = this.lang === 'fr' ? 'ar' : 'fr';
        localStorage.setItem('edumind_lang', this.lang);
        this.applyLanguage();
      });
    }

    // Theme Toggle
    const btnTheme = document.getElementById('btnThemeToggle');
    if (btnTheme) {
      btnTheme.addEventListener('click', () => {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('edumind_theme', this.theme);
        this.applyTheme();
      });
    }

    // Global Keyboard: Escape closes active modals
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeModals();
      }
    });

    // Click outside modal content closes the modal
    document.addEventListener('click', (e) => {
      if (e.target && e.target.classList && e.target.classList.contains('modal-overlay')) {
        this.closeModals();
      }
    });

    // Debounced student and teacher search to avoid freezing the database
    const studentSearchInput = document.getElementById('searchStudentInput');
    if (studentSearchInput) {
      studentSearchInput.oninput = this.debounce(() => this.loadStudents(), 300);
    }

    const teacherSearchInput = document.getElementById('searchTeacherInput');
    if (teacherSearchInput) {
      teacherSearchInput.oninput = this.debounce((e) => {
        this.filterTeachers(teacherSearchInput.value);
      }, 250);
    }

    // Hardware Barcode Scanner (Douchette USB) Global Wedge Listener
    this.setupBarcodeScannerListener();

    // Auto-focus scanner input in Pointage view when clicking outside controls
    document.getElementById('view-pointage')?.addEventListener('click', (e) => {
      const tag = e.target.tagName.toLowerCase();
      if (['input', 'select', 'textarea', 'button', 'a'].includes(tag) || e.target.closest('button, a, select')) {
        return;
      }
      if (this.attendanceMode === 'entrance') {
        document.getElementById('entranceScanInput')?.focus();
      } else {
        document.getElementById('pointageInput')?.focus();
      }
    });
  }

  applyTheme() {
    if (this.theme === 'light') {
      document.body.classList.add('light-theme');
      document.getElementById('btnThemeToggle').innerHTML = '<i class="fa-solid fa-sun" style="color: #f59e0b;"></i>';
    } else {
      document.body.classList.remove('light-theme');
      document.getElementById('btnThemeToggle').innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
  }

  applyLanguage() {
    const isAr = this.lang === 'ar';
    document.documentElement.lang = this.lang;
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';

    if (isAr) {
      document.body.classList.add('rtl');
      document.getElementById('langButtonText').textContent = 'Français';
    } else {
      document.body.classList.remove('rtl');
      document.getElementById('langButtonText').textContent = 'العربية';
    }

    // Translate DOM elements with data-i18n
    const dict = i18n[this.lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    const loginPass = document.getElementById('loginPassword');
    if (loginPass) {
      loginPass.placeholder = isAr ? 'أدخل كلمة المرور...' : 'Entrez votre mot de passe...';
    }
    const loginLangText = document.getElementById('loginLangText');
    if (loginLangText) {
      loginLangText.textContent = isAr ? 'Français' : 'العربية';
    }

    const searchGroupes = document.getElementById('groupesFilterSearch');
    if (searchGroupes) {
      searchGroupes.placeholder = isAr ? 'بحث...' : 'Rechercher...';
    }

    const statusSelect = document.getElementById('groupesFilterStatus');
    if (statusSelect) {
      statusSelect.options[0].text = isAr ? 'النشطة فقط' : 'Actifs';
      statusSelect.options[1].text = isAr ? 'كل الحالات' : 'Tous les statuts';
      statusSelect.options[2].text = isAr ? 'غير النشطة' : 'Inactifs';
    }

    const searchStudent = document.getElementById('searchStudentInput');
    if (searchStudent) {
      searchStudent.placeholder = isAr ? 'الاسم، رقم القيد، الهاتف...' : 'Nom, matricule, téléphone...';
    }

    const filterStudentStatus = document.getElementById('filterStudentStatus');
    if (filterStudentStatus) {
      filterStudentStatus.options[0].text = isAr ? 'النشطون فقط' : 'Actifs';
      filterStudentStatus.options[1].text = isAr ? 'كل الحالات' : 'Tous les statuts';
      filterStudentStatus.options[2].text = isAr ? 'غير النشطين' : 'Inactifs';
    }

    const filterStudentPayment = document.getElementById('filterStudentPayment');
    if (filterStudentPayment) {
      filterStudentPayment.options[0].text = isAr ? 'كل المدفوعات' : 'Tous paiements';
      filterStudentPayment.options[1].text = isAr ? 'مستوفٍ / لا ديون' : 'À jour';
      filterStudentPayment.options[2].text = isAr ? 'متأخر / ديون' : 'En retard / Dette';
    }

    const searchAtt = document.getElementById('attStudentSearch');
    if (searchAtt) {
      searchAtt.placeholder = isAr ? 'بحث عن تلميذ بالفوج...' : 'Filtrer un élève...';
    }

    const bulkStudentSearch = document.getElementById('bulkStudentSearchInput');
    if (bulkStudentSearch) {
      bulkStudentSearch.placeholder = isAr ? 'بحث عن تلميذ...' : 'Rechercher un élève...';
    }

    const bulkGroupSearch = document.getElementById('bulkGroupSearchInput');
    if (bulkGroupSearch) {
      bulkGroupSearch.placeholder = isAr ? 'بحث عن فوج أو مادة...' : 'Rechercher un groupe ou matière...';
    }
    const topicAtt = document.getElementById('attSessionTopic');
    if (topicAtt) {
      topicAtt.placeholder = isAr ? 'مثال: الفصل الثاني / حل تمارين' : 'Ex: Chapitre 2 / Exercices';
    }
    const searchPayments = document.getElementById('searchPaymentInput');
    if (searchPayments) {
      searchPayments.placeholder = isAr ? 'بحث باسم التلميذ، رقم الوصل، الفوج...' : 'Rechercher élève, N° reçu, groupe...';
    }
    const payStudentSearch = document.getElementById('payStudentSearch');
    if (payStudentSearch) {
      payStudentSearch.placeholder = isAr ? 'ابحث بكتابة اسم التلميذ أو لقبه أو رقم التسجيل...' : 'Rechercher par nom, prénom ou matricule...';
    }
    const searchTeachers = document.getElementById('searchTeacherInput');
    if (searchTeachers) {
      searchTeachers.placeholder = isAr ? 'بحث باسم الأستاذ، المادة، الهاتف...' : "Rechercher par nom d'enseignant, matière...";
    }

    const entranceScanInput = document.getElementById('entranceScanInput');
    if (entranceScanInput) {
      entranceScanInput.placeholder = isAr
        ? 'مرر الباركود أو اكتب رقم القيد (مثال: ETU-001 أو ENS-001)...'
        : 'Scannez le code-barres ou tapez le matricule (Ex: ETU-001 / ENS-001)...';
    }

    const entranceSearchInput = document.getElementById('entranceSearchInput');
    if (entranceSearchInput) {
      entranceSearchInput.placeholder = isAr ? 'بحث بالاسم، اللقب أو رقم القيد...' : 'Rechercher nom ou matricule...';
    }

    const entranceFilterType = document.getElementById('entranceFilterType');
    if (entranceFilterType && entranceFilterType.options && entranceFilterType.options.length >= 3) {
      entranceFilterType.options[0].text = isAr ? 'الكل (تلاميذ وأساتذة)' : 'Tous (Élèves & Enseignants)';
      entranceFilterType.options[1].text = isAr ? 'التلاميذ فقط' : 'Élèves seulement';
      entranceFilterType.options[2].text = isAr ? 'الأساتذة فقط' : 'Enseignants seulement';
    }

    const batchSearchInput = document.getElementById('batchBadgesSearchInput');
    if (batchSearchInput) {
      batchSearchInput.placeholder = isAr ? 'بحث بالاسم أو اللقب أو رقم القيد...' : 'Rechercher par nom, matricule ou téléphone...';
    }

    const batchLevelSelect = document.getElementById('batchBadgesFilterLevel');
    if (batchLevelSelect && batchLevelSelect.options && batchLevelSelect.options.length > 0) {
      batchLevelSelect.options[0].text = isAr ? '-- كل المستويات --' : '-- Tous les niveaux --';
    }

    const batchGroupSelect = document.getElementById('batchBadgesFilterGroup');
    if (batchGroupSelect && batchGroupSelect.options && batchGroupSelect.options.length > 0) {
      batchGroupSelect.options[0].text = isAr ? '-- كل الأفواج --' : '-- Tous les groupes --';
    }

    const fastPaySearch = document.getElementById('fastPayStudentSearch');
    if (fastPaySearch) {
      fastPaySearch.placeholder = isAr ? 'ابحث عن تلميذ بالاسم، اللقب أو رقم القيد...' : 'Rechercher par nom, prénom ou matricule...';
    }

    const wizardSearch = document.getElementById('wizardStudentSearchInput');
    if (wizardSearch) {
      wizardSearch.placeholder = isAr ? 'ابحث باسم التلميذ أو لقبه أو رقمه...' : 'Rechercher par nom, prénom ou matricule...';
    }

    const matrixSearch = document.getElementById('matrixSearchStudent');
    if (matrixSearch) {
      matrixSearch.placeholder = isAr ? 'بحث عن تلميذ...' : 'Rechercher un élève...';
    }

    const payMonthFilter = document.getElementById('paymentMonthFilter');
    if (payMonthFilter && payMonthFilter.options && payMonthFilter.options.length > 0) {
      payMonthFilter.options[0].text = isAr ? 'جميع الأشهر' : 'Tous les mois';
    }

    const enrollMonthFilter = document.getElementById('filterEnrollmentMonth');
    if (enrollMonthFilter && enrollMonthFilter.options && enrollMonthFilter.options.length > 0) {
      enrollMonthFilter.options[0].text = isAr ? 'جميع الأشهر' : 'Tous les mois';
    }

    const searchParents = document.getElementById('searchParentInput');
    if (searchParents) {
      searchParents.placeholder = isAr ? 'ابحث بالاسم، اللقب، الهاتف، أو اسم الابن...' : "Rechercher par nom, prénom, tél ou enfant...";
    }
    const filterParentDisc = document.getElementById('filterParentDiscount');
    if (filterParentDisc && filterParentDisc.options && filterParentDisc.options.length >= 3) {
      filterParentDisc.options[0].text = isAr ? 'كل التخفيضات' : 'Toutes les remises';
      filterParentDisc.options[1].text = isAr ? 'مع تخفيض عائلي (> 0%)' : 'Avec remise (> 0%)';
      filterParentDisc.options[2].text = isAr ? 'بدون تخفيض (0%)' : 'Sans remise (0%)';
    }
    const filterParentDebt = document.getElementById('filterParentDebts');
    if (filterParentDebt && filterParentDebt.options && filterParentDebt.options.length >= 3) {
      filterParentDebt.options[0].text = isAr ? 'جميع الحالات المالية' : 'Tous statuts financiers';
      filterParentDebt.options[1].text = isAr ? 'عليهم مستحقات / ديون' : 'Avec impayés / dettes';
      filterParentDebt.options[2].text = isAr ? 'خالصين تماماً' : 'À jour (aucun impayé)';
    }

    if (this.currentView === 'groupes') {
      const levelSelect = document.getElementById('groupesFilterLevel');
      if (levelSelect) levelSelect.removeAttribute('data-loaded');
      const subjectSelect = document.getElementById('groupesFilterSubject');
      if (subjectSelect) subjectSelect.removeAttribute('data-loaded');
      const teacherSelect = document.getElementById('groupesFilterTeacher');
      if (teacherSelect) teacherSelect.removeAttribute('data-loaded');
      this.populateGroupesFilters();
      this.filterGroupes();
    } else if (this.currentView === 'eleves') {
      const levelSelect = document.getElementById('filterStudentLevel');
      if (levelSelect) levelSelect.removeAttribute('data-loaded');
      if (this.currentProfileStudentId) {
        this.openStudentProfile(this.currentProfileStudentId);
      } else {
        this.loadStudents();
      }
    } else if (this.currentView === 'parents') {
      this.loadParents();
    } else if (this.currentView === 'salles') {
      this.loadRooms();
    }

    const searchRooms = document.getElementById('roomsFilterSearch');
    if (searchRooms) {
      searchRooms.placeholder = isAr ? 'البحث عن قاعة...' : 'Rechercher une salle...';
    }
    const filterProj = document.getElementById('roomsFilterProjector');
    if (filterProj) {
      filterProj.options[0].text = isAr ? 'كل أجهزة العرض' : 'Tous vidéoprojecteurs';
      filterProj.options[1].text = isAr ? 'مجهزة بعارض (DataShow)' : 'Avec vidéoprojecteur';
      filterProj.options[2].text = isAr ? 'بدون عارض' : 'Sans vidéoprojecteur';
    }
    const filterCap = document.getElementById('roomsFilterCapacity');
    if (filterCap) {
      filterCap.options[0].text = isAr ? 'كل السعات' : 'Toutes capacités';
      filterCap.options[1].text = isAr ? 'أقل من 20 مقعد' : '< 20 places';
      filterCap.options[2].text = isAr ? 'من 20 إلى 29 مقعد' : '20 à 29 places';
      filterCap.options[3].text = isAr ? '30 مقعد فما فوق' : '30+ places';
    }
    const filterOcc = document.getElementById('roomsFilterOccupancy');
    if (filterOcc) {
      filterOcc.options[0].text = isAr ? 'كل القاعات' : 'Toutes les salles';
      filterOcc.options[1].text = isAr ? 'مشغولة (بها أفواج)' : 'Occupées (avec groupes)';
      filterOcc.options[2].text = isAr ? 'شاغرة (بدون أفواج)' : 'Disponibles (sans groupes)';
    }

    // Inscriptions View & Wizard placeholders / selects
    const searchEnroll = document.getElementById('searchEnrollmentsTableInput');
    if (searchEnroll) {
      searchEnroll.placeholder = isAr ? 'بحث بالتلميذ، رقم القيد، الهاتف، الفوج، المادة، الأستاذ...' : 'Rechercher par élève, matricule, tél, groupe, matière, prof...';
    }
    const filterEnrollGroup = document.getElementById('filterEnrollmentGroup');
    if (filterEnrollGroup && filterEnrollGroup.options.length > 0 && filterEnrollGroup.options[0].value === 'all') {
      filterEnrollGroup.options[0].text = isAr ? 'كل الأفواج' : 'Tous les groupes';
    }
    const filterEnrollStatus = document.getElementById('filterEnrollmentStatus');
    if (filterEnrollStatus && filterEnrollStatus.options.length >= 3) {
      filterEnrollStatus.options[0].text = isAr ? 'كل الحالات' : 'Tous statuts';
      filterEnrollStatus.options[1].text = isAr ? 'النشطة فقط' : 'Actifs';
      filterEnrollStatus.options[2].text = isAr ? 'الملغاة' : 'Annulés';
    }
    const wizardStudentSearch = document.getElementById('wizardStudentSearchInput');
    if (wizardStudentSearch) {
      wizardStudentSearch.placeholder = isAr ? 'ابحث باسم التلميذ أو لقبه أو رقمه...' : 'Rechercher par nom, prénom ou matricule...';
    }
    if (this.enrollWizard?.step) {
      this.goToEnrollmentStep(this.enrollWizard.step);
    }
    if (this.currentView === 'inscriptions' && this.inscriptionsList) {
      const total = this.inscriptionsList.length;
      const active = this.inscriptionsList.filter(e => e.status === 'active').length;
      const totalBadge = document.getElementById('enrollmentsTotalBadge');
      if (totalBadge) totalBadge.textContent = isAr ? `${total} تسجيل` : `${total} Inscription(s)`;
      const activeBadge = document.getElementById('enrollmentsActiveBadge');
      if (activeBadge) activeBadge.textContent = isAr ? `${active} نشط` : `${active} Active(s)`;
      this.populateEnrollmentMonthFilter();
      this.filterEnrollmentsTable();
    }

    const btnWizardPrevEl = document.getElementById('btnWizardPrev');
    if (btnWizardPrevEl) {
      const prevIcon = btnWizardPrevEl.querySelector('i');
      if (prevIcon) {
        prevIcon.className = `fa-solid ${isAr ? 'fa-arrow-right' : 'fa-arrow-left'}`;
        prevIcon.style.marginRight = isAr ? '0' : '8px';
        prevIcon.style.marginLeft = isAr ? '8px' : '0';
      }
    }
    const btnWizardNextEl = document.getElementById('btnWizardNext');
    if (btnWizardNextEl) {
      const nextIcon = btnWizardNextEl.querySelector('i');
      if (nextIcon) {
        nextIcon.className = `fa-solid ${isAr ? 'fa-arrow-left' : 'fa-arrow-right'}`;
        nextIcon.style.marginRight = isAr ? '8px' : '0';
        nextIcon.style.marginLeft = isAr ? '0' : '8px';
      }
    }

    this.updateGreetingDate();
    this.updateSidebarTooltips();
  }

  updateGreetingDate() {
    const now = new Date();
    const hour = now.getHours();
    let greetingKey = 'greeting_morning';
    if (hour >= 12 && hour < 18) greetingKey = 'greeting_afternoon';
    else if (hour >= 18) greetingKey = 'greeting_evening';

    const greetingEl = document.getElementById('greetingText');
    if (greetingEl) {
      greetingEl.textContent = i18n[this.lang][greetingKey];
    }

    // Formatted Date
    const dateOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const dateStr = now.toLocaleDateString(this.lang === 'ar' ? 'ar-DZ' : 'fr-FR', dateOptions);
    const dateEl = document.getElementById('currentDateDisplay');
    if (dateEl) dateEl.textContent = dateStr;
  }

  switchView(viewName, forceReload = false) {
    if (viewName === 'inscriptions' || viewName === 'paiements' || viewName === 'echeances') {
      viewName = 'eleves';
    }
    this.currentView = viewName;

    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(item => {
      if (item.getAttribute('data-view') === viewName) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Update active view container
    document.querySelectorAll('.view-container').forEach(view => {
      view.classList.remove('active');
    });

    const target = document.getElementById(`view-${viewName}`);
    if (target) {
      target.classList.add('active');
    }

    this._lastViewLoads = this._lastViewLoads || {};
    const now = Date.now();
    const lastLoad = this._lastViewLoads[viewName] || 0;
    // Always reload pointage, cantine and enseignants so live status is accurate; buffer other views for 15s
    const shouldReload = forceReload || viewName === 'pointage' || viewName === 'cantine' || viewName === 'enseignants' || (now - lastLoad > 15000);

    if (!shouldReload) {
      return; // Instant view toggle with zero network lag
    }
    this._lastViewLoads[viewName] = now;

    // Trigger loads for specific views
    if (viewName === 'dashboard') this.loadDashboardData();
    else if (viewName === 'eleves') {
      const profileView = document.getElementById('studentProfileView');
      const listView = document.getElementById('studentsListView');
      if (profileView) profileView.classList.remove('active');
      if (listView) listView.classList.remove('hidden');
      this.loadStudents();
    }
    else if (viewName === 'parents') this.loadParents();
    else if (viewName === 'inscriptions') this.loadInscriptionsView();
    else if (viewName === 'paiements') this.loadPayments();
    else if (viewName === 'echeances') this.loadEcheances();
    else if (viewName === 'caisse') this.loadCaisse();
    else if (viewName === 'planning') this.loadPlanningView();
    else if (viewName === 'enseignants') this.loadTeachers();
    else if (viewName === 'groupes') this.loadGroupesView();
    else if (viewName === 'niveaux') this.loadLevels();
    else if (viewName === 'salles') this.loadRooms();
    else if (viewName === 'matieres') this.loadSubjects();
    else if (viewName === 'settings') this.loadSettingsInputs();
    else if (viewName === 'pointage') {
      this.loadAttendanceView();
    }
    else if (viewName === 'cantine') {
      this.loadCantineData();
    }
  }

  // -------------------------------------------------------------
  // API LOADERS & RENDERERS
  // -------------------------------------------------------------
  async loadSettings() {
    try {
      const res = await fetch('/api/settings');
      const data = await res.json();
      if (data.success) {
        this.settings = data.settings;
        if (this.settings.school_name) {
          document.getElementById('cardSchoolName').textContent = this.settings.school_name;
        }
        if (this.settings.active_year) {
          document.getElementById('badgeSchoolYear').innerHTML = `<i class="fa-regular fa-calendar"></i><span>Année ${this.settings.active_year}</span>`;
        }
      }
    } catch (err) {
      console.error('Failed to load settings:', err);
    }
  }

  async loadConfigurationData() {
    try {
      const [resL, resS, resR] = await Promise.all([
        fetch('/api/levels'),
        fetch('/api/subjects'),
        fetch('/api/rooms')
      ]);
      const levelsData = await resL.json();
      const subjectsData = await resS.json();
      const roomsData = await resR.json();

      this.levels = levelsData.levels || [];
      this.subjects = subjectsData.subjects || [];
      this.rooms = roomsData.rooms || [];

      // Populate Level filters & selects
      const filterL = document.getElementById('filterStudentLevel');
      const modalL = document.getElementById('studentLevel');
      if (filterL && modalL) {
        let opts = `<option value="">Tous les niveaux</option>`;
        this.levels.forEach(lvl => {
          opts += `<option value="${lvl.id}">${lvl.name}</option>`;
        });
        filterL.innerHTML = opts;
        modalL.innerHTML = opts;
      }
    } catch (err) {
      console.error('Failed to load configuration data:', err);
    }
  }

  async loadDashboardData() {
    try {
      const res = await fetch('/api/dashboard/stats');
      const data = await res.json();
      if (!data.success) return;

      const { kpis, recentCanteenScans } = data;

      // Update Public School KPIs
      const elActive = document.getElementById('kpiActiveStudents');
      if (elActive) elActive.textContent = kpis.activeStudents || 0;

      const elDemi = document.getElementById('kpiDemiPension');
      if (elDemi) elDemi.textContent = kpis.demiPensionnaires || 0;

      const elExt = document.getElementById('kpiExternes');
      if (elExt) elExt.textContent = kpis.externes || 0;

      const elMeals = document.getElementById('kpiMealsToday');
      if (elMeals) elMeals.textContent = kpis.mealsToday || 0;

      const elMealRate = document.getElementById('kpiMealRateText');
      if (elMealRate) elMealRate.textContent = `نسبة الاستلام : ${kpis.mealAttendanceRate || 0}%`;

      const elTeachers = document.getElementById('kpiTeachers');
      if (elTeachers) elTeachers.textContent = kpis.teachersCount || 0;

      const elClasses = document.getElementById('kpiClassesCount');
      if (elClasses) elClasses.textContent = kpis.classesCount || 0;

      const elCaisse = document.getElementById('kpiSoldeCaisse');
      if (elCaisse) elCaisse.textContent = `${Number(kpis.caisseBalance || 0).toLocaleString()} DA`;

      // Render Dashboard Recent Canteen Scans Feed
      const recentMealsBody = document.getElementById('dashboardRecentMealsBody');
      if (recentMealsBody) {
        const scans = recentCanteenScans || [];
        if (scans.length === 0) {
          recentMealsBody.innerHTML = `
            <tr>
              <td colspan="4" style="text-align: center; color: var(--text-muted); padding: 24px;">
                لم يتم تسجيل أي وجبة اليوم بعد
              </td>
            </tr>
          `;
        } else {
          recentMealsBody.innerHTML = scans.map(s => `
            <tr>
              <td><span style="font-weight: 700; color: #60a5fa; font-family: monospace;">${(s.scan_time || '').slice(0, 5)}</span></td>
              <td>
                <strong style="color: var(--text-heading); font-size: 13.5px;">${this.escapeHtml(s.first_name + ' ' + s.last_name)}</strong>
                <span style="display: block; font-size: 11px; color: var(--text-muted);">${this.escapeHtml(s.matricule)}</span>
              </td>
              <td><span style="font-size: 12px; color: #10b981; font-weight: 600;">${this.escapeHtml(s.group_name || '-')}</span></td>
              <td style="text-align: center;">
                <span class="badge-status-pill active" style="font-size: 11px; padding: 2px 8px;">
                  <i class="fa-solid fa-circle-check"></i> استلم
                </span>
              </td>
            </tr>
          `).join('');
        }
      }

      // Render Recent Unpaid Table
      const unpaidBody = document.getElementById('recentUnpaidTableBody');
      if (unpaidStudents.length === 0) {
        unpaidBody.innerHTML = `<tr><td colspan="3" style="text-align: center; color: var(--text-muted); padding: 24px;">Aucun impayé trouvé</td></tr>`;
      } else {
        unpaidBody.innerHTML = unpaidStudents.map(u => `
          <tr>
            <td><strong>${u.student_name}</strong></td>
            <td><span class="badge-pill" style="background: rgba(239, 68, 68, 0.15); color: #f87171;">${u.subject_name}</span></td>
            <td><strong style="color: #ef4444;">${Number(u.amount_due).toLocaleString()} DA</strong></td>
          </tr>
        `).join('');
      }

      // Alerts
      const alertsContainer = document.getElementById('alertsContainer');
      if (alerts && alerts.length > 0) {
        alertsContainer.innerHTML = alerts.map(a => `
          <div style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid #f59e0b; padding: 12px 16px; border-radius: 6px; margin-bottom: 8px;">
            <strong style="color: #f59e0b;">${a.title}</strong>
            <p style="font-size: 12px; margin-top: 4px; color: var(--text-main);">${a.message}</p>
          </div>
        `).join('');
      }
    } catch (err) {
      console.error('Error loading dashboard stats:', err);
    }
  }

  renderRevenueChart(data) {
    const ctx = document.getElementById('revenueChart');
    if (!ctx) return;

    if (this.revenueChart) {
      this.revenueChart.destroy();
    }

    const labels = data.map(d => d.label);
    const amounts = data.map(d => d.amount);

    this.revenueChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Recouvrement (DA)',
          data: amounts,
          borderColor: '#3b82f6',
          backgroundColor: 'rgba(59, 130, 246, 0.15)',
          borderWidth: 3,
          tension: 0.35,
          fill: true,
          pointBackgroundColor: '#3b82f6',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (context) => ` ${context.parsed.y.toLocaleString()} DA`
            }
          }
        },
        scales: {
          x: {
            grid: { color: 'rgba(255, 255, 255, 0.05)' },
            ticks: { color: '#94a3b8', font: { size: 11 } }
          },
          y: {
            grid: { color: 'rgba(255, 255, 255, 0.05)' },
            ticks: {
              color: '#94a3b8',
              font: { size: 11 },
              callback: (val) => `${val.toLocaleString()} DA`
            }
          }
        }
      }
    });
  }

  // -------------------------------------------------------------
  // STUDENTS MODULE (STYLE SCHOOLARIS: LIST & FICHE ÉLÈVE)
  // -------------------------------------------------------------
  getStudentAvatarSvg(gender) {
    const isGirl = (gender || '').toUpperCase() === 'F';
    return isGirl
      ? `<div class="student-avatar-circle girl" title="Féminin"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><circle cx='32' cy='32' r='32' fill='%23fde047'/><path d='M16 28 C16 16, 48 16, 48 28 C48 38, 48 48, 48 48 C44 46, 38 46, 32 46 C26 46, 20 46, 16 48 Z' fill='%2392400e'/><circle cx='32' cy='30' r='12' fill='%23fed7aa'/><path d='M22 28 C22 22, 42 22, 42 28 C38 24, 26 24, 22 28 Z' fill='%2392400e'/><path d='M18 56 C20 44, 44 44, 46 56 Z' fill='%23f97316'/></svg>" alt="F"></div>`
      : `<div class="student-avatar-circle boy" title="Masculin"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><circle cx='32' cy='32' r='32' fill='%23bae6fd'/><path d='M20 24 C20 16, 44 16, 44 24 C44 20, 20 20, 20 24 Z' fill='%231e293b'/><circle cx='32' cy='30' r='12' fill='%23fed7aa'/><path d='M22 24 C26 20, 38 20, 42 24 C38 22, 26 22, 22 24 Z' fill='%231e293b'/><path d='M18 56 C20 44, 44 44, 46 56 Z' fill='%232563eb'/></svg>" alt="M"></div>`;
  }

  async loadStudents() {
    try {
      const search = document.getElementById('searchStudentInput')?.value || '';
      const levelId = document.getElementById('filterStudentLevel')?.value || '';
      const status = document.getElementById('filterStudentStatus')?.value || 'active';
      const regime = document.getElementById('filterStudentRegime')?.value || 'all';

      // Ensure levels are loaded
      if (!this.levels || this.levels.length === 0) {
        await this.loadLevels();
      }

      // Populate filterStudentLevel if needed
      const levelSelect = document.getElementById('filterStudentLevel');
      if (levelSelect && (levelSelect.options.length <= 1 || levelSelect.getAttribute('data-loaded') !== '1')) {
        const cur = levelSelect.value;
        levelSelect.innerHTML = `<option value="">${this.lang === 'ar' ? 'كل المستويات' : 'Tous niveaux'}</option>` +
          (this.levels || []).map(l => `<option value="${l.id}">${this.escapeHtml(l.name)}</option>`).join('');
        levelSelect.value = cur;
        levelSelect.setAttribute('data-loaded', '1');
      }

      const params = new URLSearchParams({
        search,
        level_id: levelId,
        status
      });

      const res = await fetch(`/api/students?${params.toString()}`);
      const data = await res.json();
      if (!data.success) return;

      this.students = data.students || [];
      if (regime !== 'all') {
        this.students = this.students.filter(s => (s.regime || 'demi_pensionnaire') === regime);
      }

      const tbody = document.getElementById('schoolarisStudentsTableBody');
      if (!tbody) return;

      if (this.students.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="9" style="text-align: center; color: var(--text-muted); padding: 40px;">
              <i class="fa-solid fa-user-slash" style="font-size: 32px; margin-bottom: 10px; opacity: 0.5; display: block;"></i>
              ${this.lang === 'ar' ? 'لم يتم العثور على أي تلميذ مطابق' : 'Aucun élève trouvé'}
            </td>
          </tr>
        `;
        this.updateBatchActionBar();
        return;
      }

      tbody.innerHTML = this.students.map(s => {
        const avatarSvg = this.getStudentAvatarSvg(s.gender);
        const isActive = s.active === 1;
        const isChecked = this.selectedStudentIds && this.selectedStudentIds.has(s.id);
        const regimeName = s.regime === 'externe'
          ? (this.lang === 'ar' ? 'خارجي' : 'Externe')
          : s.regime === 'interne'
            ? (this.lang === 'ar' ? 'داخلي' : 'Interne')
            : (this.lang === 'ar' ? 'نصف داخلي' : 'Demi-pension');

        return `
          <tr>
            <td style="text-align: center; vertical-align: middle;">
              <input type="checkbox" class="student-select-chk edumind-chk" value="${s.id}" ${isChecked ? 'checked' : ''} onchange="app.onStudentCheckChange(${s.id}, this.checked)">
            </td>
            <td>
              <div style="display: flex; align-items: center; gap: 10px;">
                ${avatarSvg}
                <span style="font-weight: 700; color: #60a5fa; font-size: 13px; font-family: monospace;">${this.escapeHtml(s.matricule)}</span>
              </div>
            </td>
            <td>
              <strong style="color: var(--text-heading); font-size: 14px; cursor: pointer;" onclick="app.openStudentProfile(${s.id})" title="Voir la fiche">${this.escapeHtml(s.last_name)}</strong>
            </td>
            <td>
              <span style="color: var(--text-main); cursor: pointer;" onclick="app.openStudentProfile(${s.id})" title="Voir la fiche">${this.escapeHtml(s.first_name)}</span>
            </td>
            <td>
              <span style="color: var(--text-muted); font-weight: 500;">${this.escapeHtml(s.level_name || '—')}</span>
            </td>
            <td>
              <span style="font-size: 13px;">${this.escapeHtml(s.phone || '—')}</span>
              ${s.parent_name ? `
                <div style="font-size: 11px; color: #a78bfa; margin-top: 2px; display: flex; align-items: center; gap: 4px;">
                  <i class="fa-solid fa-people-roof" style="font-size: 10px;"></i>
                  <span>${this.escapeHtml(s.parent_name)}</span>
                </div>
              ` : ''}
            </td>
            <td style="text-align: center;">
              <span class="badge-pill" style="${s.regime === 'externe' ? 'background: rgba(148, 163, 184, 0.15); color: #94a3b8;' : 'background: rgba(16, 185, 129, 0.15); color: #10b981;'} font-weight: 700;">
                ${regimeName}
              </span>
            </td>
            <td>
              <span class="badge-status-pill ${isActive ? 'active' : 'inactive'}" 
                    onclick="app.openStudentProfile(${s.id})" 
                    title="${this.lang === 'ar' ? 'عرض تفاصيل وملف التلميذ' : 'Voir la fiche élève'}">
                ${isActive ? (this.lang === 'ar' ? 'متمدرس' : 'Scolarisé') : (this.lang === 'ar' ? 'غير نشط' : 'Inactif')}
              </span>
            </td>
            <td style="text-align: right;">
              <div style="display: inline-flex; gap: 6px; align-items: center;">
                <button class="btn-action-badge" title="${this.lang === 'ar' ? 'الملف المدرسي' : 'Fiche élève'}" onclick="app.openStudentProfile(${s.id})">
                  <i class="fa-solid fa-address-card"></i>
                </button>
                <button class="btn-action-badge" title="${this.lang === 'ar' ? 'بطاقة التلميذ' : 'Badge élève'}" onclick="app.showStudentCard(${s.id})">
                  <i class="fa-solid fa-id-card"></i>
                </button>
                <button class="btn-action-edit" title="${this.lang === 'ar' ? 'تعديل' : 'Modifier'}" onclick="app.editStudent(${s.id})">
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="btn-action-delete" title="${this.lang === 'ar' ? 'حذف / تعطيل' : 'Supprimer'}" onclick="app.deleteStudent(${s.id})">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </td>
          </tr>
        `;
      }).join('');
      this.updateBatchActionBar();
    } catch (err) {
      console.error('Failed to load students:', err);
    }
  }

  // -------------------------------------------------------------
  // FICHE ÉLÈVE (STUDENT PROFILE VIEW)
  // -------------------------------------------------------------
  async openStudentProfile(id) {
    try {
      this.currentProfileStudentId = id;
      const res = await fetch(`/api/students/${id}`);
      const data = await res.json();
      if (!data.success) {
        alert(data.error || 'Erreur lors du chargement du profil');
        return;
      }

      const { student, stats, enrollments, payments } = data;

      // Switch sub-views inside view-eleves
      const listEl = document.getElementById('studentsListView');
      const profileEl = document.getElementById('studentProfileView');
      if (listEl) listEl.classList.add('hidden');
      if (profileEl) profileEl.classList.add('active');

      // 1. Hero Card
      const avatarEl = document.getElementById('profileHeroAvatar');
      const isGirl = (student.gender || '').toUpperCase() === 'F';
      avatarEl.innerHTML = isGirl
        ? `<img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'><circle cx='40' cy='40' r='40' fill='%23fde047'/><path d='M20 34 C20 18, 60 18, 60 34 C60 48, 60 62, 60 62 C55 60, 48 60, 40 60 C32 60, 25 60, 20 62 Z' fill='%2392400e'/><circle cx='40' cy='38' r='16' fill='%23fed7aa'/><path d='M28 34 C28 26, 52 26, 52 34 C48 30, 32 30, 28 34 Z' fill='%2392400e'/><path d='M22 72 C25 56, 55 56, 58 72 Z' fill='%23f97316'/></svg>" style="width:100%;height:100%;" alt="Avatar">`
        : `<img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'><circle cx='40' cy='40' r='40' fill='%23bae6fd'/><path d='M25 30 C25 20, 55 20, 55 30 C55 25, 25 25, 25 30 Z' fill='%231e293b'/><circle cx='40' cy='38' r='16' fill='%23fed7aa'/><path d='M28 30 C32 26, 48 26, 52 30 C48 28, 32 28, 28 30 Z' fill='%231e293b'/><path d='M22 72 C25 56, 55 56, 58 72 Z' fill='%232563eb'/></svg>" style="width:100%;height:100%;" alt="Avatar">`;

      document.getElementById('profileHeroMatricule').textContent = student.matricule;
      document.getElementById('profileHeroName').textContent = `${student.first_name} ${student.last_name}`;
      document.getElementById('profileHeroLevel').textContent = student.level_name || 'المستوى غير محدد';

      // Hero Pills
      const regimeLabel = (student.regime === 'interne')
        ? (this.lang === 'ar' ? 'داخلي' : 'Interne')
        : (student.regime === 'externe')
          ? (this.lang === 'ar' ? 'خارجي' : 'Externe')
          : (this.lang === 'ar' ? 'نصف داخلي' : 'Demi-pensionnaire');

      const isCanteenActive = student.canteen_active !== 0 && student.regime !== 'externe';

      const statusPill = document.getElementById('profileHeroStatusPill');
      if (statusPill) {
        statusPill.className = 'hero-pill hero-pill-status up-to-date';
        statusPill.textContent = this.lang === 'ar' ? 'متمدرس' : 'Scolarisé';
      }

      const regimePill = document.getElementById('profileHeroRegimePill');
      if (regimePill) regimePill.textContent = regimeLabel;

      const canteenPill = document.getElementById('profileHeroCanteenPill');
      if (canteenPill) {
        canteenPill.textContent = isCanteenActive
          ? (this.lang === 'ar' ? 'مطعم مدرسي نشط' : 'Cantine active')
          : (this.lang === 'ar' ? 'بدون إطعام' : 'Sans cantine');
      }

      // 2. Educational & School KPIs
      const kpiRegime = document.getElementById('profileKpiRegime');
      if (kpiRegime) kpiRegime.textContent = regimeLabel;

      const kpiCanteen = document.getElementById('profileKpiCanteen');
      if (kpiCanteen) {
        kpiCanteen.textContent = isCanteenActive
          ? (this.lang === 'ar' ? 'مستفيد' : 'Bénéficiaire')
          : (this.lang === 'ar' ? 'غير مستفيد' : 'Non inscrit');
        kpiCanteen.className = isCanteenActive ? 'profile-kpi-value green' : 'profile-kpi-value';
      }

      const totalAbsences = stats.absent_count || (data.absences ? data.absences.filter(a => a.status === 'absent').length : 0);
      const totalLate = stats.late_count || (data.absences ? data.absences.filter(a => a.status === 'late').length : 0);

      const kpiAbsences = document.getElementById('profileKpiAbsences');
      if (kpiAbsences) kpiAbsences.textContent = totalAbsences;

      const kpiLate = document.getElementById('profileKpiLate');
      if (kpiLate) kpiLate.textContent = totalLate;

      // 3. Personal Information Table
      const infoGender = document.getElementById('profileInfoGender');
      if (infoGender) {
        infoGender.textContent = (student.gender || '').toUpperCase() === 'F'
          ? (this.lang === 'ar' ? 'أنثى' : 'Féminin')
          : (this.lang === 'ar' ? 'ذكر' : 'Masculin');
      }

      const infoBirthDate = document.getElementById('profileInfoBirthDate');
      if (infoBirthDate) infoBirthDate.textContent = student.birth_date ? student.birth_date.slice(0, 10) : '-';

      const infoBirthPlace = document.getElementById('profileInfoBirthPlace');
      if (infoBirthPlace) infoBirthPlace.textContent = student.birth_place || '-';

      const infoLevel = document.getElementById('profileInfoLevel');
      if (infoLevel) infoLevel.textContent = student.level_name || '-';

      const infoParentName = document.getElementById('profileInfoParentName');
      if (infoParentName) infoParentName.textContent = student.parent_name || '-';

      const infoParentPhone = document.getElementById('profileInfoParentPhone');
      if (infoParentPhone) infoParentPhone.textContent = student.parent_phone || '-';

      const infoAddress = document.getElementById('profileInfoAddress');
      if (infoAddress) infoAddress.textContent = student.address || '-';

      // 4. Situation Scolaire & Cantine Card
      const infoNationalId = document.getElementById('profileInfoNationalId');
      if (infoNationalId) infoNationalId.textContent = student.national_id || student.matricule || '-';

      const infoRegime = document.getElementById('profileInfoRegime');
      if (infoRegime) infoRegime.textContent = regimeLabel;

      const infoCanteenStatus = document.getElementById('profileInfoCanteenStatus');
      if (infoCanteenStatus) {
        infoCanteenStatus.textContent = isCanteenActive
          ? (this.lang === 'ar' ? 'مستفيد من الوجبة المدرسية' : 'Bénéficiaire de la cantine')
          : (this.lang === 'ar' ? 'غير مسجل بالمطعم' : 'Non inscrit');
      }

      const infoCanteenMeals = document.getElementById('profileInfoCanteenMeals');
      if (infoCanteenMeals) {
        const mealsCount = stats.canteen_meals || 0;
        infoCanteenMeals.textContent = `${mealsCount} ${this.lang === 'ar' ? 'وجبة مستفاد منها' : 'repas servi(s)'}`;
      }

      const infoDate = document.getElementById('profileInfoDate');
      if (infoDate) infoDate.textContent = student.created_at ? student.created_at.slice(0, 10) : '-';

      const infoPhone = document.getElementById('profileInfoPhone');
      if (infoPhone) infoPhone.textContent = student.phone || '-';

      const infoNotes = document.getElementById('profileInfoNotes');
      if (infoNotes) infoNotes.textContent = student.notes || '-';

      // 5. Absences & Discipline Table
      const absencesList = data.absences || [];
      const absencesTitle = document.getElementById('profileAbsencesTitle');
      if (absencesTitle) {
        absencesTitle.innerHTML = `<i class="fa-solid fa-clipboard-check" style="color: #3b82f6; margin-right: 8px;"></i> ${
          this.lang === 'ar' ? `سجل الغيابات والتأخرات المدرسية (${absencesList.length})` : `Suivi des absences et assiduité (${absencesList.length})`
        }`;
      }

      const absencesTbody = document.getElementById('profileAbsencesTableBody');
      if (absencesTbody) {
        if (absencesList.length === 0) {
          absencesTbody.innerHTML = `
            <tr>
              <td colspan="6" style="text-align: center; color: var(--text-muted); padding: 30px;">
                <i class="fa-regular fa-circle-check" style="color: #10b981; font-size: 24px; display: block; margin-bottom: 8px;"></i>
                ${this.lang === 'ar' ? 'سجل نظيف — لا توجد أي غيابات أو تأخرات مسجلة لهذا التلميذ' : 'Aucune absence ou retard enregistré pour cet élève.'}
              </td>
            </tr>
          `;
        } else {
          absencesTbody.innerHTML = absencesList.map(a => {
            const isLate = a.status === 'late';
            const isExcused = a.status === 'excused';
            const typeBadge = isLate
              ? `<span class="badge-pill" style="background: rgba(239, 68, 68, 0.15); color: #ef4444;">تأخر</span>`
              : isExcused
                ? `<span class="badge-pill" style="background: rgba(59, 130, 246, 0.15); color: #3b82f6;">غياب مبرر</span>`
                : `<span class="badge-pill" style="background: rgba(245, 158, 11, 0.15); color: #f59e0b;">غياب</span>`;

            return `
              <tr>
                <td><strong>${a.date ? a.date.slice(0, 10) : '-'}</strong></td>
                <td>${this.escapeHtml(a.time || 'الحصة الصباحية/المسائية')}</td>
                <td><strong>${this.escapeHtml(a.subject_name || 'عام')}</strong></td>
                <td>${typeBadge}</td>
                <td>${isExcused ? '<span style="color: #10b981;">مبرر رسمياً</span>' : '<span style="color: #ef4444;">غير مبرر</span>'}</td>
                <td style="color: var(--text-muted);">${this.escapeHtml(a.notes || '-')}</td>
              </tr>
            `;
          }).join('');
        }
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error(err);
    }
  }

  backToStudentsList() {
    this.currentProfileStudentId = null;
    const profileView = document.getElementById('studentProfileView');
    const listView = document.getElementById('studentsListView');
    if (profileView) profileView.classList.remove('active');
    if (listView) listView.classList.remove('hidden');
    this.loadStudents();
  }

  editCurrentProfileStudent() {
    if (this.currentProfileStudentId) {
      this.editStudent(this.currentProfileStudentId);
    }
  }

  enrollCurrentProfileStudent() {
    if (this.currentProfileStudentId) {
      this.openEnrollStudent(this.currentProfileStudentId);
    }
  }

  badgeCurrentProfileStudent() {
    if (this.currentProfileStudentId) {
      this.showStudentCard(this.currentProfileStudentId);
    }
  }

  reportCurrentProfileStudent() {
    if (this.currentProfileStudentId) {
      this.openStudentAttendanceReport(this.currentProfileStudentId);
    }
  }

  openEnrollStudent(studentId) {
    this.closeModals();
    this.openStudentProfile(studentId);
  }

  async cancelEnrollment(enrollmentId, studentId) {
    const msg = this.lang === 'ar'
      ? 'هل أنت متأكد من إلغاء تسجيل هذا التلميذ في هذا الفوج؟'
      : 'Voulez-vous vraiment désinscrire cet élève de ce groupe ?';
    if (!confirm(msg)) return;
    try {
      const res = await fetch(`/api/enrollments/${enrollmentId}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        this.playChime('success');
        this.openStudentProfile(studentId);
      } else {
        alert(data.error || 'Erreur lors de la désinscription');
      }
    } catch (e) {
      console.error(e);
    }
  }

  showStudentCard(id) {
    this.printStudentCard(id);
  }

  printStudentFiche() {
    window.print();
  }

  async toggleStudentStatus(id) {
    try {
      const res = await fetch(`/api/students/${id}/toggle-status`, { method: 'PATCH' });
      const data = await res.json();
      if (data.success) {
        this.playChime('success');
        this.loadStudents();
      }
    } catch (err) {
      console.error(err);
    }
  }

  async deleteStudent(id) {
    const msg = this.lang === 'ar' ? 'هل أنت متأكد من تعطيل هذا التلميذ؟' : 'Voulez-vous vraiment désactiver cet élève ?';
    if (!confirm(msg)) return;
    try {
      const res = await fetch(`/api/students/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        this.playChime('success');
        this.loadStudents();
      }
    } catch (err) {
      console.error(err);
    }
  }

  async openStudentAttendanceReport(id) {
    try {
      const [resStu, resAtt] = await Promise.all([
        fetch(`/api/students/${id}`),
        fetch(`/api/students/${id}/attendance`)
      ]);
      const dataStu = await resStu.json();
      const dataAtt = await resAtt.json();

      if (!dataStu.success) return;

      const student = dataStu.student;
      const stats = dataStu.stats;
      const attendance = dataAtt.attendance || [];

      document.getElementById('attReportTitle').textContent = `Rapport d'Assiduité — ${student.first_name} ${student.last_name}`;
      document.getElementById('attReportSubtitle').textContent = `Matricule: ${student.matricule} • Taux d'assiduité: ${stats.attendance_rate || 100}%`;

      document.getElementById('attTotalCount').textContent = stats.total_sessions || attendance.length;
      document.getElementById('attPresentCount').textContent = stats.present_count || attendance.filter(a => a.status === 'present').length;
      document.getElementById('attLateCount').textContent = attendance.filter(a => a.status === 'late').length;
      document.getElementById('attAbsentCount').textContent = attendance.filter(a => a.status === 'absent').length;

      const tbody = document.getElementById('attReportTableBody');
      if (attendance.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 24px;">
              ${this.lang === 'ar' ? 'لا توجد أي جلسات حضور مسجلة لهذا التلميذ حتى الآن.' : 'Aucun pointage de présence enregistré pour cet élève.'}
            </td>
          </tr>
        `;
      } else {
        tbody.innerHTML = attendance.map(a => `
          <tr>
            <td><strong>${a.session_date}</strong></td>
            <td>${a.check_in_time || '-'}</td>
            <td>${this.escapeHtml(a.group_name)} (${this.escapeHtml(a.subject_name)})</td>
            <td>${this.escapeHtml(a.teacher_name || '-')}</td>
            <td>
              <span class="badge-pill" style="${a.status === 'present' ? 'background:rgba(16,185,129,0.12);color:#10b981;' : (a.status === 'late' ? 'background:rgba(245,158,11,0.12);color:#f59e0b;' : 'background:rgba(239,68,68,0.12);color:#ef4444;')}">
                ${a.status === 'present' ? 'Présent' : (a.status === 'late' ? 'En retard' : 'Absent')}
              </span>
            </td>
          </tr>
        `).join('');
      }

      document.getElementById('modalStudentAttendanceReport').classList.add('active');
    } catch (err) {
      console.error(err);
    }
  }

  // =========================================================================
  // BATCH BADGES & TABLE SELECTION SYSTEM (IMPRESSION GROUPÉE DES BADGES)
  // =========================================================================
  onStudentCheckChange(id, checked) {
    id = Number(id);
    if (checked) {
      this.selectedStudentIds.add(id);
    } else {
      this.selectedStudentIds.delete(id);
    }
    this.updateBatchActionBar();
  }

  toggleSelectAllStudents(checked) {
    if (!this.students || this.students.length === 0) return;
    if (checked) {
      this.students.forEach(s => this.selectedStudentIds.add(s.id));
    } else {
      this.students.forEach(s => this.selectedStudentIds.delete(s.id));
    }
    document.querySelectorAll('.student-select-chk').forEach(chk => {
      chk.checked = checked;
    });
    this.updateBatchActionBar();
  }

  updateBatchActionBar() {
    const count = this.selectedStudentIds.size;
    const bar = document.getElementById('studentsBatchActionBar');
    const countEl = document.getElementById('batchSelectedCount');
    const textEl = document.getElementById('batchSelectedText');
    const printTextEl = document.getElementById('batchPrintBtnText');
    const isAr = this.lang === 'ar';

    if (countEl) countEl.textContent = count;
    if (textEl) {
      textEl.textContent = isAr 
        ? (count === 1 ? 'تلميذ محدد' : 'تلاميذ محددين') 
        : (count === 1 ? 'élève sélectionné' : 'élèves sélectionnés');
    }
    if (printTextEl) {
      printTextEl.textContent = isAr 
        ? `طباعة البطاقات (${count})` 
        : `Imprimer les badges (${count})`;
    }

    if (bar) {
      if (count > 0) {
        bar.style.display = 'flex';
      } else {
        bar.style.display = 'none';
      }
    }

    // Sync header checkbox
    const allChk = document.getElementById('selectAllStudentsCheckbox');
    if (allChk) {
      if (this.students && this.students.length > 0) {
        const allSelected = this.students.every(s => this.selectedStudentIds.has(s.id));
        const someSelected = this.students.some(s => this.selectedStudentIds.has(s.id));
        allChk.checked = allSelected;
        allChk.indeterminate = someSelected && !allSelected;
      } else {
        allChk.checked = false;
        allChk.indeterminate = false;
      }
    }
  }

  clearSelectedStudents() {
    this.selectedStudentIds.clear();
    document.querySelectorAll('.student-select-chk').forEach(chk => {
      chk.checked = false;
    });
    const allChk = document.getElementById('selectAllStudentsCheckbox');
    if (allChk) {
      allChk.checked = false;
      allChk.indeterminate = false;
    }
    this.updateBatchActionBar();
  }

  printSelectedBadges() {
    if (this.selectedStudentIds.size === 0) {
      const isAr = this.lang === 'ar';
      this.showToast(isAr ? 'يرجى تحديد تلميذ واحد على الأقل' : 'Veuillez sélectionner au moins un élève', 'warning');
      return;
    }
    this.openBatchBadgesModal(Array.from(this.selectedStudentIds));
  }

  printAllBadges() {
    this.openBatchBadgesModal();
  }

  async openBatchBadgesModal(preSelectedIds = null) {
    const isAr = this.lang === 'ar';

    // 1. Fetch fresh list of active students or use cached
    try {
      const res = await fetch('/api/students?status=active');
      const data = await res.json();
      if (data.success && data.students) {
        this.batchModalAllStudents = data.students;
      } else {
        this.batchModalAllStudents = this.students || [];
      }
    } catch (e) {
      this.batchModalAllStudents = this.students || [];
    }

    // 2. Populate Level and Group filter dropdowns
    const levelSelect = document.getElementById('batchBadgesFilterLevel');
    if (levelSelect) {
      levelSelect.innerHTML = `<option value="">${isAr ? '-- كل المستويات --' : '-- Tous les niveaux --'}</option>` +
        (this.levels || []).map(l => `<option value="${l.id}">${this.escapeHtml(l.name)}</option>`).join('');
    }

    const groupSelect = document.getElementById('batchBadgesFilterGroup');
    if (groupSelect) {
      groupSelect.innerHTML = `<option value="">${isAr ? '-- كل الأفواج --' : '-- Tous les groupes --'}</option>` +
        (this.groups || []).map(g => `<option value="${g.id}">${this.escapeHtml(g.name)} (${this.escapeHtml(g.subject_name || '')})</option>`).join('');
    }

    // 3. Reset filters
    const searchInput = document.getElementById('batchBadgesSearchInput');
    if (searchInput) searchInput.value = '';
    if (levelSelect) levelSelect.value = '';
    if (groupSelect) groupSelect.value = '';

    // 4. Initialize selected set
    this.batchModalSelectedIds = new Set();
    if (preSelectedIds && preSelectedIds.length > 0) {
      preSelectedIds.forEach(id => this.batchModalSelectedIds.add(Number(id)));
    } else if (this.selectedStudentIds && this.selectedStudentIds.size > 0) {
      this.selectedStudentIds.forEach(id => this.batchModalSelectedIds.add(Number(id)));
    } else {
      // Default: select all active students so one-click printing is immediately available
      this.batchModalAllStudents.forEach(s => this.batchModalSelectedIds.add(s.id));
    }

    // 5. Render list and counters
    this.setBatchTheme(this.batchCardTheme || 'blue');
    await this.filterBatchBadgesList();

    // 6. Show Modal
    const modal = document.getElementById('modalBatchBadges');
    if (modal) modal.classList.add('active');
  }

  async filterBatchBadgesList() {
    const isAr = this.lang === 'ar';
    const levelId = document.getElementById('batchBadgesFilterLevel')?.value;
    const groupId = document.getElementById('batchBadgesFilterGroup')?.value;
    const search = (document.getElementById('batchBadgesSearchInput')?.value || '').trim().toLowerCase();

    let filtered = [...this.batchModalAllStudents];

    if (levelId) {
      filtered = filtered.filter(s => String(s.level_id) === String(levelId));
    }

    if (search) {
      filtered = filtered.filter(s => {
        const full = `${s.first_name || ''} ${s.last_name || ''} ${s.matricule || ''} ${s.phone || ''}`.toLowerCase();
        return full.includes(search);
      });
    }

    // If group filter is selected, filter by enrolled group students
    if (groupId) {
      try {
        const res = await fetch(`/api/groups/${groupId}/students`);
        const data = await res.json();
        if (data.success && data.students) {
          const groupStudentIds = new Set(data.students.map(item => item.student_id));
          filtered = filtered.filter(s => groupStudentIds.has(s.id));
        }
      } catch (e) {
        console.error('Failed to filter by group:', e);
      }
    }

    this._currentFilteredBatchStudents = filtered;

    const container = document.getElementById('batchBadgesStudentsContainer');
    const countEl = document.getElementById('batchListCount');
    if (countEl) countEl.textContent = filtered.length;

    if (!container) return;

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; color: var(--text-muted); padding: 30px; font-size: 13px;">
          <i class="fa-solid fa-users-slash" style="font-size: 24px; margin-bottom: 8px; opacity: 0.5; display: block;"></i>
          ${isAr ? 'لا يوجد أي تلميذ مطابق للمعايير المحددة' : 'Aucun élève ne correspond aux critères'}
        </div>
      `;
      this.updateBatchModalCounters();
      return;
    }

    container.innerHTML = filtered.map(s => {
      const isChecked = this.batchModalSelectedIds.has(s.id);
      const fullName = `${s.first_name || ''} ${s.last_name || ''}`.trim();
      const matricule = s.matricule || `ETU-${String(s.id).padStart(4, '0')}`;
      const level = s.level_name || '—';
      const phone = s.phone || s.parent_phone || '—';

      return `
        <div class="batch-student-row ${isChecked ? 'selected' : ''}" id="batchRow_${s.id}" onclick="app.toggleBatchModalStudent(${s.id})">
          <input type="checkbox" class="edumind-chk" id="batchChk_${s.id}" ${isChecked ? 'checked' : ''} onclick="event.stopPropagation(); app.toggleBatchModalStudent(${s.id})">
          <div style="width: 32px; height: 32px; border-radius: 6px; background: rgba(59, 130, 246, 0.12); display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0;">
            ${(s.gender || '').toUpperCase() === 'F' ? '👧' : '👦'}
          </div>
          <div style="flex: 1; min-width: 0;">
            <div style="font-weight: 700; font-size: 13px; color: var(--text-heading); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
              ${this.escapeHtml(fullName)}
            </div>
            <div style="font-size: 11px; color: var(--text-muted); display: flex; gap: 8px;">
              <span style="font-family: monospace; color: #60a5fa; font-weight: 600;">${this.escapeHtml(matricule)}</span>
              <span>•</span>
              <span>${this.escapeHtml(level)}</span>
              <span>•</span>
              <span>${this.escapeHtml(phone)}</span>
            </div>
          </div>
          <span class="badge-pill" style="font-size: 11px; ${isChecked ? 'background: #10b981; color: #fff;' : 'background: rgba(255,255,255,0.06); color: var(--text-muted);'}">
            ${isChecked ? (isAr ? 'محدد' : 'Sélectionné') : (isAr ? 'غير محدد' : 'Non')}
          </span>
        </div>
      `;
    }).join('');

    this.updateBatchModalCounters();
  }

  toggleBatchModalStudent(id) {
    id = Number(id);
    if (this.batchModalSelectedIds.has(id)) {
      this.batchModalSelectedIds.delete(id);
    } else {
      this.batchModalSelectedIds.add(id);
    }

    const row = document.getElementById(`batchRow_${id}`);
    const chk = document.getElementById(`batchChk_${id}`);
    const isChecked = this.batchModalSelectedIds.has(id);
    const isAr = this.lang === 'ar';

    if (row) {
      if (isChecked) row.classList.add('selected');
      else row.classList.remove('selected');
      const badgePill = row.querySelector('.badge-pill');
      if (badgePill) {
        badgePill.style.background = isChecked ? '#10b981' : 'rgba(255,255,255,0.06)';
        badgePill.style.color = isChecked ? '#fff' : 'var(--text-muted)';
        badgePill.textContent = isChecked ? (isAr ? 'محدد' : 'Sélectionné') : (isAr ? 'غير محدد' : 'Non');
      }
    }
    if (chk) chk.checked = isChecked;

    this.updateBatchModalCounters();
  }

  toggleSelectAllBatchModal() {
    const currentList = this._currentFilteredBatchStudents || this.batchModalAllStudents || [];
    if (currentList.length === 0) return;

    const allChecked = currentList.every(s => this.batchModalSelectedIds.has(s.id));
    if (allChecked) {
      // Uncheck all in current filter
      currentList.forEach(s => this.batchModalSelectedIds.delete(s.id));
    } else {
      // Check all in current filter
      currentList.forEach(s => this.batchModalSelectedIds.add(s.id));
    }

    this.filterBatchBadgesList();
  }

  setBatchTheme(theme = 'emerald') {
    this.batchCardTheme = theme;
    ['Emerald', 'Purple', 'Gold', 'White'].forEach(t => {
      const btn = document.getElementById(`btnBatchTheme${t}`);
      if (btn) {
        btn.classList.toggle('active', t.toLowerCase() === theme.toLowerCase());
      }
    });
  }

  updateBatchModalCounters() {
    const checkedCount = this.batchModalSelectedIds.size;
    const checkedEl = document.getElementById('batchModalCheckedCount');
    if (checkedEl) checkedEl.textContent = checkedCount;

    const isAr = this.lang === 'ar';
    const pagesCount = Math.ceil(checkedCount / 8) || 0;
    const estimateEl = document.getElementById('batchPagesEstimateInfo');
    if (estimateEl) {
      if (checkedCount === 0) {
        estimateEl.textContent = isAr ? 'لم يتم تحديد أي تلميذ (8 بطاقات / ورقة)' : 'Aucun élève sélectionné (8 cartes / page)';
      } else {
        estimateEl.textContent = isAr 
          ? `${checkedCount} بطاقة • ${pagesCount} ورقة A4 (${pagesCount * 8} خانة)` 
          : `${checkedCount} cartes • ${pagesCount} feuille(s) A4 (8 par page)`;
      }
    }

    const toggleTextEl = document.getElementById('batchModalToggleAllText');
    if (toggleTextEl) {
      const currentList = this._currentFilteredBatchStudents || [];
      const allChecked = currentList.length > 0 && currentList.every(s => this.batchModalSelectedIds.has(s.id));
      toggleTextEl.textContent = allChecked 
        ? (isAr ? 'إلغاء تحديد الكل' : 'Désélectionner tout') 
        : (isAr ? 'تحديد الكل' : 'Tout sélectionner');
    }

    const printBtnText = document.getElementById('btnExecuteBatchPrintText');
    if (printBtnText) {
      printBtnText.textContent = isAr 
        ? `معاينة وطباعة (${checkedCount} بطاقة)` 
        : `Imprimer (${checkedCount} badges)`;
    }
  }

  startBatchBadgesPrint() {
    const isAr = this.lang === 'ar';
    if (this.batchModalSelectedIds.size === 0) {
      this.showToast(isAr ? 'يرجى تحديد تلميذ واحد على الأقل للطباعة' : 'Veuillez sélectionner au moins un élève à imprimer', 'warning');
      return;
    }

    const studentsToPrint = (this.batchModalAllStudents || [])
      .filter(s => this.batchModalSelectedIds.has(s.id));

    if (studentsToPrint.length === 0) {
      this.showToast(isAr ? 'لم يتم العثور على بيانات التلاميذ المحددين' : 'Aucune donnée pour les élèves sélectionnés', 'warning');
      return;
    }

    this.executeBatchBadgePrint(studentsToPrint, this.batchCardTheme || 'emerald');
  }

  executeBatchBadgePrint(students, theme = 'emerald') {
    const isAr = this.lang === 'ar';
    const schoolName = this.settings?.school_name || 'EDUMIND ACADEMY';
    const schoolYear = this.settings?.school_year || '2025/2026';

    // Helper to generate vector SVG barcode using JsBarcode
    const generateBarcodeSvg = (matricule) => {
      try {
        if (window.JsBarcode) {
          const svgNode = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          JsBarcode(svgNode, matricule, {
            format: 'CODE128',
            lineColor: '#000000',
            background: '#ffffff',
            width: 1.8,
            height: 38,
            displayValue: true,
            font: 'monospace',
            fontOptions: 'bold',
            fontSize: 11,
            textMargin: 2,
            margin: 2
          });
          return svgNode.outerHTML;
        }
      } catch (err) {
        console.warn('Barcode generation failed for:', matricule, err);
      }
      return `<div style="font-family: monospace; font-size: 11px; font-weight: 800; padding: 4px; border: 1px dashed #000; text-align: center;">${matricule}</div>`;
    };

    // Split students into chunks of 8 (8 badges per standard A4 sheet)
    const chunkSize = 8;
    const pages = [];
    for (let i = 0; i < students.length; i += chunkSize) {
      pages.push(students.slice(i, i + chunkSize));
    }

    // Build HTML for each student badge
    const renderCard = (s) => {
      const fullName = `${s.first_name || ''} ${s.last_name || ''}`.trim();
      const matricule = s.matricule || `ETU-${String(s.id).padStart(4, '0')}`;
      const levelName = s.level_name || 'Niveau non défini';
      const phone = s.phone || s.parent_phone || '-';
      const barcodeSvg = generateBarcodeSvg(matricule);
      const isFemale = (s.gender || '').toUpperCase() === 'F';

      return `
        <div class="badge-wrapper">
          <!-- Crop marks for scissors on all 4 corners -->
          <div class="crop-mark top-left"></div>
          <div class="crop-mark top-right"></div>
          <div class="crop-mark bottom-left"></div>
          <div class="crop-mark bottom-right"></div>

          <div class="print-cr80-card ${theme}">
            <div class="card-header">
              <div class="brand">
                <div class="logo">🎓</div>
                <div>
                  <div class="school-name">${this.escapeHtml(schoolName)}</div>
                  <div class="school-tag">${isAr ? 'مؤسسة تعليمية وتدريبية' : "ÉTABLISSEMENT D'ENSEIGNEMENT"}</div>
                </div>
              </div>
              <div class="badge-col">
                <span class="badge-tag">${isAr ? 'بطاقة مدرسية • رسمي' : 'CARTE ÉLÈVE • OFFICIEL'}</span>
                <span class="year-tag">${this.escapeHtml(schoolYear)}</span>
              </div>
            </div>

            <div class="card-body">
              <div class="avatar-box">
                ${s.photo_url 
                  ? `<img src="${s.photo_url}" alt="Photo">` 
                  : `<div style="font-size: 34px; text-align: center; line-height: 72px;">${isFemale ? '👧' : '👦'}</div>`}
              </div>
              <div class="details-box">
                <div class="student-name">${this.escapeHtml(fullName)}</div>
                <div class="matricule-pill">N° ${this.escapeHtml(matricule)}</div>
                <div class="info-line"><strong>${isAr ? 'المستوى :' : 'Niveau :'}</strong> ${this.escapeHtml(levelName)}</div>
                <div class="info-line"><strong>${isAr ? 'الهاتف :' : 'Tél :'}</strong> ${this.escapeHtml(phone)}</div>
              </div>
            </div>

            <div class="barcode-box">
              ${barcodeSvg}
            </div>
          </div>
        </div>
      `;
    };

    // Render A4 sheets
    const sheetsHtml = pages.map((pageStudents, pageIndex) => {
      const cardsHtml = pageStudents.map(s => renderCard(s)).join('');
      return `
        <div class="a4-sheet">
          <div class="sheet-watermark">EDUMIND • Page ${pageIndex + 1}/${pages.length} — Planche 8 Badges (CR-80)</div>
          <div class="badges-grid">
            ${cardsHtml}
          </div>
        </div>
      `;
    }).join('');

    const printWin = window.open('', '_blank');
    if (!printWin) {
      alert(isAr ? 'يرجى السماح بالنوافذ المنبثقة لطباعة البطاقات.' : 'Veuillez autoriser les fenêtres contextuelles pour imprimer les badges.');
      return;
    }

    const fullHtml = `
      <!DOCTYPE html>
      <html lang="${this.lang}" dir="ltr">
      <head>
        <meta charset="UTF-8">
        <title>EDUMIND — Planche Badges Élèves (${students.length} Cartes)</title>
        <style>
          @page {
            size: A4 portrait;
            margin: 8mm 6mm;
          }
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            background: #f1f5f9;
            color: #0f172a;
            padding: 15px;
          }

          .a4-sheet {
            width: 198mm;
            min-height: 280mm;
            margin: 0 auto 20px;
            background: #ffffff;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            padding: 6mm 4mm;
            position: relative;
            page-break-after: always;
            break-after: page;
          }

          .sheet-watermark {
            font-size: 8.5px;
            color: #94a3b8;
            text-align: center;
            margin-bottom: 4mm;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .badges-grid {
            display: grid;
            grid-template-columns: repeat(2, 85.6mm);
            grid-auto-rows: 54mm;
            gap: 8mm 12mm;
            justify-content: center;
            align-content: start;
          }

          .badge-wrapper {
            position: relative;
            width: 85.6mm;
            height: 54mm;
          }

          /* Crop marks for scissors on each badge corner */
          .crop-mark {
            position: absolute;
            width: 12px;
            height: 12px;
            z-index: 10;
            pointer-events: none;
          }
          .crop-mark.top-left {
            top: -4px; left: -4px;
            border-top: 1.5px dashed #64748b;
            border-left: 1.5px dashed #64748b;
          }
          .crop-mark.top-right {
            top: -4px; right: -4px;
            border-top: 1.5px dashed #64748b;
            border-right: 1.5px dashed #64748b;
          }
          .crop-mark.bottom-left {
            bottom: -4px; left: -4px;
            border-bottom: 1.5px dashed #64748b;
            border-left: 1.5px dashed #64748b;
          }
          .crop-mark.bottom-right {
            bottom: -4px; right: -4px;
            border-bottom: 1.5px dashed #64748b;
            border-right: 1.5px dashed #64748b;
          }

          /* CR-80 Standard Card Dimensions & Design */
          .print-cr80-card {
            width: 85.6mm;
            height: 54mm;
            border-radius: 3.5mm;
            padding: 3mm 3.5mm;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow: hidden;
            border: 1.2px solid #2563eb;
            background: #ffffff;
            color: #0f172a;
            box-shadow: 0 2px 6px rgba(0,0,0,0.08);
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          .print-cr80-card.purple {
            background: linear-gradient(135deg, #1e1b4b 0%, #4c1d95 60%, #2e1065 100%);
            color: #ffffff;
            border-color: #8b5cf6;
          }
          .print-cr80-card.emerald {
            background: linear-gradient(135deg, #064e3b 0%, #065f46 60%, #022c22 100%);
            color: #ffffff;
            border-color: #10b981;
          }
          .print-cr80-card.gold {
            background: linear-gradient(135deg, #18181b 0%, #27272a 60%, #09090b 100%);
            color: #ffffff;
            border-color: #f59e0b;
          }
          .print-cr80-card.white {
            background: #ffffff;
            color: #0f172a;
            border-color: #94a3b8;
          }

          .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 0.8px solid rgba(255,255,255,0.2);
            padding-bottom: 1.2mm;
          }
          .white .card-header { border-bottom-color: #cbd5e1; }

          .brand { display: flex; align-items: center; gap: 2mm; }
          .logo { font-size: 15px; }
          .school-name { font-size: 10.5px; font-weight: 800; line-height: 1.1; }
          .school-tag { font-size: 6px; opacity: 0.8; letter-spacing: 0.3px; }

          .badge-col { text-align: right; }
          .badge-tag { font-size: 6px; font-weight: 800; background: #f59e0b; color: #fff; padding: 1px 3.5px; border-radius: 2px; }
          .year-tag { font-size: 7px; display: block; opacity: 0.8; margin-top: 1px; }

          .card-body {
            display: flex;
            gap: 2.5mm;
            align-items: center;
            margin: 1mm 0;
          }

          .avatar-box {
            width: 18mm;
            height: 22mm;
            border-radius: 2mm;
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.3);
            overflow: hidden;
            flex-shrink: 0;
          }
          .white .avatar-box { background: #f1f5f9; border-color: #cbd5e1; }
          .avatar-box img { width: 100%; height: 100%; object-fit: cover; }

          .details-box { flex: 1; min-width: 0; line-height: 1.2; }
          .student-name { font-size: 11.5px; font-weight: 800; margin-bottom: 0.8mm; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
          .matricule-pill { display: inline-block; font-family: monospace; font-size: 8px; font-weight: 800; background: rgba(59,130,246,0.25); padding: 1px 4px; border-radius: 2px; margin-bottom: 0.8mm; }
          .white .matricule-pill { background: #dbeafe; color: #1e40af; }
          .info-line { font-size: 7.2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
          .info-line strong { opacity: 0.75; }

          .barcode-box {
            background: #ffffff;
            border-radius: 1.8mm;
            padding: 1mm 2mm 0.5mm;
            text-align: center;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          }
          .barcode-box svg {
            width: 100% !important;
            height: 10.5mm !important;
            display: block;
            margin: 0 auto;
          }

          .no-print-bar {
            max-width: 198mm;
            margin: 0 auto 15px;
            background: #ffffff;
            border-radius: 8px;
            padding: 10px 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            border: 1px solid #cbd5e1;
          }
          .no-print-btn {
            padding: 7px 18px;
            border-radius: 6px;
            font-size: 13px;
            font-weight: 700;
            cursor: pointer;
            border: none;
            display: inline-flex;
            align-items: center;
            gap: 6px;
          }
          .no-print-btn.primary {
            background: #2563eb;
            color: #ffffff;
          }
          .no-print-btn.secondary {
            background: #e2e8f0;
            color: #334155;
          }

          @media print {
            .no-print-bar { display: none !important; }
            body { background: transparent; padding: 0; margin: 0; }
            .a4-sheet { box-shadow: none; margin: 0; padding: 4mm 2mm; width: 100%; page-break-inside: avoid; }
            .a4-sheet:last-child { page-break-after: auto !important; break-after: auto !important; margin-bottom: 0; }
          }
        </style>
      </head>
      <body>
        <div class="no-print-bar">
          <div style="font-size: 13px; color: #334155; font-weight: 600;">
            🎓 <strong>EDUMIND</strong> • ${students.length} بطاقة (${pages.length} ورقة A4)
          </div>
          <div style="display: flex; gap: 8px;">
            <button class="no-print-btn primary" onclick="window.print()">
              🖨️ ${isAr ? 'طباعة البطاقات' : 'Imprimer'}
            </button>
            <button class="no-print-btn secondary" onclick="window.close()">
              ✕ ${isAr ? 'إغلاق' : 'Fermer'}
            </button>
          </div>
        </div>

        ${sheetsHtml}

        <script>
          function doPrint() {
            setTimeout(function() { window.print(); }, 400);
          }
          if (document.readyState === 'complete') {
            doPrint();
          } else {
            window.addEventListener('load', doPrint);
          }
        </script>
      </body>
      </html>
    `;

    printWin.document.open();
    printWin.document.write(fullHtml);
    printWin.document.close();
  }

  exportStudentsToExcel() {
    if (!this.students || this.students.length === 0) {
      alert(this.lang === 'ar' ? 'لا توجد بيانات للتصدير' : 'Aucune donnée à exporter');
      return;
    }

    const isAr = this.lang === 'ar';
    const headers = isAr ? [
      'رقم القيد', 'اللقب', 'الاسم', 'الجنس', 'المستوى', 'الهاتف', 'هاتف الولي', 'اسم الولي', 'العنوان', 'الاشتراكات', 'الفوترة (دج)', 'المدفوع (دج)', 'المتبقي (دج)', 'الحالة'
    ] : [
      'Matricule', 'Nom', 'Prénom', 'Genre', 'Niveau', 'Téléphone', 'Tél Parent', 'Nom Tuteur', 'Adresse', 'Inscriptions', 'Facturé (DA)', 'Payé (DA)', 'Reste Dû (DA)', 'Statut'
    ];

    const rows = this.students.map(s => [
      `"${s.matricule}"`,
      `"${(s.last_name || '').replace(/"/g, '""')}"`,
      `"${(s.first_name || '').replace(/"/g, '""')}"`,
      `"${s.gender || 'M'}"`,
      `"${(s.level_name || '').replace(/"/g, '""')}"`,
      `"${s.phone || ''}"`,
      `"${s.parent_phone || ''}"`,
      `"${(s.parent_name || '').replace(/"/g, '""')}"`,
      `"${(s.address || '').replace(/"/g, '""')}"`,
      s.active_groups_count || 0,
      s.total_billed || 0,
      s.total_paid || 0,
      s.remaining_due || 0,
      s.active ? (isAr ? 'نشط' : 'Actif') : (isAr ? 'غير نشط' : 'Inactif')
    ]);

    const csvContent = '\uFEFF' + [headers.join(';'), ...rows.map(r => r.join(';'))].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `eleves_edumind_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    this.playChime('success');
  }

  // ==========================================================================
  // STUDENT EXCEL / RAKMANA IMPORT SYSTEM
  // ==========================================================================
  async openImportStudentsModal() {
    if (!this.levels || this.levels.length === 0) {
      await this.loadLevels();
    }
    if (!this.groups || this.groups.length === 0) {
      await this.loadGroups();
    }

    // Populate Level dropdown
    const lvlSelect = document.getElementById('importDefaultLevel');
    if (lvlSelect) {
      lvlSelect.innerHTML = `<option value="">${this.lang === 'ar' ? '-- اختياري (أو التعرف من الملف) --' : '-- Optionnel (ou auto-détecté) --'}</option>` +
        (this.levels || []).map(l => `<option value="${l.id}">${this.escapeHtml(l.name)}</option>`).join('');
    }

    // Populate Group dropdown
    const grpSelect = document.getElementById('importDefaultGroup');
    if (grpSelect) {
      grpSelect.innerHTML = `<option value="">${this.lang === 'ar' ? '-- بدون تسجيل في فوج حالياً --' : '-- Aucun groupe pour le moment --'}</option>` +
        (this.groups || []).map(g => `<option value="${g.id}">${this.escapeHtml(g.name)} (${this.escapeHtml(g.level_name || '')})</option>`).join('');
    }

    this.resetImportFile();
    document.getElementById('modalImportStudents').classList.add('active');
  }

  switchImportTab(tabKey) {
    document.querySelectorAll('.import-tab-btn').forEach(btn => {
      btn.classList.remove('active');
      btn.style.background = 'transparent';
      btn.style.color = 'var(--text-muted)';
      btn.style.fontWeight = '600';
    });

    const activeBtn = document.getElementById(tabKey === 'excel' ? 'tabImportExcel' : tabKey === 'eleve' ? 'tabImportEleve' : 'tabImportRakmana');
    if (activeBtn) {
      activeBtn.classList.add('active');
      activeBtn.style.background = 'rgba(16, 185, 129, 0.15)';
      activeBtn.style.color = '#10b981';
      activeBtn.style.fontWeight = '700';
    }

    const promptTitle = document.querySelector('#dropZonePrompt h4');
    if (promptTitle) {
      if (tabKey === 'excel') {
        promptTitle.textContent = this.lang === 'ar' ? 'اسحب وأفلت نموذج Excel المعبأ هنا' : 'Glissez-déposez le modèle Excel ici';
      } else if (tabKey === 'eleve') {
        promptTitle.textContent = this.lang === 'ar' ? 'اسحب وأفلت ملف Eleve الوزاري هنا' : 'Glissez-déposez le fichier Eleve ici';
      } else {
        promptTitle.textContent = this.lang === 'ar' ? 'اسحب وأفلت ملف HTML المستخرج من منصة الرقمنة هنا' : 'Glissez-déposez le fichier HTML de la plate-forme ici';
      }
    }
  }

  resetImportFile() {
    this._importedStudentsData = [];
    const fileInput = document.getElementById('importStudentFileInput');
    if (fileInput) fileInput.value = '';

    const prompt = document.getElementById('dropZonePrompt');
    if (prompt) prompt.style.display = 'block';

    const info = document.getElementById('dropZoneFileInfo');
    if (info) info.style.display = 'none';

    const preview = document.getElementById('importPreviewSection');
    if (preview) preview.style.display = 'none';

    const tableBody = document.getElementById('importPreviewTableBody');
    if (tableBody) tableBody.innerHTML = '';

    const btnExec = document.getElementById('btnExecuteImport');
    if (btnExec) {
      btnExec.disabled = true;
      btnExec.style.opacity = '0.5';
      btnExec.style.cursor = 'not-allowed';
      const textSpan = document.getElementById('btnExecuteImportText');
      if (textSpan) textSpan.textContent = this.lang === 'ar' ? 'تأكيد وحفظ الاستيراد' : 'Confirmer l\'importation';
    }
  }

  handleStudentFileDrop(event) {
    event.preventDefault();
    const zone = document.getElementById('studentDropZone');
    if (zone) {
      zone.style.borderColor = 'rgba(16, 185, 129, 0.45)';
      zone.style.background = 'rgba(16, 185, 129, 0.03)';
    }
    if (event.dataTransfer && event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      this.parseStudentImportFile(event.dataTransfer.files[0]);
    }
  }

  handleStudentFileSelected(event) {
    if (event.target && event.target.files && event.target.files.length > 0) {
      this.parseStudentImportFile(event.target.files[0]);
    }
  }

  async parseStudentImportFile(file) {
    if (!file) return;
    if (typeof XLSX === 'undefined') {
      this.showToast(this.lang === 'ar' ? 'خطأ: تعذر تحميل مكتبة قراءة ملفات الإكسل (XLSX)' : 'Erreur: Bibliothèque XLSX introuvable', 'error');
      return;
    }

    const prompt = document.getElementById('dropZonePrompt');
    if (prompt) prompt.style.display = 'none';
    const info = document.getElementById('dropZoneFileInfo');
    if (info) info.style.display = 'flex';
    const fName = document.getElementById('importFileName');
    if (fName) fName.textContent = file.name;
    const fSize = document.getElementById('importFileSize');
    if (fSize) fSize.textContent = `${(file.size / 1024).toFixed(1)} KB`;

    try {
      const arrayBuffer = await file.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: 'array', cellDates: true });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];

      const rawRows = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: '' });
      if (!rawRows || rawRows.length === 0) {
        this.showToast(this.lang === 'ar' ? 'الملف فارغ أو لا يحتوي على بيانات' : 'Le fichier est vide', 'warning');
        this.resetImportFile();
        return;
      }

      // Detect header row index
      let headerRowIndex = -1;
      let headerCols = [];

      for (let r = 0; r < Math.min(rawRows.length, 10); r++) {
        const row = rawRows[r].map(c => String(c || '').trim());
        const rowStr = row.join(' ');
        if ((rowStr.includes('اللقب') || rowStr.toLowerCase().includes('nom')) &&
            (rowStr.includes('الاسم') || rowStr.toLowerCase().includes('prenom') || rowStr.toLowerCase().includes('prénom'))) {
          headerRowIndex = r;
          headerCols = row;
          break;
        }
      }

      if (headerRowIndex === -1) {
        headerRowIndex = 0;
        headerCols = rawRows[0].map(c => String(c || '').trim());
      }

      const colMap = {
        matricule: -1,
        group: -1,
        statut: -1,
        gender: -1,
        lastName: -1,
        firstName: -1,
        birthDate: -1,
        birthPlace: -1,
        parentName: -1,
        address: -1,
        phone: -1,
        level: -1
      };

      headerCols.forEach((col, idx) => {
        const c = col.trim().toLowerCase();
        if (colMap.matricule === -1 && (c.includes('تعريف') || c.includes('معرف') || c.includes('تسجيل') || c.includes('matricule') || c.includes('identifiant') || c === 'id' || c === 'n°' || c === 'no' || c === 'رقم')) {
          if (!c.includes('فوج') && !c.includes('قسم') && !c.includes('groupe')) {
            colMap.matricule = idx;
          }
        }
        if (colMap.group === -1 && (c.includes('فوج') || c.includes('قسم') || c.includes('groupe') || c.includes('classe'))) {
          colMap.group = idx;
        }
        if (colMap.statut === -1 && (c.includes('صفة') || c.includes('صفة') || c.includes('وضعية') || c.includes('statut') || c.includes('qualité'))) {
          colMap.statut = idx;
        }
        if (colMap.gender === -1 && (c.includes('جنس') || c.includes('sexe') || c.includes('genre'))) {
          colMap.gender = idx;
        }
        if (colMap.lastName === -1 && (c.includes('لقب') || c.includes('nom') || c.includes('nom de famille')) && !c.includes('أب') && !c.includes('pere') && !c.includes('père')) {
          colMap.lastName = idx;
        }
        if (colMap.firstName === -1 && (c.includes('اسم') || c.includes('إسم') || c.includes('prenom') || c.includes('prénom')) && !c.includes('أب') && !c.includes('pere') && !c.includes('père') && !c.includes('لقب')) {
          colMap.firstName = idx;
        }
        if (colMap.birthDate === -1 && (c.includes('ميلاد') || c.includes('naissance')) && !c.includes('مكان') && !c.includes('lieu')) {
          colMap.birthDate = idx;
        }
        if (colMap.birthPlace === -1 && (c.includes('مكان الميلاد') || c.includes('مكان') || c.includes('lieu'))) {
          colMap.birthPlace = idx;
        }
        if (colMap.parentName === -1 && (c.includes('أب') || c.includes('اب') || c.includes('ولي') || c.includes('père') || c.includes('pere') || c.includes('tuteur') || c.includes('parent'))) {
          colMap.parentName = idx;
        }
        if (colMap.address === -1 && (c.includes('عنوان') || c.includes('إقامة') || c.includes('اقامة') || c.includes('adresse') || c.includes('domicile'))) {
          colMap.address = idx;
        }
        if (colMap.phone === -1 && (c.includes('هاتف') || c.includes('téléphone') || c.includes('telephone') || c.includes('tel') || c.includes('mobile'))) {
          colMap.phone = idx;
        }
        if (colMap.level === -1 && (c.includes('مستوى') || c.includes('niveau') || c.includes('سنة') || c.includes('année'))) {
          colMap.level = idx;
        }
      });

      const parsedStudents = [];
      for (let r = headerRowIndex + 1; r < rawRows.length; r++) {
        const row = rawRows[r];
        if (!row || row.length === 0) continue;

        let firstName = colMap.firstName !== -1 ? String(row[colMap.firstName] || '').trim() : '';
        let lastName = colMap.lastName !== -1 ? String(row[colMap.lastName] || '').trim() : '';
        let matricule = colMap.matricule !== -1 ? String(row[colMap.matricule] || '').trim() : '';
        let gender = colMap.gender !== -1 ? String(row[colMap.gender] || '').trim() : 'ذكر';
        let rawDate = colMap.birthDate !== -1 ? row[colMap.birthDate] : '';
        let birthPlace = colMap.birthPlace !== -1 ? String(row[colMap.birthPlace] || '').trim() : '';
        let parentName = colMap.parentName !== -1 ? String(row[colMap.parentName] || '').trim() : '';
        let address = colMap.address !== -1 ? String(row[colMap.address] || '').trim() : '';
        let phone = colMap.phone !== -1 ? String(row[colMap.phone] || '').trim() : '';
        let groupName = colMap.group !== -1 ? String(row[colMap.group] || '').trim() : '';
        let statut = colMap.statut !== -1 ? String(row[colMap.statut] || '').trim() : '';
        let levelName = colMap.level !== -1 ? String(row[colMap.level] || '').trim() : '';

        if (!lastName && firstName.includes(' ')) {
          const parts = firstName.split(' ');
          lastName = parts[0];
          firstName = parts.slice(1).join(' ');
        }

        let birthDate = '';
        if (rawDate instanceof Date) {
          const y = rawDate.getFullYear();
          const m = String(rawDate.getMonth() + 1).padStart(2, '0');
          const d = String(rawDate.getDate()).padStart(2, '0');
          birthDate = `${y}-${m}-${d}`;
        } else if (rawDate) {
          birthDate = String(rawDate).trim();
          if (birthDate.includes('/')) {
            const dp = birthDate.split('/');
            if (dp.length === 3 && dp[2].length === 4) {
              birthDate = `${dp[2]}-${dp[1].padStart(2, '0')}-${dp[0].padStart(2, '0')}`;
            }
          }
        }

        if (!firstName && !lastName && !matricule) continue;

        parsedStudents.push({
          matricule: matricule || null,
          first_name: firstName,
          last_name: lastName,
          gender: gender,
          birth_date: birthDate || null,
          birth_place: birthPlace || null,
          parent_name: parentName || null,
          parent_phone: phone || null,
          phone: phone || null,
          address: address || null,
          raw_group: groupName || null,
          group_name: groupName || null,
          statut: statut || null,
          level_name: levelName || null,
          isValid: Boolean(firstName && lastName)
        });
      }

      if (parsedStudents.length === 0) {
        this.showToast(this.lang === 'ar' ? 'لم يتم العثور على أسطر صالحة للتلاميذ' : 'Aucun élève trouvé', 'warning');
        this.resetImportFile();
        return;
      }

      this._importedStudentsData = parsedStudents;
      this.renderImportPreview(parsedStudents);
      this.showToast(this.lang === 'ar' ? `تمت قراءة ${parsedStudents.length} تلميذ بنجاح!` : `${parsedStudents.length} élèves détectés avec succès !`, 'success');

    } catch (err) {
      console.error('Import parse error:', err);
      this.showToast(this.lang === 'ar' ? 'تعذر قراءة محتوى الملف: ' + err.message : 'Erreur de lecture du fichier: ' + err.message, 'error');
      this.resetImportFile();
    }
  }

  renderImportPreview(students) {
    const previewSection = document.getElementById('importPreviewSection');
    const tableBody = document.getElementById('importPreviewTableBody');
    const badgeTotal = document.getElementById('importBadgeTotal');
    const badgeReady = document.getElementById('importBadgeReady');
    const badgeWarn = document.getElementById('importBadgeWarn');
    const btnExec = document.getElementById('btnExecuteImport');

    if (!previewSection || !tableBody) return;

    previewSection.style.display = 'block';

    const validCount = students.filter(s => s.isValid).length;
    const warnCount = students.filter(s => !s.isValid).length;
    const isAr = this.lang === 'ar';
    if (badgeTotal) badgeTotal.textContent = isAr ? `الإجمالي: ${students.length}` : `Total : ${students.length}`;
    if (badgeReady) badgeReady.textContent = isAr ? `جاهز للاستيراد: ${validCount}` : `Prêts : ${validCount}`;
    if (badgeWarn) {
      if (warnCount > 0) {
        badgeWarn.style.display = 'inline-block';
        badgeWarn.textContent = isAr ? `${warnCount} أسماء غير مكتملة` : `${warnCount} noms incomplets`;
      } else {
        badgeWarn.style.display = 'none';
      }
    }

    tableBody.innerHTML = students.slice(0, 100).map((s, idx) => {
      const isM = String(s.gender).includes('ذكر') || String(s.gender).toUpperCase() === 'M' || String(s.gender).toLowerCase().includes('gar');
      const genderBadge = isM
        ? `<span style="color: #38bdf8; font-weight: 700;">${isAr ? 'ذكر' : 'M'}</span>`
        : `<span style="color: #ec4899; font-weight: 700;">${isAr ? 'أنثى' : 'F'}</span>`;
      
      const statusBadge = s.isValid
        ? `<span style="background: rgba(16, 185, 129, 0.15); color: #10b981; padding: 2px 8px; border-radius: 6px; font-weight: 700; font-size: 11px;">${isAr ? 'جاهز' : 'Prêt'}</span>`
        : `<span style="background: rgba(239, 68, 68, 0.15); color: #ef4444; padding: 2px 8px; border-radius: 6px; font-weight: 700; font-size: 11px;">${isAr ? 'اسم ناقص' : 'Incomplet'}</span>`;

      const levelBadgeText = s.level_name || (isAr ? 'تلقائي / محدد أعلاه' : 'Auto / Défini');
      const autoMatriculeText = isAr ? 'تلقائي' : 'Auto';

      return `
        <tr style="${!s.isValid ? 'background: rgba(239, 68, 68, 0.05);' : ''}">
          <td style="text-align: center; color: var(--text-muted); font-weight: 700;">${idx + 1}</td>
          <td style="font-family: monospace; font-weight: 700; color: #38bdf8;">${this.escapeHtml(s.matricule || autoMatriculeText)}</td>
          <td style="font-weight: 700; color: var(--text-heading);">${this.escapeHtml(s.last_name || '-')}</td>
          <td style="font-weight: 700; color: var(--text-heading);">${this.escapeHtml(s.first_name || '-')}</td>
          <td>${genderBadge}</td>
          <td><span style="background: rgba(56, 189, 248, 0.1); color: #38bdf8; font-weight: 600; padding: 2px 7px; border-radius: 4px; font-size: 11px;">${this.escapeHtml(levelBadgeText)}</span></td>
          <td>${this.escapeHtml(s.birth_date || '-')}</td>
          <td>${this.escapeHtml(s.birth_place || '-')}</td>
          <td>${this.escapeHtml(s.parent_name || '-')}</td>
          <td style="max-width: 140px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${this.escapeHtml(s.address || '-')}</td>
          <td><span style="background: rgba(255,255,255,0.06); padding: 2px 6px; border-radius: 4px;">${this.escapeHtml(s.raw_group || s.statut || '-')}</span></td>
          <td style="text-align: center;">${statusBadge}</td>
        </tr>
      `;
    }).join('');

    if (students.length > 100) {
      tableBody.innerHTML += `
        <tr>
          <td colspan="12" style="text-align: center; color: var(--text-muted); padding: 10px; font-style: italic;">
            ${isAr ? `... وعرض باقي التلاميذ (${students.length - 100} تلميذ إضافي سيتم استيرادهم بالكامل) ...` : `... et affichage des ${students.length - 100} autres élèves importés au total ...`}
          </td>
        </tr>
      `;
    }

    if (btnExec) {
      if (validCount > 0) {
        btnExec.disabled = false;
        btnExec.style.opacity = '1';
        btnExec.style.cursor = 'pointer';
        const textSpan = document.getElementById('btnExecuteImportText');
        if (textSpan) textSpan.textContent = isAr ? `تأكيد واستيراد (${validCount} تلميذ)` : `Confirmer et importer (${validCount} élèves)`;
      } else {
        btnExec.disabled = true;
        btnExec.style.opacity = '0.5';
        btnExec.style.cursor = 'not-allowed';
      }
    }
  }

  downloadStudentExcelTemplate() {
    if (typeof XLSX === 'undefined') {
      this.showToast(this.lang === 'ar' ? 'تعذر تحميل مكتبة XLSX' : 'XLSX introuvable', 'error');
      return;
    }

    const headers = [
      'رقم التعريف المدرسي',
      'رقم الفوج',
      'الصفة',
      'الجنس',
      'المستوى الدراسي',
      'اللقب',
      'الاسم',
      'تاريخ الميلاد',
      'مكان الميلاد',
      'إسم الأب',
      'العنوان',
      'رقم هاتف الولي'
    ];

    const sampleRows = [
      headers,
      ['10458921', '1', 'متمدرس', 'ذكر', '4AM', 'بن علي', 'محمد', '2012-05-14', 'الجزائر العاصمة', 'أحمد', 'حي النصر عمارة 4', '0550123456'],
      ['10458922', '1', 'متمدرس', 'أنثى', '4AM', 'بوزيد', 'مريم', '2013-11-20', 'البليدة', 'عبد الرحمن', 'شارع فلسطين رقم 12', '0661987654'],
      ['10458923', '2', 'نصف داخلي', 'ذكر', '1AS', 'منصوري', 'يوسف', '2011-09-08', 'بومرداس', 'إبراهيم', 'وسط المدينة', '0770334455']
    ];

    const ws = XLSX.utils.aoa_to_sheet(sampleRows);
    ws['!cols'] = [
      { wch: 22 },
      { wch: 12 },
      { wch: 14 },
      { wch: 10 },
      { wch: 18 }, // المستوى الدراسي
      { wch: 16 },
      { wch: 16 },
      { wch: 16 },
      { wch: 18 },
      { wch: 18 },
      { wch: 25 },
      { wch: 16 }
    ];

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Eleves');

    XLSX.writeFile(wb, 'modele_import_eleves_edumind.xlsx');
    this.showToast(this.lang === 'ar' ? 'تم تحميل نموذج Excel الجاهز بنجاح!' : 'Modèle Excel téléchargé avec succès !', 'success');
  }

  async executeStudentImport() {
    if (!this._importedStudentsData || this._importedStudentsData.length === 0) {
      this.showToast(this.lang === 'ar' ? 'يرجى اختيار ملف أولاً' : 'Veuillez sélectionner un fichier', 'warning');
      return;
    }

    const validStudents = this._importedStudentsData.filter(s => s.isValid);
    if (validStudents.length === 0) {
      this.showToast(this.lang === 'ar' ? 'لا يوجد تلاميذ مؤهلون للاستيراد' : 'Aucun élève valide', 'warning');
      return;
    }

    const defaultLevelId = document.getElementById('importDefaultLevel')?.value || null;
    const defaultGroupId = document.getElementById('importDefaultGroup')?.value || null;
    const duplicateAction = document.getElementById('importOptDuplicate')?.value || 'skip';
    const matriculeMode = document.getElementById('importOptMatricule')?.value || 'keep';

    const payloadStudents = validStudents.map(s => ({
      ...s,
      matricule: matriculeMode === 'generate' ? null : s.matricule
    }));

    const btnExec = document.getElementById('btnExecuteImport');
    const textSpan = document.getElementById('btnExecuteImportText');
    const originalText = textSpan ? textSpan.textContent : 'تأكيد وحفظ الاستيراد';

    try {
      if (btnExec) {
        btnExec.disabled = true;
        btnExec.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> <span>${this.lang === 'ar' ? 'جاري الاستيراد والحفظ...' : 'Importation en cours...'}</span>`;
      }

      const response = await fetch('/api/students/import-batch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          students: payloadStudents,
          duplicateAction,
          defaultLevelId,
          defaultGroupId
        })
      });

      const result = await response.json();
      if (!result.success) {
        throw new Error(result.error || 'Erreur lors de l’importation');
      }

      const msg = this.lang === 'ar'
        ? `✅ اكتمل الاستيراد: تم تسجيل ${result.imported} تلميذ جديد، تحديث ${result.updated}، وتخطي ${result.skipped}.`
        : `✅ Importation réussie : ${result.imported} ajoutés, ${result.updated} mis à jour, ${result.skipped} ignorés.`;

      this.showToast(msg, 'success');
      this.playChime('success');
      this.closeModals();
      this.resetImportFile();

      await this.loadStudents();
      if (typeof this.loadDashboardStats === 'function') {
        this.loadDashboardStats();
      }

    } catch (err) {
      console.error('Execute import error:', err);
      this.showToast(this.lang === 'ar' ? 'فشل الاستيراد: ' + err.message : 'Échec de l’importation: ' + err.message, 'error');
    } finally {
      if (btnExec) {
        btnExec.disabled = false;
        btnExec.innerHTML = `<i class="fa-solid fa-cloud-arrow-up"></i> <span id="btnExecuteImportText">${originalText}</span>`;
      }
    }
  }

  async openModalStudent() {
    // 1. Ensure levels are loaded and dropdown populated
    if (!this.levels || this.levels.length === 0) {
      await this.loadLevels();
    }
    const modalL = document.getElementById('studentLevel');
    if (modalL) {
      modalL.innerHTML = `<option value="">${this.lang === 'ar' ? '-- اختر المستوى الدراسي --' : '-- Choisir le niveau --'}</option>` +
        (this.levels || []).map(l => `<option value="${l.id}">${this.escapeHtml(l.name)}</option>`).join('');
    }

    // 2. Clean form reset
    const form = document.getElementById('studentForm');
    if (form) form.reset();

    document.getElementById('modalStudentTitle').textContent = this.lang === 'ar' ? 'تسجيل تلميذ جديد' : 'Inscrire un Nouvel Élève';
    document.getElementById('studentId').value = '';
    const matInput = document.getElementById('studentMatricule');
    if (matInput) matInput.value = '';
    document.getElementById('studentFirstName').value = '';
    document.getElementById('studentLastName').value = '';
    document.getElementById('studentGender').value = 'M';
    document.getElementById('studentLevel').value = '';
    document.getElementById('studentPhone').value = '';
    document.getElementById('studentParentName').value = '';
    document.getElementById('studentParentPhone').value = '';
    document.getElementById('studentAddress').value = '';

    const submitBtn = document.querySelector('#studentForm button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = this.lang === 'ar' ? 'حفظ بيانات التلميذ' : "Enregistrer l'Élève";
    }

    await this.fetchParentsList();
    this.populateStudentParentSelect();

    document.getElementById('modalStudent').classList.add('active');
  }

  async editStudent(id) {
    if (!this.levels || this.levels.length === 0) {
      await this.loadLevels();
    }
    const modalL = document.getElementById('studentLevel');
    if (modalL) {
      modalL.innerHTML = `<option value="">${this.lang === 'ar' ? '-- اختر المستوى الدراسي --' : '-- Choisir le niveau --'}</option>` +
        (this.levels || []).map(l => `<option value="${l.id}">${this.escapeHtml(l.name)}</option>`).join('');
    }

    let s = (this.students || []).find(item => item.id === id);
    if (!s) {
      try {
        const res = await fetch(`/api/students/${id}`);
        const data = await res.json();
        if (data.success) s = data.student;
      } catch (e) { }
    }
    if (!s) return;

    document.getElementById('modalStudentTitle').textContent = this.lang === 'ar' ? 'تعديل بيانات التلميذ' : "Modifier l'Élève";
    document.getElementById('studentId').value = s.id;
    const matInput = document.getElementById('studentMatricule');
    if (matInput) matInput.value = s.matricule || '';
    document.getElementById('studentFirstName').value = s.first_name || '';
    document.getElementById('studentLastName').value = s.last_name || '';
    document.getElementById('studentGender').value = s.gender || 'M';
    document.getElementById('studentLevel').value = s.level_id || '';
    document.getElementById('studentPhone').value = s.phone || '';
    document.getElementById('studentParentName').value = s.parent_name || '';
    document.getElementById('studentParentPhone').value = s.parent_phone || '';
    document.getElementById('studentAddress').value = s.address || '';

    const submitBtn = document.querySelector('#studentForm button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = this.lang === 'ar' ? 'حفظ التعديلات' : "Mettre à jour l'Élève";
    }

    await this.fetchParentsList();
    this.populateStudentParentSelect(s.parent_id);

    document.getElementById('modalStudent').classList.add('active');
  }

  async saveStudent() {
    if (this._savingStudent) return; // Prevent double submit

    const submitBtn = document.querySelector('#studentForm button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.innerHTML : '';
    const isAr = this.lang === 'ar';

    const id = document.getElementById('studentId')?.value || '';
    const firstName = document.getElementById('studentFirstName')?.value?.trim();
    const lastName = document.getElementById('studentLastName')?.value?.trim();

    if (!firstName || !lastName) {
      this.showToast(isAr ? 'يرجى إدخال الاسم واللقب' : 'Veuillez saisir le nom et prénom', 'warning');
      return;
    }

    const payload = {
      matricule: document.getElementById('studentMatricule')?.value?.trim() || '',
      first_name: firstName,
      last_name: lastName,
      gender: document.getElementById('studentGender')?.value || 'M',
      level_id: document.getElementById('studentLevel')?.value || '',
      phone: document.getElementById('studentPhone')?.value?.trim() || '',
      parent_id: document.getElementById('studentParentId')?.value || null,
      parent_name: document.getElementById('studentParentName')?.value?.trim() || '',
      parent_phone: document.getElementById('studentParentPhone')?.value?.trim() || '',
      address: document.getElementById('studentAddress')?.value?.trim() || ''
    };

    const url = id ? `/api/students/${id}` : '/api/students';
    const method = id ? 'PUT' : 'POST';

    this._savingStudent = true;
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${isAr ? 'جاري الحفظ...' : 'Enregistrement...'}`;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);

    try {
      const res = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      const data = await res.json();
      if (data.success) {
        this.closeModals();
        const form = document.getElementById('studentForm');
        if (form) form.reset();
        document.getElementById('studentId').value = '';
        this.playChime('success');
        this.showToast(isAr ? 'تم حفظ بيانات التلميذ بنجاح!' : 'Élève enregistré avec succès !', 'success');
        this.loadStudents();
        if (this.currentProfileStudentId && Number(this.currentProfileStudentId) === Number(id)) {
          this.openStudentProfile(id);
        }
      } else {
        this.showToast(data.error || (isAr ? 'حدث خطأ أثناء الحفظ' : 'Erreur lors de l’enregistrement'), 'error');
      }
    } catch (e) {
      clearTimeout(timeoutId);
      console.error(e);
      if (e.name === 'AbortError') {
        this.showToast(isAr ? 'انتهت مهلة الاتصال بالخادم، يرجى إعادة المحاولة' : 'Délai d’attente dépassé, veuillez réessayer', 'warning');
      } else {
        this.showToast(isAr ? 'خطأ في الاتصال بالخادم' : 'Erreur réseau ou serveur', 'error');
      }
    } finally {
      this._savingStudent = false;
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    }
  }

  // -------------------------------------------------------------
  // STUDENT MODAL PARENT HELPERS
  // -------------------------------------------------------------
  onStudentParentSelectChange() {
    const parentId = document.getElementById('studentParentId')?.value;
    const badgeBox = document.getElementById('parentDiscountPreviewBox');
    const badgeVal = document.getElementById('parentDiscountBadgeVal');
    const nameInput = document.getElementById('studentParentName');
    const phoneInput = document.getElementById('studentParentPhone');

    if (!parentId) {
      if (badgeBox) badgeBox.style.display = 'none';
      return;
    }

    const p = (this.parents || []).find(item => String(item.id) === String(parentId));
    if (p) {
      if (nameInput) nameInput.value = p.full_name || '';
      if (phoneInput && p.phone) phoneInput.value = p.phone;
      if (badgeBox && badgeVal) {
        badgeVal.textContent = p.discount_percent || 0;
        badgeBox.style.display = 'block';
      }
    }
  }

  async fetchParentsList() {
    try {
      if (this.parents && this.parents.length > 0) return this.parents;
      const res = await fetch('/api/parents');
      const data = await res.json();
      if (data.success) {
        this.parents = data.parents || [];
      }
    } catch (e) {
      console.error(e);
    }
    return this.parents || [];
  }

  populateStudentParentSelect(selectedParentId = null) {
    const select = document.getElementById('studentParentId');
    if (!select) return;

    const isAr = this.lang === 'ar';
    const list = this.parents || [];
    let html = `<option value="">${isAr ? '-- اختار ولي مسجل مسبقاً (أو أدخل بياناته أدناه) --' : '-- Choisir un parent existant (ou saisir ci-dessous) --'}</option>`;

    list.forEach(p => {
      const discText = p.discount_percent > 0 ? ` (${p.discount_percent}%)` : '';
      const phoneText = p.phone ? ` - ${p.phone}` : '';
      const isSel = selectedParentId && String(p.id) === String(selectedParentId);
      html += `<option value="${p.id}" ${isSel ? 'selected' : ''}>${this.escapeHtml(p.full_name)}${phoneText}${discText}</option>`;
    });

    select.innerHTML = html;

    const badgeBox = document.getElementById('parentDiscountPreviewBox');
    const badgeVal = document.getElementById('parentDiscountBadgeVal');
    if (selectedParentId) {
      const p = list.find(item => String(item.id) === String(selectedParentId));
      if (p && badgeBox && badgeVal) {
        badgeVal.textContent = p.discount_percent || 0;
        badgeBox.style.display = 'block';
      }
    } else if (badgeBox) {
      badgeBox.style.display = 'none';
    }
  }

  // ==========================================================================
  // PARENTS D'ÉLÈVES & FAMILLES MANAGEMENT MODULE
  // ==========================================================================
  async loadParents() {
    try {
      const res = await fetch('/api/parents');
      const data = await res.json();
      if (!data.success) return;

      this.parents = data.parents || [];

      // Update KPI Cards
      const totalParents = this.parents.length;
      const discountParents = this.parents.filter(p => (Number(p.discount_percent) || 0) > 0).length;
      const enrolledChildren = this.parents.reduce((sum, p) => sum + (Number(p.children_count) || 0), 0);
      const totalFamilyDebts = this.parents.reduce((sum, p) => sum + (Number(p.total_debt) || 0), 0);

      const kpiTotal = document.getElementById('kpiTotalParents');
      if (kpiTotal) kpiTotal.textContent = totalParents;

      const kpiDiscount = document.getElementById('kpiDiscountParents');
      if (kpiDiscount) kpiDiscount.textContent = discountParents;

      const kpiChildren = document.getElementById('kpiEnrolledChildren');
      if (kpiChildren) kpiChildren.textContent = enrolledChildren;

      const kpiDebts = document.getElementById('kpiTotalFamilyDebts');
      if (kpiDebts) kpiDebts.textContent = `${totalFamilyDebts.toLocaleString()} DA`;

      const searchInput = document.getElementById('searchParentInput');
      if (searchInput && searchInput.value.trim()) {
        this.filterParents(searchInput.value);
      } else {
        this.renderParentsTable(this.parents);
      }
    } catch (err) {
      console.error('Erreur loadParents:', err);
    }
  }

  filterParents(query = '') {
    const list = this.parents || [];
    const term = (query || '').trim().toLowerCase();
    const discountFilter = document.getElementById('filterParentDiscount')?.value || 'all';
    const debtsFilter = document.getElementById('filterParentDebts')?.value || 'all';

    const norm = (str) => (str || '').toLowerCase()
      .replace(/[أإآ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/ى/g, 'ي')
      .trim();

    const normTerm = norm(term);

    const filtered = list.filter(p => {
      // 1. Text Search
      if (normTerm) {
        const pName = norm(p.full_name);
        const pPhone = (p.phone || '').toLowerCase();
        const pSec = (p.phone_secondary || '').toLowerCase();
        const pAddr = norm(p.address);
        const childrenMatch = (p.children || []).some(c => {
          const cName = norm(c.name);
          const cMat = (c.matricule || '').toLowerCase();
          return cName.includes(normTerm) || cMat.includes(normTerm);
        });

        const matchesText = pName.includes(normTerm) ||
                            pPhone.includes(normTerm) ||
                            pSec.includes(normTerm) ||
                            pAddr.includes(normTerm) ||
                            childrenMatch;

        if (!matchesText) return false;
      }

      // 2. Discount Filter
      const discount = Number(p.discount_percent) || 0;
      if (discountFilter === 'with_discount' && discount <= 0) return false;
      if (discountFilter === 'no_discount' && discount > 0) return false;

      // 3. Debts Filter
      const debt = Number(p.total_debt) || 0;
      if (debtsFilter === 'has_debt' && debt <= 0) return false;
      if (debtsFilter === 'up_to_date' && debt > 0) return false;

      return true;
    });

    this.renderParentsTable(filtered);
  }

  renderParentsTable(list) {
    const tbody = document.getElementById('parentsTableBody');
    if (!tbody) return;

    const isAr = this.lang === 'ar';
    if (!list || list.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="6" style="text-align: center; color: var(--text-muted); padding: 40px;">
            <i class="fa-solid fa-users-slash" style="font-size: 32px; display: block; margin-bottom: 10px; opacity: 0.5;"></i>
            ${isAr ? 'لم يتم العثور على أي ولي يطابق معايير البحث' : 'Aucun parent correspondant trouvé'}
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = list.map(p => {
      const discount = Number(p.discount_percent) || 0;
      const debt = Number(p.total_debt) || 0;
      const initials = (p.full_name || 'P').trim().split(/\s+/).slice(0, 2).map(n => n[0]).join('').toUpperCase() || 'P';

      const cleanPhone = (p.phone || '').replace(/[^0-9]/g, '');
      const waNumber = cleanPhone.startsWith('0') ? '213' + cleanPhone.slice(1) : cleanPhone;

      // Badges of children
      let childrenHtml = '';
      if (p.children && p.children.length > 0) {
        childrenHtml = `
          <div style="display: flex; flex-wrap: wrap; gap: 6px; align-items: center;">
            <span class="badge" style="background: rgba(59, 130, 246, 0.15); color: #60a5fa; font-size: 11px; padding: 2px 7px; border-radius: 4px; font-weight: 700;">
              ${p.children.length} ${isAr ? (p.children.length === 1 ? 'ابن' : 'أبناء') : (p.children.length === 1 ? 'enfant' : 'enfants')}
            </span>
            ${p.children.map(c => `
              <span class="badge-pill" style="background: rgba(255, 255, 255, 0.05); border: 1px solid var(--border-color); color: var(--text-heading); font-size: 12px; cursor: pointer;"
                    onclick="app.openStudentProfile(${c.id})" title="${isAr ? 'عرض ملف التلميذ' : 'Voir la fiche'}">
                <i class="fa-solid fa-user-graduate" style="color: #60a5fa; margin-right: 4px; margin-left: 4px; font-size: 10px;"></i>
                ${this.escapeHtml(c.name)}
              </span>
            `).join('')}
          </div>
        `;
      } else {
        childrenHtml = `<span style="color: var(--text-muted); font-size: 12px;">0 ${isAr ? 'أبناء مسجلين' : 'enfants'}</span>`;
      }

      // Discount Badge
      const discountBadge = discount > 0
        ? `<span class="badge" style="background: rgba(16, 185, 129, 0.18); color: #10b981; font-weight: 800; font-size: 13px; padding: 5px 10px; border-radius: 6px; display: inline-flex; align-items: center; gap: 4px;">
             <i class="fa-solid fa-percent" style="font-size: 11px;"></i> ${discount}%
           </span>`
        : `<span style="color: var(--text-muted); font-size: 12px; font-weight: 600;">0%</span>`;

      // Debt Badge
      const debtBadge = debt > 0
        ? `<strong style="color: #ef4444; font-size: 13.5px; font-family: monospace;">${debt.toLocaleString()} DA</strong>`
        : `<span class="badge" style="background: rgba(16, 185, 129, 0.12); color: #10b981; font-weight: 700; padding: 4px 8px; border-radius: 6px; font-size: 12px;">
             <i class="fa-solid fa-check"></i> ${isAr ? 'خالص' : 'À jour'}
           </span>`;

      return `
        <tr>
          <td>
            <div style="display: flex; align-items: center; gap: 10px;">
              <div style="width: 36px; height: 36px; border-radius: 50%; background: linear-gradient(135deg, #7c3aed, #a78bfa); color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 13px; flex-shrink: 0;">
                ${initials}
              </div>
              <div>
                <strong style="color: var(--text-heading); font-size: 13.5px; cursor: pointer;" onclick="app.openParentDossier(${p.id})" title="${isAr ? 'عرض ملف العائلة' : 'Voir le dossier'}">
                  ${this.escapeHtml(p.full_name)}
                </strong>
                ${p.address ? `<div style="font-size: 11px; color: var(--text-muted); margin-top: 1px;"><i class="fa-solid fa-location-dot" style="font-size: 10px;"></i> ${this.escapeHtml(p.address)}</div>` : ''}
              </div>
            </div>
          </td>
          <td>
            <div style="display: flex; align-items: center; gap: 8px;">
              <a href="tel:${p.phone}" style="color: var(--text-main); font-size: 13px; font-family: monospace; font-weight: 600; text-decoration: none;" title="Appeler">
                ${this.escapeHtml(p.phone || '—')}
              </a>
              ${waNumber ? `
                <a href="https://wa.me/${waNumber}" target="_blank" rel="noopener" class="btn-icon" style="color: #25d366; width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center;" title="WhatsApp">
                  <i class="fa-brands fa-whatsapp"></i>
                </a>
              ` : ''}
            </div>
            ${p.phone_secondary ? `<div style="font-size: 11px; color: var(--text-muted); font-family: monospace;">${this.escapeHtml(p.phone_secondary)}</div>` : ''}
          </td>
          <td>${childrenHtml}</td>
          <td style="text-align: center;">${discountBadge}</td>
          <td style="text-align: right;">${debtBadge}</td>
          <td style="text-align: center;">
            <div style="display: inline-flex; gap: 6px; align-items: center;">
              <button class="btn-action-badge" title="${isAr ? 'ملف العائلة والأبناء' : 'Dossier familial'}" onclick="app.openParentDossier(${p.id})"
                style="color: #8b5cf6; background: rgba(139, 92, 246, 0.12);">
                <i class="fa-solid fa-folder-open"></i>
              </button>
              <button class="btn-action-edit" title="${isAr ? 'تعديل بيانات الولي' : 'Modifier'}" onclick="app.openModalParent(${p.id})">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button class="btn-action-delete" title="${isAr ? 'حذف' : 'Supprimer'}" onclick="app.deleteParent(${p.id})"
                style="color: #ef4444; background: rgba(239, 68, 68, 0.1);">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  async openModalParent(parentId = null) {
    const isAr = this.lang === 'ar';
    const form = document.getElementById('parentForm');
    if (form) form.reset();

    const titleEl = document.getElementById('modalParentTitle');
    const idInput = document.getElementById('parentId');
    const discountInput = document.getElementById('parentDiscountPercent');

    if (!parentId) {
      if (titleEl) titleEl.textContent = isAr ? 'إضافة ولي أمر جديد' : "Nouveau Parent d'élève";
      if (idInput) idInput.value = '';
      if (discountInput) discountInput.value = '0';
      document.getElementById('modalParent').classList.add('active');
      return;
    }

    if (titleEl) titleEl.textContent = isAr ? 'تعديل بيانات الولي' : "Modifier le Parent";
    if (idInput) idInput.value = parentId;

    try {
      const res = await fetch(`/api/parents/${parentId}`);
      const data = await res.json();
      if (!data.success || !data.parent) {
        this.showToast(isAr ? 'تعذر جلب بيانات الولي' : 'Impossible de charger le parent', 'error');
        return;
      }

      const p = data.parent;
      document.getElementById('parentFullName').value = p.full_name || '';
      document.getElementById('parentPhone').value = p.phone || '';
      document.getElementById('parentPhoneSecondary').value = p.phone_secondary || '';
      document.getElementById('parentEmail').value = p.email || '';
      document.getElementById('parentAddress').value = p.address || '';
      document.getElementById('parentDiscountPercent').value = p.discount_percent || 0;
      document.getElementById('parentNotes').value = p.notes || '';

      document.getElementById('modalParent').classList.add('active');
    } catch (err) {
      console.error(err);
      this.showToast(isAr ? 'خطأ في الاتصال' : 'Erreur de connexion', 'error');
    }
  }

  async saveParent() {
    const isAr = this.lang === 'ar';
    const id = document.getElementById('parentId')?.value || '';
    const fullName = document.getElementById('parentFullName')?.value?.trim();
    const phone = document.getElementById('parentPhone')?.value?.trim();

    if (!fullName || !phone) {
      this.showToast(isAr ? 'يرجى إدخال اسم الولي ورقم هاتفه' : 'Veuillez renseigner le nom et le téléphone', 'warning');
      return;
    }

    const payload = {
      full_name: fullName,
      phone: phone,
      phone_secondary: document.getElementById('parentPhoneSecondary')?.value?.trim() || '',
      email: document.getElementById('parentEmail')?.value?.trim() || '',
      address: document.getElementById('parentAddress')?.value?.trim() || '',
      discount_percent: Math.min(100, Math.max(0, parseFloat(document.getElementById('parentDiscountPercent')?.value) || 0)),
      notes: document.getElementById('parentNotes')?.value?.trim() || ''
    };

    const url = id ? `/api/parents/${id}` : '/api/parents';
    const method = id ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        this.closeModals();
        this.showToast(isAr ? 'تم حفظ بيانات الولي بنجاح!' : 'Parent enregistré avec succès !', 'success');
        this.playChime('success');
        await this.loadParents();
        // Refresh parents in memory for student dropdown
        this.parents = null;
        await this.fetchParentsList();
      } else {
        this.showToast(data.error || (isAr ? 'حدث خطأ أثناء الحفظ' : 'Erreur lors de l’enregistrement'), 'error');
      }
    } catch (err) {
      console.error(err);
      this.showToast(isAr ? 'خطأ في الخادم' : 'Erreur serveur', 'error');
    }
  }

  async deleteParent(parentId) {
    const isAr = this.lang === 'ar';
    const confirmMsg = isAr
      ? 'هل أنت متأكد من حذف هذا الولي؟ (لن يتم حذف التلاميذ ولكن سيتم فك ارتباطهم)'
      : 'Confirmer la suppression de ce parent ? (Les élèves ne seront pas supprimés)';

    if (!confirm(confirmMsg)) return;

    try {
      const res = await fetch(`/api/parents/${parentId}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        this.showToast(isAr ? 'تم حذف الولي بنجاح' : 'Parent supprimé avec succès', 'success');
        this.playChime('success');
        await this.loadParents();
        this.parents = null;
        await this.fetchParentsList();
      } else {
        this.showToast(data.error || (isAr ? 'تعذر حذف الولي' : 'Impossible de supprimer'), 'error');
      }
    } catch (err) {
      console.error(err);
    }
  }

  async openParentDossier(parentId) {
    const isAr = this.lang === 'ar';
    try {
      const res = await fetch(`/api/parents/${parentId}`);
      const data = await res.json();
      if (!data.success || !data.parent) {
        this.showToast(isAr ? 'تعذر جلب ملف العائلة' : 'Impossible de charger le dossier', 'error');
        return;
      }

      const p = data.parent;
      const children = data.children || [];
      const unpaid = data.unpaid || [];

      document.getElementById('dossierParentName').textContent = p.full_name || (isAr ? 'ملف العائلة' : 'Dossier familial');
      document.getElementById('dossierParentPhone').innerHTML = `<i class="fa-solid fa-phone"></i> ${this.escapeHtml(p.phone || '—')}`;
      document.getElementById('dossierParentDiscount').innerHTML = `<i class="fa-solid fa-percent"></i> ${isAr ? 'تخفيض عائلي:' : 'Remise:'} <b>${p.discount_percent || 0}%</b>`;

      const addrEl = document.getElementById('dossierParentAddress');
      if (addrEl) {
        if (p.address) {
          addrEl.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${this.escapeHtml(p.address)}`;
          addrEl.style.display = 'inline';
        } else {
          addrEl.style.display = 'none';
        }
      }

      document.getElementById('dossierChildrenCount').textContent = children.length;
      document.getElementById('dossierDiscountVal').textContent = `${p.discount_percent || 0}%`;
      document.getElementById('dossierTotalDebt').textContent = `${(p.total_debt || 0).toLocaleString()} DA`;

      // 1. Render Children Cards
      const childrenContainer = document.getElementById('dossierChildrenContainer');
      if (children.length === 0) {
        childrenContainer.innerHTML = `
          <div style="padding: 16px; text-align: center; color: var(--text-muted); background: var(--bg-card); border: 1px dashed var(--border-color); border-radius: 8px;">
            ${isAr ? 'لا يوجد أي تلميذ مرتبط بهذا الولي حالياً.' : 'Aucun élève associé à ce parent pour le moment.'}
          </div>
        `;
      } else {
        childrenContainer.innerHTML = children.map(c => {
          const avatarSvg = this.getStudentAvatarSvg(c.gender);
          const groupsList = (c.groups || []).map(g => `
            <span class="badge-pill" style="background: rgba(59, 130, 246, 0.12); color: #60a5fa; font-size: 11px;">
              ${this.escapeHtml(g.name)} (${this.escapeHtml(g.subject_name || '')})
            </span>
          `).join('');

          return `
            <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 8px; padding: 12px 14px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
              <div style="display: flex; align-items: center; gap: 12px;">
                ${avatarSvg}
                <div>
                  <div style="font-weight: 700; color: var(--text-heading); font-size: 14px;">
                    ${this.escapeHtml(c.first_name)} ${this.escapeHtml(c.last_name)}
                  </div>
                  <div style="font-size: 11.5px; color: var(--text-muted); display: flex; align-items: center; gap: 8px; margin-top: 2px;">
                    <code style="color: #60a5fa;">${this.escapeHtml(c.matricule || '')}</code>
                    <span>&bull;</span>
                    <span>${this.escapeHtml(c.level_name || '—')}</span>
                  </div>
                  <div style="margin-top: 6px; display: flex; flex-wrap: wrap; gap: 4px;">
                    ${groupsList || `<span style="font-size: 11px; color: var(--text-muted);">${isAr ? 'غير مسجل في أي فوج' : 'Non inscrit'}</span>`}
                  </div>
                </div>
              </div>
              <div style="display: flex; gap: 8px; align-items: center;">
                <button class="btn-secondary" style="font-size: 12px; padding: 6px 12px;" onclick="app.closeModals(); app.openStudentProfile(${c.id});">
                  <i class="fa-solid fa-address-card"></i> ${isAr ? 'الملف' : 'Fiche'}
                </button>
                <button class="btn-primary" style="font-size: 12px; padding: 6px 12px; background: linear-gradient(135deg, #10b981, #059669);"
                  onclick="app.closeModals(); app.selectFastPayStudent(${c.id}); app.switchView('paiements');">
                  <i class="fa-solid fa-cash-register"></i> ${isAr ? 'تسديد' : 'Payer'}
                </button>
              </div>
            </div>
          `;
        }).join('');
      }

      // 2. Render Unpaid Debts Breakdown Table
      const unpaidBody = document.getElementById('dossierUnpaidTableBody');
      if (unpaid.length === 0) {
        unpaidBody.innerHTML = `
          <tr>
            <td colspan="5" style="text-align: center; color: #10b981; padding: 20px; font-weight: 600;">
              <i class="fa-solid fa-circle-check" style="font-size: 18px; margin-bottom: 4px; display: block;"></i>
              ${isAr ? 'ممتاز! لا توجد أي مستحقات أو ديون على هذه العائلة.' : 'Excellente situation ! Aucun impayé pour cette famille.'}
            </td>
          </tr>
        `;
      } else {
        unpaidBody.innerHTML = unpaid.map(u => `
          <tr>
            <td><strong>${this.escapeHtml(u.student_name)}</strong></td>
            <td>
              <div>${this.escapeHtml(u.group_name)}</div>
              <div style="font-size: 11px; color: var(--text-muted);">${this.escapeHtml(u.subject_name || '')}</div>
            </td>
            <td><code style="color: #60a5fa;">${this.escapeHtml(u.paid_month || 'Mois en cours')}</code></td>
            <td style="text-align: right;"><strong style="color: #ef4444; font-size: 13.5px;">${Number(u.amount_due).toLocaleString()} DA</strong></td>
            <td style="text-align: center;">
              <button class="btn-primary" style="font-size: 11px; padding: 4px 10px; background: #10b981;"
                onclick="app.closeModals(); app.selectFastPayStudent(${u.student_id}); app.switchView('paiements');">
                ${isAr ? 'تسديد الآن' : 'Régulariser'}
              </button>
            </td>
          </tr>
        `).join('');
      }

      const editBtn = document.getElementById('btnDossierEditParent');
      if (editBtn) {
        editBtn.onclick = () => {
          this.closeModals();
          this.openModalParent(p.id);
        };
      }

      document.getElementById('modalParentDossier').classList.add('active');
    } catch (err) {
      console.error(err);
    }
  }

  exportParentsToExcel() {
    if (!this.parents || this.parents.length === 0) {
      alert(this.lang === 'ar' ? 'لا توجد بيانات أولياء للتصدير' : 'Aucune donnée de parents à exporter');
      return;
    }

    const isAr = this.lang === 'ar';
    const headers = isAr ? [
      'اسم الولي الكامل', 'رقم الهاتف', 'هاتف ثانوي', 'البريد الإلكتروني', 'العنوان', 'نسبة التخفيض (%)', 'عدد الأبناء', 'أسماء الأبناء', 'إجمالي الديون (دج)', 'ملاحظات'
    ] : [
      'Nom complet', 'Téléphone', 'Tél secondaire', 'Email', 'Adresse', 'Réduction (%)', 'Nb Enfants', 'Noms Enfants', 'Total Dettes (DA)', 'Notes'
    ];

    const rows = this.parents.map(p => {
      const childrenNames = (p.children || []).map(c => c.name).join(', ');
      return [
        `"${(p.full_name || '').replace(/"/g, '""')}"`,
        `"${p.phone || ''}"`,
        `"${p.phone_secondary || ''}"`,
        `"${p.email || ''}"`,
        `"${(p.address || '').replace(/"/g, '""')}"`,
        p.discount_percent || 0,
        p.children_count || 0,
        `"${childrenNames.replace(/"/g, '""')}"`,
        p.total_debt || 0,
        `"${(p.notes || '').replace(/"/g, '""')}"`
      ];
    });

    const csvContent = '\uFEFF' + [headers.join(';'), ...rows.map(r => r.join(';'))].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `parents_edumind_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    this.playChime('success');
  }

  setStudentCardTheme(theme = 'emerald') {
    this.currentCardTheme = theme;
    ['Emerald', 'Purple', 'Gold', 'White'].forEach(t => {
      const btn = document.getElementById(`btnTheme${t}`);
      if (btn) btn.classList.toggle('active', t.toLowerCase() === theme.toLowerCase());
    });
    const card = document.getElementById('printableCard');
    if (card) {
      card.className = `student-card-preview theme-${theme}`;
    }
  }

  copyStudentBarcodeMatricule() {
    const matricule = this.currentCardStudent?.matricule || document.getElementById('cardStudentMatricule')?.textContent;
    if (!matricule) return;
    navigator.clipboard.writeText(matricule).then(() => {
      this.playChime('click');
      alert(this.lang === 'ar' ? `تم نسخ رقم الباركود: ${matricule}` : `Matricule copié : ${matricule}`);
    }).catch(() => { });
  }

  async printStudentCard(id) {
    let s = (this.students || []).find(item => item.id === id);
    let enrollments = [];
    try {
      const res = await fetch(`/api/students/${id}`);
      const data = await res.json();
      if (data.success && data.student) {
        s = data.student;
        enrollments = data.enrollments || [];
      }
    } catch (e) { }

    if (!s) return;
    this.currentCardStudent = s;
    this.currentCardEnrollments = enrollments;

    // School Info from settings
    const schoolName = this.settings?.school_name || 'EDUMIND ACADEMY';
    const schoolYear = this.settings?.school_year || '2025/2026';
    const schoolLogo = this.settings?.school_logo || '/img/logo-icon.png';

    const schoolNameEl = document.getElementById('cardSchoolName');
    if (schoolNameEl) schoolNameEl.textContent = schoolName;

    const schoolYearEl = document.getElementById('cardSchoolYear');
    if (schoolYearEl) schoolYearEl.textContent = schoolYear;

    const schoolLogoEl = document.getElementById('cardSchoolLogo');
    if (schoolLogoEl && schoolLogo) schoolLogoEl.src = schoolLogo;

    // Student Info
    const fullName = `${s.first_name || ''} ${s.last_name || ''}`.trim();
    const matricule = s.matricule || `ETU-${String(s.id).padStart(4, '0')}`;
    const levelName = s.level_name || 'Niveau non défini';
    const groupName = enrollments.length > 0
      ? enrollments.map(e => e.group_name).slice(0, 2).join(' • ')
      : (this.lang === 'ar' ? 'غير مسجل في فوج' : 'Non inscrit');
    const phone = s.phone || s.parent_phone || '-';

    const nameEl = document.getElementById('cardStudentName');
    if (nameEl) nameEl.textContent = fullName;

    const matriculeEl = document.getElementById('cardStudentMatricule');
    if (matriculeEl) matriculeEl.textContent = matricule;

    const levelEl = document.getElementById('cardStudentLevel');
    if (levelEl) levelEl.textContent = levelName;

    const phoneEl = document.getElementById('cardStudentPhone');
    if (phoneEl) phoneEl.textContent = phone;

    // Avatar / Photo
    const avatarContainer = document.getElementById('cardAvatarContainer');
    if (avatarContainer) {
      if (s.photo_url) {
        avatarContainer.innerHTML = `<img src="${s.photo_url}" alt="${this.escapeHtml(fullName)}" style="width: 100%; height: 100%; object-fit: cover;">`;
      } else {
        avatarContainer.innerHTML = this.getStudentAvatarSvg(s.gender);
      }
    }

    // High-Resolution Crisp Barcode Generation
    try {
      if (window.JsBarcode) {
        JsBarcode('#cardBarcodeSvg', matricule, {
          format: 'CODE128',
          lineColor: '#000000',
          background: '#ffffff',
          width: 2.0,
          height: 48,
          displayValue: true,
          font: 'monospace',
          fontOptions: 'bold',
          fontSize: 13,
          textMargin: 3,
          margin: 4
        });
      }
    } catch (e) {
      console.warn('JsBarcode error:', e);
    }

    this.setStudentCardTheme(this.currentCardTheme || 'emerald');
    document.getElementById('modalStudentCard').classList.add('active');
  }

  printSingleStudentCard(cardsCount = 1) {
    const s = this.currentCardStudent;
    if (!s) return;

    const schoolName = this.settings?.school_name || 'EDUMIND ACADEMY';
    const schoolYear = this.settings?.school_year || '2025/2026';
    const theme = this.currentCardTheme || 'emerald';
    const matricule = s.matricule || `ETU-${String(s.id).padStart(4, '0')}`;
    const fullName = `${s.first_name || ''} ${s.last_name || ''}`.trim();
    const levelName = s.level_name || 'Niveau non défini';
    const phone = s.phone || s.parent_phone || '-';

    // Get current Barcode SVG HTML
    const barcodeSvgEl = document.getElementById('cardBarcodeSvg');
    const barcodeSvgHtml = barcodeSvgEl ? barcodeSvgEl.outerHTML : '';

    const isAr = this.lang === 'ar';
    const printWin = window.open('', '_blank');
    if (!printWin) {
      alert(isAr ? 'يرجى السماح بالنوافذ المنبثقة لطباعة البطاقة.' : 'Veuillez autoriser les fenêtres contextuelles pour imprimer la carte.');
      return;
    }

    const cardHtml = `
      <div class="print-cr80-card ${theme}">
        <div class="card-header">
          <div class="brand">
            <div class="logo">🎓</div>
            <div>
              <div class="school-name">${this.escapeHtml(schoolName)}</div>
              <div class="school-tag">${isAr ? 'مؤسسة تعليمية وتدريبية' : "ÉTABLISSEMENT D'ENSEIGNEMENT"}</div>
            </div>
          </div>
          <div class="badge-col">
            <span class="badge-tag">${isAr ? 'بطاقة مدرسية • رسمي' : 'CARTE ÉLÈVE • OFFICIEL'}</span>
            <span class="year-tag">${this.escapeHtml(schoolYear)}</span>
          </div>
        </div>

        <div class="card-body">
          <div class="avatar-box">
            ${s.photo_url ? `<img src="${s.photo_url}" alt="Photo">` : `<div style="font-size: 38px; text-align: center; line-height: 80px;">${(s.gender || '').toUpperCase() === 'F' ? '👧' : '👦'}</div>`}
          </div>
          <div class="details-box">
            <div class="student-name">${this.escapeHtml(fullName)}</div>
            <div class="matricule-pill">N° ${this.escapeHtml(matricule)}</div>
            <div class="info-line"><strong>${isAr ? 'المستوى :' : 'Niveau :'}</strong> ${this.escapeHtml(levelName)}</div>
            <div class="info-line"><strong>${isAr ? 'الهاتف :' : 'Tél :'}</strong> ${this.escapeHtml(phone)}</div>
          </div>
        </div>

        <div class="barcode-box">
          ${barcodeSvgHtml}
        </div>
      </div>
    `;

    const cardsContent = `
      <div class="single-card-wrap">
        <div class="crop-mark top-left"></div>
        <div class="crop-mark top-right"></div>
        <div class="crop-mark bottom-left"></div>
        <div class="crop-mark bottom-right"></div>
        ${cardHtml}
      </div>
      <div class="print-hint-sub">${isAr ? 'علامات قص للتقطيع بالمقص • الحجم القياسي CR-80 (85.6 مم × 54 مم)' : 'Traits de coupe pour découpe aux ciseaux • Format Standard CR-80 (85.6mm × 54mm)'}</div>
    `;

    const html = `
      <!DOCTYPE html>
      <html lang="${this.lang}" dir="ltr">
      <head>
        <meta charset="UTF-8">
        <title>Carte Scolaire — ${this.escapeHtml(fullName)}</title>
        <style>
          @page {
            size: A4 portrait;
            margin: 10mm;
          }
          * { box-sizing: border-box; }
          body {
            font-family: system-ui, -apple-system, sans-serif;
            margin: 0;
            padding: 20px;
            background: #f8fafc;
            color: #0f172a;
          }
          .single-card-wrap {
            position: relative;
            width: 85.6mm;
            height: 54mm;
            margin: 40px auto 10px;
          }
          .crop-mark {
            position: absolute;
            width: 15px;
            height: 15px;
          }
          .crop-mark.top-left {
            top: -6px; left: -6px;
            border-top: 1.5px dashed #64748b;
            border-left: 1.5px dashed #64748b;
          }
          .crop-mark.top-right {
            top: -6px; right: -6px;
            border-top: 1.5px dashed #64748b;
            border-right: 1.5px dashed #64748b;
          }
          .crop-mark.bottom-left {
            bottom: -6px; left: -6px;
            border-bottom: 1.5px dashed #64748b;
            border-left: 1.5px dashed #64748b;
          }
          .crop-mark.bottom-right {
            bottom: -6px; right: -6px;
            border-bottom: 1.5px dashed #64748b;
            border-right: 1.5px dashed #64748b;
          }
          .print-hint-sub {
            text-align: center;
            font-size: 11px;
            color: #64748b;
            margin-top: 15px;
          }
          .print-cr80-card {
            width: 85.6mm;
            height: 54mm;
            border-radius: 4mm;
            padding: 3.5mm 4mm;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow: hidden;
            border: 1.5px solid #10b981;
            background: #ffffff;
            color: #0f172a;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .print-cr80-card.purple {
            background: linear-gradient(135deg, #1e1b4b 0%, #4c1d95 60%, #2e1065 100%);
            color: #ffffff;
            border-color: #8b5cf6;
          }
          .print-cr80-card.emerald {
            background: linear-gradient(135deg, #064e3b 0%, #065f46 60%, #022c22 100%);
            color: #ffffff;
            border-color: #10b981;
          }
          .print-cr80-card.gold {
            background: linear-gradient(135deg, #18181b 0%, #27272a 60%, #09090b 100%);
            color: #ffffff;
            border-color: #f59e0b;
          }
          .print-cr80-card.white {
            background: #ffffff;
            color: #0f172a;
            border-color: #94a3b8;
          }
          .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 0.8px solid rgba(255,255,255,0.2);
            padding-bottom: 1.5mm;
          }
          .white .card-header { border-bottom-color: #cbd5e1; }
          .brand { display: flex; align-items: center; gap: 2mm; }
          .logo { font-size: 16px; }
          .school-name { font-size: 11px; font-weight: 800; line-height: 1.1; }
          .school-tag { font-size: 6.5px; opacity: 0.8; letter-spacing: 0.3px; }
          .badge-col { text-align: right; }
          .badge-tag { font-size: 6.5px; font-weight: 800; background: #f59e0b; color: #fff; padding: 1px 4px; border-radius: 2px; }
          .year-tag { font-size: 7.5px; display: block; opacity: 0.8; margin-top: 1px; }

          .card-body {
            display: flex;
            gap: 3mm;
            align-items: center;
            margin: 1.5mm 0;
          }
          .avatar-box {
            width: 19mm;
            height: 23mm;
            border-radius: 2.5mm;
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.3);
            overflow: hidden;
            flex-shrink: 0;
          }
          .white .avatar-box { background: #f1f5f9; border-color: #cbd5e1; }
          .avatar-box img { width: 100%; height: 100%; object-fit: cover; }

          .details-box { flex: 1; min-width: 0; line-height: 1.25; }
          .student-name { font-size: 12px; font-weight: 800; margin-bottom: 1mm; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
          .matricule-pill { display: inline-block; font-family: monospace; font-size: 8.5px; font-weight: 800; background: rgba(59,130,246,0.25); padding: 1px 4px; border-radius: 2px; margin-bottom: 1mm; }
          .white .matricule-pill { background: #dbeafe; color: #1e40af; }
          .info-line { font-size: 7.5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
          .info-line strong { opacity: 0.75; }

          .barcode-box {
            background: #ffffff;
            border-radius: 2mm;
            padding: 1mm 2mm 0.5mm;
            text-align: center;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          }
          .barcode-box svg {
            width: 100% !important;
            height: 11mm !important;
            display: block;
            margin: 0 auto;
          }

          @media print {
            body { background: transparent; padding: 0; }
            .print-hint-sub { display: none; }
          }
        </style>
      </head>
      <body>
        ${cardsContent}
        <script>
          window.onload = function() {
            setTimeout(function() { window.print(); }, 350);
          };
        </script>
      </body>
      </html>
    `;

    printWin.document.open();
    printWin.document.write(html);
    printWin.document.close();
  }

  async downloadStudentCardPdf() {
    const s = this.currentCardStudent;
    if (!s) return;

    const schoolName = this.settings?.school_name || 'EDUMIND ACADEMY';
    const schoolYear = this.settings?.school_year || '2025/2026';
    const theme = this.currentCardTheme || 'emerald';
    const matricule = s.matricule || `ETU-${String(s.id).padStart(4, '0')}`;
    const fullName = `${s.first_name || ''} ${s.last_name || ''}`.trim() || 'Eleve';
    const levelName = s.level_name || 'Niveau non défini';
    const phone = s.phone || s.parent_phone || '-';
    const latinOnly = `${s.first_name || ''}_${s.last_name || ''}`.replace(/[^a-zA-Z0-9_\-]/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '');
    const safeMatricule = matricule.replace(/[^a-zA-Z0-9_\-]/g, '_');
    const filename = latinOnly ? `Carte_Scolaire_${safeMatricule}_${latinOnly}.pdf` : `Carte_Scolaire_${safeMatricule}.pdf`;

    const btn = document.getElementById('btnDownloadCardPdf');
    const origHtml = btn ? btn.innerHTML : '';
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> <span>${this.lang === 'ar' ? 'جاري التحميل...' : 'Génération PDF...'}</span>`;
    }

    try {
      const pdfLib = window.html2pdf || (typeof html2pdf !== 'undefined' ? html2pdf : null);
      if (!pdfLib) {
        throw new Error(this.lang === 'ar' ? 'مكتبة PDF غير متوفرة' : 'Module html2pdf non disponible');
      }

      // Barcode SVG HTML
      const barcodeSvgEl = document.getElementById('cardBarcodeSvg');
      const barcodeSvgHtml = barcodeSvgEl ? barcodeSvgEl.outerHTML : '';

      // Create an isolated container for crisp rendering
      const container = document.createElement('div');
      container.style.position = 'fixed';
      container.style.left = '-9999px';
      container.style.top = '0';
      container.style.width = '85.6mm';
      container.style.height = '54mm';
      container.style.boxSizing = 'border-box';
      container.style.overflow = 'hidden';
      container.style.background = 'transparent';

      container.innerHTML = `
        <style>
          .pdf-cr80-card {
            width: 85.6mm;
            height: 54mm;
            max-height: 54mm;
            border-radius: 3.5mm;
            padding: 2.2mm 3.2mm 2mm;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow: hidden;
            box-sizing: border-box;
            border: 1.5px solid #10b981;
            background: #ffffff;
            color: #0f172a;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .pdf-cr80-card.purple {
            background: linear-gradient(135deg, #1e1b4b 0%, #4c1d95 60%, #2e1065 100%);
            color: #ffffff;
            border-color: #8b5cf6;
          }
          .pdf-cr80-card.emerald {
            background: linear-gradient(135deg, #064e3b 0%, #065f46 60%, #022c22 100%);
            color: #ffffff;
            border-color: #10b981;
          }
          .pdf-cr80-card.gold {
            background: linear-gradient(135deg, #18181b 0%, #27272a 60%, #09090b 100%);
            color: #ffffff;
            border-color: #f59e0b;
          }
          .pdf-cr80-card.white {
            background: #ffffff;
            color: #0f172a;
            border-color: #94a3b8;
          }
          .pdf-cr80-card .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 0.8px solid rgba(255,255,255,0.2);
            padding-bottom: 1.2mm;
          }
          .pdf-cr80-card.white .card-header { border-bottom-color: #cbd5e1; }
          .pdf-cr80-card .brand { display: flex; align-items: center; gap: 2mm; }
          .pdf-cr80-card .logo { font-size: 14px; }
          .pdf-cr80-card .school-name { font-size: 10px; font-weight: 800; line-height: 1.1; }
          .pdf-cr80-card .school-tag { font-size: 5.5px; opacity: 0.8; letter-spacing: 0.3px; }
          .pdf-cr80-card .badge-col { text-align: right; }
          .pdf-cr80-card .badge-tag { font-size: 5.5px; font-weight: 800; background: #f59e0b; color: #fff; padding: 1px 3.5px; border-radius: 2px; }
          .pdf-cr80-card .year-tag { font-size: 6.5px; display: block; opacity: 0.8; margin-top: 1px; }

          .pdf-cr80-card .card-body {
            display: flex;
            gap: 2.5mm;
            align-items: center;
            margin: 0.8mm 0;
          }
          .pdf-cr80-card .avatar-box {
            width: 16mm;
            height: 19mm;
            border-radius: 2mm;
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.3);
            overflow: hidden;
            flex-shrink: 0;
          }
          .pdf-cr80-card.white .avatar-box { background: #f1f5f9; border-color: #cbd5e1; }
          .pdf-cr80-card .avatar-box img { width: 100%; height: 100%; object-fit: cover; }

          .pdf-cr80-card .details-box { flex: 1; min-width: 0; line-height: 1.2; }
          .pdf-cr80-card .student-name { font-size: 10.5px; font-weight: 800; margin-bottom: 0.6mm; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
          .pdf-cr80-card .matricule-pill { display: inline-block; font-family: monospace; font-size: 7.5px; font-weight: 800; background: rgba(59,130,246,0.25); padding: 1px 3.5px; border-radius: 2px; margin-bottom: 0.6mm; }
          .pdf-cr80-card.white .matricule-pill { background: #dbeafe; color: #1e40af; }
          .pdf-cr80-card .info-line { font-size: 6.8px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-bottom: 0.3mm; }
          .pdf-cr80-card .info-line strong { opacity: 0.75; }

          .pdf-cr80-card .barcode-box {
            background: #ffffff;
            border-radius: 2mm;
            padding: 0.8mm 2mm 0.6mm;
            text-align: center;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          }
          .pdf-cr80-card .barcode-box svg {
            width: 100% !important;
            max-height: 10.5mm !important;
            height: auto !important;
            display: block;
            margin: 0 auto;
          }
        </style>
        <div class="pdf-cr80-card ${theme}">
          <div class="card-header">
            <div class="brand">
              <div class="logo">🎓</div>
              <div>
                <div class="school-name">${this.escapeHtml(schoolName)}</div>
                <div class="school-tag">${this.lang === 'ar' ? 'مؤسسة تعليمية وتدريبية' : "ÉTABLISSEMENT D'ENSEIGNEMENT"}</div>
              </div>
            </div>
            <div class="badge-col">
              <span class="badge-tag">${this.lang === 'ar' ? 'بطاقة مدرسية • رسمي' : 'CARTE ÉLÈVE • OFFICIEL'}</span>
              <span class="year-tag">${this.escapeHtml(schoolYear)}</span>
            </div>
          </div>

          <div class="card-body">
            <div class="avatar-box">
              ${s.photo_url ? `<img src="${s.photo_url}" alt="Photo">` : `<div style="font-size: 32px; text-align: center; line-height: 19mm;">${(s.gender || '').toUpperCase() === 'F' ? '👧' : '👦'}</div>`}
            </div>
            <div class="details-box">
              <div class="student-name">${this.escapeHtml(fullName)}</div>
              <div class="matricule-pill">N° ${this.escapeHtml(matricule)}</div>
              <div class="info-line"><strong>${this.lang === 'ar' ? 'المستوى :' : 'Niveau :'}</strong> ${this.escapeHtml(levelName)}</div>
              <div class="info-line"><strong>${this.lang === 'ar' ? 'الهاتف :' : 'Tél :'}</strong> ${this.escapeHtml(phone)}</div>
            </div>
          </div>

          <div class="barcode-box">
            ${barcodeSvgHtml}
          </div>
        </div>
      `;

      document.body.appendChild(container);
      const cardNode = container.querySelector('.pdf-cr80-card');

      const opt = {
        margin: 0,
        filename: filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
          scale: 3,
          useCORS: true,
          logging: false,
          scrollY: 0,
          scrollX: 0
        },
        jsPDF: {
          unit: 'mm',
          format: [85.6, 54],
          orientation: 'landscape'
        },
        pagebreak: { mode: 'avoid-all' }
      };

      const pdfDataUri = await pdfLib()
        .set(opt)
        .from(cardNode)
        .toPdf()
        .get('pdf')
        .then(pdf => {
          // Guarantee exactly 1 single page (removes any accidental 2nd blank page)
          while (pdf.internal.getNumberOfPages() > 1) {
            pdf.deletePage(pdf.internal.getNumberOfPages());
          }
        })
        .outputPdf('datauristring');

      document.body.removeChild(container);

      // Submit via hidden form to /api/download-pdf
      // This forces the browser to treat it as a true HTTP attachment with full filename & .pdf extension
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = '/api/download-pdf';
      form.style.display = 'none';

      const inputName = document.createElement('input');
      inputName.type = 'hidden';
      inputName.name = 'filename';
      inputName.value = filename;
      form.appendChild(inputName);

      const inputData = document.createElement('input');
      inputData.type = 'hidden';
      inputData.name = 'base64';
      const commaIdx = pdfDataUri.indexOf(',');
      inputData.value = commaIdx !== -1 ? pdfDataUri.slice(commaIdx + 1) : pdfDataUri;
      form.appendChild(inputData);

      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);

      this.playChime('success');
    } catch (err) {
      console.error('Erreur téléchargement carte PDF:', err);
      alert((this.lang === 'ar' ? 'فشل تحميل ملف PDF: ' : 'Échec du téléchargement du PDF : ') + err.message);
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = origHtml;
      }
    }
  }

  // -------------------------------------------------------------
  // ATTENDANCE & SESSIONS MANAGEMENT (MANUAL & RAPID SCAN)
  // -------------------------------------------------------------
  async switchAttendanceMode(mode) {
    this.attendanceMode = mode;
    const btnSheet = document.getElementById('tabBtnSheet');
    const btnScan = document.getElementById('tabBtnScan');
    const btnEntrance = document.getElementById('tabBtnEntrance');
    const viewSheet = document.getElementById('attendanceSheetView');
    const viewScan = document.getElementById('attendanceScanView');
    const viewEntrance = document.getElementById('attendanceEntranceView');

    [btnSheet, btnScan, btnEntrance].forEach(b => b?.classList.remove('active'));
    if (viewSheet) viewSheet.style.display = 'none';
    if (viewScan) viewScan.style.display = 'none';
    if (viewEntrance) viewEntrance.style.display = 'none';

    if (mode === 'sheet') {
      btnSheet?.classList.add('active');
      if (viewSheet) viewSheet.style.display = 'block';
      if (this.currentAttendanceGroup) {
        await this.fetchAttendanceSheet(this.currentAttendanceGroup, this.currentAttendanceDate);
      }
    } else if (mode === 'scan') {
      btnScan?.classList.add('active');
      if (viewScan) viewScan.style.display = 'block';

      const scanSelect = document.getElementById('scanSelectGroup');
      if (scanSelect && this.currentAttendanceGroup) {
        scanSelect.value = this.currentAttendanceGroup;
      }
      await this.loadScanLiveList();
      setTimeout(() => document.getElementById('pointageInput')?.focus(), 80);
    } else if (mode === 'entrance') {
      btnEntrance?.classList.add('active');
      if (viewEntrance) viewEntrance.style.display = 'block';
      await this.loadEntranceView();
    }
  }

  async loadAttendanceView() {
    const dateInput = document.getElementById('attSessionDate');
    const scanDateInput = document.getElementById('scanSessionDate');
    const entranceDateInput = document.getElementById('entranceSessionDate');
    if (dateInput && !dateInput.value) {
      dateInput.value = this.currentAttendanceDate;
    }
    if (scanDateInput && !scanDateInput.value) {
      scanDateInput.value = this.currentAttendanceDate;
    }
    if (entranceDateInput && !entranceDateInput.value) {
      entranceDateInput.value = this.entranceDate || this.currentAttendanceDate;
    }

    if (this.attendanceMode === 'entrance') {
      await this.loadEntranceView();
      return;
    }

    try {
      const res = await fetch('/api/attendance/groups');
      const data = await res.json();
      if (!data.success) return;

      const groups = data.groups || [];
      const select = document.getElementById('attSelectGroup');
      const scanSelect = document.getElementById('scanSelectGroup');
      if (!select) return;

      const currentSelected = select.value || this.currentAttendanceGroup;

      const optionsHtml = `<option value="">-- ${this.lang === 'ar' ? 'اختر الفوج الدراسي' : 'Choisir un groupe'} --</option>` +
        groups.map(g => `
          <option value="${g.id}" ${currentSelected == g.id ? 'selected' : ''}>
            ${this.escapeHtml(g.name)} — ${this.escapeHtml(g.subject_name || '')} (${g.students_count || 0} ${this.lang === 'ar' ? 'تلميذ' : 'élèves'}, ${g.sessions_count || 0} ${this.lang === 'ar' ? 'حصة' : 'séances'})
          </option>
        `).join('');

      select.innerHTML = optionsHtml;
      if (scanSelect) scanSelect.innerHTML = optionsHtml;

      if (!currentSelected && groups.length > 0) {
        this.currentAttendanceGroup = groups[0].id;
        select.value = groups[0].id;
        if (scanSelect) scanSelect.value = groups[0].id;
      } else if (currentSelected) {
        this.currentAttendanceGroup = currentSelected;
        if (scanSelect) scanSelect.value = currentSelected;
      }

      if (this.currentAttendanceGroup) {
        await this.fetchAttendanceSheet(this.currentAttendanceGroup, this.currentAttendanceDate);
        await this.loadScanLiveList();
      }
    } catch (err) {
      console.error('Failed to load attendance groups:', err);
    }
  }

  async onAttendanceGroupChange(groupId) {
    this.currentAttendanceGroup = groupId;
    const scanSelect = document.getElementById('scanSelectGroup');
    if (scanSelect && groupId) scanSelect.value = groupId;

    if (groupId) {
      await this.fetchAttendanceSheet(groupId, this.currentAttendanceDate);
      await this.loadScanLiveList();
    } else {
      this.resetAttendanceSheetUI();
    }
  }

  async onAttendanceDateChange(date) {
    if (!date) return;
    this.currentAttendanceDate = date;
    const scanDate = document.getElementById('scanSessionDate');
    if (scanDate) scanDate.value = date;

    if (this.currentAttendanceGroup) {
      await this.fetchAttendanceSheet(this.currentAttendanceGroup, date);
      await this.loadScanLiveList();
    }
  }

  async onScanGroupChange(groupId) {
    this.currentAttendanceGroup = groupId;
    const attSelect = document.getElementById('attSelectGroup');
    if (attSelect && groupId) attSelect.value = groupId;
    await this.loadScanLiveList();
    if (this.currentAttendanceGroup) {
      await this.fetchAttendanceSheet(this.currentAttendanceGroup, this.currentAttendanceDate);
    }
    setTimeout(() => document.getElementById('pointageInput')?.focus(), 50);
  }

  async onScanDateChange(date) {
    if (!date) return;
    this.currentAttendanceDate = date;
    const attDate = document.getElementById('attSessionDate');
    if (attDate) attDate.value = date;
    await this.loadScanLiveList();
    if (this.currentAttendanceGroup) {
      await this.fetchAttendanceSheet(this.currentAttendanceGroup, date);
    }
    setTimeout(() => document.getElementById('pointageInput')?.focus(), 50);
  }

  resetAttendanceSheetUI() {
    this.attendanceSheetData = null;
    this.attendanceRecords = {};
    const tbody = document.getElementById('attStudentsTableBody');
    if (tbody) {
      tbody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align: center; padding: 40px; color: var(--text-muted);">
            <i class="fa-solid fa-hand-pointer" style="font-size: 32px; margin-bottom: 10px; display: block; opacity: 0.5;"></i>
            ${this.lang === 'ar' ? 'يرجى اختيار فوج لعرض ورقة الحضور والتلاميذ.' : "Veuillez sélectionner un groupe ci-dessus pour afficher la feuille d'appel."}
          </td>
        </tr>
      `;
    }
    const detailsBar = document.getElementById('attGroupDetailsBar');
    if (detailsBar) detailsBar.style.display = 'none';
    this.updateAttendanceLiveStats();
  }

  async fetchAttendanceSheet(groupId, date) {
    if (!groupId) return this.resetAttendanceSheetUI();

    try {
      const res = await fetch(`/api/attendance/sheet?group_id=${groupId}&date=${date}`);
      const data = await res.json();
      if (!data.success) {
        alert(data.error || 'Erreur lors du chargement de la feuille de présence');
        return;
      }

      this.attendanceSheetData = data;
      this.attendanceRecords = {};

      // Fill session controls
      const sNumberInput = document.getElementById('attSessionNumber');
      const sTopicInput = document.getElementById('attSessionTopic');
      if (sNumberInput) sNumberInput.value = data.session?.session_number || 1;
      if (sTopicInput) sTopicInput.value = data.session?.topic || '';

      // Update Group Details Sub-bar
      const g = data.group;
      const detailsBar = document.getElementById('attGroupDetailsBar');
      if (detailsBar && g) {
        detailsBar.style.display = 'flex';
        document.getElementById('attGroupLevel').textContent = `${this.lang === 'ar' ? 'المستوى:' : 'Niveau:'} ${g.level_name || '-'}`;
        document.getElementById('attGroupSubject').textContent = `${this.lang === 'ar' ? 'المادة:' : 'Matière:'} ${g.subject_name || '-'}`;
        document.getElementById('attGroupTeacher').textContent = `${this.lang === 'ar' ? 'الأستاذ:' : 'Enseignant:'} ${g.teacher_name || '-'}`;
        document.getElementById('attGroupRoom').textContent = `${this.lang === 'ar' ? 'القاعة:' : 'Salle:'} ${g.room_name || '-'}`;
        document.getElementById('attGroupSchedule').textContent = `${g.day_of_week || ''} (${g.start_time || ''} - ${g.end_time || ''})`;
      }

      // Initialize attendance records
      const students = data.students || [];
      students.forEach(s => {
        this.attendanceRecords[s.student_id] = {
          status: s.status || 'present',
          notes: s.notes || ''
        };
      });

      this.renderAttendanceStudents(students);
      this.updateAttendanceLiveStats();
    } catch (err) {
      console.error('fetchAttendanceSheet error:', err);
    }
  }

  renderAttendanceStudents(studentsList) {
    const tbody = document.getElementById('attStudentsTableBody');
    if (!tbody) return;

    if (!studentsList || studentsList.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align: center; padding: 40px; color: var(--text-muted);">
            <i class="fa-solid fa-users-slash" style="font-size: 32px; margin-bottom: 10px; display: block; opacity: 0.5;"></i>
            ${this.lang === 'ar' ? 'لا يوجد أي تلميذ مسجل في هذا الفوج حالياً.' : 'Aucun élève inscrit dans ce groupe pour le moment.'}
          </td>
        </tr>
      `;
      return;
    }

    const totalSessions = this.attendanceSheetData?.total_sessions || 0;

    tbody.innerHTML = studentsList.map((s, index) => {
      const record = this.attendanceRecords[s.student_id] || { status: 'present', notes: '' };
      const currentStatus = record.status;

      // Payment badge
      let paymentBadgeHtml = '';
      if (s.is_paid) {
        paymentBadgeHtml = `<span class="att-badge-paid"><i class="fa-solid fa-circle-check"></i> ${this.lang === 'ar' ? 'مسدد' : 'À jour'}</span>`;
      } else if (s.payment_badge === 'partial') {
        paymentBadgeHtml = `<span class="att-badge-partial"><i class="fa-solid fa-circle-exclamation"></i> ${s.payment_text}</span>`;
      } else {
        paymentBadgeHtml = `<span class="att-badge-due"><i class="fa-solid fa-triangle-exclamation"></i> ${this.lang === 'ar' ? 'غير مسدد' : 'Impayé'}</span>`;
      }

      // Attendance rate in this group
      const attended = s.sessions_attended || 0;
      const ratePercent = totalSessions > 0 ? Math.min(100, Math.round((attended / totalSessions) * 100)) : 100;
      let barColor = '#10b981';
      if (ratePercent < 50) barColor = '#ef4444';
      else if (ratePercent < 75) barColor = '#f59e0b';

      return `
        <tr data-student-id="${s.student_id}" class="att-student-row">
          <td style="font-weight: 700; color: var(--text-muted);">${index + 1}</td>
          <td>
            <div style="display: flex; align-items: center; gap: 12px;">
              <div class="student-avatar-box" style="width: 38px; height: 38px; border-radius: 50%; font-size: 16px; flex-shrink: 0;">
                <i class="fa-solid fa-user"></i>
              </div>
              <div>
                <div style="font-weight: 800; color: var(--text-heading); font-size: 14px;">
                  ${this.escapeHtml(s.first_name)} ${this.escapeHtml(s.last_name)}
                </div>
                <div style="font-size: 11px; color: #60a5fa; font-weight: 600;">
                  ${this.escapeHtml(s.matricule)}
                </div>
              </div>
            </div>
          </td>
          <td>
            <div style="font-size: 12px; font-weight: 600;">
              <div><i class="fa-solid fa-phone" style="font-size: 10px; color: var(--text-muted);"></i> ${s.phone || '-'}</div>
              ${s.parent_phone ? `<div style="color: var(--text-muted); font-size: 11px;"><i class="fa-solid fa-user-shield" style="font-size: 10px;"></i> ${s.parent_phone}</div>` : ''}
            </div>
          </td>
          <td>
            <div class="att-progress-container">
              <div style="display: flex; justify-content: space-between; font-size: 11px; font-weight: 700;">
                <span>${attended} / ${totalSessions}</span>
                <span style="color: ${barColor};">${ratePercent}%</span>
              </div>
              <div class="att-progress-bar">
                <div class="att-progress-fill" style="width: ${ratePercent}%; background-color: ${barColor};"></div>
              </div>
            </div>
          </td>
          <td>
            ${paymentBadgeHtml}
          </td>
          <td style="text-align: center;">
            <div class="att-status-group" id="statusGroup_${s.student_id}">
              <button type="button" class="att-btn-status present ${currentStatus === 'present' ? 'active' : ''}" onclick="app.setStudentAttendanceStatus(${s.student_id}, 'present')" title="${this.lang === 'ar' ? 'حاضر' : 'Présent'}">
                <i class="fa-solid fa-check"></i>
                <span>${this.lang === 'ar' ? 'حاضر' : 'Présent'}</span>
              </button>
              <button type="button" class="att-btn-status absent ${currentStatus === 'absent' ? 'active' : ''}" onclick="app.setStudentAttendanceStatus(${s.student_id}, 'absent')" title="${this.lang === 'ar' ? 'غائب' : 'Absent'}">
                <i class="fa-solid fa-xmark"></i>
                <span>${this.lang === 'ar' ? 'غائب' : 'Absent'}</span>
              </button>
              <button type="button" class="att-btn-status late ${currentStatus === 'late' ? 'active' : ''}" onclick="app.setStudentAttendanceStatus(${s.student_id}, 'late')" title="${this.lang === 'ar' ? 'متأخر' : 'En retard'}">
                <i class="fa-regular fa-clock"></i>
                <span>${this.lang === 'ar' ? 'متأخر' : 'Retard'}</span>
              </button>
              <button type="button" class="att-btn-status excused ${currentStatus === 'excused' ? 'active' : ''}" onclick="app.setStudentAttendanceStatus(${s.student_id}, 'excused')" title="${this.lang === 'ar' ? 'معذور' : 'Justifié'}">
                <i class="fa-regular fa-file-lines"></i>
                <span>${this.lang === 'ar' ? 'مبرر' : 'Justifié'}</span>
              </button>
            </div>
          </td>
          <td>
            <input type="text" class="form-control" style="height: 32px; font-size: 12px; padding: 4px 8px;" placeholder="${this.lang === 'ar' ? 'ملاحظة...' : 'Remarque...'}" value="${this.escapeHtml(record.notes || '')}" oninput="app.setStudentAttendanceNotes(${s.student_id}, this.value)">
          </td>
        </tr>
      `;
    }).join('');
  }

  setStudentAttendanceStatus(studentId, status) {
    if (!this.attendanceRecords[studentId]) {
      this.attendanceRecords[studentId] = { status, notes: '' };
    } else {
      this.attendanceRecords[studentId].status = status;
    }

    const groupDiv = document.getElementById(`statusGroup_${studentId}`);
    if (groupDiv) {
      groupDiv.querySelectorAll('.att-btn-status').forEach(btn => {
        if (btn.classList.contains(status)) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    }

    this.updateAttendanceLiveStats();
  }

  setStudentAttendanceNotes(studentId, notes) {
    if (!this.attendanceRecords[studentId]) {
      this.attendanceRecords[studentId] = { status: 'present', notes };
    } else {
      this.attendanceRecords[studentId].notes = notes;
    }
  }

  markAllAttendance(status) {
    if (!this.attendanceSheetData?.students) return;

    this.attendanceSheetData.students.forEach(s => {
      this.setStudentAttendanceStatus(s.student_id, status);
    });
  }

  filterAttendanceStudents(query) {
    const q = (query || '').toLowerCase().trim();
    const rows = document.querySelectorAll('.att-student-row');
    rows.forEach(row => {
      const text = row.textContent.toLowerCase();
      row.style.display = text.includes(q) ? '' : 'none';
    });
  }

  updateAttendanceLiveStats() {
    const students = this.attendanceSheetData?.students || [];
    const total = students.length;
    const totalHeld = this.attendanceSheetData?.total_sessions || 0;

    let present = 0;
    let absent = 0;
    let late = 0;
    let excused = 0;
    let paidCount = 0;

    students.forEach(s => {
      const rec = this.attendanceRecords[s.student_id];
      const st = rec ? rec.status : null;
      if (st === 'present') present++;
      else if (st === 'absent') absent++;
      else if (st === 'late') late++;
      else if (st === 'excused') excused++;

      if (s.is_paid) paidCount++;
    });

    const elTotal = document.getElementById('attStatTotal');
    const elSessions = document.getElementById('attStatSessions');
    const elPresent = document.getElementById('attStatPresent');
    const elAbsent = document.getElementById('attStatAbsent');
    const elLate = document.getElementById('attStatLate');
    const elPayments = document.getElementById('attStatPayments');

    if (elTotal) elTotal.textContent = total;
    if (elSessions) elSessions.textContent = totalHeld;
    if (elPresent) elPresent.textContent = present;
    if (elAbsent) elAbsent.textContent = absent;
    if (elLate) elLate.textContent = `${late + excused} (${late}R / ${excused}J)`;
    if (elPayments) elPayments.textContent = `${paidCount} / ${total}`;
  }

  async saveAttendanceSheet() {
    if (!this.currentAttendanceGroup || !this.currentAttendanceDate) {
      alert(this.lang === 'ar' ? 'يرجى اختيار الفوج وتاريخ الحصة أولاً' : 'Veuillez sélectionner un groupe et une date.');
      return;
    }

    const sNumber = document.getElementById('attSessionNumber')?.value || 1;
    const sTopic = document.getElementById('attSessionTopic')?.value || '';

    const records = Object.keys(this.attendanceRecords).map(id => ({
      student_id: Number(id),
      status: this.attendanceRecords[id].status || 'present',
      notes: this.attendanceRecords[id].notes || ''
    }));

    try {
      const btn = document.getElementById('btnSaveAttendance');
      if (btn) {
        btn.disabled = true;
        btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${this.lang === 'ar' ? 'جاري الحفظ...' : 'Enregistrement...'}`;
      }

      const res = await fetch('/api/attendance/sheet/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          group_id: this.currentAttendanceGroup,
          session_date: this.currentAttendanceDate,
          session_number: sNumber,
          topic: sTopic,
          records
        })
      });

      const data = await res.json();
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = `<i class="fa-solid fa-floppy-disk"></i> <span>${this.lang === 'ar' ? 'حفظ سجل الحضور' : 'Enregistrer'}</span>`;
      }

      if (data.success) {
        this.playChime('success');
        alert(this.lang === 'ar' ? '✅ تم حفظ سجل حضور الحصة بنجاح!' : '✅ Feuille de présence enregistrée avec succès !');
        await this.fetchAttendanceSheet(this.currentAttendanceGroup, this.currentAttendanceDate);
      } else {
        this.playChime('error');
        alert(data.error || 'Erreur lors de la sauvegarde');
      }
    } catch (err) {
      console.error('saveAttendanceSheet error:', err);
      alert('Erreur serveur lors de la sauvegarde');
    }
  }

  getMonthLabel(yearMonthStr) {
    if (!yearMonthStr || yearMonthStr === 'all') {
      return this.lang === 'ar' ? 'جميع الأشهر (كامل الحصص)' : 'Toutes les séances (Tous les mois)';
    }
    const parts = yearMonthStr.split('-');
    if (parts.length < 2) return yearMonthStr;
    const year = parts[0];
    const month = parseInt(parts[1], 10);
    const monthsAr = [
      'جانفي (01)', 'فيفري (02)', 'مارس (03)', 'أفريل (04)', 'ماي (05)', 'جوان (06)',
      'جويلية (07)', 'أوت (08)', 'سبتمبر (09)', 'أكتوبر (10)', 'نوفمبر (11)', 'ديسمبر (12)'
    ];
    const monthsFr = [
      'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
      'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];
    const mName = this.lang === 'ar' ? monthsAr[month - 1] : monthsFr[month - 1];
    return `${mName} ${year}`;
  }

  async openAttendanceMatrixModal(selectedMonth = null) {
    if (!this.currentAttendanceGroup) {
      alert(this.lang === 'ar' ? 'يرجى اختيار الفوج أولاً' : 'Veuillez sélectionner un groupe.');
      return;
    }

    if (selectedMonth !== null) {
      this.matrixSelectedMonth = selectedMonth;
    } else if (!this.matrixSelectedMonth) {
      this.matrixSelectedMonth = 'all';
    }

    try {
      const url = `/api/attendance/matrix?group_id=${this.currentAttendanceGroup}&month=${encodeURIComponent(this.matrixSelectedMonth)}`;
      const res = await fetch(url);
      const data = await res.json();
      if (!data.success) {
        alert(data.error || 'Erreur lors du chargement de la grille');
        return;
      }

      this.matrixData = data;
      const g = data.group;
      document.getElementById('matrixModalGroupTitle').textContent = `${g.name} — ${g.subject_name || ''}`;

      // Populate month filter dropdown
      const monthSelect = document.getElementById('matrixFilterMonth');
      if (monthSelect) {
        const availableMonths = data.available_months || [];
        const totalAllSessions = availableMonths.reduce((sum, m) => sum + m.count, 0);

        let optionsHtml = `<option value="all" ${this.matrixSelectedMonth === 'all' ? 'selected' : ''}>
          ${this.lang === 'ar' ? `جميع الأشهر (${totalAllSessions} حصص)` : `Toutes les séances (${totalAllSessions} séances)`}
        </option>`;

        availableMonths.forEach(m => {
          const label = this.getMonthLabel(m.month_val);
          const countText = this.lang === 'ar' ? `${m.count} حصص` : `${m.count} séances`;
          optionsHtml += `<option value="${m.month_val}" ${this.matrixSelectedMonth === m.month_val ? 'selected' : ''}>
            ${label} (${countText})
          </option>`;
        });

        monthSelect.innerHTML = optionsHtml;
      }

      const sessions = data.sessions || [];
      const students = data.students || [];

      // Calculate totals and average attendance
      const countEl = document.getElementById('matrixCountSessions');
      if (countEl) countEl.textContent = sessions.length;

      const avgEl = document.getElementById('matrixAvgAttendance');
      if (avgEl) {
        if (students.length > 0 && sessions.length > 0) {
          const totalRates = students.reduce((acc, st) => acc + (st.attendanceRate || 0), 0);
          const avg = Math.round(totalRates / students.length);
          avgEl.textContent = `${avg}%`;
        } else {
          avgEl.textContent = '100%';
        }
      }

      const monthSubtitle = this.matrixSelectedMonth === 'all'
        ? (this.lang === 'ar' ? 'كامل الحصص المسجلة' : 'Toute la période')
        : this.getMonthLabel(this.matrixSelectedMonth);

      document.getElementById('matrixModalGroupSubtitle').textContent =
        `${this.lang === 'ar' ? 'الأستاذ:' : 'Enseignant:'} ${g.teacher_name || '-'} | ${this.lang === 'ar' ? 'الفترة المعروضة:' : 'Période:'} ${monthSubtitle} (${sessions.length} ${this.lang === 'ar' ? 'حصص' : 'séances'})`;

      const table = document.getElementById('attendanceMatrixTable');
      if (!table) return;

      let headHtml = `
        <thead>
          <tr>
            <th style="min-width: 200px; text-align: ${this.lang === 'ar' ? 'right' : 'left'};">${this.lang === 'ar' ? 'اسم ولقب التلميذ' : 'Élève / Matricule'}</th>
      `;

      sessions.forEach(sess => {
        headHtml += `
          <th style="min-width: 85px;" title="${this.escapeHtml(sess.topic || '')}">
            <div style="font-size: 11px; font-weight: 800; color: #60a5fa;">${this.lang === 'ar' ? 'ح' : 'S'}${sess.session_number}</div>
            <div style="font-size: 10px; color: var(--text-muted);">${sess.session_date}</div>
            <button type="button" onclick="event.stopPropagation(); app.deleteAttendanceSession(${g.id}, '${sess.session_date}')" style="background: none; border: none; color: #ef4444; font-size: 10px; cursor: pointer; opacity: 0.6; margin-top: 2px;" title="${this.lang === 'ar' ? 'حذف هذه الحصة' : 'Supprimer cette séance'}">
              <i class="fa-solid fa-trash"></i>
            </button>
          </th>
        `;
      });

      headHtml += `
            <th style="min-width: 90px;">${this.lang === 'ar' ? 'مجموع الحضور' : 'Présences'}</th>
            <th style="min-width: 75px;">${this.lang === 'ar' ? 'نسبة المواظبة' : '%'}</th>
          </tr>
        </thead>
      `;

      let bodyHtml = '<tbody>';
      if (students.length === 0) {
        bodyHtml += `<tr><td colspan="${sessions.length + 3}" style="text-align: center; padding: 20px;">${this.lang === 'ar' ? 'لا يوجد أي تلميذ مسجل بالفوج' : 'Aucun élève'}</td></tr>`;
      } else if (sessions.length === 0) {
        bodyHtml += `<tr><td colspan="4" style="text-align: center; padding: 25px; color: var(--text-muted);">${this.lang === 'ar' ? 'لا توجد أي حصص مسجلة في هذا الشهر المحدد.' : 'Aucune séance enregistrée pour ce mois sélectionné.'}</td></tr>`;
      } else {
        students.forEach(st => {
          bodyHtml += `
            <tr class="matrix-student-row" data-name="${this.escapeHtml(st.first_name + ' ' + st.last_name).toLowerCase()}" data-matricule="${this.escapeHtml(st.matricule).toLowerCase()}">
              <td style="font-weight: 700; text-align: ${this.lang === 'ar' ? 'right' : 'left'};">
                ${this.escapeHtml(st.first_name)} ${this.escapeHtml(st.last_name)}
                <div style="font-size: 10px; color: var(--text-muted);">${this.escapeHtml(st.matricule)}</div>
              </td>
          `;

          sessions.forEach(sess => {
            const status = st.sessions[sess.session_date];
            let badge = '<span class="att-matrix-badge none">-</span>';
            if (status === 'present') badge = `<span class="att-matrix-badge present" title="${this.lang === 'ar' ? 'حاضر' : 'Présent'}">P</span>`;
            else if (status === 'absent') badge = `<span class="att-matrix-badge absent" title="${this.lang === 'ar' ? 'غائب' : 'Absent'}">A</span>`;
            else if (status === 'late') badge = `<span class="att-matrix-badge late" title="${this.lang === 'ar' ? 'متأخر' : 'Retard'}">R</span>`;
            else if (status === 'excused') badge = `<span class="att-matrix-badge excused" title="${this.lang === 'ar' ? 'معذور' : 'Justifié'}">J</span>`;

            bodyHtml += `<td>${badge}</td>`;
          });

          const rateColor = st.attendanceRate >= 75 ? '#10b981' : (st.attendanceRate >= 50 ? '#f59e0b' : '#ef4444');

          bodyHtml += `
              <td style="font-weight: 700;">${st.presentCount} / ${st.totalHeld}</td>
              <td style="font-weight: 800; color: ${rateColor};">${st.attendanceRate}%</td>
            </tr>
          `;
        });
      }
      bodyHtml += '</tbody>';

      table.innerHTML = headHtml + bodyHtml;
      document.getElementById('modalAttendanceMatrix')?.classList.add('active');
    } catch (err) {
      console.error('openAttendanceMatrixModal error:', err);
    }
  }

  onAttendanceMatrixMonthChange(month) {
    this.openAttendanceMatrixModal(month);
  }

  filterMatrixStudents(query) {
    const q = (query || '').toLowerCase().trim();
    const rows = document.querySelectorAll('.matrix-student-row');
    rows.forEach(r => {
      const name = r.getAttribute('data-name') || '';
      const matricule = r.getAttribute('data-matricule') || '';
      if (!q || name.includes(q) || matricule.includes(q)) {
        r.style.display = '';
      } else {
        r.style.display = 'none';
      }
    });
  }

  async deleteAttendanceSession(groupId, sessionDate) {
    const confirmMsg = this.lang === 'ar'
      ? `هل أنت متأكد من حذف الحصة بتاريخ ${sessionDate} وسجل حضورها؟`
      : `Voulez-vous vraiment supprimer la séance du ${sessionDate} et ses présences ?`;

    if (!confirm(confirmMsg)) return;

    try {
      const res = await fetch('/api/attendance/session', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ group_id: groupId, session_date: sessionDate })
      });
      const data = await res.json();
      if (data.success) {
        alert(this.lang === 'ar' ? 'تم حذف الحصة بنجاح' : 'Séance supprimée avec succès');
        await this.openAttendanceMatrixModal();
        if (this.currentAttendanceDate === sessionDate) {
          await this.fetchAttendanceSheet(this.currentAttendanceGroup, this.currentAttendanceDate);
        }
      }
    } catch (err) {
      console.error('deleteAttendanceSession error:', err);
    }
  }

  printAttendanceSheet() {
    if (!this.attendanceSheetData || !this.attendanceSheetData.group) {
      alert(this.lang === 'ar' ? 'يرجى اختيار الفوج أولاً' : 'Veuillez sélectionner un groupe.');
      return;
    }

    const g = this.attendanceSheetData.group;
    const date = this.currentAttendanceDate;
    const sNumber = document.getElementById('attSessionNumber')?.value || 1;
    const sTopic = document.getElementById('attSessionTopic')?.value || '';
    const students = this.attendanceSheetData.students || [];
    const schoolName = this.settings?.school_name || 'EDUMIND Academy';

    const printDiv = document.getElementById('attendancePrintSheet');
    if (!printDiv) return;

    printDiv.innerHTML = `
      <div style="font-family: Arial, sans-serif; color: #000; padding: 20px;">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #000; padding-bottom: 12px; margin-bottom: 16px;">
          <div>
            <h1 style="margin: 0; font-size: 22px; text-transform: uppercase;">${this.escapeHtml(schoolName)}</h1>
            <div style="font-size: 13px; color: #555;">FEUILLE D'ÉMARGEMENT & PRÉSENCES / ورقة الحضور الرسمية</div>
          </div>
          <div style="text-align: right; font-size: 13px;">
            <div><strong>Date:</strong> ${date}</div>
            <div><strong>Année scolaire:</strong> ${this.settings?.active_year || '2025-2026'}</div>
          </div>
        </div>

        <div style="background: #f8f9fa; border: 1px solid #ddd; border-radius: 6px; padding: 12px 16px; margin-bottom: 18px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; font-size: 13px;">
          <div><strong>Groupe / الفوج:</strong> ${this.escapeHtml(g.name)}</div>
          <div><strong>Matière / المادة:</strong> ${this.escapeHtml(g.subject_name || '-')}</div>
          <div><strong>Niveau / المستوى:</strong> ${this.escapeHtml(g.level_name || '-')}</div>
          <div><strong>Enseignant / الأستاذ:</strong> ${this.escapeHtml(g.teacher_name || '-')}</div>
          <div><strong>Séance N° / رقم الحصة:</strong> ${sNumber}</div>
          <div><strong>Thème / الدرس:</strong> ${this.escapeHtml(sTopic || '-')}</div>
        </div>

        <table style="width: 100%; border-collapse: collapse; font-size: 12px; margin-bottom: 20px;">
          <thead>
            <tr style="background: #e9ecef;">
              <th style="border: 1px solid #999; padding: 6px; width: 30px;">#</th>
              <th style="border: 1px solid #999; padding: 6px; text-align: left;">Matricule</th>
              <th style="border: 1px solid #999; padding: 6px; text-align: left;">Nom & Prénom / الاسم واللقب</th>
              <th style="border: 1px solid #999; padding: 6px; width: 80px;">Présence</th>
              <th style="border: 1px solid #999; padding: 6px; width: 90px;">Cotisation</th>
              <th style="border: 1px solid #999; padding: 6px; width: 140px;">Émargement / التوقيع</th>
              <th style="border: 1px solid #999; padding: 6px;">Remarques</th>
            </tr>
          </thead>
          <tbody>
            ${students.map((st, i) => {
      const rec = this.attendanceRecords[st.student_id] || { status: 'present', notes: '' };
      let statusLabel = 'Présent';
      if (rec.status === 'absent') statusLabel = 'ABSENT';
      else if (rec.status === 'late') statusLabel = 'Retard';
      else if (rec.status === 'excused') statusLabel = 'Justifié';

      return `
                <tr>
                  <td style="border: 1px solid #999; padding: 6px; text-align: center;">${i + 1}</td>
                  <td style="border: 1px solid #999; padding: 6px;">${st.matricule}</td>
                  <td style="border: 1px solid #999; padding: 6px; font-weight: bold;">${this.escapeHtml(st.first_name)} ${this.escapeHtml(st.last_name)}</td>
                  <td style="border: 1px solid #999; padding: 6px; text-align: center; font-weight: bold;">${statusLabel}</td>
                  <td style="border: 1px solid #999; padding: 6px; text-align: center;">${st.is_paid ? 'À jour' : 'Impayé'}</td>
                  <td style="border: 1px solid #999; padding: 6px;"></td>
                  <td style="border: 1px solid #999; padding: 6px;">${this.escapeHtml(rec.notes || '')}</td>
                </tr>
              `;
    }).join('')}
          </tbody>
        </table>

        <div style="display: flex; justify-content: space-between; margin-top: 30px; font-size: 13px;">
          <div>Visa de l'Administration / تأشيرة الإدارة</div>
          <div>Signature de l'Enseignant / توقيع الأستاذ</div>
        </div>
      </div>
    `;

    printDiv.style.display = 'block';
    window.print();
    setTimeout(() => { printDiv.style.display = 'none'; }, 1000);
  }

  printAttendanceMatrix() {
    const modalTable = document.getElementById('attendanceMatrixTable');
    if (!modalTable) return;

    const printDiv = document.getElementById('attendancePrintMatrix');
    if (!printDiv) return;

    const gTitle = document.getElementById('matrixModalGroupTitle')?.textContent || '';
    const schoolName = this.settings?.school_name || 'EDUMIND Academy';
    const periodLabel = this.getMonthLabel(this.matrixSelectedMonth);

    printDiv.innerHTML = `
      <div style="font-family: Arial, sans-serif; color: #000; padding: 20px;">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #000; padding-bottom: 12px; margin-bottom: 16px;">
          <div>
            <h1 style="margin: 0; font-size: 20px; text-transform: uppercase;">${this.escapeHtml(schoolName)}</h1>
            <div style="font-size: 13px; color: #555;">${this.lang === 'ar' ? 'سجل الحصص والمواظبة العامة' : 'GRILLE DES SÉANCES & ASSIDUITÉ'}</div>
          </div>
          <div style="text-align: right; font-size: 13px;">
            <div><strong>${this.lang === 'ar' ? 'الفوج:' : 'Groupe:'}</strong> ${this.escapeHtml(gTitle)}</div>
            <div><strong>${this.lang === 'ar' ? 'الفترة:' : 'Période:'}</strong> ${this.escapeHtml(periodLabel)}</div>
            <div><strong>${this.lang === 'ar' ? 'تاريخ الاستخراج:' : 'Date:'}</strong> ${new Date().toLocaleDateString(this.lang === 'ar' ? 'ar-DZ' : 'fr-FR')}</div>
          </div>
        </div>

        <div style="margin-bottom: 16px;">
          ${modalTable.outerHTML}
        </div>

        <div style="display: flex; justify-content: space-between; margin-top: 30px; font-size: 13px;">
          <div>${this.lang === 'ar' ? 'تأشيرة الإدارة' : "Visa de l'Administration"}</div>
          <div>${this.lang === 'ar' ? 'توقيع الأستاذ' : "Signature de l'Enseignant"}</div>
        </div>
      </div>
    `;

    printDiv.style.display = 'block';
    window.print();
    setTimeout(() => { printDiv.style.display = 'none'; }, 1000);
  }

  // ===========================================================================
  // BARCODE SCANNER (DOUCHETTE USB) HARDWARE WEDGE & NORMALIZER
  // ===========================================================================
  normalizeBarcodeCode(raw) {
    if (!raw) return '';
    let code = String(raw).trim().replace(/[\x00-\x1F\x7F]/g, '');

    // 1. Arabic-Indic digits to ASCII (٠-٩ -> 0-9)
    const arabicDigits = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];
    arabicDigits.forEach((d, i) => { code = code.replaceAll(d, String(i)); });

    // 2. Arabic keyboard scancodes for common prefixes (ثمث -> ELE, etc.)
    const arKeys = {
      'ث':'E', 'م':'L', 'ف':'T', 'ع':'U', 'ن':'N', 'س':'S',
      'ح':'P', 'د':'N', 'ق':'A', 'غ':'Y', 'ص':'W'
    };
    if (/[\u0600-\u06FF]/.test(code)) {
      let conv = '';
      for (let ch of code) conv += arKeys[ch] || ch;
      code = conv;
    }

    // 3. French AZERTY number row without Shift:
    // & -> 1, é -> 2, " -> 3, ' -> 4, ( -> 5, - -> 6, è -> 7, _ -> 8, ç -> 9, à -> 0
    const azertyDigits = {
      '&': '1', 'é': '2', 'É': '2',
      '"': '3',
      "'": '4',
      '(': '5',
      'è': '7', 'È': '7',
      '_': '8',
      'ç': '9', 'Ç': '9',
      'à': '0', 'À': '0'
    };

    if (/[éèçà&"'_]/.test(code) || /[\(\)]/.test(code)) {
      let conv = '';
      for (let i = 0; i < code.length; i++) {
        const ch = code[i];
        if (azertyDigits[ch] !== undefined) {
          conv += azertyDigits[ch];
        } else if (ch === '-' && (i === 3 || i === 8)) {
          // Keep hyphens in format like ELE-2026-0001
          conv += '-';
        } else if (ch === '-') {
          // On AZERTY, key 6 outputs '-'
          conv += '6';
        } else {
          conv += ch;
        }
      }
      code = conv;
    }

    return code.trim().toUpperCase();
  }

  setupBarcodeScannerListener() {
    let barcodeBuffer = '';
    let lastKeyTime = 0;
    let scanTimeout = null;

    window.addEventListener('keydown', (e) => {
      // Ignore key shortcuts like Ctrl+B, Alt, Escape, etc.
      if (e.ctrlKey || e.altKey || e.metaKey || e.key === 'Escape' || e.key === 'F5' || e.key === 'Tab') {
        return;
      }

      const now = Date.now();
      const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
      const activeId = document.activeElement ? document.activeElement.id : '';

      const isScannerInput = activeId === 'pointageInput' || activeId === 'entranceScanInput';
      const isRegularInput = (activeTag === 'input' && !isScannerInput) || activeTag === 'textarea';

      // Barcode scanners send an Enter key when finished scanning
      if (e.key === 'Enter') {
        if (barcodeBuffer.length >= 3) {
          const scannedCode = barcodeBuffer.trim();
          barcodeBuffer = '';
          lastKeyTime = 0;
          clearTimeout(scanTimeout);

          // If not currently typing in a regular form input (like student name, etc.)
          if (!isRegularInput || isScannerInput) {
            e.preventDefault();
            this.handleGlobalBarcodeScan(scannedCode);
            return;
          }
        }
        return;
      }

      // Printable single characters
      if (e.key && e.key.length === 1) {
        const timeDiff = now - lastKeyTime;
        lastKeyTime = now;

        // Hardware scanners output characters with very short delay (< 65ms)
        if (timeDiff < 65 || barcodeBuffer.length === 0) {
          barcodeBuffer += e.key;
        } else {
          // Normal human typing: restart buffer with current key
          barcodeBuffer = e.key;
        }

        clearTimeout(scanTimeout);
        // For scanners configured without an Enter suffix:
        scanTimeout = setTimeout(() => {
          if (barcodeBuffer.length >= 5) {
            const potentialCode = barcodeBuffer.trim();
            if (!isRegularInput && (this.currentView === 'pointage' || potentialCode.includes('-'))) {
              this.handleGlobalBarcodeScan(potentialCode);
              barcodeBuffer = '';
            }
          }
        }, 90);
      }
    }, true); // Use capture phase so scanner is intercepted reliably!
  }

  handleGlobalBarcodeScan(rawCode) {
    const normalized = this.normalizeBarcodeCode(rawCode);
    if (!normalized) return;

    console.log('📡 Hardware Barcode Scanner captured:', rawCode, '->', normalized);

    // If currently on Pointage view:
    if (this.currentView === 'pointage') {
      if (this.attendanceMode === 'entrance') {
        const input = document.getElementById('entranceScanInput');
        if (input) input.value = normalized;
        this.handleEntranceScan();
      } else {
        // If in sheet mode, auto-switch to scan mode so result is visible
        if (this.attendanceMode === 'sheet') {
          this.switchAttendanceMode('scan');
        }
        const input = document.getElementById('pointageInput');
        if (input) input.value = normalized;
        this.handlePointageScan();
      }
    } else {
      // If on Payments / Caisse:
      if (this.currentView === 'paiements') {
        const searchInput = document.getElementById('fastPayStudentSearch');
        if (searchInput) {
          searchInput.value = normalized;
          this.onFastPayStudentSearch(normalized);
        }
      } else {
        // Automatically switch to pointage scan and register!
        this.switchView('pointage');
        this.switchAttendanceMode('scan');
        setTimeout(() => {
          const input = document.getElementById('pointageInput');
          if (input) input.value = normalized;
          this.handlePointageScan();
        }, 150);
      }
    }
  }

  // -------------------------------------------------------------
  // RAPID POINTAGE SCANNER (ATTENDANCE & CHIME)
  // -------------------------------------------------------------
  async handlePointageScan() {
    const input = document.getElementById('pointageInput');
    if (!input) return;
    const raw = input.value.trim();
    if (!raw) return;

    const code = this.normalizeBarcodeCode(raw);
    input.value = code;

    const groupId = document.getElementById('scanSelectGroup')?.value || this.currentAttendanceGroup || null;
    const sessionDate = document.getElementById('scanSessionDate')?.value || this.currentAttendanceDate || new Date().toISOString().split('T')[0];

    try {
      const res = await fetch('/api/pointage/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: code, group_id: groupId, session_date: sessionDate })
      });

      const data = await res.json();
      const card = document.getElementById('pointageResultCard');
      const badge = document.getElementById('pointageBadge');
      const infoText = document.getElementById('pointageInfoText');

      if (!data.success) {
        this.playChime('error');
        card.className = 'pointage-result-card status-due';
        badge.style.background = '#ef4444';
        badge.textContent = this.lang === 'ar' ? 'غير مسجل في النظام ❌' : 'NON TROUVÉ ❌';
        infoText.innerHTML = `<h3 style="color: #ef4444; font-size: 18px;">${this.escapeHtml(data.error)}</h3>`;
        card.style.display = 'block';
        input.value = '';
        setTimeout(() => input.focus(), 20);
        return;
      }

      const s = data.student;

      if (data.autoAssignedGroup) {
        // Automatically update group dropdown to student's actual active group
        this.currentAttendanceGroup = data.autoAssignedGroup.id;
        const scanSelect = document.getElementById('scanSelectGroup');
        if (scanSelect) scanSelect.value = data.autoAssignedGroup.id;
      }

      if (data.notInSelectedGroup) {
        this.playChime('error');
        card.className = 'pointage-result-card status-due';
        badge.style.background = '#ef4444';
        badge.textContent = this.lang === 'ar' ? '⚠️ غير مسجل في أي فوج نشط' : '⚠️ NON INSCRIT DANS AUCUN GROUPE';
        infoText.innerHTML = `
          <h3 style="font-size: 20px; font-weight: 800; color: #fff;">${this.escapeHtml(s.first_name)} ${this.escapeHtml(s.last_name)}</h3>
          <p style="color: #94a3b8; font-size: 13.5px;">Matricule: <strong style="color: #60a5fa;">${s.matricule}</strong></p>
          <p style="color: #f87171; font-weight: 700; font-size: 13.5px; margin-top: 4px;">
            ${this.lang === 'ar' ? 'التلميذ مسجل في المركز لكنه غير مقيد في أي فوج نشط حالياً!' : 'Cet élève n\'est inscrit dans aucun groupe actif.'}
          </p>
        `;
      } else if (data.alreadyMarked) {
        this.playChime('warning');
        card.className = 'pointage-result-card status-paid';
        badge.style.background = '#f59e0b';
        badge.textContent = this.lang === 'ar' ? 'ℹ️ سُجِّل حضوره مسبقاً اليوم' : 'ℹ️ DÉJÀ ENREGISTRÉ AUJOURD\'HUI';
        infoText.innerHTML = `
          <h3 style="font-size: 20px; font-weight: 800; color: #fff;">${this.escapeHtml(s.first_name)} ${this.escapeHtml(s.last_name)}</h3>
          <p style="color: #94a3b8; font-size: 13.5px;">Matricule: <strong style="color: #60a5fa;">${s.matricule}</strong> | ${s.level_name || '-'}</p>
          <p style="color: #fbbf24; font-weight: 700; margin-top: 4px; font-size: 13.5px;">
            ${this.lang === 'ar' ? 'تم تسجيل حضور هذا التلميذ سابقاً عند: ' + (data.existingTime || '') : 'Pointage déjà validé précédemment à ' + (data.existingTime || '')}
          </p>
        `;
      } else if (data.isPaid) {
        this.playChime('success');
        card.className = 'pointage-result-card status-paid';
        badge.style.background = '#10b981';
        badge.textContent = this.lang === 'ar' ? '✅ الحساب مسدد (حاضر)' : '✅ INSCRIPTION À JOUR (PAYÉ)';
        infoText.innerHTML = `
          <h3 style="font-size: 20px; font-weight: 800; color: #fff;">${this.escapeHtml(s.first_name)} ${this.escapeHtml(s.last_name)}</h3>
          <p style="color: #94a3b8; font-size: 13.5px;">Matricule: <strong style="color: #60a5fa;">${s.matricule}</strong> | ${s.level_name || '-'}</p>
          <p style="color: #10b981; font-weight: 700; margin-top: 4px; font-size: 13.5px;">
            ${this.lang === 'ar' ? 'تم تأكيد دفع اشتراك الشهر. سُجّل الحضور عند ' + data.timestamp : 'Paiement vérifié pour ce mois. Présence enregistrée à ' + data.timestamp}
          </p>
          ${data.autoAssignedGroup ? `<p style="color: #38bdf8; font-size: 12.5px; margin-top: 4px; font-weight: 700;"><i class="fa-solid fa-users"></i> ${this.lang === 'ar' ? 'الفوج:' : 'Groupe:'} ${this.escapeHtml(data.autoAssignedGroup.name)} (${this.escapeHtml(data.autoAssignedGroup.subject_name || '')})</p>` : ''}
        `;
      } else {
        this.playChime('warning');
        card.className = 'pointage-result-card status-due';
        badge.style.background = '#ef4444';
        badge.textContent = this.lang === 'ar' ? '⚠️ تنبيه: اشتراك غير مسدد' : '⚠️ ATTENTION: ABONNEMENT IMPAYÉ';
        infoText.innerHTML = `
          <h3 style="font-size: 20px; font-weight: 800; color: #fff;">${this.escapeHtml(s.first_name)} ${this.escapeHtml(s.last_name)}</h3>
          <p style="color: #94a3b8; font-size: 13.5px;">Matricule: <strong style="color: #60a5fa;">${s.matricule}</strong> | Tél: ${s.phone || s.parent_phone || '-'}</p>
          <p style="color: #ef4444; font-weight: 700; margin-top: 4px; font-size: 13.5px;">
            ${this.lang === 'ar' ? 'التلميذ لم يسدد اشتراك هذا الشهر بعد. تم تسجيل الحضور مع تنبيه بالمستحقات.' : 'L\'élève n\'a pas encore réglé ce mois. Présence notée avec retard de paiement.'}
          </p>
          ${data.autoAssignedGroup ? `<p style="color: #38bdf8; font-size: 12.5px; margin-top: 4px; font-weight: 700;"><i class="fa-solid fa-users"></i> ${this.lang === 'ar' ? 'الفوج:' : 'Groupe:'} ${this.escapeHtml(data.autoAssignedGroup.name)} (${this.escapeHtml(data.autoAssignedGroup.subject_name || '')})</p>` : ''}
        `;
      }

      card.style.display = 'block';

      if (data.groupStats) {
        const statTotal = document.getElementById('scanStatTotal');
        const statPresent = document.getElementById('scanStatPresent');
        const statPending = document.getElementById('scanStatPending');
        if (statTotal) statTotal.textContent = data.groupStats.totalEnrolled;
        if (statPresent) statPresent.textContent = data.groupStats.presentCount;
        if (statPending) statPending.textContent = data.groupStats.remainingCount;
      }

      await this.loadScanLiveList();
      if (this.currentAttendanceGroup) {
        await this.fetchAttendanceSheet(this.currentAttendanceGroup, this.currentAttendanceDate);
      }

      input.value = '';
      setTimeout(() => { input.focus(); }, 25);
    } catch (err) {
      console.error('Scan error:', err);
    }
  }

  async loadScanLiveList() {
    const groupId = document.getElementById('scanSelectGroup')?.value || this.currentAttendanceGroup;
    const sessionDate = document.getElementById('scanSessionDate')?.value || this.currentAttendanceDate || new Date().toISOString().split('T')[0];
    const tbody = document.getElementById('scanLiveTableBody');
    if (!tbody) return;

    if (!groupId) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 30px; color: var(--text-muted);">${this.lang === 'ar' ? 'يرجى اختيار الفوج لعرض قائمة الحضور اللحظي.' : 'Veuillez sélectionner un groupe pour afficher la présence.'}</td></tr>`;
      return;
    }

    try {
      const res = await fetch(`/api/pointage/live-list?group_id=${groupId}&session_date=${sessionDate}`);
      const data = await res.json();
      if (!data.success) return;

      const stats = data.stats || { totalEnrolled: 0, presentCount: 0, pendingCount: 0 };
      const elTotal = document.getElementById('scanStatTotal');
      const elPresent = document.getElementById('scanStatPresent');
      const elPending = document.getElementById('scanStatPending');
      if (elTotal) elTotal.textContent = stats.totalEnrolled;
      if (elPresent) elPresent.textContent = stats.presentCount;
      if (elPending) elPending.textContent = stats.pendingCount;

      const scanBadge = document.getElementById('scanBadgeCount');
      if (scanBadge) {
        scanBadge.textContent = `${stats.presentCount} ${this.lang === 'ar' ? 'حاضرين' : 'présents'} / ${stats.totalEnrolled}`;
      }

      const students = data.students || [];
      if (students.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 30px; color: var(--text-muted);">${this.lang === 'ar' ? 'لا يوجد أي تلاميذ مسجلين في هذا الفوج حتى الآن.' : 'Aucun élève inscrit dans ce groupe.'}</td></tr>`;
        return;
      }

      tbody.innerHTML = students.map((s, idx) => {
        const isPresent = s.attendance_status === 'present';
        const isAbsent = s.attendance_status === 'absent';
        const isPaid = (s.payment_id && (s.remaining_amount === 0 || s.remaining_amount === null));

        let statusBadge = `<span style="background: rgba(148, 163, 184, 0.12); color: #94a3b8; padding: 4px 10px; border-radius: 6px; font-size: 11px; font-weight: 700;">${this.lang === 'ar' ? 'في الانتظار' : 'En attente'}</span>`;
        if (isPresent) {
          statusBadge = `<span style="background: rgba(16, 185, 129, 0.15); color: #10b981; padding: 4px 10px; border-radius: 6px; font-size: 11px; font-weight: 800; display: inline-flex; align-items: center; gap: 4px;"><i class="fa-solid fa-check"></i> ${this.lang === 'ar' ? 'حاضر' : 'Présent'}</span>`;
        } else if (isAbsent) {
          statusBadge = `<span style="background: rgba(239, 68, 68, 0.15); color: #ef4444; padding: 4px 10px; border-radius: 6px; font-size: 11px; font-weight: 800; display: inline-flex; align-items: center; gap: 4px;"><i class="fa-solid fa-xmark"></i> ${this.lang === 'ar' ? 'غائب' : 'Absent'}</span>`;
        }

        let paymentBadge = `<span style="color: #ef4444; font-size: 12px; font-weight: 700;"><i class="fa-solid fa-circle-exclamation"></i> ${this.lang === 'ar' ? 'غير مسدد' : 'Impayé'}</span>`;
        if (isPaid) {
          paymentBadge = `<span style="color: #10b981; font-size: 12px; font-weight: 700;"><i class="fa-solid fa-circle-check"></i> ${this.lang === 'ar' ? 'مسدد' : 'Réglé'}</span>`;
        } else if (s.remaining_amount > 0) {
          paymentBadge = `<span style="color: #f59e0b; font-size: 12px; font-weight: 700;"><i class="fa-solid fa-clock"></i> ${this.lang === 'ar' ? 'متبقي ' + s.remaining_amount + ' دج' : 'Reste ' + s.remaining_amount + ' DA'}</span>`;
        }

        return `
          <tr style="${isPresent ? 'background: rgba(16, 185, 129, 0.04);' : ''}">
            <td style="color: var(--text-muted); font-weight: 700;">${idx + 1}</td>
            <td><strong style="color: var(--text-muted); font-size: 12px;">${s.check_in_time || '--:--'}</strong></td>
            <td><strong style="color: #60a5fa; font-family: monospace;">${s.matricule}</strong></td>
            <td>
              <div style="display: flex; align-items: center; gap: 8px;">
                <div class="student-avatar-box" style="width: 28px; height: 28px; font-size: 12px; border-radius: 6px;">
                  <i class="fa-solid fa-user"></i>
                </div>
                <strong>${this.escapeHtml(s.last_name)} ${this.escapeHtml(s.first_name)}</strong>
              </div>
            </td>
            <td>${paymentBadge}</td>
            <td style="text-align: center;">${statusBadge}</td>
            <td style="text-align: center;">
              ${isPresent ? `
                <button type="button" class="btn-icon" style="color: #ef4444; font-size: 12px;" title="${this.lang === 'ar' ? 'إلغاء الحضور' : 'Annuler présence'}" onclick="app.cancelScannedAttendance(${s.id})">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              ` : `
                <button type="button" class="btn-icon" style="color: #10b981; font-size: 12px;" title="${this.lang === 'ar' ? 'تسجيل كحاضر' : 'Pointer présent'}" onclick="app.quickMarkPresent(${s.id})">
                  <i class="fa-solid fa-check"></i>
                </button>
              `}
            </td>
          </tr>
        `;
      }).join('');
    } catch (err) {
      console.error('loadScanLiveList error:', err);
    }
  }

  async cancelScannedAttendance(studentId) {
    const groupId = document.getElementById('scanSelectGroup')?.value || this.currentAttendanceGroup;
    const sessionDate = document.getElementById('scanSessionDate')?.value || this.currentAttendanceDate || new Date().toISOString().split('T')[0];
    if (!groupId || !studentId) return;

    if (!confirm(this.lang === 'ar' ? 'هل تريد إلغاء تسجيل حضور هذا التلميذ؟' : 'Annuler le pointage de cet élève ?')) return;

    try {
      const res = await fetch('/api/pointage/cancel', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ student_id: studentId, group_id: groupId, session_date: sessionDate })
      });
      const data = await res.json();
      if (data.success) {
        this.playChime('warning');
        await this.loadScanLiveList();
        if (this.currentAttendanceGroup) {
          await this.fetchAttendanceSheet(this.currentAttendanceGroup, this.currentAttendanceDate);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  async quickMarkPresent(studentId) {
    const groupId = document.getElementById('scanSelectGroup')?.value || this.currentAttendanceGroup;
    const sessionDate = document.getElementById('scanSessionDate')?.value || this.currentAttendanceDate || new Date().toISOString().split('T')[0];
    if (!groupId || !studentId) return;

    try {
      const res = await fetch('/api/pointage/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: String(studentId), group_id: groupId, session_date: sessionDate })
      });
      const data = await res.json();
      if (data.success) {
        this.playChime(data.isPaid ? 'success' : 'warning');
        await this.loadScanLiveList();
        if (this.currentAttendanceGroup) {
          await this.fetchAttendanceSheet(this.currentAttendanceGroup, this.currentAttendanceDate);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  async confirmCloseAttendanceSession() {
    const groupId = document.getElementById('scanSelectGroup')?.value ||
      document.getElementById('attSelectGroup')?.value ||
      this.currentAttendanceGroup;
    const sessionDate = document.getElementById('scanSessionDate')?.value ||
      document.getElementById('attSessionDate')?.value ||
      this.currentAttendanceDate ||
      new Date().toISOString().split('T')[0];

    if (!groupId) {
      alert(this.lang === 'ar' ? 'يرجى اختيار الفوج أولاً!' : 'Veuillez sélectionner un groupe d\'abord !');
      return;
    }

    try {
      const res = await fetch(`/api/pointage/live-list?group_id=${groupId}&session_date=${sessionDate}`);
      const data = await res.json();
      if (!data.success) return;

      const stats = data.stats || { totalEnrolled: 0, presentCount: 0, pendingCount: 0 };
      const groupSelect = document.getElementById('scanSelectGroup') || document.getElementById('attSelectGroup');
      const groupName = groupSelect?.options[groupSelect.selectedIndex]?.text?.split('—')[0] || 'Groupe';

      const summaryEl = document.getElementById('closeSessionSummaryText');
      if (summaryEl) {
        if (this.lang === 'ar') {
          summaryEl.innerHTML = `
            هل تريد <strong>تأكيد انتهاء حضور كامل التلاميذ</strong> لهذا الفوج؟<br>
            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); border-radius: 8px; padding: 12px; margin-top: 12px; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; text-align: center;">
              <div><span style="color: var(--text-muted); font-size: 11px;">إجمالي المسجلين</span><div style="font-size: 18px; font-weight: 800;">${stats.totalEnrolled}</div></div>
              <div><span style="color: #10b981; font-size: 11px;">الحاضرون المسجلون</span><div style="font-size: 18px; font-weight: 800; color: #10b981;">${stats.presentCount}</div></div>
              <div><span style="color: #ef4444; font-size: 11px;">سيُسجلون كغائبين</span><div style="font-size: 18px; font-weight: 800; color: #ef4444;">${stats.pendingCount}</div></div>
            </div>
            <div style="margin-top: 12px; font-size: 13px;">
              <strong>الفوج:</strong> ${this.escapeHtml(groupName)}<br>
              <strong>تاريخ الحصة:</strong> ${sessionDate}
            </div>
          `;
        } else {
          summaryEl.innerHTML = `
            Confirmez-vous la <strong>fin de l'appel</strong> pour ce groupe ?<br>
            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); border-radius: 8px; padding: 12px; margin-top: 12px; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; text-align: center;">
              <div><span style="color: var(--text-muted); font-size: 11px;">Total Inscrits</span><div style="font-size: 18px; font-weight: 800;">${stats.totalEnrolled}</div></div>
              <div><span style="color: #10b981; font-size: 11px;">Présents Pointés</span><div style="font-size: 18px; font-weight: 800; color: #10b981;">${stats.presentCount}</div></div>
              <div><span style="color: #ef4444; font-size: 11px;">Seront Notés Absents</span><div style="font-size: 18px; font-weight: 800; color: #ef4444;">${stats.pendingCount}</div></div>
            </div>
            <div style="margin-top: 12px; font-size: 13px;">
              <strong>Groupe :</strong> ${this.escapeHtml(groupName)}<br>
              <strong>Date :</strong> ${sessionDate}
            </div>
          `;
        }
      }

      this.closeSessionPendingTarget = { groupId, sessionDate };
      document.getElementById('modalConfirmCloseSession')?.classList.add('active');
    } catch (e) {
      console.error(e);
    }
  }

  async executeCloseAttendanceSession() {
    if (!this.closeSessionPendingTarget) return;
    const { groupId, sessionDate } = this.closeSessionPendingTarget;
    const sNumber = document.getElementById('attSessionNumber')?.value || 1;
    const sTopic = document.getElementById('attSessionTopic')?.value || 'Séance de cours';
    const btn = document.getElementById('btnExecuteCloseSession');

    try {
      if (btn) {
        btn.disabled = true;
        btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${this.lang === 'ar' ? 'جاري المعالجة...' : 'Traitement...'}`;
      }

      const res = await fetch('/api/attendance/close-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          group_id: groupId,
          session_date: sessionDate,
          session_number: sNumber,
          topic: sTopic
        })
      });

      const data = await res.json();
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = `<i class="fa-solid fa-check"></i> <span data-i18n="btn_confirm_close_absent">${this.lang === 'ar' ? 'تأكيد وتسجيل الغياب تلقائياً' : 'Confirmer & Marquer les Absents'}</span>`;
      }

      if (data.success) {
        this.closeModals();
        this.playChime('success');
        alert(this.lang === 'ar' ?
          `✅ ${data.message}\nتم تثبيت الحضور وتسجيل الغائبين المتبقين بنجاح.` :
          `✅ ${data.message}`);

        await this.loadScanLiveList();
        if (this.currentAttendanceGroup) {
          await this.fetchAttendanceSheet(this.currentAttendanceGroup, this.currentAttendanceDate);
        }
      } else {
        this.playChime('error');
        alert(data.error || 'Erreur');
      }
    } catch (err) {
      console.error('executeCloseAttendanceSession error:', err);
      if (btn) btn.disabled = false;
      alert('Erreur serveur lors de la clôture');
    }
  }

  // -------------------------------------------------------------
  // GENERAL ENTRANCE ATTENDANCE (BORNE D'ENTRÉE - ÉLÈVES & ENSEIGNANTS)
  // -------------------------------------------------------------
  setEntranceMode(mode) {
    this.entranceMode = mode;
    ['btnModeAuto', 'btnModeIn', 'btnModeOut'].forEach(id => {
      document.getElementById(id)?.classList.remove('active');
    });
    if (mode === 'auto') document.getElementById('btnModeAuto')?.classList.add('active');
    else if (mode === 'in') document.getElementById('btnModeIn')?.classList.add('active');
    else if (mode === 'out') document.getElementById('btnModeOut')?.classList.add('active');
    setTimeout(() => document.getElementById('entranceScanInput')?.focus(), 20);
  }

  onEntranceDateChange(date) {
    this.entranceDate = date || new Date().toISOString().split('T')[0];
    this.loadEntranceLiveList();
  }

  startEntranceClock() {
    if (this.entranceClockTimer) clearInterval(this.entranceClockTimer);
    const update = () => {
      const el = document.getElementById('entranceDigitalClock');
      if (el) {
        el.textContent = new Date().toLocaleTimeString(this.lang === 'ar' ? 'ar-DZ' : 'fr-FR');
      }
    };
    update();
    this.entranceClockTimer = setInterval(update, 1000);
  }

  async loadEntranceView() {
    this.startEntranceClock();
    const dateInput = document.getElementById('entranceSessionDate');
    if (dateInput && !dateInput.value) {
      dateInput.value = this.entranceDate;
    }
    await this.loadEntranceLiveList();
    setTimeout(() => {
      const inp = document.getElementById('entranceScanInput');
      if (inp) inp.focus();
    }, 100);
  }

  async handleEntranceScan() {
    const input = document.getElementById('entranceScanInput');
    if (!input) return;
    const raw = input.value.trim();
    if (!raw) return;

    const code = this.normalizeBarcodeCode(raw);
    input.value = code;

    const dateVal = document.getElementById('entranceSessionDate')?.value || this.entranceDate || new Date().toISOString().split('T')[0];

    try {
      const res = await fetch('/api/entrance/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code: code,
          session_date: dateVal,
          mode: this.entranceMode
        })
      });

      const data = await res.json();
      const card = document.getElementById('entranceResultCard');
      const badge = document.getElementById('entranceBadge');
      const avatarBox = document.getElementById('entranceAvatar');
      const infoText = document.getElementById('entranceInfoText');

      if (!data.success) {
        this.playChime('error');
        if (card && badge && infoText) {
          card.style.display = 'block';
          card.style.borderColor = '#ef4444';
          badge.style.background = '#ef4444';
          badge.textContent = this.lang === 'ar' ? '❌ غير مسجل في النظام' : '❌ INTROUVABLE DANS LE SYSTÈME';
          let localizedError = data.error;
          if (this.lang !== 'ar') {
            if (data.error === 'الرمز أو رقم القيد غير موجود في النظام') {
              localizedError = 'Le code ou matricule scanné est introuvable dans le système.';
            } else if (data.error === 'يرجى إدخال كود الباركود أو رقم القيد') {
              localizedError = 'Veuillez saisir le matricule ou scanner le code-barres.';
            }
          }
          infoText.innerHTML = `
            <h3 style="color: #ef4444; font-size: 19px; font-weight: 800; margin: 0 0 6px 0;">${this.escapeHtml(localizedError)}</h3>
            <p style="color: #94a3b8; font-size: 13.5px; margin: 0;">${this.lang === 'ar' ? 'تأكد من صحة رقم القيد أو الكود المقروء.' : 'Vérifiez le matricule ou le code-barres scanné.'}</p>
          `;
          if (avatarBox) avatarBox.innerHTML = '<i class="fa-solid fa-triangle-exclamation" style="color: #ef4444;"></i>';
        }
        input.value = '';
        setTimeout(() => input.focus(), 20);
        return;
      }

      const p = data.person;
      const isStudent = data.person_type === 'student';
      const action = data.action;

      // Audio feedback
      if (action === 'check_in') {
        this.playChime('success');
      } else if (action === 'check_out') {
        this.playChime('warning');
      } else {
        this.playChime('warning');
      }

      // Update card UI
      if (card && badge && infoText && avatarBox) {
        card.style.display = 'block';

        let badgeBg = '#10b981';
        let badgeText = '';
        let borderColor = '#10b981';

        if (action === 'check_in') {
          badgeBg = '#10b981';
          borderColor = '#10b981';
          badgeText = isStudent
            ? (this.lang === 'ar' ? '🟢 دخول تلميذ (حاضر)' : '🟢 ENTRÉE ÉLÈVE VALIDÉE')
            : (this.lang === 'ar' ? '🟢 حضور أستاذ' : '🟢 ARRIVÉE ENSEIGNANT VALIDÉE');
        } else if (action === 'check_out') {
          badgeBg = '#f59e0b';
          borderColor = '#f59e0b';
          badgeText = isStudent
            ? (this.lang === 'ar' ? '👋 خروج تلميذ (انصراف)' : '👋 SORTIE ÉLÈVE ENREGISTRÉE')
            : (this.lang === 'ar' ? '👋 انصراف أستاذ' : '👋 SORTIE ENSEIGNANT ENREGISTRÉE');
        } else {
          badgeBg = '#3b82f6';
          borderColor = '#3b82f6';
          badgeText = this.lang === 'ar' ? 'ℹ️ مسجل مسبقاً اليوم' : 'ℹ️ DÉJÀ ENREGISTRÉ AUJOURD\'HUI';
        }

        card.style.borderColor = borderColor;
        badge.style.background = badgeBg;
        badge.textContent = badgeText;

        // Avatar
        if (p.photo_url) {
          avatarBox.innerHTML = `<img src="${p.photo_url}" alt="${this.escapeHtml(p.first_name)}" style="width: 100%; height: 100%; object-fit: cover;">`;
        } else {
          avatarBox.innerHTML = isStudent
            ? this.getStudentAvatarSvg(p.gender)
            : '<div style="font-size: 38px; text-align: center; line-height: 90px; color: #f97316;">👨‍🏫</div>';
        }

        // Info Details
        const roleLabel = isStudent
          ? `<span class="badge-role-student"><i class="fa-solid fa-user-graduate"></i> ${this.lang === 'ar' ? 'تلميذ' : 'Élève'}</span>`
          : `<span class="badge-role-teacher"><i class="fa-solid fa-chalkboard-user"></i> ${this.lang === 'ar' ? 'أستاذ' : 'Enseignant'}</span>`;

        const subTitle = isStudent ? (p.level_name || 'Niveau non défini') : (p.subject_name ? `${this.lang === 'ar' ? 'أستاذ مادة:' : 'Matière:'} ${p.subject_name}` : 'Enseignant');

        let durationText = '';
        if (data.attendance?.duration_minutes > 0) {
          const h = Math.floor(data.attendance.duration_minutes / 60);
          const m = data.attendance.duration_minutes % 60;
          durationText = h > 0 ? `${h}h ${m}m` : `${m} min`;
        }

        let displayMessage = data.message;
        if (this.lang !== 'ar') {
          if (action === 'check_in') {
            displayMessage = isStudent ? 'Entrée élève validée avec succès.' : 'Arrivée enseignant enregistrée avec succès.';
          } else if (action === 'check_out') {
            displayMessage = isStudent ? 'Sortie élève enregistrée avec succès.' : 'Sortie enseignant enregistrée avec succès.';
          } else if (action === 'already_checked') {
            displayMessage = 'Pointage déjà enregistré aujourd\'hui.';
          }
        }

        infoText.innerHTML = `
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
            ${roleLabel}
            <span style="font-family: monospace; font-weight: 700; color: #60a5fa; font-size: 13px;">${p.matricule}</span>
          </div>
          <h3 style="font-size: 22px; font-weight: 800; color: #fff; margin: 0 0 6px 0;">${this.escapeHtml(p.first_name)} ${this.escapeHtml(p.last_name)}</h3>
          <p style="color: #94a3b8; font-size: 14px; margin: 0 0 8px 0;">${this.escapeHtml(subTitle)}</p>
          <div style="font-size: 13.5px; font-weight: 700; color: ${borderColor};">
            ${this.escapeHtml(displayMessage)}
          </div>
          <div style="font-size: 12px; color: #94a3b8; margin-top: 6px; display: flex; gap: 14px; flex-wrap: wrap;">
            <span><i class="fa-regular fa-clock"></i> ${this.lang === 'ar' ? 'وقت الدخول:' : 'Entrée:'} <strong>${data.attendance?.check_in_time || '--:--'}</strong></span>
            ${data.attendance?.check_out_time ? `<span><i class="fa-solid fa-clock-rotate-left"></i> ${this.lang === 'ar' ? 'وقت الخروج:' : 'Sortie:'} <strong>${data.attendance.check_out_time}</strong></span>` : ''}
            ${durationText ? `<span><i class="fa-solid fa-hourglass-half"></i> ${this.lang === 'ar' ? 'المدة:' : 'Durée:'} <strong>${durationText}</strong></span>` : ''}
          </div>
        `;
      }

      // Update statistics
      if (data.stats) {
        this.updateEntranceStatsWidgets(data.stats, `${p.first_name} ${p.last_name} (${data.timestamp})`);
      }

      await this.loadEntranceLiveList();

      input.value = '';
      setTimeout(() => input.focus(), 20);
    } catch (err) {
      console.error('handleEntranceScan error:', err);
    }
  }

  updateEntranceStatsWidgets(stats, lastScanText) {
    const elStud = document.getElementById('entranceStatStudents');
    const elTeach = document.getElementById('entranceStatTeachers');
    const elTot = document.getElementById('entranceStatTotal');
    const elLast = document.getElementById('entranceStatLastScan');

    if (elStud) elStud.textContent = `${stats.students_present} / ${stats.students_total}`;
    if (elTeach) elTeach.textContent = `${stats.teachers_present} / ${stats.teachers_total}`;
    if (elTot) elTot.textContent = stats.total_present;
    if (elLast && lastScanText) elLast.textContent = lastScanText;
  }

  async loadEntranceLiveList() {
    const dateVal = document.getElementById('entranceSessionDate')?.value || this.entranceDate || new Date().toISOString().split('T')[0];
    const typeVal = document.getElementById('entranceFilterType')?.value || 'all';

    try {
      const res = await fetch(`/api/entrance/live-list?session_date=${dateVal}&type=${typeVal}`);
      const data = await res.json();
      if (!data.success) return;

      this.entranceRecords = data.records || [];
      if (data.stats) {
        this.updateEntranceStatsWidgets(data.stats);
      }

      const badgeCount = document.getElementById('entranceLiveCountBadge');
      if (badgeCount) {
        badgeCount.textContent = `${this.entranceRecords.length} ${this.lang === 'ar' ? 'مسجلين' : 'pointages'}`;
      }

      const searchInput = document.getElementById('entranceSearchInput');
      if (searchInput && searchInput.value.trim()) {
        this.filterEntranceList(searchInput.value);
      } else {
        this.renderEntranceTable(this.entranceRecords);
      }
    } catch (err) {
      console.error('loadEntranceLiveList error:', err);
    }
  }

  renderEntranceTable(list) {
    const tbody = document.getElementById('entranceLiveTableBody');
    if (!tbody) return;

    if (!list || list.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="10" style="text-align: center; padding: 40px; color: var(--text-muted);">
            <i class="fa-solid fa-qrcode" style="font-size: 32px; margin-bottom: 10px; display: block; opacity: 0.4;"></i>
            ${this.lang === 'ar' ? 'لا توجد تسجيلات حضور في هذا التاريخ.' : 'Aucun pointage enregistré pour cette date.'}
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = list.map((r, idx) => {
      const isStudent = r.person_type === 'student';
      const roleBadge = isStudent
        ? `<span class="badge-role-student"><i class="fa-solid fa-user-graduate"></i> ${this.lang === 'ar' ? 'تلميذ' : 'Élève'}</span>`
        : `<span class="badge-role-teacher"><i class="fa-solid fa-chalkboard-user"></i> ${this.lang === 'ar' ? 'أستاذ' : 'Prof'}</span>`;

      let durationText = '-';
      if (r.duration_minutes > 0) {
        const h = Math.floor(r.duration_minutes / 60);
        const m = r.duration_minutes % 60;
        durationText = h > 0 ? `${h}h ${m}m` : `${m}m`;
      }

      const statusBadge = r.check_out_time
        ? `<span style="background: rgba(245, 158, 11, 0.15); color: #f59e0b; padding: 2px 8px; border-radius: 6px; font-weight: 700; font-size: 11px;">${this.lang === 'ar' ? 'منصرف' : 'Sorti'}</span>`
        : `<span style="background: rgba(16, 185, 129, 0.15); color: #10b981; padding: 2px 8px; border-radius: 6px; font-weight: 700; font-size: 11px;">${this.lang === 'ar' ? 'حاضر بالمدرسة' : 'Présent'}</span>`;

      return `
        <tr>
          <td style="color: var(--text-muted); font-size: 12px;">${idx + 1}</td>
          <td>${roleBadge}</td>
          <td><strong style="color: #60a5fa; font-family: monospace;">${r.matricule}</strong></td>
          <td><strong>${this.escapeHtml(r.first_name)} ${this.escapeHtml(r.last_name)}</strong></td>
          <td style="color: var(--text-muted); font-size: 13px;">${this.escapeHtml(r.extra_label || '-')}</td>
          <td style="text-align: center; font-weight: 700; color: #10b981;">${r.check_in_time}</td>
          <td style="text-align: center; font-weight: 700; color: #f59e0b;">${r.check_out_time || '-'}</td>
          <td style="text-align: center; font-size: 12.5px;">${durationText}</td>
          <td style="text-align: center;">${statusBadge}</td>
          <td style="text-align: center;">
            <button class="btn-icon" style="color: #ef4444; width: 28px; height: 28px; font-size: 12px;" title="${this.lang === 'ar' ? 'إلغاء هذا التسجيل' : 'Supprimer'}" onclick="app.deleteEntranceRecord(${r.id})">
              <i class="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
      `;
    }).join('');
  }

  filterEntranceList(query) {
    const term = (query || '').toLowerCase().trim();
    if (!term) {
      this.renderEntranceTable(this.entranceRecords);
      return;
    }
    const filtered = this.entranceRecords.filter(r =>
      (r.first_name && r.first_name.toLowerCase().includes(term)) ||
      (r.last_name && r.last_name.toLowerCase().includes(term)) ||
      (r.matricule && r.matricule.toLowerCase().includes(term)) ||
      (r.extra_label && r.extra_label.toLowerCase().includes(term))
    );
    this.renderEntranceTable(filtered);
  }

  async deleteEntranceRecord(id) {
    if (!confirm(this.lang === 'ar' ? 'هل أنت متأكد من حذف تسجيل الحضور هذا؟' : 'Supprimer cet enregistrement de présence ?')) return;

    try {
      const res = await fetch(`/api/entrance/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        this.playChime('warning');
        await this.loadEntranceLiveList();
      }
    } catch (err) {
      console.error(err);
    }
  }

  toggleEntranceFullscreen() {
    this.isEntranceFullscreen = !this.isEntranceFullscreen;
    const body = document.body;
    const btn = document.getElementById('btnEntranceFullscreen');

    if (this.isEntranceFullscreen) {
      body.classList.add('entrance-kiosk-active');
      if (btn) {
        btn.innerHTML = `<i class="fa-solid fa-compress"></i> <span>${this.lang === 'ar' ? 'خروج من الشاشة الكاملة' : 'Quitter Plein Écran'}</span>`;
        btn.style.background = '#ef4444';
        btn.style.color = '#fff';
      }
      try {
        if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen().catch(() => {});
        }
      } catch (e) {}
    } else {
      body.classList.remove('entrance-kiosk-active');
      if (btn) {
        btn.innerHTML = `<i class="fa-solid fa-expand"></i> <span>${this.lang === 'ar' ? 'وضع ملء الشاشة (Kiosk)' : 'Plein Écran (Kiosk)'}</span>`;
        btn.style.background = '';
        btn.style.color = '';
      }
      try {
        if (document.fullscreenElement && document.exitFullscreen) {
          document.exitFullscreen().catch(() => {});
        }
      } catch (e) {}
    }

    setTimeout(() => document.getElementById('entranceScanInput')?.focus(), 100);
  }

  printEntranceJournal() {
    const records = this.entranceRecords || [];
    const dateVal = document.getElementById('entranceSessionDate')?.value || this.entranceDate || new Date().toISOString().split('T')[0];
    const schoolName = this.settings?.school_name || 'EDUMIND ACADEMY';
    const isAr = this.lang === 'ar';

    const printWin = window.open('', '_blank');
    if (!printWin) {
      alert(isAr ? 'يرجى السماح بالنوافذ المنبثقة لطباعة السجل.' : 'Veuillez autoriser les fenêtres pop-up.');
      return;
    }

    const studentsCount = records.filter(r => r.person_type === 'student').length;
    const teachersCount = records.filter(r => r.person_type === 'teacher').length;

    const rowsHtml = records.map((r, idx) => `
      <tr>
        <td style="text-align: center; border: 1px solid #cbd5e1; padding: 6px;">${idx + 1}</td>
        <td style="border: 1px solid #cbd5e1; padding: 6px;"><strong>${r.person_type === 'student' ? (isAr ? 'تلميذ' : 'Élève') : (isAr ? 'أستاذ' : 'Enseignant')}</strong></td>
        <td style="border: 1px solid #cbd5e1; padding: 6px; font-family: monospace;">${r.matricule}</td>
        <td style="border: 1px solid #cbd5e1; padding: 6px;"><strong>${this.escapeHtml(r.first_name)} ${this.escapeHtml(r.last_name)}</strong></td>
        <td style="border: 1px solid #cbd5e1; padding: 6px;">${this.escapeHtml(r.extra_label || '-')}</td>
        <td style="text-align: center; border: 1px solid #cbd5e1; padding: 6px;">${r.check_in_time}</td>
        <td style="text-align: center; border: 1px solid #cbd5e1; padding: 6px;">${r.check_out_time || '-'}</td>
        <td style="border: 1px solid #cbd5e1; padding: 6px;"></td>
      </tr>
    `).join('');

    const html = `
      <!DOCTYPE html>
      <html lang="${this.lang}" dir="${isAr ? 'rtl' : 'ltr'}">
      <head>
        <meta charset="UTF-8">
        <title>${isAr ? 'سجل الحضور اليومي للمدخل' : 'Journal des Présences d\'Entrée'} - ${dateVal}</title>
        <style>
          @page { size: A4 landscape; margin: 12mm; }
          html, body { background-color: #ffffff !important; color: #0f172a !important; }
          body { font-family: system-ui, -apple-system, sans-serif; color: #0f172a; margin: 0; padding: 20px; background: #ffffff !important; }
          .header { display: flex; justify-content: space-between; border-bottom: 2px solid #0f172a; padding-bottom: 12px; margin-bottom: 16px; }
          .title { font-size: 20px; font-weight: 800; }
          .stats { display: flex; gap: 16px; margin-bottom: 16px; font-size: 13px; }
          .stat-box { background: #f1f5f9; padding: 6px 14px; border-radius: 6px; border: 1px solid #cbd5e1; }
          table { width: 100%; border-collapse: collapse; font-size: 12px; background-color: #ffffff !important; }
          th { background: #e2e8f0; border: 1px solid #cbd5e1; padding: 8px 6px; font-weight: 700; text-align: ${isAr ? 'right' : 'left'}; color: #0f172a; }
          tbody tr { background-color: #ffffff !important; }
          tbody tr:nth-child(even) { background-color: #f8fafc !important; }
          .footer { display: flex; justify-content: space-between; margin-top: 30px; font-size: 13px; }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="title">🎓 ${schoolName}</div>
            <div style="font-size: 14px; font-weight: 700; color: #475569; margin-top: 4px;">
              ${isAr ? 'سجل الحضور والانصراف اليومي عند المدخل' : 'Journal Général de Présence & Pointage d\'Entrée'}
            </div>
          </div>
          <div style="text-align: ${isAr ? 'left' : 'right'}; font-size: 13px;">
            <div><strong>${isAr ? 'التاريخ:' : 'Date:'}</strong> ${dateVal}</div>
            <div><strong>${isAr ? 'تاريخ الطباعة:' : 'Imprimé le:'}</strong> ${new Date().toLocaleTimeString()}</div>
          </div>
        </div>

        <div class="stats">
          <div class="stat-box"><strong>${isAr ? 'إجمالي الحضور:' : 'Total Présents:'}</strong> ${records.length}</div>
          <div class="stat-box"><strong>${isAr ? 'التلاميذ:' : 'Élèves:'}</strong> ${studentsCount}</div>
          <div class="stat-box"><strong>${isAr ? 'الأساتذة:' : 'Enseignants:'}</strong> ${teachersCount}</div>
        </div>

        <table>
          <thead>
            <tr>
              <th style="width: 40px; text-align: center;">#</th>
              <th style="width: 90px;">${isAr ? 'الصفة' : 'Type'}</th>
              <th style="width: 110px;">${isAr ? 'رقم القيد' : 'Matricule'}</th>
              <th>${isAr ? 'الاسم واللقب' : 'Nom & Prénom'}</th>
              <th>${isAr ? 'القسم / المادة' : 'Classe / Matière'}</th>
              <th style="width: 100px; text-align: center;">${isAr ? 'وقت الدخول' : 'Heure Entrée'}</th>
              <th style="width: 100px; text-align: center;">${isAr ? 'وقت الخروج' : 'Heure Sortie'}</th>
              <th style="width: 140px;">${isAr ? 'الملاحظات / التأشيرة' : 'Visa / Émargement'}</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml || `<tr><td colspan="8" style="text-align: center; padding: 20px;">${isAr ? 'لا توجد بيانات' : 'Aucune donnée'}</td></tr>`}
          </tbody>
        </table>

        <div class="footer">
          <div>${isAr ? 'تأشيرة مسؤول المدخل والاستقبال' : 'Visa du Responsable d\'Accueil'}</div>
          <div>${isAr ? 'تأشيرة وختم الإدارة' : 'Visa et Cachet de la Direction'}</div>
        </div>
      </body>
      </html>
    `;

    printWin.document.open();
    printWin.document.write(html);
    printWin.document.close();
    setTimeout(() => {
      printWin.focus();
      printWin.print();
    }, 500);
  }

  // -------------------------------------------------------------
  // TEACHER CARD & BARCODE BADGE
  // -------------------------------------------------------------
  async showTeacherCard(teacherId) {
    try {
      const res = await fetch(`/api/teachers/${teacherId}`);
      const data = await res.json();
      if (!data.success || !data.teacher) {
        alert(this.lang === 'ar' ? 'تعذر تحميل بيانات الأستاذ' : 'Impossible de charger l\'enseignant');
        return;
      }

      const t = data.teacher;
      this.currentCardTeacher = t;

      const schoolName = this.settings?.school_name || 'EDUMIND ACADEMY';
      const schoolYear = this.settings?.school_year || '2025/2026';
      const schoolLogo = this.settings?.school_logo || '/img/logo-icon.png';

      const sNameEl = document.getElementById('cardTeacherSchoolName');
      if (sNameEl) sNameEl.textContent = schoolName;

      const sYearEl = document.getElementById('cardTeacherSchoolYear');
      if (sYearEl) sYearEl.textContent = schoolYear;

      const sLogoEl = document.getElementById('cardTeacherSchoolLogo');
      if (sLogoEl && schoolLogo) sLogoEl.src = schoolLogo;

      const fullName = `${t.first_name || ''} ${t.last_name || ''}`.trim();
      const matricule = t.matricule || `ENS-${String(t.id).padStart(3, '0')}`;
      const subject = t.subject_name || (this.lang === 'ar' ? 'أستاذ عام' : 'Enseignant');
      const phone = t.phone || '-';

      const nameEl = document.getElementById('cardTeacherName');
      if (nameEl) nameEl.textContent = fullName;

      const matEl = document.getElementById('cardTeacherMatricule');
      if (matEl) matEl.textContent = matricule;

      const subEl = document.getElementById('cardTeacherSubject');
      if (subEl) subEl.textContent = subject;

      const phoneEl = document.getElementById('cardTeacherPhone');
      if (phoneEl) phoneEl.textContent = phone;

      // Barcode generation with JsBarcode
      try {
        if (window.JsBarcode) {
          JsBarcode('#cardTeacherBarcodeSvg', matricule, {
            format: 'CODE128',
            lineColor: '#000000',
            background: '#ffffff',
            width: 2.0,
            height: 48,
            displayValue: true,
            font: 'monospace',
            fontOptions: 'bold',
            fontSize: 13,
            textMargin: 3,
            margin: 4
          });
        }
      } catch (e) {
        console.warn('JsBarcode teacher error:', e);
      }

      document.getElementById('modalTeacherCard')?.classList.add('active');
    } catch (err) {
      console.error('showTeacherCard error:', err);
    }
  }

  copyTeacherBarcodeMatricule() {
    if (!this.currentCardTeacher?.matricule) return;
    navigator.clipboard.writeText(this.currentCardTeacher.matricule).then(() => {
      alert(this.lang === 'ar' ? 'تم نسخ كود الأستاذ بنجاح!' : 'Matricule copié dans le presse-papier !');
    });
  }

  printSingleTeacherCard() {
    const t = this.currentCardTeacher;
    if (!t) return;

    const schoolName = this.settings?.school_name || 'EDUMIND ACADEMY';
    const schoolYear = this.settings?.school_year || '2025/2026';
    const matricule = t.matricule || `ENS-${String(t.id).padStart(3, '0')}`;
    const fullName = `${t.first_name || ''} ${t.last_name || ''}`.trim();
    const subject = t.subject_name || 'Enseignant';
    const phone = t.phone || '-';

    const barcodeSvgEl = document.getElementById('cardTeacherBarcodeSvg');
    const barcodeSvgHtml = barcodeSvgEl ? barcodeSvgEl.outerHTML : '';

    const isAr = this.lang === 'ar';
    const printWin = window.open('', '_blank');
    if (!printWin) {
      alert(isAr ? 'يرجى السماح بالنوافذ المنبثقة لطباعة البطاقة.' : 'Veuillez autoriser les fenêtres pop-up.');
      return;
    }

    const cardHtml = `
      <div class="print-cr80-card theme-teacher" style="border-top: 4px solid #ea580c;">
        <div class="card-header">
          <div class="brand">
            <div class="logo">🎓</div>
            <div>
              <div class="school-name">${this.escapeHtml(schoolName)}</div>
              <div class="school-tag">${isAr ? 'هيئة التدريس والتعليم المتميز' : 'CORPS ENSEIGNANT'}</div>
            </div>
          </div>
          <div class="badge-col">
            <span class="badge-tag" style="background: rgba(249, 115, 22, 0.2); color: #ea580c; border: 1px solid rgba(249, 115, 22, 0.4);">${isAr ? 'أستاذ' : 'ENSEIGNANT'}</span>
            <span class="year-tag">${this.escapeHtml(schoolYear)}</span>
          </div>
        </div>

        <div class="card-body">
          <div class="avatar-box">
            <div style="font-size: 38px; text-align: center; line-height: 80px;">👨‍🏫</div>
          </div>
          <div class="details-box">
            <div class="student-name">${this.escapeHtml(fullName)}</div>
            <div class="matricule-pill" style="color: #ea580c;">N° ${this.escapeHtml(matricule)}</div>
            <div class="info-line"><strong>${isAr ? 'المادة :' : 'Matière :'}</strong> ${this.escapeHtml(subject)}</div>
            <div class="info-line"><strong>${isAr ? 'الهاتف :' : 'Tél :'}</strong> ${this.escapeHtml(phone)}</div>
          </div>
        </div>

        <div class="barcode-box">
          ${barcodeSvgHtml}
        </div>
      </div>
    `;

    const html = `
      <!DOCTYPE html>
      <html lang="${this.lang}" dir="ltr">
      <head>
        <meta charset="UTF-8">
        <title>${isAr ? 'بطاقة الأستاذ' : 'Badge Enseignant'} — ${this.escapeHtml(fullName)}</title>
        <style>
          @page { size: A4 portrait; margin: 10mm; }
          * { box-sizing: border-box; }
          body { font-family: system-ui, -apple-system, sans-serif; margin: 0; padding: 20px; background: #f8fafc; color: #0f172a; }
          .single-card-wrap { position: relative; width: 85.6mm; height: 54mm; margin: 40px auto 10px; }
          .print-cr80-card {
            width: 85.6mm; height: 54mm; border-radius: 4.5mm; padding: 3.5mm 4.5mm;
            background: #ffffff; color: #0f172a; border: 1.2px solid #cbd5e1;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08); display: flex; flex-direction: column;
            justify-content: space-between; overflow: hidden;
          }
          .card-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1.5px solid #e2e8f0; padding-bottom: 2mm; margin-bottom: 2mm; }
          .brand { display: flex; align-items: center; gap: 2.5mm; }
          .logo { font-size: 18px; }
          .school-name { font-size: 11px; font-weight: 800; color: #1e293b; text-transform: uppercase; }
          .school-tag { font-size: 7px; font-weight: 700; color: #ea580c; letter-spacing: 0.5px; }
          .badge-col { display: flex; flex-direction: column; align-items: flex-end; gap: 1mm; }
          .badge-tag { font-size: 7.5px; font-weight: 800; padding: 1px 5px; border-radius: 3px; }
          .year-tag { font-size: 8px; font-weight: 700; color: #64748b; }
          .card-body { display: flex; gap: 3.5mm; align-items: center; flex: 1; }
          .avatar-box { width: 22mm; height: 26mm; border-radius: 3mm; border: 1.2px solid #cbd5e1; background: #f1f5f9; overflow: hidden; flex-shrink: 0; }
          .details-box { flex: 1; min-width: 0; }
          .student-name { font-size: 12px; font-weight: 800; color: #0f172a; margin-bottom: 1.5mm; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
          .matricule-pill { font-family: monospace; font-size: 10px; font-weight: 800; margin-bottom: 1.5mm; }
          .info-line { font-size: 8.5px; color: #475569; margin-bottom: 0.8mm; }
          .barcode-box { text-align: center; border-top: 1px dashed #cbd5e1; padding-top: 1.5mm; }
          .barcode-box svg { max-height: 12mm; width: 90%; }
        </style>
      </head>
      <body>
        <div class="single-card-wrap">
          ${cardHtml}
        </div>
        <div style="text-align: center; font-size: 11px; color: #64748b; margin-top: 12px;">${isAr ? 'علامات قص للتقطيع بالمقص • الحجم القياسي CR-80 (85.6 مم × 54 مم)' : 'Format Standard CR-80 (85.6mm × 54mm) • Badge Professionnel Enseignant'}</div>
      </body>
      </html>
    `;

    printWin.document.open();
    printWin.document.write(html);
    printWin.document.close();
    setTimeout(() => {
      printWin.focus();
      printWin.print();
    }, 500);
  }

  // -------------------------------------------------------------
  // PAYMENTS & RECEIPTS
  // -------------------------------------------------------------
  async loadPayments(monthFilter = null) {
    try {
      // 1. Load available months for filter dropdown
      await this.loadPaymentMonths();

      const activeMonth = monthFilter !== null ? monthFilter : (document.getElementById('paymentMonthFilter')?.value || 'all');
      const url = activeMonth && activeMonth !== 'all' ? `/api/payments?month=${encodeURIComponent(activeMonth)}&all=true` : '/api/payments?limit=250';
      const res = await fetch(url);
      const data = await res.json();
      if (!data.success) return;

      this.payments = data.payments || [];
      const searchInput = document.getElementById('searchPaymentInput');
      if (searchInput && searchInput.value.trim()) {
        this.filterPayments(searchInput.value);
      } else {
        this.renderPaymentsTable(this.payments);
      }
    } catch (err) {
      console.error('Failed to load payments:', err);
    }
  }

  async loadPaymentMonths() {
    try {
      const res = await fetch('/api/payments/months');
      const data = await res.json();
      if (!data.success) return;
      this.availablePaymentMonths = data.months || [];

      const filterSelect = document.getElementById('paymentMonthFilter');
      if (filterSelect) {
        const currentVal = filterSelect.value || 'all';
        const isAr = this.lang === 'ar';
        let html = `<option value="all">${isAr ? 'جميع الأشهر (الكل)' : 'Tous les mois (الكل)'}</option>`;
        this.availablePaymentMonths.forEach(m => {
          html += `<option value="${m.month_period}">${m.month_period} (${m.count} ${isAr ? 'عملية' : 'op.'})</option>`;
        });
        filterSelect.innerHTML = html;
        if ([...filterSelect.options].some(o => o.value === currentVal)) {
          filterSelect.value = currentVal;
        }
      }
    } catch (err) {
      console.error('Failed to load payment months:', err);
    }
  }

  onPaymentMonthFilterChange(month) {
    this.loadPayments(month);
  }

  filterPayments(query = '') {
    const list = this.payments || [];
    const term = (query || '').trim().toLowerCase();
    if (!term) {
      this.renderPaymentsTable(list);
      return;
    }

    const norm = (str) => (str || '').toLowerCase()
      .replace(/[أإآ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/ى/g, 'ي')
      .trim();

    const normTerm = norm(term);

    const filtered = list.filter(p => {
      const sName = norm(p.student_name);
      const mat = (p.matricule || '').toLowerCase();
      const rcpt = (p.receipt_no || '').toLowerCase();
      const grp = norm(p.group_name);
      const subj = norm(p.subject_name);
      const period = norm(p.month_period);

      return sName.includes(normTerm) || mat.includes(normTerm) || rcpt.includes(normTerm) || grp.includes(normTerm) || subj.includes(normTerm) || period.includes(normTerm);
    });

    this.renderPaymentsTable(filtered);
  }

  renderPaymentsTable(list) {
    const tbody = document.getElementById('paymentsTableBody');
    if (!tbody) return;

    // Update Summary Bar
    const countEl = document.getElementById('paymentsFilteredCount');
    const totalEl = document.getElementById('paymentsFilteredTotal');
    const badgeEl = document.getElementById('paymentsActiveFilterBadge');
    const totalPaid = (list || []).reduce((acc, p) => acc + Number(p.paid_amount || 0), 0);

    if (countEl) countEl.textContent = (list || []).length;
    if (totalEl) totalEl.textContent = Number(totalPaid).toLocaleString() + ' DA';

    const filterSelect = document.getElementById('paymentMonthFilter');
    if (badgeEl && filterSelect) {
      const isAr = this.lang === 'ar';
      if (filterSelect.value && filterSelect.value !== 'all') {
        badgeEl.innerHTML = `<span class="badge-pill" style="background: rgba(16, 185, 129, 0.15); color: #10b981;"><i class="fa-solid fa-filter"></i> ${filterSelect.value}</span>`;
      } else {
        badgeEl.innerHTML = `<span class="badge-pill" style="background: rgba(255, 255, 255, 0.08); color: var(--text-muted);">${isAr ? 'عرض الكل' : 'Historique complet'}</span>`;
      }
    }

    if (!list || list.length === 0) {
      const isAr = this.lang === 'ar';
      tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: var(--text-muted); padding: 35px;">
        <i class="fa-solid fa-receipt" style="font-size: 28px; margin-bottom: 8px; opacity: 0.4; display: block;"></i>
        ${isAr ? 'لم يتم العثور على أي دفعة مطابقة' : 'Aucun paiement trouvé'}
      </td></tr>`;
      return;
    }

    tbody.innerHTML = list.map(p => `
      <tr>
        <td><strong style="color: #60a5fa;">${p.receipt_no}</strong></td>
        <td><strong>${p.student_name}</strong> <span style="font-size: 11px; color: var(--text-muted); font-family: monospace;">(${p.matricule || ''})</span></td>
        <td><span class="badge-pill" style="background: rgba(59, 130, 246, 0.12); color: #60a5fa;">${p.subject_name || p.group_name}</span></td>
        <td><span class="badge-pill" style="background: rgba(16, 185, 129, 0.1); color: #10b981; font-weight: 600;">${p.month_period}</span></td>
        <td><strong style="color: #10b981;">${Number(p.paid_amount).toLocaleString()} DA</strong></td>
        <td><span style="text-transform: uppercase; font-size: 11px; font-weight: 700;">${p.payment_method}</span></td>
        <td style="color: var(--text-muted); font-size: 12px;">${p.payment_date ? p.payment_date.slice(0, 10) : ''}</td>
        <td>
          <button class="btn-primary" style="padding: 5px 12px; font-size: 12px;" onclick="app.showReceipt(${p.id})">
            <i class="fa-solid fa-print"></i> Reçu
          </button>
        </td>
      </tr>
    `).join('');
  }

  // -------------------------------------------------------------
  // EXPORT & DOWNLOAD PAYMENTS (SINGLE / MULTI-MONTH)
  // -------------------------------------------------------------
  async openExportPaymentsModal() {
    this.exportPaymentsMode = 'single';
    await this.loadPaymentMonths();

    // Populate Groups Filter
    const groupSelect = document.getElementById('exportGroupSelect');
    if (groupSelect) {
      const isAr = this.lang === 'ar';
      let html = `<option value="all">${isAr ? 'كل الأفواج الدراسية' : 'Tous les groupes'}</option>`;
      if (this.allGroupes && this.allGroupes.length > 0) {
        this.allGroupes.forEach(g => {
          html += `<option value="${g.id}">${g.name} (${g.subject_name || ''})</option>`;
        });
      }
      groupSelect.innerHTML = html;
      groupSelect.value = 'all';
    }

    const methodSelect = document.getElementById('exportMethodSelect');
    if (methodSelect) methodSelect.value = 'all';

    const months = this.availablePaymentMonths || [];
    const isAr = this.lang === 'ar';

    // Populate Single Month Select
    const singleSelect = document.getElementById('exportSingleMonthSelect');
    if (singleSelect) {
      singleSelect.innerHTML = months.map(m =>
        `<option value="${m.month_period}">${m.month_period} — (${m.count} ${isAr ? 'عملية' : 'op.'} - ${Number(m.total_amount || 0).toLocaleString()} DA)</option>`
      ).join('');
      // If table filter has a specific month, preselect it
      const currentTableMonth = document.getElementById('paymentMonthFilter')?.value;
      if (currentTableMonth && currentTableMonth !== 'all') {
        singleSelect.value = currentTableMonth;
      }
    }

    // Populate Multi-Months Checkboxes Grid
    const multiGrid = document.getElementById('exportMultiMonthsGrid');
    if (multiGrid) {
      multiGrid.innerHTML = months.map((m, idx) => `
        <label class="month-checkbox-label">
          <input type="checkbox" class="export-month-chk" value="${m.month_period}" ${idx < 2 ? 'checked' : ''} onchange="app.updateExportPaymentsPreview()">
          <div class="month-checkbox-info">
            <span class="month-checkbox-name">${m.month_period}</span>
            <span class="month-checkbox-count">${m.count} ${isAr ? 'عملية' : 'op.'} • ${Number(m.total_amount || 0).toLocaleString()} DA</span>
          </div>
        </label>
      `).join('');
    }

    // Populate Range Selects
    const rangeFrom = document.getElementById('exportRangeFromSelect');
    const rangeTo = document.getElementById('exportRangeToSelect');
    if (rangeFrom && rangeTo) {
      const sorted = [...months].sort((a, b) => a.month_period.localeCompare(b.month_period));
      const opts = sorted.map(m => `<option value="${m.month_period}">${m.month_period}</option>`).join('');
      rangeFrom.innerHTML = opts;
      rangeTo.innerHTML = opts;
      if (sorted.length > 0) {
        rangeFrom.value = sorted[0].month_period;
        rangeTo.value = sorted[sorted.length - 1].month_period;
      }
    }

    this.setExportMode('single');
    document.getElementById('modalExportPayments').classList.add('active');
  }

  setExportMode(mode) {
    this.exportPaymentsMode = mode;
    ['Single', 'Multi', 'Range', 'All'].forEach(m => {
      const pill = document.getElementById(`pillMode${m}`);
      const sec = document.getElementById(`exportSection${m}`);
      const active = m.toLowerCase() === mode.toLowerCase();
      if (pill) pill.classList.toggle('active', active);
      if (sec) sec.style.display = active ? 'block' : 'none';
    });
    this.updateExportPaymentsPreview();
  }

  toggleAllExportMonths(checked) {
    document.querySelectorAll('.export-month-chk').forEach(chk => {
      chk.checked = checked;
    });
    this.updateExportPaymentsPreview();
  }

  async updateExportPaymentsPreview() {
    try {
      const params = new URLSearchParams();
      params.append('all', 'true');

      const mode = this.exportPaymentsMode || 'single';
      if (mode === 'single') {
        const val = document.getElementById('exportSingleMonthSelect')?.value;
        if (val) params.append('month', val);
      } else if (mode === 'multi') {
        const checked = [...document.querySelectorAll('.export-month-chk:checked')].map(c => c.value);
        if (checked.length > 0) {
          params.append('months', checked.join(','));
        } else {
          this.cachedExportPayments = [];
          this.renderExportPreviewStats([]);
          return;
        }
      } else if (mode === 'range') {
        const from = document.getElementById('exportRangeFromSelect')?.value;
        const to = document.getElementById('exportRangeToSelect')?.value;
        if (from) params.append('from_month', from);
        if (to) params.append('to_month', to);
      } else if (mode === 'all') {
        // No month restriction
      }

      const grp = document.getElementById('exportGroupSelect')?.value;
      if (grp && grp !== 'all') params.append('group_id', grp);

      const mthd = document.getElementById('exportMethodSelect')?.value;
      if (mthd && mthd !== 'all') params.append('method', mthd);

      const res = await fetch(`/api/payments?${params.toString()}`);
      const data = await res.json();
      if (data.success) {
        this.cachedExportPayments = data.payments || [];
        this.renderExportPreviewStats(this.cachedExportPayments);
      }
    } catch (err) {
      console.error('Failed to update export preview:', err);
    }
  }

  renderExportPreviewStats(list) {
    const countEl = document.getElementById('exportPreviewCount');
    const studentsEl = document.getElementById('exportPreviewStudents');
    const totalEl = document.getElementById('exportPreviewTotal');

    const total = (list || []).reduce((sum, p) => sum + Number(p.paid_amount || 0), 0);
    const uniqueStudents = new Set((list || []).map(p => p.student_id)).size;

    if (countEl) countEl.textContent = (list || []).length;
    if (studentsEl) studentsEl.textContent = uniqueStudents;
    if (totalEl) totalEl.textContent = Number(total).toLocaleString() + ' DA';
  }

  async executeExportPayments(type = 'excel') {
    if (!this.cachedExportPayments || this.cachedExportPayments.length === 0) {
      await this.updateExportPaymentsPreview();
    }

    const list = this.cachedExportPayments || [];
    if (list.length === 0) {
      alert(this.lang === 'ar' ? 'لا توجد عمليات دفع لتصديرها وفق الاختيارات المحددة.' : 'Aucun paiement trouvé pour les critères sélectionnés.');
      return;
    }

    // Determine label for period
    let periodLabel = '';
    const mode = this.exportPaymentsMode || 'single';
    if (mode === 'single') {
      periodLabel = document.getElementById('exportSingleMonthSelect')?.value || 'mois';
    } else if (mode === 'multi') {
      const checked = [...document.querySelectorAll('.export-month-chk:checked')].map(c => c.value);
      periodLabel = checked.join('_');
    } else if (mode === 'range') {
      periodLabel = `${document.getElementById('exportRangeFromSelect')?.value || ''}_au_${document.getElementById('exportRangeToSelect')?.value || ''}`;
    } else {
      periodLabel = 'tous_les_mois';
    }

    if (type === 'excel') {
      this.exportPaymentsToExcel(list, periodLabel);
    } else if (type === 'print') {
      this.printPaymentsReport(list, periodLabel);
    }
  }

  exportPaymentsToExcel(list, periodLabel = 'export') {
    const isAr = this.lang === 'ar';
    const headers = isAr ? [
      'رقم الوصل', 'رقم القيد', 'اسم التلميذ', 'هاتف التلميذ', 'هاتف الولي',
      'الفوج الدراسي', 'المادة', 'الأستاذ', 'شهر الاشتراك', 'المبلغ الأصلي (دج)',
      'التخفيض (دج)', 'المبلغ المدفوع (دج)', 'المتبقي (دج)', 'طريقة الدفع', 'تاريخ العملية', 'ملاحظات'
    ] : [
      'N° Reçu', 'Matricule', 'Nom Élève', 'Tél Élève', 'Tél Parent',
      'Groupe', 'Matière', 'Enseignant', 'Période / Mois', 'Montant Base (DA)',
      'Remise (DA)', 'Montant Payé (DA)', 'Reste Dû (DA)', 'Mode de Paiement', 'Date Paiement', 'Notes'
    ];

    const rows = list.map(p => [
      `"${p.receipt_no || ''}"`,
      `"${p.matricule || ''}"`,
      `"${(p.student_name || '').replace(/"/g, '""')}"`,
      `"${p.student_phone || ''}"`,
      `"${p.parent_phone || ''}"`,
      `"${(p.group_name || '').replace(/"/g, '""')}"`,
      `"${(p.subject_name || '').replace(/"/g, '""')}"`,
      `"${(p.teacher_name || '').replace(/"/g, '""')}"`,
      `"${p.month_period || ''}"`,
      p.base_amount || 0,
      p.discount || 0,
      p.paid_amount || 0,
      p.remaining_amount || 0,
      `"${(p.payment_method || '').toUpperCase()}"`,
      `"${p.payment_date ? p.payment_date.slice(0, 19) : ''}"`,
      `"${(p.notes || '').replace(/"/g, '""')}"`
    ]);

    // Total Row
    const totalPaid = list.reduce((sum, p) => sum + Number(p.paid_amount || 0), 0);
    const totalRem = list.reduce((sum, p) => sum + Number(p.remaining_amount || 0), 0);
    const totalRow = [
      isAr ? '"المجموع الإجمالي"' : '"TOTAL GÉNÉRAL"',
      '""',
      `"${list.length} ${isAr ? 'عملية' : 'opérations'}"`,
      '""', '""', '""', '""', '""', '""', '""', '""',
      totalPaid,
      totalRem,
      '""', '""', '""'
    ];

    const csvContent = '\uFEFF' + [headers.join(';'), ...rows.map(r => r.join(';')), totalRow.join(';')].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const safePeriod = periodLabel.replace(/[^a-zA-Z0-9_\-]/g, '_');
    a.download = `paiements_edumind_${safePeriod}_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    this.playChime('success');
  }

  printPaymentsReport(list, periodLabel) {
    const isAr = this.lang === 'ar';
    const totalPaid = list.reduce((sum, p) => sum + Number(p.paid_amount || 0), 0);
    const uniqueStudents = new Set(list.map(p => p.student_id)).size;

    const printWin = window.open('', '_blank');
    if (!printWin) {
      alert(isAr ? 'يرجى السماح بالنوافذ المنبثقة (Popups) لطباعة التقرير.' : 'Veuillez autoriser les fenêtres contextuelles (Popups) pour imprimer le rapport.');
      return;
    }

    const title = isAr ? 'تقرير سجل المدفوعات والتحصيلات' : 'Rapport Historique des Paiements';
    const html = `
      <!DOCTYPE html>
      <html lang="${this.lang}" dir="${isAr ? 'rtl' : 'ltr'}">
      <head>
        <meta charset="UTF-8">
        <title>${title} — EDUMIND</title>
        <style>
          html, body { background-color: #ffffff !important; color: #1e293b !important; }
          body { font-family: system-ui, -apple-system, sans-serif; margin: 20px; color: #1e293b; font-size: 12px; background: #ffffff !important; }
          .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #0f766e; padding-bottom: 12px; margin-bottom: 15px; }
          .school-title { font-size: 20px; font-weight: 800; color: #0f766e; margin: 0; }
          .kpi-boxes { display: flex; gap: 15px; margin-bottom: 15px; }
          .kpi-box { flex: 1; padding: 10px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; text-align: center; }
          .kpi-val { font-size: 16px; font-weight: 700; color: #0f766e; }
          table { width: 100%; border-collapse: collapse; margin-top: 10px; background-color: #ffffff !important; }
          th, td { border: 1px solid #cbd5e1; padding: 6px 8px; text-align: ${isAr ? 'right' : 'left'}; color: #1e293b; }
          th { background-color: #f1f5f9; font-weight: 700; font-size: 11px; text-transform: uppercase; color: #334155; }
          tbody tr { background-color: #ffffff !important; }
          tbody tr:nth-child(even) { background-color: #f8fafc !important; }
          .amount { font-weight: 700; color: #047857; text-align: right; }
          .footer { margin-top: 30px; display: flex; justify-content: space-between; padding-top: 10px; }
          .signature-box { width: 220px; text-align: center; padding-top: 40px; border-top: 1px dashed #94a3b8; font-weight: 600; color: #475569; }
          @media print {
            body { margin: 10mm; font-size: 11px; }
            button { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <h1 class="school-title">EDUMIND ACADEMY</h1>
            <p style="margin: 3px 0; color: #64748b;">${isAr ? 'مؤسسة التعليم والدروس الخصوصية' : 'Système de Gestion Scolaire & Cours de Soutien'}</p>
            <p style="margin: 0; color: #94a3b8; font-size: 11px;">Tél: 0552225150 • Algérie</p>
          </div>
          <div style="text-align: ${isAr ? 'left' : 'right'};">
            <h2 style="margin: 0; font-size: 16px; color: #1e293b;">${title}</h2>
            <p style="margin: 3px 0; font-weight: 600; color: #0f766e;">${isAr ? 'الفترة' : 'Période'} : ${periodLabel}</p>
            <p style="margin: 0; color: #94a3b8; font-size: 11px;">${new Date().toLocaleDateString(this.lang === 'ar' ? 'ar-DZ' : 'fr-FR')} ${new Date().toLocaleTimeString()}</p>
          </div>
        </div>

        <div class="kpi-boxes">
          <div class="kpi-box">
            <div style="color: #64748b; font-size: 11px;">${isAr ? 'عدد العمليات' : 'Total Opérations'}</div>
            <div class="kpi-val">${list.length}</div>
          </div>
          <div class="kpi-box">
            <div style="color: #64748b; font-size: 11px;">${isAr ? 'التلاميذ المعنيون' : 'Élèves Uniques'}</div>
            <div class="kpi-val">${uniqueStudents}</div>
          </div>
          <div class="kpi-box">
            <div style="color: #64748b; font-size: 11px;">${isAr ? 'إجمالي المبالغ المحصلة' : 'Montant Total Collecté'}</div>
            <div class="kpi-val">${Number(totalPaid).toLocaleString()} DA</div>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>${isAr ? 'رقم الوصل' : 'N° Reçu'}</th>
              <th>${isAr ? 'التلميذ' : 'Élève'}</th>
              <th>${isAr ? 'الفوج / المادة' : 'Groupe / Matière'}</th>
              <th>${isAr ? 'الشهر' : 'Mois'}</th>
              <th>${isAr ? 'المبلغ المدفوع' : 'Montant Payé'}</th>
              <th>${isAr ? 'طريقة الدفع' : 'Mode'}</th>
              <th>${isAr ? 'التاريخ' : 'Date'}</th>
            </tr>
          </thead>
          <tbody>
            ${list.map(p => `
              <tr>
                <td><strong>${p.receipt_no}</strong></td>
                <td>${p.student_name} <small style="color: #64748b;">(${p.matricule || ''})</small></td>
                <td>${p.subject_name || p.group_name}</td>
                <td>${p.month_period}</td>
                <td class="amount">${Number(p.paid_amount).toLocaleString()} DA</td>
                <td style="text-transform: uppercase;">${p.payment_method}</td>
                <td>${p.payment_date ? p.payment_date.slice(0, 10) : ''}</td>
              </tr>
            `).join('')}
          </tbody>
          <tfoot>
            <tr style="background: #e2e8f0; font-weight: 700;">
              <td colspan="4" style="text-align: center;">${isAr ? 'المجموع الإجمالي' : 'TOTAL GÉNÉRAL'}</td>
              <td class="amount" style="font-size: 13px;">${Number(totalPaid).toLocaleString()} DA</td>
              <td colspan="2"></td>
            </tr>
          </tfoot>
        </table>

        <div class="footer">
          <div class="signature-box">${isAr ? 'توقيع أمين الصندوق' : 'Signature Caissier / Secrétaire'}</div>
          <div class="signature-box">${isAr ? 'ختم وتوقيع الإدارة' : 'Cachet & Signature Direction'}</div>
        </div>

        <script>
          window.onload = function() {
            setTimeout(function() { window.print(); }, 400);
          };
        </script>
      </body>
      </html>
    `;

    printWin.document.open();
    printWin.document.write(html);
    printWin.document.close();
  }

  async openModalPayment(preselectedStudentId = null, preselectedGroupId = null) {
    try {
      const res = await fetch('/api/students?status=all');
      const data = await res.json();
      if (data && data.success && Array.isArray(data.students)) {
        this.studentsForPayment = data.students;
      } else {
        await this.loadStudents();
        this.studentsForPayment = this.students || [];
      }
    } catch (e) {
      await this.loadStudents();
      this.studentsForPayment = this.students || [];
    }

    await this.loadGroups();

    const searchInput = document.getElementById('payStudentSearch');
    if (searchInput) {
      searchInput.value = '';
    }

    this.renderPaymentStudentOptions('', preselectedStudentId);

    const groupSelect = document.getElementById('payGroupSelect');
    groupSelect.innerHTML = '<option value="">-- Choisir un groupe --</option>' +
      this.groups.map(g => `<option value="${g.id}" ${preselectedGroupId && g.id == preselectedGroupId ? 'selected' : ''}>${g.name} (${g.price_monthly} DA)</option>`).join('');

    // Set default month
    const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    const now = new Date();
    document.getElementById('payMonthPeriod').value = `${months[now.getMonth()]} ${now.getFullYear()}`;
    document.getElementById('payDiscount').value = '0';
    document.getElementById('payAmount').value = '';

    if (preselectedGroupId) {
      this.onPaymentGroupChange();
    } else if (preselectedStudentId) {
      this.onPaymentStudentChange();
    }

    document.getElementById('modalPayment').classList.add('active');

    if (!preselectedStudentId && searchInput) {
      setTimeout(() => searchInput.focus(), 150);
    }
  }

  filterPaymentStudents(query = '') {
    this.renderPaymentStudentOptions(query);
  }

  renderPaymentStudentOptions(filter = '', selectedId = null) {
    const studentSelect = document.getElementById('payStudentSelect');
    if (!studentSelect) return;

    const list = this.studentsForPayment || this.students || [];
    const term = (filter || '').trim().toLowerCase();

    const norm = (str) => (str || '').toLowerCase()
      .replace(/[أإآ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/ى/g, 'ي')
      .trim();

    const normTerm = norm(term);

    const filtered = !term ? list : list.filter(s => {
      const fn = norm(s.first_name);
      const ln = norm(s.last_name);
      const full1 = `${fn} ${ln}`;
      const full2 = `${ln} ${fn}`;
      const mat = (s.matricule || '').toLowerCase();
      const phone = (s.phone || '').toLowerCase();

      return full1.includes(normTerm) || full2.includes(normTerm) || mat.includes(normTerm) || phone.includes(normTerm);
    });

    const isAr = this.lang === 'ar';
    let defaultLabel = isAr ? '-- اختر تلميذاً --' : '-- Choisir un élève --';
    if (term) {
      defaultLabel = filtered.length > 0
        ? (isAr ? `-- (${filtered.length}) تلميذ مطابق --` : `-- (${filtered.length}) élève(s) trouvé(s) --`)
        : (isAr ? '-- لا يوجد تلميذ بهذا الاسم --' : '-- Aucun élève trouvé --');
    }

    const currentVal = selectedId !== null && selectedId !== undefined ? String(selectedId) : studentSelect.value;

    studentSelect.innerHTML = `<option value="">${defaultLabel}</option>` +
      filtered.map(s => {
        const isSel = currentVal && String(s.id) === currentVal;
        return `<option value="${s.id}" ${isSel ? 'selected' : ''}>${s.first_name} ${s.last_name} (${s.matricule})</option>`;
      }).join('');

    // If exactly 1 student matched the search, auto-select it!
    if (term && filtered.length === 1) {
      studentSelect.value = String(filtered[0].id);
      this.onPaymentStudentChange();
    }
  }

  handlePaymentStudentSearchKey(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      const select = document.getElementById('payStudentSelect');
      if (select) {
        if (!select.value && select.options.length > 1) {
          select.selectedIndex = 1;
          this.onPaymentStudentChange();
        }
        const amountInput = document.getElementById('payAmount');
        if (amountInput) amountInput.focus();
      }
    }
  }

  onPaymentStudentChange() {
    const studentSelect = document.getElementById('payStudentSelect');
    const studentId = studentSelect ? studentSelect.value : null;
    if (!studentId) return;

    const student = (this.studentsForPayment || this.students || []).find(s => String(s.id) === String(studentId));
    if (student) {
      const searchInput = document.getElementById('payStudentSearch');
      if (searchInput && document.activeElement !== searchInput) {
        searchInput.value = `${student.first_name} ${student.last_name}`;
      }
    }

    // Trigger group price if already chosen
    if (document.getElementById('payGroupSelect').value) {
      this.onPaymentGroupChange();
    } else if (this.groups && this.groups.length > 0) {
      document.getElementById('payGroupSelect').value = this.groups[0].id;
      this.onPaymentGroupChange();
    }
  }

  onPaymentGroupChange() {
    const groupId = document.getElementById('payGroupSelect').value;
    const g = this.groups.find(item => item.id == groupId);
    if (g) {
      const discount = parseFloat(document.getElementById('payDiscount').value) || 0;
      document.getElementById('payAmount').value = Math.max(0, g.price_monthly - discount);
    }
  }

  async savePayment() {
    const submitBtn = document.querySelector('#paymentForm button[type="submit"]');
    if (submitBtn && submitBtn.disabled) return;

    const studentId = document.getElementById('payStudentSelect').value;
    const groupId = document.getElementById('payGroupSelect').value;
    const paidAmount = document.getElementById('payAmount').value;

    if (!studentId || !groupId || !paidAmount) {
      alert('Veuillez sélectionner un élève, un groupe et renseigner le montant.');
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.dataset.origHtml = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enregistrement...';
    }

    try {
      const payload = {
        student_id: studentId,
        group_id: groupId,
        month_period: document.getElementById('payMonthPeriod').value,
        paid_amount: paidAmount,
        discount: document.getElementById('payDiscount').value,
        payment_method: document.getElementById('payMethod').value
      };

      const res = await fetch('/api/payments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (data.success) {
        this.closeModals();
        this.loadPayments();
        this.loadDashboardData();
        this.loadCaisse();

        // Show and print official receipt directly!
        if (data.payment) {
          this.renderReceipt(data.payment);
        }
      } else {
        alert(data.error || 'Erreur lors de l’enregistrement du paiement');
      }
    } catch (err) {
      console.error(err);
      alert('Erreur réseau lors de l’enregistrement du paiement.');
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        if (submitBtn.dataset.origHtml) submitBtn.innerHTML = submitBtn.dataset.origHtml;
      }
    }
  }

  async showReceipt(paymentId) {
    try {
      const res = await fetch(`/api/payments/${paymentId}`);
      const data = await res.json();
      if (data.success && data.payment) {
        this.renderReceipt(data.payment);
      }
    } catch (err) {
      console.error('Failed to load receipt:', err);
    }
  }

  showPaymentReceipt(paymentId) {
    return this.showReceipt(paymentId);
  }

  renderReceipt(p) {
    const isAr = this.lang === 'ar';
    document.getElementById('rcptSchoolName').textContent = this.settings.school_name || 'EDUMIND ACADEMY';
    document.getElementById('rcptSchoolContact').textContent = `${this.settings.school_address || 'Alger, Algérie'} | Tél: ${this.settings.school_phone || '0550 00 00 00'}`;
    document.getElementById('rcptNumber').textContent = p.receipt_no;

    const pDate = p.payment_date ? new Date(p.payment_date) : new Date();
    document.getElementById('rcptDate').textContent = pDate.toLocaleString(isAr ? 'ar-DZ' : 'fr-FR');

    const lblStudent = document.getElementById('rcptStudentLabel');
    const lblMatricule = document.getElementById('rcptMatriculeLabel');
    if (lblStudent) lblStudent.textContent = isAr ? 'التلميذ:' : 'Élève:';
    if (lblMatricule) lblMatricule.textContent = isAr ? 'رقم القيد:' : 'Matricule:';

    document.getElementById('rcptStudent').textContent = `${p.first_name} ${p.last_name}`;
    document.getElementById('rcptMatricule').textContent = p.matricule;
    document.getElementById('rcptGroup').textContent = `${p.group_name} (${p.subject_name || ''})`;
    document.getElementById('rcptTeacher').textContent = p.teacher_name || 'Équipe pédagogique';
    document.getElementById('rcptMonth').textContent = p.month_period;
    document.getElementById('rcptMethod').textContent = p.payment_method;

    const singleTable = document.getElementById('rcptSingleTable');
    const multiTable = document.getElementById('rcptMultiTable');
    const familyTable = document.getElementById('rcptFamilyTable');
    const familyRemBox = document.getElementById('rcptFamilyRemainingBox');

    if (singleTable) singleTable.style.display = 'table';
    if (multiTable) multiTable.style.display = 'none';
    if (familyTable) familyTable.style.display = 'none';
    if (familyRemBox) familyRemBox.style.display = 'none';

    document.getElementById('rcptBasePrice').textContent = `${Number(p.base_amount).toLocaleString()} DA`;
    document.getElementById('rcptDiscount').textContent = `${Number(p.discount || 0).toLocaleString()} DA`;
    document.getElementById('rcptRemaining').textContent = `${Number(p.remaining_amount || 0).toLocaleString()} DA`;
    document.getElementById('rcptTotalPaid').textContent = `${Number(p.paid_amount).toLocaleString()} DA`;

    document.getElementById('modalReceipt').classList.add('active');
  }

  // ===========================================================================
  // FAST CASHIER & MULTI-PAYMENT (ENCAISSEMENT RAPIDE & MULTI-COURS)
  // ===========================================================================

  setFastPayMode(mode = 'student') {
    this._fastPayMode = mode;
    const isParent = mode === 'parent';

    const btnStudent = document.getElementById('btnModeFastPayStudent');
    const btnParent = document.getElementById('btnModeFastPayParent');
    const studentWrapper = document.getElementById('fastPayStudentSearchWrapper');
    const parentWrapper = document.getElementById('fastPayParentSearchWrapper');
    const studentActive = document.getElementById('fastPayActiveContainer');
    const parentActive = document.getElementById('fastPayParentActiveContainer');
    const studentEmpty = document.getElementById('fastPayEmptyPlaceholder');
    const parentEmpty = document.getElementById('fastPayParentEmptyPlaceholder');
    const headerIcon = document.getElementById('fastPayHeaderIcon');

    if (btnStudent && btnParent) {
      if (isParent) {
        btnStudent.style.background = 'transparent';
        btnStudent.style.color = 'var(--text-muted)';
        btnParent.style.background = 'linear-gradient(135deg, #7c3aed, #a855f7)';
        btnParent.style.color = 'white';
        btnParent.style.boxShadow = '0 2px 10px rgba(168, 85, 247, 0.4)';
        if (headerIcon) {
          headerIcon.style.background = 'rgba(168, 85, 247, 0.2)';
          headerIcon.style.color = '#c084fc';
          headerIcon.innerHTML = '<i class="fa-solid fa-people-roof"></i>';
        }
      } else {
        btnParent.style.background = 'transparent';
        btnParent.style.color = 'var(--text-muted)';
        btnParent.style.boxShadow = 'none';
        btnStudent.style.background = '#10b981';
        btnStudent.style.color = 'white';
        if (headerIcon) {
          headerIcon.style.background = 'rgba(16, 185, 129, 0.18)';
          headerIcon.style.color = '#10b981';
          headerIcon.innerHTML = '<i class="fa-solid fa-cash-register"></i>';
        }
      }
    }

    if (studentWrapper) studentWrapper.style.display = isParent ? 'none' : 'block';
    if (parentWrapper) parentWrapper.style.display = isParent ? 'block' : 'none';

    if (isParent) {
      if (studentActive) studentActive.style.display = 'none';
      if (studentEmpty) studentEmpty.style.display = 'none';
      if (this._fastPayParentData) {
        if (parentActive) parentActive.style.display = 'block';
        if (parentEmpty) parentEmpty.style.display = 'none';
      } else {
        if (parentActive) parentActive.style.display = 'none';
        if (parentEmpty) parentEmpty.style.display = 'block';
        setTimeout(() => document.getElementById('fastPayParentSearch')?.focus(), 50);
      }
    } else {
      if (parentActive) parentActive.style.display = 'none';
      if (parentEmpty) parentEmpty.style.display = 'none';
      if (this._fastPayData) {
        if (studentActive) studentActive.style.display = 'block';
        if (studentEmpty) studentEmpty.style.display = 'none';
      } else {
        if (studentActive) studentActive.style.display = 'none';
        if (studentEmpty) studentEmpty.style.display = 'block';
        setTimeout(() => document.getElementById('fastPayStudentSearch')?.focus(), 50);
      }
    }
  }

  jumpToParentPay(parentId) {
    this.setFastPayMode('parent');
    if (parentId) {
      this.selectFastPayParent(parentId);
    }
  }

  onFastPayStudentSearch(query) {
    const listContainer = document.getElementById('fastPaySearchResults');
    const clearBtn = document.getElementById('btnFastPayClearSearch');
    if (!listContainer) return;

    const term = (query || '').trim().toLowerCase();
    if (!term) {
      listContainer.style.display = 'none';
      if (clearBtn) clearBtn.style.display = 'none';
      return;
    }

    if (clearBtn) clearBtn.style.display = 'block';

    const norm = (str) => (str || '').toLowerCase()
      .replace(/[أإآ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/ى/g, 'ي')
      .trim();

    const normTerm = norm(term);
    const students = (this.students || []).filter(s => s.active !== 0);

    const filtered = students.filter(s => {
      const fn = norm(s.first_name);
      const ln = norm(s.last_name);
      const mat = (s.matricule || '').toLowerCase();
      const phone = (s.phone || '').toLowerCase();
      const pphone = (s.parent_phone || '').toLowerCase();
      const pname = norm(s.parent_name);
      return `${fn} ${ln}`.includes(normTerm) ||
             `${ln} ${fn}`.includes(normTerm) ||
             mat.includes(normTerm) ||
             phone.includes(normTerm) ||
             pphone.includes(normTerm) ||
             pname.includes(normTerm);
    }).slice(0, 15);

    const isAr = this.lang === 'ar';

    if (filtered.length === 0) {
      listContainer.innerHTML = `
        <div style="padding: 14px 16px; text-align: center; color: var(--text-muted); font-size: 12.5px;">
          <i class="fa-solid fa-user-slash" style="margin-right: 6px;"></i> ${isAr ? 'لم يتم العثور على أي تلميذ يطابق البحث' : 'Aucun élève trouvé'}
        </div>
      `;
      listContainer.style.display = 'block';
      return;
    }

    listContainer.innerHTML = filtered.map(s => {
      const initials = `${(s.first_name || '')[0] || ''}${(s.last_name || '')[0] || ''}`.toUpperCase() || 'E';
      const lvl = s.level_name || (this.levels && this.levels.find(l => l.id === s.level_id)?.name) || '';
      const avatarHtml = s.photo_url
        ? `<img src="${s.photo_url}" style="width:28px; height:28px; border-radius:50%; object-fit:cover; flex-shrink:0;">`
        : `<div style="width:28px; height:28px; border-radius:50%; background:linear-gradient(135deg, #10b981, #059669); color:white; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:11px; flex-shrink:0;">${initials}</div>`;

      return `
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 14px; border-bottom: 1px solid var(--border-color); cursor: pointer; transition: background 0.15s;"
             onmouseover="this.style.background='rgba(16, 185, 129, 0.1)'" onmouseout="this.style.background=''"
             onclick="app.selectFastPayStudent(${s.id})">
          <div style="display: flex; align-items: center; gap: 10px; min-width: 0;">
            ${avatarHtml}
            <div style="min-width: 0;">
              <strong style="color: var(--text-heading); font-size: 13px; display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                ${this.escapeHtml(s.first_name)} ${this.escapeHtml(s.last_name)}
              </strong>
              <div style="font-size: 11px; color: var(--text-muted); display: flex; align-items: center; gap: 8px;">
                <span>${this.escapeHtml(lvl)}</span>
                ${s.parent_name ? `<span style="color: #a78bfa;"><i class="fa-solid fa-people-roof"></i> ${this.escapeHtml(s.parent_name)}${s.parent_discount_percent > 0 ? ` (${s.parent_discount_percent}%)` : ''}</span>` : ''}
              </div>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 6px;">
            <code style="font-size: 11px; background: rgba(0,0,0,0.25); padding: 2px 6px; border-radius: 4px; color: #10b981;">
              ${this.escapeHtml(s.matricule || '')}
            </code>
            ${s.parent_id ? `
              <button type="button" class="btn-secondary" style="font-size: 10.5px; padding: 2px 7px; color: #c084fc; border-color: rgba(168, 85, 247, 0.4); border-radius: 4px; display: inline-flex; align-items: center; gap: 4px;"
                      onclick="event.stopPropagation(); app.jumpToParentPay(${s.parent_id})" title="${isAr ? 'الدفع لجميع الإخوة معاً' : 'Payer pour la famille'}">
                <i class="fa-solid fa-people-roof"></i> ${isAr ? 'عائلي' : 'Famille'}
              </button>
            ` : ''}
          </div>
        </div>
      `;
    }).join('');

    listContainer.style.display = 'block';
  }

  async selectFastPayStudent(studentId) {
    const listContainer = document.getElementById('fastPaySearchResults');
    if (listContainer) listContainer.style.display = 'none';

    const isAr = this.lang === 'ar';

    try {
      const res = await fetch(`/api/students/${studentId}/due-summary`);
      const data = await res.json();

      if (!data.success) {
        this.showToast(data.error || 'Erreur chargement élève', 'error');
        return;
      }

      this._fastPayData = data;

      const searchInput = document.getElementById('fastPayStudentSearch');
      if (searchInput) {
        searchInput.value = `${data.student.first_name} ${data.student.last_name} (${data.student.matricule})`;
      }
      const clearBtn = document.getElementById('btnFastPayClearSearch');
      if (clearBtn) clearBtn.style.display = 'block';

      this.renderFastPayStudentPanel();
    } catch (err) {
      console.error('Erreur selectFastPayStudent:', err);
      this.showToast(isAr ? 'خطأ في الاتصال بالخادم' : 'Erreur de connexion', 'error');
    }
  }

  clearFastPayStudent() {
    this._fastPayData = null;
    const searchInput = document.getElementById('fastPayStudentSearch');
    if (searchInput) searchInput.value = '';
    const clearBtn = document.getElementById('btnFastPayClearSearch');
    if (clearBtn) clearBtn.style.display = 'none';
    const listContainer = document.getElementById('fastPaySearchResults');
    if (listContainer) listContainer.style.display = 'none';

    const activeContainer = document.getElementById('fastPayActiveContainer');
    if (activeContainer) activeContainer.style.display = 'none';
    const emptyPlaceholder = document.getElementById('fastPayEmptyPlaceholder');
    if (emptyPlaceholder) emptyPlaceholder.style.display = 'block';
  }

  getFastPayMonthsList() {
    return [
      'Septembre 2026',
      'Octobre 2026',
      'Novembre 2026',
      'Décembre 2026',
      'Janvier 2027',
      'Février 2027',
      'Mars 2027',
      'Avril 2027',
      'Mai 2027',
      'Juin 2027'
    ];
  }

  renderFastPayStudentPanel() {
    const activeContainer = document.getElementById('fastPayActiveContainer');
    const emptyPlaceholder = document.getElementById('fastPayEmptyPlaceholder');
    if (!activeContainer || !this._fastPayData) return;

    if (emptyPlaceholder) emptyPlaceholder.style.display = 'none';
    activeContainer.style.display = 'block';

    const { student, enrollments, payments } = this._fastPayData;
    const isAr = this.lang === 'ar';
    const initials = `${(student.first_name || '')[0] || ''}${(student.last_name || '')[0] || ''}`.toUpperCase() || 'E';

    const avatarHtml = student.photo_url
      ? `<img src="${student.photo_url}" style="width:42px; height:42px; border-radius:50%; object-fit:cover; border:2px solid #10b981;">`
      : `<div style="width:42px; height:42px; border-radius:50%; background:linear-gradient(135deg, #10b981, #059669); color:white; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:15px; border:2px solid #10b981;">${initials}</div>`;

    const months = this.getFastPayMonthsList();
    const defaultMonth = months[0];

    // If no enrollments
    let coursesHtml = '';
    if (!enrollments || enrollments.length === 0) {
      coursesHtml = `
        <div style="padding: 24px; text-align: center; color: var(--text-muted); background: rgba(0,0,0,0.15); border-radius: 8px;">
          <i class="fa-solid fa-graduation-cap" style="font-size: 24px; opacity: 0.6; margin-bottom: 6px; display: block;"></i>
          <span>${isAr ? 'هذا التلميذ غير مسجل في أي فوج نشط حالياً.' : 'Cet élève n’est inscrit dans aucun groupe actif.'}</span>
          <div style="margin-top: 10px;">
            <button class="btn-secondary" style="font-size: 12px; padding: 6px 14px;" onclick="app.switchView('inscriptions')">
              <i class="fa-solid fa-plus"></i> ${isAr ? 'تسجيل التلميذ في فوج' : 'Inscrire à un cours'}
            </button>
          </div>
        </div>
      `;
    } else {
      const rowsHtml = enrollments.map((g, idx) => {
        const basePrice = parseFloat(g.price_monthly) || 0;
        let defaultDiscount = parseFloat(g.discount_amount) || 0;
        // Apply parent family discount percentage automatically if no custom course discount
        if (defaultDiscount === 0 && student.parent_discount_percent > 0) {
          defaultDiscount = Math.round(basePrice * (student.parent_discount_percent / 100));
        }
        const netDue = Math.max(0, basePrice - defaultDiscount);

        // Check if already paid for defaultMonth
        const paidRecord = payments.find(p => String(p.group_id) === String(g.group_id) && p.month_period === defaultMonth);
        let isFullyPaid = false;
        let isPartiallyPaid = false;
        let remainingDue = netDue;
        let defaultToPay = netDue;

        if (paidRecord) {
          const r = parseFloat(paidRecord.remaining_amount) || 0;
          if (r <= 0) {
            isFullyPaid = true;
            defaultToPay = 0;
            remainingDue = 0;
          } else {
            isPartiallyPaid = true;
            remainingDue = r;
            defaultToPay = r;
          }
        }

        const isChecked = !isFullyPaid;

        const statusTag = isFullyPaid
          ? `<span class="badge-pill" style="background: rgba(16, 185, 129, 0.15); color: #10b981; font-weight:700;"><i class="fa-solid fa-circle-check"></i> ${isAr ? 'خالص' : 'Réglé'}</span>`
          : (isPartiallyPaid
            ? `<span class="badge-pill" style="background: rgba(245, 158, 11, 0.15); color: #f59e0b; font-weight:700;"><i class="fa-solid fa-circle-exclamation"></i> ${isAr ? `باقي ${remainingDue} دج` : `Reste ${remainingDue} DA`}</span>`
            : `<span class="badge-pill" style="background: rgba(239, 68, 68, 0.15); color: #ef4444; font-weight:700;"><i class="fa-solid fa-clock"></i> ${isAr ? 'غير مسدد' : 'Non réglé'}</span>`);

        const monthOptions = months.map(m => `<option value="${m}" ${m === defaultMonth ? 'selected' : ''}>${m}</option>`).join('');

        return `
          <tr id="fastPayRow_${g.group_id}" style="transition: background 0.15s; background: ${isChecked ? 'rgba(16, 185, 129, 0.05)' : ''};">
            <td style="text-align: center; width: 40px;">
              <input type="checkbox" class="fastpay-row-chk" data-group-id="${g.group_id}"
                     ${isChecked ? 'checked' : ''} onchange="app.onFastPayRowCheckChange(${g.group_id})">
            </td>
            <td>
              <div style="font-weight: 700; color: var(--text-heading); font-size: 13.5px;">${this.escapeHtml(g.group_name)}</div>
              <div style="font-size: 11.5px; color: var(--text-muted); display: flex; align-items: center; gap: 6px; margin-top: 2px;">
                <span style="color: ${g.subject_color || '#3b82f6'}; font-weight: 600;">${this.escapeHtml(g.subject_name || '')}</span>
                <span>&bull;</span>
                <span>${this.escapeHtml(g.teacher_name || '')}</span>
              </div>
            </td>
            <td style="width: 150px;">
              <select class="form-control fastpay-month-select" data-group-id="${g.group_id}"
                      style="padding: 5px 8px; font-size: 12px; height: 32px;"
                      onchange="app.onFastPayRowMonthChange(${g.group_id})">
                ${monthOptions}
              </select>
            </td>
            <td style="text-align: center; width: 110px;" id="fastPayStatus_${g.group_id}">
              ${statusTag}
            </td>
            <td style="text-align: right; width: 90px; font-weight: 600;" id="fastPayBase_${g.group_id}" data-base="${basePrice}">
              ${basePrice.toLocaleString('fr-FR')} DA
            </td>
            <td style="width: 100px;">
              <input type="number" class="form-control fastpay-discount-input" data-group-id="${g.group_id}"
                     style="padding: 5px 8px; font-size: 12px; height: 32px; text-align: right;"
                     value="${defaultDiscount}" min="0" oninput="app.onFastPayDiscountInput(${g.group_id})">
            </td>
            <td style="text-align: right; width: 95px; font-weight: 700; color: #38bdf8;" id="fastPayNet_${g.group_id}">
              ${netDue.toLocaleString('fr-FR')} DA
            </td>
            <td style="width: 120px;">
              <input type="number" class="form-control fastpay-paid-input" data-group-id="${g.group_id}"
                     style="padding: 5px 8px; font-size: 13px; height: 32px; text-align: right; font-weight: 700; color: #10b981; border: 1px solid rgba(16, 185, 129, 0.4);"
                     value="${defaultToPay}" min="0" oninput="app.updateFastPayCalculations()">
            </td>
          </tr>
        `;
      }).join('');

      coursesHtml = `
        <div class="table-responsive" style="max-height: 320px; overflow-y: auto; margin-bottom: 14px; border: 1px solid var(--border-color); border-radius: 8px;">
          <table class="edumind-table" style="margin: 0; font-size: 12.5px;">
            <thead>
              <tr style="background: rgba(0,0,0,0.25);">
                <th style="width: 40px; text-align: center;">
                  <input type="checkbox" id="chkFastPaySelectAll" checked onchange="app.toggleAllFastPayCourses(this.checked)" title="${isAr ? 'تحديد الكل' : 'Tout sélectionner'}">
                </th>
                <th>${isAr ? 'الفوج والمادة والأستاذ' : 'GROUPE / MATIÈRE / ENSEIGNANT'}</th>
                <th>${isAr ? 'الشهر المعني' : 'MOIS CONCERNÉ'}</th>
                <th style="text-align: center;">${isAr ? 'حالة السداد' : 'STATUT'}</th>
                <th style="text-align: right;">${isAr ? 'السعر' : 'TARIF'}</th>
                <th style="text-align: right;">${isAr ? 'تخفيض (DA)' : 'REMISE'}</th>
                <th style="text-align: right;">${isAr ? 'الصافي' : 'NET'}</th>
                <th style="text-align: right;">${isAr ? 'المبلغ المدفوع (DA)' : 'MONTANT PAYÉ'}</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml}
            </tbody>
          </table>
        </div>
      `;
    }

    activeContainer.innerHTML = `
      <!-- Student Profile Hero Header -->
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; background: rgba(0, 0, 0, 0.2); border-radius: 8px; margin-bottom: 12px; border: 1px solid var(--border-color); flex-wrap: wrap; gap: 10px;">
        <div style="display: flex; align-items: center; gap: 12px;">
          ${avatarHtml}
          <div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <strong style="color: var(--text-heading); font-size: 15px;">${this.escapeHtml(student.first_name)} ${this.escapeHtml(student.last_name)}</strong>
              <code style="font-size: 11.5px; background: rgba(16, 185, 129, 0.15); color: #10b981; padding: 2px 7px; border-radius: 4px; font-weight: 700;">${this.escapeHtml(student.matricule || '')}</code>
            </div>
            <div style="font-size: 12px; color: var(--text-muted); margin-top: 2px; display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
              <span><i class="fa-solid fa-layer-group" style="font-size: 10px; margin-right: 4px;"></i>${this.escapeHtml(student.level_name || '')}</span>
              ${student.phone ? `<span><i class="fa-solid fa-phone" style="font-size: 10px; margin-right: 4px;"></i>${this.escapeHtml(student.phone)}</span>` : ''}
              ${student.parent_name ? `<span class="badge" style="background: rgba(139, 92, 246, 0.15); color: #a78bfa; font-size: 11px; padding: 2px 7px; border-radius: 4px;"><i class="fa-solid fa-people-roof"></i> ${isAr ? 'الولي' : 'Parent'}: ${this.escapeHtml(student.parent_name)}${student.parent_discount_percent > 0 ? ` (-${student.parent_discount_percent}%)` : ''}</span>` : ''}
              <span><i class="fa-solid fa-graduation-cap" style="font-size: 10px; margin-right: 4px;"></i>${enrollments.length} ${isAr ? 'أفواج مسجل بها' : 'cours inscrit(s)'}</span>
            </div>
          </div>
        </div>
        <button type="button" class="btn-secondary" style="font-size: 12px; padding: 5px 12px;" onclick="app.clearFastPayStudent()">
          <i class="fa-solid fa-user-xmark"></i> ${isAr ? 'تغيير التلميذ' : 'Changer d\'élève'}
        </button>
      </div>

      <!-- Courses List with Checkboxes -->
      ${coursesHtml}

      <!-- Bottom Checkout Bar -->
      <div style="background: rgba(0, 0, 0, 0.35); border-radius: 10px; padding: 12px 18px; border: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        
        <!-- Left: Payment Options (Method, Date, Notes) -->
        <div style="display: flex; gap: 14px; align-items: center; flex-wrap: wrap;">
          <div>
            <label style="font-size: 11.5px; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 3px;">
              ${isAr ? 'طريقة الدفع' : 'Mode de paiement'}
            </label>
            <select id="fastPayMethod" class="form-control" style="width: 140px; padding: 6px 10px; font-size: 12.5px; height: 34px;">
              <option value="espece">${isAr ? 'نقداً (Espèces)' : 'Espèces (Caisse)'}</option>
              <option value="baridimob">BaridiMob / CCP</option>
              <option value="cheque">${isAr ? 'شيك (Chèque)' : 'Chèque bancaire'}</option>
            </select>
          </div>
          <div>
            <label style="font-size: 11.5px; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 3px;">
              ${isAr ? 'تاريخ الدفع' : 'Date de paiement'}
            </label>
            <input type="date" id="fastPayDate" class="form-control" style="width: 140px; padding: 6px 10px; font-size: 12.5px; height: 34px;" value="${new Date().toISOString().split('T')[0]}">
          </div>
          <div>
            <label style="font-size: 11.5px; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 3px;">
              ${isAr ? 'ملاحظات (اختياري)' : 'Notes / Remarques'}
            </label>
            <input type="text" id="fastPayNotes" class="form-control" placeholder="${isAr ? 'ملاحظة على الوصل...' : 'Ex: Paiement anticipé...'}" style="width: 180px; padding: 6px 10px; font-size: 12px; height: 34px;">
          </div>
        </div>

        <!-- Right: Calculations & Submit Button -->
        <div style="display: flex; align-items: center; gap: 20px; flex-wrap: wrap;">
          <div style="text-align: right;">
            <div style="font-size: 11px; color: var(--text-muted);">${isAr ? 'الأفواج المحددة' : 'Cours sélectionnés'} : <strong id="fastPaySummaryCount" style="color: var(--text-heading); font-size: 13px;">0</strong></div>
            <div style="font-size: 11px; color: var(--text-muted);">${isAr ? 'المستحق الصافي' : 'Total Net dû'} : <strong id="fastPaySummaryDue" style="color: #38bdf8; font-size: 13px;">0 DA</strong></div>
          </div>
          <div style="text-align: right; background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 8px; padding: 6px 14px;">
            <span style="font-size: 11px; color: var(--text-muted); display: block;">${isAr ? 'المبلغ الإجمالي المقبوض' : 'Total à Encaisser'}</span>
            <strong id="fastPaySummaryPaid" style="font-size: 18px; color: #10b981; font-weight: 800;">0 DA</strong>
          </div>
          <button type="button" class="btn-primary" id="btnSubmitFastPay" onclick="app.submitFastMultiPayment()"
                  style="background: linear-gradient(135deg, #10b981, #059669); font-weight: 700; padding: 10px 22px; box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35); display: inline-flex; align-items: center; gap: 8px; cursor: pointer;">
            <i class="fa-solid fa-receipt"></i>
            <span data-i18n="fast_pay_btn_submit">${isAr ? 'تأكيد الدفع وطباعة الوصل' : 'Encaisser & Imprimer le Reçu'}</span>
          </button>
        </div>

      </div>
    `;

    this.updateFastPayCalculations();
  }

  onFastPayRowCheckChange(groupId) {
    const row = document.getElementById(`fastPayRow_${groupId}`);
    const chk = document.querySelector(`.fastpay-row-chk[data-group-id="${groupId}"]`);
    if (row && chk) {
      row.style.background = chk.checked ? 'rgba(16, 185, 129, 0.05)' : '';
    }
    this.updateFastPayCalculations();
  }

  toggleAllFastPayCourses(checked) {
    document.querySelectorAll('.fastpay-row-chk').forEach(chk => {
      chk.checked = checked;
      const gid = chk.dataset.groupId;
      const row = document.getElementById(`fastPayRow_${gid}`);
      if (row) row.style.background = checked ? 'rgba(16, 185, 129, 0.05)' : '';
    });
    this.updateFastPayCalculations();
  }

  onFastPayDiscountInput(groupId) {
    const baseEl = document.getElementById(`fastPayBase_${groupId}`);
    const discInput = document.querySelector(`.fastpay-discount-input[data-group-id="${groupId}"]`);
    const netEl = document.getElementById(`fastPayNet_${groupId}`);
    const paidInput = document.querySelector(`.fastpay-paid-input[data-group-id="${groupId}"]`);

    const base = parseFloat(baseEl?.dataset.base) || 0;
    const disc = parseFloat(discInput?.value) || 0;
    const net = Math.max(0, base - disc);

    if (netEl) netEl.textContent = `${net.toLocaleString('fr-FR')} DA`;
    if (paidInput) paidInput.value = net;

    this.updateFastPayCalculations();
  }

  onFastPayRowMonthChange(groupId) {
    if (!this._fastPayData) return;
    const select = document.querySelector(`.fastpay-month-select[data-group-id="${groupId}"]`);
    const statusContainer = document.getElementById(`fastPayStatus_${groupId}`);
    const paidInput = document.querySelector(`.fastpay-paid-input[data-group-id="${groupId}"]`);
    const baseEl = document.getElementById(`fastPayBase_${groupId}`);
    const discInput = document.querySelector(`.fastpay-discount-input[data-group-id="${groupId}"]`);
    const chk = document.querySelector(`.fastpay-row-chk[data-group-id="${groupId}"]`);

    const selMonth = select ? select.value : '';
    const payments = this._fastPayData.payments || [];
    const base = parseFloat(baseEl?.dataset.base) || 0;
    const disc = parseFloat(discInput?.value) || 0;
    const net = Math.max(0, base - disc);

    const paidRecord = payments.find(p => String(p.group_id) === String(groupId) && p.month_period === selMonth);
    const isAr = this.lang === 'ar';

    let isFullyPaid = false;
    let isPartiallyPaid = false;
    let rem = net;

    if (paidRecord) {
      const r = parseFloat(paidRecord.remaining_amount) || 0;
      if (r <= 0) {
        isFullyPaid = true;
        rem = 0;
      } else {
        isPartiallyPaid = true;
        rem = r;
      }
    }

    if (statusContainer) {
      statusContainer.innerHTML = isFullyPaid
        ? `<span class="badge-pill" style="background: rgba(16, 185, 129, 0.15); color: #10b981; font-weight:700;"><i class="fa-solid fa-circle-check"></i> ${isAr ? 'خالص' : 'Réglé'}</span>`
        : (isPartiallyPaid
          ? `<span class="badge-pill" style="background: rgba(245, 158, 11, 0.15); color: #f59e0b; font-weight:700;"><i class="fa-solid fa-circle-exclamation"></i> ${isAr ? `باقي ${rem} دج` : `Reste ${rem} DA`}</span>`
          : `<span class="badge-pill" style="background: rgba(239, 68, 68, 0.15); color: #ef4444; font-weight:700;"><i class="fa-solid fa-clock"></i> ${isAr ? 'غير مسدد' : 'Non réglé'}</span>`);
    }

    if (paidInput) {
      paidInput.value = rem;
    }
    if (chk) {
      chk.checked = !isFullyPaid;
      this.onFastPayRowCheckChange(groupId);
    } else {
      this.updateFastPayCalculations();
    }
  }

  updateFastPayCalculations() {
    let count = 0;
    let totalNet = 0;
    let totalPaid = 0;

    document.querySelectorAll('.fastpay-row-chk:checked').forEach(chk => {
      count++;
      const gid = chk.dataset.groupId;
      const baseEl = document.getElementById(`fastPayBase_${gid}`);
      const discInput = document.querySelector(`.fastpay-discount-input[data-group-id="${gid}"]`);
      const paidInput = document.querySelector(`.fastpay-paid-input[data-group-id="${gid}"]`);

      const base = parseFloat(baseEl?.dataset.base) || 0;
      const disc = parseFloat(discInput?.value) || 0;
      const paid = parseFloat(paidInput?.value) || 0;
      const net = Math.max(0, base - disc);

      totalNet += net;
      totalPaid += paid;
    });

    const elCount = document.getElementById('fastPaySummaryCount');
    if (elCount) elCount.textContent = count;

    const elDue = document.getElementById('fastPaySummaryDue');
    if (elDue) elDue.textContent = `${totalNet.toLocaleString('fr-FR')} DA`;

    const elPaid = document.getElementById('fastPaySummaryPaid');
    if (elPaid) elPaid.textContent = `${totalPaid.toLocaleString('fr-FR')} DA`;

    const btnSubmit = document.getElementById('btnSubmitFastPay');
    if (btnSubmit) {
      btnSubmit.disabled = count === 0 || totalPaid <= 0;
      btnSubmit.style.opacity = (count === 0 || totalPaid <= 0) ? '0.5' : '1';
      btnSubmit.style.cursor = (count === 0 || totalPaid <= 0) ? 'not-allowed' : 'pointer';
    }
  }

  async submitFastMultiPayment() {
    const isAr = this.lang === 'ar';
    if (!this._fastPayData) return;

    const items = [];
    document.querySelectorAll('.fastpay-row-chk:checked').forEach(chk => {
      const gid = chk.dataset.groupId;
      const baseEl = document.getElementById(`fastPayBase_${gid}`);
      const discInput = document.querySelector(`.fastpay-discount-input[data-group-id="${gid}"]`);
      const paidInput = document.querySelector(`.fastpay-paid-input[data-group-id="${gid}"]`);
      const monthSelect = document.querySelector(`.fastpay-month-select[data-group-id="${gid}"]`);

      const base = parseFloat(baseEl?.dataset.base) || 0;
      const disc = parseFloat(discInput?.value) || 0;
      const paid = parseFloat(paidInput?.value) || 0;
      const month = monthSelect ? monthSelect.value : 'Septembre 2026';

      if (paid > 0 || (base - disc) > 0) {
        items.push({
          group_id: parseInt(gid, 10),
          month_period: month,
          base_amount: base,
          discount: disc,
          paid_amount: paid
        });
      }
    });

    if (items.length === 0) {
      this.showToast(isAr ? 'يرجى تحديد فوج واحد على الأقل مع مبلغ صالح للدفع' : 'Veuillez sélectionner au moins un cours avec un montant valide.', 'warning');
      return;
    }

    const payment_method = document.getElementById('fastPayMethod')?.value || 'espece';
    const payment_date = document.getElementById('fastPayDate')?.value || new Date().toISOString().split('T')[0];
    const notes = (document.getElementById('fastPayNotes')?.value || '').trim();

    const btn = document.getElementById('btnSubmitFastPay');
    if (btn) btn.disabled = true;

    try {
      const res = await fetch('/api/payments/multi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          student_id: this._fastPayData.student.id,
          payment_method,
          payment_date,
          notes,
          items
        })
      });

      const data = await res.json();

      if (data.success) {
        this.playChime('success');
        const msg = isAr
          ? `تم استلام الدفع بنجاح! الوصل: ${data.receipt_no} (المجموع: ${Number(data.total_paid).toLocaleString('fr-FR')} دج)`
          : `Paiement enregistré avec succès ! Reçu N° ${data.receipt_no} (Total: ${Number(data.total_paid).toLocaleString('fr-FR')} DA)`;
        this.showToast(msg, 'success');

        // Open and render official unified receipt
        this.renderMultiReceipt(data);

        // Refresh tables in background
        await this.loadPayments();
        if (this.loadDashboardData) this.loadDashboardData();
        if (this.loadCaisse) this.loadCaisse();

        // Refresh student panel status
        await this.selectFastPayStudent(this._fastPayData.student.id);
      } else {
        this.playChime('error');
        this.showToast(data.error || (isAr ? 'حدث خطأ أثناء تسجيل الدفع' : 'Erreur enregistrement paiement'), 'error');
      }
    } catch (err) {
      console.error('Erreur submitFastMultiPayment:', err);
      this.playChime('error');
      this.showToast(isAr ? 'خطأ في الاتصال بالخادم' : 'Erreur de connexion serveur', 'error');
    } finally {
      if (btn) btn.disabled = false;
    }
  }

  // ===========================================================================
  // PARENT & FAMILY FAST PAYMENT (الدفع العائلي الموحد باسم الولي مع الدفع الجزئي)
  // ===========================================================================

  async onFastPayParentSearch(query) {
    const listContainer = document.getElementById('fastPayParentSearchResults');
    const clearBtn = document.getElementById('btnFastPayParentClearSearch');
    if (!listContainer) return;

    const term = (query || '').trim();
    if (!term) {
      listContainer.style.display = 'none';
      if (clearBtn) clearBtn.style.display = 'none';
      return;
    }
    if (clearBtn) clearBtn.style.display = 'block';

    const isAr = this.lang === 'ar';

    try {
      const res = await fetch(`/api/parents?search=${encodeURIComponent(term)}`);
      const data = await res.json();
      const parents = (data && data.success && Array.isArray(data.parents)) ? data.parents : [];

      if (parents.length === 0) {
        listContainer.innerHTML = `
          <div style="padding: 14px 16px; text-align: center; color: var(--text-muted); font-size: 12.5px;">
            <i class="fa-solid fa-user-slash" style="margin-right: 6px; color: #a855f7;"></i> ${isAr ? 'لم يتم العثور على أي ولي يطابق البحث' : 'Aucun parent trouvé'}
          </div>
        `;
        listContainer.style.display = 'block';
        return;
      }

      listContainer.innerHTML = parents.slice(0, 15).map(p => {
        const initials = (p.full_name || 'P').trim().split(/\s+/).slice(0, 2).map(w => w[0] || '').join('').toUpperCase() || 'P';
        const children = p.children || [];
        const childNames = children.map(c => `${c.first_name}`).join(', ');

        return `
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 14px; border-bottom: 1px solid var(--border-color); cursor: pointer; transition: background 0.15s;"
               onmouseover="this.style.background='rgba(168, 85, 247, 0.12)'" onmouseout="this.style.background=''"
               onclick="app.selectFastPayParent(${p.id})">
            <div style="display: flex; align-items: center; gap: 10px; min-width: 0;">
              <div style="width: 32px; height: 32px; border-radius: 50%; background: linear-gradient(135deg, #7c3aed, #a855f7); color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 11.5px; flex-shrink: 0; box-shadow: 0 2px 6px rgba(124, 58, 237, 0.35);">
                ${initials}
              </div>
              <div style="min-width: 0;">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <strong style="color: var(--text-heading); font-size: 13.5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                    ${this.escapeHtml(p.full_name)}
                  </strong>
                  ${p.discount_percent > 0 ? `<span class="badge" style="background: rgba(16, 185, 129, 0.2); color: #10b981; font-size: 10.5px; padding: 1px 6px; border-radius: 4px;">-${p.discount_percent}%</span>` : ''}
                </div>
                <div style="font-size: 11.5px; color: var(--text-muted); display: flex; align-items: center; gap: 8px; margin-top: 2px;">
                  ${p.phone ? `<span><i class="fa-solid fa-phone" style="font-size: 10px;"></i> ${this.escapeHtml(p.phone)}</span>` : ''}
                  <span style="color: #c084fc; font-weight: 600;">
                    <i class="fa-solid fa-people-roof"></i> ${p.children_count || children.length} ${isAr ? 'أبناء' : 'enfant(s)'}${childNames ? ` (${this.escapeHtml(childNames)})` : ''}
                  </span>
                </div>
              </div>
            </div>
            <div style="text-align: right; flex-shrink: 0;">
              ${p.total_debt > 0 ? `<div style="font-size: 11px; color: #ef4444; font-weight: 700;">${isAr ? 'ديون' : 'Dette'}: ${Number(p.total_debt).toLocaleString('fr-FR')} DA</div>` : `<span class="badge" style="background: rgba(16, 185, 129, 0.15); color: #10b981; font-size: 10px;">${isAr ? 'حساب منتظم' : 'À jour'}</span>`}
            </div>
          </div>
        `;
      }).join('');

      listContainer.style.display = 'block';
    } catch (err) {
      console.error('Erreur onFastPayParentSearch:', err);
    }
  }

  async selectFastPayParent(parentId) {
    const listContainer = document.getElementById('fastPayParentSearchResults');
    if (listContainer) listContainer.style.display = 'none';

    const isAr = this.lang === 'ar';

    try {
      const res = await fetch(`/api/parents/${parentId}`);
      const data = await res.json();

      if (!data.success) {
        this.showToast(data.error || (isAr ? 'خطأ في جلب بيانات الولي' : 'Erreur chargement parent'), 'error');
        return;
      }

      this._fastPayParentData = data;

      const searchInput = document.getElementById('fastPayParentSearch');
      if (searchInput) {
        searchInput.value = `${data.parent.full_name} (${data.parent.phone || (isAr ? 'بدون هاتف' : 'Sans tél')})`;
      }
      const clearBtn = document.getElementById('btnFastPayParentClearSearch');
      if (clearBtn) clearBtn.style.display = 'block';

      this.renderFastPayParentPanel();
    } catch (err) {
      console.error('Erreur selectFastPayParent:', err);
      this.showToast(isAr ? 'خطأ في الاتصال بالخادم' : 'Erreur de connexion', 'error');
    }
  }

  clearFastPayParent() {
    this._fastPayParentData = null;
    const searchInput = document.getElementById('fastPayParentSearch');
    if (searchInput) searchInput.value = '';
    const clearBtn = document.getElementById('btnFastPayParentClearSearch');
    if (clearBtn) clearBtn.style.display = 'none';
    const listContainer = document.getElementById('fastPayParentSearchResults');
    if (listContainer) listContainer.style.display = 'none';

    const activeContainer = document.getElementById('fastPayParentActiveContainer');
    if (activeContainer) activeContainer.style.display = 'none';
    const emptyPlaceholder = document.getElementById('fastPayParentEmptyPlaceholder');
    if (emptyPlaceholder) emptyPlaceholder.style.display = 'block';
  }

  renderFastPayParentPanel() {
    const activeContainer = document.getElementById('fastPayParentActiveContainer');
    const emptyPlaceholder = document.getElementById('fastPayParentEmptyPlaceholder');
    if (!activeContainer || !this._fastPayParentData) return;

    if (emptyPlaceholder) emptyPlaceholder.style.display = 'none';
    activeContainer.style.display = 'block';

    const { parent, children } = this._fastPayParentData;
    const isAr = this.lang === 'ar';
    const parentInitials = (parent.full_name || 'P').trim().split(/\s+/).slice(0, 2).map(w => w[0] || '').join('').toUpperCase() || 'P';

    const months = this.getFastPayMonthsList();
    const defaultMonth = months[0];

    const activeChildren = (children || []).filter(c => c.active !== 0);

    let childrenHtml = '';
    if (activeChildren.length === 0) {
      childrenHtml = `
        <div style="padding: 24px; text-align: center; color: var(--text-muted); background: rgba(0,0,0,0.15); border-radius: 8px;">
          <i class="fa-solid fa-user-slash" style="font-size: 24px; opacity: 0.6; margin-bottom: 6px; display: block; color: #a855f7;"></i>
          <span>${isAr ? 'لا يوجد أي تلميذ مرتبط بهذا الولي حالياً.' : 'Aucun enfant associé à ce parent.'}</span>
          <div style="margin-top: 10px;">
            <button class="btn-secondary" style="font-size: 12px; padding: 6px 14px;" onclick="app.switchView('eleves')">
              <i class="fa-solid fa-user-plus"></i> ${isAr ? 'إدارة التلاميذ' : 'Gérer les élèves'}
            </button>
          </div>
        </div>
      `;
    } else {
      childrenHtml = activeChildren.map(child => {
        const cInitials = `${(child.first_name || '')[0] || ''}${(child.last_name || '')[0] || ''}`.toUpperCase() || 'E';
        const enrollments = child.enrollments || [];
        const payments = child.payments || [];

        let coursesListHtml = '';
        if (enrollments.length === 0) {
          coursesListHtml = `
            <div style="padding: 12px 16px; color: var(--text-muted); font-size: 12px; text-align: center; background: rgba(0,0,0,0.1); border-radius: 6px;">
              <i class="fa-solid fa-circle-info" style="margin-right: 4px;"></i>
              ${isAr ? 'غير مسجل في أي فوج نشط حالياً.' : 'Inscrit dans aucun groupe actif.'}
            </div>
          `;
        } else {
          const rows = enrollments.map(g => {
            const basePrice = parseFloat(g.price_monthly) || 0;
            let defaultDiscount = parseFloat(g.discount_amount) || 0;
            if (defaultDiscount === 0 && parent.discount_percent > 0) {
              defaultDiscount = Math.round(basePrice * (parent.discount_percent / 100));
            }
            const netDue = Math.max(0, basePrice - defaultDiscount);

            const paidRecord = payments.find(p => String(p.group_id) === String(g.group_id) && p.month_period === defaultMonth);
            let isFullyPaid = false;
            let isPartiallyPaid = false;
            let remainingDue = netDue;
            let defaultToPay = netDue;

            if (paidRecord) {
              const r = parseFloat(paidRecord.remaining_amount) || 0;
              if (r <= 0) {
                isFullyPaid = true;
                defaultToPay = 0;
                remainingDue = 0;
              } else {
                isPartiallyPaid = true;
                remainingDue = r;
                defaultToPay = r;
              }
            }

            const isChecked = !isFullyPaid;
            const statusTag = isFullyPaid
              ? `<span class="badge-pill" style="background: rgba(16, 185, 129, 0.15); color: #10b981; font-weight:700;"><i class="fa-solid fa-circle-check"></i> ${isAr ? 'خالص' : 'Réglé'}</span>`
              : (isPartiallyPaid
                ? `<span class="badge-pill" style="background: rgba(245, 158, 11, 0.15); color: #f59e0b; font-weight:700;"><i class="fa-solid fa-circle-exclamation"></i> ${isAr ? `باقي ${remainingDue} دج` : `Reste ${remainingDue} DA`}</span>`
                : `<span class="badge-pill" style="background: rgba(239, 68, 68, 0.15); color: #ef4444; font-weight:700;"><i class="fa-solid fa-clock"></i> ${isAr ? 'غير مسدد' : 'Non réglé'}</span>`);

            const monthOptions = months.map(m => `<option value="${m}" ${m === defaultMonth ? 'selected' : ''}>${m}</option>`).join('');

            return `
              <tr id="fastPayParentRow_${child.id}_${g.group_id}" style="transition: background 0.15s; background: ${isChecked ? 'rgba(168, 85, 247, 0.05)' : ''};">
                <td style="text-align: center; width: 36px;">
                  <input type="checkbox" class="fastpay-parent-chk"
                         data-student-id="${child.id}" data-student-name="${this.escapeHtml(child.first_name + ' ' + child.last_name)}"
                         data-group-id="${g.group_id}" data-group-name="${this.escapeHtml(g.group_name)}"
                         ${isChecked ? 'checked' : ''} onchange="app.onFastPayParentRowCheckChange(${child.id}, ${g.group_id})">
                </td>
                <td>
                  <div style="font-weight: 700; color: var(--text-heading); font-size: 13px;">${this.escapeHtml(g.group_name)}</div>
                  <div style="font-size: 11px; color: var(--text-muted); display: flex; align-items: center; gap: 6px; margin-top: 2px;">
                    <span style="color: ${g.subject_color || '#3b82f6'}; font-weight: 600;">${this.escapeHtml(g.subject_name || '')}</span>
                    <span>&bull;</span>
                    <span>${this.escapeHtml(g.teacher_name || '')}</span>
                  </div>
                </td>
                <td style="width: 140px;">
                  <select class="form-control fastpay-parent-month-select"
                          data-student-id="${child.id}" data-group-id="${g.group_id}"
                          style="padding: 4px 6px; font-size: 11.5px; height: 30px;"
                          onchange="app.onFastPayParentRowMonthChange(${child.id}, ${g.group_id})">
                    ${monthOptions}
                  </select>
                </td>
                <td style="text-align: center; width: 100px;" id="fastPayParentStatus_${child.id}_${g.group_id}">
                  ${statusTag}
                </td>
                <td style="text-align: right; width: 85px; font-weight: 600;" id="fastPayParentBase_${child.id}_${g.group_id}" data-base="${basePrice}">
                  ${basePrice.toLocaleString('fr-FR')} DA
                </td>
                <td style="width: 90px;">
                  <input type="number" class="form-control fastpay-parent-discount-input"
                         data-student-id="${child.id}" data-group-id="${g.group_id}"
                         style="padding: 4px 6px; font-size: 11.5px; height: 30px; text-align: right;"
                         value="${defaultDiscount}" min="0" oninput="app.onFastPayParentDiscountInput(${child.id}, ${g.group_id})">
                </td>
                <td style="text-align: right; width: 90px; font-weight: 700; color: #38bdf8;" id="fastPayParentNet_${child.id}_${g.group_id}">
                  ${netDue.toLocaleString('fr-FR')} DA
                </td>
                <td style="width: 115px;">
                  <input type="number" class="form-control fastpay-parent-paid-input"
                         data-student-id="${child.id}" data-group-id="${g.group_id}"
                         style="padding: 4px 6px; font-size: 12.5px; height: 30px; text-align: right; font-weight: 700; color: #10b981; border: 1px solid rgba(16, 185, 129, 0.4);"
                         value="${defaultToPay}" min="0" oninput="app.updateFastPayParentCalculations(false)">
                </td>
                <td style="text-align: right; width: 85px; font-size: 11.5px; font-weight: 700; color: ${remainingDue > 0 ? '#ef4444' : 'var(--text-muted)'};" id="fastPayParentRemaining_${child.id}_${g.group_id}">
                  ${remainingDue > 0 ? `${remainingDue.toLocaleString('fr-FR')} DA` : '0 DA'}
                </td>
              </tr>
            `;
          }).join('');

          coursesListHtml = `
            <div class="table-responsive" style="margin: 0; border: 1px solid var(--border-color); border-radius: 8px;">
              <table class="edumind-table" style="margin: 0; font-size: 12px;">
                <thead>
                  <tr style="background: rgba(0,0,0,0.2);">
                    <th style="width: 36px; text-align: center;">#</th>
                    <th>${isAr ? 'الفوج والمادة' : 'GROUPE / MATIÈRE'}</th>
                    <th>${isAr ? 'الشهر المعني' : 'MOIS'}</th>
                    <th style="text-align: center;">${isAr ? 'الحالة' : 'STATUT'}</th>
                    <th style="text-align: right;">${isAr ? 'السعر' : 'TARIF'}</th>
                    <th style="text-align: right;">${isAr ? 'تخفيض' : 'REMISE'}</th>
                    <th style="text-align: right;">${isAr ? 'الصافي' : 'NET'}</th>
                    <th style="text-align: right;">${isAr ? 'المبلغ المدفوع' : 'MONTANT PAYÉ'}</th>
                    <th style="text-align: right;">${isAr ? 'المتبقي (دين)' : 'RESTE'}</th>
                  </tr>
                </thead>
                <tbody>
                  ${rows}
                </tbody>
              </table>
            </div>
          `;
        }

        const childAvatar = child.photo_url
          ? `<img src="${child.photo_url}" style="width:34px; height:34px; border-radius:50%; object-fit:cover; border:2px solid #a855f7;">`
          : `<div style="width:34px; height:34px; border-radius:50%; background:linear-gradient(135deg, #7c3aed, #a855f7); color:white; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:12px; border:2px solid #a855f7;">${cInitials}</div>`;

        return `
          <div style="background: rgba(0, 0, 0, 0.2); border: 1px solid var(--border-color); border-radius: 10px; padding: 12px; margin-bottom: 12px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 8px;">
              <div style="display: flex; align-items: center; gap: 10px;">
                ${childAvatar}
                <div>
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <strong style="font-size: 14px; color: var(--text-heading);">${this.escapeHtml(child.first_name)} ${this.escapeHtml(child.last_name)}</strong>
                    <code style="font-size: 11px; background: rgba(168, 85, 247, 0.15); color: #c084fc; padding: 1px 6px; border-radius: 4px;">${this.escapeHtml(child.matricule || '')}</code>
                  </div>
                  <div style="font-size: 11.5px; color: var(--text-muted); display: flex; align-items: center; gap: 10px; margin-top: 1px;">
                    <span><i class="fa-solid fa-layer-group" style="font-size: 10px;"></i> ${this.escapeHtml(child.level_name || '')}</span>
                    <span>&bull;</span>
                    <span><i class="fa-solid fa-graduation-cap" style="font-size: 10px;"></i> ${enrollments.length} ${isAr ? 'أفواج مسجل بها' : 'cours'}</span>
                  </div>
                </div>
              </div>
            </div>
            ${coursesListHtml}
          </div>
        `;
      }).join('');
    }

    const monthOptions = months.map(m => `<option value="${m}" ${m === defaultMonth ? 'selected' : ''}>${m}</option>`).join('');

    activeContainer.innerHTML = `
      <!-- Parent Hero Header Banner -->
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; background: linear-gradient(135deg, rgba(124, 58, 237, 0.15), rgba(168, 85, 247, 0.05)); border-radius: 10px; margin-bottom: 14px; border: 1px solid rgba(168, 85, 247, 0.35); flex-wrap: wrap; gap: 12px;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg, #7c3aed, #a855f7); color: white; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 16px; box-shadow: 0 4px 12px rgba(124, 58, 237, 0.4);">
            ${parentInitials}
          </div>
          <div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <strong style="color: var(--text-heading); font-size: 16px;">${this.escapeHtml(parent.full_name)}</strong>
              ${parent.discount_percent > 0 ? `<span class="badge" style="background: rgba(16, 185, 129, 0.2); color: #10b981; font-size: 11px; padding: 2px 8px; border-radius: 4px; font-weight: 700;"><i class="fa-solid fa-percent"></i> ${isAr ? `تخفيض عائلي ${parent.discount_percent}%` : `Remise famille ${parent.discount_percent}%`}</span>` : ''}
            </div>
            <div style="font-size: 12px; color: var(--text-muted); margin-top: 3px; display: flex; gap: 14px; align-items: center; flex-wrap: wrap;">
              ${parent.phone ? `<span><i class="fa-solid fa-phone" style="font-size: 10px; color: #c084fc;"></i> ${this.escapeHtml(parent.phone)}</span>` : ''}
              ${parent.phone_secondary ? `<span><i class="fa-solid fa-phone" style="font-size: 10px;"></i> ${this.escapeHtml(parent.phone_secondary)}</span>` : ''}
              <span><i class="fa-solid fa-people-roof" style="font-size: 10px; color: #c084fc;"></i> <strong style="color: #c084fc;">${activeChildren.length}</strong> ${isAr ? 'أبناء مسجلين' : 'enfant(s) inscrit(s)'}</span>
              ${parent.total_debt > 0 ? `<span style="color: #ef4444; font-weight: 700;"><i class="fa-solid fa-circle-exclamation"></i> ${isAr ? `ديون سابقة: ${Number(parent.total_debt).toLocaleString('fr-FR')} DA` : `Dette antérieure: ${Number(parent.total_debt).toLocaleString('fr-FR')} DA`}</span>` : ''}
            </div>
          </div>
        </div>
        <button type="button" class="btn-secondary" style="font-size: 12px; padding: 6px 14px;" onclick="app.clearFastPayParent()">
          <i class="fa-solid fa-user-xmark"></i> ${isAr ? 'تغيير الولي' : 'Changer de parent'}
        </button>
      </div>

      <!-- Global Controls & Partial Payment Toolbar (شريط التحكم المالي والدفع الجزئي) -->
      <div style="background: rgba(0, 0, 0, 0.35); border: 1px solid rgba(168, 85, 247, 0.3); border-radius: 10px; padding: 12px 16px; margin-bottom: 14px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        
        <!-- Left: Global Month & Select All -->
        <div style="display: flex; align-items: center; gap: 14px; flex-wrap: wrap;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <label style="font-size: 12px; font-weight: 700; color: var(--text-muted); white-space: nowrap;">
              <i class="fa-regular fa-calendar" style="color: #c084fc;"></i> ${isAr ? 'الشهر الموحد لجميع الأبناء:' : 'Mois pour tous les enfants :'}
            </label>
            <select id="fastPayParentGlobalMonth" class="form-control" style="width: 155px; padding: 5px 8px; font-size: 12px; height: 32px;"
                    onchange="app.onFastPayParentGlobalMonthChange(this.value)">
              ${monthOptions}
            </select>
          </div>
          <button type="button" class="btn-secondary" style="font-size: 11.5px; padding: 4px 10px;" onclick="app.toggleAllFastPayParentCourses(true)">
            <i class="fa-solid fa-check-double"></i> ${isAr ? 'تحديد كل الأفواج' : 'Tout cocher'}
          </button>
        </div>

        <!-- Center & Right: Partial Payment Controller -->
        <div style="display: flex; align-items: center; gap: 14px; flex-wrap: wrap;">
          <div style="text-align: right;">
            <div style="font-size: 11px; color: var(--text-muted);">${isAr ? 'المستحق الصافي الإجمالي' : 'Total Net Dû'}</div>
            <strong id="fastPayParentSummaryDue" style="font-size: 15px; color: #38bdf8;">0 DA</strong>
          </div>

          <!-- The Core Feature: Custom partial/full amount given by parent -->
          <div style="display: flex; align-items: center; gap: 8px; background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 8px; padding: 6px 12px;">
            <div>
              <label for="fastPayParentTotalPaidInput" style="font-size: 11px; font-weight: 700; color: #10b981; display: block; margin-bottom: 2px;">
                ${isAr ? 'المبلغ المقبوض من الولي (دفع كلي أو جزئي):' : 'Montant versé par le parent :'}
              </label>
              <div style="display: flex; align-items: center; gap: 6px;">
                <input type="number" id="fastPayParentTotalPaidInput" class="form-control" min="0" step="50"
                       style="width: 130px; font-size: 14px; font-weight: 800; color: #10b981; border: 1px solid rgba(16, 185, 129, 0.6); text-align: right; height: 32px; padding: 4px 8px;"
                       placeholder="0" oninput="app.onFastPayParentGlobalPaidInput(this.value)">
                <span style="font-weight: 700; font-size: 12px; color: #10b981;">DA</span>
              </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 3px;">
              <button type="button" class="btn-secondary" style="font-size: 10.5px; padding: 2px 8px; background: rgba(16, 185, 129, 0.15); border-color: rgba(16, 185, 129, 0.3); color: #10b981;"
                      onclick="app.fillFullFastPayParentAmount()" title="${isAr ? 'دفع كامل المبلغ المستحق' : 'Régler la totalité'}">
                <i class="fa-solid fa-bolt"></i> ${isAr ? 'سداد كامل' : 'Tout payer'}
              </button>
              <button type="button" class="btn-secondary" style="font-size: 10.5px; padding: 2px 8px; background: rgba(168, 85, 247, 0.15); border-color: rgba(168, 85, 247, 0.3); color: #c084fc;"
                      onclick="app.distributeFastPayParentAmount()" title="${isAr ? 'توزيع المبلغ المدخل على الأبناء' : 'Répartir le montant'}">
                <i class="fa-solid fa-arrows-split-up-and-left"></i> ${isAr ? 'توزيع تلقائي' : 'Répartir'}
              </button>
            </div>
          </div>

          <!-- Remaining Debt Alert / Counter -->
          <div id="fastPayParentRemainingBox" style="text-align: right; background: rgba(0, 0, 0, 0.25); border: 1px solid var(--border-color); border-radius: 8px; padding: 6px 12px;">
            <div style="font-size: 11px; color: var(--text-muted);">${isAr ? 'المتبقي (دين)' : 'Reste dû (Dette)'}</div>
            <strong id="fastPayParentSummaryRemaining" style="font-size: 15px; color: #ef4444;">0 DA</strong>
          </div>

        </div>

      </div>

      <!-- Partial Payment Info Banner (Shows dynamically when debt exists) -->
      <div id="fastPayParentPartialNotice" style="display: none; align-items: center; gap: 8px; padding: 8px 14px; background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: 8px; margin-bottom: 12px; font-size: 12px; color: #f59e0b;">
        <i class="fa-solid fa-circle-exclamation" style="font-size: 14px;"></i>
        <span>${isAr ? 'تنبيه: المبلغ المدفوع جزئي. سيتم تسجيل المتبقي كدين رسمي في حساب التلاميذ والأفواج المعنية، وسيظهر في الوصل العائلي.' : 'Note : Versement partiel. Le reliquat sera enregistré comme dette dans le compte des enfants et apparaîtra sur le reçu familial.'}</span>
      </div>

      <!-- Children Breakdown List -->
      ${childrenHtml}

      <!-- Bottom Checkout Bar -->
      <div style="background: rgba(0, 0, 0, 0.4); border-radius: 10px; padding: 14px 18px; border: 1px solid rgba(168, 85, 247, 0.35); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px; margin-top: 14px;">
        
        <!-- Left: Payment Options (Method, Date, Notes) -->
        <div style="display: flex; gap: 14px; align-items: center; flex-wrap: wrap;">
          <div>
            <label style="font-size: 11.5px; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 3px;">
              ${isAr ? 'طريقة الدفع' : 'Mode de paiement'}
            </label>
            <select id="fastPayParentMethod" class="form-control" style="width: 140px; padding: 6px 10px; font-size: 12.5px; height: 34px;">
              <option value="espece">${isAr ? 'نقداً (Espèces)' : 'Espèces (Caisse)'}</option>
              <option value="baridimob">BaridiMob / CCP</option>
              <option value="cheque">${isAr ? 'شيك (Chèque)' : 'Chèque bancaire'}</option>
            </select>
          </div>
          <div>
            <label style="font-size: 11.5px; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 3px;">
              ${isAr ? 'تاريخ الدفع' : 'Date de paiement'}
            </label>
            <input type="date" id="fastPayParentDate" class="form-control" style="width: 140px; padding: 6px 10px; font-size: 12.5px; height: 34px;" value="${new Date().toISOString().split('T')[0]}">
          </div>
          <div>
            <label style="font-size: 11.5px; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 3px;">
              ${isAr ? 'ملاحظات (اختياري)' : 'Notes / Remarques'}
            </label>
            <input type="text" id="fastPayParentNotes" class="form-control" placeholder="${isAr ? 'ملاحظة على الوصل العائلي...' : 'Ex: Paiement familial partiel...'}" style="width: 190px; padding: 6px 10px; font-size: 12px; height: 34px;">
          </div>
        </div>

        <!-- Right: Counters & Submit Button -->
        <div style="display: flex; align-items: center; gap: 18px; flex-wrap: wrap;">
          <div style="text-align: right;">
            <div style="font-size: 11px; color: var(--text-muted);">${isAr ? 'الأفواج المحددة' : 'Cours sélectionnés'} : <strong id="fastPayParentSummaryCount" style="color: var(--text-heading); font-size: 13px;">0</strong></div>
            <div style="font-size: 11px; color: var(--text-muted);">${isAr ? 'المجموع المستحق' : 'Net dû'} : <strong id="fastPayParentSummaryNetTotal" style="color: #38bdf8; font-size: 13px;">0 DA</strong></div>
          </div>

          <div style="text-align: right; background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(124, 58, 237, 0.15)); border: 1px solid rgba(16, 185, 129, 0.4); border-radius: 8px; padding: 6px 14px;">
            <span style="font-size: 11px; color: var(--text-muted); display: block;">${isAr ? 'المبلغ الإجمالي المقبوض' : 'Total à Encaisser'}</span>
            <strong id="fastPayParentSummaryPaid" style="font-size: 18px; color: #10b981; font-weight: 800;">0 DA</strong>
          </div>

          <button type="button" class="btn-primary" id="btnSubmitFastPayParent" onclick="app.submitFastFamilyPayment()"
                  style="background: linear-gradient(135deg, #7c3aed, #10b981); font-weight: 700; padding: 10px 22px; box-shadow: 0 4px 14px rgba(124, 58, 237, 0.35); display: inline-flex; align-items: center; gap: 8px; cursor: pointer;">
            <i class="fa-solid fa-receipt"></i>
            <span>${isAr ? 'تأكيد الدفع وطباعة الوصل العائلي' : 'Encaisser & Imprimer le Reçu Familial'}</span>
          </button>
        </div>

      </div>
    `;

    this.updateFastPayParentCalculations(true);
  }

  updateFastPayParentCalculations(syncGlobalInput = true) {
    let count = 0;
    let totalNet = 0;
    let totalPaid = 0;

    document.querySelectorAll('.fastpay-parent-chk').forEach(chk => {
      const isChecked = chk.checked;
      const sId = chk.dataset.studentId;
      const gId = chk.dataset.groupId;

      const row = document.getElementById(`fastPayParentRow_${sId}_${gId}`);
      if (row) {
        row.style.background = isChecked ? 'rgba(168, 85, 247, 0.05)' : '';
      }

      const baseEl = document.getElementById(`fastPayParentBase_${sId}_${gId}`);
      const discInput = document.querySelector(`.fastpay-parent-discount-input[data-student-id="${sId}"][data-group-id="${gId}"]`);
      const paidInput = document.querySelector(`.fastpay-parent-paid-input[data-student-id="${sId}"][data-group-id="${gId}"]`);
      const netEl = document.getElementById(`fastPayParentNet_${sId}_${gId}`);
      const remEl = document.getElementById(`fastPayParentRemaining_${sId}_${gId}`);

      const base = parseFloat(baseEl?.dataset.base) || 0;
      const disc = parseFloat(discInput?.value) || 0;
      const net = Math.max(0, base - disc);
      const paid = isChecked ? (parseFloat(paidInput?.value) || 0) : 0;
      const rem = isChecked ? Math.max(0, net - paid) : 0;

      if (netEl) netEl.textContent = `${net.toLocaleString('fr-FR')} DA`;
      if (remEl) {
        remEl.textContent = `${rem.toLocaleString('fr-FR')} DA`;
        remEl.style.color = rem > 0 ? '#ef4444' : 'var(--text-muted)';
      }

      if (isChecked) {
        count++;
        totalNet += net;
        totalPaid += paid;
      }
    });

    const totalRemaining = Math.max(0, totalNet - totalPaid);

    const elCount = document.getElementById('fastPayParentSummaryCount');
    if (elCount) elCount.textContent = count;

    const elDue = document.getElementById('fastPayParentSummaryDue');
    if (elDue) elDue.textContent = `${totalNet.toLocaleString('fr-FR')} DA`;

    const elNetTotal = document.getElementById('fastPayParentSummaryNetTotal');
    if (elNetTotal) elNetTotal.textContent = `${totalNet.toLocaleString('fr-FR')} DA`;

    const elPaid = document.getElementById('fastPayParentSummaryPaid');
    if (elPaid) elPaid.textContent = `${totalPaid.toLocaleString('fr-FR')} DA`;

    const elRem = document.getElementById('fastPayParentSummaryRemaining');
    if (elRem) {
      elRem.textContent = `${totalRemaining.toLocaleString('fr-FR')} DA`;
      elRem.style.color = totalRemaining > 0 ? '#ef4444' : '#10b981';
    }

    const partialNotice = document.getElementById('fastPayParentPartialNotice');
    if (partialNotice) {
      partialNotice.style.display = (totalRemaining > 0 && totalPaid > 0) ? 'flex' : 'none';
    }

    if (syncGlobalInput) {
      const globalInput = document.getElementById('fastPayParentTotalPaidInput');
      if (globalInput && document.activeElement !== globalInput) {
        globalInput.value = totalPaid;
      }
    }

    const btnSubmit = document.getElementById('btnSubmitFastPayParent');
    if (btnSubmit) {
      const canSubmit = count > 0 && (totalPaid > 0 || totalNet > 0);
      btnSubmit.disabled = !canSubmit;
      btnSubmit.style.opacity = canSubmit ? '1' : '0.5';
      btnSubmit.style.cursor = canSubmit ? 'pointer' : 'not-allowed';
    }
  }

  onFastPayParentGlobalPaidInput(val) {
    const amount = parseFloat(val);
    if (isNaN(amount) || amount < 0) return;
    this.distributeFastPayParentAmount(amount);
  }

  distributeFastPayParentAmount(customAmount = null) {
    let amountLeft = customAmount !== null ? customAmount : (parseFloat(document.getElementById('fastPayParentTotalPaidInput')?.value) || 0);
    amountLeft = Math.max(0, amountLeft);

    const checkedRows = Array.from(document.querySelectorAll('.fastpay-parent-chk:checked'));
    if (checkedRows.length === 0) return;

    checkedRows.forEach(chk => {
      const sId = chk.dataset.studentId;
      const gId = chk.dataset.groupId;
      const baseEl = document.getElementById(`fastPayParentBase_${sId}_${gId}`);
      const discInput = document.querySelector(`.fastpay-parent-discount-input[data-student-id="${sId}"][data-group-id="${gId}"]`);
      const paidInput = document.querySelector(`.fastpay-parent-paid-input[data-student-id="${sId}"][data-group-id="${gId}"]`);

      const base = parseFloat(baseEl?.dataset.base) || 0;
      const disc = parseFloat(discInput?.value) || 0;
      const net = Math.max(0, base - disc);

      const allocated = Math.min(net, amountLeft);
      if (paidInput) {
        paidInput.value = allocated;
      }
      amountLeft -= allocated;
    });

    this.updateFastPayParentCalculations(false);
  }

  fillFullFastPayParentAmount() {
    document.querySelectorAll('.fastpay-parent-chk:checked').forEach(chk => {
      const sId = chk.dataset.studentId;
      const gId = chk.dataset.groupId;
      const baseEl = document.getElementById(`fastPayParentBase_${sId}_${gId}`);
      const discInput = document.querySelector(`.fastpay-parent-discount-input[data-student-id="${sId}"][data-group-id="${gId}"]`);
      const paidInput = document.querySelector(`.fastpay-parent-paid-input[data-student-id="${sId}"][data-group-id="${gId}"]`);

      const base = parseFloat(baseEl?.dataset.base) || 0;
      const disc = parseFloat(discInput?.value) || 0;
      const net = Math.max(0, base - disc);

      if (paidInput) {
        paidInput.value = net;
      }
    });

    this.updateFastPayParentCalculations(true);
  }

  onFastPayParentGlobalMonthChange(newMonth) {
    if (!this._fastPayParentData) return;

    document.querySelectorAll('.fastpay-parent-month-select').forEach(sel => {
      sel.value = newMonth;
      const sId = sel.dataset.studentId;
      const gId = sel.dataset.groupId;
      this.onFastPayParentRowMonthChange(sId, gId, false);
    });

    this.updateFastPayParentCalculations(true);
  }

  onFastPayParentRowMonthChange(studentId, groupId, updateCalc = true) {
    if (!this._fastPayParentData) return;
    const child = (this._fastPayParentData.children || []).find(c => String(c.id) === String(studentId));
    if (!child) return;

    const select = document.querySelector(`.fastpay-parent-month-select[data-student-id="${studentId}"][data-group-id="${groupId}"]`);
    const statusContainer = document.getElementById(`fastPayParentStatus_${studentId}_${groupId}`);
    const paidInput = document.querySelector(`.fastpay-parent-paid-input[data-student-id="${studentId}"][data-group-id="${groupId}"]`);
    const baseEl = document.getElementById(`fastPayParentBase_${studentId}_${groupId}`);
    const discInput = document.querySelector(`.fastpay-parent-discount-input[data-student-id="${studentId}"][data-group-id="${groupId}"]`);
    const chk = document.querySelector(`.fastpay-parent-chk[data-student-id="${studentId}"][data-group-id="${groupId}"]`);

    const selMonth = select ? select.value : '';
    const payments = child.payments || [];
    const base = parseFloat(baseEl?.dataset.base) || 0;
    const disc = parseFloat(discInput?.value) || 0;
    const net = Math.max(0, base - disc);

    const paidRecord = payments.find(p => String(p.group_id) === String(groupId) && p.month_period === selMonth);
    const isAr = this.lang === 'ar';

    let isFullyPaid = false;
    let isPartiallyPaid = false;
    let rem = net;

    if (paidRecord) {
      const r = parseFloat(paidRecord.remaining_amount) || 0;
      if (r <= 0) {
        isFullyPaid = true;
        rem = 0;
      } else {
        isPartiallyPaid = true;
        rem = r;
      }
    }

    if (statusContainer) {
      statusContainer.innerHTML = isFullyPaid
        ? `<span class="badge-pill" style="background: rgba(16, 185, 129, 0.15); color: #10b981; font-weight:700;"><i class="fa-solid fa-circle-check"></i> ${isAr ? 'خالص' : 'Réglé'}</span>`
        : (isPartiallyPaid
          ? `<span class="badge-pill" style="background: rgba(245, 158, 11, 0.15); color: #f59e0b; font-weight:700;"><i class="fa-solid fa-circle-exclamation"></i> ${isAr ? `باقي ${rem} دج` : `Reste ${rem} DA`}</span>`
          : `<span class="badge-pill" style="background: rgba(239, 68, 68, 0.15); color: #ef4444; font-weight:700;"><i class="fa-solid fa-clock"></i> ${isAr ? 'غير مسدد' : 'Non réglé'}</span>`);
    }

    if (paidInput) {
      paidInput.value = rem;
    }
    if (chk) {
      chk.checked = !isFullyPaid;
    }

    if (updateCalc) {
      this.updateFastPayParentCalculations(true);
    }
  }

  onFastPayParentDiscountInput(studentId, groupId) {
    const baseEl = document.getElementById(`fastPayParentBase_${studentId}_${groupId}`);
    const discInput = document.querySelector(`.fastpay-parent-discount-input[data-student-id="${studentId}"][data-group-id="${groupId}"]`);
    const netEl = document.getElementById(`fastPayParentNet_${studentId}_${groupId}`);
    const paidInput = document.querySelector(`.fastpay-parent-paid-input[data-student-id="${studentId}"][data-group-id="${groupId}"]`);

    const base = parseFloat(baseEl?.dataset.base) || 0;
    const disc = parseFloat(discInput?.value) || 0;
    const net = Math.max(0, base - disc);

    if (netEl) netEl.textContent = `${net.toLocaleString('fr-FR')} DA`;
    if (paidInput) paidInput.value = net;

    this.updateFastPayParentCalculations(true);
  }

  onFastPayParentRowCheckChange(studentId, groupId) {
    this.updateFastPayParentCalculations(true);
  }

  toggleAllFastPayParentCourses(checked) {
    document.querySelectorAll('.fastpay-parent-chk').forEach(chk => {
      chk.checked = checked;
    });
    this.updateFastPayParentCalculations(true);
  }

  async submitFastFamilyPayment() {
    const isAr = this.lang === 'ar';
    if (!this._fastPayParentData) return;

    const items = [];
    document.querySelectorAll('.fastpay-parent-chk:checked').forEach(chk => {
      const sId = chk.dataset.studentId;
      const sName = chk.dataset.studentName;
      const gId = chk.dataset.groupId;
      const gName = chk.dataset.groupName;

      const baseEl = document.getElementById(`fastPayParentBase_${sId}_${gId}`);
      const discInput = document.querySelector(`.fastpay-parent-discount-input[data-student-id="${sId}"][data-group-id="${gId}"]`);
      const paidInput = document.querySelector(`.fastpay-parent-paid-input[data-student-id="${sId}"][data-group-id="${gId}"]`);
      const monthSelect = document.querySelector(`.fastpay-parent-month-select[data-student-id="${sId}"][data-group-id="${gId}"]`);

      const base = parseFloat(baseEl?.dataset.base) || 0;
      const disc = parseFloat(discInput?.value) || 0;
      const paid = parseFloat(paidInput?.value) || 0;
      const month = monthSelect ? monthSelect.value : 'Septembre 2026';

      if (paid > 0 || (base - disc) > 0) {
        items.push({
          student_id: parseInt(sId, 10),
          student_name: sName,
          group_id: parseInt(gId, 10),
          group_name: gName,
          month_period: month,
          base_amount: base,
          discount: disc,
          paid_amount: paid
        });
      }
    });

    if (items.length === 0) {
      this.showToast(isAr ? 'يرجى تحديد فوج واحد على الأقل مع مبلغ صالح للدفع' : 'Veuillez sélectionner au moins un cours avec un montant valide.', 'warning');
      return;
    }

    const payment_method = document.getElementById('fastPayParentMethod')?.value || 'espece';
    const payment_date = document.getElementById('fastPayParentDate')?.value || new Date().toISOString().split('T')[0];
    const notes = (document.getElementById('fastPayParentNotes')?.value || '').trim();

    const btn = document.getElementById('btnSubmitFastPayParent');
    if (btn) btn.disabled = true;

    try {
      const res = await fetch('/api/payments/family', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          parent_id: this._fastPayParentData.parent.id,
          parent_name: this._fastPayParentData.parent.full_name,
          parent_phone: this._fastPayParentData.parent.phone,
          payment_method,
          payment_date,
          notes,
          items
        })
      });

      const data = await res.json();

      if (data.success) {
        this.playChime('success');
        const remMsg = data.total_remaining > 0
          ? (isAr ? ` (المتبقي كدين: ${Number(data.total_remaining).toLocaleString('fr-FR')} دج)` : ` (Reste dû: ${Number(data.total_remaining).toLocaleString('fr-FR')} DA)`)
          : '';
        const msg = isAr
          ? `تم استلام الدفع العائلي بنجاح! الوصل: ${data.receipt_no} (المجموع المدفوع: ${Number(data.total_paid).toLocaleString('fr-FR')} دج)${remMsg}`
          : `Paiement familial enregistré avec succès ! Reçu N° ${data.receipt_no} (Total versé: ${Number(data.total_paid).toLocaleString('fr-FR')} DA)${remMsg}`;
        this.showToast(msg, 'success');

        // Open and render official unified family receipt
        this.renderFamilyReceipt(data);

        // Refresh tables in background
        await this.loadPayments();
        if (this.loadDashboardData) this.loadDashboardData();
        if (this.loadCaisse) this.loadCaisse();
        if (this.loadParents) this.loadParents();

        // Refresh parent panel status
        await this.selectFastPayParent(this._fastPayParentData.parent.id);
      } else {
        this.playChime('error');
        this.showToast(data.error || (isAr ? 'حدث خطأ أثناء تسجيل الدفع العائلي' : 'Erreur enregistrement paiement familial'), 'error');
      }
    } catch (err) {
      console.error('Erreur submitFastFamilyPayment:', err);
      this.playChime('error');
      this.showToast(isAr ? 'خطأ في الاتصال بالخادم' : 'Erreur de connexion serveur', 'error');
    } finally {
      if (btn) btn.disabled = false;
    }
  }

  renderMultiReceipt(res) {
    const isAr = this.lang === 'ar';
    const st = res.student || {};
    const payments = res.payments || [];

    document.getElementById('rcptSchoolName').textContent = this.settings?.school_name || 'EDUMIND ACADEMY';
    document.getElementById('rcptSchoolContact').textContent = `${this.settings?.school_address || 'Alger, Algérie'} | Tél: ${this.settings?.school_phone || '0550 00 00 00'}`;
    document.getElementById('rcptNumber').textContent = res.receipt_no;

    const pDate = res.payment_date ? new Date(res.payment_date) : new Date();
    document.getElementById('rcptDate').textContent = pDate.toLocaleDateString(isAr ? 'ar-DZ' : 'fr-FR');

    const lblStudent = document.getElementById('rcptStudentLabel');
    const lblMatricule = document.getElementById('rcptMatriculeLabel');
    if (lblStudent) lblStudent.textContent = isAr ? 'التلميذ:' : 'Élève:';
    if (lblMatricule) lblMatricule.textContent = isAr ? 'رقم القيد:' : 'Matricule:';

    document.getElementById('rcptStudent').textContent = `${st.first_name || ''} ${st.last_name || ''}`;
    document.getElementById('rcptMatricule').textContent = st.matricule || '';

    const singleTable = document.getElementById('rcptSingleTable');
    const multiTable = document.getElementById('rcptMultiTable');
    const multiBody = document.getElementById('rcptMultiTableBody');
    const familyTable = document.getElementById('rcptFamilyTable');
    const familyRemBox = document.getElementById('rcptFamilyRemainingBox');

    if (familyTable) familyTable.style.display = 'none';
    if (familyRemBox) familyRemBox.style.display = 'none';

    const methodLabels = {
      espece: isAr ? 'نقداً (Espèces)' : 'Espèces (Caisse)',
      baridimob: 'BaridiMob / CCP',
      cheque: isAr ? 'شيك (Chèque)' : 'Chèque bancaire'
    };
    document.getElementById('rcptMethod').textContent = methodLabels[res.payment_method] || res.payment_method;

    if (payments.length > 1) {
      document.getElementById('rcptGroup').textContent = isAr ? `دفع موحد (${payments.length} أفواج)` : `Paiement groupé (${payments.length} cours)`;
      document.getElementById('rcptTeacher').textContent = '-';
      document.getElementById('rcptMonth').textContent = isAr ? 'متعدد' : 'Multi-périodes';

      if (singleTable) singleTable.style.display = 'none';
      if (multiTable) {
        multiTable.style.display = 'table';
        if (multiBody) {
          multiBody.innerHTML = payments.map((p, idx) => {
            const net = Math.max(0, (parseFloat(p.base_amount) || 0) - (parseFloat(p.discount) || 0));
            const paid = parseFloat(p.paid_amount) || 0;
            const rem = parseFloat(p.remaining_amount) || 0;
            return `
              <tr>
                <td style="text-align: center;">${idx + 1}</td>
                <td>
                  <strong>${this.escapeHtml(p.group_name)}</strong>
                  <span style="font-size: 10px; color: var(--text-muted); display: block;">${this.escapeHtml(p.subject_name || '')} &bull; ${this.escapeHtml(p.teacher_name || '')}</span>
                </td>
                <td>${this.escapeHtml(p.month_period)}</td>
                <td style="text-align: right;">${net.toLocaleString('fr-FR')} DA</td>
                <td style="text-align: right;">${Number(p.discount || 0).toLocaleString('fr-FR')} DA</td>
                <td style="text-align: right; font-weight: 700; color: #10b981;">${paid.toLocaleString('fr-FR')} DA</td>
                <td style="text-align: right; color: ${rem > 0 ? '#ef4444' : 'var(--text-muted)'};">${rem.toLocaleString('fr-FR')} DA</td>
              </tr>
            `;
          }).join('');
        }
      }
    } else if (payments.length === 1) {
      const p = payments[0];
      document.getElementById('rcptGroup').textContent = `${p.group_name} (${p.subject_name || ''})`;
      document.getElementById('rcptTeacher').textContent = p.teacher_name || 'Équipe pédagogique';
      document.getElementById('rcptMonth').textContent = p.month_period;

      if (multiTable) multiTable.style.display = 'none';
      if (singleTable) {
        singleTable.style.display = 'table';
        document.getElementById('rcptBasePrice').textContent = `${Number(p.base_amount).toLocaleString('fr-FR')} DA`;
        document.getElementById('rcptDiscount').textContent = `${Number(p.discount || 0).toLocaleString('fr-FR')} DA`;
        document.getElementById('rcptRemaining').textContent = `${Number(p.remaining_amount || 0).toLocaleString('fr-FR')} DA`;
      }
    }

    document.getElementById('rcptTotalPaid').textContent = `${Number(res.total_paid).toLocaleString('fr-FR')} DA`;
    document.getElementById('modalReceipt').classList.add('active');
  }

  renderFamilyReceipt(res) {
    const isAr = this.lang === 'ar';
    const parent = res.parent || {};
    const payments = res.payments || [];

    document.getElementById('rcptSchoolName').textContent = this.settings?.school_name || 'EDUMIND ACADEMY';
    document.getElementById('rcptSchoolContact').textContent = `${this.settings?.school_address || 'Alger, Algérie'} | Tél: ${this.settings?.school_phone || '0550 00 00 00'}`;
    document.getElementById('rcptNumber').textContent = res.receipt_no;

    const pDate = res.payment_date ? new Date(res.payment_date) : new Date();
    document.getElementById('rcptDate').textContent = pDate.toLocaleDateString(isAr ? 'ar-DZ' : 'fr-FR');

    const lblStudent = document.getElementById('rcptStudentLabel');
    const lblMatricule = document.getElementById('rcptMatriculeLabel');
    if (lblStudent) lblStudent.textContent = isAr ? 'ولي الأمر:' : 'Parent d\'élève:';
    if (lblMatricule) lblMatricule.textContent = isAr ? 'هاتف الولي:' : 'Tél. Parent:';

    document.getElementById('rcptStudent').textContent = parent.full_name || (isAr ? 'ولي تلميذ' : 'Parent');
    document.getElementById('rcptMatricule').textContent = parent.phone || '-';

    document.getElementById('rcptGroup').textContent = isAr
      ? `دفع عائلي (${res.children_count || 1} أبناء / ${payments.length} أفواج)`
      : `Paiement familial (${res.children_count || 1} enfants / ${payments.length} cours)`;
    document.getElementById('rcptTeacher').textContent = '-';
    document.getElementById('rcptMonth').textContent = isAr ? 'أشهر متعددة' : 'Multi-périodes';

    const singleTable = document.getElementById('rcptSingleTable');
    const multiTable = document.getElementById('rcptMultiTable');
    const familyTable = document.getElementById('rcptFamilyTable');
    const familyBody = document.getElementById('rcptFamilyTableBody');
    const familyRemBox = document.getElementById('rcptFamilyRemainingBox');
    const familyRemVal = document.getElementById('rcptFamilyTotalRemaining');

    if (singleTable) singleTable.style.display = 'none';
    if (multiTable) multiTable.style.display = 'none';
    if (familyTable) {
      familyTable.style.display = 'table';
      if (familyBody) {
        familyBody.innerHTML = payments.map((p, idx) => {
          const net = Math.max(0, (parseFloat(p.base_amount) || 0) - (parseFloat(p.discount) || 0));
          const paid = parseFloat(p.paid_amount) || 0;
          const rem = parseFloat(p.remaining_amount) || 0;
          return `
            <tr>
              <td style="text-align: center;">${idx + 1}</td>
              <td>
                <strong>${this.escapeHtml(p.first_name || '')} ${this.escapeHtml(p.last_name || '')}</strong>
                <span style="font-size: 10px; color: var(--text-muted); display: block;">${this.escapeHtml(p.matricule || '')}</span>
              </td>
              <td>
                <strong>${this.escapeHtml(p.group_name)}</strong>
                <span style="font-size: 10px; color: var(--text-muted); display: block;">${this.escapeHtml(p.subject_name || '')} &bull; ${this.escapeHtml(p.teacher_name || '')}</span>
              </td>
              <td>${this.escapeHtml(p.month_period)}</td>
              <td style="text-align: right;">${net.toLocaleString('fr-FR')} DA</td>
              <td style="text-align: right;">${Number(p.discount || 0).toLocaleString('fr-FR')} DA</td>
              <td style="text-align: right; font-weight: 700; color: #10b981;">${paid.toLocaleString('fr-FR')} DA</td>
              <td style="text-align: right; color: ${rem > 0 ? '#ef4444' : 'var(--text-muted)'}; font-weight: ${rem > 0 ? '700' : 'normal'};">${rem.toLocaleString('fr-FR')} DA</td>
            </tr>
          `;
        }).join('');
      }
    }

    const methodLabels = {
      espece: isAr ? 'نقداً (Espèces)' : 'Espèces (Caisse)',
      baridimob: 'BaridiMob / CCP',
      cheque: isAr ? 'شيك (Chèque)' : 'Chèque bancaire'
    };
    document.getElementById('rcptMethod').textContent = methodLabels[res.payment_method] || res.payment_method;
    document.getElementById('rcptTotalPaid').textContent = `${Number(res.total_paid).toLocaleString('fr-FR')} DA`;

    const totalRemaining = parseFloat(res.total_remaining) || 0;
    if (familyRemBox && familyRemVal) {
      if (totalRemaining > 0) {
        familyRemVal.textContent = `${totalRemaining.toLocaleString('fr-FR')} DA`;
        familyRemBox.style.display = 'flex';
      } else {
        familyRemBox.style.display = 'none';
      }
    }

    document.getElementById('modalReceipt').classList.add('active');
  }

  // -------------------------------------------------------------
  // ECHEANCES & CAISSE
  // -------------------------------------------------------------
  async loadEcheances() {
    try {
      const res = await fetch('/api/echeances');
      const data = await res.json();
      if (!data.success) return;

      this.echeances = data.echeances || [];
      const searchInput = document.getElementById('searchEcheancesInput');
      if (searchInput && searchInput.value.trim()) {
        this.filterEcheances(searchInput.value);
      } else {
        this.renderEcheancesTable(this.echeances);
      }
    } catch (err) {
      console.error('Erreur loadEcheances:', err);
    }
  }

  filterEcheances(query = '') {
    const list = this.echeances || [];
    const term = (query || '').trim().toLowerCase();
    if (!term) {
      this.renderEcheancesTable(list);
      return;
    }

    const norm = (str) => (str || '').toLowerCase()
      .replace(/[أإآ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/ى/g, 'ي')
      .trim();

    const normTerm = norm(term);

    const filtered = list.filter(e => {
      const sName = norm(e.student_name);
      const pName = norm(e.parent_name);
      const gName = norm(e.group_name);
      const subj = norm(e.subject_name);
      const phone = (e.student_phone || '').toLowerCase();
      const pPhone = (e.parent_phone || '').toLowerCase();
      const mat = (e.matricule || '').toLowerCase();

      return sName.includes(normTerm) ||
             pName.includes(normTerm) ||
             gName.includes(normTerm) ||
             subj.includes(normTerm) ||
             phone.includes(normTerm) ||
             pPhone.includes(normTerm) ||
             mat.includes(normTerm);
    });

    this.renderEcheancesTable(filtered);
  }

  renderEcheancesTable(list) {
    const tbody = document.getElementById('echeancesTableBody');
    if (!tbody) return;

    const isAr = this.lang === 'ar';
    if (!list || list.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 30px;">${isAr ? 'لا توجد ديون أو مستحقات غير مسددة!' : 'Aucun impayé pour le moment !'}</td></tr>`;
      return;
    }

    tbody.innerHTML = list.map(u => {
      const parentHtml = u.parent_name
        ? `<div style="font-weight: 600; color: var(--text-heading); font-size: 13px; display: flex; align-items: center; gap: 6px;">
             <i class="fa-solid fa-people-roof" style="color: #8b5cf6; font-size: 12px;"></i>
             <span>${this.escapeHtml(u.parent_name)}</span>
             ${u.parent_discount_percent > 0 ? `<span class="badge" style="background: rgba(16, 185, 129, 0.15); color: #10b981; font-size: 11px; padding: 2px 6px; border-radius: 4px;">-${u.parent_discount_percent}%</span>` : ''}
           </div>
           ${u.parent_phone ? `<div style="font-size: 11.5px; color: var(--text-muted); margin-top: 2px;"><i class="fa-solid fa-phone" style="font-size: 10px;"></i> ${this.escapeHtml(u.parent_phone)}</div>` : ''}`
        : `<span style="color: var(--text-muted); font-size: 12px;">—</span>`;

      return `
        <tr>
          <td>
            <strong>${this.escapeHtml(u.student_name)}</strong>
            ${u.matricule ? `<div style="font-size: 11px; color: #60a5fa; font-family: monospace;">${this.escapeHtml(u.matricule)}</div>` : ''}
          </td>
          <td>${parentHtml}</td>
          <td>${this.escapeHtml(u.group_name)}</td>
          <td><span class="badge-pill" style="background: rgba(239, 68, 68, 0.15); color: #f87171;">${this.escapeHtml(u.subject_name || '')}</span></td>
          <td>${this.escapeHtml(u.student_phone || u.parent_phone || '—')}</td>
          <td><strong style="color: #ef4444; font-size: 14px;">${Number(u.amount_due).toLocaleString()} DA</strong></td>
          <td>
            <button class="btn-primary" style="padding: 6px 14px; font-size: 12px; background: linear-gradient(135deg, #10b981, #059669);" onclick="app.selectFastPayStudent(${u.student_id}); app.switchView('paiements');">
              ${isAr ? 'تسديد فوري' : 'Régulariser'}
            </button>
          </td>
        </tr>
      `;
    }).join('');
  }

  // -------------------------------------------------------------
  // CAISSE & TRÉSORERIE ENGINE
  // -------------------------------------------------------------
  async loadCaisse() {
    try {
      const res = await fetch('/api/caisse/summary');
      const data = await res.json();
      if (!data.success) return;

      document.getElementById('caisseTodayIn').textContent = `${Number(data.today.income).toLocaleString()} DA`;
      document.getElementById('caisseTodayOut').textContent = `${Number(data.today.expenses).toLocaleString()} DA`;
      document.getElementById('caisseNetBalance').textContent = `${Number(data.allTime.soldeNet).toLocaleString()} DA`;

      const monthInEl = document.getElementById('caisseMonthIn');
      if (monthInEl) monthInEl.textContent = `${Number(data.month.income).toLocaleString()} DA`;
      const monthOutEl = document.getElementById('caisseMonthOut');
      if (monthOutEl) monthOutEl.textContent = `${Number(data.month.expenses).toLocaleString()} DA`;
      const allTimeEl = document.getElementById('caisseAllTimeBalance');
      if (allTimeEl) allTimeEl.textContent = `${Number(data.month.balance).toLocaleString()} DA (ce mois)`;

      await this.loadCaisseMovements();
    } catch (err) {
      console.error('loadCaisse error:', err);
    }
  }

  async loadCaisseMovements() {
    try {
      const type = document.getElementById('caisseFilterType')?.value || 'all';
      const category = document.getElementById('caisseFilterCategory')?.value || 'all';
      const from = document.getElementById('caisseFilterFrom')?.value || '';
      const to = document.getElementById('caisseFilterTo')?.value || '';
      const search = document.getElementById('caisseFilterSearch')?.value || '';

      const query = new URLSearchParams({ type, category, from, to, search, limit: 100 });
      const res = await fetch(`/api/caisse/movements?${query.toString()}`);
      const data = await res.json();
      if (!data.success) return;

      this.currentCaisseMovements = data.movements || [];

      // Update Summary Bar
      const count = this.currentCaisseMovements.length;
      const totalIn = this.currentCaisseMovements.reduce((sum, m) => sum + (m.type === 'entree' ? Number(m.amount || 0) : 0), 0);
      const totalOut = this.currentCaisseMovements.reduce((sum, m) => sum + (m.type === 'sortie' ? Number(m.amount || 0) : 0), 0);
      const soldeNet = totalIn - totalOut;

      const countEl = document.getElementById('caisseFilteredCount');
      const inEl = document.getElementById('caisseFilteredIn');
      const outEl = document.getElementById('caisseFilteredOut');
      const netEl = document.getElementById('caisseFilteredNet');

      if (countEl) countEl.textContent = count;
      if (inEl) inEl.textContent = '+' + Number(totalIn).toLocaleString() + ' DA';
      if (outEl) outEl.textContent = '-' + Number(totalOut).toLocaleString() + ' DA';
      if (netEl) {
        netEl.textContent = (soldeNet >= 0 ? '+' : '') + Number(soldeNet).toLocaleString() + ' DA';
        netEl.style.color = soldeNet >= 0 ? '#10b981' : '#ef4444';
      }

      const tbody = document.getElementById('caisseTableBody');
      if (!tbody) return;

      if (data.movements.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: var(--text-muted); padding: 28px;">Aucun mouvement de caisse trouvé</td></tr>`;
        return;
      }

      tbody.innerHTML = data.movements.map(m => {
        const isEntree = m.type === 'entree';
        const badge = isEntree
          ? `<span class="caisse-badge badge-entree"><i class="fa-solid fa-arrow-down"></i> Entrée</span>`
          : `<span class="caisse-badge badge-sortie"><i class="fa-solid fa-arrow-up"></i> Sortie</span>`;
        const amountDisplay = isEntree
          ? `<strong style="color: #10b981;">+${Number(m.amount).toLocaleString()} DA</strong>`
          : `<strong style="color: #ef4444;">-${Number(m.amount).toLocaleString()} DA</strong>`;

        return `
          <tr>
            <td style="font-size: 12px; color: var(--text-muted); white-space: nowrap;">
              <strong>${m.movement_date || ''}</strong> ${m.movement_time ? `<br><small>${m.movement_time}</small>` : ''}
            </td>
            <td>${badge}</td>
            <td>
              <strong>${this.escapeHtml(m.title)}</strong>
              ${m.person_name ? `<div style="font-size: 11px; color: var(--text-muted);"><i class="fa-regular fa-user"></i> ${this.escapeHtml(m.person_name)}</div>` : ''}
            </td>
            <td>
              <span class="badge-pill" style="background: rgba(148, 163, 184, 0.12); color: var(--text-main); font-size: 11px;">
                ${this.escapeHtml(m.category)}
              </span>
            </td>
            <td style="font-family: monospace; font-size: 12px;">${this.escapeHtml(m.reference || '-')}</td>
            <td style="font-size: 12px; text-transform: capitalize;">${m.payment_method || 'Espèces'}</td>
            <td style="text-align: right;">${amountDisplay}</td>
            <td style="text-align: center;">
              <button class="btn-icon" style="color: #ef4444;" title="Supprimer le mouvement" onclick="app.deleteCaisseMovement(${m.id})">
                <i class="fa-solid fa-trash"></i>
              </button>
            </td>
          </tr>
        `;
      }).join('');
    } catch (err) {
      console.error('loadCaisseMovements error:', err);
    }
  }

  filterCaisse() {
    this.loadCaisseMovements();
  }

  resetCaisseFilters() {
    if (document.getElementById('caisseFilterType')) document.getElementById('caisseFilterType').value = 'all';
    if (document.getElementById('caisseFilterCategory')) document.getElementById('caisseFilterCategory').value = 'all';
    if (document.getElementById('caisseFilterFrom')) document.getElementById('caisseFilterFrom').value = '';
    if (document.getElementById('caisseFilterTo')) document.getElementById('caisseFilterTo').value = '';
    if (document.getElementById('caisseFilterSearch')) document.getElementById('caisseFilterSearch').value = '';
    this.loadCaisseMovements();
  }

  // -------------------------------------------------------------
  // EXPORT & DOWNLOAD CAISSE (SINGLE / MULTI-MONTH / RANGE / ALL)
  // -------------------------------------------------------------
  async loadCaisseMonths() {
    try {
      const res = await fetch('/api/caisse/months');
      const data = await res.json();
      if (data.success) {
        this.availableCaisseMonths = data.months || [];
      }
    } catch (err) {
      console.error('Failed to load caisse months:', err);
      this.availableCaisseMonths = [];
    }
  }

  async openExportCaisseModal() {
    this.exportCaisseMode = 'single';
    await this.loadCaisseMonths();

    const isAr = this.lang === 'ar';

    // Populate Category Filter
    const catSelect = document.getElementById('exportCaisseCategorySelect');
    if (catSelect) {
      const entrees = this.getCaisseCategories('entree') || [];
      const sorties = this.getCaisseCategories('sortie') || [];
      const allCats = [...new Set([...entrees, ...sorties, 'Paiement élève', 'Salaire enseignant', 'Loyer', 'Électricité', 'Fournitures', 'Maintenance', 'Autre'])];

      let html = `<option value="all">${isAr ? 'كل التصنيفات (Toutes)' : 'Toutes les catégories'}</option>`;
      allCats.forEach(c => {
        html += `<option value="${this.escapeHtml(c)}">${this.escapeHtml(c)}</option>`;
      });
      catSelect.innerHTML = html;
      catSelect.value = 'all';
    }

    const typeSelect = document.getElementById('exportCaisseTypeSelect');
    if (typeSelect) typeSelect.value = 'all';

    const methodSelect = document.getElementById('exportCaisseMethodSelect');
    if (methodSelect) methodSelect.value = 'all';

    const months = this.availableCaisseMonths || [];

    // Populate Single Month Select
    const singleSelect = document.getElementById('exportCaisseSingleMonthSelect');
    if (singleSelect) {
      if (months.length === 0) {
        const currentM = new Date().toISOString().slice(0, 7);
        singleSelect.innerHTML = `<option value="${currentM}">${currentM} (${isAr ? 'الشهر الحالي' : 'Mois en cours'})</option>`;
      } else {
        singleSelect.innerHTML = months.map(m =>
          `<option value="${m.month_period}">${m.month_period} — (${m.count} ${isAr ? 'حركة' : 'op.'} • +${Number(m.total_entrees || 0).toLocaleString()} DA / -${Number(m.total_sorties || 0).toLocaleString()} DA)</option>`
        ).join('');
      }
    }

    // Populate Multi-Months Checkboxes Grid
    const multiGrid = document.getElementById('exportCaisseMultiMonthsGrid');
    if (multiGrid) {
      if (months.length === 0) {
        multiGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 10px;">${isAr ? 'لا توجد حركات مسجلة بأشهر سابقة' : 'Aucun mouvement enregistré'}</div>`;
      } else {
        multiGrid.innerHTML = months.map((m, idx) => `
          <label class="month-checkbox-label">
            <input type="checkbox" class="export-caisse-month-chk" value="${m.month_period}" ${idx < 2 ? 'checked' : ''} onchange="app.updateExportCaissePreview()">
            <div class="month-checkbox-info">
              <span class="month-checkbox-name">${m.month_period}</span>
              <span class="month-checkbox-count">${m.count} ${isAr ? 'حركة' : 'op.'} • ${Number(m.solde_net || 0).toLocaleString()} DA</span>
            </div>
          </label>
        `).join('');
      }
    }

    // Populate Date Range Inputs
    const rangeFrom = document.getElementById('exportCaisseRangeFromDate');
    const rangeTo = document.getElementById('exportCaisseRangeToDate');
    const todayStr = new Date().toISOString().split('T')[0];
    const firstDayStr = todayStr.slice(0, 8) + '01';
    if (rangeFrom && !rangeFrom.value) rangeFrom.value = firstDayStr;
    if (rangeTo && !rangeTo.value) rangeTo.value = todayStr;

    this.setExportCaisseMode('single');
    document.getElementById('modalExportCaisse').classList.add('active');
  }

  setExportCaisseMode(mode) {
    this.exportCaisseMode = mode;
    ['Single', 'Multi', 'Range', 'All'].forEach(m => {
      const pill = document.getElementById(`pillCaisseMode${m}`);
      const sec = document.getElementById(`exportCaisseSection${m}`);
      const active = m.toLowerCase() === mode.toLowerCase();
      if (pill) pill.classList.toggle('active', active);
      if (sec) sec.style.display = active ? 'block' : 'none';
    });
    this.updateExportCaissePreview();
  }

  toggleAllExportCaisseMonths(checked) {
    document.querySelectorAll('.export-caisse-month-chk').forEach(chk => {
      chk.checked = checked;
    });
    this.updateExportCaissePreview();
  }

  async updateExportCaissePreview() {
    try {
      const params = new URLSearchParams();
      params.append('all', 'true');

      const mode = this.exportCaisseMode || 'single';
      if (mode === 'single') {
        const val = document.getElementById('exportCaisseSingleMonthSelect')?.value;
        if (val) params.append('month', val);
      } else if (mode === 'multi') {
        const checked = [...document.querySelectorAll('.export-caisse-month-chk:checked')].map(c => c.value);
        if (checked.length > 0) {
          params.append('months', checked.join(','));
        } else {
          this.cachedExportCaisse = [];
          this.renderExportCaissePreviewStats([]);
          return;
        }
      } else if (mode === 'range') {
        const from = document.getElementById('exportCaisseRangeFromDate')?.value;
        const to = document.getElementById('exportCaisseRangeToDate')?.value;
        if (from) params.append('from', from);
        if (to) params.append('to', to);
      } else if (mode === 'all') {
        // No date / month restriction
      }

      const type = document.getElementById('exportCaisseTypeSelect')?.value;
      if (type && type !== 'all') params.append('type', type);

      const cat = document.getElementById('exportCaisseCategorySelect')?.value;
      if (cat && cat !== 'all') params.append('category', cat);

      const mthd = document.getElementById('exportCaisseMethodSelect')?.value;
      if (mthd && mthd !== 'all') params.append('method', mthd);

      const res = await fetch(`/api/caisse/movements?${params.toString()}`);
      const data = await res.json();
      if (data.success) {
        this.cachedExportCaisse = data.movements || [];
        this.renderExportCaissePreviewStats(this.cachedExportCaisse);
      }
    } catch (err) {
      console.error('Failed to update caisse export preview:', err);
    }
  }

  renderExportCaissePreviewStats(list) {
    const countEl = document.getElementById('exportCaissePreviewCount');
    const inEl = document.getElementById('exportCaissePreviewIn');
    const outEl = document.getElementById('exportCaissePreviewOut');
    const netEl = document.getElementById('exportCaissePreviewNet');

    const totalIn = (list || []).reduce((sum, m) => sum + (m.type === 'entree' ? Number(m.amount || 0) : 0), 0);
    const totalOut = (list || []).reduce((sum, m) => sum + (m.type === 'sortie' ? Number(m.amount || 0) : 0), 0);
    const soldeNet = totalIn - totalOut;

    if (countEl) countEl.textContent = (list || []).length;
    if (inEl) inEl.textContent = '+' + Number(totalIn).toLocaleString() + ' DA';
    if (outEl) outEl.textContent = '-' + Number(totalOut).toLocaleString() + ' DA';
    if (netEl) {
      netEl.textContent = (soldeNet >= 0 ? '+' : '') + Number(soldeNet).toLocaleString() + ' DA';
      netEl.style.color = soldeNet >= 0 ? '#10b981' : '#ef4444';
    }
  }

  quickExportCaisseTable() {
    const list = this.currentCaisseMovements || [];
    if (list.length === 0) {
      alert(this.lang === 'ar' ? 'لا توجد حركات معروضة في الجدول حالياً لتصديرها.' : 'Aucun mouvement affiché dans le tableau à exporter.');
      return;
    }
    this.exportCaisseToExcel(list, 'vue_actuelle');
  }

  async executeExportCaisse(type = 'excel') {
    if (!this.cachedExportCaisse || this.cachedExportCaisse.length === 0) {
      await this.updateExportCaissePreview();
    }

    const list = this.cachedExportCaisse || [];
    if (list.length === 0) {
      alert(this.lang === 'ar' ? 'لا توجد حركات مسجلة لتصديرها وفق الاختيارات المحددة.' : 'Aucun mouvement trouvé pour les critères sélectionnés.');
      return;
    }

    // Determine label for period
    let periodLabel = '';
    const mode = this.exportCaisseMode || 'single';
    if (mode === 'single') {
      periodLabel = document.getElementById('exportCaisseSingleMonthSelect')?.value || 'mois';
    } else if (mode === 'multi') {
      const checked = [...document.querySelectorAll('.export-caisse-month-chk:checked')].map(c => c.value);
      periodLabel = checked.join('_');
    } else if (mode === 'range') {
      periodLabel = `${document.getElementById('exportCaisseRangeFromDate')?.value || ''}_au_${document.getElementById('exportCaisseRangeToDate')?.value || ''}`;
    } else {
      periodLabel = 'tout_le_journal';
    }

    if (type === 'excel') {
      this.exportCaisseToExcel(list, periodLabel);
    } else if (type === 'print') {
      this.printCaisseReport(list, periodLabel);
    }
  }

  exportCaisseToExcel(list, periodLabel = 'export') {
    const isAr = this.lang === 'ar';
    const headers = isAr ? [
      'المعرف', 'التاريخ', 'الوقت', 'نوع الحركة', 'البيان / الوصف',
      'التصنيف', 'المرجع / الوصل', 'طريقة الدفع', 'المعني / المستفيد',
      'المداخيل (+ دج)', 'المصاريف (- دج)', 'المسؤول', 'ملاحظات'
    ] : [
      'ID', 'Date', 'Heure', 'Flux', 'Désignation / Motif',
      'Catégorie', 'Référence', 'Mode de Paiement', 'Bénéficiaire / Personne',
      'Entrée (+ DA)', 'Sortie (- DA)', 'Responsable', 'Notes'
    ];

    const rows = list.map(m => {
      const isEntree = m.type === 'entree';
      const fluxText = isEntree ? (isAr ? 'مدخول (+)' : 'Entrée (+)') : (isAr ? 'مصروف (-)' : 'Sortie (-)');
      return [
        m.id,
        `"${m.movement_date || ''}"`,
        `"${m.movement_time || ''}"`,
        `"${fluxText}"`,
        `"${(m.title || '').replace(/"/g, '""')}"`,
        `"${(m.category || '').replace(/"/g, '""')}"`,
        `"${(m.reference || '').replace(/"/g, '""')}"`,
        `"${(m.payment_method || 'espece').toUpperCase()}"`,
        `"${(m.person_name || '').replace(/"/g, '""')}"`,
        isEntree ? Number(m.amount || 0) : 0,
        !isEntree ? Number(m.amount || 0) : 0,
        `"${(m.user_name || '').replace(/"/g, '""')}"`,
        `"${(m.notes || '').replace(/"/g, '""')}"`
      ];
    });

    // Total Row
    const totalIn = list.reduce((sum, m) => sum + (m.type === 'entree' ? Number(m.amount || 0) : 0), 0);
    const totalOut = list.reduce((sum, m) => sum + (m.type === 'sortie' ? Number(m.amount || 0) : 0), 0);
    const soldeNet = totalIn - totalOut;

    const totalRow = [
      isAr ? '"المجموع الإجمالي"' : '"TOTAL GÉNÉRAL"',
      '""', '""',
      `"${list.length} ${isAr ? 'حركة' : 'opérations'}"`,
      '""', '""', '""', '""', '""',
      totalIn,
      totalOut,
      `"${isAr ? 'الرصيد الصافي' : 'Solde Net'}: ${soldeNet} DA"`,
      '""'
    ];

    const csvContent = '\uFEFF' + [headers.join(';'), ...rows.map(r => r.join(';')), totalRow.join(';')].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const safePeriod = periodLabel.replace(/[^a-zA-Z0-9_\-]/g, '_');
    a.download = `caisse_edumind_${safePeriod}_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    this.playChime('success');
  }

  printCaisseReport(list, periodLabel) {
    const isAr = this.lang === 'ar';
    const totalIn = list.reduce((sum, m) => sum + (m.type === 'entree' ? Number(m.amount || 0) : 0), 0);
    const totalOut = list.reduce((sum, m) => sum + (m.type === 'sortie' ? Number(m.amount || 0) : 0), 0);
    const soldeNet = totalIn - totalOut;

    const printWin = window.open('', '_blank');
    if (!printWin) {
      alert(isAr ? 'يرجى السماح بالنوافذ المنبثقة (Popups) لطباعة التقرير.' : 'Veuillez autoriser les fenêtres contextuelles (Popups) pour imprimer le rapport.');
      return;
    }

    const title = isAr ? 'تقرير حركة الخزينة والصندوق' : 'Journal des Mouvements de Caisse & Trésorerie';
    const html = `
      <!DOCTYPE html>
      <html lang="${this.lang}" dir="${isAr ? 'rtl' : 'ltr'}">
      <head>
        <meta charset="UTF-8">
        <title>${title} — EDUMIND</title>
        <style>
          html, body { background-color: #ffffff !important; color: #1e293b !important; }
          body { font-family: system-ui, -apple-system, sans-serif; margin: 20px; color: #1e293b; font-size: 12px; background: #ffffff !important; }
          .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #d97706; padding-bottom: 12px; margin-bottom: 15px; }
          .school-title { font-size: 20px; font-weight: 800; color: #b45309; margin: 0; }
          .kpi-boxes { display: flex; gap: 12px; margin-bottom: 15px; }
          .kpi-box { flex: 1; padding: 10px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; text-align: center; }
          .kpi-val { font-size: 16px; font-weight: 700; margin-top: 4px; }
          table { width: 100%; border-collapse: collapse; margin-top: 10px; background-color: #ffffff !important; }
          th, td { border: 1px solid #cbd5e1; padding: 6px 8px; text-align: ${isAr ? 'right' : 'left'}; color: #1e293b; }
          th { background-color: #f1f5f9; font-weight: 700; font-size: 11px; text-transform: uppercase; color: #334155; }
          tbody tr { background-color: #ffffff !important; }
          tbody tr:nth-child(even) { background-color: #f8fafc !important; }
          .inflow { font-weight: 700; color: #047857; text-align: right; }
          .outflow { font-weight: 700; color: #b91c1c; text-align: right; }
          .badge-flux { display: inline-block; padding: 2px 6px; border-radius: 4px; font-size: 10px; font-weight: 700; }
          .badge-entree { background: #d1fae5; color: #065f46; }
          .badge-sortie { background: #fee2e2; color: #991b1b; }
          .footer { margin-top: 30px; display: flex; justify-content: space-between; padding-top: 10px; }
          .signature-box { width: 220px; text-align: center; padding-top: 40px; border-top: 1px dashed #94a3b8; font-weight: 600; color: #475569; }
          @media print {
            body { margin: 10mm; font-size: 11px; }
            button { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <h1 class="school-title">EDUMIND ACADEMY</h1>
            <p style="margin: 3px 0; color: #64748b;">${isAr ? 'مؤسسة التعليم والدروس الخصوصية' : 'Système de Gestion Scolaire & Cours de Soutien'}</p>
            <p style="margin: 0; color: #94a3b8; font-size: 11px;">Tél: 0552225150 • Algérie</p>
          </div>
          <div style="text-align: ${isAr ? 'left' : 'right'};">
            <h2 style="margin: 0; font-size: 16px; color: #1e293b;">${title}</h2>
            <p style="margin: 3px 0; font-weight: 600; color: #d97706;">${isAr ? 'الفترة' : 'Période'} : ${periodLabel}</p>
            <p style="margin: 0; color: #94a3b8; font-size: 11px;">${new Date().toLocaleDateString(this.lang === 'ar' ? 'ar-DZ' : 'fr-FR')} ${new Date().toLocaleTimeString()}</p>
          </div>
        </div>

        <div class="kpi-boxes">
          <div class="kpi-box">
            <div style="color: #64748b; font-size: 11px;">${isAr ? 'عدد العمليات' : 'Total Opérations'}</div>
            <div class="kpi-val" style="color: #1e293b;">${list.length}</div>
          </div>
          <div class="kpi-box">
            <div style="color: #64748b; font-size: 11px;">${isAr ? 'إجمالي المداخيل (+)' : 'Total Entrées (+)'}</div>
            <div class="kpi-val" style="color: #047857;">+${Number(totalIn).toLocaleString()} DA</div>
          </div>
          <div class="kpi-box">
            <div style="color: #64748b; font-size: 11px;">${isAr ? 'إجمالي المصاريف (-)' : 'Total Sorties (-)'}</div>
            <div class="kpi-val" style="color: #b91c1c;">-${Number(totalOut).toLocaleString()} DA</div>
          </div>
          <div class="kpi-box">
            <div style="color: #64748b; font-size: 11px;">${isAr ? 'الرصيد الصافي' : 'Solde Net'}</div>
            <div class="kpi-val" style="color: ${soldeNet >= 0 ? '#047857' : '#b91c1c'};">${soldeNet >= 0 ? '+' : ''}${Number(soldeNet).toLocaleString()} DA</div>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th style="width: 85px;">${isAr ? 'التاريخ' : 'Date'}</th>
              <th style="width: 70px;">${isAr ? 'النوع' : 'Flux'}</th>
              <th>${isAr ? 'البيان / الوصف' : 'Désignation / Motif'}</th>
              <th>${isAr ? 'التصنيف' : 'Catégorie'}</th>
              <th style="width: 75px;">${isAr ? 'المرجع' : 'Réf'}</th>
              <th style="width: 75px;">${isAr ? 'الوسيلة' : 'Mode'}</th>
              <th style="text-align: right; width: 100px;">${isAr ? 'المبلغ' : 'Montant'}</th>
            </tr>
          </thead>
          <tbody>
            ${list.map(m => {
      const isEntree = m.type === 'entree';
      return `
                <tr>
                  <td>
                    <strong>${m.movement_date || ''}</strong>
                    ${m.movement_time ? `<br><small style="color:#64748b;">${m.movement_time.slice(0, 5)}</small>` : ''}
                  </td>
                  <td>
                    <span class="badge-flux ${isEntree ? 'badge-entree' : 'badge-sortie'}">
                      ${isEntree ? (isAr ? 'مدخول' : 'Entrée') : (isAr ? 'مصروف' : 'Sortie')}
                    </span>
                  </td>
                  <td>
                    <strong>${this.escapeHtml(m.title)}</strong>
                    ${m.person_name ? `<br><small style="color: #64748b;">${this.escapeHtml(m.person_name)}</small>` : ''}
                  </td>
                  <td>${this.escapeHtml(m.category || '')}</td>
                  <td style="font-family: monospace; font-size: 11px;">${this.escapeHtml(m.reference || '-')}</td>
                  <td style="text-transform: capitalize;">${m.payment_method || 'Espèces'}</td>
                  <td class="${isEntree ? 'inflow' : 'outflow'}">
                    ${isEntree ? '+' : '-'}${Number(m.amount || 0).toLocaleString()} DA
                  </td>
                </tr>
              `;
    }).join('')}
          </tbody>
          <tfoot>
            <tr style="background: #e2e8f0; font-weight: 700;">
              <td colspan="4" style="text-align: center;">${isAr ? 'المجموع الإجمالي' : 'TOTAL GÉNÉRAL'}</td>
              <td colspan="2" style="font-size: 11px; text-align: center;">
                <span style="color: #047857;">+${Number(totalIn).toLocaleString()}</span> / <span style="color: #b91c1c;">-${Number(totalOut).toLocaleString()}</span>
              </td>
              <td style="text-align: right; font-size: 13px; color: ${soldeNet >= 0 ? '#047857' : '#b91c1c'}; font-weight: 800;">
                ${soldeNet >= 0 ? '+' : ''}${Number(soldeNet).toLocaleString()} DA
              </td>
            </tr>
          </tfoot>
        </table>

        <div class="footer">
          <div class="signature-box">${isAr ? 'توقيع أمين الصندوق' : 'Signature Caissier / Secrétaire'}</div>
          <div class="signature-box">${isAr ? 'ختم وتوقيع الإدارة' : 'Cachet & Signature Direction'}</div>
        </div>

        <script>
          window.onload = function() {
            setTimeout(function() { window.print(); }, 400);
          };
        </script>
      </body>
      </html>
    `;

    printWin.document.open();
    printWin.document.write(html);
    printWin.document.close();
  }

  openModalCaisseMovement(type = 'sortie') {
    this.setCaisseModalType(type);
    document.getElementById('caisseMovTitle').value = '';
    document.getElementById('caisseMovAmount').value = '';
    document.getElementById('caisseMovRef').value = '';
    document.getElementById('caisseMovDate').value = new Date().toISOString().split('T')[0];
    document.getElementById('modalCaisseMovement').classList.add('active');
  }

  setCaisseModalType(type) {
    document.getElementById('caisseMovType').value = type;
    const btnIn = document.getElementById('btnCaisseTypeEntree');
    const btnOut = document.getElementById('btnCaisseTypeSortie');
    const title = document.getElementById('caisseModalTitle');
    const catSelect = document.getElementById('caisseMovCategory');

    if (type === 'entree') {
      title.textContent = "Nouvelle Entrée de Caisse";
      btnIn.className = "btn-primary";
      btnIn.style = "flex: 1; background: #10b981; border-color: #10b981;";
      btnOut.className = "btn-secondary";
      btnOut.style = "flex: 1; border-color: #ef4444; color: #ef4444;";
    } else {
      title.textContent = "Nouvelle Sortie (Dépense de Caisse)";
      btnOut.className = "btn-primary";
      btnOut.style = "flex: 1; background: #ef4444; border-color: #ef4444;";
      btnIn.className = "btn-secondary";
      btnIn.style = "flex: 1; border-color: #10b981; color: #10b981;";
    }

    const categories = this.getCaisseCategories(type);
    catSelect.innerHTML = categories.map(cat => `<option value="${cat}">${cat}</option>`).join('');
  }

  async saveCaisseMovement() {
    const isAr = this.lang === 'ar';
    try {
      const type = document.getElementById('caisseMovType')?.value || 'sortie';
      const title = document.getElementById('caisseMovTitle')?.value?.trim();
      const category = document.getElementById('caisseMovCategory')?.value;
      const amount = parseFloat(document.getElementById('caisseMovAmount')?.value);
      const payment_method = document.getElementById('caisseMovMethod')?.value || 'espece';
      const movement_date = document.getElementById('caisseMovDate')?.value || '';
      const reference = document.getElementById('caisseMovRef')?.value?.trim() || '';

      if (!title) {
        this.showToast(isAr ? 'يرجى إدخال بيان أو وصف العملية' : 'Veuillez saisir le motif du mouvement', 'warning');
        return;
      }
      if (!amount || amount <= 0) {
        this.showToast(isAr ? 'يرجى إدخال مبلغ صحيح أكبر من الصفر' : 'Veuillez saisir un montant valide supérieur à 0', 'warning');
        return;
      }

      const res = await fetch('/api/caisse/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, title, category, amount, payment_method, movement_date, reference })
      });
      const data = await res.json();
      if (!data.success) {
        this.showToast(data.error || (isAr ? 'حدث خطأ أثناء الحفظ' : 'Erreur lors de l’enregistrement'), 'error');
        return;
      }
      this.closeModals();
      const form = document.getElementById('caisseMovementForm');
      if (form) form.reset();

      // Reset filters so the newly added movement is immediately visible
      const fType = document.getElementById('caisseFilterType');
      if (fType) fType.value = 'all';
      const fCat = document.getElementById('caisseFilterCategory');
      if (fCat) fCat.value = 'all';
      const fSearch = document.getElementById('caisseFilterSearch');
      if (fSearch) fSearch.value = '';

      this.playChime('success');
      this.showToast(isAr ? 'تم تسجيل حركة الصندوق بنجاح!' : 'Mouvement de caisse enregistré avec succès !', 'success');
      await this.loadCaisse();
      if (this.loadDashboardData) await this.loadDashboardData();
    } catch (e) {
      console.error(e);
      this.showToast(isAr ? 'خطأ في الاتصال بالخادم' : 'Erreur réseau ou serveur', 'error');
    }
  }

  async deleteCaisseMovement(id) {
    const isAr = this.lang === 'ar';
    if (!confirm(isAr ? 'هل أنت متأكد من رغبتك في حذف حركة الصندوق هذه؟' : 'Êtes-vous sûr de vouloir supprimer ce mouvement de caisse ?')) return;
    try {
      const res = await fetch(`/api/caisse/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        this.showToast(isAr ? 'تم حذف حركة الصندوق' : 'Mouvement supprimé', 'info');
        await this.loadCaisse();
        if (this.loadDashboardData) await this.loadDashboardData();
      }
    } catch (e) {
      console.error(e);
      this.showToast(isAr ? 'خطأ في الاتصال بالخادم' : 'Erreur réseau ou serveur', 'error');
    }
  }

  openModalExpense() {
    this.openModalCaisseMovement('sortie');
  }

  async saveExpense() {
    const isAr = this.lang === 'ar';
    try {
      const title = document.getElementById('expenseTitle')?.value?.trim() || (isAr ? 'مصروف عام' : 'Dépense générale');
      const category = document.getElementById('expenseCategory')?.value || (isAr ? 'مصاريف أخرى' : 'Autre dépense');
      const amount = parseFloat(document.getElementById('expenseAmount')?.value);

      if (!amount || amount <= 0) {
        this.showToast(isAr ? 'يرجى إدخال مبلغ صحيح' : 'Veuillez saisir un montant valide', 'warning');
        return;
      }

      const res = await fetch('/api/caisse/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'sortie',
          title,
          category,
          amount,
          payment_method: 'espece',
          movement_date: new Date().toISOString().split('T')[0]
        })
      });
      const data = await res.json();
      if (!data.success) {
        this.showToast(data.error || (isAr ? 'حدث خطأ أثناء الحفظ' : 'Erreur lors de l’enregistrement'), 'error');
        return;
      }
      this.closeModals();
      this.playChime('success');
      this.showToast(isAr ? 'تم تسجيل المصروف بنجاح!' : 'Dépense enregistrée avec succès !', 'success');
      await this.loadCaisse();
      if (this.loadDashboardData) await this.loadDashboardData();
    } catch (e) {
      console.error(e);
      this.showToast(isAr ? 'خطأ في الاتصال بالخادم' : 'Erreur réseau ou serveur', 'error');
    }
  }

  // -------------------------------------------------------------
  // TEACHERS (CORPS ENSEIGNANT) - GESTION ADMINISTRATIVE & PÉDAGOGIQUE
  // -------------------------------------------------------------
  async loadTeachers() {
    const tbody = document.getElementById('teachersTableBody');
    const isAr = this.lang === 'ar';
    try {
      const res = await fetch(`/api/teachers?_t=${Date.now()}`);
      const data = await res.json();
      if (!data.success) {
        if (tbody && (!this.teachers || this.teachers.length === 0)) {
          tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: #ef4444; padding: 25px;">
            <i class="fa-solid fa-triangle-exclamation" style="font-size: 24px; margin-bottom: 8px; display: block;"></i>
            ${this.escapeHtml(data.error || (isAr ? 'فشل تحميل بيانات الأساتذة' : 'Erreur lors du chargement des enseignants'))}
          </td></tr>`;
        }
        return;
      }
      this.teachers = data.teachers || [];

      const searchInput = document.getElementById('searchTeacherInput');
      if (searchInput && searchInput.value.trim()) {
        this.filterTeachers(searchInput.value);
      } else {
        this.renderTeachersTable(this.teachers);
      }
    } catch (err) {
      console.error('Error loading teachers:', err);
      if (tbody && (!this.teachers || this.teachers.length === 0)) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: #ef4444; padding: 25px;">
          <i class="fa-solid fa-triangle-exclamation" style="font-size: 24px; margin-bottom: 8px; display: block;"></i>
          ${isAr ? 'خطأ في الاتصال بقاعدة البيانات أو الخادم' : 'Erreur de connexion au serveur'}
        </td></tr>`;
      }
    }
  }

  filterTeachers(query = '') {
    const list = this.teachers || [];
    const term = (query || '').trim().toLowerCase();
    if (!term) {
      this.renderTeachersTable(list);
      return;
    }

    const norm = (str) => (str || '').toLowerCase()
      .replace(/[أإآ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/ى/g, 'ي')
      .trim();

    const normTerm = norm(term);

    const gradeLabels = {
      prof_titulaire: 'أستاذ مرسم titulaire',
      prof_principal: 'أستاذ رئيسي principal',
      prof_formateur: 'أستاذ مكون formateur',
      prof_contractuel: 'أستاذ متعاقد contractuel',
      prof_stagiaire: 'أستاذ متربص stagiaire',
      prof_suppleant: 'أستاذ مستخلف suppleant vacataire'
    };

    const filtered = list.filter(t => {
      const fn = norm(t.first_name);
      const ln = norm(t.last_name);
      const full1 = `${fn} ${ln}`;
      const full2 = `${ln} ${fn}`;
      const mat = (t.matricule || '').toLowerCase();
      const phone = (t.phone || '').toLowerCase();
      const email = (t.email || '').toLowerCase();
      const subj = norm(t.subject_name);
      const grText = norm(gradeLabels[t.grade] || t.grade || '');
      const grp = norm(t.assigned_groups || '');

      return full1.includes(normTerm) || full2.includes(normTerm) || mat.includes(normTerm) || phone.includes(normTerm) || email.includes(normTerm) || subj.includes(normTerm) || grText.includes(normTerm) || grp.includes(normTerm);
    });

    this.renderTeachersTable(filtered);
  }

  renderTeachersTable(list) {
    const tbody = document.getElementById('teachersTableBody');
    if (!tbody) return;

    const isAr = this.lang === 'ar';

    if (!list || list.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: var(--text-muted); padding: 35px;">
        <i class="fa-solid fa-chalkboard-user" style="font-size: 28px; margin-bottom: 8px; opacity: 0.4; display: block;"></i>
        ${isAr ? 'لم يتم العثور على أي أستاذ مطابق' : 'Aucun enseignant trouvé'}
      </td></tr>`;
      return;
    }

    const gradeLabels = {
      prof_titulaire: isAr ? 'أستاذ مرسم' : 'Prof. Titulaire',
      prof_principal: isAr ? 'أستاذ رئيسي' : 'Prof. Principal',
      prof_formateur: isAr ? 'أستاذ مكون' : 'Prof. Formateur',
      prof_contractuel: isAr ? 'أستاذ متعاقد' : 'Contractuel',
      prof_stagiaire: isAr ? 'أستاذ متربص' : 'Stagiaire',
      prof_suppleant: isAr ? 'أستاذ مستخلف' : 'Suppléant'
    };

    try {
      tbody.innerHTML = list.map(t => {
        const fullName = `${this.escapeHtml(t.first_name || '')} ${this.escapeHtml(t.last_name || '')}`.trim();
        const gKey = t.grade || 'prof_titulaire';
        const gLabel = gradeLabels[gKey] || (isAr ? 'أستاذ تعليم' : 'Enseignant');
        const assignedClasses = t.assigned_groups
          ? `<span class="badge-pill" style="background: rgba(16, 185, 129, 0.12); color: #047857; font-weight: 600; font-size: 11.5px;" title="${this.escapeHtml(t.assigned_groups)}">
              <i class="fa-solid fa-users-rectangle"></i> ${this.escapeHtml(t.assigned_groups)}
            </span>`
          : `<span style="color: var(--text-muted); font-size: 11.5px;">${isAr ? 'غير مسند' : 'Aucune classe'}</span>`;

        return `
          <tr>
            <td><strong style="color: #f97316; font-family: monospace;">${this.escapeHtml(t.matricule || '-')}</strong></td>
            <td><strong>${fullName || '-'}</strong></td>
            <td>${this.escapeHtml(t.subject_name || '-')}</td>
            <td>
              <span class="badge-pill" style="background: rgba(59, 130, 246, 0.12); color: #2563eb; font-weight: 600; font-size: 11.5px;">
                ${gLabel}
              </span>
            </td>
            <td>${this.escapeHtml(t.phone || '-')}</td>
            <td>${t.email ? `<span style="font-size: 12px; color: var(--text-muted);">${this.escapeHtml(t.email)}</span>` : '<span style="color: var(--text-muted);">-</span>'}</td>
            <td>${assignedClasses}</td>
            <td>
              <div style="display: flex; gap: 8px; align-items: center;">
                <button class="btn-action-badge" title="${isAr ? 'بطاقة الأستاذ' : 'Badge Enseignant'}" onclick="app.showTeacherCard(${t.id})">
                  <i class="fa-solid fa-id-badge"></i>
                </button>
                <button class="btn-icon" title="${isAr ? 'تعديل' : 'Modifier'}" onclick="app.editTeacher(${t.id})">
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="btn-icon" style="color: #ef4444;" title="${isAr ? 'حذف' : 'Supprimer'}" onclick="app.deleteTeacher(${t.id})">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </td>
          </tr>
        `;
      }).join('');
    } catch (renderErr) {
      console.error('Error rendering teachers table:', renderErr);
      tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: #ef4444; padding: 25px;">
        <i class="fa-solid fa-triangle-exclamation" style="font-size: 24px; margin-bottom: 8px; display: block;"></i>
        ${isAr ? 'حدث خطأ أثناء عرض بيانات الأساتذة' : 'Erreur lors de l’affichage des enseignants'}
      </td></tr>`;
    }
  }

  onTeacherRemunTypeChange() {
    // Dynamic styling when selecting mode
  }

  async openModalTeacherPayout(teacherId) {
    this.activePayoutTeacherId = teacherId;
    const monthFilter = document.getElementById('filterTeacherMonth');
    const period = monthFilter?.value || new Date().toISOString().slice(0, 7);
    document.getElementById('payoutPeriod').value = period;
    document.getElementById('payoutTeacherId').value = teacherId;
    document.getElementById('modalTeacherPayout').classList.add('active');
    await this.refreshTeacherPayoutData();
  }

  async refreshTeacherPayoutData() {
    const teacherId = this.activePayoutTeacherId;
    if (!teacherId) return;

    const period = document.getElementById('payoutPeriod').value || new Date().toISOString().slice(0, 7);
    const loading = document.getElementById('teacherPayoutLoading');

    try {
      loading.style.display = 'block';
      const res = await fetch(`/api/teachers/${teacherId}/earnings?month=${period}`);
      const data = await res.json();
      loading.style.display = 'none';
      if (!data.success) return;

      this.currentPayoutEarnings = data;

      document.getElementById('payoutTeacherName').textContent = `${data.teacher.first_name} ${data.teacher.last_name}`;
      document.getElementById('payoutTeacherMeta').textContent = `Matricule: ${data.teacher.matricule} · ${data.groupsData.length} groupe(s) actif(s)`;

      document.getElementById('payoutTotalStudents').textContent = data.totalStudents;
      document.getElementById('payoutTotalSessions').textContent = `${data.sessionsPerMonth} (${data.hoursPerMonth}h)`;
      document.getElementById('payoutTotalCollected').textContent = `${Number(data.totalCollected).toLocaleString()} DA`;

      // Update Financial Summary KPIs
      const isAr = this.lang === 'ar';
      const activeGross = data.activeGross || 0;
      const alreadyPaid = data.alreadyPaid || 0;
      const activeRemaining = data.activeRemaining || 0;

      document.getElementById('payoutSummaryGross').textContent = `${Number(activeGross).toLocaleString()} DA`;
      document.getElementById('payoutSummaryPaid').textContent = `${Number(alreadyPaid).toLocaleString()} DA`;
      document.getElementById('payoutSummaryRemaining').textContent = `${Number(activeRemaining).toLocaleString()} DA`;

      // Update Status Alert Banner
      const banner = document.getElementById('payoutStatusBanner');
      const btnSubmit = document.getElementById('btnSubmitPayout');
      const btnSubmitText = document.getElementById('btnSubmitPayoutText');

      if (banner) {
        banner.style.display = 'block';
        if (activeRemaining === 0 && alreadyPaid > 0) {
          banner.style.background = 'rgba(16, 185, 129, 0.12)';
          banner.style.border = '1.5px solid #10b981';
          banner.style.color = '#065f46';
          banner.style.borderRadius = '8px';
          banner.style.padding = '10px 14px';
          banner.style.fontSize = '13px';
          banner.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #10b981; font-size: 16px; margin-right: 6px;"></i>
            <strong>${isAr ? 'مستحقات هذا الأستاذ مسددة بالكامل لهذا الشهر' : 'Honoraires entièrement soldés pour cette période'}</strong> (0 DA restant).
            <div style="font-size: 11.5px; margin-top: 3px; color: #047857;">${isAr ? 'تم صرف كامل المستحقات. يمكنك تسجيل مكافأة إضافية أو مراجعة تفاصيل الوصل أدناه.' : 'Le compte de l’enseignant est à jour. Vous pouvez toujours verser une prime ou consulter les reçus ci-dessous.'}</div>`;
          if (btnSubmitText) btnSubmitText.textContent = isAr ? 'صرف مكافأة / مبلغ إضافي' : 'Verser une prime / Extra';
          if (btnSubmit) btnSubmit.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
        } else if (alreadyPaid > 0 && activeRemaining > 0) {
          banner.style.background = 'rgba(245, 158, 11, 0.12)';
          banner.style.border = '1.5px solid #f59e0b';
          banner.style.color = '#92400e';
          banner.style.borderRadius = '8px';
          banner.style.padding = '10px 14px';
          banner.style.fontSize = '13px';
          banner.innerHTML = `<i class="fa-solid fa-triangle-exclamation" style="color: #f59e0b; font-size: 16px; margin-right: 6px;"></i>
            <strong>${isAr ? 'تسديد جزئي سابق' : 'Règlement partiel en cours'} :</strong>
            ${Number(alreadyPaid).toLocaleString()} DA ${isAr ? 'مدفوعة' : 'déjà réglés'}.
            ${isAr ? 'المبلغ المتبقي للصرف:' : 'Reste à régler:'} <strong>${Number(activeRemaining).toLocaleString()} DA</strong>.`;
          if (btnSubmitText) btnSubmitText.textContent = isAr ? `تسديد الباقي (${Number(activeRemaining).toLocaleString()} دج)` : `Solder le reste (${Number(activeRemaining).toLocaleString()} DA)`;
          if (btnSubmit) btnSubmit.style.background = 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)';
        } else {
          banner.style.background = 'rgba(59, 130, 246, 0.08)';
          banner.style.border = '1.5px solid #93c5fd';
          banner.style.color = '#1e40af';
          banner.style.borderRadius = '8px';
          banner.style.padding = '10px 14px';
          banner.style.fontSize = '13px';
          banner.innerHTML = `<i class="fa-solid fa-circle-info" style="color: #3b82f6; font-size: 16px; margin-right: 6px;"></i>
            ${isAr ? 'إجمالي المستحقات الواجب تسديدها:' : 'Total net calculé pour ce mois:'} <strong>${Number(activeGross).toLocaleString()} DA</strong>.`;
          if (btnSubmitText) btnSubmitText.textContent = isAr ? 'تأكيد وصرف المستحقات' : 'Valider & Décaisser';
          if (btnSubmit) btnSubmit.style.background = 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)';
        }
      }

      // Render 8 mode cards
      const modesGrid = document.getElementById('payoutModesGrid');
      const curMode = data.activeModeKey || data.teacher.remuneration_type || 'percent';
      this.selectedPayoutMode = curMode;

      modesGrid.innerHTML = Object.entries(data.modes).map(([key, info]) => {
        const isActive = key === curMode;
        const remainingDA = info.remaining || 0;
        const grossDA = info.gross_amount || 0;
        return `
          <div class="payout-mode-card ${isActive ? 'active' : ''}" id="payoutModeCard_${key}" onclick="app.selectPayoutMode('${key}')" style="cursor: pointer;">
            <div>
              <div class="payout-mode-title">${info.label}</div>
              <div class="payout-mode-desc">Taux: <strong>${info.rate} ${info.unit}</strong></div>
              ${info.already_paid > 0 ? `<div style="font-size: 10px; color: #059669; margin-top: 2px;"><i class="fa-solid fa-check"></i> Déjà payé: ${Number(info.already_paid).toLocaleString()} DA</div>` : ''}
            </div>
            <div style="text-align: right;">
              <div class="payout-mode-val" style="font-size: 14px;">${Number(grossDA).toLocaleString()} DA</div>
              <div style="font-size: 11px; font-weight: 700; color: ${remainingDA === 0 ? '#10b981' : '#ea580c'};">
                ${remainingDA === 0 ? (isAr ? 'مسدد (0 دج)' : 'Soldé (0 DA)') : `${isAr ? 'باقي:' : 'Reste:'} ${Number(remainingDA).toLocaleString()} DA`}
              </div>
            </div>
          </div>
        `;
      }).join('');

      this.selectPayoutMode(curMode);

      // Render Period Existing Payouts List
      const periodPayouts = data.periodPayouts || [];
      const historyBody = document.getElementById('payoutPeriodHistoryBody');
      const historyCount = document.getElementById('payoutPeriodHistoryCount');
      if (historyCount) {
        historyCount.textContent = `${periodPayouts.length} ${isAr ? 'دفعات' : 'versement(s)'}`;
      }

      if (historyBody) {
        if (periodPayouts.length === 0) {
          historyBody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 14px;">
            ${isAr ? 'لا يوجد أي تسديد مسجل لهذا الشهر حتى الآن.' : 'Aucun versement enregistré pour cette période pour le moment.'}
          </td></tr>`;
        } else {
          historyBody.innerHTML = periodPayouts.map(p => {
            const dt = p.payout_date ? new Date(p.payout_date).toLocaleString('fr-FR') : '-';
            const safePayload = encodeURIComponent(JSON.stringify(p));
            return `
              <tr>
                <td><strong>${dt}</strong></td>
                <td><strong style="color: #059669;">${Number(p.paid_amount).toLocaleString()} DA</strong></td>
                <td><span class="badge-pill" style="font-size: 10.5px;">${p.remuneration_mode || '-'}</span></td>
                <td>${p.payment_method || 'espece'}</td>
                <td>
                  <div style="display: flex; gap: 6px; align-items: center;">
                    <button type="button" class="btn-icon" title="${isAr ? 'طباعة الوصل' : 'Imprimer le reçu'}" onclick="app.openBulletinPaieFromData('${safePayload}')">
                      <i class="fa-solid fa-print"></i>
                    </button>
                    <button type="button" class="btn-icon" style="color: #ef4444;" title="${isAr ? 'إلغاء هذا الدفع وإرجاع المبلغ للصندوق' : 'Annuler ce versement et restaurer la caisse'}" onclick="app.cancelTeacherPayout(${p.id})">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            `;
          }).join('');
        }
      }

    } catch (err) {
      loading.style.display = 'none';
      console.error(err);
    }
  }

  selectPayoutMode(modeKey) {
    if (!this.currentPayoutEarnings?.modes?.[modeKey]) return;
    this.selectedPayoutMode = modeKey;
    const info = this.currentPayoutEarnings.modes[modeKey];
    const isAr = this.lang === 'ar';

    document.querySelectorAll('.payout-mode-card').forEach(card => card.classList.remove('active'));
    document.getElementById(`payoutModeCard_${modeKey}`)?.classList.add('active');

    // Display gross and remaining
    document.getElementById('payoutCalculatedAmountBadge').textContent = `${Number(info.gross_amount || 0).toLocaleString()} DA`;
    document.getElementById('payoutRemainingAmountBadge').textContent = `${Number(info.remaining || 0).toLocaleString()} DA`;

    // Amount to pay defaults to remaining balance
    const amountInput = document.getElementById('payoutAmountPaid');
    if (amountInput) {
      amountInput.value = info.remaining > 0 ? info.remaining : 0;
    }

    // Update financial KPI recap with selected mode
    document.getElementById('payoutSummaryGross').textContent = `${Number(info.gross_amount || 0).toLocaleString()} DA`;
    document.getElementById('payoutSummaryRemaining').textContent = `${Number(info.remaining || 0).toLocaleString()} DA`;
  }

  async submitTeacherPayout() {
    try {
      const teacherId = this.activePayoutTeacherId;
      const period = document.getElementById('payoutPeriod').value;
      const paid_amount = document.getElementById('payoutAmountPaid').value;
      const payment_method = document.getElementById('payoutPaymentMethod').value;
      const notes = document.getElementById('payoutNotes').value;

      const modeInfo = this.currentPayoutEarnings?.modes?.[this.selectedPayoutMode] || {};

      const payload = {
        teacher_id: teacherId,
        period,
        remuneration_mode: this.selectedPayoutMode,
        base_calculation: modeInfo.base || 0,
        rate_value: modeInfo.rate || 0,
        students_count: this.currentPayoutEarnings?.totalStudents || 0,
        sessions_count: this.currentPayoutEarnings?.sessionsPerMonth || 0,
        hours_count: this.currentPayoutEarnings?.hoursPerMonth || 0,
        total_collected: this.currentPayoutEarnings?.totalCollected || 0,
        teacher_share_percent: modeInfo.unit === '%' ? modeInfo.rate : 0,
        gross_amount: modeInfo.gross_amount || paid_amount,
        paid_amount,
        payment_method,
        notes
      };

      const res = await fetch('/api/teachers/payout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!data.success) {
        alert(data.error || 'Erreur lors du règlement');
        return;
      }

      this.closeModals();
      this.loadCaisse();
      this.loadTeachers();

      // Open printable Bulletin de Paie
      this.openBulletinPaie(data.payout, modeInfo);
    } catch (e) {
      console.error(e);
      alert('Erreur réseau');
    }
  }

  async cancelTeacherPayout(payoutId) {
    if (!payoutId) return;
    const isAr = this.lang === 'ar';
    const confirmMsg = isAr
      ? 'هل أنت متأكد من رغبتك في إلغاء هذا الدفع؟\nسيتم استرجاع المبلغ تلقائياً إلى رصيد الصندوق وإعادة احتساب المتبقي للأستاذ.'
      : 'Êtes-vous sûr de vouloir annuler ce règlement d\'honoraires ?\nLe montant sera automatiquement réintégré dans le solde de la Caisse et le reste à payer sera actualisé.';

    if (!confirm(confirmMsg)) return;

    try {
      const res = await fetch(`/api/teachers/payouts/${payoutId}`, {
        method: 'DELETE'
      });
      const data = await res.json();
      if (!data.success) {
        alert(data.error || 'Erreur lors de l’annulation');
        return;
      }

      // Refresh Caisse, Teachers List, and Payout Modal
      this.loadCaisse();
      this.loadTeachers();
      await this.refreshTeacherPayoutData();

      alert(data.message || (isAr ? 'تم إلغاء الدفع واسترجاع الصندوق بنجاح' : 'Règlement annulé avec succès'));
    } catch (err) {
      console.error(err);
      alert('Erreur réseau');
    }
  }

  openBulletinPaieFromData(payoutJsonEncoded) {
    try {
      const payout = JSON.parse(decodeURIComponent(payoutJsonEncoded));
      const teacher = this.currentPayoutEarnings?.teacher || {};
      payout.first_name = payout.first_name || teacher.first_name;
      payout.last_name = payout.last_name || teacher.last_name;
      payout.matricule = payout.matricule || teacher.matricule;
      this.openBulletinPaie(payout, {});
    } catch (err) {
      console.error(err);
    }
  }


  openBulletinPaie(payout, modeInfo) {
    const s = this.settings || {};
    if (s.school_name) document.getElementById('bulletinSchoolName').textContent = s.school_name;
    if (s.school_address) document.getElementById('bulletinSchoolAddress').textContent = s.school_address;
    if (s.school_phone) document.getElementById('bulletinSchoolPhone').textContent = `Tél: ${s.school_phone}`;

    document.getElementById('bulletinRefNo').textContent = `RÉF: ${payout.id ? `PAY-${new Date().getFullYear()}-${String(payout.id).padStart(4, '0')}` : 'PAY'}`;
    document.getElementById('bulletinDate').textContent = `Date: ${new Date().toLocaleDateString('fr-FR')}`;

    document.getElementById('bulletinTeacherName').textContent = `M./Mme ${payout.first_name} ${payout.last_name}`;
    document.getElementById('bulletinTeacherMeta').textContent = `Matricule: ${payout.matricule || '-'} · ${payout.subject_name || 'Enseignant'}`;
    document.getElementById('bulletinPeriod').textContent = payout.period || 'Mois courant';

    const modeLabels = {
      percent: 'Pourcentage sur encaissements',
      hourly: 'Tarif horaire',
      per_session: 'Tarif par séance',
      fixed_salary: 'Salaire mensuel fixe',
      hourly_per_student: 'Horaire × Nombre d’élèves',
      session_per_student: 'Séance × Nombre d’élèves',
      percent_per_student: 'Pourcentage par élève',
      fixed_per_student: 'Forfait fixe par élève'
    };
    const designation = modeLabels[payout.remuneration_mode] || payout.remuneration_mode;

    document.getElementById('bulletinTableBody').innerHTML = `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">
          <strong>${designation}</strong>
          ${payout.notes ? `<div style="font-size: 11px; color: #64748b;">${this.escapeHtml(payout.notes)}</div>` : ''}
        </td>
        <td style="padding: 10px; text-align: center; border-bottom: 1px solid #e2e8f0;">
          ${Number(payout.base_calculation || 0).toLocaleString()}
        </td>
        <td style="padding: 10px; text-align: center; border-bottom: 1px solid #e2e8f0;">
          ${payout.rate_value || '-'}
        </td>
        <td style="padding: 10px; text-align: right; font-weight: 700; border-bottom: 1px solid #e2e8f0;">
          ${Number(payout.paid_amount).toLocaleString()} DA
        </td>
      </tr>
    `;

    document.getElementById('bulletinMethod').textContent = `Règlement en: ${payout.payment_method || 'Espèces'}`;
    document.getElementById('bulletinTotalAmount').textContent = `${Number(payout.paid_amount).toLocaleString()} DA`;

    document.getElementById('modalBulletinPaie').classList.add('active');
  }

  printBulletinPaie() {
    window.print();
  }

  // -------------------------------------------------------------
  // GROUPS & PLANNING
  // -------------------------------------------------------------
  normalizeDay(dayStr) {
    if (!dayStr) return '';
    const d = dayStr.trim().toLowerCase();
    if (d === 'samedi' || d.includes('سبت')) return 'Samedi';
    if (d === 'dimanche' || d.includes('أحد') || d.includes('احد')) return 'Dimanche';
    if (d === 'lundi' || d.includes('إثنين') || d.includes('اثنين') || d.includes('إثنين')) return 'Lundi';
    if (d === 'mardi' || d.includes('ثلاثاء')) return 'Mardi';
    if (d === 'mercredi' || d.includes('أربعاء') || d.includes('اربعاء')) return 'Mercredi';
    if (d === 'jeudi' || d.includes('خميس')) return 'Jeudi';
    if (d === 'vendredi' || d.includes('جمعة') || d.includes('جمعه')) return 'Vendredi';
    return dayStr;
  }

  calculateDurationHours(start, end) {
    if (!start || !end) return 0;
    const [h1, m1] = start.split(':').map(Number);
    const [h2, m2] = end.split(':').map(Number);
    if (isNaN(h1) || isNaN(m1) || isNaN(h2) || isNaN(m2)) return 0;
    const diff = (h2 * 60 + m2) - (h1 * 60 + m1);
    return diff > 0 ? diff / 60 : 0;
  }

  formatDuration(hours) {
    if (!hours || hours <= 0) return '-';
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    if (m === 0) return `${h}h`;
    return `${h}h ${m}min`;
  }

  async loadPlanningView() {
    if (!this.teachers || this.teachers.length === 0 || !this.rooms || this.rooms.length === 0) {
      await Promise.all([this.loadTeachers(), this.loadRooms(), this.loadLevels(), this.loadSubjects()]);
    }
    this.populatePlanningFilters();
    await this.loadGroups();
  }

  populatePlanningFilters() {
    const teacherSelect = document.getElementById('filterPlanningTeacher');
    if (teacherSelect && this.teachers) {
      const isAr = this.lang === 'ar';
      teacherSelect.innerHTML = `<option value="">${isAr ? 'جميع الأساتذة' : 'Tous les enseignants'}</option>` +
        this.teachers.map(t => `<option value="${t.id}">${this.escapeHtml(t.name || `${t.first_name || ''} ${t.last_name || ''}`.trim())}</option>`).join('');
      teacherSelect.value = current;
    }

    const roomSelect = document.getElementById('filterPlanningRoom');
    if (roomSelect && this.rooms) {
      const current = roomSelect.value;
      roomSelect.innerHTML = `<option value="">Toutes les salles</option>` +
        this.rooms.map(r => `<option value="${r.id}">${this.escapeHtml(r.name)}</option>`).join('');
      roomSelect.value = current;
    }

    const levelSelect = document.getElementById('filterPlanningLevel');
    if (levelSelect && this.levels) {
      const current = levelSelect.value;
      levelSelect.innerHTML = `<option value="">Tous les niveaux</option>` +
        this.levels.map(l => `<option value="${l.id}">${this.escapeHtml(l.name)}</option>`).join('');
      levelSelect.value = current;
    }

    const subjectSelect = document.getElementById('filterPlanningSubject');
    if (subjectSelect && this.subjects) {
      const current = subjectSelect.value;
      subjectSelect.innerHTML = `<option value="">Toutes les matières</option>` +
        this.subjects.map(s => `<option value="${s.id}">${this.escapeHtml(s.name)}</option>`).join('');
      subjectSelect.value = current;
    }
  }

  getFilteredPlanningGroups() {
    let groups = this.groups || [];
    const search = (document.getElementById('searchPlanningInput')?.value || '').toLowerCase().trim();
    const teacherId = document.getElementById('filterPlanningTeacher')?.value;
    const roomId = document.getElementById('filterPlanningRoom')?.value;
    const levelId = document.getElementById('filterPlanningLevel')?.value;
    const subjectId = document.getElementById('filterPlanningSubject')?.value;
    const filterDay = document.getElementById('filterPlanningDay')?.value;

    return groups.filter(g => {
      if (teacherId && String(g.teacher_id) !== String(teacherId)) return false;
      if (roomId && String(g.room_id) !== String(roomId)) return false;
      if (levelId && String(g.level_id) !== String(levelId)) return false;
      if (subjectId && String(g.subject_id) !== String(subjectId)) return false;
      if (filterDay && this.normalizeDay(g.day_of_week) !== filterDay) return false;

      if (search) {
        const text = `${g.name || ''} ${g.subject_name || ''} ${g.teacher_name || ''} ${g.room_name || ''} ${g.level_name || ''}`.toLowerCase();
        if (!text.includes(search)) return false;
      }
      return true;
    });
  }

  filterPlanning() {
    this.renderPlanningTable();
    this.renderWeeklyScheduleGrid();
    this.updatePlanningKpis();
  }

  resetPlanningFilters() {
    const search = document.getElementById('searchPlanningInput');
    if (search) search.value = '';
    const t = document.getElementById('filterPlanningTeacher');
    if (t) t.value = '';
    const r = document.getElementById('filterPlanningRoom');
    if (r) r.value = '';
    const l = document.getElementById('filterPlanningLevel');
    if (l) l.value = '';
    const s = document.getElementById('filterPlanningSubject');
    if (s) s.value = '';
    const d = document.getElementById('filterPlanningDay');
    if (d) d.value = '';
    this.filterPlanning();
  }

  updatePlanningKpis() {
    const filtered = this.getFilteredPlanningGroups();

    // Total groups
    const kpiGroups = document.getElementById('planningKpiTotalGroups');
    if (kpiGroups) kpiGroups.textContent = filtered.length;

    // Total hours
    let totalHours = 0;
    filtered.forEach(g => {
      totalHours += this.calculateDurationHours(g.start_time, g.end_time);
    });
    const kpiHours = document.getElementById('planningKpiTotalHours');
    if (kpiHours) {
      kpiHours.textContent = totalHours % 1 === 0 ? `${totalHours}h` : `${totalHours.toFixed(1)}h`;
    }

    // Unique active teachers
    const teachersSet = new Set(filtered.map(g => g.teacher_id).filter(Boolean));
    const kpiTeachers = document.getElementById('planningKpiTeachersCount');
    if (kpiTeachers) kpiTeachers.textContent = teachersSet.size;

    // Unique rooms
    const roomsSet = new Set(filtered.map(g => g.room_id).filter(Boolean));
    const kpiRooms = document.getElementById('planningKpiRoomsCount');
    if (kpiRooms) kpiRooms.textContent = roomsSet.size;
  }

  renderPlanningTable() {
    const tbody = document.getElementById('groupsTableBody');
    if (!tbody) return;

    const filtered = this.getFilteredPlanningGroups();
    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="10" style="text-align: center; color: var(--text-muted); padding: 36px 20px;">
        <i class="fa-solid fa-calendar-xmark" style="font-size: 28px; margin-bottom: 8px; display: block; opacity: 0.5;"></i>
        Aucun groupe ne correspond aux critères de recherche
      </td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.map(g => {
      const durHours = this.calculateDurationHours(g.start_time, g.end_time);
      const durText = this.formatDuration(durHours);
      const normDay = this.normalizeDay(g.day_of_week) || g.day_of_week || '-';
      const capRate = g.max_students > 0 ? Math.min(100, Math.round(((g.enrolled_count || 0) / g.max_students) * 100)) : 0;

      const roomBadge = g.room_name
        ? `<span style="font-weight: 600; color: var(--text-main);"><i class="fa-solid fa-door-open" style="color: #38bdf8; margin-right: 4px;"></i>${this.escapeHtml(g.room_name)}</span>`
        : `<span class="badge-pill" style="background: rgba(239, 68, 68, 0.15); color: #ef4444; font-size: 11px; padding: 2px 7px;">
             <i class="fa-solid fa-triangle-exclamation"></i> Sans salle
           </span>`;

      return `
        <tr>
          <td>
            <div style="font-weight: 700; color: var(--text-main);">${this.escapeHtml(g.name)}</div>
          </td>
          <td><span class="badge-pill" style="background: rgba(59, 130, 246, 0.12); color: #60a5fa;">${this.escapeHtml(g.level_name || '-')}</span></td>
          <td><span class="badge-pill" style="background: rgba(168, 85, 247, 0.12); color: #c084fc;">${this.escapeHtml(g.subject_name || '-')}</span></td>
          <td>
            <div style="display: flex; align-items: center; gap: 6px;">
              <i class="fa-solid fa-chalkboard-user" style="color: var(--text-muted); font-size: 12px;"></i>
              <span>${this.escapeHtml(g.teacher_name || '-')}</span>
            </div>
          </td>
          <td>${roomBadge}</td>
          <td>
            <div style="font-weight: 600; color: var(--text-main);">
              <span style="color: #60a5fa;">${normDay}</span>
              <span style="font-size: 12px; margin-left: 4px; color: #10b981;">${g.start_time || ''} - ${g.end_time || ''}</span>
            </div>
          </td>
          <td>
            <span class="badge-pill" style="background: rgba(148, 163, 184, 0.12); color: var(--text-muted); font-size: 11px;">
              ${durText}
            </span>
          </td>
          <td><strong style="color: #10b981;">${Number(g.price_monthly || 0).toLocaleString()} DA</strong></td>
          <td>
            <div style="min-width: 90px;">
              <div style="display: flex; justify-content: space-between; font-size: 11px; margin-bottom: 3px;">
                <span>${g.enrolled_count || 0}/${g.max_students}</span>
                <span style="color: var(--text-muted);">${capRate}%</span>
              </div>
              <div style="width: 100%; height: 5px; background: rgba(255,255,255,0.08); border-radius: 4px; overflow: hidden;">
                <div style="width: ${capRate}%; height: 100%; background: ${capRate >= 90 ? '#ef4444' : capRate >= 70 ? '#f59e0b' : '#3b82f6'};"></div>
              </div>
            </div>
          </td>
          <td>
            <div style="display: flex; gap: 8px;">
              <button class="btn-icon" title="Modifier" onclick="app.editGroup(${g.id})">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button class="btn-icon" style="color: #ef4444;" title="Supprimer" onclick="app.deleteGroup(${g.id})">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  async loadGroups() {
    try {
      const res = await fetch('/api/groups');
      const data = await res.json();
      if (!data.success) return;
      this.groups = data.groups || [];
      this.populatePlanningFilters();
      this.filterPlanning();
    } catch (err) {
      console.error(err);
    }
  }

  // -------------------------------------------------------------
  // SCHOOLARIS STYLE: GROUPES VIEW & ACTIONS
  // -------------------------------------------------------------
  async loadGroupesView() {
    try {
      // Ensure configuration data (levels, subjects, teachers) is available
      if (!this.levels || this.levels.length === 0 || !this.teachers || this.teachers.length === 0) {
        await Promise.all([this.loadLevels(), this.loadTeachers(), this.loadSubjects(), this.loadRooms()]);
      }

      const res = await fetch('/api/groups?status=all');
      const data = await res.json();
      if (!data.success) return;

      this.allGroupes = data.groups || [];
      const stats = data.stats || {};

      // Populate filter select options
      this.populateGroupesFilters();

      // Update KPI cards matching Schoolaris
      const activeCount = stats.active_groups_count !== undefined ? stats.active_groups_count : this.allGroupes.filter(g => g.active === 1).length;
      const totalCapacity = stats.total_capacity || 0;
      const totalEnrolled = stats.total_enrolled || 0;
      const fillRate = stats.fill_rate || (totalCapacity > 0 ? Math.min(100, Math.round((totalEnrolled / totalCapacity) * 100)) : 0);

      const kpiActiveEl = document.getElementById('groupesKpiActive');
      if (kpiActiveEl) kpiActiveEl.textContent = activeCount;

      const kpiStudentsEl = document.getElementById('groupesKpiStudents');
      if (kpiStudentsEl) kpiStudentsEl.textContent = totalEnrolled;

      const kpiCapacityEl = document.getElementById('groupesKpiCapacity');
      if (kpiCapacityEl) {
        kpiCapacityEl.textContent = this.lang === 'ar'
          ? `من أصل ${totalCapacity} مقعد`
          : `sur ${totalCapacity} places`;
      }

      const kpiFillRateEl = document.getElementById('groupesKpiFillRate');
      if (kpiFillRateEl) kpiFillRateEl.textContent = `${fillRate}%`;

      const fillRateBarEl = document.getElementById('groupesFillRateBar');
      if (fillRateBarEl) fillRateBarEl.style.width = `${fillRate}%`;

      // Trigger table filtering & rendering
      this.filterGroupes();
    } catch (err) {
      console.error('Failed to load groupes view:', err);
    }
  }

  populateGroupesFilters() {
    // 1. Levels
    const levelSelect = document.getElementById('groupesFilterLevel');
    if (levelSelect && (levelSelect.options.length <= 1 || levelSelect.getAttribute('data-loaded') !== '1')) {
      const currentVal = levelSelect.value;
      levelSelect.innerHTML = `<option value="">${this.lang === 'ar' ? 'كل المستويات' : 'Tous niveaux'}</option>` +
        (this.levels || []).map(l => `<option value="${l.id}">${this.escapeHtml(l.name)}</option>`).join('');
      levelSelect.value = currentVal;
      levelSelect.setAttribute('data-loaded', '1');
    }

    // 2. Subjects
    const subjectSelect = document.getElementById('groupesFilterSubject');
    if (subjectSelect && (subjectSelect.options.length <= 1 || subjectSelect.getAttribute('data-loaded') !== '1')) {
      const currentVal = subjectSelect.value;
      subjectSelect.innerHTML = `<option value="">${this.lang === 'ar' ? 'كل المواد' : 'Toutes matières'}</option>` +
        (this.subjects || []).map(s => `<option value="${s.id}">${this.escapeHtml(s.name)}</option>`).join('');
      subjectSelect.value = currentVal;
      subjectSelect.setAttribute('data-loaded', '1');
    }

    // 3. Teachers
    const teacherSelect = document.getElementById('groupesFilterTeacher');
    if (teacherSelect && (teacherSelect.options.length <= 1 || teacherSelect.getAttribute('data-loaded') !== '1')) {
      const currentVal = teacherSelect.value;
      teacherSelect.innerHTML = `<option value="">${this.lang === 'ar' ? 'كل الأساتذة' : 'Tous enseignants'}</option>` +
        (this.teachers || []).map(t => `<option value="${t.id}">${this.escapeHtml(t.first_name + ' ' + t.last_name)}</option>`).join('');
      teacherSelect.value = currentVal;
      teacherSelect.setAttribute('data-loaded', '1');
    }
  }

  filterGroupes() {
    if (!this.allGroupes) return;

    const search = (document.getElementById('groupesFilterSearch')?.value || '').trim().toLowerCase();
    const levelId = document.getElementById('groupesFilterLevel')?.value;
    const subjectId = document.getElementById('groupesFilterSubject')?.value;
    const teacherId = document.getElementById('groupesFilterTeacher')?.value;
    const status = document.getElementById('groupesFilterStatus')?.value || 'active';

    const filtered = this.allGroupes.filter(g => {
      // Status filter
      if (status === 'active' && g.active !== 1) return false;
      if (status === 'inactive' && g.active !== 0) return false;

      // Level filter
      if (levelId && String(g.level_id) !== String(levelId)) return false;

      // Subject filter
      if (subjectId && String(g.subject_id) !== String(subjectId)) return false;

      // Teacher filter
      if (teacherId && String(g.teacher_id) !== String(teacherId)) return false;

      // Text search
      if (search) {
        const nameMatch = (g.name || '').toLowerCase().includes(search);
        const subMatch = (g.subject_name || '').toLowerCase().includes(search);
        const lvlMatch = (g.level_name || '').toLowerCase().includes(search);
        const teachMatch = (g.teacher_name || '').toLowerCase().includes(search);
        const roomMatch = (g.room_name || '').toLowerCase().includes(search);
        if (!nameMatch && !subMatch && !lvlMatch && !teachMatch && !roomMatch) {
          return false;
        }
      }

      return true;
    });

    // Update counter display
    const counterEl = document.getElementById('groupesCounterDisplay');
    if (counterEl) {
      if (this.lang === 'ar') {
        counterEl.textContent = filtered.length === 1 ? 'فوج واحد' : `${filtered.length} أفواج`;
      } else {
        counterEl.textContent = filtered.length <= 1 ? `${filtered.length} groupe` : `${filtered.length} groupes`;
      }
    }

    this.renderSchoolarisGroupesTable(filtered);
  }

  renderSchoolarisGroupesTable(groups) {
    const tbody = document.getElementById('schoolarisGroupesTableBody');
    if (!tbody) return;

    if (groups.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="8" style="text-align: center; color: var(--text-muted); padding: 40px;">
            <i class="fa-solid fa-folder-open" style="font-size: 32px; margin-bottom: 10px; opacity: 0.5; display: block;"></i>
            ${this.lang === 'ar' ? 'لم يتم العثور على أي أفواج مطابقة' : 'Aucun groupe trouvé correspondant aux critères'}
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = groups.map(g => {
      const enrolled = g.enrolled_count || 0;
      const max = g.max_students || 25;
      const percent = max > 0 ? Math.min(100, Math.round((enrolled / max) * 100)) : 0;
      const subjectColor = g.subject_color || '#3b82f6';
      const isActive = g.active === 1;

      return `
        <tr>
          <td>
            <strong style="color: var(--text-heading); font-size: 14.5px;">${this.escapeHtml(g.name)}</strong>
          </td>
          <td>
            <span style="font-weight: 700; color: #3b82f6; display: inline-flex; align-items: center; gap: 5px;">
              <i class="fa-solid fa-layer-group" style="font-size: 11px; opacity: 0.8;"></i>
              ${this.escapeHtml(g.level_name || '-')}
            </span>
          </td>
          <td>
            ${g.room_name && g.room_name !== '-' ? `
              <span class="badge-room-tag" style="background: rgba(16, 185, 129, 0.12); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.28); padding: 4px 10px; border-radius: 8px; font-weight: 700; display: inline-flex; align-items: center; gap: 6px;">
                <i class="fa-solid fa-door-open" style="font-size: 11px;"></i>
                <span>${this.escapeHtml(g.room_name.toUpperCase())}</span>
              </span>
            ` : `<span style="color: var(--text-muted); font-size: 12px;">غير محددة</span>`}
          </td>
          <td>
            <div style="display: flex; align-items: center; gap: 6px;">
              <span class="subject-dot" style="background-color: ${subjectColor};"></span>
              <span style="font-weight: 600;">${this.escapeHtml(g.subject_name || '')}</span>
              <span style="color: var(--text-muted); font-size: 12px;">(${this.escapeHtml(g.teacher_name || '-')})</span>
            </div>
          </td>
          <td>
            <div style="font-weight: 700; font-size: 13.5px; color: var(--text-heading);">${enrolled} / ${max}</div>
            <div class="mini-cap-bar-track">
              <div class="mini-cap-bar-fill" style="width: ${percent}%;"></div>
            </div>
          </td>
          <td>
            <span class="badge-status-pill ${isActive ? 'active' : 'inactive'}" 
                  onclick="app.toggleGroupStatus(${g.id})" 
                  title="${this.lang === 'ar' ? 'انقر لتغيير الحالة' : 'Cliquer pour changer le statut'}">
              ${isActive ? (this.lang === 'ar' ? 'نشط' : 'Actif') : (this.lang === 'ar' ? 'غير نشط' : 'Inactif')}
            </span>
          </td>
          <td style="text-align: right;">
            <div style="display: inline-flex; gap: 8px; align-items: center;">
              <button class="btn-action-view" style="display: inline-flex; align-items: center; gap: 6px; padding: 5px 12px; border-radius: 8px; background: rgba(59, 130, 246, 0.15); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.35); font-weight: 700; font-size: 12px; cursor: pointer;" title="عرض وطباعة قائمة تلاميذ القسم" onclick="app.viewGroupStudents(${g.id})">
                <i class="fa-solid fa-users"></i>
                <span>تلاميذ القسم</span>
              </button>
              <button class="btn-action-edit" title="${this.lang === 'ar' ? 'تعديل' : 'Modifier'}" onclick="app.editGroup(${g.id})">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button class="btn-action-delete" title="${this.lang === 'ar' ? 'حذف / تعطيل' : 'Supprimer'}" onclick="app.deleteGroup(${g.id})">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  async toggleGroupStatus(id) {
    try {
      const res = await fetch(`/api/groups/${id}/toggle-status`, { method: 'PATCH' });
      const data = await res.json();
      if (data.success) {
        this.playChime('success');
        await this.loadGroupesView();
      }
    } catch (err) {
      console.error(err);
    }
  }

  exportGroupesToExcel() {
    if (!this.allGroupes || this.allGroupes.length === 0) {
      alert(this.lang === 'ar' ? 'لا توجد بيانات للتصدير' : 'Aucune donnée à exporter');
      return;
    }

    // Get current filtered list
    const search = (document.getElementById('groupesFilterSearch')?.value || '').trim().toLowerCase();
    const levelId = document.getElementById('groupesFilterLevel')?.value;
    const subjectId = document.getElementById('groupesFilterSubject')?.value;
    const teacherId = document.getElementById('groupesFilterTeacher')?.value;
    const status = document.getElementById('groupesFilterStatus')?.value || 'active';

    const listToExport = this.allGroupes.filter(g => {
      if (status === 'active' && g.active !== 1) return false;
      if (status === 'inactive' && g.active !== 0) return false;
      if (levelId && String(g.level_id) !== String(levelId)) return false;
      if (subjectId && String(g.subject_id) !== String(subjectId)) return false;
      if (teacherId && String(g.teacher_id) !== String(teacherId)) return false;
      if (search) {
        const nameMatch = (g.name || '').toLowerCase().includes(search);
        const subMatch = (g.subject_name || '').toLowerCase().includes(search);
        const lvlMatch = (g.level_name || '').toLowerCase().includes(search);
        const teachMatch = (g.teacher_name || '').toLowerCase().includes(search);
        const roomMatch = (g.room_name || '').toLowerCase().includes(search);
        if (!nameMatch && !subMatch && !lvlMatch && !teachMatch && !roomMatch) return false;
      }
      return true;
    });

    const isAr = this.lang === 'ar';
    const headers = isAr ? [
      'اسم الفوج', 'المادة', 'المستوى', 'الأستاذ', 'القاعة', 'اليوم', 'التوقيت', 'السعر الشهري (دج)', 'المسجلون', 'المقاعد', 'الحالة'
    ] : [
      'Nom du Groupe', 'Matière', 'Niveau', 'Enseignant', 'Salle', 'Jour', 'Horaires', 'Prix Mensuel (DA)', 'Élèves Inscrits', 'Capacité Max', 'Statut'
    ];

    const rows = listToExport.map(g => [
      `"${(g.name || '').replace(/"/g, '""')}"`,
      `"${(g.subject_name || '').replace(/"/g, '""')}"`,
      `"${(g.level_name || '').replace(/"/g, '""')}"`,
      `"${(g.teacher_name || '').replace(/"/g, '""')}"`,
      `"${(g.room_name || '').replace(/"/g, '""')}"`,
      `"${(g.day_of_week || '').replace(/"/g, '""')}"`,
      `"${(g.start_time || '')} - ${(g.end_time || '')}"`,
      g.price_monthly || 0,
      g.enrolled_count || 0,
      g.max_students || 25,
      g.active ? (isAr ? 'نشط' : 'Actif') : (isAr ? 'غير نشط' : 'Inactif')
    ]);

    const csvContent = '\uFEFF' + [headers.join(';'), ...rows.map(r => r.join(';'))].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `groupes_edumind_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    this.playChime('success');
  }

  async viewGroupStudents(id) {
    try {
      this.currentSelectedGroupId = id;
      const res = await fetch(`/api/groups/${id}/students`);
      const data = await res.json();
      if (!data.success) {
        alert(data.error || 'Erreur lors du chargement des élèves');
        return;
      }

      const { group, students } = data;
      document.getElementById('modalGroupStudentsTitle').textContent = `${group.name}`;
      document.getElementById('modalGroupStudentsSubtitle').textContent =
        `${group.subject_name} — ${group.level_name} (${group.teacher_name}) — ${students.length} / ${group.max_students} inscrit(s)`;

      const tbody = document.getElementById('groupStudentsTableBody');
      if (students.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="6" style="text-align: center; color: var(--text-muted); padding: 24px;">
              ${this.lang === 'ar' ? 'لا يوجد أي تلميذ مسجل في هذا الفوج حالياً.' : 'Aucun élève inscrit dans ce groupe pour le moment.'}
            </td>
          </tr>
        `;
      } else {
        tbody.innerHTML = students.map(s => `
          <tr>
            <td><strong style="color: #60a5fa;">${this.escapeHtml(s.matricule)}</strong></td>
            <td><strong>${this.escapeHtml(s.first_name + ' ' + s.last_name)}</strong></td>
            <td>${this.escapeHtml(s.phone || s.parent_phone || '-')}</td>
            <td>${s.registration_date || '-'}</td>
            <td>${Number(s.discount_amount) > 0 ? `<span style="color: #f59e0b;">-${Number(s.discount_amount)} DA</span>` : '0 DA'}</td>
            <td><span class="badge-pill" style="background: rgba(16, 185, 129, 0.12); color: #10b981;">${s.payments_count} reçu(s)</span></td>
          </tr>
        `).join('');
      }

      document.getElementById('modalGroupStudents').classList.add('active');
    } catch (err) {
      console.error(err);
    }
  }

  async quickEnrollFromGroupModal() {
    const groupId = this.currentSelectedGroupId;
    this.closeModals();
    await this.openEnrollmentWizard(null, groupId);
  }

  // -------------------------------------------------------------
  // CONFIGURATION: NIVEAUX (LEVELS)
  // -------------------------------------------------------------
  async loadLevels() {
    try {
      const res = await fetch('/api/levels');
      const data = await res.json();
      if (!data.success) return;
      this.levels = data.levels;
      this.refreshAllLevelDropdowns();

      const tbody = document.getElementById('levelsTableBody');
      if (!tbody) return;
      if (this.levels.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--text-muted); padding: 24px;">Aucun niveau configuré</td></tr>`;
        return;
      }

      tbody.innerHTML = this.levels.map(l => `
        <tr>
          <td><strong style="color: #60a5fa;">#${l.id}</strong></td>
          <td><strong>${l.name}</strong></td>
          <td><span class="badge-pill" style="background: rgba(59, 130, 246, 0.12); color: #60a5fa;">${l.category}</span></td>
          <td>
            <div style="display: flex; gap: 8px;">
              <button class="btn-icon" title="Modifier" onclick="app.editLevel(${l.id})">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button class="btn-icon" style="color: #ef4444;" title="Supprimer" onclick="app.deleteLevel(${l.id})">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      `).join('');
    } catch (err) {
      console.error(err);
    }
  }

  openModalLevel() {
    document.getElementById('modalLevelTitle').textContent = 'Ajouter un Niveau';
    document.getElementById('levelId').value = '';
    document.getElementById('levelName').value = '';
    document.getElementById('levelCategory').value = 'CEM';
    document.getElementById('modalLevel').classList.add('active');
  }

  editLevel(id) {
    const l = this.levels.find(item => item.id === id);
    if (!l) return;
    document.getElementById('modalLevelTitle').textContent = 'Modifier le Niveau';
    document.getElementById('levelId').value = l.id;
    document.getElementById('levelName').value = l.name;
    document.getElementById('levelCategory').value = l.category || 'CEM';
    document.getElementById('modalLevel').classList.add('active');
  }

  async saveLevel() {
    const id = document.getElementById('levelId').value;
    const payload = {
      name: document.getElementById('levelName').value,
      category: document.getElementById('levelCategory').value
    };
    const url = id ? `/api/levels/${id}` : '/api/levels';
    const method = id ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (data.success) {
      this.closeModals();
      await this.loadConfigurationData();
      this.loadLevels();
    }
  }

  async deleteLevel(id) {
    if (!confirm('Voulez-vous vraiment supprimer ce niveau ?')) return;
    const res = await fetch(`/api/levels/${id}`, { method: 'DELETE' });
    const data = await res.json();
    if (data.success) {
      await this.loadConfigurationData();
      this.loadLevels();
    }
  }

  // -------------------------------------------------------------
  // CONFIGURATION: SALLES (ROOMS) - ENHANCED
  // -------------------------------------------------------------
  setRoomsViewMode(mode) {
    this.roomsViewMode = mode;
    const btnGrid = document.getElementById('btnRoomsViewGrid');
    const btnTable = document.getElementById('btnRoomsViewTable');
    const gridContainer = document.getElementById('roomsCardsGrid');
    const tableContainer = document.getElementById('roomsTableContainer');

    if (mode === 'table') {
      btnGrid?.classList.remove('active');
      btnTable?.classList.add('active');
      if (gridContainer) gridContainer.style.display = 'none';
      if (tableContainer) tableContainer.style.display = 'block';
    } else {
      btnTable?.classList.remove('active');
      btnGrid?.classList.add('active');
      if (tableContainer) tableContainer.style.display = 'none';
      if (gridContainer) gridContainer.style.display = 'grid';
    }
  }

  async loadRooms() {
    try {
      const res = await fetch('/api/rooms');
      const data = await res.json();
      if (!data.success) return;
      this.rooms = data.rooms;

      if (!this.groups || this.groups.length === 0) {
        try {
          const gRes = await fetch('/api/groups');
          const gData = await gRes.json();
          if (gData.success) this.groups = gData.groups;
        } catch (e) {
          console.warn('Could not preload groups for rooms', e);
        }
      }

      const groupsPerRoom = {};
      if (this.groups && this.groups.length > 0) {
        this.groups.forEach(g => {
          if (g.room_id && (g.active === 1 || g.active === undefined)) {
            if (!groupsPerRoom[g.room_id]) groupsPerRoom[g.room_id] = [];
            groupsPerRoom[g.room_id].push(g);
          }
        });
      }

      this.rooms.forEach(r => {
        const assigned = groupsPerRoom[r.id] || [];
        r.computed_groups_count = assigned.length;
        r.assigned_groups = assigned;
        const subjects = [...new Set(assigned.map(g => g.subject_name).filter(Boolean))];
        r.computed_subjects_list = subjects.join(', ');
      });

      const totalRooms = this.rooms.length;
      const totalCapacity = this.rooms.reduce((sum, r) => sum + (parseInt(r.capacity) || 0), 0);
      const projectorCount = this.rooms.filter(r => r.has_projector == 1 || r.has_projector === true).length;
      const totalGroupsAssigned = this.rooms.reduce((sum, r) => sum + (r.computed_groups_count || 0), 0);

      const kpiTotal = document.getElementById('roomsKpiTotal');
      if (kpiTotal) kpiTotal.textContent = totalRooms;

      const kpiCap = document.getElementById('roomsKpiCapacity');
      if (kpiCap) kpiCap.textContent = `${totalCapacity} ${this.lang === 'ar' ? 'مقعد' : 'places'}`;

      const kpiProj = document.getElementById('roomsKpiProjector');
      if (kpiProj) {
        const pct = totalRooms > 0 ? Math.round((projectorCount / totalRooms) * 100) : 0;
        kpiProj.textContent = `${projectorCount} (${pct}%)`;
      }

      const kpiGroups = document.getElementById('roomsKpiGroups');
      if (kpiGroups) kpiGroups.textContent = totalGroupsAssigned;

      this.filterRooms();
    } catch (err) {
      console.error(err);
    }
  }

  filterRooms() {
    if (!this.rooms) return;

    const search = (document.getElementById('roomsFilterSearch')?.value || '').trim().toLowerCase();
    const projFilter = document.getElementById('roomsFilterProjector')?.value || '';
    const capFilter = document.getElementById('roomsFilterCapacity')?.value || '';
    const occFilter = document.getElementById('roomsFilterOccupancy')?.value || '';

    const filtered = this.rooms.filter(r => {
      if (search) {
        const nameMatch = (r.name || '').toLowerCase().includes(search);
        const notesMatch = (r.notes || '').toLowerCase().includes(search);
        const subjectsMatch = (r.computed_subjects_list || '').toLowerCase().includes(search);
        if (!nameMatch && !notesMatch && !subjectsMatch) return false;
      }

      if (projFilter === 'yes' && !(r.has_projector == 1 || r.has_projector === true)) return false;
      if (projFilter === 'no' && (r.has_projector == 1 || r.has_projector === true)) return false;

      const cap = parseInt(r.capacity) || 0;
      if (capFilter === 'small' && cap >= 20) return false;
      if (capFilter === 'medium' && (cap < 20 || cap > 29)) return false;
      if (capFilter === 'large' && cap < 30) return false;

      const hasGroups = (r.computed_groups_count || 0) > 0;
      if (occFilter === 'occupied' && !hasGroups) return false;
      if (occFilter === 'free' && hasGroups) return false;

      return true;
    });

    const counter = document.getElementById('roomsCounterDisplay');
    if (counter) {
      const unit = this.lang === 'ar' ? 'قاعة' : (filtered.length > 1 ? 'salles' : 'salle');
      counter.textContent = `${filtered.length} ${unit}`;
    }

    const cardsGrid = document.getElementById('roomsCardsGrid');
    if (cardsGrid) {
      if (filtered.length === 0) {
        cardsGrid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; color: var(--text-muted);">
            <div style="font-size: 38px; margin-bottom: 12px; opacity: 0.5;"><i class="fa-solid fa-door-closed"></i></div>
            <div style="font-size: 16px; font-weight: 600;">${this.lang === 'ar' ? 'لم يتم العثور على أي قاعة مطابقة للبحث' : 'Aucune salle ne correspond aux critères de recherche'}</div>
          </div>
        `;
      } else {
        cardsGrid.innerHTML = filtered.map(r => {
          const hasProj = r.has_projector == 1 || r.has_projector === true;
          const groupsCount = r.computed_groups_count || 0;
          const subjects = r.computed_subjects_list;

          return `
            <div class="room-card-item">
              <div class="room-card-header">
                <div class="room-card-identity">
                  <div class="room-icon-box">
                    <i class="fa-solid fa-door-open"></i>
                  </div>
                  <div>
                    <div class="room-card-title">${this.escapeHtml(r.name)}</div>
                    <div class="room-card-id-tag">
                      <span>#${r.id}</span>
                      ${r.notes ? `<span>•</span> <span title="${this.escapeHtml(r.notes)}">${this.escapeHtml(r.notes)}</span>` : ''}
                    </div>
                  </div>
                </div>
                <div class="room-cap-badge" title="${r.capacity} places">
                  <i class="fa-solid fa-users"></i>
                  <span>${r.capacity} ${this.lang === 'ar' ? 'مقعد' : 'pl'}</span>
                </div>
              </div>

              <div class="room-card-body">
                <div class="room-equipment-tags">
                  ${hasProj
              ? `<span class="tag-projector-yes"><i class="fa-solid fa-video"></i> ${this.lang === 'ar' ? 'عارض داتاشو' : 'Vidéoprojecteur'}</span>`
              : `<span class="tag-projector-no"><i class="fa-solid fa-video-slash"></i> ${this.lang === 'ar' ? 'بدون عارض' : 'Sans projecteur'}</span>`
            }
                  ${r.notes ? `<span class="tag-room-equip"><i class="fa-solid fa-circle-info"></i> ${this.escapeHtml(r.notes)}</span>` : ''}
                </div>

                <div class="room-groups-box">
                  <div class="room-groups-info">
                    <i class="fa-solid fa-calendar-days"></i>
                    <span>${groupsCount} ${this.lang === 'ar' ? 'أفواج مبرمجة' : (groupsCount > 1 ? 'groupes programmés' : 'groupe programmé')}</span>
                  </div>
                  <span class="room-groups-badge">${groupsCount > 0 ? (this.lang === 'ar' ? 'قيد الاستغلال' : 'Occupée') : (this.lang === 'ar' ? 'شاغرة' : 'Libre')}</span>
                </div>

                ${subjects ? `
                  <div style="font-size: 11.5px; color: var(--text-muted); display: flex; align-items: center; gap: 6px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    <i class="fa-solid fa-book-open" style="color: #60a5fa;"></i>
                    <span title="${this.escapeHtml(subjects)}">${this.escapeHtml(subjects)}</span>
                  </div>
                ` : ''}
              </div>

              <div class="room-card-footer">
                <button type="button" class="btn-room-schedule" onclick="app.openRoomTimetable(${r.id})" title="${this.lang === 'ar' ? 'عرض جدول استعمال القاعة' : 'Voir emploi du temps'}">
                  <i class="fa-regular fa-calendar-days"></i>
                  <span>${this.lang === 'ar' ? 'جدول التوقيت' : 'Emploi du temps'}</span>
                </button>
                <div style="display: flex; gap: 4px;">
                  <button class="btn-icon" title="${this.lang === 'ar' ? 'تعديل' : 'Modifier'}" onclick="app.editRoom(${r.id})">
                    <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button class="btn-icon" style="color: #ef4444;" title="${this.lang === 'ar' ? 'حذف' : 'Supprimer'}" onclick="app.deleteRoom(${r.id})">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          `;
        }).join('');
      }
    }

    const tbody = document.getElementById('roomsTableBody');
    if (tbody) {
      if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 32px;">${this.lang === 'ar' ? 'لا توجد أي قاعة مطابقة للبحث' : 'Aucune salle configurée ou trouvée'}</td></tr>`;
      } else {
        tbody.innerHTML = filtered.map(r => {
          const hasProj = r.has_projector == 1 || r.has_projector === true;
          const groupsCount = r.computed_groups_count || 0;
          return `
            <tr>
              <td>
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div class="room-icon-box" style="width: 34px; height: 34px; font-size: 15px;">
                    <i class="fa-solid fa-door-open"></i>
                  </div>
                  <div>
                    <strong style="color: var(--text-heading); font-size: 14px;">${this.escapeHtml(r.name)}</strong>
                    <div style="font-size: 11px; color: var(--text-muted);">#${r.id}</div>
                  </div>
                </div>
              </td>
              <td>
                <span class="room-cap-badge">
                  <i class="fa-solid fa-users"></i> ${r.capacity} ${this.lang === 'ar' ? 'مقعد' : 'places'}
                </span>
              </td>
              <td>
                ${hasProj
              ? `<span class="tag-projector-yes"><i class="fa-solid fa-check"></i> ${this.lang === 'ar' ? 'متوفر' : 'Oui'}</span>`
              : `<span class="tag-projector-no">${this.lang === 'ar' ? 'غير متوفر' : 'Non'}</span>`
            }
              </td>
              <td>
                <span style="color: var(--text-main); font-size: 13px;">${this.escapeHtml(r.notes || '-')}</span>
              </td>
              <td>
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span class="room-groups-badge" style="cursor: pointer;" onclick="app.openRoomTimetable(${r.id})">
                    <i class="fa-solid fa-calendar-days"></i> ${groupsCount} ${this.lang === 'ar' ? 'أفواج' : 'groupes'}
                  </span>
                  ${r.computed_subjects_list ? `<span style="font-size: 11.5px; color: var(--text-muted); max-width: 140px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${this.escapeHtml(r.computed_subjects_list)}">${this.escapeHtml(r.computed_subjects_list)}</span>` : ''}
                </div>
              </td>
              <td>
                <div style="display: flex; gap: 6px;">
                  <button class="btn-icon" title="${this.lang === 'ar' ? 'جدول التوقيت' : 'Emploi du temps'}" onclick="app.openRoomTimetable(${r.id})">
                    <i class="fa-regular fa-calendar-days" style="color: #3b82f6;"></i>
                  </button>
                  <button class="btn-icon" title="${this.lang === 'ar' ? 'تعديل' : 'Modifier'}" onclick="app.editRoom(${r.id})">
                    <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button class="btn-icon" style="color: #ef4444;" title="${this.lang === 'ar' ? 'حذف' : 'Supprimer'}" onclick="app.deleteRoom(${r.id})">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          `;
        }).join('');
      }
    }
  }

  async openRoomTimetable(roomId) {
    const r = this.rooms?.find(item => item.id === roomId);
    if (!r) return;

    this.currentTimetableRoom = r;
    const titleEl = document.getElementById('roomTimetableTitle');
    const capEl = document.getElementById('roomTimetableCapBadge');
    const projEl = document.getElementById('roomTimetableProjBadge');
    const equipEl = document.getElementById('roomTimetableEquipNotes');
    const daysGrid = document.getElementById('roomTimetableDaysGrid');

    if (titleEl) titleEl.textContent = `${this.lang === 'ar' ? 'جدول استعمال' : 'Emploi du Temps —'} ${r.name}`;
    if (capEl) capEl.textContent = `${this.lang === 'ar' ? 'السعة:' : 'Capacité:'} ${r.capacity} ${this.lang === 'ar' ? 'مقعد' : 'places'}`;
    if (projEl) {
      const hasP = r.has_projector == 1 || r.has_projector === true;
      projEl.textContent = `${this.lang === 'ar' ? 'عارض داتاشو:' : 'Vidéoprojecteur:'} ${hasP ? (this.lang === 'ar' ? 'متوفر' : 'Oui') : (this.lang === 'ar' ? 'غير متوفر' : 'Non')}`;
    }
    if (equipEl) equipEl.textContent = r.notes || '';

    if (daysGrid) {
      daysGrid.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; padding: 30px;"><i class="fa-solid fa-spinner fa-spin"></i> ${this.lang === 'ar' ? 'جاري تحميل جدول التوقيت...' : 'Chargement du planning...'}</div>`;
    }

    document.getElementById('modalRoomTimetable')?.classList.add('active');

    let sessions = [];
    try {
      const res = await fetch(`/api/rooms/${roomId}/schedule`);
      const data = await res.json();
      if (data.success && data.schedule) {
        sessions = data.schedule;
      } else {
        sessions = (this.groups || []).filter(g => g.room_id == roomId && (g.active === 1 || g.active === undefined));
      }
    } catch (e) {
      sessions = (this.groups || []).filter(g => g.room_id == roomId && (g.active === 1 || g.active === undefined));
    }

    const groupsBadge = document.getElementById('roomTimetableGroupsBadge');
    if (groupsBadge) {
      groupsBadge.textContent = `${sessions.length} ${this.lang === 'ar' ? 'حصص مبرمجة' : (sessions.length > 1 ? 'séances programmées' : 'séance programmée')}`;
    }

    const days = [
      { key: 'Samedi', fr: 'Samedi', ar: 'السبت' },
      { key: 'Dimanche', fr: 'Dimanche', ar: 'الأحد' },
      { key: 'Lundi', fr: 'Lundi', ar: 'الإثنين' },
      { key: 'Mardi', fr: 'Mardi', ar: 'الثلاثاء' },
      { key: 'Mercredi', fr: 'Mercredi', ar: 'الأربعاء' },
      { key: 'Jeudi', fr: 'Jeudi', ar: 'الخميس' },
      { key: 'Vendredi', fr: 'Vendredi', ar: 'الجمعة' }
    ];

    if (daysGrid) {
      daysGrid.innerHTML = days.map(d => {
        const daySessions = sessions.filter(s => s.day_of_week && s.day_of_week.toLowerCase() === d.key.toLowerCase());
        const dayLabel = this.lang === 'ar' ? d.ar : d.fr;

        return `
          <div class="room-day-column">
            <div class="room-day-header">
              <span>${dayLabel}</span>
              <span class="room-day-badge">${daySessions.length} ${this.lang === 'ar' ? 'حصص' : 'cours'}</span>
            </div>
            <div class="room-day-sessions-list">
              ${daySessions.length === 0 ? `
                <div class="room-session-empty">${this.lang === 'ar' ? 'لا توجد حصص في هذا اليوم' : 'Aucun cours programmé'}</div>
              ` : daySessions.map(s => `
                <div class="room-session-item" style="border-inline-start-color: ${s.subject_color || '#3b82f6'};">
                  <div class="room-session-time">
                    <i class="fa-regular fa-clock"></i>
                    <span>${s.start_time || '--:--'} — ${s.end_time || '--:--'}</span>
                  </div>
                  <div class="room-session-name">${this.escapeHtml(s.name)}</div>
                  <div class="room-session-details">
                    <span style="font-weight: 600; color: ${s.subject_color || 'var(--text-main)'};">
                      <i class="fa-solid fa-book"></i> ${this.escapeHtml(s.subject_name || '')}
                    </span>
                    ${s.teacher_name ? `<span><i class="fa-solid fa-user-tie"></i> ${this.escapeHtml(s.teacher_name)}</span>` : ''}
                    ${s.enrolled_count !== undefined ? `<span><i class="fa-solid fa-users"></i> ${s.enrolled_count}/${s.max_students || r.capacity}</span>` : ''}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }).join('');
    }
  }

  printRoomTimetable() {
    window.print();
  }

  openModalRoom() {
    document.getElementById('modalRoomTitle').textContent = this.lang === 'ar' ? 'إضافة قاعة جديدة' : 'Ajouter une Salle';
    document.getElementById('roomId').value = '';
    document.getElementById('roomName').value = '';
    document.getElementById('roomCapacity').value = '25';
    document.getElementById('roomProjector').value = '1';
    const notesEl = document.getElementById('roomNotes');
    if (notesEl) notesEl.value = '';
    document.getElementById('modalRoom').classList.add('active');
  }

  editRoom(id) {
    const r = this.rooms.find(item => item.id === id);
    if (!r) return;
    document.getElementById('modalRoomTitle').textContent = this.lang === 'ar' ? 'تعديل بيانات القاعة' : 'Modifier la Salle';
    document.getElementById('roomId').value = r.id;
    document.getElementById('roomName').value = r.name;
    document.getElementById('roomCapacity').value = r.capacity;
    document.getElementById('roomProjector').value = (r.has_projector == 1 || r.has_projector === true) ? '1' : '0';
    const notesEl = document.getElementById('roomNotes');
    if (notesEl) notesEl.value = r.notes || '';
    document.getElementById('modalRoom').classList.add('active');
  }

  async saveRoom() {
    const id = document.getElementById('roomId').value;
    const notesEl = document.getElementById('roomNotes');
    const payload = {
      name: document.getElementById('roomName').value.trim(),
      capacity: document.getElementById('roomCapacity').value,
      has_projector: document.getElementById('roomProjector').value === '1',
      notes: notesEl ? notesEl.value.trim() : ''
    };
    if (!payload.name) {
      alert(this.lang === 'ar' ? 'يرجى إدخال اسم القاعة' : 'Veuillez saisir le nom de la salle');
      return;
    }
    const url = id ? `/api/rooms/${id}` : '/api/rooms';
    const method = id ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (data.success) {
      this.closeModals();
      await this.loadConfigurationData();
      await this.loadRooms();
    } else {
      alert(data.error || 'Erreur lors de l\'enregistrement de la salle');
    }
  }

  async deleteRoom(id) {
    const confirmMsg = this.lang === 'ar'
      ? 'هل أنت متأكد من حذف هذه القاعة؟'
      : 'Voulez-vous vraiment supprimer cette salle ?';
    if (!confirm(confirmMsg)) return;
    const res = await fetch(`/api/rooms/${id}`, { method: 'DELETE' });
    const data = await res.json();
    if (data.success) {
      await this.loadConfigurationData();
      await this.loadRooms();
    }
  }

  // -------------------------------------------------------------
  // CONFIGURATION: MATIÈRES (SUBJECTS)
  // -------------------------------------------------------------
  async loadSubjects() {
    try {
      const res = await fetch('/api/subjects');
      const data = await res.json();
      if (!data.success) return;
      this.subjects = data.subjects;

      const tbody = document.getElementById('subjectsTableBody');
      if (this.subjects.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--text-muted); padding: 24px;">Aucune matière configurée</td></tr>`;
        return;
      }

      tbody.innerHTML = this.subjects.map(s => `
        <tr>
          <td><strong>${s.name}</strong></td>
          <td><span class="badge-pill" style="background: rgba(255,255,255,0.06);">${s.code || '-'}</span></td>
          <td><span style="display: inline-block; width: 18px; height: 18px; border-radius: 4px; background: ${s.color}; vertical-align: middle;"></span></td>
          <td>
            <div style="display: flex; gap: 8px;">
              <button class="btn-icon" title="Modifier" onclick="app.editSubject(${s.id})">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button class="btn-icon" style="color: #ef4444;" title="Supprimer" onclick="app.deleteSubject(${s.id})">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      `).join('');
    } catch (err) {
      console.error(err);
    }
  }

  openModalSubject() {
    document.getElementById('modalSubjectTitle').textContent = 'Ajouter une Matière';
    document.getElementById('subjectId').value = '';
    document.getElementById('subjectName').value = '';
    document.getElementById('subjectCode').value = '';
    document.getElementById('subjectColor').value = '#3b82f6';
    document.getElementById('modalSubject').classList.add('active');
  }

  editSubject(id) {
    const s = this.subjects.find(item => item.id === id);
    if (!s) return;
    document.getElementById('modalSubjectTitle').textContent = 'Modifier la Matière';
    document.getElementById('subjectId').value = s.id;
    document.getElementById('subjectName').value = s.name;
    document.getElementById('subjectCode').value = s.code || '';
    document.getElementById('subjectColor').value = s.color || '#3b82f6';
    document.getElementById('modalSubject').classList.add('active');
  }

  async saveSubject() {
    const id = document.getElementById('subjectId').value;
    const payload = {
      name: document.getElementById('subjectName').value,
      code: document.getElementById('subjectCode').value,
      color: document.getElementById('subjectColor').value
    };
    const url = id ? `/api/subjects/${id}` : '/api/subjects';
    const method = id ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (data.success) {
      this.closeModals();
      await this.loadConfigurationData();
      this.loadSubjects();
    }
  }

  async deleteSubject(id) {
    if (!confirm('Voulez-vous vraiment supprimer cette matière ?')) return;
    const res = await fetch(`/api/subjects/${id}`, { method: 'DELETE' });
    const data = await res.json();
    if (data.success) {
      await this.loadConfigurationData();
      this.loadSubjects();
    }
  }

  // -------------------------------------------------------------
  // ENSEIGNANTS (TEACHERS) MODAL & ACTIONS
  // -------------------------------------------------------------
  async openModalTeacher() {
    await this.loadConfigurationData();
    const select = document.getElementById('teacherSubject');
    if (select) {
      select.innerHTML = `<option value="">${this.lang === 'ar' ? '-- اختر المادة --' : '-- Choisir une matière --'}</option>` +
        this.subjects.map(s => `<option value="${s.id}">${this.escapeHtml(s.name)}</option>`).join('');
    }

    const form = document.getElementById('teacherForm');
    if (form) form.reset();

    document.getElementById('modalTeacherTitle').textContent = this.lang === 'ar' ? 'إضافة أستاذ جديد' : 'Ajouter un Enseignant';
    document.getElementById('teacherId').value = '';
    const teacherMatriculeEl = document.getElementById('teacherMatricule');
    if (teacherMatriculeEl) teacherMatriculeEl.value = '';
    document.getElementById('teacherFirstName').value = '';
    document.getElementById('teacherLastName').value = '';
    document.getElementById('teacherPhone').value = '';
    const gradeEl = document.getElementById('teacherGrade');
    if (gradeEl) gradeEl.value = 'prof_titulaire';
    const emailEl = document.getElementById('teacherEmail');
    if (emailEl) emailEl.value = '';

    const submitBtn = document.querySelector('#teacherForm button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = this.lang === 'ar' ? 'حفظ الأستاذ' : "Enregistrer l'Enseignant";
    }

    document.getElementById('modalTeacher').classList.add('active');
  }

  async editTeacher(id) {
    await this.loadConfigurationData();
    const t = this.teachers.find(item => item.id === id);
    if (!t) return;

    const select = document.getElementById('teacherSubject');
    if (select) {
      select.innerHTML = `<option value="">${this.lang === 'ar' ? '-- اختر المادة --' : '-- Choisir une matière --'}</option>` +
        this.subjects.map(s => `<option value="${s.id}" ${s.id == t.subject_id ? 'selected' : ''}>${this.escapeHtml(s.name)}</option>`).join('');
    }

    document.getElementById('modalTeacherTitle').textContent = this.lang === 'ar' ? "تعديل بيانات الأستاذ" : "Modifier l'Enseignant";
    document.getElementById('teacherId').value = t.id;
    const teacherMatriculeEl = document.getElementById('teacherMatricule');
    if (teacherMatriculeEl) teacherMatriculeEl.value = t.matricule || '';
    document.getElementById('teacherFirstName').value = t.first_name || '';
    document.getElementById('teacherLastName').value = t.last_name || '';
    document.getElementById('teacherPhone').value = t.phone || '';
    const gradeEl = document.getElementById('teacherGrade');
    if (gradeEl) gradeEl.value = t.grade || 'prof_titulaire';
    const emailEl = document.getElementById('teacherEmail');
    if (emailEl) emailEl.value = t.email || '';

    const submitBtn = document.querySelector('#teacherForm button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = this.lang === 'ar' ? 'حفظ التعديلات' : "Mettre à jour l'Enseignant";
    }

    document.getElementById('modalTeacher').classList.add('active');
  }

  async saveTeacher() {
    if (this._savingTeacher) return;

    const submitBtn = document.querySelector('#teacherForm button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.innerHTML : '';
    const isAr = this.lang === 'ar';

    const id = document.getElementById('teacherId')?.value || '';
    const firstName = document.getElementById('teacherFirstName')?.value?.trim();
    const lastName = document.getElementById('teacherLastName')?.value?.trim();

    if (!firstName || !lastName) {
      this.showToast(isAr ? 'يرجى إدخال الاسم واللقب للأستاذ' : 'Veuillez saisir le nom et prénom de l’enseignant.', 'warning');
      return;
    }

    const payload = {
      matricule: document.getElementById('teacherMatricule') ? document.getElementById('teacherMatricule').value.trim() : '',
      first_name: firstName,
      last_name: lastName,
      phone: document.getElementById('teacherPhone')?.value?.trim() || '',
      email: document.getElementById('teacherEmail')?.value?.trim() || '',
      subject_id: document.getElementById('teacherSubject')?.value || '',
      grade: document.getElementById('teacherGrade')?.value || 'prof_titulaire'
    };

    const url = id ? `/api/teachers/${id}` : '/api/teachers';
    const method = id ? 'PUT' : 'POST';

    this._savingTeacher = true;
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${isAr ? 'جاري الحفظ...' : 'Enregistrement...'}`;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);

    try {
      const res = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      const data = await res.json();
      if (data.success) {
        this.closeModals();
        const form = document.getElementById('teacherForm');
        if (form) form.reset();
        const idField = document.getElementById('teacherId');
        if (idField) idField.value = '';
        const searchInput = document.getElementById('searchTeacherInput');
        if (searchInput) searchInput.value = '';

        this.playChime('success');
        this.showToast(isAr ? 'تم حفظ بيانات الأستاذ بنجاح!' : 'Enseignant enregistré avec succès !', 'success');
        await this.loadTeachers();
      } else {
        this.showToast(data.error || (isAr ? 'حدث خطأ أثناء الحفظ' : 'Erreur lors de l’enregistrement'), 'error');
      }
    } catch (e) {
      clearTimeout(timeoutId);
      console.error(e);
      if (e.name === 'AbortError') {
        this.showToast(isAr ? 'انتهت مهلة الاتصال بالخادم، يرجى إعادة المحاولة' : 'Délai d’attente dépassé, veuillez réessayer', 'warning');
      } else {
        this.showToast(isAr ? 'خطأ في الاتصال بالخادم' : 'Erreur réseau ou serveur', 'error');
      }
    } finally {
      this._savingTeacher = false;
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    }
  }

  async deleteTeacher(id) {
    const isAr = this.lang === 'ar';
    if (!confirm(isAr ? 'هل أنت متأكد من رغبتك في حذف أو إلغاء تفعيل هذا الأستاذ؟' : 'Voulez-vous vraiment désactiver cet enseignant ?')) return;
    try {
      const res = await fetch(`/api/teachers/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        this.showToast(isAr ? 'تم إلغاء تفعيل الأستاذ بنجاح' : 'Enseignant désactivé avec succès', 'info');
        await this.loadTeachers();
      } else {
        this.showToast(data.error || (isAr ? 'حدث خطأ أثناء الحذف' : 'Erreur lors de la suppression'), 'error');
      }
    } catch (e) {
      console.error(e);
      this.showToast(isAr ? 'خطأ في الاتصال بالخادم' : 'Erreur réseau ou serveur', 'error');
    }
  }

  // -------------------------------------------------------------
  // GROUPES & PLANNING ENGINE (CONFLICTS & WEEKLY VIEW)
  // -------------------------------------------------------------
  togglePlanningView() {
    const listEl = document.getElementById('planningListView');
    const gridEl = document.getElementById('planningGridView');
    const textEl = document.getElementById('planningViewText');
    const btnEl = document.getElementById('btnPlanningToggle');

    if (listEl.style.display === 'none') {
      listEl.style.display = 'block';
      gridEl.style.display = 'none';
      textEl.textContent = 'Vue Grille Hebdo';
      btnEl.querySelector('i').className = 'fa-solid fa-table-cells';
    } else {
      listEl.style.display = 'none';
      gridEl.style.display = 'block';
      textEl.textContent = 'Vue Liste';
      btnEl.querySelector('i').className = 'fa-solid fa-list';
      this.renderWeeklyScheduleGrid();
    }
  }

  renderWeeklyScheduleGrid() {
    const container = document.getElementById('weeklyScheduleGrid');
    if (!container) return;

    // Week days starting from Saturday (Standard for Algerian / MENA schools)
    const daysConfig = [
      { key: 'Samedi', labelFr: 'Samedi', labelAr: 'السبت' },
      { key: 'Dimanche', labelFr: 'Dimanche', labelAr: 'الأحد' },
      { key: 'Lundi', labelFr: 'Lundi', labelAr: 'الإثنين' },
      { key: 'Mardi', labelFr: 'Mardi', labelAr: 'الثلاثاء' },
      { key: 'Mercredi', labelFr: 'Mercredi', labelAr: 'الأربعاء' },
      { key: 'Jeudi', labelFr: 'Jeudi', labelAr: 'الخميس' },
      { key: 'Vendredi', labelFr: 'Vendredi', labelAr: 'الجمعة' }
    ];

    const isAr = (this.currentLang || 'fr') === 'ar';
    const groups = this.getFilteredPlanningGroups ? this.getFilteredPlanningGroups() : (this.groups || []);

    container.innerHTML = daysConfig.map(dayObj => {
      const dayGroups = groups
        .filter(g => this.normalizeDay(g.day_of_week) === dayObj.key)
        .sort((a, b) => (a.start_time || '').localeCompare(b.start_time || ''));

      const displayLabel = isAr ? dayObj.labelAr : `${dayObj.labelFr} / ${dayObj.labelAr}`;

      const cardsHtml = dayGroups.length === 0
        ? `<div style="color: var(--text-muted); font-size: 11.5px; text-align: center; padding: 26px 8px; font-style: italic;">
             <i class="fa-regular fa-calendar-xmark" style="display: block; font-size: 20px; margin-bottom: 6px; opacity: 0.35;"></i>
             Aucun cours
           </div>`
        : dayGroups.map(g => {
          const hasRoom = !!g.room_name;
          const durHours = this.calculateDurationHours(g.start_time, g.end_time);
          const durText = this.formatDuration(durHours);

          return `
              <div class="schedule-card" style="border-left: 4px solid ${hasRoom ? '#3b82f6' : '#ef4444'};" onclick="app.editGroup(${g.id})" title="Cliquer pour modifier ce groupe">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 4px; gap: 4px;">
                  <span class="badge-pill" style="background: rgba(59, 130, 246, 0.15); color: #60a5fa; font-size: 10px; padding: 2px 6px; max-width: 58%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    ${this.escapeHtml(g.subject_name || 'Matière')}
                  </span>
                  <span style="font-size: 11px; font-weight: 700; color: #10b981; white-space: nowrap;">
                    ${g.start_time || ''} - ${g.end_time || ''}
                  </span>
                </div>
                <div style="font-weight: 700; font-size: 12.5px; color: var(--text-main); margin-bottom: 3px; line-height: 1.3;">
                  ${this.escapeHtml(g.name)}
                </div>
                <div style="font-size: 11px; color: var(--text-muted); display: flex; justify-content: space-between; align-items: center;">
                  <span><i class="fa-solid fa-chalkboard-user" style="color: #a78bfa;"></i> ${this.escapeHtml(g.teacher_name || '-')}</span>
                  <span style="font-size: 10.5px; color: var(--text-muted);">${durText}</span>
                </div>
                <div style="font-size: 11px; color: var(--text-muted); display: flex; justify-content: space-between; align-items: center; margin-top: 4px; padding-top: 4px; border-top: 1px solid rgba(255,255,255,0.05);">
                  ${hasRoom
              ? `<span><i class="fa-solid fa-door-open" style="color: #38bdf8;"></i> ${this.escapeHtml(g.room_name)}</span>`
              : `<span style="color: #ef4444; font-weight: 600;"><i class="fa-solid fa-triangle-exclamation"></i> Sans salle</span>`
            }
                  <span style="color: #60a5fa; font-weight: 600;">${g.enrolled_count || 0}/${g.max_students}</span>
                </div>
              </div>
            `;
        }).join('');

      return `
        <div class="day-column">
          <div class="day-header">
            <div class="day-header-left">
              <span>${displayLabel}</span>
              <span class="day-count-badge">${dayGroups.length}</span>
            </div>
            <button type="button" class="day-quick-add-btn" onclick="app.quickAddGroupForDay('${dayObj.key}')" title="Ajouter une séance ce jour">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
          <div class="day-cards">
            ${cardsHtml}
          </div>
        </div>
      `;
    }).join('');
  }

  quickAddGroupForDay(day) {
    this.openModalGroup();
    const daySelect = document.getElementById('groupDay');
    if (daySelect) {
      daySelect.value = day;
      this.checkGroupFormConflicts();
    }
  }

  printPlanning() {
    const filtered = this.getFilteredPlanningGroups ? this.getFilteredPlanningGroups() : (this.groups || []);
    const schoolName = this.settings?.school_name || 'EDUMIND Academy';
    const activeYear = this.settings?.active_year || '2025-2026';
    const phone = this.settings?.school_phone || '';
    const nowStr = new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    const teacherSelect = document.getElementById('filterPlanningTeacher');
    const teacherId = teacherSelect?.value;
    const teacherText = teacherId && teacherSelect.selectedOptions[0] ? teacherSelect.selectedOptions[0].text : null;

    const roomSelect = document.getElementById('filterPlanningRoom');
    const roomId = roomSelect?.value;
    const roomText = roomId && roomSelect.selectedOptions[0] ? roomSelect.selectedOptions[0].text : null;

    let subtitle = "Emploi du Temps Général";
    if (teacherText && teacherId) subtitle = `Emploi du Temps — Enseignant: ${teacherText}`;
    else if (roomText && roomId) subtitle = `Emploi du Temps — Salle: ${roomText}`;

    const daysOrder = ['Samedi', 'Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];
    const rows = [...filtered].sort((a, b) => {
      const d1 = daysOrder.indexOf(this.normalizeDay(a.day_of_week));
      const d2 = daysOrder.indexOf(this.normalizeDay(b.day_of_week));
      if (d1 !== d2) return d1 - d2;
      return (a.start_time || '').localeCompare(b.start_time || '');
    });

    const printWin = window.open('', '_blank');
    if (!printWin) {
      alert('Veuillez autoriser les fenêtres pop-up pour imprimer');
      return;
    }

    printWin.document.write(`
      <!DOCTYPE html>
      <html lang="fr" dir="ltr">
      <head>
        <meta charset="utf-8">
        <title>${subtitle} - ${schoolName}</title>
        <style>
          @page { size: A4 landscape; margin: 12mm; }
          html, body { background-color: #ffffff !important; color: #1e293b !important; }
          body { font-family: 'Segoe UI', Arial, sans-serif; color: #1e293b; margin: 0; padding: 10px; font-size: 12px; background: #ffffff !important; }
          .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #2563eb; padding-bottom: 10px; margin-bottom: 14px; }
          .title { font-size: 20px; font-weight: bold; color: #1e3a8a; }
          .subtitle { font-size: 14px; color: #2563eb; font-weight: 600; margin-top: 4px; }
          .meta { text-align: right; font-size: 11px; color: #64748b; }
          table { width: 100%; border-collapse: collapse; margin-top: 10px; background-color: #ffffff !important; }
          th { background: #f1f5f9; color: #334155; font-weight: 700; text-align: left; padding: 8px 10px; border: 1px solid #cbd5e1; font-size: 11px; }
          td { padding: 7px 10px; border: 1px solid #cbd5e1; font-size: 11.5px; color: #1e293b; }
          tbody tr { background-color: #ffffff !important; }
          tbody tr:nth-child(even) { background-color: #f8fafc !important; }
          .badge { display: inline-block; padding: 2px 7px; border-radius: 4px; font-size: 10.5px; font-weight: 600; }
          .badge-day { background: #eff6ff; color: #1d4ed8; font-weight: bold; }
          .badge-sub { background: #f5f3ff; color: #6d28d9; }
          .footer { margin-top: 20px; display: flex; justify-content: space-between; font-size: 10px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 8px; }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="title">${this.escapeHtml(schoolName)}</div>
            <div class="subtitle">${this.escapeHtml(subtitle)}</div>
          </div>
          <div class="meta">
            <div>Année Scolaire: <strong>${this.escapeHtml(activeYear)}</strong></div>
            <div>Date: ${nowStr}</div>
            ${phone ? `<div>Tél: ${this.escapeHtml(phone)}</div>` : ''}
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Jour</th>
              <th>Horaire</th>
              <th>Groupe</th>
              <th>Matière</th>
              <th>Niveau</th>
              <th>Enseignant</th>
              <th>Salle</th>
              <th>Effectif</th>
            </tr>
          </thead>
          <tbody>
            ${rows.length === 0 ? '<tr><td colspan="8" style="text-align: center; padding: 20px; color: #94a3b8;">Aucune séance trouvée</td></tr>' :
        rows.map(g => `
                <tr>
                  <td><span class="badge badge-day">${this.normalizeDay(g.day_of_week) || '-'}</span></td>
                  <td><strong>${g.start_time || ''} - ${g.end_time || ''}</strong></td>
                  <td><strong>${this.escapeHtml(g.name)}</strong></td>
                  <td><span class="badge badge-sub">${this.escapeHtml(g.subject_name || '-')}</span></td>
                  <td>${this.escapeHtml(g.level_name || '-')}</td>
                  <td>${this.escapeHtml(g.teacher_name || '-')}</td>
                  <td>${this.escapeHtml(g.room_name || 'Non assignée')}</td>
                  <td>${g.enrolled_count || 0} / ${g.max_students}</td>
                </tr>
              `).join('')}
          </tbody>
        </table>

        <div class="footer">
          <div>Total: ${rows.length} séances programmées</div>
          <div>EDUMIND — Système de Gestion Scolaire</div>
        </div>

        <script>
          window.onload = function() {
            setTimeout(function() { window.print(); }, 400);
          };
        </script>
      </body>
      </html>
    `);
    printWin.document.close();
  }

  async checkGroupFormConflicts() {
    const alertBox = document.getElementById('groupConflictAlert');
    const alertMsg = document.getElementById('groupConflictMessage');
    const forceLabel = document.getElementById('forceConflictCheckLabel');
    const forceInput = document.getElementById('forceScheduleConflict');

    const day_of_week = document.getElementById('groupDay').value;
    const start_time = document.getElementById('groupStartTime').value;
    const end_time = document.getElementById('groupEndTime').value;
    const room_id = document.getElementById('groupRoom').value;
    const teacher_id = document.getElementById('groupTeacher').value;
    const exclude_group_id = document.getElementById('groupId').value || null;

    if (!day_of_week || !start_time || !end_time || (!room_id && !teacher_id)) {
      alertBox.style.display = 'none';
      forceLabel.style.display = 'none';
      return;
    }

    try {
      const res = await fetch('/api/planning/check-conflicts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ day_of_week, start_time, end_time, room_id, teacher_id, exclude_group_id })
      });
      const data = await res.json();

      if (data.hasConflict && data.conflicts && data.conflicts.length > 0) {
        const msgs = data.conflicts.map(c => `• ${this.escapeHtml(c.message)}`).join('<br>');
        alertMsg.innerHTML = msgs;
        alertBox.style.display = 'block';
        forceLabel.style.display = 'block';
      } else {
        alertBox.style.display = 'none';
        forceLabel.style.display = 'none';
        if (forceInput) forceInput.checked = false;
      }
    } catch (e) {
      console.error('Error checking conflicts:', e);
    }
  }

  checkModalRoomsAvailability() {
    const day = document.getElementById('groupDay')?.value || 'Samedi';
    const start = document.getElementById('groupStartTime')?.value || '14:00';
    const end = document.getElementById('groupEndTime')?.value || '16:00';

    this.openModalRoomsAvailability(day, start, end);
  }

  async openModalRoomsAvailability(presetDay, presetStart, presetEnd) {
    if (presetDay) document.getElementById('availFilterDay').value = presetDay;
    if (presetStart) document.getElementById('availFilterStart').value = presetStart;
    if (presetEnd) document.getElementById('availFilterEnd').value = presetEnd;

    document.getElementById('modalRoomAvailability').classList.add('active');
    await this.loadRoomsAvailability();
  }

  async loadRoomsAvailability() {
    const day = document.getElementById('availFilterDay').value;
    const start = document.getElementById('availFilterStart').value;
    const end = document.getElementById('availFilterEnd').value;
    const grid = document.getElementById('roomsAvailabilityGrid');

    try {
      grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 20px; color: var(--text-muted);"><i class="fa-solid fa-spinner fa-spin"></i> Vérification des disponibilités...</div>`;
      const res = await fetch(`/api/planning/rooms-availability?day_of_week=${encodeURIComponent(day)}&start_time=${encodeURIComponent(start)}&end_time=${encodeURIComponent(end)}`);
      const data = await res.json();
      if (!data.success) return;

      if (data.rooms.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 20px; color: var(--text-muted);">Aucune salle enregistrée dans le système.</div>`;
        return;
      }

      grid.innerHTML = data.rooms.map(r => {
        const isFree = r.is_available;
        const borderCol = isFree ? '#10b981' : '#ef4444';
        const bgBadge = isFree ? 'rgba(16, 185, 129, 0.12)' : 'rgba(239, 68, 68, 0.12)';
        const textBadge = isFree ? '#10b981' : '#ef4444';
        const iconBadge = isFree ? 'fa-check' : 'fa-ban';

        return `
          <div class="room-avail-card" style="border: 1.5px solid ${borderCol}; border-radius: 8px; padding: 12px; background: var(--card-bg);">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
              <strong style="font-size: 14px;">${this.escapeHtml(r.name)}</strong>
              <span class="badge-pill" style="background: ${bgBadge}; color: ${textBadge}; font-size: 11px;">
                <i class="fa-solid ${iconBadge}"></i> ${isFree ? 'Disponible' : 'Occupée'}
              </span>
            </div>
            <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 8px;">
              <div><i class="fa-solid fa-users"></i> Capacité: <strong>${r.capacity}</strong> places</div>
              <div><i class="fa-solid fa-video"></i> Vidéoprojecteur: <strong>${r.has_projector ? 'Oui' : 'Non'}</strong></div>
            </div>
            ${!isFree && r.occupied_by ? `
              <div style="background: #fef2f2; border: 1px solid #fee2e2; border-radius: 4px; padding: 6px 8px; font-size: 11px; color: #991b1b; margin-bottom: 10px;">
                Occupée par: <strong>${this.escapeHtml(r.occupied_by.group_name)}</strong> (${r.occupied_by.start_time} - ${r.occupied_by.end_time})
              </div>
            ` : ''}
            ${isFree ? `
              <button type="button" class="btn-primary" style="width: 100%; font-size: 11.5px; padding: 6px;" onclick="app.selectRoomFromAvailability(${r.id})">
                <i class="fa-solid fa-check"></i> Choisir cette salle
              </button>
            ` : ''}
          </div>
        `;
      }).join('');
    } catch (e) {
      console.error(e);
      grid.innerHTML = `<div style="grid-column: 1/-1; color: #ef4444; text-align: center;">Erreur de connexion</div>`;
    }
  }

  selectRoomFromAvailability(roomId) {
    const select = document.getElementById('groupRoom');
    if (select) {
      select.value = roomId;
    }
    document.getElementById('modalRoomAvailability').classList.remove('active');
    this.checkGroupFormConflicts();
  }

  async openModalGroup() {
    await this.loadConfigurationData();
    await this.loadTeachers();

    const lvlSelect = document.getElementById('groupLevel');
    lvlSelect.innerHTML = this.levels.map(l => `<option value="${l.id}">${this.escapeHtml(l.name)}</option>`).join('');

    const subSelect = document.getElementById('groupSubject');
    subSelect.innerHTML = this.subjects.map(s => `<option value="${s.id}">${this.escapeHtml(s.name)}</option>`).join('');

    const isAr = this.lang === 'ar';
    const tchSelect = document.getElementById('groupTeacher');
    tchSelect.innerHTML = `<option value="">${isAr ? '-- اختر الأستاذ --' : '-- Choisir un enseignant --'}</option>` +
      this.teachers.map(t => `<option value="${t.id}">${this.escapeHtml(t.name || `${t.first_name || ''} ${t.last_name || ''}`.trim())}</option>`).join('');

    const rmSelect = document.getElementById('groupRoom');
    rmSelect.innerHTML = '<option value="">-- Choisir une salle --</option>' +
      this.rooms.map(r => `<option value="${r.id}">${this.escapeHtml(r.name)} (${r.capacity} pl)</option>`).join('');

    document.getElementById('modalGroupTitle').textContent = 'Créer un Nouveau Groupe';
    document.getElementById('groupId').value = '';
    document.getElementById('groupName').value = '';
    document.getElementById('groupDay').value = 'Samedi';
    document.getElementById('groupStartTime').value = '14:00';
    document.getElementById('groupEndTime').value = '16:00';
    document.getElementById('groupPrice').value = '2000';
    document.getElementById('groupMaxStudents').value = '25';

    // Reset conflict elements
    document.getElementById('groupConflictAlert').style.display = 'none';
    document.getElementById('forceConflictCheckLabel').style.display = 'none';
    const forceCheck = document.getElementById('forceScheduleConflict');
    if (forceCheck) forceCheck.checked = false;

    document.getElementById('modalGroup').classList.add('active');
  }

  async editGroup(id) {
    await this.loadConfigurationData();
    await this.loadTeachers();
    const g = this.groups.find(item => item.id === id);
    if (!g) return;

    const lvlSelect = document.getElementById('groupLevel');
    lvlSelect.innerHTML = this.levels.map(l => `<option value="${l.id}" ${l.id == g.level_id ? 'selected' : ''}>${this.escapeHtml(l.name)}</option>`).join('');

    const subSelect = document.getElementById('groupSubject');
    subSelect.innerHTML = this.subjects.map(s => `<option value="${s.id}" ${s.id == g.subject_id ? 'selected' : ''}>${this.escapeHtml(s.name)}</option>`).join('');

    const isAr = this.lang === 'ar';
    const tchSelect = document.getElementById('groupTeacher');
    tchSelect.innerHTML = `<option value="">${isAr ? '-- اختر الأستاذ --' : '-- Choisir un enseignant --'}</option>` +
      this.teachers.map(t => `<option value="${t.id}" ${t.id == g.teacher_id ? 'selected' : ''}>${this.escapeHtml(t.name || `${t.first_name || ''} ${t.last_name || ''}`.trim())}</option>`).join('');

    const rmSelect = document.getElementById('groupRoom');
    rmSelect.innerHTML = '<option value="">-- Choisir une salle --</option>' +
      this.rooms.map(r => `<option value="${r.id}" ${r.id == g.room_id ? 'selected' : ''}>${this.escapeHtml(r.name)} (${r.capacity} pl)</option>`).join('');

    document.getElementById('modalGroupTitle').textContent = 'Modifier le Groupe';
    document.getElementById('groupId').value = g.id;
    document.getElementById('groupName').value = g.name;
    document.getElementById('groupDay').value = g.day_of_week || 'Samedi';
    document.getElementById('groupStartTime').value = g.start_time || '14:00';
    document.getElementById('groupEndTime').value = g.end_time || '16:00';
    document.getElementById('groupPrice').value = g.price_monthly;
    document.getElementById('groupMaxStudents').value = g.max_students;

    // Reset conflict elements
    document.getElementById('groupConflictAlert').style.display = 'none';
    document.getElementById('forceConflictCheckLabel').style.display = 'none';
    const forceCheck = document.getElementById('forceScheduleConflict');
    if (forceCheck) forceCheck.checked = false;

    document.getElementById('modalGroup').classList.add('active');
    this.checkGroupFormConflicts();
  }

  async saveGroup() {
    const id = document.getElementById('groupId').value;
    const force = document.getElementById('forceScheduleConflict')?.checked || false;

    const payload = {
      name: document.getElementById('groupName').value.trim(),
      level_id: document.getElementById('groupLevel').value,
      subject_id: document.getElementById('groupSubject').value,
      teacher_id: document.getElementById('groupTeacher').value,
      room_id: document.getElementById('groupRoom').value,
      day_of_week: document.getElementById('groupDay').value,
      start_time: document.getElementById('groupStartTime').value,
      end_time: document.getElementById('groupEndTime').value,
      price_monthly: document.getElementById('groupPrice').value,
      max_students: document.getElementById('groupMaxStudents').value,
      force: force
    };

    if (!payload.name) {
      alert('Veuillez saisir un nom pour le groupe.');
      return;
    }

    const url = id ? `/api/groups/${id}` : '/api/groups';
    const method = id ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();

      if (res.status === 409 || (!data.success && data.conflicts)) {
        // Schedule Conflict triggered!
        const alertBox = document.getElementById('groupConflictAlert');
        const alertMsg = document.getElementById('groupConflictMessage');
        const forceLabel = document.getElementById('forceConflictCheckLabel');

        const msgs = (data.conflicts || [{ message: data.error }]).map(c => `• ${this.escapeHtml(c.message || data.error)}`).join('<br>');
        alertMsg.innerHTML = msgs;
        alertBox.style.display = 'block';
        forceLabel.style.display = 'block';
        return;
      }

      if (data.success) {
        this.closeModals();
        await this.loadGroups();
        if (typeof this.loadGroupesView === 'function') await this.loadGroupesView();
        if (typeof this.renderWeeklyScheduleGrid === 'function') this.renderWeeklyScheduleGrid();
      } else {
        alert(data.error || 'Erreur lors de l’enregistrement');
      }
    } catch (e) {
      console.error(e);
      alert('Erreur réseau');
    }
  }

  async deleteGroup(id) {
    if (!confirm(this.lang === 'ar' ? 'هل تريد حقاً تعطيل هذا الفوج؟' : 'Voulez-vous vraiment désactiver ce groupe ?')) return;
    try {
      const res = await fetch(`/api/groups/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        await this.loadGroups();
        if (typeof this.loadGroupesView === 'function') await this.loadGroupesView();
        if (typeof this.renderWeeklyScheduleGrid === 'function') this.renderWeeklyScheduleGrid();
      }
    } catch (e) {
      console.error(e);
    }
  }

  // ===========================================================================
  // INSCRIPTIONS (ENROLLMENTS) - 3-STEP POP-UP WIZARD & REGISTRATION TABLE
  // ===========================================================================
  async loadInscriptionsView(preselectedStudentId) {
    try {
      if (!this.inscriptionsList) this.inscriptionsList = [];

      // Load dependencies concurrently
      await Promise.all([
        this.loadStudents(),
        this.loadGroups(),
        this.loadLevels ? this.loadLevels() : Promise.resolve(),
        this.loadSubjects ? this.loadSubjects() : Promise.resolve()
      ]);

      // Setup Level & Group filters in Table
      const filterLvlSelect = document.getElementById('filterEnrollmentLevel');
      if (filterLvlSelect) {
        const isAr = this.lang === 'ar';
        filterLvlSelect.innerHTML = `<option value="all">${isAr ? 'كل المستويات' : 'Tous les niveaux'}</option>` +
          (this.levels || []).map(l => `<option value="${l.id}">${l.name}</option>`).join('');
      }

      const filterGrpSelect = document.getElementById('filterEnrollmentGroup');
      if (filterGrpSelect) {
        const isAr = this.lang === 'ar';
        filterGrpSelect.innerHTML = `<option value="all">${isAr ? 'كل الأفواج' : 'Tous les groupes'}</option>` +
          (this.groups || []).map(g => `<option value="${g.id}">${g.name} (${g.subject_name || ''})</option>`).join('');
      }

      // Load & Render Existing Inscriptions List
      await this.loadInscriptionsList();

      // If preselected, open wizard immediately for this student
      if (preselectedStudentId) {
        this.openEnrollmentWizard(preselectedStudentId);
      }
    } catch (err) {
      console.error('Erreur lors du chargement de la vue inscriptions:', err);
    }
  }

  // ==================== 3-STEP ENROLLMENT WIZARD ====================

  async openEnrollmentWizard(preselectedStudentId = null, preselectedGroupId = null) {
    // Ensure core dependencies are loaded if called from elsewhere
    if (!this.students || this.students.length === 0 || !this.groups || this.groups.length === 0 || !this.inscriptionsList) {
      await Promise.all([
        (!this.students || this.students.length === 0) ? this.loadStudents() : Promise.resolve(),
        (!this.groups || this.groups.length === 0) ? this.loadGroups() : Promise.resolve(),
        (!this.levels || this.levels.length === 0) && this.loadLevels ? this.loadLevels() : Promise.resolve(),
        (!this.subjects || this.subjects.length === 0) && this.loadSubjects ? this.loadSubjects() : Promise.resolve(),
        (!this.inscriptionsList) ? this.loadInscriptionsList() : Promise.resolve()
      ]);
    }

    // Initialize wizard state
    this.enrollWizard = {
      step: 1,
      selectedStudent: null,
      selectedLevelId: null,
      selectedSubjectId: 'all',
      selectedGroup: null,
      discount: 0,
      preselectedGroupId: preselectedGroupId || null
    };

    // If preselectedGroupId is provided, find and preselect group and its level
    if (preselectedGroupId && this.groups) {
      const targetGroup = this.groups.find(g => String(g.id) === String(preselectedGroupId));
      if (targetGroup) {
        this.enrollWizard.selectedGroup = targetGroup;
        this.enrollWizard.selectedLevelId = targetGroup.level_id || null;
        if (targetGroup.subject_id) this.enrollWizard.selectedSubjectId = targetGroup.subject_id;
      }
    }

    // Reset date to today
    const dateInput = document.getElementById('wizardRegDate');
    if (dateInput) dateInput.value = new Date().toISOString().slice(0, 10);

    // Reset discount
    const discountInput = document.getElementById('wizardDiscountInput');
    if (discountInput) discountInput.value = '0';
    this.setWizardDiscount(0);

    // Reset search input
    const searchInput = document.getElementById('wizardStudentSearchInput');
    if (searchInput) searchInput.value = '';

    // Open modal
    const modal = document.getElementById('modalEnrollmentWizard');
    if (modal) modal.classList.add('active');

    if (preselectedStudentId) {
      this.selectWizardStudent(preselectedStudentId);
      if (preselectedGroupId) {
        this.goToEnrollmentStep(3);
      } else {
        this.goToEnrollmentStep(2);
      }
    } else {
      this.resetWizardStudentSelection();
      this.goToEnrollmentStep(1);
    }
  }

  closeEnrollmentWizard() {
    const modal = document.getElementById('modalEnrollmentWizard');
    if (modal) modal.classList.remove('active');
  }

  goToEnrollmentStep(targetStep) {
    const isAr = this.lang === 'ar';

    // Step 1 Validation: Must have selected a student before moving to step 2 or 3
    if (targetStep > 1 && !this.enrollWizard.selectedStudent) {
      alert(isAr ? 'يرجى اختيار التلميذ أولاً للمتابعة' : 'Veuillez sélectionner un élève avant de continuer.');
      return;
    }

    // Step 2 Validation: Must have selected a level before moving to step 3
    if (targetStep > 2 && !this.enrollWizard.selectedLevelId) {
      alert(isAr ? 'يرجى اختيار المستوى الدراسي للمتابعة' : 'Veuillez sélectionner un niveau scolaire.');
      return;
    }

    this.enrollWizard.step = targetStep;

    // 1. Update Stepper Indicator UI
    for (let i = 1; i <= 3; i++) {
      const item = document.getElementById(`wizardStepIndicator${i}`);
      const line = document.getElementById(`wizardStepLine${i}`);
      const pane = document.getElementById(`wizardStepPane${i}`);

      if (item) {
        item.classList.remove('active', 'completed');
        if (i < targetStep) item.classList.add('completed');
        else if (i === targetStep) item.classList.add('active');
      }

      if (line) {
        if (i < targetStep) line.classList.add('filled');
        else line.classList.remove('filled');
      }

      if (pane) {
        if (i === targetStep) pane.classList.add('active');
        else pane.classList.remove('active');
      }
    }

    // 2. Update Footer Navigation Buttons
    const btnPrev = document.getElementById('btnWizardPrev');
    const btnNext = document.getElementById('btnWizardNext');
    const btnConfirm = document.getElementById('btnWizardConfirm');
    const btnConfirmPay = document.getElementById('btnWizardConfirmAndPay');
    const btnCancel = document.getElementById('btnWizardCancel');

    const arrowNext = isAr ? 'fa-arrow-left' : 'fa-arrow-right';
    const arrowPrev = isAr ? 'fa-arrow-right' : 'fa-arrow-left';

    if (btnCancel) {
      btnCancel.innerHTML = `<span data-i18n="btn_cancel">${isAr ? 'إلغاء' : 'Annuler'}</span>`;
    }

    if (btnPrev) {
      btnPrev.style.display = targetStep > 1 ? 'inline-flex' : 'none';
      btnPrev.innerHTML = `<i class="fa-solid ${arrowPrev}" style="${isAr ? 'margin-left:8px;' : 'margin-right:8px;'}"></i> <span data-i18n="btn_prev">${isAr ? 'السابق' : 'Précédent'}</span>`;
    }

    if (targetStep === 1) {
      if (btnNext) {
        btnNext.style.display = 'inline-flex';
        btnNext.innerHTML = `<span>${isAr ? 'التالي: اختيار المستوى' : 'Suivant : Niveau'}</span> <i class="fa-solid ${arrowNext}" style="${isAr ? 'margin-right:8px;' : 'margin-left:8px;'}"></i>`;
      }
      if (btnConfirm) btnConfirm.style.display = 'none';
      if (btnConfirmPay) btnConfirmPay.style.display = 'none';

      if (!this.enrollWizard.selectedStudent) {
        this.searchWizardStudents('');
        const sInput = document.getElementById('wizardStudentSearchInput');
        if (sInput) setTimeout(() => sInput.focus(), 100);
      }
    } else if (targetStep === 2) {
      if (btnNext) {
        btnNext.style.display = 'inline-flex';
        btnNext.innerHTML = `<span>${isAr ? 'التالي: المادة والفوج' : 'Suivant : Groupe'}</span> <i class="fa-solid ${arrowNext}" style="${isAr ? 'margin-right:8px;' : 'margin-left:8px;'}"></i>`;
      }
      if (btnConfirm) btnConfirm.style.display = 'none';
      if (btnConfirmPay) btnConfirmPay.style.display = 'none';

      this.renderWizardLevels();
    } else if (targetStep === 3) {
      if (btnNext) btnNext.style.display = 'none';
      if (btnConfirm) {
        btnConfirm.style.display = 'inline-flex';
        btnConfirm.innerHTML = `<i class="fa-solid fa-check-double" style="${isAr ? 'margin-left:6px;' : 'margin-right:6px;'}"></i> <span data-i18n="wizard_btn_confirm">${isAr ? 'تأكيد التسجيل' : "Confirmer l'inscription"}</span>`;
      }
      if (btnConfirmPay) {
        btnConfirmPay.style.display = 'inline-flex';
        btnConfirmPay.innerHTML = `<i class="fa-solid fa-cash-register" style="${isAr ? 'margin-left:6px;' : 'margin-right:6px;'}"></i> <span data-i18n="wizard_btn_confirm_pay">${isAr ? 'تسجيل ودفع فوري' : 'Inscrire & Encaisser'}</span>`;
        btnConfirmPay.title = isAr ? 'تأكيد التسجيل وفتح وصل الدفع فوراً' : "Confirmer l'inscription et ouvrir le reçu de paiement immédiatement";
      }

      this.renderWizardSubjectPills();
      this.renderWizardGroups();
      this.updateWizardCalculations();
    }
  }

  goToNextEnrollmentStep() {
    this.goToEnrollmentStep(this.enrollWizard.step + 1);
  }

  goToPrevEnrollmentStep() {
    this.goToEnrollmentStep(this.enrollWizard.step - 1);
  }

  // ---------- STEP 1: STUDENT SELECTION ----------

  searchWizardStudents(query = '') {
    const listContainer = document.getElementById('wizardStudentsResultsList');
    const clearBtn = document.getElementById('btnClearWizardStudentSearch');
    if (clearBtn) clearBtn.style.display = query ? 'block' : 'none';
    if (!listContainer) return;

    const isAr = this.lang === 'ar';
    const students = this.students || [];
    const term = (query || '').trim().toLowerCase();

    // If search term is empty, do NOT show the students list initially
    if (!term) {
      listContainer.innerHTML = `
        <div style="padding: 34px 16px; text-align: center; color: var(--text-muted);">
          <div style="width: 48px; height: 48px; border-radius: 50%; background: rgba(6, 182, 212, 0.1); border: 1px solid rgba(6, 182, 212, 0.25); display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; color: #06b6d4; font-size: 20px;">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div style="font-weight: 600; font-size: 14px; margin-bottom: 4px; color: var(--text-heading);">
            ${isAr ? 'اكتب اسم أو لقب أو رقم قيد التلميذ للبحث' : 'Tapez le nom, prénom ou matricule pour rechercher'}
          </div>
          <div style="font-size: 12px; color: var(--text-muted);">
            ${isAr ? 'ستظهر نتائج البحث فورياً بمجرد الكتابة' : 'Les résultats de recherche apparaîtront instantanément'}
          </div>
        </div>
      `;
      return;
    }

    const norm = (str) => (str || '').toLowerCase()
      .replace(/[أإآ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/ى/g, 'ي')
      .trim();

    const normTerm = norm(term);

    const filtered = students.filter(s => {
      const fn = norm(s.first_name);
      const ln = norm(s.last_name);
      const mat = (s.matricule || '').toLowerCase();
      const phone = (s.phone || '').toLowerCase();
      const pphone = (s.parent_phone || '').toLowerCase();
      return `${fn} ${ln}`.includes(normTerm) ||
             `${ln} ${fn}`.includes(normTerm) ||
             mat.includes(normTerm) ||
             phone.includes(normTerm) ||
             pphone.includes(normTerm);
    });

    if (filtered.length === 0) {
      listContainer.innerHTML = `
        <div style="padding: 30px 16px; text-align: center; color: var(--text-muted);">
          <i class="fa-solid fa-user-slash" style="font-size: 26px; color: #94a3b8; margin-bottom: 8px; display: block; opacity: 0.7;"></i>
          <div style="font-weight: 600; font-size: 13.5px; color: var(--text-heading);">
            ${isAr ? 'لم يتم العثور على أي تلميذ يطابق بحثك' : 'Aucun élève trouvé'}
          </div>
        </div>
      `;
      return;
    }

    listContainer.innerHTML = filtered.map(s => {
      const initials = `${(s.first_name || '')[0] || ''}${(s.last_name || '')[0] || ''}`.toUpperCase() || 'E';
      const lvl = s.level_name || (this.levels && this.levels.find(l => l.id === s.level_id)?.name) || '';
      const phone = s.phone || s.parent_phone || '';
      
      const activeCount = (this.inscriptionsList || []).filter(e => String(e.student_id) === String(s.id) && e.status === 'active').length;
      const countTag = activeCount > 0
        ? `<span class="badge-pill badge-blue" style="font-size:10.5px;"><i class="fa-solid fa-graduation-cap"></i> ${activeCount} ${isAr ? 'أفواج' : 'cours'}</span>`
        : `<span class="badge-pill badge-green" style="font-size:10.5px;"><i class="fa-solid fa-sparkles"></i> ${isAr ? 'تسجيل جديد' : 'Nouveau'}</span>`;

      const avatarHtml = s.photo_url
        ? `<img src="${s.photo_url}" style="width:38px; height:38px; border-radius:50%; object-fit:cover; flex-shrink:0;" alt="">`
        : `<div style="width:38px; height:38px; border-radius:50%; background:linear-gradient(135deg, #0284c7, #06b6d4); color:white; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:13px; flex-shrink:0;">${initials}</div>`;

      return `
        <div class="wizard-student-item" onclick="app.selectWizardStudent(${s.id})">
          ${avatarHtml}
          <div style="flex: 1; min-width: 0;">
            <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px;">
              <strong style="color: var(--text-heading); font-size: 14px;">${s.first_name} ${s.last_name}</strong>
              ${countTag}
            </div>
            <div style="display: flex; align-items: center; gap: 8px; font-size: 11.5px; color: var(--text-muted); margin-top: 3px; flex-wrap: wrap;">
              <span class="badge-pill badge-cyan" style="font-size: 10px;">${s.matricule || 'ELE-XXXX'}</span>
              ${lvl ? `<span><i class="fa-solid fa-layer-group"></i> ${lvl}</span>` : ''}
              ${phone ? `<span><i class="fa-solid fa-phone"></i> ${phone}</span>` : ''}
            </div>
          </div>
          <div class="wizard-student-select-btn">
            <span>${isAr ? 'اختيار' : 'Choisir'}</span>
            <i class="fa-solid ${isAr ? 'fa-arrow-left' : 'fa-arrow-right'}"></i>
          </div>
        </div>
      `;
    }).join('');
  }

  clearWizardStudentSearch() {
    const input = document.getElementById('wizardStudentSearchInput');
    if (input) {
      input.value = '';
      input.focus();
    }
    this.searchWizardStudents('');
  }

  selectWizardStudent(studentId) {
    const student = (this.students || []).find(s => String(s.id) === String(studentId));
    if (!student) return;

    this.enrollWizard.selectedStudent = student;
    // Auto-suggest student's level only if not already pre-set by selected group
    if (!this.enrollWizard.selectedGroup && student.level_id) {
      this.enrollWizard.selectedLevelId = student.level_id;
    }

    // Hide results list & show selected card
    const listContainer = document.getElementById('wizardStudentsResultsList');
    if (listContainer) listContainer.style.display = 'none';

    const card = document.getElementById('wizardSelectedStudentCard');
    if (card) {
      card.style.display = 'block';

      const avatarEl = document.getElementById('wizardSelectedStudentAvatar');
      if (avatarEl) {
        if (student.photo_url) {
          avatarEl.innerHTML = `<img src="${student.photo_url}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" alt="">`;
        } else {
          const initials = `${(student.first_name || '')[0] || ''}${(student.last_name || '')[0] || ''}`.toUpperCase() || 'E';
          avatarEl.textContent = initials;
        }
      }

      const nameEl = document.getElementById('wizardSelectedStudentName');
      if (nameEl) nameEl.textContent = `${student.first_name} ${student.last_name}`;

      const matEl = document.getElementById('wizardSelectedStudentMat');
      if (matEl) matEl.textContent = student.matricule || 'ELE-XXXX';

      const lvlEl = document.getElementById('wizardSelectedStudentLevel');
      if (lvlEl) {
        const lvlName = student.level_name || (this.levels && this.levels.find(l => l.id === student.level_id)?.name) || 'Sans niveau';
        lvlEl.textContent = lvlName;
      }

      const phoneEl = document.getElementById('wizardSelectedStudentPhone');
      if (phoneEl) {
        const ph = student.phone || student.parent_phone || 'Sans téléphone';
        phoneEl.innerHTML = `<i class="fa-solid fa-phone"></i> ${ph}`;
      }

      // Existing active enrollments
      const groupsEl = document.getElementById('wizardSelectedStudentGroups');
      if (groupsEl) {
        const isAr = this.lang === 'ar';
        const activeStudentEnrollments = (this.inscriptionsList || []).filter(e => 
          String(e.student_id) === String(student.id) && e.status === 'active'
        );

        if (activeStudentEnrollments.length > 0) {
          const badges = activeStudentEnrollments.map(e => 
            `<span class="badge-pill badge-blue" style="font-size:11px; margin:2px 4px 2px 0; display:inline-flex; align-items:center; gap:4px;">
               <i class="fa-solid fa-check"></i> ${e.group_name} (${e.subject_name || ''})
             </span>`
          ).join('');
          groupsEl.innerHTML = `<strong>${isAr ? 'الأفواج المسجل فيها حالياً:' : 'Déjà inscrit dans:'}</strong><div style="margin-top:4px;">${badges}</div>`;
        } else {
          groupsEl.innerHTML = `<span style="color:#10b981;"><i class="fa-solid fa-circle-check"></i> ${isAr ? 'التلميذ غير مسجل في أي فوج حالياً (تسجيل جديد)' : 'Nouvel élève (aucune inscription active)'}</span>`;
        }
      }
    }

    // UX Improvement: Auto-advance to Step 2 (Level Selection) or directly to Step 3 if group is already selected
    setTimeout(() => {
      if (this.enrollWizard.selectedGroup) {
        this.goToEnrollmentStep(3);
      } else {
        this.goToEnrollmentStep(2);
      }
    }, 150);
  }

  resetWizardStudentSelection() {
    this.enrollWizard.selectedStudent = null;
    const card = document.getElementById('wizardSelectedStudentCard');
    if (card) card.style.display = 'none';

    const listContainer = document.getElementById('wizardStudentsResultsList');
    if (listContainer) listContainer.style.display = 'block';

    const input = document.getElementById('wizardStudentSearchInput');
    if (input) {
      input.value = '';
      input.focus();
    }
    this.searchWizardStudents('');
  }

  // ---------- STEP 2: LEVEL SELECTION ----------

  renderWizardLevels() {
    const student = this.enrollWizard.selectedStudent;
    const isAr = this.lang === 'ar';

    // Update banner
    const step2Name = document.getElementById('wizardStep2StudentName');
    if (step2Name && student) step2Name.textContent = `${student.first_name} ${student.last_name}`;

    const step2OrigLvl = document.getElementById('wizardStep2StudentOrigLevel');
    if (step2OrigLvl && student) {
      const origName = student.level_name || (this.levels && this.levels.find(l => l.id === student.level_id)?.name) || 'Non défini';
      step2OrigLvl.textContent = `${isAr ? 'المستوى المسجل:' : 'Niveau de base :'} ${origName}`;
    }

    const grid = document.getElementById('wizardLevelsGrid');
    if (!grid) return;

    const levels = this.levels || [];
    if (levels.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 30px;">${isAr ? 'لا توجد مستويات معرفة في النظام' : 'Aucun niveau disponible'}</div>`;
      return;
    }

    grid.innerHTML = levels.map(l => {
      const isSelected = String(this.enrollWizard.selectedLevelId) === String(l.id);
      // Count how many groups exist for this level
      const groupsCount = (this.groups || []).filter(g => String(g.level_id) === String(l.id)).length;

      return `
        <div class="level-select-card ${isSelected ? 'selected' : ''}" onclick="app.selectWizardLevel(${l.id})">
          <div class="level-card-header">
            <span class="level-card-cat">${l.category || (isAr ? 'عام' : 'Général')}</span>
            ${isSelected ? '<i class="fa-solid fa-circle-check" style="color: #06b6d4; font-size: 18px;"></i>' : '<i class="fa-regular fa-circle" style="color: var(--text-muted); font-size: 16px;"></i>'}
          </div>
          <div class="level-card-name">${l.name}</div>
          <div style="font-size: 11.5px; color: var(--text-muted); margin-top: 8px; display: flex; align-items: center; gap: 4px;">
            <i class="fa-solid fa-users-rectangle"></i>
            <span>${groupsCount} ${isAr ? 'أفواج متاحة' : (groupsCount > 1 ? 'groupes disponibles' : 'groupe disponible')}</span>
          </div>
        </div>
      `;
    }).join('');
  }

  selectWizardLevel(levelId) {
    this.enrollWizard.selectedLevelId = levelId;
    this.renderWizardLevels();
    // Reset selected group when level changes
    this.enrollWizard.selectedGroup = null;

    // UX Improvement: Auto-advance to Step 3 (Subject & Group Selection) smoothly
    setTimeout(() => {
      this.goToEnrollmentStep(3);
    }, 150);
  }

  // ---------- STEP 3: SUBJECT & GROUP SELECTION & CONFIRM ----------

  renderWizardSubjectPills() {
    const container = document.getElementById('wizardSubjectFilterPills');
    if (!container) return;
    const isAr = this.lang === 'ar';
    const levelId = this.enrollWizard.selectedLevelId;

    // Filter subjects that actually have groups in this level
    const levelGroups = (this.groups || []).filter(g => String(g.level_id) === String(levelId));
    const distinctSubs = [];
    const seen = new Set();
    levelGroups.forEach(g => {
      if (g.subject_id && !seen.has(g.subject_id)) {
        seen.add(g.subject_id);
        distinctSubs.push({ id: g.subject_id, name: g.subject_name || (isAr ? 'أخرى' : 'Autre'), color: g.subject_color || '#3b82f6' });
      }
    });

    let html = `<button type="button" class="filter-pill-btn ${this.enrollWizard.selectedSubjectId === 'all' ? 'active' : ''}" onclick="app.setWizardSubjectFilter('all')">
      ${isAr ? 'كل المواد' : 'Toutes les matières'} (${levelGroups.length})
    </button>`;

    html += distinctSubs.map(sub => {
      const isAct = String(this.enrollWizard.selectedSubjectId) === String(sub.id);
      const subCount = levelGroups.filter(g => String(g.subject_id) === String(sub.id)).length;
      return `<button type="button" class="filter-pill-btn ${isAct ? 'active' : ''}" onclick="app.setWizardSubjectFilter(${sub.id})">
        <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:${sub.color}; margin-right:4px;"></span>
        ${sub.name} (${subCount})
      </button>`;
    }).join('');

    container.innerHTML = html;
  }

  setWizardSubjectFilter(subId) {
    this.enrollWizard.selectedSubjectId = subId;
    this.renderWizardSubjectPills();
    this.renderWizardGroups();
  }

  renderWizardGroups() {
    const grid = document.getElementById('wizardGroupsGrid');
    if (!grid) return;

    const isAr = this.lang === 'ar';
    const levelId = this.enrollWizard.selectedLevelId;
    const subId = this.enrollWizard.selectedSubjectId;
    const student = this.enrollWizard.selectedStudent;

    let groups = (this.groups || []).filter(g => String(g.level_id) === String(levelId));
    if (subId !== 'all') {
      groups = groups.filter(g => String(g.subject_id) === String(subId));
    }

    if (groups.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 35px; background: rgba(0,0,0,0.1); border-radius: 10px;">
          <i class="fa-solid fa-graduation-cap" style="font-size: 28px; color: #64748b; margin-bottom: 8px; display: block;"></i>
          ${isAr ? 'لا توجد أفواج متاحة لهذا المستوى والمادة المختارة' : 'Aucun groupe disponible pour ce niveau et matière'}
        </div>
      `;
      return;
    }

    grid.innerHTML = groups.map(g => {
      const isSelected = this.enrollWizard.selectedGroup && String(this.enrollWizard.selectedGroup.id) === String(g.id);
      
      const isAlreadyEnrolled = student && (this.inscriptionsList || []).some(e => 
        String(e.student_id) === String(student.id) && 
        String(e.group_id) === String(g.id) && 
        e.status === 'active'
      );

      const enrolledCount = g.enrolled_count || g.students_count || 0;
      const maxStudents = g.max_students || 25;
      const isFull = enrolledCount >= maxStudents;

      let capBadge = `<span class="badge-pill badge-green" style="font-size:10px;">${enrolledCount}/${maxStudents} ${isAr ? 'مقعد' : 'places'}</span>`;
      if (isFull) capBadge = `<span class="badge-pill badge-red" style="font-size:10px;"><i class="fa-solid fa-triangle-exclamation"></i> ${isAr ? 'مكتمل' : 'Complet'}</span>`;

      const timing = g.day_of_week && g.start_time ? `${g.day_of_week} ${g.start_time}-${g.end_time || ''}` : '';

      return `
        <div class="group-select-card ${isSelected ? 'selected' : ''} ${isAlreadyEnrolled ? 'disabled' : ''}" 
             onclick="${isAlreadyEnrolled ? '' : `app.selectWizardGroup(${g.id})`}">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 6px;">
            <span class="badge-pill badge-blue" style="font-size: 10.5px; background: ${g.subject_color || '#3b82f6'}22; color: ${g.subject_color || '#3b82f6'};">
              ${g.subject_name || (isAr ? 'عام' : 'Général')}
            </span>
            <div style="display: flex; gap: 4px; align-items: center;">
              ${isAlreadyEnrolled ? `<span class="badge-pill badge-red" style="font-size:9.5px;">${isAr ? 'مسجل مسبقاً' : 'Déjà inscrit'}</span>` : ''}
              ${capBadge}
            </div>
          </div>
          <strong style="color: var(--text-primary); font-size: 14px; display: block; margin-bottom: 4px;">
            ${g.name}
          </strong>
          <div style="font-size: 12px; color: var(--text-muted); line-height: 1.5;">
            <div><i class="fa-solid fa-chalkboard-user"></i> ${g.teacher_name || (isAr ? 'غير محدد' : 'Non assigné')}</div>
            ${timing ? `<div><i class="fa-regular fa-clock"></i> ${timing}</div>` : ''}
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; border-top: 1px dashed rgba(148, 163, 184, 0.15); padding-top: 6px;">
            <strong style="color: #10b981; font-size: 13.5px;">${parseFloat(g.price_monthly || 0).toLocaleString('fr-FR')} ${isAr ? 'دج' : 'DA'}</strong>
            <span style="font-size: 11px; color: ${isSelected ? '#10b981' : 'var(--text-muted)'}; font-weight: 700;">
              ${isSelected ? `<i class="fa-solid fa-circle-check"></i> ${isAr ? 'محدد' : 'Sélectionné'}` : (isAlreadyEnrolled ? '' : (isAr ? 'انقر للاختيار' : 'Choisir'))}
            </span>
          </div>
        </div>
      `;
    }).join('');
  }

  selectWizardGroup(groupId) {
    const group = (this.groups || []).find(g => String(g.id) === String(groupId));
    if (!group) return;

    this.enrollWizard.selectedGroup = group;
    this.renderWizardGroups();
    this.updateWizardCalculations();
  }

  setWizardDiscount(amount) {
    const input = document.getElementById('wizardDiscountInput');
    if (!input) return;

    if (amount === 'free') {
      const normalPrice = this.enrollWizard.selectedGroup ? (parseFloat(this.enrollWizard.selectedGroup.price_monthly) || 0) : 0;
      input.value = normalPrice;
    } else {
      input.value = amount;
    }

    this.updateWizardCalculations();
  }

  updateWizardCalculations() {
    const isAr = this.lang === 'ar';
    const group = this.enrollWizard.selectedGroup;
    const normalPrice = group ? (parseFloat(group.price_monthly) || 0) : 0;
    const discountInput = document.getElementById('wizardDiscountInput');
    const discount = discountInput ? (parseFloat(discountInput.value) || 0) : 0;
    const net = Math.max(0, normalPrice - discount);
    const currency = isAr ? 'دج' : 'DA';

    const netEl = document.getElementById('wizardNetPrice');
    if (netEl) netEl.textContent = `${net.toLocaleString('fr-FR')} ${currency}`;

    const noticeEl = document.getElementById('wizardDiscountNotice');
    if (noticeEl) {
      if (discount > 0) {
        noticeEl.style.display = 'block';
        noticeEl.textContent = isAr
          ? `(-${discount.toLocaleString('fr-FR')} دج تخفيض)`
          : `(-${discount.toLocaleString('fr-FR')} DA remise)`;
      } else {
        noticeEl.style.display = 'none';
      }
    }
  }

  async confirmWizardEnrollment(andPay = false) {
    const isAr = this.lang === 'ar';
    const student = this.enrollWizard.selectedStudent;
    const group = this.enrollWizard.selectedGroup;

    if (!student) {
      alert(isAr ? 'يرجى اختيار التلميذ' : 'Veuillez sélectionner un élève.');
      this.goToEnrollmentStep(1);
      return;
    }

    if (!group) {
      alert(isAr ? 'يرجى اختيار الفوج الدراسي المطلوب' : 'Veuillez sélectionner un groupe.');
      return;
    }

    const discountInput = document.getElementById('wizardDiscountInput');
    const discount = discountInput ? (parseFloat(discountInput.value) || 0) : 0;
    const regDate = document.getElementById('wizardRegDate')?.value || new Date().toISOString().slice(0, 10);

    const payload = {
      student_id: student.id,
      group_id: group.id,
      discount_amount: discount,
      registration_date: regDate
    };

    try {
      const res = await fetch('/api/enrollments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        this.playChime('success');
        this.closeEnrollmentWizard();
        await this.loadInscriptionsList();

        if (this.currentView === 'groupes' && this.currentSelectedGroupId) {
          if (typeof this.loadGroups === 'function') await this.loadGroups();
          if (typeof this.showGroupStudentsModal === 'function') this.showGroupStudentsModal(this.currentSelectedGroupId);
        }

        if (andPay) {
          alert(isAr ? 'تم تسجيل التلميذ بنجاح! جاري فتح نافذة استلام الدفع والوصل...' : 'Inscription réussie ! Ouverture du reçu de paiement...');
          if (typeof this.openNewPaymentModal === 'function') {
            this.openNewPaymentModal(student.id, group.id);
          }
        } else {
          alert(isAr ? 'تم تسجيل التلميذ في الفوج بنجاح!' : 'Élève inscrit dans le groupe avec succès !');
        }
      } else {
        alert(data.error || (isAr ? 'خطأ أثناء التسجيل' : 'Erreur lors de l’inscription'));
      }
    } catch (err) {
      console.error(err);
      alert(isAr ? 'خطأ في الاتصال بالخادم' : 'Erreur de connexion avec le serveur.');
    }
  }

  // --- CHARGEMENT ET GESTION DU TABLEAU DES INSCRIPTIONS ---
  async loadInscriptionsList() {
    try {
      this.inscriptionsList = await this.fetchEnrollments();

      // Update badge counters
      const total = this.inscriptionsList.length;
      const active = this.inscriptionsList.filter(e => e.status === 'active').length;

      const totalBadge = document.getElementById('enrollmentsTotalBadge');
      if (totalBadge) totalBadge.textContent = `${total} Inscription(s)`;

      const activeBadge = document.getElementById('enrollmentsActiveBadge');
      if (activeBadge) activeBadge.textContent = `${active} Active(s)`;

      this.populateEnrollmentMonthFilter();
      this.filterEnrollmentsTable();
    } catch (err) {
      console.error('Erreur chargement inscriptions list:', err);
    }
  }

  async fetchEnrollments(filters = {}) {
    // 1. Try direct API
    try {
      const params = new URLSearchParams();
      if (filters.search) params.append('search', filters.search);
      if (filters.group_id && filters.group_id !== 'all') params.append('group_id', filters.group_id);
      if (filters.status && filters.status !== 'all') params.append('status', filters.status);

      const res = await fetch(`/api/enrollments?${params.toString()}`);
      const text = await res.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        data = null;
      }
      if (data && data.success && Array.isArray(data.enrollments)) {
        return data.enrollments;
      }
    } catch (e) {
      console.warn('API /api/enrollments non disponible, fallback actif:', e);
    }

    // 2. Fallback: Aggregate from /api/groups/:id/students
    const list = [];
    const groupsToFetch = this.groups || [];
    for (const g of groupsToFetch) {
      try {
        const res = await fetch(`/api/groups/${g.id}/students`);
        const data = await res.json();
        if (data.success && Array.isArray(data.students)) {
          for (const s of data.students) {
            list.push({
              id: s.enrollment_id || `${s.student_id}-${g.id}`,
              student_id: s.student_id || s.id,
              group_id: g.id,
              first_name: s.first_name,
              last_name: s.last_name,
              matricule: s.matricule,
              phone: s.phone || s.parent_phone || '',
              photo_url: s.photo_url || null,
              level_name: s.level_name || (this.levels?.find(l => l.id === s.level_id)?.name) || '',
              group_name: g.name,
              price_monthly: g.price_monthly || 0,
              subject_name: g.subject_name || '',
              teacher_name: g.teacher_name || '',
              registration_date: s.registration_date || '2026-09-01',
              discount_amount: s.discount_amount || 0,
              status: s.enrollment_status || 'active'
            });
          }
        }
      } catch (err) {
        // continue
      }
    }
    return list;
  }

  filterEnrollmentsTable() {
    const searchInput = document.getElementById('searchEnrollmentsTableInput');
    const groupFilter = document.getElementById('filterEnrollmentGroup');
    const statusFilter = document.getElementById('filterEnrollmentStatus');
    const monthFilter = document.getElementById('filterEnrollmentMonth');

    const term = (searchInput ? searchInput.value : '').trim().toLowerCase();
    const grpVal = groupFilter ? groupFilter.value : 'all';
    const stVal = statusFilter ? statusFilter.value : 'all';
    const monthVal = (monthFilter ? monthFilter.value : 'all');

    const norm = (str) => (str || '').toLowerCase()
      .replace(/[أإآ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/ى/g, 'ي')
      .trim();

    const normTerm = norm(term);

    const filtered = (this.inscriptionsList || []).filter(e => {
      // Month Filter (matching YYYY-MM)
      if (monthVal && monthVal !== 'all') {
        const regDate = e.registration_date || '';
        if (!regDate.startsWith(monthVal)) return false;
      }
      // Group Filter
      if (grpVal !== 'all' && String(e.group_id) !== String(grpVal)) return false;
      // Status Filter
      if (stVal !== 'all' && e.status !== stVal) return false;

      // Search
      if (!term) return true;

      const fn = norm(e.first_name);
      const ln = norm(e.last_name);
      const mat = (e.matricule || '').toLowerCase();
      const ph = (e.phone || '').toLowerCase();
      const gn = norm(e.group_name);
      const sub = norm(e.subject_name);
      const tn = norm(e.teacher_name);

      return `${fn} ${ln}`.includes(normTerm) ||
        `${ln} ${fn}`.includes(normTerm) ||
        mat.includes(normTerm) ||
        ph.includes(normTerm) ||
        gn.includes(normTerm) ||
        sub.includes(normTerm) ||
        tn.includes(normTerm);
    });

    this.renderInscriptionsTable(filtered);
  }

  populateEnrollmentMonthFilter() {
    const filterSelect = document.getElementById('filterEnrollmentMonth');
    if (!filterSelect) return;

    const currentVal = filterSelect.value || 'all';
    const isAr = this.lang === 'ar';

    // Tally counts per month
    const monthCounts = {};
    (this.inscriptionsList || []).forEach(e => {
      const m = (e.registration_date || '').slice(0, 7);
      if (m && m.length === 7 && m.includes('-')) {
        monthCounts[m] = (monthCounts[m] || 0) + 1;
      }
    });

    const sortedMonths = Object.keys(monthCounts).sort().reverse();

    let html = `<option value="all">${isAr ? 'كل الأشهر (الكل)' : 'Tous les mois (الكل)'}</option>`;
    sortedMonths.forEach(m => {
      const count = monthCounts[m];
      html += `<option value="${m}">${m} (${count} ${isAr ? 'عملية' : 'op.'})</option>`;
    });

    filterSelect.innerHTML = html;
    if ([...filterSelect.options].some(o => o.value === currentVal)) {
      filterSelect.value = currentVal;
    }
  }

  renderInscriptionsTable(list = []) {
    const tbody = document.getElementById('inscriptionsTableBody');
    if (!tbody) return;

    const isAr = this.lang === 'ar';

    if (!list || list.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="9" style="text-align: center; padding: 40px; color: var(--text-muted);">
            <div style="font-size: 36px; margin-bottom: 12px; color: #64748b;">
              <i class="fa-solid fa-folder-open"></i>
            </div>
            <div style="font-size: 15px; font-weight: 600;">
              ${isAr ? 'لا توجد تسجيلات مطابقة للمعايير المحددة' : 'Aucune inscription trouvée'}
            </div>
            <div style="font-size: 13px; margin-top: 4px;">
              ${isAr ? 'جرب تغيير نص البحث أو الفلتر أعلاه' : 'Essayez de modifier votre recherche ou vos filtres.'}
            </div>
          </td>
        </tr>
      `;

      const countInfo = document.getElementById('inscriptionsCountInfo');
      if (countInfo) countInfo.textContent = isAr ? 'عرض 0 تسجيل' : 'Affichage de 0 inscription';

      const revInfo = document.getElementById('inscriptionsTotalRevenue');
      if (revInfo) revInfo.textContent = '';
      return;
    }

    let totalMonthlyRevenue = 0;

    tbody.innerHTML = list.map((e, index) => {
      const normalPrice = parseFloat(e.price_monthly) || 0;
      const discount = parseFloat(e.discount_amount) || 0;
      const net = Math.max(0, normalPrice - discount);

      if (e.status === 'active') {
        totalMonthlyRevenue += net;
      }

      const isActive = e.status === 'active';
      const statusBadge = isActive
        ? `<span class="badge-pill badge-green"><i class="fa-solid fa-circle-check"></i> ${isAr ? 'نشط' : 'Actif'}</span>`
        : `<span class="badge-pill badge-red"><i class="fa-solid fa-circle-xmark"></i> ${isAr ? 'ملغى' : 'Annulé'}</span>`;

      const discountLabel = discount > 0
        ? `<div style="font-size: 11px; color: #f59e0b;">-${discount.toLocaleString('fr-FR')} DA</div>`
        : '';

      const actionBtn = isActive
        ? `<button class="btn-icon" style="color: #ef4444;" onclick="app.cancelEnrollmentFromInscriptions(${e.id}, ${e.student_id}, '${(e.first_name || '').replace(/'/g, "\\'")} ${(e.last_name || '').replace(/'/g, "\\'")}', '${(e.group_name || '').replace(/'/g, "\\'")}')" title="${isAr ? 'إلغاء التسجيل' : 'Désinscrire'}">
             <i class="fa-solid fa-user-minus"></i>
           </button>`
        : `<button class="btn-icon" style="color: #10b981;" onclick="app.reactivateEnrollment(${e.id})" title="${isAr ? 'إعادة التفعيل' : 'Réactiver'}">
             <i class="fa-solid fa-rotate-left"></i>
           </button>`;

      return `
        <tr style="${!isActive ? 'opacity: 0.65;' : ''}">
          <td style="color: var(--text-muted); font-size: 12px;">${index + 1}</td>
          <td style="font-size: 12px; white-space: nowrap;">
            <i class="fa-regular fa-calendar" style="color: var(--text-muted); margin-right: 4px;"></i>
            ${e.registration_date || '2026-09-01'}
          </td>
          <td>
            <div style="display: flex; align-items: center; gap: 8px;">
              <div style="width: 30px; height: 30px; border-radius: 50%; background: linear-gradient(135deg, #0284c7, #06b6d4); color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; flex-shrink: 0;">
                ${((e.first_name || '')[0] || 'E').toUpperCase()}
              </div>
              <div>
                <a href="javascript:void(0)" onclick="app.openStudentProfile(${e.student_id})" style="font-weight: 600; color: var(--text-primary); text-decoration: none;">
                  ${e.first_name} ${e.last_name}
                </a>
                <div style="font-size: 11px; color: var(--text-muted);">
                  ${e.level_name || ''} ${e.phone ? `&bull; ${e.phone}` : ''}
                </div>
              </div>
            </div>
          </td>
          <td>
            <span class="badge-pill badge-cyan" style="font-size: 11px;">
              ${e.matricule || 'ELE-XXXX'}
            </span>
          </td>
          <td>
            <strong style="color: #38bdf8; font-size: 13px;">${e.group_name}</strong>
          </td>
          <td>
            <div>
              <span class="badge-pill badge-blue" style="font-size: 11px;">${e.subject_name || 'Général'}</span>
              <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">
                <i class="fa-solid fa-chalkboard-user"></i> ${e.teacher_name || 'Non assigné'}
              </div>
            </div>
          </td>
          <td style="text-align: right;">
            <strong style="color: #10b981; font-size: 13.5px;">${net.toLocaleString('fr-FR')} DA</strong>
            ${discountLabel}
          </td>
          <td style="text-align: center;">
            ${statusBadge}
          </td>
          <td style="text-align: center;">
            ${actionBtn}
          </td>
        </tr>
      `;
    }).join('');

    const countInfo = document.getElementById('inscriptionsCountInfo');
    if (countInfo) {
      countInfo.textContent = isAr
        ? `عرض ${list.length} تسجيل`
        : `Affichage de ${list.length} inscription(s)`;
    }

    const revBadge = document.getElementById('enrollmentsRevenueBadge');
    if (revBadge) {
      revBadge.textContent = isAr 
        ? `${totalMonthlyRevenue.toLocaleString('fr-FR')} دج / شهر` 
        : `${totalMonthlyRevenue.toLocaleString('fr-FR')} DA / mois`;
    }

    const revInfo = document.getElementById('inscriptionsTotalRevenue');
    if (revInfo) {
      revInfo.innerHTML = `
        <span style="color: var(--text-muted); font-size: 12px;">${isAr ? 'إجمالي الفوترة الشهرية النشطة :' : 'Total Facturation Mensuelle Active :'}</span>
        <span style="color: #10b981; font-size: 15px; font-weight: 700; margin-left: 6px; margin-right: 6px;">${totalMonthlyRevenue.toLocaleString('fr-FR')} ${isAr ? 'دج' : 'DA'}</span>
      `;
    }
  }

  async cancelEnrollmentFromInscriptions(enrollmentId, studentId, studentName, groupName) {
    const isAr = this.lang === 'ar';
    const msg = isAr
      ? `هل أنت متأكد من رغبتك في إلغاء تسجيل التلميذ (${studentName}) في الفوج (${groupName})؟`
      : `Voulez-vous vraiment désinscrire ${studentName} du groupe ${groupName} ?`;

    if (!confirm(msg)) return;

    try {
      const res = await fetch(`/api/enrollments/${enrollmentId}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        this.playChime('success');
        await this.loadInscriptionsList();
      } else {
        alert(data.error || (isAr ? 'حدث خطأ أثناء إلغاء التسجيل' : 'Erreur lors de la désinscription'));
      }
    } catch (err) {
      console.error(err);
      alert(isAr ? 'خطأ في الاتصال' : 'Erreur de connexion');
    }
  }

  async reactivateEnrollment(enrollmentId) {
    const isAr = this.lang === 'ar';
    if (!confirm(isAr ? 'هل تريد إعادة تفعيل هذا التسجيل؟' : 'Voulez-vous réactiver cette inscription ?')) return;

    try {
      const res = await fetch(`/api/enrollments/${enrollmentId}/reactivate`, { method: 'PATCH' });
      const data = await res.json();
      if (data.success) {
        this.playChime('success');
        await this.loadInscriptionsList();
      } else {
        alert(data.error || 'Erreur lors de la réactivation');
      }
    } catch (err) {
      console.error(err);
    }
  }

  // --- EXPORTATION ET IMPRESSION DU RÉPERTOIRE ---
  exportEnrollmentsToExcel() {
    const searchInput = document.getElementById('searchEnrollmentsTableInput');
    const groupFilter = document.getElementById('filterEnrollmentGroup');
    const statusFilter = document.getElementById('filterEnrollmentStatus');
    const monthInput = document.getElementById('filterEnrollmentMonth');

    const term = (searchInput ? searchInput.value : '').trim().toLowerCase();
    const grpVal = groupFilter ? groupFilter.value : 'all';
    const stVal = statusFilter ? statusFilter.value : 'all';
    const monthVal = (monthInput ? monthInput.value : 'all');

    const norm = (str) => (str || '').toLowerCase()
      .replace(/[أإآ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/ى/g, 'ي')
      .trim();

    const normTerm = norm(term);

    const list = (this.inscriptionsList || []).filter(e => {
      if (monthVal && monthVal !== 'all' && (!e.registration_date || !e.registration_date.startsWith(monthVal))) return false;
      if (grpVal !== 'all' && String(e.group_id) !== String(grpVal)) return false;
      if (stVal !== 'all' && e.status !== stVal) return false;
      if (!term) return true;
      const fn = norm(e.first_name);
      const ln = norm(e.last_name);
      const mat = (e.matricule || '').toLowerCase();
      const ph = (e.phone || '').toLowerCase();
      const gn = norm(e.group_name);
      const sub = norm(e.subject_name);
      const tn = norm(e.teacher_name);
      return `${fn} ${ln}`.includes(normTerm) || `${ln} ${fn}`.includes(normTerm) || mat.includes(normTerm) || ph.includes(normTerm) || gn.includes(normTerm) || sub.includes(normTerm) || tn.includes(normTerm);
    });

    if (list.length === 0) {
      alert(this.lang === 'ar' ? 'لا توجد بيانات للتصدير' : 'Aucune donnée à exporter');
      return;
    }

    const isAr = this.lang === 'ar';
    const headers = isAr ? [
      'التاريخ', 'رقم القيد', 'اللقب', 'الاسم', 'المستوى', 'الهاتف', 'الفوج', 'المادة', 'الأستاذ', 'السعر العادي (دج)', 'الخصم (دج)', 'الصافي (دج)', 'الحالة'
    ] : [
      'Date Inscription', 'Matricule', 'Nom', 'Prénom', 'Niveau', 'Téléphone', 'Groupe', 'Matière', 'Enseignant', 'Tarif Normal (DA)', 'Remise (DA)', 'Net à Payer (DA)', 'Statut'
    ];

    const rows = list.map(e => {
      const normal = parseFloat(e.price_monthly) || 0;
      const disc = parseFloat(e.discount_amount) || 0;
      const net = Math.max(0, normal - disc);
      const statusStr = e.status === 'active' ? (isAr ? 'نشط' : 'Actif') : (isAr ? 'ملغى' : 'Annulé');

      return [
        `"${e.registration_date || ''}"`,
        `"${e.matricule || ''}"`,
        `"${(e.last_name || '').replace(/"/g, '""')}"`,
        `"${(e.first_name || '').replace(/"/g, '""')}"`,
        `"${(e.level_name || '').replace(/"/g, '""')}"`,
        `"${e.phone || ''}"`,
        `"${(e.group_name || '').replace(/"/g, '""')}"`,
        `"${(e.subject_name || '').replace(/"/g, '""')}"`,
        `"${(e.teacher_name || '').replace(/"/g, '""')}"`,
        normal,
        disc,
        net,
        `"${statusStr}"`
      ];
    });

    const csvContent = '\uFEFF' + [headers.join(';'), ...rows.map(r => r.join(';'))].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const fileSuffix = (monthVal && monthVal !== 'all') ? `_${monthVal}` : `_${new Date().toISOString().slice(0, 10)}`;
    a.download = `inscriptions_edumind${fileSuffix}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    this.playChime('success');
  }

  printEnrollmentsReport() {
    const isAr = this.lang === 'ar';
    const searchInput = document.getElementById('searchEnrollmentsTableInput');
    const groupFilter = document.getElementById('filterEnrollmentGroup');
    const statusFilter = document.getElementById('filterEnrollmentStatus');
    const monthInput = document.getElementById('filterEnrollmentMonth');

    const term = (searchInput ? searchInput.value : '').trim().toLowerCase();
    const grpVal = groupFilter ? groupFilter.value : 'all';
    const stVal = statusFilter ? statusFilter.value : 'all';
    const monthVal = (monthInput ? monthInput.value : 'all');

    const norm = (str) => (str || '').toLowerCase()
      .replace(/[أإآ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/ى/g, 'ي')
      .trim();

    const normTerm = norm(term);

    const list = (this.inscriptionsList || []).filter(e => {
      if (monthVal && monthVal !== 'all' && (!e.registration_date || !e.registration_date.startsWith(monthVal))) return false;
      if (grpVal !== 'all' && String(e.group_id) !== String(grpVal)) return false;
      if (stVal !== 'all' && e.status !== stVal) return false;
      if (!term) return true;
      const fn = norm(e.first_name);
      const ln = norm(e.last_name);
      const mat = (e.matricule || '').toLowerCase();
      const ph = (e.phone || '').toLowerCase();
      const gn = norm(e.group_name);
      const sub = norm(e.subject_name);
      const tn = norm(e.teacher_name);
      return `${fn} ${ln}`.includes(normTerm) || `${ln} ${fn}`.includes(normTerm) || mat.includes(normTerm) || ph.includes(normTerm) || gn.includes(normTerm) || sub.includes(normTerm) || tn.includes(normTerm);
    });

    if (list.length === 0) {
      alert(isAr ? 'لا توجد بيانات للطباعة' : 'Aucune donnée à imprimer');
      return;
    }

    const schoolName = this.settings?.school_name || 'EDUMIND';
    const schoolPhone = this.settings?.school_phone || '';
    const dateStr = new Date().toLocaleDateString(isAr ? 'ar-DZ' : 'fr-FR');

    let totalNet = 0;
    const tableRows = list.map((e, idx) => {
      const normal = parseFloat(e.price_monthly) || 0;
      const disc = parseFloat(e.discount_amount) || 0;
      const net = Math.max(0, normal - disc);
      if (e.status === 'active') totalNet += net;

      return `
        <tr>
          <td style="text-align: center;">${idx + 1}</td>
          <td>${e.registration_date || ''}</td>
          <td><strong>${e.first_name} ${e.last_name}</strong></td>
          <td style="text-align: center;"><code>${e.matricule}</code></td>
          <td>${e.group_name}</td>
          <td>${e.subject_name || ''} - ${e.teacher_name || ''}</td>
          <td style="text-align: right; font-weight: bold;">${net.toLocaleString('fr-FR')} DA</td>
          <td style="text-align: center;">${e.status === 'active' ? 'Actif' : 'Annulé'}</td>
        </tr>
      `;
    }).join('');

    const html = `
      <!DOCTYPE html>
      <html dir="${isAr ? 'rtl' : 'ltr'}">
      <head>
        <meta charset="utf-8">
        <title>Rapport des Inscriptions - ${schoolName}</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, sans-serif; margin: 20px; color: #1e293b; font-size: 12px; }
          .header { display: flex; justify-content: space-between; border-bottom: 2px solid #06b6d4; padding-bottom: 12px; margin-bottom: 16px; }
          .title { font-size: 20px; font-weight: bold; color: #0284c7; }
          table { width: 100%; border-collapse: collapse; margin-top: 12px; font-size: 11.5px; }
          th, td { border: 1px solid #cbd5e1; padding: 6px 8px; }
          th { background: #f1f5f9; color: #334155; font-weight: 600; }
          .total-box { margin-top: 16px; text-align: ${isAr ? 'left' : 'right'}; font-size: 14px; font-weight: bold; }
          @media print { @page { size: A4 landscape; margin: 12mm; } }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="title">${schoolName}</div>
            <div>${schoolPhone ? 'Tél: ' + schoolPhone : ''}</div>
          </div>
          <div style="text-align: ${isAr ? 'left' : 'right'};">
            <h3>${isAr ? 'تقرير تسجيلات التلاميذ في الأفواج' : 'Rapport des Inscriptions aux Cours'}</h3>
            <div>${monthVal && monthVal !== 'all' ? (isAr ? `الشهر: <strong>${monthVal}</strong> &bull; ` : `Mois: <strong>${monthVal}</strong> &bull; `) : ''}Date: ${dateStr} &bull; Total: ${list.length} élève(s)</div>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th style="width: 30px;">#</th>
              <th>Date</th>
              <th>Élève</th>
              <th>Matricule</th>
              <th>Groupe</th>
              <th>Matière & Enseignant</th>
              <th>Tarif Net</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>

        <div class="total-box">
          ${isAr ? 'إجمالي الفوترة الشهرية النشطة:' : 'Total Facturation Mensuelle Active:'} 
          <span style="color: #0284c7;">${totalNet.toLocaleString('fr-FR')} DA</span>
        </div>

        <script>
          window.onload = () => { window.print(); };
        </script>
      </body>
      </html>
    `;

    const printWin = window.open('', '_blank', 'width=950,height=750');
    if (printWin) {
      printWin.document.write(html);
      printWin.document.close();
    }
  }

  // ===========================================================================
  // INSCRIPTION GROUPÉE (MULTI-ÉLÈVES & MULTI-GROUPES)
  // ===========================================================================

  async openBulkEnrollmentModal(preselectedGroupId = null) {
    const isAr = this.lang === 'ar';
    try {
      // Ensure all master data is loaded
      await Promise.all([
        this.loadStudents(),
        this.loadGroups(),
        this.loadLevels ? this.loadLevels() : Promise.resolve(),
        this.loadSubjects ? this.loadSubjects() : Promise.resolve(),
        this.loadInscriptionsList ? this.loadInscriptionsList() : Promise.resolve()
      ]);

      // Populate Level filter for Students
      const lvlStudentFilter = document.getElementById('bulkStudentLevelFilter');
      if (lvlStudentFilter) {
        lvlStudentFilter.innerHTML = `<option value="">${isAr ? 'كل المستويات' : 'Tous les niveaux'}</option>` +
          (this.levels || []).map(l => `<option value="${l.id}">${this.escapeHtml(l.name)}</option>`).join('');
        lvlStudentFilter.value = '';
      }

      // Populate Level filter for Groups
      const lvlGroupFilter = document.getElementById('bulkGroupLevelFilter');
      if (lvlGroupFilter) {
        lvlGroupFilter.innerHTML = `<option value="">${isAr ? 'كل المستويات' : 'Tous les niveaux'}</option>` +
          (this.levels || []).map(l => `<option value="${l.id}">${this.escapeHtml(l.name)}</option>`).join('');
        lvlGroupFilter.value = '';
      }

      // Set default registration date to today
      const dateInput = document.getElementById('bulkEnrollRegDate');
      if (dateInput) {
        dateInput.value = new Date().toISOString().split('T')[0];
      }

      // Set discount to 0
      const discountInput = document.getElementById('bulkEnrollDiscount');
      if (discountInput) {
        discountInput.value = '0';
      }

      // Set school year
      const schoolYearSelect = document.getElementById('bulkEnrollSchoolYear');
      if (schoolYearSelect) {
        const activeYear = this.settings?.active_year || '2025-2026';
        if (!Array.from(schoolYearSelect.options).some(o => o.value === activeYear)) {
          const opt = document.createElement('option');
          opt.value = activeYear;
          opt.textContent = activeYear;
          schoolYearSelect.appendChild(opt);
        }
        schoolYearSelect.value = activeYear;
      }

      // Reset search inputs
      const sSearch = document.getElementById('bulkStudentSearchInput');
      if (sSearch) sSearch.value = '';
      const gSearch = document.getElementById('bulkGroupSearchInput');
      if (gSearch) gSearch.value = '';

      // Reset select-all checkboxes
      const chkAllS = document.getElementById('chkBulkSelectAllStudents');
      if (chkAllS) chkAllS.checked = false;
      const chkAllG = document.getElementById('chkBulkSelectAllGroups');
      if (chkAllG) chkAllG.checked = false;

      // Reset selection state
      this._bulkSelectedStudentIds = new Set();
      this._bulkSelectedGroupIds = new Set();
      if (preselectedGroupId) {
        this._bulkSelectedGroupIds.add(Number(preselectedGroupId));
        const targetGrp = (this.groups || []).find(g => String(g.id) === String(preselectedGroupId));
        if (targetGrp && targetGrp.level_id && lvlGroupFilter) {
          lvlGroupFilter.value = String(targetGrp.level_id);
        }
      }

      // Render both panels
      this.renderBulkStudentsList();
      this.renderBulkGroupsList();
      this.updateBulkEnrollmentSummary();

      // Open Modal
      const modal = document.getElementById('modalBulkEnrollment');
      if (modal) modal.classList.add('active');
    } catch (err) {
      console.error('Erreur lors de l’ouverture du modal d’inscription groupée:', err);
      this.showToast(isAr ? 'حدث خطأ أثناء تحميل البيانات' : 'Erreur lors du chargement des données', 'error');
    }
  }

  filterBulkStudents() {
    this.renderBulkStudentsList();
  }

  filterBulkGroups() {
    this.renderBulkGroupsList();
  }

  renderBulkStudentsList() {
    const container = document.getElementById('bulkStudentsListContainer');
    if (!container) return;

    const isAr = this.lang === 'ar';
    const sSearch = document.getElementById('bulkStudentSearchInput');
    const lvlFilter = document.getElementById('bulkStudentLevelFilter');

    const term = (sSearch ? sSearch.value : '').trim().toLowerCase();
    const lvlVal = lvlFilter ? lvlFilter.value : '';

    const norm = (str) => (str || '').toLowerCase()
      .replace(/[أإآ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/ى/g, 'ي')
      .trim();

    const normTerm = norm(term);

    // Active students
    let filtered = (this.students || []).filter(s => s.active !== 0);

    if (lvlVal) {
      filtered = filtered.filter(s => String(s.level_id) === String(lvlVal));
    }

    if (normTerm) {
      filtered = filtered.filter(s => {
        const fn = norm(s.first_name);
        const ln = norm(s.last_name);
        const mat = (s.matricule || '').toLowerCase();
        const ph = (s.phone || '').toLowerCase();
        const pph = (s.parent_phone || '').toLowerCase();
        return `${fn} ${ln}`.includes(normTerm) ||
               `${ln} ${fn}`.includes(normTerm) ||
               mat.includes(normTerm) ||
               ph.includes(normTerm) ||
               pph.includes(normTerm);
      });
    }

    this._bulkFilteredStudents = filtered;

    // Update count labels
    const countBadge = document.getElementById('bulkStudentsBadgeCount');
    if (countBadge) {
      countBadge.textContent = `${this._bulkSelectedStudentIds.size} ${isAr ? 'محدد' : 'sélectionné(s)'}`;
    }

    const visibleCount = document.getElementById('bulkStudentsVisibleCount');
    if (visibleCount) {
      visibleCount.textContent = `${filtered.length} ${isAr ? 'تلميذ' : 'élève(s)'}`;
    }

    // Checkbox "Tout sélectionner" sync
    const chkAll = document.getElementById('chkBulkSelectAllStudents');
    if (chkAll) {
      chkAll.checked = filtered.length > 0 && filtered.every(s => this._bulkSelectedStudentIds.has(s.id));
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="padding: 30px 16px; text-align: center; color: var(--text-muted);">
          <i class="fa-solid fa-user-slash" style="font-size: 24px; margin-bottom: 8px; opacity: 0.6; display: block;"></i>
          <span style="font-size: 13px;">${isAr ? 'لا يوجد أي تلميذ يطابق المعايير' : 'Aucun élève correspondant'}</span>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(s => {
      const isSelected = this._bulkSelectedStudentIds.has(s.id);
      const initials = `${(s.first_name || '')[0] || ''}${(s.last_name || '')[0] || ''}`.toUpperCase() || 'E';
      const lvl = s.level_name || (this.levels && this.levels.find(l => l.id === s.level_id)?.name) || '';
      
      const activeEnrollments = (this.inscriptionsList || []).filter(e => String(e.student_id) === String(s.id) && e.status === 'active').length;

      const avatarHtml = s.photo_url
        ? `<img src="${s.photo_url}" style="width:34px; height:34px; border-radius:50%; object-fit:cover; flex-shrink:0;" alt="">`
        : `<div style="width:34px; height:34px; border-radius:50%; background:linear-gradient(135deg, #0284c7, #06b6d4); color:white; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:12px; flex-shrink:0;">${initials}</div>`;

      return `
        <div style="display: flex; align-items: center; gap: 10px; padding: 8px 12px; border-radius: 8px; cursor: pointer; transition: all 0.15s ease; user-select: none;
                    background: ${isSelected ? 'rgba(56, 189, 248, 0.12)' : 'rgba(255, 255, 255, 0.03)'};
                    border: 1px solid ${isSelected ? '#38bdf8' : 'var(--border-color)'};"
             onclick="app.toggleBulkStudent(${s.id})">
          <input type="checkbox" style="cursor: pointer; width: 16px; height: 16px; accent-color: #38bdf8;"
                 ${isSelected ? 'checked' : ''} onclick="event.stopPropagation(); app.toggleBulkStudent(${s.id})">
          ${avatarHtml}
          <div style="flex: 1; min-width: 0;">
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 6px;">
              <strong style="color: var(--text-heading); font-size: 13.5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                ${this.escapeHtml(s.first_name)} ${this.escapeHtml(s.last_name)}
              </strong>
              <code style="font-size: 11px; background: rgba(0,0,0,0.25); padding: 1px 5px; border-radius: 4px; color: var(--text-muted);">${this.escapeHtml(s.matricule || '')}</code>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 2px;">
              <span style="font-size: 11.5px; color: var(--text-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                ${lvl ? `<i class="fa-solid fa-layer-group" style="font-size: 10px; margin-right: 4px;"></i>${this.escapeHtml(lvl)}` : ''}
              </span>
              <span style="font-size: 11px; color: ${activeEnrollments > 0 ? '#38bdf8' : 'var(--text-muted)'};">
                ${activeEnrollments > 0 ? `${activeEnrollments} ${isAr ? 'أفواج مسجل بها' : 'cours actif(s)'}` : (isAr ? 'غير مسجل' : 'Non inscrit')}
              </span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  renderBulkGroupsList() {
    const container = document.getElementById('bulkGroupsListContainer');
    if (!container) return;

    const isAr = this.lang === 'ar';
    const gSearch = document.getElementById('bulkGroupSearchInput');
    const lvlFilter = document.getElementById('bulkGroupLevelFilter');

    const term = (gSearch ? gSearch.value : '').trim().toLowerCase();
    const lvlVal = lvlFilter ? lvlFilter.value : '';

    const norm = (str) => (str || '').toLowerCase()
      .replace(/[أإآ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/ى/g, 'ي')
      .trim();

    const normTerm = norm(term);

    // Active groups
    let filtered = (this.groups || []).filter(g => g.active !== 0);

    if (lvlVal) {
      filtered = filtered.filter(g => String(g.level_id) === String(lvlVal));
    }

    if (normTerm) {
      filtered = filtered.filter(g => {
        const gn = norm(g.name);
        const sub = norm(g.subject_name);
        const tn = norm(g.teacher_name);
        return gn.includes(normTerm) || sub.includes(normTerm) || tn.includes(normTerm);
      });
    }

    this._bulkFilteredGroups = filtered;

    // Update count labels
    const countBadge = document.getElementById('bulkGroupsBadgeCount');
    if (countBadge) {
      countBadge.textContent = `${this._bulkSelectedGroupIds.size} ${isAr ? 'محدد' : 'sélectionné(s)'}`;
    }

    const visibleCount = document.getElementById('bulkGroupsVisibleCount');
    if (visibleCount) {
      visibleCount.textContent = `${filtered.length} ${isAr ? 'فوج' : 'groupe(s)'}`;
    }

    // Checkbox "Tout sélectionner" sync
    const chkAll = document.getElementById('chkBulkSelectAllGroups');
    if (chkAll) {
      chkAll.checked = filtered.length > 0 && filtered.every(g => this._bulkSelectedGroupIds.has(g.id));
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="padding: 30px 16px; text-align: center; color: var(--text-muted);">
          <i class="fa-solid fa-users-slash" style="font-size: 24px; margin-bottom: 8px; opacity: 0.6; display: block;"></i>
          <span style="font-size: 13px;">${isAr ? 'لا يوجد أي فوج يطابق المعايير' : 'Aucun groupe correspondant'}</span>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(g => {
      const isSelected = this._bulkSelectedGroupIds.has(g.id);
      const lvl = this.levels && this.levels.find(l => l.id === g.level_id)?.name || '';
      const price = parseFloat(g.price_monthly) || 0;
      const enrolledCount = (this.inscriptionsList || []).filter(e => String(e.group_id) === String(g.id) && e.status === 'active').length;
      const maxStudents = g.max_students || 25;

      return `
        <div style="display: flex; align-items: center; gap: 10px; padding: 8px 12px; border-radius: 8px; cursor: pointer; transition: all 0.15s ease; user-select: none;
                    background: ${isSelected ? 'rgba(167, 139, 250, 0.12)' : 'rgba(255, 255, 255, 0.03)'};
                    border: 1px solid ${isSelected ? '#a78bfa' : 'var(--border-color)'};"
             onclick="app.toggleBulkGroup(${g.id})">
          <input type="checkbox" style="cursor: pointer; width: 16px; height: 16px; accent-color: #a78bfa;"
                 ${isSelected ? 'checked' : ''} onclick="event.stopPropagation(); app.toggleBulkGroup(${g.id})">
          <div style="width: 34px; height: 34px; border-radius: 8px; background: rgba(167, 139, 250, 0.15); color: #a78bfa; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0;">
            <i class="fa-solid fa-graduation-cap"></i>
          </div>
          <div style="flex: 1; min-width: 0;">
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 6px;">
              <strong style="color: var(--text-heading); font-size: 13.5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                ${this.escapeHtml(g.name)}
              </strong>
              <span style="font-size: 12px; font-weight: 700; color: #10b981; white-space: nowrap;">
                ${price.toLocaleString('fr-FR')} DA
              </span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 2px;">
              <span style="font-size: 11.5px; color: var(--text-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                ${g.subject_name ? `<strong style="color:var(--text-body);">${this.escapeHtml(g.subject_name)}</strong> &bull; ` : ''}${this.escapeHtml(g.teacher_name || '')}
              </span>
              <span style="font-size: 10.5px; background: rgba(0,0,0,0.25); padding: 1px 6px; border-radius: 4px; color: var(--text-muted);">
                <i class="fa-solid fa-users" style="font-size: 9px; margin-right: 3px;"></i>${enrolledCount}/${maxStudents}
              </span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  toggleBulkStudent(id) {
    if (this._bulkSelectedStudentIds.has(id)) {
      this._bulkSelectedStudentIds.delete(id);
    } else {
      this._bulkSelectedStudentIds.add(id);
    }
    this.renderBulkStudentsList();
    this.updateBulkEnrollmentSummary();
  }

  toggleBulkGroup(id) {
    if (this._bulkSelectedGroupIds.has(id)) {
      this._bulkSelectedGroupIds.delete(id);
    } else {
      this._bulkSelectedGroupIds.add(id);
    }
    this.renderBulkGroupsList();
    this.updateBulkEnrollmentSummary();
  }

  toggleAllBulkStudents(checked) {
    const list = this._bulkFilteredStudents || [];
    list.forEach(s => {
      if (checked) {
        this._bulkSelectedStudentIds.add(s.id);
      } else {
        this._bulkSelectedStudentIds.delete(s.id);
      }
    });
    this.renderBulkStudentsList();
    this.updateBulkEnrollmentSummary();
  }

  toggleAllBulkGroups(checked) {
    const list = this._bulkFilteredGroups || [];
    list.forEach(g => {
      if (checked) {
        this._bulkSelectedGroupIds.add(g.id);
      } else {
        this._bulkSelectedGroupIds.delete(g.id);
      }
    });
    this.renderBulkGroupsList();
    this.updateBulkEnrollmentSummary();
  }

  updateBulkEnrollmentSummary() {
    const isAr = this.lang === 'ar';
    const sCount = this._bulkSelectedStudentIds ? this._bulkSelectedStudentIds.size : 0;
    const gCount = this._bulkSelectedGroupIds ? this._bulkSelectedGroupIds.size : 0;
    const totalCombinations = sCount * gCount;

    const elS = document.getElementById('bulkSummaryStudents');
    if (elS) elS.textContent = `${sCount} ${isAr ? 'تلميذ' : 'élève(s)'}`;

    const elG = document.getElementById('bulkSummaryGroups');
    if (elG) elG.textContent = `${gCount} ${isAr ? 'فوج' : 'groupe(s)'}`;

    const elT = document.getElementById('bulkSummaryTotal');
    if (elT) elT.textContent = `${totalCombinations} ${isAr ? 'تسجيل' : 'inscription(s)'}`;

    const btn = document.getElementById('btnConfirmBulkEnrollment');
    const btnText = document.getElementById('btnConfirmBulkEnrollText');
    if (btn) {
      btn.disabled = totalCombinations === 0;
      btn.style.opacity = totalCombinations > 0 ? '1' : '0.5';
      btn.style.cursor = totalCombinations > 0 ? 'pointer' : 'not-allowed';
      if (totalCombinations > 0) {
        btn.style.background = 'linear-gradient(135deg, #0284c7, #06b6d4)';
        btn.style.boxShadow = '0 4px 15px rgba(6, 182, 212, 0.4)';
      } else {
        btn.style.background = 'linear-gradient(135deg, #7c3aed, #6366f1)';
        btn.style.boxShadow = 'none';
      }
    }
    if (btnText) {
      if (totalCombinations === 1) {
        btnText.textContent = isAr ? 'تأكيد تسجيل التلميذ في الفوج' : "Confirmer l'inscription de l'élève";
      } else if (totalCombinations > 1) {
        btnText.textContent = isAr ? `تأكيد ${totalCombinations} تسجيلات في الأفواج` : `Confirmer les ${totalCombinations} inscriptions`;
      } else {
        btnText.textContent = isAr ? 'تأكيد التسجيل في الأفواج' : 'Confirmer les inscriptions';
      }
    }
  }

  async confirmBulkEnrollment() {
    const isAr = this.lang === 'ar';
    const student_ids = Array.from(this._bulkSelectedStudentIds || []);
    const group_ids = Array.from(this._bulkSelectedGroupIds || []);

    if (student_ids.length === 0 || group_ids.length === 0) {
      this.showToast(isAr ? 'يرجى تحديد تلميذ واحد وفوج واحد على الأقل للمتابعة' : 'Veuillez sélectionner au moins un élève et un groupe.', 'warning');
      return;
    }

    const discount_amount = parseFloat(document.getElementById('bulkEnrollDiscount')?.value) || 0;
    const registration_date = document.getElementById('bulkEnrollRegDate')?.value || new Date().toISOString().split('T')[0];
    const school_year = document.getElementById('bulkEnrollSchoolYear')?.value || '2025-2026';

    const btn = document.getElementById('btnConfirmBulkEnrollment');
    const btnText = document.getElementById('btnConfirmBulkEnrollText');

    if (btn) {
      btn.disabled = true;
      btn.style.opacity = '0.7';
    }
    if (btnText) {
      btnText.textContent = isAr ? 'جاري التسجيل الجماعي...' : 'Inscriptions en cours...';
    }

    try {
      const res = await fetch('/api/enrollments/batch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          student_ids,
          group_ids,
          school_year,
          discount_amount,
          registration_date
        })
      });

      let data;
      try {
        data = await res.json();
      } catch (jsonErr) {
        data = { success: false, error: isAr ? `خطأ من الخادم (${res.status})` : `Erreur serveur HTTP (${res.status})` };
      }

      if (data.success) {
        this.playChime('success');
        let msg = '';
        if (isAr) {
          msg = `تمت العملية بنجاح! تم إنشاء ${data.enrolled} تسجيل جديد`;
          if (data.reactivated > 0) msg += `، وإعادة تفعيل ${data.reactivated}`;
          if (data.alreadyActive > 0) msg += ` (${data.alreadyActive} مسجلون مسبقاً)`;
        } else {
          msg = `Opération réussie ! ${data.enrolled} nouvelle(s) inscription(s)`;
          if (data.reactivated > 0) msg += `, ${data.reactivated} réactivée(s)`;
          if (data.alreadyActive > 0) msg += ` (${data.alreadyActive} déjà active(s))`;
        }
        this.showToast(msg, 'success');
        this.closeModals();
        await this.loadInscriptionsList();
        if (this.currentView === 'groupes' && this.currentSelectedGroupId) {
          if (typeof this.loadGroups === 'function') await this.loadGroups();
          if (typeof this.showGroupStudentsModal === 'function') this.showGroupStudentsModal(this.currentSelectedGroupId);
        }
      } else {
        this.playChime('error');
        this.showToast(data.error || (isAr ? 'حدث خطأ أثناء تنفيذ التسجيل الجماعي' : 'Erreur lors de l’inscription groupée'), 'error');
      }
    } catch (err) {
      console.error('Erreur confirmBulkEnrollment:', err);
      this.playChime('error');
      this.showToast(isAr ? 'خطأ في الاتصال بالخادم' : 'Erreur de connexion avec le serveur', 'error');
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.style.opacity = '1';
      }
      if (btnText) {
        btnText.textContent = isAr ? 'تأكيد التسجيل الجماعي' : 'Confirmer les inscriptions groupées';
      }
    }
  }

  // -------------------------------------------------------------
  // PARAMÈTRES (SETTINGS) VIEW
  // -------------------------------------------------------------
  switchSettingsTab(tabName) {
    document.querySelectorAll('.settings-subnav .settings-nav-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.settingsTab === tabName);
    });
    document.querySelectorAll('.settings-panels-container .settings-tab-panel').forEach(panel => {
      panel.classList.toggle('active', panel.id === `settingsTab-${tabName}`);
    });
    if (tabName === 'securite') {
      this.loadSchoolCyclesInputs();
    }
  }

  // -------------------------------------------------------------
  // SCHOOL CYCLES & EDUCATIONAL LEVELS FILTERING
  // -------------------------------------------------------------
  loadSchoolCyclesInputs() {
    let cycles = ['CEM']; // default
    if (this.settings && this.settings.school_cycles) {
      try {
        const parsed = JSON.parse(this.settings.school_cycles);
        if (Array.isArray(parsed) && parsed.length > 0) {
          cycles = parsed;
        }
      } catch (e) {}
    } else if (this.settings && this.settings.school_type) {
      if (this.settings.school_type === 'public_primaire') cycles = ['Primaire'];
      else if (this.settings.school_type === 'public_lycee') cycles = ['Lycee'];
      else if (this.settings.school_type === 'public_cem') cycles = ['CEM'];
    }

    const checkPrimaire = document.getElementById('checkCyclePrimaire');
    const checkCEM = document.getElementById('checkCycleCEM');
    const checkLycee = document.getElementById('checkCycleLycee');

    if (checkPrimaire) checkPrimaire.checked = cycles.includes('Primaire');
    if (checkCEM) checkCEM.checked = cycles.includes('CEM');
    if (checkLycee) checkLycee.checked = cycles.includes('Lycee');

    this.onCycleSelectionChange();
  }

  setSchoolCyclesPreset(cyclesList) {
    const checkPrimaire = document.getElementById('checkCyclePrimaire');
    const checkCEM = document.getElementById('checkCycleCEM');
    const checkLycee = document.getElementById('checkCycleLycee');

    if (checkPrimaire) checkPrimaire.checked = cyclesList.includes('Primaire');
    if (checkCEM) checkCEM.checked = cyclesList.includes('CEM');
    if (checkLycee) checkLycee.checked = cyclesList.includes('Lycee');

    this.onCycleSelectionChange();
  }

  onCycleSelectionChange() {
    const isAr = this.lang === 'ar';
    const isPrimaire = !!document.getElementById('checkCyclePrimaire')?.checked;
    const isCEM = !!document.getElementById('checkCycleCEM')?.checked;
    const isLycee = !!document.getElementById('checkCycleLycee')?.checked;

    // Card border / highlight states
    const cardP = document.getElementById('cardCyclePrimaire');
    const cardC = document.getElementById('cardCycleCEM');
    const cardL = document.getElementById('cardCycleLycee');

    if (cardP) {
      cardP.style.borderColor = isPrimaire ? '#10b981' : 'var(--border-color)';
      cardP.style.background = isPrimaire ? 'rgba(16, 185, 129, 0.06)' : 'var(--card-bg, #fff)';
    }
    if (cardC) {
      cardC.style.borderColor = isCEM ? '#3b82f6' : 'var(--border-color)';
      cardC.style.background = isCEM ? 'rgba(59, 130, 246, 0.06)' : 'var(--card-bg, #fff)';
    }
    if (cardL) {
      cardL.style.borderColor = isLycee ? '#8b5cf6' : 'var(--border-color)';
      cardL.style.background = isLycee ? 'rgba(139, 92, 246, 0.06)' : 'var(--card-bg, #fff)';
    }

    // Dynamic Live Preview of Active Levels
    const previewContainer = document.getElementById('cyclesActiveLevelsPreview');
    if (!previewContainer) return;

    const badges = [];

    if (isPrimaire) {
      badges.push(`
        <span class="badge-pill" style="background: rgba(16, 185, 129, 0.15); color: #047857; font-weight: 700;">التحضيري</span>
        <span class="badge-pill" style="background: rgba(16, 185, 129, 0.15); color: #047857; font-weight: 700;">1 ابتدائي (1AP)</span>
        <span class="badge-pill" style="background: rgba(16, 185, 129, 0.15); color: #047857; font-weight: 700;">2 ابتدائي (2AP)</span>
        <span class="badge-pill" style="background: rgba(16, 185, 129, 0.15); color: #047857; font-weight: 700;">3 ابتدائي (3AP)</span>
        <span class="badge-pill" style="background: rgba(16, 185, 129, 0.15); color: #047857; font-weight: 700;">4 ابتدائي (4AP)</span>
        <span class="badge-pill" style="background: rgba(16, 185, 129, 0.15); color: #047857; font-weight: 700;">5 ابتدائي (5AP)</span>
      `);
    }

    if (isCEM) {
      badges.push(`
        <span class="badge-pill" style="background: rgba(59, 130, 246, 0.15); color: #1d4ed8; font-weight: 700;">1 متوسط (1AM)</span>
        <span class="badge-pill" style="background: rgba(59, 130, 246, 0.15); color: #1d4ed8; font-weight: 700;">2 متوسط (2AM)</span>
        <span class="badge-pill" style="background: rgba(59, 130, 246, 0.15); color: #1d4ed8; font-weight: 700;">3 متوسط (3AM)</span>
        <span class="badge-pill" style="background: rgba(59, 130, 246, 0.15); color: #1d4ed8; font-weight: 700;">4 متوسط (4AM - BEM)</span>
      `);
    }

    if (isLycee) {
      badges.push(`
        <span class="badge-pill" style="background: rgba(139, 92, 246, 0.15); color: #6d28d9; font-weight: 700;">1 ثانوي (1AS)</span>
        <span class="badge-pill" style="background: rgba(139, 92, 246, 0.15); color: #6d28d9; font-weight: 700;">2 ثانوي (2AS)</span>
        <span class="badge-pill" style="background: rgba(139, 92, 246, 0.15); color: #6d28d9; font-weight: 700;">3 ثانوي (3AS - BAC)</span>
      `);
    }

    if (badges.length === 0) {
      previewContainer.innerHTML = `<span style="color: #ef4444; font-size: 12px; font-weight: 600;">
        <i class="fa-solid fa-triangle-exclamation"></i> ${isAr ? 'لم يتم تحديد أي طور! يرجى اختيار طور واحد على الأقل.' : 'Aucun cycle sélectionné ! Veuillez choisir au moins un cycle.'}
      </span>`;
    } else {
      previewContainer.innerHTML = badges.join('');
    }
  }

  async saveSchoolCycles() {
    const isAr = this.lang === 'ar';
    const selected = [];
    if (document.getElementById('checkCyclePrimaire')?.checked) selected.push('Primaire');
    if (document.getElementById('checkCycleCEM')?.checked) selected.push('CEM');
    if (document.getElementById('checkCycleLycee')?.checked) selected.push('Lycee');

    if (selected.length === 0) {
      this.showToast(isAr ? 'يرجى اختيار طور تعليمي واحد على الأقل!' : 'Veuillez sélectionner au moins un cycle scolaire !', 'warning');
      return;
    }

    const btn = document.getElementById('btnSaveSchoolCycles');
    const oldHtml = btn ? btn.innerHTML : '';
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${isAr ? 'جاري الحفظ وتحديث المستويات...' : 'Enregistrement...'}`;
    }

    try {
      const schoolTypeVal = selected.length === 1 ? `public_${selected[0].toLowerCase()}` : (selected.length === 3 ? 'public_complexe' : 'public_mixte');
      const res = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          school_cycles: JSON.stringify(selected),
          school_type: schoolTypeVal
        })
      });
      const data = await res.json();
      if (data.success) {
        if (!this.settings) this.settings = {};
        this.settings.school_cycles = JSON.stringify(selected);
        this.settings.school_type = schoolTypeVal;

        // Reload levels from server with new filtered cycles
        await this.loadLevels();

        // Refresh all levels dropdowns across the UI
        this.refreshAllLevelDropdowns();

        this.playChime('success');
        this.showToast(isAr ? 'تم حفظ نوع المؤسسة وتحديث المستويات الدراسية المتاحة بنجاح!' : 'Cycles et niveaux scolaires mis à jour avec succès !', 'success');
      } else {
        this.showToast(data.error || 'Erreur lors de l’enregistrement', 'error');
      }
    } catch (err) {
      console.error(err);
      this.showToast(isAr ? 'خطأ في الاتصال بالخادم' : 'Erreur réseau ou serveur', 'error');
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = oldHtml;
      }
    }
  }

  refreshAllLevelDropdowns() {
    const isAr = this.lang === 'ar';
    const list = this.levels || [];

    // 1. filterStudentLevel
    const filterSelect = document.getElementById('filterStudentLevel');
    if (filterSelect) {
      const cur = filterSelect.value;
      filterSelect.innerHTML = `<option value="">${isAr ? 'كل المستويات' : 'Tous niveaux'}</option>` +
        list.map(l => `<option value="${l.id}">${this.escapeHtml(l.name)}</option>`).join('');
      filterSelect.value = cur;
    }

    // 2. studentLevel (in modalStudent)
    const studentSelect = document.getElementById('studentLevel');
    if (studentSelect) {
      const cur = studentSelect.value;
      studentSelect.innerHTML = `<option value="">${isAr ? '-- اختر المستوى الدراسي --' : '-- Choisir un niveau --'}</option>` +
        list.map(l => `<option value="${l.id}">${this.escapeHtml(l.name)}</option>`).join('');
      studentSelect.value = cur;
    }

    // 3. importDefaultLevel (in modalRakmana / Excel import)
    const importSelect = document.getElementById('importDefaultLevel');
    if (importSelect) {
      const cur = importSelect.value;
      importSelect.innerHTML = `<option value="">${isAr ? '-- اختياري (أو تحديد تلقائي) --' : '-- Optionnel (ou auto-détecté) --'}</option>` +
        list.map(l => `<option value="${l.id}">${this.escapeHtml(l.name)}</option>`).join('');
      importSelect.value = cur;
    }

    // 4. groupLevel (in modalGroup)
    const groupSelect = document.getElementById('groupLevel');
    if (groupSelect) {
      const cur = groupSelect.value;
      groupSelect.innerHTML = `<option value="">${isAr ? '-- اختر المستوى الدراسي --' : '-- Choisir un niveau --'}</option>` +
        list.map(l => `<option value="${l.id}">${this.escapeHtml(l.name)}</option>`).join('');
      groupSelect.value = cur;
    }
  }

  async loadNetworkInfo() {
    try {
      const res = await fetch('/api/network/info');
      const data = await res.json();
      if (!data.success) return;
      const urlBox = document.getElementById('lanServerUrlDisplay');
      if (urlBox) urlBox.value = data.primaryUrl;
      const listContainer = document.getElementById('lanAddressesList');
      if (listContainer) {
        listContainer.innerHTML = (data.addresses || []).map(a => `
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 14px; background: rgba(255,255,255,0.04); border-radius: 8px; margin-bottom: 8px;">
            <div>
              <strong style="color: #60a5fa; font-size: 14px;"><i class="fa-solid fa-wifi" style="margin-right: 6px;"></i> ${a.name}</strong>
              <div style="font-size: 12px; color: var(--text-muted);">${a.ip}</div>
            </div>
            <div style="display: flex; gap: 8px; align-items: center;">
              <code style="background: rgba(0,0,0,0.3); padding: 4px 8px; border-radius: 4px; color: #34d399; font-weight: bold;">${a.url}</code>
              <button type="button" class="btn-secondary" style="padding: 4px 10px; font-size: 12px;" onclick="navigator.clipboard.writeText('${a.url}'); app.showToast(app.lang === 'ar' ? 'تم نسخ الرابط!' : 'Lien copié !', 'success')">
                <i class="fa-regular fa-copy"></i>
              </button>
            </div>
          </div>
        `).join('') || '<div style="color: var(--text-muted);">Aucune carte réseau active détectée.</div>';
      }
    } catch(e) {
      console.warn('Network info error:', e);
    }
  }

  async loadSettingsInputs() {
    await this.loadSettings();
    this.checkLicenseStatus();

    // 1. Établissement
    const schoolNameInput = document.getElementById('settingSchoolName');
    if (schoolNameInput) schoolNameInput.value = this.settings.school_name || 'Schoolaris';
    const schoolAddressInput = document.getElementById('settingSchoolAddress');
    if (schoolAddressInput) schoolAddressInput.value = this.settings.school_address || '';
    const schoolPhoneInput = document.getElementById('settingSchoolPhone');
    if (schoolPhoneInput) schoolPhoneInput.value = this.settings.school_phone || '0550 000 000';
    const schoolEmailInput = document.getElementById('settingSchoolEmail');
    if (schoolEmailInput) schoolEmailInput.value = this.settings.school_email || 'contact@ecole.dz';
    const currencyInput = document.getElementById('settingCurrency');
    if (currencyInput) currencyInput.value = this.settings.currency || 'DA';
    const activeYearInput = document.getElementById('settingActiveYear');
    if (activeYearInput) activeYearInput.value = this.settings.active_year || '2025-2026';

    // Logo
    this.schoolLogoBase64 = this.settings.school_logo || '';
    const previewContainer = document.getElementById('settingLogoPreviewContainer');
    const previewImg = document.getElementById('settingLogoPreview');
    const fileNameSpan = document.getElementById('settingLogoFileName');
    if (this.schoolLogoBase64 && previewImg && previewContainer) {
      previewImg.src = this.schoolLogoBase64;
      previewContainer.style.display = 'inline-flex';
      if (fileNameSpan) fileNameSpan.textContent = 'Logo enregistré';
    } else {
      if (previewContainer) previewContainer.style.display = 'none';
      if (fileNameSpan) fileNameSpan.textContent = 'Aucun fichier sélectionné';
    }

    // 2. Badges élèves (impression)
    const badgeWidthInput = document.getElementById('settingBadgeWidth');
    if (badgeWidthInput) badgeWidthInput.value = this.settings.badge_width || '85.6';
    const badgeHeightInput = document.getElementById('settingBadgeHeight');
    if (badgeHeightInput) badgeHeightInput.value = this.settings.badge_height || '53.98';

    // 3. Facturation & Échéances
    const prorataMensuel = document.getElementById('settingProrataMensuel');
    if (prorataMensuel) prorataMensuel.checked = this.settings.prorata_mensuel === '1';
    const prorataHebdo = document.getElementById('settingProrataHebdo');
    if (prorataHebdo) prorataHebdo.checked = this.settings.prorata_hebdo === '1';
    const billingGenDay = document.getElementById('settingBillingGenDay');
    if (billingGenDay) billingGenDay.value = this.settings.billing_gen_day || '1';
    const billingDueDay = document.getElementById('settingBillingDueDay');
    if (billingDueDay) billingDueDay.value = this.settings.billing_due_day || '15';
    const alertStartup = document.getElementById('settingAlertStartup');
    if (alertStartup) alertStartup.checked = this.settings.alert_startup !== '0';
    const autoSilentGen = document.getElementById('settingAutoSilentGen');
    if (autoSilentGen) autoSilentGen.checked = this.settings.auto_silent_gen === '1';

    // 4. Caisse categories
    this.renderCaisseCategories();

    // 5. Backups
    await this.loadBackupsList();

    // 6. Type d'établissement & Cycles scolaires
    this.loadSchoolCyclesInputs();
  }

  handleSchoolLogoUpload(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      alert('Le logo ne doit pas dépasser 2 Mo');
      return;
    }
    const reader = new FileReader();
    reader.onload = (evt) => {
      this.schoolLogoBase64 = evt.target.result;
      const previewImg = document.getElementById('settingLogoPreview');
      const previewContainer = document.getElementById('settingLogoPreviewContainer');
      const fileNameSpan = document.getElementById('settingLogoFileName');
      if (previewImg) previewImg.src = this.schoolLogoBase64;
      if (previewContainer) previewContainer.style.display = 'inline-flex';
      if (fileNameSpan) fileNameSpan.textContent = file.name;
    };
    reader.readAsDataURL(file);
  }

  removeSchoolLogo() {
    this.schoolLogoBase64 = '';
    const fileInput = document.getElementById('settingLogoFile');
    if (fileInput) fileInput.value = '';
    const previewContainer = document.getElementById('settingLogoPreviewContainer');
    if (previewContainer) previewContainer.style.display = 'none';
    const fileNameSpan = document.getElementById('settingLogoFileName');
    if (fileNameSpan) fileNameSpan.textContent = 'Aucun fichier sélectionné';
  }

  async saveEtablissementSettings() {
    const payload = {
      school_name: document.getElementById('settingSchoolName')?.value || '',
      school_address: document.getElementById('settingSchoolAddress')?.value || '',
      school_phone: document.getElementById('settingSchoolPhone')?.value || '',
      school_email: document.getElementById('settingSchoolEmail')?.value || '',
      currency: document.getElementById('settingCurrency')?.value || 'DA',
      active_year: document.getElementById('settingActiveYear')?.value || '2025-2026',
      school_logo: this.schoolLogoBase64 || ''
    };

    try {
      const res = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        alert('Informations de l’établissement enregistrées avec succès !');
        await this.loadSettings();
      } else {
        alert(data.error || 'Erreur lors de l’enregistrement');
      }
    } catch (err) {
      console.error(err);
      alert('Erreur de connexion');
    }
  }

  async saveBadgeSettings() {
    const payload = {
      badge_width: document.getElementById('settingBadgeWidth')?.value || '85.6',
      badge_height: document.getElementById('settingBadgeHeight')?.value || '53.98'
    };

    try {
      const res = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        alert('Dimensions des badges enregistrées avec succès !');
        await this.loadSettings();
      } else {
        alert(data.error || 'Erreur lors de l’enregistrement');
      }
    } catch (err) {
      console.error(err);
      alert('Erreur de connexion');
    }
  }

  async saveBillingSettings() {
    const payload = {
      prorata_mensuel: document.getElementById('settingProrataMensuel')?.checked ? '1' : '0',
      prorata_hebdo: document.getElementById('settingProrataHebdo')?.checked ? '1' : '0',
      billing_gen_day: document.getElementById('settingBillingGenDay')?.value || '1',
      billing_due_day: document.getElementById('settingBillingDueDay')?.value || '15',
      alert_startup: document.getElementById('settingAlertStartup')?.checked ? '1' : '0',
      auto_silent_gen: document.getElementById('settingAutoSilentGen')?.checked ? '1' : '0'
    };

    try {
      const res = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        alert('Paramètres de facturation enregistrés avec succès !');
        await this.loadSettings();
      } else {
        alert(data.error || 'Erreur lors de l’enregistrement');
      }
    } catch (err) {
      console.error(err);
      alert('Erreur de connexion');
    }
  }

  async changePassword() {
    const old_password = document.getElementById('settingOldPassword')?.value;
    const new_password = document.getElementById('settingNewPassword')?.value;
    const confirm_password = document.getElementById('settingConfirmPassword')?.value;

    if (!old_password || !new_password || !confirm_password) {
      alert('Veuillez remplir tous les champs');
      return;
    }
    if (new_password !== confirm_password) {
      alert('Le nouveau mot de passe et la confirmation ne correspondent pas');
      return;
    }
    if (new_password.length < 4) {
      alert('Le mot de passe doit comporter au moins 4 caractères');
      return;
    }

    try {
      const res = await fetch('/api/settings/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ old_password, new_password })
      });
      const data = await res.json();
      if (data.success) {
        alert('Mot de passe modifié avec succès !');
        document.getElementById('settingOldPassword').value = '';
        document.getElementById('settingNewPassword').value = '';
        document.getElementById('settingConfirmPassword').value = '';
      } else {
        alert(data.error || 'Erreur lors du changement de mot de passe');
      }
    } catch (err) {
      console.error(err);
      alert('Erreur de connexion');
    }
  }

  getCaisseCategories(type) {
    if (type === 'entree') {
      try {
        if (this.settings?.caisse_categories_entree) {
          const parsed = JSON.parse(this.settings.caisse_categories_entree);
          if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
      } catch (e) { }
      return [
        "حقوق التسجيل والتضامن المدرسي",
        "اشتراك المطعم المدرسي (نصف داخلي)",
        "مبيعات الكتب المدرسية",
        "منحة التضامن 5000 دج",
        "مداخيل النشاط الثقافي والرياضي",
        "مساهمات وإعانات أخرى"
      ];
    } else {
      try {
        if (this.settings?.caisse_categories_sortie) {
          const parsed = JSON.parse(this.settings.caisse_categories_sortie);
          if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
      } catch (e) { }
      return [
        "لوازم ومواد التغذية للمطعم",
        "تجهيزات وصيانة المطبخ",
        "صيانة وترميم الأقسام والقاعات",
        "طباعة ووسائل التعليم والأمانة",
        "فواتير الماء والكهرباء والغاز",
        "نفقات النشاط الرياضي والتربوي",
        "مصاريف أخرى"
      ];
    }
  }

  renderCaisseCategories() {
    const entrees = this.getCaisseCategories('entree');
    const sorties = this.getCaisseCategories('sortie');

    const wrapperEntree = document.getElementById('caisseTagsEntree');
    if (wrapperEntree) {
      wrapperEntree.innerHTML = entrees.map((tag, idx) => `
        <span class="caisse-tag caisse-tag-green">
          <span>${tag}</span>
          <button type="button" class="tag-remove-btn" onclick="app.removeCaisseCategory('entree', ${idx})" title="Supprimer">×</button>
        </span>
      `).join('');
    }

    const wrapperSortie = document.getElementById('caisseTagsSortie');
    if (wrapperSortie) {
      wrapperSortie.innerHTML = sorties.map((tag, idx) => `
        <span class="caisse-tag caisse-tag-red">
          <span>${tag}</span>
          <button type="button" class="tag-remove-btn" onclick="app.removeCaisseCategory('sortie', ${idx})" title="Supprimer">×</button>
        </span>
      `).join('');
    }
  }

  async addCaisseCategory(type) {
    const inputId = type === 'entree' ? 'inputNewCatEntree' : 'inputNewCatSortie';
    const input = document.getElementById(inputId);
    if (!input) return;
    const val = input.value.trim();
    if (!val) return;

    const list = [...this.getCaisseCategories(type)];
    if (list.includes(val)) {
      alert('Cette catégorie existe déjà');
      return;
    }
    list.push(val);

    const settingKey = type === 'entree' ? 'caisse_categories_entree' : 'caisse_categories_sortie';
    const payload = { [settingKey]: JSON.stringify(list) };

    try {
      const res = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        if (!this.settings) this.settings = {};
        this.settings[settingKey] = JSON.stringify(list);
        input.value = '';
        this.renderCaisseCategories();
      }
    } catch (err) {
      console.error(err);
      alert('Erreur lors de l’ajout de la catégorie');
    }
  }

  async removeCaisseCategory(type, index) {
    const list = [...this.getCaisseCategories(type)];
    if (index < 0 || index >= list.length) return;
    list.splice(index, 1);

    const settingKey = type === 'entree' ? 'caisse_categories_entree' : 'caisse_categories_sortie';
    const payload = { [settingKey]: JSON.stringify(list) };

    try {
      const res = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        if (!this.settings) this.settings = {};
        this.settings[settingKey] = JSON.stringify(list);
        this.renderCaisseCategories();
      }
    } catch (err) {
      console.error(err);
      alert('Erreur lors de la suppression de la catégorie');
    }
  }

  async downloadBackup(e) {
    if (e && e.preventDefault) e.preventDefault();
    const isAr = this.lang === 'ar';
    try {
      const now = new Date().toISOString().split('T')[0];
      const filename = `EDUMIND_Backup_${now}.sqlite`;
      const res = await fetch('/api/backup/download');
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, 1000);
      if (typeof this.playChime === 'function') this.playChime('success');
    } catch (err) {
      console.warn('Fallback direct download:', err);
      window.location.href = '/api/backup/download';
    }
  }

  async downloadArchiveBackup(filename, e) {
    if (e && e.preventDefault) e.preventDefault();
    const isAr = this.lang === 'ar';
    try {
      const res = await fetch(`/api/backup/download-archive/${encodeURIComponent(filename)}`);
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, 1000);
      if (typeof this.playChime === 'function') this.playChime('success');
    } catch (err) {
      console.warn('Fallback download:', err);
      window.location.href = `/api/backup/download-archive/${encodeURIComponent(filename)}`;
    }
  }

  async loadBackupsList() {
    const listContainer = document.getElementById('backupsListContainer');
    if (!listContainer) return;
    const isAr = this.lang === 'ar';
    try {
      const res = await fetch('/api/backup/list');
      const data = await res.json();
      if (data.success && data.backups && data.backups.length > 0) {
        listContainer.innerHTML = data.backups.map(b => `
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 9px 14px; background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); border-radius: 8px; font-size: 13px; gap: 8px; flex-wrap: wrap;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <i class="fa-solid fa-file-shield" style="color: #10b981; font-size: 15px;"></i>
              <div>
                <span style="font-weight: 600; color: var(--text-color);">${isAr ? 'نسخة احتياطية ليوم' : 'Sauvegarde du'} ${b.dateStr}</span>
                <span style="color: var(--text-muted); font-size: 11px; margin-left: 6px;">(${b.sizeKb} Ko)</span>
              </div>
            </div>
            <div style="display: flex; gap: 8px; align-items: center;">
              <button type="button" class="btn-secondary" onclick="app.restoreArchiveBackup('${b.filename}')" style="padding: 5px 12px; font-size: 11.5px; border: 1px solid #f59e0b; color: #f59e0b; background: rgba(245,158,11,0.1); cursor: pointer; display: inline-flex; align-items: center; gap: 6px;" title="${isAr ? 'استرجاع هذه النسخة الاحتياطية' : 'Restaurer cette archive'}">
                <i class="fa-solid fa-rotate-left"></i> ${isAr ? 'استرجاع' : 'Restaurer'}
              </button>
              <a href="/api/backup/download-archive/${encodeURIComponent(b.filename)}" download="${b.filename}" onclick="app.downloadArchiveBackup('${b.filename}', event)" class="btn-secondary" style="padding: 5px 12px; font-size: 11.5px; text-decoration: none; display: inline-flex; align-items: center; gap: 6px;">
                <i class="fa-solid fa-download"></i> ${isAr ? 'تحميل' : 'Télécharger'}
              </a>
            </div>
          </div>
        `).join('');
      } else {
        listContainer.innerHTML = `<div style="color: var(--text-muted); font-size: 12.5px; font-style: italic; padding: 6px 0;">${isAr ? 'لا توجد نسخ مؤرشفة حالياً. يتم إنشاء نسخة تلقائية كل يوم.' : 'Aucune archive pour le moment. Une sauvegarde se crée automatiquement chaque jour.'}</div>`;
      }
    } catch (e) {
      console.warn('Erreur chargement archives de sauvegarde:', e);
      listContainer.innerHTML = `<div style="color: var(--text-muted); font-size: 12px;">Impossible de charger la liste des archives.</div>`;
    }
  }

  async handleSqliteRestoreUpload(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    // Reset so same file can be re-selected if desired
    e.target.value = '';

    const isAr = this.lang === 'ar';
    const confirmMsg = isAr
      ? `⚠️ تنبيه هام واستثنائي :\n\nاسترجاع قاعدة البيانات من الملف "${file.name}" سيستبدل كافة البيانات الحالية في البرنامج!\n\n(سيقوم النظام بحفظ نسخة أمان احتياطية لبياناتك الحالية تلقائياً قبل البدء).\n\nهل أنت متأكد من الاسترجاع والمتابعة الآن؟`
      : `⚠️ AVERTISSEMENT IMPORTANT :\n\nLa restauration depuis le fichier "${file.name}" remplacera TOUTES les données actuelles de l'établissement !\n\n(Une copie de sécurité automatique de vos données actuelles sera créée avant la restauration).\n\nConfirmez-vous la restauration immédiate ?`;

    if (!confirm(confirmMsg)) return;

    try {
      const res = await fetch('/api/backup/restore', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/octet-stream'
        },
        body: file
      });

      const data = await res.json();
      if (data.success) {
        this.playChime('success');
        alert(isAr ? '✅ تم استرجاع قاعدة البيانات بنجاح! سيتم الآن إعادة تحميل البرنامج لتحديث البيانات...' : '✅ Base de données restaurée avec succès ! L\'application va maintenant redémarrer...');
        setTimeout(() => {
          window.location.reload();
        }, 1200);
      } else {
        alert((isAr ? '❌ فشل الاسترجاع: ' : '❌ Échec de la restauration : ') + (data.error || 'Erreur inconnue'));
      }
    } catch (err) {
      console.error('Erreur upload restore:', err);
      alert(isAr ? '❌ خطأ أثناء رفع ملف قاعدة البيانات' : '❌ Erreur de communication lors de l\'envoi du fichier : ' + err.message);
    }
  }

  async restoreArchiveBackup(filename) {
    const isAr = this.lang === 'ar';
    const confirmMsg = isAr
      ? `⚠️ هل أنت متأكد من استرجاع النسخة الاحتياطية (${filename})؟ ستستبدل بيانات العمل الحالية.`
      : `⚠️ Voulez-vous vraiment restaurer la sauvegarde (${filename}) ? Les données actuelles seront remplacées.`;

    if (!confirm(confirmMsg)) return;

    try {
      const res = await fetch(`/api/backup/restore-archive/${encodeURIComponent(filename)}`, { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        this.playChime('success');
        alert(isAr ? '✅ تم استرجاع النسخة الاحتياطية بنجاح! جاري التحديث...' : '✅ Base restaurée avec succès ! Rechargement en cours...');
        setTimeout(() => { window.location.reload(); }, 1200);
      } else {
        alert((isAr ? '❌ خطأ: ' : '❌ Erreur : ') + (data.error || 'Erreur'));
      }
    } catch (err) {
      console.error(err);
      alert(isAr ? '❌ خطأ في الاتصال بالخادم' : '❌ Erreur de connexion');
    }
  }

  async saveSettings() {
    return this.saveEtablissementSettings();
  }

  // ============================================================
  // PUBLIC SCHOOL SPECIALIZED FEATURES (المؤسسات العمومية)
  // ============================================================

  // 1. Interactive Role Selector on Login Screen
  selectSchoolRole(role, roleName, icon, btnEl) {
    document.querySelectorAll('.role-pill-btn').forEach(btn => {
      btn.classList.remove('active');
      btn.style.borderColor = 'rgba(255, 255, 255, 0.08)';
      btn.style.background = 'rgba(255, 255, 255, 0.04)';
      btn.style.color = 'var(--text-muted)';
    });

    if (btnEl) {
      btnEl.classList.add('active');
      btnEl.style.borderColor = '#3b82f6';
      btnEl.style.background = 'rgba(37, 99, 235, 0.18)';
      btnEl.style.color = '#fff';
    }

    const inputRole = document.getElementById('loginRole');
    if (inputRole) inputRole.value = role;

    const nameEl = document.getElementById('currentRoleName');
    if (nameEl) nameEl.textContent = `${roleName} (${role === 'admin' ? 'Administrateur' : 'Utilisateur'})`;

    const avatarEl = document.getElementById('currentRoleAvatar');
    if (avatarEl) {
      avatarEl.innerHTML = `<i class="fa-solid ${icon}"></i>`;
    }
  }

  // 2. Merged Classes & Rooms Tab Switching (الأقسام والقاعات)
  switchGroupesTab(tab) {
    const tabClasses = document.getElementById('tabGroupesClasses');
    const tabSalles = document.getElementById('tabGroupesSalles');
    const panelClasses = document.getElementById('groupesClassesTabPanel');
    const panelSalles = document.getElementById('groupesSallesTabPanel');

    if (tab === 'classes') {
      if (tabClasses) {
        tabClasses.classList.add('active');
        tabClasses.style.background = 'rgba(59, 130, 246, 0.15)';
        tabClasses.style.color = '#3b82f6';
      }
      if (tabSalles) {
        tabSalles.classList.remove('active');
        tabSalles.style.background = 'transparent';
        tabSalles.style.color = 'var(--text-muted)';
      }
      if (panelClasses) panelClasses.style.display = 'block';
      if (panelSalles) panelSalles.style.display = 'none';
    } else {
      if (tabSalles) {
        tabSalles.classList.add('active');
        tabSalles.style.background = 'rgba(16, 185, 129, 0.15)';
        tabSalles.style.color = '#10b981';
      }
      if (tabClasses) {
        tabClasses.classList.remove('active');
        tabClasses.style.background = 'transparent';
        tabClasses.style.color = 'var(--text-muted)';
      }
      if (panelClasses) panelClasses.style.display = 'none';
      if (panelSalles) panelSalles.style.display = 'block';
      this.loadRoomsMerged();
    }
  }

  async loadRoomsMerged() {
    try {
      const res = await fetch('/api/rooms');
      const data = await res.json();
      if (!data.success) return;
      const rooms = data.rooms || [];
      this.rooms = rooms;

      // Render Cards
      const gridContainer = document.getElementById('roomsGridMergedContainer');
      if (gridContainer) {
        if (rooms.length === 0) {
          gridContainer.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 30px;">لا توجد قاعات مضافة حالياً. انقر على "+ قاعة جديدة".</div>`;
        } else {
          gridContainer.innerHTML = rooms.map(r => `
            <div class="schoolaris-stat-card" style="border: 1px solid var(--border-color); border-radius: 14px; padding: 18px; position: relative;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div style="width: 40px; height: 40px; border-radius: 10px; background: rgba(16, 185, 129, 0.15); color: #10b981; display: flex; align-items: center; justify-content: center; font-size: 18px;">
                    <i class="fa-solid fa-door-open"></i>
                  </div>
                  <div>
                    <strong style="font-size: 15px; color: var(--text-heading); display: block;">${this.escapeHtml(r.name)}</strong>
                    <span style="font-size: 12px; color: var(--text-muted);">السعة: <strong>${r.capacity || 30}</strong> مقعد</span>
                  </div>
                </div>
                <div style="display: flex; gap: 6px;">
                  <button class="btn-action-edit" title="تعديل" onclick="app.editRoom(${r.id})"><i class="fa-solid fa-pen-to-square"></i></button>
                  <button class="btn-action-delete" title="حذف" onclick="app.deleteRoom(${r.id})"><i class="fa-solid fa-trash-can"></i></button>
                </div>
              </div>
              <div style="font-size: 12px; color: var(--text-muted); margin-top: 8px;">
                ${this.escapeHtml(r.description || 'قاعة تدريس عامة')}
              </div>
            </div>
          `).join('');
        }
      }

      // Render Table
      const tableBody = document.getElementById('roomsTableMergedBody');
      if (tableBody) {
        tableBody.innerHTML = rooms.map(r => `
          <tr>
            <td><strong>${this.escapeHtml(r.name)}</strong></td>
            <td><span style="font-weight: 700; color: #10b981;">${r.capacity || 30}</span> مقعد</td>
            <td><span style="color: var(--text-muted);">${this.escapeHtml(r.description || '-')}</span></td>
            <td style="text-align: right;">
              <div style="display: inline-flex; gap: 8px;">
                <button class="btn-action-edit" onclick="app.editRoom(${r.id})"><i class="fa-solid fa-pen-to-square"></i></button>
                <button class="btn-action-delete" onclick="app.deleteRoom(${r.id})"><i class="fa-solid fa-trash-can"></i></button>
              </div>
            </td>
          </tr>
        `).join('');
      }
    } catch (err) {
      console.error('Failed to load merged rooms:', err);
    }
  }

  // 3. Canteen & Demi-Pension Module (المطعم المدرسي)
  async loadCantineData() {
    try {
      const res = await fetch('/api/cantine/today');
      const data = await res.json();
      if (!data.success) return;

      const { stats, scans } = data;

      // Update KPI stats
      const totalEl = document.getElementById('cantineStatTotal');
      if (totalEl) totalEl.textContent = stats.totalDemi || 0;

      const servedEl = document.getElementById('cantineStatServed');
      if (servedEl) servedEl.textContent = stats.servedToday || 0;

      const remEl = document.getElementById('cantineStatRemaining');
      if (remEl) remEl.textContent = stats.remaining || 0;

      const rateEl = document.getElementById('cantineStatRate');
      if (rateEl) rateEl.textContent = `${stats.serviceRate || 0}%`;

      const barEl = document.getElementById('cantineProgressBar');
      if (barEl) barEl.style.width = `${stats.serviceRate || 0}%`;

      const badgeEl = document.getElementById('cantineScansTodayBadge');
      if (badgeEl) badgeEl.textContent = `${scans.length} وجبة`;

      // Render Live Scans Feed
      const tbody = document.getElementById('cantineLiveScansTableBody');
      if (tbody) {
        if (!scans || scans.length === 0) {
          tbody.innerHTML = `
            <tr>
              <td colspan="4" style="text-align: center; color: var(--text-muted); padding: 30px;">
                <i class="fa-solid fa-utensils" style="font-size: 26px; opacity: 0.4; display: block; margin-bottom: 8px;"></i>
                لم يتم تسجيل أي وجبة اليوم بعد. ابدأ بمسح بطاقات التلاميذ.
              </td>
            </tr>
          `;
        } else {
          tbody.innerHTML = scans.map(s => `
            <tr>
              <td><span style="font-weight: 700; color: #60a5fa; font-family: monospace;">${(s.scan_time || '').slice(0, 5)}</span></td>
              <td>
                <strong style="color: var(--text-heading); font-size: 13.5px;">${this.escapeHtml(s.first_name + ' ' + s.last_name)}</strong>
                <span style="display: block; font-size: 11px; color: var(--text-muted);">${this.escapeHtml(s.matricule)}</span>
              </td>
              <td>
                <span style="font-size: 12px; color: #10b981; font-weight: 600;">${this.escapeHtml(s.group_name || s.level_name || '-')}</span>
              </td>
              <td style="text-align: center;">
                <span class="badge-status-pill active" style="font-size: 11px; padding: 2px 8px;">
                  <i class="fa-solid fa-circle-check"></i> استلم
                </span>
              </td>
            </tr>
          `).join('');
        }
      }

      // Auto-focus barcode input
      const inputEl = document.getElementById('cantineScanInput');
      if (inputEl) inputEl.focus();
    } catch (err) {
      console.error('Failed to load cantine data:', err);
    }
  }

  async handleCanteenScan() {
    const inputEl = document.getElementById('cantineScanInput');
    if (!inputEl) return;
    const query = inputEl.value.trim();
    if (!query) return;

    try {
      const res = await fetch('/api/cantine/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
      });
      const data = await res.json();

      const card = document.getElementById('cantineDetectionCard');
      const nameEl = document.getElementById('cantineStudentName');
      const matEl = document.getElementById('cantineStudentMatricule');
      const classEl = document.getElementById('cantineStudentClass');
      const alertEl = document.getElementById('cantineFeedbackAlert');
      const regimeBadge = document.getElementById('cantineRegimeBadge');

      if (card) card.style.display = 'block';

      if (data.success) {
        // Success: meal recorded
        this.playChime('success');
        const st = data.student;
        if (nameEl) nameEl.textContent = `${st.first_name} ${st.last_name}`;
        if (matEl) matEl.textContent = st.matricule;
        if (classEl) classEl.textContent = st.group_name || st.level_name || '-';
        if (regimeBadge) {
          regimeBadge.className = 'badge-status-pill active';
          regimeBadge.textContent = 'نصف داخلي (مستفيد)';
        }

        if (alertEl) {
          alertEl.style.background = 'rgba(16, 185, 129, 0.15)';
          alertEl.style.border = '1px solid #10b981';
          alertEl.style.color = '#10b981';
          alertEl.innerHTML = `
            <i class="fa-solid fa-circle-check" style="font-size: 22px;"></i>
            <div>
              <strong style="display: block; font-size: 15px;">تم تأكيد استلام الوجبة بنجاح!</strong>
              <span style="font-size: 12px; opacity: 0.9;">ساعة المسح: ${data.scan_time} &bull; بالهناء والشفاء</span>
            </div>
          `;
        }

        // Refresh feed and stats
        this.loadCantineData();
        inputEl.value = '';
        inputEl.focus();
      } else if (data.alreadyServed) {
        // Warning: Anti-passback triggered
        this.playChime('warning');
        const st = data.student || {};
        if (nameEl) nameEl.textContent = `${st.first_name || ''} ${st.last_name || ''}`;
        if (matEl) matEl.textContent = st.matricule || query;
        if (classEl) classEl.textContent = st.group_name || st.level_name || '-';
        if (regimeBadge) {
          regimeBadge.className = 'badge-status-pill inactive';
          regimeBadge.textContent = 'مكرر اليوم';
        }

        if (alertEl) {
          alertEl.style.background = 'rgba(239, 68, 68, 0.15)';
          alertEl.style.border = '1.5px solid #ef4444';
          alertEl.style.color = '#f87171';
          alertEl.innerHTML = `
            <i class="fa-solid fa-triangle-exclamation" style="font-size: 24px;"></i>
            <div>
              <strong style="display: block; font-size: 15px;">⚠️ تنبيه حماية (Anti-Passback): تكرار مسح البطاقة!</strong>
              <span style="font-size: 12.5px;">التلميذ استلم وجبته بالفعل اليوم في الساعة <strong>${data.scan_time || 'سابقاً'}</strong>.</span>
            </div>
          `;
        }
        inputEl.select();
      } else {
        // Error: not registered or external
        this.playChime('error');
        if (alertEl) {
          alertEl.style.background = 'rgba(245, 158, 11, 0.15)';
          alertEl.style.border = '1.5px solid #f59e0b';
          alertEl.style.color = '#fbbf24';
          alertEl.innerHTML = `
            <i class="fa-solid fa-circle-xmark" style="font-size: 22px;"></i>
            <div>
              <strong style="display: block; font-size: 15px;">تعذر التسجيل:</strong>
              <span style="font-size: 12.5px;">${data.error || 'تلميذ غير مسجل'}</span>
            </div>
          `;
        }
        inputEl.select();
      }
    } catch (err) {
      console.error(err);
      alert('خطأ أثناء فحص الباركود');
    }
  }

  async printCanteenDailySheet() {
    try {
      const today = new Date().toISOString().split('T')[0];
      const res = await fetch(`/api/cantine/report?date=${today}`);
      const data = await res.json();
      if (!data.success) return;

      const schoolName = this.settings?.school_name || 'المؤسسة التربوية';
      const students = data.students || [];

      const printWin = window.open('', '_blank');
      const html = `
        <!DOCTYPE html>
        <html dir="rtl" lang="ar">
        <head>
          <meta charset="utf-8">
          <title>ورقة الحضور اليومية للمطعم المدرسي - ${today}</title>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Arial, sans-serif; padding: 25px; color: #000; }
            .header { text-align: center; border-bottom: 2px solid #000; padding-bottom: 12px; margin-bottom: 20px; }
            .school { font-size: 16px; font-weight: bold; }
            .title { font-size: 20px; font-weight: 800; margin: 10px 0; }
            .meta { display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 14px; }
            table { width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 13px; }
            th, td { border: 1px solid #444; padding: 8px 10px; text-align: right; }
            th { background: #f0f0f0; font-weight: 700; text-align: center; }
            .badge-present { color: #047857; font-weight: bold; }
            .badge-absent { color: #b91c1c; }
            .signatures { display: flex; justify-content: space-between; margin-top: 40px; font-weight: bold; padding: 0 40px; }
          </style>
        </head>
        <body>
          <div class="header">
            <div>الجمهورية الجزائرية الديمقراطية الشعبية</div>
            <div>وزارة التربية الوطنية &bull; مديرية التربية</div>
            <div class="school">${schoolName}</div>
            <div class="title">ورقة الحضور اليومية للمطعم المدرسي (نصف داخلي)</div>
            <div>التاريخ: ${today} &bull; السنة الدراسية: ${this.settings?.active_year || '2026-2027'}</div>
          </div>

          <div class="meta">
            <div>إجمالي المسجلين بنصف داخلي: <strong>${data.total}</strong></div>
            <div>الوجبات المقدمة فعلياً: <strong>${data.served}</strong></div>
            <div>الغائبون عن الإطعام: <strong>${data.absent}</strong></div>
          </div>

          <table>
            <thead>
              <tr>
                <th style="width: 40px;">الرقم</th>
                <th>رقم التسجيل</th>
                <th>اسم ولقب التلميذ</th>
                <th>القسم / المستوى</th>
                <th style="text-align: center;">وقت الاستلام</th>
                <th style="text-align: center;">حالة الحضور</th>
              </tr>
            </thead>
            <tbody>
              ${students.map((s, idx) => `
                <tr>
                  <td style="text-align: center;">${idx + 1}</td>
                  <td>${s.matricule}</td>
                  <td><strong>${s.first_name} ${s.last_name}</strong></td>
                  <td>${s.group_name || s.level_name || '-'}</td>
                  <td style="text-align: center;">${s.scan_time ? s.scan_time.slice(0, 5) : '-'}</td>
                  <td style="text-align: center;">
                    <span class="${s.scan_time ? 'badge-present' : 'badge-absent'}">
                      ${s.status_ar}
                    </span>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>

          <div class="signatures">
            <div>المكلف بالإطعام والمطبخ</div>
            <div>المقتصد (المصالح المالية)</div>
            <div>مدير المؤسسة</div>
          </div>

          <script>
            window.onload = function() { window.print(); };
          </script>
        </body>
        </html>
      `;

      printWin.document.write(html);
      printWin.document.close();
    } catch (err) {
      console.error(err);
      alert('خطأ أثناء إعداد ورقة الحضور للطباعة');
    }
  }

  closeModals() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    this._savingStudent = false;
    this._savingTeacher = false;
  }
}

// Instantiate and start app
const app = new EdumindApp();
document.addEventListener('DOMContentLoaded', () => {
  app.init();
});
