(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{328:function(t,e,o){"use strict";o.r(e);var l={name:"my-component",data:function(){return{columns:[{label:"ID",field:"id"},{label:"Seller Name",field:"seller_id.name"},{label:"Seller Phone",field:"seller_id.phone_number"},{label:"Image",field:"image"},{label:"Product Name",field:"product_id.product_name",width:"200px"},{label:"Brand",field:"product_id.brand"},{label:"Category",field:"product_id.category.name"},{label:"Status",field:"status"},{label:"Approved By",field:"approved_by"},{label:"Approved At",field:"approved_date",width:"200px"},{label:"Action",field:"action"}],rows:[{id:1,name:"Mobile",age:20,createdAt:"2011-10-31",details:"<p>asa</p>"}],allproducts:[],baseurl:"http://shopping.bhajanlal.in",next:"",prev:"",limit:10,offset:0,pagination_buttons:0,center_buttons:[],max_count:0,max_count_value:0,query:"",pageNum:1,maxPages:1,maxPerPage:9}},mounted:function(){this.offset_count(),this.fitTableToScreen(),window.addEventListener("resize",this.onResize)},methods:{clearQuery:function(){this.query="",this.limit=10,this.offset=0,this.getAllProducts()},offset_count:function(){this.limit,this.offset;this.getAllProducts()},getAllProducts:function(){var t=this,e=this.limit,o=this.offset,l=this.query;this.$store.dispatch("allProductsRequests",{limit:e,offset:o,query:l}).then((function(e){try{if(0==t.limit){t.allproducts=JSON.parse(JSON.stringify(e.data)),t.max_count=e.data.count,t.maxPages=e.data.count;for(var i=0;i<t.allproducts.length;i++)t.allproducts[i].images=JSON.parse(t.allproducts[i].images)}else{console.log(e),t.allproducts=JSON.parse(JSON.stringify(e.data.results)),console.log(t.allproducts),t.max_count=e.data.count;for(i=0;i<t.allproducts.length;i++)t.allproducts[i].images=JSON.parse(t.allproducts[i].product_id.images);t.pagination_buttons=Math.ceil((e.data.count-t.offset)/t.limit),t.center_buttons=[],t.center_buttons.push(Math.ceil(t.pagination_buttons/2)-1),t.center_buttons.push(Math.ceil(t.pagination_buttons/2)),t.center_buttons.push(Math.ceil(t.pagination_buttons/2)+1),console.log("this.max_count"),console.log(t.max_count),t.max_count_value=parseInt(t.max_count/t.limit)*t.limit}}catch(t){console.log(t),console.log("errr")}}))},getAllProducts_back:function(){var t=this,e=this.limit,o=this.offset;this.$store.dispatch("allProductsRequests",{limit:e,offset:o}).then((function(e){console.log(e),t.allproducts=JSON.parse(JSON.stringify(e.data.results));for(var i=0;i<t.allproducts.length;i++)t.allproducts[i].product_id.images=JSON.parse(t.allproducts[i].product_id.images)}))},deleteProduct:function(t){var e=this;this.$store.dispatch("deleteProduct",t).then((function(t){console.log(t),e.getAllProducts()}))},changeProductStatus:function(t,e,o,l,n){var r=this;console.log("product_name"),console.log(e);var c={id:t,product_name:e,sku:l,number:o,status:n};this.$store.dispatch("changeProductStatus",c).then((function(t){console.log(t),r.getAllProducts()}))},next_page:function(){this.offset=this.offset+this.limit,this.offset>this.max_count&&(this.offset=parseInt(this.max_count/this.limit)*this.limit);this.limit,this.offset;this.getAllProducts()},prev_page:function(){this.offset=this.offset-this.limit,this.offset<0&&(this.offset=0);this.limit,this.offset;this.getAllProducts()},change_limit:function(){this.offset=0,this.limit=parseInt(this.limit);parseInt(this.limit),this.offset;this.getAllProducts()},onResize:function(t){this.fitTableToScreen()},fitTableToScreen:function(){$(".vgt-responsive").height(window.innerHeight-$(".vgt-responsive").offset().top-126)}}},n=o(14),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"navbar-spacing padding-top-30"},[o("div",{staticClass:"specification"},[o("div",{staticClass:"holder"},[o("div",{staticClass:"column-padding header-bottom",staticStyle:{display:"flex","justify-content":"space-between"}},[o("h3",{staticStyle:{display:"flex","align-items":"center","padding-left":"0","padding-bottom":"0"}},[t._v("Product Approval Requests")]),t._v(" "),o("div",{staticClass:"wrap"},[o("div",{staticClass:"search"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"searchTerm",attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),t._v(" "),o("button",{staticClass:"searchButton",attrs:{type:"submit"},on:{click:t.getAllProducts}},[t._v("Search")])]),t._v(" "),""!=t.query?o("a",{staticStyle:{display:"flex","justify-content":"flex-end"},on:{click:t.clearQuery}},[t._v("Clear")]):t._e()])]),t._v(" "),o("div",{staticClass:"row"},[o("vue-good-table",{attrs:{columns:t.columns,rows:t.allproducts},scopedSlots:t._u([{key:"table-row",fn:function(e){return["id"===e.column.field?o("span",[o("p",[t._v(t._s(t.offset+e.row.originalIndex+1))])]):"image"===e.column.field?o("span",[o("img",{staticStyle:{width:"40px",height:"40px","object-fit":"contain"},attrs:{src:t.baseurl+"/media/products/"+e.row.product_id.images[0]}})]):"status"===e.column.field?o("span",[1==e.row.status?o("p",{staticStyle:{color:"#009688","font-weight":"bold"}},[t._v("APPROVED")]):t._e(),t._v(" "),2==e.row.status?o("p",{staticStyle:{color:"#F44336","font-weight":"bold"}},[t._v("REJECTED")]):t._e(),t._v(" "),0==e.row.status?o("p",[t._v("PENDING")]):t._e()]):"approved_by"===e.column.field?o("span",[e.row.approved_by?o("p",[t._v(t._s(e.row.approved_by.name))]):t._e()]):"approved_date"===e.column.field?o("span",[o("p",[t._v(t._s(e.row.approved_date.split("T")[0])+" "+t._s(e.row.approved_date.split("T")[1].split(".")[0]))])]):"action"===e.column.field?o("span",[o("div",{staticClass:"dropdown"},[o("div",{staticClass:"dd-button",on:{mousedown:t.close_dropdown}},[t._v("Actions")]),t._v(" "),o("ul",{staticClass:"dd-menu"},[0==e.row.status||2==e.row.status?o("li",{on:{click:function(o){return t.changeProductStatus(e.row.id,e.row.product_id.product_name,e.row.seller_id.phone_number,e.row.sku,1)}}},[t._v("Approve")]):t._e(),t._v(" "),0==e.row.status||1==e.row.status?o("li",{on:{click:function(o){return t.changeProductStatus(e.row.id,e.row.product_id.product_name,e.row.seller_id.phone_number,e.row.sku,2)}}},[t._v("REJECT")]):t._e()])])]):o("span",[t._v(t._s(e.formattedRow[e.column.field]))])]}}])}),t._v(" "),o("div",{staticClass:"pagination_buttons"},[o("div",{staticClass:"limit"},[o("select",{directives:[{name:"model",rawName:"v-model",value:t.limit,expression:"limit"}],on:{change:[function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.limit=e.target.multiple?o:o[0]},t.change_limit]}},[o("option",[t._v("10")]),t._v(" "),o("option",[t._v("25")]),t._v(" "),o("option",[t._v("50")]),t._v(" "),o("option",[t._v("100")])]),t._v(" "),o("p",[t._v("Page "+t._s(t.offset/t.limit+1))])]),t._v(" "),o("div",{staticClass:"pagin"},[0!=t.offset?o("div",{staticClass:"btn btn-success",on:{click:t.prev_page}},[t._v("Prev")]):t._e(),t._v(" "),t.offset!=t.max_count_value?o("div",{staticClass:"btn btn-success",on:{click:t.next_page}},[t._v("Next")]):t._e()])])],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);