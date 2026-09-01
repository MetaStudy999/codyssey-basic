const pptxgen = require('pptxgenjs');
function safeOuterShadow(color = '000000', opacity = 0.25, angle = 45, blur = 3, offset = 2) {
  return { type: 'outer', color, opacity, angle, blur, offset };
}

const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE'; // 13.333 x 7.5
pptx.author = 'OpenAI';
pptx.subject = 'Codyssey Technical Diagram Library';
pptx.title = 'Codyssey Technical Diagram Library';
pptx.company = 'Codyssey';
pptx.lang = 'ko-KR';
pptx.theme = {
  headFontFace: 'Noto Sans CJK KR',
  bodyFontFace: 'Noto Sans CJK KR',
  lang: 'ko-KR'
};
pptx.defineSlideMaster({
  title: 'BASE',
  background: { color: 'F7F9FC' },
  objects: [
    { rect: { x: 0, y: 0, w: 13.333, h: 0.07, fill: { color: '2F80ED' }, line: { color: '2F80ED' } } },
    { text: { text: 'CODYSSEY · TECHNICAL DIAGRAM LIBRARY', options: { x: 0.55, y: 0.18, w: 5.7, h: 0.24, fontFace: 'Noto Sans CJK KR', fontSize: 8.5, bold: true, color: '2F80ED', charSpacing: 0.7, margin: 0 } } },
    { text: { text: 'B1-1 ~ B7-2 · Evaluation / Research / Engineering', options: { x: 7.3, y: 0.18, w: 5.45, h: 0.24, fontFace: 'Noto Sans CJK KR', fontSize: 8, color: '7B8794', align: 'right', margin: 0 } } },
    { line: { x: 0.55, y: 7.12, w: 12.2, h: 0, line: { color: 'D7DEE8', width: 0.8 } } },
    { text: { text: 'Editable vector template · Source → Structure → Flow → Evidence', options: { x: 0.55, y: 7.18, w: 6.8, h: 0.18, fontFace: 'Noto Sans CJK KR', fontSize: 7.2, color: 'A0AAB6', margin: 0 } } },
  ],
  slideNumber: { x: 12.25, y: 7.14, w: 0.45, h: 0.2, fontFace: 'Noto Sans CJK KR', fontSize: 8, color: 'A0AAB6', align: 'right', margin: 0 }
});

const C = {
  navy: '0B2035', navy2: '12314E', blue: '2F80ED', blue2: '5AA7FF',
  teal: '1BA99A', teal2: '60C5BB', amber: 'F3A61D', red: 'D95D58',
  green: '2FA66A', purple: '7B61FF', ink: '17202A', text: '334155', muted: '6B7785',
  line: 'D7DEE8', soft: 'EDF2F7', paper: 'FFFFFF', bg: 'F7F9FC', dark: '071827',
  blueSoft: 'EAF3FF', tealSoft: 'E8F8F5', amberSoft: 'FFF5DD', redSoft: 'FDEDEC', greenSoft: 'EAF7EF', purpleSoft: 'F0EDFF'
};

function addTitle(slide, title, subtitle, badge) {
  slide.addText(title, { x:0.55, y:0.57, w:9.4, h:0.52, fontFace:'Noto Sans CJK KR', fontSize:22, bold:true, color:C.ink, margin:0, fit:'shrink' });
  if (subtitle) slide.addText(subtitle, { x:0.56, y:1.10, w:10.5, h:0.32, fontFace:'Noto Sans CJK KR', fontSize:9.5, color:C.muted, margin:0, fit:'shrink' });
  if (badge) {
    slide.addShape(pptx.ShapeType.roundRect, { x:11.12, y:0.61, w:1.62, h:0.36, rectRadius:0.08, fill:{color:C.navy}, line:{color:C.navy} });
    slide.addText(badge, { x:11.19, y:0.69, w:1.48, h:0.18, fontFace:'Noto Sans CJK KR', fontSize:7.8, bold:true, color:'FFFFFF', align:'center', margin:0 });
  }
}
function card(slide, x,y,w,h, opts={}) {
  slide.addShape(pptx.ShapeType.roundRect, { x,y,w,h, rectRadius:0.10, fill:{color:opts.fill||C.paper, transparency:opts.transparency||0}, line:{color:opts.line||C.line, width:opts.width||0.8}, shadow: opts.shadow===false ? undefined : safeOuterShadow('000000',0.10,45,1.2,0.7) });
}
function pill(slide, x,y,w,text,color,fill) {
  slide.addShape(pptx.ShapeType.roundRect,{x,y,w,h:0.28,rectRadius:0.08,fill:{color:fill||color,transparency:fill?0:88},line:{color:fill||color,transparency:100}});
  slide.addText(text,{x:x+0.04,y:y+0.06,w:w-0.08,h:0.13,fontFace:'Noto Sans CJK KR',fontSize:6.9,bold:true,color:fill?color:'FFFFFF',align:'center',margin:0,fit:'shrink'});
}
function node(slide,x,y,w,h,title,sub,color=C.blue,iconText=''){
  card(slide,x,y,w,h,{line:color,shadow:false});
  slide.addShape(pptx.ShapeType.roundRect,{x:x+0.14,y:y+0.15,w:0.48,h:0.48,rectRadius:0.08,fill:{color},line:{color}});
  const icon = iconText || '•'; const iconFs = icon.length >= 4 ? 6.8 : icon.length === 3 ? 8.6 : icon.length === 2 ? 10.5 : 13; slide.addText(icon,{x:x+0.14,y:y+0.20,w:0.48,h:0.20,fontFace:'Noto Sans CJK KR',fontSize:iconFs,bold:true,color:'FFFFFF',align:'center',margin:0,fit:'shrink'});
  slide.addText(title,{x:x+0.75,y:y+0.13,w:w-0.88,h:0.22,fontFace:'Noto Sans CJK KR',fontSize:10.5,bold:true,color:C.ink,margin:0,fit:'shrink'});
  if(sub) slide.addText(sub,{x:x+0.75,y:y+0.38,w:w-0.88,h:h-0.45,fontFace:'Noto Sans CJK KR',fontSize:7.4,color:C.muted,margin:0,fit:'shrink',breakLine:false});
}
function arrow(slide,x1,y1,x2,y2,color=C.blue,width=1.8,dash='solid'){
  slide.addShape(pptx.ShapeType.line,{x:x1,y:y1,w:x2-x1,h:y2-y1,line:{color,width,beginArrowType:'none',endArrowType:'triangle',dash}});
}
function dotArrow(slide,x1,y1,x2,y2,color=C.muted){ arrow(slide,x1,y1,x2,y2,color,1.5,'dash'); }
function label(slide,x,y,w,text,color=C.muted,fill='FFFFFF'){
  slide.addShape(pptx.ShapeType.roundRect,{x,y,w,h:0.28,rectRadius:0.06,fill:{color:fill},line:{color:C.line,width:0.5}});
  slide.addText(text,{x:x+0.04,y:y+0.06,w:w-0.08,h:0.14,fontFace:'Noto Sans CJK KR',fontSize:6.8,bold:true,color,align:'center',margin:0,fit:'shrink'});
}
function note(slide,text,color=C.blue,fill=C.blueSoft){
  slide.addShape(pptx.ShapeType.roundRect,{x:0.58,y:6.57,w:12.16,h:0.38,rectRadius:0.06,fill:{color:fill},line:{color:fill}});
  slide.addText(text,{x:0.74,y:6.68,w:11.85,h:0.15,fontFace:'Noto Sans CJK KR',fontSize:7.6,color,margin:0,fit:'shrink'});
}
function addSectionTag(slide, text, color=C.blue) { pill(slide,0.57,1.52,1.45,text,color); }

module.exports = { pptx, C, safeOuterShadow, addTitle, card, pill, node, arrow, dotArrow, label, note, addSectionTag };
