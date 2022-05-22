<script>
    import firebase from 'firebase/compat/app';

export default{
    props: ['id'],
    data() {
        return {
            user: [],
            load: false,
            variable: ''
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
    },
    methods: {
        save(){
            this.validate()
            try{
                const db = firebase.firestore();
                console.log('Inside save() function')
                console.log(this.user[0])
                db.collection('Users').doc(this.id).set({
                    name:this.user[0].name,
                    email:this.user[0].email,
                    cart:this.user[0].cart,
                    addrLine1:this.user[0].addrLine1,
                    addrLine2:this.user[0].addrLine2,
                    landmark:this.user[0].landmark,
                    mobile:this.user[0].mobile,
                    orders:this.user[0].orders,
                    pfp:this.user[0].pfp,
                    city:this.user[0].city,
                    orders:this.user[0].orders,
                    state:this.user[0].state,
                    wishlist:this.user[0].wishlist,
                    zipcode:this.user[0].zipcode,


                }).then(r => {
                this.variable="/User"
                this.$router.push({
                    path: '/User',
                    query: {
                        id:this.id
                    }
                })
                });
            }catch(e){
                console.log(e)
            }
        },
        validate(){

        }
    },
}
</script>

<template>
<div class='flex-col' v-if="load">
    <div class="mt-28">
        <div class="ml-20 font-bold text-3xl">USER PROFILE</div>
        <div>
            <div class="ml-20 mt-2 mb-1">Name</div>
            <div class="rounded-lg ml-20 border-2 h-8 w-235">
                <div><input class="pl-2 pb-1 h-7 w-130 bg-LGB border-transparent text-gray-700 rounded-lg font-semibold focus:outline-none focus:bg-LGB focus:border-transparent focus:ring-transparent placeholder:font-extralight placeholder-gray-700" type="text" v-model="user[0].name"></div>
            </div>
            <div class="ml-20 mt-2 mb-1">Email</div>
            <div class="rounded-lg ml-20 border-2 h-8 w-235">
                <div><input class="pl-2 pb-1 h-7 w-130 bg-LGB border-transparent text-gray-700 rounded-lg font-semibold focus:outline-none focus:bg-LGB focus:border-transparent focus:ring-transparent placeholder:font-extralight placeholder-gray-700" type="text" v-model="user[0].email"></div>
            </div>
        </div>
    </div>
    <div>
        <div class="mt-5 ml-20 font-bold text-3xl">USER ADDRESS</div>
            <div class="flex">
                <div class="ml-20 mt-2 mr-2">
                    <div>Phone Number</div>
                    <div class="rounded-lg mt-1 border-2 h-8 w-100">
                        <div><input class="pl-2 pb-1 h-7 w-80 bg-LGB border-transparent text-gray-700 rounded-lg font-semibold focus:outline-none focus:bg-LGB focus:border-transparent focus:ring-transparent placeholder:font-extralight placeholder-gray-700" type="text" v-model="user[0].mobile"></div>
                    </div>
                </div>
                <div class="ml-28 mt-2 pl-2">
                    <div>Zipcode or Pincode</div>
                    <div class="rounded-lg mt-1 border-2 h-8 w-100">
                        <div><input class="pl-2 pb-1 h-7 w-80 bg-LGB border-transparent text-gray-700 rounded-lg font-semibold focus:outline-none focus:bg-LGB focus:border-transparent focus:ring-transparent placeholder:font-extralight placeholder-gray-700" type="text" v-model="user[0].zipcode"></div>
                    </div>
                </div>
            </div>
            <div class="flex">
                <div class="ml-20 mt-2 mr-2">
                    <div>City/District/Town</div>
                    <div class="rounded-lg mt-1 border-2 h-8 w-100">
                        <div><input class="pl-2 pb-1 h-7 w-80 bg-LGB border-transparent text-gray-700 rounded-lg font-semibold focus:outline-none focus:bg-LGB focus:border-transparent focus:ring-transparent placeholder:font-extralight placeholder-gray-700" type="text" v-model="user[0].city"></div>
                    </div>
                </div>
                <div class="ml-28 mt-2 pl-2">
                    <div>State</div>
                    <div class="rounded-lg mt-1 border-2 h-8 w-100">
                        <div><input class="pl-2 pb-1 h-7 w-80 bg-LGB border-transparent text-gray-700 rounded-lg font-semibold focus:outline-none focus:bg-LGB focus:border-transparent focus:ring-transparent placeholder:font-extralight placeholder-gray-700" type="text" v-model="user[0].state"></div>
                    </div>
                </div>
            </div>
            <div class="ml-20 mt-2">
                <div>Address Line 1</div>
                <div class="rounded-lg mt-1 border-2 h-8 w-235">
                    <div><input class="pl-2 pb-1 h-7 w-230 bg-LGB border-transparent text-gray-700 rounded-lg font-semibold focus:outline-none focus:bg-LGB focus:border-transparent focus:ring-transparent placeholder:font-extralight placeholder-gray-700" type="text" v-model="user[0].addrLine1"></div>
                    </div>
            </div>
            <div class="ml-20 mt-2">
                <div>Address Line 2</div>
                <div class="rounded-lg mt-1 border-2 h-8 w-235">
                    <div><input class="pl-2 pb-1 h-7 w-230 bg-LGB border-transparent text-gray-700 rounded-lg font-semibold focus:outline-none focus:bg-LGB focus:border-transparent focus:ring-transparent placeholder:font-extralight placeholder-gray-700" type="text" v-model="user[0].addrLine2"></div>
                </div>
            </div>
        </div>
        <div class="flex mt-5 ml-230 w-32 h-8 ml-150 text-md text-white rounded-sm bg-green-400 text-center cursor-pointer hover:bg-secondary-1 hover:text-white font-medium">
             <!-- <router-link :to="{path: variable, query:{id: this.id}}" > -->
             <!-- <router-link to=""> -->
                 <div class = "ml-4 mt-1" @click="save">Save Changes</div>
             <!-- </router-link> -->
        </div>
    </div>
</template>

<style>

</style>