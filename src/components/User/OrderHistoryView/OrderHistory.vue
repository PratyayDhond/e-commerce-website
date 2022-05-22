<template>
    <div class="w-240 py-3 ">
        <div class=" bg-secondary-1 rounded-t-md py-4">
           <div class="px-8 flex justify-between">
               <div>
                   <div class="text-white font-medium text-sm" >ORDER PLACED</div>
                   <div class="text-white font-light text-sm">{{orderDate}}</div>
               </div>
               <div>
                   <div class="text-white font-medium text-sm" >TOTAL</div>
                   <div class="text-white font-light text-sm">₹ {{bookPrice}}</div>
               </div>
               <div>
                   <div class="text-white font-medium text-sm" >Ship To</div>
                   <div class="text-white font-light text-sm">{{shipTo}}</div>
               </div>
               <div>
                   <div class="text-white font-medium text-sm" >Order ID</div>
                   <div class="text-white font-light text-sm">{{orderID}}</div>
               </div>
           </div>
        </div>
        <div class="bg-primary-1 rounded-b-md px-10 pt-2 pb-4" >
            <div>Delivered {{bookDelivered}}</div>
            <div class="flex justify-between items-end">
                <div class="flex">
                    <div>
                        <img class="h-52 object-contain border-none w-full" :src="bookImageURL" alt="">
                    </div>
                    <div class="ml-6 mt-4" >
                        <div class="font-medium text-lg">{{bookName}}</div>
                        <div class="font-normal text-sm text-gray-600">Author: {{bookAuthor}}</div>
                        <div class="font-normal text-sm text-gray-600">Genre: {{bookGenre}}</div>
                        <div class="font-normal text-sm text-gray-600">Publication Date: {{bookYear}}</div>
                    </div>
                </div>
                <div class="mb-5">
                    <div class="cursor-pointer hover:bg-secondary-1 hover:text-white  bg-white px-5 py-1 rounded-md text-secondary-1 font-medium">Buy Again</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
 import firebase from 'firebase/compat/app';

export default{
    props:["orderID","bookName","bookPrice","bookImageURL","orderDate","shipTo","bookYear","bookGenre","bookAuthor","bookDelivery","orderTrackingID","addressline1","addressline2","city","landmark","state","pincode"],
    data() {
        return {
            user: [],
            load: false,
            id: this.$route.query.id
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
            // console.log(r.data());
            this.user.push(r.data())
            this.load = true; 
          }); 
        }catch(e){
            console.log(e)
        }
            // console.log(this.user)
    }
}
</script>

<style>

</style>