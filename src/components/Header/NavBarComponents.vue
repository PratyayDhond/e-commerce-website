<script>
export default{
    props: ['userID'],
    created(){
        console.log('Inside NavBarComponents')
        // console.log(userID)
    }
   
}
</script>

<template>
    <div class="flex gap-8">
        <router-link :to="{name: 'cart', query: {id: userID}}">
        <div class="w-8" @click="true">
            <img class="w-full" src="../../assets/images/cartBlack.png" alt="">
        </div>
        </router-link>

        <router-link :to="{name: 'wishList', query: {id: userID}}">
        <div class="w-8">
            <img class="w-full" src="../../assets/images/heartBlack.png" alt="">
        </div>
        </router-link>

        <router-link :to="{name: 'userView', query: {id: userID}}">
        <div class="w-8">
            <img class="w-full" src="../../assets/images/userBlack.png" alt="">
        </div>
        </router-link>
    </div>
</template>

<style>
</style>