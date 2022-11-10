<template>
    <div class="container m10">
        <div class="text-center text-2xl uppercase">Cart</div>
    </div>
    <div class="container grid grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- cart items  -->
            <cartItems></cartItems>
        <!-- checkout form  -->
            <checkOut></checkOut>
    </div>
</template>

<script setup>
import cartItems from '@/components/shopping/cartItems.vue'
import checkOut from '@/components/shopping/checkOut.vue'

</script>
 