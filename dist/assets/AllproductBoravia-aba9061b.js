import{_,r as f,o as l,c as r,j as h,i as b,b as s,a as n,d as k,t as p,e as m,F as u,f as g,g as y,h as S,l as C,p as z,m as B}from"./index-ffb9f59d.js";const N=e=>(z("data-v-13d11fb2"),e=e(),B(),e),I={key:0},A=y('<h1 class="aside_title" data-v-13d11fb2>Szűrők</h1><div class="box" data-v-13d11fb2><h3 data-v-13d11fb2>Ár</h3></div><div class="box" data-v-13d11fb2><h3 data-v-13d11fb2>Szín</h3><div class="color-list" data-v-13d11fb2><div class="dot" data-v-13d11fb2><div class="white color" data-v-13d11fb2></div></div><div class="dot" data-v-13d11fb2><div class="black color" data-v-13d11fb2></div></div><div class="dot" data-v-13d11fb2><div class="red color" data-v-13d11fb2></div></div><div class="dot" data-v-13d11fb2><div class="yellow color" data-v-13d11fb2></div></div><div class="dot" data-v-13d11fb2><div class="green color" data-v-13d11fb2></div></div><div class="dot" data-v-13d11fb2><div class="blue color" data-v-13d11fb2></div></div></div></div><div class="box" data-v-13d11fb2><h3 data-v-13d11fb2>Ásvány</h3></div>',4),F={class:"s"},V=N(()=>s("h1",{class:"picked-t"},"Fonott karkötő",-1)),j={class:"list-header"},q={class:"prod-count"},w={class:"rendezes"},$={class:"item-list"},O=["to"],T={class:"img_w"},J=["src"],D={class:"text"},E={class:"flex"},L={data:()=>({response:[],filter:!1,imgurl:"https://elenora.hu:444/getimage/",linkurl:"/shop/picked?id=",count:0,key:0,cart:[],p_product:{id:"",name:"",price:0,quantity:0}}),mounted(){S.get("https://elenora.hu:444/products/getall/boravia").then(e=>this.response=e.data)},methods:{addToCart(e,a,d,o){var t=this.cart.find(v=>v.name==a);if(!t&&(this.cart.push({id:e,name:a,img:d,size:null,price:o,quantity:1,sale:0,visitno:!0}),localStorage.setItem("cart",JSON.stringify(this.cart)),this.key+=1,this.cart.reduce((c,i)=>c+Math.round(i.price-i.price/100*i.sale)*i.quantity,0)>1e4)){let c=this.cart.find(i=>i.name=="Ajándék zsákbamacska karkötő");console.log(c),c||(this.cart.push({id:9,name:"Ajándék zsákbamacska karkötő",price:0,quantity:1,sale:0,img:null,visitno:!0}),localStorage.setItem("cart",JSON.stringify(this.cart)),this.key+=1)}}}},M=Object.assign(L,{__name:"AllproductBoravia",setup(e){return(a,d)=>{const o=f("ion-icon");return l(),r(u,null,[(l(),h(b,{key:a.key})),s("main",null,[a.filter?(l(),r("aside",I,[n(o,{onClick:d[0]||(d[0]=t=>a.filter=!a.filter),class:"aside_close",name:"close-outline"}),A])):k("",!0),s("section",F,[V,s("div",j,[s("div",null,[s("p",q,p(a.response.count)+" termék",1)]),s("div",{onClick:d[1]||(d[1]=t=>a.filter=!a.filter)},[s("p",w,[m(" Szűrés"),n(o,{name:"ellipsis-vertical-outline"})])])]),s("div",$,[(l(!0),r(u,null,g(a.response.products,t=>(l(),r("div",{class:"item",key:t._id,to:a.linkurl+t._id},[s("div",T,[s("img",{src:a.imgurl+t.image},null,8,J)]),s("div",D,[s("h3",null,p(t.prodname),1),s("div",E,[s("h4",null,p(t.price)+" Ft",1),n(o,{name:"cart-outline",onClick:v=>a.addToCart(t._id,t.prodname,t.image,t.price)},null,8,["onClick"])])])],8,O))),128))])])]),n(C)],64)}}}),G=_(M,[["__scopeId","data-v-13d11fb2"]]);export{G as default};
