<script>

</script>

<template>
<div class="flex-column mt-4 w-80">
    <div class="bg-secondary-1  pt-5">
        <img class="rounded-full h-28 w-28" src="https://avatars.githubusercontent.com/u/66089621?v=4" alt="">
        <div class="text-center font-bold text-gray-50">Priyanshu Lapakle</div>
        <div class="text-center mb-10 font-light text-gray-50">lapakle0110@gmail.com</div>
    </div>
    <!-- <div class="bg-secondary-1">
        <div class="ml-16 w-72 h-10 bg-white rounded-lg">
            <div class="ml-12 font-medium text-gray-700 pt-1">User Details</div>
        </div>
    </div> -->
    <div class="bg-secondary-1 h-96 w-full ">
        <router-link to="/user">
        <div class="text-center py-3 font-medium text-gray-50">User Details</div>
        </router-link>

        
        <div class="text-center py-3 font-medium text-gray-50">Order Details</div>
        <router-link to="OrderHistory">
        <div class="text-center py-3 font-medium text-gray-50">Order History</div>
        </router-link>
        
    </div>
</div>
    
</template>

<style>

</style>