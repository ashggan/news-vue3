<template>  
  
    <div v-show="cart.length != 0" class="pointer-events-auto fixed  max-w-md ml-10">
        <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
            <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6 ">
                <div class="flex items-start justify-between">
                    <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
                        Shopping cart
                    </h2> 
                </div>

                <div class="mt-8">
                    <div class="flow-root">
                        <ul role="list" class="-my-6 divide-y divide-gray-200">

                            <li v-for="item in cart" class="flex py-6">
                                <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img :src="item.item.image" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="h-full w-full object-cover object-center">
                                </div>

                                <div class="ml-4 flex flex-1 flex-col">
                                    <div>
                                    <div class="flex flex-col justify-between text-base font-medium text-gray-900">
                                        <h3>
                                        <a href="#">{{item.item.title}}</a>
                                        </h3>
                                        <p class="ml-0">${{item.item.price}}</p>
                                    </div>
                                     </div>
                                    <div class="flex flex-1 items-end justify-between text-sm">
                                    <p class="text-gray-500">Qty {{item.quantity}}</p>

                                    <div class="flex">
                                        <button type="button" 
                                        @click="removeItem(item.item)"
                                        class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                    </div>
                                    </div>
                                </div>
                            </li> 
                        </ul>
                    </div>
                </div>
            </div>

            <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
            <div class="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>${{total}}</p>
            </div> 
            <div class="mt-6">
                <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
            </div> 
            </div>

        </div>
    </div> 
</template>

<script setup> 
import { productStore } from '@/stores/products' 
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const store = productStore()
const {cart} = storeToRefs(store)
const total =  store.getTotal

const removeItem = item => store.removeItem(item)

</script>
 
 