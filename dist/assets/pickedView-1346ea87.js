import{k as w,r as g,o as t,c as n,i as m,_ as f,b as s,a as u,w as y,d as i,F as v,f as _,h as c,t as p,l as h,v as q,m as B,n as S,e as b,j as z,p as C,q as $}from"./index-a678bde5.js";const d=l=>(C("data-v-22916863"),l=l(),$(),l),V={class:"top-s"},T=["src"],M=["src"],X={class:"thumblist"},I=["src"],L=["src"],F=["src"],N={class:"texts-b"},P={key:0},D={key:1},E={class:"plus_w"},K=d(()=>s("div",null,[s("input",{type:"checkbox",name:"doboz",id:"doboz"}),s("label",{for:"doboz"},"Dísz dobozban legyen a termék (+590 Ft)")],-1)),O=d(()=>s("label",{for:"ko"},"Kérek mellé ásvány követ",-1)),U={key:0,class:"stonelist"},j={class:"stone"},J=["src"],A={class:"s_name"},G={class:"s_price"},H={class:"input-b"},Q={class:"selects-b"},R={class:"size-b box"},W=d(()=>s("p",null,"Méret",-1)),Y={key:0,value:"XS"},Z={key:1,value:"S"},x={key:2,value:"M"},ee={key:3,value:"L"},se={key:4,value:"XL"},te={key:5,value:"XXL"},oe={class:"mennyiseg-b box"},ne=d(()=>s("p",null,"Mennyiség",-1)),ie={class:"quantity_b"},ae={class:"add-b"},le={key:1},re={class:"bottom-s"},de={class:"description-s"},ue={class:"desc-b"},me=d(()=>s("h4",null,"Ásványok",-1)),pe={key:0,class:"text-b"},ce={class:"desc-b"},he=d(()=>s("h4",null,"Egyedi karkötő",-1)),ke={key:0,class:"text-b"},ge=d(()=>s("p",null,"Egyedi karkötőt szeretnél? Keress meg minket Instagrammon!",-1)),ye=[ge],ve=d(()=>s("section",{class:"favorites-s"},null,-1)),_e={data(){return{showB1:!0,showB2:!1,showB3:!1,showPStone:!1,response:[],stones:[],access:[],cart:[],imgurl:"https://elenora.hu:444/getimage/",quantity:1,size:"M",key:0,p_img:null}},mounted(){this.cart=JSON.parse(localStorage.getItem("cart")||"[]"),c.get("https://elenora.hu:444/products/getbyid/"+this.$route.query.id).then(l=>this.response=l.data.product),c.get("https://elenora.hu:444/products/getbyid/"+this.$route.query.id).then(l=>this.access=l.data),c.get("https://elenora.hu:444/products/getall/stone").then(l=>this.stones=l.data)},methods:{addToCart(l,e,o){this.cart.push({id:l._id,name:l.prodname,img:l.image,size:o,price:l.price,quantity:e,sale:0}),localStorage.setItem("cart",JSON.stringify(this.cart)),this.key+=1},addq(){this.quantity<15&&(this.quantity+=1)},minq(){this.quantity>1&&(this.quantity-=1)},select(l){console.log(l),this.p_img=l}}},be=Object.assign(_e,{__name:"pickedView",setup(l){return(e,o)=>{const k=g("setion"),r=g("ion-icon");return t(),n("main",null,[(t(),m(f,{key:e.key})),s("section",V,[u(k,{class:"images-s"},{default:y(()=>[s("div",null,[e.response.image&&e.p_img==null?(t(),n("img",{key:0,src:e.imgurl+e.response.image,class:"pickedimg",alt:"Termék képe"},null,8,T)):i("",!0),e.p_img!=null?(t(),n("img",{key:1,src:e.imgurl+e.p_img,class:"pickedimg",alt:"Termék képe"},null,8,M)):i("",!0)]),s("div",X,[e.response.image?(t(),n("img",{key:0,onClick:o[0]||(o[0]=a=>e.select(e.response.image)),class:"thumbimg",src:e.imgurl+e.response.image,alt:"Termék képe"},null,8,I)):i("",!0),e.response.image2&&e.response.image2!="46bea41c0363d722467defc2f1ecc234"?(t(),n("img",{key:1,onClick:o[1]||(o[1]=a=>e.select(e.response.image2)),class:"thumbimg",src:e.imgurl+e.response.image2,alt:"Termék képe"},null,8,L)):i("",!0),e.response.image3&&e.response.image3!="46bea41c0363d722467defc2f1ecc234"?(t(),n("img",{key:2,onClick:o[2]||(o[2]=a=>e.select(e.response.image3)),class:"thumbimg",src:e.imgurl+e.response.image3,alt:"Termék képe"},null,8,F)):i("",!0)])]),_:1}),u(k,{class:"texts-s"},{default:y(()=>[s("div",N,[e.response.prodname?(t(),n("h1",P,p(e.response.prodname),1)):i("",!0),e.response.price?(t(),n("h3",D,p(e.response.price)+" Ft",1)):i("",!0)]),s("div",null,[s("div",E,[K,s("div",null,[h(s("input",{type:"checkbox",name:"ko",id:"ko","onUpdate:modelValue":o[3]||(o[3]=a=>e.showPStone=a)},null,512),[[q,e.showPStone]]),O]),e.showPStone?(t(),n("div",U,[(t(!0),n(v,null,_(e.stones,a=>(t(),n("div",j,[s("img",{class:"s_img",src:e.imgurl+a.image},null,8,J),s("p",A,p(a.prodname),1),s("p",G,p(a.price)+" Ft",1)]))),256))])):i("",!0)])]),s("div",H,[s("div",Q,[s("div",R,[W,h(s("select",{"onUpdate:modelValue":o[4]||(o[4]=a=>e.size=a),class:"size_b"},[e.access.xs==!0?(t(),n("option",Y,"XS")):i("",!0),e.access.s==!0?(t(),n("option",Z,"S")):i("",!0),e.access.m==!0?(t(),n("option",x,"M")):i("",!0),e.access.l==!0?(t(),n("option",ee,"L")):i("",!0),e.access.xl==!0?(t(),n("option",se,"XL")):i("",!0),e.access.xxl==!0?(t(),n("option",te,"XXL")):i("",!0)],512),[[B,e.size]])]),s("div",oe,[ne,s("div",ie,[u(r,{name:"add-outline",onClick:o[5]||(o[5]=a=>e.addq())}),h(s("input",{type:"number",min:"1",max:"15","onUpdate:modelValue":o[6]||(o[6]=a=>e.quantity=a)},null,512),[[S,e.quantity]]),u(r,{name:"remove-outline",onClick:o[7]||(o[7]=a=>e.minq())})])])]),s("div",ae,[e.access.xs==!0?(t(),n("button",{key:0,onClick:o[8]||(o[8]=a=>e.addToCart(e.response,e.quantity,e.size))},[b(" Kosárba teszem"),u(r,{name:"cart-outline"})])):i("",!0),e.access.xs==!1?(t(),n("button",le,[b(" A termék nem elérhető!"),u(r,{name:"cart-outline"})])):i("",!0)])])]),_:1})]),s("section",re,[s("section",de,[s("div",ue,[s("div",{onClick:o[9]||(o[9]=a=>e.showB2=!e.showB2),class:"title-b"},[me,e.showB2?i("",!0):(t(),m(r,{key:0,name:"chevron-up-outline"})),e.showB2?(t(),m(r,{key:1,class:"downarrow",name:"chevron-down-outline"})):i("",!0)]),e.showB2?(t(),n("div",pe,[(t(!0),n(v,null,_(e.response.pearls,a=>(t(),n("p",{key:a._id},p(a.name),1))),128))])):i("",!0)]),s("div",ce,[s("div",{onClick:o[10]||(o[10]=a=>e.showB3=!e.showB3),class:"title-b"},[he,e.showB3?i("",!0):(t(),m(r,{key:0,name:"chevron-up-outline"})),e.showB3?(t(),m(r,{key:1,class:"downarrow",name:"chevron-down-outline"})):i("",!0)]),e.showB3?(t(),n("div",ke,ye)):i("",!0)])]),ve]),u(z)])}}}),fe=w(be,[["__scopeId","data-v-22916863"]]);export{fe as default};
