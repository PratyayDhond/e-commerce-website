<script>
import SearchBar from './SearchBar.vue';
import NavBarComponents from './NavBarComponents.vue';

export default{
    props: ['userID'],
    components:{
        SearchBar,
        NavBarComponents
    },
    created(){
        console.log("Inside Header")
        // console.log(this.userID)
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
       
       <router-link to="/home">
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