import{_,r as p,o as c,c as o,a as r,b as s,d as i,t as d,e as u,F as v,f as h,g as f,h as k,i as g,j as m,w as y,u as b,R as S,k as w,p as C,l as F}from"./index-81d0340d.js";const N=t=>(C("data-v-5c8f54ec"),t=t(),F(),t),I={key:0},V=f('<h1 class="aside_title" data-v-5c8f54ec>Szűrők</h1><div class="box" data-v-5c8f54ec><h3 data-v-5c8f54ec>Ár</h3></div><div class="box" data-v-5c8f54ec><h3 data-v-5c8f54ec>Szín</h3><div class="color-list" data-v-5c8f54ec><div class="dot" data-v-5c8f54ec><div class="white color" data-v-5c8f54ec></div></div><div class="dot" data-v-5c8f54ec><div class="black color" data-v-5c8f54ec></div></div><div class="dot" data-v-5c8f54ec><div class="red color" data-v-5c8f54ec></div></div><div class="dot" data-v-5c8f54ec><div class="yellow color" data-v-5c8f54ec></div></div><div class="dot" data-v-5c8f54ec><div class="green color" data-v-5c8f54ec></div></div><div class="dot" data-v-5c8f54ec><div class="blue color" data-v-5c8f54ec></div></div></div></div><div class="box" data-v-5c8f54ec><h3 data-v-5c8f54ec>Ásvány</h3></div>',4),z={class:"s"},B=N(()=>s("h1",{class:"picked-t"},"Páros karkötő",-1)),x={class:"list-header"},$={class:"prod-count"},j={class:"rendezes"},q={class:"item-list"},L={class:"item"},O={class:"img_w"},R=["src"],T={key:0,class:"saleprecent"},D={class:"text"},E={class:"prices_b"},J={key:0},M={key:1,class:"oldprice"},P={key:2,class:"newprice"},A={data:()=>({response:[],filter:!1,imgurl:"/prodimgs/",linkurl:"/shop/picked?id=",count:0,p_product:{id:"",name:"",price:0,quantity:0}}),mounted(){k.get("https://elenora.hu:444/products/getbycateg/couple").then(t=>this.response=t.data)},methods:{addToCart(t){this.cart.push({id:t._id,name:t.prodname,price:t.price,quantity:1}),localStorage.setItem("cart",JSON.stringify(this.cart))}}},G=Object.assign(A,{__name:"Couple",setup(t){return(a,l)=>{const n=p("ion-icon");return c(),o(v,null,[r(g),s("main",null,[a.filter?(c(),o("aside",I,[r(n,{onClick:l[0]||(l[0]=e=>a.filter=!a.filter),class:"aside_close",name:"close-outline"}),V])):i("",!0),s("section",z,[B,s("div",x,[s("div",null,[s("p",$,d(a.response.count)+" termék",1)]),s("div",{onClick:l[1]||(l[1]=e=>a.filter=!a.filter)},[s("p",j,[u(" Szűrés"),r(n,{name:"ellipsis-vertical-outline"})])])]),s("div",q,[(c(!0),o(v,null,h(a.response.products,e=>(c(),m(b(S),{key:e._id,to:a.linkurl+e._id},{default:y(()=>[s("div",L,[s("div",O,[s("img",{src:"/newimgs/"+e.image+".webp"},null,8,R),e.activesale==="true"?(c(),o("h5",T,d(e.saleprecent)+" % ",1)):i("",!0)]),s("div",D,[s("h3",null,d(e.prodname),1),s("div",E,[e.activesale==="false"?(c(),o("h4",J,d(e.price)+" Ft",1)):i("",!0),e.activesale==="true"?(c(),o("h4",M,d(e.price)+" Ft",1)):i("",!0),e.activesale==="true"?(c(),o("h4",P,d(Math.round(e.price-e.price/100*e.saleprecent))+" Ft ",1)):i("",!0)])])])]),_:2},1032,["to"]))),128))])])]),r(w)],64)}}}),K=_(G,[["__scopeId","data-v-5c8f54ec"]]);export{K as default};
