<script>
export default{
    props: ["userID"],
    data(){
        return{
            search:'',
            // path: "{name: 'searchResult', query: {userID: userID, search:string}}",
            // {name: 'searchResult', query: {userID: userID, search:string}}
        }
    },
    constructed(){

    },
    methods: {
        submit(){
            this.$router.push({ name: 'searchResult', query: { userId: this.userID, search: this.search } })    
        }
    },

}
</script>

<template>
<!-- <router-link to="/searchResult"> -->
    <!-- <router-link :to="{name: 'searchResult', query: {userID: userID}}"> -->
<div class="relative" >
    <svg class="pointer-events-none w-8 h-5 absolute top-1/2 transform -translate-y-1/2 left-3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 90 90" width="90px" height="80px" @click="true">
        <g id="surface1552061">
            <path style=" stroke:none;fill-rule:nonzero;fill:rgb(61.176473%,63.921571%,68.627453%);fill-opacity:1;" d="M 39 9 C 22.46875 9 9 22.46875 9 39 C 9 55.53125 22.46875 69 39 69 C 46.191406 69 52.792969 66.445312 57.96875 62.207031 L 75.878906 80.121094 C 76.632812 80.90625 77.75 81.21875 78.800781 80.945312 C 79.851562 80.671875 80.671875 79.851562 80.945312 78.800781 C 81.21875 77.75 80.90625 76.632812 80.121094 75.878906 L 62.207031 57.964844 C 66.445312 52.792969 69 46.191406 69 39 C 69 22.46875 55.53125 9 39 9 Z M 39 15 C 52.289062 15 63 25.710938 63 39 C 63 52.289062 52.289062 63 39 63 C 25.710938 63 15 52.289062 15 39 C 15 25.710938 25.710938 15 39 15 Z M 39 15 "/>
        </g>
    </svg>
    <input class="bg-primary-1 appearance-none border-transparent border-white rounded-xl h-10 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-secondary-1 focus:ring-transparent pl-14 opacity-100" type="text" placeholder="Search for books" v-model="search" @keypress.enter="submit">
</div>
<!-- </router-link> -->
</template>

<style>
</style>