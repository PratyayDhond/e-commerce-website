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
            if(this.min < 0)
                this.min = 0;
            if(this.max < 0)
                this.max = null;
            if(this.min > this.max){
                var temp = this.min;
                this.min = this.max;
                this.max = temp;
            }
            if(this.min === null)
                this.min = 0; 
            this.$emit("addPricingFilter",this.min, this.max);
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