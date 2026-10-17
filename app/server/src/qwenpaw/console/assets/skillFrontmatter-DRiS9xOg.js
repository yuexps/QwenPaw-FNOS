function u(o){try{const t=o.trim();if(!t.startsWith("---"))return null;const e=t.indexOf("---",3);if(e===-1)return null;const i=t.slice(3,e).trim();if(!i)return null;const l={};for(const n of i.split(`
`)){const r=n.indexOf(":");if(r>0){const c=n.slice(0,r).trim(),s=n.slice(r+1).trim();l[c]=s}}return l}catch{return null}}export{u as parseFrontmatter};
