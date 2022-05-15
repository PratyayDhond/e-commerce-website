<script>
import Header from '../../components/Header/Header.vue';
import Filter from '../../components/Filter/Filter.vue';
import LatestBooks from '../../components/HomePage/LatestBooks.vue';
import ResultBook from '../../components/Search/ResultBook.vue';
export default{
    data(){
        return{
            searchedBooks:[
                {
                    bookName:"A Thousand Splendid Suns - Khaled Hosseini",
                    bookDate:"May 22, 2007",
                    bookLanguage:"English",
                    bookCover:"Hardcover",
                    bookPrice:"1300",
                    bookImageURL:"https://picsum.photos/200/300"
                },
                {
                    bookName:"Ikigai - Francesc Miralles",
                    bookDate:"September 22, 2017",
                    bookLanguage:"English",
                    bookCover:"Hardcover",
                    bookPrice:"418",
                    bookImageURL:"../../assets/images/athousandsplendidsunscover.jpg"
                },
                {
                    bookName:"Atomic Habits - James Clear",
                    bookDate:"May 30, 2018",
                    bookLanguage:"English",
                    bookCover:"Paperback",
                    bookPrice:"600",
                    bookImageURL:"../../assets/images/athousandsplendidsunscover.jpg"
                },
                {
                    bookName:"A Thousand Splendid Suns - Khaled Hosseini",
                    bookDate:"May 22, 2007",
                    bookLanguage:"English",
                    bookCover:"Hardcover",
                    bookPrice:"1300",
                    bookImageURL:"../../assets/images/athousandsplendidsunscover.jpg"
                },
                {
                    bookName:"Ikigai - Francesc Miralles",
                    bookDate:"September 22, 2017",
                    bookLanguage:"English",
                    bookCover:"Hardcover",
                    bookPrice:"418",
                    bookImageURL:"../../assets/images/athousandsplendidsunscover.jpg"
                },
                {
                    bookName:"Atomic Habits - James Clear",
                    bookDate:"May 30, 2018",
                    bookLanguage:"English",
                    bookCover:"Paperback",
                    bookPrice:"600",
                    bookImageURL:"../../assets/images/athousandsplendidsunscover.jpg"
                },
                {
                    bookName:"A Thousand Splendid Suns - Khaled Hosseini",
                    bookDate:"May 22, 2007",
                    bookLanguage:"English",
                    bookCover:"Hardcover",
                    bookPrice:"1300",
                    bookImageURL:"../../assets/images/athousandsplendidsunscover.jpg"
                },
                {
                    bookName:"Ikigai - Francesc Miralles",
                    bookDate:"September 22, 2017",
                    bookLanguage:"English",
                    bookCover:"Hardcover",
                    bookPrice:"418",
                    bookImageURL:"../../assets/images/athousandsplendidsunscover.jpg"
                },
                {
                    bookName:"Atomic Habits - James Clear",
                    bookDate:"May 30, 2018",
                    bookLanguage:"English",
                    bookCover:"Paperback",
                    bookPrice:"600",
                    bookImageURL:"../../assets/images/athousandsplendidsunscover.jpg"
                }
            ]
        }
    },
    components:{
    Header,
    Filter,
    LatestBooks,
    ResultBook
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

        <div class="absolute top-10 left-96">
            <div class="flex items-baseline">
                <div class="mr-5 font-medium text-lg text-gray-800">Results for</div>
                <div class="text-gray-">"Self Development"</div>
            </div>
            
            <div class="w-240" >
                <div v-for="item in searchedBooks" :key="item.id">
                    <ResultBook :bookName="item.bookName" :bookDate="item.bookDate" :bookLanguage="item.bookLanguage" :bookCover="item.bookCover" :bookPrice="item.bookPrice" :bookImageURL="item.bookImageURL" />
            </div>
            </div>
            
        </div>
        

        
    </div>
    
        
</template>

<style>
</style>