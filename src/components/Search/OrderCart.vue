<script>
export default{
    data(){
        return{
            total: 0
        }
    },
    props:["bookName","bookAuthor","bookSubject","bookGenre","bookDate","bookImageURL", "bookPrice", "bookQuantity"],
    methods:
    {
        totalPrice()
        {
            total= this.bookPrice*this.bookQuantity
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
            <img class="h-36 object-fill border-none w-28" :src="bookImageURL" alt="">
       </div>
        <div class=" w-2/6">
                <div class="mt-2 ml-2 font-bold text-gray-800 text-md cursor-pointer hover:text-secondary-1">{{ bookName }}</div> 
                 <p class="mt-2 ml-2  text-black-400 text-sm cursor-pointer ">author: {{ bookAuthor }}</p> 
                  <p class="mt-2 ml-2  text-black-400 text-sm cursor-pointer ">subject: {{ bookSubject }}</p> 
                   <p class="mt-2 ml-2  text-black-400 text-sm cursor-pointer ">genre:{{ bookGenre }}</p> 
                    <p class="mt-2 ml-2  text-black-400 text-sm cursor-pointer ">publication date:{{ bookDate }}</p> 

        </div>
        <div class="mt-3 flex items-center">
       <div class="py-1 h-8 w-8 text-sm text-white rounded-sm bg-secondary-1 text-center cursor-pointer hover:bg-primary-1 hover:text-gray-800 font-medium">
                            +
                        </div>
                        <div class="py-1 h-8 w-20 border-2 text-sm text-center  font-medium">
                         {{bookQuantity}}
                        </div>
                        <div class="py-1 h-8 w-8 text-sm text-white rounded-sm bg-secondary-1 text-center cursor-pointer hover:bg-primary-1 hover:text-gray-800 font-medium">
                            -
                        </div>
                        <div class=" w-1/6 flex">
                            </div>
               
                 
        </div>
         <div class="mt-16 ml-8 font-bold text-gray-800 text-md  ">₹{{bookPrice}}</div> 
           <div class=" w-1/6 flex">
                <div class="mt-16 ml-32 font-bold text-gray-800 text-md  ">₹{{parseInt(bookPrice)*parseInt(bookQuantity)}}</div> 
                 
        </div>
        
        </div>

 </div>
 
 </div>
 
</template>

<style>

</style>