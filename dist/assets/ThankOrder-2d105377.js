import{_,o as a,c as i,a as p,b as e,t as o,d as c,e as h,F as u,h as l,H as m,p as y,m as g}from"./index-6c1cd7b9.js";const n=r=>(y("data-v-e6ee90d0"),r=r(),g(),r),k={class:"s1"},f=n(()=>e("h1",{class:"title"},"Köszönjük!",-1)),v={class:"flex"},b={key:0,class:"count"},z={key:1,class:"price"},N={key:2,class:"price"},S=n(()=>e("section",{class:"s2"},[e("h2",{class:"altitle"},"A rendelésedet sikeresen rögzitettük."),e("p",{class:"altext"}," Nézd meg az emaileidet a rendelés visszaigazolásáról. ")],-1)),T={class:"s3"},O={class:"flex"},I=n(()=>e("p",null,"Rendelés azonosító:",-1)),q={class:"flex"},F=n(()=>e("p",null,"Rendelés dátuma:",-1)),V={key:0},j=n(()=>e("br",null,null,-1)),B={data(){return{ordercount:0,orderprice:0,orderdate:0,orderid:0,add:0,order:[],cart:[],orderdbid:this.$route.query.id}},mounted(){l.get("https://elenora.hu:444/orders/getbyid/"+this.orderdbid).then(r=>this.order=r.data),l.post("https://elenora.hu:444/orders/finish/"+this.orderdbid,JSON.stringify(this.orderdbid),{headers:{"Content-Type":"application/json"}}).catch(r=>{console.error("There was an error!",r)}),localStorage.setItem("cart",JSON.stringify(this.cart))}},w=Object.assign(B,{__name:"ThankOrder",setup(r){return(s,C)=>(a(),i(u,null,[p(m),e("main",null,[e("section",k,[f,e("div",v,[s.order.cart?(a(),i("p",b,o(s.order.cart.reduce((d,t)=>d+t.quantity,0))+" termék ",1)):c("",!0),s.order.cart&&s.order.shipping=="delivery-cash"?(a(),i("p",z,o(s.order.cart.reduce((d,t)=>d+t.price*t.quantity,2880))+" Ft ",1)):c("",!0),s.order.cart&&s.order.shipping=="delivery-card"?(a(),i("p",N,o(s.order.cart.reduce((d,t)=>d+t.price*t.quantity,1990))+" Ft ",1)):c("",!0)])]),S,e("section",T,[e("div",O,[I,e("p",null,o(s.order.orderid),1)]),e("div",q,[F,s.order.createdtime?(a(),i("p",V,o(s.order.createdtime.split("T")[0]),1)):c("",!0)]),j,e("p",null,[h(" Küldtünk neeked egy visszaigazoló emailt erre a címre: "),e("b",null,o(s.order.u_email),1)])])])],64))}}),J=_(w,[["__scopeId","data-v-e6ee90d0"]]);export{J as default};