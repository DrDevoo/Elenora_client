import{_ as p,r as u,o as d,c,a as i,b as a,d as l,t as o,e as h,F as v,f,g as k,h as m,i as g,j as y,w as S,u as _,k as b,R as w,l as C,p as F,m as N}from"./index-55c22a9f.js";const z=e=>(F("data-v-5d18c5af"),e=e(),N(),e),I={key:0},V=k('<h1 class="aside_title" data-v-5d18c5af>Szűrők</h1><div class="box" data-v-5d18c5af><h3 data-v-5d18c5af>Ár</h3></div><div class="box" data-v-5d18c5af><h3 data-v-5d18c5af>Szín</h3><div class="color-list" data-v-5d18c5af><div class="dot" data-v-5d18c5af><div class="white color" data-v-5d18c5af></div></div><div class="dot" data-v-5d18c5af><div class="black color" data-v-5d18c5af></div></div><div class="dot" data-v-5d18c5af><div class="red color" data-v-5d18c5af></div></div><div class="dot" data-v-5d18c5af><div class="yellow color" data-v-5d18c5af></div></div><div class="dot" data-v-5d18c5af><div class="green color" data-v-5d18c5af></div></div><div class="dot" data-v-5d18c5af><div class="blue color" data-v-5d18c5af></div></div></div></div><div class="box" data-v-5d18c5af><h3 data-v-5d18c5af>Ásvány</h3></div>',4),B={class:"s"},x=z(()=>a("h1",{class:"picked-t"},"Összes karkötő",-1)),A={class:"list-header"},$={class:"prod-count"},j={class:"rendezes"},q={class:"item-list"},L={class:"item"},O={class:"img_w"},R={key:0,class:"saleprecent"},T={class:"text"},D={class:"prices_b"},E={key:0},J={key:1,class:"oldprice"},M={key:2,class:"newprice"},G={data:()=>({response:[],filter:!1,imgurl:"/prodimgs/",linkurl:"/shop/picked?id=",count:0,p_product:{id:"",name:"",price:0,quantity:0}}),mounted(){m.get("https://elenora.hu:444/products/getall").then(e=>this.response=e.data)},methods:{addToCart(e){this.cart.push({id:e._id,name:e.prodname,price:e.price,quantity:1}),localStorage.setItem("cart",JSON.stringify(this.cart))}}},H=Object.assign(G,{__name:"Allproduct",setup(e){return(t,r)=>{const n=u("ion-icon");return d(),c(v,null,[i(g),a("main",null,[t.filter?(d(),c("aside",I,[i(n,{onClick:r[0]||(r[0]=s=>t.filter=!t.filter),class:"aside_close",name:"close-outline"}),V])):l("",!0),a("section",B,[x,a("div",A,[a("div",null,[a("p",$,o(t.response.count)+" termék",1)]),a("div",{onClick:r[1]||(r[1]=s=>t.filter=!t.filter)},[a("p",j,[h(" Szűrés"),i(n,{name:"ellipsis-vertical-outline"})])])]),a("div",q,[(d(!0),c(v,null,f(t.response.products,s=>(d(),y(_(w),{key:s._id,to:t.linkurl+s._id},{default:S(()=>[a("div",L,[a("div",O,[i(_(b),{src:t.imgurl+s.image},null,8,["src"]),s.activesale==="true"?(d(),c("h5",R,o(s.saleprecent)+" % ",1)):l("",!0)]),a("div",T,[a("h3",null,o(s.prodname),1),a("div",D,[s.activesale==="false"?(d(),c("h4",E,o(s.price)+" Ft",1)):l("",!0),s.activesale==="true"?(d(),c("h4",J,o(s.price)+" Ft ",1)):l("",!0),s.activesale==="true"?(d(),c("h4",M,o(Math.round(s.price-s.price/100*s.saleprecent))+" Ft ",1)):l("",!0)])])])]),_:2},1032,["to"]))),128))])])]),i(C)],64)}}}),P=p(H,[["__scopeId","data-v-5d18c5af"]]);export{P as default};