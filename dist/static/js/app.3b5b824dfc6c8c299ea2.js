webpackJsonp([4],{"307j":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("lRwf"),a=n.n(r),o=n("zL8q"),i=n.n(o),l=(n("tvR6"),{data:function(){return{activeIndex:"1",activeIndex2:"1"}},methods:{handleSelect:function(e,t){console.log(e,t)}}}),u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":this.activeIndex,mode:"horizontal",router:!0},on:{select:this.handleSelect}},[t("el-menu-item",{attrs:{index:"homepage"}},[this._v("首页")]),this._v(" "),t("el-menu-item",{attrs:{index:"workpage"}},[this._v("工作")]),this._v(" "),t("el-menu-item",{attrs:{index:"otherpage"}},[this._v("作品")])],1)},staticRenderFns:[]},s={components:{Nav:n("VU/8")(l,u,!1,null,null,null).exports},name:"App",created:function(){var e=document.getElementById("loader-wrapper");null!=e&&document.body.removeChild(e)}},c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("el-container",[t("el-header",[t("div",{attrs:{id:"logo"}},[t("el-image",{staticClass:"logo",attrs:{src:"./static/logo.png"}})],1),this._v(" "),t("div",[t("Nav")],1)])],1),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var d=n("VU/8")(s,c,!1,function(e){n("307j")},null,null).exports,p=n("pRNm"),h=n.n(p);a.a.use(h.a);var m=new h.a({routes:[{path:"/homepage",name:"homepage",component:function(){return n.e(2).then(n.bind(null,"3ilh"))}},{path:"/workpage",name:"workpage",component:function(){return n.e(1).then(n.bind(null,"hgqT"))}},{path:"/otherpage",name:"otherpage",component:function(){return n.e(0).then(n.bind(null,"vNtt"))}},{path:"/",redirect:"/homepage"}]});a.a.config.productionTip=!1,a.a.use(i.a),new a.a({el:"#app",router:m,render:function(e){return e(d)}})},lRwf:function(e,t){e.exports=Vue},pRNm:function(e,t){e.exports=VueRouter},tvR6:function(e,t){}},["NHnr"]);