import{_ as p,r as u,o as d,c as t,a as i,b as a,d as l,t as o,e as f,F as v,f as h,g as b,h as k,i as g,j as m,w as y,u as _,k as S,R as w,l as F,p as C,m as N}from"./index-13876b01.js";const V=c=>(C("data-v-1dab7fc6"),c=c(),N(),c),z={key:0},B=b('<h1 class="aside_title" data-v-1dab7fc6>Szűrők</h1><div class="box" data-v-1dab7fc6><h3 data-v-1dab7fc6>Ár</h3></div><div class="box" data-v-1dab7fc6><h3 data-v-1dab7fc6>Szín</h3><div class="color-list" data-v-1dab7fc6><div class="dot" data-v-1dab7fc6><div class="white color" data-v-1dab7fc6></div></div><div class="dot" data-v-1dab7fc6><div class="black color" data-v-1dab7fc6></div></div><div class="dot" data-v-1dab7fc6><div class="red color" data-v-1dab7fc6></div></div><div class="dot" data-v-1dab7fc6><div class="yellow color" data-v-1dab7fc6></div></div><div class="dot" data-v-1dab7fc6><div class="green color" data-v-1dab7fc6></div></div><div class="dot" data-v-1dab7fc6><div class="blue color" data-v-1dab7fc6></div></div></div></div><div class="box" data-v-1dab7fc6><h3 data-v-1dab7fc6>Ásvány</h3></div>',4),I={class:"s"},M=V(()=>a("h1",{class:"picked-t"},"Férfi karkötők",-1)),x={class:"list-header"},$={class:"prod-count"},j={class:"rendezes"},L={class:"item-list"},R={class:"item"},D={class:"img_w"},E={key:0,class:"saleprecent"},O={class:"text"},T={class:"prices_b"},q={key:0},A={key:1,class:"oldprice"},G={key:2,class:"newprice"},H={data:()=>({response:[],filter:!1,imgurl:"/prodimgs/",linkurl:"/shop/picked?id="}),mounted(){k.get("https://elenora.hu:444/products/getbycateg/male").then(c=>this.response=c.data)}},J=Object.assign(H,{__name:"Men",setup(c){return(e,r)=>{const n=u("ion-icon");return d(),t(v,null,[i(g),a("main",null,[e.filter?(d(),t("aside",z,[i(n,{onClick:r[0]||(r[0]=s=>e.filter=!e.filter),class:"aside_close",name:"close-outline"}),B])):l("",!0),a("section",I,[M,a("div",x,[a("div",null,[a("p",$,o(e.response.count)+" termék",1)]),a("div",{onClick:r[1]||(r[1]=s=>e.filter=!e.filter)},[a("p",j,[f(" Szűrés"),i(n,{name:"ellipsis-vertical-outline"})])])]),a("div",L,[(d(!0),t(v,null,h(e.response.products,s=>(d(),m(_(w),{key:s._id,to:e.linkurl+s._id},{default:y(()=>[a("div",R,[a("div",D,[i(_(S),{src:e.imgurl+s.image},null,8,["src"]),s.activesale==="true"?(d(),t("h5",E,o(s.saleprecent)+" % ",1)):l("",!0)]),a("div",O,[a("h3",null,o(s.prodname),1),a("div",T,[s.activesale==="false"?(d(),t("h4",q,o(s.price)+" Ft",1)):l("",!0),s.activesale==="true"?(d(),t("h4",A,o(s.price)+" Ft",1)):l("",!0),s.activesale==="true"?(d(),t("h4",G,o(Math.round(s.price-s.price/100*s.saleprecent))+" Ft ",1)):l("",!0)])])])]),_:2},1032,["to"]))),128))])])]),i(F)],64)}}}),P=p(J,[["__scopeId","data-v-1dab7fc6"]]);export{P as default};
