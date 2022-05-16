<script>
import Header from '../../components/Header/Header.vue';
import Filter from '../../components/Filter/Filter.vue';
import LatestBooks from '../../components/HomePage/LatestBooks.vue';
import ResultBook from '../../components/Search/ResultBook.vue';
import OrderSummary from '../../components/Search/OrderCart.vue';
import OrderCart from '../../components/Search/OrderCart.vue';

export default{
   data(){
     return{
       cost: this.globalVar = 99,
        dis: this.globalVar = 99,
         deliv: this.globalVar = 99, 
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
                },]
          
     }
   },

    components:{
    Header,
    Filter,
    LatestBooks,
    ResultBook,
    OrderSummary,
    OrderCart
}
}
</script>

<template>
    <div class="relative " >
        <!-- Header -->
        <div class="">
            <Header class="fixed z-10 w-full top-0" />
       
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
  <div v-for="item in searchedBooks" :key="item.id">
  <!-- // Here what can be done is pass the value of data of book as parameter to the /book in order to show the details of the book cliked -->
    <!-- <router-link to="/book">   -->
    <OrderCart :bookName="item.bookName" :bookAuthor="item.bookAuthor" :bookSubject="item.bookSubject" :bookGenre="item.bookGenre" :bookDate="item.bookDate" :bookImageURL="item.bookImageURL" :bookQuantity="item.bookQuantity" :bookPrice="item.bookPrice"/>
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
          <p class="pt-8">ITEMS 2</p>
          <p class= "pt-8">{{cost}}</p>
        </div>
        <div class ="flex justify-between">
          <p class="pt-8">DISCOUNT </p>
          <p class= "pt-8 ">{{dis}}</p>
        </div>
        <div class ="flex justify-between">
          <p class="pt-8">DELIVERY CHARGES</p>
          <p class= "pt-8"> {{deliv}}</p>
        </div>
        <div class ="flex justify-between">
          <p class="pt-40 text-xl font-bold">TOTAL COST</p>
          <p class= "pt-40 text-xl font-bold">500</p> 
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