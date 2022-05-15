<script setup>
</script>

<template>
    <div class="flex gap-8">
        <router-link to="/cart">
        <div class="w-8" @click="true">
            <img class="w-full" src="../../assets/images/cartBlack.png" alt="">
        </div>
        </router-link>

        <router-link to="/WishList">
        <div class="w-8">
            <img class="w-full" src="../../assets/images/heartBlack.png" alt="">
        </div>
        </router-link>

        <router-link to="/user">
        <div class="w-8">
            <img class="w-full" src="../../assets/images/userBlack.png" alt="">
        </div>
        </router-link>
    </div>
</template>

<style>
</style>