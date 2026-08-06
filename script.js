/* ============================================================
   AlumniHub — logique du prototype
   Aucune dépendance externe, aucun backend.
   Les données sont fictives et stockées en mémoire (+ localStorage
   pour persister les actions de démonstration entre deux visites).
============================================================= */

/* ------------------------------------------------------------
   1. DONNÉES FICTIVES (modèle de données du produit)
------------------------------------------------------------- */

const SEED_ALUMNI = [
  { id: 1, first: "Camille", last: "Durand", promotion: 2023, formation: "Master Marketing Digital", country: "France", city: "Lyon", status: "En poste", company: "Ekimetrics", jobTitle: "Consultante Data Marketing", sector: "Conseil", email: "camille.durand@gmail.com", phone: "+33 6 12 34 56 78", completion: 95, lastUpdate: "2026-07-28",
    history: [
      { date: "2023-09", title: "Consultante Data Marketing", company: "Ekimetrics" },
      { date: "2023-01", title: "Stage - Chargée d'études", company: "Kantar" }
    ],
    interactions: ["Ouverture email campagne 'Insertion 2025' — 12/07/2026", "Connexion portail — 28/07/2026"],
    surveys: ["Enquête insertion pro 6 mois (2023)"]
  },
  { id: 2, first: "Yanis", last: "Belkacem", promotion: 2024, formation: "Bachelor Commerce International", country: "Belgique", city: "Bruxelles", status: "En recherche d'emploi", company: "", jobTitle: "", sector: "", email: "yanis.belkacem@outlook.com", phone: "+32 470 11 22 33", completion: 55, lastUpdate: "2026-02-10",
    history: [],
    interactions: ["Email d'invitation ouvert — 15/01/2026"],
    surveys: []
  },
  { id: 3, first: "Lina", last: "Moreau", promotion: 2022, formation: "Master Finance", country: "France", city: "Paris", status: "En poste", company: "BNP Paribas", jobTitle: "Analyste Crédit", sector: "Banque", email: "lina.moreau@bnp.fr", phone: "+33 6 98 76 54 32", completion: 100, lastUpdate: "2026-06-02",
    history: [
      { date: "2024-03", title: "Analyste Crédit", company: "BNP Paribas" },
      { date: "2022-09", title: "Analyste Junior", company: "Société Générale" }
    ],
    interactions: ["Réponse enquête 'Carrière 3 ans' — 02/06/2026", "Mise à jour profil — 02/06/2026"],
    surveys: ["Enquête insertion pro 6 mois (2022)", "Enquête carrière 3 ans"]
  },
  { id: 4, first: "Thomas", last: "Petit", promotion: 2025, formation: "Master Marketing Digital", country: "France", city: "Nantes", status: "Poursuite d'études", company: "", jobTitle: "Étudiant en MBA", sector: "Éducation", email: "t.petit25@gmail.com", phone: "+33 6 45 12 89 03", completion: 70, lastUpdate: "2026-05-15",
    history: [],
    interactions: ["Profil créé automatiquement — 01/07/2025"],
    surveys: []
  },
  { id: 5, first: "Sofia", last: "Rossi", promotion: 2024, formation: "MSc International Business", country: "Italie", city: "Milan", status: "En poste", company: "Luxottica", jobTitle: "Chef de produit junior", sector: "Luxe", email: "sofia.rossi@luxottica.it", phone: "+39 345 123 4567", completion: 90, lastUpdate: "2026-04-20",
    history: [{ date: "2024-10", title: "Chef de produit junior", company: "Luxottica" }],
    interactions: ["Relance J+7 envoyée — 21/04/2026"],
    surveys: ["Enquête insertion pro 6 mois (2024)"]
  },
  { id: 6, first: "Karim", last: "Haddad", promotion: 2021, formation: "Master Finance", country: "Émirats Arabes Unis", city: "Dubaï", status: "Entrepreneur", company: "Haddad Ventures", jobTitle: "Fondateur", sector: "Fintech", email: "karim@haddadventures.com", phone: "+971 50 123 4567", completion: 100, lastUpdate: "2026-03-11",
    history: [
      { date: "2023-06", title: "Fondateur", company: "Haddad Ventures" },
      { date: "2021-09", title: "Analyste M&A", company: "Rothschild & Co" }
    ],
    interactions: ["Réponse enquête 'Carrière 5 ans' — 11/03/2026"],
    surveys: ["Enquête carrière 5 ans"]
  },
  { id: 7, first: "Emma", last: "Lefevre", promotion: 2025, formation: "Bachelor Commerce International", country: "France", city: "Bordeaux", status: "En recherche d'emploi", company: "", jobTitle: "", sector: "", email: "emma.lefevre@yahoo.fr", phone: "+33 6 33 22 11 00", completion: 40, lastUpdate: "2025-12-01",
    history: [], interactions: ["Email d'invitation envoyé — 01/07/2025 (non ouvert)"], surveys: []
  },
  { id: 8, first: "Hugo", last: "Girard", promotion: 2023, formation: "Master Data Science", country: "Canada", city: "Montréal", status: "En poste", company: "Shopify", jobTitle: "Data Engineer", sector: "Tech", email: "hugo.girard@shopify.com", phone: "+1 514 555 0199", completion: 95, lastUpdate: "2026-07-01",
    history: [{ date: "2023-11", title: "Data Engineer", company: "Shopify" }],
    interactions: ["Mise à jour profil — 01/07/2026"], surveys: ["Enquête insertion pro 6 mois (2023)"]
  },
  { id: 9, first: "Chloé", last: "Bernard", promotion: 2022, formation: "Master Marketing Digital", country: "France", city: "Paris", status: "En poste", company: "L'Oréal", jobTitle: "Brand Manager", sector: "Cosmétique", email: "chloe.bernard@loreal.com", phone: "+33 6 22 33 44 55", completion: 100, lastUpdate: "2026-06-18",
    history: [
      { date: "2024-01", title: "Brand Manager", company: "L'Oréal" },
      { date: "2022-09", title: "Assistante Marketing", company: "L'Oréal" }
    ], interactions: ["Réponse enquête 'Carrière 3 ans' — 18/06/2026"], surveys: ["Enquête carrière 3 ans"]
  },
  { id: 10, first: "Nathan", last: "Simon", promotion: 2024, formation: "Master Data Science", country: "France", city: "Toulouse", status: "En poste", company: "Airbus", jobTitle: "ML Engineer", sector: "Aéronautique", email: "nathan.simon@airbus.com", phone: "+33 6 11 22 33 44", completion: 85, lastUpdate: "2026-05-30",
    history: [{ date: "2024-09", title: "ML Engineer", company: "Airbus" }], interactions: [], surveys: []
  },
  { id: 11, first: "Léa", last: "Fontaine", promotion: 2025, formation: "Master Finance", country: "Suisse", city: "Genève", status: "En poste", company: "UBS", jobTitle: "Analyste Junior", sector: "Banque", email: "lea.fontaine@ubs.com", phone: "+41 78 123 45 67", completion: 100, lastUpdate: "2026-07-30",
    history: [{ date: "2025-09", title: "Analyste Junior", company: "UBS" }], interactions: ["Profil complété — 30/07/2026"], surveys: ["Enquête insertion pro 6 mois (2025)"]
  },
  { id: 12, first: "Adam", last: "Benali", promotion: 2021, formation: "Bachelor Commerce International", country: "Maroc", city: "Casablanca", status: "En poste", company: "OCP Group", jobTitle: "Responsable Export", sector: "Industrie", email: "adam.benali@ocp.ma", phone: "+212 6 61 23 45 67", completion: 90, lastUpdate: "2026-01-22",
    history: [{ date: "2022-01", title: "Responsable Export", company: "OCP Group" }], interactions: [], surveys: ["Enquête carrière 5 ans"]
  },
  { id: 13, first: "Manon", last: "Roux", promotion: 2024, formation: "Master Marketing Digital", country: "France", city: "Lille", status: "En recherche d'emploi", company: "", jobTitle: "", sector: "", email: "manon.roux@gmail.com", phone: "+33 6 44 55 66 77", completion: 50, lastUpdate: "2026-02-28",
    history: [], interactions: ["Rappel automatique envoyé — 28/02/2026"], surveys: []
  },
  { id: 14, first: "Théo", last: "Dumas", promotion: 2023, formation: "Master Data Science", country: "France", city: "Paris", status: "En poste", company: "Doctolib", jobTitle: "Data Scientist", sector: "Santé", email: "theo.dumas@doctolib.com", phone: "+33 6 88 77 66 55", completion: 100, lastUpdate: "2026-06-25",
    history: [{ date: "2023-10", title: "Data Scientist", company: "Doctolib" }], interactions: ["Réponse enquête 'Insertion 6 mois' — 25/06/2026"], surveys: ["Enquête insertion pro 6 mois (2023)"]
  },
  { id: 15, first: "Inès", last: "Kaddour", promotion: 2025, formation: "Master Finance", country: "France", city: "Paris", status: "Poursuite d'études", company: "", jobTitle: "Étudiante CFA", sector: "Éducation", email: "ines.kaddour@gmail.com", phone: "+33 6 90 12 34 56", completion: 60, lastUpdate: "2025-11-05",
    history: [], interactions: ["Profil créé automatiquement — 01/07/2025"], surveys: []
  },
  { id: 16, first: "Maxime", last: "Blanchard", promotion: 2022, formation: "Bachelor Commerce International", country: "France", city: "Marseille", status: "En poste", company: "CMA CGM", jobTitle: "Chargé d'affaires", sector: "Transport", email: "maxime.blanchard@cma-cgm.com", phone: "+33 6 77 88 99 00", completion: 95, lastUpdate: "2026-04-14",
    history: [{ date: "2022-09", title: "Chargé d'affaires", company: "CMA CGM" }], interactions: [], surveys: ["Enquête carrière 3 ans"]
  },
  { id: 17, first: "Clara", last: "Vidal", promotion: 2024, formation: "Master Marketing Digital", country: "Espagne", city: "Barcelone", status: "En poste", company: "Glovo", jobTitle: "Growth Marketer", sector: "Tech", email: "clara.vidal@glovoapp.com", phone: "+34 611 22 33 44", completion: 80, lastUpdate: "2026-03-19",
    history: [{ date: "2024-11", title: "Growth Marketer", company: "Glovo" }], interactions: [], surveys: ["Enquête insertion pro 6 mois (2024)"]
  },
  { id: 18, first: "Paul", last: "Garnier", promotion: 2021, formation: "Master Data Science", country: "France", city: "Paris", status: "En poste", company: "Dataiku", jobTitle: "Head of Data", sector: "Tech", email: "paul.garnier@dataiku.com", phone: "+33 6 55 44 33 22", completion: 100, lastUpdate: "2026-07-10",
    history: [
      { date: "2024-02", title: "Head of Data", company: "Dataiku" },
      { date: "2021-09", title: "Data Analyst", company: "Dataiku" }
    ], interactions: ["Réponse enquête 'Carrière 5 ans' — 10/07/2026"], surveys: ["Enquête carrière 5 ans"]
  },
  { id: 19, first: "Julie", last: "Perrin", promotion: 2025, formation: "Bachelor Commerce International", country: "France", city: "Rennes", status: "En recherche d'emploi", company: "", jobTitle: "", sector: "", email: "julie.perrin@gmail.com", phone: "+33 6 21 43 65 87", completion: 45, lastUpdate: "2025-10-12",
    history: [], interactions: ["Email d'invitation envoyé — 01/07/2025"], surveys: []
  },
  { id: 20, first: "Antoine", last: "Marchal", promotion: 2023, formation: "Master Finance", country: "Luxembourg", city: "Luxembourg", status: "En poste", company: "PwC Luxembourg", jobTitle: "Senior Auditor", sector: "Audit", email: "antoine.marchal@pwc.lu", phone: "+352 621 23 45 67", completion: 100, lastUpdate: "2026-05-02",
    history: [{ date: "2023-09", title: "Senior Auditor", company: "PwC Luxembourg" }], interactions: [], surveys: ["Enquête insertion pro 6 mois (2023)"]
  }
];

const SEED_QUESTIONNAIRES = [
  { id: "q1", name: "Enquête insertion professionnelle 6 mois", description: "Situation à 6 mois après le diplôme, standard pour le reporting accréditation.",
    questions: [
      { text: "Quelle est votre situation professionnelle actuelle ?", type: "choice" },
      { text: "Dans quel secteur d'activité travaillez-vous ?", type: "text" },
      { text: "Quel est votre niveau de satisfaction vis-à-vis de votre formation ?", type: "scale" }
    ] },
  { id: "q2", name: "Enquête carrière 3 ans", description: "Suivi d'évolution de carrière à 3 ans, avec focus mobilité et salaire.",
    questions: [
      { text: "Avez-vous changé d'entreprise depuis l'obtention du diplôme ?", type: "choice" },
      { text: "Quelles compétences complémentaires avez-vous développées ?", type: "multi" },
      { text: "Recommanderiez-vous votre formation ?", type: "scale" }
    ] },
  { id: "q3", name: "Enquête carrière 5 ans", description: "Bilan long terme : évolution managériale, entrepreneuriat, international.",
    questions: [
      { text: "Occupez-vous un poste à responsabilité managériale ?", type: "choice" },
      { text: "Avez-vous créé ou repris une entreprise ?", type: "choice" },
      { text: "Travaillez-vous à l'international ?", type: "choice" }
    ] }
];

const SEED_CAMPAIGNS = [
  { id: "c1", name: "Enquête insertion pro — Promo 2025", target: "Diplômés 2025 · toutes formations", questionnaireId: "q1", status: "Envoyée", sentDate: "2026-01-15", responseRate: 62, evolution: [ {label:"J+0", value: 18}, {label:"J+7 (relance)", value: 41}, {label:"J+14 (relance)", value: 62} ],
    employed: 38, seeking: 27, studying: 35, locations: [["France",58],["Europe",27],["International",15]], sectors: [["Tech",22],["Finance",18],["Marketing",20],["Autre",40]] },
  { id: "c2", name: "Enquête carrière 3 ans — Promo 2022/2023", target: "Diplômés 2022 & 2023", questionnaireId: "q2", status: "Terminée", sentDate: "2025-11-03", responseRate: 74, evolution: [ {label:"J+0", value: 30}, {label:"J+7 (relance)", value: 55}, {label:"J+14 (relance)", value: 74} ],
    employed: 91, seeking: 4, studying: 5, locations: [["France",64],["Europe",22],["International",14]], sectors: [["Banque",25],["Tech",20],["Conseil",18],["Autre",37]] },
  { id: "c3", name: "Enquête carrière 5 ans — Promo 2020/2021", target: "Diplômés 2020 & 2021", questionnaireId: "q3", status: "Terminée", sentDate: "2025-06-10", responseRate: 68, evolution: [ {label:"J+0", value: 22}, {label:"J+7 (relance)", value: 44}, {label:"J+14 (relance)", value: 68} ],
    employed: 95, seeking: 2, studying: 3, locations: [["France",50],["Europe",25],["International",25]], sectors: [["Finance",28],["Tech",24],["Industrie",16],["Autre",32]] },
  { id: "c4", name: "Enquête insertion pro — Promo 2024", target: "Diplômés 2024 · toutes formations", questionnaireId: "q1", status: "Programmée", sentDate: "2026-09-01", responseRate: 0, evolution: [], employed: null, seeking: null, studying: null, locations: [], sectors: [] }
];

const SEED_AUTOMATIONS = [
  { id: "a1", triggerLabel: "Étudiant passe au statut « Diplômé »", actionLabel: "Créer automatiquement le profil Alumni + envoyer l'email d'invitation", active: true, category: "onboarding" },
  { id: "a2", triggerLabel: "6 mois après la diplomation", actionLabel: "Envoyer l'enquête « Insertion professionnelle 6 mois »", active: true, category: "survey" },
  { id: "a3", triggerLabel: "Profil non mis à jour depuis 12 mois", actionLabel: "Envoyer un email de rappel de mise à jour du profil", active: true, category: "data" },
  { id: "a4", triggerLabel: "Enquête envoyée, aucune réponse à J+7", actionLabel: "Envoyer une relance automatique personnalisée", active: true, category: "survey" },
  { id: "a5", triggerLabel: "3 ans après la diplomation", actionLabel: "Envoyer l'enquête « Carrière 3 ans »", active: true, category: "survey" },
  { id: "a6", triggerLabel: "Alumni ouvre 3 emails sans jamais répondre", actionLabel: "Marquer le profil « à risque de désengagement » pour relance personnalisée", active: false, category: "engagement" }
];

/* ------------------------------------------------------------
   2. ÉTAT DE L'APPLICATION (avec persistance légère localStorage)
------------------------------------------------------------- */

const state = {
  role: null,
  currentScreen: "dashboard",
  selectedAlumniId: null,
  wizard: { step: 1, promotions: [], formations: [], countries: [], seniority: "all", questionnaireId: null, sendDate: "", channel: "Email", reminder7: true, reminder14: true, name: "" },
  qbQuestions: [],
  resultsCampaignId: null,
  portalUserId: 1, // Camille Durand joue le rôle "Alumni connecté"
  portalEditing: false
};

let alumni = loadOrSeed("alumnihub_alumni", SEED_ALUMNI);
let questionnaires = loadOrSeed("alumnihub_questionnaires", SEED_QUESTIONNAIRES);
let campaigns = loadOrSeed("alumnihub_campaigns", SEED_CAMPAIGNS);
let automations = loadOrSeed("alumnihub_automations", SEED_AUTOMATIONS);

function loadOrSeed(key, seed) {
  try {
    const raw = localStorage.getItem(key);
    if (raw) return JSON.parse(raw);
  } catch (e) { /* ignore */ }
  return JSON.parse(JSON.stringify(seed));
}
function persist() {
  localStorage.setItem("alumnihub_alumni", JSON.stringify(alumni));
  localStorage.setItem("alumnihub_questionnaires", JSON.stringify(questionnaires));
  localStorage.setItem("alumnihub_campaigns", JSON.stringify(campaigns));
  localStorage.setItem("alumnihub_automations", JSON.stringify(automations));
}

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.remove("hidden");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => t.classList.add("hidden"), 3200);
}

function avatarColor(id) {
  const colors = ["#2952e3", "#16a34a", "#d97706", "#dc2626", "#7c3aed", "#0891b2"];
  return colors[id % colors.length];
}
function initials(a) { return (a.first[0] + a.last[0]).toUpperCase(); }
function completionBadge(pct) {
  if (pct >= 90) return `<span class="badge complete">Complet (${pct}%)</span>`;
  if (pct >= 50) return `<span class="badge partial">Partiel (${pct}%)</span>`;
  return `<span class="badge empty">À compléter (${pct}%)</span>`;
}
function statusPillClass(status) {
  if (status === "En poste") return "employed";
  if (status === "En recherche d'emploi") return "seeking";
  if (status === "Poursuite d'études") return "studying";
  return "founder";
}

/* ------------------------------------------------------------
   3. NAVIGATION
------------------------------------------------------------- */

function selectRole(role) {
  state.role = role;
  document.getElementById("screen-role-select").classList.remove("active");
  document.getElementById("app").classList.remove("hidden");

  document.getElementById("nav-admin").classList.toggle("hidden", role !== "admin");
  document.getElementById("nav-career").classList.toggle("hidden", role !== "career");
  document.getElementById("nav-alumni").classList.toggle("hidden", role !== "alumni");

  const labels = { admin: "Responsable Alumni", career: "Responsable Carrière", alumni: "Alumni" };
  document.getElementById("current-role-badge").textContent = labels[role];

  const defaultScreen = role === "alumni" ? "alumni-portal" : "dashboard";
  goto(defaultScreen);
}

function backToRoleSelect() {
  document.getElementById("app").classList.add("hidden");
  document.getElementById("screen-role-select").classList.add("active");
}

function goto(screenId) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  const target = document.getElementById("screen-" + screenId);
  if (target) target.classList.add("active");
  state.currentScreen = screenId;

  document.querySelectorAll(".nav-item").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.screen === screenId);
  });

  if (screenId === "dashboard") renderDashboard();
  if (screenId === "alumni-list") renderAlumniList();
  if (screenId === "alumni-profile") renderAlumniProfile();
  if (screenId === "campaign-create") renderWizard();
  if (screenId === "questionnaires") renderQuestionnaires();
  if (screenId === "survey-results") renderSurveyResults();
  if (screenId === "automations") renderAutomations();
  if (screenId === "alumni-portal") renderPortal();

  window.scrollTo(0, 0);
}

function openProfile(id) {
  state.selectedAlumniId = id;
  goto("alumni-profile");
}

/* ------------------------------------------------------------
   4. ÉCRAN 1 — DASHBOARD
------------------------------------------------------------- */

function renderDashboard() {
  const total = alumni.length;
  const completed = alumni.filter(a => a.completion >= 90).length;
  const avgCompletion = Math.round(alumni.reduce((s, a) => s + a.completion, 0) / total);
  const sentCampaigns = campaigns.filter(c => c.responseRate > 0);
  const avgResponse = sentCampaigns.length ? Math.round(sentCampaigns.reduce((s, c) => s + c.responseRate, 0) / sentCampaigns.length) : 0;
  const employedPct = Math.round(campaigns.filter(c => c.employed !== null).reduce((s, c, _, arr) => s + c.employed / arr.length, 0));

  document.getElementById("kpi-total").textContent = total;
  document.getElementById("kpi-completed").textContent = avgCompletion + "%";
  document.getElementById("kpi-completed-bar").style.width = avgCompletion + "%";
  document.getElementById("kpi-response-rate").textContent = avgResponse + "%";
  document.getElementById("kpi-employment").textContent = (employedPct || 38) + "%";

  const tbody = document.querySelector("#dashboard-campaigns-table tbody");
  tbody.innerHTML = campaigns.slice(0, 4).map(c => `
    <tr>
      <td>${c.name}</td>
      <td>${c.target}</td>
      <td>${statusTag(c.status)}</td>
      <td>${c.responseRate ? c.responseRate + "%" : "—"}</td>
    </tr>`).join("");

  // Chart: répartition par complétion
  const buckets = { "Complet (≥90%)": 0, "Partiel (50-89%)": 0, "À compléter (<50%)": 0 };
  alumni.forEach(a => {
    if (a.completion >= 90) buckets["Complet (≥90%)"]++;
    else if (a.completion >= 50) buckets["Partiel (50-89%)"]++;
    else buckets["À compléter (<50%)"]++;
  });
  renderBarChart("chart-completion", Object.entries(buckets).map(([label, value]) => ({ label, value, max: total, cls: label.startsWith("Complet") ? "success" : label.startsWith("Partiel") ? "warning" : "" })));

  // Chart: situation professionnelle
  const statusBuckets = {};
  alumni.forEach(a => { statusBuckets[a.status] = (statusBuckets[a.status] || 0) + 1; });
  renderBarChart("chart-status", Object.entries(statusBuckets).map(([label, value]) => ({ label, value, max: total })));
}

function statusTag(status) {
  const map = { "Envoyée": "employed", "Programmée": "studying", "Terminée": "employed", "Brouillon": "seeking" };
  return `<span class="status-pill ${map[status] || 'studying'}">${status}</span>`;
}

function renderBarChart(containerId, rows) {
  const el = document.getElementById(containerId);
  el.innerHTML = rows.map(r => {
    const pct = r.max ? Math.round((r.value / r.max) * 100) : 0;
    return `<div class="bar-row">
      <span>${r.label}</span>
      <div class="bar-track"><div class="bar-fill ${r.cls || ''}" style="width:${pct}%"></div></div>
      <span>${r.value}</span>
    </div>`;
  }).join("");
}

/* ------------------------------------------------------------
   5. ÉCRAN 2 — BASE ALUMNI
------------------------------------------------------------- */

function populateSelect(id, values, placeholder) {
  const el = document.getElementById(id);
  const current = el.value;
  el.innerHTML = `<option value="">${placeholder}</option>` + values.map(v => `<option value="${v}">${v}</option>`).join("");
  el.value = current;
}

function initAlumniFilters() {
  const promotions = [...new Set(alumni.map(a => a.promotion))].sort();
  const formations = [...new Set(alumni.map(a => a.formation))].sort();
  const countries = [...new Set(alumni.map(a => a.country))].sort();
  const statuses = [...new Set(alumni.map(a => a.status))].sort();
  populateSelect("filter-promotion", promotions, "Toutes promotions");
  populateSelect("filter-formation", formations, "Toutes formations");
  populateSelect("filter-country", countries, "Tous pays");
  populateSelect("filter-status", statuses, "Toute situation");
}

function renderAlumniList() {
  initAlumniFilters();
  applyAlumniFilters();
}

function applyAlumniFilters() {
  const search = document.getElementById("alumni-search").value.toLowerCase();
  const promo = document.getElementById("filter-promotion").value;
  const formation = document.getElementById("filter-formation").value;
  const country = document.getElementById("filter-country").value;
  const status = document.getElementById("filter-status").value;

  const filtered = alumni.filter(a => {
    const matchSearch = !search || `${a.first} ${a.last} ${a.company} ${a.jobTitle}`.toLowerCase().includes(search);
    const matchPromo = !promo || String(a.promotion) === promo;
    const matchFormation = !formation || a.formation === formation;
    const matchCountry = !country || a.country === country;
    const matchStatus = !status || a.status === status;
    return matchSearch && matchPromo && matchFormation && matchCountry && matchStatus;
  });

  document.getElementById("alumni-count-label").textContent = `${filtered.length} / ${alumni.length}`;
  const tbody = document.getElementById("alumni-table-body");
  document.getElementById("alumni-empty-state").classList.toggle("hidden", filtered.length > 0);

  tbody.innerHTML = filtered.map(a => `
    <tr data-id="${a.id}" class="alumni-row">
      <td>
        <div class="name-cell">
          <div class="avatar" style="background:${avatarColor(a.id)}">${initials(a)}</div>
          <div>
            <strong>${a.first} ${a.last}</strong>
            <span class="sub">${a.jobTitle || "—"}${a.company ? " · " + a.company : ""}</span>
          </div>
        </div>
      </td>
      <td>${a.promotion} · ${a.formation}</td>
      <td>${a.city}, ${a.country}</td>
      <td><span class="status-pill ${statusPillClass(a.status)}">${a.status}</span></td>
      <td>${completionBadge(a.completion)}</td>
      <td>${formatDate(a.lastUpdate)}</td>
      <td><button class="link-btn" data-open="${a.id}">Voir →</button></td>
    </tr>`).join("");

  tbody.querySelectorAll("tr.alumni-row").forEach(row => {
    row.addEventListener("click", () => openProfile(Number(row.dataset.id)));
  });
}

function formatDate(iso) {
  if (!iso) return "—";
  const d = new Date(iso);
  return d.toLocaleDateString("fr-FR", { day: "2-digit", month: "short", year: "numeric" });
}

/* ------------------------------------------------------------
   6. ÉCRAN 3 — PROFIL ALUMNI (établissement)
------------------------------------------------------------- */

function renderAlumniProfile() {
  const a = alumni.find(x => x.id === state.selectedAlumniId);
  if (!a) { goto("alumni-list"); return; }

  document.getElementById("profile-name").textContent = `${a.first} ${a.last}`;
  document.getElementById("profile-subtitle").textContent = `${a.formation} · Promotion ${a.promotion} · ${a.city}, ${a.country}`;

  document.getElementById("profile-personal").innerHTML = `
    <dt>Email</dt><dd>${a.email}</dd>
    <dt>Téléphone</dt><dd>${a.phone}</dd>
    <dt>Localisation</dt><dd>${a.city}, ${a.country}</dd>
    <dt>Dernière mise à jour</dt><dd>${formatDate(a.lastUpdate)}</dd>`;

  document.getElementById("profile-formation").innerHTML = `
    <dt>Formation</dt><dd>${a.formation}</dd>
    <dt>Promotion</dt><dd>${a.promotion}</dd>`;

  document.getElementById("profile-job").innerHTML = `
    <dt>Situation</dt><dd><span class="status-pill ${statusPillClass(a.status)}">${a.status}</span></dd>
    <dt>Entreprise</dt><dd>${a.company || "—"}</dd>
    <dt>Poste</dt><dd>${a.jobTitle || "—"}</dd>
    <dt>Secteur</dt><dd>${a.sector || "—"}</dd>`;
  document.getElementById("profile-completion-badge").outerHTML = completionBadge(a.completion).replace("<span", `<span id="profile-completion-badge"`);

  document.getElementById("profile-history").innerHTML = a.history.length
    ? a.history.map(h => `<li><div class="t-date">${h.date}</div><div class="t-title">${h.title}</div><div class="t-sub">${h.company}</div></li>`).join("")
    : `<li><div class="t-sub">Aucun historique enregistré — profil récemment créé.</div></li>`;

  document.getElementById("profile-interactions").innerHTML = a.interactions.length
    ? a.interactions.map(i => `<li>${i}</li>`).join("")
    : `<li>Aucune interaction enregistrée.</li>`;

  document.getElementById("profile-surveys").innerHTML = a.surveys.length
    ? a.surveys.map(s => `<li>${s} <span class="badge complete">Répondu</span></li>`).join("")
    : `<li>Aucune enquête répondue pour le moment.</li>`;
}

/* ------------------------------------------------------------
   7. ÉCRAN 4 — WIZARD CRÉATION DE CAMPAGNE
------------------------------------------------------------- */

function initWizardOptions() {
  const promotions = [...new Set(alumni.map(a => a.promotion))].sort();
  const formations = [...new Set(alumni.map(a => a.formation))].sort();
  const countries = [...new Set(alumni.map(a => a.country))].sort();
  fillMultiSelect("wiz-promotion", promotions);
  fillMultiSelect("wiz-formation", formations);
  fillMultiSelect("wiz-country", countries);
}
function fillMultiSelect(id, values) {
  document.getElementById(id).innerHTML = values.map(v => `<option value="${v}">${v}</option>`).join("");
}

function computeWizardAudience() {
  const w = state.wizard;
  return alumni.filter(a => {
    if (w.promotions.length && !w.promotions.includes(String(a.promotion))) return false;
    if (w.formations.length && !w.formations.includes(a.formation)) return false;
    if (w.countries.length && !w.countries.includes(a.country)) return false;
    if (w.seniority !== "all") {
      const years = 2026 - a.promotion;
      if (w.seniority === "6m" && years > 1) return false;
      if (w.seniority === "1y" && years > 2) return false;
      if (w.seniority === "3y" && years < 3) return false;
    }
    return true;
  });
}

function readWizardAudienceInputs() {
  const w = state.wizard;
  w.promotions = Array.from(document.getElementById("wiz-promotion").selectedOptions).map(o => o.value);
  w.formations = Array.from(document.getElementById("wiz-formation").selectedOptions).map(o => o.value);
  w.countries = Array.from(document.getElementById("wiz-country").selectedOptions).map(o => o.value);
  w.seniority = document.getElementById("wiz-seniority").value;
  document.getElementById("wiz-audience-count").textContent = computeWizardAudience().length;
}

function renderWizard() {
  initWizardOptions();
  state.wizard = { step: 1, promotions: [], formations: [], countries: [], seniority: "all", questionnaireId: null, sendDate: "", channel: "Email", reminder7: true, reminder14: true, name: "" };
  document.getElementById("wiz-audience-count").textContent = alumni.length;
  document.getElementById("wiz-send-date").value = "";
  document.getElementById("wiz-campaign-name").value = "";
  renderQuestionnairePicker();
  setWizardStep(1);
}

function renderQuestionnairePicker() {
  const el = document.getElementById("wiz-questionnaire-picker");
  el.innerHTML = questionnaires.map(q => `
    <div class="q-pick-card" data-id="${q.id}">
      <h4>${q.name}</h4>
      <p>${q.description || (q.questions.length + " questions")}</p>
    </div>`).join("");
  el.querySelectorAll(".q-pick-card").forEach(card => {
    card.addEventListener("click", () => {
      el.querySelectorAll(".q-pick-card").forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");
      state.wizard.questionnaireId = card.dataset.id;
    });
  });
}

function setWizardStep(n) {
  state.wizard.step = n;
  document.querySelectorAll(".wizard-step").forEach(s => {
    const step = Number(s.dataset.step);
    s.classList.toggle("active", step === n);
    s.classList.toggle("done", step < n);
  });
  document.querySelectorAll(".wizard-pane").forEach(p => p.classList.toggle("active", Number(p.dataset.pane) === n));
  document.getElementById("wiz-prev").classList.toggle("hidden", n === 1);
  document.getElementById("wiz-next").classList.toggle("hidden", n === 4);
  document.getElementById("wiz-launch").classList.toggle("hidden", n !== 4);
  if (n === 4) renderWizardSummary();
}

function renderWizardSummary() {
  const w = state.wizard;
  const audience = computeWizardAudience();
  const q = questionnaires.find(q => q.id === w.questionnaireId);
  document.getElementById("wiz-summary").innerHTML = `
    <dt>Audience ciblée</dt><dd>${audience.length} Alumni</dd>
    <dt>Critères</dt><dd>${w.promotions.length ? "Promotions " + w.promotions.join(", ") : "Toutes promotions"}${w.seniority !== "all" ? " · " + { "6m": "Diplômés depuis 6 mois", "1y": "depuis 1 an", "3y": "depuis 3 ans" }[w.seniority] : ""}</dd>
    <dt>Questionnaire</dt><dd>${q ? q.name : "⚠️ Aucun questionnaire sélectionné"}</dd>
    <dt>Date d'envoi</dt><dd>${document.getElementById("wiz-send-date").value || "Non définie"}</dd>
    <dt>Relances</dt><dd>${w.reminder7 ? "J+7 " : ""}${w.reminder14 ? "J+14" : ""}${!w.reminder7 && !w.reminder14 ? "Aucune" : ""}</dd>`;
}

function launchCampaign() {
  const w = state.wizard;
  const q = questionnaires.find(q => q.id === w.questionnaireId);
  if (!q) { showToast("⚠️ Sélectionnez un questionnaire avant de lancer."); setWizardStep(2); return; }
  const name = document.getElementById("wiz-campaign-name").value.trim() || `${q.name} — ${new Date().toLocaleDateString("fr-FR")}`;
  const audience = computeWizardAudience();
  const newCampaign = {
    id: "c" + (campaigns.length + 1) + "_" + Date.now(),
    name, target: `${audience.length} Alumni ciblés`,
    questionnaireId: q.id, status: "Programmée",
    sentDate: document.getElementById("wiz-send-date").value || "Date à définir",
    responseRate: 0, evolution: [], employed: null, seeking: null, studying: null, locations: [], sectors: []
  };
  campaigns.unshift(newCampaign);
  persist();
  showToast(`✅ Campagne « ${name} » créée et programmée pour ${audience.length} Alumni.`);
  goto("survey-results");
}

/* ------------------------------------------------------------
   8. ÉCRAN 5 — QUESTIONNAIRES
------------------------------------------------------------- */

function renderQuestionnaires() {
  const el = document.getElementById("questionnaire-library");
  el.innerHTML = questionnaires.map(q => `
    <div class="questionnaire-card">
      <h4>${q.name}</h4>
      <p>${q.description || ""}</p>
      <span class="q-count">${q.questions.length} question${q.questions.length > 1 ? "s" : ""}</span>
    </div>`).join("");
  renderQbQuestions();
}

function renderQbQuestions() {
  const el = document.getElementById("qb-questions");
  if (!state.qbQuestions.length) {
    el.innerHTML = `<p class="pane-hint">Aucune question ajoutée pour l'instant.</p>`;
    return;
  }
  el.innerHTML = state.qbQuestions.map((q, i) => `
    <div class="qb-question-item">
      <span>${i + 1}. ${q.text}</span>
      <span class="q-type-tag">${typeLabel(q.type)}</span>
      <button class="qb-remove" data-idx="${i}">✕</button>
    </div>`).join("");
  el.querySelectorAll(".qb-remove").forEach(btn => {
    btn.addEventListener("click", () => {
      state.qbQuestions.splice(Number(btn.dataset.idx), 1);
      renderQbQuestions();
    });
  });
}
function typeLabel(type) {
  return { text: "Réponse libre", choice: "Choix unique", multi: "Choix multiple", scale: "Échelle 1-5" }[type] || type;
}

/* ------------------------------------------------------------
   9. ÉCRAN 6 — RÉSULTATS D'ENQUÊTE
------------------------------------------------------------- */

function renderSurveyResults() {
  const select = document.getElementById("results-campaign-select");
  select.innerHTML = campaigns.map(c => `<option value="${c.id}">${c.name}</option>`).join("");
  if (!state.resultsCampaignId || !campaigns.find(c => c.id === state.resultsCampaignId)) {
    state.resultsCampaignId = campaigns.find(c => c.responseRate > 0)?.id || campaigns[0].id;
  }
  select.value = state.resultsCampaignId;
  renderCampaignResults(state.resultsCampaignId);
}

function renderCampaignResults(id) {
  const c = campaigns.find(x => x.id === id);
  if (!c) return;
  const hasData = c.responseRate > 0;

  document.getElementById("res-response-rate").textContent = hasData ? c.responseRate + "%" : "—";
  document.getElementById("res-employed").textContent = hasData ? c.employed + "%" : "—";
  document.getElementById("res-seeking").textContent = hasData ? c.seeking + "%" : "—";
  document.getElementById("res-studying").textContent = hasData ? c.studying + "%" : "—";

  if (!hasData) {
    document.getElementById("chart-response-evolution").innerHTML = `<p class="pane-hint">Campagne « ${c.status} » — aucun résultat disponible pour l'instant.</p>`;
    document.getElementById("chart-location").innerHTML = "";
    document.getElementById("chart-sector").innerHTML = "";
    return;
  }

  renderBarChart("chart-response-evolution", c.evolution.map(e => ({ label: e.label, value: e.value, max: 100, cls: "success" })));
  document.getElementById("chart-location").innerHTML = c.locations.map(([label, val]) => `<li>${label} <span class="val">${val}%</span></li>`).join("");
  document.getElementById("chart-sector").innerHTML = c.sectors.map(([label, val]) => `<li>${label} <span class="val">${val}%</span></li>`).join("");
}

function exportReportCSV() {
  const c = campaigns.find(x => x.id === state.resultsCampaignId);
  if (!c || c.responseRate === 0) { showToast("⚠️ Aucune donnée à exporter pour cette campagne."); return; }
  let csv = "Indicateur,Valeur\n";
  csv += `Campagne,${c.name}\n`;
  csv += `Taux de réponse,${c.responseRate}%\n`;
  csv += `En poste,${c.employed}%\n`;
  csv += `En recherche,${c.seeking}%\n`;
  csv += `Poursuite d'études,${c.studying}%\n`;
  c.locations.forEach(([l, v]) => csv += `Localisation - ${l},${v}%\n`);
  c.sectors.forEach(([s, v]) => csv += `Secteur - ${s},${v}%\n`);

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = `rapport_${c.id}.csv`; a.click();
  URL.revokeObjectURL(url);
  showToast("⬇ Export CSV généré.");
}

/* ------------------------------------------------------------
   10. ÉCRAN 8 — AUTOMATISATIONS
------------------------------------------------------------- */

function renderAutomations() {
  const el = document.getElementById("automation-list");
  el.innerHTML = automations.map(r => `
    <div class="automation-card">
      <div class="automation-rule">
        <div class="rule-block"><span class="rule-tag">Quand</span>${r.triggerLabel}</div>
        <span class="rule-arrow">→</span>
        <div class="rule-block"><span class="rule-tag">Alors</span>${r.actionLabel}</div>
      </div>
      <button class="toggle-switch ${r.active ? 'on' : ''}" data-id="${r.id}" title="${r.active ? 'Règle active' : 'Règle désactivée'}"></button>
    </div>`).join("");

  el.querySelectorAll(".toggle-switch").forEach(btn => {
    btn.addEventListener("click", () => {
      const rule = automations.find(r => r.id === btn.dataset.id);
      rule.active = !rule.active;
      persist();
      renderAutomations();
      showToast(`Règle ${rule.active ? "activée" : "désactivée"} : ${rule.triggerLabel}`);
    });
  });

  const simSelect = document.getElementById("sim-trigger");
  simSelect.innerHTML = automations.map(r => `<option value="${r.id}">${r.triggerLabel}</option>`).join("");
}

function runSimulation() {
  const id = document.getElementById("sim-trigger").value;
  const rule = automations.find(r => r.id === id);
  const log = document.getElementById("simulation-log");
  const entry = document.createElement("div");
  entry.className = "sim-entry";
  if (!rule.active) {
    entry.textContent = `⏸ Règle désactivée — aucune action déclenchée pour « ${rule.triggerLabel} ».`;
  } else {
    entry.textContent = `✅ Déclencheur « ${rule.triggerLabel} » détecté → Action exécutée : ${rule.actionLabel}`;
  }
  log.prepend(entry);
}

/* ------------------------------------------------------------
   11. ÉCRAN 7 — PORTAIL ALUMNI
------------------------------------------------------------- */

function currentPortalUser() { return alumni.find(a => a.id === state.portalUserId); }

function renderPortal() {
  const a = currentPortalUser();
  state.portalEditing = false;
  document.getElementById("portal-firstname").textContent = a.first;
  document.getElementById("portal-completion-badge").outerHTML = completionBadge(a.completion).replace("<span", `<span id="portal-completion-badge"`);
  document.getElementById("portal-profile-view").innerHTML = `
    <dt>Formation</dt><dd>${a.formation} · Promotion ${a.promotion}</dd>
    <dt>Situation</dt><dd><span class="status-pill ${statusPillClass(a.status)}">${a.status}</span></dd>
    <dt>Entreprise</dt><dd>${a.company || "—"}</dd>
    <dt>Poste</dt><dd>${a.jobTitle || "—"}</dd>
    <dt>Secteur</dt><dd>${a.sector || "—"}</dd>
    <dt>Localisation</dt><dd>${a.city}, ${a.country}</dd>`;

  document.getElementById("portal-edit-panel").classList.add("hidden");

  const available = campaigns.filter(c => (c.status === "Envoyée" || c.status === "Programmée") && !a.surveys.some(s => s.includes(c.name.split(" — ")[0].replace("Enquête ", ""))));
  document.getElementById("portal-surveys-available").innerHTML = available.length
    ? available.map(c => `<li>${c.name} <button class="link-btn" data-answer="${c.id}">Répondre</button></li>`).join("")
    : `<li>Aucune enquête en attente. Merci pour votre engagement 🎉</li>`;

  document.getElementById("portal-surveys-history").innerHTML = a.surveys.length
    ? a.surveys.map(s => `<li>${s} <span class="badge complete">Répondu</span></li>`).join("")
    : `<li>Aucune réponse enregistrée pour le moment.</li>`;

  document.querySelectorAll("[data-answer]").forEach(btn => {
    btn.addEventListener("click", () => {
      const c = campaigns.find(x => x.id === btn.dataset.answer);
      a.surveys.push(c.name);
      a.interactions.unshift(`Réponse enquête « ${c.name} » — ${new Date().toLocaleDateString("fr-FR")}`);
      persist();
      showToast("✅ Merci ! Votre réponse a été enregistrée.");
      renderPortal();
    });
  });
}

function openPortalEdit() {
  const a = currentPortalUser();
  document.getElementById("edit-status").value = a.status;
  document.getElementById("edit-company").value = a.company;
  document.getElementById("edit-jobtitle").value = a.jobTitle;
  document.getElementById("edit-sector").value = a.sector;
  document.getElementById("edit-city").value = a.city;
  document.getElementById("edit-country").value = a.country;
  document.getElementById("portal-edit-panel").classList.remove("hidden");
}

function validatePortalEdit() {
  const a = currentPortalUser();
  a.status = document.getElementById("edit-status").value;
  a.company = document.getElementById("edit-company").value.trim();
  a.jobTitle = document.getElementById("edit-jobtitle").value.trim();
  a.sector = document.getElementById("edit-sector").value.trim();
  a.city = document.getElementById("edit-city").value.trim();
  a.country = document.getElementById("edit-country").value.trim();
  a.lastUpdate = new Date().toISOString().slice(0, 10);

  // Recalcul simple du score de complétion (règle métier visible)
  const fields = [a.status, a.company, a.jobTitle, a.sector, a.city, a.country, a.email, a.phone];
  a.completion = Math.round((fields.filter(Boolean).length / fields.length) * 100);
  a.interactions.unshift(`Mise à jour profil — ${formatDate(a.lastUpdate)}`);

  persist();
  showToast("✅ Vos informations ont été mises à jour.");
  renderPortal();
}

/* ------------------------------------------------------------
   12. INITIALISATION & ÉCOUTEURS D'ÉVÉNEMENTS
------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {

  // Sélection de rôle
  document.querySelectorAll(".role-card").forEach(card => {
    card.addEventListener("click", () => selectRole(card.dataset.role));
  });
  document.getElementById("btn-switch-role").addEventListener("click", backToRoleSelect);

  // Modale hypothèses
  document.getElementById("btn-show-assumptions").addEventListener("click", () => document.getElementById("modal-assumptions").classList.remove("hidden"));
  document.querySelectorAll("[data-close-modal]").forEach(b => b.addEventListener("click", () => document.getElementById("modal-assumptions").classList.add("hidden")));

  // Navigation sidebar + data-goto
  document.querySelectorAll(".nav-item").forEach(btn => btn.addEventListener("click", () => goto(btn.dataset.screen)));
  document.body.addEventListener("click", (e) => {
    const gotoBtn = e.target.closest("[data-goto]");
    if (gotoBtn) goto(gotoBtn.dataset.goto);
  });

  // Base Alumni : filtres
  ["alumni-search", "filter-promotion", "filter-formation", "filter-country", "filter-status"].forEach(id => {
    document.getElementById(id).addEventListener("input", applyAlumniFilters);
    document.getElementById(id).addEventListener("change", applyAlumniFilters);
  });
  document.getElementById("btn-reset-filters").addEventListener("click", () => {
    document.getElementById("alumni-search").value = "";
    ["filter-promotion", "filter-formation", "filter-country", "filter-status"].forEach(id => document.getElementById(id).value = "");
    applyAlumniFilters();
  });

  // Wizard
  ["wiz-promotion", "wiz-formation", "wiz-country", "wiz-seniority"].forEach(id => {
    document.getElementById(id).addEventListener("change", readWizardAudienceInputs);
  });
  document.getElementById("wiz-next").addEventListener("click", () => {
    const s = state.wizard.step;
    if (s === 2 && !state.wizard.questionnaireId) { showToast("⚠️ Sélectionnez un questionnaire pour continuer."); return; }
    if (s < 4) setWizardStep(s + 1);
  });
  document.getElementById("wiz-prev").addEventListener("click", () => { if (state.wizard.step > 1) setWizardStep(state.wizard.step - 1); });
  document.getElementById("wiz-launch").addEventListener("click", launchCampaign);
  document.getElementById("wiz-reminder-7") && document.getElementById("wiz-reminder-7").addEventListener("change", e => state.wizard.reminder7 = e.target.checked);
  document.getElementById("wiz-reminder-14") && document.getElementById("wiz-reminder-14").addEventListener("change", e => state.wizard.reminder14 = e.target.checked);

  // Questionnaires — constructeur
  document.getElementById("btn-add-question").addEventListener("click", () => {
    const text = document.getElementById("qb-new-question").value.trim();
    const type = document.getElementById("qb-new-type").value;
    if (!text) { showToast("⚠️ Saisissez un intitulé de question."); return; }
    state.qbQuestions.push({ text, type });
    document.getElementById("qb-new-question").value = "";
    renderQbQuestions();
  });
  document.getElementById("btn-save-questionnaire").addEventListener("click", () => {
    const name = document.getElementById("qb-name").value.trim();
    if (!name) { showToast("⚠️ Donnez un nom au questionnaire."); return; }
    if (!state.qbQuestions.length) { showToast("⚠️ Ajoutez au moins une question."); return; }
    questionnaires.push({ id: "q" + (questionnaires.length + 1) + "_" + Date.now(), name, description: state.qbQuestions.length + " questions personnalisées", questions: [...state.qbQuestions] });
    state.qbQuestions = [];
    document.getElementById("qb-name").value = "";
    persist();
    showToast("✅ Questionnaire enregistré dans la bibliothèque.");
    renderQuestionnaires();
  });
  document.getElementById("btn-new-questionnaire").addEventListener("click", () => {
    document.getElementById("questionnaire-builder").scrollIntoView({ behavior: "smooth" });
  });

  // Résultats d'enquête
  document.getElementById("results-campaign-select").addEventListener("change", (e) => {
    state.resultsCampaignId = e.target.value;
    renderCampaignResults(e.target.value);
  });
  document.getElementById("btn-export-report").addEventListener("click", exportReportCSV);

  // Automatisations
  document.getElementById("btn-run-simulation").addEventListener("click", runSimulation);
  document.getElementById("btn-new-rule").addEventListener("click", () => {
    automations.unshift({ id: "a" + Date.now(), triggerLabel: "Nouveau déclencheur personnalisé", actionLabel: "Nouvelle action à définir", active: false, category: "custom" });
    persist();
    renderAutomations();
    showToast("Nouvelle règle ajoutée — configurez-la selon vos besoins.");
  });

  // Portail Alumni
  document.getElementById("btn-edit-profile").addEventListener("click", openPortalEdit);
  document.getElementById("btn-cancel-edit").addEventListener("click", () => document.getElementById("portal-edit-panel").classList.add("hidden"));
  document.getElementById("btn-validate-edit").addEventListener("click", validatePortalEdit);
});
