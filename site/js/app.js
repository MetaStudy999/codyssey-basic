const domains=[['B1','Linux & OS'],['B2','Python & Git'],['B3','Data Structures & Algorithms'],['B4','Web & Front-end'],['B5','Database & Back-end'],['B6','Cloud & AI API'],['B7','Term Project']];
const missions=[
['B1-1','System Monitor'],['B1-2','Linux Troubleshooting'],['B2-1','Budget CLI'],['B2-2','Git Collaboration'],['B3-1','Mini Redis'],['B3-2','Mini Git'],['B4-1','Portfolio'],['B4-2','React SPA'],['B5-1','SQL Database'],['B5-2','FastAPI CRUD'],['B5-3','Auth & Relations'],['B6-1','Cloud Deployment'],['B6-2','AI Git Assistant'],['B7-1','Web AI Chatbot'],['B7-2','Advanced AI Chatbot']
];
document.querySelector('#domain-grid').innerHTML=domains.map(([id,name])=>`<article class="card"><span class="badge">${id}</span><h3>${name}</h3><p class="muted">Curriculum · Mission · Resources · Expert Path</p></article>`).join('');
document.querySelector('#mission-grid').innerHTML=missions.map(([id,name])=>`<article class="card"><span class="badge">TODO</span><h3>${id} · ${name}</h3><p class="muted">Build · Test · Runtime · Evidence · Learn</p></article>`).join('');
