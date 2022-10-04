<!--  
    orderID:'46FA4F65A4F6A',
    orderTrackingID : '6HDF45HD4655F2A',
    bookName:"Gitanjali",
    bookPrice:"1300",
    bookImageURL:"https://picsum.photos/200/300",
    orderDate:"2 April 2022",
    shipTo: "Ajay sharma",
    bookYear: "1910",
    bookGenre: "Poem",
    bookAuthor:"Rabindranath Tagore",
    bookDelivery:"8 April 2022",
    addressline1:"56, Kshitija Apartments",
    addressline2:"B4 Wings, Civil Lines",
    city:"Nagpur",
    landmark:"Near Centeer Point",
    state:"Maharashtra",
    pincode:"424075"
 -->

<script>
import Header from '../../components/Header/Header.vue';
import Filter from '../../components/Filter/Filter.vue';
import LatestBooks from '../../components/HomePage/LatestBooks.vue';
import ResultBook from '../../components/Search/ResultBook.vue';
import BookCoverCat from '../../components/HomePage/BookCoverCat.vue';
import Sidebar from '../../components/User/OrderDetailsView/Sidebar.vue';
import OrderHistory from '../../components/User/OrderHistoryView/OrderHistory.vue';
import OrderDetails from '../../components/User/OrderDetailsView/OrderDetails.vue';
import firebase from 'firebase/compat/app'; 
export default{
    data(){
        return{
            orderedDetails: [],
            orderDetailsArray: [],
            tempArr: [],
            id: this.$route.query.id
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
    OrderDetails
    },
    // async created(){
    //     var orders;
    //     var shipTo;
    //     var shipTo;
    //     var addressline1;
    //     var addressline2;
    //     var city;
    //     var landmark;
    //     var state;
    //     var pincode;
    //     await firebase.firestore().collection("Users").doc(this.id).get().then((snapshot) => {
    //         orders = snapshot.data().orders;
    //         shipTo = snapshot.data().name;
    //         addressline1 = snapshot.data().addrLine1;
    //         addressline2 = snapshot.data().addrLine2;  
    //         city = snapshot.data().city;
    //         landmark = snapshot.data().landmark;
    //         state = snapshot.data().state;
    //         pincode = snapshot.data().zipcode;
    //     }) 

    //     console.log(orders);

    //     // orders.forEach(async order => {
    //         await firebase.firestore().collection("Orders").where(orders, "contains", "id").orderBy("expectedDate", "desc").get().then(snapshots => {
    //             console.log(snapshots);
    //         })
            
    //     // });

    // }
    async created(){
        let obj = new Object;
        let bookObj = new Object;
        var orders = [];
        await firebase.firestore().collection("Users").doc(this.id).get().then((snapshot) => {
            orders = snapshot.data().orders;
            obj['shipTo'] = snapshot.data().name;
            obj['addressline1'] = snapshot.data().addrLine1;
            obj['addressline2'] = snapshot.data().addrLine2;  
            obj['city'] = snapshot.data().city;
            obj['landmark'] = snapshot.data().landmark;
            obj['state'] = snapshot.data().state;
            obj['pincode'] = snapshot.data().zipcode;

            // console.log(orders)
        })  

        orders.forEach(async order =>  {
            var orderID = order;
            await firebase.firestore().collection("Orders").doc(order).get().then(snapshot => {
                //  console.log(snapshot.data())  

                 var orderDate = snapshot.data().orderDate;
                 var time = new Date(snapshot.data().expectedDate);
                //  var time = new Date(timestamp.seconds * 1000);
                 var month = time.getMonth()+1 < 10 ? "0" + time.getMonth()+1 : time.getMonth()+1;
                 var date = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
                 var year = time.getFullYear();
                 obj['bookDelivery'] = date + "-" + month + "-" + year;  
                 obj['orderCompleted'] = snapshot.data().orderCompleted;
                 snapshot.data().books.forEach(async book => {
                    await firebase.firestore().collection('books').doc(book).get().then(snapshot => {
                        bookObj['bookName'] = snapshot.data().name;
                        bookObj['bookPrice'] = snapshot.data().price;
                        bookObj['bookImageURL'] = snapshot.data().url;
                        bookObj['bookYear']= snapshot.data().publicationYear;
                        bookObj['bookGenre'] = snapshot.data().genre || "";
                        bookObj['bookAuthor'] = snapshot.data().author || "";
                    }).finally(() => {
                        bookObj.shipTo = obj.shipTo;
                        bookObj.addressline1 = obj.addressline1 
                        bookObj.addressline2 = obj.addressline2 
                        bookObj.city = obj.city 
                        bookObj.state = obj.state 
                        bookObj.orderID = orderID 
                        bookObj.pincode = obj.pincode
                        bookObj.orderDate = obj.orderDate
                        bookObj.bookDelivery = obj.bookDelivery
                        this.orderedDetails.unshift(bookObj);
                    })
                    bookObj = new Object;
                 })             
            })
        });
    },
    methods: {
    }

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
                <div class="text-3xl font-bold text-gray-700">ORDER DETAILS</div>
                <div class="flex mt-2 justify-between px-4 pb-4">
                    <div class="w-80 flex">
                        <div class="mr-8">
                            <div class="bg-primary-1 px-2 rounded-sm w-20 text-center" >Product</div>
                        </div>
                        <div>
                            <div class="bg-primary-1 px-2 rounded-sm w-20 text-center" >Details</div>
                        </div>
                    </div>
                    <div class="w-15">
                        <div class="bg-primary-1 px-2 rounded-sm w-20 text-center -ml-5" >Price</div>
                    </div>
                    <div class="w-64">
                        <div class="bg-primary-1 px-2 rounded-sm w-20 text-center" >Delivery</div>
                    </div>
                    
                    
                    
                </div>
                <div v-for="item in orderedDetails" :key="item.id">
                    <OrderDetails :orderID="item.orderID" :bookName="item.bookName" :bookPrice="item.bookPrice" :bookImageURL="item.bookImageURL" :orderDate="item.orderDate" :shipTo="item.shipTo" :bookYear="item.bookYear" :bookGenre="item.bookGenre" :bookAuthor="item.bookAuthor" :bookDelivery="item.bookDelivery" :addressline1="item.addressline1" :addressline2="item.addressline2" :city="item.city" :landmark="item.landmark" :state="item.state" :pincode="item.pincode" />
                    </div>
            </div>

        </div>

    </div>
    
        
</template>

<style>
</style>

                    <!-- <ResultBook :bookName="item.bookName" :bookDate="item.bookDate" :bookLanguage="item.bookLanguage" :bookCover="item.bookCover" :bookPrice="item.bookPrice" :bookImageURL="item.bookImageURL"/> -->