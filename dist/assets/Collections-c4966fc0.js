import{C as k}from"./ColectionList-0ce86f2f.js";import{H as b}from"./Header-2da35251.js";import{_,h as S,o as a,c as p,b as e,n as d,v as g,q as c,m as w,p as m,k as u,g as y,a as r,i as C,d as N,F}from"./index-4d10961a.js";/* empty css                                                                     */const V={name:"PostFormAxios",data(){return{form:{collection_name:"",collection_type:"",collection_gender:""},data:JSON.stringify(this.form)}},methods:{submitSave(){S.post("https://egoncompany.hu:444/collections/add/"+this.form.collection_name+"/"+this.form.collection_type+"/"+this.form.collection_gender,this.data).then(function(){console.log("SUCCESS!!")}).catch(t=>console.log(t))}}},i=t=>(m("data-v-2ee2ed18"),t=t(),u(),t),A={class:"addcolection"},I={class:"input_wrapper"},x=i(()=>e("label",{for:""},"Neve",-1)),K=i(()=>e("label",{for:""},"Típusa",-1)),$=i(()=>e("option",{disabled:"",selected:""},"Kollekció típusa",-1)),B=i(()=>e("option",{value:"bracelet"},"karkötő",-1)),U=i(()=>e("option",{value:"keychain"},"kulcstartó",-1)),M=[$,B,U],j=i(()=>e("label",{for:""},"Neme",-1)),E=y('<option disabled selected data-v-2ee2ed18>Kollekció neme</option><option value="female" data-v-2ee2ed18>Női</option><option value="male" data-v-2ee2ed18>Férfi</option><option value="unisex" data-v-2ee2ed18>Férfi és Női</option><option value="couple" data-v-2ee2ed18>Páros</option>',5),H=[E],O={class:"submit_wrapper"};function P(t,o,l,f,n,h){return a(),p("section",A,[e("form",{onSubmit:o[4]||(o[4]=w((...s)=>t.submitForm&&t.submitForm(...s),["prevent"]))},[e("div",I,[e("div",null,[x,d(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=s=>n.form.collection_name=s),placeholder:"Kollekció neve"},null,512),[[g,n.form.collection_name]])]),e("div",null,[K,d(e("select",{name:"",id:"","onUpdate:modelValue":o[1]||(o[1]=s=>n.form.collection_type=s)},M,512),[[c,n.form.collection_type]]),j,d(e("select",{name:"",id:"","onUpdate:modelValue":o[2]||(o[2]=s=>n.form.collection_gender=s)},H,512),[[c,n.form.collection_gender]])])]),e("div",O,[e("input",{type:"submit",value:"Kollekció mentése",onClick:o[3]||(o[3]=s=>h.submitSave())})])],32)])}const T=_(V,[["render",P],["__scopeId","data-v-2ee2ed18"]]);const v=t=>(m("data-v-88538dd7"),t=t(),u(),t),q=v(()=>e("h1",{class:"title"},"Kollekciók",-1)),D={class:"new-wrapper"},J=v(()=>e("h3",null,"Új kollekció",-1)),L=[J],z={data(){return{showAdd:!1}}},G=Object.assign(z,{__name:"Collections",setup(t){return(o,l)=>(a(),p(F,null,[r(b),q,e("main",null,[e("section",D,[e("div",{onClick:l[0]||(l[0]=f=>o.showAdd=!o.showAdd)},L)]),o.showAdd?(a(),C(T,{key:0})):N("",!0),r(k)])],64))}}),Y=_(G,[["__scopeId","data-v-88538dd7"]]);export{Y as default};