<script >
// import Header from './components/Search/Header.vue';
// import Header from '../../components/Header/Header.vue';
import  "firebase/compat/auth";
import firebase from 'firebase/compat/app'
import { getAuth , signInWithPhoneNumber, RecaptchaVerifier, ConfirmationResult  } from "firebase/auth";

export default{
  data() {
    return {
      name: this.$route.query.name || null,
      email: this.$route.query.email || null,
      phone: this.$route.query.phone || null,
      addr1: this.$route.query.addr1 || null,
      addr2: this.$route.query.addr2 || null,
      city: this.$route.query.city || null,
      landmark: this.$route.query.landmark || null,
      state: this.$route.query.state || null,
      zipcode: this.$route.query.zipcode || null,
      otp: '',
      auth: getAuth(),
      confirmResult: null,
      // recaptchaVerifier:null,
      // recaptchaWidgetId:null,
      // confirmResult:null,
      // smsSent:false,
      // otpnum:null,
      isUser: this.$route.query.isUser || null,
      id: null
    }
  },
    async mounted(){
      try{
      const auth = getAuth();
      auth.languageCode = 'en';
     
      // if(this.isUser){
        // console.log('IsUser')
      const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
    
      await recaptchaVerifier.render();
       const phoneNumber = "+91" + this.phone;
        await signInWithPhoneNumber(auth,phoneNumber,recaptchaVerifier).then(ConfirmationResult => {
          this.confirmResult = ConfirmationResult;
        })
      } catch(e){
        console.log(e.message)
      } 
      
      // }
    },
    methods:{

      async verifyOTP(){
        await this.confirmResult.confirm(this.otp).then((result) => {
          
          // console.log(result._tokenResponse.localId)
          console.log("New User")
          console.log(result._tokenResponse.isNewUser)
          this.id = result._tokenResponse.localId 
          console.log(result._tokenResponse.localId)
          if(result._tokenResponse.isNewUser){
            console.log("In New User")
            const db = firebase.firestore();
            db.collection('Users').doc(result._tokenResponse.localId).set({
            addrLine1: this.addr1,
            addrLine2: this.addr2,
            cart: [],
            city: this.city,
            landmark:this.landmark,
            mobile: this.phone,
            name: this.name,
            orders: [],
            state: this.state,
            wishList: [],
            zipcode: this.zipcode,
            email: this.email,
        }).then((e) => {
          console.log(e)
          this.$router.push({
              name: '/home',
              query: {
              id: this.id,
          }
          })
        })
          

          }else{
            console.log("Old User")   
            this.$router.push({
              name: '/home',
              query: {
              id: this.id,
          }
          })         
          }
        })

        //BOOKMARK
        // Without entering OTP still throwing to the home page, error to be solved
          alert("Incorrect OTP ")


      },

        // submit()
        // {
          
        //   try{
        //     this.recaptchaVerifier =  new firebase.auth.RecaptchaVerifier('recaptcha-container')
        //   //   // new RecaptchaVerifier("sign-in-button", {
        //   //   // 'recaptcha-container': (response) => {
        //   //   // console.log("prepared phone auth process");
        //   //   //  }
        //   // }, auth);
        //   //   // new firebase.auth.RecaptchaVerifier('recaptcha-container')
        //     this.recaptchaVerifier.render().then((widgetId)=>{
        //     this.recaptchaWidgetId = widgetId    
        //     })
            
        //     var number = parseInt(this.phone)           
        //     firebase.auth().signInWithPhoneNumber(number,this.recaptchaVerifier)
        //     .then((confirmationResult)=>{                
        //         this.confirmResult = confirmationResult
        //         console.log(this.confirmResult)
        //         alert("Sms Sent!")
        //         this.smsSent=true
        //     })
        //     .catch((error)=>{
        //         console.log("Sms not sent",error.message)
        //     })
        //   }catch(e){
        //     console.log(e)
        //   }
        // },
        verifyOtp(){
          // this.recaptcha();
          if(this.otp === ''){
            alert('OTP cannot be empty')
            return;
          }
          else if(this.otp.length !== 6){
            alert('Enter a valid OTP')
            return;
          }
          else{
             try{
                let isnum = /^\d+$/.test(this.otp);
                if(isnum){
                  //#BOOKMARK
                  // After here send to otp verification
                  this.verifyOTP()
                }else{
                  alert('Enter a valid OTP')
                }
             }catch(e){
               console.log(e)
             }
          }
          
        }
    },    
   
}
</script>

<template>
<div>
  <div>
    <img class="h-28 left-28 top-12 absolute" src="../../assets/images/logo.png" alt="" >
  </div>
  <div>
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
              <img className="p-0 w-96" src="../../assets/images/authDoodle.png" alt="call" />
            </div>
            <div classname="bg-[#942780] absolute bottom-0 left-0 "></div>
           <div className=" absolute bottom-[30%] left-[38%] bg-pink-200 rounded-2xl " > 
            <div className="flex flex-col items-center justify-between px-20 pb-16 pt-14  gap-5 ">
                <h1 className="text-4xl text-black font-bold mb-5"> O T P</h1>
                <div clanpssName="relative ">
                <div className="text-pink-500 hidden sm:block relative border-b-2 border-secondary-1"   >
                  <span className="left-0 top-1 absolute"><img src="../../assets/images/mail.png" alt="logo2"  height="30" width="30"></span> 
                  <input v-model="otp" required @keypress.enter="verifyOtp()"
                    className="h-[40px] w-[100%] rounded-md focus:outline-none static px-9 bg-transparent  text-pink-500 placeholder:text-gray-500"
                    placeholder=" OTP" />
                  <!-- <button id="submit" @click="recaptcha">get otp</button> -->
                  <br>
                </div>
                  <br>
                  <div id='recaptcha-container'></div>

                </div>
                 <router-link to='/home'>
                <button className="bg-white text-black px-24 rounded-md p-2 mt-2" id="submit" @click="verifyOtp" >Continue</button>
                </router-link>
            </div> 
      </div>
      </div>
      </div>
</div>
</div>
  </div>
</div>
    
</template>
<style>
</style>