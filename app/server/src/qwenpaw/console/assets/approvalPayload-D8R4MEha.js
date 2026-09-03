function a(t,p,r){const n=p??r,e=t.request_context,o=e&&typeof e=="object"&&!Array.isArray(e)?{...e}:{};o.approval_level=n,t.request_context=o}export{a as applyApprovalLevelToRequestBody};
