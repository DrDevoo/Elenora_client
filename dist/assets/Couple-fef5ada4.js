import{_ as p,r as u,o,c as d,a as c,b as s,d as l,t as i,e as h,F as v,f as k,g as f,h as m,i as g,j as y,w as S,u as _,k as b,R as C,l as w,p as F,m as N}from"./index-b93fd1dc.js";const I=a=>(F("data-v-6e488755"),a=a(),N(),a),V={key:0},z=f('<h1 class="aside_title" data-v-6e488755>Szűrők</h1><div class="box" data-v-6e488755><h3 data-v-6e488755>Ár</h3></div><div class="box" data-v-6e488755><h3 data-v-6e488755>Szín</h3><div class="color-list" data-v-6e488755><div class="dot" data-v-6e488755><div class="white color" data-v-6e488755></div></div><div class="dot" data-v-6e488755><div class="black color" data-v-6e488755></div></div><div class="dot" data-v-6e488755><div class="red color" data-v-6e488755></div></div><div class="dot" data-v-6e488755><div class="yellow color" data-v-6e488755></div></div><div class="dot" data-v-6e488755><div class="green color" data-v-6e488755></div></div><div class="dot" data-v-6e488755><div class="blue color" data-v-6e488755></div></div></div></div><div class="box" data-v-6e488755><h3 data-v-6e488755>Ásvány</h3></div>',4),B={class:"s"},x=I(()=>s("h1",{class:"picked-t"},"Páros karkötő",-1)),$={class:"list-header"},j={class:"prod-count"},q={class:"rendezes"},L={class:"item-list"},O={class:"item"},R={class:"img_w"},T={key:0,class:"saleprecent"},D={class:"text"},E={class:"prices_b"},J={key:0},M={key:1,class:"oldprice"},P={key:2,class:"newprice"},A={data:()=>({response:[],filter:!1,imgurl:"/prodimgs/",linkurl:"/shop/picked?id=",count:0,p_product:{id:"",name:"",price:0,quantity:0}}),mounted(){m.get("https://elenora.hu:444/products/getbycateg/couple").then(a=>this.response=a.data)},methods:{addToCart(a){this.cart.push({id:a._id,name:a.prodname,price:a.price,quantity:1}),localStorage.setItem("cart",JSON.stringify(this.cart))}}},G=Object.assign(A,{__name:"Couple",setup(a){return(t,r)=>{const n=u("ion-icon");return o(),d(v,null,[c(g),s("main",null,[t.filter?(o(),d("aside",V,[c(n,{onClick:r[0]||(r[0]=e=>t.filter=!t.filter),class:"aside_close",name:"close-outline"}),z])):l("",!0),s("section",B,[x,s("div",$,[s("div",null,[s("p",j,i(t.response.count)+" termék",1)]),s("div",{onClick:r[1]||(r[1]=e=>t.filter=!t.filter)},[s("p",q,[h(" Szűrés"),c(n,{name:"ellipsis-vertical-outline"})])])]),s("div",L,[(o(!0),d(v,null,k(t.response.products,e=>(o(),y(_(C),{key:e._id,to:t.linkurl+e._id},{default:S(()=>[s("div",O,[s("div",R,[c(_(b),{src:t.imgurl+e.image},null,8,["src"]),e.activesale==="true"?(o(),d("h5",T,i(e.saleprecent)+" % ",1)):l("",!0)]),s("div",D,[s("h3",null,i(e.prodname),1),s("div",E,[e.activesale==="false"?(o(),d("h4",J,i(e.price)+" Ft",1)):l("",!0),e.activesale==="true"?(o(),d("h4",M,i(e.price)+" Ft",1)):l("",!0),e.activesale==="true"?(o(),d("h4",P,i(Math.round(e.price-e.price/100*e.saleprecent))+" Ft ",1)):l("",!0)])])])]),_:2},1032,["to"]))),128))])])]),c(w)],64)}}}),K=p(G,[["__scopeId","data-v-6e488755"]]);export{K as default};
