import{_ as f,r as _,o as t,c as o,a as n,b as s,d as l,t as i,e as p,F as v,f as u,g as h,h as k,i as g,j as y,w as m,u as b,R as w,k as S,p as F,l as C}from"./index-d89cc2cf.js";const N=d=>(F("data-v-ee8fa6f4"),d=d(),C(),d),V={key:0},z=h('<h1 class="aside_title" data-v-ee8fa6f4>Szűrők</h1><div class="box" data-v-ee8fa6f4><h3 data-v-ee8fa6f4>Ár</h3></div><div class="box" data-v-ee8fa6f4><h3 data-v-ee8fa6f4>Szín</h3><div class="color-list" data-v-ee8fa6f4><div class="dot" data-v-ee8fa6f4><div class="white color" data-v-ee8fa6f4></div></div><div class="dot" data-v-ee8fa6f4><div class="black color" data-v-ee8fa6f4></div></div><div class="dot" data-v-ee8fa6f4><div class="red color" data-v-ee8fa6f4></div></div><div class="dot" data-v-ee8fa6f4><div class="yellow color" data-v-ee8fa6f4></div></div><div class="dot" data-v-ee8fa6f4><div class="green color" data-v-ee8fa6f4></div></div><div class="dot" data-v-ee8fa6f4><div class="blue color" data-v-ee8fa6f4></div></div></div></div><div class="box" data-v-ee8fa6f4><h3 data-v-ee8fa6f4>Ásvány</h3></div>',4),B={class:"s"},I=N(()=>s("h1",{class:"picked-t"},"Férfi karkötők",-1)),M={class:"list-header"},x={class:"prod-count"},$={class:"rendezes"},j={class:"item-list"},L={class:"item"},R={class:"img_w"},D=["src"],E={key:0,class:"saleprecent"},O={class:"text"},T={class:"prices_b"},q={key:0},A={key:1,class:"oldprice"},G={key:2,class:"newprice"},H={data:()=>({response:[],filter:!1,imgurl:"/prodimgs/",linkurl:"/shop/picked?id="}),mounted(){k.get("https://elenora.hu:444/products/getbycateg/male").then(d=>this.response=d.data)}},J=Object.assign(H,{__name:"Men",setup(d){return(a,c)=>{const r=_("ion-icon");return t(),o(v,null,[n(g),s("main",null,[a.filter?(t(),o("aside",V,[n(r,{onClick:c[0]||(c[0]=e=>a.filter=!a.filter),class:"aside_close",name:"close-outline"}),z])):l("",!0),s("section",B,[I,s("div",M,[s("div",null,[s("p",x,i(a.response.count)+" termék",1)]),s("div",{onClick:c[1]||(c[1]=e=>a.filter=!a.filter),style:{visibility:"hidden"}},[s("p",$,[p(" Szűrés"),n(r,{name:"ellipsis-vertical-outline"})])])]),s("div",j,[(t(!0),o(v,null,u(a.response.products,e=>(t(),y(b(w),{key:e._id,to:a.linkurl+e._id},{default:m(()=>[s("div",L,[s("div",R,[s("img",{src:"/newimgs/"+e.image+".webp"},null,8,D),e.activesale==="true"?(t(),o("h5",E,i(e.saleprecent)+" % ",1)):l("",!0)]),s("div",O,[s("h3",null,i(e.prodname),1),s("div",T,[e.activesale==="false"?(t(),o("h4",q,i(e.price)+" Ft",1)):l("",!0),e.activesale==="true"?(t(),o("h4",A,i(e.price)+" Ft",1)):l("",!0),e.activesale==="true"?(t(),o("h4",G,i(Math.round(e.price-e.price/100*e.saleprecent))+" Ft ",1)):l("",!0)])])])]),_:2},1032,["to"]))),128))])])]),n(S)],64)}}}),P=f(J,[["__scopeId","data-v-ee8fa6f4"]]);export{P as default};
