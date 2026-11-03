const cases = [
  {
    "key": "BA-01",
    "kind": "ba",
    "title_fr": "Faire émerger les priorités du terrain",
    "category_fr": "Facilitation & co-conception",
    "client_display": "Programme d’agriculture durable · Long An, Vietnam",
    "problem_fr": "Comment partir des difficultés des riziculteurs pour construire des solutions adaptées ?",
    "intervention_fr": "Un parcours de culture, des cartes de difficultés et un atelier de priorisation et d’idéation en groupe.",
    "outcome_fr": "Des supports et une méthode de travail ancrés dans les usages. Les impacts agronomiques restent ceux du programme, sans résultat chiffré attribué à l’atelier.",
    "attribution_fr": "Mission Ben & Archie",
    "source_stage": "Mission réalisée en 2025. Les résultats agronomiques du programme ne sont pas attribués à cet atelier."
  },
  {
    "key": "BA-02",
    "kind": "ba",
    "title_fr": "Relier les opérations, les équipes et les décisions",
    "category_fr": "Systèmes opérationnels",
    "client_display": "Un groupe immobilier · client anonymisé",
    "problem_fr": "Comment piloter des biens, opérations, documents et échéances sans disperser l’information ?",
    "intervention_fr": "Architecture Notion, processus d’achat et de vente, vues de travail et documentation utilisateur.",
    "outcome_fr": "Un socle opérationnel documenté et une livraison par phases. Les gains de temps et d’adoption restent à mesurer.",
    "attribution_fr": "Mission Ben & Archie",
    "source_stage": "Un travail livré par phases, avec un socle opérationnel et sa documentation. Les gains de temps et d’adoption restent à mesurer."
  },
  {
    "key": "BA-03",
    "kind": "ba",
    "title_fr": "Préparer le passage de la recherche à l’entreprise",
    "category_fr": "Coaching & venture development",
    "client_display": "Projet scientifique · accompagnement anonymisé",
    "problem_fr": "Comment transformer un projet scientifique en une trajectoire entrepreneuriale cohérente ?",
    "intervention_fr": "Priorisation produit, modèle économique, positionnement et travaux de marque.",
    "outcome_fr": "Une feuille de route commerciale et un positionnement décrits dans le rapport de mission. Validation scientifique et droits de commercialisation restent distincts.",
    "attribution_fr": "Mission Ben & Archie",
    "source_stage": "Mission historique d’accompagnement entrepreneurial. Le travail de positionnement reste distinct de la validation scientifique et des droits de commercialisation."
  },
  {
    "key": "SL-01",
    "kind": "schoolab",
    "title_fr": "Rendre les réclamations B2B exploitables",
    "category_fr": "Recherche utilisateur & service design",
    "client_display": "Un des leaders des produits de grande consommation et de l’alimentation pour animaux de compagnie · expérience Schoolab",
    "problem_fr": "Des réclamations incomplètes et un manque de visibilité compliquent le travail des clients et des équipes.",
    "intervention_fr": "Observation terrain, entretiens, prototypes et tests d’un espace client avec un formulaire conditionnel.",
    "outcome_fr": "Une expérience de réclamation plus structurée. L’adoption décrite au portfolio est un résultat historique rapporté, pas une mesure actuelle.",
    "attribution_fr": "Expérience d’Arthur chez Schoolab",
    "source_stage": "Cas Schoolab historique : recherche, prototypes et tests. Les résultats décrits ne sont pas des mesures actuelles."
  },
  {
    "key": "SL-02",
    "kind": "schoolab",
    "title_fr": "Tester un choix avant de déployer une innovation",
    "category_fr": "Recherche & validation de concept",
    "client_display": "Un leader mondial de la construction de trains · expérience Schoolab",
    "problem_fr": "Quelle valeur les voyageurs accordent-ils à une innovation avant son déploiement ?",
    "intervention_fr": "Recherche internationale et parcours de réservation simulé, prototypé avec Figma et instrumenté avec Maze.",
    "outcome_fr": "Des choix observés dans un prototype pour éclairer une décision. Ils ne constituent ni une conversion commerciale, ni une validation sanitaire.",
    "attribution_fr": "Expérience d’Arthur chez Schoolab",
    "source_stage": "Un test de désirabilité sur prototype. Les choix observés ne sont ni des achats réels ni une validation de l’efficacité du dispositif."
  },
  {
    "key": "SL-04",
    "kind": "schoolab",
    "title_fr": "Structurer un parcours d’internationalisation",
    "category_fr": "Programmes & accompagnement",
    "client_display": "PASS Madagascar · expérience Schoolab",
    "problem_fr": "Comment aider des entrepreneurs à confronter leur offre au marché et préparer leur développement international ?",
    "intervention_fr": "Contribution au cursus et aux bootcamps, animation de modules de présence en ligne, prospection, pitch et organisation.",
    "outcome_fr": "Une contribution documentée par le programme de 2022. Les résultats globaux de PASS restent ceux d’une équipe et d’un programme collectif.",
    "attribution_fr": "Expérience d’Arthur chez Schoolab",
    "source_stage": "Sessions d’internationalisation en janvier et février 2022. Les résultats globaux du programme sont collectifs."
  }
];
const escapeHTML = s => s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const art = [
'<div class="case-visual field" aria-hidden="true"><i class="field-row"></i><i class="field-row"></i><i class="field-row"></i><i class="sun"></i><span class="vis-caption">LE TERRAIN COMME POINT DE DÉPART</span></div>',
'<div class="case-visual systems" aria-hidden="true"><span class="sys-block">INFORMATIONS</span><span class="sys-block">ÉQUIPES</span><span class="sys-block">DÉCISIONS</span><span class="vis-caption">RELIER POUR MIEUX TRAVAILLER</span></div>',
'<div class="case-visual venture" aria-hidden="true"><i class="step-shape"></i><i class="step-shape"></i><i class="step-shape"></i><span class="vis-caption">CONSTRUIRE LA PROCHAINE ÉTAPE</span></div>'
];
document.querySelector('#ba-cases').innerHTML=cases.filter(c=>c.kind==='ba').map((c,i)=>`<article>${art[i]}<p class="case-tag">${escapeHTML(c.category_fr.toUpperCase())}</p><h3>${escapeHTML(c.title_fr)}</h3><p class="case-context">${escapeHTML(c.client_display)}</p><button class="read-case" data-case="${c.key}" aria-label="Lire le cas : ${escapeHTML(c.title_fr)}">Explorer la mission <span aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg></span></button></article>`).join('');
document.querySelector('#schoolab-cases').innerHTML=cases.filter(c=>c.kind==='schoolab').map(c=>`<article class="schoolab-row"><div class="schoolab-client">${escapeHTML(c.client_display.split(' · ')[0])}<span>Chez Schoolab</span></div><h3>${escapeHTML(c.title_fr)}</h3><p>${escapeHTML(c.intervention_fr)}</p><button class="read-case" data-case="${c.key}" aria-label="Lire le cas : ${escapeHTML(c.client_display)}"><span aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg></span></button></article>`).join('');
const dialog=document.querySelector('#case-dialog');let trigger;
document.addEventListener('click',e=>{const b=e.target.closest('[data-case]');if(!b)return;const c=cases.find(x=>x.key===b.dataset.case);trigger=b;document.querySelector('#case-detail').innerHTML=`<p class="detail-context">${escapeHTML(c.attribution_fr)} · ${escapeHTML(c.category_fr)}</p><h2 id="case-title">${escapeHTML(c.title_fr)}</h2><p>${escapeHTML(c.client_display)}</p><h3>La question</h3><p>${escapeHTML(c.problem_fr)}</p><h3>L’intervention</h3><p>${escapeHTML(c.intervention_fr)}</p><h3>Ce que le travail a apporté</h3><p>${escapeHTML(c.outcome_fr)}</p><p class="detail-limit">${escapeHTML(c.source_stage)}</p>`;dialog.showModal();document.body.classList.add('dialog-open');});
document.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');trigger?.focus();});
dialog.addEventListener('click',e=>{const r=dialog.getBoundingClientRect();if(e.target===dialog&&(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom))dialog.close();});
