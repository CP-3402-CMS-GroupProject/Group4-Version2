"use strict";(()=>{var M=(y,n)=>()=>(n||y((n={exports:{}}).exports,n),n.exports);var $=M(_=>{var C=class{constructor(){let n="",i={os:"other",device:"desktop",browser:"other",touchevent:!1};window.navigator.userAgentData&&(n=navigator.userAgentData,i.os=n.platform.toLowerCase(),n.mobile&&(i.device="mobile"),n.brands.length&&n.brands.forEach(m=>{/Chromium/.test(m.brand)&&(i.browser="chromium")})),(i.os=="other"||i.browser=="other")&&(n=navigator.userAgent,/Windows/.test(n)?i.os="windows":/Macintosh/.test(n)?i.os="macosx":/Android/.test(n)?i.os="android":/iP.*?Mac OS X/.test(n)?i.os="ios":/Silk/.test(n)?i.os="firehd":/Linux/.test(n)&&(i.os="linux"),(/iPhone.*?Mac OS X/.test(n)||/Android.*?Mobile/.test(n))&&(i.device="mobile"),/Mac OS X(?!.*Chrome)(?=.*Safari)/.test(n)?i.browser="safari":/Firefox/.test(n)?i.browser="firefox":/Chrome/.test(n)?i.browser="chromium":/Silk/.test(n)&&(i.browser="silk")),/windows/.test(i.os)?i.touchevent=!1:(/android|ios|firehd/.test(i.os)||window.ontouchstart!==void 0&&navigator.maxTouchPoints>0)&&(i.touchevent=!0),window.BbOptions.deviceInfo=i}addClass(){document.documentElement.classList.add("os-"+window.BbOptions.deviceInfo.os),document.documentElement.classList.add("device-"+window.BbOptions.deviceInfo.device),document.documentElement.classList.add("browser-"+window.BbOptions.deviceInfo.browser),window.BbOptions.deviceInfo.touchevent&&document.documentElement.classList.add("touch-device")}},L=class{constructor(n=0,i={}){let m={loaded:!1,offset:!0,speed:50,desktop:0,mobile:0,breakPoint:window.BbOptions.breakPoint};if(Object.keys(m).forEach(a=>{(i[a]||i[a]===!1)&&(m[a]=i[a])}),typeof n!="number"){let a=typeof n=="string"?document.querySelector(n):n;if(a){n=a.getBoundingClientRect().top+window.scrollY;let h=a.dataset.option;h&&h.split(",").forEach(I=>{let O=I.split(":"),b=O[1].trim();switch(b){case"true":b=!0;break;case"false":b=!1;break;default:b=Number(b);break}m[O[0].trim()]=b})}}m.offset&&(n=n-(document.documentElement.clientWidth<m.breakPoint?m.mobile:m.desktop),n<0&&(n=0));let S=window.scrollY,q=null,k=!1,p="neutral";S>n?p="up":S<n&&(p="down");function w(a){a||(a=S);let A=Math.abs(n-a);if(a=parseInt(A-A*m.speed*m.speed/1e4),p=="down"?(a=n-a,n<=a&&(k=!0)):p=="up"&&(a=n+a,n>=a&&(k=!0)),window.scroll(0,a),k){cancelAnimationFrame(q);return}q=requestAnimationFrame(()=>w(a))}p!="neutral"&&(m.loaded?window.addEventListener("load",()=>w()):w())}};_.BbOptions={};(()=>{if(!document.getElementById("main-screen")){window.BbOptions=[],document.documentElement.id="blankblanc-wp-admin",new C().addClass();return}let y=()=>{let t=document.querySelectorAll("img.background-image-src"),e=0,c=0;t.forEach(o=>{e++;let s=document.createElement("img");s.src=o.src,o.style.display="none",o.parentNode.classList.add("background-image-block");let r=document.createElement("div");r.classList.add("background-image-body","background-image-body-"+e),r.style.backgroundImage="url("+s.src+")",o.parentNode.insertBefore(r,o),r.appendChild(o),s.addEventListener("load",()=>{c++,t.length===c&&r.parentNode.classList.add("show")})})},n=()=>{let t=document.querySelector(".more-link");t&&t.addEventListener("click",e=>{t.classList.add("active"),document.querySelector(".more-content").classList.add("active"),e.preventDefault()})},i=()=>{document.querySelectorAll("select").forEach(e=>{e.outerHTML='<div class="select-area">'+e.outerHTML+"</div>"})},m=()=>{document.querySelectorAll(".search-form").forEach(e=>{["mouseenter","mouseleave"].forEach(o=>{e.querySelector(".search-submit").addEventListener(o,()=>{e.querySelector("label").classList.toggle("hover")})})})},S=()=>{document.querySelectorAll(".entry-body table").forEach(e=>{let c=document.createElement("div");c.classList.add("table-content");let o=document.createElement("div");o.classList.add("table-area");let s=document.createElement("div");s.classList.add("table-arrow"),s.classList.add("table-arrow-left");let r=document.createElement("div");r.classList.add("table-arrow"),r.classList.add("table-arrow-right"),o.innerHTML=e.outerHTML,c.appendChild(o),o.appendChild(s),o.appendChild(r);let d=e.offsetWidth;e.parentNode.insertBefore(c,e),e.parentNode.removeChild(e);let u=()=>{let f=d-o.offsetWidth,l=o.scrollLeft,v=3;v<=l?s.classList.add("active"):s.classList.remove("active"),f-v>=l?r.classList.add("active"):r.classList.remove("active")};u(),o.addEventListener("scroll",u)})},q=()=>{let t=document.querySelector("#gotop-button");if(!t)return;let e=document.createElement("div");["gotop-cfg","gotop-start","gotop-end"].forEach(u=>{e.classList.add(u)}),t.parentNode.insertBefore(e,t);let c=window.getComputedStyle(e),o=parseInt(c.getPropertyValue("top"))||0,s=parseInt(c.getPropertyValue("bottom"))||0;["load","scroll","resize"].forEach(u=>{let f=()=>{let l=window.scrollY,v=document.documentElement.scrollHeight-window.BbOptions.shrinkHeight;o<l?t.classList.add("gotop-show"):t.classList.remove("gotop-show"),v-s<l?(t.classList.add("gotop-bottom"),t.classList.add("gotop-end")):(t.classList.remove("gotop-bottom"),t.classList.remove("gotop-end"))};window.addEventListener(u,f)});let d=t.querySelector(".gotop-symbol");d&&d.addEventListener("click",()=>{new L(0,Object.create(g.scrollPageTop))})},k=()=>{let t=document.querySelectorAll('a[href*="#"]'),e=location.href.split("#");t&&t.forEach(c=>{c.addEventListener("click",o=>{let s=c.getAttribute("href").split("#"),r=document.createElement("a");if(r.href=s[0],s[0]&&e[0].replace(/(https?:)?\/\/(.*?)\/?$/,"$2")!=r.href.replace(/(https?:)?\/\/(.*?)\/?$/,"$2")||!s[1]||s[1].match(/respond/)||s[1].match(/more\-.*?$/))return;let d=document.querySelector("#"+s[1]);return d&&(o.preventDefault(),new L(d,Object.create(g.scrollCommon)),["#main-screen","#main-screen-mask","#nav-window-area","#nav-window-close-btn"].forEach(f=>{document.body.classList.remove("nav-window-show");let l=document.querySelector(f);l&&l.classList.remove("nav-window-show")})),o.preventDefault(),!1})})},p=()=>{let t=location.hash;if(t){let e=document.querySelector(t);new L(e,Object.create(g.toAnchorLink))}},w=()=>{let t=document.querySelector("#header-part");if(t){let e=t.getBoundingClientRect();window.scrollY>=parseInt(window.scrollY+e.top)?t.classList.add("fixed"):t.classList.remove("fixed")}},a=()=>{let t=window.BbOptions.shrinkHeight*.94;document.querySelectorAll('[data-bb-option="fade-in"]').forEach(c=>{let o=c.getBoundingClientRect();parseInt(o.top-t)<0&&c.classList.add("active")})},A=()=>{let t=["#header-nav","#global-nav"];t.forEach(e=>{let c=document.querySelector(e);if(!c)return;let o=c.querySelectorAll(".menu > .menu-item-has-children"),s="";o.forEach(r=>{let d=u=>{let f=0;if(u=="open"){let l=r.querySelector(".sub-menu").getBoundingClientRect();f=parseInt(l.height)+25}r.querySelector(".child-group").style.maxHeight=`${f}px`};window.BbOptions.deviceInfo.touchevent?(r.addEventListener("touchstart",()=>{e==t[1]&&document.querySelector("#main-container").classList.add("gnav-active"),d("open"),r.classList.add("menu-active"),s=r,r.classList.contains("touchstart")||r.classList.add("touchstart")},{passive:!0}),r.addEventListener("mouseout",()=>{e==t[1]&&s===r&&document.querySelector("#main-container").classList.remove("gnav-active"),d(),r.classList.remove("menu-active"),r.classList.remove("touchstart")})):(r.addEventListener("mouseover",()=>{e==t[1]&&document.querySelector("#main-container").classList.add("gnav-active"),d("open")}),r.addEventListener("mouseout",()=>{e==t[1]&&document.querySelector("#main-container").classList.remove("gnav-active"),d()}))})})},h={top:null,offset:null},E=()=>{let t=document.querySelector("#second-column");if(!t||window.getComputedStyle(t).getPropertyValue("display")=="none")return;let e=document.querySelector(".bottom-fixed-widget");if(!e)return;h.offset===null&&(e.classList.add("initial"),h.offset=parseInt(window.getComputedStyle(e).getPropertyValue("top")),e.classList.remove("initial"));let c=t.getBoundingClientRect(),o=e.getBoundingClientRect();if(c.height<=o.height)return;let s=window.scrollY+window.BbOptions.shrinkHeight;h.top===null&&(h.top=window.scrollY+o.top);let r=document.querySelector("#global-nav").getBoundingClientRect(),d=document.querySelector("#global-widget").getBoundingClientRect();if(window.BbOptions.shrinkHeight>parseInt(d.height-r.height))e.classList.add("sticky");else{let u=parseInt(h.top+o.height);s>=u?e.classList.add("fixed"):e.classList.remove("fixed");let f=parseInt(window.scrollY+c.bottom);s>=f?e.classList.add("absolute"):e.classList.remove("absolute")}},I=()=>{let t=".bb-toc-block";document.querySelectorAll(t).forEach(c=>{let o=c.querySelector(".bb-toc-toggle"),s=()=>{let r=c.querySelector(".bb-toc-body-inner").getBoundingClientRect(),d=parseInt(r.height)+25;c.querySelector(".bb-toc-body").style.maxHeight=`${d}px`};window.addEventListener("load",s),window.addEventListener("resize",s),o&&o.addEventListener("click",()=>{c.classList.toggle("changed")})})},O=()=>{let t=".bb-form-style",e=".bb-form-style-top",c=document.querySelectorAll(t),o=g.scrollForm?Object.create(g.scrollForm):Object.create(g.scrollCommon);o.loaded=!0,c.forEach(s=>{if(!s)return;let r=s.querySelectorAll(".group"),d=!0;r.forEach(l=>{let v=l.querySelector(".error");if(v){d&&(new L(l,o),d=!1),l.classList.add("group-error");let H=["input","select","textarea",".error"],F=["click","focus"];H.forEach(P=>{F.forEach(W=>{l.querySelectorAll(P).forEach(x=>{x&&x.addEventListener(W,()=>{l.classList.remove("group-error"),v.classList.add("error-hidden")})})})})}});let u="submitBack",f=s.querySelector('[name="submitBack"]');if(f&&f.addEventListener("click",()=>{localStorage.setItem(u,1)}),localStorage.getItem(u)==1){let l=document.createElement("div");l.classList.add(e.substring(1)),s.parentNode.insertBefore(l,s),new L(l,o),localStorage.removeItem(u)}})},b=()=>{let t=document.querySelector("#main-screen"),e=parseInt(window.getComputedStyle(t).getPropertyValue("min-width"));window.BbOptions.shrinkRatio=e&&e>document.documentElement.clientWidth?parseFloat(e/document.documentElement.clientWidth):1,window.BbOptions.shrinkHeight=document.documentElement.clientHeight*window.BbOptions.shrinkRatio};function T(){document.querySelectorAll(".embeded-iframe-src").forEach(function(e){e.getAttribute("data-src")&&e.setAttribute("src",e.getAttribute("data-src"))})}let R=()=>{let t="cookieBanner",e=document.querySelector("#cookie-banner");if(!e){localStorage.removeItem(t);return}let c=e.dataset.expire?parseInt(e.dataset.expire):365,o=localStorage.getItem(t),s=new Date;(o==null||s.getTime()>parseInt(o))&&(e.classList.add("indicate"),e.querySelector(".cookie-btn").addEventListener("click",()=>{localStorage.setItem(t,s.getTime()+c*86400*1e3),e.classList.remove("indicate")}))},B=782,g={scrollCommon:{loaded:!1,offset:!0,speed:40,desktop:65,mobile:65,breakPoint:B},toAnchorLink:{loaded:!1,offset:!0,speed:95,desktop:65,mobile:65,breakPoint:B},scrollPageTop:{loaded:!1,offset:!1,speed:40,desktop:0,mobile:0,breakPoint:B},scrollForm:{loaded:!0,offset:!0,speed:40,desktop:80,mobile:65,breakPoint:B},breakPoint:B,pageLoaded:!1};document.addEventListener("DOMContentLoaded",()=>{"bbOptions"in window&&Object.keys(bbOptions).forEach(e=>{let c=bbOptions[e];Object.keys(c).forEach(o=>{(c[o]||c[o]===!1)&&(g[e][o]=c[o])})}),window.BbOptions=g,new C().addClass(),b(),y(),n(),i(),q(),k(),p(),m(),I(),A(),O(),E(),document.querySelectorAll(".set-user-action").forEach(e=>{e.addEventListener("click",()=>{E()})}),setTimeout(()=>{window.BbOptions.pageLoaded||(document.documentElement.classList.add("page-load-abort"),document.documentElement.classList.add("page-loaded"))},3e3)}),window.addEventListener("load",()=>{S(),w(),a(),R(),T(),document.documentElement.classList.add("page-loaded"),window.BbOptions.pageLoaded=!0}),window.addEventListener("pageshow",()=>{E()}),window.addEventListener("scroll",()=>{w(),E(),a()}),window.addEventListener("resize",()=>{b(),w(),E(),a()})})()});$();})();