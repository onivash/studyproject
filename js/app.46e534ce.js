(function(){"use strict";var e={352:function(e,t,a){var i=a(963),n=a(252);const s={class:"app"};function o(e,t){const a=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",s,[(0,n.Wm)(a)])}var r=a(744);const d={},c=(0,r.Z)(d,[["render",o]]);var l=c,v=a(205);(0,v.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var u=a(119),_=a.p+"img/icon-arrow-down.b9de1510.svg",b=a.p+"img/icon-plus.8060a7cf.svg";const f=e=>((0,n.dD)("data-v-54ac3b78"),e=e(),(0,n.Cn)(),e),m={class:"home container"},h={class:"home__header"},p=f((()=>(0,n._)("div",{class:"home__header-title"},[(0,n._)("h1",null,"Invoices"),(0,n._)("div",null," There are 3 total invoices")],-1))),g={class:"home__header-controls"},y=f((()=>(0,n._)("span",null,"Filter by status",-1))),w=f((()=>(0,n._)("img",{src:_},null,-1))),O={class:"home__header-list"},k=f((()=>(0,n._)("li",{class:"home__header-list-item"},"all",-1))),j=f((()=>(0,n._)("li",{class:"home__header-list-item"},"draft",-1))),F=f((()=>(0,n._)("li",{class:"home__header-list-item"},"pending",-1))),M=f((()=>(0,n._)("li",{class:"home__header-list-item"},"paid",-1))),x=[k,j,F,M],C=f((()=>(0,n._)("div",{class:"home__header-button"},[(0,n._)("div",{class:"home__header-button-inner"},[(0,n._)("img",{src:b,alt:""})]),(0,n._)("span",null,"New Invoice")],-1))),D=(0,n.uE)('<div class="body container" data-v-54ac3b78><div class="body__list-items" data-v-54ac3b78><div class="body__list-items" data-v-54ac3b78>452637</div><div class="body__list-items" data-v-54ac3b78>nov,29,2019</div><div class="body__list-items" data-v-54ac3b78>Alex Petrov</div><div class="body__list-items" data-v-54ac3b78><span data-v-54ac3b78>$45</span></div><div class="Button__default--danger" data-v-54ac3b78>draft</div><img src="'+_+'" data-v-54ac3b78></div><div class="body__list-items" data-v-54ac3b78><div class="body__list-items" data-v-54ac3b78>3245823</div><div class="body__list-items" data-v-54ac3b78>dec,27,2021</div><div class="body__list-items" data-v-54ac3b78>Gregario</div><div class="body__list-items" data-v-54ac3b78><span data-v-54ac3b78>$112</span></div><div class="Button__default--danger" data-v-54ac3b78>draft</div><img src="'+_+'" data-v-54ac3b78></div><div class="body__list-items" data-v-54ac3b78><div class="body__list-items" data-v-54ac3b78>452637</div><div class="body__list-items" data-v-54ac3b78>sep,02,2020</div><div class="body__list-items" data-v-54ac3b78>Severstal</div><div class="body__list-items" data-v-54ac3b78><span data-v-54ac3b78>$76</span></div><div class="Button__default--danger" data-v-54ac3b78>draft</div><img src="'+_+'" data-v-54ac3b78></div></div>',1);function A(e,t,a,s,o,r){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",m,[(0,n._)("div",h,[p,(0,n._)("div",g,[(0,n._)("div",{class:"home__header-filter",onClick:t[0]||(t[0]=(...e)=>r.toggleFilterMenu&&r.toggleFilterMenu(...e))},[y,w,(0,n.wy)((0,n._)("ul",O,x,512),[[i.F8,o.filterMenu]])]),C])])]),D],64)}var B={name:"HomeView",data(){return{filterMenu:!1}},methods:{toggleFilterMenu(){this.filterMenu=!this.filterMenu}}};const N=(0,r.Z)(B,[["render",A],["__scopeId","data-v-54ac3b78"]]);var P=N;function T(e,t){return(0,n.wg)(),(0,n.iD)("div",null,"about")}const Z={},E=(0,r.Z)(Z,[["render",T]]);var I=E;function $(e,t){return(0,n.wg)(),(0,n.iD)("div",null,"numbers")}const H={},S=(0,r.Z)(H,[["render",$]]);var q=S;const z=[{path:"/",name:"home",component:P},{path:"/about",name:"about",component:I},{path:"/numbers",name:"numbers",component:q}],G=(0,u.p7)({history:(0,u.PO)("/"),routes:z});var V=G,W=a(907),Y=(0,W.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,i.ri)(l).use(Y).use(V).mount("#app")}},t={};function a(i){var n=t[i];if(void 0!==n)return n.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,i,n,s){if(!i){var o=1/0;for(l=0;l<e.length;l++){i=e[l][0],n=e[l][1],s=e[l][2];for(var r=!0,d=0;d<i.length;d++)(!1&s||o>=s)&&Object.keys(a.O).every((function(e){return a.O[e](i[d])}))?i.splice(d--,1):(r=!1,s<o&&(o=s));if(r){e.splice(l--,1);var c=n();void 0!==c&&(t=c)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[i,n,s]}}(),function(){a.d=function(e,t){for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,s,o=i[0],r=i[1],d=i[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(n in r)a.o(r,n)&&(a.m[n]=r[n]);if(d)var l=d(a)}for(t&&t(i);c<o.length;c++)s=o[c],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(l)},i=self["webpackChunkvue_3_studyproject"]=self["webpackChunkvue_3_studyproject"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(352)}));i=a.O(i)})();
//# sourceMappingURL=app.46e534ce.js.map