<script>
    // import Header from '../../components/Header/Header.vue';
    import Filter from '../../components/Filter/Filter.vue';
    import LatestBooks from '../../components/HomePage/LatestBooks.vue';
    import ResultBook from '../../components/Search/ResultBook.vue';
    import firebase from 'firebase/compat/app';
    
    
    export default{
        
        data(){
            return{
                books: [],
                filteredBooks:[],
                serachedBooks:[],
                search: this.$route.query.search,
                userID: this.$route.query.userId,
                filters: [],
                languageSpecified: false,
                bodyPartSpecified: false,
                pricingFilterSet: false,
                filterSet: false,
                minPrice: Number.MIN_SAFE_INTEGER,
                maxPrice: Number.MAX_SAFE_INTEGER,
                prevFilterLength: 0,
                searchResultLoaded: false,
            }
        },
        created(){
            // console.log('search = ' + this.search)
            // console.log(typeof(this.search))
            let str = ''
            str = this.search
            // console.log("Inside created of searchResult.vue")
            const db = firebase.firestore(); 
            try{
                db.collection('books').get().then((querySnapshot) => {
                    querySnapshot.forEach(doc =>{
                        // console.log(doc.id)
                        var obj = doc.data();
                        obj.id = doc.id;
                        this.books.push(obj);
                    });
                    // console.log(this.books);
                    
                        this.filterData();
                })
            }
            catch(e){
                // console.log(e)
            }
        },
        components:{
        Filter,
        LatestBooks,
        ResultBook
    },
    methods:{
        submit(){
    
        },
        filterData(){
            this.searchResultLoaded = true;
            this.filteredBooks = []
            for(let i = 0; i < this.books.length; i++){
                if(this.books[i].name.toLowerCase().includes(this.search.toLowerCase().trim())){
                    this.filteredBooks.push(this.books[i]);
                }
            }
            // console.log(this.filteredBooks)
            // if(this.filterSet)
                this.serachedBooks = this.filteredBooks;
                this.updateFilteredArray();
    
        },
        updateFilteredArray(){
            this.filteredBooks = this.serachedBooks;
            if(this.filters.length !== 0){
                this.filterArray();
            }

            if(this.pricingFilterSet){
                this.filterArray();
            }
        
        },
        filterArray(){
            console.log("In Filter Array")
            this.languageSpecified = false;
            this.bodyPartSpecified = false;
    
            if(this.filters.includes("English") || this.filters.includes("Hindi") || this.filters.includes("Marathi") || this.filters.includes("Sanskrit"))
                this.languageSpecified = true;
    
            if(this.filters.includes("Legs") || this.filters.includes("Shoulders") || this.filters.includes("Hands") || this.filters.includes("Neck") || this.filters.includes("Head") || this.filters.includes("Joints") || this.filters.includes("Back"))
                this.bodyPartSpecified = true;
    
            if(this.languageSpecified){
                this.filterByLanguage();
            }
    
            if(this.bodyPartSpecified){
                this.filterByBodyPart();
            }

            if(this.pricingFilterSet){
                this.filterByPrice();
            }
    
            console.log(this.filteredBooks)
            console.log(this.serachedBooks)
        },
        filterByBodyPart(){
            var tempBooks = new Set();
            this.filters.forEach(filter => {
                this.filteredBooks.forEach(book => {
                    if(book.bodypartTags.includes(filter)){
                        console.log(book.bodypartTags + " -> " + filter)
                        tempBooks.add(book);
                    }
                })
            })
            
            this.filteredBooks = [];
            tempBooks.forEach(book => {
                this.filteredBooks.push(book);
            })
        },
        filterByLanguage(){
            var tempBooks = new Set();
            this.filters.forEach(filter => {
                this.filteredBooks.forEach(book => {
                    // console.log(book.languageTags + " " + filter);
                    if(book.languageTags.includes(filter)){
                        // console.log("Inside if");
                        tempBooks.add(book);
                    }
                });
            });
    
            this.filteredBooks = [];
                tempBooks.forEach(book => {
                this.filteredBooks.push(book);
            });
        },
        filterByPrice(){
            this.pricingFilterSet = false;
            var temp = [];
            this.filteredBooks.forEach(book => {
                if(book.price >= this.minPrice && book.price <= this.maxPrice){
                    temp.push(book);
                }
            })
            this.filteredBooks = temp;
        },
        addFilter(value){
            if(this.filters.includes(value))
                this.removeFilter(value);
            else
                this.filters.push(value);
                // this.updateArray();
                this.updateFilteredArray();
        },
        removeFilter(value){
            var temp = [];
            this.filters.forEach(item => {
                if(item !== value)
                    temp.push(item);
            })
            this.filters = temp;
        }, 
        addPricingFilter(min,max){
            this.pricingFilterSet = true;
            this.minPrice = min;
            this.maxPrice = max;
            console.log(this.minPrice)
            console.log(this.maxPrice)
            this.updateFilteredArray();
        },

    },
    watch:{
        search(){
            this.filterData();
        }
    } 
    }
    </script>
    
    <template>
        <div class="relative" >
            <!-- Header -->
            <div class="fixed z-10 w-full top-0">
                <div class="pt-3 px-5 pb-8 flex items-center justify-between bg-white">
                    <router-link to="/home">
                        <div class="">
                            <img class="h-14" src="../../assets/images/logo.png" alt="" >
                        </div>
                    </router-link>
                    <div class="w-4/5">
                    <!-- <router-link to="/searchResult"> -->
                    <!-- <router-link :to="{name: 'searchResult', query: {userID: userID}}"> -->
                        <div class="relative" >
                            <svg class="pointer-events-none w-8 h-5 absolute top-1/2 transform -translate-y-1/2 left-3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 90 90" width="90px" height="80px" @click="true">
                            <g id="surface1552061">
                                <path style=" stroke:none;fill-rule:nonzero;fill:rgb(61.176473%,63.921571%,68.627453%);fill-opacity:1;" d="M 39 9 C 22.46875 9 9 22.46875 9 39 C 9 55.53125 22.46875 69 39 69 C 46.191406 69 52.792969 66.445312 57.96875 62.207031 L 75.878906 80.121094 C 76.632812 80.90625 77.75 81.21875 78.800781 80.945312 C 79.851562 80.671875 80.671875 79.851562 80.945312 78.800781 C 81.21875 77.75 80.90625 76.632812 80.121094 75.878906 L 62.207031 57.964844 C 66.445312 52.792969 69 46.191406 69 39 C 69 22.46875 55.53125 9 39 9 Z M 39 15 C 52.289062 15 63 25.710938 63 39 C 63 52.289062 52.289062 63 39 63 C 25.710938 63 15 52.289062 15 39 C 15 25.710938 25.710938 15 39 15 Z M 39 15 "/>
                            </g>
                            </svg>
                            <input class="bg-primary-1 appearance-none border-transparent border-white rounded-xl h-10 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-secondary-1 focus:ring-transparent pl-14 opacity-100" type="text" placeholder="Search for books" v-model="search" @keypress.enter="filterData">
                        </div>
                        <!-- </router-link> -->
                    </div>
                    <div class="">
                        <div class="flex gap-8">
                            <router-link :to="{name: 'cart', query: {id: userID}}">
                                <div class="w-8" @click="true">
                                    <img class="w-full" src="../../assets/images/cartBlack.png" alt="">
                                </div>
                            </router-link>
                            <router-link :to="{name: 'wishList', query: {id: userID}}">
                                <div class="w-8">
                                    <img class="w-full" src="../../assets/images/heartBlack.png" alt="">
                                </div>
                            </router-link>
                            <router-link :to="{name: 'userView', query: {id: userID}}">
                                <div class="w-8">
                                    <img class="w-full" src="../../assets/images/userBlack.png" alt="">
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Filter -->
                <div class="mt-24 absoulute ml-7">
                    <div class="">
                        
                        <div class="fixed h-96 w-full">
                            <p>Home / Books</p>
                            <Filter @addFilterToHome="addFilter" @addPricingFilter="addPricingFilter" />
                        </div>
                    </div>
                </div>
    
            <div class="absolute top-10 left-96">
                <div class="flex items-baseline">
                    <div class="mr-5 font-medium text-lg text-gray-800">Results for</div>
                    <div class="text-gray-">"{{search}}"</div>
                </div>
                
                <div class="w-240" >
                    <div v-if="!searchResultLoaded" style="padding-top: 30vh;">
                        <div style="text-align: center; font-size: 36px; font-weight: 400w;">
                            Loading...
                        </div>
                    </div>
                    <div v-else>
                        <div v-if="filteredBooks.length === 0">
                        <div>
                            <img src="../../assets/emptySearchCartIllustration.png" style="height: 25vw; margin: auto;" alt="">
                            <p style="text-align: center; font-size: 24px; font-weight: 300w;">
                                Sorry! No Result found :(
                            </p>
                        </div>

                        </div>
                        <div v-else v-for="item in filteredBooks" :key="item.id">
                            <ResultBook  :bookName="item.name" :bookDate="item.publicationYear" bookLanguage="English" bookCover="hardcover" :bookPrice="item.price" :bookImageURL="item.url" :id="item.id"  :userID="userID"/>
                        </div>
                    </div>
                </div>
                
            </div>
            
    
            
        </div>
        
            
    </template>
    
    <style>
    </style>