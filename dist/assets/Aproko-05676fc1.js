import{_ as p,r as u,o,c as d,a as c,b as a,d as l,t as i,e as h,F as v,f as k,g as f,h as m,i as g,j as y,w as S,u as _,k as b,R as w,l as C,p as F,m as N}from"./index-b93fd1dc.js";const I=e=>(F("data-v-855566a1"),e=e(),N(),e),V={key:0},z=f('<h1 class="aside_title" data-v-855566a1>Szűrők</h1><div class="box" data-v-855566a1><h3 data-v-855566a1>Ár</h3></div><div class="box" data-v-855566a1><h3 data-v-855566a1>Szín</h3><div class="color-list" data-v-855566a1><div class="dot" data-v-855566a1><div class="white color" data-v-855566a1></div></div><div class="dot" data-v-855566a1><div class="black color" data-v-855566a1></div></div><div class="dot" data-v-855566a1><div class="red color" data-v-855566a1></div></div><div class="dot" data-v-855566a1><div class="yellow color" data-v-855566a1></div></div><div class="dot" data-v-855566a1><div class="green color" data-v-855566a1></div></div><div class="dot" data-v-855566a1><div class="blue color" data-v-855566a1></div></div></div></div><div class="box" data-v-855566a1><h3 data-v-855566a1>Ásvány</h3></div>',4),A={class:"s"},B=I(()=>a("h1",{class:"picked-t"},"Apró köves karkötők",-1)),x={class:"list-header"},$={class:"prod-count"},j={class:"rendezes"},q={class:"item-list"},L={class:"item"},O={class:"img_w"},R={key:0,class:"saleprecent"},T={class:"text"},D={class:"prices_b"},E={key:0},J={key:1,class:"oldprice"},M={key:2,class:"newprice"},G={data:()=>({response:[],filter:!1,imgurl:"/prodimgs/",linkurl:"/shop/picked?id=",count:0,p_product:{id:"",name:"",price:0,quantity:0}}),mounted(){m.get("https://elenora.hu:444/products/getbycateg/aproko").then(e=>this.response=e.data)},methods:{addToCart(e){this.cart.push({id:e._id,name:e.prodname,price:e.price,quantity:1}),localStorage.setItem("cart",JSON.stringify(this.cart))}}},H=Object.assign(G,{__name:"Aproko",setup(e){return(t,r)=>{const n=u("ion-icon");return o(),d(v,null,[c(g),a("main",null,[t.filter?(o(),d("aside",V,[c(n,{onClick:r[0]||(r[0]=s=>t.filter=!t.filter),class:"aside_close",name:"close-outline"}),z])):l("",!0),a("section",A,[B,a("div",x,[a("div",null,[a("p",$,i(t.response.count)+" termék",1)]),a("div",{onClick:r[1]||(r[1]=s=>t.filter=!t.filter)},[a("p",j,[h(" Szűrés"),c(n,{name:"ellipsis-vertical-outline"})])])]),a("div",q,[(o(!0),d(v,null,k(t.response.products,s=>(o(),y(_(w),{key:s._id,to:t.linkurl+s._id},{default:S(()=>[a("div",L,[a("div",O,[c(_(b),{src:t.imgurl+s.image},null,8,["src"]),s.activesale==="true"?(o(),d("h5",R,i(s.saleprecent)+" % ",1)):l("",!0)]),a("div",T,[a("h3",null,i(s.prodname),1),a("div",D,[s.activesale==="false"?(o(),d("h4",E,i(s.price)+" Ft",1)):l("",!0),s.activesale==="true"?(o(),d("h4",J,i(s.price)+" Ft",1)):l("",!0),s.activesale==="true"?(o(),d("h4",M,i(Math.round(s.price-s.price/100*s.saleprecent))+" Ft ",1)):l("",!0)])])])]),_:2},1032,["to"]))),128))])])]),c(C)],64)}}}),P=p(H,[["__scopeId","data-v-855566a1"]]);export{P as default};
