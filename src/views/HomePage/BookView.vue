<script>
import Header from '../../components/Header/Header.vue';
import Filter from '../../components/Filter/Filter.vue';
// import BookTB from '../../components/BookView/BookTB.vue';
import BookTB from '../../components/BookView/BookTB.vue'
import History from '../../components/BookView/History.vue';
import BookDetails from '../../components/BookView/BookDetails.vue';
import Description from '../../components/BookView/Description.vue';
import firebase from 'firebase/compat/app';

export default{
    components:{
    Header,
    Filter,
    History,
    BookTB,
    BookDetails,
    Description,
},
created(){
        console.log('Books view')
        console.log(this.userID)
    },
data() {
    return {
        quantity: 1,
        id: this.$route.query.id,
        userID: this.$route.query.userID,
        name:'',
        author:'',
        url:'',
        description:'',
        publicationYear:0,
        stock: 0,
        price:0
    }
},
async created() {
        const db = firebase.firestore(); 
        // console.log(this.searchedBooks)
        console.log("BookView: Inside created() method")
        // try{
        // await db.collection ('books').get().then(r => {
        //    r.docs.map(doc => {
        //        console.log(doc.data())
        // //    this.books += doc.data();
        // // this.searchedBooks = doc.data()
        //    });
        // });

        try{
            db.collection('books').doc(this.id).get().then((querySnapshot) => {
                console.log(querySnapshot.data());  
                this.name = querySnapshot.data().name;
                this.author = querySnapshot.data().author;
                this.url = querySnapshot.data().url;
                this.description = querySnapshot.data().description;
                this.publicationYear = querySnapshot.data().publicationYear; 
                this.price = querySnapshot.data().price;
                this.stock = querySnapshot.data().stock;
            })
        }

        // for(let i = 0; i < this.books.length; i++)
            // console.log(this.books[i].name);
        catch(e){
            console.log(e)
        }
    },
methods: {
    inc(){
        this.quantity++;
    },
    dec(){
        this.quantity--;
    },
},
}
</script>

<template>
    <div class="">
        <!-- Header -->
       <Header :userID="userID" class="fixed z-10 w-full top-0" />
    </div>
    <div class="mt-24 absoulute ml-7">
        <!-- Header -->
        <div class="" />
    </div>
    
    <!-- Filter -->
        <!-- <div class="mt-24 absoulute ml-7">
            <div class="">
                <p>Home / Books</p>
                <div class="h-96 w-full">
                    <Filter />
                    
                </div>
            </div>
        </div> -->

        <div class="ml-10">
            <History />
            <div class="flex ">
                <BookTB :url="url"/> 
                <BookDetails  :name="name" :author="author" :description="description" :publicationYear="publicationYear" :price="price" :id="id" :userID="this.$route.query.userID" :stock="stock" />
            </div>
            <Description :description="description"/>
        </div>
        

</template>

<style>
</style>