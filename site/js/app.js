const domainGrid = document.querySelector('#domain-grid');
const missionGrid = document.querySelector('#mission-grid');
const progressSummary = document.querySelector('#progress-summary');
const workcellGrid = document.querySelector('#workcell-grid');
const workcellSummary = document.querySelector('#workcell-summary');
const workcellWaveChip = document.querySelector('#workcell-wave-chip');
const livePollButton = document.querySelector('#poll-live-status');
const livePollMeta = document.querySelector('#live-poll-meta');
const siteNav = document.querySelector('.site-nav');
const menuToggle = document.querySelector('#menu-toggle');
const primaryMenu = document.querySelector('#primary-menu');
const mobileMenuMedia = window.matchMedia('(max-width: 768px)');

const CONTROL_TOWER_REPO = 'https://github.com/MetaStudy999/codyssey-basic';
const WORKCELL_PROMPT_ROOT = `${CONTROL_TOWER_REPO}/blob/main/docs/00-governance/workcell-prompts`;
const LIVE_POLL_COOLDOWN_MS = 5 * 60 * 1000;
const LIVE_CACHE_KEY = 'codyssey-basic-live-telemetry-v1';
const LIVE_LAST_POLL_KEY = 'codyssey-basic-live-last-poll-v1';
const GATE_ORDER = [
  'G1_SOURCE',
  'G2_BUILD',
  'G3_TEST',
  'G4_REVIEW',
  'G5_RUNTIME',
  'G6_EVIDENCE',
  'G7_LEARN',
  'G8_MERGE',
];

let currentWorkcellData = null;
let liveTelemetry = {};
let lastPollStats = null;

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

function gateMatrixMarkup(gates = {}) {
  return GATE_ORDER.map((gate, index) => {
    const value = gates[gate] || 'TODO';
    const label = gate.replace(/^G\d+_/, '').replaceAll('_', ' ');
    return `
      <div class="gate-cell gate-cell-${statusClass(value)}" title="${escapeHtml(gate)}: ${escapeHtml(value)}">
        <span class="gate-name">G${index + 1} ${escapeHtml(label)}</span>
        <strong class="gate-state">${escapeHtml(value)}</strong>
      </div>
    `;
  }).join('');
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
          <div class="gate-matrix official-gates" aria-label="${escapeHtml(mission.id)} official G1 to G8 status">
            ${gateMatrixMarkup(mission.gates || {})}
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

function gateScore(value) {
  const status = String(value || 'TODO').toUpperCase();
  if (status === 'PASS' || status === 'COMPLETE') return 1;
  if (['PARTIAL', 'IMPLEMENTED', 'TESTED', 'NEEDS-RUNTIME', 'WORKING'].includes(status)) return 0.5;
  return 0;
}

function getLiveGateProgress(gates = {}) {
  const scores = GATE_ORDER.map(gate => gateScore(gates[gate]));
  const score = scores.reduce((sum, value) => sum + value, 0);
  const percent = Math.round((score / GATE_ORDER.length) * 100);
  const passed = GATE_ORDER.filter(gate => String(gates[gate] || '').toUpperCase() === 'PASS').length;
  return {score, percent, passed, total: GATE_ORDER.length};
}

function formatTimestamp(value) {
  if (!value) return '기록 없음';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  return new Intl.DateTimeFormat('ko-KR', {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(date);
}

function effectiveWorkcellStatus(cell) {
  return liveTelemetry[cell.mission]?.workcell_status || cell.workcell_status || 'UNKNOWN';
}

function renderWorkcellSummary(data) {
  const cells = data.workcells || [];
  const count = status => cells.filter(cell => effectiveWorkcellStatus(cell) === status).length;
  const integrated = cells.filter(cell => cell.integration_status === 'INTEGRATED').length;
  const complete = count('COMPLETE');
  const partial = count('PARTIAL');
  const ready = count('READY');
  const working = count('WORKING');
  const waiting = count('WAITING-UPSTREAM');
  const runtime = count('NEEDS-RUNTIME');
  const telemetryCount = cells.filter(cell => liveTelemetry[cell.mission]).length;

  workcellSummary.innerHTML = `
    <strong>${complete} COMPLETE</strong>
    <span>PARTIAL ${partial}</span>
    <span>WORKING ${working}</span>
    <span>NEEDS-RUNTIME ${runtime}</span>
    <span>WAITING ${waiting}</span>
    <span>READY ${ready}</span>
    <span>LIVE DATA ${telemetryCount}/${cells.length}</span>
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
    const telemetry = liveTelemetry[cell.mission] || null;
    const status = telemetry?.workcell_status || cell.workcell_status || 'UNKNOWN';
    const integration = cell.integration_status || 'PENDING';
    const statusDoc = cell.status_doc_url
      ? `<a class="card-link card-link-secondary" href="${escapeHtml(cell.status_doc_url)}">Checkpoint →</a>`
      : '';

    let liveProgressMarkup = `
      <div class="live-progress-unavailable">
        <strong>Live Gate Progress</strong>
        <span>수동 갱신 버튼을 눌러 Mission Repository 상태를 조회하세요.</span>
      </div>
    `;

    if (telemetry) {
      const progress = getLiveGateProgress(telemetry.gates || {});
      const currentGate = telemetry.current_gate || 'UNKNOWN';
      liveProgressMarkup = `
        <div class="mission-progress live-mission-progress">
          <div class="progress-meta">
            <span>Live Gate Progress · ${escapeHtml(currentGate)}</span>
            <strong>${progress.percent}%</strong>
          </div>
          <div
            class="progress-track"
            role="progressbar"
            aria-label="${escapeHtml(cell.mission)} live gate progress"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow="${progress.percent}"
          >
            <span class="progress-fill" style="width:${progress.percent}%"></span>
          </div>
          <div class="gate-matrix live-gates" aria-label="${escapeHtml(cell.mission)} live G1 to G8 status">
            ${gateMatrixMarkup(telemetry.gates || {})}
          </div>
          <p class="live-updated">Mission telemetry: ${escapeHtml(formatTimestamp(telemetry.updated_at))}</p>
        </div>
      `;
    }

    return `
      <article class="card workcell-card">
        <div class="card-topline">
          <span class="badge status-${statusClass(status)}">${escapeHtml(status)}</span>
          <span class="integration-chip integration-${statusClass(integration)}">${escapeHtml(integration)}</span>
        </div>
        <h3>${escapeHtml(cell.mission)} · ${escapeHtml(cell.title_en)}</h3>
        <p class="muted">Chat ${String(cell.chat || '').padStart(2, '0')} · ${escapeHtml(cell.domain_name_en)}</p>
        <p class="mission-title-ko">${escapeHtml(cell.title)}</p>
        ${liveProgressMarkup}
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

function loadCachedTelemetry() {
  try {
    const raw = localStorage.getItem(LIVE_CACHE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed.statuses === 'object') {
      liveTelemetry = parsed.statuses;
      lastPollStats = parsed.stats || null;
    }
  } catch (error) {
    console.warn('Unable to restore cached live telemetry', error);
  }
}

function getLastPollAt() {
  const value = Number(localStorage.getItem(LIVE_LAST_POLL_KEY) || 0);
  return Number.isFinite(value) ? value : 0;
}

function formatRemaining(milliseconds) {
  const totalSeconds = Math.max(0, Math.ceil(milliseconds / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function updatePollControls() {
  if (!livePollButton || !livePollMeta) return;

  const lastPollAt = getLastPollAt();
  const elapsed = Date.now() - lastPollAt;
  const remaining = Math.max(0, LIVE_POLL_COOLDOWN_MS - elapsed);

  if (lastPollAt > 0 && remaining > 0) {
    livePollButton.disabled = true;
    livePollButton.textContent = `다시 갱신 가능 ${formatRemaining(remaining)}`;
  } else {
    livePollButton.disabled = false;
    livePollButton.textContent = 'Mission 상태 수동 갱신';
  }

  if (lastPollAt > 0) {
    const stats = lastPollStats ? ` · 성공 ${lastPollStats.success}/${lastPollStats.total}` : '';
    livePollMeta.textContent = `마지막 수동 갱신: ${formatTimestamp(lastPollAt)}${stats}`;
  } else {
    livePollMeta.textContent = '아직 수동 갱신하지 않았습니다.';
  }
}

function missionRawStatusUrl(repository) {
  const repo = String(repository || '').trim();
  if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repo)) {
    throw new Error(`Invalid repository: ${repo}`);
  }
  return `https://raw.githubusercontent.com/${repo}/main/.live/mission-status.json?ts=${Date.now()}`;
}

async function fetchMissionTelemetry(cell) {
  const response = await fetch(missionRawStatusUrl(cell.repository), {cache: 'no-store'});
  if (!response.ok) throw new Error(`${cell.mission}: HTTP ${response.status}`);
  const data = await response.json();
  if (data.mission !== cell.mission) throw new Error(`${cell.mission}: telemetry mission mismatch`);
  return data;
}

async function pollLiveStatuses() {
  if (!currentWorkcellData || !livePollButton || livePollButton.disabled) return;

  const cells = currentWorkcellData.workcells || [];
  const polledAt = Date.now();
  localStorage.setItem(LIVE_LAST_POLL_KEY, String(polledAt));
  livePollButton.disabled = true;
  livePollButton.textContent = 'Mission 상태 조회 중…';
  livePollMeta.textContent = '15개 Mission Repository를 수동 조회하고 있습니다.';

  const results = await Promise.allSettled(cells.map(fetchMissionTelemetry));
  const nextTelemetry = {...liveTelemetry};
  let success = 0;

  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      const mission = cells[index].mission;
      nextTelemetry[mission] = result.value;
      success += 1;
    } else {
      console.warn('Live telemetry fetch failed', result.reason);
    }
  });

  liveTelemetry = nextTelemetry;
  lastPollStats = {success, total: cells.length};
  localStorage.setItem(LIVE_CACHE_KEY, JSON.stringify({
    polled_at: polledAt,
    statuses: liveTelemetry,
    stats: lastPollStats,
  }));

  renderWorkcellSummary(currentWorkcellData);
  renderWorkcells(currentWorkcellData);
  updatePollControls();
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
    currentWorkcellData = data;
    loadCachedTelemetry();
    renderWorkcellSummary(data);
    renderWorkcells(data);
    updatePollControls();
  } catch (error) {
    workcellSummary.textContent = 'Workcell 데이터를 불러오지 못했습니다.';
    workcellGrid.innerHTML = `<article class="card"><h3>Workcell data load error</h3><p class="muted">${escapeHtml(error.message)}</p></article>`;
    if (workcellWaveChip) workcellWaveChip.textContent = 'WAVE DATA ERROR';
  }
}

initMobileMenu();
if (livePollButton) livePollButton.addEventListener('click', pollLiveStatuses);
loadProgress();
loadWorkcells();
updatePollControls();
setInterval(updatePollControls, 1000);
