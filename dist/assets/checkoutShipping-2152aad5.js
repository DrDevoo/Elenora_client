import{_ as S,r as z,o as a,c as i,b as s,a as m,w as V,t as c,d as r,F as g,f as y,n as p,x as h,z as _,g as U,h as v,L as k,p as j,m as w,y as C}from"./index-55c22a9f.js";const l=n=>(j("data-v-ff554390"),n=n(),w(),n),q={class:"datas_w"},T={class:"logo_w"},M=l(()=>s("img",{class:"logo",src:C,alt:"ELENORA"},null,-1)),F={class:"cart_w"},I={class:"text"},N=l(()=>s("p",null,"Tekintsd meg a kosarad tartalmát",-1)),O={class:"price"},$={key:0},E={key:0,class:"cart"},L={class:"list"},B={class:"cart_item_imgtext"},H={class:"cart_item_img"},J=["src"],R={class:"cart_item_desc"},A={key:0,class:"result"},D=["src"],K={key:1},G={key:2,class:"quantity"},P={class:"cart_item_del"},Q={class:"prices"},W=l(()=>s("p",null,"Összeg",-1)),X=U('<div class="order_status" data-v-ff554390><div class="sec" data-v-ff554390><div class="circle" data-v-ff554390><p data-v-ff554390>1</p></div><div class="title" data-v-ff554390><p data-v-ff554390>Adatok</p></div></div><div class="hr" data-v-ff554390></div><div class="sec" data-v-ff554390><div class="circle active" data-v-ff554390><p class="active" data-v-ff554390>2</p></div><div class="title" data-v-ff554390><p data-v-ff554390>Szállítás - Fizetés</p></div></div><div class="hr" data-v-ff554390></div><div class="sec" data-v-ff554390><div class="circle" data-v-ff554390><p data-v-ff554390>3</p></div><div class="title" data-v-ff554390><p data-v-ff554390>Összegzés</p></div></div></div>',1),Y={class:"osszesites_w"},Z={class:"oszesites_b"},x={class:"left"},ss=l(()=>s("p",{class:"t"},"Kapcsolattartás",-1)),es={class:"c"},ts={class:"right"},os={class:"oszesites_b"},as={class:"left"},is=l(()=>s("p",{class:"t"},"Szállítási cím",-1)),ns={class:"c"},ls={class:"right"},rs=l(()=>s("h3",null,"Ajándékkártya vagy kupon kódja",-1)),ds={class:"cupon_b"},us={key:3},ps={key:4,style:{"background-color":"green"}},cs={key:0},hs={key:1,style:{color:"green"}},vs=l(()=>s("h3",null,"Számlázási cím",-1)),ms={class:"szamla_b"},_s=l(()=>s("label",{for:"same"},"Egyezik a szállítási címmel",-1)),fs=l(()=>s("br",null,null,-1)),zs=l(()=>s("br",null,null,-1)),gs=l(()=>s("label",{for:"other"},"Másik számlázási címet adok meg",-1)),ys={key:0,class:"otherszamlazasi"},ks={class:"inputflex"},bs={class:"inputflex"},Ss=l(()=>s("h3",null,"Szállítás és fizetés",-1)),Vs=l(()=>s("h5",{class:"mini"}," Ha a rendelés összege meghaladja a 15.000 Ft-ot a szállítás ingyenes! ",-1)),Us={class:"options_box"},js={class:"flex_option"},ws={class:"flex_option"},Cs=l(()=>s("label",{for:"id1"},"Házhozszállítás - Online fizetés",-1)),qs=l(()=>s("div",null,[s("h6",null,"1290 Ft")],-1)),Ts={class:"flex_option"},Ms={class:"flex_option"},Fs=l(()=>s("label",{for:"id2"},"Házhozszállítás - Utánvétes fizetés",-1)),Is=l(()=>s("div",null,[s("h6",null,"2080 Ft")],-1)),Ns=l(()=>s("br",null,null,-1)),Os={key:1,class:"btntovabb off"},$s={key:2,class:"btntovabb"},Es=l(()=>s("br",null,null,-1)),Ls=l(()=>s("br",null,null,-1)),Bs={data(){return{showCart:!1,imgurl:"/prodimgs/",orderid:this.$route.query.order,loading:!1,order:[],epty:[],loadingcoupon:!1,cuponcode:"",cuponsresponse:[],cuponactive:!1}},async mounted(){await v.get("https://elenora.hu:444/orders/getbyid/"+this.orderid).then(n=>this.order=n.data),this.order.usedcupon!=""&&(await v.get("https://elenora.hu:444/cupons/check/"+this.order.usedcupon).then(n=>this.cuponsresponse=n.data),this.cuponcode=this.order.usedcupon,this.cuponactive=!0,this.cart.forEach((n,e)=>{n.name!="Szállítási díj"?(console.log(n),this.cart[e].sale=this.cuponsresponse.cupon_value,console.log("fut")):console.log("elutasitva")}))},methods:{next(){if(this.loading=!0,this.order.cart.find(u=>u.name=="Szállítási díj")){var e=this.order.cart.findIndex(u=>u.name=="Szállítási díj");this.order.cart.splice(e)}if(this.order.cart.find(u=>u.name=="Utánvét díj")){var f=this.order.cart.findIndex(u=>u.name=="Utánvét díj");this.order.cart.splice(f)}this.order.shipping=="delivery-cash"?(this.order.cart.reduce((t,d)=>t+Math.round(d.price-d.price/100*d.sale)*d.quantity,0)>14999?(this.order.cart.push({id:1,name:"Szállítási díj",price:0,quantity:1,sale:0,img:null,visitno:!0}),this.order.cart.push({id:2,name:"Utánvét díj",price:790,quantity:1,sale:0,img:null,visitno:!0})):(this.order.cart.push({id:1,name:"Szállítási díj",price:1290,quantity:1,sale:0,img:null,visitno:!0}),this.order.cart.push({id:2,name:"Utánvét díj",price:790,quantity:1,sale:0,img:null,visitno:!0})),v.post("https://elenora.hu:444/orders/updatecart/"+this.orderid,JSON.stringify(this.order.cart),{headers:{"Content-Type":"application/json"}})):(this.order.cart.reduce((t,d)=>t+Math.round(d.price-d.price/100*d.sale)*d.quantity,0)>14999?this.order.cart.push({id:1,name:"Szállítási díj",price:0,quantity:1,sale:0,img:null,visitno:!0}):this.order.cart.push({id:1,name:"Szállítási díj",price:1290,quantity:1,sale:0,img:null,visitno:!0}),v.post("https://elenora.hu:444/orders/updatecart/"+this.orderid,JSON.stringify(this.order.cart),{headers:{"Content-Type":"application/json"}})),v.post("https://elenora.hu:444/orders/saveshipping/"+this.orderid,JSON.stringify(this.order),{headers:{"Content-Type":"application/json"}}).then(u=>this.$router.push({path:"/shop/checkout/summary",query:{order:this.orderid}})).catch(u=>{console.error("There was an error!",u)})},backto(n){console.log("clicked"),n=="shipping"?this.$router.push({path:"/shop/checkout/shipping",query:{order:this.orderid}}):n=="customer"?this.$router.push({path:"/shop/checkout",query:{order:this.orderid}}):n=="paying"?this.$router.push({path:"/shop/checkout/shipping",query:{order:this.orderid}}):console.log("err")},async check(){this.loadingcoupon=!0,await v.get("https://elenora.hu:444/cupons/check/"+this.cuponcode).then(n=>this.cuponsresponse=n.data),this.cuponsresponse._id?(console.log("Kupon aktivalasa"),this.order.cart.forEach((n,e)=>{n.name!="Szállítási díj"?(console.log(n),this.order.cart[e].sale=this.cuponsresponse.cupon_value):console.log("elutasitva")}),v.post("https://elenora.hu:444/orders/updatecart/"+this.orderid,JSON.stringify(this.order.cart),{headers:{"Content-Type":"application/json"}}),await v.get("https://elenora.hu:444/orders/savecupon/"+this.orderid+"/"+this.cuponsresponse.cupon_name),this.cuponactive=!0):console.log("Hibas kupon!"),this.loadingcoupon=!1}}},Hs=Object.assign(Bs,{__name:"checkoutShipping",setup(n){return(e,o)=>{const f=z("RouterLink"),u=z("ion-icon");return a(),i("main",null,[s("section",q,[s("div",T,[m(f,{to:"/"},{default:V(()=>[M]),_:1})]),s("div",F,[s("div",{class:"header",onClick:o[0]||(o[0]=t=>e.showCart=!e.showCart)},[s("div",I,[m(u,{class:"cart_icon",name:"cart-outline"}),N,m(u,{name:"chevron-down-outline"})]),s("div",O,[s("b",null,[e.order.cart?(a(),i("p",$,c(e.order.cart.reduce((t,d)=>t+Math.round(d.price-d.price/100*d.sale)*d.quantity,0))+" Ft ",1)):r("",!0)])])]),e.showCart?(a(),i("div",E,[s("div",L,[(a(!0),i(g,null,y(e.order.cart,(t,d)=>(a(),i("div",{class:"cart_item",key:d},[s("div",B,[s("div",H,[t.img!=null?(a(),i("img",{key:0,src:e.imgurl+t.img},null,8,J)):r("",!0)]),s("div",R,[s("p",null,c(t.name),1),t.custom==!0?(a(),i("div",A,[(a(!0),i(g,null,y(t.pearls,b=>(a(),i("div",null,[s("img",{src:"https://elenora.hu:444/getimage/"+b+".webp"},null,8,D)]))),256))])):r("",!0),t.visitno?r("",!0):(a(),i("p",K,"Méret: "+c(t.size),1)),t.visitno?r("",!0):(a(),i("p",G,c(t.quantity),1))])]),s("div",P,[s("h5",null,c(Math.round(t.price-t.price/100*t.sale))+" Ft ",1)])]))),128))]),s("div",Q,[s("div",null,[W,s("b",null,[s("p",null,c(e.total)+" Ft",1)])])])])):r("",!0)]),X,s("div",Y,[s("div",Z,[s("div",x,[ss,s("p",es,c(e.order.u_email),1)]),s("div",ts,[s("p",{class:"ch",onClick:o[1]||(o[1]=t=>e.backto("customer"))},"Módosítás")])]),s("div",os,[s("div",as,[is,s("p",ns,c(e.order.u_postnumber)+" "+c(e.order.u_city)+", "+c(e.order.u_addresse)+", "+c(e.order.u_legio),1)]),s("div",ls,[s("p",{class:"ch",onClick:o[2]||(o[2]=t=>e.backto("customer"))},"Módosítás")])])]),s("div",null,[rs,s("div",ds,[s("div",null,[e.cuponactive?r("",!0):p((a(),i("input",{key:0,type:"text","onUpdate:modelValue":o[3]||(o[3]=t=>e.cuponcode=t),placeholder:"Válts be kuponod"},null,512)),[[h,e.cuponcode]]),e.cuponactive?p((a(),i("input",{key:1,type:"text","onUpdate:modelValue":o[4]||(o[4]=t=>e.cuponcode=t),placeholder:"Válts be kuponod",disabled:""},null,512)),[[h,e.cuponcode]]):r("",!0),!e.loadingcoupon&&!e.cuponactive?(a(),i("button",{key:2,onClick:o[5]||(o[5]=t=>e.check())}," Beváltom ")):r("",!0),e.loadingcoupon?(a(),i("button",us,[m(k)])):r("",!0),e.cuponactive?(a(),i("button",ps," ✓ ")):r("",!0)]),e.cuponsresponse=="Érvénytelen kupon!"?(a(),i("p",cs,"Érvénytelen kód!")):r("",!0),e.cuponsresponse._id?(a(),i("p",hs,c(e.cuponsresponse.cupon_value)+"%-os kupon beváltva! ",1)):r("",!0)]),vs,s("div",ms,[p(s("input",{type:"radio",name:"szamla",value:"same",id:"same","onUpdate:modelValue":o[6]||(o[6]=t=>e.order.szamlazasimod=t)},null,512),[[_,e.order.szamlazasimod]]),_s,fs,zs,p(s("input",{type:"radio",name:"szamla",value:"other",id:"other","onUpdate:modelValue":o[7]||(o[7]=t=>e.order.szamlazasimod=t)},null,512),[[_,e.order.szamlazasimod]]),gs,e.order.szamlazasimod=="other"?(a(),i("div",ys,[p(s("input",{type:"text","onUpdate:modelValue":o[8]||(o[8]=t=>e.order.szamlazasOrszag=t)},null,512),[[h,e.order.szamlazasOrszag]]),s("div",ks,[p(s("input",{type:"text","onUpdate:modelValue":o[9]||(o[9]=t=>e.order.szamlazasVezeteknev=t),placeholder:"Vezetéknév"},null,512),[[h,e.order.szamlazasVezeteknev]]),p(s("input",{type:"text","onUpdate:modelValue":o[10]||(o[10]=t=>e.order.szamlazasUtonev=t),placeholder:"Utónév"},null,512),[[h,e.order.szamlazasUtonev]])]),s("div",bs,[p(s("input",{type:"text","onUpdate:modelValue":o[11]||(o[11]=t=>e.order.szamlazasIranyitoszam=t),placeholder:"Irányítószám"},null,512),[[h,e.order.szamlazasIranyitoszam]]),p(s("input",{type:"text","onUpdate:modelValue":o[12]||(o[12]=t=>e.order.szamlazasTelepules=t),placeholder:"Település"},null,512),[[h,e.order.szamlazasTelepules]])]),p(s("input",{type:"text","onUpdate:modelValue":o[13]||(o[13]=t=>e.order.szamlazasCim=t),placeholder:"Cím"},null,512),[[h,e.order.szamlazasCim]]),p(s("input",{type:"tel","onUpdate:modelValue":o[14]||(o[14]=t=>e.order.szamlazasTel=t),placeholder:"Telefonszám"},null,512),[[h,e.order.szamlazasTel]])])):r("",!0)]),Ss,Vs,s("div",Us,[s("div",js,[s("div",ws,[p(s("input",{type:"radio",name:"shipping",id:"id1",value:"delivery-card","onUpdate:modelValue":o[15]||(o[15]=t=>e.order.shipping=t),class:"radio"},null,512),[[_,e.order.shipping]]),Cs]),qs]),s("div",Ts,[s("div",Ms,[p(s("input",{type:"radio",name:"shipping",id:"id2",value:"delivery-cash","onUpdate:modelValue":o[16]||(o[16]=t=>e.order.shipping=t),class:"radio"},null,512),[[_,e.order.shipping]]),Fs]),Is])]),Ns,!e.loading&&e.order.shipping!=""?(a(),i("button",{key:0,class:"btntovabb",onClick:o[17]||(o[17]=(...t)=>e.next&&e.next(...t))}," Összegzés ")):r("",!0),!e.loading&&e.order.shipping==""?(a(),i("button",Os," Összegzés ")):r("",!0),e.loading?(a(),i("button",$s,[m(k)])):r("",!0)])]),Es,Ls])}}}),Rs=S(Hs,[["__scopeId","data-v-ff554390"]]);export{Rs as default};
