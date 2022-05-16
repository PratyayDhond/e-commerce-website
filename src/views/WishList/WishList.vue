<script>
import Header from '../../components/Header/Header.vue';
import Filter from '../../components/Filter/Filter.vue';
import LatestBooks from '../../components/HomePage/LatestBooks.vue';
import ResultBook from '../../components/Search/ResultBook.vue';
import BookCoverCat from '../../components/HomePage/BookCoverCat.vue';
import Sidebar from '../../components/User/Sidebar.vue';
import OrderHistory from '../../components/User/OrderHistory.vue';
import OrderDetails from '../../components/User/OrderDetails.vue';
import WishBooks from '../../components/WishList/WishBooks.vue';
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
            ]
        }
    },
    components:{
    Header,
    Filter,
    LatestBooks,
    ResultBook,
    BookCoverCat,
    Sidebar,
    OrderHistory,
    OrderDetails,
    WishBooks
}
}
</script>

<template>
    <div class="relative" >
        <!-- Header -->
        <div class="">
            <Header class="fixed z-10 w-full top-0" />
        </div>
        
        <!-- WishList -->
        <div class="mt-24 mx-40">
            <div class="text-3xl font-semibold text-gray-700 mb-5">Your WishList</div>
            <div v-for="item in wishlistBooks" :key="item.id">
                     
                <div>
                <!-- <router-link to="/book" > -->
                    <WishBooks :bookName="item.bookName" :bookPrice="item.bookPrice" :bookImageURL="item.bookImageURL" :bookYear="item.bookYear" :bookGenre="item.bookGenre" :bookAuthor="item.bookAuthor"/>
                <!-- </router-link> -->
               </div>
                                    
            </div>
        </div>


    </div>
    
        
</template>

<style>
</style>