"use strict";(self["webpackChunkyogabhyas"]=self["webpackChunkyogabhyas"]||[]).push([[464,442],{9211:function(e,t,i){i.d(t,{Z:function(){return u}});var s=i(3396),r=i.p+"img/ADbanner.83cae981.png";const o={class:"w-full"},a=(0,s._)("img",{class:"object-cover h-60 w-full",src:r,alt:""},null,-1),l=[a];function d(e,t,i,r,a,d){return(0,s.wg)(),(0,s.iD)("div",o,l)}var c={props:["bookName","bookPrice","bookImageURL","bookWish","bookTheme"],data(){return{items:[{src:"https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/sky.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/bird.jpg"}]}}},n=i(89);const h=(0,n.Z)(c,[["render",d]]);var u=h},8207:function(e,t,i){i.d(t,{Z:function(){return v}});var s=i(3396),r=i(7139);const o={class:"w-60 bg-black bg-opacity-5 border-"},a=["src"],l={class:"border-2 border-opacity-5 border-black w-full"},d={class:"flex flex-col items-start ml-10"},c={class:"mt-7 font-bold text-gray-700 text-lg cursor-pointer hover:text-secondary-1"},n={class:"text-gray-500"},h={class:"text-gray-500"},u={class:"text-gray-500"},f={class:"flex flex-row justify-between w-full mt-14 pr-10 item-center"},g={class:"font-bold text-gray-700 text-xl"},m={class:"flex items-center"};function p(e,t,i,p,y,b){const k=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",{class:"flex flex-row mt-7 border-",onClick:t[2]||(t[2]=(...t)=>e.handler&&e.handler(...t))},[(0,s._)("div",o,[(0,s.Wm)(k,{to:{path:"/book",query:{id:this.id,userID:this.userID}}},{default:(0,s.w5)((()=>[(0,s._)("img",{class:"h-60 object-contain border-none w-full",src:i.bookImageURL,alt:""},null,8,a)])),_:1},8,["to"])]),(0,s._)("div",l,[(0,s._)("div",d,[(0,s.Wm)(k,{to:{path:"/book",query:{id:this.id,userID:this.userID}}},{default:(0,s.w5)((()=>[(0,s._)("div",c,(0,r.zw)(i.bookName),1)])),_:1},8,["to"]),(0,s._)("div",n,(0,r.zw)(i.bookDate),1),(0,s._)("div",h,(0,r.zw)(i.bookLanguage),1),(0,s._)("div",u,(0,r.zw)(i.bookCover),1),(0,s._)("div",f,[(0,s._)("div",g,"₹ "+(0,r.zw)(i.bookPrice),1),(0,s._)("div",m,[(0,s._)("div",{class:"py-2 w-32 text-sm text-white rounded-sm bg-secondary-1 text-center cursor-pointer hover:bg-primary-1 hover:text-gray-800 font-medium",onClick:t[0]||(t[0]=(...e)=>b.addToWishlist&&b.addToWishlist(...e))}," Add to Wishlist "),(0,s._)("div",{class:"ml-5 py-2 w-32 text-sm text-white rounded-sm bg-secondary-1 text-center cursor-pointer hover:bg-primary-1 hover:text-gray-800 font-medium",onClick:t[1]||(t[1]=(...e)=>b.addToCart&&b.addToCart(...e))}," Add to Cart ")])])])])])}var y=i(6780),b={props:["bookName","bookDate","bookLanguage","bookCover","bookPrice","bookImageURL","id","userID"],methods:{addToCart(){const e=y.Z.firestore();console.log("Inside addToCart() method");try{e.collection("Users").doc(this.userID).get().then((t=>{var i=t.data().addrLine1,s=t.data().addrLine2,r=t.data().mobile,o=t.data().city,a=t.data().landmark,l=t.data().name,d=t.data().state,c=t.data().zipcode,n=t.data().cart||[],h=t.data().wishList||[],u=t.data().orders||[],f=t.data().email;n.push(this.id);var g=n.filter((function(e){return""!=e}));let m=g.filter(((e,t)=>g.indexOf(e)===t));n=null,n=m,e.collection("Users").doc(this.userID).set({addrLine1:i,addrLine2:s,cart:m,city:o,landmark:a,mobile:r,name:l,orders:u,state:d,wishList:h,zipcode:c,email:f}).then((e=>{})),console.log("Data written successfully")})),alert("Item added to cart successfully")}catch(t){console.log(t)}},addToWishlist(){const e=y.Z.firestore();console.log("Inside addToCart() method");try{e.collection("Users").doc(this.userID).get().then((t=>{var i=t.data().addrLine1,s=t.data().addrLine2,r=t.data().mobile,o=t.data().city,a=t.data().landmark,l=t.data().name,d=t.data().state,c=t.data().zipcode,n=t.data().cart||[],h=t.data().wishList||[],u=t.data().orders||[],f=t.data().email;console.log(t.data()),console.log(h),h.push(this.id);var g=h.filter((function(e){return""!=e}));let m=g.filter(((e,t)=>g.indexOf(e)===t));h=null,h=m,console.log(m),e.collection("Users").doc(this.userID).set({addrLine1:i,addrLine2:s,cart:n,city:o,landmark:a,mobile:r,name:l,orders:u,state:d,wishList:m,zipcode:c,email:f}).then((e=>{alert("Item added to wishlist successfully"),console.log("Data written successfully")}))}))}catch(t){console.log(t)}}}},k=i(89);const w=(0,k.Z)(b,[["render",p]]);var v=w},8933:function(e,t,i){i.r(t),i.d(t,{default:function(){return Y}});var s=i(3396),r=i(9242),o=i(7139),a=i(4427),l=i(9858),d=i(3235),c=i(4774),n=i(3881);const h={class:"relative"},u={class:"fixed z-10 w-full top-0"},f={class:"pt-3 px-5 pb-8 flex items-center justify-between bg-white"},g=(0,s._)("div",{class:""},[(0,s._)("img",{class:"h-14",src:a,alt:""})],-1),m={class:"w-4/5"},p={class:"relative"},y=(0,s._)("g",{id:"surface1552061"},[(0,s._)("path",{style:{stroke:"none","fill-rule":"nonzero",fill:"rgb(61.176473%,63.921571%,68.627453%)","fill-opacity":"1"},d:"M 39 9 C 22.46875 9 9 22.46875 9 39 C 9 55.53125 22.46875 69 39 69 C 46.191406 69 52.792969 66.445312 57.96875 62.207031 L 75.878906 80.121094 C 76.632812 80.90625 77.75 81.21875 78.800781 80.945312 C 79.851562 80.671875 80.671875 79.851562 80.945312 78.800781 C 81.21875 77.75 80.90625 76.632812 80.121094 75.878906 L 62.207031 57.964844 C 66.445312 52.792969 69 46.191406 69 39 C 69 22.46875 55.53125 9 39 9 Z M 39 15 C 52.289062 15 63 25.710938 63 39 C 63 52.289062 52.289062 63 39 63 C 25.710938 63 15 52.289062 15 39 C 15 25.710938 25.710938 15 39 15 Z M 39 15 "})],-1),b=[y],k={class:""},w={class:"flex gap-8"},v=(0,s._)("img",{class:"w-full",src:l,alt:""},null,-1),x=[v],_=(0,s._)("div",{class:"w-8"},[(0,s._)("img",{class:"w-full",src:d,alt:""})],-1),D=(0,s._)("div",{class:"w-8"},[(0,s._)("img",{class:"w-full",src:c,alt:""})],-1),B={class:"mt-24 absoulute ml-7"},L={class:""},C={class:"fixed h-96 w-full"},I=(0,s._)("p",null,"Home / Books",-1),F={class:"absolute top-10 left-96"},P={class:"flex items-baseline"},S=(0,s._)("div",{class:"mr-5 font-medium text-lg text-gray-800"},"Results for",-1),A={class:"text-gray-"},E={class:"w-240"},T={key:0,style:{"padding-top":"30vh"}},z=(0,s._)("div",{style:{"text-align":"center","font-size":"36px","font-weight":"400w"}}," Loading... ",-1),R=[z],W={key:1},Z={key:0},N=(0,s._)("div",null,[(0,s._)("img",{src:n,style:{height:"25vw",margin:"auto"},alt:""}),(0,s._)("p",{style:{"text-align":"center","font-size":"24px","font-weight":"300w"}}," Sorry! No Result found :( ")],-1),j=[N];function U(e,t,i,a,l,d){const c=(0,s.up)("router-link"),n=(0,s.up)("Filter"),y=(0,s.up)("ResultBook");return(0,s.wg)(),(0,s.iD)("div",h,[(0,s._)("div",u,[(0,s._)("div",f,[(0,s.Wm)(c,{to:"/home"},{default:(0,s.w5)((()=>[g])),_:1}),(0,s._)("div",m,[(0,s._)("div",p,[((0,s.wg)(),(0,s.iD)("svg",{class:"pointer-events-none w-8 h-5 absolute top-1/2 transform -translate-y-1/2 left-3",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 90 90",width:"90px",height:"80px",onClick:e=>!0},b)),(0,s.wy)((0,s._)("input",{class:"bg-primary-1 appearance-none border-transparent border-white rounded-xl h-10 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-secondary-1 focus:ring-transparent pl-14 opacity-100",type:"text",placeholder:"Search for books","onUpdate:modelValue":t[0]||(t[0]=e=>l.search=e),onKeypress:t[1]||(t[1]=(0,r.D2)(((...e)=>d.filterData&&d.filterData(...e)),["enter"]))},null,544),[[r.nr,l.search]])])]),(0,s._)("div",k,[(0,s._)("div",w,[(0,s.Wm)(c,{to:{name:"cart",query:{id:l.userID}}},{default:(0,s.w5)((()=>[(0,s._)("div",{class:"w-8",onClick:e=>!0},x)])),_:1},8,["to"]),(0,s.Wm)(c,{to:{name:"wishList",query:{id:l.userID}}},{default:(0,s.w5)((()=>[_])),_:1},8,["to"]),(0,s.Wm)(c,{to:{name:"userView",query:{id:l.userID}}},{default:(0,s.w5)((()=>[D])),_:1},8,["to"])])])])]),(0,s._)("div",B,[(0,s._)("div",L,[(0,s._)("div",C,[I,(0,s.Wm)(n,{onAddFilterToHome:d.addFilter,onAddPricingFilter:d.addPricingFilter},null,8,["onAddFilterToHome","onAddPricingFilter"])])])]),(0,s._)("div",F,[(0,s._)("div",P,[S,(0,s._)("div",A,'"'+(0,o.zw)(l.search)+'"',1)]),(0,s._)("div",E,[l.searchResultLoaded?((0,s.wg)(),(0,s.iD)("div",W,[0===l.filteredBooks.length?((0,s.wg)(),(0,s.iD)("div",Z,j)):((0,s.wg)(!0),(0,s.iD)(s.HY,{key:1},(0,s.Ko)(l.filteredBooks,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e.id},[(0,s.Wm)(y,{bookName:e.name,bookDate:e.publicationYear,bookLanguage:"English",bookCover:"hardcover",bookPrice:e.price,bookImageURL:e.url,id:e.id,userID:l.userID},null,8,["bookName","bookDate","bookPrice","bookImageURL","id","userID"])])))),128))])):((0,s.wg)(),(0,s.iD)("div",T,R))])])])}i(6699);var q=i(9308),H=i(9211),M=i(8207),G=i(6780),K={data(){return{books:[],filteredBooks:[],serachedBooks:[],search:this.$route.query.search,userID:this.$route.query.userId,filters:[],languageSpecified:!1,bodyPartSpecified:!1,pricingFilterSet:!1,filterSet:!1,minPrice:Number.MIN_SAFE_INTEGER,maxPrice:Number.MAX_SAFE_INTEGER,prevFilterLength:0,searchResultLoaded:!1}},created(){let e="";e=this.search;const t=G.Z.firestore();try{t.collection("books").get().then((e=>{e.forEach((e=>{var t=e.data();t.id=e.id,this.books.push(t)})),this.filterData()}))}catch(i){}},components:{Filter:q.Z,LatestBooks:H.Z,ResultBook:M.Z},methods:{submit(){},filterData(){this.searchResultLoaded=!0,this.filteredBooks=[];for(let e=0;e<this.books.length;e++)this.books[e].name.toLowerCase().includes(this.search.toLowerCase().trim())&&this.filteredBooks.push(this.books[e]);this.serachedBooks=this.filteredBooks,this.updateFilteredArray()},updateFilteredArray(){this.filteredBooks=this.serachedBooks,0!==this.filters.length&&this.filterArray(),this.pricingFilterSet&&this.filterArray()},filterArray(){console.log("In Filter Array"),this.languageSpecified=!1,this.bodyPartSpecified=!1,(this.filters.includes("English")||this.filters.includes("Hindi")||this.filters.includes("Marathi")||this.filters.includes("Sanskrit"))&&(this.languageSpecified=!0),(this.filters.includes("Legs")||this.filters.includes("Shoulders")||this.filters.includes("Hands")||this.filters.includes("Neck")||this.filters.includes("Head")||this.filters.includes("Joints")||this.filters.includes("Back"))&&(this.bodyPartSpecified=!0),this.languageSpecified&&this.filterByLanguage(),this.bodyPartSpecified&&this.filterByBodyPart(),this.pricingFilterSet&&this.filterByPrice(),console.log(this.filteredBooks),console.log(this.serachedBooks)},filterByBodyPart(){var e=new Set;this.filters.forEach((t=>{this.filteredBooks.forEach((i=>{i.bodypartTags.includes(t)&&(console.log(i.bodypartTags+" -> "+t),e.add(i))}))})),this.filteredBooks=[],e.forEach((e=>{this.filteredBooks.push(e)}))},filterByLanguage(){var e=new Set;this.filters.forEach((t=>{this.filteredBooks.forEach((i=>{i.languageTags.includes(t)&&e.add(i)}))})),this.filteredBooks=[],e.forEach((e=>{this.filteredBooks.push(e)}))},filterByPrice(){this.pricingFilterSet=!1;var e=[];this.filteredBooks.forEach((t=>{t.price>=this.minPrice&&t.price<=this.maxPrice&&e.push(t)})),this.filteredBooks=e},addFilter(e){this.filters.includes(e)?this.removeFilter(e):this.filters.push(e),this.updateFilteredArray()},removeFilter(e){var t=[];this.filters.forEach((i=>{i!==e&&t.push(i)})),this.filters=t},addPricingFilter(e,t){this.pricingFilterSet=!0,this.minPrice=e,this.maxPrice=t,console.log(this.minPrice),console.log(this.maxPrice),this.updateFilteredArray()}},watch:{search(){this.filterData()}}},O=i(89);const V=(0,O.Z)(K,[["render",U]]);var Y=V},3881:function(e,t,i){e.exports=i.p+"img/emptySearchCartIllustration.5e0e9a3b.png"}}]);
//# sourceMappingURL=464.601b197a.js.map