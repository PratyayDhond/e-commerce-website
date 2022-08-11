<script>
import firebase from 'firebase/compat/app';

    export default{
        props:["name","price","description","author","publicationYear","id","stock", "userID"],
        data() {
            return {
                // userID: 'Tm1WrBkhejjCuNsejweU',
            }
        },
    created(){
        console.log(this.id)
        console.log(this.name)
        console.log(this.price)
        console.log(this.description)
        console.log(this.author)
        console.log(this.publicationYear)
    },
    methods: {
        addToCart(){
            const db = firebase.firestore(); 
        console.log("Inside addToCart() method")
        try{
            console.log("User ID: " + this.userID);
        db.collection('Users').doc(this.userID).get().then((r) => {
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

            // console.log(r.data())

            cart.push(this.id)
            console.log("Cart : " + cart)
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
        }).then((ref) => {
            alert('Item added to cart successfully')
        });
        console.log('Data written successfully')
            // alert("Item added to cart successfully.") 
        });

        }catch(e){
            console.log(e)
        }
            
        },
        addToWishList(){
            const db = firebase.firestore(); 
        console.log("Inside addToWishList() method")
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
            // pfp: pfp
        }).then((ref) => {
        });
        console.log('Data written successfully')
            // alert("Item added to cart successfully.") 
        });

            alert('Item added to wishlist successfully')
        }catch(e){
            console.log(e)
        }
            
        },

    },
    }
</script>

<template>
<div class="flex flex-col items-start mt-10">
<div class="text-2xl font-bold">{{name}}</div>
<div class="text-base font-light">(Hardback) | Released : {{publicationYear}}</div>
<div>
</div>
<div class="text-base font-light">By : {{author}}</div>
<!-- <div class="grid grid-cols-1 divide-y divide-grey-700 w-230"> -->
<div class="text-base font-light">Publisher : -     </div>
    <div class= "w-230 bg-gray-300 h-px mt-5"></div>
<div class="flex flex-row items-start mt-5">
<div class = "text-2xl font-semibold">₹{{price}}</div>
<div class = "text-lg font-medium ml-130 mr-3 ">In-Stock</div>
                        <!-- <div class="py-1 h-8 w-8 text-sm text-white rounded-sm bg-secondary-1 text-center cursor-pointer hover:bg-primary-1 hover:text-gray-800 font-medium" @click="inc"> -->
                            <!-- - -->
                        <!-- </div> -->
                        <div class="py-1 h-8 w-20 border-2 text-sm text-center  font-medium">
                            {{stock}}
                        </div>
                        <!-- <div class="py-1 h-8 w-8 text-sm text-white rounded-sm bg-secondary-1 text-center cursor-pointer hover:bg-primary-1 hover:text-gray-800 font-medium"> -->
                            <!-- + -->
                        <!-- </div> -->
</div>
<div class= "w-230 bg-gray-300 h-px mt-5"></div>
                    <div class="flex flex-row items-start mt-5 ml-1 mr-1">
                    <div class = "mt-2 mb-2 ml-28 mr-28">LANGUAGE:<br>English</div>
                    <div class= " h-16 w-px bg-gray-300 ml-1 mr-1"></div>
                    <div class = "mt-2 mb-2 ml-28 mr-28">GENRE:<br>Self-help</div>
                    <div class= " h-16 w-px bg-gray-300 ml-1 mr-1"></div>
                    <div class = "mt-2 mb-2 ml-28 mr-28">NO. OF PAGES:<br>208</div>
                    </div>
                    <div class= "w-230 bg-gray-300 h-px mt-5 mb-5"></div>
                    <div>
<div class="ml-56 flex items-center">
                        <div class="flex py-2 w-52 text-sm text-white rounded-md bg-secondary-1 text-center cursor-pointer hover:bg-primary-1 hover:text-gray-800 font-medium">
                            <div>
                                <svg class = "py-1 fill-current h-6 ml-4" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 471.701 471.701" style="enable-background:new 0 0 471.701 471.701;" xml:space="preserve">
<g>
	<path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
		c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
		l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
		C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
		s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
		c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
		C444.801,187.101,434.001,213.101,414.401,232.701z"/>
</g>
</svg></div>
                            <div class = "ml-2" @click="addToWishList">Add to Wishlist</div>
                        </div>
                        <div class="ml-56 flex items-center">
                        <div class="flex py-2 w-40 text-sm text-white rounded-sm bg-secondary-1 text-center cursor-pointer hover:bg-primary-1 hover:text-gray-800 font-medium">
                            <div>
                                <svg class = "py-1 fill-current h-6 ml-4" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 471.701 471.701" style="enable-background:new 0 0 471.701 471.701;" xml:space="preserve">
<g>
	<path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
		c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
		l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
		C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
		s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
		c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
		C444.801,187.101,434.001,213.101,414.401,232.701z"/>
</g>
</svg></div>
                            <div class = "ml-2" @click="addToCart">Add to Cart</div>
                        </div>
                        
                        <!-- <div>
                        <div class="flex ml-5 w-40 h-10 text-sm text-white rounded-sm bg-secondary-1 text-center cursor-pointer hover:bg-primary-1 hover:text-gray-800 font-medium">
                            <div><svg class="h-6" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="902.86px" height="902.86px" viewBox="0 0 902.86 902.86" style="enable-background:new 0 0 902.86 902.86;"
	 xml:space="preserve">
<g>
	<g>
		<path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z
			 M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"/>
		<path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717
			c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744
			c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742
			C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744
			c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z
			 M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742
			S619.162,694.432,619.162,716.897z"/>
	</g>
</g>
</svg></div>
<div class = "ml-2">Add to Cart</div>
</div>-->
                        </div>
                        </div>
                    </div>
</div> 


</template>

<style>
</style>