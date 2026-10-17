import{p as ht}from"./chunk-JWPE2WC7-B00Muky6.js";import{gt as xt,gu as $t,gL as bt,gK as wt,gv as Ct,gw as vt,gx as i,gA as Y,gZ as Dt,gB as kt,gM as At,gW as q,gU as Z,gX as Tt,h2 as ot}from"./ui-vendor-BSGzQnNi.js";import{p as Bt}from"./cynefin-VYW2F7L2-UzwAxko7.js";import"./react-vendor-DgUiRFgt.js";import"./markdown-vendor-9ApjWS6g.js";var rt=i(()=>({domains:new Map,transitions:[]}),"createDefaultData"),H=rt(),St=i(()=>H.domains,"getDomains"),Mt=i(()=>H.transitions,"getTransitions"),Lt=i(t=>{if(t)for(const e of t){const n=e.domain,a=(e.items??[]).map(c=>({label:c.label}));H.domains.set(n,{name:n,items:a})}},"setDomains"),zt=i(t=>{t&&(H.transitions=t.filter(e=>e.from===e.to?(Y.warn(`Cynefin: self-loop transition on domain "${e.from}" is not meaningful and will be skipped.`),!1):!0).map(e=>({from:e.from,to:e.to,label:e.label||void 0})))},"setTransitions"),Nt=i(()=>q({...Tt.cynefin,...Z().cynefin}),"getConfig"),Pt=i(()=>{At(),H=rt()},"clear"),X={getDomains:St,getTransitions:Mt,setDomains:Lt,setTransitions:zt,getConfig:Nt,clear:Pt,setAccTitle:vt,getAccTitle:Ct,setDiagramTitle:wt,getDiagramTitle:bt,getAccDescription:$t,setAccDescription:xt},Wt=i(t=>{ht(t,X),X.setDomains(t.domains),X.setTransitions(t.transitions)},"populate"),It={parse:i(async t=>{const e=await Bt("cynefin",t);Y.debug(e),Wt(e)},"parse")};function E(t){let e=t+1831565813|0;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}i(E,"seededRandom");function it(t){let e=0;for(let n=0;n<t.length;n++){const a=t.charCodeAt(n);e=(e<<5)-e+a,e|=0}return e}i(it,"hashString");function st(t,e){return typeof t=="number"&&Number.isFinite(t)&&t!==0?t:it(e)}i(st,"resolveSeed");function ct(t,e,n,a){const c=t/2,m=a??t*.015,v=7,I=e/v,d=[];for(let o=0;o<=v;o++){const p=E(n+o*17)*m*2-m;d.push({x:c+p,y:o*I})}let D=`M${d[0].x},${d[0].y}`;for(let o=0;o<d.length-1;o++){const p=d[o],s=d[o+1],f=(p.y+s.y)/2,b=o%2===0?1:-1,g=m*1.5*b*E(n+o*31+7),R=p.x+g,F=f,V=s.x-g;D+=` C${R},${F} ${V},${f} ${s.x},${s.y}`}return D}i(ct,"generateFoldPath");function lt(t,e,n,a){const c=e/2,m=a??e*.015,v=7,I=t/v,d=[];for(let o=0;o<=v;o++){const p=E(n+o*23)*m*2-m;d.push({x:o*I,y:c+p})}let D=`M${d[0].x},${d[0].y}`;for(let o=0;o<d.length-1;o++){const p=d[o],s=d[o+1],f=(p.x+s.x)/2,b=o%2===0?1:-1,g=m*1.5*b*E(n+o*37+11),R=f,F=p.y+g,V=f,L=s.y-g;D+=` C${R},${F} ${V},${L} ${s.x},${s.y}`}return D}i(lt,"generateHorizontalBoundary");function dt(t,e){const n=t/2,a=e*.5,c=e,m=t*.03;return[`M${n},${a}`,`C${n+m},${a+(c-a)*.2}`,`${n-m*1.5},${a+(c-a)*.55}`,`${n+m*.5},${a+(c-a)*.75}`,`C${n-m},${a+(c-a)*.85}`,`${n+m*.3},${a+(c-a)*.95}`,`${n},${c}`].join(" ")}i(dt,"generateCliffPath");function ft(t,e,n,a){return[`M${t-n},${e}`,`A${n},${a} 0 1,1 ${t+n},${e}`,`A${n},${a} 0 1,1 ${t-n},${e}`,"Z"].join(" ")}i(ft,"generateConfusionPath");var at={complex:{model:"Probe → Sense → Respond",practice:"Emergent Practices"},complicated:{model:"Sense → Analyse → Respond",practice:"Good Practices"},clear:{model:"Sense → Categorise → Respond",practice:"Best Practices"},chaotic:{model:"Act → Sense → Respond",practice:"Novel Practices"},confusion:{model:"",practice:"Disorder"}},Rt=i((t,e)=>{const n=t/2,a=e/2;return{complex:{cx:n/2,cy:a/2,x:0,y:0,w:n,h:a},complicated:{cx:n+n/2,cy:a/2,x:n,y:0,w:n,h:a},chaotic:{cx:n/2,cy:a+a/2,x:0,y:a,w:n,h:a},clear:{cx:n+n/2,cy:a+a/2,x:n,y:a,w:n,h:a},confusion:{cx:n,cy:a,x:n*.7,y:a*.7,w:n*.6,h:a*.6}}},"getDomainLayouts"),Ft=i(()=>{const t=ot(),e=Z();return q(t,e.themeVariables).cynefin},"getCynefinDomainColors"),U=3,Vt=i((t,e,n,a)=>{const c=a.db,m=c.getDomains(),v=c.getTransitions(),I=c.getDiagramTitle(),d=c.getAccTitle(),D=c.getAccDescription(),o=c.getConfig(),p=Ft();Y.debug("Rendering Cynefin diagram");const s=o.width,f=o.height,b=o.padding,g=o.showDomainDescriptions,R=o.boundaryAmplitude,F=s+b*2,V=f+b*2,L={complex:p.complexBg,complicated:p.complicatedBg,clear:p.clearBg,chaotic:p.chaoticBg,confusion:p.confusionBg},k=Dt(e);kt(k,V,F,o.useMaxWidth??!0),k.attr("viewBox",`0 0 ${F} ${V}`),d&&k.append("title").text(d),D&&k.append("desc").text(D);const A=k.append("g").attr("transform",`translate(${b}, ${b})`),_=Rt(s,f),K=st(o.seed,e),mt=A.append("g").attr("class","cynefin-backgrounds"),O=["complex","complicated","chaotic","clear"];for(const l of O){const r=_[l];mt.append("rect").attr("class","cynefinDomain").attr("x",r.x).attr("y",r.y).attr("width",r.w).attr("height",r.h).attr("fill",L[l]).attr("fill-opacity",.4).attr("stroke","none")}const j=A.append("g").attr("class","cynefin-boundaries");j.append("path").attr("class","cynefinBoundary").attr("d",ct(s,f,K,R)).attr("fill","none"),j.append("path").attr("class","cynefinBoundary").attr("d",lt(s,f,K+100,R)).attr("fill","none"),j.append("path").attr("class","cynefinCliff").attr("d",dt(s,f)).attr("fill","none");const pt=s*.15,yt=f*.15;A.append("path").attr("class","cynefinConfusion").attr("d",ft(s/2,f/2,pt,yt)).attr("fill",L.confusion).attr("fill-opacity",.5);const Q=A.append("g").attr("class","cynefin-labels");for(const l of O){const r=_[l];Q.append("text").attr("class","cynefinDomainLabel").attr("x",r.cx).attr("y",g?r.cy-30:r.cy).attr("text-anchor","middle").attr("dominant-baseline","middle").text(l.charAt(0).toUpperCase()+l.slice(1))}if(Q.append("text").attr("class","cynefinDomainLabel").attr("x",s/2).attr("y",g?f/2-10:f/2).attr("text-anchor","middle").attr("dominant-baseline","middle").text("Confusion"),g){const l=A.append("g").attr("class","cynefin-subtitles");for(const r of O){const u=_[r],y=at[r];l.append("text").attr("class","cynefinSubtitle").attr("x",u.cx).attr("y",u.cy-10).attr("text-anchor","middle").attr("dominant-baseline","middle").text(y.model),l.append("text").attr("class","cynefinSubtitle").attr("x",u.cx).attr("y",u.cy+5).attr("text-anchor","middle").attr("dominant-baseline","middle").text(y.practice)}l.append("text").attr("class","cynefinSubtitle").attr("x",s/2).attr("y",f/2+8).attr("text-anchor","middle").attr("dominant-baseline","middle").text(at.confusion.practice)}const J=A.append("g").attr("class","cynefin-items"),T=26,tt=10,ut=["complex","complicated","chaotic","clear","confusion"];for(const l of ut){const r=m.get(l);if(!r||r.items.length===0)continue;const u=_[l],y=l==="confusion";let z=r.items,N=0;y&&r.items.length>U&&(N=r.items.length-U,z=r.items.slice(0,U));let B;if(y){const x=g?22:14;B=u.cy+x}else B=u.cy+(g?25:15);if([...z].forEach((x,S)=>{const w=B+S*(T+4),M=J.append("g"),P=M.append("text").attr("class","cynefinItemText").attr("x",0).attr("y",T/2).attr("text-anchor","middle").attr("dominant-baseline","central").text(x.label);let $=x.label.length*7;const h=P.node();if(h&&typeof h.getBBox=="function"){const G=h.getBBox();G.width>0&&($=G.width)}const C=$+tt*2,W=u.cx-C/2;M.attr("transform",`translate(${W}, ${w})`),M.insert("rect","text").attr("class","cynefinItem").attr("x",0).attr("y",0).attr("width",C).attr("height",T).attr("rx",4).attr("ry",4).attr("fill",L[l]).attr("fill-opacity",.95),P.attr("x",C/2).attr("y",T/2)}),N>0){const x=B+z.length*(T+4),S=`+${N} more`,w=J.append("g"),M=w.append("text").attr("class","cynefinItemText").attr("x",0).attr("y",T/2).attr("text-anchor","middle").attr("dominant-baseline","central").text(S);let P=S.length*7;const $=M.node();if($&&typeof $.getBBox=="function"){const W=$.getBBox();W.width>0&&(P=W.width)}const h=P+tt*2,C=u.cx-h/2;w.attr("transform",`translate(${C}, ${x})`),w.insert("rect","text").attr("class","cynefinItemOverflow").attr("x",0).attr("y",0).attr("width",h).attr("height",T).attr("rx",4).attr("ry",4).attr("fill",L[l]).attr("fill-opacity",.6),M.attr("x",h/2).attr("y",T/2)}}if(v.length>0){const l=k.select("defs").empty()?k.append("defs"):k.select("defs"),r=`cynefin-arrow-${e}`;l.append("marker").attr("id",r).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerWidth",6).attr("markerHeight",6).attr("orient","auto-start-reverse").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","cynefinArrowHead");const u=A.append("g").attr("class","cynefin-arrows");v.forEach(y=>{const z=_[y.from],N=_[y.to];if(!z||!N)return;if(y.from===y.to){Y.warn(`Cynefin renderer: skipping self-loop on domain "${y.from}"`);return}const B=z.cx,x=z.cy,S=N.cx,w=N.cy,M=(B+S)/2,P=(x+w)/2,$=S-B,h=w-x,C=Math.sqrt($*$+h*h),W=C*.15,G=-h/C,gt=$/C,et=M+G*W,nt=P+gt*W;u.append("path").attr("class","cynefinArrowLine").attr("d",`M${B},${x} Q${et},${nt} ${S},${w}`).attr("fill","none").attr("marker-end",`url(#${r})`),y.label&&u.append("text").attr("class","cynefinArrowLabel").attr("x",et).attr("y",nt-6).attr("text-anchor","middle").attr("dominant-baseline","auto").text(y.label)})}I&&A.append("text").attr("class","cynefinTitle").attr("x",s/2).attr("y",-b/2).attr("text-anchor","middle").attr("dominant-baseline","middle").text(I)},"draw"),_t={draw:Vt},Et=i(()=>{const t=ot(),e=Z();return q(t,e.themeVariables).cynefin},"getCynefinTheme"),Ht=i(()=>{const t=Et();return`
	.cynefinDomain {
		stroke: none;
	}
	.cynefinDomainLabel {
		font-size: ${t.domainFontSize}px;
		font-weight: bold;
		fill: ${t.labelColor};
	}
	.cynefinSubtitle {
		font-size: ${t.itemFontSize-1}px;
		fill: ${t.textColor};
		font-style: italic;
	}
	.cynefinItem {
		fill-opacity: 0.95;
		stroke: ${t.boundaryColor};
		stroke-width: 1;
	}
	.cynefinItemText {
		font-size: ${t.itemFontSize}px;
		fill: ${t.textColor};
	}
	.cynefinItemOverflow {
		fill-opacity: 0.6;
		stroke: ${t.boundaryColor};
		stroke-width: 1;
		stroke-dasharray: 3 2;
	}
	.cynefinBoundary {
		stroke: ${t.boundaryColor};
		stroke-width: ${t.boundaryWidth};
		stroke-dasharray: 6 3;
	}
	.cynefinCliff {
		stroke: ${t.cliffColor};
		stroke-width: ${t.cliffWidth};
	}
	.cynefinConfusion {
		stroke: ${t.boundaryColor};
		stroke-width: 1.5;
		stroke-dasharray: 4 2;
	}
	.cynefinArrowLine {
		stroke: ${t.arrowColor};
		stroke-width: ${t.arrowWidth};
		fill: none;
	}
	.cynefinArrowHead {
		fill: ${t.arrowColor};
		stroke: none;
	}
	.cynefinArrowLabel {
		font-size: ${t.itemFontSize-1}px;
		fill: ${t.textColor};
	}
	.cynefinTitle {
		font-size: ${t.domainFontSize+2}px;
		font-weight: bold;
		fill: ${t.labelColor};
	}
	`},"styles"),Gt=Ht,qt={parser:It,db:X,renderer:_t,styles:Gt};export{qt as diagram};
