<script>
import Checkbox from './Checkbox.vue';

export default{
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
            ],
        }
    },
    components:{
        Checkbox
    }
}
</script>

<template>
    <div class="w-1/5 h-130 bg-primary-2 rounded-lg">
        <div class="text-center pt-3 font-bold text-gray-600 text-lg">Filter Option</div>
        
        <div class="pl-3 text-secondary-1 font-bold text-lg">
            <div class="">Price</div>
        </div>
        <div class="pl-3">
            <div>
                <input class="w-20 appearance-none mr-2 text-center border-none h-7 focus:border-secondary-1 focus:ring-0 border-transparent" type="number" placeholder="₹ Min">
                <input class="w-20 appearance-none text-center border-none h-7 focus:border-secondary-1 focus:ring-0 border-transparent" type="number" placeholder="₹ Max">
                <button class="ml-2 w-24 bg-secondary-1 text-gray-50 rounded-sm" >Go</button>
            </div>
        </div>

        <div class="pl-3 mt-6 text-secondary-1 font-bold text-lg">
            <div class="">Body Parts</div>
        </div>
        <div class="flex flex-col ml-10">
            <div v-for="item in filters" :key="item.id">
                <Checkbox :bodypart=item.part />
            </div>
        </div>
        <div class="pl-3 mt-6 text-secondary-1 font-bold text-lg">
            <div class="">Languages</div>
        </div>
        <div class="flex flex-col ml-10">
            <div v-for="item in filters" :key="item.id">
                <Checkbox :launguage=item.lang />
            </div>
        </div>
    </div>
</template>

<style>

</style>