import{_,r as p,o,c,a as r,b as e,d as i,t as d,e as u,F as v,f as h,g as k,h as f,i as g,j as m,w as y,u as S,R as b,k as C,p as w,l as F}from"./index-7d631371.js";const N=t=>(w("data-v-7973742c"),t=t(),F(),t),I={key:0},V=k('<h1 class="aside_title" data-v-7973742c>Szűrők</h1><div class="box" data-v-7973742c><h3 data-v-7973742c>Ár</h3></div><div class="box" data-v-7973742c><h3 data-v-7973742c>Szín</h3><div class="color-list" data-v-7973742c><div class="dot" data-v-7973742c><div class="white color" data-v-7973742c></div></div><div class="dot" data-v-7973742c><div class="black color" data-v-7973742c></div></div><div class="dot" data-v-7973742c><div class="red color" data-v-7973742c></div></div><div class="dot" data-v-7973742c><div class="yellow color" data-v-7973742c></div></div><div class="dot" data-v-7973742c><div class="green color" data-v-7973742c></div></div><div class="dot" data-v-7973742c><div class="blue color" data-v-7973742c></div></div></div></div><div class="box" data-v-7973742c><h3 data-v-7973742c>Ásvány</h3></div>',4),z={class:"s"},B=N(()=>e("h1",{class:"picked-t"},"Páros karkötő",-1)),$={class:"list-header"},j={class:"prod-count"},q={class:"rendezes"},x={class:"item-list"},L={class:"item"},O={class:"img_w"},R=["src"],T={key:0,class:"saleprecent"},D={class:"text"},E={class:"prices_b"},J={key:0},M={key:1,class:"oldprice"},P={key:2,class:"newprice"},A={data:()=>({response:[],filter:!1,imgurl:"/prodimgs/",linkurl:"/shop/picked?id=",count:0,p_product:{id:"",name:"",price:0,quantity:0}}),mounted(){f.get("https://elenora.hu:444/products/getbycateg/couple").then(t=>this.response=t.data)},methods:{addToCart(t){this.cart.push({id:t._id,name:t.prodname,price:t.price,quantity:1}),localStorage.setItem("cart",JSON.stringify(this.cart))}}},G=Object.assign(A,{__name:"Couple",setup(t){return(a,l)=>{const n=p("ion-icon");return o(),c(v,null,[r(g),e("main",null,[a.filter?(o(),c("aside",I,[r(n,{onClick:l[0]||(l[0]=s=>a.filter=!a.filter),class:"aside_close",name:"close-outline"}),V])):i("",!0),e("section",z,[B,e("div",$,[e("div",null,[e("p",j,d(a.response.count)+" termék",1)]),e("div",{onClick:l[1]||(l[1]=s=>a.filter=!a.filter)},[e("p",q,[u(" Szűrés"),r(n,{name:"ellipsis-vertical-outline"})])])]),e("div",x,[(o(!0),c(v,null,h(a.response.products,s=>(o(),m(S(b),{key:s._id,to:a.linkurl+s._id},{default:y(()=>[e("div",L,[e("div",O,[e("img",{src:a.imgurl+s.image},null,8,R),s.activesale==="true"?(o(),c("h5",T,d(s.saleprecent)+" % ",1)):i("",!0)]),e("div",D,[e("h3",null,d(s.prodname),1),e("div",E,[s.activesale==="false"?(o(),c("h4",J,d(s.price)+" Ft",1)):i("",!0),s.activesale==="true"?(o(),c("h4",M,d(s.price)+" Ft",1)):i("",!0),s.activesale==="true"?(o(),c("h4",P,d(Math.round(s.price-s.price/100*s.saleprecent))+" Ft ",1)):i("",!0)])])])]),_:2},1032,["to"]))),128))])])]),r(C)],64)}}}),K=_(G,[["__scopeId","data-v-7973742c"]]);export{K as default};
