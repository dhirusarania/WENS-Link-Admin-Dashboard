(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{218:function(t,e,o){"use strict";var n=o(8),r=o(219)(5),l=!0;"find"in[]&&Array(1).find((function(){l=!1})),n(n.P+n.F*l,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),o(86)("find")},219:function(t,e,o){var n=o(34),r=o(85),l=o(35),d=o(25),c=o(220);t.exports=function(t,e){var o=1==t,v=2==t,m=3==t,f=4==t,_=6==t,h=5==t||_,x=e||c;return function(e,c,y){for(var w,C,k=l(e),S=r(k),N=n(c,y,3),P=d(S.length),E=0,z=o?x(e,P):v?x(e,0):void 0;P>E;E++)if((h||E in S)&&(C=N(w=S[E],E,k),t))if(o)z[E]=C;else if(C)switch(t){case 3:return!0;case 5:return w;case 6:return E;case 2:z.push(w)}else if(f)return!1;return _?-1:m||f?f:z}}},220:function(t,e,o){var n=o(221);t.exports=function(t,e){return new(n(t))(e)}},221:function(t,e,o){var n=o(16),r=o(132),l=o(4)("species");t.exports=function(t){var e;return r(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!r(e.prototype)||(e=void 0),n(e)&&null===(e=e[l])&&(e=void 0)),void 0===e?Array:e}},234:function(t,e,o){"use strict";var n=o(6),r=o(26),l=o(36),d=o(135),c=o(70),v=o(12),m=o(51).f,f=o(71).f,_=o(13).f,h=o(235).trim,x=n.Number,y=x,w=x.prototype,C="Number"==l(o(87)(w)),k="trim"in String.prototype,S=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){var o,n,r,l=(e=k?e.trim():h(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(o=e.charCodeAt(2))||120===o)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+e}for(var code,d=e.slice(2),i=0,v=d.length;i<v;i++)if((code=d.charCodeAt(i))<48||code>r)return NaN;return parseInt(d,n)}}return+e};if(!x(" 0o1")||!x("0b1")||x("+0x1")){x=function(t){var e=arguments.length<1?0:t,o=this;return o instanceof x&&(C?v((function(){w.valueOf.call(o)})):"Number"!=l(o))?d(new y(S(e)),o,x):S(e)};for(var N,P=o(11)?m(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;P.length>E;E++)r(y,N=P[E])&&!r(x,N)&&_(x,N,f(y,N));x.prototype=w,w.constructor=x,o(17)(n,"Number",x)}},235:function(t,e,o){var n=o(8),r=o(27),l=o(12),d=o(236),c="["+d+"]",v=RegExp("^"+c+c+"*"),m=RegExp(c+c+"*$"),f=function(t,e,o){var r={},c=l((function(){return!!d[t]()||"​"!="​"[t]()})),v=r[t]=c?e(_):d[t];o&&(r[o]=v),n(n.P+n.F*c,"String",r)},_=f.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(v,"")),2&e&&(t=t.replace(m,"")),t};t.exports=f},236:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},250:function(t,e,o){var content=o(306);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("4d747c3e",content,!0,{sourceMap:!1})},305:function(t,e,o){"use strict";var n=o(250);o.n(n).a},306:function(t,e,o){(e=o(21)(!1)).push([t.i,'.product-detail-row[data-v-741bf774]{border:1px solid #e7e7e7}@media (max-width:75em){.product-detail-row[data-v-741bf774]{margin:3%}}.header-row[data-v-741bf774]{background-color:#f7f7f7;padding:1rem;font-weight:700;font-size:.9rem;display:block}.detail-row[data-v-741bf774]{display:flex}.column-left[data-v-741bf774]{flex:1}.column-right[data-v-741bf774]{flex:1;padding:1rem}.column-right span[data-v-741bf774]{display:block;font-size:1.2rem;line-height:30px}.column-right span a[data-v-741bf774]{text-decoration:none;cursor:pointer;font-weight:700;color:#0066c0}.column-right span a[data-v-741bf774]:hover{color:orange}.product-image[data-v-741bf774]{width:220px;height:200px;padding:2rem 1rem;-o-object-fit:contain;object-fit:contain}label[data-v-741bf774]{font-size:15px}.popup[data-v-741bf774]{position:fixed;left:0;z-index:99}.popup[data-v-741bf774],.popup-main[data-v-741bf774]{top:0;right:0;bottom:0}.popup-main[data-v-741bf774]{background-color:#fff;margin:auto;position:absolute;max-width:400px;height:290px;left:260px;z-index:1;border-radius:5px}.popup-body[data-v-741bf774]{height:300px;overflow:auto;padding:30px}.popup-title[data-v-741bf774]{padding:30px 30px 16px;border-bottom:1px solid rgba(0,0,0,.14118)}.popup-action[data-v-741bf774]{position:absolute;bottom:0;width:100%;display:flex;justify-content:space-around;padding:25px;box-shadow:0 -7px 10px 0 rgba(0,0,0,.05098)}.popup[data-v-741bf774]:after{background-color:rgba(0,0,0,.83);margin:auto;position:absolute;content:"";left:0;right:0;top:0;bottom:0}input[data-v-741bf774],select[data-v-741bf774],textarea[data-v-741bf774]{height:35px;font-family:Regular;margin:0 10px 10px 0;border-radius:0;outline:none;width:100%;resize:vertical;font-size:1rem;padding:.6rem 1rem;box-shadow:none;border:1px solid #a9a9a9;transition:all .3s}h3[data-v-741bf774]{font-size:20px}h3[data-v-741bf774],h4[data-v-741bf774]{padding-left:19px;padding-bottom:10px}h4[data-v-741bf774]{font-size:25px}.holder[data-v-741bf774]{margin-bottom:20px}label[data-v-741bf774]{font-size:13px;font-weight:500;line-height:30px;font-family:Bold;white-space:nowrap}.form-group[data-v-741bf774]{display:flex;flex-direction:column}[data-v-741bf774]::-webkit-input-placeholder{color:#afafaf}[data-v-741bf774]:-ms-input-placeholder{color:#afafaf}[data-v-741bf774]::-moz-placeholder{color:#afafaf}[data-v-741bf774]::-ms-input-placeholder{color:#afafaf}[data-v-741bf774]::placeholder{color:#afafaf}.link_tag[data-v-741bf774]{color:#00f;cursor:pointer;text-decoration:underline}.element-tab-view[data-v-741bf774]{position:relative}.element-tab-view>input[data-v-741bf774]{display:none}.element-tab-view>input:checked+label[data-v-741bf774]{background:#fff;color:#4caf50}.element-tab-view>input#tab1:checked~.line[data-v-741bf774]{left:0}.element-tab-view>input#tab1:checked~.content-container #c1[data-v-741bf774]{opacity:1;z-index:93}.element-tab-view>input#tab2:checked~.line[data-v-741bf774]{left:136.146px}.element-tab-view>input#tab2:checked~.content-container #c2[data-v-741bf774]{opacity:1;z-index:93}.element-tab-view>input#tab3:checked~.line[data-v-741bf774]{left:270.646px}.element-tab-view>input#tab3:checked~.content-container #c3[data-v-741bf774]{opacity:1;z-index:93}.element-tab-view>input#tab4:checked~.line[data-v-741bf774]{left:406.802px}.element-tab-view>input#tab4:checked~.content-container #c4[data-v-741bf774]{opacity:1;z-index:93}.element-tab-view>input#tab5:checked~.line[data-v-741bf774]{left:542.948px}.element-tab-view>input#tab5:checked~.content-container #c5[data-v-741bf774]{opacity:1;z-index:93}.element-tab-view>label[data-v-741bf774]{display:inline-block;font-size:14px;height:60px;line-height:60px;width:130px;text-align:center;background:#fff;color:#555;position:relative;transition:background .25s ease;cursor:pointer;font-family:Regular}.element-tab-view>label[data-v-741bf774]:after{content:"";height:2px;width:100%;position:absolute;display:block;background:#fff;bottom:0;opacity:0;left:0;transition:.25s ease}.element-tab-view>label[data-v-741bf774]:hover:after{opacity:1}.element-tab-view>.line[data-v-741bf774]{position:absolute;background:#4caf50;width:130px;top:56px;left:0;transition:.25s ease;height:3px;top:57px;z-index:99}.element-tab-view>.content-container[data-v-741bf774]{background:#fff;position:relative;font-size:16px;border-top:1px solid #dbdbdb}.element-tab-view>.content-container .content[data-v-741bf774]{position:absolute;width:100%;top:0;opacity:0;transition:.25s ease;color:#333}.element-tab-view>.content-container .content h3[data-v-741bf774]{font-weight:200;margin:10px 0}.element-tab-view>.content-container .content p[data-v-741bf774]{margin:10px 0}.element-tab-view>.content-container .content i[data-v-741bf774],.element-tab-view>.content-container .content p[data-v-741bf774]{font-size:13px}.toggle-button-cover[data-v-741bf774]{display:table-cell;position:relative;width:200px;box-sizing:border-box}.button-cover[data-v-741bf774]{margin:20px;background-color:#fff;border-radius:4px}.button-cover[data-v-741bf774],.knobs[data-v-741bf774],.layer[data-v-741bf774]{position:absolute;top:0;right:0;bottom:0;left:0}.button[data-v-741bf774]{position:relative;top:50%;width:74px;height:36px;margin:-20px auto 0;overflow:hidden}.button.r[data-v-741bf774],.button.r .layer[data-v-741bf774]{border-radius:100px}.button.b2[data-v-741bf774]{border-radius:2px}.checkbox[data-v-741bf774]{position:relative;width:100%;height:100%;padding:0;margin:0;opacity:0;cursor:pointer;z-index:3}.knobs[data-v-741bf774]{z-index:2}.layer[data-v-741bf774]{width:100%;background-color:#efefef;transition:all .3s ease;z-index:1}#button-3 .knobs[data-v-741bf774]:before{content:"";position:absolute;top:4px;left:4px;width:30px;height:30px;color:#fff;font-size:10px;font-weight:700;text-align:center;line-height:1;padding:11px 4px;background-color:#b5b5b5;border-radius:50%;transition:all .3s ease,left .3s cubic-bezier(.18,.89,.35,1.15)}#button-3 .checkbox:active+.knobs[data-v-741bf774]:before{width:46px;border-radius:100px}#button-3 .checkbox:checked:active+.knobs[data-v-741bf774]:before{margin-left:-26px}#button-3 .checkbox:checked+.knobs[data-v-741bf774]:before{content:"";left:42px;background-color:#2196f3}#button-3 .checkbox:checked~.layer[data-v-741bf774]{background-color:#d4ecff}.red-text[data-v-741bf774]{color:red}@media (min-width:767.98px){.form-group.small[data-v-741bf774]{width:180px}}.input_span_right[data-v-741bf774]{position:absolute;right:0;top:31px;bottom:0;width:72px;height:33px;background-color:#2196f3;line-height:33px;text-align:center;border-radius:0;color:#fff}',""]),t.exports=e},328:function(t,e,o){"use strict";o.r(e);o(234),o(134),o(18),o(19),o(9),o(33),o(133),o(15),o(218);var n={data:function(){return{category:[],subcategory:[],product_id_seller:this.$cookies.get("product_edit"),product_id_admin:0,selected:[],manufacturer:"",brand:"",return_window:"",product_id_type:0,return_text:"",subcategory_selected:0,category_selected:0,images:[],product_name:"",description:"",slug:"",bullet_points:[],error:{},showDropdown:!1,slugify:"",editSlug:0,not_similar:0,product_id_list:[{id:1,name:"UPC"},{id:2,name:"EAN"},{id:3,name:"GCID"},{id:4,name:"GTIN"},{id:5,name:"ASIN"}],specs:[],vs:this,baseurl:"https://www.bhajanlal.in",length:0,suggested_price:0,breadth:0,height:0,seo:"",weight:0,mrp:0,price:0,sku:"",stock:0}},mounted:function(){var t=this,e=this;Dropzone.autoDiscover=!1,this.myDropzone=new Dropzone("div#myDrop",{paramName:"file",addRemoveLinks:!0,uploadMultiple:!0,autoProcessQueue:!0,parallelUploads:10,maxFiles:10,maxFilesize:5,acceptedFiles:".png, .jpeg, .jpg",url:e.$store.state.api.imageUpload,headers:{Authorization:"Bearer "+e.$cookies.get("access_token"),"Cache-Control":null,"X-Requested-With":null},renameFilename:function(t){return console.log(t),console.log(e.product_name+"_"+(new Date).getTime()+"_"+t),e.product_name+"_"+(new Date).getTime()+"_"+t}}),this.myDropzone.on("sending",(function(t,e,o){var n=[];console.log("success"),$(".dz-preview .dz-filename").each((function(){n.push($(this).find("span").text())})),o.append("filenames",n)})),this.myDropzone.on("successmultiple",(function(t,o){console.log("success"),console.log(t,o),console.log(t),o.filenames.forEach((function(t,o){e.images.push(t.filename)}))})),this.myDropzone.on("error",(function(data){$("#msg").html('<div class="alert alert-danger">There is some thing wrong, Please try again!</div>')})),this.myDropzone.on("complete",(function(t){})),this.myDropzone.on("removedfile",(function(t){console.log(t),t.upload?e.images=e.images.filter((function(e){return e!=t.upload.filename})):e.images=e.images.filter((function(e){return e!=t.name}))})),this.myDropzone.on("addedfile",(function(t){for(console.log("added file"),console.log(this.files.length),console.log(this.options.maxFiles);this.files.length>this.options.maxFiles;)this.removeFile(this.files[10])})),this.$store.dispatch("getSingleVendorProduct",this.product_id_seller).then((function(o){console.log(o),t.selected=o.data,t.product_id_admin=t.selected.product_id.id,t.images=JSON.parse(t.selected.product_id.images),t.subcategory_selected=t.selected.product_id.subcategory.id,t.product_name=t.selected.product_id.product_name,t.slug=t.selected.product_id.slug,t.product_id_id=t.selected.product_id.product_id,t.product_id_type=t.selected.product_id.product_id_type,t.return_text=t.selected.return_text,t.return_window=parseInt(t.selected.return_days),t.category_selected=t.selected.product_id.category.id,t.seo=t.selected.product_id.seo,t.brand=t.selected.product_id.brand,t.description=t.selected.product_id.description,t.manufacturer=t.selected.product_id.manufacturer,t.length=t.selected.product_id.length,t.breadth=t.selected.product_id.breadth,t.height=t.selected.product_id.height,t.mrp=t.selected.mrp,t.price=t.selected.price,t.sku=t.selected.sku,t.stock=t.selected.stock,t.weight=t.selected.product_id.weight,t.bullet_points=JSON.parse(t.selected.product_id.bullet_points),t.selected.specs=JSON.parse(t.selected.product_id.specs),t.specs=JSON.parse(t.selected.product_id.subcategory.specs);for(var i=0;i<t.images.length;i++){var n={name:t.images[i]};t.myDropzone.options.addedfile.call(t.myDropzone,n),t.myDropzone.options.thumbnail.call(t.myDropzone,n,t.baseurl+"/backend/api/products/image/200/40/"+t.images[i]),t.myDropzone.files.push(n),n.previewElement.classList.add("dz-complete")}console.log(t.myDropzone.getAcceptedFiles()),t.$store.dispatch("getCategory").then((function(e){console.log(e),t.category=e.data,t.getSubcategories()})),t.$nextTick((function(){for(var t in e.selected.specs){var o=e.selected.specs;e.specs;for(var n in console.log(o),o[t].sub){console.log(t),o[t].sub.hasOwnProperty(n)&&(console.log(o[t].sub[n].type),3==o[t].sub[n].type?(e.$set(o[t].sub[n],"dropdown",o[t].sub[n].dropdown),e.$set(o[t].sub[n],"value",o[t].sub[n].value)):(console.log("Sdsd"),console.log(o[t].sub[n]),console.log(o[t].sub[n].value),e.$set(o[t].sub[n],"value",o[t].sub[n].value)))}}}))}))},watch:{product_name:function(t,e){console.log("Prop changed: ",t," | was: ",e),""!=t?this.vs.myDropzone.enable():this.vs.myDropzone.disable()}},methods:{updateProduct:function(){var t=this,e=new FormData;e.append("id",this.product_id_admin),e.append("product_name",this.product_name),e.append("product_id",this.product_id),e.append("product_id_type",this.product_id_type),e.append("slug",this.slug),e.append("description",this.description),e.append("images",JSON.stringify(this.images)),e.append("category",this.category_selected),e.append("subcategory",this.subcategory_selected),e.append("brand",this.brand),e.append("manufacturer",this.manufacturer),e.append("seo",this.seo),e.append("suggested_price",this.suggested_price),e.append("length",this.length),e.append("breadth",this.breadth),e.append("height",this.height),e.append("weight",this.weight),e.append("bullet_points",JSON.stringify(this.bullet_points)),e.append("specs",JSON.stringify(this.selected.specs)),this.$store.dispatch("updateProduct",{payload:e,id:this.product_id_admin}).then((function(e){console.log(e),t.updateSellerProduct()})).catch((function(e){console.log(e.response.status),t.error=e.response.data,404==e.response.status?alert("Product Not Found"):t.openDropdownPanel()}))},updateSellerProduct:function(){var t=this,e=new FormData;e.append("product_name",this.product_name),e.append("id",this.product_id_seller),e.append("sku",this.sku),e.append("mrp",this.mrp),e.append("price",this.price),e.append("stock",this.stock),e.append("return_text",this.return_text),e.append("return_days",this.return_window);var o=this.product_id_seller;this.$store.dispatch("updateSellerSingleProduct",{payload:e,id:o}).then((function(e){console.log(e),t.$router.push("/dashboard/products/all_single")}))},slugifyTitle:function(){console.log("Sdsd"),this.slug=this.product_name.toLowerCase().replace(/[^\w ]+/g,"").replace(/ +/g,"-")},addMoreBullets:function(){this.bullet_points.length<9&&this.bullet_points.push({value:""})},removeBullets:function(t){this.bullet_points.splice(t,1)},getSubcategories:function(){var t=this;this.$store.dispatch("getsubCategory",this.category_selected).then((function(e){console.log(e),console.log("________________"),t.subcategory=e.data}))},allowSlugField:function(t){console.log(t),this.editSlug=t},changeText:function(){this.return_text="Returns are just acknowledged inside "+this.return_window+" ("+this.inWords(this.return_window)+") days of the date of procurement. To be qualified for an arrival, your thing must be unused and in a similar condition that you got it. On the off chance that the item is gotten by seller in unused and perfect condition and in its unique bundling without tearing out the Tag, seller will discount your buy."},inWords:function(t){console.log(t);var a=["","one ","two ","three ","four ","five ","six ","seven ","eight ","nine ","ten ","eleven ","twelve ","thirteen ","fourteen ","fifteen ","sixteen ","seventeen ","eighteen ","nineteen "],b=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];if((t=t.toString()).length>9)return"overflow";var e=("000000000"+t).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);if(e){var o="";return o+=0!=e[1]?(a[Number(e[1])]||b[e[1][0]]+" "+a[e[1][1]])+"crore ":"",o+=0!=e[2]?(a[Number(e[2])]||b[e[2][0]]+" "+a[e[2][1]])+"lakh ":"",o+=0!=e[3]?(a[Number(e[3])]||b[e[3][0]]+" "+a[e[3][1]])+"thousand ":"",o+=0!=e[4]?(a[Number(e[4])]||b[e[4][0]]+" "+a[e[4][1]])+"hundred ":"",o+=0!=e[5]?(""!=o?"and ":"")+(a[Number(e[5])]||b[e[5][0]]+" "+a[e[5][1]]):""}},openDropdownPanel:function(){this.showDropdown=!0},closeSubCatModel:function(){this.showDropdown=!1}}},r=(o(305),o(14)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"navbar-spacing padding-top-30"},[t.showDropdown?o("div",{staticClass:"popup"},[o("div",{staticClass:"popup-main"},[t._m(0),t._v(" "),o("div",{staticClass:"popup-body"},[o("div",t._l(t.error,(function(p,e){return o("div",{key:p.id},[o("p",{staticStyle:{"font-size":"15px","font-weight":"bold"}},[t._v(t._s(e))]),t._v(" "),o("p",{staticStyle:{"margin-bottom":"15px"}},[t._v(t._s(p[0]))])])})),0)]),t._v(" "),o("div",{staticClass:"popup-action"},[o("div",{staticClass:"pointer",on:{click:t.closeSubCatModel}},[t._v("Cancel")])])])]):t._e(),t._v(" "),o("div",{staticClass:"specification"},[o("div",{staticClass:"holder"},[t._m(1),t._v(" "),0!=t.selected.length?o("div",{staticClass:"holder"},[o("div",{staticClass:"product-detail-row"},[o("div",{staticClass:"header-row"},[t._v(t._s(t.product_name))]),t._v(" "),o("div",{staticClass:"detail-row"},[o("div",{staticClass:"column-left"},[o("img",{staticClass:"product-image",attrs:{src:t.baseurl+"/backend/api/products/image/200/40/"+t.images[0]}})]),t._v(" "),o("div",{staticClass:"column-right"},[o("span",[o("b",[t._v("Item Name (aka Title):")]),t._v("\n                "+t._s(t.product_name)+"\n              ")]),t._v(" "),o("span",[o("b",[t._v("Product ID:")]),t._v("\n                "+t._s(t.product_id_seller)+"\n              ")]),t._v(" "),o("span",[o("b",[t._v("Brand:")]),t._v("\n                "+t._s(t.selected.product_id.brand)+"\n              ")])])])])]):o("div",[o("p",[t._v("No Product Found")])])]),t._v(" "),""!=t.selected.slug?o("div",{staticClass:"holder"},[o("h3",{},[t._v("Submit Product")]),t._v(" "),o("div",{staticStyle:{"padding-left":"19px","padding-bottom":"10px"}},[o("button",{staticClass:"btn btn-primary",attrs:{disabled:""==t.selected.slug},on:{click:t.updateProduct}},[t._v("Update Product")])])]):t._e(),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:null!=t.subcategory_selected&&0!=t.subcategory_selected,expression:"subcategory_selected != undefined && subcategory_selected != 0"}],staticClass:"holder no-pad"},[o("div",{staticClass:"element-tab-view"},[o("input",{attrs:{type:"radio",id:"tab1",name:"tab",checked:""}}),t._v(" "),t._m(2),t._v(" "),o("input",{attrs:{type:"radio",id:"tab2",name:"tab"}}),t._v(" "),t._m(3),t._v(" "),o("input",{attrs:{type:"radio",id:"tab3",name:"tab"}}),t._v(" "),t._m(4),t._v(" "),o("input",{attrs:{type:"radio",id:"tab4",name:"tab"}}),t._v(" "),t._m(5),t._v(" "),o("input",{attrs:{type:"radio",id:"tab5",name:"tab"}}),t._v(" "),t._m(6),t._v(" "),o("div",{staticClass:"line"}),t._v(" "),o("div",{staticClass:"content-container"},[o("div",{staticClass:"content basic",attrs:{id:"c1"}},[o("div",{staticClass:"bg-white"},[o("div",{staticClass:"column-padding"}),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col s24 m16"},[o("div",{staticClass:"col s24 m12"},[o("label",[t._v("Category")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.category_selected,expression:"category_selected"}],on:{change:[function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.category_selected=e.target.multiple?o:o[0]},t.getSubcategories]}},t._l(t.category,(function(p){return o("option",{key:p.id,domProps:{value:p.id}},[t._v("\n                        "+t._s(p.name)+"\n                      ")])})),0)]),t._v(" "),o("div",{staticClass:"col s24 m12"},[o("label",[t._v("SubCategory")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.subcategory_selected,expression:"subcategory_selected"}],on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.subcategory_selected=e.target.multiple?o:o[0]}}},t._l(t.subcategory,(function(p){return o("option",{key:p.id,domProps:{value:p.id}},[t._v("\n                        "+t._s(p.name)+"\n                      ")])})),0)])])]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col s24 m16"},[o("div",{staticClass:"col s24"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Product Name")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.product_name,expression:"product_name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Redmi 7A ( 32GB , 2 GB ) Black"},domProps:{value:t.product_name},on:{input:[function(e){e.target.composing||(t.product_name=e.target.value)},t.slugifyTitle]}})])]),t._v(" "),o("div",{staticClass:"col s24"},[o("div",{staticClass:"form-group"},[o("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[o("label",{staticStyle:{display:"flex"},attrs:{for:"exampleInputEmail1"}},[t._v("Product Slug")]),t._v(" "),t.editSlug?t._e():o("div",{staticClass:"link_tag",on:{click:function(e){return t.allowSlugField(1)}}},[t._v("Edit")]),t._v(" "),t.editSlug?o("div",{staticClass:"link_tag",on:{click:function(e){return t.allowSlugField(0)}}},[t._v("Save")]):t._e()]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.slug,expression:"slug"}],staticClass:"form-control",attrs:{disabled:0==t.editSlug,placeholder:"redmi-7a-32gb-2-gb-black"},domProps:{value:t.slug},on:{input:function(e){e.target.composing||(t.slug=e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"col s24 m12"},[o("div",{staticClass:"form-group"},[t._m(7),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.brand,expression:"brand"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Xiaomi"},domProps:{value:t.brand},on:{input:function(e){e.target.composing||(t.brand=e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"col s24 m12"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Manufacturer")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.manufacturer,expression:"manufacturer"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Xiaomi"},domProps:{value:t.manufacturer},on:{input:function(e){e.target.composing||(t.manufacturer=e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"col s24 m12"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Original Price")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.mrp,expression:"mrp"}],staticClass:"form-control",attrs:{type:"text",placeholder:"0"},domProps:{value:t.mrp},on:{input:function(e){e.target.composing||(t.mrp=e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"col s24 m12"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Selling Price")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],staticClass:"form-control",attrs:{type:"text",placeholder:"0"},domProps:{value:t.price},on:{input:function(e){e.target.composing||(t.price=e.target.value)}}})])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"col s24 m16"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Suggested Price")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.suggested_price,expression:"suggested_price"}],staticClass:"form-control",attrs:{type:"text",placeholder:"0"},domProps:{value:t.suggested_price},on:{input:function(e){e.target.composing||(t.suggested_price=e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"col s24"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Search Terms (SEO)")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.seo,expression:"seo"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Terms that will describe this product"},domProps:{value:t.seo},on:{input:function(e){e.target.composing||(t.seo=e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"col s24 m16"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Product ID")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.product_id_seller,expression:"product_id_seller"}],staticClass:"form-control",attrs:{type:"text","aria-describedby":"emailHelp",placeholder:"UPC, EAN, GCID, GTIN, ASIN"},domProps:{value:t.product_id_seller},on:{input:function(e){e.target.composing||(t.product_id_seller=e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"col s24 m8"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Product ID Type")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.product_id_type,expression:"product_id_type"}],on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.product_id_type=e.target.multiple?o:o[0]}}},t._l(t.product_id_list,(function(p){return o("option",{key:p.id,domProps:{value:p.id}},[t._v(t._s(p.name))])})),0)])]),t._v(" "),o("div",{staticClass:"col s24 m16"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"exampleInputEmail1"}},[t._v("SKU")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.sku,expression:"sku"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.sku},on:{input:function(e){e.target.composing||(t.sku=e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"col s24 m8"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Stock Quantity")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.stock,expression:"stock"}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:t.stock},on:{input:function(e){e.target.composing||(t.stock=e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"col s24"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Return Window (Days) (Set 0 if return not allowed)")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.return_window,expression:"return_window"}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:t.return_window},on:{input:[function(e){e.target.composing||(t.return_window=e.target.value)},t.changeText]}})])]),t._v(" "),0!=t.return_window?o("div",{staticClass:"col s24"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Return Policy Terms")]),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.return_text,expression:"return_text"}],staticClass:"form-control",staticStyle:{height:"130px"},attrs:{type:"text",placeholder:""},domProps:{value:t.return_text},on:{input:function(e){e.target.composing||(t.return_text=e.target.value)}}})])]):t._e()])])])]),t._v(" "),o("div",{staticClass:"content description",attrs:{id:"c2"}},[o("div",{staticClass:"bg-white"},[t._m(8),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col s24"},[o("div",{staticClass:"col s24"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Write a Short Description about the product")]),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticStyle:{height:"160px"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"col s24"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Add Bullet Points (Upto 9)")]),t._v(" "),t._l(t.bullet_points,(function(p,e){return o("div",{key:p.length,staticStyle:{display:"flex","align-items":"center"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:p.value,expression:"p.value"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:p.value},on:{input:function(e){e.target.composing||t.$set(p,"value",e.target.value)}}}),t._v(" "),o("div",{staticClass:"pointer",staticStyle:{color:"red"},on:{click:function(o){return t.removeBullets(e)}}},[t._v("Remove")])])})),t._v(" "),o("div",{staticClass:"link_tag",on:{click:t.addMoreBullets}},[t._v("+ Add More points")])],2)])])])])]),t._v(" "),t._m(9),t._v(" "),o("div",{staticClass:"content",attrs:{id:"c4"}},[o("div",{staticClass:"bg-white"},[""==t.selected.specs?o("div",[o("p",{staticStyle:{"padding-left":"19px","padding-bottom":"10px"}},[t._v("\n                  Specifications not added. Go to\n                  "),o("nuxt-link",{attrs:{to:"/dashboard/templates/specification/"+this.subcategory_selected}},[t._v("Specifications")]),t._v("and add them\n                ")],1)]):t._e(),t._v(" "),"{}"!=t.selected.specs?o("div",t._l(t.selected.specs,(function(p,e){return o("div",{key:p.id,staticClass:"input_fields_wrap drag-list",attrs:{id:"h"}},[o("h3",[t._v(t._s(p.name))]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col s12"},t._l(p.sub,(function(q,e){return o("div",{key:q.id,staticClass:"col s24"},[o("div",{staticClass:"form-group"},[o("label",[t._v(t._s(q.name))]),t._v(" "),1==q.type?o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:q.value,expression:"q.value"}],attrs:{type:"text",id:q.id},domProps:{value:q.value},on:{input:function(e){e.target.composing||t.$set(q,"value",e.target.value)}}})]):t._e(),t._v(" "),2==q.type?o("div",{staticStyle:{display:"flex"}},[o("select",{directives:[{name:"model",rawName:"v-model",value:q.value,expression:"q.value"}],staticStyle:{display:"inline-block",width:"100%"},attrs:{id:q.id},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(q,"value",e.target.multiple?o:o[0])}}},[o("option",{domProps:{value:void 0}},[t._v("Not Selected")]),t._v(" "),t._l(q.dropdown_items,(function(e){return o("option",{key:e.id,domProps:{value:e.name}},[t._v(t._s(e.name))])}))],2)]):t._e(),t._v(" "),3==q.type?o("div",{staticStyle:{display:"flex"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:q.value,expression:"q.value"}],class:q.id,attrs:{type:"text"},domProps:{value:q.value},on:{input:function(e){e.target.composing||t.$set(q,"value",e.target.value)}}}),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:q.dropdown,expression:"q.dropdown"}],class:q.id,staticStyle:{display:"inline-block",width:"40%"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(q,"dropdown",e.target.multiple?o:o[0])}}},[o("option",{domProps:{value:void 0}},[t._v("Not Selected")]),t._v(" "),t._l(q.dropdown_items,(function(e){return o("option",{key:e.id,domProps:{value:e.name}},[t._v(t._s(e.name))])}))],2)]):t._e()])])})),0)])])})),0):t._e()])]),t._v(" "),o("div",{staticClass:"content shipping",attrs:{id:"c5"}},[o("div",{staticClass:"bg-white"},[o("p",{staticStyle:{"padding-left":"19px","padding-bottom":"10px",color:"#E91E63"}},[t._v("Shipping Information Based on ShipRocket")]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col s24"},[o("div",{staticClass:"col s24 m16"},[o("div",{staticClass:"form-group small"},[o("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Length (Length in cms. More than 0.5 cm)")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.length,expression:"length"}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:t.length},on:{input:function(e){e.target.composing||(t.length=e.target.value)}}}),t._v(" "),o("span",{staticClass:"input_span_right"},[t._v("cms")])])]),t._v(" "),o("div",{staticClass:"col s24 m16"},[o("div",{staticClass:"form-group small"},[o("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Breadth (Breadth in cms. More than 0.5 cm)")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.breadth,expression:"breadth"}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:t.breadth},on:{input:function(e){e.target.composing||(t.breadth=e.target.value)}}}),t._v(" "),o("span",{staticClass:"input_span_right"},[t._v("cms")])])]),t._v(" "),o("div",{staticClass:"col s24 m16"},[o("div",{staticClass:"form-group small"},[o("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Height (Height in cms. More than 0.5 cm)")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.height,expression:"height"}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:t.height},on:{input:function(e){e.target.composing||(t.height=e.target.value)}}}),t._v(" "),o("span",{staticClass:"input_span_right"},[t._v("cms")])])]),t._v(" "),o("div",{staticClass:"col s24 m16"},[o("div",{staticClass:"form-group small"},[o("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Weight (Weight in kgs. More than 0)")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.weight,expression:"weight"}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:t.weight},on:{input:function(e){e.target.composing||(t.weight=e.target.value)}}}),t._v(" "),o("span",{staticClass:"input_span_right"},[t._v("kgs")])])])])])])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"popup-title"},[e("h3",[this._v("Error")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"column-padding header-bottom"},[e("h3",{staticStyle:{display:"flex","align-items":"center"}},[this._v("Add a Product to your catalogue")]),this._v(" "),e("p",{staticStyle:{"padding-left":"19px","padding-bottom":"10px"}},[this._v("\n          Product added here will be added to a common database and vendors\n          can use these as templates when adding their products\n        ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"tab1"}},[e("i",{staticClass:"fa fa-code"}),this._v(" Basic\n        ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"tab2"}},[e("i",{staticClass:"fa fa-history"}),this._v(" Descriptions\n        ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"tab3"}},[e("i",{staticClass:"fa fa-pencil"}),this._v(" Images\n        ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"tab4"}},[e("i",{staticClass:"fa fa-share-alt"}),this._v(" Specifications\n        ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"tab5"}},[e("i",{staticClass:"fa fa-share-alt"}),this._v(" Shipping\n        ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"exampleInputEmail1"}},[this._v("\n                        Brand\n                        "),e("span",{staticClass:"red-text"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"column-padding"},[e("p",{staticStyle:{"padding-left":"19px","padding-bottom":"10px",color:"#E91E63"}},[this._v("These informations cannot be changed by the Vendors")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content images",attrs:{id:"c3"}},[e("div",{staticClass:"bg-white"},[e("p",{staticStyle:{"padding-left":"19px","padding-bottom":"10px"}},[this._v("Upload Images. (Max 10)")]),this._v(" "),e("div",{staticStyle:{"padding-left":"19px","padding-bottom":"10px"}},[e("div",{staticClass:"dropzone dz-clickable",attrs:{id:"myDrop"}},[e("div",{staticClass:"dz-default dz-message",attrs:{"data-dz-message":""}},[e("span",[this._v("Drop files here to upload")])])])])])])}],!1,null,"741bf774",null);e.default=component.exports}}]);