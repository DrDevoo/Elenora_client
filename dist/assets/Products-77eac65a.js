import{_ as g,h as _,o as i,c as r,b as o,m as p,v as m,n as a,F as u,f,t as c,l as V,p as k,k as y,g as b,d as T,a as N,i as F}from"./index-be7b13e1.js";import{H as x}from"./Header-19754fd0.js";/* empty css                                                                *//* empty css                                                                     */const S={name:"PostFormAxios",data(){return{form:{prod_name:"",prod_collection:"",prod_price:0,prod_description:"",prod_categ:"",prod_colors:[],prod_pears:[]},file:"",collections:[],items:[]}},methods:{submitFile(){let n=new FormData;n.append("file",this.file),_.post("https://egoncompany.hu:444/products/add/"+this.form.prod_name+"/"+this.form.prod_collection+"/"+this.form.prod_price+"/"+this.form.prod_description+"/"+this.form.prod_categ+"/"+this.form.prod_colors+"/"+this.form.prod_pears,n,{headers:{"Content-Type":"multipart/form-data"}}).then(function(){console.log("SUCCESS!!")}).catch(function(){console.log("FAILURE!!")}),this.form.prod_categ=null,this.form.prod_name=null,this.form.prod_price=null,this.form.prod_description=null,this.form.prod_collection=null},handleFileUpload(){this.file=this.$refs.file.files[0]}},mounted(){_.get("https://egoncompany.hu:444/collections/getall").then(n=>this.collections=n.data),_.get("https://egoncompany.hu:444/inventory/getall").then(n=>this.items=n.data)}},d=n=>(k("data-v-9bedfa5d"),n=n(),y(),n),P={class:"addprod"},$={class:"inputs_wrapper"},C={class:"left_inputs"},I=d(()=>o("label",{for:""},"Neve",-1)),A=d(()=>o("br",null,null,-1)),K=d(()=>o("label",{for:"kollekcio"},"Kollekció",-1)),z=d(()=>o("option",{disabled:"",selected:""},"Kollekció",-1)),L=["value"],M=d(()=>o("option",{value:"none"},"Nincs",-1)),B=d(()=>o("br",null,null,-1)),D=d(()=>o("label",{for:""},"Ára",-1)),E=d(()=>o("br",null,null,-1)),G=d(()=>o("label",{for:""},"Leírása",-1)),j=d(()=>o("br",null,null,-1)),H=d(()=>o("label",{for:"Neme"},"Kategória",-1)),O=b('<option disabled selected data-v-9bedfa5d>Termék neme</option><option value="female" data-v-9bedfa5d>Női</option><option value="male" data-v-9bedfa5d>Férfi</option><option value="unisex" data-v-9bedfa5d>Férfi és Női</option><option value="couple" data-v-9bedfa5d>Páros</option>',5),R=[O],q=d(()=>o("br",null,null,-1)),J=d(()=>o("label",{for:"colors"},"Színei",-1)),Q=b('<option disabled selected data-v-9bedfa5d>Termék színei</option><option value="white" data-v-9bedfa5d>fehér</option><option value="black" data-v-9bedfa5d>fekete</option><option value="blue" data-v-9bedfa5d>kék</option><option value="red" data-v-9bedfa5d>piros</option><option value="green" data-v-9bedfa5d>zöld</option><option value="brown" data-v-9bedfa5d>barna</option><option value="gold" data-v-9bedfa5d>arany</option><option value="purple" data-v-9bedfa5d>lila</option>',9),W=[Q],X=d(()=>o("br",null,null,-1)),Y=d(()=>o("label",{for:"gyoongyok"},"Gyöngyei",-1)),Z=d(()=>o("option",{disabled:"",selected:""},"Termék gyöngyei",-1)),oo=["value"],eo={class:"right_inputs"},to={class:"submit_wrapper"};function lo(n,t,h,w,l,v){return i(),r("section",P,[o("form",{onSubmit:t[9]||(t[9]=V((...e)=>n.submitForm&&n.submitForm(...e),["prevent"]))},[o("div",$,[o("div",C,[I,p(o("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>l.form.prod_name=e),placeholder:"Termék neve"},null,512),[[m,l.form.prod_name]]),A,K,p(o("select",{name:"kollekcio",id:"kollekcio","onUpdate:modelValue":t[1]||(t[1]=e=>l.form.prod_collection=e)},[z,(i(!0),r(u,null,f(l.collections,e=>(i(),r("option",{key:e._id,value:e.col_name},c(e.col_name),9,L))),128)),M],512),[[a,l.form.prod_collection]]),B,D,p(o("input",{type:"text",placeholder:"Termék ára","onUpdate:modelValue":t[2]||(t[2]=e=>l.form.prod_price=e)},null,512),[[m,l.form.prod_price]]),E,G,p(o("textarea",{"onUpdate:modelValue":t[3]||(t[3]=e=>l.form.prod_description=e),placeholder:"Termék leírása",cols:"30",rows:"4"},null,512),[[m,l.form.prod_description]]),j,H,p(o("select",{name:"Neme",id:"Neme","onUpdate:modelValue":t[4]||(t[4]=e=>l.form.prod_categ=e)},R,512),[[a,l.form.prod_categ]]),q,J,p(o("select",{name:"colors",id:"colors",multiple:"","onUpdate:modelValue":t[5]||(t[5]=e=>l.form.prod_colors=e)},W,512),[[a,l.form.prod_colors]]),X,Y,p(o("select",{name:"gyoongyok",id:"gyoongyok",multiple:"","onUpdate:modelValue":t[6]||(t[6]=e=>l.form.prod_pears=e)},[Z,(i(!0),r(u,null,f(l.items,e=>(i(),r("option",{key:e._id,value:e.item_name},c(e.item_name),9,oo))),128))],512),[[a,l.form.prod_pears]])]),o("div",eo,[o("div",null,[o("input",{type:"file",id:"file",ref:"file",onChange:t[7]||(t[7]=e=>v.handleFileUpload(e))},null,544)])])]),o("div",to,[o("input",{type:"submit",value:"Termék mentése",onClick:t[8]||(t[8]=e=>v.submitFile())})])],32)])}const no=g(S,[["render",lo],["__scopeId","data-v-9bedfa5d"]]);const so={name:"GetProducts",data(){return{products:[],form:{prod_name:"",prod_collection:"",prod_price:0,prod_description:"",prod_categ:"",prod_colors:[],prod_pears:[]},file:"",collections:[],items:[],p_prod:[],moreopen:!1}},mounted(){_.get("https://egoncompany.hu:444/collections/getall").then(n=>this.collections=n.data),_.get("https://egoncompany.hu:444/inventory/getall").then(n=>this.items=n.data),_.get("https://egoncompany.hu:444/products/getall").then(n=>this.products=n.data.products)},methods:{more(n){this.form.prod_name=null,this.moreopen=!0,_.get("https://egoncompany.hu:444/products/getbyid/"+n).then(t=>this.p_prod=t.data),this.form.prod_name=this.p_prod.prodname}}},s=n=>(k("data-v-37758fc1"),n=n(),y(),n),io={key:0,class:"prodmore"},ro=s(()=>o("h1",null,"Termék módosítása",-1)),po=s(()=>o("div",null,[o("img",{src:""})],-1)),ao=s(()=>o("label",{for:""},"Neve",-1)),co=s(()=>o("br",null,null,-1)),_o=s(()=>o("label",{for:"kollekcio"},"Kollekció",-1)),uo=s(()=>o("option",{disabled:"",selected:""},"Kollekció",-1)),mo=["value"],fo=s(()=>o("option",{value:"none"},"Nincs",-1)),ho=s(()=>o("br",null,null,-1)),vo=s(()=>o("label",{for:""},"Ára",-1)),bo=s(()=>o("br",null,null,-1)),go=s(()=>o("label",{for:""},"Leírása",-1)),ko=s(()=>o("br",null,null,-1)),yo=s(()=>o("label",{for:"Neme"},"Kategória",-1)),wo=b('<option disabled selected data-v-37758fc1>Termék neme</option><option value="female" data-v-37758fc1>Női</option><option value="male" data-v-37758fc1>Férfi</option><option value="unisex" data-v-37758fc1>Férfi és Női</option><option value="couple" data-v-37758fc1>Páros</option>',5),No=[wo],To=s(()=>o("br",null,null,-1)),Uo=s(()=>o("label",{for:"colors"},"Színei",-1)),Vo=b('<option disabled selected data-v-37758fc1>Termék színei</option><option value="white" data-v-37758fc1>fehér</option><option value="black" data-v-37758fc1>fekete</option><option value="blue" data-v-37758fc1>kék</option><option value="red" data-v-37758fc1>piros</option><option value="green" data-v-37758fc1>zöld</option><option value="brown" data-v-37758fc1>barna</option><option value="gold" data-v-37758fc1>arany</option><option value="purple" data-v-37758fc1>lila</option>',9),Fo=[Vo],xo=s(()=>o("br",null,null,-1)),So=s(()=>o("label",{for:"gyoongyok"},"Gyöngyei",-1)),Po=s(()=>o("option",{disabled:"",selected:""},"Termék gyöngyei",-1)),$o=["value"],Co={class:"btn_w"},Io=s(()=>o("button",{class:"btn yellow"},"Módósítás",-1)),Ao=s(()=>o("button",{class:"btn red"},"Törlés",-1)),Ko={class:"listprod"},zo={cellspacing:"0",cellpadding:"0"},Lo=s(()=>o("thead",null,[o("tr",null,[o("th",null,"Neve"),o("th",null,"Ára"),o("th",null,"Kolekció"),o("th",null,"Eladott"),o("th")])],-1)),Mo=s(()=>o("td",null,"0",-1)),Bo=["onClick"];function Do(n,t,h,w,l,v){return i(),r(u,null,[this.moreopen?(i(),r("section",io,[ro,o("div",null,[po,o("div",null,[ao,p(o("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>l.form.prod_name=e),placeholder:"Termék neve"},null,512),[[m,l.form.prod_name]]),co,_o,p(o("select",{name:"kollekcio",id:"kollekcio","onUpdate:modelValue":t[1]||(t[1]=e=>l.form.prod_collection=e)},[uo,(i(!0),r(u,null,f(l.collections,e=>(i(),r("option",{key:e._id,value:e.col_name},c(e.col_name),9,mo))),128)),fo],512),[[a,l.form.prod_collection]]),ho,vo,p(o("input",{type:"text",placeholder:"Termék ára","onUpdate:modelValue":t[2]||(t[2]=e=>l.form.prod_price=e)},null,512),[[m,l.form.prod_price]]),bo,go,p(o("textarea",{"onUpdate:modelValue":t[3]||(t[3]=e=>l.form.prod_description=e),placeholder:"Termék leírása",cols:"30",rows:"4"},null,512),[[m,l.form.prod_description]]),ko,yo,p(o("select",{name:"Neme",id:"Neme","onUpdate:modelValue":t[4]||(t[4]=e=>l.form.prod_categ=e)},No,512),[[a,l.form.prod_categ]]),To,Uo,p(o("select",{name:"colors",id:"colors",multiple:"","onUpdate:modelValue":t[5]||(t[5]=e=>l.form.prod_colors=e)},Fo,512),[[a,l.form.prod_colors]]),xo,So,p(o("select",{name:"gyoongyok",id:"gyoongyok",multiple:"","onUpdate:modelValue":t[6]||(t[6]=e=>l.form.prod_pears=e)},[Po,(i(!0),r(u,null,f(l.items,e=>(i(),r("option",{key:e._id,value:e.item_name},c(e.item_name),9,$o))),128))],512),[[a,l.form.prod_pears]])])]),o("div",Co,[o("button",{class:"btn gray",onClick:t[7]||(t[7]=e=>l.moreopen=!l.moreopen)},"Mégse"),Io,Ao])])):T("",!0),o("section",Ko,[o("table",zo,[Lo,o("tbody",null,[(i(!0),r(u,null,f(l.products,e=>(i(),r("tr",{key:e._id},[o("td",null,c(e.prodname),1),o("td",null,c(e.price)+" Ft",1),o("td",null,c(e.collections),1),Mo,o("td",{onClick:Jo=>v.more(e._id)},"•••",8,Bo)]))),128))])])])],64)}const Eo=g(so,[["render",Do],["__scopeId","data-v-37758fc1"]]);const U=n=>(k("data-v-eb54e23f"),n=n(),y(),n),Go=U(()=>o("h1",{class:"title"},"Termékek",-1)),jo={class:"new-wrapper"},Ho=U(()=>o("h3",null,"Új termék",-1)),Oo=[Ho],Ro={data(){return{showAdd:!1}}},qo=Object.assign(Ro,{__name:"Products",setup(n){return(t,h)=>(i(),r(u,null,[N(x),Go,o("main",null,[o("section",jo,[o("div",{onClick:h[0]||(h[0]=w=>t.showAdd=!t.showAdd)},Oo)]),t.showAdd?(i(),F(no,{key:0})):T("",!0),N(Eo)])],64))}}),Zo=g(qo,[["__scopeId","data-v-eb54e23f"]]);export{Zo as default};
