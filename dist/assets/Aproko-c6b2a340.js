import{_,r as p,o,c as d,a as r,b as s,d as c,t as i,e as u,F as v,f as h,g as b,h as k,i as f,j as g,w as m,u as y,R as S,k as w,p as C,l as F}from"./index-4505b0f3.js";const N=t=>(C("data-v-e29eb558"),t=t(),F(),t),I={key:0},V=b('<h1 class="aside_title" data-v-e29eb558>Szűrők</h1><div class="box" data-v-e29eb558><h3 data-v-e29eb558>Ár</h3></div><div class="box" data-v-e29eb558><h3 data-v-e29eb558>Szín</h3><div class="color-list" data-v-e29eb558><div class="dot" data-v-e29eb558><div class="white color" data-v-e29eb558></div></div><div class="dot" data-v-e29eb558><div class="black color" data-v-e29eb558></div></div><div class="dot" data-v-e29eb558><div class="red color" data-v-e29eb558></div></div><div class="dot" data-v-e29eb558><div class="yellow color" data-v-e29eb558></div></div><div class="dot" data-v-e29eb558><div class="green color" data-v-e29eb558></div></div><div class="dot" data-v-e29eb558><div class="blue color" data-v-e29eb558></div></div></div></div><div class="box" data-v-e29eb558><h3 data-v-e29eb558>Ásvány</h3></div>',4),z={class:"s"},A=N(()=>s("h1",{class:"picked-t"},"Apró köves karkötők",-1)),B={class:"list-header"},$={class:"prod-count"},j={class:"rendezes"},q={class:"item-list"},x={class:"item"},L={class:"img_w"},O=["src"],R={key:0,class:"saleprecent"},T={class:"text"},D={class:"prices_b"},E={key:0},J={key:1,class:"oldprice"},M={key:2,class:"newprice"},G={data:()=>({response:[],filter:!1,imgurl:"/prodimgs/",linkurl:"/shop/picked?id=",count:0,p_product:{id:"",name:"",price:0,quantity:0}}),mounted(){k.get("https://elenora.hu:444/products/getbycateg/aproko").then(t=>this.response=t.data)},methods:{addToCart(t){this.cart.push({id:t._id,name:t.prodname,price:t.price,quantity:1}),localStorage.setItem("cart",JSON.stringify(this.cart))}}},H=Object.assign(G,{__name:"Aproko",setup(t){return(a,l)=>{const n=p("ion-icon");return o(),d(v,null,[r(f),s("main",null,[a.filter?(o(),d("aside",I,[r(n,{onClick:l[0]||(l[0]=e=>a.filter=!a.filter),class:"aside_close",name:"close-outline"}),V])):c("",!0),s("section",z,[A,s("div",B,[s("div",null,[s("p",$,i(a.response.count)+" termék",1)]),s("div",{onClick:l[1]||(l[1]=e=>a.filter=!a.filter)},[s("p",j,[u(" Szűrés"),r(n,{name:"ellipsis-vertical-outline"})])])]),s("div",q,[(o(!0),d(v,null,h(a.response.products,e=>(o(),g(y(S),{key:e._id,to:a.linkurl+e._id},{default:m(()=>[s("div",x,[s("div",L,[s("img",{src:a.imgurl+e.image},null,8,O),e.activesale==="true"?(o(),d("h5",R,i(e.saleprecent)+" % ",1)):c("",!0)]),s("div",T,[s("h3",null,i(e.prodname),1),s("div",D,[e.activesale==="false"?(o(),d("h4",E,i(e.price)+" Ft",1)):c("",!0),e.activesale==="true"?(o(),d("h4",J,i(e.price)+" Ft",1)):c("",!0),e.activesale==="true"?(o(),d("h4",M,i(Math.round(e.price-e.price/100*e.saleprecent))+" Ft ",1)):c("",!0)])])])]),_:2},1032,["to"]))),128))])])]),r(w)],64)}}}),P=_(H,[["__scopeId","data-v-e29eb558"]]);export{P as default};