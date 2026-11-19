import{p as et}from"./chunk-JWPE2WC7-BmH8jZtv.js";import{g as at,s as rt,a as it,b as ot,o as nt,n as st,_ as l,l as z,c as lt,A as ct,E as dt,F as pt,d as gt,p as ht,B as ft}from"./mermaid.core-8WF3alqa.js";import{p as mt}from"./cynefin-VYW2F7L2-BJPgaCIV.js";import{o as U,bQ as ut,bR as vt}from"./d3-vendor-D2PoVM8m.js";import"./runtime-vendor-D-An6KVc.js";import"./index-AQZugIm6.js";import"./react-vendor-XpTlWkwQ.js";import"./tslib.es6-nAcSLW6q.js";import"./i18n-vendor-ByzP8Izs.js";import"./types-D2SOXcTK.js";import"./dnd-vendor-CGTkmxAi.js";import"./markdown-vendor-SUoKVQRF.js";import"./index-Cl2s8LAc.js";import"./purify.es-DowdsyMd.js";import"./index-BkD7Hj8s.js";var St=ft.pie,R={sections:new Map,showData:!1},b=R.sections,F=R.showData,xt=structuredClone(St),wt=l(()=>structuredClone(xt),"getConfig"),Ct=l(()=>{b=new Map,F=R.showData,ht()},"clear"),$t=l(({label:t,value:a})=>{if(a<0)throw new Error(`"${t}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);b.has(t)||(b.set(t,a),z.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),Dt=l(()=>b,"getSections"),yt=l(t=>{F=t},"setShowData"),bt=l(()=>F,"getShowData"),Q={getConfig:wt,clear:Ct,setDiagramTitle:st,getDiagramTitle:nt,setAccTitle:ot,getAccTitle:it,setAccDescription:rt,getAccDescription:at,addSection:$t,getSections:Dt,setShowData:yt,getShowData:bt},Tt=l((t,a)=>{et(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),At={parse:l(async t=>{const a=await mt("pie",t);z.debug(a),Tt(a,Q)},"parse")},_t=l(t=>`
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
`,"getStyles"),kt=_t,Et=l(t=>{const a=[...t.values()].reduce((n,u)=>n+u,0),L=[...t.entries()].map(([n,u])=>({label:n,value:u})).filter(n=>n.value/a*100>=1);return vt().value(n=>n.value).sort(null)(L)},"createPieArcs"),zt=l((t,a,L,W)=>{var I;z.debug(`rendering pie chart
`+t);const n=W.db,u=lt(),h=ct(n.getConfig(),u.pie),H=40,i=18,c=4,C=450,S=C,T=dt(a),$=T.append("g");$.attr("transform","translate("+S/2+","+C/2+")");const{themeVariables:o}=u;let[M]=pt(o.pieOuterStrokeWidth);M??(M=2);const V=h.legendPosition,O=h.textPosition,X=h.donutHole>0&&h.donutHole<=.9?h.donutHole:0,f=Math.min(S,C)/2-H,Z=U().innerRadius(X*f).outerRadius(f),j=U().innerRadius(f*O).outerRadius(f*O),x=$.append("g");x.append("circle").attr("cx",0).attr("cy",0).attr("r",f+M/2).attr("class","pieOuterCircle");const D=n.getSections(),q=Et(D),J=[o.pie1,o.pie2,o.pie3,o.pie4,o.pie5,o.pie6,o.pie7,o.pie8,o.pie9,o.pie10,o.pie11,o.pie12];let A=0;D.forEach(e=>{A+=e});const P=q.filter(e=>(e.data.value/A*100).toFixed(0)!=="0"),_=ut(J).domain([...D.keys()]);x.selectAll("mySlices").data(P).enter().append("path").attr("d",Z).attr("fill",e=>_(e.data.label)).attr("class",e=>{let r="pieCircle";return h.highlightSlice==="hover"?r+=" highlightedOnHover":h.highlightSlice===e.data.label&&(r+=" highlighted"),r}),x.selectAll("mySlices").data(P).enter().append("text").text(e=>(e.data.value/A*100).toFixed(0)+"%").attr("transform",e=>"translate("+j.centroid(e)+")").style("text-anchor","middle").attr("class","slice");const K=$.append("text").text(n.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),w=[...D.entries()].map(([e,r])=>({label:e,value:r})),m=$.selectAll(".legend").data(w).enter().append("g").attr("class","legend");m.append("rect").attr("width",i).attr("height",i).style("fill",e=>_(e.label)).style("stroke",e=>_(e.label)),m.append("text").attr("x",i+c).attr("y",i-c).text(e=>n.getShowData()?`${e.label} [${e.value}]`:e.label);const v=Math.max(...m.selectAll("text").nodes().map(e=>(e==null?void 0:e.getBoundingClientRect().width)??0));let y=C,k=S+H;const s=i+c,E=w.length*s;switch(V){case"center":m.attr("transform",(e,r)=>{const d=s*w.length/2,p=-v/2-(i+c),g=r*s-d;return"translate("+p+","+g+")"});break;case"top":y+=E,m.attr("transform",(e,r)=>{const d=f,p=-v/2-(i+c),g=r*s-d;return`translate(${p}, ${g})`}),x.attr("transform",()=>`translate(0, ${E+s})`);break;case"bottom":y+=E,m.attr("transform",(e,r)=>{const d=-f-s,p=-v/2-(i+c),g=r*s-d;return"translate("+p+","+g+")"});break;case"left":k+=i+c+v,m.attr("transform",(e,r)=>{const d=s*w.length/2,p=-f-(i+c),g=r*s-d;return"translate("+p+","+g+")"}),x.attr("transform",()=>`translate(${v+i+c}, 0)`);break;case"right":default:k+=i+c+v,m.attr("transform",(e,r)=>{const d=s*w.length/2,p=12*i,g=r*s-d;return"translate("+p+","+g+")"});break}const B=((I=K.node())==null?void 0:I.getBoundingClientRect().width)??0,Y=S/2-B/2,tt=S/2+B/2,G=Math.min(0,Y),N=Math.max(k,tt)-G;T.attr("viewBox",`${G} 0 ${N} ${y}`),gt(T,y,N,h.useMaxWidth)},"draw"),Rt={draw:zt},jt={parser:At,db:Q,renderer:Rt,styles:kt};export{jt as diagram};
