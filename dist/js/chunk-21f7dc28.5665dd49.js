(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21f7dc28"],{"089d":function(e,t,i){"use strict";i("6f08")},1511:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"account"},[i("v-container",{staticClass:"container"},[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-card",[i("v-card-title",{staticClass:"pb-0"},[e._v(" DANH SÁCH TÀI KHOẢN "),i("v-spacer"),i("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Tìm Kiếm","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),i("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,n=t.attrs;return[i("v-btn",e._g(e._b({staticClass:"ms-5 my-4",attrs:{color:"green",dark:""}},"v-btn",n,!1),a),[e._v(" Thêm Mới ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("v-card",[i("v-card-title",{staticClass:"pt-7"},[i("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),i("v-card-text",[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{label:"Email*",required:"",disabled:e.readChange},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),i("v-col",{attrs:{cols:"12"}},[i("div",{staticClass:"input-container"},[i("v-text-field",{attrs:{label:"Password*",type:e.choose,required:""},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),i("v-icon",{staticClass:"material-icons visibility",on:{click:e.showPassword}},[e._v(e._s(e.visibility))])],1)]),i("v-col",{attrs:{cols:"12"}},[i("v-select",{attrs:{items:this.listRole,label:"Chức Vụ",required:""},model:{value:e.user.role,callback:function(t){e.$set(e.user,"role",t)},expression:"user.role"}})],1)],1)],1),i("small",[e._v("*indicates required field")])],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Đóng ")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.createUser}},[e._v(" Cập nhật ")])],1)],1)],1),i("v-data-table",{staticClass:"elevation-1 text-center table-list",attrs:{headers:e.header,items:e.account,"items-per-page":10,"item-key":"id","show-select":"",search:e.search,"footer-props":{showFirstLastPage:!0,firstIcon:"mdi-arrow-collapse-left",lastIcon:"mdi-arrow-collapse-right"}},scopedSlots:e._u([{key:"item.actions",fn:function(t){var a=t.item;return[i("v-dialog",{attrs:{"max-width":"600",persistent:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,s=t.attrs;return[i("v-btn",e._g(e._b({attrs:{color:"primary"},on:{click:function(t){return e.DetailsUser(a)}}},"v-btn",s,!1),n),[e._v("Chi Tiết "),i("v-icon",{attrs:{dark:"",right:""}},[e._v(" mdi-eye ")])],1)]}},{key:"default",fn:function(t){return[i("v-card",{staticClass:"pb-2"},[i("v-card-text",{staticClass:"pb-0"},[i("v-container",{staticClass:"px-0 pt-13 pb-0"},[i("h1",{staticClass:"px-5 py-0 text-center primary--text"},[e._v(" Thông Tin Tài Khoản ")]),i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{label:"ID",required:"",value:e.detailsItem.id,readonly:""}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{label:"Email",required:"",value:e.detailsItem.email,readonly:""}})],1),i("v-col",{attrs:{cols:"12"}},[i("div",{staticClass:"input-container"},[i("v-text-field",{attrs:{label:"Password",required:"",value:e.detailsItem.password,readonly:"",type:e.choose}}),i("v-icon",{staticClass:"material-icons visibility",on:{click:e.showPassword}},[e._v(e._s(e.visibility))])],1)]),i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{label:"Chức Vụ",required:"",value:e.detailsItem.role,readonly:""}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{label:"Thời gian đăng nhập gần đây*",required:"",value:e.detailsItem.timeLogin,readonly:""}})],1)],1)],1)],1),i("v-card-actions",{staticClass:"justify-end"},[i("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.value=!1}}},[e._v("Đóng")])],1)],1)]}}],null,!0)}),i("v-btn",{staticClass:"ma-2",attrs:{color:"orange darken-2",dark:""},on:{click:function(t){return e.editItem(a)}}},[e._v(" Sửa "),i("v-icon",{attrs:{dark:"",right:""}},[e._v(" mdi-pencil ")])],1),i("v-btn",{staticClass:"ma-2 ms-0",attrs:{color:"red",dark:""},on:{click:function(t){return e.handleRow(a)}}},[e._v(" Xóa "),i("v-icon",{attrs:{dark:"",right:""}},[e._v(" mdi-delete ")])],1)]}},{key:"no-data",fn:function(){return[i("v-btn",{attrs:{color:"primary"}},[e._v(" Reset ")])]},proxy:!0}],null,!0)})],1)],1)],1)],1),i("popup",{attrs:{show:e.showDialogDelete,cancel:e.cancel,confirm:e.handleDelete,text:"Có! Mình muốn xóa ^^",title:"Thông báo!",textCancel:"Không nha :v",description:"Bạn có muốn xóa dữ liệu này không ???"}}),i("popup",{attrs:{show:e.showDialogUpdate,cancel:e.cancel,confirm:e.confirm,text:"Oke ^^",title:"Thông báo!",description:"Sửa dữ liệu thành công!!"}}),i("popup",{attrs:{show:e.showDialogCreateRequired,cancel:e.cancel,confirm:e.confirm,text:"Ok! Mình sẽ kiểm tra lại",title:"Thông báo!",description:"Vui lòng điền đầy đủ thông tin!!"}}),i("popup",{attrs:{show:e.showDialogCreateSuccess,cancel:e.cancel,confirm:e.confirm,text:"Oke ^^",title:"Thông báo!",description:"Thêm dữ liệu thành công!!"}}),i("popup",{attrs:{show:e.showDialogDeleteSuccess,cancel:e.cancel,confirm:e.confirm,text:"Oke ^^",title:"Thông báo!",description:"Xoá dữ liệu thành công!!"}}),i("popup",{attrs:{show:e.showDialogDuplicateEmail,cancel:e.cancel,confirm:e.confirm,text:"Oke ^^",title:"Thông báo!",description:"Email này đã tồn tại!! Vui lòng chọn email khác"}})],1)},n=[],s=i("5530"),o=i("2909"),r=i("1da1"),l=(i("96cf"),i("7db0"),i("c740"),i("a434"),i("a9e3"),i("a4d3"),i("e01a"),i("d81d"),i("3905")),c=i("2f62"),d={components:{Popup:l["a"]},data:function(){return{header:[{text:"ID",value:"id",align:"center"},{text:"Email",value:"email",align:"center"},{text:"Chức Vụ",value:"role",align:"center"},{text:"Thời Gian Đăng Nhập",value:"timeLogin",align:"center"},{text:"Chức Năng",value:"actions",align:"center",sortable:!1}],user:{},defaultUser:{},deleteId:0,detailsId:0,account:[],search:"",dialog:!1,dialogDetails:!1,showDialogDelete:!1,showDialogUpdate:!1,showDialogCreateRequired:!1,showDialogCreateSuccess:!1,showDialogDeleteSuccess:!1,showDialogDuplicateEmail:!1,listRole:[],detailsItem:{},editedIndex:-1,readChange:!1}},methods:{DetailsUser:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function i(){var a,n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:t.detailsId=e.id,a=JSON.parse(localStorage.getItem("user")),n=Object(o["a"])(a).find((function(e){return e.id===t.detailsId})),t.detailsItem=n;case 4:case"end":return i.stop()}}),i)})))()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.user=Object.assign({},e.defaultUser),e.editedIndex=-1}))},editItem:function(e){this.dialog=!0,this.editedIndex=this.account.indexOf(e),this.user=Object.assign({},e),this.readChange=!0},handleRow:function(e){this.deleteId=e.email,this.showDialogDelete=!0},handleDelete:function(){var e=this,t=JSON.parse(localStorage.getItem("user")),i=JSON.parse(localStorage.getItem("employee")),a=t.findIndex((function(t){return t.email===e.deleteId})),n=i.findIndex((function(t){return t.email===e.deleteId}));i.splice(n,1),localStorage.setItem("employee",JSON.stringify(i)),t.splice(a,1),this.account=t,localStorage.setItem("user",JSON.stringify(t)),this.showDialogDelete=!1,this.showDialogDeleteSuccess=!0},cancel:function(){this.showDialogDelete=!1,this.showDialogUpdate=!1},confirm:function(){this.showDialogDelete=!1,this.showDialogUpdate=!1,this.showDialogCreateRequired=!1,this.showDialogCreateSuccess=!1,this.showDialogDeleteSuccess=!1,this.showDialogDuplicateEmail=!1},showPassword:function(){this.$store.dispatch("actionSetShowPassword")},userExists:function(e){var t=JSON.parse(localStorage.getItem("user"));return t.some((function(t){return t.email===e}))},createUser:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var i,a,n,s,o,r,l,c,d,u,h;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.editedIndex>-1?""===e.user.email||""===e.user.password?(e.showDialogCreateRequired=!0,e.dialog=!1):(i=JSON.parse(localStorage.getItem("employee")),a=JSON.parse(localStorage.getItem("user")),n=JSON.parse(localStorage.getItem("payment")),s=a[e.editedIndex],a.splice(e.editedIndex,1,{id:s.id,email:e.user.email,password:e.user.password,role:e.user.role,timeLogin:s.timeLogin}),e.account=a,localStorage.setItem("user",JSON.stringify(a)),o=i[e.editedIndex],i.splice(e.editedIndex,1,{id:o.id,emp_ID:o.emp_ID,firstName:o.firstName,lastName:o.lastName,email:e.user.email,password:e.user.password,imgUrl:o.imgUrl,role:e.user.role,depart_id:o.depart_id,depart_name:o.depart_name,position_id:o.position_id,address:o.address,phoneNumber:o.phoneNumber,birthday:o.birthday,gender:o.gender,numberCard:o.numberCard,nationality:o.nationality,ethnic:o.ethnic,religion:o.religion,educationalLevel:o.educationalLevel,academicLevel:o.academicLevel}),localStorage.setItem("employee",JSON.stringify(i)),r=n.findIndex((function(e){return e.emp_ID===o.emp_ID})),l=n.find((function(e){return e.emp_ID===o.emp_ID})),n.splice(r,1,{id:l.id,payment_ID:l.payment_ID,emp_ID:l.emp_ID,email:l.email,fullName:l.fullName,amount:l.amount,allowance:l.allowance,amount_total:Number(l.amount)+Number(l.allowance),role:e.user.role,description:l.description}),localStorage.setItem("payment",JSON.stringify(n)),e.showDialogUpdate=!0,e.dialog=!1):""==e.user.email||""==e.user.password||""==e.user.role?(e.showDialogCreateRequired=!0,e.dialog=!1):1==e.userExists(e.user.email)?(e.showDialogDuplicateEmail=!0,e.dialog=!1):(c=JSON.parse(localStorage.getItem("user")),d=c[c.length-1],c.push({id:d.id+1,email:e.user.email,password:e.user.password,role:e.user.role,timeLogin:e.user.timeLogin}),e.account=c,localStorage.setItem("user",JSON.stringify(c)),u=JSON.parse(localStorage.getItem("employee")),h=u[u.length-1],u.push({id:h.id+1,emp_ID:"NV".concat(h.id+1),firstName:e.user.firstName,lastName:e.user.lastName,email:e.user.email,password:e.user.password,role:e.user.role,position_id:e.user.position_id,depart_id:e.user.depart_id,depart_name:e.user.depart_name,address:e.user.address,imgUrl:e.user.imgUrl}),localStorage.setItem("employee",JSON.stringify(u)),e.dialog=!1,e.showDialogCreateSuccess=!0);case 1:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var i,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i=JSON.parse(localStorage.getItem("user")),e.account=i,a=JSON.parse(localStorage.getItem("position")),n=a.map((function(e){return e.role})),e.listRole=n;case 5:case"end":return t.stop()}}),t)})))()},computed:Object(s["a"])(Object(s["a"])({},Object(c["b"])({choose:function(e){return e.choose},visibility:function(e){return e.visibility}})),{},{formTitle:function(){return-1===this.editedIndex?"Thêm mới tài khoản":"Sửa tài khoản"}})},u=d,h=(i("089d"),i("2877")),m=i("6544"),p=i.n(m),v=i("8336"),g=i("b0af"),f=i("99d9"),w=i("62ad"),b=i("a523"),x=i("8fea"),y=i("169a"),I=i("132d"),C=i("0fd9"),k=i("b974"),D=i("2fa4"),S=i("8654"),O=Object(h["a"])(u,a,n,!1,null,"556f9e9a",null);t["default"]=O.exports;p()(O,{VBtn:v["a"],VCard:g["a"],VCardActions:f["a"],VCardText:f["c"],VCardTitle:f["d"],VCol:w["a"],VContainer:b["a"],VDataTable:x["a"],VDialog:y["a"],VIcon:I["a"],VRow:C["a"],VSelect:k["a"],VSpacer:D["a"],VTextField:S["a"]})},"169a":function(e,t,i){"use strict";var a=i("5530"),n=i("2909"),s=i("ade3"),o=(i("a9e3"),i("498a"),i("caad"),i("2532"),i("7db0"),i("368e"),i("480e")),r=i("4ad4"),l=i("b848"),c=i("75eb"),d=i("e707"),u=i("e4d3"),h=i("21be"),m=i("f2e7"),p=i("a293"),v=i("58df"),g=i("d9bd"),f=i("80d2"),w=Object(v["a"])(r["a"],l["a"],c["a"],d["a"],u["a"],h["a"],m["a"]);t["a"]=w.extend({name:"v-dialog",directives:{ClickOutside:p["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var e;return e={},Object(s["a"])(e,"v-dialog ".concat(this.contentClass).trim(),!0),Object(s["a"])(e,"v-dialog--active",this.isActive),Object(s["a"])(e,"v-dialog--persistent",this.persistent),Object(s["a"])(e,"v-dialog--fullscreen",this.fullscreen),Object(s["a"])(e,"v-dialog--scrollable",this.scrollable),Object(s["a"])(e,"v-dialog--animated",this.animate),e},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(e){var t;e?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(t=this.previousActiveElement)||t.focus())},fullscreen:function(e){this.isActive&&(e?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(g["e"])("full-width",this)},beforeMount:function(){var e=this;this.$nextTick((function(){e.isBooted=e.isActive,e.isActive&&e.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var e=this;this.animate=!1,this.$nextTick((function(){e.animate=!0,window.clearTimeout(e.animateTimeout),e.animateTimeout=window.setTimeout((function(){return e.animate=!1}),150)}))},closeConditional:function(e){var t=e.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(t)||this.overlay&&t&&!this.overlay.$el.contains(t))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):d["a"].options.methods.hideScroll.call(this)},show:function(){var e=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){e.$nextTick((function(){e.previousActiveElement=document.activeElement,e.$refs.content.focus(),e.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(e){this.$emit("click:outside",e),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(e){if(e.keyCode===f["w"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var t=this.getActivator();this.$nextTick((function(){return t&&t.focus()}))}this.$emit("keydown",e)},onFocusin:function(e){if(e&&this.retainFocus){var t=e.target;if(t&&![document,this.$refs.content].includes(t)&&!this.$refs.content.contains(t)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(e){return e.contains(t)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),a=Object(n["a"])(i).find((function(e){return!e.hasAttribute("disabled")}));a&&a.focus()}}},genContent:function(){var e=this;return this.showLazyContent((function(){return[e.$createElement(o["a"],{props:{root:!0,light:e.light,dark:e.dark}},[e.$createElement("div",{class:e.contentClasses,attrs:Object(a["a"])({role:"document",tabindex:e.isActive?0:void 0},e.getScopeIdAttrs()),on:{keydown:e.onKeydown},style:{zIndex:e.activeZIndex},ref:"content"},[e.genTransition()])])]}))},genTransition:function(){var e=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[e]):e},genInnerContent:function(){var e={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(e.style=Object(a["a"])(Object(a["a"])({},e.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(f["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(f["g"])(this.width)})),this.$createElement("div",e,this.getContentSlot())}},render:function(e){return e("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"368e":function(e,t,i){},"6f08":function(e,t,i){}}]);
//# sourceMappingURL=chunk-21f7dc28.5665dd49.js.map