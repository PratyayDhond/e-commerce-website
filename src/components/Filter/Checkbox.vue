<script>
export default{
    props:["launguage","bodypart","genre"]
}
</script>
<template>
    <div v-if="launguage" class="flex items-center mt-1">
        <label class="inline-flex items-center mt-1">
            <input type="checkbox" class="form-checkbox h-5 w-5 text-secondary-1 focus:border-transparent focus:ring-transparent border-2 border-gray-200">
            <span class="ml-2 text-gray-600 font-medium">{{ launguage}}</span>
        </label>
    </div>
    <div v-if="bodypart" class="flex items-center mt-1">
        <label class="inline-flex items-center mt-1">
            <input type="checkbox" class="form-checkbox h-5 w-5 text-secondary-1 focus:border-transparent focus:ring-transparent border-2 border-gray-200">
            <span class="ml-2 text-gray-600 font-medium">{{bodypart}}</span>
        </label>
    </div>
    <div v-if="genre" class="flex items-center mt-1">
        <label class="inline-flex items-center mt-1">
            <input type="checkbox" class="form-checkbox h-5 w-5 text-secondary-1 focus:border-transparent focus:ring-transparent border-2 border-gray-200">
            <span class="ml-2 text-gray-600 font-medium">{{genre}}</span>
        </label>
    </div>
</template>
<style></style>