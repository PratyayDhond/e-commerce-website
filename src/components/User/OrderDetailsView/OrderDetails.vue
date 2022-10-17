<template>
  <div class="bg-primary-1 w-full mt-2 mb-4">
        <div class="flex items-center justify-between pr-4">
            <div class="w-80">
                <div class="pl-4 pt-3 flex">
                    <div>
                        <img class="h-36 object-contain border-none" :src="bookImageURL" alt="">
                    </div>
                    <div class="ml-5 mt-1">
                        <div class="font-medium text-lg">{{bookName}}</div>
                        <div class="font-normal text-sm text-gray-600">Author: {{bookAuthor}}</div>
                        <div class="font-normal text-sm text-gray-600">Genre: {{bookGenre}}</div>
                        <div class="font-normal text-sm text-gray-600">Publication Date: {{bookYear}}</div>
                    </div>
                </div>
                <div class="text-gray-500 text-sm pb-2 ml-4 mt-2">Order ID:  {{orderID}}</div>
            </div>
            <div class="w-15">₹ {{bookPrice}}</div>
            <div class="w-64">
                <div class="text-sm">Delivery on {{bookDelivery}}</div>
                <div class="text-sm text-gray-500">{{addressline1}}</div>
                <div class="text-sm text-gray-500">{{addressline2}}</div>
                <div class="text-sm text-gray-500">{{landmark}}</div>
                <div class="text-sm text-gray-500">{{city}}</div>
                <div class="text-sm text-gray-500">{{state}}</div>
                <div class="text-sm text-gray-500">Pincode: {{pincode}}</div>
                <div class="text-sm">Order Tracking ID:</div>
                <div class="text-sm text-gray-500">{{orderTrackingID}}</div>

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
        // console.log("Inside created() method of userprofile-> sidebar")
        try{
          await db.collection('Users').doc(this.id).get().then((r) => {
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