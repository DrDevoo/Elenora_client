import{H as m}from"./Header-2da35251.js";import{_,h as g,o as n,c as o,b as t,F as r,f,t as l,p as c,k as u,a as d}from"./index-4d10961a.js";const b={name:"GetInvetory",data(){return{products:[]}},mounted(){g.get("https://egoncompany.hu:444/invetory/getall").then(e=>this.products=e.data)}},a=e=>(c("data-v-2b34d037"),e=e(),u(),e),v={class:"listprod"},y={cellspacing:"0",cellpadding:"0"},k=a(()=>t("thead",null,[t("tr",null,[t("th",null,"Dátum"),t("th",null,"Állapot"),t("th",null,"Megrendelő"),t("th",null,"Termék(ek)"),t("th",null,"Összeg"),t("th"),t("th")])],-1)),x=a(()=>t("td",null,"0",-1)),I=a(()=>t("td",null,"+ /-",-1));function O(e,p,i,L,h,D){return n(),o("section",v,[t("table",y,[k,t("tbody",null,[(n(!0),o(r,null,f(h.products,s=>(n(),o("tr",{key:s._id},[t("td",null,l(s.prodname),1),t("td",null,l(s.price)+" Ft",1),t("td",null,l(s.collections),1),x,I]))),128))])])])}const $=_(b,[["render",O],["__scopeId","data-v-2b34d037"]]);const S=e=>(c("data-v-63b25480"),e=e(),u(),e),w=S(()=>t("h1",{class:"title"},"Rendelések",-1)),B={data(){return{showAdd:!1}}},F=Object.assign(B,{__name:"Orders",setup(e){return(p,i)=>(n(),o(r,null,[d(m),w,t("main",null,[d($)])],64))}}),V=_(F,[["__scopeId","data-v-63b25480"]]);export{V as default};
