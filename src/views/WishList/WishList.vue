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
            wishlistBooks:[
                {   
                    bookName:"Gitanjali",
                    bookPrice:"1300",
                    bookImageURL:"https://picsum.photos/200/300",
                    bookYear: "1910",
                    bookGenre: "Poem",
                    bookAuthor:"Rabindranath Tagore",
                },
                {   
                    bookName:"Ikigai",
                    bookPrice:"520",
                    bookImageURL:"https://picsum.photos/200/300",
                    bookYear: "2001",
                    bookGenre: "Self-Help",
                    bookAuthor:"Priyanshu Lapkale",
                },{   
                    bookName:"A Thousand Splendid Suns",
                    bookPrice:"320",
                    bookImageURL:"https://picsum.photos/200/300",
                    bookYear: "1920",
                    bookGenre: "Thrill",
                    bookAuthor:"Khaled Houssein",
                },
            ],
            id: this.$route.query.id,
            books: []
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
    fetch(){
        const db = firebase.firestore(); 
        console.log("Inside created() method of Wishlist")
        try{
            this.books = []
            console.log("User ID : " + this.id)
          db.collection('Users').doc(this.id).get().then((r) => {
            console.log(r.data());
            var arr = r.data().wishList;
            console.log(arr);
            for(let i = 0; i < arr.length; i++){
              db.collection('books').doc(arr[i]).get().then((book) => {
                // book.data().id = arr[i];
                // console.log(book.data())

                this.books.push(book.data())
                //adding the book id to books array of objects
                this.books[i].id = arr[i];
                
                // console.log(this.books[i].id)
                // this.books[i].set("id",arr[i])
                // console.log(this.books[i])
              })
            }
            console.log('Wishlist books array')
              console.log(this.books)
          }); 
        }catch(e){
            console.log(e)
        }
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
            <div v-for="item in books" :key="item.id">
                     
                <div>
                <!-- <router-link to="/book" > -->
                    <WishBooks :bookName="item.name" :bookPrice="item.price" :bookImageURL="item.url" :bookYear="item.publicationYear" :bookGenre="item.bookGenre" :bookAuthor="item.author" :bookID="item.id" :id="id"/>
                <!-- </router-link> -->
               </div>
                                    
            </div>
        </div>


    </div>
    
        
</template>

<style>
</style>