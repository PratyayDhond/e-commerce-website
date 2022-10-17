<script>
import SearchBar from '../Header/SearchBar.vue';
import NavBarComponents from '../Header/NavBarComponents.vue';

export default{
    props: ['userID'],
    components:{
        SearchBar,
        NavBarComponents
    },
    created(){
        console.log("Inside Header")
    },
    methods: {
        routeToResult(){
            console.log('Routing to result')
        }   
    }
}
</script>

<template>
    <div class="pt-3 px-5 pb-8 flex items-center justify-between bg-white">
       
        <router-link :to="{path:'/home', query: {id: this.userID}}">
        <div class="">
            <img class="h-14" src="../../assets/images/logo.png" alt="" >
        </div>
        </router-link>
        
      
        <div class="w-11/12">
            <SearchBar :userID="userID" />
        </div>

        <router-link :to="{name: 'userView', query: {id: userID}}">
            <div class="w-8">
                <img class="w-full" src="../../assets/images/userBlack.png" alt="">
            </div>
        </router-link>
        
    </div>
</template>

<style>
</style>