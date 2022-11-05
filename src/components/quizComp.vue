<template>  
      <div class="col-span-2">
        <div class="text-2xl text-emerald-500">
          <!-- No quizzes available -->
          <!-- {{quiz[0].answers}} -->
          {{score}}/5
        </div> 
        <div 
          v-for="q in quiz"
          class="flex flex-col my-4 border-l-4 p-5 border-l-emerald-500 hover:shadow-lg">
          <div class="text-gray-500 text-lg">
            {{q.question}} 
            <!-- {{q.correctAnswer}} -->

            <div class="flex items-center my-4" v-for="ans in q.answers">
              <input     
                @click="setScore(ans,q.correctAnswer)"
                type="radio"  
                class="w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300   dark:focus:ring-emerald-600 dark:ring-offset-gray-800   dark:bg-gray-700 dark:border-gray-600">
              <label for="default-radio-1"  
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500">
                {{ans}}  
              </label>
            </div>

          </div>
        </div>
      </div> 
</template>

<script setup>
import {   ref } from 'vue'; 
import quizApi from '../api/quizApi';

const quiz = ref([])
const score = ref(0) 

quiz.value = await quizApi.quizzes('film_and_tv')
// quiz.value.

const setScore = (ans,ca) => {
  ans == ca ? score.value++ :'' //console.log('right') : console.log('wrong')
}

console.log(quiz.value[0].answers)
</script>
 