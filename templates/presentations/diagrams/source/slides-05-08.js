const { pptx, C, safeOuterShadow, addTitle, card, pill, node, arrow, dotArrow, label, note, addSectionTag } = require('./common');

// 5 Data Flow
{
  const s=pptx.addSlide('BASE'); addTitle(s,'데이터 흐름도는 “입력 → 검증 → 처리 → 저장 → 응답”을 분리해 보여줍니다','B2·B4·B6에서 구현 설명과 예외 처리 설명에 특히 유용합니다','DATA FLOW'); addSectionTag(s,'04 DATA FLOW');
  const steps=[['INPUT','사용자 / 파일 / API',C.blue],['VALIDATE','형식 · 범위 · 권한',C.red],['TRANSFORM','정규화 · 계산',C.purple],['STORE','DB · File · Cache',C.teal],['RESPOND','UI · JSON · Log',C.green]];
  const xs=[0.78,3.15,5.52,7.89,10.26];
  steps.forEach((st,i)=>{card(s,xs[i],2.35,1.9,2.15,{line:st[2]}); s.addShape(pptx.ShapeType.ellipse,{x:xs[i]+0.65,y:2.67,w:0.58,h:0.58,fill:{color:st[2]},line:{color:st[2]}}); s.addText(String(i+1),{x:xs[i]+0.65,y:2.82,w:0.58,h:0.15,fontFace:'Noto Sans CJK KR',fontSize:9,bold:true,color:'FFFFFF',align:'center',margin:0}); s.addText(st[0],{x:xs[i]+0.18,y:3.46,w:1.54,h:0.22,fontFace:'Noto Sans CJK KR',fontSize:11,bold:true,color:C.ink,align:'center',margin:0}); s.addText(st[1],{x:xs[i]+0.16,y:3.84,w:1.58,h:0.38,fontFace:'Noto Sans CJK KR',fontSize:7.4,color:C.muted,align:'center',margin:0,fit:'shrink'}); if(i<steps.length-1) arrow(s,xs[i]+1.90,3.38,xs[i+1],3.38,st[2],2.2);});
  card(s,2.1,5.08,9.15,0.92,{fill:'FBFCFE',line:C.line,shadow:false});
  label(s,2.35,5.36,1.25,'ERROR PATH',C.red,C.redSoft);
  s.addText('검증 실패', {x:3.9,y:5.38,w:1.0,h:0.18,fontFace:'Noto Sans CJK KR',fontSize:8,bold:true,color:C.red,margin:0}); arrow(s,4.82,5.47,6.0,5.47,C.red,1.6); s.addText('에러 메시지 / 재입력', {x:6.15,y:5.38,w:1.75,h:0.18,fontFace:'Noto Sans CJK KR',fontSize:8,color:C.text,margin:0}); arrow(s,7.95,5.47,9.0,5.47,C.red,1.6); s.addText('로그 / Evidence', {x:9.14,y:5.38,w:1.5,h:0.18,fontFace:'Noto Sans CJK KR',fontSize:8,color:C.text,margin:0});
  note(s,'실선 = 정상 데이터 경로 · 빨강 = 실패/예외 경로 · 각 단계의 “입력과 출력”을 1줄로 고정하면 설명력이 올라갑니다.',C.red,C.redSoft);
}

// 6 Sequence
{
  const s=pptx.addSlide('BASE'); addTitle(s,'Sequence Diagram은 “누가 언제 누구에게 무엇을 요청하는가”를 시간 순서로 보여줍니다','인증·API·DB 연동처럼 컴포넌트가 여러 개인 동작 설명에 최적입니다','SEQUENCE'); addSectionTag(s,'05 SEQUENCE');
  const actors=[['User',1.25,C.blue],['Frontend',3.65,C.navy2],['API',6.05,C.purple],['Auth',8.45,C.red],['DB',10.85,C.teal]];
  actors.forEach(a=>{s.addShape(pptx.ShapeType.roundRect,{x:a[1]-0.65,y:1.95,w:1.3,h:0.52,rectRadius:0.06,fill:{color:a[2]},line:{color:a[2]}});s.addText(a[0],{x:a[1]-0.6,y:2.11,w:1.2,h:0.17,fontFace:'Noto Sans CJK KR',fontSize:8.5,bold:true,color:'FFFFFF',align:'center',margin:0});s.addShape(pptx.ShapeType.line,{x:a[1],y:2.48,w:0,h:3.55,line:{color:'B9C4D0',width:1,dash:'dash'}});});
  const msgs=[
    [1.25,3.65,2.78,'1  로그인 요청',C.blue],
    [3.65,6.05,3.25,'2  POST /login',C.navy2],
    [6.05,8.45,3.72,'3  자격 검증',C.purple],
    [8.45,10.85,4.19,'4  사용자 조회',C.red],
    [10.85,8.45,4.66,'5  User row',C.teal],
    [8.45,6.05,5.13,'6  인증 결과',C.green],
    [6.05,3.65,5.60,'7  Token / Session',C.green],
    [3.65,1.25,6.07,'8  UI 상태 변경',C.green]
  ];
  msgs.forEach(m=>{arrow(s,m[0],m[2],m[1],m[2],m[4],1.6); const left=Math.min(m[0],m[1])+0.12; s.addText(m[3],{x:left,y:m[2]-0.20,w:Math.abs(m[1]-m[0])-0.24,h:0.16,fontFace:'Noto Sans CJK KR',fontSize:7.2,color:C.text,align:'center',margin:0,fit:'shrink'});});
  note(s,'템플릿 규칙: 참여자 4~6개 · 메시지 6~10개 · 성공 흐름을 먼저, 실패 흐름은 별도 슬라이드 또는 빨강 보조선으로 분리합니다.');
}

// 7 State
{
  const s=pptx.addSlide('BASE'); addTitle(s,'State Diagram은 “상태가 왜 바뀌는지”를 조건과 함께 설명합니다','프로세스·인증·배포·비즈니스 상태 변경을 단순 CRUD와 구분해 보여줍니다','STATE MACHINE'); addSectionTag(s,'06 STATE');
  const st=[['READY',1.1,3.25,C.blue],['RUNNING',3.5,3.25,C.navy2],['PASS',6.25,2.3,C.green],['FAIL',6.25,4.2,C.red],['RETRY',9.25,4.2,C.amber],['CLOSED',9.25,2.3,C.teal]];
  st.forEach(v=>{s.addShape(pptx.ShapeType.roundRect,{x:v[1],y:v[2],w:1.75,h:0.72,rectRadius:0.12,fill:{color:v[3]},line:{color:v[3]},shadow:safeOuterShadow('000000',0.08,45,1.0,0.5)});s.addText(v[0],{x:v[1]+0.1,y:v[2]+0.23,w:1.55,h:0.2,fontFace:'Noto Sans CJK KR',fontSize:10,bold:true,color:'FFFFFF',align:'center',margin:0});});
  arrow(s,2.85,3.61,3.5,3.61,C.blue,2); label(s,2.88,3.08,0.92,'start',C.blue,C.blueSoft);
  arrow(s,5.25,3.61,6.25,2.66,C.green,2); label(s,5.55,2.78,0.98,'검증 성공',C.green,C.greenSoft);
  arrow(s,5.25,3.61,6.25,4.56,C.red,2); label(s,5.55,4.08,0.98,'검증 실패',C.red,C.redSoft);
  arrow(s,8.0,4.56,9.25,4.56,C.amber,2); label(s,8.08,4.08,0.95,'복구 가능',C.amber,C.amberSoft);
  arrow(s,10.12,4.2,7.1,3.05,C.amber,1.6); label(s,8.7,3.10,0.95,'retry',C.amber,C.amberSoft);
  arrow(s,8.0,2.66,9.25,2.66,C.teal,2); label(s,8.18,2.18,0.88,'완료',C.teal,C.tealSoft);
  note(s,'전이(Transition) 화살표에는 “행동”이 아니라 상태를 바꾸는 조건/이벤트를 적습니다. 예: timeout, valid token, review approved.');
}

// 8 ERD
{
  const s=pptx.addSlide('BASE'); addTitle(s,'ERD는 테이블 목록이 아니라 “관계와 무결성”을 설명해야 합니다','PK/FK, 카디널리티(1:N), 소유권, 삭제 정책을 평가자가 한눈에 볼 수 있게 합니다','ERD'); addSectionTag(s,'07 DATA MODEL');
  const tables=[
    {x:0.75,y:2.2,w:2.65,h:2.75,name:'USER',color:C.blue,rows:[['PK','id','UUID'],['','email','VARCHAR'],['','password_hash','VARCHAR'],['','created_at','DATETIME']]},
    {x:5.35,y:1.95,w:2.65,h:3.2,name:'CHAT_SESSION',color:C.purple,rows:[['PK','id','UUID'],['FK','user_id','USER.id'],['','title','VARCHAR'],['','created_at','DATETIME'],['','updated_at','DATETIME']]},
    {x:9.95,y:2.2,w:2.65,h:2.75,name:'MESSAGE',color:C.teal,rows:[['PK','id','UUID'],['FK','session_id','CHAT_SESSION.id'],['','role','ENUM'],['','content','TEXT']]}
  ];
  tables.forEach(t=>{card(s,t.x,t.y,t.w,t.h,{line:t.color,shadow:false});s.addShape(pptx.ShapeType.rect,{x:t.x,y:t.y,w:t.w,h:0.48,fill:{color:t.color},line:{color:t.color}});s.addText(t.name,{x:t.x+0.14,y:t.y+0.15,w:t.w-0.28,h:0.18,fontFace:'Noto Sans CJK KR',fontSize:9.5,bold:true,color:'FFFFFF',margin:0}); t.rows.forEach((r,ri)=>{const yy=t.y+0.62+ri*0.45; if(ri>0)s.addShape(pptx.ShapeType.line,{x:t.x+0.12,y:yy-0.08,w:t.w-0.24,h:0,line:{color:C.line,width:0.5}}); pill(s,t.x+0.14,yy,0.36,r[0]||' ',r[0]==='PK'?C.blue:r[0]==='FK'?C.amber:C.muted,r[0]?undefined:'FFFFFF');s.addText(r[1],{x:t.x+0.58,y:yy+0.05,w:1.15,h:0.17,fontFace:'Noto Sans CJK KR',fontSize:7.2,bold:r[0]!=='',color:C.text,margin:0,fit:'shrink'});s.addText(r[2],{x:t.x+1.72,y:yy+0.05,w:0.72,h:0.17,fontFace:'Noto Sans CJK KR',fontSize:6.6,color:C.muted,align:'right',margin:0,fit:'shrink'});});});
  s.addShape(pptx.ShapeType.line,{x:3.4,y:3.25,w:1.95,h:0,line:{color:C.blue,width:2}}); label(s,3.88,2.85,0.82,'1 : N',C.blue,C.blueSoft);
  s.addShape(pptx.ShapeType.line,{x:8.0,y:3.25,w:1.95,h:0,line:{color:C.teal,width:2}}); label(s,8.47,2.85,0.82,'1 : N',C.teal,C.tealSoft);
  card(s,3.7,5.48,5.95,0.72,{fill:'FBFCFE',shadow:false}); s.addText('삭제 정책 예시', {x:3.93,y:5.66,w:1.15,h:0.18,fontFace:'Noto Sans CJK KR',fontSize:7.3,bold:true,color:C.red,margin:0}); s.addText('USER 삭제 → SESSION / MESSAGE cascade 또는 soft delete 정책을 명시', {x:5.15,y:5.66,w:4.2,h:0.18,fontFace:'Noto Sans CJK KR',fontSize:7.3,color:C.text,margin:0,fit:'shrink'});
  note(s,'ERD 발표에서는 “왜 이 관계인가 / 어떤 무결성을 보장하는가 / 누가 데이터를 소유하는가”를 설명해야 합니다.',C.teal,C.tealSoft);
}
