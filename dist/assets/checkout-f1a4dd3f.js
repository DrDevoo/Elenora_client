import{_ as f,r as v,o as n,c as r,b as e,a as p,w,t as c,F as m,f as g,d,n as i,x as u,e as z,v as S,g as V,h as _,L as C,p as N,l as T,y as U}from"./index-81d0340d.js";const o=a=>(N("data-v-d8453ecc"),a=a(),T(),a),F={class:"datas_w"},I={class:"logo_w"},L=o(()=>e("img",{class:"logo",src:U,alt:"ELENORA"},null,-1)),O={class:"cart_w"},q={class:"text"},j=o(()=>e("p",null,"Tekintsd meg a kosarad tartalmát",-1)),E={class:"price"},M={key:0,class:"cart"},B={class:"list"},J={class:"cart_item_imgtext"},R={class:"cart_item_img"},$=["src"],A={class:"cart_item_desc"},D={key:0,class:"result"},K=["src"],G={key:1},H={key:2,class:"quantity"},P={class:"cart_item_del"},Q={class:"prices"},W=o(()=>e("p",null,"Összeg",-1)),X=V('<div class="order_status" data-v-d8453ecc><div class="sec" data-v-d8453ecc><div class="circle active" data-v-d8453ecc><p class="active" data-v-d8453ecc>1</p></div><div class="title" data-v-d8453ecc><p data-v-d8453ecc>Adatok</p></div></div><div class="hr" data-v-d8453ecc></div><div class="sec" data-v-d8453ecc><div class="circle" data-v-d8453ecc><p data-v-d8453ecc>2</p></div><div class="title" data-v-d8453ecc><p data-v-d8453ecc>Szállítás - Fizetés</p></div></div><div class="hr" data-v-d8453ecc></div><div class="sec" data-v-d8453ecc><div class="circle" data-v-d8453ecc><p data-v-d8453ecc>3</p></div><div class="title" data-v-d8453ecc><p data-v-d8453ecc>Összegzés</p></div></div></div>',1),Y=o(()=>e("h3",null,"Kapcsolattartási adatok",-1)),Z=o(()=>e("br",null,null,-1)),x=o(()=>e("h3",null,"Szállítási cím",-1)),ee=o(()=>e("br",null,null,-1)),se=o(()=>e("br",null,null,-1)),te=o(()=>e("input",{type:"text",placeholder:"Ország/régió",value:"Magyarország",readonly:"readonly"},null,-1)),le=o(()=>e("br",null,null,-1)),oe=o(()=>e("br",null,null,-1)),ae=o(()=>e("br",null,null,-1)),ne=o(()=>e("br",null,null,-1)),re={class:"flex"},de=o(()=>e("label",{for:"news"},"Szeretnék értesülni az aktuális ajánlatokról",-1)),ie=o(()=>e("br",null,null,-1)),ue=o(()=>e("br",null,null,-1)),ce={key:1,class:"off"},pe={key:2},_e=o(()=>e("br",null,null,-1)),he=o(()=>e("br",null,null,-1)),ve={data(){return{showCart:!1,sub:!1,cart:[],user:[],imgurl:"/prodimgs/",orderid:this.$route.query.order,loading:!1}},created(){this.cart=JSON.parse(localStorage.getItem("cart")||"[]")},computed:{total(){return this.cart.reduce((a,s)=>a+s.price*s.quantity,0)}},methods:{next(){console.log(this.user),this.loading=!0,this.sub&&_.post("https://elenora.hu:444/newsletter/subscribe",JSON.stringify({email:this.user.u_email,name1:this.user.u_firstname,name2:this.user.u_name}),{headers:{"Content-Type":"application/json"}}).then(a=>this.succes=!0).catch(a=>{console.error("There was an error!",a)}),_.post("https://elenora.hu:444/orders/saveuser/"+this.orderid,JSON.stringify(this.user),{headers:{"Content-Type":"application/json"}}).then(a=>this.$router.push({path:"/shop/checkout/shipping",query:{order:this.orderid}})).catch(a=>{console.error("There was an error!",a)})}},mounted(){_.get("https://elenora.hu:444/orders/getbyid/"+this.orderid).then(a=>this.user=a.data)}},me=Object.assign(ve,{__name:"checkout",setup(a){return(s,l)=>{const y=v("RouterLink"),h=v("ion-icon");return n(),r("main",null,[e("section",F,[e("div",I,[p(y,{to:"/"},{default:w(()=>[L]),_:1})]),e("div",O,[e("div",{class:"header",onClick:l[0]||(l[0]=t=>s.showCart=!s.showCart)},[e("div",q,[p(h,{class:"cart_icon",name:"cart-outline"}),j,p(h,{name:"chevron-down-outline"})]),e("div",E,[e("b",null,[e("p",null,c(s.total)+" Ft",1)])])]),s.showCart?(n(),r("div",M,[e("div",B,[(n(!0),r(m,null,g(s.cart,(t,b)=>(n(),r("div",{class:"cart_item",key:b},[e("div",J,[e("div",R,[t.img!=null?(n(),r("img",{key:0,src:s.imgurl+t.img},null,8,$)):d("",!0)]),e("div",A,[e("p",null,c(t.name),1),t.custom==!0?(n(),r("div",D,[(n(!0),r(m,null,g(t.pearls,k=>(n(),r("div",null,[e("img",{src:"https://elenora.hu:444/getimage/"+k+".webp"},null,8,K)]))),256))])):d("",!0),t.visitno?d("",!0):(n(),r("p",G,"Méret: "+c(t.size),1)),t.visitno?d("",!0):(n(),r("p",H,c(t.quantity),1))])]),e("div",P,[e("h5",null,c(t.price)+" Ft",1)])]))),128))]),e("div",Q,[e("div",null,[W,e("b",null,[e("p",null,c(s.total)+" Ft",1)])])])])):d("",!0)]),X,e("div",null,[Y,i(e("input",{type:"text",placeholder:"E-mail-cím","onUpdate:modelValue":l[1]||(l[1]=t=>s.user.u_email=t)},null,512),[[u,s.user.u_email]]),Z,x,i(e("input",{type:"text",placeholder:"Vezetéknév","onUpdate:modelValue":l[2]||(l[2]=t=>s.user.u_firstname=t)},null,512),[[u,s.user.u_firstname]]),i(e("input",{type:"text",placeholder:"Utónév","onUpdate:modelValue":l[3]||(l[3]=t=>s.user.u_name=t)},null,512),[[u,s.user.u_name]]),z(),ee,se,te,le,i(e("input",{type:"text",placeholder:"Irányítószám","onUpdate:modelValue":l[4]||(l[4]=t=>s.user.u_postnumber=t)},null,512),[[u,s.user.u_postnumber]]),oe,i(e("input",{type:"text",placeholder:"Település","onUpdate:modelValue":l[5]||(l[5]=t=>s.user.u_city=t)},null,512),[[u,s.user.u_city]]),ae,i(e("input",{type:"text",placeholder:"Cím","onUpdate:modelValue":l[6]||(l[6]=t=>s.user.u_addresse=t)},null,512),[[u,s.user.u_addresse]]),ne,i(e("input",{type:"text",placeholder:"Telefonszám","onUpdate:modelValue":l[7]||(l[7]=t=>s.user.u_tel=t)},null,512),[[u,s.user.u_tel]]),e("div",re,[i(e("input",{class:"checkbox",type:"checkbox",name:"news",id:"news","onUpdate:modelValue":l[8]||(l[8]=t=>s.sub=t)},null,512),[[S,s.sub]]),de]),ie,ue,!s.loading&&!(s.user.u_email==""||s.user.u_name==""||s.user.u_first==""||s.user.u_postnumber==""||s.user.u_regio==""||s.user.u_addresse==""||s.user.u_tel=="")?(n(),r("button",{key:0,onClick:l[9]||(l[9]=(...t)=>s.next&&s.next(...t))}," Szállítási módok ")):d("",!0),!s.loading&&s.user.u_email==""||s.user.u_name==""||s.user.u_first==""||s.user.u_postnumber==""||s.user.u_regio==""||s.user.u_addresse==""||s.user.u_tel==""?(n(),r("button",ce," Szállítási módok ")):d("",!0),s.loading?(n(),r("button",pe,[p(C)])):d("",!0)])]),_e,he])}}}),ye=f(me,[["__scopeId","data-v-d8453ecc"]]);export{ye as default};