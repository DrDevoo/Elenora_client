import{_ as p,r as u,o as d,c as o,a as l,b as s,d as c,t as i,e as h,F as v,f as k,g as f,h as m,i as g,j as y,w as S,u as _,k as b,R as w,l as C,p as F,m as N}from"./index-b93fd1dc.js";const z=a=>(F("data-v-284d57e5"),a=a(),N(),a),I={key:0},V=f('<h1 class="aside_title" data-v-284d57e5>Szűrők</h1><div class="box" data-v-284d57e5><h3 data-v-284d57e5>Ár</h3></div><div class="box" data-v-284d57e5><h3 data-v-284d57e5>Szín</h3><div class="color-list" data-v-284d57e5><div class="dot" data-v-284d57e5><div class="white color" data-v-284d57e5></div></div><div class="dot" data-v-284d57e5><div class="black color" data-v-284d57e5></div></div><div class="dot" data-v-284d57e5><div class="red color" data-v-284d57e5></div></div><div class="dot" data-v-284d57e5><div class="yellow color" data-v-284d57e5></div></div><div class="dot" data-v-284d57e5><div class="green color" data-v-284d57e5></div></div><div class="dot" data-v-284d57e5><div class="blue color" data-v-284d57e5></div></div></div></div><div class="box" data-v-284d57e5><h3 data-v-284d57e5>Ásvány</h3></div>',4),B={class:"s"},x=z(()=>s("h1",{class:"picked-t"},"Kedvezményes karkötők",-1)),$={class:"list-header"},j={class:"prod-count"},q={class:"rendezes"},L={class:"item-list"},O={class:"item"},R={class:"img_w"},T={key:0,class:"saleprecent"},D={class:"text"},E={class:"prices_b"},J={key:0},K={key:1,class:"oldprice"},M={key:2,class:"newprice"},A={data:()=>({response:[],filter:!1,imgurl:"/prodimgs/",linkurl:"/shop/picked?id=",count:0,p_product:{id:"",name:"",price:0,quantity:0}}),mounted(){m.get("https://elenora.hu:444/sales/getsaled").then(a=>this.response=a.data)},methods:{addToCart(a){this.cart.push({id:a._id,name:a.prodname,price:a.price,quantity:1}),localStorage.setItem("cart",JSON.stringify(this.cart))}}},G=Object.assign(A,{__name:"Saled",setup(a){return(t,r)=>{const n=u("ion-icon");return d(),o(v,null,[l(g),s("main",null,[t.filter?(d(),o("aside",I,[l(n,{onClick:r[0]||(r[0]=e=>t.filter=!t.filter),class:"aside_close",name:"close-outline"}),V])):c("",!0),s("section",B,[x,s("div",$,[s("div",null,[s("p",j,i(t.response.count)+" termék",1)]),s("div",{onClick:r[1]||(r[1]=e=>t.filter=!t.filter)},[s("p",q,[h(" Szűrés"),l(n,{name:"ellipsis-vertical-outline"})])])]),s("div",L,[(d(!0),o(v,null,k(t.response.products,e=>(d(),y(_(w),{key:e._id,to:t.linkurl+e._id},{default:S(()=>[s("div",O,[s("div",R,[l(_(b),{src:t.imgurl+e.image},null,8,["src"]),e.activesale==="true"?(d(),o("h5",T,i(e.saleprecent)+" % ",1)):c("",!0)]),s("div",D,[s("h3",null,i(e.prodname),1),s("div",E,[e.activesale==="false"?(d(),o("h4",J,i(e.price)+" Ft",1)):c("",!0),e.activesale==="true"?(d(),o("h4",K,i(e.price)+" Ft",1)):c("",!0),e.activesale==="true"?(d(),o("h4",M,i(Math.round(e.price-e.price/100*e.saleprecent))+" Ft ",1)):c("",!0)])])])]),_:2},1032,["to"]))),128))])])]),l(C)],64)}}}),P=p(G,[["__scopeId","data-v-284d57e5"]]);export{P as default};
