const domainGrid = document.querySelector('#domain-grid');
const missionGrid = document.querySelector('#mission-grid');
const progressSummary = document.querySelector('#progress-summary');
const siteNav = document.querySelector('.site-nav');
const menuToggle = document.querySelector('#menu-toggle');
const primaryMenu = document.querySelector('#primary-menu');
const mobileMenuMedia = window.matchMedia('(max-width: 768px)');

const CONTROL_TOWER_REPO = 'https://github.com/MetaStudy999/codyssey-basic';
const WORKCELL_PROMPT_ROOT = `${CONTROL_TOWER_REPO}/blob/main/docs/00-governance/workcell-prompts`;

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
}

function setMenuOpen(isOpen, {returnFocus = false} = {}) {
  if (!menuToggle || !primaryMenu) return;

  primaryMenu.classList.toggle('is-open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');

  const icon = menuToggle.querySelector('.menu-icon');
  if (icon) icon.textContent = isOpen ? '✕' : '☰';

  if (!isOpen && returnFocus) menuToggle.focus();
}

function initMobileMenu() {
  if (!siteNav || !menuToggle || !primaryMenu) return;

  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    setMenuOpen(!isOpen);
  });

  primaryMenu.addEventListener('click', event => {
    if (mobileMenuMedia.matches && event.target.closest('a')) setMenuOpen(false);
  });

  document.addEventListener('click', event => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    if (mobileMenuMedia.matches && isOpen && !siteNav.contains(event.target)) setMenuOpen(false);
  });

  document.addEventListener('keydown', event => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    if (event.key === 'Escape' && isOpen) setMenuOpen(false, {returnFocus: true});
  });

  mobileMenuMedia.addEventListener('change', event => {
    if (!event.matches) setMenuOpen(false);
  });
}

function getOfficialLabel(mission) {
  if (mission.kind === 'term-project') return 'Term Project';
  if (mission.official_requirement === 'required') return 'Required';
  if (mission.official_requirement === 'optional') return 'Optional';
  return 'Execution Unit';
}

function renderDomains(domains, missions) {
  domainGrid.innerHTML = domains.map(domain => {
    const units = missions.filter(mission => mission.domain_id === domain.id);
    const passed = units.filter(mission => mission.status === 'PASS').length;
    const gatePasses = units.reduce((sum, mission) => (
      sum + Object.values(mission.gates || {}).filter(status => status === 'PASS').length
    ), 0);
    const gateTotal = units.reduce((sum, mission) => sum + Object.keys(mission.gates || {}).length, 0);

    return `
      <article class="card domain-card">
        <div class="card-topline">
          <span class="badge">${escapeHtml(domain.id)}</span>
          <span class="gate">${passed}/${units.length} PASS</span>
        </div>
        <h3>${escapeHtml(domain.name_en)}</h3>
        <p class="muted">${escapeHtml(domain.name)}</p>
        <p class="domain-stats">${units.length} execution unit${units.length === 1 ? '' : 's'} · ${gatePasses}/${gateTotal} gates integrated</p>
      </article>
    `;
  }).join('');
}

function renderSummary(missions) {
  const statusCount = status => missions.filter(m => m.status === status).length;
  const pass = statusCount('PASS');
  const tested = statusCount('TESTED');
  const implemented = statusCount('IMPLEMENTED');
  const runtime = statusCount('NEEDS-RUNTIME');
  const todo = statusCount('TODO');
  const allGateStates = missions.flatMap(mission => Object.values(mission.gates || {}));
  const passedGates = allGateStates.filter(status => status === 'PASS').length;

  progressSummary.innerHTML = `
    <strong>${pass} / ${missions.length} PASS</strong>
    <span>GATES ${passedGates}/${allGateStates.length}</span>
    <span>TODO ${todo}</span>
    <span>IMPLEMENTED ${implemented}</span>
    <span>TESTED ${tested}</span>
    <span>NEEDS-RUNTIME ${runtime}</span>
  `;
}

function getGateProgress(mission) {
  const gateStates = Object.values(mission.gates || {});
  const total = gateStates.length;
  const completed = gateStates.filter(status => status === 'PASS').length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
  return {completed, total, percent};
}

function renderMissions(missions) {
  missionGrid.innerHTML = missions.map(mission => {
    const progress = getGateProgress(mission);
    const progressLabel = `${progress.completed}/${progress.total} Gates · ${progress.percent}%`;
    const promptUrl = `${WORKCELL_PROMPT_ROOT}/${escapeHtml(mission.id.toLowerCase())}.md`;
    const officialLabel = getOfficialLabel(mission);

    return `
      <article class="card mission-card">
        <div class="card-topline">
          <span class="badge status-${escapeHtml(mission.status.toLowerCase())}">${escapeHtml(mission.status)}</span>
          <span class="gate">${escapeHtml(mission.current_gate_label)}</span>
        </div>
        <h3>${escapeHtml(mission.id)} · ${escapeHtml(mission.title_en || mission.title)}</h3>
        <p class="muted">${escapeHtml(mission.domain_name_en)} · ${escapeHtml(officialLabel)}</p>
        <p class="mission-title-ko">${escapeHtml(mission.title)}</p>
        <p class="muted">Learning: ${escapeHtml(mission.learning)}</p>
        <div class="mission-progress">
          <div class="progress-meta">
            <span>Integrated Gate Progress</span>
            <strong>${progressLabel}</strong>
          </div>
          <div
            class="progress-track"
            role="progressbar"
            aria-label="${escapeHtml(mission.id)} gate progress"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow="${progress.percent}"
          >
            <span class="progress-fill" style="width:${progress.percent}%"></span>
          </div>
        </div>
        <div class="card-actions">
          <a class="card-link" href="${escapeHtml(mission.repo)}">Repository →</a>
          <a class="card-link card-link-secondary" href="${promptUrl}">Workcell Prompt →</a>
        </div>
      </article>
    `;
  }).join('');
}

async function loadProgress() {
  try {
    const response = await fetch('./data/missions.json', {cache: 'no-store'});
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    renderDomains(data.domains, data.missions);
    renderSummary(data.missions);
    renderMissions(data.missions);
  } catch (error) {
    progressSummary.textContent = '진행 데이터를 불러오지 못했습니다.';
    missionGrid.innerHTML = `<article class="card"><h3>Data load error</h3><p class="muted">${escapeHtml(error.message)}</p></article>`;
  }
}

initMobileMenu();
loadProgress();
