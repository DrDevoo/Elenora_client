import{_ as g,r as u,o as i,c as d,b as s,a as h,w as f,t as n,d as r,F as y,f as k,g as m,h as p,L as b,p as z,l as C,x as w}from"./index-4505b0f3.js";const l=o=>(z("data-v-928f5995"),o=o(),C(),o),$={class:"datas_w"},F={class:"logo_w"},S=l(()=>s("img",{class:"logo",src:w,alt:"ELENORA"},null,-1)),q={class:"cart_w"},M={class:"text"},N=l(()=>s("p",null,"Tekintsd meg a kosarad tartalmát",-1)),L={class:"price"},O={key:0},I={key:0,class:"cart"},T={class:"list"},V={class:"cart_item_imgtext"},j={class:"cart_item_img"},B=["src"],E={class:"cart_item_desc"},R={class:"lineh"},A={key:0,class:"lineh"},H={key:1,class:"quantity"},J={class:"cart_item_del"},D={class:"prices"},K=l(()=>s("p",null,"Összeg",-1)),U=m('<div class="order_status" data-v-928f5995><div class="sec" data-v-928f5995><div class="circle" data-v-928f5995><p data-v-928f5995>1</p></div><div class="title" data-v-928f5995><p data-v-928f5995>Adatok</p></div></div><div class="hr" data-v-928f5995></div><div class="sec" data-v-928f5995><div class="circle" data-v-928f5995><p data-v-928f5995>2</p></div><div class="title" data-v-928f5995><p data-v-928f5995>Szállítás - Fizetés</p></div></div><div class="hr" data-v-928f5995></div><div class="sec" data-v-928f5995><div class="circle active" data-v-928f5995><p class="active" data-v-928f5995>3</p></div><div class="title" data-v-928f5995><p data-v-928f5995>Összegzés</p></div></div></div>',1),G={class:"osszesites_w"},P={class:"oszesites_b"},Q={class:"left"},W=l(()=>s("p",{class:"t"},"Kapcsolattartás",-1)),X={class:"c"},Y={class:"right"},Z={class:"oszesites_b"},x={class:"left"},ss=l(()=>s("p",{class:"t"},"Szállítási cím",-1)),ts={class:"c"},es={class:"right"},os={class:"oszesites_b"},is={class:"left"},ds=l(()=>s("p",{class:"t"},"Szállítási mód",-1)),as={key:0,class:"c"},rs={key:1,class:"c"},ns={class:"right"},ls={class:"oszesites_b"},cs={class:"left"},hs=l(()=>s("p",{class:"t"},"Fizetési mód",-1)),ps={key:0,class:"c"},_s={key:1,class:"c"},us={class:"right"},vs=l(()=>s("br",null,null,-1)),gs={key:2,class:"btntovabb"},fs=l(()=>s("br",null,null,-1)),ys=l(()=>s("br",null,null,-1)),ks={data(){return{showCart:!1,imgurl:"/prodimgs/",orderid:this.$route.query.order,loading:!1,order:[],cuponcode:null}},mounted(){p.get("https://elenora.hu:444/orders/getbyid/"+this.orderid).then(o=>this.order=o.data)},methods:{next(){this.loading=!0,p.post("https://elenora.hu:444/orders/finish/"+this.orderid,JSON.stringify(this.user),{headers:{"Content-Type":"application/json"}}).then(o=>this.$router.push({path:"/"})).catch(o=>{console.error("There was an error!",o)})},backto(o){console.log("clicked"),o=="shipping"?this.$router.push({path:"/shop/checkout/shipping",query:{order:this.orderid}}):o=="customer"?this.$router.push({path:"/shop/checkout",query:{order:this.orderid}}):o=="paying"?this.$router.push({path:"/shop/checkout/shipping",query:{order:this.orderid}}):console.log("err")},ordercash(){this.loading=!0,this.$router.push({path:"/shop/thanks",query:{id:this.order._id}})},orderpay(){this.loading=!0,p.post("https://elenora.hu:444/orders/pay",JSON.stringify({items:this.order.cart,orderid:this.orderid}),{headers:{"Content-Type":"application/json"}}).then(o=>{window.open(o.data.url,"_self")})}}},ms=Object.assign(ks,{__name:"checkoutFinish",setup(o){return(t,a)=>{const v=u("RouterLink"),_=u("ion-icon");return i(),d("main",null,[s("section",$,[s("div",F,[h(v,{to:"/"},{default:f(()=>[S]),_:1})]),s("div",q,[s("div",{class:"header",onClick:a[0]||(a[0]=e=>t.showCart=!t.showCart)},[s("div",M,[h(_,{class:"cart_icon",name:"cart-outline"}),N,h(_,{name:"chevron-down-outline"})]),s("div",L,[s("b",null,[t.order.cart?(i(),d("p",O,n(t.order.cart.reduce((e,c)=>e+Math.round(c.price-c.price/100*c.sale)*c.quantity,0))+" Ft ",1)):r("",!0)])])]),t.showCart?(i(),d("div",I,[s("div",T,[(i(!0),d(y,null,k(t.order.cart,(e,c)=>(i(),d("div",{class:"cart_item",key:c},[s("div",V,[s("div",j,[e.img!=null?(i(),d("img",{key:0,src:t.imgurl+e.img},null,8,B)):r("",!0)]),s("div",E,[s("p",R,n(e.name),1),e.visitno?r("",!0):(i(),d("p",A,"Méret: "+n(e.size),1)),e.visitno?r("",!0):(i(),d("p",H,n(e.quantity),1))])]),s("div",J,[s("h5",null,n(Math.round(e.price-e.price/100*e.sale))+" Ft",1)])]))),128))]),s("div",D,[s("div",null,[K,s("b",null,[s("p",null,n(t.total)+" Ft",1)])])])])):r("",!0)]),U,s("div",G,[s("div",P,[s("div",Q,[W,s("p",X,n(t.order.u_email),1)]),s("div",Y,[s("p",{class:"ch",onClick:a[1]||(a[1]=e=>t.backto("customer"))},"Módosítás")])]),s("div",Z,[s("div",x,[ss,s("p",ts,n(t.order.u_postnumber)+" "+n(t.order.u_city)+", "+n(t.order.u_addresse)+", "+n(t.order.u_legio),1)]),s("div",es,[s("p",{class:"ch",onClick:a[2]||(a[2]=e=>t.backto("customer"))},"Módosítás")])]),s("div",os,[s("div",is,[ds,t.order.shipping=="delivery-cash"?(i(),d("p",as," Házhozszállítás ")):r("",!0),t.order.shipping=="delivery-card"?(i(),d("p",rs," Házhozszállítás ")):r("",!0)]),s("div",ns,[s("p",{class:"ch",onClick:a[3]||(a[3]=e=>t.backto("shipping"))},"Módosítás")])]),s("div",ls,[s("div",cs,[hs,t.order.shipping=="delivery-cash"?(i(),d("p",ps," Utánvétes fizetés ")):r("",!0),t.order.shipping=="delivery-card"?(i(),d("p",_s," Online fizetés ")):r("",!0)]),s("div",us,[s("p",{class:"ch",onClick:a[4]||(a[4]=e=>t.backto("paying"))},"Módosítás")])])]),s("div",null,[vs,!t.loading&&t.order.shipping=="delivery-cash"?(i(),d("button",{key:0,class:"btntovabb",onClick:a[5]||(a[5]=e=>t.ordercash())}," Megrendelés ")):r("",!0),!t.loading&&t.order.shipping=="delivery-card"?(i(),d("button",{key:1,class:"btntovabb",onClick:a[6]||(a[6]=e=>t.orderpay())}," Fizetés és megrendelés ")):r("",!0),t.loading?(i(),d("button",gs,[h(b)])):r("",!0)])]),fs,ys])}}}),zs=g(ms,[["__scopeId","data-v-928f5995"]]);export{zs as default};