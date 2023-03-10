import{_ as f,h,r as u,o,c as d,b as s,a as _,w as m,t as a,F as y,f as k,d as l,g as z,p as b,m as C,n as w}from"./index-d9280b58.js";const S={data(){return{showCart:!1,cart:[],imgurl:"https://elenora.hu:444/getimage/",orderid:this.$route.query.order,loading:!1,order:[]}},created(){this.cart=JSON.parse(localStorage.getItem("cart")||"[]")},mounted(){h.get("https://elenora.hu:444/orders/getbyid/"+this.orderid).then(t=>this.order=t.data)},computed:{total(){return this.cart.reduce((t,e)=>t+e.price*e.quantity,0)}},methods:{next(){this.loading=!0,console.log(this.user),h.post("https://elenora.hu:444/orders/finish/"+this.orderid,JSON.stringify(this.user),{headers:{"Content-Type":"application/json"}}).then(t=>this.$router.push({path:"/"})).catch(t=>{console.error("There was an error!",t)})},backto(t){console.log("clicked"),t=="shipping"?this.$router.push({path:"/shop/checkout/shipping",query:{order:this.orderid}}):t=="customer"?this.$router.push({path:"/shop/checkout",query:{order:this.orderid}}):t=="paying"?this.$router.push({path:"/shop/checkout/shipping",query:{order:this.orderid}}):console.log("err")},ordercash(){this.loading=!0},orderpay(){this.loading=!0,h.post("https://elenora.hu:444/orders/pay",JSON.stringify({items:[{id:1,quantity:3},{id:2,quantity:1}],orderid:this.orderid}),{headers:{"Content-Type":"application/json"}}).then(t=>{window.open(t.data.url,"_self")})}}},r=t=>(b("data-v-eef10895"),t=t(),C(),t),F={class:"datas_w"},q={class:"logo_w"},x=r(()=>s("img",{class:"logo",src:w,alt:"ELENORA"},null,-1)),N={class:"cart_w"},M={class:"text"},T=r(()=>s("p",null,"Tekintsd meg a kosarad tartalmát",-1)),I={class:"price"},O={key:0,class:"cart"},L={class:"list"},V={class:"cart_item_imgtext"},B={class:"cart_item_img"},E=["src"],J={class:"cart_item_desc"},R={class:"quantity"},$={class:"cart_item_del"},j={class:"prices"},A=r(()=>s("p",null,"Termékek",-1)),H=r(()=>s("div",null,[s("p",null,"Szállítás"),s("b",null,[s("p",null,"--")])],-1)),D=z('<div class="order_status" data-v-eef10895><div class="sec" data-v-eef10895><div class="circle" data-v-eef10895><p data-v-eef10895>1</p></div><div class="title" data-v-eef10895><p data-v-eef10895>Adatok</p></div></div><div class="hr" data-v-eef10895></div><div class="sec" data-v-eef10895><div class="circle" data-v-eef10895><p data-v-eef10895>2</p></div><div class="title" data-v-eef10895><p data-v-eef10895>Szállítás - Fizetés</p></div></div><div class="hr" data-v-eef10895></div><div class="sec" data-v-eef10895><div class="circle active" data-v-eef10895><p class="active" data-v-eef10895>3</p></div><div class="title" data-v-eef10895><p data-v-eef10895>Összegzés</p></div></div></div>',1),K={class:"osszesites_w"},U={class:"oszesites_b"},G={class:"left"},P=r(()=>s("p",{class:"t"},"Kapcsolattartás",-1)),Q={class:"c"},W={class:"right"},X={class:"oszesites_b"},Y={class:"left"},Z=r(()=>s("p",{class:"t"},"Szállítási cím",-1)),ss={class:"c"},ts={class:"right"},es={class:"oszesites_b"},is={class:"left"},os=r(()=>s("p",{class:"t"},"Szállítási mód",-1)),ds={key:0,class:"c"},as={key:1,class:"c"},rs={class:"right"},cs={class:"oszesites_b"},ls={class:"left"},ns=r(()=>s("p",{class:"t"},"Fizetési mód",-1)),hs={key:0,class:"c"},_s={key:1,class:"c"},ps={class:"right"},us=r(()=>s("br",null,null,-1)),vs={key:2},gs=r(()=>s("br",null,null,-1)),fs=r(()=>s("br",null,null,-1));function ms(t,e,ys,ks,n,c){const v=u("RouterLink"),p=u("ion-icon");return o(),d("main",null,[s("section",F,[s("div",q,[_(v,{to:"/"},{default:m(()=>[x]),_:1})]),s("div",N,[s("div",{class:"header",onClick:e[0]||(e[0]=i=>this.showCart=!this.showCart)},[s("div",M,[_(p,{class:"cart_icon",name:"cart-outline"}),T,_(p,{name:"chevron-down-outline"})]),s("div",I,[s("b",null,[s("p",null,a(c.total)+" Ft",1)])])]),this.showCart?(o(),d("div",O,[s("div",L,[(o(!0),d(y,null,k(n.cart,(i,g)=>(o(),d("div",{class:"cart_item",key:g},[s("div",V,[s("div",B,[s("img",{src:n.imgurl+i.img},null,8,E)]),s("div",J,[s("p",null,a(i.name),1),s("p",null,"Méret: "+a(i.size),1),s("p",R,a(i.quantity),1)])]),s("div",$,[s("h5",null,a(i.price)+" Ft",1)])]))),128))]),s("div",j,[s("div",null,[A,s("b",null,[s("p",null,a(c.total)+" Ft",1)])]),H])])):l("",!0)]),D,s("div",K,[s("div",U,[s("div",G,[P,s("p",Q,a(this.order.u_email),1)]),s("div",W,[s("p",{class:"ch",onClick:e[1]||(e[1]=i=>c.backto("customer"))},"Módosítás")])]),s("div",X,[s("div",Y,[Z,s("p",ss,a(this.order.u_postnumber)+" "+a(this.order.u_city)+", "+a(this.order.u_addresse)+", "+a(this.order.u_legio),1)]),s("div",ts,[s("p",{class:"ch",onClick:e[2]||(e[2]=i=>c.backto("customer"))},"Módosítás")])]),s("div",es,[s("div",is,[os,this.order.shipping=="delivery-cash"?(o(),d("p",ds," Házhozszállítás ")):l("",!0),this.order.shipping=="delivery-card"?(o(),d("p",as," Házhozszállítás ")):l("",!0)]),s("div",rs,[s("p",{class:"ch",onClick:e[3]||(e[3]=i=>c.backto("shipping"))},"Módosítás")])]),s("div",cs,[s("div",ls,[ns,this.order.shipping=="delivery-cash"?(o(),d("p",hs," Utánvétes fizetés ")):l("",!0),this.order.shipping=="delivery-card"?(o(),d("p",_s," Online fizetés ")):l("",!0)]),s("div",ps,[s("p",{class:"ch",onClick:e[4]||(e[4]=i=>c.backto("paying"))},"Módosítás")])])]),s("div",null,[us,!n.loading&&this.order.shipping=="delivery-cash"?(o(),d("button",{key:0,onClick:e[5]||(e[5]=i=>c.ordercash())}," Megrendelés ")):l("",!0),!n.loading&&this.order.shipping=="delivery-card"?(o(),d("button",{key:1,onClick:e[6]||(e[6]=i=>c.orderpay())}," Fizetés és megrendelés ")):l("",!0),n.loading?(o(),d("button",vs,"Töltés")):l("",!0)])]),gs,fs])}const bs=f(S,[["render",ms],["__scopeId","data-v-eef10895"]]);export{bs as default};