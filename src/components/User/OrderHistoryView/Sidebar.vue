<script>

</script>

<template>-
<div class="flex-column mt-20 w-80 h-130">
    <div class="rounded-br-lg rounded-tr-lg bg-secondary-1 h-80 pt-5">
        <div class="mx-24 mb-5">
            <img draggable="false" class="rounded-full h-28 w-28" src="https://i.pinimg.com/564x/50/9f/58/509f58dfb7e4b4e5191811df105401d5.jpg" alt="">
        </div>
        <div class="text-center font-bold text-white">Harsh Naidu</div>
        <div class="text-center mb-10 font-medium text-white">naiduharsh45@gmail.com</div>
        <router-link to="/User"> 
            <div class="text-center pt-1 font-medium text-white mb-1">User Details</div>
        </router-link>
        <router-link to="/OrderDetails">   
                <div class="text-center py-3 cursor-pointer font-medium text-white">Order Details</div>
        </router-link>
    </div>
    <div class="bg-secondary-1 rounded-tr-lg">
        <div class="ml-16 w-80 h-10 bg-LGB rounded-lg bg-white">
                <div class="text-left pl-12 pt-2 py-3 font-medium text-gray-700">Order History</div>
        </div>
    </div>
    <div class="bg-secondary-1 h-[253px] rounded-tr-lg"></div>
</div>
</template>

<style>

</style>