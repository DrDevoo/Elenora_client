import{H as z}from"./Header-6b9b0ce9.js";import{_ as f,h as _,o as s,c as d,b as e,k as p,l as h,q as I,p as $,m as S,t as i,F as b,f as C,r as V,a as g,d as k,i as y}from"./index-84802eff.js";const A={name:"PostFormAxios",data(){return{form:{cupon_name:"",cupon_value:0},data:JSON.stringify(this.form)}},methods:{submitSave(){_.post("http://localhost:3500/cupons/add/"+this.form.cupon_name+"/"+this.form.cupon_value,this.data).then(function(){console.log("SUCCESS!!"),alert("Sikeres kupon mentés!")}).catch(t=>console.log(t))}}},w=t=>($("data-v-d5aec199"),t=t(),S(),t),K={class:"addcolection"},P={class:"input_wrapper"},N=w(()=>e("label",{for:""},"Neve",-1)),j=w(()=>e("label",{for:""},"Százaléka",-1)),F={class:"submit_wrapper"};function U(t,o,a,u,n,c){return s(),d("section",K,[e("form",{onSubmit:o[3]||(o[3]=I((...l)=>t.submitForm&&t.submitForm(...l),["prevent"]))},[e("div",P,[e("div",null,[N,p(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=l=>n.form.cupon_name=l),placeholder:"Kupon neve"},null,512),[[h,n.form.cupon_name]])]),e("div",null,[j,p(e("input",{type:"number","onUpdate:modelValue":o[1]||(o[1]=l=>n.form.cupon_value=l),placeholder:"Kupon százaléka"},null,512),[[h,n.form.cupon_value]])])]),e("div",F,[e("input",{type:"submit",value:"Kupon mentése",onClick:o[2]||(o[2]=l=>c.submitSave())})])],32)])}const M=f(A,[["render",U],["__scopeId","data-v-d5aec199"]]);const T={name:"GetCollections",data(){return{products:[],p_name:null,p_precent:0,p_time:Date.now()}},mounted(){_.get("https://elenora.hu:444/products/getall").then(t=>this.products=t.data.products)},methods:{pick(t){this.p_name=t},savesale(){_.post("https://elenora.hu:444/sales/addsale/"+this.p_name+"/"+this.p_precent+"/"+this.p_time,JSON.stringify(this.products),{headers:{"Content-Type":"application/json"}}).then(function(t){console.log(t),alert("Sikeres akció mentés!")}).catch(function(){console.log("FAILURE!!")})}}},m=t=>($("data-v-1919f49b"),t=t(),S(),t),B={class:"addsale"},x=m(()=>e("h3",{style:{"text-align":"center"}},"Új akció termékre",-1)),E={class:"options-b"},H=m(()=>e("h5",null,"Választott termék:",-1)),L=m(()=>e("h5",null,"Hány százalékos?",-1)),D={action:""},G=m(()=>e("h5",null,"Meddig tartson?",-1)),O={cellspacing:"0",cellpadding:"0"},J=m(()=>e("thead",null,[e("tr",null,[e("th",null,"Neve"),e("th",null,"Ára"),e("th",null,"Kolekció"),e("th")])],-1)),q=["onClick"];function R(t,o,a,u,n,c){return s(),d("section",B,[x,e("div",E,[e("div",null,[H,e("p",null,i(this.p_name),1)]),e("div",null,[L,p(e("input",{class:"precent",type:"number",name:"",id:"",placeholder:"Százalék","onUpdate:modelValue":o[0]||(o[0]=l=>n.p_precent=l)},null,512),[[h,n.p_precent]])]),e("div",null,[e("form",D,[G,p(e("input",{type:"date",name:"",id:"","onUpdate:modelValue":o[1]||(o[1]=l=>n.p_time=l)},null,512),[[h,n.p_time]])])]),e("div",null,[e("button",{onClick:o[2]||(o[2]=l=>c.savesale())},"Mentés")])]),e("div",null,[e("table",O,[J,e("tbody",null,[(s(!0),d(b,null,C(n.products,l=>(s(),d("tr",{key:l._id},[e("td",null,i(l.prodname),1),e("td",null,i(l.price)+" Ft",1),e("td",null,i(l.collections),1),e("td",{class:"click",onClick:r=>c.pick(l.prodname)},"Választ",8,q)]))),128))])])])])}const Q=f(T,[["render",R],["__scopeId","data-v-1919f49b"]]);const W={name:"GetCollections",data(){return{collections:[],p_name:null,p_precent:0}},mounted(){_.get("https://elenora.hu:444/collections/getall").then(t=>this.collections=t.data)},methods:{pick(t){this.p_name=t}}},v=t=>($("data-v-a7de3d69"),t=t(),S(),t),X={class:"addsale"},Y=v(()=>e("h3",{style:{"text-align":"center"}},"Új akció kollekcióra",-1)),Z={class:"options-b"},ee=v(()=>e("h5",null,"Választott kollekció:",-1)),te=v(()=>e("h5",null,"Hány százalékos?",-1)),oe=v(()=>e("div",null,[e("form",{action:""},[e("h5",null,"Meddig tartson?"),e("input",{type:"radio",name:"alltime",id:"alltime"}),e("label",{for:"alltime"},"Készlet erejéig"),e("br"),e("input",{type:"date",name:"",id:""})])],-1)),le={cellspacing:"0",cellpadding:"0"},ne=v(()=>e("thead",null,[e("tr",null,[e("th",null,"Neve"),e("th",null,"Típusa"),e("th",null,"Karkötők"),e("th")])],-1)),se=["onClick"];function ae(t,o,a,u,n,c){return s(),d("section",X,[Y,e("div",Z,[e("div",null,[ee,e("p",null,i(this.p_name),1)]),e("div",null,[te,p(e("input",{class:"precent",type:"number",name:"",id:"",placeholder:"Százalék","onUpdate:modelValue":o[0]||(o[0]=l=>n.p_precent=l)},null,512),[[h,n.p_precent]])]),oe]),e("div",null,[e("table",le,[ne,e("tbody",null,[(s(!0),d(b,null,C(n.collections,l=>(s(),d("tr",{key:l._id},[e("td",null,i(l.col_name),1),e("td",null,i(l.col_type),1),e("td",null,i(l.col_db),1),e("td",{onClick:r=>c.pick(l.col_name)},"választ",8,se)]))),128))])])])])}const de=f(W,[["render",ae],["__scopeId","data-v-a7de3d69"]]);const ie={name:"GetCollections",data(){return{collections:[]}},mounted(){_.get("https://elenora.hu:444/sales/getsaled").then(t=>this.collections=t.data.products)},methods:{deletesale(t){confirm("Biztos torolod a kedvezményt? Ez nem vonhato vissza!")&&_.get("https://elenora.hu:444/sales/delete/"+t)}}},ce=t=>($("data-v-b44bb04c"),t=t(),S(),t),ue={class:"listprod"},re={cellspacing:"0",cellpadding:"0"},_e=ce(()=>e("thead",null,[e("tr",null,[e("th",null,"Termék"),e("th",null,"Százalék"),e("th",null,"Meddig"),e("th")])],-1)),pe=["onClick"];function he(t,o,a,u,n,c){const l=V("ion-icon");return s(),d("section",ue,[e("table",re,[_e,e("tbody",null,[(s(!0),d(b,null,C(n.collections,r=>(s(),d("tr",{key:r._id},[e("td",null,i(r.prodname),1),e("td",null,i(r.saleprecent),1),e("td",null,i(r.saletime.split("T")[0]),1),e("td",{onClick:Ve=>c.deletesale(r._id)},[g(l,{name:"trash-outline"})],8,pe)]))),128))])])])}const me=f(ie,[["render",he],["__scopeId","data-v-b44bb04c"]]);const ve=e("h1",{class:"title"},"Akciók / Kuponok",-1),ke={class:"new-wrapper"},fe=e("h3",null,"Új Kupon",-1),$e=[fe],Se=e("h3",null,"Új Akció",-1),be=[Se],ye={key:0,class:"sales-options"},ge=e("h3",null,"Termékre",-1),Ce=[ge],we=e("h3",null,"Kollekcióra",-1),ze=[we],Ie={data(){return{showCupon:!1,showSale:!1,showSaleProd:!1,showSaleColle:!1}}},Pe=Object.assign(Ie,{__name:"Sales",setup(t){return(o,a)=>(s(),d(b,null,[g(z),ve,e("main",null,[e("section",ke,[e("div",{onClick:a[0]||(a[0]=u=>o.showCupon=!o.showCupon)},$e),e("div",{onClick:a[1]||(a[1]=u=>o.showSaleProd=!o.showSaleProd)},be)]),o.showSale?(s(),d("div",ye,[e("div",{onClick:a[2]||(a[2]=u=>o.showSaleProd=!o.showSaleProd)},Ce),e("div",{onClick:a[3]||(a[3]=u=>o.showSaleColle=!o.showSaleColle)},ze)])):k("",!0),o.showCupon?(s(),y(M,{key:1})):k("",!0),o.showSaleProd?(s(),y(Q,{key:2})):k("",!0),o.showSaleColle?(s(),y(de,{key:3})):k("",!0),g(me)])],64))}});export{Pe as default};
