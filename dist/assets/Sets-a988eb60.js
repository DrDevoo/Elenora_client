import{_ as p,r as u,o as c,c as d,a as i,b as s,d as l,t as o,e as h,F as v,f as k,g as f,h as m,i as g,j as y,w as S,u as _,k as b,R as w,l as C,p as F,m as N}from"./index-ffb9f59d.js";const z=t=>(F("data-v-e22956c7"),t=t(),N(),t),I={key:0},V=f('<h1 class="aside_title" data-v-e22956c7>Szűrők</h1><div class="box" data-v-e22956c7><h3 data-v-e22956c7>Ár</h3></div><div class="box" data-v-e22956c7><h3 data-v-e22956c7>Szín</h3><div class="color-list" data-v-e22956c7><div class="dot" data-v-e22956c7><div class="white color" data-v-e22956c7></div></div><div class="dot" data-v-e22956c7><div class="black color" data-v-e22956c7></div></div><div class="dot" data-v-e22956c7><div class="red color" data-v-e22956c7></div></div><div class="dot" data-v-e22956c7><div class="yellow color" data-v-e22956c7></div></div><div class="dot" data-v-e22956c7><div class="green color" data-v-e22956c7></div></div><div class="dot" data-v-e22956c7><div class="blue color" data-v-e22956c7></div></div></div></div><div class="box" data-v-e22956c7><h3 data-v-e22956c7>Ásvány</h3></div>',4),B={class:"s"},x=z(()=>s("h1",{class:"picked-t"},"Szettek",-1)),$={class:"list-header"},j={class:"prod-count"},q={class:"rendezes"},L={class:"item-list"},O={class:"item"},R={class:"img_w"},T={key:0,class:"saleprecent"},D={class:"text"},E={class:"prices_b"},J={key:0},M={key:1,class:"oldprice"},A={key:2,class:"newprice"},G={data:()=>({response:[],filter:!1,imgurl:"/prodimgs/",linkurl:"/shop/picked?id=",count:0,p_product:{id:"",name:"",price:0,quantity:0}}),mounted(){m.get("https://elenora.hu:444/products/getbycateg/set").then(t=>this.response=t.data)},methods:{addToCart(t){this.cart.push({id:t._id,name:t.prodname,price:t.price,quantity:1}),localStorage.setItem("cart",JSON.stringify(this.cart))}}},H=Object.assign(G,{__name:"Sets",setup(t){return(a,r)=>{const n=u("ion-icon");return c(),d(v,null,[i(g),s("main",null,[a.filter?(c(),d("aside",I,[i(n,{onClick:r[0]||(r[0]=e=>a.filter=!a.filter),class:"aside_close",name:"close-outline"}),V])):l("",!0),s("section",B,[x,s("div",$,[s("div",null,[s("p",j,o(a.response.count)+" termék",1)]),s("div",{onClick:r[1]||(r[1]=e=>a.filter=!a.filter)},[s("p",q,[h(" Szűrés"),i(n,{name:"ellipsis-vertical-outline"})])])]),s("div",L,[(c(!0),d(v,null,k(a.response.products,e=>(c(),y(_(w),{key:e._id,to:a.linkurl+e._id},{default:S(()=>[s("div",O,[s("div",R,[i(_(b),{src:a.imgurl+e.image},null,8,["src"]),e.activesale==="true"?(c(),d("h5",T,o(e.saleprecent)+" % ",1)):l("",!0)]),s("div",D,[s("h3",null,o(e.prodname),1),s("div",E,[e.activesale==="false"?(c(),d("h4",J,o(e.price)+" Ft",1)):l("",!0),e.activesale==="true"?(c(),d("h4",M,o(e.price)+" Ft",1)):l("",!0),e.activesale==="true"?(c(),d("h4",A,o(Math.round(e.price-e.price/100*e.saleprecent))+" Ft ",1)):l("",!0)])])])]),_:2},1032,["to"]))),128))])])]),i(C)],64)}}}),P=p(H,[["__scopeId","data-v-e22956c7"]]);export{P as default};
