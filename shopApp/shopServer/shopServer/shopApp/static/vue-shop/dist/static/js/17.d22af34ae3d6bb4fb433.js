webpackJsonp([17],{"4sYT":function(t,n,s){"use strict";function e(t){s("QCmO")}Object.defineProperty(n,"__esModule",{value:!0});var i=s("1a94"),a=s("mAm1"),r=s("nK57"),o=s("NyFS"),d=s("oa6C"),l=s("eT+W"),c=s("InS7"),p=s("FkhK"),f=s("+Jte"),h=s("6sKG"),u=s.n(h),v=s("6iV/"),x=s.n(v),_=(i.a,a.a,o.a,d.a,r.a,c.a,l.a,p.a,{components:{XHeader:i.a,Flexbox:a.a,FlexboxItem:o.a,Divider:d.a,Toast:r.a,SharePage:c.a,XButton:l.a,shoplistPage:p.a},data:function(){return{myFavourite:[],messShow:!1,message:"",shareList:[],wxOpenId:localStorage.getItem("openid"),hasRecord:!0}},methods:{goBackBtn:function(){window.history.go(-1)},requestJifenList:function(){var t=this,n=this,s=x.a.stringify({wxid:this.wxOpenId});u.a.post(Object(f.b)()+"jifenListJson/",s,{emulateJSON:!0}).then(function(s){t.$vux.loading.hide(),"ok"===s.data.status&&(n.$data.shareList=s.data.data)},function(n){t.$vux.toast.text("网络请求失败....","bottom"),console.log(n),t.$vux.loading.hide()})},shopListDetail:function(t){this.$router.push({name:"goods_detail",params:{goodsId:t,isjifen:!0}})},urlList:function(t){return Object(f.a)(t)},go_classify:function(){this.$router.push({name:"classify"})}},created:function(){this.$vux.loading.show({text:"loading"}),this.requestJifenList()},deactivated:function(){this.$destroy()}}),g=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",[s("x-header",{staticStyle:{position:"fixed",top:"0px","z-index":"1000",width:"100%"}},[s("span",[t._v("积分商城")]),t._v(" "),s("svg",{staticClass:"vux-x-icon vux-x-icon-ios-arrow-back",staticStyle:{fill:"#fff",position:"relative",top:"-8px",left:"-3px"},attrs:{slot:"ios-arrow-left",type:"ios-arrow-back",size:"35",xmlns:"http://www.w3.org/2000/svg",width:"35",height:"35",viewBox:"0 0 512 512"},on:{click:t.goBackBtn},slot:"ios-arrow-left"},[s("path",{attrs:{d:"M352 128.4L319.7 96 160 256l159.7 160 32.3-32.4L224.7 256z"}})])]),t._v(" "),t.hasRecord?s("div",{attrs:{id:"shareList_wrap"}},[t._l(t.shareList,function(n,e){return s("div",{key:e,staticClass:"shareList_contents"},[s("div",{staticClass:"shareList_img",on:{click:function(s){t.shopListDetail(n.goodsid)}}},[s("img",{attrs:{src:t.urlList(n),alt:""}})]),t._v(" "),s("div",{staticClass:"shareList_detail"},[s("div",{staticClass:"shareList_desc"},[t._v(t._s(n.goodsname)+","+t._s(n.standard))]),t._v(" "),s("div",{staticClass:"shareList_spans"},[s("span",[t._v(t._s(n.keyWorlds))])]),t._v(" "),s("div",{staticClass:"shareList_prices"},[t._v("积分:"+t._s(n.jifenprice)+" "),s("span",[t._v("返利￥"+t._s(n.rebate)+"元")])]),t._v(" "),s("div",{staticClass:"shareList_others"},[t._v(" 销量："+t._s(n.sellcount)+"  库存："+t._s(n.counts))]),t._v(" "),s("div",{staticClass:"deleData",on:{click:function(s){t.shopListDetail(n.goodsid)}}},[t._v("去看看")])])])}),t._v(" "),s("toast",{attrs:{position:"middle",type:"text"},model:{value:t.messShow,callback:function(n){t.messShow=n},expression:"messShow"}},[t._v(t._s(t.message))])],2):s("div",{staticClass:"cart_wrap"},[s("x-button",{staticClass:"go_choose",attrs:{mini:"",plain:""},nativeOn:{click:function(n){return t.go_classify(n)}}},[t._v("马上去分享")])],1)],1)},m=[],b={render:g,staticRenderFns:m},w=b,L=s("vSla"),k=e,y=L(_,w,!1,k,null,null);n.default=y.exports},InS7:function(t,n,s){"use strict";function e(t){s("sWHA")}var i=s("QsRp"),a=s("+Jte"),r=s("6sKG"),o=s.n(r),d=s("6iV/"),l=s.n(d),c=(i.a,o.a,l.a,{components:{Panel:i.a,axios:o.a,qs:l.a},props:["shareList"],methods:{shopListDetail:function(t){this.$router.push({name:"goods_detail",params:{goodsId:t}})},deleData:function(t,n){var s=this;if(void 0!==t){var e=l.a.stringify({buyid:t});o.a.post(Object(a.b)()+"buyhistoryDelete/",e,{emulateJSON:!0}).then(function(t){"ok"===t.data.status&&s.$vux.toast.text("删除成功","center")},function(t){s.$vux.toast.text("网络请求失败....","bottom"),console.log(t)})}if(void 0!==n){var i=l.a.stringify({shareid:n});o.a.post(Object(a.b)()+"delShare/",i,{emulateJSON:!0}).then(function(t){console.log(t)},function(t){s.$vux.toast.text("网络请求失败....","bottom"),console.log(t)})}},requestShareList:function(){var t=this,n=l.a.stringify({wxid:"654321"});o.a.post(Object(a.b)()+"findShare/",n,{emulateJSON:!0}).then(function(t){console.log(t)},function(n){t.$vux.toast.text("网络请求失败....","bottom"),console.log(n)})}},data:function(){return{type:"1"}},computed:{}}),p=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{attrs:{id:"shareList_wrap"}},t._l(t.shareList,function(n,e){return s("div",{key:e,staticClass:"shareList_contents"},[s("div",{staticClass:"shareList_img",on:{click:function(s){t.shopListDetail(n.goodsid)}}},[s("img",{attrs:{src:n.src,alt:""}})]),t._v(" "),s("div",{staticClass:"shareList_detail"},[s("div",{staticClass:"shareList_desc"},[t._v(t._s(n.title)+","+t._s(n.desc))]),t._v(" "),s("div",{staticClass:"shareList_spans"},[s("span",[t._v(t._s(n.keyWorlds))])]),t._v(" "),s("div",{staticClass:"shareList_prices"},[t._v("￥"+t._s(n.shop_price)+" "),s("span",[t._v(t._s(n.rebate))])]),t._v(" "),s("div",{staticClass:"shareList_others"},[t._v(" 20条评价  98%好评")]),t._v(" "),s("div",{staticClass:"deleData",on:{click:function(s){t.deleData(n.buyid,n.item.buyid)}}},[t._v("删除记录")])])])}))},f=[],h={render:p,staticRenderFns:f},u=h,v=s("vSla"),x=e,_=v(c,u,!1,x,"data-v-4708d391",null);n.a=_.exports},"N2v+":function(t,n,s){n=t.exports=s("UTlt")(!1),n.push([t.i,"\n#shareList_wrap[data-v-4708d391]{\r\n    margin: 50px 0.5rem;\n}\n.shareList_contents[data-v-4708d391]{\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    margin-top:0.1rem; \r\n    border-radius: 5px;\r\n    padding: 6px;\r\n    background: #ffffff\n}\n.shareList_img[data-v-4708d391]{\r\n    width: 110px;\n}\n.shareList_img img[data-v-4708d391]{\r\n    width: 100px;\r\n    height: 100px;\n}\n.shareList_detail[data-v-4708d391]{\r\n    -webkit-box-flex: 1;\r\n    -webkit-flex: 1;\r\n            flex: 1;\r\n    position: relative\n}\n.shareList_spans span[data-v-4708d391]{\r\n    display: inline-block;\r\n    background: #f4f4f4;\r\n    margin: 1px;\r\n    font-size: 8px;\r\n    color: #666\n}\n.shareList_prices[data-v-4708d391]{\r\n    font-size: 16px;\r\n    color: #ed393d\n}\n.shareList_prices span[data-v-4708d391]{\r\n display: inline-block;\r\n padding: 0px 0.5rem;\r\n    background: #ed393d;\r\n    margin: 1px;\r\n    border-radius: 10px;\r\n    font-size: 8px;\r\n    color: #ffffff\n}\n.shareList_desc[data-v-4708d391]{\r\n    font-size: 14px;\r\n     display: -webkit-box;  \r\n  word-break: break-all;  \r\n  text-overflow: ellipsis;  \r\n  -webkit-box-orient: vertical;  \r\n  -webkit-line-clamp: 2;\r\n  overflow: hidden\n}\n.shareList_others[data-v-4708d391]{\r\n    font-size: 10px;\r\n    color: #666\n}\n.deleData[data-v-4708d391]{\r\n    font-size:0.8rem; \r\n  border: 1px solid red;\r\n  margin-top:1.25rem;\r\n  padding: .125rem .3125rem;\r\n  color:  red;\r\n  border-radius:.1875rem;\r\n  position: absolute;\r\n  bottom: 20px;\r\n  right: 0;\n}\r\n",""])},QCmO:function(t,n,s){var e=s("hpjf");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s("FIqI")("b74b49c6",e,!0,{})},hpjf:function(t,n,s){n=t.exports=s("UTlt")(!1),n.push([t.i,"\n.deleData{\n    font-size:0.8rem; \n  border: 1px solid red;\n  margin-top:1.25rem;\n  padding: .125rem .3125rem;\n  color:  red;\n  border-radius:.1875rem;\n  position: absolute;\n  z-index: 100\n}\n#shareList_wrap{\n    margin: 50px 0.5rem;\n}\n.shareList_contents{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    margin-top:0.1rem; \n    border-radius: 5px;\n    padding: 6px;\n    background: #ffffff\n}\n.shareList_img{\n    /*width: 110px;*/\n    width: 24%;\n    height: 0;\n    overflow: hidden;\n    padding-bottom: 24%;\n    padding-right: 10px;\n}\n.shareList_img img{\n    /*width: 100px;\n    height: 100px;*/\n    width: 100%;\n}\n.shareList_detail{\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n            flex: 1;\n    position: relative\n}\n.shareList_spans span{\n    display: inline-block;\n    background: #f4f4f4;\n    margin: 1px;\n    font-size: 8px;\n    color: #666\n}\n.shareList_prices{\n    font-size: 16px;\n    color: #ed393d\n}\n.shareList_prices span{\n    display: inline-block;\n    padding: 0px 0.5rem;\n    background: #ed393d;\n    margin: 1px;\n    border-radius: 10px;\n    font-size: 8px;\n    color: #ffffff\n}\n.shareList_desc{\n    font-size: 14px;\n    display: -webkit-box;  \n  word-break: break-all;  \n  text-overflow: ellipsis;  \n  -webkit-box-orient: vertical;  \n  -webkit-line-clamp: 2;\n  overflow: hidden\n}\n.shareList_others{\n    font-size: 10px;\n    color: #666\n}\n.deleData{\n    font-size:0.8rem; \n  border: 1px solid red;\n  margin-top:1.25rem;\n  padding: .125rem .3125rem;\n  color:  red;\n  border-radius:.1875rem;\n  position: absolute;\n  bottom: 20px;\n  right: 0;\n}\n.cart_wrap {\n  background: url(/static/cart/gwbg@2x.png);\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 43rem;\n  position: relative;\n}\n.go_choose {\n  position: absolute;\n  top: 30rem;\n  left: 10rem;\n}\n",""])},sWHA:function(t,n,s){var e=s("N2v+");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s("FIqI")("c0ce1da0",e,!0,{})}});