(()=>{var o={54:(o,e,t)=>{const{log:r,getConfig:n,getTargets:g,getOwnPropertyDescriptor:c,checkRegexs:l,execCode:i}=t(191);o.exports=(o,e,t)=>{const s=n(o,e,t);var a=domlogger.func["String.prototype.split"].call(t,":");t=domlogger.func["Array.prototype.pop"].call(a);const[p,f]=g(domlogger.func["String.prototype.split"].call(t,"."));if(0===a.length&&(a=["set","get"]),!p||!(f in p))return void domlogger.func["console.log"](`[DOMLogger++] ${t} (attribute) does not exist!`);try{if("function"==typeof p[f])return void domlogger.func["console.log"](`[DOMLogger++] ${t} can't be a function or a class!`)}catch{}const u=c(p,f);if(u.configurable){var d;if(!u.set||!u.get)try{d=p[f]}catch{if(u.set||!u.get)return void domlogger.func["console.log"](`[DOMLogger++] ${t} can't be hook for now!`);if(domlogger.func["Array.prototype.includes"].call(a,"set"))return void domlogger.func["console.log"](`[DOMLogger++] Only the getter can be hooked for ${t}, remove set!`)}Object.defineProperty(p,f,{get:function(){return u.get?output=u.get.call(this):output=d,domlogger.func["Array.prototype.includes"].call(a,"get")&&(output=i(s.hookFunction,output),r(o,e,this.nodeName?`get:${this.nodeName.toLowerCase()}.${f}`:`get:${t}`,output,s)),output},set:function(n){if(domlogger.func["Array.prototype.includes"].call(a,"set")&&n){const g=l(s.match,n,!0),c=l(s["!match"],n,!1);n=i(s.hookFunction,n),!c&&g&&r(o,e,this.nodeName?`set:${this.nodeName.toLowerCase()}.${f}`:`set:${t}`,n,s)}return u.set?u.set.call(this,n):void(d=n)}})}else window.domlogger.functions["console.log"](`[DOMLogger++] ${t} is not configurable, can't hook it!`)}},825:(o,e,t)=>{const{log:r,getConfig:n,getTargets:g,checkRegexs:c,execCode:l}=t(191);o.exports=(o,e,t)=>{const i=n(o,e,t),[s,a]=g(domlogger.func["String.prototype.split"].call(t,"."));var p=s[a];const f=c(i.match,p,!1),u=c(i["!match"],p,!1);f&&!u&&(p=l(i.hookFunction,p),r(o,e,t,p,i))}},746:(o,e,t)=>{const{log:r,getConfig:n,getTargets:g,getOwnPropertyDescriptor:c,checkRegexs:l,execCode:i}=t(191);o.exports=(o,e,t)=>{const s=n(o,e,t);var[a,p]=g(domlogger.func["String.prototype.split"].call(t,"."));a&&p in a?"function"==typeof a[p]?c(a,p).configurable?a[p]=new domlogger.func.Proxy(a[p],{construct:function(n,g){const c=l(s.match,g,!0),a=l(s["!match"],g,!1);return g=i(s.hookFunction,g),!a&&c&&r(o,e,t,g,s),new n(...g)}}):domlogger.func["console.log"](`[DOMLogger++] ${t} is not configurable, can't hook it!`):domlogger.func["console.log"](`[DOMLogger++] ${t} is not a class!`):domlogger.func["console.log"](`[DOMLogger++] ${t} (class) does not exist!`)}},3:(o,e,t)=>{const{log:r,getConfig:n,getTargets:g}=t(191),c={function:t(4),class:t(746),attribute:t(54)};o.exports=(o,e,t)=>{const l=domlogger.func["String.prototype.split"].call(t,":"),i=domlogger.func.isNaN(l[l.length-1])?50:domlogger.func["Array.prototype.pop"].call(l),s=n(o,e,domlogger.func["Array.prototype.join"].call(domlogger.func["Array.prototype.slice"].call(l,1),":")),a=domlogger.func["Array.prototype.pop"].call(domlogger.func["Array.prototype.slice"].call(l,1)),p=domlogger.func.setInterval((()=>{var[t,n]=g(domlogger.func["String.prototype.split"].call(a,"."));t&&n in t&&(domlogger.func.clearInterval(p),"attribute"!==l[0]||"set"!==l[1]&&"set"!==l[2]||r(o,e,domlogger.func["Array.prototype.join"].call(domlogger.func["Array.prototype.slice"].call(l,1),":"),t[n],s),c[l[0]](o,e,domlogger.func["Array.prototype.join"].call(domlogger.func["Array.prototype.slice"].call(l,1),":")))}),i)}},454:(o,e,t)=>{const r=t(54),{log:n,getConfig:g,stringify:c,checkRegexs:l,execCode:i}=t(191);o.exports=(o,e,t)=>{const s=EventTarget.prototype.addEventListener;EventTarget.prototype.addEventListener=function(r,a,p){if(domlogger.func["Array.prototype.includes"].call(t,r)){const t=g(o,e,r),s=l(t.match,`${a}${p?`;options=${c(p)}`:""}`,!0),f=l(t["!match"],`${a}${p?`;options=${c(p)}`:""}`,!1);args=i(t.hookFunction,a),!f&&s&&n(o,e,`on${r}`,`${a}${p?`;options=${c(p)}`:""}`,t)}return s.call(this,r,a,p)};for(const n of t)`on${n}`in window?r(o,e,`set:on${n}`):domlogger.func["console.log"](`[DOMLogger++] on${n} (event) does not exist!`)}},4:(o,e,t)=>{const{log:r,getConfig:n,getTargets:g,getOwnPropertyDescriptor:c,checkRegexs:l,execCode:i}=t(191);o.exports=(o,e,t)=>{const s=n(o,e,t);var[a,p]=g(domlogger.func["String.prototype.split"].call(t,"."));if(!a||!(p in a))return void domlogger.func["console.log"](`[DOMLogger++] ${t} (function) does not exist!`);if("function"!=typeof a[p])return void domlogger.func["console.log"](`[DOMLogger++] ${t} is not a function!`);if(!c(a,p).configurable)return void domlogger.func["console.log"](`[DOMLogger++] ${t} is not configurable, can't hook it!`);const f=a[p];a[p]=new domlogger.func.Proxy(a[p],{apply:function(n,g,c){const a=l(s.match,c,!0),p=l(s["!match"],c,!1);return c=i(s.hookFunction,c),!p&&a&&r(o,e,t,c,s),domlogger.func.Reflect.apply(f,g,c)}})}},191:o=>{const e=o=>(void 0===o?o="undefined":"function"==typeof o?o=domlogger.func["Function.prototype.toString"].call(o):"string"!=typeof o&&(o=domlogger.func["JSON.stringify"](o)),o),t=(o,t,r)=>{if(!o)return r;t=e(t);for(let e of o){"exec"===domlogger.func["String.prototype.split"].call(e,":")[0]&&(e=n(e,t));try{new domlogger.func.RegExp(e)}catch{domlogger.func["console.log"](`[DOMLogger++] ${e} (regex) is invalid!`);continue}if(domlogger.func["String.prototype.match"].call(t,e))return!0}return!1},r=o=>{if(o&&o.requiredHooks)for(const e of o.requiredHooks)if(!domlogger.func["Array.prototype.includes"].call(domlogger.hookTypeHistory,e))return!1;return!0},n=(o,t="")=>{if(!o)return t;var r=t;try{r=domlogger.func.Function("args",o)(t)}catch{domlogger.func["console.log"](`[DOMLogger++] ${e(o)} is an invalid code to evaluate!`)}return r};o.exports={log:async(o,n,g,c,l)=>{var i=(()=>{let o=(new domlogger.func.Error).stack;return o=domlogger.func["String.prototype.split"].call(o,"\n"),domlogger.func["Array.prototype.filter"].call(o,(o=>!domlogger.func["String.prototype.includes"].call(o,"/src/bundle.js")))})();"Error"===i[0]&&domlogger.func["Array.prototype.shift"].call(i);var s=i[0];if(s=await(async o=>{const e=(new domlogger.func.TextEncoder).encode(o),t=await crypto.subtle.digest("SHA-256",e),r=domlogger.func["Array.from"](new domlogger.func.Uint8Array(t));return domlogger.func["Array.prototype.map"].call(r,(o=>domlogger.func["Array.prototype.join"].call(o.toString(16).padStart(2,"0"))),"")})(s),domlogger.domlogger_debug_canary===s)debugger;var a=!1,p=!1;if(l.alert){const o=t(l.alert.match,c,!0);!t(l.alert["!match"],c,!1)&&o&&(a=!0,l.alert.notification&&(p=!0))}let f={ext:"domlogger++",date:domlogger.func["Date.now"](),href:location.href,type:n,hook:o,frame:top===self?"top":"subframe",sink:g,data:e(c),trace:i,debug:s,badge:a,notification:p};domlogger.func["Array.prototype.includes"].call(domlogger.hookTypeHistory,n)||domlogger.func["Array.prototype.push"].call(domlogger.hookTypeHistory,n),r(l)&&domlogger.func.postMessage(f,"*")},getConfig:(o,e,t)=>{var r=domlogger.hooksConfig["*"]?domlogger.hooksConfig["*"]:{},n=domlogger.hooksConfig[o]?domlogger.hooksConfig[o]:{},g=domlogger.hooksConfig[e]?domlogger.hooksConfig[e]:{},c=domlogger.hooksConfig[t]?domlogger.hooksConfig[t]:{};return domlogger.func["Object.assign"]({},r,c,n,g)},getTargets:o=>{var e=domlogger.func["Array.prototype.pop"].call(o),t=window;"window"===o[0]&&domlogger.func["Array.prototype.shift"].call(o);for(const e of o){if(!(e in t))return[null,null];t=t[e]}return[t,e]},getOwnPropertyDescriptor:(o,e)=>{for(;o;){const t=domlogger.func["Object.getOwnPropertyDescriptor"](o,e);if(t)return t;o=domlogger.func["Object.getPrototypeOf"](o)}},stringify:e,checkRegexs:t,execCode:n}}},e={};function t(r){var n=e[r];if(void 0!==n)return n.exports;var g=e[r]={exports:{}};return o[r](g,g.exports,t),g.exports}(()=>{const o={function:t(4),class:t(746),attribute:t(54),event:t(454),checkContent:t(825),custom:t(3)},e=new URL(document.currentScript.src),r=new URLSearchParams(e.search),n=JSON.parse(atob(r.get("hookSettings")));window.domlogger={},domlogger.hooksTargets=n.hooks,domlogger.hooksConfig=n.config,domlogger.hookTypeHistory=[],domlogger.domlogger_debug_canary="undefined"===r.get("debugCanary")?void 0:r.get("debugCanary"),domlogger.func={"Array.from":Array.from,"Array.prototype.filter":Array.prototype.filter,"Array.prototype.includes":Array.prototype.includes,"Array.prototype.join":Array.prototype.join,"Array.prototype.map":Array.prototype.map,"Array.prototype.pop":Array.prototype.pop,"Array.prototype.push":Array.prototype.push,"Array.prototype.shift":Array.prototype.shift,"Array.prototype.slice":Array.prototype.slice,clearInterval:clearInterval.bind(window),"console.log":console.log,"Date.now":Date.now,Error,Function,"Function.prototype.toString":Function.prototype.toString,isNaN,"JSON.stringify":JSON.stringify,"Object.assign":Object.assign,"Object.entries":Object.entries,"Object.getOwnPropertyDescriptor":Object.getOwnPropertyDescriptor,"Object.getPrototypeOf":Object.getPrototypeOf,postMessage:postMessage.bind(window),Proxy,Reflect,RegExp,setInterval:setInterval.bind(window),"String.prototype.includes":String.prototype.includes,"String.prototype.match":String.prototype.match,"String.prototype.split":String.prototype.split,TextEncoder,Uint8Array};for(const[e,t]of domlogger.func["Object.entries"](domlogger.hooksTargets))for(const[r,n]of domlogger.func["Object.entries"](t))if("event"!==r)for(const t of n)o[r](r,e,t);else o[r](r,e,n)})()})();