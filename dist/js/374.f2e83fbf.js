"use strict";(self["webpackChunkyogabhyas"]=self["webpackChunkyogabhyas"]||[]).push([[374],{4372:function(e,t,o){o.d(t,{Z:function(){return v}});var r=o(3396),s=o(7139);const a={class:"mt-5 cursor-pointer"},i={class:"w-40 bg-black bg-opacity-5"},d=["src"],n={class:"w-40 text-center text-sm mt-2 font-medium text-gray-600"},l={class:"w-40 text-center text-sm font-bold text-secondary-1"};function c(e,t,o,c,m,b){const u=(0,r.up)("router-link");return(0,r.wg)(),(0,r.j4)(u,{to:{path:"/book",query:{id:this.id,userID:this.userID}}},{default:(0,r.w5)((()=>[(0,r._)("div",a,[(0,r._)("div",i,[(0,r._)("img",{class:"h-60 object-contain border-none rounded-md w-full",src:o.url,alt:"",draggable:"false"},null,8,d)]),(0,r._)("div",n,(0,s.zw)(o.name),1),(0,r._)("div",l,"₹ "+(0,s.zw)(o.price),1)])])),_:1},8,["to"])}var m={props:["name","price","url","wish","theme","description","id","userID"],created(){}},b=o(89);const u=(0,b.Z)(m,[["render",c]]);var v=u},1348:function(e,t,o){o.d(t,{Z:function(){return m}});var r=o(3396);const s={class:"w-full"},a=(0,r._)("img",{class:"object-cover h-52 w-full",src:"https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",alt:""},null,-1),i=[a];function d(e,t,o,a,d,n){return(0,r.wg)(),(0,r.iD)("div",s,i)}var n={props:["bookName","bookPrice","bookImageURL","bookWish","bookTheme"],data(){return{items:[{src:"https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/sky.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/bird.jpg"}]}}},l=o(89);const c=(0,l.Z)(n,[["render",d]]);var m=c},7269:function(e,t,o){o.d(t,{Z:function(){return w}});var r=o(3396),s=o(7139);const a={class:"w-60 bg-black bg-opacity-5 border-"},i=["src"],d={class:"border-2 border-opacity-5 border-black w-full"},n={class:"flex flex-col items-start ml-10"},l={class:"mt-7 font-bold text-gray-700 text-lg cursor-pointer hover:text-secondary-1"},c={class:"text-gray-500"},m={class:"text-gray-500"},b={class:"text-gray-500"},u={class:"flex flex-row justify-between w-full mt-14 pr-10 item-center"},v={class:"font-bold text-gray-700 text-xl"},p={class:"flex items-center"};function k(e,t,o,k,g,h){const x=(0,r.up)("router-link");return(0,r.wg)(),(0,r.j4)(x,{to:"/book"},{default:(0,r.w5)((()=>[(0,r._)("div",{class:"flex flex-row mt-7 border-",onClick:t[2]||(t[2]=(...t)=>e.handler&&e.handler(...t))},[(0,r._)("div",a,[(0,r._)("img",{class:"h-60 object-contain border-none w-full",src:o.bookImageURL,alt:""},null,8,i)]),(0,r._)("div",d,[(0,r._)("div",n,[(0,r._)("div",l,(0,s.zw)(o.bookName),1),(0,r._)("div",c,(0,s.zw)(o.bookDate),1),(0,r._)("div",m,(0,s.zw)(o.bookLanguage),1),(0,r._)("div",b,(0,s.zw)(o.bookCover),1),(0,r._)("div",u,[(0,r._)("div",v,"₹ "+(0,s.zw)(o.bookPrice),1),(0,r._)("div",p,[(0,r._)("div",{class:"py-2 w-32 text-sm text-white rounded-sm bg-secondary-1 text-center cursor-pointer hover:bg-primary-1 hover:text-gray-800 font-medium",onClick:t[0]||(t[0]=(...e)=>h.addToWishlist&&h.addToWishlist(...e))}," Add to Wishlist "),(0,r._)("div",{class:"ml-5 py-2 w-32 text-sm text-white rounded-sm bg-secondary-1 text-center cursor-pointer hover:bg-primary-1 hover:text-gray-800 font-medium",onClick:t[1]||(t[1]=(...e)=>h.addToCart&&h.addToCart(...e))}," Add to Cart ")])])])])])])),_:1})}var g={props:["bookName","bookDate","bookLanguage","bookCover","bookPrice","bookImageURL"],methods:{addToCart(){alert("Add to cart called")},addToWishlist(){console.log("Add to wishlist")}}},h=o(89);const x=(0,h.Z)(g,[["render",k]]);var w=x},8551:function(e,t,o){o.d(t,{Z:function(){return L}});var r=o(3396),s=o(7139);const a={class:"bg-primary-1 w-full mt-2 mb-4"},i={class:"flex items-center justify-between pr-4"},d={class:"w-80"},n={class:"pl-4 pt-3 flex"},l=["src"],c={class:"ml-5 mt-1"},m={class:"font-medium text-lg"},b={class:"font-normal text-sm text-gray-600"},u={class:"font-normal text-sm text-gray-600"},v={class:"font-normal text-sm text-gray-600"},p={class:"text-gray-500 text-sm pb-2 ml-4 mt-2"},k={class:"w-15"},g={class:"w-64"},h={class:"text-sm"},x={class:"text-sm text-gray-500"},w={class:"text-sm text-gray-500"},f={class:"text-sm text-gray-500"},y={class:"text-sm text-gray-500"},_={class:"text-sm text-gray-500"},D={class:"text-sm text-gray-500"},A=(0,r._)("div",{class:"text-sm"},"Order Tracking ID:",-1),I={class:"text-sm text-gray-500"};function T(e,t,o,T,j,z){return(0,r.wg)(),(0,r.iD)("div",a,[(0,r._)("div",i,[(0,r._)("div",d,[(0,r._)("div",n,[(0,r._)("div",null,[(0,r._)("img",{class:"h-36 object-contain border-none",src:o.bookImageURL,alt:""},null,8,l)]),(0,r._)("div",c,[(0,r._)("div",m,(0,s.zw)(o.bookName),1),(0,r._)("div",b,"Author: "+(0,s.zw)(o.bookAuthor),1),(0,r._)("div",u,"Genre: "+(0,s.zw)(o.bookGenre),1),(0,r._)("div",v,"Publication Date: "+(0,s.zw)(o.bookYear),1)])]),(0,r._)("div",p,"Order ID: "+(0,s.zw)(o.orderID),1)]),(0,r._)("div",k,"₹ "+(0,s.zw)(o.bookPrice),1),(0,r._)("div",g,[(0,r._)("div",h,"Delivery on "+(0,s.zw)(o.bookDelivery),1),(0,r._)("div",x,(0,s.zw)(o.addressline1),1),(0,r._)("div",w,(0,s.zw)(o.addressline2),1),(0,r._)("div",f,(0,s.zw)(o.landmark),1),(0,r._)("div",y,(0,s.zw)(o.city),1),(0,r._)("div",_,(0,s.zw)(o.state),1),(0,r._)("div",D,"Pincode: "+(0,s.zw)(o.pincode),1),A,(0,r._)("div",I,(0,s.zw)(o.orderTrackingID),1)])])])}var j={props:["orderID","bookName","bookPrice","bookImageURL","orderDate","shipTo","bookYear","bookGenre","bookAuthor","bookDelivery","orderTrackingID","addressline1","addressline2","city","landmark","state","pincode"]},z=o(89);const P=(0,z.Z)(j,[["render",T]]);var L=P},2491:function(e,t,o){o.d(t,{Z:function(){return P}});var r=o(3396),s=o(7139);const a={class:"w-240 py-3"},i={class:"bg-secondary-1 rounded-t-md py-4"},d={class:"px-8 flex justify-between"},n=(0,r._)("div",{class:"text-white font-medium text-sm"},"ORDER PLACED",-1),l={class:"text-white font-light text-sm"},c=(0,r._)("div",{class:"text-white font-medium text-sm"},"TOTAL",-1),m={class:"text-white font-light text-sm"},b=(0,r._)("div",{class:"text-white font-medium text-sm"},"Ship To",-1),u={class:"text-white font-light text-sm"},v=(0,r._)("div",{class:"text-white font-medium text-sm"},"Order ID",-1),p={class:"text-white font-light text-sm"},k={class:"bg-primary-1 rounded-b-md px-10 pt-2 pb-4"},g={class:"flex justify-between items-end"},h={class:"flex"},x=["src"],w={class:"ml-6 mt-4"},f={class:"font-medium text-lg"},y={class:"font-normal text-sm text-gray-600"},_={class:"font-normal text-sm text-gray-600"},D={class:"font-normal text-sm text-gray-600"},A=(0,r._)("div",{class:"mb-5"},[(0,r._)("div",{class:"cursor-pointer hover:bg-secondary-1 hover:text-white bg-white px-5 py-1 rounded-md text-secondary-1 font-medium"},"Buy Again")],-1);function I(e,t,o,I,T,j){return(0,r.wg)(),(0,r.iD)("div",a,[(0,r._)("div",i,[(0,r._)("div",d,[(0,r._)("div",null,[n,(0,r._)("div",l,(0,s.zw)(o.orderDate),1)]),(0,r._)("div",null,[c,(0,r._)("div",m,"₹ "+(0,s.zw)(o.bookPrice),1)]),(0,r._)("div",null,[b,(0,r._)("div",u,(0,s.zw)(o.shipTo),1)]),(0,r._)("div",null,[v,(0,r._)("div",p,(0,s.zw)(o.orderID),1)])])]),(0,r._)("div",k,[(0,r._)("div",null,"Delivered "+(0,s.zw)(o.bookDelivered),1),(0,r._)("div",g,[(0,r._)("div",h,[(0,r._)("div",null,[(0,r._)("img",{class:"h-52 object-contain border-none w-full",src:o.bookImageURL,alt:""},null,8,x)]),(0,r._)("div",w,[(0,r._)("div",f,(0,s.zw)(o.bookName),1),(0,r._)("div",y,"Author: "+(0,s.zw)(o.bookAuthor),1),(0,r._)("div",_,"Genre: "+(0,s.zw)(o.bookGenre),1),(0,r._)("div",D,"Publication Date: "+(0,s.zw)(o.bookYear),1)])]),A])])])}var T={props:["orderID","bookName","bookPrice","bookImageURL","orderDate","shipTo","bookYear","bookGenre","bookAuthor","bookDelivered"]},j=o(89);const z=(0,j.Z)(T,[["render",I]]);var P=z},5374:function(e,t,o){o.r(t),o.d(t,{default:function(){return U}});var r=o(3396);const s={class:"relative"},a={class:""},i={class:"absoulute"},d={class:""},n={class:"fixed w-full"},l={class:"mt-20 absolute top-6 left-96"},c={class:"w-240"},m=(0,r.uE)('<div class="text-3xl font-bold text-gray-700">ORDER DETAILS</div><div class="flex mt-2 justify-between px-4 pb-4"><div class="w-80 flex"><div class="mr-8"><div class="bg-primary-1 px-2 rounded-sm w-20 text-center">Product</div></div><div><div class="bg-primary-1 px-2 rounded-sm w-20 text-center">Details</div></div></div><div class="w-15"><div class="bg-primary-1 px-2 rounded-sm w-20 text-center -ml-5">Price</div></div><div class="w-64"><div class="bg-primary-1 px-2 rounded-sm w-20 text-center">Delivery</div></div></div>',2);function b(e,t,o,b,u,v){const p=(0,r.up)("Header"),k=(0,r.up)("Sidebar"),g=(0,r.up)("OrderDetails",!0);return(0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("div",a,[(0,r.Wm)(p,{class:"fixed z-10 w-full top-0"})]),(0,r._)("div",i,[(0,r._)("div",d,[(0,r._)("div",n,[(0,r.Wm)(k)])])]),(0,r._)("div",l,[(0,r._)("div",c,[m,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(u.orderedDetails,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e.id},[(0,r.Wm)(g,{orderID:e.orderID,bookName:e.bookName,bookPrice:e.bookPrice,bookImageURL:e.bookImageURL,orderDate:e.orderDate,shipTo:e.shipTo,bookYear:e.bookYear,bookGenre:e.bookGenre,bookAuthor:e.bookAuthor,bookDelivery:e.bookDelivery,addressline1:e.addressline1,addressline2:e.addressline2,city:e.city,landmark:e.landmark,state:e.state,pincode:e.pincode},null,8,["orderID","bookName","bookPrice","bookImageURL","orderDate","shipTo","bookYear","bookGenre","bookAuthor","bookDelivery","addressline1","addressline2","city","landmark","state","pincode"])])))),128))])])])}var u=o(279),v=o(2773),p=o(1348),k=o(7269),g=o(4372);const h=(0,r.Uk)("- "),x={class:"flex-column mt-20 w-80 h-130"},w={class:"rounded-br-lg rounded-tr-lg bg-secondary-1 h-72 pt-5"},f=(0,r._)("div",{class:"mx-24 mb-5"},[(0,r._)("img",{draggable:"false",class:"rounded-full h-28 w-28",src:"https://i.pinimg.com/564x/50/9f/58/509f58dfb7e4b4e5191811df105401d5.jpg",alt:""})],-1),y=(0,r._)("div",{class:"text-center font-bold text-white"},"Harsh Naidu",-1),_=(0,r._)("div",{class:"text-center mb-10 font-medium text-white"},"naiduharsh45@gmail.com",-1),D={class:"bg-secondary-1"},A=(0,r._)("div",{class:"pt-1 font-medium text-center text-white mb-1"},"User Details",-1),I=(0,r._)("div",{class:"bg-secondary-1 rounded-tr-lg"},[(0,r._)("div",{class:"ml-16 w-80 h-10 bg-LGB rounded-lg bg-white"},[(0,r._)("div",{class:"text-left pl-12 pt-2 py-3 font-medium text-gray-700"},"Order Details")])],-1),T={class:"bg-secondary-1 rounded-tr-lg h-[285px]"},j=(0,r._)("div",{class:"text-center py-3 cursor-pointer font-medium text-white"},"Order History",-1);function z(e,t){const o=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[h,(0,r._)("div",x,[(0,r._)("div",w,[f,y,_,(0,r._)("div",D,[(0,r.Wm)(o,{to:"/User"},{default:(0,r.w5)((()=>[A])),_:1})])]),I,(0,r._)("div",T,[(0,r.Wm)(o,{to:"/orderHistory"},{default:(0,r.w5)((()=>[j])),_:1})])])],64)}var P=o(89);const L={},F=(0,P.Z)(L,[["render",z]]);var N=F,R=o(2491),C=o(8551),Z={data(){return{orderedDetails:[{orderID:"46FA4F65A4F6A",orderTrackingID:"6HDF45HD4655F2A",bookName:"Gitanjali",bookPrice:"1300",bookImageURL:"https://picsum.photos/200/300",orderDate:"2 April 2022",shipTo:"Ajay sharma",bookYear:"1910",bookGenre:"Poem",bookAuthor:"Rabindranath Tagore",bookDelivery:"8 April 2022",addressline1:"56, Kshitija Apartments",addressline2:"B4 Wings, Civil Lines",city:"Nagpur",landmark:"Near Centeer Point",state:"Maharashtra",pincode:"424075"},{orderID:"46FA4F65A4F6A",orderTrackingID:"6HDF45HD4655F2A",bookName:"A Thousand Splendid Suns",bookPrice:"1300",bookImageURL:"https://picsum.photos/200/300",orderDate:"2 April 2022",shipTo:"Ajay sharma",bookYear:"1910",bookGenre:"Poem",bookAuthor:"Rabindranath Tagore",bookDelivery:"8 April 2022",addressline1:"56, Kshitija Apartments",addressline2:"B4 Wings, Civil Lines",city:"Nagpur",landmark:"Near Centeer Point",state:"Maharashtra",pincode:"424075"},{orderID:"46FA4F65A4F6A",orderTrackingID:"6HDF45HD4655F2A",bookName:"A Thousand Splendid Suns",bookPrice:"1300",bookImageURL:"https://picsum.photos/200/300",orderDate:"2 April 2022",shipTo:"Ajay sharma",bookYear:"1910",bookGenre:"Poem",bookAuthor:"Rabindranath Tagore",bookDelivery:"8 April 2022",addressline1:"56, Kshitija Apartments",addressline2:"B4 Wings, Civil Lines",city:"Nagpur",landmark:"Near Centeer Point",state:"Maharashtra",pincode:"424075"},{orderID:"46FA4F65A4F6A",orderTrackingID:"6HDF45HD4655F2A",bookName:"A Thousand Splendid Suns",bookPrice:"1300",bookImageURL:"https://picsum.photos/200/300",orderDate:"2 April 2022",shipTo:"Ajay sharma",bookYear:"1910",bookGenre:"Poem",bookAuthor:"Rabindranath Tagore",bookDelivery:"8 April 2022",addressline1:"56, Kshitija Apartments",addressline2:"B4 Wings, Civil Lines",city:"Nagpur",landmark:"Near Centeer Point",state:"Maharashtra",pincode:"424075"},{orderID:"46FA4F65A4F6A",orderTrackingID:"6HDF45HD4655F2A",bookName:"A Thousand Splendid Suns",bookPrice:"1300",bookImageURL:"https://picsum.photos/200/300",orderDate:"2 April 2022",shipTo:"Ajay sharma",bookYear:"1910",bookGenre:"Poem",bookAuthor:"Rabindranath Tagore",bookDelivery:"8 April 2022",addressline1:"56, Kshitija Apartments",addressline2:"B4 Wings, Civil Lines",city:"Nagpur",landmark:"Near Centeer Point",state:"Maharashtra",pincode:"424075"}]}},components:{Header:u.Z,Filter:v.Z,LatestBooks:p.Z,ResultBook:k.Z,BookCoverCat:g.Z,Sidebar:N,OrderHistory:R.Z,OrderDetails:C.Z}};const H=(0,P.Z)(Z,[["render",b]]);var U=H}}]);
//# sourceMappingURL=374.f2e83fbf.js.map