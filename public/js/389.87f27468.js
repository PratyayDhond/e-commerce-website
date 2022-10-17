"use strict";(self["webpackChunkyogabhyas"]=self["webpackChunkyogabhyas"]||[]).push([[389],{5103:function(e,t,s){s.d(t,{Z:function(){return B}});var r=s(3396),o=s(4427);const a={class:"pt-3 px-5 pb-8 flex items-center justify-between bg-white"},i=["onclick"],n=(0,r._)("img",{class:"h-14",src:o,alt:""},null,-1),l=[n],c={class:"w-4/5"},d={class:""};function u(e,t,s,o,n,u){const m=(0,r.up)("SearchBar"),h=(0,r.up)("NavBarComponents");return(0,r.wg)(),(0,r.iD)("div",a,[(0,r._)("div",{class:"",onclick:u.toHome},l,8,i),(0,r._)("div",c,[(0,r.Wm)(m,{userID:s.userID},null,8,["userID"])]),(0,r._)("div",d,[(0,r.Wm)(h,{userID:s.userID},null,8,["userID"])])])}var m=s(9242);const h={class:"relative"},p=(0,r._)("g",{id:"surface1552061"},[(0,r._)("path",{style:{stroke:"none","fill-rule":"nonzero",fill:"rgb(61.176473%,63.921571%,68.627453%)","fill-opacity":"1"},d:"M 39 9 C 22.46875 9 9 22.46875 9 39 C 9 55.53125 22.46875 69 39 69 C 46.191406 69 52.792969 66.445312 57.96875 62.207031 L 75.878906 80.121094 C 76.632812 80.90625 77.75 81.21875 78.800781 80.945312 C 79.851562 80.671875 80.671875 79.851562 80.945312 78.800781 C 81.21875 77.75 80.90625 76.632812 80.121094 75.878906 L 62.207031 57.964844 C 66.445312 52.792969 69 46.191406 69 39 C 69 22.46875 55.53125 9 39 9 Z M 39 15 C 52.289062 15 63 25.710938 63 39 C 63 52.289062 52.289062 63 39 63 C 25.710938 63 15 52.289062 15 39 C 15 25.710938 25.710938 15 39 15 Z M 39 15 "})],-1),g=[p];function f(e,t,s,o,a,i){return(0,r.wg)(),(0,r.iD)("div",h,[((0,r.wg)(),(0,r.iD)("svg",{class:"pointer-events-none w-8 h-5 absolute top-1/2 transform -translate-y-1/2 left-3",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 90 90",width:"90px",height:"80px",onClick:e=>!0},g)),(0,r.wy)((0,r._)("input",{class:"bg-primary-1 appearance-none border-transparent border-white rounded-xl h-10 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-secondary-1 focus:ring-transparent pl-14 opacity-100",type:"text",placeholder:"Search for books","onUpdate:modelValue":t[0]||(t[0]=e=>a.search=e),onKeypress:t[1]||(t[1]=(0,m.D2)(((...e)=>i.submit&&i.submit(...e)),["enter"]))},null,544),[[m.nr,a.search]])])}var w={props:["userID"],data(){return{search:""}},constructed(){},methods:{submit(){this.$router.push({name:"searchResult",query:{userId:this.userID,search:this.search}})}}},b=s(89);const v=(0,b.Z)(w,[["render",f]]);var y=v,k=s(9858),x=s(3235),D=s(4774);const _={class:"flex gap-8"},I=(0,r._)("img",{class:"w-full",src:k,alt:""},null,-1),C=[I],L=(0,r._)("div",{class:"w-8"},[(0,r._)("img",{class:"w-full",src:x,alt:""})],-1),Z=(0,r._)("div",{class:"w-8"},[(0,r._)("img",{class:"w-full",src:D,alt:""})],-1);function j(e,t,s,o,a,i){const n=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",_,[(0,r.Wm)(n,{to:{name:"cart",query:{id:s.userID}}},{default:(0,r.w5)((()=>[(0,r._)("div",{class:"w-8",onClick:e=>!0},C)])),_:1},8,["to"]),(0,r.Wm)(n,{to:{name:"wishList",query:{id:s.userID}}},{default:(0,r.w5)((()=>[L])),_:1},8,["to"]),(0,r.Wm)(n,{to:{name:"userView",query:{id:s.userID}}},{default:(0,r.w5)((()=>[Z])),_:1},8,["to"])])}var z={props:["userID"],created(){}};const W=(0,b.Z)(z,[["render",j]]);var T=W,q={props:["userID"],components:{SearchBar:y,NavBarComponents:T},created(){},methods:{routeToResult(){console.log("Routing to result")},toHome(){console.log("Inside to home"),console.log(this.userID),this.$router.push({name:"LatestBooks",query:{id:this.userID}})}}};const U=(0,b.Z)(q,[["render",u]]);var B=U},4372:function(e,t,s){s.d(t,{Z:function(){return p}});var r=s(3396),o=s(7139);const a={class:"mt-5 cursor-pointer"},i={class:"w-40 bg-black bg-opacity-5"},n=["src"],l={class:"w-40 text-center text-sm mt-2 font-medium text-gray-600"},c={class:"w-40 text-center text-sm font-bold text-secondary-1"};function d(e,t,s,d,u,m){const h=(0,r.up)("router-link");return(0,r.wg)(),(0,r.j4)(h,{to:{path:"/book",query:{id:this.id,userID:this.userID}}},{default:(0,r.w5)((()=>[(0,r._)("div",a,[(0,r._)("div",i,[(0,r._)("img",{class:"h-60 object-contain border-none rounded-md w-full",src:s.url,alt:"",draggable:"false"},null,8,n)]),(0,r._)("div",l,(0,o.zw)(s.name),1),(0,r._)("div",c,"₹ "+(0,o.zw)(s.price),1)])])),_:1},8,["to"])}var u={props:["name","price","url","wish","theme","description","id","userID"],created(){}},m=s(89);const h=(0,m.Z)(u,[["render",d]]);var p=h},9211:function(e,t,s){s.d(t,{Z:function(){return m}});var r=s(3396),o=s.p+"img/ADbanner.83cae981.png";const a={class:"w-full"},i=(0,r._)("img",{class:"object-cover h-60 w-full",src:o,alt:""},null,-1),n=[i];function l(e,t,s,o,i,l){return(0,r.wg)(),(0,r.iD)("div",a,n)}var c={props:["bookName","bookPrice","bookImageURL","bookWish","bookTheme"],data(){return{items:[{src:"https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/sky.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/bird.jpg"}]}}},d=s(89);const u=(0,d.Z)(c,[["render",l]]);var m=u},8207:function(e,t,s){s.d(t,{Z:function(){return k}});var r=s(3396),o=s(7139);const a={class:"w-60 bg-black bg-opacity-5 border-"},i=["src"],n={class:"border-2 border-opacity-5 border-black w-full"},l={class:"flex flex-col items-start ml-10"},c={class:"mt-7 font-bold text-gray-700 text-lg cursor-pointer hover:text-secondary-1"},d={class:"text-gray-500"},u={class:"text-gray-500"},m={class:"text-gray-500"},h={class:"flex flex-row justify-between w-full mt-14 pr-10 item-center"},p={class:"font-bold text-gray-700 text-xl"},g={class:"flex items-center"};function f(e,t,s,f,w,b){const v=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",{class:"flex flex-row mt-7 border-",onClick:t[2]||(t[2]=(...t)=>e.handler&&e.handler(...t))},[(0,r._)("div",a,[(0,r.Wm)(v,{to:{path:"/book",query:{id:this.id,userID:this.userID}}},{default:(0,r.w5)((()=>[(0,r._)("img",{class:"h-60 object-contain border-none w-full",src:s.bookImageURL,alt:""},null,8,i)])),_:1},8,["to"])]),(0,r._)("div",n,[(0,r._)("div",l,[(0,r.Wm)(v,{to:{path:"/book",query:{id:this.id,userID:this.userID}}},{default:(0,r.w5)((()=>[(0,r._)("div",c,(0,o.zw)(s.bookName),1)])),_:1},8,["to"]),(0,r._)("div",d,(0,o.zw)(s.bookDate),1),(0,r._)("div",u,(0,o.zw)(s.bookLanguage),1),(0,r._)("div",m,(0,o.zw)(s.bookCover),1),(0,r._)("div",h,[(0,r._)("div",p,"₹ "+(0,o.zw)(s.bookPrice),1),(0,r._)("div",g,[(0,r._)("div",{class:"py-2 w-32 text-sm text-white rounded-sm bg-secondary-1 text-center cursor-pointer hover:bg-primary-1 hover:text-gray-800 font-medium",onClick:t[0]||(t[0]=(...e)=>b.addToWishlist&&b.addToWishlist(...e))}," Add to Wishlist "),(0,r._)("div",{class:"ml-5 py-2 w-32 text-sm text-white rounded-sm bg-secondary-1 text-center cursor-pointer hover:bg-primary-1 hover:text-gray-800 font-medium",onClick:t[1]||(t[1]=(...e)=>b.addToCart&&b.addToCart(...e))}," Add to Cart ")])])])])])}var w=s(6780),b={props:["bookName","bookDate","bookLanguage","bookCover","bookPrice","bookImageURL","id","userID"],methods:{addToCart(){const e=w.Z.firestore();console.log("Inside addToCart() method");try{e.collection("Users").doc(this.userID).get().then((t=>{var s=t.data().addrLine1,r=t.data().addrLine2,o=t.data().mobile,a=t.data().city,i=t.data().landmark,n=t.data().name,l=t.data().state,c=t.data().zipcode,d=t.data().cart||[],u=t.data().wishList||[],m=t.data().orders||[],h=t.data().email;d.push(this.id);var p=d.filter((function(e){return""!=e}));let g=p.filter(((e,t)=>p.indexOf(e)===t));d=null,d=g,e.collection("Users").doc(this.userID).set({addrLine1:s,addrLine2:r,cart:g,city:a,landmark:i,mobile:o,name:n,orders:m,state:l,wishList:u,zipcode:c,email:h}).then((e=>{})),console.log("Data written successfully")})),alert("Item added to cart successfully")}catch(t){console.log(t)}},addToWishlist(){const e=w.Z.firestore();console.log("Inside addToCart() method");try{e.collection("Users").doc(this.userID).get().then((t=>{var s=t.data().addrLine1,r=t.data().addrLine2,o=t.data().mobile,a=t.data().city,i=t.data().landmark,n=t.data().name,l=t.data().state,c=t.data().zipcode,d=t.data().cart||[],u=t.data().wishList||[],m=t.data().orders||[],h=t.data().email;console.log(t.data()),console.log(u),u.push(this.id);var p=u.filter((function(e){return""!=e}));let g=p.filter(((e,t)=>p.indexOf(e)===t));u=null,u=g,console.log(g),e.collection("Users").doc(this.userID).set({addrLine1:s,addrLine2:r,cart:d,city:a,landmark:i,mobile:o,name:n,orders:m,state:l,wishList:g,zipcode:c,email:h}).then((e=>{alert("Item added to wishlist successfully"),console.log("Data written successfully")}))}))}catch(t){console.log(t)}}}},v=s(89);const y=(0,v.Z)(b,[["render",f]]);var k=y}}]);
//# sourceMappingURL=389.87f27468.js.map