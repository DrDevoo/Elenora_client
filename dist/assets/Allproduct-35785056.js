import{_,r as b,o,c as d,a as r,b as a,d as l,t as i,e as p,F as v,f as u,g as h,h as k,i as f,j as g,w as m,u as y,R as S,k as w,p as C,l as F}from"./index-1aeb7f27.js";const N=e=>(C("data-v-8bb9431a"),e=e(),F(),e),z={key:0},I=h('<h1 class="aside_title" data-v-8bb9431a>Szűrők</h1><div class="box" data-v-8bb9431a><h3 data-v-8bb9431a>Ár</h3></div><div class="box" data-v-8bb9431a><h3 data-v-8bb9431a>Szín</h3><div class="color-list" data-v-8bb9431a><div class="dot" data-v-8bb9431a><div class="white color" data-v-8bb9431a></div></div><div class="dot" data-v-8bb9431a><div class="black color" data-v-8bb9431a></div></div><div class="dot" data-v-8bb9431a><div class="red color" data-v-8bb9431a></div></div><div class="dot" data-v-8bb9431a><div class="yellow color" data-v-8bb9431a></div></div><div class="dot" data-v-8bb9431a><div class="green color" data-v-8bb9431a></div></div><div class="dot" data-v-8bb9431a><div class="blue color" data-v-8bb9431a></div></div></div></div><div class="box" data-v-8bb9431a><h3 data-v-8bb9431a>Ásvány</h3></div>',4),V={class:"s"},B=N(()=>a("h1",{class:"picked-t"},"Összes karkötő",-1)),A={class:"list-header"},$={class:"prod-count"},j={class:"rendezes"},q={class:"item-list"},x={class:"item"},L={class:"img_w"},O=["src"],R={key:0,class:"saleprecent"},T={class:"text"},D={class:"prices_b"},E={key:0},J={key:1,class:"oldprice"},M={key:2,class:"newprice"},G={data:()=>({response:[],filter:!1,imgurl:"https://elenora.hu:444/getimage/",imgpath:".webp",linkurl:"/shop/picked?id=",count:0,p_product:{id:"",name:"",price:0,quantity:0}}),mounted(){k.get("https://elenora.hu:444/products/getall").then(e=>this.response=e.data)},methods:{addToCart(e){this.cart.push({id:e._id,name:e.prodname,price:e.price,quantity:1}),localStorage.setItem("cart",JSON.stringify(this.cart))}}},H=Object.assign(G,{__name:"Allproduct",setup(e){return(t,c)=>{const n=b("ion-icon");return o(),d(v,null,[r(f),a("main",null,[t.filter?(o(),d("aside",z,[r(n,{onClick:c[0]||(c[0]=s=>t.filter=!t.filter),class:"aside_close",name:"close-outline"}),I])):l("",!0),a("section",V,[B,a("div",A,[a("div",null,[a("p",$,i(t.response.count)+" termék",1)]),a("div",{onClick:c[1]||(c[1]=s=>t.filter=!t.filter),style:{visibility:"hidden"}},[a("p",j,[p(" Szűrés"),r(n,{name:"ellipsis-vertical-outline"})])])]),a("div",q,[(o(!0),d(v,null,u(t.response.products,s=>(o(),g(y(S),{key:s._id,to:t.linkurl+s._id},{default:m(()=>[a("div",x,[a("div",L,[a("img",{src:t.imgurl+s.image},null,8,O),s.activesale==="true"?(o(),d("h5",R,i(s.saleprecent)+" % ",1)):l("",!0)]),a("div",T,[a("h3",null,i(s.prodname),1),a("div",D,[s.activesale==="false"?(o(),d("h4",E,i(s.price)+" Ft",1)):l("",!0),s.activesale==="true"?(o(),d("h4",J,i(s.price)+" Ft ",1)):l("",!0),s.activesale==="true"?(o(),d("h4",M,i(Math.round(s.price-s.price/100*s.saleprecent))+" Ft ",1)):l("",!0)])])])]),_:2},1032,["to"]))),128))])])]),r(w)],64)}}}),P=_(H,[["__scopeId","data-v-8bb9431a"]]);export{P as default};
