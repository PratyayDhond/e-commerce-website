<script>
import Header from '../../components/Header/Header.vue';
import Filter from '../../components/Filter/Filter.vue';
import LatestBooks from '../../components/HomePage/LatestBooks.vue';
import ResultBook from '../../components/Search/ResultBook.vue';
import OrderSummary from '../../components/Search/OrderCart.vue';
import OrderCart from '../../components/Search/OrderCart.vue';
import OrderDetails from '../OrderDetails/OrderDetails.vue';
import firebase from 'firebase/compat/app'; 

export default{
  // props: ["userID"],
   data(){
     return{
       cost: 0,
       items: 0,
       prices: [],
       orderPlaced: false,
        dis: 0,
        //BOOKMARK
        //Change this value according to the need
         deliv: 40, 
        userID: this.$route.query.id,
        books: [],
        checkoutBooksUnique: new Set(),
        checkoutBooks: new Map(),        
        checkoutBooksPrice: new Map(),  
     }
   },
   async created() {
        const db = firebase.firestore(); 
        // console.log(this.searchedBooks)
        console.log("Inside created() method")

        try{

          db.collection('Users').doc(this.userID).get().then((r) => {
            console.log(r.data());
            var arr = r.data().cart;
            console.log(arr);

            for(let i = 0; i < arr.length; i++){
              db.collection('books').doc(arr[i]).get().then((book) => {
                var temp = book.data()
                temp.id = arr[i]
                this.books.push(temp)
              })
            }
            console.log('Searched Books array')
              console.log(this.books);  

          });
        }

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
  async checkout() {
    console.log("Inside Checkout function");
    var amount = 0;
    var quantity= 0;
    var quantityArr = [];
    this.checkoutBooksUnique.forEach((bookID) => {
      console.log(bookID);
      console.log(bookID + " " + this.checkoutBooksPrice.get(bookID) * this.checkoutBooks.get(bookID));
      amount += this.checkoutBooksPrice.get(bookID) * this.checkoutBooks.get(bookID);
      quantity += this.checkoutBooks.get(bookID);
      quantityArr.push(this.checkoutBooks.get(bookID));
    })
    if(quantity === 0)
      return alert('You cannot checkout with an empty cart!')
    if(this.orderPlaced)
      return alert('Please wait until the current order is being processed');
      console.log(this.orderPlaced)
    this.orderPlaced = true;
      var books = [];
      this.checkoutBooksUnique.forEach(item => {
        books.push(item)
      })
    // BOOKMARK: PAYWALL GOES HERE
    var total = amount + this.deliv * quantity;
      let orderID = "";
      await firebase.firestore().collection("Orders").add({
        books: books,
        quantity: quantityArr,
        amount: amount, 
        total:total,
        shippingCharges: this.deliv,
        orderDate: new Date(),
        // BOOKMARK: expected delivery to 14 days from order time.
        expectedDate: new Date(Date.now() + 12096e5),
        packageNo: "",
        discount: 0,        
      }).then(snapshot => {
        orderID = snapshot.id;
      })

      console.log(orderID);
      var userData;
      console.log(this.userID)
      await firebase.firestore().collection("Users").doc(this.userID).get().then(snapshot => {
        console.log(snapshot.data());
        userData = snapshot.data();
      })
      console.log(userData);
      var orders = userData.orders;
      orders.push(orderID);

      firebase.firestore().collection("Users").doc(this.userID).set({
        addrLine1: userData.addrLine1,  
        addrLine2: userData.addrLine2,
        //BOOKMARK : EMPTYING CART AFTER ORDERING
        cart: [],
        city: userData.city,
        landmark:userData.landmark,
        mobile: userData.mobile,
        name: userData.name,
        orders: orders,
        state: userData.state,
        wishList: userData.wishList,
        zipcode: userData.zipcode,
        email: userData.email,
      }).finally( () => {
        this.books = [];
        this.items = 0;
        this.cost = 0;
        this.discount = 0;
        this.orderPlaced = false;
        this.checkoutBooksUnique = new Set();
        this.checkoutBooks = new Map();
        this.checkoutBooksPrice = new Map();
        alert("Order Placed Successfully");

      })

    // })
  },
  calculateTotal(quantity){
    this.items += quantity 
       this.cost += this.prices[this.prices.length-1];
       console.log("current cost : " + this.cost) 
  },

  calculate(price,quantity, bookID){
    this.prices.push(price);
    console.log(bookID);
    this.calculateTotal(quantity);
    this.checkoutBooksUnique.add(bookID);
    var count = this.checkoutBooks.get(bookID) || 0;

    // Checking for if book's quantity is decremented or incremented.
    if(quantity === 1)
    this.checkoutBooks.set(bookID,count+1);
    else if(quantity === -1){
      if(count > 0)
        this.checkoutBooks.set(bookID,count-1);
    }


    if(price > 0)
    this.checkoutBooksPrice.set(bookID,price);
    console.log(this.checkoutBooks);
    console.log(this.checkoutBooksUnique)
    console.log(this.checkoutBooksPrice)
  },
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
                <div class="  text-2xl font font-calibri">{{items}} items</div>
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
    <OrderCart @calculate="calculate" :bookName="item.name" :bookAuthor="item.author" bookSubject="English" bookGenre="-" :bookDate="item.publicationYear" :bookImageURL="item.url" bookQuantity="0" :bookPrice="item.price" :id="this.userID" :bookID="item.id"/>
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
          <!-- <router-link to="404"> -->
            <!-- BOOKMARK -> Paywall will go here -->
          <button class="bg-secondary-1 hover:bg-primary-1 hover:text-black text-white font-semibold text-xl h-10 pl-40 pr-40 tracking-widest " @click="checkout">CHECKOUT</button>
          <!-- </router-link> -->
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