const growthStageGrid = document.querySelector('#growth-stage-grid');
const growthRegistrySummary = document.querySelector('#growth-registry-summary');
const growthSkillGrid = document.querySelector('#growth-skill-grid');

function growthEscapeHtml(value) {
  return String(value ?? '').replace(/[&<>'"]/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  }[char]));
}

function growthStatusClass(value) {
  return String(value || 'unknown').toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

function renderGrowthStages(growth) {
  if (!growthStageGrid) return;
  const stages = [...(growth.growth_stages || [])].sort((a, b) => (a.order || 999) - (b.order || 999));
  growthStageGrid.innerHTML = stages.map(stage => {
    const status = growth.stage_activation?.[stage.id]?.status || 'PLANNED';
    return `
      <article class="control-card growth-stage-card growth-stage-${growthStatusClass(status)}">
        <div class="card-topline">
          <span class="badge">${growthEscapeHtml(stage.id)}</span>
          <span class="status-chip status-${growthStatusClass(status)}">${growthEscapeHtml(status)}</span>
        </div>
        <h3>${growthEscapeHtml(stage.name_ko || stage.id)}</h3>
        <p>${growthEscapeHtml(stage.purpose || '')}</p>
        <p class="muted"><strong>질문:</strong> ${growthEscapeHtml(stage.key_question || '')}</p>
      </article>
    `;
  }).join('');
}

function countBy(items, key) {
  return items.reduce((acc, item) => {
    const value = item?.[key] || 'UNKNOWN';
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
}

function summaryText(counts) {
  const entries = Object.entries(counts);
  if (!entries.length) return '등록 없음';
  return entries.map(([key, value]) => `${key} ${value}`).join(' · ');
}

function renderRegistrySummary(activities, projects, opportunities) {
  if (!growthRegistrySummary) return;
  const activityCounts = countBy(activities.activities || [], 'status');
  const projectCounts = countBy(projects.projects || [], 'status');
  const opportunityCounts = countBy(opportunities.opportunities || [], 'availability_status');
  growthRegistrySummary.innerHTML = `
    <article class="control-card">
      <span class="control-label">Activities</span>
      <strong>${growthEscapeHtml(summaryText(activityCounts))}</strong>
      <p>Study · Review · Debugging · Hackathon 등 실제 수행 상태</p>
    </article>
    <article class="control-card">
      <span class="control-label">Projects</span>
      <strong>${growthEscapeHtml(summaryText(projectCounts))}</strong>
      <p>Mission 결과물을 장기 Project Lineage로 추적</p>
    </article>
    <article class="control-card">
      <span class="control-label">Opportunities</span>
      <strong>${growthEscapeHtml(summaryText(opportunityCounts))}</strong>
      <p>외부 기회의 Availability와 사용자 Activity 상태를 분리</p>
    </article>
  `;
}

function renderSkills(skills) {
  if (!growthSkillGrid) return;
  const assessment = skills.current_assessment || {};
  growthSkillGrid.innerHTML = (skills.axes || []).map(axis => {
    const record = assessment[axis.id];
    const level = record?.level;
    const levelText = level === undefined ? 'UNASSESSED' : `L${level}`;
    return `
      <article class="card skill-card">
        <div class="card-topline">
          <span class="badge">${growthEscapeHtml(axis.id)}</span>
          <span class="gate">${growthEscapeHtml(levelText)}</span>
        </div>
        <h3>${growthEscapeHtml(axis.name_ko || axis.id)}</h3>
      </article>
    `;
  }).join('');
}

async function loadGrowthOsData() {
  const targets = [
    './data/growth.json',
    './data/skills.json',
    './data/activities.json',
    './data/projects.json',
    './data/opportunities.json',
  ];
  try {
    const responses = await Promise.all(targets.map(path => fetch(path, {cache: 'no-store'})));
    responses.forEach((response, index) => {
      if (!response.ok) throw new Error(`${targets[index]} HTTP ${response.status}`);
    });
    const [growth, skills, activities, projects, opportunities] = await Promise.all(responses.map(response => response.json()));
    renderGrowthStages(growth);
    renderRegistrySummary(activities, projects, opportunities);
    renderSkills(skills);
  } catch (error) {
    if (growthStageGrid) {
      growthStageGrid.innerHTML = `<article class="card"><h3>Growth OS data load error</h3><p class="muted">${growthEscapeHtml(error.message)}</p></article>`;
    }
    if (growthRegistrySummary) growthRegistrySummary.textContent = 'Growth Registry 데이터를 불러오지 못했습니다.';
  }
}

loadGrowthOsData();
