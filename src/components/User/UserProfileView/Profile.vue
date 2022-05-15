<script>

</script>

<template>
<div class='flex-col'>
    <div class="mt-28">
        <div class="ml-20 font-bold text-3xl">USER PROFILE</div>
        <div>
            <div class="ml-20 mt-2 mb-1">Name</div>
            <div class="rounded-lg ml-20 border-2 h-8 w-150">
                <div><input class="h-7 w-149 bg-LGB border-transparent text-gray-700 rounded-lg font-semibold focus:outline-none focus:bg-LGB focus:border-transparent focus:ring-transparent placeholder:font-extralight placeholder-gray-700" type="text" placeholder="Harsh Naidu"></div>
            </div>
            <div class="ml-20 mt-2 mb-1">Email</div>
            <div class="rounded-lg ml-20 border-2 h-8 w-150">
                <div><input class="h-7 w-149 bg-LGB border-transparent text-gray-700 rounded-lg font-semibold focus:outline-none focus:bg-LGB focus:border-transparent focus:ring-transparent placeholder:font-extralight placeholder-gray-700" type="text" placeholder="naiduharsh45@gmail.com"></div>
            </div>
        </div>
    </div>
    <div>
        <div class="mt-5 ml-20 font-bold text-3xl">USER ADDRESS</div>
            <div class="flex">
                <div class="ml-20 mt-2 mr-2">
                    <div>Phone Number</div>
                    <div class="rounded-lg mt-1 border-2 h-8 w-96">
                        <div><input class="h-7 w-80 bg-LGB border-transparent text-gray-700 rounded-lg font-semibold focus:outline-none focus:bg-LGB focus:border-transparent focus:ring-transparent placeholder:font-extralight placeholder-gray-700" type="text" placeholder="9146151140"></div>
                    </div>
                </div>
                <div class="ml-28 mt-2 pl-2">
                    <div>Zipcode or Pincode</div>
                    <div class="rounded-lg mt-1 border-2 h-8 w-96">
                        <div><input class="h-7 w-80 bg-LGB border-transparent text-gray-700 rounded-lg font-semibold focus:outline-none focus:bg-LGB focus:border-transparent focus:ring-transparent placeholder:font-extralight placeholder-gray-700" type="text" placeholder="440012"></div>
                    </div>
                </div>
            </div>
            <div class="flex">
                <div class="ml-20 mt-2 mr-2">
                    <div>City/District/Town</div>
                    <div class="rounded-lg mt-1 border-2 h-8 w-96">
                        <div><input class="h-7 w-80 bg-LGB border-transparent text-gray-700 rounded-lg font-semibold focus:outline-none focus:bg-LGB focus:border-transparent focus:ring-transparent placeholder:font-extralight placeholder-gray-700" type="text" placeholder="Nagpur"></div>
                    </div>
                </div>
                <div class="ml-28 mt-2 pl-2">
                    <div>State</div>
                    <div class="rounded-lg mt-1 border-2 h-8 w-96">
                        <div><input class="h-7 w-80 bg-LGB border-transparent text-gray-700 rounded-lg font-semibold focus:outline-none focus:bg-LGB focus:border-transparent focus:ring-transparent placeholder:font-extralight placeholder-gray-700" type="text" placeholder="Maharashtra"></div>
                    </div>
                </div>
            </div>
            <div class="ml-20 mt-2">
                <div>Address Line 1</div>
                <div class="rounded-lg mt-1 border-2 h-8 w-150">
                    <div><input class="h-7 w-149 bg-LGB border-transparent text-gray-700 rounded-lg font-semibold focus:outline-none focus:bg-LGB focus:border-transparent focus:ring-transparent placeholder:font-extralight placeholder-gray-700" type="text" placeholder="635, Ramkrishna Bhawan"></div>
                    </div>
            </div>
            <div class="ml-20 mt-2">
                <div>Address Line 2</div>
                <div class="rounded-lg mt-1 border-2 h-8 w-150">
                    <div><input class="h-7 w-149 bg-LGB border-transparent text-gray-700 rounded-lg font-semibold focus:outline-none focus:bg-LGB focus:border-transparent focus:ring-transparent placeholder:font-extralight placeholder-gray-700" type="text" placeholder="Behind Hotel Hardeo, Sitabuldi"></div>
                </div>
            </div>
        </div>
        <div class="flex mt-5 w-32 h-8 ml-150 text-md text-white rounded-sm bg-green-400 text-center cursor-pointer hover:bg-secondary-1 hover:text-white font-medium">
             <router-link to="/User">
                 <div class = "ml-4 mt-1">Save Changes</div>
             </router-link>
        </div>
    </div>
</template>

<style>

</style>