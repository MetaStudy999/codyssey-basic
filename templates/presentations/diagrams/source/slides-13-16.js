const { pptx, C, safeOuterShadow, addTitle, card, pill, node, arrow, dotArrow, label, note, addSectionTag } = require('./common');

// 13 Security Boundary
{
  const s=pptx.addSlide('BASE'); addTitle(s,'보안 다이어그램은 “신뢰 경계(Trust Boundary)”를 먼저 그린 뒤 통신을 배치합니다','인증(Authentication)과 인가(Authorization), Secret, IAM, 네트워크 정책을 한 프레임에 정리합니다','SECURITY'); addSectionTag(s,'12 SECURITY');
  s.addShape(pptx.ShapeType.roundRect,{x:0.8,y:2.0,w:3.0,h:3.65,rectRadius:0.12,fill:{color:C.blueSoft},line:{color:'A9CCF4',width:1.1}}); pill(s,1.05,2.18,1.25,'UNTRUSTED',C.blue); node(s,1.25,3.0,2.1,0.86,'Browser / User','No server secret',C.blue,'U');
  s.addShape(pptx.ShapeType.roundRect,{x:4.25,y:2.0,w:5.1,h:3.65,rectRadius:0.12,fill:{color:'F6F9FC'},line:{color:C.navy2,width:1.6}}); pill(s,4.50,2.18,1.12,'TRUSTED',C.navy2); node(s,4.7,3.0,1.75,0.86,'API','Auth check',C.navy2,'API'); node(s,6.95,3.0,1.88,0.86,'Service','Policy / owner',C.purple,'SVC'); node(s,5.78,4.35,1.92,0.86,'Secret Store','Key / Token',C.red,'KEY');
  s.addShape(pptx.ShapeType.roundRect,{x:9.75,y:2.0,w:2.65,h:3.65,rectRadius:0.12,fill:{color:C.tealSoft},line:{color:C.teal,width:1.1}}); pill(s,10.0,2.18,1.05,'DATA ZONE',C.teal); node(s,10.08,3.0,2.0,0.86,'Database','Owner / FK',C.teal,'DB');
  arrow(s,3.35,3.43,4.7,3.43,C.blue,2.0); label(s,3.72,2.92,0.95,'HTTPS',C.blue,C.blueSoft); arrow(s,6.45,3.43,6.95,3.43,C.navy2,1.8); label(s,6.46,2.92,0.95,'AuthZ',C.purple,C.purpleSoft); arrow(s,8.83,3.43,10.08,3.43,C.teal,1.8); dotArrow(s,6.65,4.35,6.65,3.86,C.red); label(s,5.97,5.50,1.68,'Secret never to client',C.red,C.redSoft);
  note(s,'색상만으로 보안을 표현하지 말고, 경계 박스 + 라벨 + 허용 방향을 함께 표시해 접근 제어 논리를 명확히 합니다.',C.red,C.redSoft);
}

// 14 Before After
{
  const s=pptx.addSlide('BASE'); addTitle(s,'Before → After는 “무엇이 좋아졌는지”를 구조적 차이와 근거로 설명합니다','리팩터링·성능 개선·UX 개선을 “예뻐졌다”가 아니라 측정 가능한 변화로 표현합니다','BEFORE / AFTER'); addSectionTag(s,'13 IMPROVEMENT');
  card(s,0.75,2.05,5.55,3.9,{line:C.red,shadow:false}); pill(s,0.98,2.28,0.95,'BEFORE',C.red); s.addText('한 파일에 모든 책임', {x:0.98,y:2.85,w:2.7,h:0.35,fontFace:'Noto Sans CJK KR',fontSize:15,bold:true,color:C.ink,margin:0});
  node(s,1.2,3.55,1.58,0.68,'CLI','입력',C.red,'1'); node(s,3.05,3.55,1.58,0.68,'Logic','처리',C.red,'2'); node(s,4.90,3.55,1.05,0.68,'File','저장',C.red,'3'); arrow(s,2.78,3.89,3.05,3.89,C.red,1.4); arrow(s,4.63,3.89,4.90,3.89,C.red,1.4); s.addText('오류 처리 중복 · 테스트 어려움 · 변경 영향 큼',{x:1.18,y:4.72,w:4.7,h:0.44,fontFace:'Noto Sans CJK KR',fontSize:8.5,color:C.red,align:'center',margin:0,fit:'shrink'});
  card(s,7.0,2.05,5.55,3.9,{line:C.green,shadow:false}); pill(s,7.23,2.28,0.92,'AFTER',C.green); s.addText('책임 분리 + 검증 가능', {x:7.23,y:2.85,w:3.2,h:0.35,fontFace:'Noto Sans CJK KR',fontSize:15,bold:true,color:C.ink,margin:0});
  node(s,7.35,3.55,1.15,0.68,'CLI','입력',C.blue,'1'); node(s,8.77,3.55,1.15,0.68,'Service','규칙',C.purple,'2'); node(s,10.19,3.55,1.15,0.68,'Repo','저장',C.teal,'3'); node(s,11.61,3.55,0.65,0.68,'Log','',C.green,'4'); arrow(s,8.50,3.89,8.77,3.89,C.green,1.4); arrow(s,9.92,3.89,10.19,3.89,C.green,1.4); arrow(s,11.34,3.89,11.61,3.89,C.green,1.4); s.addText('단위 테스트 가능 · 예외 처리 일관 · 변경 범위 축소',{x:7.38,y:4.72,w:4.78,h:0.44,fontFace:'Noto Sans CJK KR',fontSize:8.5,color:C.green,align:'center',margin:0,fit:'shrink'});
  label(s,5.95,3.60,1.2,'IMPROVE →',C.blue,C.blueSoft);
  note(s,'가능하면 Before/After 아래에 실제 수치(테스트 수, 응답시간, 오류율, 파일 수 등)를 1~2개만 추가합니다.',C.green,C.greenSoft);
}

// 15 Evidence Traceability
{
  const s=pptx.addSlide('BASE'); addTitle(s,'평가 발표의 핵심은 “요구사항이 어떤 증빙으로 닫혔는지”를 추적 가능하게 만드는 것입니다','Requirement → Implementation → Verification → Evidence → Evaluation을 한 줄로 연결합니다','TRACEABILITY'); addSectionTag(s,'14 EVIDENCE');
  const chain=[['MISSION','원본 요구',C.navy2],['REQ-ID','필수 항목',C.blue],['IMPLEMENT','코드 / 설정',C.purple],['VERIFY','테스트 / 실행',C.teal],['EVIDENCE','로그 / 캡처',C.green],['EVALUATE','설명 / Q&A',C.amber]];
  chain.forEach((c,i)=>{const x=0.60+i*2.08; card(s,x,2.48,1.72,2.45,{line:c[2]}); pill(s,x+0.15,2.70,1.06,c[0],c[2]); s.addText(c[1],{x:x+0.18,y:3.34,w:1.36,h:0.36,fontFace:'Noto Sans CJK KR',fontSize:11,bold:true,color:C.ink,align:'center',margin:0,fit:'shrink'}); s.addText(i===1?'REQ-B1-1-03':i===2?'monitor.sh':i===3?'ss / log / cron':i===4?'evidence/...':i===5?'왜 이렇게 설계?':'',{x:x+0.18,y:4.05,w:1.36,h:0.36,fontFace:'Noto Sans CJK KR',fontSize:7,color:C.muted,align:'center',margin:0,fit:'shrink'}); if(i<chain.length-1)arrow(s,x+1.72,3.70,x+2.08,3.70,c[2],1.8);});
  card(s,2.0,5.38,9.3,0.62,{fill:C.navy,shadow:false,line:C.navy}); s.addText('평가자 관점: “이 기능이 있다는 주장”보다 “요구사항 → 실제 결과 → 증빙”이 연결되어 있는지가 중요합니다.', {x:2.25,y:5.59,w:8.8,h:0.18,fontFace:'Noto Sans CJK KR',fontSize:8.1,bold:true,color:'FFFFFF',align:'center',margin:0});
  note(s,'이 템플릿은 각 미션의 최종 Verification Dashboard 바로 앞 또는 뒤에 배치하는 것을 권장합니다.',C.green,C.greenSoft);
}

// 16 Research Pipeline
{
  const s=pptx.addSlide('BASE'); addTitle(s,'연구 파이프라인은 “질문 → 방법 → 실험 → 평가 → 결론”의 논리를 보여줍니다','석·박사·연구원·학회 발표에서 미션 결과를 연구형 스토리로 확장할 때 사용합니다','RESEARCH PIPELINE'); addSectionTag(s,'15 RESEARCH');
  const stages=[['QUESTION','무엇을 알고 싶은가?',C.blue],['DATA','무엇을 관찰하는가?',C.teal],['METHOD','어떻게 해결하는가?',C.purple],['EXPERIMENT','어떻게 검증하는가?',C.amber],['METRIC','무엇으로 비교하는가?',C.red],['CONCLUSION','무엇을 주장할 수 있는가?',C.green]];
  stages.forEach((st,i)=>{const x=0.66+i*2.06; card(s,x,2.45,1.72,2.46,{line:st[2]}); s.addShape(pptx.ShapeType.ellipse,{x:x+0.55,y:2.72,w:0.62,h:0.62,fill:{color:st[2]},line:{color:st[2]}}); s.addText(String(i+1),{x:x+0.55,y:2.90,w:0.62,h:0.14,fontFace:'Noto Sans CJK KR',fontSize:8.5,bold:true,color:'FFFFFF',align:'center',margin:0}); s.addText(st[0],{x:x+0.17,y:3.58,w:1.38,h:0.20,fontFace:'Noto Sans CJK KR',fontSize:9.3,bold:true,color:C.ink,align:'center',margin:0}); s.addText(st[1],{x:x+0.17,y:4.06,w:1.38,h:0.40,fontFace:'Noto Sans CJK KR',fontSize:7.2,color:C.muted,align:'center',margin:0,fit:'shrink'}); if(i<stages.length-1)arrow(s,x+1.72,3.70,x+2.06,3.70,st[2],1.6);});
  card(s,2.1,5.30,9.1,0.68,{fill:'FBFCFE',shadow:false}); s.addText('연구형 제목 예시: “ACL 기반 권한 분리가 운영 오류와 접근 위반을 어떻게 줄이는가?”', {x:2.35,y:5.52,w:8.6,h:0.20,fontFace:'Noto Sans CJK KR',fontSize:8.2,bold:true,color:C.purple,align:'center',margin:0,fit:'shrink'});
  note(s,'미션 발표를 학술 발표로 확장할 때는 “무엇을 만들었나”에서 “무엇을 검증했나”로 중심 질문을 바꿉니다.',C.purple,C.purpleSoft);
}
