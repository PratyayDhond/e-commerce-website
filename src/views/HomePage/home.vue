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
            bookUrl: '',
            name: '',
            bookDescription: '',
            publicationYear: '',
            price: '',
            stockAvailability: '',
            noOfOrders: '',
            authorName: '',
            books: [],
            romance: [],
            filteredBooks: [],
            userID: this.$route.query.id,
            filters: [],
            minPrice: Number.MIN_SAFE_INTEGER,
            maxPrice: Number.MAX_SAFE_INTEGER,
            languageSpecified: false,
            bodyPartSpecified: false,
        }
    },
    async created() {
       
       {
 /*
                {part:"Legs"},
                {part:"Shoulders"},
                {part:"Hands"},
                {part:"Neck"},
                {part:"Head"},
                {part:"Joints"},
                {part:"Back"},
                {lang:"English"},
                {lang:"Hindi"},
                {lang:"Marathi"},
                {lang:"Sanskrit"},
                {genre:"Thriller"},
                {genre:"Romance"},
                {genre:"Fantasy"}
        */
    //     var bodypartTags = []
    //    var languageTags = []
    //    bodypartTags.push("Neck")
    //    bodypartTags.push("Legs")
    //    bodypartTags.push("Shoulders")
    //    bodypartTags.push("Hands")
    //    bodypartTags.push("Head")
    //    bodypartTags.push("Joints")
    //    bodypartTags.push("Back")

    // languageTags.push("English")
    // languageTags.push("Hindi")
    // languageTags.push("Marathi")
    // languageTags.push("Sanskrit")
       
        // firebase.firestore().collection("books").doc("zxfvPSaCBsxc4Rm5Uosd").update({bodypartTags:bodypartTags, languageTags:languageTags});

        }
            //    console.log("Inside created of Home.vue")
        const db = firebase.firestore(); 

        try{
            db.collection('books').get().then((querySnapshot) => {
                querySnapshot.forEach(doc =>{
                    // console.log(doc.id)
                    var obj = doc.data();
                    obj.id = doc.id;
                    this.books.push(obj);
                    // console.log(doc.data().bodypartTags)
                });
                // console.log(this.books);

                var count = 0;
                var i = 0
                while(count < 5 && i < this.books.length){
                    if(this.books[i].genre === "romance"){
                        this.romance.push(this.books[i])
                        count++
                    }
                    i++
                }

                this.updateArray();
                // count = 0;
                // i = 0;
                // while(count < 5 && i < this.books.length){
                //     if(this.books[i].genre === "filteredBooks"){
                //         this.filteredBooks.push(this.books[i])
                //         count++
                //     }
                //     i++
                // }


                // console.log(this.romance)
                // console.log(this.filteredBooks)
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
    addPricingFilter(min,max){
        this.minPrice = min;
        this.maxPrice = max;
        // console.log(this.min);
        // console.log(this.max);
        this.updateArrayAccordingToPricing();
    },
    addFilter(value){
        if(this.filters.includes(value))
            this.removeFilter(value);
        else
            this.filters.push(value);
        // console.log(this.filters)
        this.updateArray();
    },
    removeFilter(value){
        var temp = [];
        this.filters.forEach(item => {
            if(item !== value)
                temp.push(item);
        })
        this.filters = temp;
    }, 
    updateArray(){
        this.languageSpecified = false;
        this.bodyPartSpecified = false;
        this.filteredBooks = this.books;
        if(this.filters.includes("English") || this.filters.includes("Hindi") || this.filters.includes("Marathi") || this.filters.includes("Sanskrit"))
            this.languageSpecified = true;
        if(this.filters.includes("Legs") || this.filters.includes("Shoulders") || this.filters.includes("Hands") || this.filters.includes("Neck") || this.filters.includes("Head") || this.filters.includes("Joints") || this.filters.includes("Back"))
            this.bodyPartSpecified = true;

        if(this.languageSpecified){
            var tempBooks = new Set();
            this.filters.forEach(filter => {
                this.books.forEach(book => {
                    // console.log(book.languageTags + " " + filter);
                    if(book.languageTags.includes(filter)){
                        // console.log("Inside if");
                        tempBooks.add(book);
                    }
                })
            })
            this.filteredBooks = [];
            // console.log("Consoling tempbooks and filteredBooks")
            // console.log(this.books)
            // console.log(tempBooks)
            tempBooks.forEach(book => {
                this.filteredBooks.push(book);
            })
            // console.log(this.filteredBooks);

        }

        if(this.bodyPartSpecified){
                var tempBooks = new Set();
                this.filters.forEach(filter => {
                this.filteredBooks.forEach(book => {
                    if(book.bodypartTags.includes(filter)){
                        tempBooks.add(book);
                    }
                })
            })

            this.filteredBooks = [];
            tempBooks.forEach(book => {
                this.filteredBooks.push(book);
                })
            // console.log(this.filteredBooks)
        }
        // console.log("this.languageSpecified")
        // console.log(this.languageSpecified)
        // console.log("this.bodyPartSpecified")
        // console.log(this.bodyPartSpecified)
        if(!this.languageSpecified && !this.bodyPartSpecified){

                var temp = new Set();
                while(temp.size < 5){
                    var index = parseInt(Math.random()*1000) % this.books.length;
                    temp.add(this.books[index]);
                }
                this.filteredBooks = [];
                temp.forEach(book => {
                    this.filteredBooks.push(book);
                })
            // }
        }
        
        // console.log(this.filteredBooks);
},
    updateArrayAccordingToPricing(){
        var temp = this.filteredBooks;
        console.log(this.minPrice)
        console.log(this.maxPrice)
        
        if(this.maxPrice === Number.MAX_SAFE_INTEGER){
            this.updateArray();
        }else{
            if(!this.bodyPartSpecified && !this.languageSpecified)
                temp = this.books;
                console.log(temp)
                var tempFilteredArray = [];
                temp.forEach(book => {
                    if(book.price >= this.minPrice && book.price <= this.maxPrice)
                        tempFilteredArray.push(book)
                });
            this.filteredBooks = tempFilteredArray;
        }

        
        
    }

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
                    <Filter @addFilterToHome="addFilter" @addPricingFilter="addPricingFilter"/>
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
                <div class="text-gray-500 text-sm">Filtered Books</div>
                <router-link to="/book">
                <div class="flex gap-16 ">
                    
                    <div v-for="item in filteredBooks" :key="item.id">
                        <BookCoverCat :userID="userID" :name="item.name" :price="item.price" :url="item.url" :bookTheme="item.bookTheme" :wish="item.wish" :id="item.id" />
                    </div>
                </div>
                </router-link>
                <div class="text-gray-500 text-sm mt-10">Romance</div>
                
                <div class="flex gap-16" @click="cursorpointer">
                     
                    <div v-for="item in romance" :key="item.id">
                        <BookCoverCat :userID="userID" :name="item.name" :price="item.price" :url="item.url" :bookTheme="item.bookTheme" :wish="item.wish" :description="item.description" :id="item.id"/>
                       
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