import{cu as m,bE as P,b as y,X as h}from"./index-AQZugIm6.js";import{a as d,j as o}from"./react-vendor-XpTlWkwQ.js";function g(n){var f,c;const{size:t,spin:e,...r}=n,a=["spark-icon spark-icon-spark-sort-line",e?"spark-icon-spin":"",n.className||""].filter(Boolean).join(" ");let u;return typeof n.size=="number"?u=n.size:u=(f=n.style)==null?void 0:f.fontSize,d.createElement("span",Object.assign({},r,{className:a,style:{...n.style,fontSize:u,cursor:n.onClick?"pointer":(c=n.style)==null?void 0:c.cursor},role:"img","aria-label":"spark-sort-line","data-spark-icon":!0,children:[d.createElement("svg",Object.assign({key:"spark-sort-line",width:"1em",height:"1em",viewBox:"0 0 1024 1024",overflow:"hidden",fill:"currentColor","aria-hidden":"true",dangerouslySetInnerHTML:{__html:'<path d="M849.92 619.6736a32 32 0 0 1-9.3696 22.6304l-215.4496 215.4496a32 32 0 0 1-54.5792-24.1664V185.6a32 32 0 1 1 64 0v572.2624l160.768-160.768a32 32 0 0 1 54.6304 22.5792zM422.4 867.328a32 32 0 0 1-32-32V266.1376l-160.768 160.768a32 32 0 1 1-45.2608-45.2096l215.3984-215.4496a32 32 0 0 1 54.6304 22.6304v646.4c0 17.664-14.336 32-32 32z"></path>'}}))]}))}var b;function v(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}var j=m(b||(b=v([`
.`,`-pagination {
  color: var(--`,`-color-text) !important;
  font-weight: 500 !important;
  
  .`,`-pagination-total-text {
    font-weight: 500;
  }
  
  .`,`-select-selection-item {
    font-weight: 500;
  }
  
  .`,`-pagination-item-active {
    border-color: var(--`,`-color-border-secondary);
    border-radius: 8px;
    font-weight: 
    
    a {
      color: var(--`,`-color-text) !important;
    }
  }
  
  a {
    color: var(--`,`-color-text) !important;
    font-weight: 500 !important;
  }
  
  .`,`-pagination-jump-next {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .`,`-pagination-jump-prev {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.`,`-pagination {
  .`,`-pagination-prev,
  .`,`-pagination-next,
  .`,`-pagination-jump-prev,
  .`,`-pagination-jump-next {
    font-family: Montserrat;
    display: inline-block !important;
  }
}
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),p;function O(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}var w=m(p||(p=O([`
.`,`-table-wrapper {

  .`,`-table-tbody {
    .`,"-table-row > .",`-table-cell-row-hover {
      background: var(--`,`-color-bg-layout);
    }
    .`,"-table-row.","-table-row-selected > .",`-table-cell {
      background: var(--`,`-color-primary-bg-hover);
    }
  }

  .`,`-table-container {
    .`,`-table-thead > tr > th {
      padding: 8px 20px;
      font-weight: 400;
      color: var(--`,`-color-text-secondary);
    }
    
    /* 默认情况下移除表头单元格的圆角 */
    table > thead > tr:first-child > *:first-child {
      border-start-start-radius: 0;
    }
    
    table > thead > tr:first-child > *:last-child {
      border-start-end-radius: 0;
    }
    
    .`,"-table-thead > tr > th:not(:last-child):not(.","-table-selection-column):not(.",`-table-row-expand-icon-cell):not([colspan])::before {
      display: none !important;
    }
    
    .`,`-table-tbody > tr > td {
      padding: 16px 20px;
    }
    
    .`,`-table-tbody > tr {
      & > td:not(.`,`-table-selection-column):first-child,
      & > td.`,`-table-selection-column + td:not(
      .`,`-table-selection-column) {
        font-weight: 500;
      }
    }
  }
  
  .`,`-table-small {
    .`,`-table-tbody > tr > td {
      padding: 8px 20px;
    }
  }
  
  /* 无 footer 时 bordered 表格添加整体圆角 */
  .`,"-table-bordered:not(:has(.",`-table-footer)) {

    .`,`-table-container {
      border-radius: var(--`,`-table-header-border-radius);
      /* 恢复表头单元格的圆角 - 左上角和右上角 */
      table > thead > tr:first-child > *:first-child {
        border-start-start-radius: var(--`,`-table-header-border-radius);
      }
      
      table > thead > tr:first-child > *:last-child {
        border-start-end-radius: var(--`,`-table-header-border-radius);
      }

      table > tbody > tr:last-child > *:first-child {
        border-end-start-radius: var(--`,`-table-header-border-radius);
      }
      
      table > tbody > tr:last-child > *:last-child {
        border-end-end-radius: var(--`,`-table-header-border-radius);
        }
    }
  }

  /* 有 footer 时 bordered 表格添加整体圆角 */
  .`,"-table-bordered:has(.",`-table-footer) {
    .`,`-table-container {
      /* 恢复表头单元格的圆角 - 左上角和右上角 */
      table > thead > tr:first-child > *:first-child {
        border-start-start-radius: var(--`,`-table-header-border-radius);
      }
      
      table > thead > tr:first-child > *:last-child {
        border-start-end-radius: var(--`,`-table-header-border-radius);
      }
    }
  }
}
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix});function l(n){"@babel/helpers - typeof";return l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(n)}var S=["columns"];function x(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),e.push.apply(e,r)}return e}function s(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?x(Object(e),!0).forEach(function(r){D(n,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):x(Object(e)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(e,r))})}return n}function D(n,t,e){return t=E(t),t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function E(n){var t=k(n,"string");return l(t)=="symbol"?t:String(t)}function k(n,t){if(l(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var r=e.call(n,t);if(l(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function _(n,t){if(n==null)return{};var e=z(n,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(e[r]=n[r])}return e}function z(n,t){if(n==null)return{};var e={},r=Object.keys(n),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(e[i]=n[i]);return e}function B(n){var t,e=h(),r=e.sparkPrefix,i=n.columns,a=_(n,S);i=(t=i)===null||t===void 0?void 0:t.map(function(c){return s(s({},c),{},{sortIcon:c.sortIcon||function(){return o.jsx(g,{style:{fontSize:16,marginLeft:8}})}})});var u=w(),f=j();return o.jsxs(o.Fragment,{children:[o.jsx(u,{}),o.jsx(f,{}),o.jsx(P,s({className:y("".concat(r,"-table")),columns:i},a))]})}export{B as T};
