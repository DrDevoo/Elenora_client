import{_ as b,h as _,o as i,c as r,b as e,k as d,l as a,v as k,F as f,f as v,t as p,d as y,q as $,p as x,m as U,g as F,a as V,i as T}from"./index-9e502439.js";import{H as A}from"./Header-f4078658.js";const N={name:"PostFormAxios",data(){return{form:{prod_name:"",prod_collection:"",prod_price:0,prod_description:"",prod_categ:"",prod_colors:[],prod_pears:[]},file1:"",file2:"",file3:"",collections:[],items:[],pearls_count:0,saved_pearls:[],pearl_name:"",pearl_xs:0,pearl_s:0,pearl_m:0,pearl_l:0,pearl_xl:0,pearl_xxl:0,api_result:null}},methods:{submitFile(){let l=new FormData,t=new FormData,g=new FormData;l.append("file",this.file1),t.append("file",this.file2),g.append("file",this.file3),_.post("https://egoncompany.hu:444/products/add/"+this.form.prod_name+"/"+this.form.prod_collection+"/"+this.form.prod_price+"/"+this.form.prod_description+"/"+this.form.prod_categ+"/"+this.form.prod_colors,JSON.stringify(this.saved_pearls),{headers:{"Content-Type":"application/json"}}).then(function(h){console.log(h),alert("Sikeres termék mentés!")}).catch(function(){console.log("FAILURE!!")}),_.post("https://egoncompany.hu:444/products/addimg1/"+this.form.prod_name,l,{headers:{"Content-Type":"multipart/form-data"}}).then(function(h){console.log(h)}).catch(function(){console.log("FAILURE!!")}),_.post("https://egoncompany.hu:444/products/addimg2/"+this.form.prod_name,t,{headers:{"Content-Type":"multipart/form-data"}}).then(function(h){console.log(h)}).catch(function(){console.log("FAILURE!!")}),_.post("https://egoncompany.hu:444/products/addimg3/"+this.form.prod_name,g,{headers:{"Content-Type":"multipart/form-data"}}).then(function(h){console.log(h)}).catch(function(){console.log("FAILURE!!")}),this.form.prod_categ=null,this.form.prod_name=null,this.form.prod_price=null,this.form.prod_description=null,this.form.prod_collection=null,this.saved_pearls=[]},handleFileUpload1(){this.file1=this.$refs.file1.files[0]},handleFileUpload2(){this.file2=this.$refs.file2.files[0]},handleFileUpload3(){this.file3=this.$refs.file3.files[0]},addPearl(){this.saved_pearls.push({name:this.pearl_name,xs:this.pearl_xs,s:this.pearl_s,m:this.pearl_m,l:this.pearl_l,xl:this.pearl_xl,xxl:this.pearl_xxl}),this.pearl_name="",this.pearl_xs=0,this.pearl_s=0,this.pearl_m=0,this.pearl_l=0,this.pearl_xl=0,this.pearl_xxl=0},Delete(l){this.saved_pearls.splice(l,1)}},mounted(){_.get("https://egoncompany.hu:444/collections/getall").then(l=>this.collections=l.data),_.get("https://egoncompany.hu:444/inventory/getall").then(l=>this.items=l.data)}},c=l=>(x("data-v-85d766dc"),l=l(),U(),l),D={class:"addprod"},L={class:"inputs_wrapper"},I={class:"left_inputs"},P=c(()=>e("label",{for:""},"Neve",-1)),B=c(()=>e("br",null,null,-1)),E=c(()=>e("label",{for:""},"Ára",-1)),z=c(()=>e("br",null,null,-1)),R=c(()=>e("label",{for:""},"Leírása",-1)),M=c(()=>e("br",null,null,-1)),X=c(()=>e("label",{for:"kollekcio"},"Kollekció",-1)),K=c(()=>e("option",{disabled:"",selected:""},"Kollekció",-1)),j=["value"],O=c(()=>e("option",{value:"none"},"Nincs",-1)),G=c(()=>e("br",null,null,-1)),J=c(()=>e("label",{for:"Neme"},"Kategória",-1)),H=F('<option disabled selected data-v-85d766dc>Termék neme</option><option value="female" data-v-85d766dc>Női</option><option value="male" data-v-85d766dc>Férfi</option><option value="unisex" data-v-85d766dc>Férfi és Női</option><option value="couple" data-v-85d766dc>Páros</option><option value="set" data-v-85d766dc>Szett</option>',6),q=[H],Q=c(()=>e("br",null,null,-1)),W=c(()=>e("label",{for:"colors"},"Színei",-1)),Y=F('<option disabled selected data-v-85d766dc>Termék színei</option><option value="white" data-v-85d766dc>fehér</option><option value="black" data-v-85d766dc>fekete</option><option value="gray" data-v-85d766dc>szürke</option><option value="blue" data-v-85d766dc>kék</option><option value="red" data-v-85d766dc>piros</option><option value="green" data-v-85d766dc>zöld</option><option value="brown" data-v-85d766dc>barna</option><option value="yellow" data-v-85d766dc>sárga</option><option value="purple" data-v-85d766dc>lila</option><option value="pink" data-v-85d766dc>rózsaszín</option>',11),Z=[Y],ee={class:"right_inputs"},te={class:"pearls_t_w"},oe={class:"pears-t"},le=c(()=>e("tr",null,[e("th",null,"Gyöngy"),e("th",null,"XS"),e("th",null,"S"),e("th",null,"M"),e("th",null,"L"),e("th",null,"XL"),e("th",null,"XXL"),e("th")],-1)),ne={style:{"text-align":"center"}},se={style:{"text-align":"center"}},ie={style:{"text-align":"center"}},re={style:{"text-align":"center"}},de={style:{"text-align":"center"}},pe={style:{"text-align":"center"}},ae={style:{"text-align":"center"}},ue=["onClick"],_e=["value"],me={class:"flex"},ce={class:"file_w"},he={class:"submit_wrapper"};function fe(l,t,g,h,n,u){return i(),r("section",D,[e("form",{onSubmit:t[19]||(t[19]=$((...o)=>l.submitForm&&l.submitForm(...o),["prevent"]))},[e("div",L,[e("div",I,[P,d(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=o=>n.form.prod_name=o),placeholder:"Termék neve"},null,512),[[a,n.form.prod_name]]),B,E,d(e("input",{type:"text",placeholder:"Termék ára","onUpdate:modelValue":t[1]||(t[1]=o=>n.form.prod_price=o)},null,512),[[a,n.form.prod_price]]),z,R,d(e("textarea",{"onUpdate:modelValue":t[2]||(t[2]=o=>n.form.prod_description=o),placeholder:"Termék leírása",cols:"30",rows:"4"},null,512),[[a,n.form.prod_description]]),M,X,d(e("select",{name:"kollekcio",id:"kollekcio","onUpdate:modelValue":t[3]||(t[3]=o=>n.form.prod_collection=o)},[K,(i(!0),r(f,null,v(n.collections,o=>(i(),r("option",{key:o._id,value:o.col_name},p(o.col_name),9,j))),128)),O],512),[[k,n.form.prod_collection]]),G,J,d(e("select",{name:"Neme",id:"Neme","onUpdate:modelValue":t[4]||(t[4]=o=>n.form.prod_categ=o)},q,512),[[k,n.form.prod_categ]]),Q,W,d(e("select",{name:"colors",id:"colors",multiple:"","onUpdate:modelValue":t[5]||(t[5]=o=>n.form.prod_colors=o)},Z,512),[[k,n.form.prod_colors]])]),e("div",ee,[e("div",te,[e("table",oe,[le,(i(!0),r(f,null,v(this.saved_pearls,(o,s)=>(i(),r("tr",{key:s},[e("td",ne,p(o.name),1),e("td",se,p(o.xs),1),e("td",ie,p(o.s),1),e("td",re,p(o.m),1),e("td",de,p(o.l),1),e("td",pe,p(o.xl),1),e("td",ae,p(o.xxl),1),e("td",null,[e("button",{onClick:S=>u.Delete(s)},"Törlés",8,ue)])]))),128)),(i(!0),r(f,null,v(this.pearls_count,o=>(i(),r("tr",{key:o},[e("td",null,[d(e("select",{name:"gyongy",id:"gyongy","onUpdate:modelValue":t[6]||(t[6]=s=>n.pearl_name=s)},[(i(!0),r(f,null,v(n.items,s=>(i(),r("option",{key:s._id,value:s.item_name},p(s.item_name),9,_e))),128))],512),[[k,n.pearl_name]])]),e("td",null,[d(e("input",{"onUpdate:modelValue":t[7]||(t[7]=s=>n.pearl_xs=s),type:"number",min:"0"},null,512),[[a,n.pearl_xs]])]),e("td",null,[d(e("input",{"onUpdate:modelValue":t[8]||(t[8]=s=>n.pearl_s=s),type:"number",min:"0"},null,512),[[a,n.pearl_s]])]),e("td",null,[d(e("input",{"onUpdate:modelValue":t[9]||(t[9]=s=>n.pearl_m=s),type:"number",min:"0"},null,512),[[a,n.pearl_m]])]),e("td",null,[d(e("input",{"onUpdate:modelValue":t[10]||(t[10]=s=>n.pearl_l=s),type:"number",min:"0"},null,512),[[a,n.pearl_l]])]),e("td",null,[d(e("input",{"onUpdate:modelValue":t[11]||(t[11]=s=>n.pearl_xl=s),type:"number",min:"0"},null,512),[[a,n.pearl_xl]])]),e("td",null,[d(e("input",{"onUpdate:modelValue":t[12]||(t[12]=s=>n.pearl_xxl=s),type:"number",min:"0"},null,512),[[a,n.pearl_xxl]])]),e("td",null,[e("button",{onClick:t[13]||(t[13]=s=>u.addPearl())},"Mentés")])]))),128))]),e("div",me,[this.pearls_count<1?(i(),r("p",{key:0,class:"add_p",onClick:t[14]||(t[14]=o=>this.pearls_count+=1)}," + gyöngy ")):y("",!0)])]),e("div",ce,[e("input",{type:"file",id:"file1",ref:"file1",onChange:t[15]||(t[15]=o=>u.handleFileUpload1(o))},null,544),e("input",{type:"file",id:"file2",ref:"file2",onChange:t[16]||(t[16]=o=>u.handleFileUpload2(o))},null,544),e("input",{type:"file",id:"file3",ref:"file3",onChange:t[17]||(t[17]=o=>u.handleFileUpload3(o))},null,544)])])]),e("div",he,[e("input",{type:"submit",value:"Termék mentése",onClick:t[18]||(t[18]=o=>u.submitFile())}),e("h2",null,p(this.api_result),1)])],32)])}const ge=b(N,[["render",fe],["__scopeId","data-v-85d766dc"]]);const ve={name:"GetProducts",data(){return{products:[],form:{prod_name:"",prod_collection:"",prod_price:0,prod_description:"",prod_categ:"",prod_colors:[],prod_pears:[]},file:"",collections:[],items:[],p_prod:[],pearls_count:1,moreopen:!1,imgurl:"https://egoncompany.hu:444/getimage/"}},mounted(){_.get("https://egoncompany.hu:444/collections/getall").then(l=>this.collections=l.data),_.get("https://egoncompany.hu:444/inventory/getall").then(l=>this.items=l.data),_.get("https://egoncompany.hu:444/products/getall").then(l=>this.products=l.data.products)},methods:{more(l){this.p_prod=null,this.moreopen=!0,_.get("https://egoncompany.hu:444/products/getbyid/"+l).then(t=>this.p_prod=t.data)},update(){_.post("https://egoncompany.hu:444/products/update/",JSON.stringify(this.p_prod),{headers:{"Content-Type":"application/json"}}).then(function(l){console.log(l),alert("Sikeres termék módosítás!")}).catch(function(){console.log("FAILURE!!")}),this.moreopen=!1},Delete(l){this.p_prod.pearls.splice(l,1)},addPearl(){this.p_prod.pearls.push({name:this.pearl_name,xs:this.pearl_xs,s:this.pearl_s,m:this.pearl_m,l:this.pearl_l,xl:this.pearl_xl,xxl:this.pearl_xxl}),this.pearl_name="",this.pearl_xs=0,this.pearl_s=0,this.pearl_m=0,this.pearl_l=0,this.pearl_xl=0,this.pearl_xxl=0},handleFileUpload1(){this.file=this.$refs.file1.files[0];let l=new FormData;l.append("file",this.file),_.post("https://egoncompany.hu:444/products/addimg1/"+this.p_prod.prodname,l,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){console.log(t),alert("Sikeres kép módosítás!")}).catch(function(){console.log("FAILURE!!")})},handleFileUpload2(){this.file=this.$refs.file2.files[0];let l=new FormData;l.append("file",this.file),_.post("https://egoncompany.hu:444/products/addimg2/"+this.p_prod.prodname,l,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){console.log(t),alert("Sikeres kép módosítás!")}).catch(function(){console.log("FAILURE!!")})},handleFileUpload3(){this.file=this.$refs.file3.files[0];let l=new FormData;l.append("file",this.file),_.post("https://egoncompany.hu:444/products/addimg3/"+this.p_prod.prodname,l,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){console.log(t),alert("Sikeres kép módosítás!")}).catch(function(){console.log("FAILURE!!")})},Deleteproduct(){confirm("Biztos torolod a termeket? Ez nem vonhato vissza!")&&_.get("https://egoncompany.hu:444/products/delete/"+this.p_prod._id)}}},m=l=>(x("data-v-cfa6dd94"),l=l(),U(),l),ye={key:0,class:"prodmore"},ke=m(()=>e("h1",null,"Termék módosítása",-1)),be=m(()=>e("label",{for:""},"Neve",-1)),xe=m(()=>e("br",null,null,-1)),Ue=m(()=>e("label",{for:"kollekcio"},"Kollekció",-1)),Fe=m(()=>e("option",{disabled:"",selected:""},"Kollekció",-1)),we=["value"],Ce=m(()=>e("option",{value:"none"},"Nincs",-1)),Ve=m(()=>e("br",null,null,-1)),Te=m(()=>e("label",{for:""},"Ára",-1)),$e=m(()=>e("br",null,null,-1)),Se=m(()=>e("label",{for:""},"Leírása",-1)),Ae=m(()=>e("br",null,null,-1)),Ne=m(()=>e("label",{for:"Neme"},"Kategória",-1)),De=F('<option disabled selected data-v-cfa6dd94>Termék neme</option><option value="female" data-v-cfa6dd94>Női</option><option value="male" data-v-cfa6dd94>Férfi</option><option value="unisex" data-v-cfa6dd94>Férfi és Női</option><option value="couple" data-v-cfa6dd94>Páros</option>',5),Le=[De],Ie={class:"pearls_t_w"},Pe={class:"pears-t"},Be=m(()=>e("tr",null,[e("th",null,"Gyöngy"),e("th",null,"XS"),e("th",null,"S"),e("th",null,"M"),e("th",null,"L"),e("th",null,"XL"),e("th",null,"XXL"),e("th")],-1)),Ee={style:{"text-align":"center"}},ze={style:{"text-align":"center"}},Re={style:{"text-align":"center"}},Me={style:{"text-align":"center"}},Xe={style:{"text-align":"center"}},Ke={style:{"text-align":"center"}},je={style:{"text-align":"center"}},Oe=["onClick"],Ge=["value"],Je={class:"flex"},He={class:"updateimg_b"},qe=["src"],Qe={class:"updateimg_b"},We=["src"],Ye={class:"updateimg_b"},Ze=["src"],et=m(()=>e("br",null,null,-1)),tt={class:"btn_w"},ot={class:"listprod"},lt={cellspacing:"0",cellpadding:"0"},nt=m(()=>e("thead",null,[e("tr",null,[e("th",null,"Neve"),e("th",null,"Ára"),e("th",null,"Kolekció"),e("th",null,"Eladott"),e("th")])],-1)),st=m(()=>e("td",null,"0",-1)),it=["onClick"];function rt(l,t,g,h,n,u){return i(),r(f,null,[this.moreopen?(i(),r("section",ye,[ke,e("div",null,[e("div",null,[be,d(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=o=>this.p_prod.prodname=o),placeholder:"Termék neve"},null,512),[[a,this.p_prod.prodname]]),xe,Ue,d(e("select",{name:"kollekcio",id:"kollekcio","onUpdate:modelValue":t[1]||(t[1]=o=>this.p_prod.collections=o)},[Fe,(i(!0),r(f,null,v(n.collections,o=>(i(),r("option",{key:o._id,value:o.col_name},p(o.col_name),9,we))),128)),Ce],512),[[k,this.p_prod.collections]]),Ve,Te,d(e("input",{type:"text",placeholder:"Termék ára","onUpdate:modelValue":t[2]||(t[2]=o=>this.p_prod.price=o)},null,512),[[a,this.p_prod.price]]),$e,Se,d(e("textarea",{"onUpdate:modelValue":t[3]||(t[3]=o=>this.p_prod.description=o),placeholder:"Termék leírása",cols:"30",rows:"4"},null,512),[[a,this.p_prod.description]]),Ae,Ne,d(e("select",{name:"Neme",id:"Neme","onUpdate:modelValue":t[4]||(t[4]=o=>this.p_prod.categ=o)},Le,512),[[k,this.p_prod.categ]]),e("div",Ie,[e("table",Pe,[Be,(i(!0),r(f,null,v(this.p_prod.pearls,(o,s)=>(i(),r("tr",{key:s},[e("td",Ee,p(o.name),1),e("td",ze,p(o.xs),1),e("td",Re,p(o.s),1),e("td",Me,p(o.m),1),e("td",Xe,p(o.l),1),e("td",Ke,p(o.xl),1),e("td",je,p(o.xxl),1),e("td",null,[e("button",{onClick:S=>u.Delete(s)},"Törlés",8,Oe)])]))),128)),(i(!0),r(f,null,v(this.pearls_count,o=>(i(),r("tr",{key:o},[e("td",null,[d(e("select",{name:"gyongy",id:"gyongy","onUpdate:modelValue":t[5]||(t[5]=s=>l.pearl_name=s)},[(i(!0),r(f,null,v(n.items,s=>(i(),r("option",{key:s._id,value:s.item_name},p(s.item_name),9,Ge))),128))],512),[[k,l.pearl_name]])]),e("td",null,[d(e("input",{"onUpdate:modelValue":t[6]||(t[6]=s=>l.pearl_xs=s),type:"number",min:"0"},null,512),[[a,l.pearl_xs]])]),e("td",null,[d(e("input",{"onUpdate:modelValue":t[7]||(t[7]=s=>l.pearl_s=s),type:"number",min:"0"},null,512),[[a,l.pearl_s]])]),e("td",null,[d(e("input",{"onUpdate:modelValue":t[8]||(t[8]=s=>l.pearl_m=s),type:"number",min:"0"},null,512),[[a,l.pearl_m]])]),e("td",null,[d(e("input",{"onUpdate:modelValue":t[9]||(t[9]=s=>l.pearl_l=s),type:"number",min:"0"},null,512),[[a,l.pearl_l]])]),e("td",null,[d(e("input",{"onUpdate:modelValue":t[10]||(t[10]=s=>l.pearl_xl=s),type:"number",min:"0"},null,512),[[a,l.pearl_xl]])]),e("td",null,[d(e("input",{"onUpdate:modelValue":t[11]||(t[11]=s=>l.pearl_xxl=s),type:"number",min:"0"},null,512),[[a,l.pearl_xxl]])]),e("td",null,[e("button",{onClick:t[12]||(t[12]=s=>u.addPearl())},"Mentés")])]))),128))]),e("div",Je,[this.pearls_count<1?(i(),r("p",{key:0,class:"add_p",onClick:t[13]||(t[13]=o=>this.pearls_count+=1)}," + gyöngy ")):y("",!0)])]),e("div",null,[e("div",He,[e("input",{type:"file",id:"file1",ref:"file1",onChange:t[14]||(t[14]=o=>u.handleFileUpload1())},null,544),n.p_prod.image?(i(),r("img",{key:0,class:"prodimg",src:n.imgurl+n.p_prod.image},null,8,qe)):y("",!0)]),e("div",Qe,[e("input",{type:"file",id:"file2",ref:"file2",onChange:t[15]||(t[15]=o=>u.handleFileUpload2())},null,544),n.p_prod.image2?(i(),r("img",{key:0,class:"prodimg",src:n.imgurl+n.p_prod.image2},null,8,We)):y("",!0)]),e("div",Ye,[e("input",{type:"file",id:"file3",ref:"file3",onChange:t[16]||(t[16]=o=>u.handleFileUpload3())},null,544),n.p_prod.image3?(i(),r("img",{key:0,class:"prodimg",src:n.imgurl+n.p_prod.image3},null,8,Ze)):y("",!0)])])])]),et,e("div",tt,[e("button",{class:"btn gray",onClick:t[17]||(t[17]=o=>n.moreopen=!n.moreopen)},"Mégse"),e("button",{class:"btn yellow",onClick:t[18]||(t[18]=o=>u.update())},"Módósítás"),e("button",{class:"btn red",onClick:t[19]||(t[19]=o=>u.Deleteproduct())},"Törlés")])])):y("",!0),e("section",ot,[e("table",lt,[nt,e("tbody",null,[(i(!0),r(f,null,v(n.products,o=>(i(),r("tr",{key:o._id},[e("td",null,p(o.prodname),1),e("td",null,p(o.price)+" Ft",1),e("td",null,p(o.collections),1),st,e("td",{class:"click",onClick:s=>u.more(o._id)},"•••",8,it)]))),128))])])])],64)}const dt=b(ve,[["render",rt],["__scopeId","data-v-cfa6dd94"]]);const pt={name:"PostFormAxios",data(){return{form:{prod_name:"",prod_price:0},file1:"",api_result:null}},methods:{submitFile(){let l=new FormData;l.append("file",this.file1),_.post("https://egoncompany.hu:444/products/add/boravia/"+this.form.prod_name+"/"+this.form.prod_price,JSON.stringify(this.form),{headers:{"Content-Type":"application/json"}}).then(function(t){console.log(t)}).catch(function(){console.log("FAILURE!!")}),_.post("https://egoncompany.hu:444/products/addimg/boravia/"+this.form.prod_name,l,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){console.log(t),alert("Sikeres Boravia termék mentés!")}).catch(function(){console.log("FAILURE!!")}),this.form.prod_name=null,this.form.prod_price=null},handleFileUpload1(){this.file1=this.$refs.file1.files[0]}}},w=l=>(x("data-v-643f0794"),l=l(),U(),l),at={class:"addprod"},ut={class:"inputs_wrapper"},_t={class:"left_inputs"},mt=w(()=>e("label",{for:""},"Neve",-1)),ct=w(()=>e("br",null,null,-1)),ht=w(()=>e("label",{for:""},"Ára",-1)),ft={class:"right_inputs"},gt={class:"file_w"},vt={class:"submit_wrapper"};function yt(l,t,g,h,n,u){return i(),r("section",at,[e("form",{onSubmit:t[4]||(t[4]=$((...o)=>l.submitForm&&l.submitForm(...o),["prevent"]))},[e("div",ut,[e("div",_t,[mt,d(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=o=>n.form.prod_name=o),placeholder:"Termék neve"},null,512),[[a,n.form.prod_name]]),ct,ht,d(e("input",{type:"text",placeholder:"Termék ára","onUpdate:modelValue":t[1]||(t[1]=o=>n.form.prod_price=o)},null,512),[[a,n.form.prod_price]])]),e("div",ft,[e("div",gt,[e("input",{type:"file",id:"file1",ref:"file1",onChange:t[2]||(t[2]=o=>u.handleFileUpload1(o))},null,544)])])]),e("div",vt,[e("input",{type:"submit",value:"Termék mentése",onClick:t[3]||(t[3]=o=>u.submitFile())}),e("h2",null,p(this.api_result),1)])],32)])}const kt=b(pt,[["render",yt],["__scopeId","data-v-643f0794"]]);const C=l=>(x("data-v-d3b9fe05"),l=l(),U(),l),bt=C(()=>e("h1",{class:"title"},"Termékek",-1)),xt={class:"new-wrapper"},Ut=C(()=>e("h3",null,"Új termék",-1)),Ft=[Ut],wt=C(()=>e("h3",null,"Új Boravia",-1)),Ct=[wt],Vt={data(){return{showAdd:!1,showAddB:!1}}},Tt=Object.assign(Vt,{__name:"Products",setup(l){return(t,g)=>(i(),r(f,null,[V(A),bt,e("main",null,[e("section",xt,[e("div",{onClick:g[0]||(g[0]=h=>t.showAdd=!t.showAdd)},Ft),e("div",{onClick:g[1]||(g[1]=h=>t.showAddB=!t.showAddB)},Ct)]),t.showAdd?(i(),T(ge,{key:0})):y("",!0),t.showAddB?(i(),T(kt,{key:1})):y("",!0),V(dt)])],64))}}),At=b(Tt,[["__scopeId","data-v-d3b9fe05"]]);export{At as default};
