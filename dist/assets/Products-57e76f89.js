import{a as c}from"./axios-bff3f665.js";import{_ as v,o as d,c as i,b as o,m as r,v as f,n as _,F as u,f as h,t as a,l as N,p as b,j as g,g as F,a as w,h as U,d as V}from"./index-dbe793ca.js";import{H as x}from"./Header-683083c8.js";/* empty css                                                                *//* empty css                                                                     */const P={name:"PostFormAxios",data(){return{form:{prod_name:"",prod_collection:"",prod_price:0,prod_description:"",prod_categ:"",prod_colors:[],prod_pears:[]},file:"",collections:[],items:[]}},methods:{submitFile(){let t=new FormData;t.append("file",this.file),c.post("http://91.227.139.20:3900/products/add/"+this.form.prod_name+"/"+this.form.prod_collection+"/"+this.form.prod_price+"/"+this.form.prod_description+"/"+this.form.prod_categ+"/"+this.form.prod_colors+"/"+this.form.prod_pears,t,{headers:{"Content-Type":"multipart/form-data"}}).then(function(){console.log("SUCCESS!!")}).catch(function(){console.log("FAILURE!!")})},handleFileUpload(){this.file=this.$refs.file.files[0]}},mounted(){c.get("http://91.227.139.20:3900/collections/getall").then(t=>this.collections=t.data),c.get("http://91.227.139.20:3900/inventory/getall").then(t=>this.items=t.data)}},n=t=>(b("data-v-84da4a23"),t=t(),g(),t),T={class:"addprod"},I={class:"inputs_wrapper"},A={class:"left_inputs"},C=n(()=>o("label",{for:""},"Neve",-1)),$=n(()=>o("br",null,null,-1)),L=n(()=>o("label",{for:"kollekcio"},"Kollekció",-1)),B=n(()=>o("option",{disabled:"",selected:""},"Kollekció",-1)),D=["value"],E=n(()=>o("option",{value:"none"},"Nincs",-1)),K=n(()=>o("br",null,null,-1)),j=n(()=>o("label",{for:""},"Ára",-1)),z=n(()=>o("br",null,null,-1)),M=n(()=>o("label",{for:""},"Leírása",-1)),G=n(()=>o("br",null,null,-1)),H=n(()=>o("label",{for:"Neme"},"Kategória",-1)),O=F('<option disabled selected data-v-84da4a23>Termék neme</option><option value="female" data-v-84da4a23>Női</option><option value="male" data-v-84da4a23>Férfi</option><option value="unisex" data-v-84da4a23>Férfi és Női</option><option value="couple" data-v-84da4a23>Páros</option>',5),R=[O],q=n(()=>o("br",null,null,-1)),J=n(()=>o("label",{for:"colors"},"Színei",-1)),Q=F('<option disabled selected data-v-84da4a23>Termék színei</option><option value="white" data-v-84da4a23>fehér</option><option value="black" data-v-84da4a23>fekete</option><option value="blue" data-v-84da4a23>kék</option><option value="red" data-v-84da4a23>piros</option><option value="green" data-v-84da4a23>zöld</option><option value="brown" data-v-84da4a23>barna</option><option value="gold" data-v-84da4a23>arany</option><option value="purple" data-v-84da4a23>lila</option>',9),W=[Q],X=n(()=>o("br",null,null,-1)),Y=n(()=>o("label",{for:"gyoongyok"},"Gyöngyei",-1)),Z=n(()=>o("option",{disabled:"",selected:""},"Termék gyöngyei",-1)),oo=["value"],eo={class:"right_inputs"},to={class:"submit_wrapper"};function lo(t,l,p,y,s,m){return d(),i("section",T,[o("form",{onSubmit:l[9]||(l[9]=N((...e)=>t.submitForm&&t.submitForm(...e),["prevent"]))},[o("div",I,[o("div",A,[C,r(o("input",{type:"text","onUpdate:modelValue":l[0]||(l[0]=e=>s.form.prod_name=e),placeholder:"Termék neve"},null,512),[[f,s.form.prod_name]]),$,L,r(o("select",{name:"kollekcio",id:"kollekcio","onUpdate:modelValue":l[1]||(l[1]=e=>s.form.prod_collection=e)},[B,(d(!0),i(u,null,h(s.collections,e=>(d(),i("option",{key:e._id,value:e.col_name},a(e.col_name),9,D))),128)),E],512),[[_,s.form.prod_collection]]),K,j,r(o("input",{type:"text",placeholder:"Termék ára","onUpdate:modelValue":l[2]||(l[2]=e=>s.form.prod_price=e)},null,512),[[f,s.form.prod_price]]),z,M,r(o("textarea",{"onUpdate:modelValue":l[3]||(l[3]=e=>s.form.prod_description=e),placeholder:"Termék leírása",cols:"30",rows:"4"},null,512),[[f,s.form.prod_description]]),G,H,r(o("select",{name:"Neme",id:"Neme","onUpdate:modelValue":l[4]||(l[4]=e=>s.form.prod_gender=e)},R,512),[[_,s.form.prod_gender]]),q,J,r(o("select",{name:"colors",id:"colors",multiple:"","onUpdate:modelValue":l[5]||(l[5]=e=>s.form.prod_colors=e)},W,512),[[_,s.form.prod_colors]]),X,Y,r(o("select",{name:"gyoongyok",id:"gyoongyok",multiple:"","onUpdate:modelValue":l[6]||(l[6]=e=>s.form.prod_pears=e)},[Z,(d(!0),i(u,null,h(s.items,e=>(d(),i("option",{key:e._id,value:e.item_name},a(e.item_name),9,oo))),128))],512),[[_,s.form.prod_pears]])]),o("div",eo,[o("div",null,[o("input",{type:"file",id:"file",ref:"file",onChange:l[7]||(l[7]=e=>m.handleFileUpload(e))},null,544)])])]),o("div",to,[o("input",{type:"submit",value:"Termék mentése",onClick:l[8]||(l[8]=e=>m.submitFile())})])],32)])}const so=v(P,[["render",lo],["__scopeId","data-v-84da4a23"]]);const no={name:"GetProducts",data(){return{products:[]}},mounted(){c.get("http://91.227.139.20:3900/products/getall").then(t=>this.products=t.data)}},k=t=>(b("data-v-eb90e877"),t=t(),g(),t),io={class:"listprod"},ro={cellspacing:"0",cellpadding:"0"},ao=k(()=>o("thead",null,[o("tr",null,[o("th",null,"Neve"),o("th",null,"Ára"),o("th",null,"Kolekció"),o("th",null,"Eladott"),o("th")])],-1)),po=k(()=>o("td",null,"0",-1)),_o=k(()=>o("td",null,"•••",-1));function co(t,l,p,y,s,m){return d(),i("section",io,[o("table",ro,[ao,o("tbody",null,[(d(!0),i(u,null,h(s.products,e=>(d(),i("tr",{key:e._id},[o("td",null,a(e.prodname),1),o("td",null,a(e.price)+" Ft",1),o("td",null,a(e.collections),1),po,_o]))),128))])])])}const uo=v(no,[["render",co],["__scopeId","data-v-eb90e877"]]);const S=t=>(b("data-v-eb54e23f"),t=t(),g(),t),mo=S(()=>o("h1",{class:"title"},"Termékek",-1)),fo={class:"new-wrapper"},ho=S(()=>o("h3",null,"Új termék",-1)),vo=[ho],bo={data(){return{showAdd:!1}}},go=Object.assign(bo,{__name:"Products",setup(t){return(l,p)=>(d(),i(u,null,[w(x),mo,o("main",null,[o("section",fo,[o("div",{onClick:p[0]||(p[0]=y=>l.showAdd=!l.showAdd)},vo)]),l.showAdd?(d(),U(so,{key:0})):V("",!0),w(uo)])],64))}}),No=v(go,[["__scopeId","data-v-eb54e23f"]]);export{No as default};
