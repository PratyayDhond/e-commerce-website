<script>
import Header from '../../components/Header/Header.vue';
import Filter from '../../components/Filter/Filter.vue';
import LatestBooks from '../../components/HomePage/LatestBooks.vue';
import Sidebar from '../../components/User/UserProfileEdit/Sidebar.vue';
import Profile from '../../components/User/UserProfileEdit/Profile.vue';
export default{
    components:{
    Header,
    Filter,
    LatestBooks,
    Sidebar,
    Profile
}
}
</script>

<template>
    <div class="bg-white">
        <Header class="fixed w-full top-0" />
    <div class="flex">
                <div class="bg-white">
                    <Sidebar />
    </div>
                    <Profile class="flex bg-white"/>
                </div>
        <div>
            
        </div>
    </div>
        
</template>

<style>
</style>