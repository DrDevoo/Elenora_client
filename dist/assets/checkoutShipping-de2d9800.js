import{k as f,r as _,o as l,c as d,b as s,a as p,w as k,t as n,F as b,f as S,d as c,l as r,m as u,s as h,g as V,h as m,L as z,p as U,n as q,q as C}from"./index-054a2e9e.js";const a=i=>(U("data-v-901c67af"),i=i(),q(),i),w={class:"datas_w"},j={class:"logo_w"},I=a(()=>s("img",{class:"logo",src:C,alt:"ELENORA"},null,-1)),T={class:"cart_w"},F={class:"text"},N=a(()=>s("p",null,"Tekintsd meg a kosarad tartalmát",-1)),O={class:"price"},$={key:0,class:"cart"},L={class:"list"},M={class:"cart_item_imgtext"},B={class:"cart_item_img"},E=["src"],J={class:"cart_item_desc"},R={class:"quantity"},A={class:"cart_item_del"},H={class:"prices"},D=a(()=>s("p",null,"Összeg",-1)),K=V('<div class="order_status" data-v-901c67af><div class="sec" data-v-901c67af><div class="circle" data-v-901c67af><p data-v-901c67af>1</p></div><div class="title" data-v-901c67af><p data-v-901c67af>Adatok</p></div></div><div class="hr" data-v-901c67af></div><div class="sec" data-v-901c67af><div class="circle active" data-v-901c67af><p class="active" data-v-901c67af>2</p></div><div class="title" data-v-901c67af><p data-v-901c67af>Szállítás - Fizetés</p></div></div><div class="hr" data-v-901c67af></div><div class="sec" data-v-901c67af><div class="circle" data-v-901c67af><p data-v-901c67af>3</p></div><div class="title" data-v-901c67af><p data-v-901c67af>Összegzés</p></div></div></div>',1),G={class:"osszesites_w"},P={class:"oszesites_b"},Q={class:"left"},W=a(()=>s("p",{class:"t"},"Kapcsolattartás",-1)),X={class:"c"},Y={class:"right"},Z={class:"oszesites_b"},x={class:"left"},ss=a(()=>s("p",{class:"t"},"Szállítási cím",-1)),es={class:"c"},ts={class:"right"},os=a(()=>s("h3",null,"Ajándékkártya vagy kupon kódja",-1)),as={class:"cupon_b"},is={key:1},ls={key:0},ds=a(()=>s("h3",null,"Számlázási cím",-1)),ns={class:"szamla_b"},rs=a(()=>s("label",{for:"same"},"Egyezik a szállítási címmel",-1)),cs=a(()=>s("br",null,null,-1)),us=a(()=>s("br",null,null,-1)),ps=a(()=>s("label",{for:"other"},"Másik számlázási címet adok meg",-1)),hs={key:0,class:"otherszamlazasi"},ms={class:"inputflex"},vs={class:"inputflex"},_s=a(()=>s("h3",null,"Szállítás és fizetés",-1)),zs=a(()=>s("h5",{class:"mini"}," Ha a rendelés összege meghaladja a 15.000 Ft-ot a szállítás ingyenes! ",-1)),gs={class:"options_box"},ys={class:"flex_option"},fs={class:"flex_option"},ks=a(()=>s("label",{for:"id1"},"Házhozszállítás - Online fizetés",-1)),bs=a(()=>s("div",null,[s("h6",null,"1990 Ft")],-1)),Ss={class:"flex_option"},Vs={class:"flex_option"},Us=a(()=>s("label",{for:"id2"},"Házhozszállítás - Utánvétes fizetés",-1)),qs=a(()=>s("div",null,[s("h6",null,"2880 Ft")],-1)),Cs=a(()=>s("br",null,null,-1)),ws={key:1,class:"btntovabb off"},js={key:2,class:"btntovabb"},Is=a(()=>s("br",null,null,-1)),Ts=a(()=>s("br",null,null,-1)),Fs={data(){return{showCart:!1,cart:[],imgurl:"https://elenora.hu:444/getimage/",orderid:this.$route.query.order,loading:!1,order:[],loadingcoupon:!1,cuponcode:"",cuponsresponse:[]}},created(){this.cart=JSON.parse(localStorage.getItem("cart")||"[]")},mounted(){m.get("https://elenora.hu:444/orders/getbyid/"+this.orderid).then(i=>this.order=i.data)},computed:{total(){return this.cart.reduce((i,e)=>i+e.price*e.quantity,0)}},methods:{next(){this.loading=!0,this.order.shipping=="delivery-cash"?(this.cart.reduce((e,t)=>e+t.price*t.quantity,0)>14999?(this.order.cart.push({id:1,name:"Szállítási díj",price:0,quantity:1,img:null}),this.order.cart.push({id:2,name:"Utánvét díj",price:890,quantity:1,img:null})):(this.order.cart.push({id:1,name:"Szállítási díj",price:1990,quantity:1,img:null}),this.order.cart.push({id:2,name:"Utánvét díj",price:890,quantity:1,img:null})),localStorage.setItem("cart",JSON.stringify(this.order.cart))):(this.cart.reduce((e,t)=>e+t.price*t.quantity,0)>14999?this.order.cart.push({id:1,name:"Szállítási díj",price:0,quantity:1,img:null}):this.order.cart.push({id:1,name:"Szállítási díj",price:1990,quantity:1,img:null}),localStorage.setItem("cart",JSON.stringify(this.order.cart))),m.post("https://elenora.hu:444/orders/saveshipping/"+this.orderid,JSON.stringify(this.order),{headers:{"Content-Type":"application/json"}}).then(i=>this.$router.push({path:"/shop/checkout/summary",query:{order:this.orderid}})).catch(i=>{console.error("There was an error!",i)})},backto(i){console.log("clicked"),i=="shipping"?this.$router.push({path:"/shop/checkout/shipping",query:{order:this.orderid}}):i=="customer"?this.$router.push({path:"/shop/checkout",query:{order:this.orderid}}):i=="paying"?this.$router.push({path:"/shop/checkout/shipping",query:{order:this.orderid}}):console.log("err")},check(){this.loadingcoupon=!0,m.get("https://elenora.hu:444/cupons/check/"+this.cuponcode).then(i=>this.cuponsresponse=i.data),this.loadingcoupon=!1}}},Ns=Object.assign(Fs,{__name:"checkoutShipping",setup(i){return(e,t)=>{const g=_("RouterLink"),v=_("ion-icon");return l(),d("main",null,[s("section",w,[s("div",j,[p(g,{to:"/"},{default:k(()=>[I]),_:1})]),s("div",T,[s("div",{class:"header",onClick:t[0]||(t[0]=o=>e.showCart=!e.showCart)},[s("div",F,[p(v,{class:"cart_icon",name:"cart-outline"}),N,p(v,{name:"chevron-down-outline"})]),s("div",O,[s("b",null,[s("p",null,n(e.total)+" Ft",1)])])]),e.showCart?(l(),d("div",$,[s("div",L,[(l(!0),d(b,null,S(e.cart,(o,y)=>(l(),d("div",{class:"cart_item",key:y},[s("div",M,[s("div",B,[o.img!=null?(l(),d("img",{key:0,src:e.imgurl+o.img},null,8,E)):c("",!0)]),s("div",J,[s("p",null,n(o.name),1),s("p",null,"Méret: "+n(o.size),1),s("p",R,n(o.quantity),1)])]),s("div",A,[s("h5",null,n(o.price)+" Ft",1)])]))),128))]),s("div",H,[s("div",null,[D,s("b",null,[s("p",null,n(e.total)+" Ft",1)])])])])):c("",!0)]),K,s("div",G,[s("div",P,[s("div",Q,[W,s("p",X,n(e.order.u_email),1)]),s("div",Y,[s("p",{class:"ch",onClick:t[1]||(t[1]=o=>e.backto("customer"))},"Módosítás")])]),s("div",Z,[s("div",x,[ss,s("p",es,n(e.order.u_postnumber)+" "+n(e.order.u_city)+", "+n(e.order.u_addresse)+", "+n(e.order.u_legio),1)]),s("div",ts,[s("p",{class:"ch",onClick:t[2]||(t[2]=o=>e.backto("customer"))},"Módosítás")])])]),s("div",null,[os,s("p",null,n(e.cuponsresponse),1),s("div",as,[s("div",null,[r(s("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=o=>e.cuponcode=o),placeholder:"Válts be kuponod"},null,512),[[u,e.cuponcode]]),e.loadingcoupon?c("",!0):(l(),d("button",{key:0,onClick:t[4]||(t[4]=o=>e.check())},"Beváltom")),e.loadingcoupon?(l(),d("button",is,[p(z)])):c("",!0)]),e.cuponerror?(l(),d("p",ls,"Érvénytelen kód!")):c("",!0)]),ds,s("div",ns,[r(s("input",{type:"radio",name:"szamla",value:"same",id:"same","onUpdate:modelValue":t[5]||(t[5]=o=>e.order.szamlazasimod=o)},null,512),[[h,e.order.szamlazasimod]]),rs,cs,us,r(s("input",{type:"radio",name:"szamla",value:"other",id:"other","onUpdate:modelValue":t[6]||(t[6]=o=>e.order.szamlazasimod=o)},null,512),[[h,e.order.szamlazasimod]]),ps,e.order.szamlazasimod=="other"?(l(),d("div",hs,[r(s("input",{type:"text","onUpdate:modelValue":t[7]||(t[7]=o=>e.order.szamlazasOrszag=o)},null,512),[[u,e.order.szamlazasOrszag]]),s("div",ms,[r(s("input",{type:"text","onUpdate:modelValue":t[8]||(t[8]=o=>e.order.szamlazasVezeteknev=o),placeholder:"Vezetéknév"},null,512),[[u,e.order.szamlazasVezeteknev]]),r(s("input",{type:"text","onUpdate:modelValue":t[9]||(t[9]=o=>e.order.szamlazasUtonev=o),placeholder:"Utónév"},null,512),[[u,e.order.szamlazasUtonev]])]),s("div",vs,[r(s("input",{type:"text","onUpdate:modelValue":t[10]||(t[10]=o=>e.order.szamlazasIranyitoszam=o),placeholder:"Irányítószám"},null,512),[[u,e.order.szamlazasIranyitoszam]]),r(s("input",{type:"text","onUpdate:modelValue":t[11]||(t[11]=o=>e.order.szamlazasTelepules=o),placeholder:"Település"},null,512),[[u,e.order.szamlazasTelepules]])]),r(s("input",{type:"text","onUpdate:modelValue":t[12]||(t[12]=o=>e.order.szamlazasCim=o),placeholder:"Cím"},null,512),[[u,e.order.szamlazasCim]]),r(s("input",{type:"tel","onUpdate:modelValue":t[13]||(t[13]=o=>e.order.szamlazasTel=o),placeholder:"Telefonszám"},null,512),[[u,e.order.szamlazasTel]])])):c("",!0)]),_s,zs,s("div",gs,[s("div",ys,[s("div",fs,[r(s("input",{type:"radio",name:"shipping",id:"id1",value:"delivery-card","onUpdate:modelValue":t[14]||(t[14]=o=>e.order.shipping=o),class:"radio"},null,512),[[h,e.order.shipping]]),ks]),bs]),s("div",Ss,[s("div",Vs,[r(s("input",{type:"radio",name:"shipping",id:"id2",value:"delivery-cash","onUpdate:modelValue":t[15]||(t[15]=o=>e.order.shipping=o),class:"radio"},null,512),[[h,e.order.shipping]]),Us]),qs])]),Cs,!e.loading&&e.order.shipping!=""?(l(),d("button",{key:0,class:"btntovabb",onClick:t[16]||(t[16]=(...o)=>e.next&&e.next(...o))}," Összegzés ")):c("",!0),!e.loading&&e.order.shipping==""?(l(),d("button",ws," Összegzés ")):c("",!0),e.loading?(l(),d("button",js,[p(z)])):c("",!0)])]),Is,Ts])}}}),$s=f(Ns,[["__scopeId","data-v-901c67af"]]);export{$s as default};
