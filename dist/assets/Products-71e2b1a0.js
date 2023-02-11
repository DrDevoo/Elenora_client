import{_ as v,h as c,o as i,c as a,b as e,n as r,v as h,q as _,F as u,f,t as d,m as N,p as g,k as b,g as F,a as w,i as U,d as V}from"./index-4d10961a.js";import{H as x}from"./Header-2da35251.js";/* empty css                                                                *//* empty css                                                                     */const P={name:"PostFormAxios",data(){return{form:{prod_name:"",prod_collection:"",prod_price:0,prod_description:"",prod_categ:"",prod_colors:[],prod_pears:[]},file:"",collections:[],items:[]}},methods:{submitFile(){let t=new FormData;t.append("file",this.file),c.post("https://egoncompany.hu:444/products/add/"+this.form.prod_name+"/"+this.form.prod_collection+"/"+this.form.prod_price+"/"+this.form.prod_description+"/"+this.form.prod_categ+"/"+this.form.prod_colors+"/"+this.form.prod_pears,t,{headers:{"Content-Type":"multipart/form-data"}}).then(function(){console.log("SUCCESS!!")}).catch(function(){console.log("FAILURE!!")})},handleFileUpload(){this.file=this.$refs.file.files[0]}},mounted(){c.get("https://egoncompany.hu:444/collections/getall").then(t=>this.collections=t.data),c.get("https://egoncompany.hu:444/inventory/getall").then(t=>this.items=t.data)}},n=t=>(g("data-v-2e9aa6ee"),t=t(),b(),t),T={class:"addprod"},I={class:"inputs_wrapper"},A={class:"left_inputs"},C=n(()=>e("label",{for:""},"Neve",-1)),$=n(()=>e("br",null,null,-1)),L=n(()=>e("label",{for:"kollekcio"},"Kollekció",-1)),B=n(()=>e("option",{disabled:"",selected:""},"Kollekció",-1)),D=["value"],E=n(()=>e("option",{value:"none"},"Nincs",-1)),K=n(()=>e("br",null,null,-1)),z=n(()=>e("label",{for:""},"Ára",-1)),M=n(()=>e("br",null,null,-1)),j=n(()=>e("label",{for:""},"Leírása",-1)),G=n(()=>e("br",null,null,-1)),H=n(()=>e("label",{for:"Neme"},"Kategória",-1)),q=F('<option disabled selected data-v-2e9aa6ee>Termék neme</option><option value="female" data-v-2e9aa6ee>Női</option><option value="male" data-v-2e9aa6ee>Férfi</option><option value="unisex" data-v-2e9aa6ee>Férfi és Női</option><option value="couple" data-v-2e9aa6ee>Páros</option>',5),O=[q],R=n(()=>e("br",null,null,-1)),J=n(()=>e("label",{for:"colors"},"Színei",-1)),Q=F('<option disabled selected data-v-2e9aa6ee>Termék színei</option><option value="white" data-v-2e9aa6ee>fehér</option><option value="black" data-v-2e9aa6ee>fekete</option><option value="blue" data-v-2e9aa6ee>kék</option><option value="red" data-v-2e9aa6ee>piros</option><option value="green" data-v-2e9aa6ee>zöld</option><option value="brown" data-v-2e9aa6ee>barna</option><option value="gold" data-v-2e9aa6ee>arany</option><option value="purple" data-v-2e9aa6ee>lila</option>',9),W=[Q],X=n(()=>e("br",null,null,-1)),Y=n(()=>e("label",{for:"gyoongyok"},"Gyöngyei",-1)),Z=n(()=>e("option",{disabled:"",selected:""},"Termék gyöngyei",-1)),ee=["value"],oe={class:"right_inputs"},te={class:"submit_wrapper"};function le(t,l,p,y,s,m){return i(),a("section",T,[e("form",{onSubmit:l[9]||(l[9]=N((...o)=>t.submitForm&&t.submitForm(...o),["prevent"]))},[e("div",I,[e("div",A,[C,r(e("input",{type:"text","onUpdate:modelValue":l[0]||(l[0]=o=>s.form.prod_name=o),placeholder:"Termék neve"},null,512),[[h,s.form.prod_name]]),$,L,r(e("select",{name:"kollekcio",id:"kollekcio","onUpdate:modelValue":l[1]||(l[1]=o=>s.form.prod_collection=o)},[B,(i(!0),a(u,null,f(s.collections,o=>(i(),a("option",{key:o._id,value:o.col_name},d(o.col_name),9,D))),128)),E],512),[[_,s.form.prod_collection]]),K,z,r(e("input",{type:"text",placeholder:"Termék ára","onUpdate:modelValue":l[2]||(l[2]=o=>s.form.prod_price=o)},null,512),[[h,s.form.prod_price]]),M,j,r(e("textarea",{"onUpdate:modelValue":l[3]||(l[3]=o=>s.form.prod_description=o),placeholder:"Termék leírása",cols:"30",rows:"4"},null,512),[[h,s.form.prod_description]]),G,H,r(e("select",{name:"Neme",id:"Neme","onUpdate:modelValue":l[4]||(l[4]=o=>s.form.prod_categ=o)},O,512),[[_,s.form.prod_categ]]),R,J,r(e("select",{name:"colors",id:"colors",multiple:"","onUpdate:modelValue":l[5]||(l[5]=o=>s.form.prod_colors=o)},W,512),[[_,s.form.prod_colors]]),X,Y,r(e("select",{name:"gyoongyok",id:"gyoongyok",multiple:"","onUpdate:modelValue":l[6]||(l[6]=o=>s.form.prod_pears=o)},[Z,(i(!0),a(u,null,f(s.items,o=>(i(),a("option",{key:o._id,value:o.item_name},d(o.item_name),9,ee))),128))],512),[[_,s.form.prod_pears]])]),e("div",oe,[e("div",null,[e("input",{type:"file",id:"file",ref:"file",onChange:l[7]||(l[7]=o=>m.handleFileUpload(o))},null,544)])])]),e("div",te,[e("input",{type:"submit",value:"Termék mentése",onClick:l[8]||(l[8]=o=>m.submitFile())})])],32)])}const se=v(P,[["render",le],["__scopeId","data-v-2e9aa6ee"]]);const ne={name:"GetProducts",data(){return{products:[]}},mounted(){c.get("https://egoncompany.hu:444/products/getall").then(t=>this.products=t.data)}},k=t=>(g("data-v-eb90e877"),t=t(),b(),t),ie={class:"listprod"},ae={cellspacing:"0",cellpadding:"0"},re=k(()=>e("thead",null,[e("tr",null,[e("th",null,"Neve"),e("th",null,"Ára"),e("th",null,"Kolekció"),e("th",null,"Eladott"),e("th")])],-1)),de=k(()=>e("td",null,"0",-1)),pe=k(()=>e("td",null,"•••",-1));function _e(t,l,p,y,s,m){return i(),a("section",ie,[e("table",ae,[re,e("tbody",null,[(i(!0),a(u,null,f(s.products,o=>(i(),a("tr",{key:o._id},[e("td",null,d(o.prodname),1),e("td",null,d(o.price)+" Ft",1),e("td",null,d(o.collections),1),de,pe]))),128))])])])}const ce=v(ne,[["render",_e],["__scopeId","data-v-eb90e877"]]);const S=t=>(g("data-v-eb54e23f"),t=t(),b(),t),ue=S(()=>e("h1",{class:"title"},"Termékek",-1)),me={class:"new-wrapper"},he=S(()=>e("h3",null,"Új termék",-1)),fe=[he],ve={data(){return{showAdd:!1}}},ge=Object.assign(ve,{__name:"Products",setup(t){return(l,p)=>(i(),a(u,null,[w(x),ue,e("main",null,[e("section",me,[e("div",{onClick:p[0]||(p[0]=y=>l.showAdd=!l.showAdd)},fe)]),l.showAdd?(i(),U(se,{key:0})):V("",!0),w(ce)])],64))}}),Fe=v(ge,[["__scopeId","data-v-eb54e23f"]]);export{Fe as default};