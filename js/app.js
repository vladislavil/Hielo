!function(o){function t(t){for(var e,i,s=t[0],a=t[1],n=t[2],l=0,r=[];l<s.length;l++)i=s[l],u[i]&&r.push(u[i][0]),u[i]=0;for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(o[e]=a[e]);for(_&&_(t);r.length;)r.shift()();return d.push.apply(d,n||[]),c()}function c(){for(var t,e=0;e<d.length;e++){for(var i=d[e],s=!0,a=1;a<i.length;a++){var n=i[a];0!==u[n]&&(s=!1)}s&&(d.splice(e--,1),t=l(l.s=i[0]))}return t}var i={},u={0:0},d=[];function l(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return o[t].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.m=o,l.c=i,l.d=function(t,e,i){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},l.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)l.d(i,s,function(t){return e[t]}.bind(null,s));return i},l.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var e=window.webpackJsonp=window.webpackJsonp||[],s=e.push.bind(e);e.push=t,e=e.slice();for(var a=0;a<e.length;a++)t(e[a]);var _=s;d.push([55,1]),c()}({100:function(t,e,i){},104:function(t,e,i){"use strict";i.r(e);var s=i(52),a=i.n(s),n=(i(56),i(57),i(58),i(59),i(60),i(61),i(62),i(33)),l=i(54),r=i(19),o=i.n(r),c=(i(86),{components:{Parallax:o.a,Agile:l.a},data:function(){return{items:[{title:"Hielo",subtitle:"A FREE RESPONSIVE WEB SITE TEMPLATE BY TEMPLATED",image:"images/carousel/slide01.jpg"},{title:"Magna etiam",subtitle:"LOREM IPSUM DOLOR SIT AMET NULLAM FEUGIAT",image:"images/carousel/slide02.jpg"},{title:"Tempus dolor",subtitle:"SED CURSUS ALIUAM VEROEROS LOREM IPSUM NULLAM",image:"images/carousel/slide03.jpg"},{title:"Etiam feugiat",subtitle:"LOREM IPSUM DOLOR SIT AMET NULLAM FEUGIAT",image:"images/carousel/slide04.jpg"},{title:"Lorem adipiscing",subtitle:"IPSUM DOLOR SED MAGNA VEROEROS LOREM IPSUM",image:"images/carousel/slide05.jpg"}]}}}),u=i(0),d=Object(u.a)(c,function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("div",{staticClass:"banner__content"},[s("agile",{staticClass:"banner__carousel",attrs:{autoplay:!0,dots:!0,arrows:!1,pauseOnHover:!1,fade:!0,speed:700,adjustableHeight:!0}},i._l(i.items,function(t,e){return s("div",{staticClass:"slide"},[s("parallax",{attrs:{"speed-factor":.4}},[s("img",{staticClass:"banner__img",attrs:{src:t.image,alt:t.image}})]),s("div",{staticClass:"banner__data"},[s("h1",{staticClass:"banner__title"},[i._v(i._s(t.title))]),s("h5",{staticClass:"banner__subtitle"},[i._v(i._s(t.subtitle))])])],1)}),0)],1)},[],!1,null,null,null);d.options.__file="Banner.vue";var _=d.exports,m=(i(87),{data:function(){return{isVisible:!1,items:[{text:"home",href:"#"},{text:"gtntric",href:"#"},{text:"elements",href:"#"}]}},props:["isHeader"],methods:{noscroll:function(){this.isVisible=!this.isVisible,!0===this.isVisible?document.body.classList.add("noscroll"):document.body.classList.remove("noscroll")}}}),f=Object(u.a)(m,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"header-top",class:{fixed:e.isHeader}},[i("div",{staticClass:"header-top__content"},[e._m(0),i("div",{directives:[{name:"show",rawName:"v-show",value:!1===e.isVisible,expression:"isVisible === false"}],staticClass:"header-top__menu",class:{close:e.isVisible},on:{click:e.noscroll}},[e._m(1),e._v("menu")])]),i("nav",{staticClass:"header-top__nav",class:{visible:e.isVisible}},[i("ul",{staticClass:"header-top__list"},e._l(e.items,function(t){return i("li",{staticClass:"header-top__item"},[i("a",{staticClass:"header__link",attrs:{href:t.href},on:{click:function(t){e.isVisible=!1}}},[e._v(e._s(t.text))])])}),0),i("span",{staticClass:"header-top__close",on:{click:function(t){e.isVisible=!e.isVisible}}},[e._v("X")])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header-top__title",attrs:{href:"#"}},[e("span",{staticClass:"header-top__hielo"},[this._v("Hielo  ")]),this._v("by TEMPLATED")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-top__strip"},[e("span")])}],!1,null,null,null);f.options.__file="Header.vue";var p=f.exports,v=(i(88),{data:function(){return{}},props:["item","index"]}),h=Object(u.a)(v,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card"},[i("div",{staticClass:"card__content"},[i("div",{staticClass:"card__img-wrapper"},[i("img",{staticClass:"card__img",attrs:{src:t.item.image}})]),i("div",{staticClass:"card__text-wrapper"},[i("div",{staticClass:"card__subtitle"},[t._v(t._s(t.item.subtitle))]),i("div",{staticClass:"card__title"},[t._v(t._s(t.item.title))]),i("div",{staticClass:"card__text"},[t._v(t._s(t.item.text))]),i("a",{staticClass:"card__button",attrs:{href:"#"}},[t._v("learn more")])])])])},[],!1,null,null,null);h.options.__file="Card.vue";var g=h.exports,b=(i(89),{data:function(){return{items:[{image:"images/pic1.jpg",subtitle:"MAECENAS SAPIEN FEUGIAT EX PURUS",title:"Lorem ipsum dolor",text:"Cras aliquet urna ut sapien tincidunt, quis malesuada elit facilisis. Vestibulum sit amet tortor velit. Nam elementum nibh a libero pharetra elementum. Maecenas feugiat ex purus, quis volutpat lacus placerat malesuada."},{image:"images/pic2.jpg",subtitle:"MATTIS ELEMENTUM SAPIEN PRETIUM TELLUS",title:"Vestibulum sit amet",text:"Cras aliquet urna ut sapien tincidunt, quis malesuada elit facilisis. Vestibulum sit amet tortor velit. Nam elementum nibh a libero pharetra elementum. Maecenas feugiat ex purus, quis volutpat lacus placerat malesuada."}]}},components:{Card:g}}),E=Object(u.a)(b,function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"container"},[i("div",{staticClass:"cards__content"},this._l(this.items,function(t,e){return i("card",{key:e,attrs:{item:t,index:e}})}),1)])},[],!1,null,null,null);E.options.__file="Cards.vue";var C=E.exports,x=(i(90),{components:{Parallax:o.a}}),I=Object(u.a)(x,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"info__content"},[e("parallax",[e("img",{attrs:{src:"images/bg.jpg"}})]),this._m(0)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"info__text"},[e("h1",{staticClass:"info__title"},[this._v("Morbi maximus justo")]),e("h5",{staticClass:"info__subtitle"},[this._v("NAM VEL ANTE SIT AMET LIBERO SCELERISQUE FACILISIS ELEIFEND VITAE URNA")])])}],!1,null,null,null);I.options.__file="Info.vue";var S=I.exports,M=i(53),L=(i(96),{data:function(){return{}},props:["image","imageIndex","index"],methods:{changeIndex:function(){this.index=this.imageIndex,this.$emit("indexChanged",this.index)}}}),A=Object(u.a)(L,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"photo"},[i("div",{staticClass:"photo__content"},[i("a",{staticClass:"photo__wrapper",attrs:{href:"#"+t.image},on:{click:t.changeIndex}},[i("img",{staticClass:"photo__img",attrs:{src:t.image}})])])])},[],!1,null,null,null);A.options.__file="Photo.vue";var O=A.exports,j=(i(97),{data:function(){return{images:["images/pic3.jpg","images/pic1.jpg","images/pic2.jpg","images/pic4.jpg"],index:null}},components:{Photo:O,VueGallery:M.a}}),T=Object(u.a)(j,function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("div",{staticClass:"images"},[s("div",{staticClass:"container"},[i._m(0),s("div",{staticClass:"images__content"},[s("vue-gallery",{attrs:{images:i.images,index:i.index},on:{close:function(t){i.index=null}}}),i._l(i.images,function(t,e){return s("photo",{key:e,attrs:{image:t,imageIndex:e,index:i.index},on:{indexChanged:function(t){i.index=t}}})})],2)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"images__text"},[e("div",{staticClass:"images__subtitle"},[this._v("NAM VEL ANTE SIT AMET LIBERO SCELERISQUE FACILISIS ELEIFEND VITAE URNA")]),e("div",{staticClass:"images__title"},[this._v("Morbi maximus justo")])])}],!1,null,null,null);T.options.__file="Images.vue";var y={data:function(){return{isHeader:!1}},components:{Banner:_,HeaderTop:p,Cards:C,Info:S,Images:T.exports},methods:{handleScroll:function(t,e){var i=document.querySelector(".banner").offsetHeight,s=document.querySelector(".header-top").offsetHeight;window.scrollY>i-s?this.isHeader=!0:this.isHeader=!1}}},w=(i(98),Object(u.a)(y,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"scroll",rawName:"v-scroll",value:this.handleScroll,expression:"handleScroll"}],staticClass:"main__content",attrs:{id:"app"}},[e("header",[e("header-top",{attrs:{isHeader:this.isHeader}})],1),e("section",{staticClass:"banner"},[e("banner")],1),e("section",{staticClass:"cards"},[e("cards")],1),e("section",{staticClass:"info"},[e("info")],1),e("section",{staticClass:"gellary"},[e("images")],1)])},[],!1,null,null,null));w.options.__file="App.vue";var P=w.exports;i(99),i(100);n.a.directive("scroll",{inserted:function(i,s){window.addEventListener("scroll",function t(e){s.value(e,i)&&window.removeEventListener("scroll",t)})}});var U=function(){console.log("init pages"),new n.a({el:"#main",render:function(t){return t(P)}})};a()(function(){console.log("init layout"),console.log("init blocks"),U()})},18:function(t,e,i){},55:function(t,e,i){t.exports=i(104)},56:function(t,e,i){},57:function(t,e,i){},58:function(t,e,i){},59:function(t,e,i){},60:function(t,e,i){},61:function(t,e,i){},62:function(t,e,i){},86:function(t,e,i){},87:function(t,e,i){},88:function(t,e,i){},89:function(t,e,i){},90:function(t,e,i){},96:function(t,e,i){},97:function(t,e,i){},98:function(t,e,i){"use strict";var s=i(18);i.n(s).a},99:function(t,e,i){t.exports=i.p+"index.html"}});