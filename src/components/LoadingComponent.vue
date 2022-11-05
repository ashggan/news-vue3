<template>
    <div>
        <!-- <p>Loading ...</p> -->
        <img :src="'./src/assets/'+imgs[0]" alt="">
    </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
    imgInedx:{
        type:Number,
        default:0
    }
})

const imgs= ref([])

imgs.value = [
    'loading.svg'
]

</script>

 