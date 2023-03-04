import{H as z}from"./Header-b04363b7.js";import{_ as f,h as _,o as s,c as i,b as e,k as r,l as h,s as V,p as $,m as S,t as d,F as y,f as C,r as I,a as g,d as k,i as b}from"./index-8b7a0536.js";const A={name:"PostFormAxios",data(){return{form:{cupon_name:"",cupon_value:0},data:JSON.stringify(this.form)}},methods:{submitSave(){_.post("http://localhost:3500/cupons/add/"+this.form.cupon_name+"/"+this.form.cupon_value,this.data).then(function(){console.log("SUCCESS!!"),alert("Sikeres kupon mentés!")}).catch(t=>console.log(t))}}},w=t=>($("data-v-d5aec199"),t=t(),S(),t),j={class:"addcolection"},N={class:"input_wrapper"},K=w(()=>e("label",{for:""},"Neve",-1)),U=w(()=>e("label",{for:""},"Százaléka",-1)),F={class:"submit_wrapper"};function M(t,o,a,u,l,c){return s(),i("section",j,[e("form",{onSubmit:o[3]||(o[3]=V((...n)=>t.submitForm&&t.submitForm(...n),["prevent"]))},[e("div",N,[e("div",null,[K,r(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=n=>l.form.cupon_name=n),placeholder:"Kupon neve"},null,512),[[h,l.form.cupon_name]])]),e("div",null,[U,r(e("input",{type:"number","onUpdate:modelValue":o[1]||(o[1]=n=>l.form.cupon_value=n),placeholder:"Kupon százaléka"},null,512),[[h,l.form.cupon_value]])])]),e("div",F,[e("input",{type:"submit",value:"Kupon mentése",onClick:o[2]||(o[2]=n=>c.submitSave())})])],32)])}const P=f(A,[["render",M],["__scopeId","data-v-d5aec199"]]);const T={name:"GetCollections",data(){return{products:[],json:[],p_name:null,p_precent:0,p_time:Date.now()}},mounted(){_.get("https://elenora.hu:444/products/getall").then(t=>this.products=t.data.products)},methods:{pick(t){this.p_name=t},savesale(){_.post("https://elenora.hu:444/sales/addsale/"+this.p_name+"/"+this.p_precent+"/"+this.p_time,JSON.stringify(this.json),{headers:{"Content-Type":"application/json"}}).then(function(t){console.log(t),alert("Sikeres akció mentés!")}).catch(t=>console.log(t))}}},m=t=>($("data-v-3a1b5cff"),t=t(),S(),t),B={class:"addsale"},x=m(()=>e("h3",{style:{"text-align":"center"}},"Új akció termékre",-1)),D={class:"options-b"},E=m(()=>e("h5",null,"Választott termék:",-1)),H=m(()=>e("h5",null,"Hány százalékos?",-1)),L={action:""},O=m(()=>e("h5",null,"Meddig tartson?",-1)),G={cellspacing:"0",cellpadding:"0"},J=m(()=>e("thead",null,[e("tr",null,[e("th",null,"Neve"),e("th",null,"Ára"),e("th",null,"Kolekció"),e("th")])],-1)),R=["onClick"];function q(t,o,a,u,l,c){return s(),i("section",B,[x,e("div",D,[e("div",null,[E,e("p",null,d(this.p_name),1)]),e("div",null,[H,r(e("input",{class:"precent",type:"number",name:"",id:"",placeholder:"Százalék","onUpdate:modelValue":o[0]||(o[0]=n=>l.p_precent=n)},null,512),[[h,l.p_precent]])]),e("div",null,[e("form",L,[O,r(e("input",{type:"date",name:"",id:"","onUpdate:modelValue":o[1]||(o[1]=n=>l.p_time=n)},null,512),[[h,l.p_time]])])]),e("div",null,[e("button",{onClick:o[2]||(o[2]=n=>c.savesale())},"Mentés")])]),e("div",null,[e("table",G,[J,e("tbody",null,[(s(!0),i(y,null,C(l.products,n=>(s(),i("tr",{key:n._id},[e("td",null,d(n.prodname),1),e("td",null,d(n.price)+" Ft",1),e("td",null,d(n.collections),1),e("td",{class:"click",onClick:p=>c.pick(n.prodname)},"Választ",8,R)]))),128))])])])])}const Q=f(T,[["render",q],["__scopeId","data-v-3a1b5cff"]]);const W={name:"GetCollections",data(){return{collections:[],p_name:null,p_precent:0,p_time:Date.now()}},mounted(){_.get("https://elenora.hu:444/collections/getall").then(t=>this.collections=t.data)},methods:{pick(t){this.p_name=t},savesale(){_.post("https://elenora.hu:444/sales/addsalecollection/"+this.p_name+"/"+this.p_precent+"/"+this.p_time,JSON.stringify(this.products),{headers:{"Content-Type":"application/json"}}).then(function(t){console.log(t),alert("Sikeres akció mentés!")}).catch(function(){console.log("FAILURE!!")})}}},v=t=>($("data-v-51c86243"),t=t(),S(),t),X={class:"addsale"},Y=v(()=>e("h3",{style:{"text-align":"center"}},"Új akció kollekcióra",-1)),Z={class:"options-b"},ee=v(()=>e("h5",null,"Választott kollekció:",-1)),te=v(()=>e("h5",null,"Hány százalékos?",-1)),oe={action:""},ne=v(()=>e("h5",null,"Meddig tartson?",-1)),le={cellspacing:"0",cellpadding:"0"},se=v(()=>e("thead",null,[e("tr",null,[e("th",null,"Neve"),e("th",null,"Karkötők"),e("th")])],-1)),ae=["onClick"];function ie(t,o,a,u,l,c){return s(),i("section",X,[Y,e("div",Z,[e("div",null,[ee,e("p",null,d(this.p_name),1)]),e("div",null,[te,r(e("input",{class:"precent",type:"number",name:"",id:"",placeholder:"Százalék","onUpdate:modelValue":o[0]||(o[0]=n=>l.p_precent=n)},null,512),[[h,l.p_precent]])]),e("div",null,[e("form",oe,[ne,r(e("input",{type:"date",name:"",id:"","onUpdate:modelValue":o[1]||(o[1]=n=>l.p_time=n)},null,512),[[h,l.p_time]])])]),e("div",null,[e("button",{onClick:o[2]||(o[2]=n=>c.savesale())},"Mentés")])]),e("div",null,[e("table",le,[se,e("tbody",null,[(s(!0),i(y,null,C(l.collections,n=>(s(),i("tr",{key:n._id},[e("td",null,d(n.col_name),1),e("td",null,d(n.col_db),1),e("td",{onClick:p=>c.pick(n.col_name)},"választ",8,ae)]))),128))])])])])}const de=f(W,[["render",ie],["__scopeId","data-v-51c86243"]]);const ce={name:"GetCollections",data(){return{collections:[]}},mounted(){_.get("https://elenora.hu:444/sales/getsaled").then(t=>this.collections=t.data.products)},methods:{deletesale(t){confirm("Biztos torolod a kedvezményt? Ez nem vonhato vissza!")&&_.get("https://elenora.hu:444/sales/delete/"+t)}}},ue=t=>($("data-v-b44bb04c"),t=t(),S(),t),pe={class:"listprod"},_e={cellspacing:"0",cellpadding:"0"},re=ue(()=>e("thead",null,[e("tr",null,[e("th",null,"Termék"),e("th",null,"Százalék"),e("th",null,"Meddig"),e("th")])],-1)),he=["onClick"];function me(t,o,a,u,l,c){const n=I("ion-icon");return s(),i("section",pe,[e("table",_e,[re,e("tbody",null,[(s(!0),i(y,null,C(l.collections,p=>(s(),i("tr",{key:p._id},[e("td",null,d(p.prodname),1),e("td",null,d(p.saleprecent),1),e("td",null,d(p.saletime.split("T")[0]),1),e("td",{onClick:Ae=>c.deletesale(p._id)},[g(n,{name:"trash-outline"})],8,he)]))),128))])])])}const ve=f(ce,[["render",me],["__scopeId","data-v-b44bb04c"]]);const ke=e("h1",{class:"title"},"Akciók / Kuponok",-1),fe={class:"new-wrapper"},$e=e("h3",null,"Új Kupon",-1),Se=[$e],ye=e("h3",null,"Új Akció",-1),be=[ye],ge={key:0,class:"sales-options"},Ce=e("h3",null,"Termékre",-1),we=[Ce],ze=e("h3",null,"Kollekcióra",-1),Ve=[ze],Ie={data(){return{showCupon:!1,showSale:!1,showSaleProd:!1,showSaleColle:!1}}},Ke=Object.assign(Ie,{__name:"Sales",setup(t){return(o,a)=>(s(),i(y,null,[g(z),ke,e("main",null,[e("section",fe,[e("div",{onClick:a[0]||(a[0]=u=>o.showCupon=!o.showCupon)},Se),e("div",{onClick:a[1]||(a[1]=u=>o.showSale=!o.showSale)},be)]),o.showSale?(s(),i("div",ge,[e("div",{onClick:a[2]||(a[2]=u=>o.showSaleProd=!o.showSaleProd)},we),e("div",{onClick:a[3]||(a[3]=u=>o.showSaleColle=!o.showSaleColle)},Ve)])):k("",!0),o.showCupon?(s(),b(P,{key:1})):k("",!0),o.showSaleProd?(s(),b(Q,{key:2})):k("",!0),o.showSaleColle?(s(),b(de,{key:3})):k("",!0),g(ve)])],64))}});export{Ke as default};
