<script>
import Header from '../../components/Header/Header.vue';
import Filter from '../../components/Filter/Filter.vue';
import LatestBooks from '../../components/HomePage/LatestBooks.vue';
import ResultBook from '../../components/Search/ResultBook.vue';
import BookCoverCat from '../../components/HomePage/BookCoverCat.vue';
import firebase from 'firebase/compat/app';
export default{
    data(){
        return{
            searchedBooks:[
                {
                    name:"A Thousand Splendid",
                    price:"1300",
                    url:"https://picsum.photos/200/300",
                    wish :"true",
                    theme : "Thriller"
                },
                {
                    name:"Ikigai",
                    price:"418",
                    url:"https://picsum.photos/200/300",
                    wish :"true",
                    theme : "Thriller"
                },
                {
                    name:"Atomic Habits",
                    price:"600",
                    url:"https://picsum.photos/200/300",
                    wish :"true",
                    theme : "Thriller"
                },
                {
                    name:"Atomic Habits",
                    price:"600",
                    url:"https://picsum.photos/200/300",
                    wish :"true",
                    heme : "Thriller"
                },
                {
                    name:"Atomic Habits",
                    price:"600",
                    url:"https://picsum.photos/200/300",
                    wish :"true",
                    bookTheme : "Thriller"
                },
            ],
            bookUrl: '',
            name: '',
            bookDescription: '',
            publicationYear: '',
            price: '',
            stockAvailability: '',
            noOfOrders: '',
            authorName: '',
            books: [],
            //BOOKMARK
            //change the below value and set it to dynamic user value
            userID: 'Tm1WrBkhejjCuNsejweU'
        }
    },
    async created() {
        console.log("Inside created of Home.vue")
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
            db.collection('books').get().then((querySnapshot) => {
                querySnapshot.forEach(doc =>{
                    // console.log(doc.id)
                    var obj = doc.data();
                    obj.id = doc.id;
                    this.books.push(obj);
                });
                // console.log(this.books);
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
    ResultBook,
    BookCoverCat
},
methods: {
    toFirebase(){

        const db = firebase.firestore(); 
        try{
            // Writing to firebase firestore
        //     db.collection('books').add({
        //         url: this.bookUrl,
        //         name: this.name,
        //         description: this.bookDescription,
        //         publicationYear: this.publicationYear,
        //         price: this.price,
        //         stock: this.stockAvailability,
        //         orderCount: this.noOfOrders,
        //         author: this.authorName,
        //     }).then((ref) => {
        //         console.log("Added book with ID: " + ref.id)
        //     }
        //     );
        db.collection ('books').get().then(r => {
           r.docs.map(doc => {
           console. log (doc.data());
           });
        });
        
        }
        catch(e){
            console.log(e)
        }
    },
  }
}
</script>

<template>


        <!-- Author name: <input type="text" v-model="authorName" > <br>
        book name: <input type="text" v-model="name"> <br>
        book url: <input type="text" v-model="bookUrl"> <br>
        Book description: <input type="text" v-model="bookDescription"> <br>
        price: <input type="number" v-model="price"> <br>
        publication year: <input type="number" v-model="publicationYear"> <br>
        stock availability: <input type="number" v-model="stockAvailability"> <br>
        number of orders: <input type="number" v-model="noOfOrders"> <br>
        <button @click="toFirebase">submit</button> -->

        

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
                    
                    <div v-for="item in books" :key="item.id">
                        <BookCoverCat :name="item.name" :price="item.price" :url="item.url" :bookTheme="item.bookTheme" :wish="item.wish" :id="item.id" />
                    </div>
                </div>
                </router-link>
                <div class="text-gray-500 text-sm mt-10">Romance</div>
                
                <div class="flex gap-16" @click="cursorpointer">
                     
                    <div v-for="item in books" :key="item.id">
                        <BookCoverCat :name="item.name" :price="item.price" :url="item.url" :bookTheme="item.bookTheme" :wish="item.wish" :description="item.description" :id="item.id"/>
                       
                    </div>
                    
                </div>
                


            </div>

        </div>
    </div>
    
        
</template>

<style>
.input{
    border:orange; border-width:5px; border-style:solid;
}
</style>

                    <!-- <ResultBook :name="item.name" :bookDate="item.bookDate" :bookLanguage="item.bookLanguage" :bookCover="item.bookCover" :price="item.price" :url="item.url"/> -->