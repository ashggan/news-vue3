<template>
    <div class="container mt-10 flex items-center justify-center flex-col space-y-10 py-10"> 
         <div class="text-2xl text-center font-bold uppercase">
            Sign In
         </div>    
         <div class="group">
            <input type="text" placeholder="Email"
            class="bg-transparent focus:outline-none 
             focus:ring-none border-b-4 border-violet-500 ">
         </div>
    </div>
    
  </template>
<script setup>
  import { ref } from 'vue'
  import { supabase } from '../supabase'

  const loading = ref(false)
  const email = ref('')
  const password = ref('')
  const confirmPassword = ref('')

  const handleLogin = async () => {
    try {
      loading.value = true
      const { error } = await supabase.auth.signInWithOtp({
        email: email.value,
      })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      loading.value = false
    }
  }
</script>

