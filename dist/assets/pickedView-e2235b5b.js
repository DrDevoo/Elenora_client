import{_ as w,r as _,o,c as r,a as u,b as s,w as v,i as d,d as t,t as c,h as m,H as k,j as b,p as B,k as y}from"./index-412eda03.js";const n=i=>(B("data-v-7a966c52"),i=i(),y(),i),g={class:"top-s"},f=["src"],C={class:"texts-b"},V=n(()=>s("div",{class:"input-b"},[s("div",{class:"selects-b"},[s("div",{class:"size-b box"},[s("p",null,"Méret"),s("select",null,[s("option",{value:"0"},"Select car:"),s("option",{value:"1"},"Audi")])]),s("div",{class:"mennyiseg-b box"},[s("p",null,"Mennyiség")])]),s("div",{class:"add-b"},[s("a",{href:""},[s("p",null,"Kosárba teszem")])])],-1)),S={class:"bottom-s"},z={class:"description-s"},I={class:"desc-b"},$=n(()=>s("h4",null,"Leírás",-1)),E={key:0,class:"text-b"},N={class:"desc-b"},j=n(()=>s("h4",null,"Ásványok",-1)),F={key:0,class:"text-b"},H=n(()=>s("p",null,"Jaspis stb",-1)),M=[H],q={class:"desc-b"},A=n(()=>s("h4",null,"Egyedi karkötő",-1)),D={key:0,class:"text-b"},J=n(()=>s("p",null,"Egyedi karkotot az instan tudsz rebdelni",-1)),K=[J],L=n(()=>s("section",{class:"favorites-s"},null,-1)),O={data(){return{showB1:!0,showB2:!1,showB3:!1,response:[],imgurl:"https://egoncompany.hu:444/getimage/"}},mounted(){m.get("https://egoncompany.hu:444/products/getbyid/"+this.$route.query.id).then(i=>this.response=i.data)}},T=Object.assign(O,{__name:"pickedView",setup(i){return(e,a)=>{const p=_("setion"),l=_("ion-icon");return o(),r("main",null,[u(k),s("section",g,[u(p,{class:"images-s"},{default:v(()=>[s("div",null,[s("img",{class:"pickedimg",src:e.imgurl+e.response.image,alt:"Termék képe"},null,8,f)])]),_:1}),u(p,{class:"texts-s"},{default:v(()=>[s("div",C,[s("h1",null,c(e.response.prodname),1),s("h3",null,c(e.response.categ)+" - "+c(e.response.price)+" Ft",1),s("p",null,c(e.response.description),1)]),V]),_:1})]),s("section",S,[s("section",z,[s("div",I,[s("div",{onClick:a[0]||(a[0]=h=>e.showB1=!e.showB1),class:"title-b"},[$,e.showB1?t("",!0):(o(),d(l,{key:0,name:"chevron-up-outline"})),e.showB1?(o(),d(l,{key:1,class:"downarrow",name:"chevron-down-outline"})):t("",!0)]),e.showB1?(o(),r("div",E,[s("p",null,c(e.response.description),1)])):t("",!0)]),s("div",N,[s("div",{onClick:a[1]||(a[1]=h=>e.showB2=!e.showB2),class:"title-b"},[j,e.showB2?t("",!0):(o(),d(l,{key:0,name:"chevron-up-outline"})),e.showB2?(o(),d(l,{key:1,class:"downarrow",name:"chevron-down-outline"})):t("",!0)]),e.showB2?(o(),r("div",F,M)):t("",!0)]),s("div",q,[s("div",{onClick:a[2]||(a[2]=h=>e.showB3=!e.showB3),class:"title-b"},[A,e.showB3?t("",!0):(o(),d(l,{key:0,name:"chevron-up-outline"})),e.showB3?(o(),d(l,{key:1,class:"downarrow",name:"chevron-down-outline"})):t("",!0)]),e.showB3?(o(),r("div",D,K)):t("",!0)])]),L]),u(b)])}}}),P=w(T,[["__scopeId","data-v-7a966c52"]]);export{P as default};