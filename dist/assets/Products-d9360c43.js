import{_ as k,h as m,o as i,c as r,b as e,k as d,l as a,v as b,F as f,f as g,t as p,d as y,q as N,p as x,m as U,g as F,a as C,i as T}from"./index-4adaee5e.js";import{H as A}from"./Header-fc5a453f.js";const S={name:"PostFormAxios",data(){return{form:{prod_name:"",prod_collection:"",prod_price:0,prod_description:"",prod_categ:"",prod_colors:[],prod_pears:[]},file1:"",file2:"",file3:"",collections:[],items:[],pearls_count:0,saved_pearls:[],pearl_name:"",pearl_xs:0,pearl_s:0,pearl_m:0,pearl_l:0,pearl_xl:0,pearl_xxl:0,api_result:null}},methods:{submitFile(){let l=new FormData,t=new FormData,v=new FormData;l.append("file",this.file1),t.append("file",this.file2),v.append("file",this.file3),m.post("https://egoncompany.hu:444/products/add/"+this.form.prod_name+"/"+this.form.prod_collection+"/"+this.form.prod_price+"/"+this.form.prod_description+"/"+this.form.prod_categ+"/"+this.form.prod_colors,JSON.stringify(this.saved_pearls),{headers:{"Content-Type":"application/json"}}).then(function(h){console.log(h)}).catch(function(){console.log("FAILURE!!")}),m.post("https://egoncompany.hu:444/products/addimg1/"+this.form.prod_name,l,{headers:{"Content-Type":"multipart/form-data"}}).then(function(h){console.log(h)}).catch(function(){console.log("FAILURE!!")}),m.post("https://egoncompany.hu:444/products/addimg2/"+this.form.prod_name,t,{headers:{"Content-Type":"multipart/form-data"}}).then(function(h){console.log(h)}).catch(function(){console.log("FAILURE!!")}),m.post("https://egoncompany.hu:444/products/addimg3/"+this.form.prod_name,v,{headers:{"Content-Type":"multipart/form-data"}}).then(function(h){console.log(h)}).catch(function(){console.log("FAILURE!!")}),this.form.prod_categ=null,this.form.prod_name=null,this.form.prod_price=null,this.form.prod_description=null,this.form.prod_collection=null,this.saved_pearls=[]},handleFileUpload1(){this.file1=this.$refs.file1.files[0]},handleFileUpload2(){this.file2=this.$refs.file2.files[0]},handleFileUpload3(){this.file3=this.$refs.file3.files[0]},addPearl(){this.saved_pearls.push({name:this.pearl_name,xs:this.pearl_xs,s:this.pearl_s,m:this.pearl_m,l:this.pearl_l,xl:this.pearl_xl,xxl:this.pearl_xxl}),this.pearl_name="",this.pearl_xs=0,this.pearl_s=0,this.pearl_m=0,this.pearl_l=0,this.pearl_xl=0,this.pearl_xxl=0},Delete(l){this.saved_pearls.splice(l,1)}},mounted(){m.get("https://egoncompany.hu:444/collections/getall").then(l=>this.collections=l.data),m.get("https://egoncompany.hu:444/inventory/getall").then(l=>this.items=l.data)}},c=l=>(x("data-v-d54c5735"),l=l(),U(),l),L={class:"addprod"},P={class:"inputs_wrapper"},I={class:"left_inputs"},D=c(()=>e("label",{for:""},"Neve",-1)),B=c(()=>e("br",null,null,-1)),E=c(()=>e("label",{for:""},"Ára",-1)),M=c(()=>e("br",null,null,-1)),X=c(()=>e("label",{for:""},"Leírása",-1)),K=c(()=>e("br",null,null,-1)),R=c(()=>e("label",{for:"kollekcio"},"Kollekció",-1)),j=c(()=>e("option",{disabled:"",selected:""},"Kollekció",-1)),z=["value"],O=c(()=>e("option",{value:"none"},"Nincs",-1)),G=c(()=>e("br",null,null,-1)),J=c(()=>e("label",{for:"Neme"},"Kategória",-1)),H=F('<option disabled selected data-v-d54c5735>Termék neme</option><option value="female" data-v-d54c5735>Női</option><option value="male" data-v-d54c5735>Férfi</option><option value="unisex" data-v-d54c5735>Férfi és Női</option><option value="couple" data-v-d54c5735>Páros</option>',5),q=[H],Q=c(()=>e("br",null,null,-1)),W=c(()=>e("label",{for:"colors"},"Színei",-1)),Y=F('<option disabled selected data-v-d54c5735>Termék színei</option><option value="white" data-v-d54c5735>fehér</option><option value="black" data-v-d54c5735>fekete</option><option value="gray" data-v-d54c5735>szürke</option><option value="blue" data-v-d54c5735>kék</option><option value="red" data-v-d54c5735>piros</option><option value="green" data-v-d54c5735>zöld</option><option value="brown" data-v-d54c5735>barna</option><option value="yellow" data-v-d54c5735>sárga</option><option value="purple" data-v-d54c5735>lila</option><option value="pink" data-v-d54c5735>rózsaszín</option>',11),Z=[Y],ee={class:"right_inputs"},te={class:"pearls_t_w"},oe={class:"pears-t"},le=c(()=>e("tr",null,[e("th",null,"Gyöngy"),e("th",null,"XS"),e("th",null,"S"),e("th",null,"M"),e("th",null,"L"),e("th",null,"XL"),e("th",null,"XXL"),e("th")],-1)),ne={style:{"text-align":"center"}},se={style:{"text-align":"center"}},ie={style:{"text-align":"center"}},re={style:{"text-align":"center"}},de={style:{"text-align":"center"}},pe={style:{"text-align":"center"}},ae={style:{"text-align":"center"}},ue=["onClick"],_e=["value"],ce={class:"flex"},me={class:"file_w"},he={class:"submit_wrapper"};function fe(l,t,v,h,n,_){return i(),r("section",L,[e("form",{onSubmit:t[19]||(t[19]=N((...o)=>l.submitForm&&l.submitForm(...o),["prevent"]))},[e("div",P,[e("div",I,[D,d(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=o=>n.form.prod_name=o),placeholder:"Termék neve"},null,512),[[a,n.form.prod_name]]),B,E,d(e("input",{type:"text",placeholder:"Termék ára","onUpdate:modelValue":t[1]||(t[1]=o=>n.form.prod_price=o)},null,512),[[a,n.form.prod_price]]),M,X,d(e("textarea",{"onUpdate:modelValue":t[2]||(t[2]=o=>n.form.prod_description=o),placeholder:"Termék leírása",cols:"30",rows:"4"},null,512),[[a,n.form.prod_description]]),K,R,d(e("select",{name:"kollekcio",id:"kollekcio","onUpdate:modelValue":t[3]||(t[3]=o=>n.form.prod_collection=o)},[j,(i(!0),r(f,null,g(n.collections,o=>(i(),r("option",{key:o._id,value:o.col_name},p(o.col_name),9,z))),128)),O],512),[[b,n.form.prod_collection]]),G,J,d(e("select",{name:"Neme",id:"Neme","onUpdate:modelValue":t[4]||(t[4]=o=>n.form.prod_categ=o)},q,512),[[b,n.form.prod_categ]]),Q,W,d(e("select",{name:"colors",id:"colors",multiple:"","onUpdate:modelValue":t[5]||(t[5]=o=>n.form.prod_colors=o)},Z,512),[[b,n.form.prod_colors]])]),e("div",ee,[e("div",te,[e("table",oe,[le,(i(!0),r(f,null,g(this.saved_pearls,(o,s)=>(i(),r("tr",{key:s},[e("td",ne,p(o.name),1),e("td",se,p(o.xs),1),e("td",ie,p(o.s),1),e("td",re,p(o.m),1),e("td",de,p(o.l),1),e("td",pe,p(o.xl),1),e("td",ae,p(o.xxl),1),e("td",null,[e("button",{onClick:$=>_.Delete(s)},"Törlés",8,ue)])]))),128)),(i(!0),r(f,null,g(this.pearls_count,o=>(i(),r("tr",{key:o},[e("td",null,[d(e("select",{name:"gyongy",id:"gyongy","onUpdate:modelValue":t[6]||(t[6]=s=>n.pearl_name=s)},[(i(!0),r(f,null,g(n.items,s=>(i(),r("option",{key:s._id,value:s.item_name},p(s.item_name),9,_e))),128))],512),[[b,n.pearl_name]])]),e("td",null,[d(e("input",{"onUpdate:modelValue":t[7]||(t[7]=s=>n.pearl_xs=s),type:"number",min:"0"},null,512),[[a,n.pearl_xs]])]),e("td",null,[d(e("input",{"onUpdate:modelValue":t[8]||(t[8]=s=>n.pearl_s=s),type:"number",min:"0"},null,512),[[a,n.pearl_s]])]),e("td",null,[d(e("input",{"onUpdate:modelValue":t[9]||(t[9]=s=>n.pearl_m=s),type:"number",min:"0"},null,512),[[a,n.pearl_m]])]),e("td",null,[d(e("input",{"onUpdate:modelValue":t[10]||(t[10]=s=>n.pearl_l=s),type:"number",min:"0"},null,512),[[a,n.pearl_l]])]),e("td",null,[d(e("input",{"onUpdate:modelValue":t[11]||(t[11]=s=>n.pearl_xl=s),type:"number",min:"0"},null,512),[[a,n.pearl_xl]])]),e("td",null,[d(e("input",{"onUpdate:modelValue":t[12]||(t[12]=s=>n.pearl_xxl=s),type:"number",min:"0"},null,512),[[a,n.pearl_xxl]])]),e("td",null,[e("button",{onClick:t[13]||(t[13]=s=>_.addPearl())},"Mentés")])]))),128))]),e("div",ce,[this.pearls_count<1?(i(),r("p",{key:0,class:"add_p",onClick:t[14]||(t[14]=o=>this.pearls_count+=1)}," + gyöngy ")):y("",!0)])]),e("div",me,[e("input",{type:"file",id:"file1",ref:"file1",onChange:t[15]||(t[15]=o=>_.handleFileUpload1(o))},null,544),e("input",{type:"file",id:"file2",ref:"file2",onChange:t[16]||(t[16]=o=>_.handleFileUpload2(o))},null,544),e("input",{type:"file",id:"file3",ref:"file3",onChange:t[17]||(t[17]=o=>_.handleFileUpload3(o))},null,544)])])]),e("div",he,[e("input",{type:"submit",value:"Termék mentése",onClick:t[18]||(t[18]=o=>_.submitFile())}),e("h2",null,p(this.api_result),1)])],32)])}const ve=k(S,[["render",fe],["__scopeId","data-v-d54c5735"]]);const ge={name:"GetProducts",data(){return{products:[],form:{prod_name:"",prod_collection:"",prod_price:0,prod_description:"",prod_categ:"",prod_colors:[],prod_pears:[]},file:"",collections:[],items:[],p_prod:[],pearls_count:1,moreopen:!1,imgurl:"https://egoncompany.hu:444/getimage/"}},mounted(){m.get("https://egoncompany.hu:444/collections/getall").then(l=>this.collections=l.data),m.get("https://egoncompany.hu:444/inventory/getall").then(l=>this.items=l.data),m.get("https://egoncompany.hu:444/products/getall").then(l=>this.products=l.data.products)},methods:{more(l){this.p_prod=null,this.moreopen=!0,m.get("https://egoncompany.hu:444/products/getbyid/"+l).then(t=>this.p_prod=t.data)},update(){m.post("https://egoncompany.hu:444/products/update/",JSON.stringify(this.p_prod),{headers:{"Content-Type":"application/json"}}).then(function(l){console.log(l)}).catch(function(){console.log("FAILURE!!")}),this.moreopen=!1},Delete(l){this.p_prod.pearls.splice(l,1)},addPearl(){this.p_prod.pearls.push({name:this.pearl_name,xs:this.pearl_xs,s:this.pearl_s,m:this.pearl_m,l:this.pearl_l,xl:this.pearl_xl,xxl:this.pearl_xxl}),this.pearl_name="",this.pearl_xs=0,this.pearl_s=0,this.pearl_m=0,this.pearl_l=0,this.pearl_xl=0,this.pearl_xxl=0}}},u=l=>(x("data-v-7ccce65f"),l=l(),U(),l),ye={key:0,class:"prodmore"},be=u(()=>e("h1",null,"Termék módosítása",-1)),ke=["src"],xe=["src"],Ue=["src"],Fe=u(()=>e("label",{for:""},"Neve",-1)),we=u(()=>e("br",null,null,-1)),Ve=u(()=>e("label",{for:"kollekcio"},"Kollekció",-1)),Ce=u(()=>e("option",{disabled:"",selected:""},"Kollekció",-1)),Te=["value"],Ne=u(()=>e("option",{value:"none"},"Nincs",-1)),$e=u(()=>e("br",null,null,-1)),Ae=u(()=>e("label",{for:""},"Ára",-1)),Se=u(()=>e("br",null,null,-1)),Le=u(()=>e("label",{for:""},"Leírása",-1)),Pe=u(()=>e("br",null,null,-1)),Ie=u(()=>e("label",{for:"Neme"},"Kategória",-1)),De=F('<option disabled selected data-v-7ccce65f>Termék neme</option><option value="female" data-v-7ccce65f>Női</option><option value="male" data-v-7ccce65f>Férfi</option><option value="unisex" data-v-7ccce65f>Férfi és Női</option><option value="couple" data-v-7ccce65f>Páros</option>',5),Be=[De],Ee={class:"pearls_t_w"},Me={class:"pears-t"},Xe=u(()=>e("tr",null,[e("th",null,"Gyöngy"),e("th",null,"XS"),e("th",null,"S"),e("th",null,"M"),e("th",null,"L"),e("th",null,"XL"),e("th",null,"XXL"),e("th")],-1)),Ke={style:{"text-align":"center"}},Re={style:{"text-align":"center"}},je={style:{"text-align":"center"}},ze={style:{"text-align":"center"}},Oe={style:{"text-align":"center"}},Ge={style:{"text-align":"center"}},Je={style:{"text-align":"center"}},He=["onClick"],qe=["value"],Qe={class:"flex"},We=u(()=>e("br",null,null,-1)),Ye={class:"btn_w"},Ze=u(()=>e("button",{class:"btn red"},"Törlés",-1)),et={class:"listprod"},tt={cellspacing:"0",cellpadding:"0"},ot=u(()=>e("thead",null,[e("tr",null,[e("th",null,"Neve"),e("th",null,"Ára"),e("th",null,"Kolekció"),e("th",null,"Eladott"),e("th")])],-1)),lt=u(()=>e("td",null,"0",-1)),nt=["onClick"];function st(l,t,v,h,n,_){return i(),r(f,null,[this.moreopen?(i(),r("section",ye,[be,e("div",null,[e("div",null,[n.p_prod.image?(i(),r("img",{key:0,class:"prodimg",src:n.imgurl+n.p_prod.image},null,8,ke)):y("",!0),n.p_prod.image2?(i(),r("img",{key:1,class:"prodimg",src:n.imgurl+n.p_prod.image2},null,8,xe)):y("",!0),n.p_prod.image3?(i(),r("img",{key:2,class:"prodimg",src:n.imgurl+n.p_prod.image3},null,8,Ue)):y("",!0)]),e("div",null,[Fe,d(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=o=>this.p_prod.prodname=o),placeholder:"Termék neve"},null,512),[[a,this.p_prod.prodname]]),we,Ve,d(e("select",{name:"kollekcio",id:"kollekcio","onUpdate:modelValue":t[1]||(t[1]=o=>this.p_prod.collections=o)},[Ce,(i(!0),r(f,null,g(n.collections,o=>(i(),r("option",{key:o._id,value:o.col_name},p(o.col_name),9,Te))),128)),Ne],512),[[b,this.p_prod.collections]]),$e,Ae,d(e("input",{type:"text",placeholder:"Termék ára","onUpdate:modelValue":t[2]||(t[2]=o=>this.p_prod.price=o)},null,512),[[a,this.p_prod.price]]),Se,Le,d(e("textarea",{"onUpdate:modelValue":t[3]||(t[3]=o=>this.p_prod.description=o),placeholder:"Termék leírása",cols:"30",rows:"4"},null,512),[[a,this.p_prod.description]]),Pe,Ie,d(e("select",{name:"Neme",id:"Neme","onUpdate:modelValue":t[4]||(t[4]=o=>this.p_prod.categ=o)},Be,512),[[b,this.p_prod.categ]]),e("div",Ee,[e("table",Me,[Xe,(i(!0),r(f,null,g(this.p_prod.pearls,(o,s)=>(i(),r("tr",{key:s},[e("td",Ke,p(o.name),1),e("td",Re,p(o.xs),1),e("td",je,p(o.s),1),e("td",ze,p(o.m),1),e("td",Oe,p(o.l),1),e("td",Ge,p(o.xl),1),e("td",Je,p(o.xxl),1),e("td",null,[e("button",{onClick:$=>_.Delete(s)},"Törlés",8,He)])]))),128)),(i(!0),r(f,null,g(this.pearls_count,o=>(i(),r("tr",{key:o},[e("td",null,[d(e("select",{name:"gyongy",id:"gyongy","onUpdate:modelValue":t[5]||(t[5]=s=>l.pearl_name=s)},[(i(!0),r(f,null,g(n.items,s=>(i(),r("option",{key:s._id,value:s.item_name},p(s.item_name),9,qe))),128))],512),[[b,l.pearl_name]])]),e("td",null,[d(e("input",{"onUpdate:modelValue":t[6]||(t[6]=s=>l.pearl_xs=s),type:"number",min:"0"},null,512),[[a,l.pearl_xs]])]),e("td",null,[d(e("input",{"onUpdate:modelValue":t[7]||(t[7]=s=>l.pearl_s=s),type:"number",min:"0"},null,512),[[a,l.pearl_s]])]),e("td",null,[d(e("input",{"onUpdate:modelValue":t[8]||(t[8]=s=>l.pearl_m=s),type:"number",min:"0"},null,512),[[a,l.pearl_m]])]),e("td",null,[d(e("input",{"onUpdate:modelValue":t[9]||(t[9]=s=>l.pearl_l=s),type:"number",min:"0"},null,512),[[a,l.pearl_l]])]),e("td",null,[d(e("input",{"onUpdate:modelValue":t[10]||(t[10]=s=>l.pearl_xl=s),type:"number",min:"0"},null,512),[[a,l.pearl_xl]])]),e("td",null,[d(e("input",{"onUpdate:modelValue":t[11]||(t[11]=s=>l.pearl_xxl=s),type:"number",min:"0"},null,512),[[a,l.pearl_xxl]])]),e("td",null,[e("button",{onClick:t[12]||(t[12]=s=>_.addPearl())},"Mentés")])]))),128))]),e("div",Qe,[this.pearls_count<1?(i(),r("p",{key:0,class:"add_p",onClick:t[13]||(t[13]=o=>this.pearls_count+=1)}," + gyöngy ")):y("",!0)])])])]),We,e("div",Ye,[e("button",{class:"btn gray",onClick:t[14]||(t[14]=o=>n.moreopen=!n.moreopen)},"Mégse"),e("button",{class:"btn yellow",onClick:t[15]||(t[15]=o=>_.update())},"Módósítás"),Ze])])):y("",!0),e("section",et,[e("table",tt,[ot,e("tbody",null,[(i(!0),r(f,null,g(n.products,o=>(i(),r("tr",{key:o._id},[e("td",null,p(o.prodname),1),e("td",null,p(o.price)+" Ft",1),e("td",null,p(o.collections),1),lt,e("td",{class:"click",onClick:s=>_.more(o._id)},"•••",8,nt)]))),128))])])])],64)}const it=k(ge,[["render",st],["__scopeId","data-v-7ccce65f"]]);const rt={name:"PostFormAxios",data(){return{form:{prod_name:"",prod_price:0},file1:"",api_result:null}},methods:{submitFile(){let l=new FormData;l.append("file",this.file1),m.post("https://egoncompany.hu:444/products/add/boravia/"+this.form.prod_name+"/"+this.form.prod_price,JSON.stringify(this.form),{headers:{"Content-Type":"application/json"}}).then(function(t){console.log(t)}).catch(function(){console.log("FAILURE!!")}),m.post("https://egoncompany.hu:444/products/addimg/boravia/"+this.form.prod_name,l,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){console.log(t)}).catch(function(){console.log("FAILURE!!")}),this.form.prod_name=null,this.form.prod_price=null},handleFileUpload1(){this.file1=this.$refs.file1.files[0]}}},w=l=>(x("data-v-bc8cc16e"),l=l(),U(),l),dt={class:"addprod"},pt={class:"inputs_wrapper"},at={class:"left_inputs"},ut=w(()=>e("label",{for:""},"Neve",-1)),_t=w(()=>e("br",null,null,-1)),ct=w(()=>e("label",{for:""},"Ára",-1)),mt={class:"right_inputs"},ht={class:"file_w"},ft={class:"submit_wrapper"};function vt(l,t,v,h,n,_){return i(),r("section",dt,[e("form",{onSubmit:t[4]||(t[4]=N((...o)=>l.submitForm&&l.submitForm(...o),["prevent"]))},[e("div",pt,[e("div",at,[ut,d(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=o=>n.form.prod_name=o),placeholder:"Termék neve"},null,512),[[a,n.form.prod_name]]),_t,ct,d(e("input",{type:"text",placeholder:"Termék ára","onUpdate:modelValue":t[1]||(t[1]=o=>n.form.prod_price=o)},null,512),[[a,n.form.prod_price]])]),e("div",mt,[e("div",ht,[e("input",{type:"file",id:"file1",ref:"file1",onChange:t[2]||(t[2]=o=>_.handleFileUpload1(o))},null,544)])])]),e("div",ft,[e("input",{type:"submit",value:"Termék mentése",onClick:t[3]||(t[3]=o=>_.submitFile())}),e("h2",null,p(this.api_result),1)])],32)])}const gt=k(rt,[["render",vt],["__scopeId","data-v-bc8cc16e"]]);const V=l=>(x("data-v-d3b9fe05"),l=l(),U(),l),yt=V(()=>e("h1",{class:"title"},"Termékek",-1)),bt={class:"new-wrapper"},kt=V(()=>e("h3",null,"Új termék",-1)),xt=[kt],Ut=V(()=>e("h3",null,"Új Boravia",-1)),Ft=[Ut],wt={data(){return{showAdd:!1,showAddB:!1}}},Vt=Object.assign(wt,{__name:"Products",setup(l){return(t,v)=>(i(),r(f,null,[C(A),yt,e("main",null,[e("section",bt,[e("div",{onClick:v[0]||(v[0]=h=>t.showAdd=!t.showAdd)},xt),e("div",{onClick:v[1]||(v[1]=h=>t.showAddB=!t.showAddB)},Ft)]),t.showAdd?(i(),T(ve,{key:0})):y("",!0),t.showAddB?(i(),T(gt,{key:1})):y("",!0),C(it)])],64))}}),Nt=k(Vt,[["__scopeId","data-v-d3b9fe05"]]);export{Nt as default};
