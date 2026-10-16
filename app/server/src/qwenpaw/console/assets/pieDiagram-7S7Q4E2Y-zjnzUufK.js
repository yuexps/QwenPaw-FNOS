import{p as et}from"./chunk-JWPE2WC7-B00Muky6.js";import{gu as at,gt as rt,gv as it,gw as nt,gL as st,gK as ot,gx as l,gA as E,gy as lt,gW as ct,gZ as gt,g_ as dt,G as U,g$ as ht,gB as pt,gM as ut,h0 as ft,gX as mt}from"./ui-vendor-BSGzQnNi.js";import{p as vt}from"./cynefin-VYW2F7L2-UzwAxko7.js";import"./react-vendor-DgUiRFgt.js";import"./markdown-vendor-9ApjWS6g.js";var St=mt.pie,L={sections:new Map,showData:!1},T=L.sections,R=L.showData,xt=structuredClone(St),wt=l(()=>structuredClone(xt),"getConfig"),$t=l(()=>{T=new Map,R=L.showData,ut()},"clear"),Ct=l(({label:t,value:a})=>{if(a<0)throw new Error(`"${t}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);T.has(t)||(T.set(t,a),E.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),yt=l(()=>T,"getSections"),Dt=l(t=>{R=t},"setShowData"),Tt=l(()=>R,"getShowData"),X={getConfig:wt,clear:$t,setDiagramTitle:ot,getDiagramTitle:st,setAccTitle:nt,getAccTitle:it,setAccDescription:rt,getAccDescription:at,addSection:Ct,getSections:yt,setShowData:Dt,getShowData:Tt},At=l((t,a)=>{et(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),bt={parse:l(async t=>{const a=await vt("pie",t);E.debug(a),At(a,X)},"parse")},_t=l(t=>`
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
`,"getStyles"),kt=_t,zt=l(t=>{const a=[...t.values()].reduce((s,m)=>s+m,0),W=[...t.entries()].map(([s,m])=>({label:s,value:m})).filter(s=>s.value/a*100>=1);return ft().value(s=>s.value).sort(null)(W)},"createPieArcs"),Et=l((t,a,W,M)=>{var I;E.debug(`rendering pie chart
`+t);const s=M.db,m=lt(),p=ct(s.getConfig(),m.pie),F=40,i=18,c=4,$=450,S=$,A=gt(a),C=A.append("g");C.attr("transform","translate("+S/2+","+$/2+")");const{themeVariables:n}=m;let[G]=dt(n.pieOuterStrokeWidth);G??(G=2);const Z=p.legendPosition,H=p.textPosition,K=p.donutHole>0&&p.donutHole<=.9?p.donutHole:0,u=Math.min(S,$)/2-F,V=U().innerRadius(K*u).outerRadius(u),j=U().innerRadius(u*H).outerRadius(u*H),x=C.append("g");x.append("circle").attr("cx",0).attr("cy",0).attr("r",u+G/2).attr("class","pieOuterCircle");const y=s.getSections(),q=zt(y),J=[n.pie1,n.pie2,n.pie3,n.pie4,n.pie5,n.pie6,n.pie7,n.pie8,n.pie9,n.pie10,n.pie11,n.pie12];let b=0;y.forEach(e=>{b+=e});const O=q.filter(e=>(e.data.value/b*100).toFixed(0)!=="0"),_=ht(J).domain([...y.keys()]);x.selectAll("mySlices").data(O).enter().append("path").attr("d",V).attr("fill",e=>_(e.data.label)).attr("class",e=>{let r="pieCircle";return p.highlightSlice==="hover"?r+=" highlightedOnHover":p.highlightSlice===e.data.label&&(r+=" highlighted"),r}),x.selectAll("mySlices").data(O).enter().append("text").text(e=>(e.data.value/b*100).toFixed(0)+"%").attr("transform",e=>"translate("+j.centroid(e)+")").style("text-anchor","middle").attr("class","slice");const Q=C.append("text").text(s.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),w=[...y.entries()].map(([e,r])=>({label:e,value:r})),f=C.selectAll(".legend").data(w).enter().append("g").attr("class","legend");f.append("rect").attr("width",i).attr("height",i).style("fill",e=>_(e.label)).style("stroke",e=>_(e.label)),f.append("text").attr("x",i+c).attr("y",i-c).text(e=>s.getShowData()?`${e.label} [${e.value}]`:e.label);const v=Math.max(...f.selectAll("text").nodes().map(e=>(e==null?void 0:e.getBoundingClientRect().width)??0));let D=$,k=S+F;const o=i+c,z=w.length*o;switch(Z){case"center":f.attr("transform",(e,r)=>{const g=o*w.length/2,d=-v/2-(i+c),h=r*o-g;return"translate("+d+","+h+")"});break;case"top":D+=z,f.attr("transform",(e,r)=>{const g=u,d=-v/2-(i+c),h=r*o-g;return`translate(${d}, ${h})`}),x.attr("transform",()=>`translate(0, ${z+o})`);break;case"bottom":D+=z,f.attr("transform",(e,r)=>{const g=-u-o,d=-v/2-(i+c),h=r*o-g;return"translate("+d+","+h+")"});break;case"left":k+=i+c+v,f.attr("transform",(e,r)=>{const g=o*w.length/2,d=-u-(i+c),h=r*o-g;return"translate("+d+","+h+")"}),x.attr("transform",()=>`translate(${v+i+c}, 0)`);break;case"right":default:k+=i+c+v,f.attr("transform",(e,r)=>{const g=o*w.length/2,d=12*i,h=r*o-g;return"translate("+d+","+h+")"});break}const P=((I=Q.node())==null?void 0:I.getBoundingClientRect().width)??0,Y=S/2-P/2,tt=S/2+P/2,B=Math.min(0,Y),N=Math.max(k,tt)-B;A.attr("viewBox",`${B} 0 ${N} ${D}`),pt(A,D,N,p.useMaxWidth)},"draw"),Lt={draw:Et},Ot={parser:bt,db:X,renderer:Lt,styles:kt};export{Ot as diagram};
