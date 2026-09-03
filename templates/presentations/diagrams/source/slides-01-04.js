const { pptx, C, safeOuterShadow, addTitle, card, pill, node, arrow, dotArrow, label, note, addSectionTag } = require('./common');

// 1 Cover
{
  const s = pptx.addSlide(); s.background={color:C.dark};
  s.addShape(pptx.ShapeType.rect,{x:0,y:0,w:13.333,h:7.5,fill:{color:C.dark},line:{color:C.dark}});
  s.addShape(pptx.ShapeType.ellipse,{x:8.45,y:0.35,w:4.3,h:4.3,fill:{color:C.blue,transparency:88},line:{color:C.blue,transparency:100}});
  s.addShape(pptx.ShapeType.ellipse,{x:9.75,y:2.1,w:2.6,h:2.6,fill:{color:C.teal,transparency:86},line:{color:C.teal,transparency:100}});
  const pts=[[9.0,1.3],[10.5,0.95],[11.85,1.65],[10.1,2.3],[11.4,2.75],[9.3,3.35],[10.9,4.0]];
  const links=[[0,1],[1,2],[0,3],[3,4],[3,5],[5,6],[4,6],[2,4]];
  for(const [a,b] of links) s.addShape(pptx.ShapeType.line,{x:pts[a][0],y:pts[a][1],w:pts[b][0]-pts[a][0],h:pts[b][1]-pts[a][1],line:{color:'4B9DFF',width:1.2,transparency:20}});
  pts.forEach((p,i)=>{s.addShape(pptx.ShapeType.ellipse,{x:p[0]-0.12,y:p[1]-0.12,w:0.24,h:0.24,fill:{color:i%2?C.teal:C.blue},line:{color:'FFFFFF',width:0.6}})});
  s.addText('CODYSSEY', {x:0.7,y:0.72,w:2.0,h:0.3,fontFace:'Noto Sans CJK KR',fontSize:10,bold:true,color:C.blue2,charSpacing:1.2,margin:0});
  s.addText('고급 기술 다이어그램\n마스터 라이브러리', {x:0.7,y:1.45,w:6.8,h:1.35,fontFace:'Noto Sans CJK KR',fontSize:31,bold:true,color:'FFFFFF',margin:0,breakLine:false,fit:'shrink'});
  s.addText('Technical Diagram Master Library', {x:0.72,y:2.95,w:5.5,h:0.4,fontFace:'Noto Sans CJK KR',fontSize:14,color:'BFD7F5',margin:0});
  s.addText('현재 15개 미션 평가 발표 · 학부 프로젝트 · 석박사 연구 · 학회 발표를 위한 편집 가능한 벡터 템플릿', {x:0.72,y:3.62,w:7.0,h:0.6,fontFace:'Noto Sans CJK KR',fontSize:11,color:'D9E5F2',margin:0,fit:'shrink'});
  ['Architecture','Sequence','ERD','Cloud','Research','Evidence'].forEach((t,i)=>pill(s,0.72+i*1.12,4.57,1.0,t,'FFFFFF',i<3?'163B5B':'1C4D65'));
  s.addText('v1.1 · current Mission ID map · 20 reusable layouts · editable PowerPoint vectors', {x:0.72,y:6.55,w:6.4,h:0.25,fontFace:'Noto Sans CJK KR',fontSize:8.6,color:'8FB4D9',margin:0});
}

// 2 Design language
{
  const s=pptx.addSlide('BASE'); addTitle(s,'다이어그램은 “예쁜 그림”이 아니라, 판단 흐름을 압축하는 시각 언어입니다','한 슬라이드 한 메시지 · 제목이 결론 · 색상은 역할을 갖고 · 선은 의미를 갖습니다','DESIGN LANGUAGE');
  addSectionTag(s,'01 PRINCIPLES');
  const xs=[0.58,3.22,5.86,8.50,11.14];
  const items=[
    ['1 MESSAGE','한 장에 하나의 판단','한 슬라이드가 두 가지 질문에 답하지 않게 분리합니다.',C.blue],
    ['CLEAR TITLE','제목이 결론','제목만 읽어도 발표 논리의 흐름이 이어지게 합니다.',C.teal],
    ['ROLE COLOR','색상은 역할','애플리케이션·데이터·외부·위험을 색상으로 구분합니다.',C.amber],
    ['FLOW LINE','선은 의미','실선=주 흐름, 점선=외부/선택, 화살표=방향입니다.',C.red],
    ['EVIDENCE','근거로 닫기','설계 다이어그램 뒤에는 검증·증빙이 연결되어야 합니다.',C.green]
  ];
  items.forEach((it,i)=>{card(s,xs[i],2.0,2.0,3.35,{line:it[3]}); pill(s,xs[i]+0.18,2.22,0.95,it[0],it[3]); s.addText(it[1],{x:xs[i]+0.18,y:2.78,w:1.62,h:0.58,fontFace:'Noto Sans CJK KR',fontSize:15,bold:true,color:C.ink,margin:0,fit:'shrink'}); s.addText(it[2],{x:xs[i]+0.18,y:3.55,w:1.62,h:1.15,fontFace:'Noto Sans CJK KR',fontSize:8.5,color:C.muted,margin:0,fit:'shrink'}); s.addShape(pptx.ShapeType.line,{x:xs[i]+0.18,y:4.95,w:1.45,h:0,line:{color:it[3],width:3}});});
  note(s,'권장 규칙: 제목 24~30pt · 본문 14~18pt · 노드 4~7개 · 텍스트보다 관계/흐름을 먼저 보이기');
}

// 3 Mission map
{
  const s=pptx.addSlide('BASE'); addTitle(s,'현재 B1~B7은 기술 성격에 따라 “주력 다이어그램”이 달라집니다','Mission ID는 CURRENT-MISSION-MAP 기준 · 미션 주제의 핵심 평가 질문에 맞춰 다이어그램을 선택합니다','MISSION MAP'); addSectionTag(s,'02 MAPPING');
  const cols=[0.58,2.55,4.52,6.49,8.46,10.43];
  ['영역','대표 미션','주력 1','주력 2','주력 3','평가 초점'].forEach((t,i)=>{s.addShape(pptx.ShapeType.roundRect,{x:cols[i],y:1.92,w:i===0?1.85:1.83,h:0.42,rectRadius:0.05,fill:{color:C.navy},line:{color:C.navy}});s.addText(t,{x:cols[i]+0.05,y:2.04,w:(i===0?1.75:1.73),h:0.14,fontFace:'Noto Sans CJK KR',fontSize:7.4,bold:true,color:'FFFFFF',align:'center',margin:0});});
  const rows=[
    ['Web / Front','B1','Event Flow','State','Before/After','상호작용·UX'],
    ['Python / Git','B2','Layered','Data Flow','Swimlane','구조·예외·협업'],
    ['Cloud / AI API','B3','Network','Boundary','Pipeline','배포·권한·실패'],
    ['Linux / OS','B4','Architecture','State','Troubleshoot','운영·보안·관제'],
    ['DS / Algo','B5','Structure','Algorithm','Complexity','연산·불변조건'],
    ['DB / Backend','B6','ERD','Sequence','Trust','관계·API·인가'],
    ['Term Project','B7','E2E','Research','Evidence','서비스 완성도']
  ];
  rows.forEach((r,ri)=>{const y=2.42+ri*0.54; const bg=ri%2?C.paper:'F3F6FA'; s.addShape(pptx.ShapeType.rect,{x:0.58,y,w:11.68,h:0.50,fill:{color:bg},line:{color:C.line,width:0.4}}); r.forEach((t,ci)=>s.addText(t,{x:cols[ci]+0.04,y:y+0.16,w:(ci===0?1.77:1.75),h:0.15,fontFace:'Noto Sans CJK KR',fontSize:7.5,bold:ci<2,color:ci===0?C.ink:C.text,align:ci===0?'left':'center',margin:0,fit:'shrink'}));});
  note(s,'실전 팁: 미션당 2~4개 주력 다이어그램만 사용하고, 나머지는 백업/질의응답(Q&A) 슬라이드로 둡니다.',C.teal,C.tealSoft);
}

// 4 System Architecture
{
  const s=pptx.addSlide('BASE'); addTitle(s,'시스템 아키텍처는 “컴포넌트 + 책임 + 경계”를 한 화면에 보여줍니다','B3·B6·B7의 기본형 · 단순 나열보다 계층과 책임을 먼저 드러냅니다','SYSTEM ARCHITECTURE'); addSectionTag(s,'03 ARCHITECTURE');
  const bands=[['CLIENT / USER',1.95,0.62,C.blueSoft,C.blue],['APPLICATION',2.83,1.28,'F1F6FB',C.navy2],['DATA / PLATFORM',4.44,1.15,C.tealSoft,C.teal],['EXTERNAL',5.68,0.72,C.amberSoft,C.amber]];
  bands.forEach(([t,y,h,fill,col])=>{s.addShape(pptx.ShapeType.roundRect,{x:0.7,y,w:11.94,h,rectRadius:0.08,fill:{color:fill},line:{color:fill}});s.addText(t,{x:0.92,y:y+0.12,w:1.1,h:0.16,fontFace:'Noto Sans CJK KR',fontSize:6.7,bold:true,color:col,margin:0});});
  node(s,2.0,2.03,1.72,0.72,'User','Browser / Mobile',C.blue,'U');
  node(s,4.1,2.03,1.92,0.72,'Frontend','UI / State / Event',C.blue,'FE');
  node(s,2.35,3.12,2.0,0.82,'API Layer','Route / Validation',C.navy2,'API');
  node(s,5.0,3.12,2.0,0.82,'Service','Business Logic',C.navy2,'SVC');
  node(s,7.65,3.12,2.0,0.82,'Auth','Identity / Policy',C.red,'AUTH');
  node(s,3.2,4.74,2.05,0.82,'Database','Persistent State',C.teal,'DB');
  node(s,6.15,4.74,2.05,0.82,'Object / Log','Files / Evidence',C.teal,'LOG');
  node(s,8.92,4.74,2.05,0.82,'Cache / Queue','Optional Scale',C.teal,'Q');
  node(s,4.65,5.78,2.10,0.64,'External AI API','LLM / Model',C.amber,'AI');
  node(s,7.3,5.78,2.10,0.64,'Cloud / IAM','Infra / Permission',C.amber,'☁');
  arrow(s,3.72,2.39,4.1,2.39); arrow(s,5.06,2.75,3.2,3.12,C.blue); arrow(s,4.35,3.53,5.0,3.53,C.navy2); arrow(s,7.0,3.53,7.65,3.53,C.navy2); arrow(s,6.0,3.94,4.22,4.74,C.teal); arrow(s,6.0,3.94,7.18,4.74,C.teal); dotArrow(s,6.1,3.95,5.65,5.78,C.amber); dotArrow(s,8.7,3.95,8.35,5.78,C.amber);
  label(s,10.95,2.9,1.25,'Trust Boundary',C.red,C.redSoft);
  note(s,'편집 포인트: 컴포넌트 이름보다 “책임”을 1줄로 명시하고, 외부 시스템과 보안 경계를 반드시 구분합니다.');
}