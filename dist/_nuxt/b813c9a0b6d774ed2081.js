(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{251:function(t,e,o){var content=o(307);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("bb425c4a",content,!0,{sourceMap:!1})},306:function(t,e,o){"use strict";var n=o(251);o.n(n).a},307:function(t,e,o){(e=o(21)(!1)).push([t.i,'.add-section,.add_field_button{background:#2196f3}.add-section,.add_field_button,.remove-section,.remove_field{color:#fff;padding:7px;border-radius:2px;cursor:pointer;font-size:12px}.remove-section,.remove_field{background:#f44336;margin-left:10px}.spec-section select,input[type=input],input[type=number]{height:35px;margin:0 10px 10px 0;border-radius:0;outline:none;width:100%;font-size:1rem;padding:.6rem 1rem;box-shadow:none;transition:all .3s}.input_fields_wrap{padding:15px 0 0}.input_fields_wrap:not(:last-child){border-bottom:1px dashed #e6e6e6}.popup{position:fixed;left:0;z-index:99}.popup,.popup-main{top:0;right:0;bottom:0}.popup-main{background-color:#fff;margin:auto;position:absolute;max-width:1000px;height:642px;left:260px;z-index:1;border-radius:5px}.popup-body{height:400px;overflow:auto;padding:30px}.popup-title{padding:30px 30px 16px;border-bottom:1px solid rgba(0,0,0,.14118)}.popup-action{position:absolute;bottom:0;width:100%;display:flex;justify-content:space-around;padding:25px;box-shadow:0 -7px 10px 0 rgba(0,0,0,.05098)}.popup:after{background-color:rgba(0,0,0,.83);margin:auto;position:absolute;content:"";left:0;right:0;top:0;bottom:0}.add_dropdown{background-color:#4caf50;width:40px;height:40px;color:#fff;border-radius:30px;display:flex;justify-content:center;align-items:center;font-size:30px;box-shadow:0 6px 4px rgba(76,175,80,.25098);position:absolute;right:40px}.pointer{cursor:pointer}.tooltip{position:relative;display:inline-block}.tooltip .tooltiptext{visibility:hidden;width:140px;background-color:#555;color:#fff;text-align:center;border-radius:6px;padding:5px;position:absolute;z-index:1;bottom:150%;left:50%;margin-left:-75px;opacity:0;transition:opacity .3s}.tooltip .tooltiptext:after{content:"";position:absolute;top:100%;left:50%;margin-left:-5px;border:5px solid transparent;border-top-color:#555}.tooltip:hover .tooltiptext{visibility:visible;opacity:1}',""]),t.exports=e},343:function(t,e,o){"use strict";o.r(e);o(18),o(19),o(9),o(52),o(33),o(15),o(133);var n={data:function(){return{showDropdown:!1,subCat:"",input:[{name:""}],dropdown_title:"false",category:this.$cookies.get("submenu_edit"),data:[],specs:{},created_url:"http://shopping.bhajanlal.in/backend/api/products/search",baseurl:"http://shopping.bhajanlal.in/backend/api/products/search",subcategory:[],subcategory_selected:0,subcategory_selected_name:"",category_selected:0,allCategories:[],searchQuery:"",created_url_1:"",limit:10,brand:""}},components:{URL:o(89).a},methods:{myFunction:function(){var t=document.getElementById("myInput");t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"),document.getElementById("myTooltip").innerHTML="Copied: "+t.value},outFunc:function(){document.getElementById("myTooltip").innerHTML="Copy to clipboard"},makeid:function(t){for(var e="",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=o.length,i=0;i<t;i++)e+=o.charAt(Math.floor(Math.random()*n));return(new Date).getTime()+e},url_builder:function(){this.showDropdown=!0},add_section:function(t){console.log(t),this.data[t].push({title:"",url:"",type:0})},createURL:function(){console.log("create url");var a={};for(var t in this.specs){var e=this.specs,o=this.specs;if(console.log(e),o.hasOwnProperty(t))for(var n in console.log(e),e[t].sub){console.log(t);var sub=this.specs[t].sub;sub.hasOwnProperty(n)&&sub[n].hasOwnProperty("filter_value")&&""!=sub[n].filter_value&&(a[sub[n].name.toLowerCase()]=sub[n].filter_value.replace(/ /g,""))}}console.log(a);var r=new URLSearchParams("");for(var l in""!=this.searchQuery&&r.append("q",this.searchQuery.toLowerCase()),""!=this.limit&&r.append("limit",this.limit),""!=this.brand&&r.append("brand",this.brand.toLowerCase()),a){var c=a[l].split(",");console.log(c);for(var i=0;i<c.length;i++)r.append("filters",l.replace(/^\s+|\s+$/g,"")+"="+c[i])}var d="/"+this.subcategory_selected_name.replace(/[\s.;,?&%0-9]/g,"-").toLowerCase()+"?";this.created_url_1=d+decodeURIComponent(r.toString())},searchString:function(){},appendFilter:function(t){console.log(t)},appendParam:function(t){},add_menu:function(){var t=[];t.push({title:"",url:"",type:0}),this.data.push(t)},remove_section:function(t){this.data.splice(t,1)},remove_menu:function(section,t){console.log(section,t),this.data[section].splice(t,1)},openDropdownPanel:function(section,t){this.input=this.data[section].sub[t].dropdown_items,this.showDropdown=!0},closeDropdownPanel:function(){this.showDropdown=!1},addInput:function(){this.input.push({name:""})},remove_input:function(t){this.input.splice(t,1)},getCategoryDetails:function(){var t=this;this.$store.dispatch("getCategoryDetails",this.category).then((function(e){console.log("response"),t.data=JSON.parse(e.data.submenu)})).catch((function(t){console.log("error in request",t)}))},saveSubmenu:function(){var t=this;console.log(JSON.stringify(this.data));var e={id:this.category,submenu:JSON.stringify(this.data)};this.$store.dispatch("saveSubmenu",e).then((function(e){console.log(e),console.log("response"),t.$router.push("/dashboard/templates/navmenu")})).catch((function(t){console.log("error in request",t)}))},getCategory:function(){var t=this;this.$store.dispatch("getCategory").then((function(e){console.log("response"),t.allCategories=e.data})).catch((function(t){console.log("error in request",t)}))},getSubcategories:function(){var t=this;this.$store.dispatch("getsubCategory",this.category_selected).then((function(e){console.log(e),console.log("________________"),t.subcategory_selected=0,t.subcategory_selected_name="",console.log(t.subcategory_selected),t.subcategory=e.data}))},getsubCategoryDetails:function(){var t=this;null!=this.subcategory_selected&&this.$store.dispatch("getsubCategoryDetails",this.subcategory_selected).then((function(e){console.log(e),console.log("response"),t.specs=[],0!=e.data.specs.length&&(t.specs=JSON.parse(e.data.specs)),console.log(e.data.name),t.subcategory_selected_name=e.data.name.toLowerCase(),t.created_url_1="",t.createURL()})).catch((function(t){console.log("error in request",t)}))}},mounted:function(){this.getCategory(),this.getCategoryDetails()}},r=(o(306),o(14)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"navbar-spacing padding-top-30"},[t.showDropdown?o("div",{staticClass:"popup"},[o("div",{staticClass:"popup-main"},[o("URL"),t._v(" "),o("div",{staticClass:"popup-action"},[o("div",{staticClass:"pointer",on:{click:t.closeDropdownPanel}},[t._v("Close")])])],1)]):t._e(),t._v(" "),o("div",{staticClass:"specification"},[o("div",{staticClass:"holder"},[o("h3",[t._v(t._s(t.subCat))]),t._v(" "),o("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[o("div",{staticClass:"add-section",staticStyle:{width:"100px"},on:{click:t.add_menu}},[t._v("+ Add Section")]),t._v(" "),o("div",{staticClass:"add-section",staticStyle:{width:"100px"},on:{click:t.url_builder}},[t._v("+ URL Builder")]),t._v(" "),o("div",{staticClass:"add-section",staticStyle:{width:"50"},on:{click:t.saveSubmenu}},[t._v("Save")])]),t._v(" "),t._l(t.data,(function(i,e){return o("div",{key:i.title,staticClass:"row"},[o("h3",[t._v("Column "+t._s(e+1))]),t._v(" "),o("div",{staticClass:"white col s24",staticStyle:{margin:"10px 0",border:"1px solid #e6e6e6","box-shadow":"rgba(0, 0, 0, 0.03) 0px 2px 2px, rgba(0, 0, 0, 0.03) 0px 1px 0px"}},[o("div",{staticClass:"section toolbar",staticStyle:{display:"flex","justify-content":"space-between","border-bottom":"1px solid #e6e6e6"}},[o("div",{staticClass:"container",staticStyle:{display:"flex","justify-content":"space-between"}},[o("div",{staticClass:"add-section",on:{click:function(o){return t.add_section(e)}}},[t._v("+ Add Section")]),t._v(" "),o("div",{staticClass:"remove-section",on:{click:function(o){return t.remove_section(e)}}},[t._v("Remove Section")])])]),t._v(" "),o("div",[o("div",{staticClass:"spec-section white container",attrs:{id:"templateHolder"}},t._l(t.data[e],(function(p,n){return o("div",{key:p.id,staticClass:"input_fields_wrap drag-list",attrs:{id:"h"}},[o("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[o("div",{}),t._v(" "),o("div",{staticClass:"remove-section",on:{click:function(o){return t.remove_menu(e,n)}}},[t._v("Remove Menu")])]),t._v(" "),o("br"),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:p.title,expression:"p.title"}],staticClass:"header-data input",staticStyle:{display:"inline-block"},attrs:{type:"text",placeholder:"Header"},domProps:{value:p.title},on:{input:function(e){e.target.composing||t.$set(p,"title",e.target.value)}}}),t._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:p.url,expression:"p.url"}],staticClass:"input",staticStyle:{display:"inline-block",width:"100%"},attrs:{placeholder:"URL",id:"data",type:"text"},domProps:{value:p.url},on:{input:function(e){e.target.composing||t.$set(p,"url",e.target.value)}}}),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:p.type,expression:"p.type"}],staticStyle:{display:"inline-block",width:"50%","min-width":"100px"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(p,"type",e.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"0"}},[t._v("Menu")]),t._v(" "),o("option",{attrs:{value:"1"}},[t._v("Heading")])])])])})),0)])])])}))],2)])])}),[],!1,null,null,null);e.default=component.exports}}]);