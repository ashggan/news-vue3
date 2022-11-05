<template>
    <div class="border-l-4 border-l-emerald-500 p-5">
        <div class="flex flex-row justify-between items-center ">
          <h2 class="text-lg uppercase">Latest Crypto News </h2>  
          <span @click="reload">
            <i class="fa fa-refresh text-gray-500 mr-5 cursor-pointer"></i>
        </span>
        </div>

        <div class="text-gray-500 text-sm my-4 hover:text-emerald-500" v-for="news in newsList">
            <a :href="news.url" target="_blank"  >
                - {{news.title}} 
            </a><small class="font-bold mx-3">{{news.source}}</small>
        </div>
    </div>
</template>

<script setup>
import {   ref } from 'vue'; 
import api from '../api/cryptoNews.js'

const newsList = ref([]) 
newsList.value = await  api.newApi

const reload = async () => {
    console.log('loading...')
    newsList.value = await  api.newApi 
}

 
</script>
 

 