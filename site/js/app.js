const domainGrid = document.querySelector('#domain-grid');
const missionControlGrid = document.querySelector('#mission-control-grid');
const missionControlSummary = document.querySelector('#mission-control-summary');
const workcellWaveChip = document.querySelector('#workcell-wave-chip');
const livePollButton = document.querySelector('#poll-live-status');
const livePollMeta = document.querySelector('#live-poll-meta');
const missionSort = document.querySelector('#mission-control-sort');
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

const DEPENDENCIES = {
  'B1-1': [],
  'B1-2': [],
  'B2-1': [],
  'B2-2': [],
  'B3-1': [],
  'B3-2': [],
  'B4-1': [],
  'B4-2': ['B4-1'],
  'B5-1': [],
  'B5-2': ['B5-1'],
  'B5-3': ['B5-2'],
  'B6-1': [],
  'B6-2': [],
  'B7-1': ['B5-3', 'B6-1', 'B6-2'],
  'B7-2': ['B7-1'],
};

const ACTIVE_STATUSES = new Set(['PARTIAL', 'WORKING', 'IMPLEMENTED', 'TESTED']);
const ACTION_PRIORITY = {
  blocked: 0,
  runtime: 1,
  active: 2,
  integrate: 3,
  ready: 4,
  waiting: 5,
  complete: 6,
};

let currentMissionData = null;
let currentWorkcellData = null;
let liveTelemetry = {};
let lastPollStats = null;
let currentSort = 'recommended';

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>'"]/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  }[char]));
}

function statusClass(value) {
  return String(value || 'unknown').toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

function missionNumber(id) {
  const match = String(id || '').match(/^B(\d+)-(\d+)$/i);
  return match ? (Number(match[1]) * 100 + Number(match[2])) : 99999;
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
  if (!domainGrid) return;
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

function getGateProgress(gates = {}) {
  const states = GATE_ORDER.map(gate => gates[gate] || 'TODO');
  const completed = states.filter(status => status === 'PASS').length;
  const percent = Math.round((completed / GATE_ORDER.length) * 100);
  return {completed, total: GATE_ORDER.length, percent};
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
  return {
    score,
    percent: Math.round((score / GATE_ORDER.length) * 100),
    total: GATE_ORDER.length,
  };
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

function formatTimestamp(value) {
  if (!value) return '기록 없음';
  const date = new Date(Number(value) || value);
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

function effectiveWorkcellStatus(cell) {
  return String(liveTelemetry[cell?.mission]?.workcell_status || cell?.workcell_status || 'UNKNOWN').toUpperCase();
}

function missionMaps() {
  const missions = currentMissionData?.missions || [];
  const cells = currentWorkcellData?.workcells || [];
  return {
    missionMap: Object.fromEntries(missions.map(mission => [mission.id, mission])),
    cellMap: Object.fromEntries(cells.map(cell => [cell.mission, cell])),
  };
}

function missionIsComplete(id, missionMap, cellMap) {
  const mission = missionMap[id];
  const cell = cellMap[id];
  const officialComplete = mission?.status === 'PASS' && cell?.integration_status === 'INTEGRATED';
  return officialComplete || effectiveWorkcellStatus(cell) === 'COMPLETE';
}

function unmetDependencies(id, missionMap, cellMap) {
  return (DEPENDENCIES[id] || []).filter(dep => !missionIsComplete(dep, missionMap, cellMap));
}

function downstreamMissions(id) {
  return Object.entries(DEPENDENCIES)
    .filter(([, deps]) => deps.includes(id))
    .map(([mission]) => mission);
}

function deriveActionState(mission, cell, missionMap, cellMap) {
  const liveStatus = effectiveWorkcellStatus(cell);
  const officialStatus = String(mission?.status || 'TODO').toUpperCase();
  const integration = String(cell?.integration_status || 'PENDING').toUpperCase();
  const unmet = unmetDependencies(mission.id, missionMap, cellMap);

  if (officialStatus === 'PASS' && integration === 'INTEGRATED') {
    return {key: 'complete', icon: '✅', label: 'COMPLETE'};
  }
  if (liveStatus === 'BLOCKED') {
    return {key: 'blocked', icon: '⛔', label: 'BLOCKED'};
  }
  if (liveStatus === 'NEEDS-RUNTIME') {
    return {key: 'runtime', icon: '🧪', label: 'NEEDS RUNTIME'};
  }
  if (liveStatus === 'COMPLETE' && integration !== 'INTEGRATED') {
    return {key: 'integrate', icon: '📦', label: 'READY TO INTEGRATE'};
  }
  if (ACTIVE_STATUSES.has(liveStatus)) {
    return {key: 'active', icon: '🛠', label: 'IN PROGRESS'};
  }
  if (liveStatus === 'WAITING-UPSTREAM' || unmet.length) {
    return {key: 'waiting', icon: '⏳', label: 'WAITING'};
  }
  return {key: 'ready', icon: '🎯', label: 'READY'};
}

function deriveNextAction(mission, cell, telemetry, action, missionMap, cellMap) {
  const currentGate = telemetry?.current_gate || mission.current_gate_label || mission.current_gate || 'G1 SOURCE';
  const unmet = unmetDependencies(mission.id, missionMap, cellMap);

  if (action.key === 'complete') return '공식 통합 완료 · 학습 설명력과 포트폴리오 고도화를 진행할 수 있습니다.';
  if (action.key === 'blocked') return '현재 blocker를 먼저 해결하고 해당 Gate를 다시 검증하세요.';
  if (action.key === 'runtime') return `${currentGate} Runtime/브라우저/클라우드 증거를 확보한 뒤 다음 Gate로 진행하세요.`;
  if (action.key === 'integrate') return 'HANDOFF와 증거 정합성을 확인한 뒤 Control Tower 직렬 통합을 진행하세요.';
  if (action.key === 'active') return `${currentGate} 작업을 우선 마무리하고 다음 Gate 또는 HANDOFF로 진행하세요.`;
  if (action.key === 'waiting') return `선행 ${unmet.join(' + ') || 'Workcell'} COMPLETE 확인 후 후행 BUILD를 진행하세요.`;
  return '현재 병렬 진행 가능 · G1 SOURCE 또는 현재 Gate부터 진행하세요.';
}

function sortRows(rows) {
  return [...rows].sort((a, b) => {
    if (currentSort === 'mission') return missionNumber(a.mission.id) - missionNumber(b.mission.id);
    if (currentSort === 'domain') {
      const domainCompare = String(a.mission.domain_id).localeCompare(String(b.mission.domain_id), 'en', {numeric: true});
      return domainCompare || missionNumber(a.mission.id) - missionNumber(b.mission.id);
    }
    const actionCompare = ACTION_PRIORITY[a.action.key] - ACTION_PRIORITY[b.action.key];
    return actionCompare || missionNumber(a.mission.id) - missionNumber(b.mission.id);
  });
}

function liveLaneMarkup(mission, cell, telemetry) {
  const liveStatus = effectiveWorkcellStatus(cell);
  if (!telemetry?.gates) {
    return `
      <div class="mission-control-lane mission-control-lane-live">
        <div class="mission-lane-head">
          <div>
            <span class="mission-lane-label">Live Execution</span>
            <strong>${escapeHtml(liveStatus)} · 수동 조회 전</strong>
          </div>
          <span class="mission-lane-percent">—</span>
        </div>
        <div class="mission-live-empty">
          <strong>Live G1~G8 telemetry 없음</strong>
          <span>Mission 상태 수동 갱신을 누르면 해당 Repository의 현재 Gate 상태를 표시합니다.</span>
        </div>
      </div>
    `;
  }

  const progress = getLiveGateProgress(telemetry.gates);
  const currentGate = telemetry.current_gate || 'UNKNOWN';
  return `
    <div class="mission-control-lane mission-control-lane-live">
      <div class="mission-lane-head">
        <div>
          <span class="mission-lane-label">Live Execution</span>
          <strong>${escapeHtml(liveStatus)} · ${escapeHtml(currentGate)}</strong>
        </div>
        <span class="mission-lane-percent">${progress.percent}%</span>
      </div>
      <div class="progress-track" role="progressbar" aria-label="${escapeHtml(mission.id)} live progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress.percent}">
        <span class="progress-fill" style="width:${progress.percent}%"></span>
      </div>
      <div class="gate-matrix live-gates" aria-label="${escapeHtml(mission.id)} live G1 to G8 status">
        ${gateMatrixMarkup(telemetry.gates)}
      </div>
      <p class="live-updated">Mission telemetry: ${escapeHtml(formatTimestamp(telemetry.updated_at))}</p>
    </div>
  `;
}

function officialLaneMarkup(mission, cell) {
  const progress = getGateProgress(mission.gates || {});
  const integration = cell?.integration_status || 'PENDING';
  return `
    <div class="mission-control-lane mission-control-lane-official">
      <div class="mission-lane-head">
        <div>
          <span class="mission-lane-label">Official Integration</span>
          <strong>${escapeHtml(mission.status)} · ${escapeHtml(integration)} · ${escapeHtml(mission.current_gate_label || mission.current_gate)}</strong>
        </div>
        <span class="mission-lane-percent">${progress.percent}%</span>
      </div>
      <div class="progress-track" role="progressbar" aria-label="${escapeHtml(mission.id)} official progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress.percent}">
        <span class="progress-fill" style="width:${progress.percent}%"></span>
      </div>
      <div class="gate-matrix official-gates" aria-label="${escapeHtml(mission.id)} official G1 to G8 status">
        ${gateMatrixMarkup(mission.gates || {})}
      </div>
      <p class="live-updated">SSOT: config/missions.yaml · ${progress.completed}/${progress.total} Gates PASS</p>
    </div>
  `;
}

function renderMissionControlSummary(rows) {
  if (!missionControlSummary) return;
  const count = key => rows.filter(row => row.action.key === key).length;
  const officialPass = rows.filter(row => row.mission.status === 'PASS').length;
  const integrated = rows.filter(row => row.cell?.integration_status === 'INTEGRATED').length;
  const telemetryCount = rows.filter(row => liveTelemetry[row.mission.id]).length;
  missionControlSummary.innerHTML = `
    <strong>${officialPass}/${rows.length} OFFICIAL PASS</strong>
    <span>📦 INTEGRATED ${integrated}/${rows.length}</span>
    <span>🛠 ACTIVE ${count('active')}</span>
    <span>🧪 RUNTIME ${count('runtime')}</span>
    <span>📦 TO INTEGRATE ${count('integrate')}</span>
    <span>🎯 READY ${count('ready')}</span>
    <span>⏳ WAITING ${count('waiting')}</span>
    <span>✅ COMPLETE ${count('complete')}</span>
    <span>LIVE DATA ${telemetryCount}/${rows.length}</span>
  `;
}

function renderMissionControl() {
  if (!currentMissionData || !currentWorkcellData || !missionControlGrid) return;
  const {missionMap, cellMap} = missionMaps();
  const rows = (currentMissionData.missions || []).map(mission => {
    const cell = cellMap[mission.id] || null;
    const telemetry = liveTelemetry[mission.id] || null;
    const action = deriveActionState(mission, cell, missionMap, cellMap);
    return {mission, cell, telemetry, action};
  });

  renderMissionControlSummary(rows);

  missionControlGrid.innerHTML = sortRows(rows).map(({mission, cell, telemetry, action}) => {
    const integration = cell?.integration_status || 'PENDING';
    const officialLabel = getOfficialLabel(mission);
    const promptUrl = cell?.prompt_url || `${WORKCELL_PROMPT_ROOT}/${mission.id.toLowerCase()}.md`;
    const repoUrl = cell?.repo_url || mission.repo;
    const statusDoc = cell?.status_doc_url
      ? `<a class="card-link card-link-secondary" href="${escapeHtml(cell.status_doc_url)}">Checkpoint →</a>`
      : '';
    const nextAction = deriveNextAction(mission, cell, telemetry, action, missionMap, cellMap);
    const unlocks = downstreamMissions(mission.id);
    const unmet = unmetDependencies(mission.id, missionMap, cellMap);
    const dependencyText = unmet.length ? `선행 대기: ${unmet.join(' + ')}` : (DEPENDENCIES[mission.id]?.length ? '선행 충족' : '독립 진행');

    return `
      <article class="card mission-control-card" data-action="${escapeHtml(action.key)}" data-mission="${escapeHtml(mission.id)}">
        <div class="card-topline">
          <span class="mission-action-badge action-${escapeHtml(action.key)}"><span aria-hidden="true">${action.icon}</span>${escapeHtml(action.label)}</span>
          <div class="mission-official-badges">
            <span class="badge status-${statusClass(mission.status)}">OFFICIAL ${escapeHtml(mission.status)}</span>
            <span class="integration-chip integration-${statusClass(integration)}">${escapeHtml(integration)}</span>
          </div>
        </div>

        <h3>${escapeHtml(mission.id)} · ${escapeHtml(mission.title_en || mission.title)}</h3>
        <p class="mission-title-ko">${escapeHtml(mission.title)}</p>
        <div class="mission-control-meta">
          <span>${escapeHtml(mission.domain_name_en)}</span>
          <span>${escapeHtml(officialLabel)}</span>
          <span>Learning ${escapeHtml(mission.learning)}</span>
          <span>${escapeHtml(dependencyText)}</span>
        </div>

        <div class="mission-control-lanes">
          ${liveLaneMarkup(mission, cell, telemetry)}
          ${officialLaneMarkup(mission, cell)}
        </div>

        <div class="mission-control-decision">
          <div class="mission-next-action">
            <span>NEXT ACTION</span>
            <strong>${escapeHtml(action.icon)} ${escapeHtml(nextAction)}</strong>
          </div>
          <div class="mission-unlocks">${unlocks.length ? `🔓 완료 시 다음 권장: ${escapeHtml(unlocks.join(', '))}` : '최종 후행 또는 독립 미션'}</div>
        </div>

        <div class="card-actions">
          ${repoUrl ? `<a class="card-link" href="${escapeHtml(repoUrl)}">Mission Repo →</a>` : ''}
          <a class="card-link card-link-secondary" href="${escapeHtml(promptUrl)}">Workcell Prompt →</a>
          ${statusDoc}
        </div>
      </article>
    `;
  }).join('');

  window.dispatchEvent(new CustomEvent('codyssey:mission-control-updated'));
}

function renderWaveChip() {
  if (!workcellWaveChip || !currentWorkcellData) return;
  const waveId = currentWorkcellData.wave?.id || 'UNKNOWN';
  const waveStatus = currentWorkcellData.wave?.status || 'UNKNOWN';
  workcellWaveChip.textContent = `WAVE ${waveId} · ${waveStatus}`;
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
  if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repo)) throw new Error(`Invalid repository: ${repo}`);
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
      nextTelemetry[cells[index].mission] = result.value;
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

  renderMissionControl();
  updatePollControls();
}

async function loadControlTowerData() {
  if (missionControlSummary) missionControlSummary.textContent = 'Mission Control 데이터를 불러오고 있습니다.';
  try {
    const [missionResponse, workcellResponse] = await Promise.all([
      fetch('./data/missions.json', {cache: 'no-store'}),
      fetch('./data/workcells.json', {cache: 'no-store'}),
    ]);
    if (!missionResponse.ok) throw new Error(`missions.json HTTP ${missionResponse.status}`);
    if (!workcellResponse.ok) throw new Error(`workcells.json HTTP ${workcellResponse.status}`);

    currentMissionData = await missionResponse.json();
    currentWorkcellData = await workcellResponse.json();
    loadCachedTelemetry();
    renderDomains(currentMissionData.domains || [], currentMissionData.missions || []);
    renderWaveChip();
    renderMissionControl();
    updatePollControls();
  } catch (error) {
    if (missionControlSummary) missionControlSummary.textContent = 'Mission Control 데이터를 불러오지 못했습니다.';
    if (missionControlGrid) {
      missionControlGrid.innerHTML = `<article class="card"><h3>Mission Control data load error</h3><p class="muted">${escapeHtml(error.message)}</p></article>`;
    }
    if (workcellWaveChip) workcellWaveChip.textContent = 'WAVE DATA ERROR';
  }
}

initMobileMenu();
if (livePollButton) livePollButton.addEventListener('click', pollLiveStatuses);
if (missionSort) {
  missionSort.addEventListener('change', () => {
    currentSort = missionSort.value || 'recommended';
    renderMissionControl();
  });
}
loadControlTowerData();
updatePollControls();
setInterval(updatePollControls, 1000);
