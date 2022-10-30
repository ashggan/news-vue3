 <template>
  <div class="flex bg-black h-[40vh] shadow-xl">
    <div class="container flex items-center justify-center flex-col space-y-4"> 
        <div class="text-4xl text-white text-center font-bold uppercase">
          latest news
        </div> 
        <input type="text" class=" border-b-2 p-3  border-b-emerald-400 bg-transparent focus:outline-none text-white w-[40vw]" placeholder="Find interesting news">
    </div>  
  </div>
  
 </template>
 
 <script setup>
import { onMounted, ref } from 'vue';
// import axios from 'axios'

// const key = 'pub_12778d177e70687d0c81e27ec798229ad91a2'

// const url  = `https://newsdata.io/api/1/news?apikey=pub_12778d177e70687d0c81e27ec798229ad91a2`

const newsList = ref([])
// const getNews = async () => {
//   console.log('news')
//   await axios.get('https://newsdata.io/api/1/news?apikey=pub_12778d177e70687d0c81e27ec798229ad91a2')
//   .then(res=>console.log(res))
//   .catch(error =>console.error(error))
// }


// onMounted(() => {
//   getNews()
// })

 </script>
 
