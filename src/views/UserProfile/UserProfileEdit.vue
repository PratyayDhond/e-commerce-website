<script>
import Header from '../../components/Header/Header.vue';
import Filter from '../../components/Filter/Filter.vue';
import LatestBooks from '../../components/HomePage/LatestBooks.vue';
import Sidebar from '../../components/User/UserProfileView/Sidebar.vue';
import Profile from '../../components/User/UserProfileView/Profile.vue';
export default{
    components:{
    Header,
    Filter,
    LatestBooks,
    Sidebar,
    Profile
},
data(){
    return{
        id: this.$route.query.id
    }
}

}
</script>

<template>
    <div class="bg-LGB">
        <Header class="fixed w-full top-0" />
    <div class="flex">
                <div class="bg-LGB">
                    <Sidebar :id="id" />
    </div>
                    <Profile :id="id" class="flex bg-LGB"/>
                </div>
        <div>
            
        </div>
    </div>
        
</template>

<style>
</style>