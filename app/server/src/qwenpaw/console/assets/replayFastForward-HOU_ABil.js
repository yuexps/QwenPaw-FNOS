const g='data: {"type": "replay_end"}';const L=Symbol("idle-timeout"),E=e=>e.trim()===g;function D(e){const i=e.split(`

`),u=i.pop()??"";return{events:i.filter(l=>l.length>0),rest:u}}function x(e,i=300){const u=e.body;if(!e.ok||!u)return e;const l=u.getReader(),T=new TextDecoder,_=new TextEncoder;let a="",c=[],p=!0;const v=n=>_.encode(n.map(d=>`${d}

`).join("")),R=new ReadableStream({async start(n){const d=()=>{p=!1;const s=c.filter(o=>!E(o));c=[],s.length>0&&n.enqueue(v(s))};let w=null;try{for(;;){const s=w??l.read();w=s;let o;if(p){let t;const r=new Promise(m=>{t=setTimeout(()=>m(L),i)}),f=await Promise.race([s,r]);if(clearTimeout(t),f===L){d();continue}o=f}else o=await s;if(w=null,o.done){a+=T.decode();const{events:t,rest:r}=D(a),f=[...c,...t].filter(y=>!E(y));c=[];const m=f.map(y=>`${y}

`).join("")+r;m&&n.enqueue(_.encode(m));break}a+=T.decode(o.value,{stream:!0});const{events:h,rest:b}=D(a);if(a=b,p){let t=!1;for(const r of h)E(r)?t=!0:c.push(r);t&&d()}else{const t=h.filter(r=>!E(r));t.length>0&&n.enqueue(v(t))}}n.close()}catch(s){n.error(s)}},cancel(n){return l.cancel(n)}});return new Response(R,{status:e.status,statusText:e.statusText,headers:e.headers})}export{x as wrapReplayFastForward};
