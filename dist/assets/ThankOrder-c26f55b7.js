import{_ as p,o as d,c as i,j as u,i as _,b as r,t as o,d as c,e as h,F as y,h as l,p as k,m}from"./index-13876b01.js";const n=a=>(k("data-v-8d35cd9f"),a=a(),m(),a),g={class:"s1"},f=n(()=>r("h1",{class:"title"},"Köszönjük!",-1)),v={class:"flex"},z={key:0,class:"count"},b={key:1,class:"count"},S={key:2,class:"price"},q={key:3,class:"price"},I=n(()=>r("section",{class:"s2"},[r("h2",{class:"altitle"},"A rendelésedet sikeresen rögzitettük."),r("p",{class:"altext"}," Nézd meg az emaileidet a rendelés visszaigazolásáról. ")],-1)),N={class:"s3"},O={class:"flex"},T=n(()=>r("p",null,"Rendelés azonosító:",-1)),B={class:"flex"},F=n(()=>r("p",null,"Rendelés dátuma:",-1)),j={key:0},V=n(()=>r("br",null,null,-1)),K={data(){return{ordercount:0,orderprice:0,orderdate:0,orderid:0,add:0,order:[],cart:[],orderdbid:this.$route.query.id,key:0}},mounted(){localStorage.setItem("cart",JSON.stringify(this.cart)),this.key+=1,l.get("https://elenora.hu:444/orders/getbyid/"+this.orderdbid).then(a=>this.order=a.data),l.get("https://elenora.hu:444/orders/update/ordered/"+this.orderdbid)}},R=Object.assign(K,{__name:"ThankOrder",setup(a){return(e,$)=>(d(),i(y,null,[(d(),u(_,{key:e.key})),r("main",null,[r("section",g,[f,r("div",v,[e.order.cart&&e.order.shipping=="delivery-cash"?(d(),i("p",z,o(e.order.cart.reduce((t,s)=>t+s.quantity,0)-2)+" termék ",1)):c("",!0),e.order.cart&&e.order.shipping=="delivery-card"?(d(),i("p",b,o(e.order.cart.reduce((t,s)=>t+s.quantity,0)-1)+" termék ",1)):c("",!0),e.order.cart&&e.order.shipping=="delivery-cash"?(d(),i("p",S,o(e.order.cart.reduce((t,s)=>t+Math.round(s.price-s.price/100*s.sale)*s.quantity,0))+" Ft ",1)):c("",!0),e.order.cart&&e.order.shipping=="delivery-card"?(d(),i("p",q,o(e.order.cart.reduce((t,s)=>t+s.price*s.quantity,1990))+" Ft ",1)):c("",!0)])]),I,r("section",N,[r("div",O,[T,r("p",null,o(e.order.orderid),1)]),r("div",B,[F,e.order.createdtime?(d(),i("p",j,o(e.order.createdtime.split("T")[0]),1)):c("",!0)]),V,r("p",null,[h(" Küldtünk neked egy visszaigazoló e-mailt erre a címre: "),r("b",null,o(e.order.u_email),1)])])])],64))}}),A=p(R,[["__scopeId","data-v-8d35cd9f"]]);export{A as default};
