import{_ as f,r as g,o as n,c as l,b as e,a as m,w as k,t as p,d,F as b,f as S,m as u,s as h,y as _,g as V,h as v,L as y,p as U,l as j,x as C}from"./index-f1222773.js";const i=a=>(U("data-v-aef1a5cc"),a=a(),j(),a),w={class:"datas_w"},q={class:"logo_w"},T=i(()=>e("img",{class:"logo",src:C,alt:"ELENORA"},null,-1)),M={class:"cart_w"},F={class:"text"},I=i(()=>e("p",null,"Tekintsd meg a kosarad tartalmát",-1)),N={class:"price"},O={key:0},$={key:0,class:"cart"},E={class:"list"},L={class:"cart_item_imgtext"},B={class:"cart_item_img"},H=["src"],J={class:"cart_item_desc"},R={key:0},A={key:1,class:"quantity"},D={class:"cart_item_del"},K={class:"prices"},G=i(()=>e("p",null,"Összeg",-1)),P=V('<div class="order_status" data-v-aef1a5cc><div class="sec" data-v-aef1a5cc><div class="circle" data-v-aef1a5cc><p data-v-aef1a5cc>1</p></div><div class="title" data-v-aef1a5cc><p data-v-aef1a5cc>Adatok</p></div></div><div class="hr" data-v-aef1a5cc></div><div class="sec" data-v-aef1a5cc><div class="circle active" data-v-aef1a5cc><p class="active" data-v-aef1a5cc>2</p></div><div class="title" data-v-aef1a5cc><p data-v-aef1a5cc>Szállítás - Fizetés</p></div></div><div class="hr" data-v-aef1a5cc></div><div class="sec" data-v-aef1a5cc><div class="circle" data-v-aef1a5cc><p data-v-aef1a5cc>3</p></div><div class="title" data-v-aef1a5cc><p data-v-aef1a5cc>Összegzés</p></div></div></div>',1),Q={class:"osszesites_w"},W={class:"oszesites_b"},X={class:"left"},Y=i(()=>e("p",{class:"t"},"Kapcsolattartás",-1)),Z={class:"c"},x={class:"right"},ee={class:"oszesites_b"},se={class:"left"},te=i(()=>e("p",{class:"t"},"Szállítási cím",-1)),oe={class:"c"},ae={class:"right"},ie=i(()=>e("h3",null,"Ajándékkártya vagy kupon kódja",-1)),ne={class:"cupon_b"},le={key:3},re={key:4,style:{"background-color":"green"}},de={key:0},ce={key:1,style:{color:"green"}},ue=i(()=>e("h3",null,"Számlázási cím",-1)),pe={class:"szamla_b"},he=i(()=>e("label",{for:"same"},"Egyezik a szállítási címmel",-1)),ve=i(()=>e("br",null,null,-1)),me=i(()=>e("br",null,null,-1)),_e=i(()=>e("label",{for:"other"},"Másik számlázási címet adok meg",-1)),ze={key:0,class:"otherszamlazasi"},ge={class:"inputflex"},ye={class:"inputflex"},fe=i(()=>e("h3",null,"Szállítás és fizetés",-1)),ke=i(()=>e("h5",{class:"mini"}," Ha a rendelés összege meghaladja a 15.000 Ft-ot a szállítás ingyenes! ",-1)),be={class:"options_box"},Se={class:"flex_option"},Ve={class:"flex_option"},Ue=i(()=>e("label",{for:"id1"},"Házhozszállítás - Online fizetés",-1)),je=i(()=>e("div",null,[e("h6",null,"1990 Ft")],-1)),Ce={class:"flex_option"},we={class:"flex_option"},qe=i(()=>e("label",{for:"id2"},"Házhozszállítás - Utánvétes fizetés",-1)),Te=i(()=>e("div",null,[e("h6",null,"2880 Ft")],-1)),Me=i(()=>e("br",null,null,-1)),Fe={key:1,class:"btntovabb off"},Ie={key:2,class:"btntovabb"},Ne=i(()=>e("br",null,null,-1)),Oe=i(()=>e("br",null,null,-1)),$e={data(){return{showCart:!1,imgurl:"https://elenora.hu:444/getimage/",orderid:this.$route.query.order,loading:!1,order:[],epty:[],loadingcoupon:!1,cuponcode:"",cuponsresponse:[],cuponactive:!1}},async mounted(){await v.get("https://elenora.hu:444/orders/getbyid/"+this.orderid).then(a=>this.order=a.data),this.order.usedcupon!=""&&(await v.get("https://elenora.hu:444/cupons/check/"+this.order.usedcupon).then(a=>this.cuponsresponse=a.data),this.cuponcode=this.order.usedcupon,this.cuponactive=!0,this.cart.forEach((a,s)=>{a.name!="Szállítási díj"?(console.log(a),this.cart[s].sale=this.cuponsresponse.cupon_value,console.log("fut")):console.log("elutasitva")}))},methods:{next(){if(this.loading=!0,this.order.cart.find(c=>c.name=="Szállítási díj")){var s=this.order.cart.findIndex(c=>c.name=="Szállítási díj");this.order.cart.splice(s)}if(this.order.cart.find(c=>c.name=="Utánvét díj")){var z=this.order.cart.findIndex(c=>c.name=="Utánvét díj");this.order.cart.splice(z)}this.order.shipping=="delivery-cash"?(this.order.cart.reduce((t,r)=>t+Math.round(r.price-r.price/100*r.sale)*r.quantity,0)>14999?(this.order.cart.push({id:1,name:"Szállítási díj",price:0,quantity:1,sale:0,img:null,visitno:!0}),this.order.cart.push({id:2,name:"Utánvét díj",price:890,quantity:1,sale:0,img:null,visitno:!0})):(this.order.cart.push({id:1,name:"Szállítási díj",price:1990,quantity:1,sale:0,img:null,visitno:!0}),this.order.cart.push({id:2,name:"Utánvét díj",price:890,quantity:1,sale:0,img:null,visitno:!0})),v.post("https://elenora.hu:444/orders/updatecart/"+this.orderid,JSON.stringify(this.order.cart),{headers:{"Content-Type":"application/json"}})):(this.order.cart.reduce((t,r)=>t+Math.round(r.price-r.price/100*r.sale)*r.quantity,0)>14999?this.order.cart.push({id:1,name:"Szállítási díj",price:0,quantity:1,sale:0,img:null,visitno:!0}):this.order.cart.push({id:1,name:"Szállítási díj",price:1990,quantity:1,sale:0,img:null,visitno:!0}),v.post("https://elenora.hu:444/orders/updatecart/"+this.orderid,JSON.stringify(this.order.cart),{headers:{"Content-Type":"application/json"}})),v.post("https://elenora.hu:444/orders/saveshipping/"+this.orderid,JSON.stringify(this.order),{headers:{"Content-Type":"application/json"}}).then(c=>this.$router.push({path:"/shop/checkout/summary",query:{order:this.orderid}})).catch(c=>{console.error("There was an error!",c)})},backto(a){console.log("clicked"),a=="shipping"?this.$router.push({path:"/shop/checkout/shipping",query:{order:this.orderid}}):a=="customer"?this.$router.push({path:"/shop/checkout",query:{order:this.orderid}}):a=="paying"?this.$router.push({path:"/shop/checkout/shipping",query:{order:this.orderid}}):console.log("err")},async check(){this.loadingcoupon=!0,await v.get("https://elenora.hu:444/cupons/check/"+this.cuponcode).then(a=>this.cuponsresponse=a.data),this.cuponsresponse._id?(console.log("Kupon aktivalasa"),this.order.cart.forEach((a,s)=>{a.name!="Szállítási díj"?(console.log(a),this.order.cart[s].sale=this.cuponsresponse.cupon_value):console.log("elutasitva")}),v.post("https://elenora.hu:444/orders/updatecart/"+this.orderid,JSON.stringify(this.order.cart),{headers:{"Content-Type":"application/json"}}),await v.get("https://elenora.hu:444/orders/savecupon/"+this.orderid+"/"+this.cuponsresponse.cupon_name),this.cuponactive=!0):console.log("Hibas kupon!"),this.loadingcoupon=!1}}},Ee=Object.assign($e,{__name:"checkoutShipping",setup(a){return(s,o)=>{const z=g("RouterLink"),c=g("ion-icon");return n(),l("main",null,[e("section",w,[e("div",q,[m(z,{to:"/"},{default:k(()=>[T]),_:1})]),e("div",M,[e("div",{class:"header",onClick:o[0]||(o[0]=t=>s.showCart=!s.showCart)},[e("div",F,[m(c,{class:"cart_icon",name:"cart-outline"}),I,m(c,{name:"chevron-down-outline"})]),e("div",N,[e("b",null,[s.order.cart?(n(),l("p",O,p(s.order.cart.reduce((t,r)=>t+Math.round(r.price-r.price/100*r.sale)*r.quantity,0))+" Ft ",1)):d("",!0)])])]),s.showCart?(n(),l("div",$,[e("div",E,[(n(!0),l(b,null,S(s.order.cart,(t,r)=>(n(),l("div",{class:"cart_item",key:r},[e("div",L,[e("div",B,[t.img!=null?(n(),l("img",{key:0,src:s.imgurl+t.img},null,8,H)):d("",!0)]),e("div",J,[e("p",null,p(t.name),1),t.visitno?d("",!0):(n(),l("p",R,"Méret: "+p(t.size),1)),t.visitno?d("",!0):(n(),l("p",A,p(t.quantity),1))])]),e("div",D,[e("h5",null,p(Math.round(t.price-t.price/100*t.sale))+" Ft ",1)])]))),128))]),e("div",K,[e("div",null,[G,e("b",null,[e("p",null,p(s.total)+" Ft",1)])])])])):d("",!0)]),P,e("div",Q,[e("div",W,[e("div",X,[Y,e("p",Z,p(s.order.u_email),1)]),e("div",x,[e("p",{class:"ch",onClick:o[1]||(o[1]=t=>s.backto("customer"))},"Módosítás")])]),e("div",ee,[e("div",se,[te,e("p",oe,p(s.order.u_postnumber)+" "+p(s.order.u_city)+", "+p(s.order.u_addresse)+", "+p(s.order.u_legio),1)]),e("div",ae,[e("p",{class:"ch",onClick:o[2]||(o[2]=t=>s.backto("customer"))},"Módosítás")])])]),e("div",null,[ie,e("div",ne,[e("div",null,[s.cuponactive?d("",!0):u((n(),l("input",{key:0,type:"text","onUpdate:modelValue":o[3]||(o[3]=t=>s.cuponcode=t),placeholder:"Válts be kuponod"},null,512)),[[h,s.cuponcode]]),s.cuponactive?u((n(),l("input",{key:1,type:"text","onUpdate:modelValue":o[4]||(o[4]=t=>s.cuponcode=t),placeholder:"Válts be kuponod",disabled:""},null,512)),[[h,s.cuponcode]]):d("",!0),!s.loadingcoupon&&!s.cuponactive?(n(),l("button",{key:2,onClick:o[5]||(o[5]=t=>s.check())}," Beváltom ")):d("",!0),s.loadingcoupon?(n(),l("button",le,[m(y)])):d("",!0),s.cuponactive?(n(),l("button",re," ✓ ")):d("",!0)]),s.cuponsresponse=="Érvénytelen kupon!"?(n(),l("p",de,"Érvénytelen kód!")):d("",!0),s.cuponsresponse._id?(n(),l("p",ce,p(s.cuponsresponse.cupon_value)+"%-os kupon beváltva! ",1)):d("",!0)]),ue,e("div",pe,[u(e("input",{type:"radio",name:"szamla",value:"same",id:"same","onUpdate:modelValue":o[6]||(o[6]=t=>s.order.szamlazasimod=t)},null,512),[[_,s.order.szamlazasimod]]),he,ve,me,u(e("input",{type:"radio",name:"szamla",value:"other",id:"other","onUpdate:modelValue":o[7]||(o[7]=t=>s.order.szamlazasimod=t)},null,512),[[_,s.order.szamlazasimod]]),_e,s.order.szamlazasimod=="other"?(n(),l("div",ze,[u(e("input",{type:"text","onUpdate:modelValue":o[8]||(o[8]=t=>s.order.szamlazasOrszag=t)},null,512),[[h,s.order.szamlazasOrszag]]),e("div",ge,[u(e("input",{type:"text","onUpdate:modelValue":o[9]||(o[9]=t=>s.order.szamlazasVezeteknev=t),placeholder:"Vezetéknév"},null,512),[[h,s.order.szamlazasVezeteknev]]),u(e("input",{type:"text","onUpdate:modelValue":o[10]||(o[10]=t=>s.order.szamlazasUtonev=t),placeholder:"Utónév"},null,512),[[h,s.order.szamlazasUtonev]])]),e("div",ye,[u(e("input",{type:"text","onUpdate:modelValue":o[11]||(o[11]=t=>s.order.szamlazasIranyitoszam=t),placeholder:"Irányítószám"},null,512),[[h,s.order.szamlazasIranyitoszam]]),u(e("input",{type:"text","onUpdate:modelValue":o[12]||(o[12]=t=>s.order.szamlazasTelepules=t),placeholder:"Település"},null,512),[[h,s.order.szamlazasTelepules]])]),u(e("input",{type:"text","onUpdate:modelValue":o[13]||(o[13]=t=>s.order.szamlazasCim=t),placeholder:"Cím"},null,512),[[h,s.order.szamlazasCim]]),u(e("input",{type:"tel","onUpdate:modelValue":o[14]||(o[14]=t=>s.order.szamlazasTel=t),placeholder:"Telefonszám"},null,512),[[h,s.order.szamlazasTel]])])):d("",!0)]),fe,ke,e("div",be,[e("div",Se,[e("div",Ve,[u(e("input",{type:"radio",name:"shipping",id:"id1",value:"delivery-card","onUpdate:modelValue":o[15]||(o[15]=t=>s.order.shipping=t),class:"radio"},null,512),[[_,s.order.shipping]]),Ue]),je]),e("div",Ce,[e("div",we,[u(e("input",{type:"radio",name:"shipping",id:"id2",value:"delivery-cash","onUpdate:modelValue":o[16]||(o[16]=t=>s.order.shipping=t),class:"radio"},null,512),[[_,s.order.shipping]]),qe]),Te])]),Me,!s.loading&&s.order.shipping!=""?(n(),l("button",{key:0,class:"btntovabb",onClick:o[17]||(o[17]=(...t)=>s.next&&s.next(...t))}," Összegzés ")):d("",!0),!s.loading&&s.order.shipping==""?(n(),l("button",Fe," Összegzés ")):d("",!0),s.loading?(n(),l("button",Ie,[m(y)])):d("",!0)])]),Ne,Oe])}}}),Be=f(Ee,[["__scopeId","data-v-aef1a5cc"]]);export{Be as default};