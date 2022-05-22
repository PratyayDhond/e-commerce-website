<script>
import Header from '../../components/Header/Header.vue';
import Filter from '../../components/Filter/Filter.vue';
import LatestBooks from '../../components/HomePage/LatestBooks.vue';
import ResultBook from '../../components/Search/ResultBook.vue';
import firebase from 'firebase/compat/app';
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
            ],
            books: [],
            filteredBooks:[],
            search: this.$route.query.search,
            userID: this.$route.query.userID
        }
    },
    created(){
        console.log('search = ' + this.search)
        console.log(typeof(this.search))
        let str = ''
        str = this.search
        console.log("Inside created of searchResult.vue")
        const db = firebase.firestore(); 
        try{
            db.collection('books').get().then((querySnapshot) => {
                querySnapshot.forEach(doc =>{
                    // console.log(doc.id)
                    var obj = doc.data();
                    obj.id = doc.id;
                    this.books.push(obj);
                });
                
                this.books.forEach(
                    function(item){
                        if(item.name.includes(str))
                            console.log(item)
                    }
                )

                // for(let item in this.books){
                //     if(item.name.includes(search.trim()))
                //         console.log(item)
                // }
                console.log(this.books);
            })
        }

        // for(let i = 0; i < this.books.length; i++)
            // console.log(this.books[i].name);
        catch(e){
            // console.log(e)
        }
    },
    components:{
    Header,
    Filter,
    LatestBooks,
    ResultBook
},
methods:{
    submit(){
        this.$route.go();
    }
}
}
</script>

<template>
    <div class="relative" >
        <!-- Header -->
        <div class="">
            <Header :userID="userID" class="fixed z-10 w-full top-0" />
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
                <div class="text-gray-">"{{search}}"</div>
            </div>
            
            <div class="w-240" >
                <div v-for="item in books" :key="item.id">
                    <ResultBook  :bookName="item.name" :bookDate="item.publicationYear" bookLanguage="English" bookCover="hardcover" :bookPrice="item.price" :bookImageURL="item.url" :id="item.id"  :userID="userID"/>
            </div>
            </div>
            
        </div>
        

        
    </div>
    
        
</template>

<style>
</style>