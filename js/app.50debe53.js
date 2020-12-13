(function(t){function e(e){for(var n,c,s=e[0],o=e[1],u=e[2],d=0,p=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var o=a[s];0!==r[o]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},i=[];function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/wiki-vue-typescript-practice/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"20bd":function(t,e,a){"use strict";a("d333")},"46ba":function(t,e,a){},"5c0b":function(t,e,a){"use strict";a("9c0c")},"74a8":function(t,e,a){},"828b":function(t,e,a){"use strict";a("acbd")},9878:function(t,e,a){"use strict";a("46ba")},"9c0c":function(t,e,a){},acbd:function(t,e,a){},c318:function(t,e,a){"use strict";a("74a8")},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("Navbar"),a("router-view",{staticClass:"app__router-view"}),a("Footer")],1)},i=[],c=a("d4ec"),s=a("262e"),o=a("2caf"),u=a("9ab4"),l=a("60a3"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar is-light"},[n("div",{staticClass:"navbar-brand"},[n("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[n("span",{staticClass:"image is-24x24"},[n("img",{staticClass:"is-rounded",attrs:{src:a("cf05"),width:"24",height:"24"}})]),n("span",{staticClass:"navbar__title"},[t._v(" wiki-vue-typescript-practice ")])]),t.isSearchFormShown?n("div",{staticClass:"navbar-item"},[n("SearchForm")],1):t._e()],1)])},p=[],f=a("bee2"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field has-addons"},[a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.query,expression:"formData.query"}],staticClass:"input",domProps:{value:t.formData.query},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.doSearch(e)},input:function(e){e.target.composing||t.$set(t.formData,"query",e.target.value)}}})]),a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary",on:{click:t.doSearch}},[t._v("Search")])])])},v=[],b=function(t){Object(s["a"])(a,t);var e=Object(o["a"])(a);function a(){var t;return Object(c["a"])(this,a),t=e.apply(this,arguments),t.formData={query:t.$store.getters["search/query/get"]},t}return Object(f["a"])(a,[{key:"doSearch",value:function(){this.$route.query.q!==this.formData.query&&(this.$store.dispatch("search/query/update","".concat(this.formData.query)),this.$router.push("/search?q=".concat(this.formData.query)))}}]),a}(l["d"]);b=Object(u["a"])([l["a"]],b);var m=b,y=m,g=a("2877"),O=Object(g["a"])(y,h,v,!1,null,null,null),j=O.exports,w=function(t){Object(s["a"])(a,t);var e=Object(o["a"])(a);function a(){return Object(c["a"])(this,a),e.apply(this,arguments)}return Object(f["a"])(a,[{key:"isSearchFormShown",get:function(){return"/"!==this.$route.path}}]),a}(l["d"]);w=Object(u["a"])([Object(l["a"])({components:{SearchForm:j}})],w);var C=w,k=C,_=(a("9878"),Object(g["a"])(k,d,p,!1,null,"58632560",null)),x=_.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer has-background-light"},[a("div",{staticClass:"field is-grouped is-grouped-centered"},[a("p",{staticClass:"control"},[t._v(" ©︎2020 biyokoyama ")]),a("p",{staticClass:"control"},[a("a",{staticClass:"button is-small",attrs:{href:"https://github.com/biyokoyama/wiki-vue-typescript-practice",target:"_blank",rel:"noopener"}},[a("FontAwesomeIcon",{staticClass:"icon",attrs:{icon:["fab","github"]}}),a("span",[t._v(" Github ")])],1)])])])},S=[],D=function(t){Object(s["a"])(a,t);var e=Object(o["a"])(a);function a(){return Object(c["a"])(this,a),e.apply(this,arguments)}return a}(l["d"]);D=Object(u["a"])([l["a"]],D);var $=D,q=$,F=(a("c318"),Object(g["a"])(q,E,S,!1,null,"47fbf282",null)),A=F.exports,N=function(t){Object(s["a"])(a,t);var e=Object(o["a"])(a);function a(){return Object(c["a"])(this,a),e.apply(this,arguments)}return a}(l["d"]);N=Object(u["a"])([Object(l["a"])({components:{Navbar:x,Footer:A}})],N);var P=N,R=P,I=(a("5c0b"),Object(g["a"])(R,r,i,!1,null,null,null)),M=I.exports,B=a("8c4f"),T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index"},[a("section",{staticClass:"hero is-light is-fullheight"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container has-text-centered"},[a("h1",{staticClass:"title"},[t._v("wiki-vue-typescript-practice")]),a("SearchForm",{staticClass:"has-addons-centered"})],1)])])])},V=[],L=function(t){Object(s["a"])(a,t);var e=Object(o["a"])(a);function a(){return Object(c["a"])(this,a),e.apply(this,arguments)}return a}(l["d"]);L=Object(u["a"])([Object(l["a"])({components:{SearchForm:j}})],L);var J=L,z=J,G=Object(g["a"])(z,T,V,!1,null,null,null),H=G.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search has-background-light"},[a("SearchedArticles",{attrs:{articles:t.articles}})],1)},Q=[],U=(a("96cf"),a("1da1")),W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"searched-articles section"},[a("div",{staticClass:"container"},[a("div",{staticClass:"content"},t._l(t.articles,(function(e){return a("router-link",{key:e.id,staticClass:"box",attrs:{to:e.path}},[a("p",{staticClass:"subtitle"},[t._v(t._s(e.title))]),a("p",[t._v(" "+t._s(e.body)+" ")])])})),1)])])},X=[],Y=function(t){Object(s["a"])(a,t);var e=Object(o["a"])(a);function a(){return Object(c["a"])(this,a),e.apply(this,arguments)}return a}(l["d"]);Object(u["a"])([Object(l["c"])()],Y.prototype,"articles",void 0),Y=Object(u["a"])([l["a"]],Y);var Z=Y,tt=Z,et=(a("20bd"),Object(g["a"])(tt,W,X,!1,null,"dfb5e3c0",null)),at=et.exports,nt=(a("d81d"),a("bc3a")),rt=a.n(nt),it=function(){function t(e){Object(c["a"])(this,t),this.data=e}return Object(f["a"])(t,[{key:"id",get:function(){return this.data.id}},{key:"path",get:function(){return"/articles/".concat(this.id)}},{key:"title",get:function(){return this.data.title}},{key:"body",get:function(){return this.data.body}}]),t}(),ct=function(){function t(){Object(c["a"])(this,t)}return Object(f["a"])(t,null,[{key:"getList",value:function(){var t=Object(U["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,rt.a.get("/api/articles?q=".concat(e));case 2:return a=t.sent.data,t.abrupt("return",a.map((function(t){return new it(t)})));case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"findById",value:function(){var t=Object(U["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,rt.a.get("/api/articles/".concat(e));case 2:return a=t.sent.data,t.abrupt("return",new it(a));case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"updateById",value:function(){var t=Object(U["a"])(regeneratorRuntime.mark((function t(e,a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,rt.a.put("/api/articles/".concat(e),a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));function e(e,a){return t.apply(this,arguments)}return e}()}]),t}(),st=function(t){Object(s["a"])(a,t);var e=Object(o["a"])(a);function a(){var t;return Object(c["a"])(this,a),t=e.apply(this,arguments),t.articles=[],t}return Object(f["a"])(a,[{key:"mounted",value:function(){this._fetchArticles()}},{key:"_fetchArticles",value:function(){var t=Object(U["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ct.getList("".concat(this.$route.query.q));case 2:this.articles=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),a}(l["d"]);Object(u["a"])([Object(l["e"])("$route")],st.prototype,"_fetchArticles",null),st=Object(u["a"])([Object(l["a"])({components:{Navbar:x,SearchedArticles:at}})],st);var ot=st,ut=ot,lt=Object(g["a"])(ut,K,Q,!1,null,null,null),dt=lt.exports,pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"articles-id"},[a("div",{staticClass:"section"},[a("div",{staticClass:"container"},[a("ArticleContent",{attrs:{article:t.article},on:{save:t.onSaveArticleContent}})],1)])])},ft=[],ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article-content content"},[a("div",{staticClass:"field is-grouped"},[a("div",{staticClass:"control is-expanded"},[a("h1",{directives:[{name:"show",rawName:"v-show",value:!t.isEditing,expression:"!isEditing"}],staticClass:"title",domProps:{textContent:t._s(t.titleForView)}}),a("input",{directives:[{name:"show",rawName:"v-show",value:t.isEditing,expression:"isEditing"},{name:"model",rawName:"v-model",value:t.formData.title,expression:"formData.title"}],staticClass:"input",attrs:{type:"text",placeholder:"title here"},domProps:{value:t.formData.title},on:{input:function(e){e.target.composing||t.$set(t.formData,"title",e.target.value)}}})]),a("div",{staticClass:"control"},[a("div",{staticClass:"buttons is-right"},[a("button",{directives:[{name:"show",rawName:"v-show",value:!t.isEditing,expression:"!isEditing"}],staticClass:"button",on:{click:t.onClickEdit}},[t._v(" Edit ")]),a("button",{directives:[{name:"show",rawName:"v-show",value:t.isEditing,expression:"isEditing"}],staticClass:"button is-primary",on:{click:t.onClickSave}},[t._v(" Save ")]),a("button",{directives:[{name:"show",rawName:"v-show",value:t.isEditing,expression:"isEditing"}],staticClass:"button",on:{click:t.onClickCancel}},[t._v(" Cancel ")])])])]),a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("p",{directives:[{name:"show",rawName:"v-show",value:!t.isEditing,expression:"!isEditing"}],staticClass:"article-content__body-paragraph",domProps:{innerHTML:t._s(t.bodyForView)}}),a("textarea",{directives:[{name:"show",rawName:"v-show",value:t.isEditing,expression:"isEditing"},{name:"model",rawName:"v-model",value:t.formData.body,expression:"formData.body"}],staticClass:"textarea has-fixed-size",attrs:{placeholder:"body here"},domProps:{value:t.formData.body},on:{input:function(e){e.target.composing||t.$set(t.formData,"body",e.target.value)}}})])])])},vt=[],bt=function(t){Object(s["a"])(a,t);var e=Object(o["a"])(a);function a(){var t;return Object(c["a"])(this,a),t=e.apply(this,arguments),t.isEditing=!1,t.formData={title:"",body:""},t}return Object(f["a"])(a,[{key:"onClickEdit",value:function(){this._initFormData(),this.isEditing=!0}},{key:"onClickSave",value:function(){return this.isEditing=!1,this.formData}},{key:"onClickCancel",value:function(){this._initFormData(),this.isEditing=!1}},{key:"_initFormData",value:function(){this.article&&(this.formData.title=this.article.title,this.formData.body=this.article.body)}},{key:"titleForView",get:function(){return this.article?this.article.title:"(title here)"}},{key:"bodyForView",get:function(){return this.article?this.article.body:"(body here)"}}]),a}(l["d"]);Object(u["a"])([Object(l["c"])()],bt.prototype,"article",void 0),Object(u["a"])([Object(l["b"])("save")],bt.prototype,"onClickSave",null),Object(u["a"])([Object(l["b"])("cancel")],bt.prototype,"onClickCancel",null),bt=Object(u["a"])([l["a"]],bt);var mt=bt,yt=mt,gt=(a("828b"),Object(g["a"])(yt,ht,vt,!1,null,"f1bd1928",null)),Ot=gt.exports,jt=function(t){Object(s["a"])(a,t);var e=Object(o["a"])(a);function a(){var t;return Object(c["a"])(this,a),t=e.apply(this,arguments),t.article=null,t}return Object(f["a"])(a,[{key:"onSaveArticleContent",value:function(t){this._updateArticle(t)}},{key:"mounted",value:function(){this._fetchArticle()}},{key:"_updateArticle",value:function(){var t=Object(U["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ct.updateById(this.articleId,e);case 2:this._fetchArticle();case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"_fetchArticle",value:function(){var t=Object(U["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ct.findById(this.articleId);case 3:this.article=t.sent,t.next=14;break;case 6:t.prev=6,t.t0=t["catch"](0),t.t1=null===(e=t.t0.response)||void 0===e?void 0:e.status,t.next=404===t.t1?11:13;break;case 11:return this.$router.push("/"),t.abrupt("break",14);case 13:throw t.t0;case 14:case"end":return t.stop()}}),t,this,[[0,6]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"articleId",get:function(){return parseInt(this.$route.params.id,10)}}]),a}(l["d"]);jt=Object(u["a"])([Object(l["a"])({components:{Navbar:x,ArticleContent:Ot}})],jt);var wt=jt,Ct=wt,kt=Object(g["a"])(Ct,pt,ft,!1,null,null,null),_t=kt.exports;n["a"].use(B["a"]);var xt=[{path:"/",component:H},{path:"/search",component:dt},{path:"/articles/:id",component:_t}],Et=new B["a"]({mode:"history",base:"/wiki-vue-typescript-practice/",routes:xt}),St=Et,Dt=a("2f62"),$t={query:""},qt={namespaced:!0,state:$t,getters:{get:function(t){return t.query}},mutations:{set:function(t,e){t.query=e}},actions:{update:function(t,e){t.commit("set",e)}}},Ft={namespaced:!0,modules:{query:qt}};n["a"].use(Dt["a"]);var At=new Dt["a"].Store({state:{},mutations:{},actions:{},modules:{search:Ft}}),Nt=a("ecee"),Pt=a("f2d1"),Rt=a("ad3d");Nt["c"].add(Pt["a"]),n["a"].component("FontAwesomeIcon",Rt["a"]);var It=a("7b8d"),Mt=a.n(It),Bt=(a("7db0"),a("d3b7"),a("ddb0"),[{id:1001,title:"サンプル記事1タイトル",body:"サンプル記事1本文\n本文\n本文本文\n本文本文本文"},{id:1002,title:"サンプル記事2タイトル",body:"サンプル記事2本文\n本文\n本文本文\n本文本文本文"},{id:1003,title:"サンプル記事3タイトル",body:"サンプル記事3本文\n本文\n本文本文\n本文本文本文"}]),Tt=function(t){return Bt.find((function(e){return e.id===t}))},Vt={get:function(t){var e=t.values,a=Tt(e.id);return a?[200,a]:[404]},put:function(t){var e=t.values,a=t.data,n=Tt(e.id);return n&&(n.title=a.title,n.body=a.body),n?[200,n]:[404]}},Lt=(a("4de4"),a("caad"),a("2532"),{get:function(t){var e=t.params,a=e.q,n=a?Bt.filter((function(t){return t.title.includes(a)||t.body.includes(a)})):Bt;return[200,n]}}),Jt=function(t){return Mt()([{path:"/api/articles/_id",methods:Vt},{path:"/api/articles",methods:Lt}],t,"")};Jt(),n["a"].config.productionTip=!1,new n["a"]({router:St,store:At,render:function(t){return t(M)}}).$mount("#app")},cf05:function(t,e,a){t.exports=a.p+"img/logo.051a0500.png"},d333:function(t,e,a){}});
//# sourceMappingURL=app.50debe53.js.map