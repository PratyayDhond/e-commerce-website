<script>
 import firebase from 'firebase/compat/app';

export default{
    props: ['id'],
    data() {
        return {
            user: [],
            load: false
        }
    },
    async created(){
      const db = firebase.firestore(); 
        console.log("Inside created() method of userprofile-> sidebar")
        try{
        //   await db.collection('Users').doc(this.id).onSnapshot(doc => {
            //   this.user.push(doc.data())
        //   }).then
          await db.collection('Users').doc(this.id).get().then((r) => {
            console.log(r.data());
            // this.user.push(r.data())
            this.user = r.data();
            this.load = true; 
          }); 
        }catch(e){
            console.log(e)
        }
            console.log(this.user)
    }
}
</script>

<template>-
<div class="flex-column mt-20 w-80 h-130" v-if="load">
    <div class="rounded-br-lg rounded-tr-lg bg-secondary-1 h-60 pt-5">
        <!-- <div class="mx-24 mb-5">
            <img draggable="false" class="rounded-full h-28 w-28" :src="user.pfp" alt="">
        </div> -->
        <div class="text-center font-bold text-white" style="padding-top: 40%;">{{user.name}}</div>
        <div class="text-center mb-10 font-medium text-white">{{user.email}}</div>
    </div>
    <div class="bg-secondary-1">
        <div class="ml-16 w-80 h-10 rounded-lg bg-white">
            <div class="ml-10 pl-3 pt-1 font-medium text-gray-700 mb-1">User Details</div>
        </div>
    </div>
    <div class="bg-secondary-1 rounded-tr-lg h-[333px]">
        <!-- //#BOOKMARK -->
        <!-- <router-link to="/OrderDetails">    -->
            <router-link :to="{path: 'OrderDetails', query:{id: this.id}}">
            <div class="text-center py-3 cursor-pointer font-medium text-white">Order Details</div>
        </router-link>
        <router-link :to="{path: 'OrderHistory', query:{id: this.id}}">
            <div class="text-center py-3 cursor-pointer font-medium text-white">Order History</div>
        </router-link>
    </div>
</div>
</template>

<style>

</style>