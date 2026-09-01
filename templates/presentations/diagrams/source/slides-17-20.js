const { pptx, C, safeOuterShadow, addTitle, card, pill, node, arrow, dotArrow, label, note, addSectionTag } = require('./common');

// 17 Experimental design
{
  const s=pptx.addSlide('BASE'); addTitle(s,'실험 설계는 비교 대상·측정 지표·통제 조건을 분리해 보여줍니다','성능·정확도·사용성·복구시간 등 “좋아졌다”는 주장을 검증 가능한 형태로 바꿉니다','EXPERIMENT DESIGN'); addSectionTag(s,'16 EXPERIMENT');
  card(s,0.75,2.05,3.25,3.9,{line:C.blue}); pill(s,0.98,2.28,1.05,'BASELINE',C.blue); s.addText('기존 방식', {x:0.98,y:2.90,w:2.55,h:0.35,fontFace:'Noto Sans CJK KR',fontSize:15,bold:true,color:C.ink,margin:0}); s.addText('• 수동 점검\n• 단일 파일 구조\n• 무제한 검색', {x:0.98,y:3.45,w:2.3,h:1.15,fontFace:'Noto Sans CJK KR',fontSize:9.2,color:C.text,breakLine:false,margin:0,fit:'shrink'});
  card(s,5.04,2.05,3.25,3.9,{line:C.teal}); pill(s,5.27,2.28,1.25,'PROPOSED',C.teal); s.addText('개선 방식', {x:5.27,y:2.90,w:2.55,h:0.35,fontFace:'Noto Sans CJK KR',fontSize:15,bold:true,color:C.ink,margin:0}); s.addText('• 자동화 모니터링\n• 계층 분리\n• 인덱스 탐색', {x:5.27,y:3.45,w:2.3,h:1.15,fontFace:'Noto Sans CJK KR',fontSize:9.2,color:C.text,breakLine:false,margin:0,fit:'shrink'});
  card(s,9.33,2.05,3.25,3.9,{line:C.amber}); pill(s,9.56,2.28,1.0,'METRICS',C.amber); s.addText('평가 지표', {x:9.56,y:2.90,w:2.55,h:0.35,fontFace:'Noto Sans CJK KR',fontSize:15,bold:true,color:C.ink,margin:0}); const mets=[['Time','sec'],['Error','count'],['Coverage','%'],['Memory','MB']]; mets.forEach((m,i)=>{label(s,9.58,3.48+i*0.48,1.08,m[0],C.navy2,'F6F8FB');s.addText(m[1],{x:10.85,y:3.55+i*0.48,w:0.8,h:0.17,fontFace:'Noto Sans CJK KR',fontSize:7.6,color:C.muted,align:'right',margin:0});});
  arrow(s,4.0,4.0,5.04,4.0,C.blue,1.7); arrow(s,8.29,4.0,9.33,4.0,C.teal,1.7);
  note(s,'실험 슬라이드에는 데이터 수·반복 횟수·통제 조건을 작은 캡션으로 적어 재현 가능성(Reproducibility)을 높입니다.',C.amber,C.amberSoft);
}

// 18 E2E service
{
  const s=pptx.addSlide('BASE'); addTitle(s,'End-to-End 서비스 다이어그램은 사용자 행동과 내부 시스템 흐름을 한 번에 연결합니다','B7 Term Project에서 “서비스가 실제로 어떻게 완성되는가”를 설명하는 대표 슬라이드입니다','END-TO-END'); addSectionTag(s,'17 SERVICE FLOW');
  const arr=[['USER','1. 요청',C.blue],['WEB','2. UI / Auth',C.navy2],['API','3. Validate',C.purple],['AI','4. Inference',C.amber],['DB','5. Persist',C.teal],['RESULT','6. Response',C.green]];
  arr.forEach((a,i)=>{const x=0.72+i*2.05; node(s,x,3.00,1.62,1.05,a[0],a[1],a[2],String(i+1)); if(i<arr.length-1)arrow(s,x+1.62,3.52,x+2.05,3.52,a[2],1.8);});
  s.addShape(pptx.ShapeType.roundRect,{x:1.1,y:4.85,w:11.0,h:0.82,rectRadius:0.08,fill:{color:'F4F7FA'},line:{color:C.line,width:0.8}});
  pill(s,1.30,5.10,0.9,'EVIDENCE',C.green); s.addText('URL / HTTP 200', {x:2.45,y:5.15,w:1.35,h:0.17,fontFace:'Noto Sans CJK KR',fontSize:7.6,color:C.text,margin:0}); s.addText('Auth owner check', {x:4.25,y:5.15,w:1.42,h:0.17,fontFace:'Noto Sans CJK KR',fontSize:7.6,color:C.text,margin:0}); s.addText('AI response log', {x:6.05,y:5.15,w:1.42,h:0.17,fontFace:'Noto Sans CJK KR',fontSize:7.6,color:C.text,margin:0}); s.addText('DB row / ERD', {x:7.85,y:5.15,w:1.42,h:0.17,fontFace:'Noto Sans CJK KR',fontSize:7.6,color:C.text,margin:0}); s.addText('Deployed URL', {x:9.65,y:5.15,w:1.42,h:0.17,fontFace:'Noto Sans CJK KR',fontSize:7.6,color:C.text,margin:0});
  note(s,'서비스 흐름 아래에 실제 증빙 포인트를 나란히 두면 “기능 설명”과 “검증 결과”가 한 장에서 연결됩니다.',C.green,C.greenSoft);
}

// 19 Style guide
{
  const s=pptx.addSlide('BASE'); addTitle(s,'다이어그램 스타일 가이드는 모든 미션 발표의 시각 문법을 고정합니다','색·선·경계·노드·라벨의 의미를 바꾸지 않아야 발표 전체가 하나의 시스템처럼 보입니다','STYLE GUIDE'); addSectionTag(s,'18 STYLE');
  const cs=[['Application',C.blue,C.blueSoft],['Platform',C.navy2,'EDF3F8'],['Data',C.teal,C.tealSoft],['External',C.amber,C.amberSoft],['Failure / Security',C.red,C.redSoft],['Success / Evidence',C.green,C.greenSoft]];
  cs.forEach((v,i)=>{const x=0.74+(i%3)*3.95, y=2.0+Math.floor(i/3)*1.0; s.addShape(pptx.ShapeType.roundRect,{x,y,w:3.45,h:0.72,rectRadius:0.07,fill:{color:v[2]},line:{color:v[0]==='Platform'?C.navy2:v[1],width:0.8}});s.addShape(pptx.ShapeType.roundRect,{x:x+0.18,y:y+0.16,w:0.40,h:0.40,rectRadius:0.06,fill:{color:v[1]},line:{color:v[1]}});s.addText(v[0],{x:x+0.75,y:y+0.24,w:2.4,h:0.18,fontFace:'Noto Sans CJK KR',fontSize:8.5,bold:true,color:C.ink,margin:0});});
  card(s,0.74,4.18,3.45,1.38,{shadow:false}); pill(s,0.96,4.40,0.80,'LINES',C.blue); arrow(s,1.0,5.20,2.2,5.20,C.blue,1.8); s.addText('실선 = 주 흐름',{x:2.36,y:5.10,w:1.35,h:0.20,fontFace:'Noto Sans CJK KR',fontSize:7.3,color:C.text,margin:0}); dotArrow(s,1.0,5.50,2.2,5.50,C.muted); s.addText('점선 = 외부 / 선택',{x:2.36,y:5.40,w:1.35,h:0.20,fontFace:'Noto Sans CJK KR',fontSize:7.3,color:C.text,margin:0});
  card(s,4.54,4.18,3.45,1.38,{shadow:false}); pill(s,4.76,4.40,1.00,'BOUNDARY',C.red); s.addShape(pptx.ShapeType.roundRect,{x:4.92,y:4.90,w:1.05,h:0.42,rectRadius:0.05,fill:{color:'FFFFFF'},line:{color:C.red,width:1.2,dash:'dash'}}); s.addText('경계는 점선 박스 + 라벨',{x:6.16,y:4.98,w:1.48,h:0.30,fontFace:'Noto Sans CJK KR',fontSize:7.3,color:C.text,margin:0,fit:'shrink'});
  card(s,8.34,4.18,3.45,1.38,{shadow:false}); pill(s,8.56,4.40,0.80,'LABEL',C.teal); label(s,8.62,4.95,1.12,'HTTPS',C.blue,C.blueSoft); label(s,9.88,4.95,1.20,'AuthZ',C.purple,C.purpleSoft); s.addText('조건·프로토콜은 화살표 옆 라벨',{x:8.65,y:5.40,w:2.75,h:0.20,fontFace:'Noto Sans CJK KR',fontSize:7.3,color:C.text,margin:0,fit:'shrink'});
  note(s,'접근성: 색상만으로 의미를 구분하지 말고 텍스트 라벨·경계·선 형태를 함께 사용합니다.',C.blue,C.blueSoft);
}

// 20 Prompt / usage
{
  const s=pptx.addSlide('BASE'); addTitle(s,'다이어그램 생성 프롬프트는 “목적 + 독자 + 구조 + 증빙 + 디자인 규칙”으로 작성합니다','새 미션 발표를 만들 때 아래 프롬프트를 복사해 다이어그램 초안을 설계합니다','MASTER PROMPT'); addSectionTag(s,'19 PROMPT');
  card(s,0.72,1.95,8.25,4.55,{fill:C.dark,line:C.dark,shadow:false});
  const prompt=`[역할] 기술 발표 시각화 설계자\n[대상] 코디세이 {MISSION_ID} 평가 / 학부 / 대학원 / 학회\n[목표] 평가자가 10초 안에 구조와 핵심 판단을 이해하도록 한다.\n\n[입력]\n- 공식 요구사항: {REQ}\n- 구현 구조: {ARCH}\n- 실제 검증: {VERIFY}\n- 증빙: {EVIDENCE}\n\n[출력]\n1. 가장 적합한 다이어그램 유형 1개 선택\n2. 노드 4~7개, 한 노드 한 책임\n3. 실선=주 흐름, 점선=외부/선택\n4. 보안/외부 경계 분리\n5. 제목은 결론형 문장\n6. 하단에 검증·Evidence 1줄 연결\n7. 16:9 PowerPoint 편집 가능한 벡터 구성`;
  s.addText(prompt,{x:1.0,y:2.24,w:7.72,h:3.95,fontFace:'Noto Sans CJK KR',fontSize:9.0,color:'DDE8F3',margin:0.06,breakLine:false,fit:'shrink'});
  card(s,9.30,1.95,3.28,4.55,{line:C.blue});
  pill(s,9.55,2.20,1.15,'CHECKLIST',C.blue);
  const checklist=['□ 한 장 한 메시지','□ 제목이 결론','□ 노드 4~7개','□ 책임 1줄','□ 흐름 방향 명확','□ 경계/외부 구분','□ Evidence 연결','□ 색 외 라벨 제공'];
  checklist.forEach((t,i)=>s.addText(t,{x:9.58,y:2.84+i*0.39,w:2.55,h:0.18,fontFace:'Noto Sans CJK KR',fontSize:8.1,color:i<2?C.ink:C.text,bold:i<2,margin:0}));
  note(s,'운영 원칙: 다이어그램은 실제 구현과 Evidence를 과장하지 않으며, 공식 Mission / Evaluation을 항상 우선합니다.',C.amber,C.amberSoft);
}
