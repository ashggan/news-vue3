<template>
  <div class="flex bg-black h-[250px] shadow-xl  border-b-4  border-b-emerald-500 ">
    <div class="container flex items-center justify-center flex-col space-y-4"> 
        <div class="text-4xl text-white text-center font-bold uppercase">
           latest news {{newsList.length}}<!-- -->
        </div> 
        <div class="flex flex-row">
          <input 
            type="text" 
            class="p-3  border-b-2  border-b-emerald-400 bg-transparent focus:outline-none text-white w-[40vw]" placeholder="Find interesting news"   
            v-model="input">  
            <button 
              class="text-emerald-500 "
              @click="getNews" >
              <i class="fa fa-search"></i>
            </button>
        </div>
    </div>  
  </div>
  <div class="container">
   <div v-if="newsList.length == 0" class="flex flex-row item-center justify-center my-10">
    <div class="text-2xl text-emerald-500">
      No news available
    </div>
  </div>
  <Suspense v-else>
    <template #default>
      <newsCard :newsList="newsList" />
    </template>
    <template #fallback>
      <!-- <p>loading..</p> -->
      <img src="../assets/loading.svg" alt="" srcset="">
    </template>
  </Suspense>  
  </div>
 
     
 
 

</template>

<script setup >

import { ref } from 'vue';
import NewsCard from '../components/newsCard.vue';
import  axios from 'axios';

const input = ref(null)
const newsList = ref([])


const getNews = async () => {
  // console.log( );  
  await axios
    .get( "https://newsdata.io/api/1/news?apikey=pub_12778d177e70687d0c81e27ec798229ad91a2&q="+input.value)
    // // newsList.value = 
    .then( res => newsList.value =  res.data.results )
    .catch((error) => console.error(error));
    console.log(newsList.value ) 
};


// console.log(getNews() )
</script>
 
