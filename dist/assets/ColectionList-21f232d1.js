import{_,h as d,o as l,c as s,b as t,F as i,f as p,t as n,p as r,m as u}from"./index-331d25fc.js";const h={name:"GetCollections",data(){return{collections:[]}},mounted(){d.get("https://egoncompany.hu:444/collections/getall").then(e=>this.collections=e.data)}},c=e=>(r("data-v-8f45456f"),e=e(),u(),e),f={class:"listprod"},g={cellspacing:"0",cellpadding:"0"},m=c(()=>t("thead",null,[t("tr",null,[t("th",null,"Neve"),t("th",null,"Típusa"),t("th",null,"Neme"),t("th")])],-1)),y=c(()=>t("td",null,"•••",-1));function v(e,x,C,I,a,S){return l(),s("section",f,[t("table",g,[m,t("tbody",null,[(l(!0),s(i,null,p(a.collections,o=>(l(),s("tr",{key:o._id},[t("td",null,n(o.col_name),1),t("td",null,n(o.col_type),1),t("td",null,n(o.col_gender),1),y]))),128))])])])}const k=_(h,[["render",v],["__scopeId","data-v-8f45456f"]]);export{k as C};