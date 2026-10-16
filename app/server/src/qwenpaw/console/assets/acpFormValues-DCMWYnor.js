function s(t){return String(t||"").split(`
`).map(n=>n.trim()).filter(Boolean)}function f(t){return String(t||"").split(`
`).map(n=>n.trim()).filter(Boolean).reduce((n,r)=>{const i=r.indexOf("=");if(i>=0){const e=r.slice(0,i).trim(),o=r.slice(i+1).trim();e&&(n[e]=o)}return n},{})}function u(t=[]){return t.join(`
`)}function c(t={}){return Object.entries(t).map(([n,r])=>`${n}=${r}`).join(`
`)}export{s as parseArgsText,f as parseEnvText,u as stringifyArgs,c as stringifyEnv};
