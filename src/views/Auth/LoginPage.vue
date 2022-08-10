<script>
import Header from '../../components/Header/Header.vue';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import firebase from 'firebase/compat/app';


const auth = getAuth();

export default{
  data() {
    return {
      // Is user is a function used to 
      isUser: false,
      phoneNumber: '',
      error: false,
      isNumberValid: false,
      page: '',
    }
  },
  methods: {
     async oldUser() {   
      console.log("inside oldUser")
      try{
        const db = firebase.firestore(); 
        var arr = []
      await db.collection('registeredUsers').doc("ee7boWOIG7bwHK7VzF0n").get().then((r) => {
          
          r.data().phoneNumber.forEach((item) => {
            if(item === this.phoneNumber)
              this.isUser = true;
          });
        })
      }catch(e){
        console.log(e);
      }

      console.log("Outside ")
        this.setPage();
      },
      isValidNumber(){
        if(this.phoneNumber.length < 10){
          alert('Enter a valid number')
        return;
        }
        console.log('inside isValidNumber')
        try{
          let isnum = /^\d+$/.test(this.phoneNumber);
        if (isnum) {
          console.log('Is a number')
      this.isNumberValid = true
        }else{
          console.log('Not A Number')
          this.isNumberValid = false
          this.phoneNumber = ''
          alert('Enter a valid number')
        }

        }catch(e){
          console.log(e);
        }
        console.log('Is Number Valid: ' + this.isNumberValid)
        this.oldUser();
      },

      setPage(){
      if(this.isNumberValid){
        if(this.isUser){
          this.page = 'otp'
        }else{
          this.page = 'register'
        }
      }else{
          this.page = 'login'
        }
        console.log(this.isUser)
        console.log(this.page)
        this.$router.push({
          name: this.page,
          query: {
            phoneNo: this.phoneNumber
          }
        })
      },
      
  }
}
</script>

<template>
<router-view>
<div class="relative">
  <div>
    <img class="h-28 left-28 top-12 absolute" src="../../assets/images/logo.png" alt="" >
  </div>
  <div>
    <div>
  <Header />
    <div>
  <div>
      <div classname=" ">
          <div classname="releative ">
          <svg width="100%" height="100%" viewBox="0 0 2282 647" fill="none" >
<path d="M-19 27.8001L15.4333 96.6001C49.8667 165.4 118.733 303 187.6 337.4C256.467 371.8 325.333 303 394.2 234.2C463.067 165.4 531.933 96.6001 600.8 154.005C669.667 210.55 738.533 395.45 807.4 475C876.267 554.55 945.133 533.05 1014 498.005C1082.87 464.25 1151.73 416.95 1220.6 394.805C1289.47 371.8 1358.33 371.8 1427.2 394.805C1496.07 416.95 1564.93 464.25 1633.8 440.6C1702.67 416.95 1771.53 326.65 1840.4 303C1909.27 279.35 1978.13 326.65 2047 291.605C2115.87 257.85 2184.73 141.75 2253.6 73.5951C2322.47 4.15007 2391.33 -17.3499 2460.2 16.4051C2529.07 51.4501 2597.93 141.75 2666.8 234.2C2735.67 326.65 2804.53 416.95 2873.4 475C2942.27 533.05 3011.13 554.55 3045.57 566.805L3080 578.2V647H3045.57C3011.13 647 2942.27 647 2873.4 647C2804.53 647 2735.67 647 2666.8 647C2597.93 647 2529.07 647 2460.2 647C2391.33 647 2322.47 647 2253.6 647C2184.73 647 2115.87 647 2047 647C1978.13 647 1909.27 647 1840.4 647C1771.53 647 1702.67 647 1633.8 647C1564.93 647 1496.07 647 1427.2 647C1358.33 647 1289.47 647 1220.6 647C1151.73 647 1082.87 647 1014 647C945.133 647 876.267 647 807.4 647C738.533 647 669.667 647 600.8 647C531.933 647 463.067 647 394.2 647C325.333 647 256.467 647 187.6 647C118.733 647 49.8667 647 15.4333 647H-19V27.8001Z" fill="#942780"/>
</svg>
<div className="bg-[#942780] h-[277px]" ></div>

<div>  </div>
          
              <div className=" absolute  bottom-0 right-0">
              <img className="p-0 w-96" draggable="false" src="../../assets/images/authDoodle.png" alt="call" />
            </div>
            <div classname="bg-[#942780] absolute bottom-0 left-0 "></div>
           <div className=" absolute bottom-[30%] left-[39%] bg-pink-200 rounded-2xl " > 
            <div className="flex flex-col items-center justify-between px-20 pb-16 pt-14  gap-5 ">
                <h1 className="text-4xl text-black font-bold mb-5"> L O G I N</h1>
                <div className="relative ">
                <div className="text-pink-500 hidden sm:block relative border-b-2 border-secondary-1"   >
                  <span className="left-0 top-1 absolute"><img src="../../assets/images/person.png" alt="logo2"  height="30" width="30"></span> 
                  <input v-model="phoneNumber"
                    className="h-[40px] w-[100%] rounded-md focus:outline-none static px-9 bg-transparent  text-pink-500 placeholder:text-gray-500"
                    placeholder="Phone Number" maxlength=10 type="text" @keypress.enter="isValidNumber()" required/>
                </div>
                </div>
                <!-- <router-link :to=" isNumberValid ? isUser ? '/otp' : `{name: 'register' query: {phoneNo: ${phoneNumber}}}` : '/login'"> -->
                 <!-- <router-link :to="{name: 'register', query: {phoneNo: phoneNumber}}" >  -->
                 <router-link :to="{name: page, query: {phoneNo: phoneNumber}}" > 
                <button className="bg-white text-black px-24 rounded-md p-2 mt-2 sign-in-button" @click="isValidNumber()">Continue</button>    
                </router-link>
                
                                
            </div> 
      </div>
      </div>
      </div>
</div>
</div>
</div>
  </div>
</div>
</router-view>
    
</template>

<style>
/*The below code is so that in the number input there are no up and down arrows, reference : https://www.w3schools.com/howto/howto_css_hide_arrow_number.asp*/ 
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>