<script>

</script>
<template>
    <div class= " h-96 w-px bg-gray-300 ml-4 mr-4"></div>
          <div class="w-2/6">
          <div class="  text-4xl font-bold font-calibri" >Order Summary</div>
           <div class="w-full bg-gray-300 h-px mt-5"></div>
               <div class ="flex justify-between">
                <p class="pt-8">ITEMS 2</p>
                <p class= "pt-8">{{cost}}</p>
               </div>
                <div class ="flex justify-between">
                <p class="pt-8">DISCOUNT </p>
                <p class= "pt-8 ">{{dis}}</p>
               </div>
                <div class ="flex justify-between">
                <p class="pt-8">DELIVERY CHARGES</p>
                <p class= "pt-8"> {{deliv}}</p>
               </div>
                <div class ="flex justify-between">
                <p class="pt-40 text-xl font-bold">TOTAL COST</p>
                <p class= "pt-40 text-xl font-bold">500</p> <!--isko dynamic krna hai-->
               </div>
               <div class="flex justify-center pt-6">
                <button class="bg-secondary-1 hover:bg-primary-1 hover:text-black text-white font-semibold text-xl h-10 pl-40 pr-40 tracking-widest ">CHECKOUT</button>
               </div>     
          </div>
      
</template>
