import{_,o as t,c as o,a as l,b as s,t as a,F as i,f as d,h as u,i as p,j as h,w as k,d as c,u as f,R as g,k as v}from"./index-3c88a60d.js";const y={class:"s"},m={class:"picked-t"},w={class:"item-list"},F={class:"item"},b={class:"img_w"},C=["src"],x={key:0,class:"saleprecent"},B={class:"text"},N={class:"prices_b"},P={key:0},V={key:1,class:"oldprice"},$={key:2,class:"newprice"},j={data:()=>({response:[],filter:!1,imgurl:"/prodimgs/",linkurl:"/shop/picked?id=",count:0}),mounted(){u.get("https://elenora.hu:444/products/getbycollection/"+this.$route.query.n).then(r=>this.response=r.data)},methods:{}},q=Object.assign(j,{__name:"PickedCollections",setup(r){return(n,L)=>(t(),o(i,null,[l(p),s("main",null,[s("section",y,[s("h1",m,a(n.$route.query.n)+" kollekció",1),s("div",w,[(t(!0),o(i,null,d(n.response,e=>(t(),h(f(g),{key:e._id,to:n.linkurl+e._id},{default:k(()=>[s("div",F,[s("div",b,[s("img",{src:"/newimgs/"+e.image+".webp"},null,8,C),e.activesale==="true"?(t(),o("h5",x,a(e.saleprecent)+" % ",1)):c("",!0)]),s("div",B,[s("h3",null,a(e.prodname),1),s("div",N,[e.activesale==="false"?(t(),o("h4",P,a(e.price)+" Ft",1)):c("",!0),e.activesale==="true"?(t(),o("h4",V,a(e.price)+" Ft",1)):c("",!0),e.activesale==="true"?(t(),o("h4",$,a(Math.round(e.price-e.price/100*e.saleprecent))+" Ft ",1)):c("",!0)])])])]),_:2},1032,["to"]))),128))])])]),l(v)],64))}}),D=_(q,[["__scopeId","data-v-aaf4e104"]]);export{D as default};