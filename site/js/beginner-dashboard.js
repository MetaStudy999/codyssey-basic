(() => {
  const $ = (selector) => document.querySelector(selector);
  const GATES = ['G1_SOURCE', 'G2_BUILD', 'G3_TEST', 'G4_REVIEW', 'G5_RUNTIME', 'G6_EVIDENCE', 'G7_LEARN', 'G8_MERGE'];
  const REQUIRED_ORDER = ['B1-1', 'B1-2', 'B2-1', 'B2-2', 'B3-1', 'B3-2', 'B4-1', 'B5-1', 'B6-1', 'B6-2', 'B7-1'];
  const OPTIONAL_ORDER = ['B4-2', 'B5-2', 'B5-3'];
  const EXTENSION_ORDER = ['B7-2'];
  const REFRESH_KEY = 'codyssey-basic-new-baseline-refresh-v2';
  const REFRESH_COOLDOWN = 5 * 60 * 1000;

  let cycleData = null;
  let missionData = null;
  let refreshTimer = null;

  const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[char]));

  const phaseLabel = (phase) => ({ REQUIRED: '필수 미션', OPTIONAL: '선택 미션', EXTENSION: '고도화·확장' }[phase] || '미션');
  const stateLabel = (state) => cycleData?.state_labels?.[state] || ({ NOT_STARTED: '시작 전', ACTIVE: '진행 중', CLEAR: '미션 완료', BLOCKED: '문제 해결 필요' }[state] || state || '시작 전');

  async function loadJson(path, bust = false) {
    const suffix = bust ? `${path.includes('?') ? '&' : '?'}t=${Date.now()}` : '';
    const response = await fetch(`${path}${suffix}`, { cache: 'no-store' });
    if (!response.ok) throw new Error(`${path}: HTTP ${response.status}`);
    return response.json();
  }

  function missionById(id) {
    return missionData.missions.find((mission) => mission.id === id);
  }

  function cycleMission(id) {
    return cycleData.missions[id] || { state: 'NOT_STARTED', phase: 'REQUIRED' };
  }

  function gateCompleted(mission) {
    return GATES.filter((gate) => mission?.gates?.[gate] === 'PASS').length;
  }

  function phaseCompleted(order) {
    return order.filter((id) => cycleMission(id).state === 'CLEAR').length;
  }

  function setText(selector, text) {
    const node = $(selector);
    if (node) node.textContent = text;
  }

  function renderCurrent() {
    const id = cycleData.cycle.current_mission;
    const mission = missionById(id);
    const entry = cycleMission(id);
    if (!mission) throw new Error(`Current mission not found: ${id}`);

    const gateMeta = cycleData.gate_display?.[mission.current_gate] || cycleData.gate_display?.G1_SOURCE || {};
    const step = Number(gateMeta.step || 1);
    const label = stateLabel(entry.state);

    setText('#current-state', label);
    setText('#current-phase', phaseLabel(entry.phase));
    setText('#current-step-chip', `${step} / 8`);
    setText('#current-id', id);
    setText('#current-title', mission.title);
    setText('#current-action', entry.next_action || gateMeta.action || '현재 단계부터 진행합니다.');
    setText('#current-why', gateMeta.why || '현재 단계의 목적을 확인합니다.');
    setText('#current-completion', gateMeta.completion || '완료 기준을 확인합니다.');
    setText('#current-help', entry.help || '현재 단계의 정상 기준부터 다시 확인합니다.');
    setText('#current-metric', id);
    setText('#step-metric', `${step} / 8`);

    const currentRepo = $('#current-repo-link');
    const continueButton = $('#continue-button');
    [currentRepo, continueButton].forEach((link) => {
      if (link) link.href = mission.repo;
    });
    if (currentRepo) currentRepo.textContent = `${id} 시작하기`;

    return { mission, entry, gateMeta, step };
  }

  function renderSummary() {
    const required = phaseCompleted(REQUIRED_ORDER);
    const optional = phaseCompleted(OPTIONAL_ORDER);
    const extension = phaseCompleted(EXTENSION_ORDER);
    setText('#required-count', `${required} / ${REQUIRED_ORDER.length}`);
    setText('#required-phase-count', `${required} / ${REQUIRED_ORDER.length}`);
    setText('#optional-count', `${optional} / ${OPTIONAL_ORDER.length}`);
    setText('#optional-phase-count', `${optional} / ${OPTIONAL_ORDER.length}`);
    setText('#extension-phase-count', `${extension} / ${EXTENSION_ORDER.length}`);
  }

  function stepState(mission, gateId) {
    const status = mission.gates?.[gateId] || 'TODO';
    if (status === 'PASS') return 'done';
    if (status === 'BLOCKED') return 'blocked';
    if (mission.current_gate === gateId && mission.status !== 'PASS') return 'current';
    return 'waiting';
  }

  function renderSteps(current) {
    const grid = $('#step-grid');
    if (!grid) return;
    const completed = gateCompleted(current.mission);
    const percent = Math.round((completed / GATES.length) * 100);
    setText('#step-progress-label', `${completed} / 8 완료`);
    const fill = $('#step-progress-fill');
    if (fill) fill.style.width = `${percent}%`;

    grid.innerHTML = GATES.map((gateId, index) => {
      const meta = cycleData.gate_display?.[gateId] || {};
      const state = stepState(current.mission, gateId);
      const stateText = state === 'done' ? '완료' : state === 'current' ? '지금' : state === 'blocked' ? '문제 확인' : '대기';
      return `
        <article class="step-card ${state}" data-gate="${escapeHtml(gateId)}">
          <span class="step-kicker">${index + 1}단계 · ${stateText}</span>
          <strong>${escapeHtml(meta.title || gateId)}</strong>
          <p>${escapeHtml(state === 'current' ? meta.action : meta.short || '')}</p>
          <small>${escapeHtml(gateId.replace('_', ' '))}</small>
        </article>`;
    }).join('');
  }

  function missionCard(id) {
    const mission = missionById(id);
    if (!mission) return '';
    const entry = cycleMission(id);
    const isCurrent = id === cycleData.cycle.current_mission;
    const completed = entry.state === 'CLEAR' ? 8 : gateCompleted(mission);
    const cardClass = entry.state === 'CLEAR' ? 'clear' : entry.state === 'BLOCKED' ? 'blocked' : isCurrent ? 'current' : '';
    const phase = entry.phase || (mission.official_requirement === 'required' ? 'REQUIRED' : mission.official_requirement === 'optional' ? 'OPTIONAL' : 'EXTENSION');
    const previous = entry.previous_result ? ` · 이전 기록 ${entry.previous_result}` : '';
    const next = isCurrent ? (entry.next_action || '현재 미션을 진행합니다.') : entry.unlock_after ? `${entry.unlock_after} 완료 후 진행` : '순서가 되면 시작';
    return `
      <article class="mission-card ${cardClass}" data-mission="${escapeHtml(id)}">
        <header>
          <div><span class="mission-id">${escapeHtml(id)}</span><h3>${escapeHtml(mission.title)}</h3></div>
          <span class="status ${entry.state === 'CLEAR' ? 'status-clear' : entry.state === 'BLOCKED' ? 'status-blocked' : isCurrent ? 'status-active' : 'soft-chip'}">${escapeHtml(stateLabel(entry.state))}</span>
        </header>
        <div class="mission-meta"><span>${escapeHtml(phaseLabel(phase))}</span><span>${completed}/8 단계</span><span>${escapeHtml(mission.domain_name || mission.domain_id)}</span></div>
        <p class="mission-note">${escapeHtml(next)}</p>
        <footer><small>현재 진도 ${completed}/8${escapeHtml(previous)}</small><a href="${escapeHtml(mission.repo)}">Repository →</a></footer>
      </article>`;
  }

  function renderMissions() {
    const required = $('#required-list');
    const optional = $('#optional-list');
    const extension = $('#extension-list');
    if (required) required.innerHTML = REQUIRED_ORDER.map(missionCard).join('');
    if (optional) optional.innerHTML = OPTIONAL_ORDER.map(missionCard).join('');
    if (extension) extension.innerHTML = EXTENSION_ORDER.map(missionCard).join('');
  }

  function renderHistory() {
    const list = $('#history-list');
    if (!list) return;
    const previous = missionData.missions
      .map((mission) => ({ mission, entry: cycleMission(mission.id) }))
      .filter(({ entry }) => entry.previous_result);
    if (!previous.length) {
      list.innerHTML = '<p>현재 표시할 이전 PASS 기록이 없습니다. 전체 과거 상태는 보존 브랜치에서 확인할 수 있습니다.</p>';
      return;
    }
    list.innerHTML = previous.map(({ mission, entry }) => `
      <div class="history-entry"><strong>${escapeHtml(mission.id)} · ${escapeHtml(mission.title)}</strong><span>이전 ${escapeHtml(entry.previous_result)} · 현재 진도에는 미합산</span></div>
    `).join('');
  }

  function bindHelp() {
    const bind = (buttonId, panelId) => {
      const button = $(buttonId);
      const panel = $(panelId);
      if (!button || !panel || button.dataset.bound === 'true') return;
      button.dataset.bound = 'true';
      button.addEventListener('click', () => {
        panel.hidden = !panel.hidden;
        button.setAttribute('aria-expanded', String(!panel.hidden));
      });
    };
    bind('#easy-help-button', '#easy-help');
    bind('#stuck-button', '#stuck-help');
  }

  function formatRemaining(ms) {
    const seconds = Math.max(0, Math.ceil(ms / 1000));
    return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
  }

  function updateRefreshControl() {
    const button = $('#refresh-button');
    const meta = $('#refresh-meta');
    if (!button || !meta) return;
    const last = Number(localStorage.getItem(REFRESH_KEY) || 0);
    const remaining = Math.max(0, REFRESH_COOLDOWN - (Date.now() - last));
    if (last && remaining > 0) {
      button.disabled = true;
      button.textContent = `다시 확인 ${formatRemaining(remaining)}`;
      meta.textContent = '최근에 상태를 확인했습니다. 5분 뒤 다시 확인할 수 있습니다.';
    } else {
      button.disabled = false;
      button.textContent = '상태 새로고침';
      meta.textContent = last ? '새 기준 데이터를 다시 확인할 수 있습니다.' : '현재 배포된 새 기준 데이터를 사용 중입니다.';
    }
  }

  function startRefreshTimer() {
    if (refreshTimer) clearInterval(refreshTimer);
    refreshTimer = setInterval(updateRefreshControl, 1000);
  }

  async function refreshData(bust = false) {
    [cycleData, missionData] = await Promise.all([
      loadJson('./data/cycle.json', bust),
      loadJson('./data/missions.json', bust),
    ]);
    const current = renderCurrent();
    renderSummary();
    renderSteps(current);
    renderMissions();
    renderHistory();
    bindHelp();
    document.documentElement.dataset.newBaselineDashboard = 'ready';
  }

  function bindRefresh() {
    const button = $('#refresh-button');
    if (!button) return;
    button.addEventListener('click', async () => {
      if (button.disabled) return;
      localStorage.setItem(REFRESH_KEY, String(Date.now()));
      updateRefreshControl();
      try {
        await refreshData(true);
      } catch (error) {
        console.error('Dashboard refresh failed', error);
        const message = $('#load-error');
        if (message) message.hidden = false;
      }
    });
  }

  async function init() {
    try {
      await refreshData(false);
      bindRefresh();
      updateRefreshControl();
      startRefreshTimer();
    } catch (error) {
      console.error('New baseline dashboard failed to load', error);
      const message = $('#load-error');
      if (message) message.hidden = false;
    }
  }

  init();
})();
