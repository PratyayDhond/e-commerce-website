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
        // console.log("Inside Header")
        // console.log(this.userID)
    },
    methods: {
        routeToResult(){
            console.log('Routing to result')
        },
        toHome(){
            console.log('Inside to home');
            console.log(this.userID);
            this.$router.push({
            name:'LatestBooks',
            query: {
              id: this.userID
            }
          })
        }
    }
}
</script>

<template>
    <div class="pt-3 px-5 pb-8 flex items-center justify-between bg-white">
       
       <!-- <router-link to="/home"> -->
        <div class="" :onclick="toHome">
            <img class="h-14" src="../../assets/images/logo.png" alt="" >
        </div>
        <!-- </router-link> -->
        
      
        <div class="w-4/5">
            <SearchBar :userID="userID" />
        </div>
        <div class="">
            <NavBarComponents :userID="userID" />
        </div>
        
    </div>
</template>

<style>
</style>