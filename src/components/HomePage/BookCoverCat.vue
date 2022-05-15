<template>
    <div class="mt-5 cursor-pointer">
        <div class="w-40 bg-black bg-opacity-5">
            <img class="h-60 object-contain border-none rounded-md w-full" :src="bookImageURL" alt="" draggable="false">
        </div>
        <div class="w-40 text-center text-sm mt-2 font-medium text-gray-600" >{{ bookName }}</div>
        <div class="w-40 text-center text-sm font-bold text-secondary-1" >₹ {{ bookPrice }}</div>
    </div>
</template>

<script>
export default {
     props:["bookName","bookPrice","bookImageURL","bookWish","bookTheme"]
}
</script>

<style>

</style>