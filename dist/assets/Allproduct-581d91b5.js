import{_,r as b,o as d,c,a as r,b as e,d as i,t as o,e as p,F as v,f as u,g as h,h as f,i as k,j as m,w as g,u as y,R as S,k as w,p as C,l as F}from"./index-4505b0f3.js";const N=t=>(C("data-v-f5dcb5b1"),t=t(),F(),t),z={key:0},I=h('<h1 class="aside_title" data-v-f5dcb5b1>Szűrők</h1><div class="box" data-v-f5dcb5b1><h3 data-v-f5dcb5b1>Ár</h3></div><div class="box" data-v-f5dcb5b1><h3 data-v-f5dcb5b1>Szín</h3><div class="color-list" data-v-f5dcb5b1><div class="dot" data-v-f5dcb5b1><div class="white color" data-v-f5dcb5b1></div></div><div class="dot" data-v-f5dcb5b1><div class="black color" data-v-f5dcb5b1></div></div><div class="dot" data-v-f5dcb5b1><div class="red color" data-v-f5dcb5b1></div></div><div class="dot" data-v-f5dcb5b1><div class="yellow color" data-v-f5dcb5b1></div></div><div class="dot" data-v-f5dcb5b1><div class="green color" data-v-f5dcb5b1></div></div><div class="dot" data-v-f5dcb5b1><div class="blue color" data-v-f5dcb5b1></div></div></div></div><div class="box" data-v-f5dcb5b1><h3 data-v-f5dcb5b1>Ásvány</h3></div>',4),V={class:"s"},B=N(()=>e("h1",{class:"picked-t"},"Összes karkötő",-1)),A={class:"list-header"},$={class:"prod-count"},j={class:"rendezes"},q={class:"item-list"},x={class:"item"},L={class:"img_w"},O=["src"],R={key:0,class:"saleprecent"},T={class:"text"},D={class:"prices_b"},E={key:0},J={key:1,class:"oldprice"},M={key:2,class:"newprice"},G={data:()=>({response:[],filter:!1,imgurl:"/prodimgs/",linkurl:"/shop/picked?id=",count:0,p_product:{id:"",name:"",price:0,quantity:0}}),mounted(){f.get("https://elenora.hu:444/products/getall").then(t=>this.response=t.data)},methods:{addToCart(t){this.cart.push({id:t._id,name:t.prodname,price:t.price,quantity:1}),localStorage.setItem("cart",JSON.stringify(this.cart))}}},H=Object.assign(G,{__name:"Allproduct",setup(t){return(a,l)=>{const n=b("ion-icon");return d(),c(v,null,[r(k),e("main",null,[a.filter?(d(),c("aside",z,[r(n,{onClick:l[0]||(l[0]=s=>a.filter=!a.filter),class:"aside_close",name:"close-outline"}),I])):i("",!0),e("section",V,[B,e("div",A,[e("div",null,[e("p",$,o(a.response.count)+" termék",1)]),e("div",{onClick:l[1]||(l[1]=s=>a.filter=!a.filter)},[e("p",j,[p(" Szűrés"),r(n,{name:"ellipsis-vertical-outline"})])])]),e("div",q,[(d(!0),c(v,null,u(a.response.products,s=>(d(),m(y(S),{key:s._id,to:a.linkurl+s._id},{default:g(()=>[e("div",x,[e("div",L,[e("img",{src:a.imgurl+s.image},null,8,O),s.activesale==="true"?(d(),c("h5",R,o(s.saleprecent)+" % ",1)):i("",!0)]),e("div",T,[e("h3",null,o(s.prodname),1),e("div",D,[s.activesale==="false"?(d(),c("h4",E,o(s.price)+" Ft",1)):i("",!0),s.activesale==="true"?(d(),c("h4",J,o(s.price)+" Ft ",1)):i("",!0),s.activesale==="true"?(d(),c("h4",M,o(Math.round(s.price-s.price/100*s.saleprecent))+" Ft ",1)):i("",!0)])])])]),_:2},1032,["to"]))),128))])])]),r(w)],64)}}}),P=_(H,[["__scopeId","data-v-f5dcb5b1"]]);export{P as default};