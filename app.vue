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

const store = useCounterStore()

const { name, doubleCount } = storeToRefs(store)
const { increment } = store
</script>