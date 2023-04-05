import{_ as x,h as _,o as i,c as r,b as e,m as d,s as u,q as b,F as f,f as v,t as p,d as g,z as $,p as F,l as U,g as C,a as S,j as w}from"./index-c3b7cd2d.js";import{H as V}from"./Header-d887cb4b.js";const N={name:"PostFormAxios",data(){return{form:{prod_name:"",prod_collection:"",prod_price:0,prod_description:" ",prod_categ:"",prod_colors:[],prod_pears:[]},file1:"",file2:"",file3:"",collections:[],items:[],pearls_count:0,saved_pearls:[],pearl_name:"",pearl_xs:0,pearl_s:0,pearl_m:0,pearl_l:0,pearl_xl:0,pearl_xxl:0,api_result:null}},methods:{submitFile(){let o=new FormData,t=new FormData,h=new FormData;o.append("file",this.file1),t.append("file",this.file2),h.append("file",this.file3);async function y(n,a,l,s){console.log("id: "+n),_.post("https://elenora.hu:444/products/addimg1/"+n,a,{headers:{"Content-Type":"multipart/form-data"}}).then(function(k){console.log(k),alert("1. kep kesz")}).catch(function(){console.log("FAILURE!!")}),_.post("https://elenora.hu:444/products/addimg2/"+n,l,{headers:{"Content-Type":"multipart/form-data"}}).then(function(k){console.log(k),alert("2. kep kesz")}).catch(function(){console.log("FAILURE!!")}),_.post("https://elenora.hu:444/products/addimg3/"+n,s,{headers:{"Content-Type":"multipart/form-data"}}).then(function(k){console.log(k),alert("3. kep kesz")}).catch(function(){console.log("FAILURE!!")})}_.post("https://elenora.hu:444/products/add/"+this.form.prod_name+"/"+this.form.prod_collection+"/"+this.form.prod_price+"/"+this.form.prod_description+"/"+this.form.prod_categ+"/"+this.form.prod_colors,JSON.stringify(this.saved_pearls),{headers:{"Content-Type":"application/json"}}).then(function(n){y(n.data._id,o,t,h)}).catch(function(){console.log("FAILURE!!")}),this.form.prod_categ=null,this.form.prod_name=null,this.form.prod_price=null,this.form.prod_description=null,this.form.prod_collection=null,this.saved_pearls=[]},handleFileUpload1(){this.file1=this.$refs.file1.files[0]},handleFileUpload2(){this.file2=this.$refs.file2.files[0]},handleFileUpload3(){this.file3=this.$refs.file3.files[0]},addPearl(){this.saved_pearls.push({name:this.pearl_name,xs:this.pearl_xs,s:this.pearl_s,m:this.pearl_m,l:this.pearl_l,xl:this.pearl_xl,xxl:this.pearl_xxl}),this.pearl_name="",this.pearl_xs=0,this.pearl_s=0,this.pearl_m=0,this.pearl_l=0,this.pearl_xl=0,this.pearl_xxl=0},Delete(o){this.saved_pearls.splice(o,1)}},mounted(){_.get("https://elenora.hu:444/collections/getall").then(o=>this.collections=o.data),_.get("https://elenora.hu:444/inventory/getall").then(o=>this.items=o.data)}},c=o=>(F("data-v-864983f5"),o=o(),U(),o),D={class:"addprod"},I={class:"inputs_wrapper"},L={class:"left_inputs"},P=c(()=>e("label",{for:""},"Neve",-1)),z=c(()=>e("br",null,null,-1)),E=c(()=>e("label",{for:""},"Ára",-1)),B=c(()=>e("br",null,null,-1)),K=c(()=>e("label",{for:"kollekcio"},"Kollekció",-1)),R=c(()=>e("option",{disabled:"",selected:""},"Kollekció",-1)),j=["value"],M=c(()=>e("option",{value:"none"},"Nincs",-1)),X=c(()=>e("br",null,null,-1)),O=c(()=>e("label",{for:"Neme"},"Kategória",-1)),J=C('<option disabled selected data-v-864983f5>Termék neme</option><option value="female" data-v-864983f5>Női</option><option value="male" data-v-864983f5>Férfi</option><option value="unisex" data-v-864983f5>Férfi és Női</option><option value="couple" data-v-864983f5>Páros</option><option value="set" data-v-864983f5>Szett</option><option value="aproko" data-v-864983f5>Aprókő</option>',7),G=[J],H=c(()=>e("br",null,null,-1)),q=c(()=>e("label",{for:"colors"},"Színei",-1)),Q=C('<option disabled selected data-v-864983f5>Termék színei</option><option value="white" data-v-864983f5>fehér</option><option value="black" data-v-864983f5>fekete</option><option value="gray" data-v-864983f5>szürke</option><option value="blue" data-v-864983f5>kék</option><option value="red" data-v-864983f5>piros</option><option value="green" data-v-864983f5>zöld</option><option value="brown" data-v-864983f5>barna</option><option value="yellow" data-v-864983f5>sárga</option><option value="purple" data-v-864983f5>lila</option><option value="pink" data-v-864983f5>rózsaszín</option>',11),W=[Q],Y={class:"right_inputs"},Z={class:"pearls_t_w"},ee={class:"pears-t"},te=c(()=>e("tr",null,[e("th",null,"Gyöngy"),e("th",null,"XS"),e("th",null,"S"),e("th",null,"M"),e("th",null,"L"),e("th",null,"XL"),e("th",null,"XXL"),e("th")],-1)),le={style:{"text-align":"center"}},oe={style:{"text-align":"center"}},ne={style:{"text-align":"center"}},se={style:{"text-align":"center"}},ie={style:{"text-align":"center"}},re={style:{"text-align":"center"}},de={style:{"text-align":"center"}},pe=["onClick"],ae=["value"],ue={class:"flex"},_e={class:"file_w"},me={class:"submit_wrapper"};function he(o,t,h,y,n,a){return i(),r("section",D,[e("form",{onSubmit:t[18]||(t[18]=$((...l)=>o.submitForm&&o.submitForm(...l),["prevent"]))},[e("div",I,[e("div",L,[P,d(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=l=>n.form.prod_name=l),placeholder:"Termék neve"},null,512),[[u,n.form.prod_name]]),z,E,d(e("input",{type:"text",placeholder:"Termék ára","onUpdate:modelValue":t[1]||(t[1]=l=>n.form.prod_price=l)},null,512),[[u,n.form.prod_price]]),B,K,d(e("select",{name:"kollekcio",id:"kollekcio","onUpdate:modelValue":t[2]||(t[2]=l=>n.form.prod_collection=l)},[R,(i(!0),r(f,null,v(n.collections,l=>(i(),r("option",{key:l._id,value:l.col_name},p(l.col_name),9,j))),128)),M],512),[[b,n.form.prod_collection]]),X,O,d(e("select",{name:"Neme",id:"Neme","onUpdate:modelValue":t[3]||(t[3]=l=>n.form.prod_categ=l)},G,512),[[b,n.form.prod_categ]]),H,q,d(e("select",{name:"colors",id:"colors",multiple:"","onUpdate:modelValue":t[4]||(t[4]=l=>n.form.prod_colors=l)},W,512),[[b,n.form.prod_colors]])]),e("div",Y,[e("div",Z,[e("table",ee,[te,(i(!0),r(f,null,v(this.saved_pearls,(l,s)=>(i(),r("tr",{key:s},[e("td",le,p(l.name),1),e("td",oe,p(l.xs),1),e("td",ne,p(l.s),1),e("td",se,p(l.m),1),e("td",ie,p(l.l),1),e("td",re,p(l.xl),1),e("td",de,p(l.xxl),1),e("td",null,[e("button",{onClick:k=>a.Delete(s)},"Törlés",8,pe)])]))),128)),(i(!0),r(f,null,v(this.pearls_count,l=>(i(),r("tr",{key:l},[e("td",null,[d(e("select",{name:"gyongy",id:"gyongy","onUpdate:modelValue":t[5]||(t[5]=s=>n.pearl_name=s)},[(i(!0),r(f,null,v(n.items,s=>(i(),r("option",{key:s._id,value:s.item_name},p(s.item_name),9,ae))),128))],512),[[b,n.pearl_name]])]),e("td",null,[d(e("input",{"onUpdate:modelValue":t[6]||(t[6]=s=>n.pearl_xs=s),type:"number",min:"0"},null,512),[[u,n.pearl_xs]])]),e("td",null,[d(e("input",{"onUpdate:modelValue":t[7]||(t[7]=s=>n.pearl_s=s),type:"number",min:"0"},null,512),[[u,n.pearl_s]])]),e("td",null,[d(e("input",{"onUpdate:modelValue":t[8]||(t[8]=s=>n.pearl_m=s),type:"number",min:"0"},null,512),[[u,n.pearl_m]])]),e("td",null,[d(e("input",{"onUpdate:modelValue":t[9]||(t[9]=s=>n.pearl_l=s),type:"number",min:"0"},null,512),[[u,n.pearl_l]])]),e("td",null,[d(e("input",{"onUpdate:modelValue":t[10]||(t[10]=s=>n.pearl_xl=s),type:"number",min:"0"},null,512),[[u,n.pearl_xl]])]),e("td",null,[d(e("input",{"onUpdate:modelValue":t[11]||(t[11]=s=>n.pearl_xxl=s),type:"number",min:"0"},null,512),[[u,n.pearl_xxl]])]),e("td",null,[e("button",{onClick:t[12]||(t[12]=s=>a.addPearl())},"Mentés")])]))),128))]),e("div",ue,[this.pearls_count<1?(i(),r("p",{key:0,class:"add_p",onClick:t[13]||(t[13]=l=>this.pearls_count+=1)}," + gyöngy ")):g("",!0)])]),e("div",_e,[e("input",{type:"file",id:"file1",ref:"file1",onChange:t[14]||(t[14]=l=>a.handleFileUpload1(l))},null,544),e("input",{type:"file",id:"file2",ref:"file2",onChange:t[15]||(t[15]=l=>a.handleFileUpload2(l))},null,544),e("input",{type:"file",id:"file3",ref:"file3",onChange:t[16]||(t[16]=l=>a.handleFileUpload3(l))},null,544)])])]),e("div",me,[e("input",{type:"submit",value:"Termék mentése",onClick:t[17]||(t[17]=l=>a.submitFile())}),e("h2",null,p(this.api_result),1)])],32)])}const ce=x(N,[["render",he],["__scopeId","data-v-864983f5"]]);const fe={name:"GetProducts",data(){return{products:[],form:{prod_name:"",prod_collection:"",prod_price:0,prod_description:" ",prod_categ:"",prod_colors:[],prod_pears:[]},file1:"",file2:"",file3:"",collections:[],items:[],p_prod:[],pearls_count:1,moreopen:!1,imgurl:"https://elenora.hu:444/getimage/"}},mounted(){_.get("https://elenora.hu:444/collections/getall").then(o=>this.collections=o.data),_.get("https://elenora.hu:444/inventory/getall").then(o=>this.items=o.data),_.get("https://elenora.hu:444/products/getall").then(o=>this.products=o.data.products)},methods:{more(o){console.log(o),this.moreopen=!0,_.get("https://elenora.hu:444/products/getbyid/"+o).then(t=>this.p_prod=t.data.product)},update(){_.post("https://elenora.hu:444/products/update/",JSON.stringify(this.p_prod),{headers:{"Content-Type":"application/json"}}).then(function(o){console.log(o),alert("Sikeres termék módosítás!")}).catch(function(){console.log("FAILURE!!")}),this.moreopen=!1},Delete(o){this.p_prod.pearls.splice(o,1)},addPearl(){this.p_prod.pearls.push({name:this.pearl_name,xs:this.pearl_xs,s:this.pearl_s,m:this.pearl_m,l:this.pearl_l,xl:this.pearl_xl,xxl:this.pearl_xxl}),this.pearl_name="",this.pearl_xs=0,this.pearl_s=0,this.pearl_m=0,this.pearl_l=0,this.pearl_xl=0,this.pearl_xxl=0},handleFileUpload1(){this.file1=this.$refs.file1.files[0];let o=new FormData;o.append("file",this.file1),_.post("https://elenora.hu:444/products/addimg1/"+this.p_prod._id,o,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){console.log(t),alert("Sikeres kép módosítás!")}).catch(function(){console.log("FAILURE!!")})},handleFileUpload2(){this.file2=this.$refs.file2.files[0];let o=new FormData;o.append("file",this.file2),_.post("https://elenora.hu:444/products/addimg2/"+this.p_prod._id,o,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){console.log(t),alert("Sikeres kép módosítás!")}).catch(function(){console.log("FAILURE!!")})},handleFileUpload3(){this.file3=this.$refs.file3.files[0];let o=new FormData;o.append("file",this.file3),_.post("https://elenora.hu:444/products/addimg3/"+this.p_prod._id,o,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){console.log(t),alert("Sikeres kép módosítás!")}).catch(function(){console.log("FAILURE!!")})},Deleteproduct(){confirm("Biztos torolod a termeket? Ez nem vonhato vissza!")&&_.get("https://elenora.hu:444/products/delete/"+this.p_prod._id)}}},m=o=>(F("data-v-4e0bc22f"),o=o(),U(),o),ve={key:0,class:"prodmore"},ge=m(()=>e("h1",null,"Termék módosítása",-1)),ye=m(()=>e("label",{for:""},"Neve",-1)),ke=m(()=>e("br",null,null,-1)),be=m(()=>e("label",{for:"kollekcio"},"Kollekció",-1)),xe=m(()=>e("option",{disabled:"",selected:""},"Kollekció",-1)),Fe=["value"],Ue=m(()=>e("option",{value:"none"},"Nincs",-1)),we=m(()=>e("br",null,null,-1)),$e=m(()=>e("label",{for:""},"Ára",-1)),Ce=m(()=>e("br",null,null,-1)),Ae=m(()=>e("label",{for:"Neme"},"Kategória",-1)),Te=C('<option disabled selected data-v-4e0bc22f>Termék neme</option><option value="female" data-v-4e0bc22f>Női</option><option value="male" data-v-4e0bc22f>Férfi</option><option value="unisex" data-v-4e0bc22f>Férfi és Női</option><option value="couple" data-v-4e0bc22f>Páros</option><option value="set" data-v-4e0bc22f>Szett</option><option value="aproko" data-v-4e0bc22f>Aprókő</option>',7),Se=[Te],Ve={class:"pearls_t_w"},Ne={class:"pears-t"},De=m(()=>e("tr",null,[e("th",null,"Gyöngy"),e("th",null,"XS"),e("th",null,"S"),e("th",null,"M"),e("th",null,"L"),e("th",null,"XL"),e("th",null,"XXL"),e("th")],-1)),Ie={style:{"text-align":"center"}},Le={style:{"text-align":"center"}},Pe={style:{"text-align":"center"}},ze={style:{"text-align":"center"}},Ee={style:{"text-align":"center"}},Be={style:{"text-align":"center"}},Ke={style:{"text-align":"center"}},Re=["onClick"],je=["value"],Me={class:"flex"},Xe={class:"updateimg_b"},Oe=["src"],Je={class:"updateimg_b"},Ge=["src"],He={class:"updateimg_b"},qe=["src"],Qe=m(()=>e("br",null,null,-1)),We={class:"btn_w"},Ye={class:"listprod"},Ze={cellspacing:"0",cellpadding:"0"},et=m(()=>e("thead",null,[e("tr",null,[e("th",null,"Neve"),e("th",null,"Ára"),e("th",null,"Kolekció"),e("th",null,"Eladott"),e("th")])],-1)),tt=m(()=>e("td",null,"0",-1)),lt=["onClick"];function ot(o,t,h,y,n,a){return i(),r(f,null,[this.moreopen?(i(),r("section",ve,[ge,e("div",null,[e("div",null,[ye,d(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=l=>this.p_prod.prodname=l),placeholder:"Termék neve"},null,512),[[u,this.p_prod.prodname]]),ke,be,d(e("select",{name:"kollekcio",id:"kollekcio","onUpdate:modelValue":t[1]||(t[1]=l=>this.p_prod.collections=l)},[xe,(i(!0),r(f,null,v(n.collections,l=>(i(),r("option",{key:l._id,value:l.col_name},p(l.col_name),9,Fe))),128)),Ue],512),[[b,this.p_prod.collections]]),we,$e,d(e("input",{type:"text",placeholder:"Termék ára","onUpdate:modelValue":t[2]||(t[2]=l=>this.p_prod.price=l)},null,512),[[u,this.p_prod.price]]),Ce,Ae,d(e("select",{name:"Neme",id:"Neme","onUpdate:modelValue":t[3]||(t[3]=l=>this.p_prod.categ=l)},Se,512),[[b,this.p_prod.categ]]),e("div",Ve,[e("table",Ne,[De,(i(!0),r(f,null,v(this.p_prod.pearls,(l,s)=>(i(),r("tr",{key:s},[e("td",Ie,p(l.name),1),e("td",Le,p(l.xs),1),e("td",Pe,p(l.s),1),e("td",ze,p(l.m),1),e("td",Ee,p(l.l),1),e("td",Be,p(l.xl),1),e("td",Ke,p(l.xxl),1),e("td",null,[e("button",{onClick:k=>a.Delete(s)},"Törlés",8,Re)])]))),128)),(i(!0),r(f,null,v(this.pearls_count,l=>(i(),r("tr",{key:l},[e("td",null,[d(e("select",{name:"gyongy",id:"gyongy","onUpdate:modelValue":t[4]||(t[4]=s=>o.pearl_name=s)},[(i(!0),r(f,null,v(n.items,s=>(i(),r("option",{key:s._id,value:s.item_name},p(s.item_name),9,je))),128))],512),[[b,o.pearl_name]])]),e("td",null,[d(e("input",{"onUpdate:modelValue":t[5]||(t[5]=s=>o.pearl_xs=s),type:"number",min:"0"},null,512),[[u,o.pearl_xs]])]),e("td",null,[d(e("input",{"onUpdate:modelValue":t[6]||(t[6]=s=>o.pearl_s=s),type:"number",min:"0"},null,512),[[u,o.pearl_s]])]),e("td",null,[d(e("input",{"onUpdate:modelValue":t[7]||(t[7]=s=>o.pearl_m=s),type:"number",min:"0"},null,512),[[u,o.pearl_m]])]),e("td",null,[d(e("input",{"onUpdate:modelValue":t[8]||(t[8]=s=>o.pearl_l=s),type:"number",min:"0"},null,512),[[u,o.pearl_l]])]),e("td",null,[d(e("input",{"onUpdate:modelValue":t[9]||(t[9]=s=>o.pearl_xl=s),type:"number",min:"0"},null,512),[[u,o.pearl_xl]])]),e("td",null,[d(e("input",{"onUpdate:modelValue":t[10]||(t[10]=s=>o.pearl_xxl=s),type:"number",min:"0"},null,512),[[u,o.pearl_xxl]])]),e("td",null,[e("button",{onClick:t[11]||(t[11]=s=>a.addPearl())},"Mentés")])]))),128))]),e("div",Me,[this.pearls_count<1?(i(),r("p",{key:0,class:"add_p",onClick:t[12]||(t[12]=l=>this.pearls_count+=1)}," + gyöngy ")):g("",!0)])]),e("div",null,[e("div",Xe,[e("input",{type:"file",id:"file1",ref:"file1",onChange:t[13]||(t[13]=l=>a.handleFileUpload1())},null,544),n.p_prod.image?(i(),r("img",{key:0,class:"prodimg",src:n.imgurl+n.p_prod.image},null,8,Oe)):g("",!0)]),e("div",Je,[e("input",{type:"file",id:"file2",ref:"file2",onChange:t[14]||(t[14]=l=>a.handleFileUpload2())},null,544),n.p_prod.image2?(i(),r("img",{key:0,class:"prodimg",src:n.imgurl+n.p_prod.image2},null,8,Ge)):g("",!0)]),e("div",He,[e("input",{type:"file",id:"file3",ref:"file3",onChange:t[15]||(t[15]=l=>a.handleFileUpload3())},null,544),n.p_prod.image3?(i(),r("img",{key:0,class:"prodimg",src:n.imgurl+n.p_prod.image3},null,8,qe)):g("",!0)])])])]),Qe,e("div",We,[e("button",{class:"btn gray",onClick:t[16]||(t[16]=l=>n.moreopen=!n.moreopen)},"Mégse"),e("button",{class:"btn yellow",onClick:t[17]||(t[17]=l=>a.update())},"Módósítás"),e("button",{class:"btn red",onClick:t[18]||(t[18]=l=>a.Deleteproduct())},"Törlés")])])):g("",!0),e("section",Ye,[e("table",Ze,[et,e("tbody",null,[(i(!0),r(f,null,v(n.products,l=>(i(),r("tr",{key:l._id},[e("td",null,p(l.prodname),1),e("td",null,p(l.price)+" Ft",1),e("td",null,p(l.collections),1),tt,e("td",{class:"click",onClick:s=>a.more(l._id)},"•••",8,lt)]))),128))])])])],64)}const nt=x(fe,[["render",ot],["__scopeId","data-v-4e0bc22f"]]);const st={name:"PostFormAxios",data(){return{form:{prod_name:"",prod_price:0},file1:"",api_result:null}},methods:{submitFile(){let o=new FormData;o.append("file",this.file1),_.post("https://elenora.hu:444/products/add/boravia/"+this.form.prod_name+"/"+this.form.prod_price,JSON.stringify(this.form),{headers:{"Content-Type":"application/json"}}).then(function(t){console.log(t)}).catch(function(){console.log("FAILURE!!")}),_.post("https://elenora.hu:444/products/addimg/boravia/"+this.form.prod_name,o,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){console.log(t),alert("Sikeres Boravia termék mentés!")}).catch(function(){console.log("FAILURE!!")}),this.form.prod_name=null,this.form.prod_price=null},handleFileUpload1(){this.file1=this.$refs.file1.files[0]}}},A=o=>(F("data-v-643f0794"),o=o(),U(),o),it={class:"addprod"},rt={class:"inputs_wrapper"},dt={class:"left_inputs"},pt=A(()=>e("label",{for:""},"Neve",-1)),at=A(()=>e("br",null,null,-1)),ut=A(()=>e("label",{for:""},"Ára",-1)),_t={class:"right_inputs"},mt={class:"file_w"},ht={class:"submit_wrapper"};function ct(o,t,h,y,n,a){return i(),r("section",it,[e("form",{onSubmit:t[4]||(t[4]=$((...l)=>o.submitForm&&o.submitForm(...l),["prevent"]))},[e("div",rt,[e("div",dt,[pt,d(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=l=>n.form.prod_name=l),placeholder:"Termék neve"},null,512),[[u,n.form.prod_name]]),at,ut,d(e("input",{type:"text",placeholder:"Termék ára","onUpdate:modelValue":t[1]||(t[1]=l=>n.form.prod_price=l)},null,512),[[u,n.form.prod_price]])]),e("div",_t,[e("div",mt,[e("input",{type:"file",id:"file1",ref:"file1",onChange:t[2]||(t[2]=l=>a.handleFileUpload1(l))},null,544)])])]),e("div",ht,[e("input",{type:"submit",value:"Termék mentése",onClick:t[3]||(t[3]=l=>a.submitFile())}),e("h2",null,p(this.api_result),1)])],32)])}const ft=x(st,[["render",ct],["__scopeId","data-v-643f0794"]]);const vt={name:"PostFormAxios",data(){return{form:{prod_name:"",prod_price:0},file1:"",api_result:null}},methods:{submitFile(){let o=new FormData;o.append("file",this.file1),_.post("https://elenora.hu:444/products/add/stone/"+this.form.prod_name+"/"+this.form.prod_price,JSON.stringify(this.form),{headers:{"Content-Type":"application/json"}}).then(function(t){console.log(t)}).catch(function(){console.log("FAILURE!!")}),_.post("https://elenora.hu:444/products/addimg/stone/"+this.form.prod_name,o,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){console.log(t),alert("Sikeres Kavics termék mentés!")}).catch(function(){console.log("FAILURE!!")}),this.form.prod_name=null,this.form.prod_price=null},handleFileUpload1(){this.file1=this.$refs.file1.files[0]}}},T=o=>(F("data-v-00f91051"),o=o(),U(),o),gt={class:"addprod"},yt={class:"inputs_wrapper"},kt={class:"left_inputs"},bt=T(()=>e("label",{for:""},"Neve",-1)),xt=T(()=>e("br",null,null,-1)),Ft=T(()=>e("label",{for:""},"Ára",-1)),Ut={class:"right_inputs"},wt={class:"file_w"},$t={class:"submit_wrapper"};function Ct(o,t,h,y,n,a){return i(),r("section",gt,[e("form",{onSubmit:t[4]||(t[4]=$((...l)=>o.submitForm&&o.submitForm(...l),["prevent"]))},[e("div",yt,[e("div",kt,[bt,d(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=l=>n.form.prod_name=l),placeholder:"Termék neve"},null,512),[[u,n.form.prod_name]]),xt,Ft,d(e("input",{type:"text",placeholder:"Termék ára","onUpdate:modelValue":t[1]||(t[1]=l=>n.form.prod_price=l)},null,512),[[u,n.form.prod_price]])]),e("div",Ut,[e("div",wt,[e("input",{type:"file",id:"file1",ref:"file1",onChange:t[2]||(t[2]=l=>a.handleFileUpload1(l))},null,544)])])]),e("div",$t,[e("input",{type:"submit",value:"Termék mentése",onClick:t[3]||(t[3]=l=>a.submitFile())}),e("h2",null,p(this.api_result),1)])],32)])}const At=x(vt,[["render",Ct],["__scopeId","data-v-00f91051"]]);const Tt=e("h1",{class:"title"},"Termékek",-1),St={class:"new-wrapper"},Vt=e("h3",null,"Új termék",-1),Nt=[Vt],Dt=e("h3",null,"Új Boravia",-1),It=[Dt],Lt=e("h3",null,"Új kavics",-1),Pt=[Lt],zt={data(){return{showAdd:!1,showAddB:!1,showAddK:!1}}},Kt=Object.assign(zt,{__name:"Products",setup(o){return(t,h)=>(i(),r(f,null,[S(V),Tt,e("main",null,[e("section",St,[e("div",{onClick:h[0]||(h[0]=y=>t.showAdd=!t.showAdd)},Nt),e("div",{onClick:h[1]||(h[1]=y=>t.showAddB=!t.showAddB)},It),e("div",{onClick:h[2]||(h[2]=y=>t.showAddK=!t.showAddK)},Pt)]),t.showAdd?(i(),w(ce,{key:0})):g("",!0),t.showAddB?(i(),w(ft,{key:1})):g("",!0),t.showAddK?(i(),w(At,{key:2})):g("",!0),S(nt)])],64))}});export{Kt as default};
