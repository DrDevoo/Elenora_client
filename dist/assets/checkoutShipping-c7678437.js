import{_ as y,r as z,o as n,c as l,b as s,a as f,w as k,t as c,d,F as b,f as S,m as u,s as h,y as m,g as V,h as v,L as g,p as U,l as j,x as C}from"./index-4505b0f3.js";const i=a=>(U("data-v-89f49ff7"),a=a(),j(),a),w={class:"datas_w"},q={class:"logo_w"},T=i(()=>s("img",{class:"logo",src:C,alt:"ELENORA"},null,-1)),M={class:"cart_w"},F={class:"text"},I=i(()=>s("p",null,"Tekintsd meg a kosarad tartalmát",-1)),N={class:"price"},O={key:0},$={key:0,class:"cart"},E={class:"list"},L={class:"cart_item_imgtext"},B={class:"cart_item_img"},H=["src"],J={class:"cart_item_desc"},R={key:0},A={key:1,class:"quantity"},D={class:"cart_item_del"},K={class:"prices"},G=i(()=>s("p",null,"Összeg",-1)),P=V('<div class="order_status" data-v-89f49ff7><div class="sec" data-v-89f49ff7><div class="circle" data-v-89f49ff7><p data-v-89f49ff7>1</p></div><div class="title" data-v-89f49ff7><p data-v-89f49ff7>Adatok</p></div></div><div class="hr" data-v-89f49ff7></div><div class="sec" data-v-89f49ff7><div class="circle active" data-v-89f49ff7><p class="active" data-v-89f49ff7>2</p></div><div class="title" data-v-89f49ff7><p data-v-89f49ff7>Szállítás - Fizetés</p></div></div><div class="hr" data-v-89f49ff7></div><div class="sec" data-v-89f49ff7><div class="circle" data-v-89f49ff7><p data-v-89f49ff7>3</p></div><div class="title" data-v-89f49ff7><p data-v-89f49ff7>Összegzés</p></div></div></div>',1),Q={class:"osszesites_w"},W={class:"oszesites_b"},X={class:"left"},Y=i(()=>s("p",{class:"t"},"Kapcsolattartás",-1)),Z={class:"c"},x={class:"right"},ss={class:"oszesites_b"},es={class:"left"},ts=i(()=>s("p",{class:"t"},"Szállítási cím",-1)),os={class:"c"},as={class:"right"},is=i(()=>s("h3",null,"Ajándékkártya vagy kupon kódja",-1)),ns={class:"cupon_b"},ls={key:3},rs={key:4,style:{"background-color":"green"}},ds={key:0},ps={key:1,style:{color:"green"}},us=i(()=>s("h3",null,"Számlázási cím",-1)),cs={class:"szamla_b"},hs=i(()=>s("label",{for:"same"},"Egyezik a szállítási címmel",-1)),vs=i(()=>s("br",null,null,-1)),fs=i(()=>s("br",null,null,-1)),ms=i(()=>s("label",{for:"other"},"Másik számlázási címet adok meg",-1)),_s={key:0,class:"otherszamlazasi"},zs={class:"inputflex"},gs={class:"inputflex"},ys=i(()=>s("h3",null,"Szállítás és fizetés",-1)),ks=i(()=>s("h5",{class:"mini"}," Ha a rendelés összege meghaladja a 15.000 Ft-ot a szállítás ingyenes! ",-1)),bs={class:"options_box"},Ss={class:"flex_option"},Vs={class:"flex_option"},Us=i(()=>s("label",{for:"id1"},"Házhozszállítás - Online fizetés",-1)),js=i(()=>s("div",null,[s("h6",null,"1990 Ft")],-1)),Cs={class:"flex_option"},ws={class:"flex_option"},qs=i(()=>s("label",{for:"id2"},"Házhozszállítás - Utánvétes fizetés",-1)),Ts=i(()=>s("div",null,[s("h6",null,"2880 Ft")],-1)),Ms=i(()=>s("br",null,null,-1)),Fs={key:1,class:"btntovabb off"},Is={key:2,class:"btntovabb"},Ns=i(()=>s("br",null,null,-1)),Os=i(()=>s("br",null,null,-1)),$s={data(){return{showCart:!1,imgurl:"/prodimgs/",orderid:this.$route.query.order,loading:!1,order:[],epty:[],loadingcoupon:!1,cuponcode:"",cuponsresponse:[],cuponactive:!1}},async mounted(){await v.get("https://elenora.hu:444/orders/getbyid/"+this.orderid).then(a=>this.order=a.data),this.order.usedcupon!=""&&(await v.get("https://elenora.hu:444/cupons/check/"+this.order.usedcupon).then(a=>this.cuponsresponse=a.data),this.cuponcode=this.order.usedcupon,this.cuponactive=!0,this.cart.forEach((a,e)=>{a.name!="Szállítási díj"?(console.log(a),this.cart[e].sale=this.cuponsresponse.cupon_value,console.log("fut")):console.log("elutasitva")}))},methods:{next(){if(this.loading=!0,this.order.cart.find(p=>p.name=="Szállítási díj")){var e=this.order.cart.findIndex(p=>p.name=="Szállítási díj");this.order.cart.splice(e)}if(this.order.cart.find(p=>p.name=="Utánvét díj")){var _=this.order.cart.findIndex(p=>p.name=="Utánvét díj");this.order.cart.splice(_)}this.order.shipping=="delivery-cash"?(this.order.cart.reduce((t,r)=>t+Math.round(r.price-r.price/100*r.sale)*r.quantity,0)>14999?(this.order.cart.push({id:1,name:"Szállítási díj",price:0,quantity:1,sale:0,img:null,visitno:!0}),this.order.cart.push({id:2,name:"Utánvét díj",price:890,quantity:1,sale:0,img:null,visitno:!0})):(this.order.cart.push({id:1,name:"Szállítási díj",price:1990,quantity:1,sale:0,img:null,visitno:!0}),this.order.cart.push({id:2,name:"Utánvét díj",price:890,quantity:1,sale:0,img:null,visitno:!0})),v.post("https://elenora.hu:444/orders/updatecart/"+this.orderid,JSON.stringify(this.order.cart),{headers:{"Content-Type":"application/json"}})):(this.order.cart.reduce((t,r)=>t+Math.round(r.price-r.price/100*r.sale)*r.quantity,0)>14999?this.order.cart.push({id:1,name:"Szállítási díj",price:0,quantity:1,sale:0,img:null,visitno:!0}):this.order.cart.push({id:1,name:"Szállítási díj",price:1990,quantity:1,sale:0,img:null,visitno:!0}),v.post("https://elenora.hu:444/orders/updatecart/"+this.orderid,JSON.stringify(this.order.cart),{headers:{"Content-Type":"application/json"}})),v.post("https://elenora.hu:444/orders/saveshipping/"+this.orderid,JSON.stringify(this.order),{headers:{"Content-Type":"application/json"}}).then(p=>this.$router.push({path:"/shop/checkout/summary",query:{order:this.orderid}})).catch(p=>{console.error("There was an error!",p)})},backto(a){console.log("clicked"),a=="shipping"?this.$router.push({path:"/shop/checkout/shipping",query:{order:this.orderid}}):a=="customer"?this.$router.push({path:"/shop/checkout",query:{order:this.orderid}}):a=="paying"?this.$router.push({path:"/shop/checkout/shipping",query:{order:this.orderid}}):console.log("err")},async check(){this.loadingcoupon=!0,await v.get("https://elenora.hu:444/cupons/check/"+this.cuponcode).then(a=>this.cuponsresponse=a.data),this.cuponsresponse._id?(console.log("Kupon aktivalasa"),this.order.cart.forEach((a,e)=>{a.name!="Szállítási díj"?(console.log(a),this.order.cart[e].sale=this.cuponsresponse.cupon_value):console.log("elutasitva")}),v.post("https://elenora.hu:444/orders/updatecart/"+this.orderid,JSON.stringify(this.order.cart),{headers:{"Content-Type":"application/json"}}),await v.get("https://elenora.hu:444/orders/savecupon/"+this.orderid+"/"+this.cuponsresponse.cupon_name),this.cuponactive=!0):console.log("Hibas kupon!"),this.loadingcoupon=!1}}},Es=Object.assign($s,{__name:"checkoutShipping",setup(a){return(e,o)=>{const _=z("RouterLink"),p=z("ion-icon");return n(),l("main",null,[s("section",w,[s("div",q,[f(_,{to:"/"},{default:k(()=>[T]),_:1})]),s("div",M,[s("div",{class:"header",onClick:o[0]||(o[0]=t=>e.showCart=!e.showCart)},[s("div",F,[f(p,{class:"cart_icon",name:"cart-outline"}),I,f(p,{name:"chevron-down-outline"})]),s("div",N,[s("b",null,[e.order.cart?(n(),l("p",O,c(e.order.cart.reduce((t,r)=>t+Math.round(r.price-r.price/100*r.sale)*r.quantity,0))+" Ft ",1)):d("",!0)])])]),e.showCart?(n(),l("div",$,[s("div",E,[(n(!0),l(b,null,S(e.order.cart,(t,r)=>(n(),l("div",{class:"cart_item",key:r},[s("div",L,[s("div",B,[t.img!=null?(n(),l("img",{key:0,src:e.imgurl+t.img},null,8,H)):d("",!0)]),s("div",J,[s("p",null,c(t.name),1),t.visitno?d("",!0):(n(),l("p",R,"Méret: "+c(t.size),1)),t.visitno?d("",!0):(n(),l("p",A,c(t.quantity),1))])]),s("div",D,[s("h5",null,c(Math.round(t.price-t.price/100*t.sale))+" Ft ",1)])]))),128))]),s("div",K,[s("div",null,[G,s("b",null,[s("p",null,c(e.total)+" Ft",1)])])])])):d("",!0)]),P,s("div",Q,[s("div",W,[s("div",X,[Y,s("p",Z,c(e.order.u_email),1)]),s("div",x,[s("p",{class:"ch",onClick:o[1]||(o[1]=t=>e.backto("customer"))},"Módosítás")])]),s("div",ss,[s("div",es,[ts,s("p",os,c(e.order.u_postnumber)+" "+c(e.order.u_city)+", "+c(e.order.u_addresse)+", "+c(e.order.u_legio),1)]),s("div",as,[s("p",{class:"ch",onClick:o[2]||(o[2]=t=>e.backto("customer"))},"Módosítás")])])]),s("div",null,[is,s("div",ns,[s("div",null,[e.cuponactive?d("",!0):u((n(),l("input",{key:0,type:"text","onUpdate:modelValue":o[3]||(o[3]=t=>e.cuponcode=t),placeholder:"Válts be kuponod"},null,512)),[[h,e.cuponcode]]),e.cuponactive?u((n(),l("input",{key:1,type:"text","onUpdate:modelValue":o[4]||(o[4]=t=>e.cuponcode=t),placeholder:"Válts be kuponod",disabled:""},null,512)),[[h,e.cuponcode]]):d("",!0),!e.loadingcoupon&&!e.cuponactive?(n(),l("button",{key:2,onClick:o[5]||(o[5]=t=>e.check())}," Beváltom ")):d("",!0),e.loadingcoupon?(n(),l("button",ls,[f(g)])):d("",!0),e.cuponactive?(n(),l("button",rs," ✓ ")):d("",!0)]),e.cuponsresponse=="Érvénytelen kupon!"?(n(),l("p",ds,"Érvénytelen kód!")):d("",!0),e.cuponsresponse._id?(n(),l("p",ps,c(e.cuponsresponse.cupon_value)+"%-os kupon beváltva! ",1)):d("",!0)]),us,s("div",cs,[u(s("input",{type:"radio",name:"szamla",value:"same",id:"same","onUpdate:modelValue":o[6]||(o[6]=t=>e.order.szamlazasimod=t)},null,512),[[m,e.order.szamlazasimod]]),hs,vs,fs,u(s("input",{type:"radio",name:"szamla",value:"other",id:"other","onUpdate:modelValue":o[7]||(o[7]=t=>e.order.szamlazasimod=t)},null,512),[[m,e.order.szamlazasimod]]),ms,e.order.szamlazasimod=="other"?(n(),l("div",_s,[u(s("input",{type:"text","onUpdate:modelValue":o[8]||(o[8]=t=>e.order.szamlazasOrszag=t)},null,512),[[h,e.order.szamlazasOrszag]]),s("div",zs,[u(s("input",{type:"text","onUpdate:modelValue":o[9]||(o[9]=t=>e.order.szamlazasVezeteknev=t),placeholder:"Vezetéknév"},null,512),[[h,e.order.szamlazasVezeteknev]]),u(s("input",{type:"text","onUpdate:modelValue":o[10]||(o[10]=t=>e.order.szamlazasUtonev=t),placeholder:"Utónév"},null,512),[[h,e.order.szamlazasUtonev]])]),s("div",gs,[u(s("input",{type:"text","onUpdate:modelValue":o[11]||(o[11]=t=>e.order.szamlazasIranyitoszam=t),placeholder:"Irányítószám"},null,512),[[h,e.order.szamlazasIranyitoszam]]),u(s("input",{type:"text","onUpdate:modelValue":o[12]||(o[12]=t=>e.order.szamlazasTelepules=t),placeholder:"Település"},null,512),[[h,e.order.szamlazasTelepules]])]),u(s("input",{type:"text","onUpdate:modelValue":o[13]||(o[13]=t=>e.order.szamlazasCim=t),placeholder:"Cím"},null,512),[[h,e.order.szamlazasCim]]),u(s("input",{type:"tel","onUpdate:modelValue":o[14]||(o[14]=t=>e.order.szamlazasTel=t),placeholder:"Telefonszám"},null,512),[[h,e.order.szamlazasTel]])])):d("",!0)]),ys,ks,s("div",bs,[s("div",Ss,[s("div",Vs,[u(s("input",{type:"radio",name:"shipping",id:"id1",value:"delivery-card","onUpdate:modelValue":o[15]||(o[15]=t=>e.order.shipping=t),class:"radio"},null,512),[[m,e.order.shipping]]),Us]),js]),s("div",Cs,[s("div",ws,[u(s("input",{type:"radio",name:"shipping",id:"id2",value:"delivery-cash","onUpdate:modelValue":o[16]||(o[16]=t=>e.order.shipping=t),class:"radio"},null,512),[[m,e.order.shipping]]),qs]),Ts])]),Ms,!e.loading&&e.order.shipping!=""?(n(),l("button",{key:0,class:"btntovabb",onClick:o[17]||(o[17]=(...t)=>e.next&&e.next(...t))}," Összegzés ")):d("",!0),!e.loading&&e.order.shipping==""?(n(),l("button",Fs," Összegzés ")):d("",!0),e.loading?(n(),l("button",Is,[f(g)])):d("",!0)])]),Ns,Os])}}}),Bs=y(Es,[["__scopeId","data-v-89f49ff7"]]);export{Bs as default};
