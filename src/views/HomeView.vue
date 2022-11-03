<template>
  <div class="flex bg-black h-[250px] shadow-xl  border-b-4  border-b-emerald-500 ">
    <div class="container flex items-center justify-center flex-col space-y-4"> 
        <div class="text-4xl text-white text-center font-bold uppercase">
           latest news <!-- -->
        </div> 
        <div class="flex flex-row">
          <div class="mx-4 text-white pr-4" v-for="item in category"> 
            <div class="border-2 border-emerald-500 rounded-full px-5 py-3 hover:bg-emerald-500 hover:text-black cursor-pointer transition-all delay-100 ease-out">
              {{item}}
            </div>
          </div>
        </div>
    </div>  
  </div>
  <div class="container">
    <div   class="grid grid-cols-3 gap-4 my-10"> 
      <div class="col-span-2">
        <div class="text-2xl text-emerald-500">
          No quizzes available
        </div> 
      </div>
      <cryptoNews/>  
    </div> 
  </div>
 
     
 
 

</template>

<script setup >
import cryptoNews from '../components/cryptoNews.vue';

const category = ['Society & Culture', 'Film & TV', 'General Knowledge']

 


// console.log(getNews() )
</script>
 
