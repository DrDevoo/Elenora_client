import{C as k}from"./ColectionList-503595d6.js";import{H as b}from"./Header-d38134de.js";import{a as w}from"./axios-bff3f665.js";import{_,o as d,c as m,b as e,m as c,v as S,n as a,l as y,p,j as u,a as r,h as C,d as g,F as N}from"./index-c7c42f8d.js";/* empty css                                                                     */const A={name:"PostFormAxios",data(){return{form:{collection_name:"",collection_type:"",collection_gender:""},data:JSON.stringify(this.form)}},methods:{submitSave(){w.post("http://localhost:3500/collections/add/"+this.form.collection_name+"/"+this.form.collection_type+"/"+this.form.collection_gender,this.data).then(function(){console.log("SUCCESS!!")}).catch(t=>console.log(t))}}},s=t=>(p("data-v-22d296b7"),t=t(),u(),t),F={class:"addcolection"},I={class:"input_wrapper"},V=s(()=>e("label",{for:""},"Neve",-1)),K=s(()=>e("label",{for:""},"Típusa",-1)),$=s(()=>e("option",{disabled:"",selected:""},"Kollekció típusa",-1)),x=s(()=>e("option",{value:"bracelet"},"karkötő",-1)),B=s(()=>e("option",{value:"keychain"},"kulcstartó",-1)),U=[$,x,B],j=s(()=>e("label",{for:""},"Neme",-1)),M=s(()=>e("option",{disabled:"",selected:""},"Kollekció neme",-1)),E=s(()=>e("option",{value:"female"},"Női",-1)),H=s(()=>e("option",{value:"male"},"Férfi",-1)),O=[M,E,H],T={class:"submit_wrapper"};function D(t,o,i,h,n,v){return d(),m("section",F,[e("form",{onSubmit:o[4]||(o[4]=y((...l)=>t.submitForm&&t.submitForm(...l),["prevent"]))},[e("div",I,[e("div",null,[V,c(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=l=>n.form.collection_name=l),placeholder:"Kollekció neve"},null,512),[[S,n.form.collection_name]])]),e("div",null,[K,c(e("select",{name:"",id:"","onUpdate:modelValue":o[1]||(o[1]=l=>n.form.collection_type=l)},U,512),[[a,n.form.collection_type]]),j,c(e("select",{name:"",id:"","onUpdate:modelValue":o[2]||(o[2]=l=>n.form.collection_gender=l)},O,512),[[a,n.form.collection_gender]])])]),e("div",T,[e("input",{type:"submit",value:"Kollekció mentése",onClick:o[3]||(o[3]=l=>v.submitSave())})])],32)])}const J=_(A,[["render",D],["__scopeId","data-v-22d296b7"]]);const f=t=>(p("data-v-88538dd7"),t=t(),u(),t),L=f(()=>e("h1",{class:"title"},"Kollekciók",-1)),P={class:"new-wrapper"},q=f(()=>e("h3",null,"Új kollekció",-1)),z=[q],G={data(){return{showAdd:!1}}},Q=Object.assign(G,{__name:"Collections",setup(t){return(o,i)=>(d(),m(N,null,[r(b),L,e("main",null,[e("section",P,[e("div",{onClick:i[0]||(i[0]=h=>o.showAdd=!o.showAdd)},z)]),o.showAdd?(d(),C(J,{key:0})):g("",!0),r(k)])],64))}}),ee=_(Q,[["__scopeId","data-v-88538dd7"]]);export{ee as default};
