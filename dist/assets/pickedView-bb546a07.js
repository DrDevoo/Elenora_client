import{_ as y,r as _,o,c as r,i as u,H as k,b as s,a as p,w as m,d as n,t as c,F as w,f as b,h as g,k as v,v as B,l as q,e as f,j as S,p as C,m as z}from"./index-5f7e5cb2.js";const i=d=>(C("data-v-b8477081"),d=d(),z(),d),V={class:"top-s"},L=["src"],X={class:"texts-b"},I={key:0},M={key:1},$={key:2},N={class:"input-b"},T={class:"selects-b"},F={class:"size-b box"},E=i(()=>s("p",null,"Méret",-1)),O=i(()=>s("option",{value:"XS"},"XS",-1)),j=i(()=>s("option",{value:"S"},"S",-1)),D=i(()=>s("option",{value:"M"},"M",-1)),H=i(()=>s("option",{value:"L"},"L",-1)),J=i(()=>s("option",{value:"XL"},"XL",-1)),K=i(()=>s("option",{value:"XXL"},"XXL",-1)),U=[O,j,D,H,J,K],A={class:"mennyiseg-b box"},G=i(()=>s("p",null,"Mennyiség",-1)),P={class:"quantity_b"},Q={class:"add-b"},R={class:"bottom-s"},W={class:"description-s"},Y={class:"desc-b"},Z=i(()=>s("h4",null,"Leírás",-1)),x={key:0,class:"text-b"},ee={key:0},se={class:"desc-b"},te=i(()=>s("h4",null,"Ásványok",-1)),oe={key:0,class:"text-b"},ne={class:"desc-b"},ie=i(()=>s("h4",null,"Egyedi karkötő",-1)),ae={key:0,class:"text-b"},de=i(()=>s("p",null,"Egyedi karkötőt szeretnél? Keress meg minket Instagrammon!",-1)),re=[de],le=i(()=>s("section",{class:"favorites-s"},null,-1)),ue={data(){return{showB1:!0,showB2:!1,showB3:!1,response:[],cart:[],imgurl:"https://egoncompany.hu:444/getimage/",quantity:1,size:"M",key:0}},mounted(){this.cart=JSON.parse(localStorage.getItem("cart")||"[]"),g.get("https://egoncompany.hu:444/products/getbyid/"+this.$route.query.id).then(d=>this.response=d.data)},methods:{addToCart(d,e,t){this.cart.push({id:d._id,name:d.prodname,img:d.image,size:t,price:d.price,quantity:e}),localStorage.setItem("cart",JSON.stringify(this.cart)),this.key+=1},addq(){this.quantity<15&&(this.quantity+=1)},minq(){this.quantity>1&&(this.quantity-=1)}}},pe=Object.assign(ue,{__name:"pickedView",setup(d){return(e,t)=>{const h=_("setion"),l=_("ion-icon");return o(),r("main",null,[(o(),u(k,{key:e.key})),s("section",V,[p(h,{class:"images-s"},{default:m(()=>[s("div",null,[e.response.image?(o(),r("img",{key:0,class:"pickedimg",src:e.imgurl+e.response.image,alt:"Termék képe"},null,8,L)):n("",!0)])]),_:1}),p(h,{class:"texts-s"},{default:m(()=>[s("div",X,[e.response.prodname?(o(),r("h1",I,c(e.response.prodname),1)):n("",!0),e.response.price?(o(),r("h3",M,c(e.response.price)+" Ft",1)):n("",!0),e.response.description?(o(),r("p",$,c(e.response.description.split(".")[0]),1)):n("",!0)]),s("div",N,[s("div",T,[s("div",F,[E,v(s("select",{"onUpdate:modelValue":t[0]||(t[0]=a=>e.size=a),class:"size_b"},U,512),[[B,e.size]])]),s("div",A,[G,s("div",P,[p(l,{name:"add-outline",onClick:t[1]||(t[1]=a=>e.addq())}),v(s("input",{type:"number",min:"1",max:"15","onUpdate:modelValue":t[2]||(t[2]=a=>e.quantity=a)},null,512),[[q,e.quantity]]),p(l,{name:"remove-outline",onClick:t[3]||(t[3]=a=>e.minq())})])])]),s("div",Q,[s("button",{onClick:t[4]||(t[4]=a=>e.addToCart(this.response,this.quantity,this.size))},[f(" Kosárba teszem"),p(l,{name:"cart-outline"})])])])]),_:1})]),s("section",R,[s("section",W,[s("div",Y,[s("div",{onClick:t[5]||(t[5]=a=>e.showB1=!e.showB1),class:"title-b"},[Z,e.showB1?n("",!0):(o(),u(l,{key:0,name:"chevron-up-outline"})),e.showB1?(o(),u(l,{key:1,class:"downarrow",name:"chevron-down-outline"})):n("",!0)]),e.showB1?(o(),r("div",x,[e.response.description?(o(),r("p",ee,c(e.response.description),1)):n("",!0)])):n("",!0)]),s("div",se,[s("div",{onClick:t[6]||(t[6]=a=>e.showB2=!e.showB2),class:"title-b"},[te,e.showB2?n("",!0):(o(),u(l,{key:0,name:"chevron-up-outline"})),e.showB2?(o(),u(l,{key:1,class:"downarrow",name:"chevron-down-outline"})):n("",!0)]),e.showB2?(o(),r("div",oe,[(o(!0),r(w,null,b(e.response.pearls,a=>(o(),r("p",{key:a._id},c(a.name),1))),128))])):n("",!0)]),s("div",ne,[s("div",{onClick:t[7]||(t[7]=a=>e.showB3=!e.showB3),class:"title-b"},[ie,e.showB3?n("",!0):(o(),u(l,{key:0,name:"chevron-up-outline"})),e.showB3?(o(),u(l,{key:1,class:"downarrow",name:"chevron-down-outline"})):n("",!0)]),e.showB3?(o(),r("div",ae,re)):n("",!0)])]),le]),p(S)])}}}),he=y(pe,[["__scopeId","data-v-b8477081"]]);export{he as default};
