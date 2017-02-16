webpackJsonp([1,0],[function(t,e,s){(function(t){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}var i=s(10),n=e(i),a=s(34),o=e(a),l=s(51),u=e(l),r=s(50),c=e(r),d=s(38),f=e(d),v=s(40),m=e(v),h=s(41),p=e(h),g=s(39),w=e(g),_=s(35),b=e(_);n.default.use(u.default),n.default.use(c.default);var C=new u.default({mode:"history",base:t,routes:[{path:"/",component:f.default},{path:"/index.html",component:p.default},{path:"/login",component:f.default},{path:"/register",component:m.default},{path:"/todolist",component:p.default},{path:"/movie",component:w.default},{path:"/book",component:b.default}]});new n.default({router:C,render:function(t){return t(o.default)}}).$mount("#app")}).call(e,"/")},,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={findElem:function(t,e,s){for(var i=0;i<t.length;i++)if(t[i][e]==s)return i;return-1}}},function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var n=s(10),a=i(n),o=s(52),l=i(o),u=s(5),r=i(u);a.default.use(l.default);var c=new l.default.Store({state:{cid:""==r.default.fetch()?"":r.default.fetch()[0].cid,cname:""==r.default.fetch()?"":r.default.fetch()[0].cname,isLogin:""==r.default.fetch()?"":r.default.fetch()[0].islogin},strict:!0,mutations:{login:function(t){t.cid=r.default.fetch()[0].cid,t.cname=r.default.fetch()[0].cname,t.isLogin=r.default.fetch()[0].islogin},singout:function(t){t.cid="",t.cname="",t.isLogin=!1}}});t.exports=c},,function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(4),a=i(n),o="usercurr";e.default={fetch:function(){return JSON.parse(window.sessionStorage.getItem(o)||"[]")},save:function(t){window.sessionStorage.setItem(o,(0,a.default)(t))}}},function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(4),a=i(n),o="todolist-vuejs";e.default={fetch:function(){return JSON.parse(window.localStorage.getItem(o)||"[]")},save:function(t){window.localStorage.setItem(o,(0,a.default)(t))},delete:function(t){window.localStorage.removeItem(t)}}},function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(4),a=i(n),o="user-vuejs";e.default={fetch:function(){return JSON.parse(window.localStorage.getItem(o)||"[]")},save:function(t){window.localStorage.setItem(o,(0,a.default)(t))}}},,,,function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(37),a=i(n),o=s(36),l=i(o);e.default={name:"app",components:{vheader:a.default,vfooter:l.default},data:function(){return{}},mounted:function(){}}},function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(3),a=i(n),o=s(6),l=i(o),u=s(19),r=i(u),c=s(5),d=(i(c),s(2)),f=i(d);e.default={name:"book",data:function(){return{bookname:"",msg:"",books:r.default.fetch(),lists:l.default.fetch()}},mounted:function(){console.log("书籍页：当前是否已登录:"+(a.default.state.isLogin?" 是 ":" 否 ")+" ,当前id为 "+a.default.state.cid)},watch:{lists:{handler:function(t){l.default.save(t)},deep:!0}},methods:{searchBook:function(){return""==this.bookname.trim()?void(this.msg="请输入书名关键字"):void this.$http.jsonp("https://api.douban.com/v2/book/search",{params:{q:this.bookname,count:10}}).then(function(t){this.books=t.data.books,r.default.save(this.books)},function(t){console.log(t)})},addtolist:function(t){if(!a.default.state.cid)return void alert("请先登录");var e=[];this.lists.forEach(function(t){t.id==a.default.state.cid&&e.push(t)});var s=f.default.findElem(e,"plan",this.books[t].title);return s!=-1?void alert("已经在列表中"):(this.lists.push({id:a.default.state.cid,plan:this.books[t].title,isfinished:!1}),void alert("添加成功"))},clearMsg:function(){this.msg=""}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"footer"}},function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(3),a=i(n),o=s(7),l=i(o),u=s(5),r=i(u);e.default={name:"header",data:function(){return{isLogin:!1,cname:"",users:l.default.fetch(),user:r.default.fetch()}},components:{},mounted:function(){a.default.state.isLogin&&(this.cname=r.default.fetch()[0].cname,this.isLogin=!0)},methods:{signout:function(){confirm("确定退出吗")&&(window.location.href="./",a.default.commit("singout"),this.user=[],this.user.push({cid:"",islogin:!1}),r.default.save(this.user),console.log("当前是否已登录:"+(a.default.state.isLogin?" 是 ":" 否 ")+" ,当前id为 "+a.default.state.cid))}}}},function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(7),a=i(n),o=s(9),l=i(o),u=s(2),r=i(u),c=s(3),d=i(c),f=s(5),v=i(f);e.default={name:"todolist",data:function(){return{name:"",pwd:"",msg:"",cid:"",users:a.default.fetch(),user:v.default.fetch()}},methods:{login:function(){if(""==this.name.trim())return void(this.msg="请输入用户名");if(""==this.pwd.trim())return void(this.msg="请输入密码");var t=r.default.findElem(this.users,"name",this.name),e=r.default.findElem(this.users,"pwd",(0,l.default)(this.pwd));return t==-1?void(this.msg="该用户名未注册"):e==-1?void(this.msg="密码错误"):(t!=-1&&this.users[t].pwd==(0,l.default)(this.pwd)&&(alert("登录成功"),window.location.href="./index.html"),this.user=[],this.user.push({cid:this.users[t].id,cname:this.users[t].name,islogin:!0}),v.default.save(this.user),d.default.commit("login"),console.log("当前是否已登录:"+(d.default.state.isLogin?" 是 ":" 否 ")+" ,当前id为 "+d.default.state.cid),this.name="",void(this.pwd=""))},clearMsg:function(){this.msg=""}}}},function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(20),a=i(n),o=s(6),l=i(o),u=s(3),r=i(u),c=s(2),d=i(c);e.default={name:"movie",data:function(){return{title:"",msg:"",moviename:"",movies:a.default.fetch(),lists:l.default.fetch(),items:[]}},watch:{lists:{handler:function(t){l.default.save(t)},deep:!0}},mounted:function(){console.log("电影页：当前是否已登录:"+(r.default.state.isLogin?" 是 ":" 否 ")+" ,当前id为 "+r.default.state.cid)},methods:{addtolist:function(t){if(!r.default.state.cid)return void alert("请先登录");var e=[];this.lists.forEach(function(t){t.id==r.default.state.cid&&e.push(t)});var s=d.default.findElem(e,"plan",this.movies[t].title);return s!=-1?void alert("已经在列表中"):(this.lists.push({id:r.default.state.cid,plan:this.movies[t].title,isfinished:!1}),void alert("添加成功"))},deletelist:function(){},searchMovie:function(){return""==this.moviename.trim()?void(this.msg="请输入电影关键字"):void this.$http.jsonp("https://api.douban.com/v2/movie/search",{params:{q:this.moviename,count:10}}).then(function(t){this.movies=t.data.subjects,a.default.save(this.movies)},function(t){console.log(t)})},clearMsg:function(){this.msg=""}}}},function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(7),a=i(n),o=s(9),l=i(o),u=s(2),r=i(u);e.default={name:"register",data:function(){return{newName:"",newPwd:"",msg:"",id:"",users:a.default.fetch()}},watch:{users:{handler:function(t){a.default.save(t)},deep:!0}},methods:{addUser:function(){if(""==this.newName.trim())return void(this.msg="请输入用户名");var t=r.default.findElem(this.users,"name",this.newName);return t!=-1?void(this.msg="该用户名已被注册"):""==this.newPwd.trim()?void(this.msg="请输入密码"):""==this.$refs.checkPwd.value.trim()?void(this.msg="请确认密码"):this.newPwd!==this.$refs.checkPwd.value?void(this.msg="两次密码不一致"):(this.id="vl_"+(new Date).getTime()+Math.floor(100*Math.random()),this.users.push({id:this.id,name:this.newName,pwd:(0,l.default)(this.newPwd)}),alert("注册成功"),window.location.href="./",this.newName="",this.newPwd="",void(this.$refs.checkPwd.value=""))},clearMsg:function(){this.msg=""}}}},function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(6),a=i(n),o=s(2),l=i(o),u=s(3),r=i(u);e.default={name:"todolist",data:function(){return{allitems:a.default.fetch(),newItem:"",name:"",id:"",msg:"",showFinishedList:!1,isActive:!1,items:[]}},watch:{allitems:{handler:function(t){a.default.save(t)},deep:!0}},mounted:function(){var t=this;this.allitems.forEach(function(e){e.id==r.default.state.cid&&t.items.push(e)}),console.log("清单：当前是否已登录:"+(r.default.state.isLogin?" 是 ":" 否 ")+" ,当前id为 "+r.default.state.cid)},methods:{toggleFinished:function(t){t.isfinished=!t.isfinished},toggleFinishedList:function(){return r.default.state.cid?void(this.showFinishedList=!this.showFinishedList):void alert("请先登录")},showDefault:function(){var t=l.default.findElem(this.items,"isfinished",!0);return t<0},checkLogin:function(){r.default.state.cid||(this.msg="请先登录")},clearMsg:function(){this.msg=""},addItem:function(){if(""!=this.newItem.trim()){if(!r.default.state.cid)return void alert("请先登录");this.allitems.push({id:r.default.state.cid,plan:this.newItem,isfinished:!1}),this.items.push({id:r.default.state.cid,plan:this.newItem,isfinished:!1}),this.newItem=""}}}}},function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(4),a=i(n),o="book-vuejs";e.default={fetch:function(){return JSON.parse(window.localStorage.getItem(o)||"[]")},save:function(t){window.localStorage.setItem(o,(0,a.default)(t))}}},function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(4),a=i(n),o="movie-vuejs";e.default={fetch:function(){return JSON.parse(window.localStorage.getItem(o)||"[]")},save:function(t){window.localStorage.setItem(o,(0,a.default)(t))}}},,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANYAAAA4CAYAAACBrQbcAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUVFQzRGQjlFRUEzMTFFNjkyNzlCMUQwNDMwQzMyNDQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUVFQzRGQkFFRUEzMTFFNjkyNzlCMUQwNDMwQzMyNDQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1RUVDNEZCN0VFQTMxMUU2OTI3OUIxRDA0MzBDMzI0NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1RUVDNEZCOEVFQTMxMUU2OTI3OUIxRDA0MzBDMzI0NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pj8CbKMAAAeeSURBVHja7F3tjbM4ECYoDWRLYEsgDZyUSNcAWwIpIfy5X/cnKSGUEBo4KZGugaWElxYo4T3P3vCej03ANjPGMR6J3U02GZuZeTwf/mAVBQo0Qr/99edG/NqJK8Hf8DoV1/7v3/+442du+P9GXPBeI/5XDfCE79/wJfCpfZLZGoV2kgRHSSDkUgjtPCDco6QsHb5nwbd8wCtjkFMrLjCSQrTZEhgqZ18HZa7Zzxx1o9rPRAIffL+T210GGdrcTdL5RVzbJ33YSQAcJNHGSvreTwJZFrIcNXju1+LHtRMEA4GQTyBgGQQSXXDkM+F7EXxBYQ2+d2UYGDoCA8jx7wMBP86+jslcBVAZDrYJkdxywbNBkLUIVHkgTSPPaM0Iqr6AH1FKyDexcB+JY3xMZD4W8nENtAl66UVQDCEVcxtdOPCIprR97sXlhQV5lUR8uPvaDMh8KDz9oQiqFu+hL/8ztr14ioVxFhjetAz8QblbKVzrx8TQ9l7TYEvkWfR4gVLfUbktsZGCfN6GknEdYuwrFA0Ogv/7M5mPFBI2ivIH/mc534RBDnQCbSPIWsu2XLrUxqoXBnwShimQQB8IlVuj0dQKvJQT3jFDFe3tOTU1d19F+wnqfUOpU+R7VQ335cKDgXy+9YujeIF8L1K+/bR4EUs31uqGDwreSmcUrwdCJOibckm2KwETeQBWcqCvV0VQNTohLHhMcW0teJJKZwAn0NdBxbZjRkNKCI3jg6LMHeibNzhG6gWk0kQHqoY4IX8vZhDdaKgbPxg9qQw4NVBC8yTEuQcYkIMKvJROlW7KBO6BqahR6eSShF5rtDgUM4Y/O0Nl9+kcYMBCeWRQkjc0RBisPxhYz2kb57mAlWACOwWMTfBWrMDiDu37OTRlvlXP4a16XqvWARZlPKy7ZKcfPpbB/lnCwNQAKBSrIyg9TOWAKCtlYKHbploQmU4EYgAWD5msrMgRkKy5iaWcL+LuQ8w8Gih7LAwbk56rD5VAHjIFyG0quKhSDRdShKE+xJw3j4BRBdeOqw+BvtFmwvduGjrlGrRd2mJSKwMLE02qxDA1/FwAlluhoAyuK+y/MvFeGIVMtS2X1iM2Oh6L0rAzk8+FauBLgPNTgOuKy46mhIO6Xuw1PRYxsEbL7jjybYK3eknKMDwEkOVP5iL7VEg6/tq0qukRKofu/1FfmvWAy66EkCiFfw75ldcEgyMsUIVNlmBs5bO1nRgOKi0Yhkqi4AeTy92Edjnn/NWT/h2wf23Xv7UCGjMioYf8yq3whWvXrrxrGPR4nhrW43adylVh4k7tUjUUtJlnyR6r9e1gEQfJ1jTGDsNEijL9S5EtYD0tu2PiG/Iru2Rbxl2h46SYg/kNrLH1UEThYAgD/QdWR0cEWLpoYFkKB0Phwn5OQDlPqUsJgitfOrCoksZvZXfpIMiOGpcqPp7T3OswLz6DaxRYOLpRJbu7kddVsHdrXsuFE5W8BVes+LmKCVj9WDtUA+1S4UAfTj7mXKrA4tpVnIT8alavVTkQEkI6cAnAmijE3roy2UOFbSLzgOvgALhS30LCWFH4LZPXqkN+FcCFdFwcsLjCwd5Sl5BfzQ+uOXOuZOI+r5cFFpVHSXtl9/sDkAWaB1xQKYTFsXNVC3eLAxbOLzUMAryHMNApcIE+ttE8568vD1jEXqufZ4Uw0C1wtei9bBwR/b9wcKnA4ipghDDQIsGKFzjcH1ed50NRCuZe77YA5suclhawCI+g/lV2x9Gx9tB4M9y27uKWCXhaY/cY1Aue4R4pAOwNQ0TOHGyzOGAxei3fQAVAgqd4ZJ3xOtbFvuyV5pC6EBGfgXUIIXwAlm3ql41d81j9XEb7OHDYNYuP6dmHUJ4GWFxld59ot5Q+Q3qAD7yjAlizSGARH0HtndfCrTDp0gYDCWDFRD7LBBax1/Jxm/arrh7IKLbNY5ne9AmL3oSU8cwC8DE2z5c+KOCpRVUAlr7gKLZ2e1dmxymEV56HoVwIWwZgzeNtfFzG9OortJOxOS2dnEvzK7VPA+2cwPLRW/lQjDnOdESZV89CMwYW7j4N+VX0qxLoyy5YknvRXG1SY14WgDUxnPPmNCYEFayy8GlOLiMICXW89yHyjKYC624ZkC6C6hb5uYrkZLpdHif+VYFZ+LhWdC5g1cwGv7MAKihNf0YTq4CEfeW454uu50JQXSO1OcoS571c1b8xnxXBTZgY1xvHwTGo1AxHS4oEvJAVL5XTc93QT/BZPehrHv33eBoK+to0OpaviLZ/GvA9jIXv6OFOGqA6OK7/r7Ql+vcRVJWOza6JlKkDrDsTqHILBYQbUV+PaIDU9FWZRP5bQjkD3x/43Ku7bGSGA0RB7akwgrgyyDRBuwLv/aFatIsJGq4MgMhBr1SVOzHz74ydvKiBck5776l6iBoBf2bom40VL8ptTAaWwRHUXPnVK1UZbfRV11vBgFcwDXwteqktY6GicUlva6IGK0U0t4ynMX2gJ3iFCt0HjvIZk/LLkTyr/6RO2eDPUq6inUs+aOduaY6qQK+ZMQ0MVaSxcn8VBVocSTucN+hJyoHPdgWbHYIMrn03QEr5YneKV3c40H3JJxv/I8AAgwpPIfeTus0AAAAASUVORK5CYII="},function(t,e,s){s(30);var i=s(1)(s(11),s(48),null,null);t.exports=i.exports},function(t,e,s){s(27);var i=s(1)(s(12),s(45),"data-v-73340ffe",null);t.exports=i.exports},function(t,e,s){s(31);var i=s(1)(s(13),s(49),"data-v-fd9fd320",null);t.exports=i.exports},function(t,e,s){s(29);var i=s(1)(s(14),s(47),"data-v-bb3b0b3c",null);t.exports=i.exports},function(t,e,s){s(25);var i=s(1)(s(15),s(43),"data-v-16c3e624",null);t.exports=i.exports},function(t,e,s){s(28);var i=s(1)(s(16),s(46),"data-v-77f20b2a",null);t.exports=i.exports},function(t,e,s){s(24);var i=s(1)(s(17),s(42),"data-v-15685f90",null);t.exports=i.exports},function(t,e,s){s(26);var i=s(1)(s(18),s(44),"data-v-6d4f9ef9",null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"register"}},[s("div",{staticClass:"model"},[s("div",{staticClass:"form-group"},[s("label",[t._v("请输入您的用户名")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newName,expression:"newName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"请输入您的用户名"},domProps:{value:t._s(t.newName)},on:{focus:t.clearMsg,keyup:function(e){13===e.keyCode&&t.addUser(e)},input:function(e){e.target.composing||(t.newName=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("请输入您的密码")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newPwd,expression:"newPwd"}],staticClass:"form-control",attrs:{type:"password",placeholder:"请输入您的密码"},domProps:{value:t._s(t.newPwd)},on:{focus:t.clearMsg,keyup:function(e){13===e.keyCode&&t.addUser(e)},input:function(e){e.target.composing||(t.newPwd=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("请确认您的密码")]),t._v(" "),s("input",{ref:"checkPwd",staticClass:"form-control",attrs:{type:"password",placeholder:"请确认您的密码"},on:{focus:t.clearMsg,keyup:function(e){13===e.keyCode&&t.addUser(e)}}})]),t._v(" "),s("p",{ref:"msg",staticClass:"message"},[t._v(t._s(t.msg))]),t._v(" "),s("div",{staticClass:"text-center"},[s("button",{staticClass:"btn btn-default",attrs:{type:"submit"},on:{click:t.addUser}},[t._v("注册")])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"login"}},[s("div",{staticClass:"model"},[s("div",{staticClass:"form-group"},[s("label",[t._v("请输入您的用户名")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"请输入您的用户名"},domProps:{value:t._s(t.name)},on:{focus:t.clearMsg,keyup:function(e){13===e.keyCode&&t.login(e)},input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("请输入您的密码")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],staticClass:"form-control",attrs:{type:"password",placeholder:"请输入您的密码"},domProps:{value:t._s(t.pwd)},on:{focus:t.clearMsg,keyup:function(e){13===e.keyCode&&t.login(e)},input:function(e){e.target.composing||(t.pwd=e.target.value)}}})]),t._v(" "),s("p",{staticClass:"message"},[t._v(t._s(t.msg))]),t._v(" "),s("div",{staticClass:"text-center"},[s("button",{staticClass:"btn btn-default",attrs:{type:"submit"},on:{click:t.login}},[t._v("登录")])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container",attrs:{id:"todolist"}},[s("div",[t._m(0),t._v(" "),s("div",[s("div",[s("div",{staticClass:"input-group"},[s("span",{staticClass:"input-group-btn"},[s("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:t.addItem}},[t._v("+")])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newItem,expression:"newItem"}],staticClass:"form-control",attrs:{type:"text",placeholder:"请添加计划"},domProps:{value:t._s(t.newItem)},on:{keyup:function(e){13===e.keyCode&&t.addItem(e)},focus:t.checkLogin,blur:t.clearMsg,input:function(e){e.target.composing||(t.newItem=e.target.value)}}})])]),t._v(" "),s("p",{staticClass:"message"},[t._v(t._s(t.msg))]),t._v(" "),s("div",{staticClass:"task-list"},[s("ul",t._l(t.items,function(e){return e.isfinished?t._e():s("li",{class:{finished:e.isfinished},on:{dbclick:function(t){}}},[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.isfinished,expression:"item.isfinished"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isfinished)?t._i(e.isfinished,null)>-1:e.isfinished},on:{click:[function(s){var i=e.isfinished,n=s.target,a=!!n.checked;if(Array.isArray(i)){var o=null,l=t._i(i,o);a?l<0&&(e.isfinished=i.concat(o)):l>-1&&(e.isfinished=i.slice(0,l).concat(i.slice(l+1)))}else e.isfinished=a},t.toggleFinished]}}),s("span",[t._v(t._s(e.plan))])])])}))]),t._v(" "),s("div",{staticClass:"task-list"},[s("button",{staticClass:"btn btn-success",on:{click:t.toggleFinishedList}},[t._v("显示已完成任务")]),t._v(" "),t.showFinishedList?s("transition",{attrs:{name:"fade"}},[s("ul",[s("li",[t.showDefault()?s("h5",[t._v("暂无完成任务")]):s("h5",[t._v("以下为完成任务")])]),t._v(" "),t._l(t.items,function(e){return e.isfinished?s("li",{class:{finished:e.isfinished}},[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.isfinished,expression:"item.isfinished"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isfinished)?t._i(e.isfinished,null)>-1:e.isfinished},on:{click:[function(s){var i=e.isfinished,n=s.target,a=!!n.checked;if(Array.isArray(i)){var o=null,l=t._i(i,o);a?l<0&&(e.isfinished=i.concat(o)):l>-1&&(e.isfinished=i.slice(0,l).concat(i.slice(l+1)))}else e.isfinished=a},t.toggleFinished]}}),t._v(t._s(e.plan))])]):t._e()})],2)]):t._e()],1)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",[t._v("待完成")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container",attrs:{id:"book"}},[s("div",{staticClass:"input-group m_t_m"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.bookname,expression:"bookname"}],staticClass:"form-control search_input",attrs:{type:"text",placeholder:"请输入书名关键字"},domProps:{value:t._s(t.bookname)},on:{focus:t.clearMsg,keyup:function(e){13===e.keyCode&&t.searchBook(e)},input:function(e){e.target.composing||(t.bookname=e.target.value)}}}),t._v(" "),s("span",{staticClass:"input-group-btn"},[s("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:t.searchBook}},[s("i",{staticClass:"fa fa-search"})])])]),t._v(" "),s("span",{staticClass:"message"},[t._v(t._s(t.msg))]),t._v(" "),s("ul",t._l(t.books,function(e,i){return s("li",{staticClass:"col-xs-3 col-md-2 list_li"},[s("div",{staticClass:"img_main"},[s("img",{staticClass:"img-thumbnail",attrs:{src:e.images.small}})]),t._v(" "),s("p",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),s("input",{staticClass:"btn btn-default",attrs:{type:"button",value:"我要看"},on:{click:function(e){t.addtolist(i)}}})])}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container",attrs:{id:"movie"}},[s("div",{staticClass:"input-group m_t_m"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.moviename,expression:"moviename"}],staticClass:"form-control",attrs:{type:"text",placeholder:"请输入电影关键字"},domProps:{value:t._s(t.moviename)},on:{focus:t.clearMsg,keyup:function(e){13===e.keyCode&&t.searchMovie(e)},input:function(e){e.target.composing||(t.moviename=e.target.value)}}}),t._v(" "),s("span",{staticClass:"input-group-btn"},[s("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:t.searchMovie}},[s("i",{staticClass:"fa fa-search"})])])]),t._v(" "),s("span",{staticClass:"message"},[t._v(t._s(t.msg))]),t._v(" "),s("ul",{staticClass:"movieList"},t._l(t.movies,function(e,i){return s("li",{staticClass:"col-xs-3 col-md-2 list_li"},[s("div",{staticClass:"img_main"},[s("img",{staticClass:"img-thumbnail",attrs:{src:e.images.small}})]),t._v(" "),s("p",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),e.existlist?s("input",{staticClass:"btn btn-default",attrs:{type:"button",value:"移出"},on:{click:function(e){t.deletelist(i)}}}):s("input",{staticClass:"btn btn-default",attrs:{type:"button",value:"我要看"},on:{click:function(e){t.addtolist(i)}}})])}))])},staticRenderFns:[]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",[s("nav",{staticClass:"container header"},[t._m(0),t._v(" "),s("div",{staticClass:"nav-person"},[t.isLogin?s("div",{staticClass:"nav-login"},[s("div",{staticClass:"user-name"},[t._v(t._s(t.cname))]),t._v(" "),s("button",{staticClass:"btn btn-warning",attrs:{href:"#",role:"button"},on:{click:t.signout}},[t._v("退出")])]):s("div",{staticClass:"nav-login"},[s("button",{staticClass:"btn btn-success",attrs:{href:"#",role:"button"}},[s("router-link",{attrs:{to:"/register"}},[t._v("注册")])],1),t._v(" "),s("button",{staticClass:"btn btn-default",attrs:{href:"#",role:"button"}},[s("router-link",{attrs:{to:"/login"}},[t._v("登录")])],1)])]),t._v(" "),s("ul",{staticClass:"nav-menu"},[s("li",[s("router-link",{attrs:{to:"/todolist"}},[t._v("TODO")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/movie"}},[t._v("电影")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/book"}},[t._v("书籍")])],1)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h1",{staticClass:"logo"},[i("img",{attrs:{src:s(33)}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("vheader"),t._v(" "),s("router-view"),t._v(" "),s("vfooter")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer"},[s("p",[t._v("Copyright © 2017 VList.")])])}]}},,,,function(t,e){}]);
//# sourceMappingURL=app.8c21bce9bf4da4d384d0.js.map