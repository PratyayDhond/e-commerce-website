<script>
import firebase from 'firebase/compat/app';
export default{
    data(){
        return{
            total: 0,
            // Use book ID here
            // query: `{name: 'book', query:{id:this.bookID}}`
            query: '/book',
            id: this.$route.query.id,
            quantity: parseInt(this.bookQuantity),
            price: parseInt(this.bookPrice),
            total: parseInt(this.bookPrice)*parseInt(this.bookQuantity),
        }
    },
    props:["bookName","bookAuthor","bookSubject","bookGenre","bookDate","bookImageURL", "bookPrice", "bookID", "bookQuantity"],
    methods:
    {
        totalPrice()
        {
            this.total= this.price*this.quantity
        },
        increment(){
            this.quantity++;
            // console.log(this.quantity)
            this.totalPrice()
            this.$emit("calculate",this.price,1,this.bookID);
        },
        decrement(){
            if(this.quantity > 0){
            this.quantity--;
            this.totalPrice()
            this.$emit("calculate",-this.price,-1,this.bookID)
            }
        },
        removeFromCart(){
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
            remove = cart.filter((id) => id !== this.bookID)
            console.log(this.bookID)
            console.log(cart)
            console.log("removed array " +remove)

            db.collection('Users').doc(this.id).set({
            addrLine1: addr1,
            addrLine2: addr2,
            cart: remove,
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
    },
    mounted(){
            
    }

}
</script>

<template>
<div class="mt-4">
    <div class="w-6/6 border-2 h-40">
       <div class="flex">
           <div class=" flex w-1/6">
             <!-- <router-link :to="query"> -->
                <img class="h-36 object-fill border-none w-28" :src="bookImageURL" alt="">
            <!-- </router-link> -->
            </div>
        <div class=" w-2/6">
            <!-- <router-link :to="query"> -->
            <div class="mt-2 ml-2 font-bold text-gray-800 text-md cursor-pointer hover:text-secondary-1">{{ bookName }}</div> 
            <!-- </router-link>  -->
            <p class="mt-2 ml-2  text-black-400 text-sm cursor-pointer ">author: {{ bookAuthor }}</p> 
            <p class="mt-2 ml-2  text-black-400 text-sm cursor-pointer ">subject: {{ bookSubject }}</p> 
            <p class="mt-2 ml-2  text-black-400 text-sm cursor-pointer ">genre:{{ bookGenre }}</p> 
            <p class="mt-2 ml-2  text-black-400 text-sm cursor-pointer ">publication date:{{ bookDate }}</p>     
        </div>
        <div class="flex flex-col items-end justify-evenly mt-5">
            <div class="flex items-center">
                <div class="flex w-28">
                    <div class="py-1 h-8 w-8 text-sm text-white rounded-sm bg-secondary-1 text-center cursor-pointer hover:bg-primary-1 hover:text-gray-800 font-medium" @click="decrement()">-</div>
                    <div class="py-1 h-8 w-20 border-2 text-sm text-center  font-medium">
                        {{quantity}}</div>
                    <div class="py-1 h-8 w-8 text-sm text-white rounded-sm bg-secondary-1 text-center cursor-pointer hover:bg-primary-1 hover:text-gray-800 font-medium" @click="increment()">+</div>                    
                </div>
                <div class="ml-[70px] font-bold text-gray-800 text-md  ">₹{{this.price}}</div> 
                <div class="ml-24 font-bold text-gray-800 text-md  ">₹{{total}}</div>
            </div>
            <div>
                <div class="py-2 w-36 text-sm text-white rounded-sm bg-secondary-1 text-center cursor-pointer hover:bg-primary-1 hover:text-gray-800 font-medium" @click="removeFromCart">
                            Remove from Cart
                        </div> 
            </div>
        </div>         
    </div>
</div>
</div>
 
</template>

<style>

</style>