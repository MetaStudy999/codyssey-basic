const domainGrid = document.querySelector('#domain-grid');
const missionGrid = document.querySelector('#mission-grid');
const progressSummary = document.querySelector('#progress-summary');

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
}

function renderDomains(domains) {
  domainGrid.innerHTML = domains.map(domain => `
    <article class="card">
      <span class="badge">${escapeHtml(domain.id)}</span>
      <h3>${escapeHtml(domain.name_en)}</h3>
      <p class="muted">${escapeHtml(domain.name)}</p>
      <p class="muted">Curriculum · Mission · Resources · Expert Path</p>
    </article>
  `).join('');
}

function renderSummary(missions) {
  const pass = missions.filter(m => m.status === 'PASS').length;
  const tested = missions.filter(m => m.status === 'TESTED').length;
  const implemented = missions.filter(m => m.status === 'IMPLEMENTED').length;
  const runtime = missions.filter(m => m.status === 'NEEDS-RUNTIME').length;
  progressSummary.innerHTML = `
    <strong>${pass} / ${missions.length} PASS</strong>
    <span>IMPLEMENTED ${implemented}</span>
    <span>TESTED ${tested}</span>
    <span>NEEDS-RUNTIME ${runtime}</span>
  `;
}

function renderMissions(missions) {
  missionGrid.innerHTML = missions.map(mission => `
    <article class="card">
      <div class="card-topline">
        <span class="badge">${escapeHtml(mission.status)}</span>
        <span class="gate">${escapeHtml(mission.current_gate_label)}</span>
      </div>
      <h3>${escapeHtml(mission.id)} · ${escapeHtml(mission.title_en || mission.title)}</h3>
      <p class="muted">${escapeHtml(mission.domain_name_en)} · Learning: ${escapeHtml(mission.learning)}</p>
      <p class="muted">Build · Test · Runtime · Evidence · Learn</p>
      <a class="card-link" href="${escapeHtml(mission.repo)}">Repository →</a>
    </article>
  `).join('');
}

async function loadProgress() {
  try {
    const response = await fetch('./data/missions.json', {cache: 'no-store'});
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    renderDomains(data.domains);
    renderSummary(data.missions);
    renderMissions(data.missions);
  } catch (error) {
    progressSummary.textContent = '진행 데이터를 불러오지 못했습니다.';
    missionGrid.innerHTML = `<article class="card"><h3>Data load error</h3><p class="muted">${escapeHtml(error.message)}</p></article>`;
  }
}

loadProgress();
