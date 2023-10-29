<template>
  <div class="w-screen h-screen flex flex-col justify-center items-center">
    <button class="bg-red p-2 text-white text-lg font-bold" @click="increment()">BUTTON</button>
    <p>
      {{ name }}
    </p>
    <p>
      {{ doubleCount }}
    </p>
  </div>
</template>


<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from '~/stores/useCounterStore ';
import http from '~/services/baseService'

const store = useCounterStore()

const { name, doubleCount } = storeToRefs(store)
const { increment } = store

onMounted( async() => {
  const {data} = await http.get('https://www.omdbapi.com/?apikey=31ccf49&i=tt3896198')
  console.log(data)
})
</script>