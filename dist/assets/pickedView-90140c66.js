import{k as _,r as h,o as s,c as n,i as m,_ as b,b as t,a as d,w as k,d as i,F as f,f as w,h as g,t as p,l as y,v as B,m as q,e as v,j as C,p as S,n as $}from"./index-3f5aa0a1.js";const u=a=>(S("data-v-0f6de53f"),a=a(),$(),a),z={class:"top-s"},T=["src"],V=["src"],X={class:"thumblist"},I=["src"],L=["src"],M=["src"],N={class:"texts-b"},F={key:0},E={key:1},O={class:"input-b"},j={class:"selects-b"},D={class:"size-b box"},J=u(()=>t("p",null,"Méret",-1)),K={key:0,value:"XS"},U={key:1,value:"S"},A={key:2,value:"M"},G={key:3,value:"L"},H={key:4,value:"XL"},P={key:5,value:"XXL"},Q={class:"mennyiseg-b box"},R=u(()=>t("p",null,"Mennyiség",-1)),W={class:"quantity_b"},Y={class:"add-b"},Z={key:1},x={class:"bottom-s"},ee={class:"description-s"},se={class:"desc-b"},te=u(()=>t("h4",null,"Ásványok",-1)),oe={key:0,class:"text-b"},ie={class:"desc-b"},ne=u(()=>t("h4",null,"Egyedi karkötő",-1)),ae={key:0,class:"text-b"},re=u(()=>t("p",null,"Egyedi karkötőt szeretnél? Keress meg minket Instagrammon!",-1)),le=[re],de=u(()=>t("section",{class:"favorites-s"},null,-1)),ue={data(){return{showB1:!0,showB2:!1,showB3:!1,response:[],access:[],cart:[],imgurl:"https://elenora.hu:444/getimage/",quantity:1,size:"M",key:0,p_img:null}},mounted(){this.cart=JSON.parse(localStorage.getItem("cart")||"[]"),g.get("https://elenora.hu:444/products/getbyid/"+this.$route.query.id).then(a=>this.response=a.data.product),g.get("https://elenora.hu:444/products/getbyid/"+this.$route.query.id).then(a=>this.access=a.data)},methods:{addToCart(a,e,o){this.cart.push({id:a._id,name:a.prodname,img:a.image,size:o,price:a.price,quantity:e,sale:0}),localStorage.setItem("cart",JSON.stringify(this.cart)),this.key+=1},addq(){this.quantity<15&&(this.quantity+=1)},minq(){this.quantity>1&&(this.quantity-=1)},select(a){console.log(a),this.p_img=a}}},me=Object.assign(ue,{__name:"pickedView",setup(a){return(e,o)=>{const c=h("setion"),l=h("ion-icon");return s(),n("main",null,[(s(),m(b,{key:e.key})),t("section",z,[d(c,{class:"images-s"},{default:k(()=>[t("div",null,[e.response.image&&e.p_img==null?(s(),n("img",{key:0,src:e.imgurl+e.response.image,class:"pickedimg",alt:"Termék képe"},null,8,T)):i("",!0),e.p_img!=null?(s(),n("img",{key:1,src:e.imgurl+e.p_img,class:"pickedimg",alt:"Termék képe"},null,8,V)):i("",!0)]),t("div",X,[e.response.image?(s(),n("img",{key:0,onClick:o[0]||(o[0]=r=>e.select(e.response.image)),class:"thumbimg",src:e.imgurl+e.response.image,alt:"Termék képe"},null,8,I)):i("",!0),e.response.image2&&e.response.image2!="46bea41c0363d722467defc2f1ecc234"?(s(),n("img",{key:1,onClick:o[1]||(o[1]=r=>e.select(e.response.image2)),class:"thumbimg",src:e.imgurl+e.response.image2,alt:"Termék képe"},null,8,L)):i("",!0),e.response.image3&&e.response.image3!="46bea41c0363d722467defc2f1ecc234"?(s(),n("img",{key:2,onClick:o[2]||(o[2]=r=>e.select(e.response.image3)),class:"thumbimg",src:e.imgurl+e.response.image3,alt:"Termék képe"},null,8,M)):i("",!0)])]),_:1}),d(c,{class:"texts-s"},{default:k(()=>[t("div",N,[e.response.prodname?(s(),n("h1",F,p(e.response.prodname),1)):i("",!0),e.response.price?(s(),n("h3",E,p(e.response.price)+" Ft",1)):i("",!0)]),t("div",O,[t("div",j,[t("div",D,[J,y(t("select",{"onUpdate:modelValue":o[3]||(o[3]=r=>e.size=r),class:"size_b"},[e.access.xs==!0?(s(),n("option",K,"XS")):i("",!0),e.access.s==!0?(s(),n("option",U,"S")):i("",!0),e.access.m==!0?(s(),n("option",A,"M")):i("",!0),e.access.l==!0?(s(),n("option",G,"L")):i("",!0),e.access.xl==!0?(s(),n("option",H,"XL")):i("",!0),e.access.xxl==!0?(s(),n("option",P,"XXL")):i("",!0)],512),[[B,e.size]])]),t("div",Q,[R,t("div",W,[d(l,{name:"add-outline",onClick:o[4]||(o[4]=r=>e.addq())}),y(t("input",{type:"number",min:"1",max:"15","onUpdate:modelValue":o[5]||(o[5]=r=>e.quantity=r)},null,512),[[q,e.quantity]]),d(l,{name:"remove-outline",onClick:o[6]||(o[6]=r=>e.minq())})])])]),t("div",Y,[e.access.xs==!0?(s(),n("button",{key:0,onClick:o[7]||(o[7]=r=>e.addToCart(e.response,e.quantity,e.size))},[v(" Kosárba teszem"),d(l,{name:"cart-outline"})])):i("",!0),e.access.xs==!1?(s(),n("button",Z,[v(" A termék nem elérhető!"),d(l,{name:"cart-outline"})])):i("",!0)])])]),_:1})]),t("section",x,[t("section",ee,[t("div",se,[t("div",{onClick:o[8]||(o[8]=r=>e.showB2=!e.showB2),class:"title-b"},[te,e.showB2?i("",!0):(s(),m(l,{key:0,name:"chevron-up-outline"})),e.showB2?(s(),m(l,{key:1,class:"downarrow",name:"chevron-down-outline"})):i("",!0)]),e.showB2?(s(),n("div",oe,[(s(!0),n(f,null,w(e.response.pearls,r=>(s(),n("p",{key:r._id},p(r.name),1))),128))])):i("",!0)]),t("div",ie,[t("div",{onClick:o[9]||(o[9]=r=>e.showB3=!e.showB3),class:"title-b"},[ne,e.showB3?i("",!0):(s(),m(l,{key:0,name:"chevron-up-outline"})),e.showB3?(s(),m(l,{key:1,class:"downarrow",name:"chevron-down-outline"})):i("",!0)]),e.showB3?(s(),n("div",ae,le)):i("",!0)])]),de]),d(C)])}}}),ce=_(me,[["__scopeId","data-v-0f6de53f"]]);export{ce as default};
