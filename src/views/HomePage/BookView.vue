<script>
import Header from '../../components/Header/Header.vue';
import Filter from '../../components/Filter/Filter.vue';
// import BookTB from '../../components/BookView/BookTB.vue';
import BookTB from '../../components/BookView/BookTB.vue'
import History from '../../components/BookView/History.vue';
import BookDetails from '../../components/BookView/BookDetails.vue';
import Description from '../../components/BookView/Description.vue';
export default{
    components:{
    Header,
    Filter,
    History,
    BookTB,
    BookDetails,
    Description,
},
data() {
    return {
        quantity: 1,
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
        <Header class="fixed w-full top-0" />
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
                <BookTB/> 
                <BookDetails/>
            </div>
            <Description/>
        </div>
        

</template>

<style>
</style>