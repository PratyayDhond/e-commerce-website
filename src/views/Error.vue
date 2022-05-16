<script>
import Header from '../components/Header/Header.vue';
import Error from '../components/Error.vue';
export default{
    components:{
    Header,
    Error
}
}
</script>

<template>
    <div class="">
        <!-- Header -->
        <!-- <Header class="fixed w-full top-0" /> -->
        <div class="pt-3 px-5 pb-8 flex items-center justify-between bg-white">
       
       <router-link to="/home">
        <div class="">
            <img class="h-24" src="../assets/images/logo.png" alt="" >
        </div>
        </router-link>
        </div>
        <Error/>
    </div>
</template>

<style>
</style>