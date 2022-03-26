(()=>{"use strict";const e={CLS:[.1,.25],FCP:[1800,3e3],FID:[100,300],LCP:[2500,4e3],TTFB:[501,1500]},t=window.webVitalsAnalyticsData[0].measurementVersion?window.webVitalsAnalyticsData[0].measurementVersion:"dimension1",n=window.webVitalsAnalyticsData[0].eventMeta?window.webVitalsAnalyticsData[0].eventMeta:"dimension2",i=window.webVitalsAnalyticsData[0].eventDebug?window.webVitalsAnalyticsData[0].eventDebug:"dimension3";let a=!1;function r(e){return window[e]||console.log}function o(e,t){return e>t[1]?"poor":e>t[0]?"ni":"good"}function c(e){try{let t=e.nodeName.toLowerCase();return"body"===t?"html>body":e.id?`${t}#${e.id}`:(e.className&&e.className.length&&(t+=`.${[...e.classList.values()].join(".")}`),`${c(e.parentElement)}>${t}`)}catch(e){return"(error)"}}function u(e,t){void 0===t&&(t=[]);const n=t[0],i=t[t.length-1];switch(e){case"LCP":if(i)return c(i.element);break;case"FID":if(n){const{name:e}=n;return`${e}(${c(n.target)})`}break;case"CLS":if(t.length){const e=t.reduce(((e,t)=>e&&e.value>t.value?e:t));if(e&&e.sources){const t=e.sources.reduce(((e,t)=>e.node&&e.previousRect.width*e.previousRect.height>t.previousRect.width*t.previousRect.height?e:t));if(t)return c(t.node)}}break;default:return"(not set)"}}function s(c){let{name:s,value:d,delta:f,id:v,entries:m}=c;const l=window.webVitalsAnalyticsData[0];l&&l.gtag_id&&(a||(!function(e){"gtag"in window&&gtag("config",e,{send_page_view:!1,transport_type:"beacon",measurement_version:"6",custom_map:{[t]:"measurement_version",[n]:"event_meta",[i]:"event_debug"}})}(l.gtag_id),a=!0),r("gtag")("event",s,{event_category:"Web Vitals",event_label:v,value:Math.round("CLS"===s?1e3*f:f),non_interaction:!0,event_meta:o(d,e[s]),event_debug:u(s,m)})),l&&l.ga_id&&r("ga")("send","event",{eventCategory:"Web Vitals",eventAction:s,eventLabel:v,eventValue:Math.round("CLS"===s?1e3*f:f),nonInteraction:!0,transport:"beacon",[n]:o(d,e[s]),[i]:u(s,m),[t]:"6"}),l&&l.ga4_id&&r("gtag")("event",s,{value:f,metric_id:v,metric_value:Math.round("CLS"===s?1e3*f:f),event_meta:o(d,e[s]),event_debug:u(s,m),measurement_version:"6"})}var d,f,v,m,l=function(e,t){return{name:e,value:void 0===t?-1:t,delta:0,entries:[],id:"v2-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},p=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},g=function(e,t){var n=function n(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(e(i),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},w=function(e){addEventListener("pageshow",(function(t){t.persisted&&e(t)}),!0)},h=function(e,t,n){var i;return function(a){t.value>=0&&(a||n)&&(t.delta=t.value-(i||0),(t.delta||void 0===i)&&(i=t.value,e(t)))}},y=-1,b=function(){return"hidden"===document.visibilityState?0:1/0},L=function(){g((function(e){var t=e.timeStamp;y=t}),!0)},T=function(){return y<0&&(y=b(),L(),w((function(){setTimeout((function(){y=b(),L()}),0)}))),{get firstHiddenTime(){return y}}},E=function(e,t){var n,i=T(),a=l("FCP"),r=function(e){"first-contentful-paint"===e.name&&(c&&c.disconnect(),e.startTime<i.firstHiddenTime&&(a.value=e.startTime,a.entries.push(e),n(!0)))},o=window.performance&&performance.getEntriesByName&&performance.getEntriesByName("first-contentful-paint")[0],c=o?null:p("paint",r);(o||c)&&(n=h(e,a,t),o&&r(o),w((function(i){a=l("FCP"),n=h(e,a,t),requestAnimationFrame((function(){requestAnimationFrame((function(){a.value=performance.now()-i.timeStamp,n(!0)}))}))})))},S=!1,_=-1,C={passive:!0,capture:!0},D=new Date,A=function(e,t){d||(d=t,f=e,v=new Date,k(removeEventListener),F())},F=function(){if(f>=0&&f<v-D){var e={entryType:"first-input",name:d.type,target:d.target,cancelable:d.cancelable,startTime:d.timeStamp,processingStart:d.timeStamp+f};m.forEach((function(t){t(e)})),m=[]}},V=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){A(e,t),a()},i=function(){a()},a=function(){removeEventListener("pointerup",n,C),removeEventListener("pointercancel",i,C)};addEventListener("pointerup",n,C),addEventListener("pointercancel",i,C)}(t,e):A(t,e)}},k=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,V,C)}))},P={};function I(){!function(e,t){S||(E((function(e){_=e.value})),S=!0);var n,i=function(t){_>-1&&e(t)},a=l("CLS",0),r=0,o=[],c=function(e){if(!e.hadRecentInput){var t=o[0],i=o[o.length-1];r&&e.startTime-i.startTime<1e3&&e.startTime-t.startTime<5e3?(r+=e.value,o.push(e)):(r=e.value,o=[e]),r>a.value&&(a.value=r,a.entries=o,n())}},u=p("layout-shift",c);u&&(n=h(i,a,t),g((function(){u.takeRecords().map(c),n(!0)})),w((function(){r=0,_=-1,a=l("CLS",0),n=h(i,a,t)})))}(s),E(s),function(e,t){var n,i=T(),a=l("FID"),r=function(e){e.startTime<i.firstHiddenTime&&(a.value=e.processingStart-e.startTime,a.entries.push(e),n(!0))},o=p("first-input",r);n=h(e,a,t),o&&g((function(){o.takeRecords().map(r),o.disconnect()}),!0),o&&w((function(){var i;a=l("FID"),n=h(e,a,t),m=[],f=-1,d=null,k(addEventListener),i=r,m.push(i),F()}))}(s),function(e,t){var n,i=T(),a=l("LCP"),r=function(e){var t=e.startTime;t<i.firstHiddenTime&&(a.value=t,a.entries.push(e),n())},o=p("largest-contentful-paint",r);if(o){n=h(e,a,t);var c=function(){P[a.id]||(o.takeRecords().map(r),o.disconnect(),P[a.id]=!0,n(!0))};["keydown","click"].forEach((function(e){addEventListener(e,c,{once:!0,capture:!0})})),g(c,!0),w((function(i){a=l("LCP"),n=h(e,a,t),requestAnimationFrame((function(){requestAnimationFrame((function(){a.value=performance.now()-i.timeStamp,P[a.id]=!0,n(!0)}))}))}))}}(s),function(e){var t,n=l("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t}();if(n.value=n.delta=t.responseStart,n.value<0||n.value>performance.now())return;n.entries=[t],e(n)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("load",(function(){return setTimeout(t,0)}))}(s)}"requestIdleCallback"in window&&"object"==typeof window.webVitalsAnalyticsData&&window.requestIdleCallback(I)})();