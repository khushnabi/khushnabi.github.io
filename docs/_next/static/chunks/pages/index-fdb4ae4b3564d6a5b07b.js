(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8679:function(e,r,n){"use strict";var t=n(1296),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(e){return t.isMemo(e)?o:s[e.$$typeof]||i}s[t.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[t.Memo]=o;var l=Object.defineProperty,d=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,_=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(r,n,t){if("string"!==typeof n){if(m){var i=_(n);i&&i!==m&&e(r,i,t)}var o=d(n);u&&(o=o.concat(u(n)));for(var s=c(r),f=c(n),v=0;v<o.length;++v){var g=o[v];if(!a[g]&&(!t||!t[g])&&(!f||!f[g])&&(!s||!s[g])){var x=p(n,g);try{l(r,g,x)}catch(h){}}}}return r}},6103:function(e,r){"use strict";var n="function"===typeof Symbol&&Symbol.for,t=n?Symbol.for("react.element"):60103,i=n?Symbol.for("react.portal"):60106,a=n?Symbol.for("react.fragment"):60107,o=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,l=n?Symbol.for("react.context"):60110,d=n?Symbol.for("react.async_mode"):60111,u=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,_=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.suspense_list"):60120,f=n?Symbol.for("react.memo"):60115,v=n?Symbol.for("react.lazy"):60116,g=n?Symbol.for("react.block"):60121,x=n?Symbol.for("react.fundamental"):60117,h=n?Symbol.for("react.responder"):60118,j=n?Symbol.for("react.scope"):60119;function b(e){if("object"===typeof e&&null!==e){var r=e.$$typeof;switch(r){case t:switch(e=e.type){case d:case u:case a:case s:case o:case _:return e;default:switch(e=e&&e.$$typeof){case l:case p:case v:case f:case c:return e;default:return r}}case i:return r}}}function y(e){return b(e)===u}r.AsyncMode=d,r.ConcurrentMode=u,r.ContextConsumer=l,r.ContextProvider=c,r.Element=t,r.ForwardRef=p,r.Fragment=a,r.Lazy=v,r.Memo=f,r.Portal=i,r.Profiler=s,r.StrictMode=o,r.Suspense=_,r.isAsyncMode=function(e){return y(e)||b(e)===d},r.isConcurrentMode=y,r.isContextConsumer=function(e){return b(e)===l},r.isContextProvider=function(e){return b(e)===c},r.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===t},r.isForwardRef=function(e){return b(e)===p},r.isFragment=function(e){return b(e)===a},r.isLazy=function(e){return b(e)===v},r.isMemo=function(e){return b(e)===f},r.isPortal=function(e){return b(e)===i},r.isProfiler=function(e){return b(e)===s},r.isStrictMode=function(e){return b(e)===o},r.isSuspense=function(e){return b(e)===_},r.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===a||e===u||e===s||e===o||e===_||e===m||"object"===typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===f||e.$$typeof===c||e.$$typeof===l||e.$$typeof===p||e.$$typeof===x||e.$$typeof===h||e.$$typeof===j||e.$$typeof===g)},r.typeOf=b},1296:function(e,r,n){"use strict";e.exports=n(6103)},145:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return y}});var t=n(5893),i=n(9008),a=n(9954),o=n.n(a),s=n(9086),c=n.n(s);function l(e){var r=e.skill,n=e.percentage;return(0,t.jsx)("div",{className:c().progress_container,children:(0,t.jsxs)("div",{className:c().circular,children:[(0,t.jsx)("div",{className:c().inner}),(0,t.jsx)("div",{className:c().number,children:r}),(0,t.jsxs)("div",{className:c().circle,children:[(0,t.jsx)("div",{className:"".concat(c().bar," ").concat(c().left),children:(0,t.jsx)("div",{className:" ".concat(c().progress," ").concat(c()[n])})}),(0,t.jsx)("div",{className:"".concat(c().bar," ").concat(c().right),children:(0,t.jsx)("div",{className:" ".concat(c().progress," ").concat(c()[n])})})]})]})})}var d=n(8489),u=n.n(d);function p(){return(0,t.jsxs)("div",{className:u().timeline,children:[(0,t.jsxs)("div",{className:u().timeline_div,children:[(0,t.jsxs)("div",{className:u().company,children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:u().company_name,children:"someghing"}),(0,t.jsx)("div",{className:"".concat(u().about," ").concat(u().company_about),children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo placeat commodi possimus"})]}),(0,t.jsxs)("p",{className:u().start,children:["started_at: ",(0,t.jsx)("b",{children:" 2/14/2020"})]}),(0,t.jsxs)("p",{className:u().end,children:["end_at : ",(0,t.jsx)("b",{children:"pergent"})," "]})]}),(0,t.jsx)("div",{className:u().timeline_company_line_dot}),(0,t.jsx)("div",{className:u().timeline_company_line}),(0,t.jsx)("div",{className:u().timeline_line}),(0,t.jsx)("div",{className:u().date})]}),(0,t.jsxs)("div",{className:u().timeline_div,children:[(0,t.jsx)("div",{className:u().date}),(0,t.jsx)("div",{className:u().timeline_line}),(0,t.jsx)("div",{className:u().timeline_company_line}),(0,t.jsx)("div",{className:u().timeline_company_line_dot}),(0,t.jsxs)("div",{className:"".concat(u().company," ").concat(u().company_second_row),children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:u().company_name,children:"someghing"}),(0,t.jsx)("div",{className:"".concat(u().about," ").concat(u().company_about),children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo placeat sdfas asdf asf adfa commodi possimus"})]}),(0,t.jsxs)("p",{className:u().start,children:["started_at: ",(0,t.jsx)("b",{children:" 2/14/2020"})]}),(0,t.jsxs)("p",{className:u().end,children:["end_at : ",(0,t.jsx)("b",{children:"pergent"})," "]})]})]}),(0,t.jsxs)("div",{className:u().timeline_div,children:[(0,t.jsxs)("div",{className:u().company,children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:u().company_name,children:"someghing"}),(0,t.jsx)("div",{className:"".concat(u().about," ").concat(u().company_about),children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo placeat commodi possimus"})]}),(0,t.jsxs)("p",{className:u().start,children:["started_at: ",(0,t.jsx)("b",{children:" 2/14/2020"})]}),(0,t.jsxs)("p",{className:u().end,children:["end_at : ",(0,t.jsx)("b",{children:"pergent"})," "]})]}),(0,t.jsx)("div",{className:u().timeline_company_line_dot}),(0,t.jsx)("div",{className:u().timeline_company_line}),(0,t.jsx)("div",{className:u().timeline_line}),(0,t.jsx)("div",{className:u().date})]})]})}var _=n(4942),m=n(7294),f=n(9049),v=n.n(f),g=n(9231);function x(e){var r,n,t="";if("string"===typeof e||"number"===typeof e)t+=e;else if("object"===typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(n=x(e[r]))&&(t&&(t+=" "),t+=n);else for(r in e)e[r]&&(t&&(t+=" "),t+=r);return t}function h(){for(var e,r,n=0,t="";n<arguments.length;)(e=arguments[n++])&&(r=x(e))&&(t&&(t+=" "),t+=r);return t}function j(e){var r=e.title,n=e.percentage,i=(0,m.useRef)(),a=(0,g.NM)(i,{rootMargin:"0px",threshold:1},{},{}).inViewport;return console.log({inViewport:a}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h3",{className:v().title,children:r}),(0,t.jsx)("div",{ref:i,className:h(v().progress_div,(0,_.Z)({},v().animate,a)),children:(0,t.jsx)("div",{className:"".concat(v().progress," ").concat(v()[n])})})]})}function b(){return(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:" ".concat(o().main_banner),children:[(0,t.jsx)("div",{className:o().image_background}),(0,t.jsx)("div",{className:" spacer ".concat(o().container),children:(0,t.jsxs)("div",{className:o().banner_content,children:[(0,t.jsx)("div",{className:o().banner_img_contaner,children:(0,t.jsx)("img",{src:"/images/hacker.jpg",alt:"sdfasdfa"})}),(0,t.jsxs)("div",{className:o().banner_text,children:[(0,t.jsx)("h1",{className:o().heading,children:"khushnabi"}),(0,t.jsx)("h4",{className:o().second_heading,children:"ui/ux developer"}),(0,t.jsx)("p",{className:o().about,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero laboriosam voluptatum incidunt! Enim est quos distinctio dolore. M voluptatum incidunt! Enim est quos distinctio dolore. M"})]})]})})]}),(0,t.jsx)("div",{className:"spacer container",children:(0,t.jsxs)("div",{className:o().profile_section,children:[(0,t.jsxs)("div",{className:o().profile,children:[(0,t.jsx)("h1",{className:o().third_heading,children:"Profile"}),(0,t.jsx)("p",{className:o().about,children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo fuga sed sit fugit voluptate corrupti quis totam modi sapiente, delectus laborum. Exercitationem rem quis ratione libero repudiandae obcaecati quasi accusamus?"})]}),(0,t.jsxs)("div",{className:o().education,children:[(0,t.jsx)("h1",{className:o().third_heading,children:"Education"}),(0,t.jsxs)("div",{className:o().education_specific,children:[(0,t.jsx)("div",{children:(0,t.jsx)("button",{className:o().badge,children:"2014-2020"})}),(0,t.jsx)("div",{children:(0,t.jsx)("p",{className:o().about,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore incidunt voluptas  "})})]}),(0,t.jsxs)("div",{className:o().education_specific,children:[(0,t.jsx)("div",{children:(0,t.jsx)("button",{className:o().badge,children:"2014-2020"})}),(0,t.jsx)("div",{children:(0,t.jsx)("p",{className:o().about,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore incidunt voluptas ncidunt voluptas  "})})]})]})]})}),(0,t.jsx)("div",{className:"spacer container",children:(0,t.jsxs)("div",{className:o().experiance_skill,children:[(0,t.jsxs)("div",{className:o().experiance,children:[(0,t.jsx)("h1",{className:o().third_heading,children:"experiance"}),(0,t.jsx)(p,{})]}),(0,t.jsxs)("div",{className:o().skill,children:[(0,t.jsx)("h1",{className:o().third_heading,children:"skill"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:(0,t.jsx)(l,{skill:"Html",percentage:"experianced"})}),(0,t.jsx)("div",{children:(0,t.jsx)(l,{skill:"css",percentage:"good"})}),(0,t.jsx)("div",{children:(0,t.jsx)(l,{skill:"javascript",percentage:"good"})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:(0,t.jsx)(l,{skill:"vue",percentage:"avarage"})}),(0,t.jsx)("div",{children:(0,t.jsx)(l,{skill:"xd",percentage:"good"})}),(0,t.jsx)("div",{children:(0,t.jsx)(l,{skill:"react",percentage:"beginner"})})]})]})]})}),(0,t.jsx)("div",{className:"container spacer",children:(0,t.jsxs)("div",{className:o().laguage,children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{className:o().third_heading,children:"language"}),(0,t.jsx)(j,{title:"hindi",percentage:"experianced"}),(0,t.jsx)(j,{title:"english",percentage:"avarage"})]}),(0,t.jsx)("div",{})]})})]})}function y(){return(0,t.jsxs)("div",{children:[(0,t.jsxs)(i.default,{children:[(0,t.jsx)("title",{children:"Create Next App"}),(0,t.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsx)(b,{})]})}},8581:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(145)}])},9086:function(e){e.exports={circular:"loader_circular__IbirU",inner:"loader_inner__3X66s",circle:"loader_circle__3U7HX",bar:"loader_bar__2PDS1",progress:"loader_progress__PYuMU",right:"loader_right__mg8aX",beginner:"loader_beginner__1yaIz","beginner-right":"loader_beginner-right__3eKKL",left:"loader_left__138Lk","beginner-left":"loader_beginner-left__1HvkE",avarage:"loader_avarage__2rbn_","avarage-right":"loader_avarage-right__2cVh7","avarage-left":"loader_avarage-left__1PAR7",good:"loader_good__2TWLR","good-right":"loader_good-right__K5TN-","good-left":"loader_good-left__1mVU2",experianced:"loader_experianced__GrjM0","experianced-right":"loader_experianced-right__2LXay","experianced-left":"loader_experianced-left__2dsmE",expert:"loader_expert__25SiC","expert-right":"loader_expert-right__3GWQU","expert-left":"loader_expert-left__1CSUu",progress_container:"loader_progress_container__1OmBb",number:"loader_number__1nxOu"}},9049:function(e){e.exports={progress_div:"progress_progress_div__ztkCK",progress:"progress_progress__1juw5",beginner:"progress_beginner__1teLX",avarage:"progress_avarage__1UFn6",good:"progress_good__OU8R9",experianced:"progress_experianced__2OT7N",excelent:"progress_excelent__16JRZ",title:"progress_title__2fc9Y"}},8489:function(e){e.exports={about:"timeline_about__2jV1r",timeline_div:"timeline_timeline_div__2gQFT",start:"timeline_start__3303t",end:"timeline_end__1PMVy",date:"timeline_date__30fPN",timeline_line:"timeline_timeline_line__1_CzV",company:"timeline_company__X24d8",timeline_company_line:"timeline_timeline_company_line__1xsLt",timeline_company_line_dot:"timeline_timeline_company_line_dot__2z45i",company_name:"timeline_company_name__1iZhO"}},9954:function(e){e.exports={main_banner:"Home_main_banner__34J7r",image_background:"Home_image_background__2Uak6",heading:"Home_heading__avXdp",banner_content:"Home_banner_content__ewSYK",banner_text:"Home_banner_text__1r8hM",banner_img_contaner:"Home_banner_img_contaner__QYE-F",second_heading:"Home_second_heading__2MrgT",third_heading:"Home_third_heading__1stOE",container:"Home_container__3sao-",about:"Home_about__2bjoL",profile_section:"Home_profile_section__zu3ou",education_specific:"Home_education_specific__14vBS",badge:"Home_badge__75WDt",experiance_skill:"Home_experiance_skill__1C1Hm",skill:"Home_skill__1Jkc3",laguage:"Home_laguage__OlsSz"}},9008:function(e,r,n){e.exports=n(639)},9231:function(e,r,n){"use strict";r.NM=void 0;var t=a(n(7095));t.default;var i=a(n(2659));function a(e){return e&&e.__esModule?e:{default:e}}r.NM=i.default;t.default},1319:function(e,r){"use strict";r.__esModule=!0,r.defaultProps=r.noop=r.defaultConfig=r.defaultOptions=void 0;r.defaultOptions={};r.defaultConfig={disconnectOnLeave:!1};var n=()=>{};r.noop=n;var t={onEnterViewport:n,onLeaveViewport:n};r.defaultProps=t},7095:function(e,r,n){"use strict";r.__esModule=!0,r.default=void 0;var t=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=c();if(r&&r.has(e))return r.get(e);var n={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=t?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}n.default=e,r&&r.set(e,n);return n}(n(7294)),i=s(n(8679)),a=s(n(2659)),o=n(1319);function s(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function l(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function d(){return(d=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function u(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function p(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var _=function(e,r,n){void 0===r&&(r=o.defaultOptions),void 0===n&&(n=o.defaultConfig);var s=(0,t.forwardRef)(((r,n)=>{var i,a=function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?u(Object(n),!0).forEach((function(r){p(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}({forwardedRef:n},(i=e).prototype&&i.prototype.isReactComponent&&!(e=>"function"===typeof e&&!(e.prototype&&e.prototype.render))(e)?{ref:n}:{});return t.default.createElement(e,d({},r,a))})),c=e=>{var{onEnterViewport:i=o.noop,onLeaveViewport:c=o.noop}=e,u=l(e,["onEnterViewport","onLeaveViewport"]),p=(0,t.useRef)(),{inViewport:_,enterCount:m,leaveCount:f}=(0,a.default)(p,r,n,{onEnterViewport:i,onLeaveViewport:c});return t.default.createElement(s,d({},u,{inViewport:_,enterCount:m,leaveCount:f,ref:p}))},_=e.displayName||e.name||"Component";return c.displayName="handleViewport("+_+")",(0,i.default)(c,s)};r.default=_},2659:function(e,r,n){"use strict";r.__esModule=!0,r.default=void 0;var t=n(7294),i=n(3935),a=n(1319),o=function(e,r,n,o){void 0===r&&(r=a.defaultOptions),void 0===n&&(n=a.defaultConfig),void 0===o&&(o=a.defaultProps);var{onEnterViewport:s,onLeaveViewport:c}=o,[,l]=(0,t.useState)(),d=(0,t.useRef)(),u=(0,t.useRef)(!1),p=(0,t.useRef)(!1),_=(0,t.useRef)(0),m=(0,t.useRef)(0);function f(e){var r=e[0]||{},{isIntersecting:t,intersectionRatio:i}=r,a="undefined"!==typeof t?t:i>0;if(!p.current&&a)return p.current=!0,s&&s(),_.current+=1,u.current=a,void l(a);p.current&&!a&&(p.current=!1,c&&c(),n.disconnectOnLeave&&d.current&&d.current.disconnect(),m.current+=1,u.current=a,l(a))}return(0,t.useEffect)((()=>{var n=d.current;return function(r){var{observerRef:n}=r,t=e.current;if(t){var a=(0,i.findDOMNode)(t);a&&(null==n||n.observe(a))}}({observerRef:n=function(e){var{observerRef:n}=e;return n||(d.current=new IntersectionObserver(f,r),d.current)}({observerRef:n})}),()=>{!function(r){var{observerRef:n}=r,t=e.current;if(t){var a=(0,i.findDOMNode)(t);a&&(null==n||n.unobserve(a))}null==n||n.disconnect(),d.current=null}({observerRef:n})}}),[e.current,r,n,s,c]),{inViewport:u.current,enterCount:_.current,leaveCount:m.current}};r.default=o}},function(e){e.O(0,[774,888,179],(function(){return r=8581,e(e.s=r);var r}));var r=e.O();_N_E=r}]);