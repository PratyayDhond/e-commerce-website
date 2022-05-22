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
<div class='flex-col' v-if="load">
    <div class="mt-28">
        <div class="ml-20 font-bold text-3xl">USER PROFILE</div>
        <div>
            <div class="ml-20 mt-2 mb-1">Name</div>
            <div class="rounded-lg ml-20 border-2 h-8 w-150">
                <div class="ml-2 font-extralight">{{this.user[0].name}}</div>
            </div>
            <div class="ml-20 mt-2 mb-1">Email</div>
            <div class="rounded-lg ml-20 border-2 h-8 w-150">
                <div class="ml-2 font-extralight">{{this.user[0].email}}</div>
            </div>
        </div>
    </div>
    <div>
        <div class="mt-5 ml-20 font-bold text-3xl">USER ADDRESS</div>
            <div class="flex">
                <div class="ml-20 mt-2 mr-2">
                    <div>Phone Number</div>
                    <div class="rounded-lg mt-1 border-2 h-8 w-100">
                        <div class="ml-2 font-extralight">{{this.user[0].mobile}}</div>
                    </div>
                </div>
                <div class="ml-28 mt-2 pl-2">
                    <div>Zipcode or Pincode</div>
                    <div class="rounded-lg mt-1 border-2 h-8 w-100">
                        <div class="ml-2 font-extralight">{{this.user[0].zipcode}}</div>
                    </div>
                </div>
            </div>
            <div class="flex">
                <div class="ml-20 mt-2 mr-2">
                    <div>City/District/Town</div>
                    <div class="rounded-lg mt-1 border-2 h-8 w-100">
                        <div class="ml-2 font-extralight">{{this.user[0].city}}</div>
                    </div>
                </div>
                <div class="ml-28 mt-2 pl-2">
                    <div>State</div>
                    <div class="rounded-lg mt-1 border-2 h-8 w-100">
                        <div class="ml-2 font-extralight">{{this.user[0].state}}</div>
                    </div>
                </div>
            </div>
            <div class="ml-20 mt-2">
                <div>Address Line 1</div>
                <div class="rounded-lg mt-1 border-2 h-8 w-150">
                    <div class="ml-2 font-extralight">{{this.user[0].addrLine1}}</div>
                    </div>
            </div>
            <div class="ml-20 mt-2">
                <div>Address Line 2</div>
                <div class="rounded-lg mt-1 border-2 h-8 w-150">
                    <div class="ml-2 font-extralight">{{this.user[0].addrLine2}}</div>
                </div>
            </div>
        </div>
        <div class="flex ml-230 mt-5 w-28 h-8 ml-150 text-md text-white rounded-sm bg-secondary-1 text-center cursor-pointer hover:bg-primary-1 hover:text-gray-800 font-medium">
             <router-link to="/userEdit">
             <div class = "ml-4 mt-1">Edit Details</div>
             </router-link>
        </div>
    </div>
</template>

<style>

</style>