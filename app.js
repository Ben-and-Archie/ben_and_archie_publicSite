const { cases, ui } = window.BA_COPY[document.documentElement.lang] || window.BA_COPY.fr;
const escapeHTML = s => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const arrow = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg>';
const art = [
  `<div class="case-visual field" aria-hidden="true"><i class="field-row"></i><i class="field-row"></i><i class="field-row"></i><i class="sun"></i><span class="vis-caption">${escapeHTML(ui.fieldCaption)}</span></div>`,
  `<div class="case-visual systems" aria-hidden="true"><span class="sys-block">${escapeHTML(ui.information)}</span><span class="sys-block">${escapeHTML(ui.teams)}</span><span class="sys-block">${escapeHTML(ui.decisions)}</span><span class="vis-caption">${escapeHTML(ui.systemsCaption)}</span></div>`,
  `<div class="case-visual venture" aria-hidden="true"><i class="step-shape"></i><i class="step-shape"></i><i class="step-shape"></i><span class="vis-caption">${escapeHTML(ui.ventureCaption)}</span></div>`
];

document.querySelector('#ba-cases').innerHTML = cases.filter(c => c.kind === 'ba').map((c, i) => `
  <article>${art[i]}<p class="case-tag">${escapeHTML(c.category.toUpperCase())}</p>
    <h3>${escapeHTML(c.title)}</h3><p class="case-context">${escapeHTML(c.client)}</p>
    <button class="read-case" data-case="${c.key}" aria-label="${escapeHTML(ui.read)} ${escapeHTML(c.title)}">
      ${escapeHTML(ui.explore)} <span aria-hidden="true">${arrow}</span>
    </button>
  </article>`).join('');

document.querySelector('#schoolab-cases').innerHTML = cases.filter(c => c.kind === 'schoolab').map(c => `
  <article class="schoolab-row">
    <div class="schoolab-client">${escapeHTML(c.client.split(' · ')[0])}<span>${escapeHTML(ui.atSchoolab)}</span></div>
    <h3>${escapeHTML(c.title)}</h3><p>${escapeHTML(c.intervention)}</p>
    <button class="read-case" data-case="${c.key}" aria-label="${escapeHTML(ui.read)} ${escapeHTML(c.client)}"><span aria-hidden="true">${arrow}</span></button>
  </article>`).join('');

const dialog = document.querySelector('#case-dialog');
let trigger;
document.addEventListener('click', event => {
  const button = event.target.closest('[data-case]');
  if (!button) return;
  const item = cases.find(c => c.key === button.dataset.case);
  trigger = button;
  document.querySelector('#case-detail').innerHTML = `
    <p class="detail-context">${escapeHTML(item.attribution)} · ${escapeHTML(item.category)}</p>
    <h2 id="case-title">${escapeHTML(item.title)}</h2><p>${escapeHTML(item.client)}</p>
    <h3>${escapeHTML(ui.question)}</h3><p>${escapeHTML(item.problem)}</p>
    <h3>${escapeHTML(ui.intervention)}</h3><p>${escapeHTML(item.intervention)}</p>
    <h3>${escapeHTML(ui.contribution)}</h3><p>${escapeHTML(item.outcome)}</p>
    <p class="detail-limit">${escapeHTML(item.sourceStage)}</p>`;
  dialog.showModal();
  document.body.classList.add('dialog-open');
});
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  trigger?.focus();
});
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
});
