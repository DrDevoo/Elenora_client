import{_,r as p,o as d,c,a as r,b as s,d as o,t as i,e as h,F as v,f as u,g as b,h as k,i as f,j as m,w as y,u as g,R as S,k as w,p as C,l as F}from"./index-3c88a60d.js";const N=a=>(C("data-v-41ead1bc"),a=a(),F(),a),z={key:0},I=b('<h1 class="aside_title" data-v-41ead1bc>Szűrők</h1><div class="box" data-v-41ead1bc><h3 data-v-41ead1bc>Ár</h3></div><div class="box" data-v-41ead1bc><h3 data-v-41ead1bc>Szín</h3><div class="color-list" data-v-41ead1bc><div class="dot" data-v-41ead1bc><div class="white color" data-v-41ead1bc></div></div><div class="dot" data-v-41ead1bc><div class="black color" data-v-41ead1bc></div></div><div class="dot" data-v-41ead1bc><div class="red color" data-v-41ead1bc></div></div><div class="dot" data-v-41ead1bc><div class="yellow color" data-v-41ead1bc></div></div><div class="dot" data-v-41ead1bc><div class="green color" data-v-41ead1bc></div></div><div class="dot" data-v-41ead1bc><div class="blue color" data-v-41ead1bc></div></div></div></div><div class="box" data-v-41ead1bc><h3 data-v-41ead1bc>Ásvány</h3></div>',4),V={class:"s"},B=N(()=>s("h1",{class:"picked-t"},"Kedvezményes karkötők",-1)),x={class:"list-header"},$={class:"prod-count"},j={class:"rendezes"},q={class:"item-list"},L={class:"item"},O={class:"img_w"},R=["src"],T={key:0,class:"saleprecent"},D={class:"text"},E={class:"prices_b"},J={key:0},K={key:1,class:"oldprice"},M={key:2,class:"newprice"},A={data:()=>({response:[],filter:!1,imgurl:"/prodimgs/",linkurl:"/shop/picked?id=",count:0,p_product:{id:"",name:"",price:0,quantity:0}}),mounted(){k.get("https://elenora.hu:444/sales/getsaled").then(a=>this.response=a.data)},methods:{addToCart(a){this.cart.push({id:a._id,name:a.prodname,price:a.price,quantity:1}),localStorage.setItem("cart",JSON.stringify(this.cart))}}},G=Object.assign(A,{__name:"Saled",setup(a){return(t,l)=>{const n=p("ion-icon");return d(),c(v,null,[r(f),s("main",null,[t.filter?(d(),c("aside",z,[r(n,{onClick:l[0]||(l[0]=e=>t.filter=!t.filter),class:"aside_close",name:"close-outline"}),I])):o("",!0),s("section",V,[B,s("div",x,[s("div",null,[s("p",$,i(t.response.count)+" termék",1)]),s("div",{onClick:l[1]||(l[1]=e=>t.filter=!t.filter),style:{visibility:"hidden"}},[s("p",j,[h(" Szűrés"),r(n,{name:"ellipsis-vertical-outline"})])])]),s("div",q,[(d(!0),c(v,null,u(t.response.products,e=>(d(),m(g(S),{key:e._id,to:t.linkurl+e._id},{default:y(()=>[s("div",L,[s("div",O,[s("img",{src:"/newimgs/"+e.image+".webp"},null,8,R),e.activesale==="true"?(d(),c("h5",T,i(e.saleprecent)+" % ",1)):o("",!0)]),s("div",D,[s("h3",null,i(e.prodname),1),s("div",E,[e.activesale==="false"?(d(),c("h4",J,i(e.price)+" Ft",1)):o("",!0),e.activesale==="true"?(d(),c("h4",K,i(e.price)+" Ft",1)):o("",!0),e.activesale==="true"?(d(),c("h4",M,i(Math.round(e.price-e.price/100*e.saleprecent))+" Ft ",1)):o("",!0)])])])]),_:2},1032,["to"]))),128))])])]),r(w)],64)}}}),P=_(G,[["__scopeId","data-v-41ead1bc"]]);export{P as default};