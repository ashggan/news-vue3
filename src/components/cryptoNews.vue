<template>
    <div class="border-l-4 border-l-emerald-500 p-5">
        <div class="flex flex-row justify-between items-center ">
          <h2 class="text-lg uppercase">Latest Crypto News </h2>  
          <span @click="getNews">
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
import { onMounted, ref } from 'vue';
import axios from "axios";

const newsList = ref([])

const getNews = async () => {
    

    const options = {
    method: 'GET',
    url: 'https://crypto-news30.p.rapidapi.com/news/bbc',
    headers: {
        'X-RapidAPI-Key': '5f7f1e224dmsh0ae426966b1cedfp1a3ab4jsn450cb63d12d5',
        'X-RapidAPI-Host': 'crypto-news30.p.rapidapi.com'
    }
    };

    const res = await axios.request(options)
    .then(res => newsList.value = res.data )
    .catch(function (error) {
        console.error(error);
    });
}


onMounted(() => { 
    getNews()
})


</script>

<style lang="scss" scoped>

</style>