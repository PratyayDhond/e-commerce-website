<script>
export default{
    props:["bookName","bookDate","bookLanguage","bookCover","bookPrice","bookImageURL","id","userID"],
    methods:{
        addToCart(){
            alert('Add to cart called')
        },
        addToWishlist(){
            console.log('Add to wishlist')
        }
    },
}
</script>

<template>

    <div class="flex flex-row mt-7 border-" @click="handler">
        <div class="w-60 bg-black bg-opacity-5 border-">
            <router-link :to="{
             path: '/book',
             query: {
              id:this.id,
              userID: this.userID
                 }
              }"> 
            <img class="h-60 object-contain border-none w-full" :src="bookImageURL" alt="">
            </router-link> 
        </div>
        <div class="border-2 border-opacity-5 border-black w-full">
            <div class="flex flex-col items-start ml-10">
               <router-link :to="{
             path: '/book',
             query: {
              id:this.id,
              userID: this.userID
                 }
              }"> 
               <div class="mt-7 font-bold text-gray-700 text-lg cursor-pointer hover:text-secondary-1">{{ bookName }}</div>
                </router-link>
                <div class="text-gray-500">{{ bookDate }}</div>
                <div class="text-gray-500">{{ bookLanguage }}</div>
                <div class="text-gray-500">{{ bookCover }}</div>
                <div class="flex flex-row justify-between w-full mt-14 pr-10 item-center">
                    <div class=" font-bold text-gray-700 text-xl">₹ {{bookPrice}}</div>
                    <div class="flex items-center">
                        <div class="py-2 w-32 text-sm text-white rounded-sm bg-secondary-1 text-center cursor-pointer hover:bg-primary-1 hover:text-gray-800 font-medium" @click="addToWishlist">
                            Add to Wishlist
                        </div> 
                        <div class="ml-5 py-2 w-32 text-sm text-white rounded-sm bg-secondary-1 text-center cursor-pointer hover:bg-primary-1 hover:text-gray-800 font-medium" @click="addToCart">
                            Add to Cart
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

    </div>

</template>

<style>

</style>