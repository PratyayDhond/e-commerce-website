<template>
 
  <div class="mb-5">
          <div class="flex justify-between">
                <div class="pl-4 pt-3 flex">
                    <img class="h-52" :src="bookImageURL" alt="">
                    <div class="ml-5 mt-1">
                        <div class="font-medium text-lg">{{bookName}}</div>
                        <div class="font-normal text-sm text-gray-600">Author: {{bookAuthor}}</div>
                        <div class="font-normal text-sm text-gray-600">Genre: {{bookGenre}}</div>
                        <div class="font-normal text-sm text-gray-600">Publication Date: {{bookYear}}</div>
                    </div>
                </div>
                <div class="mr-20 flex flex-col justify-between items-end">
                    <div class="text-4xl font-bold text-gray-700 mr-5 mt-5">
                        ₹ {{bookPrice}}
                    </div>
                    <div class=" flex gap-5">
                        <div class="bg-secondary-1 px-3 py-1 text-white hover:bg-primary-1 hover:text-secondary-1 cursor-pointer" >Add to Cart</div>
                        <div class="bg-secondary-1 px-3 py-1 text-white hover:bg-primary-1 hover:text-secondary-1 cursor-pointer" >Remove from Wishlist</div>
                    </div>
                </div>
      </div>
  </div>
  <div class="bg-gray-300 w-full h-px ml-4"></div>
</template>

<script>
export default {
    props:["bookName","bookPrice","bookImageURL","bookYear","bookGenre","bookAuthor"]
}
</script>

<style>

</style>