<script>
import Header from '../../components/Header/Header.vue';
import Filter from '../../components/Filter/Filter.vue';
import LatestBooks from '../../components/HomePage/LatestBooks.vue';
import ResultBook from '../../components/Search/ResultBook.vue';
import BookCoverCat from '../../components/HomePage/BookCoverCat.vue';
export default{
    data(){
        return{
            searchedBooks:[
                {
                    bookName:"A Thousand Splendid",
                    bookPrice:"1300",
                    bookImageURL:"https://picsum.photos/200/300",
                    bookWish :"true",
                    theme : "Thriller"
                },
                {
                    bookName:"Ikigai",
                    bookPrice:"418",
                    bookImageURL:"https://picsum.photos/200/300",
                    bookWish :"true",
                    theme : "Thriller"
                },
                {
                    bookName:"Atomic Habits",
                    bookPrice:"600",
                    bookImageURL:"https://picsum.photos/200/300",
                    bookWish :"true",
                    theme : "Thriller"
                },
                {
                    bookName:"Atomic Habits",
                    bookPrice:"600",
                    bookImageURL:"https://picsum.photos/200/300",
                    bookWish :"true",
                    heme : "Thriller"
                },
                {
                    bookName:"Atomic Habits",
                    bookPrice:"600",
                    bookImageURL:"https://picsum.photos/200/300",
                    bookWish :"true",
                    bookTheme : "Thriller"
                },
            ]
        }
    },
    components:{
    Header,
    Filter,
    LatestBooks,
    ResultBook,
    BookCoverCat
}
}
</script>

<template>
    <div class="relative" >
        <!-- Header -->
        <div class="">
            <Header class="fixed z-10 w-full top-0" />
        </div>
        
        <!-- Filter -->
        <div class="mt-24 absoulute ml-7">
            <div class="">              
                <div class="fixed h-96 w-full">
                    <p>Home / Books</p>
                    <Filter />
                </div>
            </div>
        </div>

        <!-- Searched Books -->
        <div class="absolute top-6 left-96">
            <div class="w-240">
                <div class="">
                    <LatestBooks />
                </div>
                <div class="bg-secondary-1 w-full h-px-2 mt-5"></div>
                <div class="mr-5 mt-5 font-medium text-lg text-gray-700">Explore</div>
                <div class="text-gray-500 text-sm">Thriller</div>
                <router-link to="/book">
                <div class="flex gap-16">
                    
                    <div v-for="item in searchedBooks" :key="item.id">
                        <BookCoverCat :bookName="item.bookName" :bookPrice="item.bookPrice" :bookImageURL="item.bookImageURL" :bookTheme="item.bookTheme" :bookWish="item.bookWish" />
                    </div>
                </div>
                </router-link>
                <div class="text-gray-500 text-sm mt-10">Romance</div>
                <router-link to="/book">
                <div class="flex gap-16" @click="cursorpointer">
                     
                        <div v-for="item in searchedBooks" :key="item.id">
                        <BookCoverCat :bookName="item.bookName" :bookPrice="item.bookPrice" :bookImageURL="item.bookImageURL" :bookTheme="item.bookTheme" :bookWish="item.bookWish" />
                    </div>
                    
                </div>
                </router-link>


            </div>

        </div>
    </div>
    
        
</template>

<style>
</style>

                    <!-- <ResultBook :bookName="item.bookName" :bookDate="item.bookDate" :bookLanguage="item.bookLanguage" :bookCover="item.bookCover" :bookPrice="item.bookPrice" :bookImageURL="item.bookImageURL"/> -->