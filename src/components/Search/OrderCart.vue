<script>
export default{
    data(){
        return{
            total: 0,
            // Use book ID here
            // query: `{name: 'book', query:{id:this.bookID}}`
            query: '/book',
            quantity: parseInt(this.bookQuantity),
            price: parseInt(this.bookPrice),
            total: parseInt(this.bookPrice)*parseInt(this.bookQuantity),
        }
    },
    props:["bookName","bookAuthor","bookSubject","bookGenre","bookDate","bookImageURL", "bookPrice", "bookQuantity"],
    methods:
    {
        totalPrice()
        {
            this.total= this.price*this.quantity
        },
        increment(){
            this.quantity++;
            // console.log(this.quantity)
            this.totalPrice()
            this.$emit("calculate",this.price,1);
        },
        decrement(){
            if(this.quantity > 0){
            this.quantity--;
            // console.log(this.quantity)
            this.totalPrice()
            // console.log('before this.$emit')
            this.$emit("calculate",-this.price,-1)
            // console.log('after this.$emit')
            }
        }
    },
    mounted(){
            
    }

}
</script>

<template>
<div class="mt-4">
    <div class="w-6/6 border-2 h-40">
       <div class="flex">
           
         <div class=" flex w-1/6">
             <!-- <router-link :to="query"> -->
            <img class="h-36 object-fill border-none w-28" :src="bookImageURL" alt="">
            <!-- </router-link> -->
         </div>
      
        <div class=" w-2/6">
            <!-- <router-link :to="query"> -->
                <div class="mt-2 ml-2 font-bold text-gray-800 text-md cursor-pointer hover:text-secondary-1">{{ bookName }}</div> 
            <!-- </router-link>  -->
            <p class="mt-2 ml-2  text-black-400 text-sm cursor-pointer ">author: {{ bookAuthor }}</p> 
                  <p class="mt-2 ml-2  text-black-400 text-sm cursor-pointer ">subject: {{ bookSubject }}</p> 
                   <p class="mt-2 ml-2  text-black-400 text-sm cursor-pointer ">genre:{{ bookGenre }}</p> 
                    <p class="mt-2 ml-2  text-black-400 text-sm cursor-pointer ">publication date:{{ bookDate }}</p> 
            
        </div>
        <div class="mt-3 flex items-center">
       
       <div class="py-1 h-8 w-8 text-sm text-white rounded-sm bg-secondary-1 text-center cursor-pointer hover:bg-primary-1 hover:text-gray-800 font-medium" @click="decrement()">
                            -
                        </div>
                        <div class="py-1 h-8 w-20 border-2 text-sm text-center  font-medium">
                         {{quantity}}
                        </div>
                        <div class="py-1 h-8 w-8 text-sm text-white rounded-sm bg-secondary-1 text-center cursor-pointer hover:bg-primary-1 hover:text-gray-800 font-medium" @click="increment()">
                            +
                        </div>
                        <div class=" w-1/6 flex">
                            </div>
               
                 
        </div>
         <div class="mt-16 ml-8 font-bold text-gray-800 text-md  ">₹{{this.price}}</div> 
           <div class=" w-1/6 flex">
                <div class="mt-16 ml-32 font-bold text-gray-800 text-md  ">₹{{total}}</div> 
                 
        </div>
        
        </div>

 </div>
 
 </div>
 
</template>

<style>

</style>