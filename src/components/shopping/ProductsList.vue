<template> 
    <div  
        v-for="pro in products"
        class="group relative hover:shadow-2xl shadow-lg group-hover:cursor-pointer pb-4 border-b-2 border-b-indigo-500 transition-shadow duration-500 ease-in-out"> 
        <!-- product image  -->
        <div 
            class="min-h-60 aspect-w-1 aspect-h-1 w-[90%] overflow-hidden  group-hover:opacity-75 lg:aspect-none lg:h-60 p-5">
            <img 
                :src=" pro.image"   alt="Image " 
                class="h-full w-full object-contain object-center lg:h-full lg:w-full">
        </div>

        <div 
            class=" w-full flex flex-col h-[210px] place-content-between p-6" style="cursor: auto;">
        <!-- <h2 class="text-sm title-font text-gray-500 tracking-widest" style="cursor: auto;">ON SALE</h2> -->
            <!-- title section  -->
            <h1 
                class="text-gray-900 text-md font-bold  mb-1" style="cursor: auto;">{{pro.title}}
                <!-- <i class="fa fa-trash"></i> -->
            </h1>

            <div class="flex mb-4">
                <span class="flex items-center justify-between w-full ">
                    <!-- <star-rating :rating="pro.rating.rate" :star-style="starStyle"></star-rating> -->
                    <star-rating 
                        :star-size="18"
                        :read-only="true" 
                        :show-rating="false"
                        :increment="0.01"
                        :rating="pro.rating.rate">
                    </star-rating>

                    <span class="text-gray-600 ml-3">{{pro.rating.count}} Reviews</span>
                </span>
            </div>
        
            <div class="flex">
                <span class=" text-lg text-gray-900">
                    ${{pro.price}}
                </span>
                <button 
                    class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Buy
                </button>
                <button 
                    @click="addItemToCart(pro)"
                    class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <i class="fa fa-shopping-cart"></i>
                </button>
                <button 
                    class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup> 
import StarRating from 'vue-star-rating'
import { productStore } from '@/stores/products' 
 
const store = productStore() 
await store.fetchProducts()
const products = store.products  
const addItemToCart = pro => store.addItemToCart(pro)
</script>


