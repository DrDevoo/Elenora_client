import{_ as m,r as u,o,c as i,b as s,a as h,w as b,t as c,d as a,F as v,f as g,g as z,h as _,L as f,p as w,m as C,y as $}from"./index-ffb9f59d.js";const n=d=>(w("data-v-374c6987"),d=d(),C(),d),F={class:"datas_w"},S={class:"logo_w"},q=n(()=>s("img",{class:"logo",src:$,alt:"ELENORA"},null,-1)),M={class:"cart_w"},N={class:"text"},L=n(()=>s("p",null,"Tekintsd meg a kosarad tartalmát",-1)),O={class:"price"},I={key:0},T={key:0,class:"cart"},V={class:"list"},j={class:"cart_item_imgtext"},B={class:"cart_item_img"},E=["src"],R={class:"cart_item_desc"},A={class:"lineh"},H={key:0,class:"result"},J=["src"],D={key:1,class:"lineh"},K={key:2,class:"quantity"},U={class:"cart_item_del"},G={class:"prices"},P=n(()=>s("p",null,"Összeg",-1)),Q=z('<div class="order_status" data-v-374c6987><div class="sec" data-v-374c6987><div class="circle" data-v-374c6987><p data-v-374c6987>1</p></div><div class="title" data-v-374c6987><p data-v-374c6987>Adatok</p></div></div><div class="hr" data-v-374c6987></div><div class="sec" data-v-374c6987><div class="circle" data-v-374c6987><p data-v-374c6987>2</p></div><div class="title" data-v-374c6987><p data-v-374c6987>Szállítás - Fizetés</p></div></div><div class="hr" data-v-374c6987></div><div class="sec" data-v-374c6987><div class="circle active" data-v-374c6987><p class="active" data-v-374c6987>3</p></div><div class="title" data-v-374c6987><p data-v-374c6987>Összegzés</p></div></div></div>',1),W={class:"osszesites_w"},X={class:"oszesites_b"},Y={class:"left"},Z=n(()=>s("p",{class:"t"},"Kapcsolattartás",-1)),x={class:"c"},ss={class:"right"},ts={class:"oszesites_b"},es={class:"left"},os=n(()=>s("p",{class:"t"},"Szállítási cím",-1)),is={class:"c"},ds={class:"right"},rs={class:"oszesites_b"},as={class:"left"},cs=n(()=>s("p",{class:"t"},"Szállítási mód",-1)),ns={key:0,class:"c"},ls={key:1,class:"c"},hs={class:"right"},_s={class:"oszesites_b"},ps={class:"left"},us=n(()=>s("p",{class:"t"},"Fizetési mód",-1)),vs={key:0,class:"c"},gs={key:1,class:"c"},ys={class:"right"},ks=n(()=>s("br",null,null,-1)),ms={key:2,class:"btntovabb"},bs=n(()=>s("br",null,null,-1)),zs=n(()=>s("br",null,null,-1)),fs={data(){return{showCart:!1,imgurl:"/prodimgs/",orderid:this.$route.query.order,loading:!1,order:[],cuponcode:null}},mounted(){_.get("https://elenora.hu:444/orders/getbyid/"+this.orderid).then(d=>this.order=d.data)},methods:{next(){this.loading=!0,_.post("https://elenora.hu:444/orders/finish/"+this.orderid,JSON.stringify(this.user),{headers:{"Content-Type":"application/json"}}).then(d=>this.$router.push({path:"/"})).catch(d=>{console.error("There was an error!",d)})},backto(d){console.log("clicked"),d=="shipping"?this.$router.push({path:"/shop/checkout/shipping",query:{order:this.orderid}}):d=="customer"?this.$router.push({path:"/shop/checkout",query:{order:this.orderid}}):d=="paying"?this.$router.push({path:"/shop/checkout/shipping",query:{order:this.orderid}}):console.log("err")},ordercash(){this.loading=!0,this.$router.push({path:"/shop/thanks",query:{id:this.order._id}})},orderpay(){this.loading=!0,_.post("https://elenora.hu:444/orders/pay",JSON.stringify({items:this.order.cart,orderid:this.orderid}),{headers:{"Content-Type":"application/json"}}).then(d=>{window.open(d.data.url,"_self")})}}},ws=Object.assign(fs,{__name:"checkoutFinish",setup(d){return(t,r)=>{const y=u("RouterLink"),p=u("ion-icon");return o(),i("main",null,[s("section",F,[s("div",S,[h(y,{to:"/"},{default:b(()=>[q]),_:1})]),s("div",M,[s("div",{class:"header",onClick:r[0]||(r[0]=e=>t.showCart=!t.showCart)},[s("div",N,[h(p,{class:"cart_icon",name:"cart-outline"}),L,h(p,{name:"chevron-down-outline"})]),s("div",O,[s("b",null,[t.order.cart?(o(),i("p",I,c(t.order.cart.reduce((e,l)=>e+Math.round(l.price-l.price/100*l.sale)*l.quantity,0))+" Ft ",1)):a("",!0)])])]),t.showCart?(o(),i("div",T,[s("div",V,[(o(!0),i(v,null,g(t.order.cart,(e,l)=>(o(),i("div",{class:"cart_item",key:l},[s("div",j,[s("div",B,[e.img!=null?(o(),i("img",{key:0,src:t.imgurl+e.img},null,8,E)):a("",!0)]),s("div",R,[s("p",A,c(e.name),1),e.custom==!0?(o(),i("div",H,[(o(!0),i(v,null,g(e.pearls,k=>(o(),i("div",null,[s("img",{src:"https://elenora.hu:444/getimage/"+k+".webp"},null,8,J)]))),256))])):a("",!0),e.visitno?a("",!0):(o(),i("p",D,"Méret: "+c(e.size),1)),e.visitno?a("",!0):(o(),i("p",K,c(e.quantity),1))])]),s("div",U,[s("h5",null,c(Math.round(e.price-e.price/100*e.sale))+" Ft",1)])]))),128))]),s("div",G,[s("div",null,[P,s("b",null,[s("p",null,c(t.total)+" Ft",1)])])])])):a("",!0)]),Q,s("div",W,[s("div",X,[s("div",Y,[Z,s("p",x,c(t.order.u_email),1)]),s("div",ss,[s("p",{class:"ch",onClick:r[1]||(r[1]=e=>t.backto("customer"))},"Módosítás")])]),s("div",ts,[s("div",es,[os,s("p",is,c(t.order.u_postnumber)+" "+c(t.order.u_city)+", "+c(t.order.u_addresse)+", "+c(t.order.u_legio),1)]),s("div",ds,[s("p",{class:"ch",onClick:r[2]||(r[2]=e=>t.backto("customer"))},"Módosítás")])]),s("div",rs,[s("div",as,[cs,t.order.shipping=="delivery-cash"?(o(),i("p",ns," Házhozszállítás ")):a("",!0),t.order.shipping=="delivery-card"?(o(),i("p",ls," Házhozszállítás ")):a("",!0)]),s("div",hs,[s("p",{class:"ch",onClick:r[3]||(r[3]=e=>t.backto("shipping"))},"Módosítás")])]),s("div",_s,[s("div",ps,[us,t.order.shipping=="delivery-cash"?(o(),i("p",vs," Utánvétes fizetés ")):a("",!0),t.order.shipping=="delivery-card"?(o(),i("p",gs," Online fizetés ")):a("",!0)]),s("div",ys,[s("p",{class:"ch",onClick:r[4]||(r[4]=e=>t.backto("paying"))},"Módosítás")])])]),s("div",null,[ks,!t.loading&&t.order.shipping=="delivery-cash"?(o(),i("button",{key:0,class:"btntovabb",onClick:r[5]||(r[5]=e=>t.ordercash())}," Megrendelés ")):a("",!0),!t.loading&&t.order.shipping=="delivery-card"?(o(),i("button",{key:1,class:"btntovabb",onClick:r[6]||(r[6]=e=>t.orderpay())}," Fizetés és megrendelés ")):a("",!0),t.loading?(o(),i("button",ms,[h(f)])):a("",!0)])]),bs,zs])}}}),$s=m(ws,[["__scopeId","data-v-374c6987"]]);export{$s as default};
