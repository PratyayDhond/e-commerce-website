<script>
import Header from '../../components/Header/Header.vue';
export default{
  data() {
    return {
      name: this.$route.query.userName,
      email: this.$route.query.userEmail,
      phone: this.$route.query.userPhone,
      addr1: '',
      addr2: '',
      city: '',
      landmark: '',
      state: '',
      zipcode: '',
      path: 'address'//'otp'
    }
  },
  methods: {
    verifyAddress(){
      // var val = /^[0-9a-zA-Z., -]+$/.test(this.addr1.trim())
      if(this.addr1 === '')
        alert('Address line one cannot be empty.')
      else{
        console.log("Address Line one meets requirements")
        this.verifyCity()
      }

    },
    verifyCity(){
       if(this.city === '')
          alert('\'City/district/town\' cannot be empty!')
       else{
         console.log("City/District/Town meets the requirements")
         this.verifyState();
       }
    },
    verifyState(){
      if(this.state === ''){
        alert('State cannot be empty!')
      }else{
        console.log("State meets the requirement")
        this.verifyZipCode();
      }
    },
      verifyZipCode(){

        if(this.zipcode.length !== 6){
          alert('Zip code is incorrect')
        }else{
          try{
              let isnum = /^\d+$/.test(this.zipcode);
              if(!isnum){
                alert('Enter a valid zip code')
              }else{
                this.path='otp'
                this.$router.push({
                  name: this.path,
                   query: {
                     name: this.name,
                     email: this.email,
                     phone: this.phone,
                     addr1: this.addr1,
                     addr2: this.addr2 || " ",
                     city: this.city,
                     landmark: this.landmark || " ",
                     state: this.state,
                     zipcode: this.zipcode
                   } 
                })
              }
          }catch(e){
            console.log(e)
          }          
        } 
      }
  }
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
          <div classname="releative">
          <svg width="100%" height="100%" viewBox="0 0 2282 647" fill="none" >
<path d="M-19 27.8001L15.4333 96.6001C49.8667 165.4 118.733 303 187.6 337.4C256.467 371.8 325.333 303 394.2 234.2C463.067 165.4 531.933 96.6001 600.8 154.005C669.667 210.55 738.533 395.45 807.4 475C876.267 554.55 945.133 533.05 1014 498.005C1082.87 464.25 1151.73 416.95 1220.6 394.805C1289.47 371.8 1358.33 371.8 1427.2 394.805C1496.07 416.95 1564.93 464.25 1633.8 440.6C1702.67 416.95 1771.53 326.65 1840.4 303C1909.27 279.35 1978.13 326.65 2047 291.605C2115.87 257.85 2184.73 141.75 2253.6 73.5951C2322.47 4.15007 2391.33 -17.3499 2460.2 16.4051C2529.07 51.4501 2597.93 141.75 2666.8 234.2C2735.67 326.65 2804.53 416.95 2873.4 475C2942.27 533.05 3011.13 554.55 3045.57 566.805L3080 578.2V647H3045.57C3011.13 647 2942.27 647 2873.4 647C2804.53 647 2735.67 647 2666.8 647C2597.93 647 2529.07 647 2460.2 647C2391.33 647 2322.47 647 2253.6 647C2184.73 647 2115.87 647 2047 647C1978.13 647 1909.27 647 1840.4 647C1771.53 647 1702.67 647 1633.8 647C1564.93 647 1496.07 647 1427.2 647C1358.33 647 1289.47 647 1220.6 647C1151.73 647 1082.87 647 1014 647C945.133 647 876.267 647 807.4 647C738.533 647 669.667 647 600.8 647C531.933 647 463.067 647 394.2 647C325.333 647 256.467 647 187.6 647C118.733 647 49.8667 647 15.4333 647H-19V27.8001Z" fill="#942780"/>
</svg>
<div className="bg-[#942780] h-[277px]" ></div>

<div>  </div>
          
              <div className=" absolute  bottom-0 right-0">
              <img className="p-0 w-96" src="../../assets/images/authDoodle.png" alt="call" />
            </div>
           <div className=" absolute bottom-[25%] left-[36%] w-[500px] h-[400px] bg-pink-200 rounded-2xl " > 
            <div className="flex flex-col items-center justify-between px-16 pb-12 pt-10  gap-2 " @keypress.enter="verifyAddress">
                <h1 className="text-4xl text-black font-bold mb-5"> A D D R E S S</h1>
                <div clanpssName="relative ">
                <div className="text-pink-500 hidden sm:block relative  border-b-2 border-secondary-1"   >
                  <input v-model="addr1" required maxlength="100"
                    className="h-[40px] w-[100%] rounded-md focus:outline-none static  bg-transparent  text-pink-500 placeholder:text-gray-500  "
                    placeholder="Address Line 1" />  
                  </div>
                <div className="text-pink-500 hidden sm:block relative  border-b-2 border-secondary-1"   >
                  <input v-model="addr2" required maxlength="100"
                    className="h-[40px] w-[100%] rounded-md focus:outline-none static  bg-transparent  text-pink-500 placeholder:text-gray-500  "
                    placeholder="Address Line 2" /> 
                </div>
                <div className="text-pink-500 hidden sm:block relative  border-b-2 border-secondary-1"   >
                  <input v-model="city" required maxlength="30"
                    className="h-[40px] w-[100%] rounded-md focus:outline-none static  bg-transparent  text-pink-500 placeholder:text-gray-500  "
                    placeholder="City/District/Town" />
                </div>
                <div className="flex flex-row gap-5"> 
                  <input v-model="landmark" maxlength="100"
                    className="h-[40px] w-[100%]  focus:outline-none static  bg-transparent  text-pink-500 placeholder:text-gray-500 border-b-2 border-secondary-1 "
                    placeholder="LandMark" />
                    <input required maxlength="30" v-model="state"
                    className="h-[40px] w-[100%] focus:outline-none static  bg-transparent  text-pink-500 placeholder:text-gray-500 border-b-2 border-secondary-1 "
                    placeholder="State" />
                </div>
                <div className="text-pink-500 hidden sm:block relative  "   >
                  <input required maxlength="6" minlength="6" v-model="zipcode"
                    className="h-[40px] w-[60px]  focus:outline-none static  bg-transparent  text-pink-500 placeholder:text-gray-500 border-b-2 border-secondary-1  "
                    placeholder="Zipcode" />
                </div>
                </div>
               
                 <router-link :to="{
                   name: path,
                   query: {
                     name: this.name,
                     email: this.email,
                     phone: this.phone,
                     addr1: this.addr1,
                     addr2: this.addr2,
                     city: this.city,
                     landmark: this.landmark,
                     state: this.state,
                     zipcode: this.zipcode
                   } 
                 }">
                  <button className="bg-white text-black px-24 rounded-md p-2 mt-2" @click="verifyAddress" @keypress.enter="verifyAddress"> Sign in</button>
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