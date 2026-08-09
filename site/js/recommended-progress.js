(() => {
  const root = document.querySelector('#recommended-progress');
  if (!root) return;

  const LIVE_CACHE_KEY = 'codyssey-basic-live-telemetry-v1';
  const dependencies = {
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
  const activeStatuses = new Set(['PARTIAL', 'WORKING', 'NEEDS-RUNTIME', 'IMPLEMENTED', 'TESTED']);
  let workcellData = null;

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>'"]/g, char => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;',
    }[char]));
  }

  function readCachedTelemetry() {
    try {
      const raw = localStorage.getItem(LIVE_CACHE_KEY);
      if (!raw) return {statuses: {}, polledAt: null};
      const parsed = JSON.parse(raw);
      return {
        statuses: parsed?.statuses && typeof parsed.statuses === 'object' ? parsed.statuses : {},
        polledAt: parsed?.polled_at || null,
      };
    } catch (error) {
      console.warn('Unable to read cached recommendation telemetry', error);
      return {statuses: {}, polledAt: null};
    }
  }

  function formatTimestamp(value) {
    if (!value) return '수동 Live 갱신 기록 없음';
    const date = new Date(Number(value) || value);
    if (Number.isNaN(date.getTime())) return '수동 Live 갱신 시각 확인 불가';
    return new Intl.DateTimeFormat('ko-KR', {
      month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
    }).format(date);
  }

  function effectiveStatus(cell, telemetry) {
    return String(telemetry[cell.mission]?.workcell_status || cell.workcell_status || 'UNKNOWN').toUpperCase();
  }

  function gateScore(value) {
    const status = String(value || 'TODO').toUpperCase();
    if (status === 'PASS' || status === 'COMPLETE') return 1;
    if (['PARTIAL', 'IMPLEMENTED', 'TESTED', 'NEEDS-RUNTIME', 'WORKING'].includes(status)) return .5;
    return 0;
  }

  function estimatedCellProgress(cell, telemetry) {
    const missionTelemetry = telemetry[cell.mission];
    if (missionTelemetry?.gates) {
      const gates = Object.values(missionTelemetry.gates);
      if (gates.length) return Math.round((gates.reduce((sum, value) => sum + gateScore(value), 0) / gates.length) * 100);
    }
    const status = effectiveStatus(cell, telemetry);
    if (status === 'COMPLETE') return 100;
    if (activeStatuses.has(status)) return 50;
    return 0;
  }

  function missionChips(cells) {
    if (!cells.length) return '<span class="recommended-empty">해당 미션 없음</span>';
    return cells.map(cell => `
      <span class="recommended-mission-chip" title="${escapeHtml(cell.title || cell.title_en || cell.mission)}">${escapeHtml(cell.mission)}</span>
    `).join('');
  }

  function ids(cells) {
    return cells.map(cell => cell.mission).join(', ');
  }

  function render() {
    if (!workcellData) return;
    const cells = workcellData.workcells || [];
    const cache = readCachedTelemetry();
    const telemetry = cache.statuses;
    const statusMap = Object.fromEntries(cells.map(cell => [cell.mission, effectiveStatus(cell, telemetry)]));

    const complete = cells.filter(cell => statusMap[cell.mission] === 'COMPLETE' || cell.integration_status === 'INTEGRATED');
    const active = cells.filter(cell => activeStatuses.has(statusMap[cell.mission]));
    const dependenciesSatisfied = cell => (dependencies[cell.mission] || []).every(dep => {
      const depCell = cells.find(item => item.mission === dep);
      return statusMap[dep] === 'COMPLETE' || depCell?.integration_status === 'INTEGRATED';
    });
    const ready = cells.filter(cell => {
      const status = statusMap[cell.mission];
      if (complete.includes(cell) || activeStatuses.has(status)) return false;
      if (status === 'WAITING-UPSTREAM' || status === 'BLOCKED') return false;
      return dependenciesSatisfied(cell);
    });
    const used = new Set([...complete, ...active, ...ready].map(cell => cell.mission));
    const waiting = cells.filter(cell => !used.has(cell.mission));
    const nextUnlock = waiting.filter(cell => {
      const unmet = (dependencies[cell.mission] || []).filter(dep => {
        const depCell = cells.find(item => item.mission === dep);
        return statusMap[dep] !== 'COMPLETE' && depCell?.integration_status !== 'INTEGRATED';
      });
      return unmet.length > 0 && unmet.every(dep => activeStatuses.has(statusMap[dep]));
    });

    const averageLive = cells.length
      ? Math.round(cells.reduce((sum, cell) => sum + estimatedCellProgress(cell, telemetry), 0) / cells.length)
      : 0;
    const integrated = cells.filter(cell => cell.integration_status === 'INTEGRATED').length;
    const integratedPercent = cells.length ? Math.round((integrated / cells.length) * 100) : 0;

    let recommendation = '';
    if (complete.length === cells.length && cells.length > 0) {
      recommendation = '✅ 모든 Workcell이 완료 상태입니다. 남은 공식 Serial Integration과 증거 정합성을 확인하세요.';
    } else if (active.length) {
      recommendation = `🛠 ${ids(active)} 마무리를 우선하고`;
      recommendation += nextUnlock.length ? ` → 🔓 ${ids(nextUnlock)} 해제를 확인하세요.` : '.';
      if (ready.length) recommendation += ` 동시에 🎯 ${ids(ready)}는 병렬 진행할 수 있습니다.`;
    } else if (ready.length) {
      recommendation = `🎯 현재 ${ids(ready)}를 병렬 진행하는 것이 권장됩니다.`;
    } else {
      recommendation = '⏳ 후행 미션은 선행 Workcell 완료 확인이 필요합니다. 수동 Live 상태를 갱신해 최신 상태를 확인하세요.';
    }

    const sourceText = Object.keys(telemetry).length
      ? `저장된 수동 Live telemetry 기준 · ${formatTimestamp(cache.polledAt)}`
      : 'Active Wave ledger 기준 · 수동 Live 갱신 전';

    root.innerHTML = `
      <div class="recommended-progress-header">
        <div>
          <span class="recommended-progress-kicker">🧭 CURRENT · RECOMMENDED</span>
          <h3>현재 권장 진행 흐름</h3>
        </div>
        <span class="recommended-progress-source">${escapeHtml(sourceText)}</span>
      </div>

      <div class="recommended-progress-bars">
        <div class="recommended-meter">
          <div class="recommended-meter-meta"><span>📊 Live 추정 진행률</span><strong>${averageLive}% · COMPLETE ${complete.length}/${cells.length}</strong></div>
          <div class="recommended-meter-track" role="progressbar" aria-label="Live estimated Workcell progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${averageLive}"><span class="recommended-meter-fill" style="width:${averageLive}%"></span></div>
        </div>
        <div class="recommended-meter">
          <div class="recommended-meter-meta"><span>🏛 Official Serial Integration</span><strong>${integratedPercent}% · ${integrated}/${cells.length}</strong></div>
          <div class="recommended-meter-track" role="progressbar" aria-label="Official serial integration progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${integratedPercent}"><span class="recommended-meter-fill recommended-meter-fill-official" style="width:${integratedPercent}%"></span></div>
        </div>
      </div>

      <div class="recommended-flow" aria-label="Current recommended Workcell flow">
        <div class="recommended-step recommended-step-complete"><div class="recommended-step-title"><span class="recommended-icon">✅</span><span>완료</span></div><div class="recommended-mission-list">${missionChips(complete)}</div></div>
        <div class="recommended-arrow" aria-hidden="true">→</div>
        <div class="recommended-step recommended-step-active"><div class="recommended-step-title"><span class="recommended-icon">🛠</span><span>진행 중 · 마무리 우선</span></div><div class="recommended-mission-list">${missionChips(active)}</div></div>
        <div class="recommended-arrow" aria-hidden="true">→</div>
        <div class="recommended-step recommended-step-ready"><div class="recommended-step-title"><span class="recommended-icon">🎯</span><span>지금 병렬 진행 권장</span></div><div class="recommended-mission-list">${missionChips(ready)}</div></div>
        <div class="recommended-arrow" aria-hidden="true">→</div>
        <div class="recommended-step recommended-step-waiting"><div class="recommended-step-title"><span class="recommended-icon">⏳</span><span>선행 완료 대기</span></div><div class="recommended-mission-list">${missionChips(waiting)}</div>${nextUnlock.length ? `<div class="recommended-unlock">🔓 다음 해제 예상: ${escapeHtml(ids(nextUnlock))}</div>` : ''}</div>
      </div>

      <p class="recommended-callout"><strong>권장:</strong> ${escapeHtml(recommendation)}</p>
      <p class="recommended-note">※ Live와 Official은 하나의 Mission Control 화면에 함께 표시하지만 데이터 의미는 분리합니다. 권장 흐름은 공식 prerequisite 또는 PASS를 새로 판정하지 않습니다.</p>
    `;
  }

  async function loadWorkcells() {
    try {
      const response = await fetch('./data/workcells.json', {cache: 'no-store'});
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      workcellData = await response.json();
      render();
    } catch (error) {
      root.innerHTML = `<p class="recommended-empty">권장 진행 데이터를 불러오지 못했습니다: ${escapeHtml(error.message)}</p>`;
    }
  }

  window.addEventListener('codyssey:mission-control-updated', render);
  window.addEventListener('storage', event => {
    if (event.key === LIVE_CACHE_KEY) render();
  });

  loadWorkcells();
})();
