import{k as y,r as c,o as t,c as l,i as u,_,b as s,a as p,w as g,d as n,t as m,F as w,f as b,h as k,l as v,v as B,m as f,e as q,j as C,p as S,n as $}from"./index-50dbd189.js";const r=i=>(S("data-v-11504dc6"),i=i(),$(),i),z={class:"top-s"},T=["src"],V=["src"],L={class:"thumblist"},X=["src"],I=["src"],M=["src"],N={class:"texts-b"},F={key:0},E={key:1},O={key:2},j={class:"input-b"},D={class:"selects-b"},J={class:"size-b box"},K=r(()=>s("p",null,"Méret",-1)),U=r(()=>s("option",{value:"XS"},"XS",-1)),A=r(()=>s("option",{value:"S"},"S",-1)),G=r(()=>s("option",{value:"M"},"M",-1)),H=r(()=>s("option",{value:"L"},"L",-1)),P=r(()=>s("option",{value:"XL"},"XL",-1)),Q=r(()=>s("option",{value:"XXL"},"XXL",-1)),R=[U,A,G,H,P,Q],W={class:"mennyiseg-b box"},Y=r(()=>s("p",null,"Mennyiség",-1)),Z={class:"quantity_b"},x={class:"add-b"},ee={class:"bottom-s"},se={class:"description-s"},oe={class:"desc-b"},te=r(()=>s("h4",null,"Leírás",-1)),ne={key:0,class:"text-b"},ie={key:0},ae=r(()=>s("br",null,null,-1)),le={class:"desc-b"},re=r(()=>s("h4",null,"Ásványok",-1)),de={key:0,class:"text-b"},ue={class:"desc-b"},pe=r(()=>s("h4",null,"Egyedi karkötő",-1)),me={key:0,class:"text-b"},he=r(()=>s("p",null,"Egyedi karkötőt szeretnél? Keress meg minket Instagrammon!",-1)),ce=[he],ge=r(()=>s("section",{class:"favorites-s"},null,-1)),ke={data(){return{showB1:!0,showB2:!1,showB3:!1,response:[],inventory:[],cart:[],imgurl:"https://elenora.hu:444/getimage/",quantity:1,size:"M",key:0,p_img:null}},mounted(){this.cart=JSON.parse(localStorage.getItem("cart")||"[]"),k.get("https://elenora.hu:444/products/getbyid/"+this.$route.query.id).then(i=>this.response=i.data),k.get("https://elenora.hu:444/inventory/getall").then(i=>this.inventory=i.data)},methods:{addToCart(i,e,o){this.cart.push({id:i._id,name:i.prodname,img:i.image,size:o,price:i.price,quantity:e}),localStorage.setItem("cart",JSON.stringify(this.cart)),this.key+=1},addq(){this.quantity<15&&(this.quantity+=1)},minq(){this.quantity>1&&(this.quantity-=1)},select(i){console.log(i),this.p_img=i}}},ve=Object.assign(ke,{__name:"pickedView",setup(i){return(e,o)=>{const h=c("setion"),d=c("ion-icon");return t(),l("main",null,[(t(),u(_,{key:e.key})),s("section",z,[p(h,{class:"images-s"},{default:g(()=>[s("div",null,[e.response.image&&e.p_img==null?(t(),l("img",{key:0,src:e.imgurl+e.response.image,class:"pickedimg",alt:"Termék képe"},null,8,T)):n("",!0),e.p_img!=null?(t(),l("img",{key:1,src:e.imgurl+e.p_img,class:"pickedimg",alt:"Termék képe"},null,8,V)):n("",!0)]),s("div",L,[e.response.image?(t(),l("img",{key:0,onClick:o[0]||(o[0]=a=>e.select(e.response.image)),class:"thumbimg",src:e.imgurl+e.response.image,alt:"Termék képe"},null,8,X)):n("",!0),e.response.image2&&e.response.image2!="46bea41c0363d722467defc2f1ecc234"?(t(),l("img",{key:1,onClick:o[1]||(o[1]=a=>e.select(e.response.image2)),class:"thumbimg",src:e.imgurl+e.response.image2,alt:"Termék képe"},null,8,I)):n("",!0),e.response.image3&&e.response.image3!="46bea41c0363d722467defc2f1ecc234"?(t(),l("img",{key:2,onClick:o[2]||(o[2]=a=>e.select(e.response.image3)),class:"thumbimg",src:e.imgurl+e.response.image3,alt:"Termék képe"},null,8,M)):n("",!0)])]),_:1}),p(h,{class:"texts-s"},{default:g(()=>[s("div",N,[e.response.prodname?(t(),l("h1",F,m(e.response.prodname),1)):n("",!0),e.response.price?(t(),l("h3",E,m(e.response.price)+" Ft",1)):n("",!0),e.response.description?(t(),l("p",O,m(e.response.description.split(".")[0]),1)):n("",!0)]),s("div",j,[s("div",D,[s("div",J,[K,v(s("select",{"onUpdate:modelValue":o[3]||(o[3]=a=>e.size=a),class:"size_b"},R,512),[[B,e.size]])]),s("div",W,[Y,s("div",Z,[p(d,{name:"add-outline",onClick:o[4]||(o[4]=a=>e.addq())}),v(s("input",{type:"number",min:"1",max:"15","onUpdate:modelValue":o[5]||(o[5]=a=>e.quantity=a)},null,512),[[f,e.quantity]]),p(d,{name:"remove-outline",onClick:o[6]||(o[6]=a=>e.minq())})])])]),s("div",x,[s("button",{onClick:o[7]||(o[7]=a=>e.addToCart(e.response,e.quantity,e.size))},[q(" Kosárba teszem"),p(d,{name:"cart-outline"})])])])]),_:1})]),s("section",ee,[s("section",se,[s("div",oe,[s("div",{onClick:o[8]||(o[8]=a=>e.showB1=!e.showB1),class:"title-b"},[te,e.showB1?n("",!0):(t(),u(d,{key:0,name:"chevron-up-outline"})),e.showB1?(t(),u(d,{key:1,class:"downarrow",name:"chevron-down-outline"})):n("",!0)]),e.showB1?(t(),l("div",ne,[e.response.description?(t(),l("p",ie,m(e.response.description),1)):n("",!0),ae])):n("",!0)]),s("div",le,[s("div",{onClick:o[9]||(o[9]=a=>e.showB2=!e.showB2),class:"title-b"},[re,e.showB2?n("",!0):(t(),u(d,{key:0,name:"chevron-up-outline"})),e.showB2?(t(),u(d,{key:1,class:"downarrow",name:"chevron-down-outline"})):n("",!0)]),e.showB2?(t(),l("div",de,[(t(!0),l(w,null,b(e.response.pearls,a=>(t(),l("p",{key:a._id},m(a.name),1))),128))])):n("",!0)]),s("div",ue,[s("div",{onClick:o[10]||(o[10]=a=>e.showB3=!e.showB3),class:"title-b"},[pe,e.showB3?n("",!0):(t(),u(d,{key:0,name:"chevron-up-outline"})),e.showB3?(t(),u(d,{key:1,class:"downarrow",name:"chevron-down-outline"})):n("",!0)]),e.showB3?(t(),l("div",me,ce)):n("",!0)])]),ge]),p(C)])}}}),_e=y(ve,[["__scopeId","data-v-11504dc6"]]);export{_e as default};