<script>
import firebase from 'firebase/compat/app';
export default{
    props:["bookName","bookDate","bookLanguage","bookCover","bookPrice","bookImageURL","id","userID"],
    methods:{
        addToCart(){
            const db = firebase.firestore(); 
        console.log("Inside addToCart() method")
        try{
        db.collection('Users').doc(this.userID).get().then((r) => {
            var addr1 = r.data().addrLine1
            var addr2 = r.data().addrLine2
            var mobile = r.data().mobile
            var city = r.data().city
            var landmark = r.data().landmark
            var name = r.data().name
            var state = r.data().state
            var zipcode = r.data().zipcode 
            var cart = r.data().cart || []
            var wishlist = r.data().wishList || []
            var orders = r.data().orders || []
            var email = r.data().email
            // var pfp = r.data().pfp

            // console.log(r.data())

            cart.push(this.id)
            
            //Removing null element if any from the array
            var filtered = cart.filter(function (el) {
            return el != '';
            });

            // source https://dev.to/soyleninjs/3-ways-to-remove-duplicates-in-an-array-in-javascript-259o : 2nd way
            //Removing duplicate elements if any from the array 
            let uniqueCart = filtered.filter((element, index) => {
                return filtered.indexOf(element) === index;
            });

           cart = null;
           cart = uniqueCart;
        //    console.log(this.cart)
        //    console.log(uniqueCart)

            db.collection('Users').doc(this.userID).set({
            addrLine1: addr1,
            addrLine2: addr2,
            cart: uniqueCart,
            city: city,
            landmark:landmark,
            mobile: mobile,
            name: name,
            orders: orders,
            state: state,
            wishList: wishlist,
            zipcode: zipcode,
            email: email,
            pfp: pfp
        }).then((ref) => {
        });
        console.log('Data written successfully')
            // alert("Item added to cart successfully.") 
        });

            alert('Item added to cart successfully')
        }catch(e){
            console.log(e)
        }
            
        },
        addToWishlist(){
             const db = firebase.firestore(); 
        console.log("Inside addToCart() method")
        try{
        db.collection('Users').doc(this.userID).get().then((r) => {
            var addr1 = r.data().addrLine1
            var addr2 = r.data().addrLine2
            var mobile = r.data().mobile
            var city = r.data().city
            var landmark = r.data().landmark
            var name = r.data().name
            var state = r.data().state
            var zipcode = r.data().zipcode
            var cart = r.data().cart || []
            var wishlist = r.data().wishList || []
            var orders = r.data().orders || []
            var email = r.data().email
            // var pfp = r.data().pfp

            console.log(r.data())
            console.log(wishlist)
            wishlist.push(this.id)
            
            //Removing null element if any from the array
            var filtered = wishlist.filter(function (el) {
            return el != '';
            });

            // source https://dev.to/soyleninjs/3-ways-to-remove-duplicates-in-an-array-in-javascript-259o : 2nd way
            //Removing duplicate elements if any from the array 
            let uniqueWish = filtered.filter((element, index) => {
                return filtered.indexOf(element) === index;
            });

           wishlist = null;
           wishlist= uniqueWish;
        //    console.log(this.data())
           console.log(uniqueWish);
        //    console.log(this.cart)
        //    console.log(uniqueCart)

            db.collection('Users').doc(this.userID).set({
            addrLine1: addr1,
            addrLine2: addr2,
            cart: cart,
            city: city,
            landmark:landmark,
            mobile: mobile,
            name: name,
            orders: orders,
            state: state,
            wishList: uniqueWish,
            zipcode: zipcode,
            email: email,
            pfp: pfp
        }).then((ref) => {
        alert('Item added to wishlist successfully')
        console.log('Data written successfully')
        });
            // alert("Item added to cart successfully.") 
        });

        }catch(e){
            console.log(e)
        }
            
        }
    },
    
}
</script>

<template>

    <div class="flex flex-row mt-7 border-" @click="handler">
        <div class="w-60 bg-black bg-opacity-5 border-">
            <router-link :to="{
             path: '/book',
             query: {
              id:this.id,
              userID: this.userID
                 }
              }"> 
            <img class="h-60 object-contain border-none w-full" :src="bookImageURL" alt="">
            </router-link> 
        </div>
        <div class="border-2 border-opacity-5 border-black w-full">
            <div class="flex flex-col items-start ml-10">
               <router-link :to="{
             path: '/book',
             query: {
              id:this.id,
              userID: this.userID
                 }
              }"> 
               <div class="mt-7 font-bold text-gray-700 text-lg cursor-pointer hover:text-secondary-1">{{ bookName }}</div>
                </router-link>
                <div class="text-gray-500">{{ bookDate }}</div>
                <div class="text-gray-500">{{ bookLanguage }}</div>
                <div class="text-gray-500">{{ bookCover }}</div>
                <div class="flex flex-row justify-between w-full mt-14 pr-10 item-center">
                    <div class=" font-bold text-gray-700 text-xl">₹ {{bookPrice}}</div>
                    <div class="flex items-center">
                        <div class="py-2 w-32 text-sm text-white rounded-sm bg-secondary-1 text-center cursor-pointer hover:bg-primary-1 hover:text-gray-800 font-medium" @click="addToWishlist">
                            Add to Wishlist
                        </div> 
                        <div class="ml-5 py-2 w-32 text-sm text-white rounded-sm bg-secondary-1 text-center cursor-pointer hover:bg-primary-1 hover:text-gray-800 font-medium" @click="addToCart">
                            Add to Cart
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

    </div>

</template>

<style>

</style>