import{r as v,o as i,c as d,a as l,b as s,d as u,t as a,e as _,F as r,f as h,g as p,h as m,H as k,i as g,w as f,u as y,R as b,j as z}from"./index-63d9ac94.js";const C={key:0},N=p('<h1 class="aside_title">Szűrők</h1><div class="box"><h3>Ár</h3></div><div class="box"><h3>Szín</h3><div class="color-list"><div class="dot"><div class="white color"></div></div><div class="dot"><div class="black color"></div></div><div class="dot"><div class="red color"></div></div><div class="dot"><div class="yellow color"></div></div><div class="dot"><div class="green color"></div></div><div class="dot"><div class="blue color"></div></div></div></div><div class="box"><h3>Ásvány</h3></div>',4),S={class:"s"},V=s("h1",{class:"picked-t"},"Összes karkötő",-1),w={class:"list-header"},B={class:"prod-count"},F={class:"rendezes"},x={class:"item-list"},j={class:"item"},A=["src"],H={class:"text"},L={data:()=>({response:[],filter:!1,imgurl:"https://egoncompany.hu:444/getimage/",linkurl:"/shop/picked?id=",count:0}),mounted(){m.get("https://egoncompany.hu:444/products/getall").then(n=>this.response=n.data)}},$=Object.assign(L,{__name:"Allproduct",setup(n){return(e,o)=>{const c=v("ion-icon");return i(),d(r,null,[l(k),s("main",null,[e.filter?(i(),d("aside",C,[l(c,{onClick:o[0]||(o[0]=t=>e.filter=!e.filter),class:"aside_close",name:"close-outline"}),N])):u("",!0),s("section",S,[V,s("div",w,[s("div",null,[s("p",B,a(e.response.count)+" termék",1)]),s("div",{onClick:o[1]||(o[1]=t=>e.filter=!e.filter)},[s("p",F,[_(" Szűrés"),l(c,{name:"ellipsis-vertical-outline"})])])]),s("div",x,[(i(!0),d(r,null,h(e.response.products,t=>(i(),g(y(b),{to:this.linkurl+t._id,key:t._id},{default:f(()=>[s("div",j,[s("img",{src:this.imgurl+t.image},null,8,A),s("div",H,[s("h3",null,a(t.prodname),1),s("h4",null,a(t.price)+" Ft",1)])])]),_:2},1032,["to"]))),128))])])]),l(z)],64)}}});export{$ as default};
