import{_ as m,r as _,o as d,c as u,b as e,a as o,t as h,w as t,d as k,F as p,p as f,m as v}from"./index-05688b38.js";const w={data(){return{showMenu:!1,fullname:""}},mounted(){localStorage.name&&(this.fullname=localStorage.name)}},s=a=>(f("data-v-834020d9"),a=a(),v(),a),g={class:"header"},M={key:0,class:"menu"},S=s(()=>e("br",null,null,-1)),x=s(()=>e("h3",{class:"link"},"Vezérlőpult",-1)),y=s(()=>e("h3",{class:"link"},"Rendelések",-1)),C=s(()=>e("h3",{class:"link"},"Termékek",-1)),B=s(()=>e("h3",{class:"link"},"Kollekciók",-1)),H=s(()=>e("h3",{class:"link"},"Akciók/Kuponok",-1)),I=s(()=>e("h3",{class:"link"},"Készlet",-1)),V=s(()=>e("h3",{class:"link"},"Beállítások",-1)),b=s(()=>e("h3",{class:"link"},"Hírlevél",-1)),K=s(()=>e("h3",{class:"link"},"Marketing",-1));function N(a,i,R,z,l,F){const c=_("ion-icon"),n=_("RouterLink");return d(),u(p,null,[e("section",g,[e("header",null,[o(c,{class:"ham_icon",name:"menu-outline",onClick:i[0]||(i[0]=r=>l.showMenu=!l.showMenu)}),e("div",null,[e("p",null,h(this.fullname),1)])])]),l.showMenu?(d(),u("section",M,[e("a",{onClick:i[1]||(i[1]=r=>l.showMenu=!l.showMenu)},[o(c,{class:"menu_icon",name:"close-outline"})]),S,o(n,{to:"/admin/dashboard"},{default:t(()=>[x]),_:1}),o(n,{to:"/admin/orders"},{default:t(()=>[y]),_:1}),o(n,{to:"/admin/products"},{default:t(()=>[C]),_:1}),o(n,{to:"/admin/collections"},{default:t(()=>[B]),_:1}),o(n,{to:"/admin/sales"},{default:t(()=>[H]),_:1}),o(n,{to:"/admin/inventory"},{default:t(()=>[I]),_:1}),o(n,{to:"/admin/settings"},{default:t(()=>[V]),_:1}),o(n,{to:"/admin/mail"},{default:t(()=>[b]),_:1}),o(n,{to:"/admin/marketing"},{default:t(()=>[K]),_:1})])):k("",!0)],64)}const A=m(w,[["render",N],["__scopeId","data-v-834020d9"]]);export{A as H};