import{_,o as d,c as i,j as p,i as u,b as r,t as o,d as c,e as h,F as y,h as l,p as k,m}from"./index-c603d831.js";const n=a=>(k("data-v-8d35cd9f"),a=a(),m(),a),g={class:"s1"},f=n(()=>r("h1",{class:"title"},"Köszönjük!",-1)),v={class:"flex"},z={key:0,class:"count"},I={key:1,class:"count"},b={key:2,class:"price"},T={key:3,class:"price"},S=n(()=>r("section",{class:"s2"},[r("h2",{class:"altitle"},"A rendelésedet sikeresen rögzitettük."),r("p",{class:"altext"}," Nézd meg az emaileidet a rendelés visszaigazolásáról. ")],-1)),q={class:"s3"},N={class:"flex"},O=n(()=>r("p",null,"Rendelés azonosító:",-1)),V={class:"flex"},B=n(()=>r("p",null,"Rendelés dátuma:",-1)),F={key:0},R=n(()=>r("br",null,null,-1)),j={data(){return{ordercount:0,orderprice:0,orderdate:0,orderid:0,add:0,order:[],cart:[],orderdbid:this.$route.query.id,key:0}},mounted(){localStorage.setItem("cart",JSON.stringify(this.cart)),this.key+=1,l.get({}.VITE_API_URL+"/orders/getbyid/"+this.orderdbid).then(a=>this.order=a.data),l.get({}.VITE_API_URL+"/orders/update/ordered/"+this.orderdbid)}},A=Object.assign(j,{__name:"ThankOrder",setup(a){return(e,E)=>(d(),i(y,null,[(d(),p(u,{key:e.key})),r("main",null,[r("section",g,[f,r("div",v,[e.order.cart&&e.order.shipping=="delivery-cash"?(d(),i("p",z,o(e.order.cart.reduce((t,s)=>t+s.quantity,0)-2)+" termék ",1)):c("",!0),e.order.cart&&e.order.shipping=="delivery-card"?(d(),i("p",I,o(e.order.cart.reduce((t,s)=>t+s.quantity,0)-1)+" termék ",1)):c("",!0),e.order.cart&&e.order.shipping=="delivery-cash"?(d(),i("p",b,o(e.order.cart.reduce((t,s)=>t+Math.round(s.price-s.price/100*s.sale)*s.quantity,0))+" Ft ",1)):c("",!0),e.order.cart&&e.order.shipping=="delivery-card"?(d(),i("p",T,o(e.order.cart.reduce((t,s)=>t+s.price*s.quantity,1990))+" Ft ",1)):c("",!0)])]),S,r("section",q,[r("div",N,[O,r("p",null,o(e.order.orderid),1)]),r("div",V,[B,e.order.createdtime?(d(),i("p",F,o(e.order.createdtime.split("T")[0]),1)):c("",!0)]),R,r("p",null,[h(" Küldtünk neked egy visszaigazoló e-mailt erre a címre: "),r("b",null,o(e.order.u_email),1)])])])],64))}}),L=_(A,[["__scopeId","data-v-8d35cd9f"]]);export{L as default};
