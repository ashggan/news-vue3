<template>
    <!-- v-show="newsList != 0 "  -->  
        <div class=" grid grid-cols-3 gap-3 " >
            <div class=" py-10"  v-for="news in newsList" :key="news.id">
                <a  :href="news.link"   target="_blank" > 
                <div class="shadow-2xl p-5 b-border hover:shadow-md cursor-pointer transition-transform ease-in-out delay-500">
                    <div class="text-md text-indigo-500 font-bold uppercase">
                        {{news.title}} 
                    </div>
                    <p class=" text-gray-500 py-4 text-sm">{{news.description}}</p>
                    <span class="  text-white text-xs bg-indigo-500 py-1 px-2 rounded-md hover:bg-indigo-700">{{news.source_id}}</span>
                </div>
                </a>
            </div>
        </div>   
</template>

<script setup>   
defineProps({
    newsList:{
        type:Array,
        default:[],
    }
})
</script>
 