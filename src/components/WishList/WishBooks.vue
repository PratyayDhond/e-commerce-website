<script>
import firebase from 'firebase/compat/app';
export default {
    props:["bookName","bookPrice","bookImageURL","bookYear","bookGenre","bookAuthor","id", "bookID"],
    methods: { 
        addToCart(){
            const db = firebase.firestore(); 
        console.log("Inside addToCart() method")
        try{
        db.collection('Users').doc(this.id).get().then((r) => {
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

            cart.push(this.bookID)
            
            //Removing null element if any from the array
            var filtered = cart.filter(function (el) {
            return el != '';
            });

            // source https://dev.to/soyleninjs/3-ways-to-remove-duplicates-in-an-array-in-javascript-259o : 2nd way
            //Removing duplicate elements if any from the array 
            let uniqueCart = filtered.filter((element, index) => {
                return filtered.indexOf(element) === index;
            });

        //    cart = null;
           cart = uniqueCart;
        //    console.log(this.cart)
           console.log(uniqueCart)

            db.collection('Users').doc(this.id).set({
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
            // pfp: pfp
            
        }).then((ref) => {
             console.log('Data written successfully')
        alert('Item added to cart successfully')
        });
       
            // alert("Item added to cart successfully.") 
        });

            
        }catch(e){
            console.log(e)
        }
            
        },
        removeFromWishList(){
            console.log(this.id)
             const db = firebase.firestore(); 
        console.log("Inside removeFromWishList() method")
        try{
        db.collection('Users').doc(this.id).get().then((r) => {
            console.log(r.data())
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

        // console.log(r.data());
            // console.log(r.data())
            // console.log(wishlist)
            // wishlist.pop(this.id)
            let remove = []
            remove = wishlist.filter((id) => id !== this.bookID)
            console.log(this.BookID)
            console.log(wishlist)
            console.log("removed array " +remove)

            db.collection('Users').doc(this.id).set({
            addrLine1: addr1,
            addrLine2: addr2,
            cart: cart,
            city: city,
            landmark:landmark,
            mobile: mobile,
            name: name,
            orders: orders,
            state: state,
            wishList: remove,
            zipcode: zipcode,
            email: email,
            // pfp: pfp
        }).then((ref) => {
            this.$router.go()
        });
            
        console.log('Data updated successfully')
        // alert('Item removed from wishlist successfully')
            // alert("Item added to cart successfully.") 
        });

            
        }catch(e){
            console.log(e)
        }
        }
   }
}
</script>

<template>
 
  <div class="mb-5">
          <div class="flex justify-between">
                <router-link to="/book">
                <div class="pl-4 pt-3 flex">
                    <img class="h-52" :src="bookImageURL" alt="">
                    <div class="ml-5 mt-1">
                        <div class="font-medium text-lg">{{bookName}}</div>
                        <div class="font-normal text-sm text-gray-600">Author: {{bookAuthor}}</div>
                        <div class="font-normal text-sm text-gray-600">Genre: {{bookGenre}}</div>
                        <div class="font-normal text-sm text-gray-600">Publication Date: {{bookYear}}</div>
                    </div>
                </div>
                </router-link>
                <div class="mr-20 flex flex-col justify-between items-end">
                    <div class="text-4xl font-bold text-gray-700 mr-5 mt-5">
                        ₹ {{bookPrice}}
                    </div>
                    <div class=" flex gap-5">
                        <div class="bg-secondary-1 px-3 py-1 text-white hover:bg-primary-1 hover:text-secondary-1 cursor-pointer" @click="addToCart">Add to Cart</div>
                        <div class="bg-secondary-1 px-3 py-1 text-white hover:bg-primary-1 hover:text-secondary-1 cursor-pointer" @click="removeFromWishList">Remove from Wishlist</div>
                    </div>
                </div>
      </div>
  </div>
  <div class="bg-gray-300 w-full h-px ml-4"></div>

</template>



<style>

</style>