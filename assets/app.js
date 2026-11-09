const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');
toggle?.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(expanded));
  nav.classList.toggle('is-open', expanded);
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  toggle?.setAttribute('aria-expanded', 'false');
  nav.classList.remove('is-open');
}));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') {
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    toggle.focus();
  }
});
document.querySelectorAll('[data-language]').forEach(link => link.addEventListener('click', () => {
  try { localStorage.setItem('ba-language', link.dataset.language); } catch {}
}));
// Explicit routes always keep their language; only the home entry may use a preference.
const path = location.pathname;
const query = new URLSearchParams(location.search);
if (['fr', 'en', 'es'].includes(query.get('lang'))) {
  try { localStorage.setItem('ba-language', query.get('lang')); } catch {}
}
if (path === '/' && !query.has('lang')) {
  let preference;
  try { preference = localStorage.getItem('ba-language'); } catch {}
  preference ||= navigator.language?.slice(0, 2);
  if (preference === 'en' || preference === 'es') location.replace(`/${preference}/`);
}
