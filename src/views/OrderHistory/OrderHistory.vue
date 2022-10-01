<script>
import Header from '../../components/Header/Header.vue';
import Filter from '../../components/Filter/Filter.vue';
import LatestBooks from '../../components/HomePage/LatestBooks.vue';
import ResultBook from '../../components/Search/ResultBook.vue';
import BookCoverCat from '../../components/HomePage/BookCoverCat.vue';
import Sidebar from '../../components/User/OrderHistoryView/Sidebar.vue';
import OrderHistory from '../../components/User/OrderHistoryView/OrderHistory.vue';
import firebase from 'firebase/compat/app';

export default{
    data(){
        return{
            orderedHistory:[
                {   
                    orderID:'46FA4F65A4F6A',
                    bookName:"Gitanjali",
                    bookPrice:"1300",
                    bookImageURL:"https://picsum.photos/200/300",
                    orderDate:"2 April 2022",
                    shipTo: "Ajay sharma",
                    bookYear: "1910",
                    bookGenre: "Poem",
                    bookAuthor:"Rabindranath Tagore",
                    bookDelivered:"8 April 2022"
                },
                {   
                    orderID:'46FA4F65A4F6A',
                    bookName:"A Thousand Splendid Suns",
                    bookPrice:"1300",
                    bookImageURL:"https://picsum.photos/200/300",
                    orderDate:"2 April 2022",
                    shipTo: "Ajay sharma",
                    bookYear: "1910",
                    bookGenre: "Poem",
                    bookAuthor:"Rabindranath Tagore",
                    bookDelivered:"8 April 2022"
                },
            ],
            id: this.$route.query.id,
            orders: []
        }
    },
    async created(){
            this.orderedHistory = [];
            var name;
            await firebase.firestore().collection('Users').doc(this.id).get().then( snapshot => {
                this.orders = snapshot.data().orders;
                name = snapshot.data().name;    
            });
            console.log(this.orders);
            
            this.orders.forEach(async order => {
                var orderID = order;
                await firebase.firestore().collection('Orders').doc(order).get().then(r => {
                    if(r.data().orderCompleted === true){
                        var orderDate = this.calcTime(r.data().orderDate);
                        
                        var bookDelivered = this.calcTime(r.data().bookDelivered)
                        r.data().books.forEach(async book => {
                            var obj = new Object;
                            await firebase.firestore().collection('books').doc(book).get().then(r => {
                                console.log(r.data());
                                obj.bookName = r.data().name;
                                obj.bookPrice = r.data().price;
                                obj.bookYear = r.data().publicationYear;
                                obj.bookGenre = r.data().genre;
                                obj.bookAuthor = r.data().author;
                                obj.bookImageURL = r.data().url;
                            }).finally(() => {
                                obj.shipTo = name;
                                obj.orderID = orderID;
                                obj.orderDate = orderDate;
                                obj.bookDelivered = bookDelivered;
                                this.orderedHistory.push(obj);
                                console.log(this.orderedHistory);
                                obj = new Object;
                            })
                        })
                    }
                })
            })
            

            



            // const ordersRef = collection(db, 'Orders');
            // const q = query(ordersRef, where("orderCompleted","==", true))
            
            // const querySnapshot = await getDocs(q);
            // querySnapshot.forEach(doc => {
                // this.orders = doc.data();
            // })
            // console.log(this.orders)
    },
    methods: {
        calcTime(timestamp){
            timestamp = timestamp ?? 0;
            var seconds = timestamp.seconds;
            var time = new Date(seconds * 1000);
            var date = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
            var year = time.getFullYear();
            var month = time.getMonth() < 10 ? "0" + time.getMonth() : time.getMonth();
            return date + "-" + month + '-' + year;
        }
    },
    components:{
    Header,
    Filter,
    LatestBooks,
    ResultBook,
    BookCoverCat,
    Sidebar, 
    OrderHistory
    },
}
</script>

<template>
    <div class="relative" >
        <!-- Header -->
        <div class="">
            <Header :userID="id" class="fixed z-10 w-full top-0" />
        </div>
        
        <!-- Filter -->
        <div class="absoulute">
            <div class="">              
                <div class="fixed w-full">
                    <Sidebar />
                </div>
            </div>
        </div>

        <!-- Order History -->
        <div class="mt-20 absolute top-6 left-96">
            <div class="w-240">
                <div class="text-3xl font-bold text-gray-700">ORDER HISTORY</div>
                <div v-for="item in orderedHistory" :key="item.id">
                        <OrderHistory :orderID="item.orderID" :bookName="item.bookName" :bookPrice="item.bookPrice" :bookImageURL="item.bookImageURL" :orderDate="item.orderDate" :shipTo="item.shipTo" :bookYear="item.bookYear" :bookGenre="item.bookGenre" :bookAuthor="item.bookAuthor" :bookDelivered="item.bookDelivered" />
                    </div>
            </div>

        </div>

    </div>
    
        
</template>

<style>
</style>

                    <!-- <ResultBook :bookName="item.bookName" :bookDate="item.bookDate" :bookLanguage="item.bookLanguage" :bookCover="item.bookCover" :bookPrice="item.bookPrice" :bookImageURL="item.bookImageURL"/> -->