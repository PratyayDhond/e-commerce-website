<script>
import Header from '../../components/Header/Header.vue';
import Filter from '../../components/Filter/Filter.vue';
import LatestBooks from '../../components/HomePage/LatestBooks.vue';
import ResultBook from '../../components/Search/ResultBook.vue';
import BookCoverCat from '../../components/HomePage/BookCoverCat.vue';
import Sidebar from '../../components/User/OrderDetailsView/Sidebar.vue';
import OrderHistory from '../../components/User/OrderHistoryView/OrderHistory.vue';
import OrderDetails from '../../components/User/OrderDetailsView/OrderDetails.vue';
export default{
    data(){
        return{
            orderedDetails:[
                {   
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
                },
                {   
                    orderID:'46FA4F65A4F6A',
                    orderTrackingID : '6HDF45HD4655F2A',
                    bookName:"A Thousand Splendid Suns",
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
                },
                {   
                    orderID:'46FA4F65A4F6A',
                    orderTrackingID : '6HDF45HD4655F2A',
                    bookName:"A Thousand Splendid Suns",
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
                },
                {   
                    orderID:'46FA4F65A4F6A',
                    orderTrackingID : '6HDF45HD4655F2A',
                    bookName:"A Thousand Splendid Suns",
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
                },
                {   
                    orderID:'46FA4F65A4F6A',
                    orderTrackingID : '6HDF45HD4655F2A',
                    bookName:"A Thousand Splendid Suns",
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
                },
            ],
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
        <div class="absoulute">
            <div class="">              
                <div class="fixed w-full">
                    <Sidebar id="id"/>
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