<script>
import Header from '../../components/Header/Header.vue';
import Filter from '../../components/Filter/Filter.vue';
import LatestBooks from '../../components/HomePage/LatestBooks.vue';
import ResultBook from '../../components/Search/ResultBook.vue';
import OrderSummary from '../../components/Search/OrderCart.vue';
import OrderCart from '../../components/Search/OrderCart.vue';
import firebase from 'firebase/compat/app';

export default{
  // props: ["userID"],
   data(){
     return{
       cost: 0,
       items: 0,
       prices: [],
        dis: 0,
        //BOOKMARK
        //Change this value according to the need
         deliv: 40, 
         searchedBooks:[

                {
                    bookName:"Merchant Of Venice ",
                    bookAuthor:"William Shakespeare",
                    bookSubject:"English",
                    bookGenre:"Hardcover",
                    bookDate:"1300",
                    bookImageURL:"https://images-eu.ssl-images-amazon.com/images/I/519KfsM6bRL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
                    bookPrice: "668",
                    bookQuantity: "2"
               },
                 {
                    bookName:"Merchant Of Venice ",
                    bookAuthor:"William Shakespeare",
                    bookSubject:"English",
                   bookGenre:"Hardcover",
                    bookDate:"1300",
                    bookImageURL:"https://images-eu.ssl-images-amazon.com/images/I/519KfsM6bRL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
                    bookPrice: "128",
                    bookQuantity: "1"
                },
                 {
                    bookName:"Merchant Of Venice ",
                    bookAuthor:"William Shakespeare",
                    bookSubject:"English",
                   bookGenre:"Hardcover",
                    bookDate:"1300",
                    bookImageURL:"https://images-eu.ssl-images-amazon.com/images/I/519KfsM6bRL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
                    bookPrice: "240",
                    bookQuantity: "2"
                },
                 {
                    bookName:"Merchant Of Venice ",
                    bookAuthor:"William Shakespeare",
                    bookSubject:"English",
                   bookGenre:"Hardcover",
                    bookDate:"1300",
                    bookImageURL:"https://images-eu.ssl-images-amazon.com/images/I/519KfsM6bRL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
                    bookPrice: "200",
                    bookQuantity: "2"
                },],
        userID: this.$route.query.id,
        books: [],
          
     }
   },
   async created() {
        const db = firebase.firestore(); 
        // console.log(this.searchedBooks)
        console.log("Inside created() method")
        // try{
        // await db.collection ('books').get().then(r => {
        //    r.docs.map(doc => {
        //        console.log(doc.data())
        // //    this.books += doc.data();
        // // this.searchedBooks = doc.data()
        //    });
        // });

        try{

          db.collection('Users').doc(this.userID).get().then((r) => {
            console.log(r.data());
            var arr = r.data().cart;
            console.log(arr);

            for(let i = 0; i < arr.length; i++){
              db.collection('books').doc(arr[i]).get().then((book) => {
                this.books.push(book.data())
              })
            }
            console.log('Searched Books array')
              console.log(this.books)

          });
            // db.collection('Users').doc(this.userID).get().then((querySnapshot) => {
            //     querySnapshot.forEach(doc =>{
            //         // console.log(doc.data())
            //         // var obj = doc.data();
            //         // obj.id = doc.id;
            //         // this.books.push(obj);
            //     });
            //     // console.log(this.books);
            // })
        }

        // for(let i = 0; i < this.books.length; i++)
            // console.log(this.books[i].name);
        catch(e){
            console.log(e)
        }
    },

    components:{
    Header,
    Filter,
    LatestBooks,
    ResultBook,
    OrderSummary,
    OrderCart
},
methods: {
  calculateTotal(quantity){
    this.items += quantity 
    // this.cost = 0;
    // for(let i = 0; i < this.prices.length; i++){
       this.cost += this.prices[this.prices.length-1];
       console.log("current cost : " + this.cost) 
    // }
    
  },

  calculate(price,quantity){
    this.prices.push(price);
    // console.log(this.prices)
    // this.cost = this.cost + price;
    // this.items = this.items + quantity
    this.calculateTotal(quantity);
    // console.log(price)
    // console.log(quantity)
  },

  //  decrement(price){
  //   var p = parseInt(price);
  //   this.cost -= p;
  //   this.items -= quantity
  //   console.log(this.cost)
  // },
  // increment(price){
    
  //   var p = parseInt(price);
  //   this.cost += p;
  //   this.items += quantity
  //   console.log(this.cost)
  // }
}
}
</script>

<template>
    <div class="relative " >
        <!-- Header -->
        <div class="">
            <Header :userID="userID" class="fixed z-10 w-full top-0" />
       
        </div>
     </div> 

        <div class="flex  mt-32 mx-28">
        <div class="w-4/6 ">
          <div class="flex justify-between items-baseline   ">
                <div class="  text-4xl font-bold font-calibri" >Book Cart</div>
                <div class="  text-2xl font font-calibri">2 items</div>
          </div>
                <div class="w-full bg-gray-300 h-px mt-5"></div>
<div>
  <div class="flex">
    <div class="w-3/6">
                  <div class="flex justify-between">
      <p class="mt-6 pl-2  text-gray-400">Product Details</p>
      </div>

    </div>
  <div class="w-1/6">
                  <div class="flex justify-between">
      <p class="mt-6 ml-6 text-gray-400">Quantity</p>
      </div>

    </div>
 
   <div class="w-1/6">
                  <div class="flex justify-between">
      <p class="mt-6 pl-10  text-gray-400">Price</p>
      </div>

    </div>
   <div class="w-1/6">
                  <div class="flex justify-between">
     <p class="mt-6 pl-12  text-gray-400">Total</p>
      </div>
       </div>
    </div>
<div class="w-6/6 pt-4">
  <div v-for="item in books" :key="item.id">
  <!-- // Here what can be done is pass the value of data of book as parameter to the /book in order to show the details of the book cliked -->
    <!-- <router-link to="/book">   -->
    <OrderCart @calculate="calculate" :bookName="item.name" :bookAuthor="item.author" bookSubject="English" bookGenre="-" :bookDate="item.publicationYear" :bookImageURL="item.url" bookQuantity="0" :bookPrice="item.price"/>
  <!-- </router-link> -->
  </div>
</div>
</div>
   
</div>
<div class= " h-96 w-px bg-gray-300 ml-4 mr-4"></div>
  <div class="w-2/6">
    <div class="  text-4xl font-bold font-calibri" >Order Summary</div>
      <div class="w-full bg-gray-300 h-px mt-5"></div>
        <div class ="flex justify-between">
          <p class="pt-8">ITEMS {{items}}</p>
          <p class= "pt-8">{{cost}}</p>
        </div>
        <div class ="flex justify-between">
          <p class="pt-8">DISCOUNT </p>
          <p class= "pt-8 ">{{dis}}</p>
        </div>
        
        <div class ="flex justify-between">
          <p class="pt-8">DELIVERY CHARGES</p>
          <p class= "pt-8"> {{deliv * this.items}}</p>
        </div>
        <div class ="flex justify-between">
          <p class="pt-40 text-xl font-bold">TOTAL COST</p>
          <p class= "pt-40 text-xl font-bold">{{cost + deliv * this.items }}</p> 
        </div>
        <div class="flex justify-center pt-6">
          <button class="bg-secondary-1 hover:bg-primary-1 hover:text-black text-white font-semibold text-xl h-10 pl-40 pr-40 tracking-widest ">CHECKOUT</button>
        </div>    
        <router-link to="/home">
        <div class="ml-18 mt-8 flex " @click="true">
          <div class="flex py-2 items-center  text-sm text-black rounded-md text-center cursor-pointer fill-current hover:text-secondary-1 font-sm">
            <svg class="w-6 " version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 400.004 400.004" style="enable-background:new 0 0 400.004 400.004;" xml:space="preserve">
              <g>
                <path  d="M382.688,182.686H59.116l77.209-77.214c6.764-6.76,6.764-17.726,0-24.485c-6.764-6.764-17.73-6.764-24.484,0L5.073,187.757
	            	c-6.764,6.76-6.764,17.727,0,24.485l106.768,106.775c3.381,3.383,7.812,5.072,12.242,5.072c4.43,0,8.861-1.689,12.242-5.072
	            	c6.764-6.76,6.764-17.726,0-24.484l-77.209-77.218h323.572c9.562,0,17.316-7.753,17.316-17.315
               	C400.004,190.438,392.251,182.686,382.688,182.686z"/>
              </g>
            </svg>      
            
            <div class = "pl-2 text-xl"  @click="true">Continue Shopping</div>
          </div>
        </div> 
        </router-link>
      </div>
   </div>
</template>

<style>
</style>