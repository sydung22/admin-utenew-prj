(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34759dfa"],{"169a":function(e,t,a){"use strict";var s=a("5530"),i=a("2909"),r=a("ade3"),n=(a("a9e3"),a("498a"),a("caad"),a("2532"),a("7db0"),a("368e"),a("480e")),l=a("4ad4"),o=a("b848"),c=a("75eb"),d=a("e707"),u=a("e4d3"),m=a("21be"),h=a("f2e7"),p=a("a293"),v=a("58df"),g=a("d9bd"),f=a("80d2"),b=Object(v["a"])(l["a"],o["a"],c["a"],d["a"],u["a"],m["a"],h["a"]);t["a"]=b.extend({name:"v-dialog",directives:{ClickOutside:p["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var e;return e={},Object(r["a"])(e,"v-dialog ".concat(this.contentClass).trim(),!0),Object(r["a"])(e,"v-dialog--active",this.isActive),Object(r["a"])(e,"v-dialog--persistent",this.persistent),Object(r["a"])(e,"v-dialog--fullscreen",this.fullscreen),Object(r["a"])(e,"v-dialog--scrollable",this.scrollable),Object(r["a"])(e,"v-dialog--animated",this.animate),e},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(e){var t;e?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(t=this.previousActiveElement)||t.focus())},fullscreen:function(e){this.isActive&&(e?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(g["e"])("full-width",this)},beforeMount:function(){var e=this;this.$nextTick((function(){e.isBooted=e.isActive,e.isActive&&e.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var e=this;this.animate=!1,this.$nextTick((function(){e.animate=!0,window.clearTimeout(e.animateTimeout),e.animateTimeout=window.setTimeout((function(){return e.animate=!1}),150)}))},closeConditional:function(e){var t=e.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(t)||this.overlay&&t&&!this.overlay.$el.contains(t))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):d["a"].options.methods.hideScroll.call(this)},show:function(){var e=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){e.$nextTick((function(){e.previousActiveElement=document.activeElement,e.$refs.content.focus(),e.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(e){this.$emit("click:outside",e),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(e){if(e.keyCode===f["w"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var t=this.getActivator();this.$nextTick((function(){return t&&t.focus()}))}this.$emit("keydown",e)},onFocusin:function(e){if(e&&this.retainFocus){var t=e.target;if(t&&![document,this.$refs.content].includes(t)&&!this.$refs.content.contains(t)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(e){return e.contains(t)}))){var a=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),s=Object(i["a"])(a).find((function(e){return!e.hasAttribute("disabled")}));s&&s.focus()}}},genContent:function(){var e=this;return this.showLazyContent((function(){return[e.$createElement(n["a"],{props:{root:!0,light:e.light,dark:e.dark}},[e.$createElement("div",{class:e.contentClasses,attrs:Object(s["a"])({role:"document",tabindex:e.isActive?0:void 0},e.getScopeIdAttrs()),on:{keydown:e.onKeydown},style:{zIndex:e.activeZIndex},ref:"content"},[e.genTransition()])])]}))},genTransition:function(){var e=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[e]):e},genInnerContent:function(){var e={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(e.style=Object(s["a"])(Object(s["a"])({},e.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(f["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(f["g"])(this.width)})),this.$createElement("div",e,this.getContentSlot())}},render:function(e){return e("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},2327:function(e,t,a){},2386:function(e,t,a){"use strict";a("2327")},"368e":function(e,t,a){},a5cd:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"employee"},[a("v-container",{staticClass:"container"},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-card-title",{staticClass:"pb-0"},[e._v(" DANH SÁCH NHÂN VIÊN "),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Tìm Kiếm","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-dialog",{attrs:{persistent:"","max-width":"1200px"},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,i=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"ms-5 my-4",attrs:{color:"green",dark:""}},"v-btn",i,!1),s),[e._v(" Thêm Mới ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"pt-7"},[a("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"6"}},[a("v-container",[a("v-row",[a("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[a("v-text-field",{staticClass:"pt-1",attrs:{counter:30,label:"Họ",required:""},model:{value:e.user.lastName,callback:function(t){e.$set(e.user,"lastName",t)},expression:"user.lastName"}})],1),a("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[a("v-text-field",{attrs:{counter:30,label:"Tên",required:""},model:{value:e.user.firstName,callback:function(t){e.$set(e.user,"firstName",t)},expression:"user.firstName"}})],1),a("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[a("v-text-field",{attrs:{label:"E-mail",required:"",disabled:e.readChange},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),a("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[a("v-text-field",{attrs:{label:"Link Hình Ảnh",required:""},model:{value:e.user.imgUrl,callback:function(t){e.$set(e.user,"imgUrl",t)},expression:"user.imgUrl"}})],1),a("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[a("v-text-field",{attrs:{label:"Địa Chỉ",required:""},model:{value:e.user.address,callback:function(t){e.$set(e.user,"address",t)},expression:"user.address"}})],1),a("v-col",{attrs:{cols:"12",md:"12"}},[a("v-select",{attrs:{items:this.listRole,label:"Chức Vụ",required:""},model:{value:e.user.role,callback:function(t){e.$set(e.user,"role",t)},expression:"user.role"}})],1),a("v-col",{attrs:{cols:"12",md:"12"}},[a("v-select",{attrs:{items:this.listDepartment,label:"Phòng Ban","menu-props":{top:!0,offsetY:!0},required:""},model:{value:e.user.depart_name,callback:function(t){e.$set(e.user,"depart_name",t)},expression:"user.depart_name"}})],1),a("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[a("v-text-field",{staticClass:"pt-1",attrs:{label:"Số Điện Thoại",required:""},model:{value:e.user.phoneNumber,callback:function(t){e.$set(e.user,"phoneNumber",t)},expression:"user.phoneNumber"}})],1)],1)],1)],1),a("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"6"}},[a("v-container",[a("v-row",[a("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[a("v-text-field",{attrs:{label:"Ngày Sinh",required:"",type:"date"},model:{value:e.user.birthday,callback:function(t){e.$set(e.user,"birthday",t)},expression:"user.birthday"}})],1),a("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[a("v-select",{attrs:{items:["Nam","Nữ"],label:"Giới Tính",required:""},model:{value:e.user.gender,callback:function(t){e.$set(e.user,"gender",t)},expression:"user.gender"}})],1),a("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[a("v-text-field",{attrs:{label:"Số CMND/CCCD",required:""},model:{value:e.user.numberCard,callback:function(t){e.$set(e.user,"numberCard",t)},expression:"user.numberCard"}})],1),a("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[a("v-text-field",{attrs:{label:"Quốc Tịch",required:""},model:{value:e.user.nationality,callback:function(t){e.$set(e.user,"nationality",t)},expression:"user.nationality"}})],1),a("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[a("v-text-field",{attrs:{label:"Dân Tộc",required:""},model:{value:e.user.ethnic,callback:function(t){e.$set(e.user,"ethnic",t)},expression:"user.ethnic"}})],1),a("v-col",{attrs:{cols:"12",md:"12"}},[a("v-text-field",{attrs:{label:"Tôn Giáo",required:""},model:{value:e.user.religion,callback:function(t){e.$set(e.user,"religion",t)},expression:"user.religion"}})],1),a("v-col",{attrs:{cols:"12",md:"12"}},[a("v-select",{attrs:{items:["12/12"],label:"Trình Độ Văn Hóa",required:""},model:{value:e.user.educationalLevel,callback:function(t){e.$set(e.user,"educationalLevel",t)},expression:"user.educationalLevel"}})],1),a("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[a("v-select",{staticClass:"pt-1",attrs:{items:["Cao Đẳng","Đại Học","Cao Học"],label:"Trình Độ Học Vấn","menu-props":{top:!0,offsetY:!0},required:""},model:{value:e.user.academicLevel,callback:function(t){e.$set(e.user,"academicLevel",t)},expression:"user.academicLevel"}})],1)],1)],1)],1)],1)],1)],1),a("v-card-actions",{staticClass:"pt-0 pb-4"},[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Đóng ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.createUser}},[e._v(" Cập nhật ")])],1)],1)],1),a("v-data-table",{staticClass:"elevation-1 text-center",attrs:{headers:e.header,items:e.employee,"items-per-page":10,"item-key":"id","show-select":"",search:e.search,"footer-props":{showFirstLastPage:!0,firstIcon:"mdi-arrow-collapse-left",lastIcon:"mdi-arrow-collapse-right"}},scopedSlots:e._u([{key:"item.imgUrl",fn:function(e){var t=e.item;return[t.imgUrl?a("img",{staticStyle:{width:"60px",height:"50px","object-fit":"cover",margin:"3px 0 -2px"},attrs:{src:t.imgUrl}}):a("img",{staticStyle:{width:"60px",height:"50px","object-fit":"cover",margin:"3px 0 -2px"},attrs:{src:"https://timbee.com.vn/Data/Sites/2/News/2184/user.png"}})]}},{key:"item.actions",fn:function(t){var s=t.item;return[a("v-dialog",{attrs:{"max-width":"1600",persistent:""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,r=t.attrs;return[a("v-btn",e._g(e._b({attrs:{color:"primary"},on:{click:function(t){return e.DetailsUser(s)}}},"v-btn",r,!1),i),[e._v("Chi Tiết "),a("v-icon",{attrs:{dark:"",right:""}},[e._v(" mdi-eye ")])],1)]}},{key:"default",fn:function(t){return[a("v-card",{staticClass:"pb-3"},[a("v-card-text",{staticClass:"pb-5"},[a("v-container",{staticClass:"px-0 pt-13 pb-0"},[a("h1",{staticClass:"px-5 py-0 text-center primary--text"},[e._v(" Thông Tin Nhân Viên ")]),a("v-row",{staticClass:"pe-5",attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"3"}},[e.detailsItem.imgUrl?a("v-avatar",{staticClass:"mb-2",attrs:{color:"grey darken-1",size:"300"}},[a("v-img",{attrs:{"aspect-ratio":"30",src:e.detailsItem.imgUrl}})],1):a("v-avatar",{staticClass:"mb-2",attrs:{color:"grey darken-1",size:"250"}},[a("v-img",{attrs:{"aspect-ratio":"30",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_8jyrBjic0ELBWNbA2JH7ufzOb3jkJvN8Q&usqp=CAU"}})],1),e.detailsItem.firstName&&e.detailsItem.lastName?a("h2",{staticClass:"black--text mt-2 mb-6"},[e._v(" "+e._s(e.detailsItem.lastName)+" "+e._s(e.detailsItem.firstName)+" ")]):a("h2",{staticClass:"black--text mt-2 mb-6"},[e._v(" Người dùng mới ")]),e._l(e.linkUser,(function(t,s){return a("v-row",{key:s,staticClass:"mt-0 ms-5",attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"text-end px-0 mb-2",attrs:{cols:"12",sm:"2"}},[a("v-avatar",{staticClass:"mb",attrs:{color:"grey darken-1",size:"30"}},[a("v-img",{attrs:{"aspect-ratio":"30",src:t.imgUrl}})],1)],1),a("v-col",{staticClass:"text-start",attrs:{cols:"12",sm:"10"}},[a("h4",{staticClass:"primary--text"},[e._v(" "+e._s(t.titleUrl)+" ")])])],1)}))],2),a("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"3"}},[a("v-form",[a("v-container",[a("v-row",[a("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[a("v-text-field",{attrs:{label:"ID",value:e.detailsItem.id,required:"",readonly:""}})],1),a("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[a("v-text-field",{attrs:{label:"Mã Nhân Viên",value:e.detailsItem.emp_ID,required:"",readonly:""}})],1),e.detailsItem.lastName&&e.detailsItem.firstName?a("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[a("v-text-field",{attrs:{label:"Tên Nhân Viên",value:e.detailsItem.lastName+" "+e.detailsItem.firstName,required:"",readonly:""}})],1):a("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[a("v-text-field",{attrs:{label:"Tên Nhân Viên",value:"Người dùng mới",required:"",readonly:""}})],1),a("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[a("v-text-field",{attrs:{label:"E-mail",value:e.detailsItem.email,required:"",readonly:""}})],1),a("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[a("div",{staticClass:"input-container"},[a("v-text-field",{attrs:{label:"Password",value:e.detailsItem.password,required:"",readonly:"",type:e.choose}}),a("v-icon",{staticClass:"material-icons visibility",on:{click:e.showPassword}},[e._v(e._s(e.visibility))])],1)]),a("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[a("v-text-field",{attrs:{label:"Số điện thoại",value:e.detailsItem.phoneNumber,required:"",readonly:""}})],1),a("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[a("v-text-field",{attrs:{label:"Địa Chỉ",value:e.detailsItem.address,required:"",readonly:""}})],1),a("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[a("v-text-field",{attrs:{label:"Chức Vụ",value:e.detailsItem.role,required:"",readonly:""}})],1)],1)],1)],1)],1),a("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"3"}},[a("v-form",[a("v-container",[a("v-row",[a("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[a("v-text-field",{attrs:{label:"Phòng Ban",value:e.detailsItem.depart_name,required:"",readonly:""}})],1),a("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[a("v-text-field",{attrs:{label:"Ngày Sinh",value:e.detailsItem.birthday,required:"",readonly:""}})],1),a("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[a("v-select",{attrs:{items:["Nam","Nữ"],label:"Giới Tính",value:e.detailsItem.gender,required:"",readonly:""}})],1),a("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[a("v-text-field",{attrs:{label:"Số CMND/CCCD",value:e.detailsItem.numberCard,required:"",readonly:""}})],1),a("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[a("v-text-field",{attrs:{label:"Quốc Tịch",value:e.detailsItem.nationality,required:"",readonly:""}})],1),a("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[a("v-text-field",{attrs:{label:"Dân Tộc",value:e.detailsItem.ethnic,required:"",readonly:""}})],1),a("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[a("v-select",{attrs:{items:["12/12"],label:"Trình Độ Văn Hóa",value:e.detailsItem.educationalLevel,required:"",readonly:""}})],1),a("v-col",{staticClass:"pb-0 pt-1",attrs:{cols:"12",md:"12"}},[a("v-select",{attrs:{items:["Cao Đẳng","Đại Học","Cao Học"],label:"Trình Độ Học Vấn",value:e.detailsItem.academicLevel,"menu-props":{top:!0,offsetY:!0},required:"",readonly:""}})],1)],1)],1)],1)],1),a("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"3"}},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[a("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:"https://www.constructionplusasia.com/wp-content/uploads/2020/05/1-03.jpg"}}),a("v-card-subtitle",{staticClass:"pb-2 pt-3",staticStyle:{"font-size":"16px"}},[e._v(" Công Ty Axon Active ")]),a("v-card-text",{staticClass:"text--primary"},[a("div",[e._v("Nhân viên lập trình VueJS")]),a("div",[e._v("Thời gian làm việc: 2 năm")])])],1),a("v-card",{staticClass:"mx-auto mt-5",attrs:{"max-width":"400"}},[a("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:"http://tatgreen.vn/StoreData/images/54516463_612519319234103_3432507145357099008_o%20(1).jpg"}}),a("v-card-subtitle",{staticClass:"pb-2 pt-3",staticStyle:{"font-size":"16px"}},[e._v(" Công Ty Paradox Software ")]),a("v-card-text",{staticClass:"text--primary"},[a("div",[e._v("Nhân viên lập trình NodeJS")]),a("div",[e._v("Thời gian làm việc: 2.5 năm")])])],1)],1)],1)],1)],1),a("v-card-actions",{staticClass:"justify-end"},[a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.value=!1}}},[e._v("Đóng")])],1)],1)]}}],null,!0)}),a("v-btn",{staticClass:"ma-2",attrs:{color:"orange darken-2",dark:""},on:{click:function(t){return e.editItem(s)}}},[e._v(" Sửa "),a("v-icon",{attrs:{dark:"",right:""}},[e._v(" mdi-pencil ")])],1),a("v-btn",{staticClass:"ma-2 ms-0",attrs:{color:"red",dark:""},on:{click:function(t){return e.handleRow(s)}}},[e._v(" Xóa "),a("v-icon",{attrs:{dark:"",right:""}},[e._v(" mdi-delete ")])],1)]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"}},[e._v(" Reset ")])]},proxy:!0}],null,!0)})],1)],1)],1)],1),a("popup",{attrs:{show:e.showDialogDelete,cancel:e.cancel,confirm:e.handleDelete,text:"Có! Mình muốn xóa ^^",title:"Thông báo!",textCancel:"Không nha :v",description:"Bạn có muốn xóa dữ liệu này không ???"}}),a("popup",{attrs:{show:e.showDialogDeleteSuccess,cancel:e.cancel,confirm:e.confirm,text:"Oke ^^",title:"Thông báo!",description:"Xoá dữ liệu thành công!!"}}),a("popup",{attrs:{show:e.showDialogCreateRequired,cancel:e.cancel,confirm:e.confirm,text:"Ok! Mình sẽ kiểm tra lại",title:"Thông báo!",description:"Vui lòng điền đầy đủ thông tin!!"}}),a("popup",{attrs:{show:e.showDialogCreateSuccess,cancel:e.cancel,confirm:e.confirm,text:"Oke ^^",title:"Thông báo!",description:"Thêm dữ liệu thành công!!"}}),a("popup",{attrs:{show:e.showDialogDuplicateEmail,cancel:e.cancel,confirm:e.confirm,text:"Oke ^^",title:"Thông báo!",description:"Email này đã tồn tại!! Vui lòng chọn email khác"}}),a("popup",{attrs:{show:e.showDialogUpdate,cancel:e.cancel,confirm:e.confirm,text:"Oke ^^",title:"Thông báo!",description:"Sửa dữ liệu thành công!!"}})],1)},i=[],r=a("5530"),n=a("1da1"),l=a("2909"),o=(a("96cf"),a("7db0"),a("c740"),a("a434"),a("07ac"),a("a9e3"),a("a4d3"),a("e01a"),a("d81d"),a("3905")),c=a("2f62"),d={components:{Popup:o["a"]},data:function(){return{header:[{text:"ID",value:"id",align:"center"},{text:"Họ",value:"lastName",align:"center"},{text:"Tên",value:"firstName",align:"center"},{text:"Hình Ảnh",value:"imgUrl",align:"center"},{text:"Chức Vụ",value:"role",align:"center"},{text:"Phòng Ban",value:"depart_name",align:"center"},{text:"Địa Chỉ",value:"address",align:"center"},{text:"Chức Năng",value:"actions",align:"center",sortable:!1}],employee:[],listRole:[],listDepartment:[],search:"",deleteId:0,detailsId:0,dialog:!1,detailsItem:{},user:{},defaultUser:{},showDialogDelete:!1,showDialogDeleteSuccess:!1,showDialogCreateRequired:!1,showDialogCreateSuccess:!1,showDialogDuplicateEmail:!1,showDialogUpdate:!1,linkUser:[{imgUrl:"https://br.atsit.in/vi/wp-content/uploads/2021/06/anh-facebook-khong-tai-hoac-khong-hien-thi-loi-khong-the-ket-noi-bat-len-ban-khong-don-doc.png",titleUrl:"https://www.facebook.com/"},{imgUrl:"https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/90/96/fc/9096fc60-7d7f-b8a1-f152-882c02811ddc/AppIcon_v3-85-220-4-2x.png/1200x630bb.png",titleUrl:"https://www.google.com/intl/vi/gmail/about/"},{imgUrl:"https://cdn.pixabay.com/photo/2017/08/05/11/24/logo-2582757__480.png",titleUrl:"https://github.com/"},{imgUrl:"https://image.similarpng.com/very-thumbnail/2020/05/Glossy-Instagram-icon-PNG.png",titleUrl:"https://www.instagram.com/"}],editedIndex:-1,readChange:!1}},methods:{DetailsUser:function(e){var t=this;this.detailsId=e.id;var a=JSON.parse(localStorage.getItem("employee")),s=Object(l["a"])(a).find((function(e){return e.id===t.detailsId}));this.detailsItem=s},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.user=Object.assign({},e.defaultUser),e.editedIndex=-1}))},editItem:function(e){this.dialog=!0,this.editedIndex=this.employee.indexOf(e),this.user=Object.assign({},e),this.readChange=!0},handleRow:function(e){this.deleteId=e.email,this.showDialogDelete=!0},handleDelete:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,s,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=JSON.parse(localStorage.getItem("user")),s=JSON.parse(localStorage.getItem("employee")),i=a.findIndex((function(t){return t.email===e.deleteId})),r=s.findIndex((function(t){return t.email===e.deleteId})),s.splice(r,1),localStorage.setItem("employee",JSON.stringify(s)),a.splice(i,1),e.employee=s,localStorage.setItem("user",JSON.stringify(a)),e.showDialogDelete=!1,e.showDialogDeleteSuccess=!0;case 11:case"end":return t.stop()}}),t)})))()},userExists:function(e){var t=JSON.parse(localStorage.getItem("employee"));return t.some((function(t){return t.email===e}))},createUser:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,s,i,r,n,l,o,c,d,u,m,h,p,v;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.editedIndex>-1?(a=Object.values(e.user),s=a.find((function(e){return""===e})),void 0!=s?(e.showDialogCreateRequired=!0,e.dialog=!1):(i=JSON.parse(localStorage.getItem("employee")),r=JSON.parse(localStorage.getItem("user")),n=JSON.parse(localStorage.getItem("payment")),l=i[e.editedIndex],i.splice(e.editedIndex,1,{id:l.id,emp_ID:l.emp_ID,firstName:e.user.firstName,lastName:e.user.lastName,email:e.user.email,password:e.user.password,imgUrl:e.user.imgUrl,role:e.user.role,depart_id:e.user.depart_id,depart_name:e.user.depart_name,position_id:e.user.position_id,address:e.user.address,phoneNumber:e.user.phoneNumber,birthday:e.user.birthday,gender:e.user.gender,numberCard:e.user.numberCard,nationality:e.user.nationality,ethnic:e.user.ethnic,religion:e.user.religion,educationalLevel:e.user.educationalLevel,academicLevel:e.user.academicLevel}),localStorage.setItem("employee",JSON.stringify(i)),e.employee=i,o=r[e.editedIndex],r.splice(e.editedIndex,1,{id:o.id,email:o.email,password:o.password,role:e.user.role,timeLogin:o.timeLogin}),localStorage.setItem("user",JSON.stringify(r)),c=n.findIndex((function(e){return e.emp_ID===l.emp_ID})),d=n.find((function(e){return e.emp_ID===l.emp_ID})),d&&(n.splice(c,1,{id:d.id,payment_ID:d.payment_ID,emp_ID:d.emp_ID,email:d.email,fullName:e.user.lastName+" "+e.user.firstName,amount:d.amount,allowance:d.allowance,amount_total:Number(d.amount)+Number(d.allowance),role:e.user.role,description:d.description}),localStorage.setItem("payment",JSON.stringify(n))),e.showDialogUpdate=!0,e.dialog=!1)):(u=Object.values(e.user),u.length<16?(e.showDialogCreateRequired=!0,e.dialog=!1):1==e.userExists(e.user.email)?(e.showDialogDuplicateEmail=!0,e.dialog=!1):(m=JSON.parse(localStorage.getItem("user")),h=m[m.length-1],m.push({id:h.id+1,email:e.user.email,password:"12345678",role:e.user.role}),localStorage.setItem("user",JSON.stringify(m)),p=JSON.parse(localStorage.getItem("employee")),v=p[p.length-1],p.push({id:v.id+1,emp_ID:"NV".concat(v.id+1),firstName:e.user.firstName,lastName:e.user.lastName,email:e.user.email,password:"12345678",role:e.user.role,position_id:e.user.position_id,depart_id:e.user.depart_id,depart_name:e.user.depart_name,address:e.user.address,imgUrl:e.user.imgUrl,phoneNumber:e.user.phoneNumber,birthday:e.user.birthday,gender:e.user.gender,numberCard:e.user.numberCard,nationality:e.user.nationality,ethnic:e.user.ethnic,religion:e.user.religion,educationalLevel:e.user.educationalLevel,academicLevel:e.user.academicLevel}),e.employee=p,localStorage.setItem("employee",JSON.stringify(p)),e.dialog=!1,e.showDialogCreateSuccess=!0));case 1:case"end":return t.stop()}}),t)})))()},cancel:function(){this.showDialogDelete=!1,this.showDialogCreateRequired=!1,this.showDialogCreateSuccess=!1},confirm:function(){this.showDialogDelete=!1,this.showDialogDeleteSuccess=!1,this.showDialogCreateRequired=!1,this.showDialogCreateSuccess=!1,this.showDialogDuplicateEmail=!1,this.showDialogUpdate=!1},showPassword:function(){this.$store.dispatch("actionSetShowPassword")}},mounted:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,s,i,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=JSON.parse(localStorage.getItem("employee")),e.employee=a,s=JSON.parse(localStorage.getItem("position")),i=s.map((function(e){return e.role})),e.listRole=i,r=JSON.parse(localStorage.getItem("departments")),n=r.map((function(e){return e.depart_name})),e.listDepartment=n;case 8:case"end":return t.stop()}}),t)})))()},computed:Object(r["a"])(Object(r["a"])({},Object(c["b"])({choose:function(e){return e.choose},visibility:function(e){return e.visibility}})),{},{formTitle:function(){return-1===this.editedIndex?"Thêm mới nhân viên":"Sửa thông tin nhân viên"}})},u=d,m=(a("2386"),a("2877")),h=a("6544"),p=a.n(h),v=a("8212"),g=a("8336"),f=a("b0af"),b=a("99d9"),x=a("62ad"),C=a("a523"),y=a("8fea"),w=a("169a"),I=a("4bd4"),k=a("132d"),S=a("adda"),N=a("0fd9"),_=a("b974"),D=a("2fa4"),O=a("8654"),T=Object(m["a"])(u,s,i,!1,null,"c1fd2868",null);t["default"]=T.exports;p()(T,{VAvatar:v["a"],VBtn:g["a"],VCard:f["a"],VCardActions:b["a"],VCardSubtitle:b["b"],VCardText:b["c"],VCardTitle:b["d"],VCol:x["a"],VContainer:C["a"],VDataTable:y["a"],VDialog:w["a"],VForm:I["a"],VIcon:k["a"],VImg:S["a"],VRow:N["a"],VSelect:_["a"],VSpacer:D["a"],VTextField:O["a"]})}}]);
//# sourceMappingURL=chunk-34759dfa.9d3c2ca3.js.map