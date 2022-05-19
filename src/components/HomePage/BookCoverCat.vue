<template>
    <div class="mt-5 cursor-pointer">
        <div class="w-40 bg-black bg-opacity-5">
            <img class="h-60 object-contain border-none rounded-md w-full" :src="url" alt="" draggable="false">
        </div>
        <div class="w-40 text-center text-sm mt-2 font-medium text-gray-600" >{{ name }}</div>
        <div class="w-40 text-center text-sm font-bold text-secondary-1" >₹ {{ price }}</div>
    </div>
</template>

<script>
export default {
     props:["name","price","url","wish","theme"]
}
</script>

<style>

</style>