import { createPinia } from "pinia";
import { ref } from "vue";

export const quizStore = createPinia('quiz-store',()=>{
    const questions = ref([])

})