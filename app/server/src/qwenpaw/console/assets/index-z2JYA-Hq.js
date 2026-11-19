import{j as c}from"./react-vendor-XpTlWkwQ.js";import{cu as m,aO as s,X as v}from"./index-AQZugIm6.js";var l;function h(r,e){return e||(e=r.slice(0)),Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(e)}}))}var g=m(l||(l=h([`
.`,`-checkbox {
  .`,`-checkbox-wrapper-disabled {
    .`,`-checkbox-label {
      color: var(--`,`-color-text);
    }
  }
  
  .`,`-checkbox-inner {
    border: 1px solid var(--`,`-color-border-secondary);
  }
  
  .`,`-checkbox-wrapper:hover {
    .`,`-checkbox-inner {
      border-color: var(--`,`-color-border-secondary);
    }
  }
  
  .`,`-checkbox-checked {
    .`,`-checkbox-inner {
      border-color: var(--`,`-color-primary);
      background-color: var(--`,`-color-primary);
    }
  }
  
  .`,"-checkbox-checked.",`-checkbox-disabled {
    .`,`-checkbox-inner {
      background-color: var(--`,`-color-fill-disable);
      border-color: var(--`,`-color-fill-disable);
      
      &::after {
        border-color: var(--`,`-color-text-white);
      }
    }
  }
  
  .`,`-checkbox-disabled {
    .`,`-checkbox-inner {
      background-color: var(--`,`-color-fill-secondary);
      border-color: var(--`,`-color-fill-secondary);
    }
  }
}
`])),function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix});function a(r){"@babel/helpers - typeof";return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(r)}var O=["description","descriptionClassName","descriptionStyle","children"];function b(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),n.push.apply(n,t)}return n}function f(r){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?b(Object(n),!0).forEach(function(t){j(r,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach(function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(n,t))})}return r}function j(r,e,n){return e=k(e),e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function k(r){var e=S(r,"string");return a(e)=="symbol"?e:String(e)}function S(r,e){if(a(r)!="object"||!r)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var t=n.call(r,e);if(a(t)!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function w(r,e){if(r==null)return{};var n=C(r,e),t,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(o=0;o<i.length;o++)t=i[o],!(e.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(r,t)&&(n[t]=r[t])}return n}function C(r,e){if(r==null)return{};var n={},t=Object.keys(r),o,i;for(i=0;i<t.length;i++)o=t[i],!(e.indexOf(o)>=0)&&(n[o]=r[o]);return n}var _=function(e){var n=e.description,t=e.descriptionClassName,o=e.descriptionStyle,i=e.children,p=w(e,O),u=v(),x=u.antPrefix,d=u.sparkPrefix,y=g(),P={marginLeft:"24px",marginTop:"6px",fontSize:"12px",color:"var(--".concat(x,"-color-text-tertiary)")};return c.jsxs(c.Fragment,{children:[c.jsx(y,{}),c.jsxs("div",{className:"".concat(d,"-checkbox"),children:[c.jsx(s,f(f({},p),{},{children:i})),n&&c.jsx("div",{className:t,style:f(f({},P),o),children:n})]})]})};_.Group=s.Group;export{_ as C};
