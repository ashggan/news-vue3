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
      <Suspense>
        <template #default>
        <QuizComp/>
        </template>
        <template #fallback>
          <!-- <LoadingComponent/> -->

          <img src="../assets/loading-2.svg" alt="" srcset="">
        </template>
      </Suspense> 
       <div class="text-black txt-lg" v-if="errMsg">{{errMsg}}</div>
      <Suspense v-else>
        <template #default>
          <cryptoNews/>  
        </template>
        <template #fallback> 
          <LoadingComponent/>
        </template>
      </Suspense>
    </div> 
  </div>
</template>

<script setup >
import { ref, onErrorCaptured } from 'vue';
import cryptoNews from '../components/cryptoNews.vue';
import LoadingComponent from '../components/LoadingComponent.vue'
import QuizComp from '../components/quizComp.vue';


const category = ['Science','Society & Culture', 'Film & TV', 'General Knowledge']
const errMsg = ref(null)

onErrorCaptured(()=>{
    errMsg.value = 'Sometg went wrong'
})



// console.log(getNews() )
</script>
 
