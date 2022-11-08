<template>
    <div class="container">
        <div class="text-2xl uppercase text-gray-900 font-bold my-10 text-center">
            Products
        </div> 
    </div>
    <div class="container mb-10">
        <div v-if="errMsg" 
            class="text-2xl uppercase font-bold text-center">
                {{errMsg}}
        </div>
        <!-- <div class="flex flex-wrap"> -->
        <div v-else 
            class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6  sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <Suspense>
                <template #default>
                    <ProductsList/>
                </template>
                <template #fallback>
                    <!-- <p>Loading...</p> -->
                    <Skeleton v-for="conut in 6" />
                </template>
            </Suspense>
        </div>
    </div>
</template>

<script setup>
import { onErrorCaptured, ref } from 'vue';
import ProductsList from '../components/shopping/ProductsList.vue'
import Skeleton from '../components/Loading/skeleton.vue'


const errMsg = ref(null)
onErrorCaptured(err =>{
    // console.error(error)
    errMsg.value ='Ooops ! something went wrong' //err.message 
})

</script>
 