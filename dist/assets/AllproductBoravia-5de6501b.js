import{_ as u,r as f,o as l,c as r,j as h,i as b,b as s,a as n,d as k,t as _,e as m,F as p,f as g,g as y,h as S,l as I,p as C,m as z}from"./index-c603d831.js";const A=e=>(C("data-v-13d11fb2"),e=e(),z(),e),B={key:0},N=y('<h1 class="aside_title" data-v-13d11fb2>Szűrők</h1><div class="box" data-v-13d11fb2><h3 data-v-13d11fb2>Ár</h3></div><div class="box" data-v-13d11fb2><h3 data-v-13d11fb2>Szín</h3><div class="color-list" data-v-13d11fb2><div class="dot" data-v-13d11fb2><div class="white color" data-v-13d11fb2></div></div><div class="dot" data-v-13d11fb2><div class="black color" data-v-13d11fb2></div></div><div class="dot" data-v-13d11fb2><div class="red color" data-v-13d11fb2></div></div><div class="dot" data-v-13d11fb2><div class="yellow color" data-v-13d11fb2></div></div><div class="dot" data-v-13d11fb2><div class="green color" data-v-13d11fb2></div></div><div class="dot" data-v-13d11fb2><div class="blue color" data-v-13d11fb2></div></div></div></div><div class="box" data-v-13d11fb2><h3 data-v-13d11fb2>Ásvány</h3></div>',4),V={class:"s"},F=A(()=>s("h1",{class:"picked-t"},"Fonott karkötő",-1)),T={class:"list-header"},j={class:"prod-count"},q={class:"rendezes"},w={class:"item-list"},$=["to"],E={class:"img_w"},L=["src"],O={class:"text"},J={class:"flex"},P={data:()=>({response:[],filter:!1,imgurl:{}.VITE_API_URL+"/getimage/",linkurl:"/shop/picked?id=",count:0,key:0,cart:[],p_product:{id:"",name:"",price:0,quantity:0}}),mounted(){S.get({}.VITE_API_URL+"/products/getall/boravia").then(e=>this.response=e.data)},methods:{addToCart(e,a,d,o){var t=this.cart.find(v=>v.name==a);if(!t&&(this.cart.push({id:e,name:a,img:d,size:null,price:o,quantity:1,sale:0,visitno:!0}),localStorage.setItem("cart",JSON.stringify(this.cart)),this.key+=1,this.cart.reduce((c,i)=>c+Math.round(i.price-i.price/100*i.sale)*i.quantity,0)>1e4)){let c=this.cart.find(i=>i.name=="Ajándék zsákbamacska karkötő");console.log(c),c||(this.cart.push({id:9,name:"Ajándék zsákbamacska karkötő",price:0,quantity:1,sale:0,img:null,visitno:!0}),localStorage.setItem("cart",JSON.stringify(this.cart)),this.key+=1)}}}},R=Object.assign(P,{__name:"AllproductBoravia",setup(e){return(a,d)=>{const o=f("ion-icon");return l(),r(p,null,[(l(),h(b,{key:a.key})),s("main",null,[a.filter?(l(),r("aside",B,[n(o,{onClick:d[0]||(d[0]=t=>a.filter=!a.filter),class:"aside_close",name:"close-outline"}),N])):k("",!0),s("section",V,[F,s("div",T,[s("div",null,[s("p",j,_(a.response.count)+" termék",1)]),s("div",{onClick:d[1]||(d[1]=t=>a.filter=!a.filter)},[s("p",q,[m(" Szűrés"),n(o,{name:"ellipsis-vertical-outline"})])])]),s("div",w,[(l(!0),r(p,null,g(a.response.products,t=>(l(),r("div",{class:"item",key:t._id,to:a.linkurl+t._id},[s("div",E,[s("img",{src:a.imgurl+t.image},null,8,L)]),s("div",O,[s("h3",null,_(t.prodname),1),s("div",J,[s("h4",null,_(t.price)+" Ft",1),n(o,{name:"cart-outline",onClick:v=>a.addToCart(t._id,t.prodname,t.image,t.price)},null,8,["onClick"])])])],8,$))),128))])])]),n(I)],64)}}}),D=u(R,[["__scopeId","data-v-13d11fb2"]]);export{D as default};
