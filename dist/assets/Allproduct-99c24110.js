import{_ as p,r as u,o as d,c,a as i,b as e,d as l,t as o,e as h,F as v,f,g as k,h as m,i as g,j as y,w as S,u as _,k as b,R as w,l as I,p as C,m as F}from"./index-c603d831.js";const N=a=>(C("data-v-11fd2c29"),a=a(),F(),a),V={key:0},z=k('<h1 class="aside_title" data-v-11fd2c29>Szűrők</h1><div class="box" data-v-11fd2c29><h3 data-v-11fd2c29>Ár</h3></div><div class="box" data-v-11fd2c29><h3 data-v-11fd2c29>Szín</h3><div class="color-list" data-v-11fd2c29><div class="dot" data-v-11fd2c29><div class="white color" data-v-11fd2c29></div></div><div class="dot" data-v-11fd2c29><div class="black color" data-v-11fd2c29></div></div><div class="dot" data-v-11fd2c29><div class="red color" data-v-11fd2c29></div></div><div class="dot" data-v-11fd2c29><div class="yellow color" data-v-11fd2c29></div></div><div class="dot" data-v-11fd2c29><div class="green color" data-v-11fd2c29></div></div><div class="dot" data-v-11fd2c29><div class="blue color" data-v-11fd2c29></div></div></div></div><div class="box" data-v-11fd2c29><h3 data-v-11fd2c29>Ásvány</h3></div>',4),A={class:"s"},B=N(()=>e("h1",{class:"picked-t"},"Összes karkötő",-1)),L={class:"list-header"},R={class:"prod-count"},T={class:"rendezes"},$={class:"item-list"},j={class:"item"},q={class:"img_w"},x={key:0,class:"saleprecent"},E={class:"text"},O={class:"prices_b"},D={key:0},J={key:1,class:"oldprice"},M={key:2,class:"newprice"},P={data:()=>({response:[],filter:!1,imgurl:"/newimgs/",imgpath:".webp",linkurl:"/shop/picked?id=",count:0,p_product:{id:"",name:"",price:0,quantity:0}}),mounted(){m.get({}.VITE_API_URL+"/products/getall").then(a=>this.response=a.data)},methods:{addToCart(a){this.cart.push({id:a._id,name:a.prodname,price:a.price,quantity:1}),localStorage.setItem("cart",JSON.stringify(this.cart))}}},U=Object.assign(P,{__name:"Allproduct",setup(a){return(t,r)=>{const n=u("ion-icon");return d(),c(v,null,[i(g),e("main",null,[t.filter?(d(),c("aside",V,[i(n,{onClick:r[0]||(r[0]=s=>t.filter=!t.filter),class:"aside_close",name:"close-outline"}),z])):l("",!0),e("section",A,[B,e("div",L,[e("div",null,[e("p",R,o(t.response.count)+" termék",1)]),e("div",{onClick:r[1]||(r[1]=s=>t.filter=!t.filter)},[e("p",T,[h(" Szűrés"),i(n,{name:"ellipsis-vertical-outline"})])])]),e("div",$,[(d(!0),c(v,null,f(t.response.products,s=>(d(),y(_(w),{key:s._id,to:t.linkurl+s._id},{default:S(()=>[e("div",j,[e("div",q,[i(_(b),{src:t.imgurl+s.image+t.imgpath},null,8,["src"]),s.activesale==="true"?(d(),c("h5",x,o(s.saleprecent)+" % ",1)):l("",!0)]),e("div",E,[e("h3",null,o(s.prodname),1),e("div",O,[s.activesale==="false"?(d(),c("h4",D,o(s.price)+" Ft",1)):l("",!0),s.activesale==="true"?(d(),c("h4",J,o(s.price)+" Ft ",1)):l("",!0),s.activesale==="true"?(d(),c("h4",M,o(Math.round(s.price-s.price/100*s.saleprecent))+" Ft ",1)):l("",!0)])])])]),_:2},1032,["to"]))),128))])])]),i(I)],64)}}}),H=p(U,[["__scopeId","data-v-11fd2c29"]]);export{H as default};