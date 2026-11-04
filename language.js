(() => {
  const paths = { fr: '/', en: '/en/', es: '/es/' };
  const supported = language => ['fr', 'en', 'es'].includes(language);
  const key = 'ba-language';
  const explicit = new URLSearchParams(location.search).get('lang');
  let saved;
  try { saved = localStorage.getItem(key); } catch { /* Links still work without storage. */ }
  const current = document.documentElement.lang;
  const isEntry = location.pathname === '/' || location.pathname === '/index.html';
  if (isEntry) {
    const browser = (navigator.languages || [navigator.language])
      .map(language => language.toLowerCase().split('-')[0]).find(supported);
    const preferred = supported(explicit) ? explicit : supported(saved) ? saved : browser || 'fr';
    if (supported(explicit)) {
      try { localStorage.setItem(key, explicit); } catch { /* Explicit URL remains usable. */ }
    }
    if (preferred !== current) {
      location.replace(paths[preferred] + location.search + location.hash);
      return;
    }
  }
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.language-switch a[data-language]').forEach(link => {
      link.addEventListener('click', () => {
        const target = new URL(link.href);
        target.hash = location.hash;
        link.href = target.href;
        try { localStorage.setItem(key, link.dataset.language); } catch { /* Use the static route. */ }
      });
    });
  });
})();
