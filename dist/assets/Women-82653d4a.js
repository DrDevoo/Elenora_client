import{_,r as p,o as t,c as o,a as n,b as s,d as i,t as d,e as u,F as v,f as h,g as b,h as k,i as f,j as m,w as g,u as y,R as w,k as S,p as F,l as N}from"./index-81d0340d.js";const C=c=>(F("data-v-9c0e2e1b"),c=c(),N(),c),V={key:0},z=b('<h1 class="aside_title" data-v-9c0e2e1b>Szűrők</h1><div class="box" data-v-9c0e2e1b><h3 data-v-9c0e2e1b>Ár</h3></div><div class="box" data-v-9c0e2e1b><h3 data-v-9c0e2e1b>Szín</h3><div class="color-list" data-v-9c0e2e1b><div class="dot" data-v-9c0e2e1b><div class="white color" data-v-9c0e2e1b></div></div><div class="dot" data-v-9c0e2e1b><div class="black color" data-v-9c0e2e1b></div></div><div class="dot" data-v-9c0e2e1b><div class="red color" data-v-9c0e2e1b></div></div><div class="dot" data-v-9c0e2e1b><div class="yellow color" data-v-9c0e2e1b></div></div><div class="dot" data-v-9c0e2e1b><div class="green color" data-v-9c0e2e1b></div></div><div class="dot" data-v-9c0e2e1b><div class="blue color" data-v-9c0e2e1b></div></div></div></div><div class="box" data-v-9c0e2e1b><h3 data-v-9c0e2e1b>Ásvány</h3></div>',4),B={class:"s"},I=C(()=>s("h1",{class:"picked-t"},"Női karkötők",-1)),x={class:"list-header"},W={class:"prod-count"},$={class:"rendezes"},j={class:"item-list"},L={class:"item"},R={class:"img_w"},D=["src"],E={key:0,class:"saleprecent"},M={class:"text"},O={class:"prices_b"},T={key:0},q={key:1,class:"oldprice"},A={key:2,class:"newprice"},G={data:()=>({response:[],filter:!1,imgurl:"/prodimgs/",linkurl:"/shop/picked?id="}),mounted(){k.get("https://elenora.hu:444/products/getbycateg/female").then(c=>this.response=c.data)}},H=Object.assign(G,{__name:"Women",setup(c){return(a,l)=>{const r=p("ion-icon");return t(),o(v,null,[n(f),s("main",null,[a.filter?(t(),o("aside",V,[n(r,{onClick:l[0]||(l[0]=e=>a.filter=!a.filter),class:"aside_close",name:"close-outline"}),z])):i("",!0),s("section",B,[I,s("div",x,[s("div",null,[s("p",W,d(a.response.count)+" termék",1)]),s("div",{onClick:l[1]||(l[1]=e=>a.filter=!a.filter)},[s("p",$,[u(" Szűrés"),n(r,{name:"ellipsis-vertical-outline"})])])]),s("div",j,[(t(!0),o(v,null,h(a.response.products,e=>(t(),m(y(w),{key:e._id,to:a.linkurl+e._id},{default:g(()=>[s("div",L,[s("div",R,[s("img",{src:"/newimgs/"+e.image+".webp"},null,8,D),e.activesale==="true"?(t(),o("h5",E,d(e.saleprecent)+" % ",1)):i("",!0)]),s("div",M,[s("h3",null,d(e.prodname),1),s("div",O,[e.activesale==="false"?(t(),o("h4",T,d(e.price)+" Ft",1)):i("",!0),e.activesale==="true"?(t(),o("h4",q,d(e.price)+" Ft",1)):i("",!0),e.activesale==="true"?(t(),o("h4",A,d(Math.round(e.price-e.price/100*e.saleprecent))+" Ft ",1)):i("",!0)])])])]),_:2},1032,["to"]))),128))])])]),n(S)],64)}}}),K=_(H,[["__scopeId","data-v-9c0e2e1b"]]);export{K as default};
