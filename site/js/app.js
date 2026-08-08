const domainGrid = document.querySelector('#domain-grid');
const missionGrid = document.querySelector('#mission-grid');
const progressSummary = document.querySelector('#progress-summary');
const workcellGrid = document.querySelector('#workcell-grid');
const workcellSummary = document.querySelector('#workcell-summary');
const workcellWaveChip = document.querySelector('#workcell-wave-chip');
const siteNav = document.querySelector('.site-nav');
const menuToggle = document.querySelector('#menu-toggle');
const primaryMenu = document.querySelector('#primary-menu');
const mobileMenuMedia = window.matchMedia('(max-width: 768px)');

const CONTROL_TOWER_REPO = 'https://github.com/MetaStudy999/codyssey-basic';
const WORKCELL_PROMPT_ROOT = `${CONTROL_TOWER_REPO}/blob/main/docs/00-governance/workcell-prompts`;

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
}

function statusClass(value) {
  return String(value || 'unknown').toLowerCase().replace(/[^a-z0-9]+/g, '-');
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
          <span class="badge status-${statusClass(mission.status)}">${escapeHtml(mission.status)}</span>
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

function renderWorkcellSummary(data) {
  const cells = data.workcells || [];
  const count = status => cells.filter(cell => cell.workcell_status === status).length;
  const integrated = cells.filter(cell => cell.integration_status === 'INTEGRATED').length;
  const complete = count('COMPLETE');
  const partial = count('PARTIAL');
  const ready = count('READY');
  const working = count('WORKING');
  const waiting = count('WAITING-UPSTREAM');

  workcellSummary.innerHTML = `
    <strong>${complete} COMPLETE</strong>
    <span>PARTIAL ${partial}</span>
    <span>WORKING ${working}</span>
    <span>WAITING ${waiting}</span>
    <span>READY ${ready}</span>
    <span>INTEGRATED ${integrated}/${cells.length}</span>
  `;

  if (workcellWaveChip) {
    const waveId = data.wave?.id || 'UNKNOWN';
    const waveStatus = data.wave?.status || 'UNKNOWN';
    workcellWaveChip.textContent = `WAVE ${waveId} · ${waveStatus}`;
  }
}

function renderWorkcells(data) {
  const cells = data.workcells || [];
  workcellGrid.innerHTML = cells.map(cell => {
    const status = cell.workcell_status || 'UNKNOWN';
    const integration = cell.integration_status || 'PENDING';
    const statusDoc = cell.status_doc_url
      ? `<a class="card-link card-link-secondary" href="${escapeHtml(cell.status_doc_url)}">Checkpoint →</a>`
      : '';

    return `
      <article class="card workcell-card">
        <div class="card-topline">
          <span class="badge status-${statusClass(status)}">${escapeHtml(status)}</span>
          <span class="integration-chip integration-${statusClass(integration)}">${escapeHtml(integration)}</span>
        </div>
        <h3>${escapeHtml(cell.mission)} · ${escapeHtml(cell.title_en)}</h3>
        <p class="muted">Chat ${String(cell.chat || '').padStart(2, '0')} · ${escapeHtml(cell.domain_name_en)}</p>
        <p class="mission-title-ko">${escapeHtml(cell.title)}</p>
        <div class="workcell-state-row">
          <span>Workcell</span><strong>${escapeHtml(status)}</strong>
          <span>Official integration</span><strong>${escapeHtml(integration)}</strong>
        </div>
        <div class="card-actions">
          ${cell.repo_url ? `<a class="card-link" href="${escapeHtml(cell.repo_url)}">Mission Repo →</a>` : ''}
          ${cell.prompt_url ? `<a class="card-link card-link-secondary" href="${escapeHtml(cell.prompt_url)}">Prompt →</a>` : ''}
          ${statusDoc}
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
    progressSummary.textContent = '공식 진행 데이터를 불러오지 못했습니다.';
    missionGrid.innerHTML = `<article class="card"><h3>Mission data load error</h3><p class="muted">${escapeHtml(error.message)}</p></article>`;
  }
}

async function loadWorkcells() {
  try {
    const response = await fetch('./data/workcells.json', {cache: 'no-store'});
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    renderWorkcellSummary(data);
    renderWorkcells(data);
  } catch (error) {
    workcellSummary.textContent = 'Workcell live 데이터를 불러오지 못했습니다.';
    workcellGrid.innerHTML = `<article class="card"><h3>Workcell data load error</h3><p class="muted">${escapeHtml(error.message)}</p></article>`;
    if (workcellWaveChip) workcellWaveChip.textContent = 'WAVE DATA ERROR';
  }
}

initMobileMenu();
loadProgress();
loadWorkcells();
