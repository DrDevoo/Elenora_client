import{k as g,r as h,o as n,c as r,b as e,a as c,w as y,t as u,F as k,f as b,d as p,l as i,m as d,e as w,g as z,h as v,L as S,p as V,n as C,q as N}from"./index-50dbd189.js";const l=o=>(V("data-v-a16a0f44"),o=o(),C(),o),U={class:"datas_w"},T={class:"logo_w"},q=l(()=>e("img",{class:"logo",src:N,alt:"ELENORA"},null,-1)),F={class:"cart_w"},I={class:"text"},L=l(()=>e("p",null,"Tekintsd meg a kosarad tartalmát",-1)),O={class:"price"},E={key:0,class:"cart"},j={class:"list"},B={class:"cart_item_imgtext"},M={class:"cart_item_img"},R=["src"],$={class:"cart_item_desc"},A={class:"quantity"},D={class:"cart_item_del"},J={class:"prices"},K=l(()=>e("p",null,"Összeg",-1)),G=z('<div class="order_status" data-v-a16a0f44><div class="sec" data-v-a16a0f44><div class="circle active" data-v-a16a0f44><p class="active" data-v-a16a0f44>1</p></div><div class="title" data-v-a16a0f44><p data-v-a16a0f44>Adatok</p></div></div><div class="hr" data-v-a16a0f44></div><div class="sec" data-v-a16a0f44><div class="circle" data-v-a16a0f44><p data-v-a16a0f44>2</p></div><div class="title" data-v-a16a0f44><p data-v-a16a0f44>Szállítás - Fizetés</p></div></div><div class="hr" data-v-a16a0f44></div><div class="sec" data-v-a16a0f44><div class="circle" data-v-a16a0f44><p data-v-a16a0f44>3</p></div><div class="title" data-v-a16a0f44><p data-v-a16a0f44>Összegzés</p></div></div></div>',1),H=l(()=>e("h3",null,"Kapcsolattartási adatok",-1)),P=l(()=>e("br",null,null,-1)),Q=l(()=>e("h3",null,"Szállítási cím",-1)),W=l(()=>e("br",null,null,-1)),X=l(()=>e("br",null,null,-1)),Y=l(()=>e("input",{type:"text",placeholder:"Ország/régió",value:"Magyarország",readonly:"readonly"},null,-1)),Z=l(()=>e("br",null,null,-1)),x=l(()=>e("br",null,null,-1)),ee=l(()=>e("br",null,null,-1)),se=l(()=>e("br",null,null,-1)),te=l(()=>e("div",{class:"flex"},[e("input",{class:"checkbox",type:"checkbox",name:"news",id:"news"}),e("label",{for:"news"},"Szeretnék értesülni az aktuális ajánlatokról")],-1)),ae=l(()=>e("br",null,null,-1)),le=l(()=>e("br",null,null,-1)),oe={key:1,class:"off"},ne={key:2},re=l(()=>e("br",null,null,-1)),ie=l(()=>e("br",null,null,-1)),de={data(){return{showCart:!1,cart:[],user:[],imgurl:"https://elenora.hu:444/getimage/",orderid:this.$route.query.order,loading:!1}},created(){this.cart=JSON.parse(localStorage.getItem("cart")||"[]")},computed:{total(){return this.cart.reduce((o,s)=>o+s.price*s.quantity,0)}},methods:{next(){console.log(this.user),this.loading=!0,v.post("https://elenora.hu:444/orders/saveuser/"+this.orderid,JSON.stringify(this.user),{headers:{"Content-Type":"application/json"}}).then(o=>this.$router.push({path:"/shop/checkout/shipping",query:{order:this.orderid}})).catch(o=>{console.error("There was an error!",o)})}},mounted(){v.get("https://elenora.hu:444/orders/getbyid/"+this.orderid).then(o=>this.user=o.data)}},ue=Object.assign(de,{__name:"checkout",setup(o){return(s,a)=>{const m=h("RouterLink"),_=h("ion-icon");return n(),r("main",null,[e("section",U,[e("div",T,[c(m,{to:"/"},{default:y(()=>[q]),_:1})]),e("div",F,[e("div",{class:"header",onClick:a[0]||(a[0]=t=>s.showCart=!s.showCart)},[e("div",I,[c(_,{class:"cart_icon",name:"cart-outline"}),L,c(_,{name:"chevron-down-outline"})]),e("div",O,[e("b",null,[e("p",null,u(s.total)+" Ft",1)])])]),s.showCart?(n(),r("div",E,[e("div",j,[(n(!0),r(k,null,b(s.cart,(t,f)=>(n(),r("div",{class:"cart_item",key:f},[e("div",B,[e("div",M,[t.img!=null?(n(),r("img",{key:0,src:s.imgurl+t.img},null,8,R)):p("",!0)]),e("div",$,[e("p",null,u(t.name),1),e("p",null,"Méret: "+u(t.size),1),e("p",A,u(t.quantity),1)])]),e("div",D,[e("h5",null,u(t.price)+" Ft",1)])]))),128))]),e("div",J,[e("div",null,[K,e("b",null,[e("p",null,u(s.total)+" Ft",1)])])])])):p("",!0)]),G,e("div",null,[H,i(e("input",{type:"text",placeholder:"E-mail-cím","onUpdate:modelValue":a[1]||(a[1]=t=>s.user.u_email=t)},null,512),[[d,s.user.u_email]]),P,Q,i(e("input",{type:"text",placeholder:"Vezetéknév","onUpdate:modelValue":a[2]||(a[2]=t=>s.user.u_first=t)},null,512),[[d,s.user.u_first]]),i(e("input",{type:"text",placeholder:"Utónév","onUpdate:modelValue":a[3]||(a[3]=t=>s.user.u_name=t)},null,512),[[d,s.user.u_name]]),w(),W,X,Y,Z,i(e("input",{type:"text",placeholder:"Irányítószám","onUpdate:modelValue":a[4]||(a[4]=t=>s.user.u_postnumber=t)},null,512),[[d,s.user.u_postnumber]]),x,i(e("input",{type:"text",placeholder:"Település","onUpdate:modelValue":a[5]||(a[5]=t=>s.user.u_city=t)},null,512),[[d,s.user.u_city]]),ee,i(e("input",{type:"text",placeholder:"Cím","onUpdate:modelValue":a[6]||(a[6]=t=>s.user.u_addresse=t)},null,512),[[d,s.user.u_addresse]]),se,i(e("input",{type:"text",placeholder:"Telefonszám","onUpdate:modelValue":a[7]||(a[7]=t=>s.user.u_tel=t)},null,512),[[d,s.user.u_tel]]),te,ae,le,!s.loading&&!(s.user.u_email==""||s.user.u_name==""||s.user.u_first==""||s.user.u_postnumber==""||s.user.u_regio==""||s.user.u_addresse==""||s.user.u_tel=="")?(n(),r("button",{key:0,onClick:a[8]||(a[8]=(...t)=>s.next&&s.next(...t))}," Szállítási módok ")):p("",!0),!s.loading&&s.user.u_email==""||s.user.u_name==""||s.user.u_first==""||s.user.u_postnumber==""||s.user.u_regio==""||s.user.u_addresse==""||s.user.u_tel==""?(n(),r("button",oe," Szállítási módok ")):p("",!0),s.loading?(n(),r("button",ne,[c(S)])):p("",!0)])]),re,ie])}}}),ce=g(ue,[["__scopeId","data-v-a16a0f44"]]);export{ce as default};
