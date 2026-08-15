(() => {
  const $ = (selector) => document.querySelector(selector);
  const GATE_ORDER = ['G1_SOURCE', 'G2_BUILD', 'G3_TEST', 'G4_REVIEW', 'G5_RUNTIME', 'G6_EVIDENCE', 'G7_LEARN', 'G8_MERGE'];

  const stateClass = (state) => `beginner-state-${String(state || '').toLowerCase().replaceAll('_', '-')}`;

  const gateStatusText = (status, isCurrent) => {
    if (status === 'PASS') return '완료';
    if (status === 'BLOCKED') return '문제 해결 필요';
    if (status === 'NEEDS-RUNTIME') return '실행 확인 필요';
    return isCurrent ? '현재 단계' : '대기';
  };

  const gateProgress = (mission, gateOrder) => {
    const gates = mission?.gates || {};
    return gateOrder.filter((gate) => gates[gate] === 'PASS').length;
  };

  async function loadJson(path) {
    const response = await fetch(path, { cache: 'no-store' });
    if (!response.ok) throw new Error(`${path} ${response.status}`);
    return response.json();
  }

  function renderCurrent(cycle, missionData) {
    const currentId = cycle.cycle.current_mission;
    const mission = missionData.missions.find((item) => item.id === currentId);
    if (!mission) throw new Error(`current mission not found: ${currentId}`);

    const cycleMission = cycle.missions[currentId] || {};
    const gate = cycle.gate_display[mission.current_gate] || {};
    const stateLabel = cycle.state_labels[cycleMission.state] || cycleMission.state || '진행 중';

    $('#beginner-cycle-title').textContent = cycle.cycle.title;
    $('#beginner-message').textContent = cycle.cycle.beginner_message;
    $('#beginner-current-id').textContent = mission.id;
    $('#beginner-current-title').textContent = mission.title;
    $('#beginner-current-state').textContent = stateLabel;
    $('#beginner-current-state').classList.add(stateClass(cycleMission.state));
    $('#beginner-current-step').textContent = `${gate.step || 1}단계 · ${gate.title || '미션 이해하기'}`;
    $('#beginner-next-action').textContent = cycleMission.next_action || gate.action || '현재 단계부터 하나씩 진행합니다.';
    $('#beginner-why').textContent = gate.why || '현재 단계의 목적을 확인합니다.';
    $('#beginner-completion').textContent = gate.completion || '완료 기준을 확인합니다.';
    $('#beginner-help').textContent = cycleMission.help || '막히면 현재 단계의 쉬운 설명과 정상 결과부터 확인합니다.';

    const continueButton = $('#beginner-continue');
    continueButton.href = mission.repo;
    continueButton.textContent = `${mission.id} 시작하기`;

    const step = Number(gate.step || 1);
    $('#beginner-current-step-metric').textContent = `${step} / 8`;
    $('#beginner-current-mission-metric').textContent = currentId;
    $('#beginner-clear-count').textContent = `${cycle.summary.clear_count} / ${cycle.summary.total_missions}`;
    $('#beginner-growth-stage').textContent = '기초 미션 진행';

    return mission;
  }

  function renderSteps(cycle, missionData, mission) {
    const grid = $('#beginner-step-grid');
    const order = missionData.gate_order || GATE_ORDER;
    const completed = gateProgress(mission, order);
    grid.innerHTML = '';

    order.forEach((gateId, index) => {
      const meta = cycle.gate_display[gateId] || {};
      const status = mission.gates?.[gateId] || 'TODO';
      const isCurrent = mission.current_gate === gateId && mission.status !== 'PASS';
      const card = document.createElement('article');
      card.className = 'beginner-step';
      if (status === 'PASS') card.classList.add('beginner-step-done');
      if (isCurrent) card.classList.add('beginner-step-current');

      const marker = status === 'PASS' ? '✓' : String(index + 1);
      card.innerHTML = `
        <span class="beginner-step-number">${marker} · ${gateStatusText(status, isCurrent)}</span>
        <strong>${meta.title || gateId}</strong>
        <small>${isCurrent ? (meta.action || '') : (meta.short || '')}</small>
      `;
      grid.appendChild(card);
    });

    const percent = Math.round((completed / order.length) * 100);
    $('#beginner-step-progress-label').textContent = `${completed} / ${order.length} 단계 완료`;
    $('#beginner-step-progress-fill').style.width = `${percent}%`;
  }

  function renderJourney(missionData, cycle) {
    const grid = $('#beginner-journey');
    const currentId = cycle.cycle.current_mission;
    const currentMission = missionData.missions.find((mission) => mission.id === currentId);
    grid.innerHTML = '';

    missionData.domains.forEach((domain) => {
      const missions = missionData.missions.filter((mission) => mission.domain_id === domain.id);
      const clearCount = missions.filter((mission) => cycle.missions[mission.id]?.state === 'CLEAR').length;
      const hasCurrent = currentMission?.domain_id === domain.id;
      const card = document.createElement('article');
      card.className = 'beginner-journey-card';
      if (hasCurrent) card.classList.add('beginner-step-current');
      card.innerHTML = `
        <strong>${domain.id} · ${domain.name}</strong>
        <span>${hasCurrent ? '지금 여기에서 시작합니다.' : `${clearCount}/${missions.length} 미션 완료`}</span>
      `;
      grid.appendChild(card);
    });
  }

  function renderMissionList(missionData, cycle) {
    const grid = $('#beginner-mission-list');
    grid.innerHTML = '';

    missionData.missions.forEach((mission) => {
      const state = cycle.missions[mission.id] || { state: 'NOT_STARTED' };
      const label = cycle.state_labels[state.state] || state.state;
      const isCurrent = mission.id === cycle.cycle.current_mission;
      let completed = 0;
      if (state.state === 'CLEAR') completed = 8;
      else if (isCurrent) completed = gateProgress(mission, GATE_ORDER);
      const percent = Math.round((completed / 8) * 100);
      const previous = state.previous_result ? `이전 수행 기록: ${state.previous_result}` : '';
      const card = document.createElement('article');
      card.className = `beginner-mission-card ${stateClass(state.state)}`;
      card.innerHTML = `
        <header>
          <div><strong>${mission.id}</strong><p>${mission.title}</p></div>
          <span class="beginner-chip">${label}</span>
        </header>
        <div class="beginner-progress-track" aria-label="${mission.id} 새 도전 단계 진행률">
          <div class="beginner-progress-fill" style="width:${percent}%"></div>
        </div>
        <small>새 도전 ${completed}/8 단계${previous ? ` · ${previous}` : ''}</small>
      `;
      grid.appendChild(card);
    });
  }

  function bindHelp() {
    const toggle = (buttonSelector, boxSelector) => {
      const button = $(buttonSelector);
      const box = $(boxSelector);
      button?.addEventListener('click', () => {
        const nextHidden = !box.hidden;
        box.hidden = nextHidden;
        button.setAttribute('aria-expanded', String(!nextHidden));
      });
    };
    toggle('#beginner-help-button', '#beginner-help-box');
    toggle('#beginner-stuck-button', '#beginner-stuck-box');
  }

  async function init() {
    try {
      const [cycle, missionData] = await Promise.all([
        loadJson('./data/cycle.json'),
        loadJson('./data/missions.json'),
      ]);
      const mission = renderCurrent(cycle, missionData);
      renderSteps(cycle, missionData, mission);
      renderJourney(missionData, cycle);
      renderMissionList(missionData, cycle);
      bindHelp();
      document.documentElement.dataset.beginnerDashboard = 'ready';
    } catch (error) {
      console.error('Beginner dashboard failed to load', error);
      const message = $('#beginner-load-error');
      if (message) {
        message.hidden = false;
        message.textContent = '학습 현황을 불러오지 못했습니다. 잠시 후 다시 확인해 주세요.';
      }
    }
  }

  init();
})();
