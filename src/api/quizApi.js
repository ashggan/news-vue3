import axios from "axios";



const quizzes = async cat => {
    // console.log(cat)
    const res  = await axios.get(`https://the-trivia-api.com/api/questions?categories=${cat}&limit=5&difficulty=easy`)
    .then(res => res.data )
    .catch(err => console.error(err))
    
    // res = res.map(obj => ({...obj,answers : [...obj.incorrectAnswers,obj.correctAnswer].sort()  }))

    // console.log(res)

    return res.map(obj => ({...obj,answers : [...obj.incorrectAnswers,obj.correctAnswer].sort()}))
}

export default { 
    quizzes : cat => quizzes(cat)
}