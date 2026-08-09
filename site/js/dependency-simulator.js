(() => {
  const root = document.querySelector('#dependency-simulator');
  if (!root) return;

  const graph = {
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

  const stages = [
    {
      id: 'A',
      title: 'Wave A · 독립 시작',
      note: 'G2 BUILD 바로 시작 가능',
      missions: ['B1-1', 'B1-2', 'B2-1', 'B2-2', 'B3-1', 'B3-2', 'B4-1', 'B5-1', 'B6-1', 'B6-2'],
    },
    {
      id: 'B',
      title: 'Wave B · 1차 후행',
      note: '선행 결과 확인',
      missions: ['B4-2', 'B5-2'],
    },
    {
      id: 'C',
      title: 'Wave C · 2차 후행',
      note: 'Backend 확장',
      missions: ['B5-3'],
    },
    {
      id: 'D',
      title: 'Wave D · 통합',
      note: 'B5/B6 결과 결합',
      missions: ['B7-1'],
    },
    {
      id: 'E',
      title: 'Wave E · 고도화',
      note: '최종 후행',
      missions: ['B7-2'],
    },
  ];

  const titleFallback = {
    'B1-1': '시스템 관제 자동화',
    'B1-2': 'Linux 장애 분석',
    'B2-1': 'Python 용돈 기입장',
    'B2-2': 'Git Team Collaboration',
    'B3-1': 'Mini Redis',
    'B3-2': 'Mini Git',
    'B4-1': 'HTML/CSS/JS Portfolio',
    'B4-2': 'React SPA',
    'B5-1': 'Database Design',
    'B5-2': 'FastAPI SSR CRUD',
    'B5-3': 'FastAPI Auth Service',
    'B6-1': 'Cloud Deployment',
    'B6-2': 'AI Git Commit/PR Assistant',
    'B7-1': 'Web AI Chatbot',
    'B7-2': 'Advanced AI Chatbot',
  };

  const state = Object.fromEntries(Object.keys(graph).map(id => [id, 'LOCKED']));
  const titleMap = {...titleFallback};

  const grid = root.querySelector('#dependency-grid');
  const edgeSvg = root.querySelector('#dependency-edges');
  const summary = root.querySelector('#dependency-summary');
  const stepButton = root.querySelector('#dependency-step');
  const resetButton = root.querySelector('#dependency-reset');

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
  }

  function recomputeStates() {
    Object.keys(graph).forEach(id => {
      if (state[id] === 'DONE') return;
      const deps = graph[id];
      state[id] = deps.every(dep => state[dep] === 'DONE') ? 'READY' : 'LOCKED';
    });
  }

  function statusLabel(value) {
    if (value === 'DONE') return 'DONE';
    if (value === 'READY') return 'READY';
    return 'LOCKED';
  }

  function nodeMarkup(id) {
    const deps = graph[id];
    const depLabel = deps.length ? deps.join(' + ') : '없음';
    const current = state[id];
    const disabled = current !== 'READY' ? 'disabled' : '';
    const hint = current === 'READY' ? '클릭하면 완료 처리' : current === 'DONE' ? '완료됨' : `대기: ${depLabel}`;

    return `
      <button
        class="dependency-node dependency-node-${current.toLowerCase()}"
        type="button"
        data-mission="${escapeHtml(id)}"
        ${disabled}
        aria-label="${escapeHtml(id)} ${escapeHtml(titleMap[id])}: ${escapeHtml(hint)}"
      >
        <span class="dependency-node-id">
          <span>${escapeHtml(id)}</span>
          <span class="dependency-node-status">${statusLabel(current)}</span>
        </span>
        <span class="dependency-node-title">${escapeHtml(titleMap[id])}</span>
        <span class="dependency-node-deps"><strong>선행:</strong> ${escapeHtml(depLabel)}</span>
      </button>
    `;
  }

  function renderGrid() {
    grid.innerHTML = stages.map(stage => `
      <section class="dependency-stage" data-stage="${stage.id}">
        <div class="dependency-stage-header">
          <strong>${escapeHtml(stage.title)}</strong>
          <span>${escapeHtml(stage.note)}</span>
        </div>
        <div class="dependency-node-list">
          ${stage.missions.map(nodeMarkup).join('')}
        </div>
      </section>
    `).join('');

    grid.querySelectorAll('.dependency-node').forEach(button => {
      button.addEventListener('click', () => {
        const id = button.dataset.mission;
        if (state[id] !== 'READY') return;
        state[id] = 'DONE';
        recomputeStates();
        render();
      });
    });
  }

  function renderSummary() {
    const values = Object.values(state);
    const done = values.filter(value => value === 'DONE').length;
    const ready = values.filter(value => value === 'READY').length;
    const locked = values.filter(value => value === 'LOCKED').length;
    summary.innerHTML = `
      <strong>${done}/${values.length} 완료</strong>
      <span>READY ${ready}</span>
      <span>LOCKED ${locked}</span>
    `;
    stepButton.disabled = ready === 0;
  }

  function edgeState(from, to) {
    if (state[from] === 'DONE' && state[to] === 'DONE') return 'dependency-edge-done';
    if (state[from] === 'DONE' && state[to] === 'READY') return 'dependency-edge-active';
    return '';
  }

  function drawEdges() {
    if (!edgeSvg || window.matchMedia('(max-width: 768px)').matches) {
      if (edgeSvg) edgeSvg.innerHTML = '';
      return;
    }

    const canvas = root.querySelector('.dependency-canvas');
    if (!canvas) return;
    const canvasRect = canvas.getBoundingClientRect();
    const width = Math.max(canvas.scrollWidth, canvas.clientWidth);
    const height = Math.max(grid.scrollHeight, grid.clientHeight);

    edgeSvg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    edgeSvg.setAttribute('width', width);
    edgeSvg.setAttribute('height', height);

    const paths = [];
    Object.entries(graph).forEach(([to, deps]) => {
      deps.forEach(from => {
        const fromEl = grid.querySelector(`[data-mission="${from}"]`);
        const toEl = grid.querySelector(`[data-mission="${to}"]`);
        if (!fromEl || !toEl) return;

        const a = fromEl.getBoundingClientRect();
        const b = toEl.getBoundingClientRect();
        const x1 = a.right - canvasRect.left + canvas.scrollLeft;
        const y1 = a.top + (a.height / 2) - canvasRect.top;
        const x2 = b.left - canvasRect.left + canvas.scrollLeft;
        const y2 = b.top + (b.height / 2) - canvasRect.top;
        const bend = Math.max(34, (x2 - x1) * .45);
        const path = `M ${x1} ${y1} C ${x1 + bend} ${y1}, ${x2 - bend} ${y2}, ${x2} ${y2}`;
        paths.push(`<path class="dependency-edge ${edgeState(from, to)}" d="${path}" marker-end="url(#dependency-arrow)" />`);
      });
    });

    edgeSvg.innerHTML = `
      <defs>
        <marker id="dependency-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path class="dependency-edge-arrow" d="M 0 0 L 10 5 L 0 10 z"></path>
        </marker>
      </defs>
      ${paths.join('')}
    `;
  }

  function render() {
    renderGrid();
    renderSummary();
    requestAnimationFrame(drawEdges);
  }

  function reset() {
    Object.keys(state).forEach(id => { state[id] = 'LOCKED'; });
    recomputeStates();
    render();
  }

  function advanceOneWave() {
    const readyNow = Object.keys(state).filter(id => state[id] === 'READY');
    readyNow.forEach(id => { state[id] = 'DONE'; });
    recomputeStates();
    render();
  }

  async function loadMissionTitles() {
    try {
      const response = await fetch('./data/missions.json', {cache: 'no-store'});
      if (!response.ok) return;
      const data = await response.json();
      (data.missions || []).forEach(mission => {
        if (!titleMap[mission.id]) return;
        titleMap[mission.id] = mission.title || mission.title_en || titleMap[mission.id];
      });
      render();
    } catch (error) {
      console.warn('Dependency simulator could not load mission titles', error);
    }
  }

  stepButton.addEventListener('click', advanceOneWave);
  resetButton.addEventListener('click', reset);
  window.addEventListener('resize', () => requestAnimationFrame(drawEdges));

  reset();
  loadMissionTitles();
})();
