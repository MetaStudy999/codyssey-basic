const { pptx, C, safeOuterShadow, addTitle, card, pill, node, arrow, dotArrow, label, note, addSectionTag } = require('./common');

// 9 Cloud
{
  const s=pptx.addSlide('BASE'); addTitle(s,'클라우드 아키텍처는 “네트워크 경계 + 허용 흐름 + 최소권한”을 보이게 합니다','B6에서 VPC·Subnet·Security Group·IAM을 한 장에 설명하는 기본형입니다','CLOUD / NETWORK'); addSectionTag(s,'08 CLOUD');
  node(s,0.75,3.1,1.55,0.78,'Internet','External Client',C.blue,'WWW');
  s.addShape(pptx.ShapeType.roundRect,{x:2.8,y:1.88,w:9.75,h:3.95,rectRadius:0.14,fill:{color:'F9FBFD',transparency:0},line:{color:C.blue,width:1.8,dash:'dash'}});
  pill(s,3.0,2.05,0.72,'VPC',C.blue);
  s.addShape(pptx.ShapeType.roundRect,{x:3.25,y:2.48,w:5.2,h:2.78,rectRadius:0.10,fill:{color:C.blueSoft},line:{color:'A8CCF5',width:1.0}}); pill(s,3.45,2.66,1.15,'PUBLIC SUBNET',C.blue);
  node(s,3.65,3.18,1.65,0.82,'IGW','Internet Gateway',C.blue,'IGW');
  node(s,6.0,3.18,1.75,0.82,'EC2 / App','Web Service',C.navy2,'EC2');
  node(s,6.0,4.25,1.75,0.72,'Security Group','80 public · 22 restricted',C.red,'SG');
  s.addShape(pptx.ShapeType.roundRect,{x:9.0,y:2.48,w:2.95,h:2.78,rectRadius:0.10,fill:{color:C.amberSoft},line:{color:'F6CC73',width:1.0}}); pill(s,9.2,2.66,1.08,'IAM / ROLE',C.amber); node(s,9.38,3.35,2.16,0.92,'Least Privilege','EC2/VPC only',C.amber,'IAM');
  arrow(s,2.3,3.49,3.65,3.49,C.blue,2.2); arrow(s,5.30,3.59,6.0,3.59,C.blue,2.2); arrow(s,6.88,4.0,6.88,4.25,C.red,1.8); dotArrow(s,7.75,3.58,9.38,3.78,C.amber);
  label(s,1.36,2.68,0.9,'0.0.0.0/0',C.blue,C.blueSoft); label(s,5.86,5.45,2.0,'TRUST BOUNDARY',C.red,C.redSoft);
  note(s,'네트워크 다이어그램은 “어디서 들어와서 어디까지 허용되는지”와 “누가 어떤 권한으로 리소스를 조작하는지”를 분리해 표시합니다.',C.amber,C.amberSoft);
}

// 10 Algorithm
{
  const s=pptx.addSlide('BASE'); addTitle(s,'알고리즘 시각화는 “자료구조 → 연산 단계 → 복잡도”를 같은 프레임에서 설명합니다','B3에서 단순 코드 화면보다 내부 상태 변화와 불변조건(Invariant)을 보여주는 것이 중요합니다','ALGORITHM'); addSectionTag(s,'09 ALGORITHM');
  card(s,0.72,2.0,5.3,3.95,{shadow:false}); pill(s,0.95,2.22,1.1,'STRUCTURE',C.blue);
  s.addText('Hash Table + Chaining', {x:0.95,y:2.72,w:2.6,h:0.28,fontFace:'Noto Sans CJK KR',fontSize:12,bold:true,color:C.ink,margin:0});
  const by=3.35; for(let i=0;i<4;i++){s.addShape(pptx.ShapeType.roundRect,{x:1.05,y:by+i*0.55,w:0.72,h:0.38,rectRadius:0.05,fill:{color:C.navy},line:{color:C.navy}});s.addText('B'+i,{x:1.1,y:by+0.11+i*0.55,w:0.62,h:0.14,fontFace:'Noto Sans CJK KR',fontSize:7.2,bold:true,color:'FFFFFF',align:'center',margin:0}); if(i!==2){node(s,2.12,by-0.07+i*0.55,1.28,0.50,'key '+String.fromCharCode(65+i),'value',i===0?C.blue:C.teal,'N'); arrow(s,1.77,by+0.19+i*0.55,2.12,by+0.19+i*0.55,C.muted,1.2); if(i===0){node(s,3.72,by-0.07+i*0.55,1.28,0.50,'key D','value',C.teal,'N');arrow(s,3.40,by+0.19+i*0.55,3.72,by+0.19+i*0.55,C.muted,1.2);}} else{s.addText('∅',{x:2.18,y:by+0.03+i*0.55,w:0.6,h:0.25,fontFace:'Noto Sans CJK KR',fontSize:13,color:C.muted,margin:0});}}
  card(s,6.35,2.0,6.2,3.95,{shadow:false}); pill(s,6.58,2.22,0.95,'PROCESS',C.purple); s.addText('SEARCH("key D")', {x:6.58,y:2.72,w:2.2,h:0.28,fontFace:'Noto Sans CJK KR',fontSize:12,bold:true,color:C.ink,margin:0});
  const proc=[['HASH','index = h(key)',C.blue],['LOOKUP','bucket[0]',C.navy2],['SCAN','node → node',C.purple],['FOUND','return value',C.green]]; proc.forEach((p,i)=>{node(s,6.65+i*1.45,3.4,1.16,0.98,p[0],p[1],p[2],String(i+1)); if(i<proc.length-1)arrow(s,7.81+i*1.45,3.88,8.08+i*1.45,3.88,p[2],1.5);});
  card(s,6.65,4.78,5.25,0.62,{fill:C.greenSoft,line:C.green,shadow:false}); s.addText('복잡도: 평균 O(1) · 최악 O(n)    |    불변조건: 같은 key는 하나의 bucket 경로에서 탐색', {x:6.87,y:4.99,w:4.8,h:0.18,fontFace:'Noto Sans CJK KR',fontSize:7.5,bold:true,color:C.green,margin:0,fit:'shrink'});
  note(s,'코드 설명 슬라이드 다음에 이 템플릿을 붙이면 “왜 이 자료구조를 선택했는지”를 시간복잡도와 함께 설명할 수 있습니다.',C.purple,C.purpleSoft);
}

// 11 Git Swimlane
{
  const s=pptx.addSlide('BASE'); addTitle(s,'Git 협업은 Swimlane으로 “사람의 역할 + 저장소 상태 변화”를 함께 보여줍니다','B2-2에서 Issue·Branch·PR·Review·Merge를 실제 협업 흐름으로 설명하는 기본형입니다','GIT SWIMLANE'); addSectionTag(s,'10 COLLABORATION');
  const lanes=[['Developer A',2.0,C.blueSoft,C.blue],['Developer B / Reviewer',3.18,C.tealSoft,C.teal],['GitHub / main',4.36,'F2F5F8',C.navy2]];
  lanes.forEach(l=>{s.addShape(pptx.ShapeType.roundRect,{x:0.72,y:l[1],w:11.9,h:0.92,rectRadius:0.05,fill:{color:l[2]},line:{color:l[2]}});s.addText(l[0],{x:0.92,y:l[1]+0.31,w:1.45,h:0.20,fontFace:'Noto Sans CJK KR',fontSize:8,bold:true,color:l[3],margin:0});});
  const events=[['Issue',2.55,4.52,C.navy2],['Branch',4.02,2.13,C.blue],['Commit',5.35,2.13,C.blue],['PR',6.68,4.52,C.navy2],['Review',8.0,3.31,C.teal],['Fix',9.34,2.13,C.blue],['Merge',10.68,4.52,C.green]];
  events.forEach(e=>node(s,e[1],e[2],1.05,0.55,e[0],'',e[3],''));
  arrow(s,3.6,4.78,4.18,2.65,C.navy2,1.6); arrow(s,5.07,2.40,5.35,2.40,C.blue,1.6); arrow(s,6.40,2.40,6.82,4.52,C.blue,1.6); arrow(s,7.73,4.78,8.12,3.58,C.navy2,1.6); arrow(s,9.05,3.58,9.34,2.40,C.teal,1.6); arrow(s,10.39,2.40,10.78,4.52,C.blue,1.6);
  label(s,7.70,5.60,1.55,'Feedback ≥ 1',C.teal,C.tealSoft); label(s,9.55,5.60,1.75,'Conflict / Rebase',C.red,C.redSoft);
  note(s,'실제 발표에서는 각 노드 아래에 Issue/PR 번호와 Commit SHA를 작게 붙이면 “증빙 가능한 협업”으로 바뀝니다.',C.teal,C.tealSoft);
}

// 12 Troubleshooting
{
  const s=pptx.addSlide('BASE'); addTitle(s,'문제 해결은 “증상 → 가설 → 검증 → 원인 → 조치 → 재발방지”로 닫습니다','B1·B6뿐 아니라 모든 미션의 평가 Q&A에 사용할 수 있는 RCA(Root Cause Analysis) 템플릿입니다','TROUBLESHOOTING'); addSectionTag(s,'11 RCA');
  const stages=[['SYMPTOM','외부 접속 실패',C.red],['HYPOTHESIS','SG / Route / Service?',C.amber],['VERIFY','curl · ss · logs',C.blue],['ROOT CAUSE','80/tcp rule 누락',C.purple],['ACTION','SG rule 수정',C.teal],['PREVENT','checklist / test',C.green]];
  stages.forEach((st,i)=>{const x=0.68+i*2.06; card(s,x,2.46,1.72,2.2,{line:st[2]}); pill(s,x+0.17,2.68,1.0,st[0],st[2]); s.addText(st[1],{x:x+0.18,y:3.24,w:1.36,h:0.58,fontFace:'Noto Sans CJK KR',fontSize:10,bold:true,color:C.ink,align:'center',margin:0,fit:'shrink'}); s.addText(i===2?'관찰 가능한 명령/로그로\n가설을 좁힙니다.':i===5?'자동화/문서화로\n같은 오류를 막습니다.':'', {x:x+0.18,y:3.97,w:1.36,h:0.46,fontFace:'Noto Sans CJK KR',fontSize:6.9,color:C.muted,align:'center',margin:0,fit:'shrink'}); if(i<stages.length-1)arrow(s,x+1.72,3.56,x+2.06,3.56,st[2],1.8);});
  card(s,1.3,5.25,10.65,0.72,{fill:C.navy,shadow:false,line:C.navy}); s.addText('Evidence = 명령 + 실제 출력 + 시각 + Repository / Branch / Commit', {x:1.55,y:5.49,w:10.15,h:0.2,fontFace:'Noto Sans CJK KR',fontSize:8.8,bold:true,color:'FFFFFF',align:'center',margin:0});
  note(s,'가장 흔한 감점 포인트: “고쳤다”만 말하고, 어떤 근거로 원인을 확정했는지 보여주지 않는 것.',C.red,C.redSoft);
}
