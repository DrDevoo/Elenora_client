import{_ as p,r as u,o as t,c as o,a as l,b as s,d as c,t as i,e as h,F as v,f as k,g as f,h as m,i as g,j as y,w as b,u as _,k as S,R as w,l as F,p as N,m as C}from"./index-13876b01.js";const V=d=>(N("data-v-176e6ee7"),d=d(),C(),d),z={key:0},B=f('<h1 class="aside_title" data-v-176e6ee7>Szűrők</h1><div class="box" data-v-176e6ee7><h3 data-v-176e6ee7>Ár</h3></div><div class="box" data-v-176e6ee7><h3 data-v-176e6ee7>Szín</h3><div class="color-list" data-v-176e6ee7><div class="dot" data-v-176e6ee7><div class="white color" data-v-176e6ee7></div></div><div class="dot" data-v-176e6ee7><div class="black color" data-v-176e6ee7></div></div><div class="dot" data-v-176e6ee7><div class="red color" data-v-176e6ee7></div></div><div class="dot" data-v-176e6ee7><div class="yellow color" data-v-176e6ee7></div></div><div class="dot" data-v-176e6ee7><div class="green color" data-v-176e6ee7></div></div><div class="dot" data-v-176e6ee7><div class="blue color" data-v-176e6ee7></div></div></div></div><div class="box" data-v-176e6ee7><h3 data-v-176e6ee7>Ásvány</h3></div>',4),I={class:"s"},x=V(()=>s("h1",{class:"picked-t"},"Női karkötők",-1)),W={class:"list-header"},$={class:"prod-count"},j={class:"rendezes"},L={class:"item-list"},R={class:"item"},D={class:"img_w"},E={key:0,class:"saleprecent"},M={class:"text"},O={class:"prices_b"},T={key:0},q={key:1,class:"oldprice"},A={key:2,class:"newprice"},G={data:()=>({response:[],filter:!1,imgurl:"/prodimgs/",linkurl:"/shop/picked?id="}),mounted(){m.get("https://elenora.hu:444/products/getbycateg/female").then(d=>this.response=d.data)}},H=Object.assign(G,{__name:"Women",setup(d){return(a,r)=>{const n=u("ion-icon");return t(),o(v,null,[l(g),s("main",null,[a.filter?(t(),o("aside",z,[l(n,{onClick:r[0]||(r[0]=e=>a.filter=!a.filter),class:"aside_close",name:"close-outline"}),B])):c("",!0),s("section",I,[x,s("div",W,[s("div",null,[s("p",$,i(a.response.count)+" termék",1)]),s("div",{onClick:r[1]||(r[1]=e=>a.filter=!a.filter)},[s("p",j,[h(" Szűrés"),l(n,{name:"ellipsis-vertical-outline"})])])]),s("div",L,[(t(!0),o(v,null,k(a.response.products,e=>(t(),y(_(w),{key:e._id,to:a.linkurl+e._id},{default:b(()=>[s("div",R,[s("div",D,[l(_(S),{src:a.imgurl+e.image},null,8,["src"]),e.activesale==="true"?(t(),o("h5",E,i(e.saleprecent)+" % ",1)):c("",!0)]),s("div",M,[s("h3",null,i(e.prodname),1),s("div",O,[e.activesale==="false"?(t(),o("h4",T,i(e.price)+" Ft",1)):c("",!0),e.activesale==="true"?(t(),o("h4",q,i(e.price)+" Ft",1)):c("",!0),e.activesale==="true"?(t(),o("h4",A,i(Math.round(e.price-e.price/100*e.saleprecent))+" Ft ",1)):c("",!0)])])])]),_:2},1032,["to"]))),128))])])]),l(F)],64)}}}),K=p(H,[["__scopeId","data-v-176e6ee7"]]);export{K as default};
