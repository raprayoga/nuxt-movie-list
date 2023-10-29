<template>
  <div class="w-screen h-screen flex flex-col justify-center items-center">
    <button class="flex items-center justify-center text-center cursor-pointer disabled:cursor-not-allowed transition-all transition-500 bg-primary text-white hover:opacity-80 rounded-lg px-5 py-2.5 lg:text-sm text-xs w-[300px]" @click="increment()">BUTTON</button>
    <p>
      {{ name }}
    </p>
    <p>
      {{ doubleCount }}
    </p>
    <BaseButton class="w-[300px]" size="lg" variant="primary">
      BaseButton Component
    </BaseButton>
  </div>
</template>


<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from '~/stores/useCounterStore ';
import http from '~/services/baseService'
import BaseButton from "./BaseButton.vue";

const store = useCounterStore()

const { name, doubleCount } = storeToRefs(store)
const { increment } = store

onMounted( async() => {
  const {data} = await http.get('https://www.omdbapi.com/?apikey=31ccf49&i=tt3896198')
  console.log(data)
})
</script>