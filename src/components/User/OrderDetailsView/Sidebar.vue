<script>
    import firebase from 'firebase/compat/app';

export default{
    // props: ['id'],
    data() {
        return {
            user: [],
            load: false,
            id: this.$route.query.id
        }
    },
    async created(){
      const db = firebase.firestore(); 
        // console.log("Inside created() method of userprofile-> sidebar")
        try{
        //   await db.collection('Users').doc(this.id).onSnapshot(doc => {
            //   this.user.push(doc.data())
        //   }).then
          await db.collection('Users').doc(this.id).get().then((r) => {
            // console.log(r.data());
            // this.user.push(r.data())
            this.user = r.data();
            this.load = true; 
          }); 
        }catch(e){
            console.log(e)
        }
            // console.log(this.user)
    }
}
</script>

<template>-
<div class="flex-column mt-20 w-80 h-130" v-if="load">
    <div class="rounded-br-lg rounded-tr-lg bg-secondary-1 h-72 pt-5">
        <!-- REMOVED PFP from here -->
        <!-- <div class="mx-24 mb-5">
            <img draggable="false" class="rounded-full h-28 w-28" :src="user.pfp" alt="">
        </div> -->
        <div class="text-center font-bold text-white" style="padding-top: 40%;">{{user.name}}</div>
        <div class="text-center mb-10 font-medium text-white">{{user.email}}</div>
        <div class="bg-secondary-1">
            <!-- <router-link to="/User"> -->
            <router-link :to="{path:'/User', query:{id:this.id}}">
                <div class="pt-1 font-medium text-center text-white mb-1">User Details</div>
            </router-link>
        </div>
    </div>
    <div class="bg-secondary-1 rounded-tr-lg">
        <div class="ml-16 w-80 h-10 bg-LGB rounded-lg bg-white">
            <div class="text-left pl-12 pt-2 py-3 font-medium text-gray-700">Order Details</div>
        </div>
    </div>
    <div class="bg-secondary-1 rounded-tr-lg h-[285px]">
        <!-- <router-link to="/orderHistory"> -->
            <router-link :to="{path:'/orderHistory', query:{id:this.id}}">
            <div class="text-center py-3 cursor-pointer font-medium text-white">Order History</div>
        </router-link>
    </div>
</div>
</template>

<style>

</style>