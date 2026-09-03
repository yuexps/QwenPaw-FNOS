import{p as et}from"./chunk-JWPE2WC7-B8dj046M.js";import{fc as at,fb as rt,fd as it,fe as nt,ft as st,fs as ot,ff as l,fi as z,fg as lt,fE as ct,fH as dt,fI as gt,H as U,fJ as ft,fj as ht,fu as pt,fK as ut,fF as mt}from"./ui-vendor-Bg5EyMZm.js";import{p as vt}from"./cynefin-VYW2F7L2-ZbIDDKhA.js";import"./react-vendor-DbzdS4FP.js";import"./markdown-vendor-DonjKQI4.js";var St=mt.pie,H={sections:new Map,showData:!1},T=H.sections,R=H.showData,xt=structuredClone(St),wt=l(()=>structuredClone(xt),"getConfig"),Ct=l(()=>{T=new Map,R=H.showData,pt()},"clear"),$t=l(({label:t,value:a})=>{if(a<0)throw new Error(`"${t}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);T.has(t)||(T.set(t,a),z.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),Dt=l(()=>T,"getSections"),yt=l(t=>{R=t},"setShowData"),Tt=l(()=>R,"getShowData"),j={getConfig:wt,clear:Ct,setDiagramTitle:ot,getDiagramTitle:st,setAccTitle:nt,getAccTitle:it,setAccDescription:rt,getAccDescription:at,addSection:$t,getSections:Dt,setShowData:yt,getShowData:Tt},bt=l((t,a)=>{et(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),At={parse:l(async t=>{const a=await vt("pie",t);z.debug(a),bt(a,j)},"parse")},kt=l(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),_t=kt,Et=l(t=>{const a=[...t.values()].reduce((s,m)=>s+m,0),F=[...t.entries()].map(([s,m])=>({label:s,value:m})).filter(s=>s.value/a*100>=1);return ut().value(s=>s.value).sort(null)(F)},"createPieArcs"),zt=l((t,a,F,L)=>{var N;z.debug(`rendering pie chart
`+t);const s=L.db,m=lt(),h=ct(s.getConfig(),m.pie),W=40,i=18,c=4,C=450,S=C,b=dt(a),$=b.append("g");$.attr("transform","translate("+S/2+","+C/2+")");const{themeVariables:n}=m;let[M]=gt(n.pieOuterStrokeWidth);M??(M=2);const J=h.legendPosition,O=h.textPosition,K=h.donutHole>0&&h.donutHole<=.9?h.donutHole:0,p=Math.min(S,C)/2-W,V=U().innerRadius(K*p).outerRadius(p),X=U().innerRadius(p*O).outerRadius(p*O),x=$.append("g");x.append("circle").attr("cx",0).attr("cy",0).attr("r",p+M/2).attr("class","pieOuterCircle");const D=s.getSections(),Z=Et(D),q=[n.pie1,n.pie2,n.pie3,n.pie4,n.pie5,n.pie6,n.pie7,n.pie8,n.pie9,n.pie10,n.pie11,n.pie12];let A=0;D.forEach(e=>{A+=e});const P=Z.filter(e=>(e.data.value/A*100).toFixed(0)!=="0"),k=ft(q).domain([...D.keys()]);x.selectAll("mySlices").data(P).enter().append("path").attr("d",V).attr("fill",e=>k(e.data.label)).attr("class",e=>{let r="pieCircle";return h.highlightSlice==="hover"?r+=" highlightedOnHover":h.highlightSlice===e.data.label&&(r+=" highlighted"),r}),x.selectAll("mySlices").data(P).enter().append("text").text(e=>(e.data.value/A*100).toFixed(0)+"%").attr("transform",e=>"translate("+X.centroid(e)+")").style("text-anchor","middle").attr("class","slice");const Q=$.append("text").text(s.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),w=[...D.entries()].map(([e,r])=>({label:e,value:r})),u=$.selectAll(".legend").data(w).enter().append("g").attr("class","legend");u.append("rect").attr("width",i).attr("height",i).style("fill",e=>k(e.label)).style("stroke",e=>k(e.label)),u.append("text").attr("x",i+c).attr("y",i-c).text(e=>s.getShowData()?`${e.label} [${e.value}]`:e.label);const v=Math.max(...u.selectAll("text").nodes().map(e=>(e==null?void 0:e.getBoundingClientRect().width)??0));let y=C,_=S+W;const o=i+c,E=w.length*o;switch(J){case"center":u.attr("transform",(e,r)=>{const d=o*w.length/2,g=-v/2-(i+c),f=r*o-d;return"translate("+g+","+f+")"});break;case"top":y+=E,u.attr("transform",(e,r)=>{const d=p,g=-v/2-(i+c),f=r*o-d;return`translate(${g}, ${f})`}),x.attr("transform",()=>`translate(0, ${E+o})`);break;case"bottom":y+=E,u.attr("transform",(e,r)=>{const d=-p-o,g=-v/2-(i+c),f=r*o-d;return"translate("+g+","+f+")"});break;case"left":_+=i+c+v,u.attr("transform",(e,r)=>{const d=o*w.length/2,g=-p-(i+c),f=r*o-d;return"translate("+g+","+f+")"}),x.attr("transform",()=>`translate(${v+i+c}, 0)`);break;case"right":default:_+=i+c+v,u.attr("transform",(e,r)=>{const d=o*w.length/2,g=12*i,f=r*o-d;return"translate("+g+","+f+")"});break}const G=((N=Q.node())==null?void 0:N.getBoundingClientRect().width)??0,Y=S/2-G/2,tt=S/2+G/2,B=Math.min(0,Y),I=Math.max(_,tt)-B;b.attr("viewBox",`${B} 0 ${I} ${y}`),ht(b,y,I,h.useMaxWidth)},"draw"),Ht={draw:zt},Pt={parser:At,db:j,renderer:Ht,styles:_t};export{Pt as diagram};
