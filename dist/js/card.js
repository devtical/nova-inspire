(()=>{"use strict";var e,t={122:(e,t,o)=>{const n=Vue;var l={key:0},r=(0,n.createElementVNode)("div",{class:"w-full rounded overflow-hidden shadow-lg"},[(0,n.createElementVNode)("div",{class:"spinner"},[(0,n.createElementVNode)("div",{class:"bounce1"}),(0,n.createElementVNode)("div",{class:"bounce2"}),(0,n.createElementVNode)("div",{class:"bounce3"})])],-1),a={key:1},s={key:0,class:"w-full rounded overflow-hidden shadow-lg"},c={class:"flex flex-col w-full overflow-hidden rounded"},d={class:"relative bg-black/50"},i=(0,n.createElementVNode)("span",{class:"bg-black/30 p-1 absolute rounded top-2 left-2 text-white text-xs"},[(0,n.createTextVNode)(" Image by "),(0,n.createElementVNode)("a",{href:"https://unsplash.com",target:"_blank"},"Unsplash")],-1),p={class:"flex flex-col justify-between text-white p-4 pt-20"},u={class:"mb-2"},m={class:"font-bold text-xs"},f={key:0,id:"inspire-stacked"},v={class:"flex flex-col w-full overflow-hidden rounded"},b=[(0,n.createElementVNode)("span",{class:"bg-black/30 p-1 absolute rounded bottom-2 left-2 text-white text-xs"},[(0,n.createTextVNode)(" Image by "),(0,n.createElementVNode)("a",{href:"https://unsplash.com",target:"_blank"},"Unsplash")],-1)],h={class:"flex flex-col justify-between bg-white p-4"},g={class:"mb-2"},k={class:"font-bold text-xs"},N={key:0,id:"inspire-horizontal"},V={class:"flex w-full overflow-hidden rounded"},x=[(0,n.createElementVNode)("span",{class:"bg-black/30 p-1 absolute rounded bottom-2 left-2 text-white text-xs"},[(0,n.createTextVNode)(" Image by "),(0,n.createElementVNode)("a",{href:"https://unsplash.com",target:"_blank"},"Unsplash")],-1)],y={class:"flex w-2/3 flex-col justify-between bg-white p-4 py-6"},E={class:"mb-2"},w={class:"font-bold text-xs"};const B={props:["card"],data:function(){return{response:null,style:null,loading:!0}},mounted:function(){this.start()},methods:{start:function(){var e=this;this.loading=!0,Nova.request().get("/nova-vendor/inspire/random/"+this.card.topic).then((function(t){e.response=t.data,e.style=e.card.style})).catch((function(){return e.error=!0})).finally((function(){return e.loading=!1}))}}};const C=(0,o(744).Z)(B,[["render",function(e,t,o,B,C,O){var _=(0,n.resolveComponent)("Card",!0);return 1==C.loading?((0,n.openBlock)(),(0,n.createElementBlock)("div",l,[(0,n.createVNode)(_,null,{default:(0,n.withCtx)((function(){return[r]})),_:1})])):((0,n.openBlock)(),(0,n.createElementBlock)("div",a,["default"===C.style?((0,n.openBlock)(),(0,n.createBlock)(_,{key:0},{default:(0,n.withCtx)((function(){return[C.response?((0,n.openBlock)(),(0,n.createElementBlock)("div",s,[(0,n.createElementVNode)("div",c,[(0,n.createElementVNode)("div",{class:"relative bg-cover bg-center bg-no-repeat",style:(0,n.normalizeStyle)({backgroundImage:"url('"+C.response.image+"')"})},[(0,n.createElementVNode)("div",d,[i,(0,n.createElementVNode)("div",p,[(0,n.createElementVNode)("div",null,[(0,n.createElementVNode)("p",u,(0,n.toDisplayString)(C.response.quote),1),(0,n.createElementVNode)("p",m,"~ "+(0,n.toDisplayString)(C.response.author),1)])])])],4)])])):(0,n.createCommentVNode)("",!0)]})),_:1})):"stacked"===C.style?((0,n.openBlock)(),(0,n.createBlock)(_,{key:1},{default:(0,n.withCtx)((function(){return[C.response?((0,n.openBlock)(),(0,n.createElementBlock)("div",f,[(0,n.createElementVNode)("div",v,[(0,n.createElementVNode)("div",{class:"relative h-28 bg-cover bg-center bg-no-repeat",style:(0,n.normalizeStyle)({backgroundImage:"url('"+C.response.image+"')"})},b,4),(0,n.createElementVNode)("div",h,[(0,n.createElementVNode)("div",null,[(0,n.createElementVNode)("p",g,(0,n.toDisplayString)(C.response.quote),1),(0,n.createElementVNode)("p",k,"~ "+(0,n.toDisplayString)(C.response.author),1)])])])])):(0,n.createCommentVNode)("",!0)]})),_:1})):"horizontal"===C.style?((0,n.openBlock)(),(0,n.createBlock)(_,{key:2},{default:(0,n.withCtx)((function(){return[C.response?((0,n.openBlock)(),(0,n.createElementBlock)("div",N,[(0,n.createElementVNode)("div",V,[(0,n.createElementVNode)("div",{class:"relative w-1/3 bg-cover bg-center bg-no-repeat",style:(0,n.normalizeStyle)({backgroundImage:"url('"+C.response.image+"')"})},x,4),(0,n.createElementVNode)("div",y,[(0,n.createElementVNode)("div",null,[(0,n.createElementVNode)("p",E,(0,n.toDisplayString)(C.response.quote),1),(0,n.createElementVNode)("p",w,"~ "+(0,n.toDisplayString)(C.response.author),1)])])])])):(0,n.createCommentVNode)("",!0)]})),_:1})):(0,n.createCommentVNode)("",!0)]))}]]);Nova.booting((function(e,t){e.component("Inspire",C)}))},962:()=>{},744:(e,t)=>{t.Z=(e,t)=>{const o=e.__vccOpts||e;for(const[e,n]of t)o[e]=n;return o}}},o={};function n(e){var l=o[e];if(void 0!==l)return l.exports;var r=o[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,o,l,r)=>{if(!o){var a=1/0;for(i=0;i<e.length;i++){for(var[o,l,r]=e[i],s=!0,c=0;c<o.length;c++)(!1&r||a>=r)&&Object.keys(n.O).every((e=>n.O[e](o[c])))?o.splice(c--,1):(s=!1,r<a&&(a=r));if(s){e.splice(i--,1);var d=l();void 0!==d&&(t=d)}}return t}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[o,l,r]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={440:0,458:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var l,r,[a,s,c]=o,d=0;if(a.some((t=>0!==e[t]))){for(l in s)n.o(s,l)&&(n.m[l]=s[l]);if(c)var i=c(n)}for(t&&t(o);d<a.length;d++)r=a[d],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(i)},o=self.webpackChunkDevtical_Inspire=self.webpackChunkDevtical_Inspire||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})(),n.O(void 0,[458],(()=>n(122)));var l=n.O(void 0,[458],(()=>n(962)));l=n.O(l)})();