(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{226:function(t,e,o){var content=o(261);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("126ae31e",content,!0,{sourceMap:!1})},260:function(t,e,o){"use strict";var n=o(226);o.n(n).a},261:function(t,e,o){(e=o(18)(!1)).push([t.i,'input[data-v-3ba0cecf],select[data-v-3ba0cecf],textarea[data-v-3ba0cecf]{height:35px;font-family:Regular;margin:0 10px 10px 0;border-radius:0;outline:none;width:100%;resize:vertical;font-size:1rem;padding:.6rem 1rem;box-shadow:none;border:1px solid #a9a9a9;-webkit-transition:all .3s;transition:all .3s}.popup[data-v-3ba0cecf]{position:fixed;left:0;z-index:99}.popup[data-v-3ba0cecf],.popup-main[data-v-3ba0cecf]{top:0;right:0;bottom:0}.popup-main[data-v-3ba0cecf]{background-color:#fff;margin:auto;position:absolute;max-width:400px;height:700px;left:260px;z-index:1;border-radius:5px}.popup-body[data-v-3ba0cecf]{height:552px;overflow:auto;padding:30px}.popup-title[data-v-3ba0cecf]{padding:30px 30px 16px;border-bottom:1px solid rgba(0,0,0,.14118)}.popup-action[data-v-3ba0cecf]{position:absolute;bottom:0;width:100%;display:-webkit-box;display:flex;justify-content:space-around;padding:25px;box-shadow:0 -7px 10px 0 rgba(0,0,0,.05098)}.popup[data-v-3ba0cecf]:after{background-color:rgba(0,0,0,.83);margin:auto;position:absolute;content:"";left:0;right:0;top:0;bottom:0}',""]),t.exports=e},301:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{allproducts:[],newCategory:"",selected_category:0,sub_Category:"",category:[],category_selected:0,subcategory:[],showDropdown:!1,subcategory_selected:0,brand:[],base_amount:1e3,market_commission:0,gst_commission:0,payment_fee:0,gst_payment_fee:1.8,gst_item:153,shipping:55,product_gst:0,brand_selected:0,showDropdown1:!1,sub_columns:[{label:"Sub Category",field:"name"},{label:"Category",field:"category_name"},{label:"Gst on Item (%)",field:"product_gst"},{label:"Market Commission (%)",field:"market_commission"},{label:"Gst on Commission (%)",field:"gst_commission"},{label:"Marketplace Payment Fee (%)",field:"payment_fee"},{label:"GST on Payment Fee (%)",field:"gst_payment_fee"},{label:"Total GST",field:"totalgst"},{label:"Gst on Item (₹)",field:"gst_item"},{label:"Receivable Amount",field:"final_amount"},{label:"Action",field:"details"}],rows:[]}},mounted:function(){this.getCategory(),this.getSubcategories()},methods:{getCategory:function(){var t=this;this.$store.dispatch("getsubCategory",0).then((function(e){console.log(e),t.category=JSON.parse(JSON.stringify(e.data))}))},EditCommission:function(t){this.openSubCatModel(),this.selected_category=t,this.sub_select()},addSubCategory:function(){var t=this;this.closeSubCatModel();var e={category:this.selected_category,name:this.sub_Category};this.$store.dispatch("addSubCategory",e).then((function(e){console.log(e),t.sub_Category="",t.getSubcategories()}))},sub_select:function(){var t=this,a=this.subcategory.filter((function(e){return e.subcategory==t.selected_category}));console.log(a),0!=a.length?(this.market_commission=a[0].market_commission,this.gst_commission=a[0].gst_commission,this.payment_fee=a[0].payment_fee,this.gst_payment_fee=a[0].gst_payment_fee,this.gst_item=this.gst_commission/100*1e3,this.shipping=a[0].shipping,this.product_gst=a[0].product_gst):(this.market_commission=0,this.gst_commission=0,this.product_gst=0,this.payment_fee=0,this.gst_payment_fee=0,this.gst_item=this.gst_commission/100*1e3,this.shipping=55)},getSubcategories:function(){var t=this;this.$store.dispatch("commissionList",this.category_selected).then((function(e){console.log(e),t.subcategory=e.data}))},addCommission:function(){var t=this,a=this.subcategory.filter((function(e){return e.subcategory==t.selected_category}));console.log(o);var e={subcategory:this.selected_category,market_commission:this.market_commission,gst_commission:this.gst_commission,payment_fee:this.payment_fee,gst_payment_fee:this.gst_payment_fee,gst_item:this.gst_item,shipping:this.shipping,product_gst:this.product_gst};if(0==a.length)this.$store.dispatch("commissionListtask",{id:o,payload:e}).then((function(e){console.log(e),t.getSubcategories(),t.closeSubCatModel(),t.selected_category=0}));else{var o=a[0].c_id;this.$store.dispatch("commissionListtaskEdit",{id:o,payload:e}).then((function(e){console.log(e),t.getSubcategories(),t.closeSubCatModel(),t.selected_category=0}))}},getBrand:function(){var t=this;this.$store.dispatch("getBrand",this.subcategory_selected).then((function(e){console.log(e),t.brand=e.data}))},deleteCategory:function(t){var e=this;this.$store.dispatch("deleteCategory",t).then((function(t){console.log(t),e.getCategory(),e.getSubcategories(),e.getBrand()}))},deleteSubCategory:function(t){var e=this;this.$store.dispatch("deleteSubCategory",t).then((function(t){console.log(t),e.getSubcategories(),e.getBrand()}))},deleteBrand:function(t){var e=this;this.$store.dispatch("deleteBrand",t).then((function(t){console.log(t),e.getBrand()}))},openDropdownPanel:function(){this.showDropdown=!0,this.sub_Category="",this.selected_category=0},openSubCatModel:function(){this.showDropdown1=!0},closeDropdownPanel:function(){this.showDropdown=!1,this.newCategory=""},closeSubCatModel:function(){this.showDropdown1=!1},per:function(a,b){var t=parseFloat(a)*parseFloat(b)/100;return parseFloat(t)}}},r=(o(260),o(14)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"navbar-spacing padding-top-30"},[t.showDropdown1?o("div",{staticClass:"popup"},[o("div",{staticClass:"popup-main"},[t._m(0),t._v(" "),o("div",{staticClass:"popup-body"},[o("div",[o("div",{staticStyle:{display:"flex","flex-direction":"column"}},[o("label",[t._v("Select Sub Category")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.selected_category,expression:"selected_category"}],staticStyle:{width:"70%"},on:{change:[function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selected_category=e.target.multiple?o:o[0]},t.sub_select]}},t._l(t.category,(function(p){return o("option",{key:p.id,domProps:{value:p.id}},[t._v(t._s(p.name))])})),0)]),t._v(" "),t.selected_category?o("div",[o("div",{staticStyle:{display:"flex","flex-direction":"column"}},[o("label",[t._v("GST On Product (%)")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.product_gst,expression:"product_gst"}],staticStyle:{width:"70%"},attrs:{type:"text"},domProps:{value:t.product_gst},on:{input:function(e){e.target.composing||(t.product_gst=e.target.value)}}})]),t._v(" "),o("div",{staticStyle:{display:"flex","flex-direction":"column"}},[o("label",[t._v("Market place Commission (%)")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.market_commission,expression:"market_commission"}],staticStyle:{width:"70%"},attrs:{type:"text"},domProps:{value:t.market_commission},on:{input:function(e){e.target.composing||(t.market_commission=e.target.value)}}})]),t._v(" "),o("div",{staticStyle:{display:"flex","flex-direction":"column"}},[o("label",[t._v("GST on Commission (%)")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.gst_commission,expression:"gst_commission"}],staticStyle:{width:"70%"},attrs:{max:"100",min:"0",type:"number"},domProps:{value:t.gst_commission},on:{input:function(e){e.target.composing||(t.gst_commission=e.target.value)}}})]),t._v(" "),o("div",{staticStyle:{display:"flex","flex-direction":"column"}},[o("label",[t._v("Marketplace Payment Fee (%)")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.payment_fee,expression:"payment_fee"}],staticStyle:{width:"70%"},attrs:{max:"100",min:"0",type:"number"},domProps:{value:t.payment_fee},on:{input:function(e){e.target.composing||(t.payment_fee=e.target.value)}}})]),t._v(" "),o("div",{staticStyle:{display:"flex","flex-direction":"column"}},[o("label",[t._v("GST on Payment Fee (%)")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.gst_payment_fee,expression:"gst_payment_fee"}],staticStyle:{width:"70%"},attrs:{max:"100",min:"0",type:"number"},domProps:{value:t.gst_payment_fee},on:{input:function(e){e.target.composing||(t.gst_payment_fee=e.target.value)}}})]),t._v(" "),o("div",{staticStyle:{display:"flex","flex-direction":"column"}},[o("label",[t._v("GST on Item")]),t._v(" "),o("p",{staticStyle:{width:"70%"}},[t._v(t._s(t.gst_commission/100*1e3))])])]):t._e()])]),t._v(" "),o("div",{staticClass:"popup-action"},[o("div",{staticClass:"pointer",on:{click:t.addCommission}},[t._v("Save")]),t._v(" "),o("div",{staticClass:"pointer",on:{click:t.closeSubCatModel}},[t._v("Cancel")])])])]):t._e(),t._v(" "),o("div",{staticClass:"holder"},[o("div",{staticClass:"column-padding header-bottom",staticStyle:{display:"flex","justify-content":"space-between"}},[o("h3",{staticStyle:{display:"flex","align-items":"center"}},[t._v("Commission Rate")]),t._v(" "),o("button",{staticClass:"btn btn-red",staticStyle:{display:"flex","align-items":"center"},on:{click:t.openSubCatModel}},[o("p",{staticClass:"white-text"},[t._v("+ Add New")])])]),t._v(" "),o("div",{staticClass:"row",staticStyle:{display:"flex","flex-direction":"column"}},[o("label",[t._v("Base Amount")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.base_amount,expression:"base_amount"}],staticStyle:{width:"70%","max-width":"200px"},attrs:{type:"text"},domProps:{value:t.base_amount},on:{input:function(e){e.target.composing||(t.base_amount=e.target.value)}}}),t._v(" "),o("vue-good-table",{attrs:{columns:t.sub_columns,rows:t.subcategory},scopedSlots:t._u([{key:"table-row",fn:function(e){return["details"===e.column.field?o("span",[o("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(o){return t.EditCommission(e.row.id)}}},[t._v("\n              Edit\n            ")])]):"totalgst"===e.column.field?o("span",[o("p",{staticStyle:{width:"70%"}},[t._v("\n              "+t._s((t.per(t.base_amount,e.row.product_gst)+t.per(t.per(t.base_amount,e.row.market_commission),e.row.gst_commission)+t.per(t.base_amount,e.row.payment_fee)+t.per(t.per(t.base_amount,e.row.payment_fee),e.row.gst_payment_fee)).toFixed(2))+"\n            ")])]):"final_amount"===e.column.field?o("span",[o("p",{staticStyle:{width:"70%"}},[t._v("\n              "+t._s(t.base_amount-(t.per(t.base_amount,e.row.market_commission)+t.per(t.base_amount,e.row.product_gst)+t.per(t.per(t.base_amount,e.row.market_commission),e.row.gst_commission)+t.per(t.base_amount,e.row.payment_fee)+t.per(t.per(t.base_amount,e.row.payment_fee),e.row.gst_payment_fee)).toFixed(2))+"\n            ")])]):"gst_item"===e.column.field?o("span",[o("p",{staticStyle:{width:"70%"}},[t._v("\n              "+t._s((t.per(t.base_amount,e.row.market_commission)+t.per(t.base_amount,e.row.product_gst)+t.per(t.per(t.base_amount,e.row.market_commission),e.row.gst_commission)+t.per(t.base_amount,e.row.payment_fee)+t.per(t.per(t.base_amount,e.row.payment_fee),e.row.gst_payment_fee)).toFixed(2))+"\n            ")])]):o("span",[t._v(t._s(e.formattedRow[e.column.field]))])]}}])})],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"popup-title"},[e("h3",[this._v("Add Commission Data")])])}],!1,null,"3ba0cecf",null);e.default=component.exports}}]);