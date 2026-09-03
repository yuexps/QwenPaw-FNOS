import{p as B}from"./chunk-JWPE2WC7-B8dj046M.js";import{ff as b,fE as m,fH as C,fj as S,fi as w,fe as D,fd as T,fs as E,ft as F,fc as P,fb as z,fC as A,fF as W,fu as _}from"./ui-vendor-Bg5EyMZm.js";import{p as N}from"./cynefin-VYW2F7L2-ZbIDDKhA.js";import"./react-vendor-DbzdS4FP.js";import"./markdown-vendor-DonjKQI4.js";var L=W.packet,u,v=(u=class{constructor(){this.packet=[],this.setAccTitle=D,this.getAccTitle=T,this.setDiagramTitle=E,this.getDiagramTitle=F,this.getAccDescription=P,this.setAccDescription=z}getConfig(){const t=m({...L,...A().packet});return t.showBits&&(t.paddingY+=10),t}getPacket(){return this.packet}pushWord(t){t.length>0&&this.packet.push(t)}clear(){_(),this.packet=[]}},b(u,"PacketDB"),u),M=1e4,Y=b((e,t)=>{B(e,t);let s=-1,r=[],n=1;const{bitsPerRow:l}=t.getConfig();for(let{start:a,end:i,bits:d,label:c}of e.blocks){if(a!==void 0&&i!==void 0&&i<a)throw new Error(`Packet block ${a} - ${i} is invalid. End must be greater than start.`);if(a??(a=s+1),a!==s+1)throw new Error(`Packet block ${a} - ${i??a} is not contiguous. It should start from ${s+1}.`);if(d===0)throw new Error(`Packet block ${a} is invalid. Cannot have a zero bit field.`);for(i??(i=a+(d??1)-1),d??(d=i-a+1),s=i,w.debug(`Packet block ${a} - ${s} with label ${c}`);r.length<=l+1&&t.getPacket().length<M;){const[p,o]=j({start:a,end:i,bits:d,label:c},n,l);if(r.push(p),p.end+1===n*l&&(t.pushWord(r),r=[],n++),!o)break;({start:a,end:i,bits:d,label:c}=o)}}t.pushWord(r)},"populate"),j=b((e,t,s)=>{if(e.start===void 0)throw new Error("start should have been set during first phase");if(e.end===void 0)throw new Error("end should have been set during first phase");if(e.start>e.end)throw new Error(`Block start ${e.start} is greater than block end ${e.end}.`);if(e.end+1<=t*s)return[e,void 0];const r=t*s-1,n=t*s;return[{start:e.start,end:r,label:e.label,bits:r-e.start},{start:n,end:e.end,label:e.label,bits:e.end-n}]},"getNextFittingBlock"),x={parser:{yy:void 0},parse:b(async e=>{var r;const t=await N("packet",e),s=(r=x.parser)==null?void 0:r.yy;if(!(s instanceof v))throw new Error("parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");w.debug(t),Y(t,s)},"parse")},H=b((e,t,s,r)=>{const n=r.db,l=n.getConfig(),{rowHeight:a,paddingY:i,bitWidth:d,bitsPerRow:c}=l,p=n.getPacket(),o=n.getDiagramTitle(),g=a+i,f=g*(p.length+1)-(o?0:a),h=d*c+2,k=C(t);k.attr("viewBox",`0 0 ${h} ${f}`),S(k,f,h,l.useMaxWidth);for(const[y,$]of p.entries())I(k,$,y,l);k.append("text").text(o).attr("x",h/2).attr("y",f-g/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),I=b((e,t,s,{rowHeight:r,paddingX:n,paddingY:l,bitWidth:a,bitsPerRow:i,showBits:d})=>{const c=e.append("g"),p=s*(r+l)+l;for(const o of t){const g=o.start%i*a+1,f=(o.end-o.start+1)*a-n;if(c.append("rect").attr("x",g).attr("y",p).attr("width",f).attr("height",r).attr("class","packetBlock"),c.append("text").attr("x",g+f/2).attr("y",p+r/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(o.label),!d)continue;const h=o.end===o.start,k=p-2;c.append("text").attr("x",g+(h?f/2:0)).attr("y",k).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",h?"middle":"start").text(o.start),h||c.append("text").attr("x",g+f).attr("y",k).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(o.end)}},"drawWord"),O={draw:H},G={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},K=b(({packet:e}={})=>{const t=m(G,e);return`
	.packetByte {
		font-size: ${t.byteFontSize};
	}
	.packetByte.start {
		fill: ${t.startByteColor};
	}
	.packetByte.end {
		fill: ${t.endByteColor};
	}
	.packetLabel {
		fill: ${t.labelColor};
		font-size: ${t.labelFontSize};
	}
	.packetTitle {
		fill: ${t.titleColor};
		font-size: ${t.titleFontSize};
	}
	.packetBlock {
		stroke: ${t.blockStrokeColor};
		stroke-width: ${t.blockStrokeWidth};
		fill: ${t.blockFillColor};
	}
	`},"styles"),Q={parser:x,get db(){return new v},renderer:O,styles:K};export{Q as diagram};
