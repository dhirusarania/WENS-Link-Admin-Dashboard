(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{231:function(e,t,n){var content=n(271);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("5e69a72e",content,!0,{sourceMap:!1})},270:function(e,t,n){"use strict";var o=n(231);n.n(o).a},271:function(e,t,n){(t=n(18)(!1)).push([e.i,'.btn-success{background-color:#4caf50;color:#fff}.dropdown{display:inline-block;position:relative}.dd-button{display:inline-block;border:1px solid grey;border-radius:4px;padding:10px 30px 10px 20px;background-color:#fff;cursor:pointer;white-space:nowrap}.dd-button:after{content:"";position:absolute;top:50%;right:15px;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #000}.dd-button:hover{background-color:#eee}.dd-input{display:none}.dd-menu{position:absolute;top:100%;border:1px solid #ccc;border-radius:4px;padding:0;margin:2px 0 0;box-shadow:0 0 6px 0 rgba(0,0,0,.1);background-color:#fff;list-style-type:none;z-index:9;right:0;display:none}.dd-input:checked+.dd-menu{display:block}.dd-menu li{padding:10px 20px;cursor:pointer;white-space:nowrap}.dd-menu li:hover{background-color:#f6f6f6}.dd-menu li a{display:block;margin:-10px -20px;padding:10px 20px}.dd-menu li.divider{padding:0;border-bottom:1px solid #ccc}table.vgt-table{border:0}',""]),e.exports=t},288:function(e,t,n){"use strict";n.r(t);n(28);var o={name:"my-component",data:function(){return{columns:[{label:"Name",field:"name",width:"200px"},{label:"Phone Number",field:"phone_number",width:"200px"},{label:"Email",field:"email"},{label:"Company Name",field:"company_name",formatFn:this.capitalize},{label:"Store Name",field:"store",width:"200px"},{label:"GSTIN",field:"gstin"},{label:"Products",field:"product_count",width:"100px"},{label:"Address",field:"addressline1",width:"300px"},{label:"Payment Mode",field:"payment_mode",width:"150px"},{label:"View Invoice",field:"invoice",width:"150px"},{label:"Verified",field:"isVerified"},{label:"Status",field:"status"},{label:"Action",field:"details"}],rows:[{id:1,name:"Mobile",age:20,createdAt:"2011-10-31",details:"<p>asa</p>"}],allproducts:[]}},filters:{capitalize:function(e){return e?(console.log(e),e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))):""}},mounted:function(){this.getAllProducts(),this.fitTableToScreen(),window.addEventListener("resize",this.onResize)},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)},methods:{getAllProducts:function(){var e=this;this.$store.dispatch("getAllSeller").then((function(t){console.log(t),e.allproducts=JSON.parse(JSON.stringify(t.data.users))}))},changeStatus:function(e,t){var n=this;this.$store.dispatch("changeUserStatus",{id:e,status:t}).then((function(e){console.log(e),n.getAllProducts()}))},openInvoice:function(e){console.log(e),localStorage.setItem("invoice_id",e),window.open("/admin/dashboard/invoices/","popUpWindow","height=800,width=800,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes")},loginAsVendor:function(e){console.log(e);var t=new FormData;t.append("phone_number",e),t.append("password","admin@wenslink"),this.$store.dispatch("loginAsVendor",t).then((function(e){e.data.step<5?window.open("https://seller.wenslink.com/adminlogin?token="+e.data.access):window.open("https://seller.wenslink.com/vendors/adminlogin?token="+e.data.access)}))},onResize:function(e){this.fitTableToScreen()},fitTableToScreen:function(){$(".vgt-responsive").height(window.innerHeight-$(".vgt-responsive").offset().top-126)}}},l=(n(270),n(14)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar-spacing padding-top-30"},[n("div",{staticClass:"specification"},[n("div",{staticClass:"holder"},[e._m(0),e._v(" "),n("div",{staticClass:"row"},[n("vue-good-table",{attrs:{columns:e.columns,rows:e.allproducts,"line-numbers":!0},scopedSlots:e._u([{key:"table-row",fn:function(t){return["details"===t.column.field?n("span",[n("div",{staticClass:"dropdown"},[n("div",{staticClass:"dd-button",on:{mousedown:e.close_dropdown}},[e._v("Actions")]),e._v(" "),n("ul",{staticClass:"dd-menu"},[2!=t.row.status?n("li",{on:{click:function(n){return e.changeStatus(t.row.id,2)}}},[e._v("Suspend")]):e._e(),e._v(" "),1!=t.row.status?n("li",{on:{click:function(n){return e.changeStatus(t.row.id,1)}}},[e._v("Active")]):e._e(),e._v(" "),0!=t.row.status?n("li",{on:{click:function(n){return e.loginAsVendor(t.row.phone_number)}}},[e._v("Login as Seller")]):e._e(),e._v(" "),0!=t.row.status?n("li",{staticClass:"btn-danger red-text",on:{click:function(n){return e.changeStatus(t.row.id,0)}}},[e._v("Delete")]):e._e()])])]):"status"===t.column.field?n("span",[0==t.row.status?n("p",[e._v("Deleted")]):e._e(),e._v(" "),1==t.row.status?n("p",{staticStyle:{color:"green","font-family":"bold"}},[e._v("Active")]):e._e(),e._v(" "),2==t.row.status?n("p",[e._v("Suspended")]):e._e()]):"name"===t.column.field?n("span",[n("p",[e._v(e._s(e._f("capitalize")(t.row.name)))])]):"payment_mode"===t.column.field?n("span",["Test"==t.row.payment_mode?n("p",[e._v("Inactive")]):e._e(),e._v(" "),"Live"==t.row.payment_mode?n("button",{staticClass:"btn btn-success",attrs:{type:"button"}},[e._v("Active")]):e._e(),e._v(" "),"free"==t.row.payment_mode?n("p",[e._v("Free")]):e._e()]):"password"===t.column.field?n("span",[2!=t.row.status?n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(n){return e.passwordChange(t.row.id)}}},[e._v("Send SMS")]):e._e()]):"invoice"===t.column.field?n("span",[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(n){return e.openInvoice(t.row.id)}}},[e._v("Invoice")])]):"addressline1"===t.column.field?n("span",[""!=t.row.addressline1?n("div",[n("p",[e._v("\n                  "+e._s(e._f("capitalize")(t.row.addressline1))+",\n                  "+e._s(e._f("capitalize")(t.row.addressline2))+",\n                  "+e._s(e._f("capitalize")(t.row.city))+"\n                ")]),e._v(" "),n("p",[e._v("\n                  "+e._s(e._f("capitalize")(t.row.state))+",\n                  "+e._s(e._f("capitalize")(t.row.country))+"\n                ")])]):n("p",{staticClass:"red-text bold"},[e._v("Incomplete")])]):n("span",[e._v(e._s(t.formattedRow[t.column.field]))])]}}])})],1)])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"column-padding header-bottom",staticStyle:{display:"flex","justify-content":"space-between"}},[t("h3",{staticStyle:{display:"flex","align-items":"center"}},[this._v("All Sellers")])])}],!1,null,null,null);t.default=component.exports}}]);