"use strict";(self["webpackChunkyogabhyas"]=self["webpackChunkyogabhyas"]||[]).push([[858,442],{5103:function(e,r,t){t.d(r,{Z:function(){return W}});var s=t(3396),l=t(4427);const o={class:"pt-3 px-5 pb-8 flex items-center justify-between bg-white"},n=["onclick"],a=(0,s._)("img",{class:"h-14",src:l,alt:""},null,-1),i=[a],d={class:"w-4/5"},u={class:""};function c(e,r,t,l,a,c){const p=(0,s.up)("SearchBar"),h=(0,s.up)("NavBarComponents");return(0,s.wg)(),(0,s.iD)("div",o,[(0,s._)("div",{class:"",onclick:c.toHome},i,8,n),(0,s._)("div",d,[(0,s.Wm)(p,{userID:t.userID},null,8,["userID"])]),(0,s._)("div",u,[(0,s.Wm)(h,{userID:t.userID},null,8,["userID"])])])}var p=t(9242);const h={class:"relative"},m=(0,s._)("g",{id:"surface1552061"},[(0,s._)("path",{style:{stroke:"none","fill-rule":"nonzero",fill:"rgb(61.176473%,63.921571%,68.627453%)","fill-opacity":"1"},d:"M 39 9 C 22.46875 9 9 22.46875 9 39 C 9 55.53125 22.46875 69 39 69 C 46.191406 69 52.792969 66.445312 57.96875 62.207031 L 75.878906 80.121094 C 76.632812 80.90625 77.75 81.21875 78.800781 80.945312 C 79.851562 80.671875 80.671875 79.851562 80.945312 78.800781 C 81.21875 77.75 80.90625 76.632812 80.121094 75.878906 L 62.207031 57.964844 C 66.445312 52.792969 69 46.191406 69 39 C 69 22.46875 55.53125 9 39 9 Z M 39 15 C 52.289062 15 63 25.710938 63 39 C 63 52.289062 52.289062 63 39 63 C 25.710938 63 15 52.289062 15 39 C 15 25.710938 25.710938 15 39 15 Z M 39 15 "})],-1),g=[m];function f(e,r,t,l,o,n){return(0,s.wg)(),(0,s.iD)("div",h,[((0,s.wg)(),(0,s.iD)("svg",{class:"pointer-events-none w-8 h-5 absolute top-1/2 transform -translate-y-1/2 left-3",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 90 90",width:"90px",height:"80px",onClick:e=>!0},g)),(0,s.wy)((0,s._)("input",{class:"bg-primary-1 appearance-none border-transparent border-white rounded-xl h-10 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-secondary-1 focus:ring-transparent pl-14 opacity-100",type:"text",placeholder:"Search for books","onUpdate:modelValue":r[0]||(r[0]=e=>o.search=e),onKeypress:r[1]||(r[1]=(0,p.D2)(((...e)=>n.submit&&n.submit(...e)),["enter"]))},null,544),[[p.nr,o.search]])])}var b={props:["userID"],data(){return{search:""}},constructed(){},methods:{submit(){this.$router.push({name:"searchResult",query:{userId:this.userID,search:this.search}})}}},v=t(89);const w=(0,v.Z)(b,[["render",f]]);var y=w,_=t(9858),x=t(3235),L=t(4774);const D={class:"flex gap-8"},k=(0,s._)("img",{class:"w-full",src:_,alt:""},null,-1),B=[k],I=(0,s._)("div",{class:"w-8"},[(0,s._)("img",{class:"w-full",src:x,alt:""})],-1),C=(0,s._)("div",{class:"w-8"},[(0,s._)("img",{class:"w-full",src:L,alt:""})],-1);function G(e,r,t,l,o,n){const a=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",D,[(0,s.Wm)(a,{to:{name:"cart",query:{id:t.userID}}},{default:(0,s.w5)((()=>[(0,s._)("div",{class:"w-8",onClick:e=>!0},B)])),_:1},8,["to"]),(0,s.Wm)(a,{to:{name:"wishList",query:{id:t.userID}}},{default:(0,s.w5)((()=>[I])),_:1},8,["to"]),(0,s.Wm)(a,{to:{name:"userView",query:{id:t.userID}}},{default:(0,s.w5)((()=>[C])),_:1},8,["to"])])}var U={props:["userID"],created(){}};const Z=(0,v.Z)(U,[["render",G]]);var S=Z,q={props:["userID"],components:{SearchBar:y,NavBarComponents:S},created(){},methods:{routeToResult(){console.log("Routing to result")},toHome(){console.log("Inside to home"),console.log(this.userID),this.$router.push({name:"LatestBooks",query:{id:this.userID}})}}};const V=(0,v.Z)(q,[["render",c]]);var W=V},9211:function(e,r,t){t.d(r,{Z:function(){return p}});var s=t(3396),l=t.p+"img/ADbanner.83cae981.png";const o={class:"w-full"},n=(0,s._)("img",{class:"object-cover h-60 w-full",src:l,alt:""},null,-1),a=[n];function i(e,r,t,l,n,i){return(0,s.wg)(),(0,s.iD)("div",o,a)}var d={props:["bookName","bookPrice","bookImageURL","bookWish","bookTheme"],data(){return{items:[{src:"https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/sky.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/bird.jpg"}]}}},u=t(89);const c=(0,u.Z)(d,[["render",i]]);var p=c},4584:function(e,r,t){t.r(r),t.d(r,{default:function(){return de}});var s=t(3396);const l={class:"bg-LGB"},o={class:"flex"},n={class:"bg-LGB"},a=(0,s._)("div",null,null,-1);function i(e,r,t,i,d,u){const c=(0,s.up)("Header"),p=(0,s.up)("Sidebar"),h=(0,s.up)("Profile");return(0,s.wg)(),(0,s.iD)("div",l,[(0,s.Wm)(c,{class:"fixed w-full top-0"}),(0,s._)("div",o,[(0,s._)("div",n,[(0,s.Wm)(p,{id:d.id},null,8,["id"])]),(0,s.Wm)(h,{id:d.id,class:"flex bg-LGB"},null,8,["id"])]),a])}var d=t(5103),u=t(9308),c=t(9211),p=t(7139);const h=(0,s.Uk)("- "),m={key:0,class:"flex-column mt-20 w-80 h-130"},g={class:"rounded-br-lg rounded-tr-lg bg-secondary-1 h-60 pt-5"},f={class:"mx-24 mb-5"},b=["src"],v={class:"text-center font-bold text-white"},w={class:"text-center mb-10 font-medium text-white"},y=(0,s.uE)('<div class="bg-secondary-1"><div class="ml-16 w-80 h-10 bg-LGB rounded-lg bg-white"><div class="ml-10 pl-3 pt-1 font-medium text-gray-700 mb-1">User Details</div></div></div><div class="bg-secondary-1 rounded-tr-lg h-[333px]"><div class="text-center py-3 cursor-pointer font-medium text-white">Order Details</div><div class="text-center py-3 cursor-pointer font-medium text-white">Order History</div></div>',2);function _(e,r,t,l,o,n){return(0,s.wg)(),(0,s.iD)(s.HY,null,[h,o.load?((0,s.wg)(),(0,s.iD)("div",m,[(0,s._)("div",g,[(0,s._)("div",f,[(0,s._)("img",{draggable:"false",class:"rounded-full h-28 w-28",src:o.user[0].pfp,alt:""},null,8,b)]),(0,s._)("div",v,(0,p.zw)(o.user[0].name),1),(0,s._)("div",w,(0,p.zw)(o.user[0].email),1)]),y])):(0,s.kq)("",!0)],64)}var x=t(6780),L={props:["id"],data(){return{user:[],load:!1}},async created(){const e=x.Z.firestore();console.log("Inside created() method of userprofile-> sidebar");try{await e.collection("Users").doc(this.id).get().then((e=>{this.user.push(e.data()),this.load=!0}))}catch(r){console.log(r)}console.log(this.user)}},D=t(89);const k=(0,D.Z)(L,[["render",_]]);var B=k,I=t(9242);const C={key:0,class:"flex-col"},G={class:"mt-28"},U=(0,s._)("div",{class:"ml-20 font-bold text-3xl"},"USER PROFILE",-1),Z=(0,s._)("div",{class:"ml-20 mt-2 mb-1"},"Name",-1),S={class:"rounded-lg ml-20 border-2 h-8 w-235"},q=(0,s._)("div",{class:"ml-20 mt-2 mb-1"},"Email",-1),V={class:"rounded-lg ml-20 border-2 h-8 w-235"},W=(0,s._)("div",{class:"mt-5 ml-20 font-bold text-3xl"},"USER ADDRESS",-1),j={class:"flex"},R={class:"ml-20 mt-2 mr-2"},z=(0,s._)("div",null,"Phone Number",-1),E={class:"rounded-lg mt-1 border-2 h-8 w-100"},H={class:"ml-28 mt-2 pl-2"},P=(0,s._)("div",null,"Zipcode or Pincode",-1),N={class:"rounded-lg mt-1 border-2 h-8 w-100"},A={class:"flex"},$={class:"ml-20 mt-2 mr-2"},M=(0,s._)("div",null,"City/District/Town",-1),O={class:"rounded-lg mt-1 border-2 h-8 w-100"},T={class:"ml-28 mt-2 pl-2"},F=(0,s._)("div",null,"State",-1),K={class:"rounded-lg mt-1 border-2 h-8 w-100"},Y={class:"ml-20 mt-2"},J=(0,s._)("div",null,"Address Line 1",-1),Q={class:"rounded-lg mt-1 border-2 h-8 w-235"},X={class:"ml-20 mt-2"},ee=(0,s._)("div",null,"Address Line 2",-1),re={class:"rounded-lg mt-1 border-2 h-8 w-235"},te={class:"flex mt-5 ml-230 w-32 h-8 ml-150 text-md text-white rounded-sm bg-green-400 text-center cursor-pointer hover:bg-secondary-1 hover:text-white font-medium"};function se(e,r,t,l,o,n){return o.load?((0,s.wg)(),(0,s.iD)("div",C,[(0,s._)("div",G,[U,(0,s._)("div",null,[Z,(0,s._)("div",S,[(0,s._)("div",null,[(0,s.wy)((0,s._)("input",{class:"pl-2 pb-1 h-7 w-130 bg-LGB border-transparent text-gray-700 rounded-lg font-semibold focus:outline-none focus:bg-LGB focus:border-transparent focus:ring-transparent placeholder:font-extralight placeholder-gray-700",type:"text","onUpdate:modelValue":r[0]||(r[0]=e=>o.user[0].name=e)},null,512),[[I.nr,o.user[0].name]])])]),q,(0,s._)("div",V,[(0,s._)("div",null,[(0,s.wy)((0,s._)("input",{class:"pl-2 pb-1 h-7 w-130 bg-LGB border-transparent text-gray-700 rounded-lg font-semibold focus:outline-none focus:bg-LGB focus:border-transparent focus:ring-transparent placeholder:font-extralight placeholder-gray-700",type:"text","onUpdate:modelValue":r[1]||(r[1]=e=>o.user[0].email=e)},null,512),[[I.nr,o.user[0].email]])])])])]),(0,s._)("div",null,[W,(0,s._)("div",j,[(0,s._)("div",R,[z,(0,s._)("div",E,[(0,s._)("div",null,[(0,s.wy)((0,s._)("input",{class:"pl-2 pb-1 h-7 w-80 bg-LGB border-transparent text-gray-700 rounded-lg font-semibold focus:outline-none focus:bg-LGB focus:border-transparent focus:ring-transparent placeholder:font-extralight placeholder-gray-700",type:"text","onUpdate:modelValue":r[2]||(r[2]=e=>o.user[0].mobile=e)},null,512),[[I.nr,o.user[0].mobile]])])])]),(0,s._)("div",H,[P,(0,s._)("div",N,[(0,s._)("div",null,[(0,s.wy)((0,s._)("input",{class:"pl-2 pb-1 h-7 w-80 bg-LGB border-transparent text-gray-700 rounded-lg font-semibold focus:outline-none focus:bg-LGB focus:border-transparent focus:ring-transparent placeholder:font-extralight placeholder-gray-700",type:"text","onUpdate:modelValue":r[3]||(r[3]=e=>o.user[0].zipcode=e)},null,512),[[I.nr,o.user[0].zipcode]])])])])]),(0,s._)("div",A,[(0,s._)("div",$,[M,(0,s._)("div",O,[(0,s._)("div",null,[(0,s.wy)((0,s._)("input",{class:"pl-2 pb-1 h-7 w-80 bg-LGB border-transparent text-gray-700 rounded-lg font-semibold focus:outline-none focus:bg-LGB focus:border-transparent focus:ring-transparent placeholder:font-extralight placeholder-gray-700",type:"text","onUpdate:modelValue":r[4]||(r[4]=e=>o.user[0].city=e)},null,512),[[I.nr,o.user[0].city]])])])]),(0,s._)("div",T,[F,(0,s._)("div",K,[(0,s._)("div",null,[(0,s.wy)((0,s._)("input",{class:"pl-2 pb-1 h-7 w-80 bg-LGB border-transparent text-gray-700 rounded-lg font-semibold focus:outline-none focus:bg-LGB focus:border-transparent focus:ring-transparent placeholder:font-extralight placeholder-gray-700",type:"text","onUpdate:modelValue":r[5]||(r[5]=e=>o.user[0].state=e)},null,512),[[I.nr,o.user[0].state]])])])])]),(0,s._)("div",Y,[J,(0,s._)("div",Q,[(0,s._)("div",null,[(0,s.wy)((0,s._)("input",{class:"pl-2 pb-1 h-7 w-230 bg-LGB border-transparent text-gray-700 rounded-lg font-semibold focus:outline-none focus:bg-LGB focus:border-transparent focus:ring-transparent placeholder:font-extralight placeholder-gray-700",type:"text","onUpdate:modelValue":r[6]||(r[6]=e=>o.user[0].addrLine1=e)},null,512),[[I.nr,o.user[0].addrLine1]])])])]),(0,s._)("div",X,[ee,(0,s._)("div",re,[(0,s._)("div",null,[(0,s.wy)((0,s._)("input",{class:"pl-2 pb-1 h-7 w-230 bg-LGB border-transparent text-gray-700 rounded-lg font-semibold focus:outline-none focus:bg-LGB focus:border-transparent focus:ring-transparent placeholder:font-extralight placeholder-gray-700",type:"text","onUpdate:modelValue":r[7]||(r[7]=e=>o.user[0].addrLine2=e)},null,512),[[I.nr,o.user[0].addrLine2]])])])])]),(0,s._)("div",te,[(0,s._)("div",{class:"ml-4 mt-1",onClick:r[8]||(r[8]=(...e)=>n.save&&n.save(...e))},"Save Changes")])])):(0,s.kq)("",!0)}var le={props:["id"],data(){return{user:[],load:!1,variable:""}},async created(){const e=x.Z.firestore();console.log("Inside created() method of Wishlist");try{await e.collection("Users").doc(this.id).get().then((e=>{console.log(e.data()),this.user.push(e.data()),this.load=!0}))}catch(r){console.log(r)}console.log(this.user)},methods:{save(){this.validate();try{const e=x.Z.firestore();console.log("Inside save() function"),console.log(this.user[0]),e.collection("Users").doc(this.id).set({name:this.user[0].name,email:this.user[0].email,cart:this.user[0].cart,addrLine1:this.user[0].addrLine1,addrLine2:this.user[0].addrLine2,landmark:this.user[0].landmark,mobile:this.user[0].mobile,orders:this.user[0].orders,city:this.user[0].city,orders:this.user[0].orders,state:this.user[0].state,wishList:this.user[0].wishList,zipcode:this.user[0].zipcode}).then((e=>{this.variable="/User",this.$router.push({path:"/User",query:{id:this.id}})}))}catch(e){console.log(e)}},validate(){}}};const oe=(0,D.Z)(le,[["render",se]]);var ne=oe,ae={components:{Header:d.Z,Filter:u.Z,LatestBooks:c.Z,Sidebar:B,Profile:ne},data(){return{id:this.$route.query.id}}};const ie=(0,D.Z)(ae,[["render",i]]);var de=ie}}]);
//# sourceMappingURL=858.883373fd.js.map