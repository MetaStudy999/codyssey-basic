(() => {
  const grid = document.querySelector('#mission-control-grid');
  const summary = document.querySelector('#mission-control-summary');
  if (!grid) return;

  let pageData = null;

  function applyPageLinks() {
    if (!pageData) return;
    const pages = pageData.missions || {};

    grid.querySelectorAll('.mission-control-card[data-mission]').forEach(card => {
      const missionId = card.dataset.mission;
      const page = pages[missionId];
      if (!page || page.status !== 'VERIFIED' || !page.url) return;

      const actions = card.querySelector('.card-actions');
      if (!actions || actions.querySelector('.mission-page-link')) return;

      const link = document.createElement('a');
      link.className = 'card-link mission-page-link';
      link.href = page.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.title = `${missionId} ${page.label || 'Live Page'} · ${pageData.verification_source || 'verified'}`;

      const label = document.createElement('span');
      label.className = 'mission-page-label';
      label.textContent = `🌐 ${page.label || 'Live Page'}`;

      const verified = document.createElement('span');
      verified.className = 'mission-page-verified';
      verified.textContent = '● VERIFIED';

      link.append(label, verified);
      actions.prepend(link);
    });

    if (summary && !summary.querySelector('#mission-page-summary')) {
      const badge = document.createElement('span');
      badge.id = 'mission-page-summary';
      badge.className = 'mission-page-summary';
      badge.textContent = `🌐 LIVE PAGE ${pageData.verified_pages || Object.keys(pages).length}/${pageData.checked_repositories || 15}`;
      badge.title = `${pageData.verification_source || 'Page verification'} · ${pageData.verified_at || ''}`;
      summary.append(badge);
    }
  }

  async function loadMissionPages() {
    try {
      const response = await fetch('./data/mission-pages.json', {cache: 'no-store'});
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      pageData = await response.json();
      applyPageLinks();
    } catch (error) {
      console.warn('Unable to load mission page links', error);
    }
  }

  const observer = new MutationObserver(() => applyPageLinks());
  observer.observe(grid, {childList: true, subtree: true});

  window.addEventListener('codyssey:mission-control-updated', applyPageLinks);
  loadMissionPages();
})();
