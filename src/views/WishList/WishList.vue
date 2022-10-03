<script>
import Header from '../../components/Header/Header.vue';
import Filter from '../../components/Filter/Filter.vue';
import LatestBooks from '../../components/HomePage/LatestBooks.vue';
import ResultBook from '../../components/Search/ResultBook.vue';
import BookCoverCat from '../../components/HomePage/BookCoverCat.vue';
import OrderHistory from '../../components/User/OrderHistoryView/OrderHistory.vue';
import OrderDetails from '../../components/User/OrderDetailsView/OrderDetails.vue';
import WishBooks from '../../components/WishList/WishBooks.vue';
import firebase from 'firebase/compat/app';
export default{
    data(){
        return{
            id: this.$route.query.id,
            books: [], 
            isLoaded: false,
        }
    },
    created(){
          this.fetch()
    },
    components:{
    Header,
    Filter,
    LatestBooks,
    ResultBook,
    BookCoverCat,
    // Sidebar,
    OrderHistory,
    OrderDetails,
    WishBooks
},
methods: {
    async fetch(){
        const db = firebase.firestore(); 
        console.log("Inside created() method of Wishlist")
        try{
            this.books = []
            console.log("User ID : " + this.id)
          await db.collection('Users').doc(this.id).get().then((r) => {
            console.log(r.data());
            var arr = r.data().wishList;
            console.log(arr);
            for(let i = 0; i < arr.length; i++) {
             db.collection('books').doc(arr[i]).get().then((book) => {
                // book.data().id = arr[i];
                // console.log(book.data())

                this.books.push(book.data())
                //adding the book id to books array of objects
                this.books[i].id = arr[i];
                
              })
            }
            console.log('Wishlist books array')
          }).finally(() => {
            this.isLoaded = true;
        }); 
        }catch(e){
            console.log(e)
        }
    },
    updateWishList(updatedWishList){
        var tempBooks = [];
        console.log(updatedWishList);
        this.books.forEach(book => {
            console.log(book.id);
            if(updatedWishList.includes(book.id))
                tempBooks.push(book);
        });
        this.books = tempBooks;
    }
}

}
</script>

<template>
    <div class="relative" >
        <!-- Header -->
        <div class="">
            <Header :userID="id" class="fixed z-10 w-full top-0" />
        </div>
        
        <!-- WishList -->
        <div class="mt-24 mx-40">
            <div class="text-3xl font-semibold text-gray-700 mb-5">Your WishList</div>
            
            
            <div v-if="isLoaded">
                <div v-if="books.length === 0"  style="text-align:center;">
                    <img src="../../assets/empty-box.png" alt="" style="height: 400px; margin: auto;" >
                    <div style="position: relative; bottom: 10vh; font-size: 32px; color:#476582;">Your Wishlist is empty :(</div>
                    <div style="position: relative; bottom: 10vh; font-size: 20px; color:#476582a4;">Looks like you have not added anything to your wishlist :(</div>
                </div>
                <div v-else>
                    <div v-for="item in books" :key="item.id">

                         <div>
                         <!-- <router-link to="/book" > -->
                             <WishBooks @updateWishList="updateWishList" :bookName="item.name" :bookPrice="item.price" :bookImageURL="item.url" :bookYear="item.publicationYear" :bookGenre="item.bookGenre" :bookAuthor="item.author" :bookID="item.id" :id="id"/>
                         <!-- </router-link> -->
                        </div>

                     </div>
                </div>
            </div>
        </div>


    </div>
    
        
</template>

<style>
</style>