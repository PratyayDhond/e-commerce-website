<script>
import Header from '../../components/Header/Header.vue';
import Filter from '../../components/Filter/Filter.vue';
import LatestBooks from '../../components/HomePage/LatestBooks.vue';
import Sidebar from '../../components/User/UserProfileEdit/Sidebar.vue';
import Profile from '../../components/User/UserProfileEdit/Profile.vue';
import firebase from 'firebase/compat/app';

export default{
    components:{
    Header,
    Filter,
    LatestBooks,
    Sidebar,
    Profile
},
props: ['id'],
data() {
    return {
        id: this.$route.query.id,
        user: [],
        load: false,
        name: '',
        email: '',
        number: '',
        zipcode: '',
        city: '',
        

    }   
  },
async created(){
      const db = firebase.firestore(); 
        console.log("Inside created() method of Wishlist")
        try{
        //   await db.collection('Users').doc(this.id).onSnapshot(doc => {
            //   this.user.push(doc.data())
        //   }).then
          await db.collection('Users').doc(this.id).get().then((r) => {
            console.log(r.data());
            this.user.push(r.data())
            this.load = true; 
          }); 
        }catch(e){
            console.log(e)
        }
            console.log(this.user)
    } 
}

</script>

<template>
    <div class="bg-white">
        <Header :userID="id" class="fixed z-10 w-full top-0" />
    <div class="flex">
                <div class="bg-white">
                    <Sidebar :id="id"/>
    </div>
                    <Profile :id="id" class="flex bg-white"/>
                </div>
        <div>
            
        </div>
    </div>
        
</template>

<style>
</style>