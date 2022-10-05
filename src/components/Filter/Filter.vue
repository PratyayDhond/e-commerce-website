<script>
import Checkbox from './Checkbox.vue';

export default{
    emits: ["addFilterToHome", "addPricingFilter"],
    data(){
        return{
            filters:[
                {part:"Legs"},
                {part:"Shoulders"},
                {part:"Hands"},
                {part:"Neck"},
                {part:"Head"},
                {part:"Joints"},
                {part:"Back"},
                {lang:"English"},
                {lang:"Hindi"},
                {lang:"Marathi"},
                {lang:"Sanskrit"},
                {genre:"Thriller"},
                {genre:"Romance"},
                {genre:"Fantasy"}
            ],
            min: null,
            max: null,

        }
    },
    components:{
        Checkbox
    },
    methods: {
        addFilter (value) {
            this.$emit("addFilterToHome",value)
        },
        setMinMax(){
            var a = parseInt(this.min);
            var b = parseInt(this.max);
            var minIsNumber = false;
            var maxIsNumber = false;
            this.min = a;
            this.max = b;
            var minPrice = null;
            var maxPrice = null;

            // If both the provided values are not a number, then it will call the function with parameters -> 0, INTEGER_MAX
            if(isNaN(parseInt(this.min)) && isNaN(parseInt(this.max))){
                this.$emit("addPricingFilter",0, Number.MAX_SAFE_INTEGER);
                return;
            }else{

                //if the Integer of this.min is a number then execute the if block 
                if(!isNaN(parseInt(this.min))){  
                    minIsNumber = true;
                    // if Integer of this.max is not a number then execute the following block                  
                    if(isNaN(parseInt(this.max))){
                        this.max = null;
                        this.$emit("addPricingFilter",this.min, Number.MAX_SAFE_INTEGER);
                        return;
                        
                    // if Integer of this.max is a number then execute the following block
                    }
                }

                //if the Integer of this.max is a number then execute the if block 
                if(!isNaN(parseInt(this.max))){
                    maxIsNumber = true;
                    if(isNaN(parseInt(this.min))){
                        this.min = 0;
                        this.$emit("addPricingFilter",0, this.max);
                        return;
                    }
                }


                if(minIsNumber && maxIsNumber){
                    if(this.min > this.max){
                            var temp = this.min;
                            this.min = this.max;
                            this.max = temp;
                        }
                }
               
                // if(!isNaN(this.min)){
                //     this.min = 0;
                //     minPrice = 0;
                // }
                // if(!isNaN(this.max)){
                //     this.max = null;
                //     maxPrice = Number.MAX_SAFE_INTEGER;
                // }
                // console.log(isNaN(this.max))
                // console.log(this.min);
                // console.log(this.max);
                minPrice = this.min;
                maxPrice = this.max;
                // console.log(minPrice);
                // console.log(maxPrice);
                if(this.min < 0){
                    this.min = 0;
                    minPrice = 0;
                }
                if(this.max < 0){
                    this.max = null;
                    maxPrice = Number.MAX_SAFE_INTEGER;
                }


                if(this.min === null){
                    this.min = 0; 
                    minPrice = 0;
                }
                // console.log(minPrice);
                // console.log(maxPrice);
                this.$emit("addPricingFilter",minPrice, maxPrice);
            }


        }
    }
}
</script>


<style>
    /* Chrome, Safari, Edge, Opera */
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


<template>
    <div class="w-1/5 h-130 bg-primary-2 rounded-lg">
        <div class="text-center pt-3 font-bold text-gray-600 text-lg">Filter Option</div>
        
        <div class="pl-3 text-secondary-1 font-bold text-lg">
            <div class="">Price</div>
        </div>
        <div class="pl-3">
            <div>
                <input class="w-20 appearance-none mr-2 text-center border-none h-7 focus:border-secondary-1 focus:ring-0 border-transparent" v-model="min" type="number" placeholder="₹ Min">
                <input class="w-20 appearance-none text-center border-none h-7 focus:border-secondary-1 focus:ring-0 border-transparent" v-model="max" type="number" placeholder="₹ Max">
                <button class="ml-2 w-24 bg-secondary-1 text-gray-50 rounded-sm" @click="setMinMax" >Go</button>
            </div>
        </div>

        <div class="pl-3 mt-6 text-secondary-1 font-bold text-lg">
            <div class="">Body Parts</div>
        </div>
        <div class="flex flex-col ml-10">
            <div v-for="item in filters" :key="item.id">
                <Checkbox @addFilter="addFilter" :genre=item.part />
            </div>
        </div>
        <div class="pl-3 mt-6 text-secondary-1 font-bold text-lg">
            <div class="">Languages</div>
        </div>
        <div class="flex flex-col ml-10">
            <div v-for="item in filters" :key="item.id">
                <Checkbox @addFilter="addFilter" :language=item.lang />
            </div>
        </div>
    </div>
</template>

<style>

</style>