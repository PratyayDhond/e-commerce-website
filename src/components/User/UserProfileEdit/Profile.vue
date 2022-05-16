<script>

</script>

<template>
<div class='flex-col'>
    <div class="mt-28">
        <div class="ml-20 font-bold text-3xl">USER PROFILE</div>
        <div>
            <div class="ml-20 mt-2 mb-1">Name</div>
            <div class="rounded-lg ml-20 border-2 h-8 w-150">
                <div class="ml-2 font-extralight">Harsh Naidu</div>
            </div>
            <div class="ml-20 mt-2 mb-1">Email</div>
            <div class="rounded-lg ml-20 border-2 h-8 w-150">
                <div class="ml-2 font-extralight">naiduharsh45@gmail.com</div>
            </div>
        </div>
    </div>
    <div>
        <div class="mt-5 ml-20 font-bold text-3xl">USER ADDRESS</div>
            <div class="flex">
                <div class="ml-20 mt-2 mr-2">
                    <div>Phone Number</div>
                    <div class="rounded-lg mt-1 border-2 h-8 w-100">
                        <div class="ml-2 font-extralight">9146151140</div>
                    </div>
                </div>
                <div class="ml-28 mt-2 pl-2">
                    <div>Zipcode or Pincode</div>
                    <div class="rounded-lg mt-1 border-2 h-8 w-100">
                        <div class="ml-2 font-extralight">440012</div>
                    </div>
                </div>
            </div>
            <div class="flex">
                <div class="ml-20 mt-2 mr-2">
                    <div>City/District/Town</div>
                    <div class="rounded-lg mt-1 border-2 h-8 w-100">
                        <div class="ml-2 font-extralight">Nagpur</div>
                    </div>
                </div>
                <div class="ml-28 mt-2 pl-2">
                    <div>State</div>
                    <div class="rounded-lg mt-1 border-2 h-8 w-100">
                        <div class="ml-2 font-extralight">Maharashtra</div>
                    </div>
                </div>
            </div>
            <div class="ml-20 mt-2">
                <div>Address Line 1</div>
                <div class="rounded-lg mt-1 border-2 h-8 w-150">
                    <div class="ml-2 font-extralight">635,Ramkrishna Bhawan,</div>
                    </div>
            </div>
            <div class="ml-20 mt-2">
                <div>Address Line 2</div>
                <div class="rounded-lg mt-1 border-2 h-8 w-150">
                    <div class="ml-2 font-extralight">Behind Hotel Hardeo,Sitabuldi</div>
                </div>
            </div>
        </div>
        <div class="flex ml-230 mt-5 w-28 h-8 ml-150 text-md text-white rounded-sm bg-secondary-1 text-center cursor-pointer hover:bg-primary-1 hover:text-gray-800 font-medium">
             <router-link to="/userEdit">
             <div class = "ml-4 mt-1">Edit Details</div>
             </router-link>
        </div>
    </div>
</template>

<style>

</style>