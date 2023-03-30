import{_ as g,h as u,o as n,c as i,b as e,e as h,t as a,F as r,f as v,d as b,p as y,l as S,m as p,s as C,q as f,z as $,g as w,a as k,j as N}from"./index-b9aae89d.js";import{H as x}from"./Header-712f3484.js";const V={name:"GetCollections",data(){return{collections:[],more:!1,moreprods:[],morename:"",imgurl:"https://elenora.hu:444/getimage/"}},mounted(){u.get("https://elenora.hu:444/collections/getall").then(o=>this.collections=o.data)},methods:{pick(o){this.morename=o,u.get("https://elenora.hu:444/products/getbycollection/"+o).then(t=>this.moreprods=t.data)}}},A=o=>(y("data-v-5623d1a4"),o=o(),S(),o),F={key:0,class:"moreb"},I={class:"moreprodlist"},K={class:"prodb"},T=["src"],B={class:"listprod"},U={cellspacing:"0",cellpadding:"0"},j=A(()=>e("thead",null,[e("tr",null,[e("th",null,"Neve"),e("th",null,"Típusa"),e("th",null,"Neme"),e("th")])],-1)),L=["onClick"];function M(o,t,d,m,l,_){return n(),i(r,null,[l.more?(n(),i("section",F,[e("h1",null,[h("Termékek "),e("i",null,a(l.morename),1),h(" kollekcióban")]),e("div",I,[(n(!0),i(r,null,v(l.moreprods,s=>(n(),i("div",K,[e("img",{src:l.imgurl+s.image,alt:""},null,8,T),e("p",null,a(s.prodname),1)]))),256))])])):b("",!0),e("section",B,[e("table",U,[j,e("tbody",null,[(n(!0),i(r,null,v(l.collections,s=>(n(),i("tr",{key:s._id},[e("td",null,a(s.col_name),1),e("td",null,a(s.col_type),1),e("td",null,a(s.col_gender),1),e("td",{onClick:ie=>_.pick(s.col_name)},"•••",8,L)]))),128))])])])],64)}const D=g(V,[["render",M],["__scopeId","data-v-5623d1a4"]]);const E={name:"PostFormAxios",data(){return{form:{collection_name:"",collection_type:"",collection_gender:""},data:JSON.stringify(this.form)}},methods:{submitSave(){u.post("https://elenora.hu:444/collections/add/"+this.form.collection_name+"/"+this.form.collection_type+"/"+this.form.collection_gender,this.data).then(function(){console.log("SUCCESS!!"),alert("Sikeres kollekció mentés!")}).catch(o=>console.log(o))}}},c=o=>(y("data-v-425362a4"),o=o(),S(),o),H={class:"addcolection"},O={class:"input_wrapper"},P=c(()=>e("label",{for:""},"Neve",-1)),q=c(()=>e("label",{for:""},"Típusa",-1)),z=c(()=>e("option",{disabled:"",selected:""},"Kollekció típusa",-1)),G=c(()=>e("option",{value:"bracelet"},"karkötő",-1)),J=c(()=>e("option",{value:"keychain"},"kulcstartó",-1)),Q=[z,G,J],R=c(()=>e("label",{for:""},"Neme",-1)),W=w('<option disabled selected data-v-425362a4>Kollekció neme</option><option value="female" data-v-425362a4>Női</option><option value="male" data-v-425362a4>Férfi</option><option value="unisex" data-v-425362a4>Férfi és Női</option><option value="couple" data-v-425362a4>Páros</option>',5),X=[W],Y={class:"submit_wrapper"};function Z(o,t,d,m,l,_){return n(),i("section",H,[e("form",{onSubmit:t[4]||(t[4]=$((...s)=>o.submitForm&&o.submitForm(...s),["prevent"]))},[e("div",O,[e("div",null,[P,p(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=s=>l.form.collection_name=s),placeholder:"Kollekció neve"},null,512),[[C,l.form.collection_name]])]),e("div",null,[q,p(e("select",{name:"",id:"","onUpdate:modelValue":t[1]||(t[1]=s=>l.form.collection_type=s)},Q,512),[[f,l.form.collection_type]]),R,p(e("select",{name:"",id:"","onUpdate:modelValue":t[2]||(t[2]=s=>l.form.collection_gender=s)},X,512),[[f,l.form.collection_gender]])])]),e("div",Y,[e("input",{type:"submit",value:"Kollekció mentése",onClick:t[3]||(t[3]=s=>_.submitSave())})])],32)])}const ee=g(E,[["render",Z],["__scopeId","data-v-425362a4"]]);const oe=e("h1",{class:"title"},"Kollekciók",-1),te={class:"new-wrapper"},se=e("h3",null,"Új kollekció",-1),le=[se],ne={data(){return{showAdd:!1}}},de=Object.assign(ne,{__name:"Collections",setup(o){return(t,d)=>(n(),i(r,null,[k(x),oe,e("main",null,[e("section",te,[e("div",{onClick:d[0]||(d[0]=m=>t.showAdd=!t.showAdd)},le)]),t.showAdd?(n(),N(ee,{key:0})):b("",!0),k(D)])],64))}});export{de as default};
