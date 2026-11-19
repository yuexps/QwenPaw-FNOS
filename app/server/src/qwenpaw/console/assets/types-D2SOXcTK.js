import{e as x}from"./react-vendor-XpTlWkwQ.js";var s={exports:{}},c={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f;function b(){if(f)return c;f=1;var u=x();function l(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var d=typeof Object.is=="function"?Object.is:l,p=u.useState,v=u.useEffect,y=u.useLayoutEffect,h=u.useDebugValue;function m(e,t){var n=t(),a=p({inst:{value:n,getSnapshot:t}}),r=a[0].inst,i=a[1];return y(function(){r.value=n,r.getSnapshot=t,o(r)&&i({inst:r})},[e,n,t]),v(function(){return o(r)&&i({inst:r}),e(function(){o(r)&&i({inst:r})})},[e]),h(n),n}function o(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!d(e,n)}catch{return!0}}function E(e,t){return t()}var _=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?E:m;return c.useSyncExternalStore=u.useSyncExternalStore!==void 0?u.useSyncExternalStore:_,c}var S;function g(){return S||(S=1,s.exports=b()),s.exports}var w=g();const O=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),q=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{O as a,w as s,q as t};
