import{a as d}from"./axios-bff3f665.js";import{_,o as l,c as s,b as t,F as r,f as i,t as c,p,j as u}from"./index-c7c42f8d.js";const h={name:"GetCollections",data(){return{collections:[]}},mounted(){d.get("http://localhost:3500/collections/getall").then(e=>this.collections=e.data)}},n=e=>(p("data-v-0fc8db51"),e=e(),u(),e),f={class:"listprod"},g={cellspacing:"0",cellpadding:"0"},m=n(()=>t("thead",null,[t("tr",null,[t("th",null,"Neve"),t("th",null,"Típusa"),t("th",null,"Neme"),t("th")])],-1)),b=n(()=>t("td",null,"•••",-1));function y(e,v,x,C,a,I){return l(),s("section",f,[t("table",g,[m,t("tbody",null,[(l(!0),s(r,null,i(a.collections,o=>(l(),s("tr",{key:o._id},[t("td",null,c(o.col_name),1),t("td",null,c(o.col_type),1),t("td",null,c(o.col_gender),1),b]))),128))])])])}const B=_(h,[["render",y],["__scopeId","data-v-0fc8db51"]]);export{B as C};
