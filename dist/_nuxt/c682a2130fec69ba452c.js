(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{244:function(t,e,n){var content=n(294);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("338b72ee",content,!0,{sourceMap:!1})},293:function(t,e,n){"use strict";var o=n(244);n.n(o).a},294:function(t,e,n){(e=n(21)(!1)).push([t.i,".btn-success{background-color:#4caf50;color:#fff}",""]),t.exports=e},320:function(t,e,n){"use strict";n.r(e);var o={name:"my-component",data:function(){return{columns:[{label:"Name",field:"name"},{label:"Phone Number",field:"phone_number"},{label:"Email",field:"email"},{label:"Verified",field:"isVerified"},{label:"Status",field:"status"},{label:"Action",field:"details"}],rows:[{id:1,name:"Mobile",age:20,createdAt:"2011-10-31",details:"<p>asa</p>"}],allproducts:[]}},mounted:function(){this.getAllProducts(),this.fitTableToScreen()},methods:{getAllProducts:function(){var t=this;this.$store.dispatch("getAllCustomers").then((function(e){console.log(e),t.allproducts=JSON.parse(JSON.stringify(e.data.users))}))},changeStatus:function(t,e){var n=this;this.$store.dispatch("changeUserStatus",{id:t,status:e}).then((function(t){console.log(t),n.getAllProducts()}))},openInvoice:function(t){console.log(t),localStorage.setItem("invoice_id",t),window.open("/admin/dashboard/invoices/","popUpWindow","height=800,width=800,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes")},loginAsVendor:function(t){var e=new FormData;e.append("phone_number",t),e.append("password","admin@wenslink"),this.$store.dispatch("loginAsVendor",e).then((function(t){t.data.step<5?window.open("https://seller.wenslink.com/adminlogin?token="+t.data.access):window.open("https://seller.wenslink.com/vendors/adminlogin?token="+t.data.access)}))}}},l=(n(293),n(14)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-spacing padding-top-30"},[n("div",{staticClass:"specification"},[n("div",{staticClass:"holder"},[t._m(0),t._v(" "),n("div",{staticClass:"row"},[n("vue-good-table",{attrs:{columns:t.columns,rows:t.allproducts,"line-numbers":!0},scopedSlots:t._u([{key:"table-row",fn:function(e){return["details"===e.column.field?n("span",[n("div",{staticClass:"dropdown"},[n("div",{staticClass:"dd-button",on:{mousedown:t.close_dropdown}},[t._v("Actions")]),t._v(" "),n("ul",{staticClass:"dd-menu"},[2!=e.row.status?n("li",{on:{click:function(n){return t.changeStatus(e.row.id,2)}}},[t._v("Suspend")]):t._e(),t._v(" "),1!=e.row.status?n("li",{on:{click:function(n){return t.changeStatus(e.row.id,1)}}},[t._v("Active")]):t._e(),t._v(" "),0!=e.row.status?n("li",{staticClass:"btn-danger red-text",on:{click:function(n){return t.changeStatus(e.row.id,0)}}},[t._v("Delete")]):t._e()])])]):"status"===e.column.field?n("span",[0==e.row.status?n("p",[t._v("Deleted")]):t._e(),t._v(" "),1==e.row.status?n("p",[t._v("Active")]):t._e(),t._v(" "),2==e.row.status?n("p",[t._v("Suspended")]):t._e()]):"payment_mode"===e.column.field?n("span",["Test"==e.row.payment_mode?n("p",[t._v("Inactive")]):t._e(),t._v(" "),"Live"==e.row.payment_mode?n("button",{staticClass:"btn btn-success",attrs:{type:"button"}},[t._v("Active")]):t._e(),t._v(" "),"free"==e.row.payment_mode?n("p",[t._v("Free")]):t._e()]):"password"===e.column.field?n("span",[2!=e.row.status?n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(n){return t.passwordChange(e.row.id)}}},[t._v("Send SMS")]):t._e()]):"invoice"===e.column.field?n("span",[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(n){return t.openInvoice(e.row.id)}}},[t._v("Invoice")])]):"addressline1"===e.column.field?n("span",[n("p",[t._v(t._s(e.row.addressline1))]),t._v(" "),n("p",[t._v(t._s(e.row.addressline2))]),t._v(" "),n("p",[t._v(t._s(e.row.city))]),t._v(" "),n("p",[t._v(t._s(e.row.state))]),t._v(" "),n("p",[t._v(t._s(e.row.country))])]):n("span",[t._v(t._s(e.formattedRow[e.column.field]))])]}}])})],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"column-padding header-bottom",staticStyle:{display:"flex","justify-content":"space-between"}},[e("h3",{staticStyle:{display:"flex","align-items":"center"}},[this._v("All Buyers")])])}],!1,null,null,null);e.default=component.exports}}]);