import{cu as E,B as g,X as h,b as N}from"./index-AQZugIm6.js";import{j as a}from"./react-vendor-XpTlWkwQ.js";import{D as B}from"./index-BqQxetiZ.js";import{S as z}from"./SparkFalseLine-Dm0SxL8m.js";var O;function F(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}var S=E(O||(O=F([`
.`,`-drawer {
  .`,`-drawer-header {
    padding: 16px 20px;
    border-bottom: none;
    
    .`,`-drawer-header-title {
      display: flex;
      flex-direction: row-reverse;
      
      .`,`-drawer-title {
        font-size: 16px;
        font-weight: 500;
        line-height: 28px;
        color: var(--`,`-color-text);
      }
      
      .`,`-drawer-close {
        width: 32px;
        height: 32px;
      }
    }
  }
  
  .`,`-drawer-body {
    --`,`-padding-lg: 20px;
  }
  
  .`,`-drawer-footer {
    padding: 16px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: none;
    
    .`,`-drawer-footer-info {
      font-size: 14px;
      line-height: 24px;
      color: var(--`,`-color-text-tertiary);
    }
    
    .`,`-drawer-footer-buttons {
      display: flex;
      gap: 12px;
    }
  }
  
  .`,`-drawer-close {
    color: var(--`,`-color-text);
    margin: 0;
  }
}

.`,"-drawer.",`-show-divider {
  .`,`-drawer-header {
    border-bottom: 1px solid var(--`,`-color-border-secondary);
  }
  
  .`,`-drawer-footer {
    border-top: 1px solid var(--`,`-color-border-secondary);
  }
}
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix});function f(e){"@babel/helpers - typeof";return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},f(e)}var K=["onOk","onCancel","okText","okButtonProps","cancelText","cancelButtonProps","info","footer"];function j(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?j(Object(n),!0).forEach(function(t){L(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function L(e,r,n){return r=W(r),r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function W(e){var r=I(e,"string");return f(r)=="symbol"?r:String(r)}function I(e,r){if(f(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var t=n.call(e,r);if(f(t)!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function G(e,r){if(e==null)return{};var n=R(e,r),t,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function R(e,r){if(e==null)return{};var n={},t=Object.keys(e),o,i;for(i=0;i<t.length;i++)o=t[i],!(r.indexOf(o)>=0)&&(n[o]=e[o]);return n}var X=function(r){var n=r.onOk,t=r.onCancel,o=r.okText,i=o===void 0?"确定":o,p=r.okButtonProps,l=r.cancelText,b=l===void 0?"取消":l,s=r.cancelButtonProps,y=r.info,d=r.footer,m=G(r,K),D=S(),C=h(),P=C.antPrefix,T=function($){if(t)t();else{var x;(x=m.onClose)===null||x===void 0||x.call(m,$)}};return a.jsxs(a.Fragment,{children:[a.jsx(D,{}),a.jsx(_,c(c({},m),{},{footer:d||a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"".concat(P,"-drawer-footer-info"),children:y}),a.jsxs("div",{className:"".concat(P,"-drawer-footer-buttons"),children:[a.jsx(g,c(c({onClick:T},s),{},{children:b})),a.jsx(g,c(c({type:"primary",onClick:n},p),{},{children:i}))]})]})}))]})};function u(e){"@babel/helpers - typeof";return u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},u(e)}var q=["children","className","style","showDivider"];function w(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,t)}return n}function v(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?w(Object(n),!0).forEach(function(t){k(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function k(e,r,n){return r=A(r),r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function A(e){var r=H(e,"string");return u(r)=="symbol"?r:String(r)}function H(e,r){if(u(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var t=n.call(e,r);if(u(t)!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function J(e,r){if(e==null)return{};var n=M(e,r),t,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function M(e,r){if(e==null)return{};var n={},t=Object.keys(e),o,i;for(i=0;i<t.length;i++)o=t[i],!(r.indexOf(o)>=0)&&(n[o]=e[o]);return n}var _=function(r){var n=r.children,t=r.className,o=r.style,i=r.showDivider,p=i===void 0?!0:i,l=J(r,q),b=S(),s=h(),y=s.sparkPrefix,d=s.antPrefix;return a.jsxs(a.Fragment,{children:[a.jsx(b,{}),a.jsx(B,v(v({closeIcon:a.jsx(z,{size:24}),className:N("".concat(y,"-drawer"),t,k({},"".concat(d,"-show-divider"),p)),style:v({},o)},l),{},{children:n}))]})};Object.assign(_,{Confirm:X});export{_ as S};
