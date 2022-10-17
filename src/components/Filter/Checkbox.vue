<script>
export default{
    props:["language","bodypart","genre"],
    emits: ["addFilter"],
    data(){
        return{
          check:false, 
          value: "",
        };
    },
    created(){ 
        this.value = this.language ?? this.bodypart ?? this.genre;
        // console.log(this.value);
        // console.log(this.bodypart);
        // console.log(this.genre)
    },
    methods:{
        checked: function(e){
            // console.log(e.target.value)
            // console.log(e.target.value);
            // console.log(this.value)
            if(e.target.value === "on")
            this.$emit("addFilter",this.value)
        }
    }

}
</script>
<template>
    <div v-if="language" class="flex items-center mt-1">
        <label class="inline-flex items-center mt-1">
            <input type="checkbox" v-model="check" @click="checked($event)" class="form-checkbox h-5 w-5 text-secondary-1 focus:border-transparent focus:ring-transparent border-2 border-gray-200">
            <span class="ml-2 text-gray-600 font-medium">{{ language}}</span>
        </label>
    </div>
    <div v-if="bodypart" class="flex items-center mt-1">
        <label class="inline-flex items-center mt-1">
            <input type="checkbox" v-model="check" @click="checked($event)" class="form-checkbox h-5 w-5 text-secondary-1 focus:border-transparent focus:ring-transparent border-2 border-gray-200">
            <span class="ml-2 text-gray-600 font-medium">{{bodypart}}</span>
        </label>
    </div>
    <div v-if="genre" class="flex items-center mt-1">
        <label class="inline-flex items-center mt-1">
            <input type="checkbox" v-model="check" @click="checked($event)" class="form-checkbox h-5 w-5 text-secondary-1 focus:border-transparent focus:ring-transparent border-2 border-gray-200">
            <span class="ml-2 text-gray-600 font-medium">{{genre}}</span>
        </label>
    </div>
</template>
<style></style>