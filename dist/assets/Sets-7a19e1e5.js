import{_ as p,r as u,o as c,c as o,a as i,b as s,d as l,t as d,e as h,F as v,f as k,g as f,h as m,i as g,j as y,w as S,u as _,R as b,k as w,p as C,l as F}from"./index-9ddf0895.js";import{i as N}from"./v-lazy-image-5c1bc639.js";const z=t=>(C("data-v-e22956c7"),t=t(),F(),t),I={key:0},V=f('<h1 class="aside_title" data-v-e22956c7>Szűrők</h1><div class="box" data-v-e22956c7><h3 data-v-e22956c7>Ár</h3></div><div class="box" data-v-e22956c7><h3 data-v-e22956c7>Szín</h3><div class="color-list" data-v-e22956c7><div class="dot" data-v-e22956c7><div class="white color" data-v-e22956c7></div></div><div class="dot" data-v-e22956c7><div class="black color" data-v-e22956c7></div></div><div class="dot" data-v-e22956c7><div class="red color" data-v-e22956c7></div></div><div class="dot" data-v-e22956c7><div class="yellow color" data-v-e22956c7></div></div><div class="dot" data-v-e22956c7><div class="green color" data-v-e22956c7></div></div><div class="dot" data-v-e22956c7><div class="blue color" data-v-e22956c7></div></div></div></div><div class="box" data-v-e22956c7><h3 data-v-e22956c7>Ásvány</h3></div>',4),B={class:"s"},x=z(()=>s("h1",{class:"picked-t"},"Szettek",-1)),$={class:"list-header"},j={class:"prod-count"},q={class:"rendezes"},L={class:"item-list"},O={class:"item"},R={class:"img_w"},T={key:0,class:"saleprecent"},D={class:"text"},E={class:"prices_b"},J={key:0},M={key:1,class:"oldprice"},A={key:2,class:"newprice"},G={data:()=>({response:[],filter:!1,imgurl:"/prodimgs/",linkurl:"/shop/picked?id=",count:0,p_product:{id:"",name:"",price:0,quantity:0}}),mounted(){m.get("https://elenora.hu:444/products/getbycateg/set").then(t=>this.response=t.data)},methods:{addToCart(t){this.cart.push({id:t._id,name:t.prodname,price:t.price,quantity:1}),localStorage.setItem("cart",JSON.stringify(this.cart))}}},H=Object.assign(G,{__name:"Sets",setup(t){return(a,r)=>{const n=u("ion-icon");return c(),o(v,null,[i(g),s("main",null,[a.filter?(c(),o("aside",I,[i(n,{onClick:r[0]||(r[0]=e=>a.filter=!a.filter),class:"aside_close",name:"close-outline"}),V])):l("",!0),s("section",B,[x,s("div",$,[s("div",null,[s("p",j,d(a.response.count)+" termék",1)]),s("div",{onClick:r[1]||(r[1]=e=>a.filter=!a.filter)},[s("p",q,[h(" Szűrés"),i(n,{name:"ellipsis-vertical-outline"})])])]),s("div",L,[(c(!0),o(v,null,k(a.response.products,e=>(c(),y(_(b),{key:e._id,to:a.linkurl+e._id},{default:S(()=>[s("div",O,[s("div",R,[i(_(N),{src:a.imgurl+e.image},null,8,["src"]),e.activesale==="true"?(c(),o("h5",T,d(e.saleprecent)+" % ",1)):l("",!0)]),s("div",D,[s("h3",null,d(e.prodname),1),s("div",E,[e.activesale==="false"?(c(),o("h4",J,d(e.price)+" Ft",1)):l("",!0),e.activesale==="true"?(c(),o("h4",M,d(e.price)+" Ft",1)):l("",!0),e.activesale==="true"?(c(),o("h4",A,d(Math.round(e.price-e.price/100*e.saleprecent))+" Ft ",1)):l("",!0)])])])]),_:2},1032,["to"]))),128))])])]),i(w)],64)}}}),Q=p(H,[["__scopeId","data-v-e22956c7"]]);export{Q as default};
