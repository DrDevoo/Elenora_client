import{_ as k,r as u,o,c as i,b as s,a as h,w as m,t as n,d as r,F as v,f,g as b,h as _,L as z,p as w,l as C,D as $}from"./index-2e93f4a3.js";const l=a=>(w("data-v-a3302eff"),a=a(),C(),a),F={class:"datas_w"},S={class:"logo_w"},q=l(()=>s("img",{class:"logo",src:$,alt:"ELENORA"},null,-1)),M={class:"cart_w"},N={class:"text"},L=l(()=>s("p",null,"Tekintsd meg a kosarad tartalmát",-1)),O={class:"price"},I={key:0},T={key:0,class:"cart"},V={class:"list"},j={class:"cart_item_imgtext"},B={class:"cart_item_img"},E=["src"],R={class:"cart_item_desc"},A={class:"lineh"},D={key:0,class:"result"},H=["src"],J={key:1,class:"lineh"},K={key:2,class:"quantity"},U={class:"cart_item_del"},G={class:"prices"},P=l(()=>s("p",null,"Összeg",-1)),Q=b('<div class="order_status" data-v-a3302eff><div class="sec" data-v-a3302eff><div class="circle" data-v-a3302eff><p data-v-a3302eff>1</p></div><div class="title" data-v-a3302eff><p data-v-a3302eff>Adatok</p></div></div><div class="hr" data-v-a3302eff></div><div class="sec" data-v-a3302eff><div class="circle" data-v-a3302eff><p data-v-a3302eff>2</p></div><div class="title" data-v-a3302eff><p data-v-a3302eff>Szállítás - Fizetés</p></div></div><div class="hr" data-v-a3302eff></div><div class="sec" data-v-a3302eff><div class="circle active" data-v-a3302eff><p class="active" data-v-a3302eff>3</p></div><div class="title" data-v-a3302eff><p data-v-a3302eff>Összegzés</p></div></div></div>',1),W={class:"osszesites_w"},X={class:"oszesites_b"},Y={class:"left"},Z=l(()=>s("p",{class:"t"},"Kapcsolattartás",-1)),x={class:"c"},ss={class:"right"},es={class:"oszesites_b"},ts={class:"left"},os=l(()=>s("p",{class:"t"},"Szállítási cím",-1)),is={class:"c"},as={class:"right"},ds={class:"oszesites_b"},rs={class:"left"},ns=l(()=>s("p",{class:"t"},"Szállítási mód",-1)),ls={key:0,class:"c"},cs={key:1,class:"c"},hs={class:"right"},_s={class:"oszesites_b"},ps={class:"left"},us=l(()=>s("p",{class:"t"},"Fizetési mód",-1)),vs={key:0,class:"c"},fs={key:1,class:"c"},gs={class:"right"},ys=l(()=>s("br",null,null,-1)),ks={key:2,class:"btntovabb"},ms=l(()=>s("br",null,null,-1)),bs=l(()=>s("br",null,null,-1)),zs={data(){return{showCart:!1,imgurl:"/prodimgs/",orderid:this.$route.query.order,loading:!1,order:[],cuponcode:null}},mounted(){_.get("https://elenora.hu:444/orders/getbyid/"+this.orderid).then(a=>this.order=a.data)},methods:{next(){this.loading=!0,_.post("https://elenora.hu:444/orders/finish/"+this.orderid,JSON.stringify(this.user),{headers:{"Content-Type":"application/json"}}).then(a=>this.$router.push({path:"/"})).catch(a=>{console.error("There was an error!",a)})},backto(a){console.log("clicked"),a=="shipping"?this.$router.push({path:"/shop/checkout/shipping",query:{order:this.orderid}}):a=="customer"?this.$router.push({path:"/shop/checkout",query:{order:this.orderid}}):a=="paying"?this.$router.push({path:"/shop/checkout/shipping",query:{order:this.orderid}}):console.log("err")},ordercash(){this.loading=!0,this.$router.push({path:"/shop/thanks",query:{id:this.order._id}})},orderpay(){this.loading=!0,_.post("https://elenora.hu:444/orders/pay",JSON.stringify({items:this.order.cart,orderid:this.orderid}),{headers:{"Content-Type":"application/json"}}).then(a=>{window.open(a.data.url,"_self")})}}},ws=Object.assign(zs,{__name:"checkoutFinish",setup(a){return(e,d)=>{const g=u("RouterLink"),p=u("ion-icon");return o(),i("main",null,[s("section",F,[s("div",S,[h(g,{to:"/"},{default:m(()=>[q]),_:1})]),s("div",M,[s("div",{class:"header",onClick:d[0]||(d[0]=t=>e.showCart=!e.showCart)},[s("div",N,[h(p,{class:"cart_icon",name:"cart-outline"}),L,h(p,{name:"chevron-down-outline"})]),s("div",O,[s("b",null,[e.order.cart?(o(),i("p",I,n(e.order.cart.reduce((t,c)=>t+Math.round(c.price-c.price/100*c.sale)*c.quantity,0))+" Ft ",1)):r("",!0)])])]),e.showCart?(o(),i("div",T,[s("div",V,[(o(!0),i(v,null,f(e.order.cart,(t,c)=>(o(),i("div",{class:"cart_item",key:c},[s("div",j,[s("div",B,[t.img!=null?(o(),i("img",{key:0,src:"/newimgs/"+t.img+".webp"},null,8,E)):r("",!0)]),s("div",R,[s("p",A,n(t.name),1),t.custom==!0?(o(),i("div",D,[(o(!0),i(v,null,f(t.pearls,y=>(o(),i("div",null,[s("img",{src:"https://elenora.hu:444/getimage/"+y+".webp"},null,8,H)]))),256))])):r("",!0),t.visitno?r("",!0):(o(),i("p",J,"Méret: "+n(t.size),1)),t.visitno?r("",!0):(o(),i("p",K,n(t.quantity),1))])]),s("div",U,[s("h5",null,n(Math.round(t.price-t.price/100*t.sale))+" Ft",1)])]))),128))]),s("div",G,[s("div",null,[P,s("b",null,[s("p",null,n(e.total)+" Ft",1)])])])])):r("",!0)]),Q,s("div",W,[s("div",X,[s("div",Y,[Z,s("p",x,n(e.order.u_email),1)]),s("div",ss,[s("p",{class:"ch",onClick:d[1]||(d[1]=t=>e.backto("customer"))},"Módosítás")])]),s("div",es,[s("div",ts,[os,s("p",is,n(e.order.u_postnumber)+" "+n(e.order.u_city)+", "+n(e.order.u_addresse)+", "+n(e.order.u_legio),1)]),s("div",as,[s("p",{class:"ch",onClick:d[2]||(d[2]=t=>e.backto("customer"))},"Módosítás")])]),s("div",ds,[s("div",rs,[ns,e.order.shipping=="delivery-cash"?(o(),i("p",ls," Házhozszállítás ")):r("",!0),e.order.shipping=="delivery-card"?(o(),i("p",cs," Házhozszállítás ")):r("",!0)]),s("div",hs,[s("p",{class:"ch",onClick:d[3]||(d[3]=t=>e.backto("shipping"))},"Módosítás")])]),s("div",_s,[s("div",ps,[us,e.order.shipping=="delivery-cash"?(o(),i("p",vs," Utánvétes fizetés ")):r("",!0),e.order.shipping=="delivery-card"?(o(),i("p",fs," Online fizetés ")):r("",!0)]),s("div",gs,[s("p",{class:"ch",onClick:d[4]||(d[4]=t=>e.backto("paying"))},"Módosítás")])])]),s("div",null,[ys,!e.loading&&e.order.shipping=="delivery-cash"?(o(),i("button",{key:0,class:"btntovabb",onClick:d[5]||(d[5]=t=>e.ordercash())}," Megrendelés ")):r("",!0),!e.loading&&e.order.shipping=="delivery-card"?(o(),i("button",{key:1,class:"btntovabb",onClick:d[6]||(d[6]=t=>e.orderpay())}," Fizetés és megrendelés ")):r("",!0),e.loading?(o(),i("button",ks,[h(z)])):r("",!0)])]),ms,bs])}}}),$s=k(ws,[["__scopeId","data-v-a3302eff"]]);export{$s as default};
