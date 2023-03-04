import{_ as m,h,r as p,o as c,c as d,b as s,a as _,w as g,t as i,F as k,f as y,d as n,g as z,p as b,m as C,n as w}from"./index-8b7a0536.js";const S={data(){return{showCart:!1,cart:[],imgurl:"https://elenora.hu:444/getimage/",orderid:this.$route.query.order,loading:!1,order:[]}},created(){this.cart=JSON.parse(localStorage.getItem("cart")||"[]")},mounted(){h.get("https://elenora.hu:444/orders/getbyid/"+this.orderid).then(e=>this.order=e.data)},computed:{total(){return this.cart.reduce((e,t)=>e+t.price*t.quantity,0)}},methods:{next(){this.loading=!0,console.log(this.user),h.post("https://elenora.hu:444/orders/saveshipping/"+this.orderid,JSON.stringify(this.user),{headers:{"Content-Type":"application/json"}}).then(e=>this.$router.push({path:"/shop/checkout/payment",query:{order:this.orderid}})).catch(e=>{console.error("There was an error!",e)})}}},o=e=>(b("data-v-247f00ac"),e=e(),C(),e),x={class:"datas_w"},N={class:"logo_w"},F=o(()=>s("img",{class:"logo",src:w,alt:"ELENORA"},null,-1)),q={class:"cart_w"},I={class:"text"},T=o(()=>s("p",null,"Tekintsd meg a kosarad tartalmát",-1)),L={class:"price"},M={key:0,class:"cart"},O={class:"list"},R={class:"cart_item_imgtext"},V={class:"cart_item_img"},B=["src"],E={class:"cart_item_desc"},A={class:"quantity"},H={class:"cart_item_del"},J={class:"prices"},P=o(()=>s("p",null,"Termékek",-1)),j=o(()=>s("div",null,[s("p",null,"Szállítás"),s("b",null,[s("p",null,"--")])],-1)),D=z('<div class="order_status" data-v-247f00ac><div class="sec" data-v-247f00ac><div class="circle" data-v-247f00ac><p data-v-247f00ac>1</p></div><div class="title" data-v-247f00ac><p data-v-247f00ac>Adatok</p></div></div><div class="hr" data-v-247f00ac></div><div class="sec" data-v-247f00ac><div class="circle" data-v-247f00ac><p data-v-247f00ac>2</p></div><div class="title" data-v-247f00ac><p data-v-247f00ac>Szállítás</p></div></div><div class="hr" data-v-247f00ac></div><div class="sec" data-v-247f00ac><div class="circle active" data-v-247f00ac><p class="active" data-v-247f00ac>3</p></div><div class="title" data-v-247f00ac><p data-v-247f00ac>Fizetés</p></div></div><div class="hr" data-v-247f00ac></div><div class="sec" data-v-247f00ac><div class="circle" data-v-247f00ac><p data-v-247f00ac>4</p></div><div class="title" data-v-247f00ac><p data-v-247f00ac>Összegzés</p></div></div></div>',1),K={class:"osszesites_w"},U={class:"oszesites_b"},G={class:"left"},Q=o(()=>s("p",{class:"t"},"Kapcsolattartás",-1)),W={class:"c"},X={class:"right"},Y={class:"oszesites_b"},Z={class:"left"},$=o(()=>s("p",{class:"t"},"Szállítási cím",-1)),ss={class:"c"},ts={class:"right"},es={class:"oszesites_b"},as={class:"left"},is=o(()=>s("p",{class:"t"},"Szállítási mód",-1)),os={key:0,class:"c"},cs={key:1,class:"c"},ds={class:"right"},ls=o(()=>s("h3",null,"Szállítási mód",-1)),ns=o(()=>s("br",null,null,-1)),rs=o(()=>s("br",null,null,-1)),_s=o(()=>s("br",null,null,-1));function vs(e,t,hs,ps,r,l){const u=p("RouterLink"),v=p("ion-icon");return c(),d("main",null,[s("section",x,[s("div",N,[_(u,{to:"/"},{default:g(()=>[F]),_:1})]),s("div",q,[s("div",{class:"header",onClick:t[0]||(t[0]=a=>this.showCart=!this.showCart)},[s("div",I,[_(v,{class:"cart_icon",name:"cart-outline"}),T,_(v,{name:"chevron-down-outline"})]),s("div",L,[s("b",null,[s("p",null,i(l.total)+" Ft",1)])])]),this.showCart?(c(),d("div",M,[s("div",O,[(c(!0),d(k,null,y(r.cart,(a,f)=>(c(),d("div",{class:"cart_item",key:f},[s("div",R,[s("div",V,[s("img",{src:r.imgurl+a.img},null,8,B)]),s("div",E,[s("p",null,i(a.name),1),s("p",null,"Méret: "+i(a.size),1),s("p",A,i(a.quantity),1)])]),s("div",H,[s("h5",null,i(a.price)+" Ft",1)])]))),128))]),s("div",J,[s("div",null,[P,s("b",null,[s("p",null,i(l.total)+" Ft",1)])]),j])])):n("",!0)]),D,s("div",K,[s("div",U,[s("div",G,[Q,s("p",W,i(this.order.u_email),1)]),s("div",X,[s("p",{class:"ch",onClick:t[1]||(t[1]=a=>e.backto("customer"))},"Módosítás")])]),s("div",Y,[s("div",Z,[$,s("p",ss,i(this.order.u_postnumber)+" "+i(this.order.u_city)+", "+i(this.order.u_addresse)+", "+i(this.order.u_legio),1)]),s("div",ts,[s("p",{class:"ch",onClick:t[2]||(t[2]=a=>e.backto("customer"))},"Módosítás")])]),s("div",es,[s("div",as,[is,this.order.shipping=="delivery-cash"?(c(),d("p",os,"Házhozszállítás - Utánvétes fizetés")):n("",!0),this.order.shipping=="delivery-card"?(c(),d("p",cs,"Házhozszállítás - Online fizetés")):n("",!0)]),s("div",ds,[s("p",{class:"ch",onClick:t[3]||(t[3]=a=>e.backto("shipping"))},"Módosítás")])])]),s("div",null,[ls,ns,r.loading?n("",!0):(c(),d("button",{key:0,onClick:t[4]||(t[4]=(...a)=>l.next&&l.next(...a))},"Rendelés Összegzése")),r.loading?(c(),d("button",{key:1,onClick:t[5]||(t[5]=(...a)=>l.next&&l.next(...a))},"Töltés")):n("",!0)])]),rs,_s])}const fs=m(S,[["render",vs],["__scopeId","data-v-247f00ac"]]);export{fs as default};
