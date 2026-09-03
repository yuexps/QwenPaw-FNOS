import{G as Z,a3 as w,an as $,t as G,ba as Q,bb as ee,bc as te,ao as oe,bd as ne}from"./index-C6K6UUCj.js";import{j9 as re,hv as ae,gZ as ie,dH as de,f3 as le,ja as se,eF as pe,cQ as ce,jb as xe,jc as ge,jd as ue,hH as fe,hN as be,je as he,jf as me,dN as we,hM as ve,e1 as ye,jg as $e}from"./ui-vendor-Bg5EyMZm.js";import{r as Y}from"./react-vendor-DbzdS4FP.js";const l="#FF7F16",j=56,u=28,h=78,v=14,S=18,ke=9,c="140ms",x="220ms",f="cubic-bezier(0.22, 1, 0.36, 1)",Ie={textStrong:"#f1f5f9",text:"#e2e8f0",textSecondary:"#cbd5e1",textMuted:"#94a3b8",textFaint:"#64748b",hoverText:"#fff",winBg:"rgba(24, 24, 27, 0.9)",panelBg:"rgba(28, 28, 30, 0.94)",barBg:"rgba(30, 30, 32, 0.62)",barBgStrong:"rgba(24, 24, 27, 0.8)",cardBg:"rgba(63, 63, 70, 0.32)",floatBg:"rgba(54, 54, 58, 0.58)",floatBgHover:"rgba(72, 72, 78, 0.78)",toastBg:"rgba(38, 38, 42, 0.9)",winCardBg:"rgba(39, 39, 42, 0.72)",overlayBg:"rgba(9, 9, 11, 0.62)",dimBg:"rgba(9, 9, 11, 0.52)",inputBg:"rgba(82, 82, 91, 0.32)",tooltipBg:"rgba(28, 28, 30, 0.94)",sideBg:"rgba(9, 9, 11, 0.22)",hoverBg:"rgba(255, 255, 255, 0.08)",hoverBgStrong:"rgba(255, 255, 255, 0.1)",subtleBg:"rgba(255, 255, 255, 0.06)",faintBg:"rgba(255, 255, 255, 0.03)",contentBg:"rgba(255, 255, 255, 0.02)",border:"rgba(148, 163, 184, 0.14)",borderStrong:"rgba(148, 163, 184, 0.28)",borderSolid:"rgba(148, 163, 184, 0.6)",chipBg:"rgba(148, 163, 184, 0.14)",dockBorder:"rgba(255, 255, 255, 0.12)",dockDivider:"rgba(255, 255, 255, 0.16)",badgeRing:"rgba(30, 41, 59, 0.9)",shadowWindow:"0 36px 90px rgba(0, 0, 0, 0.46), 0 12px 30px rgba(0, 0, 0, 0.32), inset 0 1px 0 rgba(255, 255, 255, 0.08)",shadowPanel:"0 28px 70px rgba(0, 0, 0, 0.42)",shadowFloat:"0 18px 44px rgba(0, 0, 0, 0.34)",shadowToast:"0 18px 46px rgba(0, 0, 0, 0.34)"},Se={textStrong:"#0f172a",text:"#1e293b",textSecondary:"#475569",textMuted:"#64748b",textFaint:"#94a3b8",hoverText:"#0f172a",winBg:"rgba(246, 246, 248, 0.92)",panelBg:"rgba(250, 250, 252, 0.94)",barBg:"rgba(246, 246, 248, 0.68)",barBgStrong:"rgba(246, 246, 248, 0.84)",cardBg:"rgba(255, 255, 255, 0.72)",floatBg:"rgba(255, 255, 255, 0.6)",floatBgHover:"rgba(255, 255, 255, 0.85)",toastBg:"rgba(255, 255, 255, 0.92)",winCardBg:"rgba(255, 255, 255, 0.78)",overlayBg:"rgba(241, 245, 249, 0.72)",dimBg:"rgba(241, 245, 249, 0.55)",inputBg:"rgba(15, 23, 42, 0.05)",tooltipBg:"rgba(255, 255, 255, 0.96)",sideBg:"rgba(15, 23, 42, 0.04)",hoverBg:"rgba(15, 23, 42, 0.05)",hoverBgStrong:"rgba(15, 23, 42, 0.07)",subtleBg:"rgba(15, 23, 42, 0.04)",faintBg:"rgba(15, 23, 42, 0.03)",contentBg:"rgba(15, 23, 42, 0.02)",border:"rgba(15, 23, 42, 0.1)",borderStrong:"rgba(15, 23, 42, 0.2)",borderSolid:"rgba(71, 85, 105, 0.55)",chipBg:"rgba(15, 23, 42, 0.07)",dockBorder:"rgba(15, 23, 42, 0.08)",dockDivider:"rgba(15, 23, 42, 0.12)",badgeRing:"#ffffff",shadowWindow:"0 34px 84px rgba(15, 23, 42, 0.16), 0 10px 28px rgba(15, 23, 42, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.85)",shadowPanel:"0 26px 64px rgba(15, 23, 42, 0.14)",shadowFloat:"0 16px 42px rgba(15, 23, 42, 0.14)",shadowToast:"0 18px 44px rgba(15, 23, 42, 0.13)"},Be={p:Ie},ze={p:Se},Ae=re(({css:e},{p:t})=>({desktop:e`
    position: fixed;
    inset: 0;
    overflow: hidden;
    user-select: none;
    color: #f4f4f5;
    background: linear-gradient(135deg, #0b1120 0%, #14162e 50%, #1e1b4b 100%);
    font-family:
      "Inter",
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      sans-serif;
    isolation: isolate;
    overscroll-behavior: none;
    touch-action: manipulation;
    @media (prefers-reduced-motion: reduce) {
      &,
      & * {
        scroll-behavior: auto !important;
        animation-duration: 1ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 1ms !important;
      }
    }
    @media (max-width: 768px) {
      min-height: 100dvh;
    }
  `,iconsGrid:e`
    position: absolute;
    inset: ${u+8}px auto 0 0;
    padding: 20px;
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: repeat(auto-fill, 96px);
    gap: 8px;
    z-index: 0;
    align-content: start;
    @media (max-width: 768px) {
      inset: ${u+8}px 0 ${h+10}px;
      grid-auto-flow: row;
      grid-template-rows: none;
      grid-template-columns: repeat(auto-fill, minmax(84px, 1fr));
      align-content: start;
      overflow-y: auto;
      padding: 16px 12px;
    }
  `,desktopIcon:e`
    width: 84px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
    padding: 9px 6px 8px;
    border-radius: 13px;
    outline: none;
    cursor: pointer;
    transition:
      background ${c} ease,
      box-shadow ${c} ease;
    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
    &:hover > div {
      transform: translateY(-2px) scale(1.035);
      box-shadow:
        0 14px 28px rgba(0, 0, 0, 0.5),
        inset 0 1px 0 rgba(255, 255, 255, 0.4),
        inset 0 -2px 6px rgba(0, 0, 0, 0.28);
    }
    span {
      padding: 2px 6px;
      border-radius: 5px;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      color: #fafafa;
      background: rgba(9, 9, 11, 0.26);
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.72);
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &:focus-visible {
      box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.92);
    }
  `,desktopIconSelected:e`
    background: rgba(255, 255, 255, 0.16);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16);
    span {
      background: rgba(0, 102, 255, 0.82);
      color: #fff;
    }
  `,iconTile:e`
    width: 52px;
    height: 52px;
    border-radius: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    box-shadow:
      0 8px 20px rgba(0, 0, 0, 0.45),
      inset 0 1px 0 rgba(255, 255, 255, 0.35),
      inset 0 -2px 6px rgba(0, 0, 0, 0.25);
    transition:
      transform ${c} ${f},
      box-shadow ${c} ease;
  `,windowsLayer:e`
    position: absolute;
    inset: 0;
    z-index: 10;
    pointer-events: none;
  `,window:e`
    position: absolute;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: ${v}px;
    pointer-events: auto;
    outline: none;
    background: ${t.winBg};
    backdrop-filter: saturate(1.18) blur(22px);
    -webkit-backdrop-filter: saturate(1.18) blur(22px);
    border: 1px solid ${t.border};
    box-shadow: ${t.shadowWindow};
    transition:
      border-color ${x} ease,
      box-shadow ${x} ease,
      opacity ${x} ease;
    &:focus-visible {
      box-shadow:
        ${t.shadowWindow},
        0 0 0 2px rgba(255, 127, 22, 0.74);
    }
  `,windowActive:e`
    border-color: rgba(255, 255, 255, 0.24);
    box-shadow:
      ${t.shadowWindow},
      0 0 0 1px rgba(255, 127, 22, 0.12);
  `,header:e`
    height: 40px;
    flex: 0 0 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px 0 12px;
    background: ${t.barBg};
    border-bottom: 1px solid ${t.border};
    cursor: grab;
    &:active {
      cursor: grabbing;
    }
  `,headerTitle:e`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    font-weight: 500;
    color: ${t.text};
  `,headerBtns:e`
    display: flex;
    align-items: center;
    gap: 4px;
  `,winBtn:e`
    width: 26px;
    height: 26px;
    border: none;
    background: transparent;
    color: ${t.textMuted};
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.12s ease;
    &:hover {
      background: ${t.hoverBgStrong};
      color: ${t.hoverText};
    }
  `,winBtnClose:e`
    &:hover {
      background: #ef4444;
      color: #fff;
    }
  `,content:e`
    flex: 1;
    overflow: auto;
    position: relative;
    background: ${t.contentBg};
  `,resizeHandle:e`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 16px;
    height: 16px;
    cursor: nwse-resize;
    z-index: 5;
    &::after {
      content: "";
      position: absolute;
      right: 3px;
      bottom: 3px;
      width: 7px;
      height: 7px;
      border-right: 2px solid ${t.borderSolid};
      border-bottom: 2px solid ${t.borderSolid};
    }
  `,resizeArea:e`
    position: absolute;
    z-index: 5;
  `,loading:e`
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `,taskbar:e`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: ${j}px;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    background: ${t.barBgStrong};
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border-top: 1px solid ${t.border};
  `,startBtn:e`
    width: 40px;
    height: 40px;
    border: none;
    background: transparent;
    color: ${l};
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.12s ease;
    &:hover {
      background: ${t.hoverBgStrong};
    }
  `,taskbarApps:e`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 0 12px;
    overflow-x: auto;
  `,taskItem:e`
    height: 40px;
    padding: 0 14px;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: ${t.textSecondary};
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 13px;
    max-width: 180px;
    transition: all 0.12s ease;
    &:hover {
      background: ${t.hoverBg};
      color: ${t.hoverText};
    }
    span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `,taskItemActive:e`
    background: ${t.hoverBgStrong};
    color: ${t.hoverText};
    border-bottom: 2px solid ${l};
  `,tray:e`
    display: flex;
    align-items: center;
    gap: 14px;
    color: ${t.textSecondary};
    font-size: 12px;
  `,clock:e`
    text-align: right;
    line-height: 1.2;
    .date {
      font-size: 10px;
      color: ${t.textMuted};
    }
  `,launcher:e`
    position: absolute;
    inset: 0;
    z-index: 60;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: max(64px, 8vh) clamp(16px, 5vw, 72px) ${h+24}px;
    background: ${t.dimBg};
    backdrop-filter: saturate(1.15) blur(28px);
    -webkit-backdrop-filter: saturate(1.15) blur(28px);
    animation: launcherIn ${x} ${f};
    @keyframes launcherIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @media (max-width: 768px) {
      padding: 54px 14px ${h+18}px;
      align-items: flex-start;
    }
  `,launcherSurface:e`
    width: min(920px, 100%);
    max-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,launcherSearch:e`
    display: flex;
    align-items: center;
    gap: 10px;
    width: min(420px, 100%);
    min-height: 44px;
    padding: 0 15px;
    margin-bottom: clamp(24px, 5vh, 48px);
    border-radius: 13px;
    color: ${t.textMuted};
    background: ${t.floatBg};
    border: 1px solid ${t.borderStrong};
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.14);
    input {
      flex: 1;
      min-width: 0;
      background: transparent;
      border: none;
      outline: none;
      color: ${t.text};
      font-size: 15px;
      &::placeholder {
        color: ${t.textMuted};
      }
    }
    &:focus-within {
      border-color: rgba(255, 255, 255, 0.36);
      box-shadow:
        0 8px 28px rgba(0, 0, 0, 0.14),
        0 0 0 3px rgba(255, 127, 22, 0.18);
    }
  `,launcherGrid:e`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(108px, 1fr));
    gap: clamp(16px, 3vw, 30px) clamp(12px, 2vw, 24px);
    overflow-y: auto;
    padding: 4px 8px 24px;
    align-content: start;
    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(88px, 1fr));
      gap: 16px 8px;
    }
  `,launcherItem:e`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    min-height: 108px;
    padding: 10px 8px;
    border-radius: 15px;
    outline: none;
    cursor: pointer;
    transition:
      background ${c} ease,
      transform ${c} ${f};
    &:hover {
      background: ${t.subtleBg};
      transform: translateY(-2px);
    }
    span {
      max-width: 120px;
      font-size: 13px;
      line-height: 17px;
      color: ${t.text};
      text-align: center;
      text-shadow: 0 1px 5px rgba(0, 0, 0, 0.28);
    }
    &:focus-visible {
      box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.72);
    }
  `,launcherIcon:e`
    width: 64px;
    height: 64px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    box-shadow:
      0 12px 24px rgba(0, 0, 0, 0.28),
      inset 0 1px 0 rgba(255, 255, 255, 0.34);
  `,launcherEmpty:e`
    grid-column: 1 / -1;
    padding: 48px 16px;
    color: ${t.textSecondary};
    font-size: 14px;
    text-align: center;
  `,emptyHint:e`
    position: absolute;
    inset: 0 0 ${j}px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 18px;
    color: ${l};
    pointer-events: none;
    opacity: 0.055;
    z-index: 0;
    img {
      width: 88px;
      height: 88px;
      border-radius: 50%;
      object-fit: contain;
      filter: drop-shadow(0 8px 28px rgba(0, 0, 0, 0.4));
    }
  `,emptyBrandName:e`
    font-family:
      "Inter",
      -apple-system,
      BlinkMacSystemFont,
      sans-serif;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 0.14em;
    color: #e2e8f0;
    text-shadow: 0 2px 24px rgba(0, 0, 0, 0.4);
  `,storeRoot:e`
    display: flex;
    flex-direction: column;
    height: 100%;
    color: ${t.text};
  `,storeHead:e`
    padding: 20px 24px 12px;
    h2 {
      margin: 0;
      font-size: 20px;
      font-weight: 600;
    }
    p {
      margin: 4px 0 0;
      font-size: 13px;
      color: ${t.textMuted};
    }
  `,storeToolbar:e`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px 12px;
    border-bottom: 1px solid ${t.border};
  `,storeBody:e`
    flex: 1;
    overflow-y: auto;
    padding: 8px 0 20px;
  `,storeGrid:e`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 14px;
    padding: 8px 24px 4px;
    align-content: start;
  `,storeCard:e`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
    border-radius: 14px;
    background: ${t.cardBg};
    border: 1px solid ${t.border};
    transition: border-color 0.15s ease;
    &:hover {
      border-color: rgba(255, 127, 22, 0.35);
    }
  `,storeCardTop:e`
    display: flex;
    align-items: center;
    gap: 12px;
    .meta {
      min-width: 0;
    }
    .name {
      font-size: 14px;
      font-weight: 600;
    }
    .status {
      font-size: 11px;
      margin-top: 2px;
    }
  `,storeTile:e`
    width: 44px;
    height: 44px;
    flex: 0 0 44px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  `,storeBtn:e`
    height: 32px;
    border: 1px solid ${t.borderStrong};
    background: transparent;
    color: ${t.text};
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    cursor: pointer;
    font-size: 13px;
    transition: all 0.12s ease;
    &:hover {
      background: ${t.hoverBg};
    }
  `,storeBtnInstall:e`
    border-color: ${l};
    color: ${l};
    &:hover {
      background: rgba(255, 127, 22, 0.14);
    }
  `,storeSectionTitle:e`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 16px 24px 2px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: ${t.textMuted};
  `,storeEmpty:e`
    padding: 14px 24px;
    color: ${t.textFaint};
    font-size: 13px;
  `,pluginBadge:e`
    display: inline-flex;
    align-items: center;
    padding: 1px 8px;
    border-radius: 999px;
    font-size: 11px;
    background: ${t.chipBg};
    color: ${t.textSecondary};
  `,storeToolbarRow:e`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 12px 24px 4px;
    flex-wrap: wrap;
  `,storeChips:e`
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
  `,storeChip:e`
    padding: 4px 12px;
    border-radius: 999px;
    font-size: 12px;
    cursor: pointer;
    color: ${t.textSecondary};
    background: ${t.chipBg};
    border: 1px solid transparent;
    transition: all 0.12s ease;
    &:hover {
      background: ${t.hoverBg};
    }
  `,storeChipActive:e`
    background: rgba(255, 127, 22, 0.16);
    border-color: ${l};
    color: ${t.hoverText};
  `,storeCardDesc:e`
    font-size: 12px;
    color: ${t.textMuted};
    margin-top: 2px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    min-height: 2.4em;
  `,storeCardMeta:e`
    font-size: 11px;
    color: ${t.textFaint};
    margin-top: 4px;
  `,storeActions:e`
    display: flex;
    gap: 8px;
    align-items: center;
  `,storePager:e`
    display: flex;
    justify-content: center;
    padding: 14px 0 4px;
  `,mcOverlay:e`
    position: absolute;
    inset: 0;
    z-index: 80;
    display: flex;
    flex-direction: column;
    padding: clamp(20px, 4vw, 48px);
    gap: 20px;
    background: ${t.overlayBg};
    backdrop-filter: saturate(1.1) blur(26px);
    -webkit-backdrop-filter: saturate(1.1) blur(26px);
    animation: mcFade ${x} ease-out;
    @keyframes mcFade {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @media (max-width: 768px) {
      padding: 48px 14px ${h+18}px;
      gap: 14px;
    }
  `,mcSpaces:e`
    display: flex;
    align-items: center;
    gap: 14px;
    overflow-x: auto;
    padding: 4px 2px 12px;
    justify-content: center;
    flex-wrap: wrap;
  `,mcSpaceCard:e`
    width: 176px;
    height: 104px;
    border-radius: ${v}px;
    background: ${t.floatBg};
    border: 2px solid transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    outline: none;
    transition:
      background ${c} ease,
      border-color ${c} ease,
      transform ${c} ${f};
    color: ${t.text};
    &:hover {
      background: ${t.floatBgHover};
      transform: translateY(-2px);
    }
    &:focus-visible {
      box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.72);
    }
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      color: #fff;
    }
    .name {
      font-size: 13px;
      font-weight: 500;
      max-width: 150px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .count {
      font-size: 11px;
      color: ${t.textMuted};
    }
    @media (max-width: 768px) {
      width: 142px;
      height: 94px;
    }
  `,mcSpaceActive:e`
    border-color: ${l};
    background: rgba(255, 127, 22, 0.1);
  `,mcSpaceAdd:e`
    width: 56px;
    height: 104px;
    border-radius: ${v}px;
    border: 2px dashed ${t.borderStrong};
    background: transparent;
    color: ${t.textMuted};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    outline: none;
    transition:
      border-color ${c} ease,
      transform ${c} ${f},
      box-shadow ${c} ease;
    &:hover {
      border-color: ${l};
      color: ${l};
    }
  `,mcWindows:e`
    flex: 1;
    overflow-y: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 16px;
    align-content: start;
    padding-top: 12px;
    border-top: 1px solid ${t.border};
  `,mcWindowCard:e`
    height: 130px;
    border-radius: 12px;
    background: ${t.winCardBg};
    border: 1px solid ${t.border};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    transition: all 0.15s ease;
    color: ${t.text};
    &:hover {
      border-color: ${l};
      transform: translateY(-2px);
    }
    &:focus-visible {
      box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.72);
    }
    .title {
      font-size: 13px;
      font-weight: 500;
    }
  `,mcHint:e`
    text-align: center;
    color: ${t.textFaint};
    font-size: 13px;
    padding: 40px 0;
  `,headerMac:e`
    height: 42px;
    flex: 0 0 42px;
    display: flex;
    align-items: center;
    padding: 0 13px;
    background: ${t.barBg};
    border-bottom: 1px solid ${t.border};
    cursor: grab;
    transition:
      background ${x} ease,
      color ${x} ease;
    &:active {
      cursor: grabbing;
    }
    &[data-active="false"] {
      opacity: 0.86;
    }
  `,lights:e`
    display: flex;
    align-items: center;
    gap: 2px;
    width: 76px;
    height: 40px;
  `,light:e`
    position: relative;
    width: 24px;
    height: 34px;
    border-radius: 8px;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(0, 0, 0, 0.55);
    background: transparent;
    outline: none;
    &::before {
      content: "";
      position: absolute;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: var(--traffic-light-color);
      box-shadow: inset 0 0 0 0.5px rgba(0, 0, 0, 0.18);
    }
    svg {
      position: relative;
      z-index: 1;
      opacity: 0;
      transition: opacity ${c} ease;
    }
    &:hover svg {
      opacity: 1;
    }
    &:focus-visible {
      box-shadow: 0 0 0 2px ${l};
    }
    &:disabled {
      cursor: default;
      opacity: 0.55;
    }
  `,lightClose:e`
    --traffic-light-color: #ff5f57;
  `,lightMin:e`
    --traffic-light-color: #febc2e;
  `,lightMax:e`
    --traffic-light-color: #28c840;
  `,macTitle:e`
    flex: 1;
    text-align: center;
    min-width: 0;
    font-size: 12.5px;
    font-weight: 600;
    color: ${t.text};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `,menubar:e`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: ${u}px;
    z-index: 55;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px 0 12px;
    background: ${t.barBg};
    backdrop-filter: saturate(1.2) blur(20px);
    -webkit-backdrop-filter: saturate(1.2) blur(20px);
    border-bottom: 1px solid ${t.border};
    font-size: 12px;
    color: ${t.text};
  `,menubarLeft:e`
    display: flex;
    align-items: center;
    min-width: 0;
    gap: 4px;
  `,menubarBrand:e`
    display: flex;
    align-items: center;
    width: 24px;
    height: 24px;
    padding: 2px;
    border: 0;
    border-radius: 6px;
    background: transparent;
    cursor: pointer;
    outline: none;
    img {
      width: 20px;
      height: 20px;
      display: block;
      border-radius: 50%;
    }
    &:hover {
      background: ${t.hoverBg};
    }
    &:focus-visible {
      box-shadow: inset 0 0 0 2px ${l};
    }
  `,menubarName:e`
    min-height: 24px;
    max-width: 180px;
    display: inline-flex;
    align-items: center;
    padding: 0 8px;
    border-radius: 6px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    &:hover {
      background: ${t.hoverBg};
    }
    &:focus-visible {
      box-shadow: 0 0 0 2px ${l};
    }
  `,menubarItem:e`
    max-width: 180px;
    min-height: 24px;
    display: inline-flex;
    align-items: center;
    padding: 0 8px;
    border-radius: 6px;
    color: ${t.textSecondary};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,menubarRight:e`
    display: flex;
    align-items: center;
    gap: 3px;
    color: ${t.textSecondary};
    @media (max-width: 768px) {
      > svg {
        display: none;
      }
    }
  `,menubarBtn:e`
    display: flex;
    align-items: center;
    background: none;
    border: none;
    color: ${t.textSecondary};
    cursor: pointer;
    min-width: 28px;
    height: 28px;
    justify-content: center;
    padding: 0 6px;
    border-radius: 6px;
    outline: none;
    &:hover {
      background: ${t.hoverBg};
      color: ${t.hoverText};
    }
    &:focus-visible {
      box-shadow: inset 0 0 0 2px ${l};
      color: ${t.hoverText};
    }
  `,dock:e`
    position: absolute;
    left: 50%;
    bottom: 10px;
    transform: translateX(-50%);
    z-index: 50;
    display: flex;
    align-items: flex-end;
    gap: 6px;
    max-width: calc(100vw - 20px);
    padding: 7px 10px 9px;
    border-radius: ${S}px;
    background: ${t.floatBg};
    backdrop-filter: saturate(1.24) blur(24px);
    -webkit-backdrop-filter: saturate(1.24) blur(24px);
    border: 1px solid ${t.dockBorder};
    box-shadow: ${t.shadowFloat};
    overflow-x: auto;
    overflow-y: visible;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    transition:
      transform ${x} ${f},
      opacity ${x} ease;
    @media (max-width: 768px) {
      gap: 4px;
      bottom: max(8px, env(safe-area-inset-bottom));
      padding: 6px 8px 8px;
    }
  `,dockHidden:e`
    transform: translateX(-50%) translateY(140%);
    opacity: 0;
    pointer-events: none;
  `,dockDropActive:e`
    border-color: ${l};
    box-shadow:
      0 0 0 3px rgba(255, 127, 22, 0.22),
      ${t.shadowFloat};
  `,dockItem:e`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 0 0 auto;
    min-width: 48px;
    min-height: 52px;
    justify-content: flex-end;
    border-radius: 13px;
    outline: none;
    cursor: pointer;
    transition: transform ${c} ${f};
    transform-origin: bottom center;
    &:hover {
      transform: scale(1.18) translateY(-5px);
    }
    &:focus-visible {
      box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.78);
    }
    @media (max-width: 768px) {
      min-width: 44px;
      min-height: 48px;
      &:hover {
        transform: none;
      }
    }
  `,dockItemDragging:e`
    opacity: 0.62;
    transform: scale(1.12) translateY(-8px);
  `,dockIcon:e`
    width: 48px;
    height: 48px;
    border-radius: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    box-shadow:
      0 7px 16px rgba(0, 0, 0, 0.28),
      inset 0 1px 0 rgba(255, 255, 255, 0.28);
    @media (max-width: 768px) {
      width: 44px;
      height: 44px;
      border-radius: 12px;
    }
  `,dockDot:e`
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${t.textStrong};
  `,dockTooltip:e`
    position: absolute;
    bottom: 66px;
    left: 50%;
    transform: translateX(-50%);
    padding: 5px 9px;
    border-radius: 7px;
    background: ${t.tooltipBg};
    border: 1px solid ${t.borderStrong};
    color: ${t.text};
    font-size: 12px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    box-shadow: ${t.shadowFloat};
    transition: opacity ${c} ease;
  `,dockDivider:e`
    width: 1px;
    height: 42px;
    margin: 0 4px;
    background: ${t.dockDivider};
  `,dockBadge:e`
    position: absolute;
    top: -2px;
    right: -2px;
    min-width: 18px;
    height: 18px;
    padding: 0 4px;
    border-radius: 9px;
    background: #ef4444;
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${t.badgeRing};
  `,dockDropMarker:e`
    position: absolute;
    left: -5px;
    bottom: 5px;
    width: 3px;
    height: 40px;
    border-radius: 2px;
    background: ${l};
    box-shadow: 0 0 12px ${l};
  `,notificationMenuButton:e`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    min-width: 28px;
    height: 28px;
    padding: 0 6px;
    border: 0;
    border-radius: 6px;
    background: transparent;
    color: ${t.textSecondary};
    cursor: pointer;
    outline: none;
    &:hover {
      background: ${t.hoverBg};
      color: ${t.hoverText};
    }
    &:focus-visible {
      box-shadow: inset 0 0 0 2px ${l};
      color: ${t.hoverText};
    }
  `,notificationMenuCount:e`
    font-size: 11px;
    line-height: 1;
    font-weight: 600;
    color: currentColor;
    font-variant-numeric: tabular-nums;
  `,toastStack:e`
    position: absolute;
    top: ${u+12}px;
    right: 14px;
    z-index: 70;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 340px;
    max-width: calc(100vw - 28px);
    pointer-events: none;
  `,toast:e`
    pointer-events: auto;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 12px;
    border-radius: ${S}px;
    cursor: pointer;
    background: ${t.toastBg};
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    border: 1px solid ${t.border};
    box-shadow: ${t.shadowToast};
    transition: transform ${c} ${f};
    &:hover {
      transform: scale(1.01);
    }
  `,toastEnter:e`
    @keyframes osToastIn {
      from {
        opacity: 0;
        transform: translateX(24px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    animation: osToastIn 0.24s cubic-bezier(0.2, 0.8, 0.2, 1);
  `,toastIcon:e`
    flex: 0 0 auto;
    width: 30px;
    height: 30px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${t.subtleBg};
  `,toastBody:e`
    flex: 1;
    min-width: 0;
  `,toastTitle:e`
    font-size: 13px;
    font-weight: 600;
    color: ${t.textStrong};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,toastText:e`
    font-size: 12px;
    color: ${t.textSecondary};
    margin-top: 2px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `,toastMeta:e`
    font-size: 10px;
    color: ${t.textMuted};
    margin-top: 4px;
  `,toastClose:e`
    flex: 0 0 auto;
    width: 22px;
    height: 22px;
    border: none;
    background: transparent;
    color: ${t.textMuted};
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      background: ${t.hoverBgStrong};
      color: ${t.hoverText};
    }
  `,notifyActions:e`
    display: flex;
    gap: 8px;
    margin-top: 8px;
  `,notifyApproveBtn:e`
    flex: 1;
    height: 28px;
    border: none;
    border-radius: 8px;
    background: ${l};
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
      filter: brightness(1.05);
    }
    &:disabled {
      opacity: 0.5;
      cursor: default;
    }
  `,notifyDenyBtn:e`
    flex: 1;
    height: 28px;
    border: 1px solid ${t.borderStrong};
    border-radius: 8px;
    background: transparent;
    color: ${t.text};
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
      background: ${t.hoverBg};
    }
    &:disabled {
      opacity: 0.5;
      cursor: default;
    }
  `,ncPanel:e`
    position: absolute;
    top: ${u+8}px;
    right: 10px;
    bottom: 10px;
    width: 340px;
    max-width: calc(100vw - 20px);
    z-index: 65;
    display: flex;
    flex-direction: column;
    border-radius: ${S}px;
    background: ${t.panelBg};
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid ${t.border};
    box-shadow: ${t.shadowPanel};
    overflow: hidden;
    @media (max-width: 768px) {
      top: ${u+6}px;
      right: 6px;
      bottom: max(8px, env(safe-area-inset-bottom));
      width: calc(100vw - 12px);
      max-width: none;
    }
  `,ncHeader:e`
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 14px;
    border-bottom: 1px solid ${t.border};
  `,ncTitle:e`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 600;
    color: ${t.textStrong};
  `,ncIconBtn:e`
    width: 36px;
    height: 36px;
    border: none;
    background: transparent;
    color: ${t.textMuted};
    border-radius: ${ke}px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    outline: none;
    &:hover {
      background: ${t.hoverBgStrong};
      color: ${t.hoverText};
    }
    &:focus-visible {
      box-shadow: inset 0 0 0 2px ${l};
    }
  `,ncList:e`
    flex: 1;
    overflow-y: auto;
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,ncEmpty:e`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: ${t.textFaint};
    font-size: 13px;
    padding: 40px 0;
  `,ncItem:e`
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 10px;
    border-radius: 12px;
    cursor: pointer;
    outline: none;
    background: ${t.faintBg};
    transition: background 0.12s ease;
    &:hover {
      background: ${t.hoverBg};
    }
    &:focus-visible {
      box-shadow: inset 0 0 0 2px ${l};
    }
  `,ncItemIcon:e`
    flex: 0 0 auto;
    width: 26px;
    height: 26px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${t.subtleBg};
  `,ncItemBody:e`
    flex: 1;
    min-width: 0;
  `,ncItemTitle:e`
    font-size: 13px;
    font-weight: 600;
    color: ${t.text};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,ncItemText:e`
    font-size: 12px;
    color: ${t.textMuted};
    margin-top: 2px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `,ncItemTime:e`
    flex: 0 0 auto;
    font-size: 10px;
    color: ${t.textFaint};
  `,settingsRoot:e`
    display: flex;
    height: 100%;
  `,settingsSidebar:e`
    flex: 0 0 220px;
    width: 220px;
    overflow-y: auto;
    padding: 10px;
    border-right: 1px solid ${t.border};
    background: ${t.sideBg};
  `,settingsNavItem:e`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px 12px;
    border-radius: 8px;
    cursor: pointer;
    color: ${t.textSecondary};
    font-size: 13px;
    margin-bottom: 2px;
    transition: background 0.12s ease;
    &:hover {
      background: ${t.subtleBg};
    }
  `,settingsNavActive:e`
    background: rgba(255, 127, 22, 0.16);
    color: ${t.hoverText};
  `,settingsPane:e`
    flex: 1;
    overflow: auto;
    position: relative;
  `,boot:e`
    position: fixed;
    inset: 0;
    z-index: 200;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 26px;
    background: radial-gradient(
      120% 120% at 50% 40%,
      #14162e 0%,
      #0b1120 60%,
      #05070f 100%
    );
    color: #e2e8f0;
    animation: bootFadeIn 0.4s ease-out;
    @keyframes bootFadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `,bootExit:e`
    animation: bootFadeOut 0.4s ease-in forwards;
    @keyframes bootFadeOut {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  `,bootBrand:e`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    color: ${l};
    animation: bootPulse 2s ease-in-out infinite;
    @keyframes bootPulse {
      0%,
      100% {
        opacity: 0.85;
        transform: scale(1);
      }
      50% {
        opacity: 1;
        transform: scale(1.04);
      }
    }
  `,bootName:e`
    font-family:
      "Inter",
      -apple-system,
      BlinkMacSystemFont,
      sans-serif;
    font-size: 26px;
    font-weight: 700;
    letter-spacing: 0.06em;
    color: #f1f5f9;
  `,bootBar:e`
    width: 220px;
    height: 4px;
    border-radius: 999px;
    overflow: hidden;
    background: rgba(148, 163, 184, 0.18);
  `,bootBarFill:e`
    height: 100%;
    border-radius: 999px;
    background: linear-gradient(90deg, ${l}, #ffb066);
    transition: width 0.12s linear;
  `,bootHint:e`
    font-size: 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #64748b;
  `,desktopMenuAnchor:e`
    position: fixed;
    z-index: 90;
    width: 1px;
    height: 1px;
    pointer-events: none;
  `,desktopContextMenu:e`
    .ant-dropdown-menu {
      min-width: 190px;
      padding: 6px;
      border: 1px solid ${t.border};
      border-radius: 12px;
      background: ${t.panelBg};
      box-shadow: ${t.shadowPanel};
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
    }
    .ant-dropdown-menu-item,
    .ant-dropdown-menu-submenu-title {
      min-height: 36px;
      border-radius: 7px;
    }
  `,wpOverlay:e`
    position: absolute;
    inset: 0;
    z-index: 95;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${t.dimBg};
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    animation: bootFadeIn 0.16s ease-out;
  `,wpPanel:e`
    width: min(560px, 92vw);
    max-height: 76vh;
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    background: ${t.panelBg};
    border: 1px solid ${t.border};
    box-shadow: ${t.shadowPanel};
    overflow: hidden;
  `,wpHead:e`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px;
    font-size: 14px;
    font-weight: 600;
    color: ${t.textStrong};
    border-bottom: 1px solid ${t.border};
  `,wpClose:e`
    width: 26px;
    height: 26px;
    border: none;
    background: transparent;
    color: ${t.textMuted};
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      background: ${t.hoverBgStrong};
      color: ${t.hoverText};
    }
  `,wpGrid:e`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
    padding: 16px;
    overflow-y: auto;
  `,wpItem:e`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 4px;
    border-radius: 13px;
    cursor: pointer;
    outline: none;
    span {
      font-size: 12px;
      color: ${t.textSecondary};
      text-align: center;
    }
    &:focus-visible {
      box-shadow: 0 0 0 2px ${l};
    }
  `,wpItemActive:e`
    span {
      color: ${t.hoverText};
      font-weight: 600;
    }
  `,wpSwatch:e`
    height: 78px;
    border-radius: 12px;
    border: 2px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
    transition: border-color 0.12s ease;
  `,menubarHidden:e`
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition:
      transform 0.22s ease,
      opacity 0.22s ease;
  `,menubarShown:e`
    transform: translateY(0);
    opacity: 1;
    transition:
      transform 0.22s ease,
      opacity 0.22s ease;
  `,spacesPanel:e`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 60;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    padding: 12px 18px;
    background: ${t.barBgStrong};
    backdrop-filter: saturate(1.2) blur(22px);
    -webkit-backdrop-filter: saturate(1.2) blur(22px);
    border-bottom: 1px solid ${t.border};
    transform: translateY(0);
    transition:
      transform ${x} ${f},
      opacity ${x} ease;
  `,spacesPanelHidden:e`
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
  `,spaceChip:e`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px 6px 6px;
    border-radius: 999px;
    cursor: pointer;
    border: 1px solid transparent;
    outline: none;
    transition:
      background ${c} ease,
      border-color ${c} ease;
    &:hover {
      background: ${t.hoverBg};
    }
    &:focus-visible {
      box-shadow: 0 0 0 2px ${l};
    }
    .avatar {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-weight: 700;
      font-size: 14px;
    }
    .name {
      font-size: 13px;
      color: ${t.text};
      white-space: nowrap;
    }
  `,spaceChipActive:e`
    border-color: ${l};
    background: rgba(255, 127, 22, 0.14);
  `,snapPreview:e`
    position: absolute;
    z-index: 9;
    border-radius: ${v}px;
    background: rgba(255, 127, 22, 0.18);
    border: 2px solid ${l};
    pointer-events: none;
    transition:
      left 0.12s ease,
      top 0.12s ease,
      width 0.12s ease,
      height 0.12s ease;
  `,iconsLayer:e`
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
  `,iconAbsolute:e`
    position: absolute;
    pointer-events: auto;
    touch-action: none;
  `,windowMinimizing:e`
    transform: scale(0.2) translateY(60vh);
    opacity: 0;
    transition:
      transform ${x} ease-in,
      opacity ${x} ease-in;
    transform-origin: bottom center;
  `,reducedMotion:e`
    @media (prefers-reduced-motion: reduce) {
      animation: none !important;
      transition-duration: 1ms !important;
    }
  `}));function at(){const{isDark:e}=Z();return Ae(e?Be:ze)}function Te(e,t,o){const n=u,r=o-u;if(e==="maximize")return{x:0,y:n,w:t,h:r};const a=Math.floor(t/2);return e==="left"?{x:0,y:n,w:a,h:r}:{x:t-a,y:n,w:a,h:r}}const k=[{routeId:"core.chat",labelKey:"nav.chat",fallback:"Chat",Icon:ae,accent:"#3b82f6",defaultW:880,defaultH:640},{routeId:"core.files",labelKey:"nav.files",fallback:"Files",Icon:ie,accent:"#f36b21",defaultW:1180,defaultH:720,minW:760,minH:480},{routeId:"core.skills",labelKey:"nav.skills",fallback:"Skills",Icon:de,accent:"#8b5cf6",defaultW:780,defaultH:560},{routeId:"core.cron-jobs",labelKey:"nav.cronJobs",fallback:"Cron Jobs",Icon:le,accent:"#f97316",defaultW:720,defaultH:520},{routeId:"core.mcp",labelKey:"nav.mcp",fallback:"MCP",Icon:se,accent:"#06b6d4",defaultW:760,defaultH:540},{routeId:"core.tools",labelKey:"nav.tools",fallback:"Tools",Icon:pe,accent:"#10b981",defaultW:720,defaultH:500},{routeId:"core.heartbeat",labelKey:"nav.heartbeat",fallback:"Heartbeat",Icon:ce,accent:"#ef4444",defaultW:560,defaultH:440},{routeId:"core.channels",labelKey:"nav.channels",fallback:"Channels",Icon:xe,accent:"#22c55e",defaultW:680,defaultH:500},{routeId:"core.inbox",labelKey:"nav.inbox",fallback:"Inbox",Icon:ge,accent:"#eab308",defaultW:640,defaultH:500},{routeId:"core.sessions",labelKey:"nav.sessions",fallback:"Sessions",Icon:ue,accent:"#0ea5e9",defaultW:820,defaultH:600,minW:780,minH:480},{routeId:"core.workspace",labelKey:"nav.workspace",fallback:"Workspace",Icon:fe,accent:"#f59e0b",defaultW:900,defaultH:640},{routeId:"core.acp",labelKey:"nav.acp",fallback:"ACP",Icon:be,accent:"#14b8a6",defaultW:780,defaultH:560},{routeId:"core.agent-config",labelKey:"nav.agentConfig",fallback:"Agent Config",Icon:he,accent:"#7c3aed",defaultW:1020,defaultH:640,minW:900,minH:520},{routeId:"core.agent-stats",labelKey:"nav.agentStats",fallback:"Agent Stats",Icon:me,accent:"#ec4899",defaultW:820,defaultH:600,minW:900,minH:520}];function Me(e){return e===T.routeId?T:e===M.routeId?M:e===C.routeId?C:k.find(t=>t.routeId===e)}const T={routeId:"os.store",labelKey:"os.appStore",fallback:"App Store",Icon:we,accent:"#FF7F16",defaultW:860,defaultH:600},M={routeId:"core.marketplace",labelKey:"nav.marketplace",fallback:"Extension",Icon:ve,accent:"#0ea5e9",defaultW:1180,defaultH:720,minW:760,minH:480},C={routeId:"os.settings",labelKey:"os.systemSettings",fallback:"System Settings",Icon:ye,accent:"#6b7280",defaultW:1200,defaultH:720,minW:960,minH:560},U="/apps/",O=["#6366f1","#ec4899","#14b8a6","#f59e0b","#8b5cf6","#0ea5e9","#ef4444","#22c55e"];function Ce(e){let t=0;for(let o=0;o<e.length;o+=1)t=t*31+e.charCodeAt(o)>>>0;return O[t%O.length]}function He(e){return(e.replace(U,"").split("/")[0]||e).split(/[-_]/).filter(Boolean).map(o=>o.charAt(0).toUpperCase()+o.slice(1)).join(" ")}function X(e,t){const o=new Map;for(const r of t)r.route&&typeof r.label=="string"&&o.set(r.route,r.label);const n=new Map;for(const r of e)!r.path.startsWith(U)||r.source==="core"||n.has(r.source)||n.set(r.source,r);return[...n.entries()].map(([r,a])=>{const i=o.get(a.id)??He(a.path)??r;return{routeId:a.id,labelKey:i,fallback:i,Icon:$e,accent:Ce(r),defaultW:960,defaultH:680,source:r}})}const F=k.map(e=>e.routeId),Pe=w()($(e=>({installed:F,install:t=>e(o=>o.installed.includes(t)?o:{installed:[...o.installed,t]}),uninstall:t=>e(o=>({installed:o.installed.filter(n=>n!==t)})),installAll:()=>e({installed:k.map(t=>t.routeId)})}),{name:"qwenpaw-os-installed",version:1,migrate:e=>{const t=e??{},o=t.installed??[],n=Array.from(new Set([...o,...F]));return{...t,installed:n}}}));function We(){const e=G(),t=Q();return Y.useMemo(()=>X(e,t),[e,t])}let R=null,_=null,D=new Map;function q(){const e=ee.snapshot(),t=te.snapshot();return(e!==R||t!==_)&&(R=e,_=t,D=new Map(X(e,t).map(o=>[o.routeId,o]))),D}function V(e){return Me(e)??q().get(e)}function je(e){return[...q().values()].filter(t=>t.source===e)}function it(){const e=G(),t=Pe(n=>n.installed),o=We();return Y.useMemo(()=>{const n=new Set(e.map(d=>d.id)),r=new Set(t),a=k.filter(d=>n.has(d.routeId)&&r.has(d.routeId)),i=[T,M,...a,...o,C];return{apps:i,appById:new Map(i.map(d=>[d.routeId,d]))}},[e,t,o])}const Oe=80,Fe=360,Re=260,_e=40,De=140;function Ee(e,t,o){const n=Math.max(u,o-t);return Math.min(Math.max(e,u),n)}function H(e,t,o,n){const r=Math.max(Fe,o-_e),a=Math.max(Re,n-De),i=Math.min(Math.max(e.w,t.minW??0),r),d=Math.min(Math.max(e.h,t.minH??0),a),s=Math.min(Math.max(e.x,0),Math.max(0,o-Oe)),p=Ee(e.y,d,n);return{x:s,y:p,w:i,h:d}}const E=100,N=28,Ne=250;function Ke(e){let t=null,o=null;const n=()=>{if(t!==null&&clearTimeout(t),t=null,!o)return;const{name:r,value:a}=o;o=null,!(typeof window>"u")&&window.localStorage.setItem(r,a)};return typeof window<"u"&&window.addEventListener("pagehide",n),{getItem:r=>window.localStorage.getItem(r),setItem:(r,a)=>{o={name:r,value:a},t!==null&&clearTimeout(t),t=setTimeout(n,e)},removeItem:r=>{(o==null?void 0:o.name)===r&&(t!==null&&clearTimeout(t),t=null,o=null),window.localStorage.removeItem(r)}}}const Le=Ke(Ne);function Ge(e,t,o){const n=V(e.id),r={minW:n==null?void 0:n.minW,minH:n==null?void 0:n.minH};return{...e,...H(e,r,t,o),prev:e.prev?H(e.prev,r,t,o):void 0}}function y(e,t,o){const n={};for(const[r,a]of Object.entries(e??{}))n[r]=Ge(a,t,o);return n}const m=w()($((e,t)=>({windows:{},order:[],activeId:null,zCounter:E,launcherOpen:!1,spaceId:"default",saved:{},missionControlOpen:!1,open:(o,n)=>{const r=t();if(r.windows[o]){e(g=>({windows:{...g.windows,[o]:{...g.windows[o],minimized:!1}}})),t().focus(o);return}const a=r.order.length,i=V(o),d=H({x:80+a*N,y:60+a*N,w:(n==null?void 0:n.w)??(i==null?void 0:i.defaultW)??820,h:(n==null?void 0:n.h)??(i==null?void 0:i.defaultH)??580},{minW:(n==null?void 0:n.minW)??(i==null?void 0:i.minW),minH:(n==null?void 0:n.minH)??(i==null?void 0:i.minH)},window.innerWidth,window.innerHeight),s=r.zCounter+1,p={id:o,...d,z:s,minimized:!1,maximized:!1};e(g=>({windows:{...g.windows,[o]:p},order:[...g.order,o],activeId:o,zCounter:s,launcherOpen:!1}))},close:o=>e(n=>{const r={...n.windows};delete r[o];const a=n.order.filter(i=>i!==o);return{windows:r,order:a,activeId:n.activeId===o?a[a.length-1]??null:n.activeId}}),focus:o=>e(n=>{const r=n.windows[o];if(!r)return{};const a=n.zCounter+1;return{windows:{...n.windows,[o]:{...r,z:a,minimized:!1}},zCounter:a,activeId:o}}),minimize:o=>e(n=>{const r=n.windows[o];return r?{windows:{...n.windows,[o]:{...r,minimized:!0}},activeId:n.activeId===o?null:n.activeId}:{}}),toggleFromTaskbar:o=>{const n=t(),r=n.windows[o];r&&(r.minimized?t().focus(o):n.activeId===o?t().minimize(o):t().focus(o))},toggleMaximize:o=>e(n=>{const r=n.windows[o];if(!r)return{};if(r.maximized){const a=r.prev??{x:80,y:60,w:820,h:580};return{windows:{...n.windows,[o]:{...r,...a,maximized:!1,prev:void 0}}}}return{windows:{...n.windows,[o]:{...r,maximized:!0,prev:{x:r.x,y:r.y,w:r.w,h:r.h}}}}}),move:(o,n,r)=>e(a=>{const i=a.windows[o];return i?{windows:{...a.windows,[o]:{...i,x:n,y:r}}}:{}}),resize:(o,n)=>e(r=>{const a=r.windows[o];return a?{windows:{...r.windows,[o]:{...a,...n}}}:{}}),snap:(o,n)=>e(r=>{const a=r.windows[o];if(!a)return{};const i=a.prev??{x:a.x,y:a.y,w:a.w,h:a.h};if(n==="maximize")return{windows:{...r.windows,[o]:{...a,maximized:!0,prev:i}}};const d=Te(n,window.innerWidth,window.innerHeight);return{windows:{...r.windows,[o]:{...a,...d,maximized:!1,prev:i}}}}),setLauncher:o=>e({launcherOpen:o}),switchSpace:o=>e(n=>{if(o===n.spaceId)return{missionControlOpen:!1};const r={...n.saved};n.order.length>0?r[n.spaceId]={windows:n.windows,order:n.order,activeId:n.activeId,zCounter:n.zCounter}:delete r[n.spaceId];const a=r[o]??{windows:{},order:[],activeId:null,zCounter:E};return delete r[o],{saved:r,spaceId:o,windows:a.windows,order:a.order,activeId:a.activeId,zCounter:a.zCounter,launcherOpen:!1,missionControlOpen:!1}}),setMissionControl:o=>e({missionControlOpen:o}),clampToViewport:()=>e(o=>{const n=window.innerWidth,r=window.innerHeight,a={};for(const[i,d]of Object.entries(o.saved))a[i]={...d,windows:y(d.windows,n,r)};return{windows:y(o.windows,n,r),saved:a}}),purgeApps:o=>e(n=>{const r=s=>{const p=new Set([...s.order,...Object.keys(s.windows)].filter(b=>o.has(b)));if(p.size===0)return{space:s,changed:!1};const g={...s.windows};for(const b of p)delete g[b];const I=s.order.filter(b=>!o.has(b)),J=s.activeId!==null&&!o.has(s.activeId)?s.activeId:I[I.length-1]??null;return{space:{...s,windows:g,order:I,activeId:J},changed:!0}},a=r({windows:n.windows,order:n.order,activeId:n.activeId,zCounter:n.zCounter}),i={};let d=!1;for(const[s,p]of Object.entries(n.saved)){const g=r(p);i[s]=g.space,d=d||g.changed}return!a.changed&&!d?{}:{windows:a.space.windows,order:a.space.order,activeId:a.space.activeId,saved:d?i:n.saved}}),purgeSpace:o=>e(n=>{const r={};if(o in n.saved){const a={...n.saved};delete a[o],r.saved=a}return o===n.spaceId&&(r.windows={},r.order=[],r.activeId=null),r})}),{name:"qwenpaw-os-windows",version:3,storage:oe(()=>Le),partialize:e=>({windows:e.windows,order:e.order,activeId:e.activeId,zCounter:e.zCounter,spaceId:e.spaceId,saved:e.saved}),migrate:e=>{const t=e??{},o=window.innerWidth,n=window.innerHeight,r={};for(const[a,i]of Object.entries(t.saved??{}))r[a]={...i,windows:y(i.windows,o,n)};return{...t,windows:y(t.windows,o,n),saved:r}},onRehydrateStorage:()=>e=>{e==null||e.clampToViewport()}})),B=104,Ye=96,Ue=20,K=u+8+20;function L(e,t){const o=Math.max(B,t-K-h),n=Math.max(1,Math.floor(o/B)),r=Math.floor(e/n),a=e%n;return{x:Ue+r*Ye,y:K+a*B}}const Xe=w()($(e=>({positions:{},layout:"free",setPosition:(t,o,n)=>e(r=>({positions:{...r.positions,[t]:{x:o,y:n}}})),setLayout:t=>e({layout:t}),arrange:(t,o)=>e(n=>{const r={...n.positions};return t.forEach((a,i)=>{r[a]=L(i,o)}),{positions:r}}),reflowToViewport:(t,o)=>e(n=>{if(n.layout!=="free")return{};const r={...n.positions};let a=!1;return t.forEach((i,d)=>{const s=L(d,o),p=n.positions[i];((p==null?void 0:p.x)!==s.x||(p==null?void 0:p.y)!==s.y)&&(r[i]=s,a=!0)}),a?{positions:r}:{}}),purge:t=>e(o=>{if(![...t].some(r=>r in o.positions))return{};const n={...o.positions};for(const r of t)delete n[r];return{positions:n}}),reset:()=>e({positions:{},layout:"free"})}),{name:"qwenpaw.os.iconPositions"})),z="os.settings",qe=new Set(["core.agents","core.models","core.skill-pool","core.environments","core.security","core.token-usage","core.backups","core.voice-transcription","core.debug"]);function dt(e){return e&&e.replace(/\/\*$/,"").replace(/\/:.*$/,"")||"/"}function P(e){return e.split(/[?#]/,1)[0].replace(/\/+$/,"")||"/"}function Ve(e,t){const o=P(e),n=P(t),r=o.split("/").filter(Boolean),a=n.split("/").filter(Boolean);let i=0;if(a.length===0)return r.length===0?1e3:-1;for(let d=0;d<a.length;d+=1){const s=a[d];if(s==="*")return i+1;const p=r[d];if(!p)return-1;if(s.startsWith(":"))i+=2;else if(s===p)i+=s.length+4;else return-1}return r.length===a.length?i+1e3:i}function Je(e,t){var o;return e.source===void 0||e.source==="core"?e.id:((o=t.find(n=>n.source===e.source&&n.path.startsWith("/apps/")))==null?void 0:o.id)??e.id}function lt(e,t){if(P(e)==="/")return;let o,n=-1;for(const r of t){const a=Ve(e,r.path);a>n&&(o=r,n=a)}return o?Je(o,t):void 0}const Ze=w(e=>({targets:{},openApp:(t,o)=>{o!==void 0&&e(n=>{var r;return{targets:{...n.targets,[t]:{path:o,nonce:(((r=n.targets[t])==null?void 0:r.nonce)??0)+1}}}}),m.getState().open(t)},navigateTo:(t,o)=>{if(qe.has(t)){e(n=>{var r;return{targets:{...n.targets,[z]:{path:t,nonce:(((r=n.targets[z])==null?void 0:r.nonce)??0)+1}}}}),m.getState().open(z);return}e(n=>{var r;return{targets:{...n.targets,[t]:{path:o,nonce:(((r=n.targets[t])==null?void 0:r.nonce)??0)+1}}}}),m.getState().open(t)},purge:t=>e(o=>{if(![...t].some(r=>r in o.targets))return o;const n={...o.targets};for(const r of t)delete n[r];return{targets:n}})})),W=["core.chat","core.inbox","os.store"];function A(e){return Array.isArray(e)?[...new Set(e.filter(t=>typeof t=="string"))]:[...W]}const Qe=w()($(e=>({pinned:[...W],pin:(t,o)=>e(n=>{if(n.pinned.includes(t))return{};const r=[...n.pinned],a=Math.max(0,Math.min(o??r.length,r.length));return r.splice(a,0,t),{pinned:A(r)}}),unpin:t=>e(o=>({pinned:o.pinned.filter(n=>n!==t)})),move:(t,o)=>e(n=>{if(!n.pinned.includes(t)||t===o)return{};const r=n.pinned.filter(i=>i!==t),a=o?r.indexOf(o):r.length;return r.splice(a<0?r.length:a,0,t),{pinned:A(r)}}),purge:t=>e(o=>({pinned:o.pinned.filter(n=>!t.has(n))})),reset:()=>e({pinned:[...W]})}),{name:"qwenpaw.os.dock",merge:(e,t)=>{const o=e;return{...t,pinned:A(o==null?void 0:o.pinned)}}}));function et(e){const t=new Set(e);t.size!==0&&(m.getState().purgeApps(t),Xe.getState().purge(t),Ze.getState().purge(t),Qe.getState().purge(t))}function tt(e){et(je(e).map(t=>t.routeId))}function st(e){tt(e),ne(e)}function pt(e){m.getState().purgeSpace(e)}export{l as A,u as M,k as O,z as S,m as a,Te as b,Ee as c,Ze as d,lt as e,V as f,it as g,Qe as h,Pe as i,et as j,dt as k,T as l,Xe as m,L as n,C as o,pt as p,st as r,at as u};
