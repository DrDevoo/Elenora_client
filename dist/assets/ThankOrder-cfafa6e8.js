import{_ as p,o as d,c as i,j as u,i as h,b as r,t as a,d as c,e as _,F as y,h as l,p as k,l as g}from"./index-c630fe41.js";const n=o=>(k("data-v-ece2851a"),o=o(),g(),o),m={class:"s1"},v=n(()=>r("h1",{class:"title"},"Köszönjük!",-1)),f={class:"flex"},z={key:0,class:"count"},b={key:1,class:"count"},S={key:2,class:"price"},q={key:3,class:"price"},I=n(()=>r("section",{class:"s2"},[r("h2",{class:"altitle"},"A rendelésedet sikeresen rögzitettük."),r("p",{class:"altext"}," Nézd meg az emaileidet a rendelés visszaigazolásáról. ")],-1)),N={class:"s3"},O={class:"flex"},T=n(()=>r("p",null,"Rendelés azonosító:",-1)),B={class:"flex"},F=n(()=>r("p",null,"Rendelés dátuma:",-1)),j={key:0},V=n(()=>r("br",null,null,-1)),K={data(){return{ordercount:0,orderprice:0,orderdate:0,orderid:0,add:0,order:[],cart:[],orderdbid:this.$route.query.id,key:0}},mounted(){localStorage.setItem("cart",JSON.stringify(this.cart)),this.key+=1,l.get("https://elenora.hu:444/orders/getbyid/"+this.orderdbid).then(o=>this.order=o.data),l.get("https://elenora.hu:444/orders/update/ordered/"+this.orderdbid)}},M=Object.assign(K,{__name:"ThankOrder",setup(o){return(e,R)=>(d(),i(y,null,[(d(),u(h,{key:e.key})),r("main",null,[r("section",m,[v,r("div",f,[e.order.cart&&e.order.shipping=="delivery-cash"?(d(),i("p",z,a(e.order.cart.reduce((t,s)=>t+s.quantity,0)-2)+" termék ",1)):c("",!0),e.order.cart&&e.order.shipping=="delivery-card"?(d(),i("p",b,a(e.order.cart.reduce((t,s)=>t+s.quantity,0)-1)+" termék ",1)):c("",!0),e.order.cart&&e.order.shipping=="delivery-cash"?(d(),i("p",S,a(e.order.cart.reduce((t,s)=>t+Math.round(s.price-s.price/100*s.sale)*s.quantity,0))+" Ft ",1)):c("",!0),e.order.cart&&e.order.shipping=="delivery-card"?(d(),i("p",q,a(e.order.cart.reduce((t,s)=>t+Math.round(s.price-s.price/100*s.sale)*s.quantity,0))+" Ft ",1)):c("",!0)])]),I,r("section",N,[r("div",O,[T,r("p",null,a(e.order.orderid),1)]),r("div",B,[F,e.order.createdtime?(d(),i("p",j,a(e.order.createdtime.split("T")[0]),1)):c("",!0)]),V,r("p",null,[_(" Küldtünk neked egy visszaigazoló e-mailt erre a címre: "),r("b",null,a(e.order.u_email),1)])])])],64))}}),w=p(M,[["__scopeId","data-v-ece2851a"]]);export{w as default};
