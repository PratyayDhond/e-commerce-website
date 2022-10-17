<script>
import AdHeader from "../../components/Admin/AdHeader.vue";
export default{
    components:{
        AdHeader
    },
    data(){
            return {
                userID : this.$route.query.userID        
            };
    }
} 


</script>

<template >
    
    <div class="">
        <AdHeader :userID="userID" class="fixed z-10 w-full top-0" />
    </div>
    
    <div>
        <br> <br> <br> <br> <br> <br>
        {{this.userID}}
    </div>
    
</template>

<style>

</style>