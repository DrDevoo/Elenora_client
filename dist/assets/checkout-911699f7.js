import{_ as f,r as v,o as n,c as r,b as e,a as p,w,t as c,F as m,f as g,d as i,y as u,C as d,e as z,z as C,g as S,h as _,L as V,p as N,l as T,D as U}from"./index-2e93f4a3.js";const a=o=>(N("data-v-0ca75742"),o=o(),T(),o),F={class:"datas_w"},I={class:"logo_w"},L=a(()=>e("img",{class:"logo",src:U,alt:"ELENORA"},null,-1)),O={class:"cart_w"},q={class:"text"},j=a(()=>e("p",null,"Tekintsd meg a kosarad tartalmát",-1)),E={class:"price"},M={key:0,class:"cart"},B={class:"list"},D={class:"cart_item_imgtext"},J={class:"cart_item_img"},R=["src"],$={class:"cart_item_desc"},A={key:0,class:"result"},K=["src"],G={key:1},H={key:2,class:"quantity"},P={class:"cart_item_del"},Q={class:"prices"},W=a(()=>e("p",null,"Összeg",-1)),X=S('<div class="order_status" data-v-0ca75742><div class="sec" data-v-0ca75742><div class="circle active" data-v-0ca75742><p class="active" data-v-0ca75742>1</p></div><div class="title" data-v-0ca75742><p data-v-0ca75742>Adatok</p></div></div><div class="hr" data-v-0ca75742></div><div class="sec" data-v-0ca75742><div class="circle" data-v-0ca75742><p data-v-0ca75742>2</p></div><div class="title" data-v-0ca75742><p data-v-0ca75742>Szállítás - Fizetés</p></div></div><div class="hr" data-v-0ca75742></div><div class="sec" data-v-0ca75742><div class="circle" data-v-0ca75742><p data-v-0ca75742>3</p></div><div class="title" data-v-0ca75742><p data-v-0ca75742>Összegzés</p></div></div></div>',1),Y=a(()=>e("h3",null,"Kapcsolattartási adatok",-1)),Z=a(()=>e("br",null,null,-1)),x=a(()=>e("h3",null,"Szállítási cím",-1)),ee=a(()=>e("br",null,null,-1)),se=a(()=>e("br",null,null,-1)),te=a(()=>e("input",{type:"text",placeholder:"Ország/régió",value:"Magyarország",readonly:"readonly"},null,-1)),le=a(()=>e("br",null,null,-1)),ae=a(()=>e("br",null,null,-1)),oe=a(()=>e("br",null,null,-1)),ne=a(()=>e("br",null,null,-1)),re={class:"flex"},ie=a(()=>e("label",{for:"news"},"Szeretnék értesülni az aktuális ajánlatokról",-1)),ue=a(()=>e("br",null,null,-1)),de=a(()=>e("br",null,null,-1)),ce={key:1,class:"off"},pe={key:2},_e=a(()=>e("br",null,null,-1)),he=a(()=>e("br",null,null,-1)),ve={data(){return{showCart:!1,sub:!1,cart:[],user:[],imgurl:"/prodimgs/",orderid:this.$route.query.order,loading:!1}},created(){this.cart=JSON.parse(localStorage.getItem("cart")||"[]")},computed:{total(){return this.cart.reduce((o,s)=>o+s.price*s.quantity,0)}},methods:{next(){console.log(this.user),this.loading=!0,this.sub&&_.post("https://elenora.hu:444/newsletter/subscribe",JSON.stringify({email:this.user.u_email,name1:this.user.u_firstname,name2:this.user.u_name}),{headers:{"Content-Type":"application/json"}}).then(o=>this.succes=!0).catch(o=>{console.error("There was an error!",o)}),_.post("https://elenora.hu:444/orders/saveuser/"+this.orderid,JSON.stringify(this.user),{headers:{"Content-Type":"application/json"}}).then(o=>this.$router.push({path:"/shop/checkout/shipping",query:{order:this.orderid}})).catch(o=>{console.error("There was an error!",o)})}},mounted(){_.get("https://elenora.hu:444/orders/getbyid/"+this.orderid).then(o=>this.user=o.data)}},me=Object.assign(ve,{__name:"checkout",setup(o){return(s,l)=>{const y=v("RouterLink"),h=v("ion-icon");return n(),r("main",null,[e("section",F,[e("div",I,[p(y,{to:"/"},{default:w(()=>[L]),_:1})]),e("div",O,[e("div",{class:"header",onClick:l[0]||(l[0]=t=>s.showCart=!s.showCart)},[e("div",q,[p(h,{class:"cart_icon",name:"cart-outline"}),j,p(h,{name:"chevron-down-outline"})]),e("div",E,[e("b",null,[e("p",null,c(s.total)+" Ft",1)])])]),s.showCart?(n(),r("div",M,[e("div",B,[(n(!0),r(m,null,g(s.cart,(t,b)=>(n(),r("div",{class:"cart_item",key:b},[e("div",D,[e("div",J,[t.img!=null?(n(),r("img",{key:0,src:"/newimgs/"+t.img+".webp"},null,8,R)):i("",!0)]),e("div",$,[e("p",null,c(t.name),1),t.custom==!0?(n(),r("div",A,[(n(!0),r(m,null,g(t.pearls,k=>(n(),r("div",null,[e("img",{src:"https://elenora.hu:444/getimage/"+k+".webp"},null,8,K)]))),256))])):i("",!0),t.visitno?i("",!0):(n(),r("p",G,"Méret: "+c(t.size),1)),t.visitno?i("",!0):(n(),r("p",H,c(t.quantity),1))])]),e("div",P,[e("h5",null,c(t.price)+" Ft",1)])]))),128))]),e("div",Q,[e("div",null,[W,e("b",null,[e("p",null,c(s.total)+" Ft",1)])])])])):i("",!0)]),X,e("div",null,[Y,u(e("input",{type:"text",placeholder:"E-mail-cím","onUpdate:modelValue":l[1]||(l[1]=t=>s.user.u_email=t)},null,512),[[d,s.user.u_email]]),Z,x,u(e("input",{type:"text",placeholder:"Vezetéknév","onUpdate:modelValue":l[2]||(l[2]=t=>s.user.u_firstname=t)},null,512),[[d,s.user.u_firstname]]),u(e("input",{type:"text",placeholder:"Utónév","onUpdate:modelValue":l[3]||(l[3]=t=>s.user.u_name=t)},null,512),[[d,s.user.u_name]]),z(),ee,se,te,le,u(e("input",{type:"text",placeholder:"Irányítószám","onUpdate:modelValue":l[4]||(l[4]=t=>s.user.u_postnumber=t)},null,512),[[d,s.user.u_postnumber]]),ae,u(e("input",{type:"text",placeholder:"Település","onUpdate:modelValue":l[5]||(l[5]=t=>s.user.u_city=t)},null,512),[[d,s.user.u_city]]),oe,u(e("input",{type:"text",placeholder:"Cím","onUpdate:modelValue":l[6]||(l[6]=t=>s.user.u_addresse=t)},null,512),[[d,s.user.u_addresse]]),ne,u(e("input",{type:"text",placeholder:"Telefonszám","onUpdate:modelValue":l[7]||(l[7]=t=>s.user.u_tel=t)},null,512),[[d,s.user.u_tel]]),e("div",re,[u(e("input",{class:"checkbox",type:"checkbox",name:"news",id:"news","onUpdate:modelValue":l[8]||(l[8]=t=>s.sub=t)},null,512),[[C,s.sub]]),ie]),ue,de,!s.loading&&!(s.user.u_email==""||s.user.u_name==""||s.user.u_first==""||s.user.u_postnumber==""||s.user.u_regio==""||s.user.u_addresse==""||s.user.u_tel=="")?(n(),r("button",{key:0,onClick:l[9]||(l[9]=(...t)=>s.next&&s.next(...t))}," Szállítási módok ")):i("",!0),!s.loading&&s.user.u_email==""||s.user.u_name==""||s.user.u_first==""||s.user.u_postnumber==""||s.user.u_regio==""||s.user.u_addresse==""||s.user.u_tel==""?(n(),r("button",ce," Szállítási módok ")):i("",!0),s.loading?(n(),r("button",pe,[p(V)])):i("",!0)])]),_e,he])}}}),ye=f(me,[["__scopeId","data-v-0ca75742"]]);export{ye as default};
