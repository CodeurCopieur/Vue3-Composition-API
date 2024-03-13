<script setup>
  import { ref } from 'vue'

  const counter = ref(0);

  const increase = () => {
    counter.value++;
  };
  const decrease = () => {
    counter.value--;
  };
</script>

<template>
 <div class="center">
  <h1>Counter Component</h1>
 <div>
  <button @click.prevent="decrease()" v-if="counter.value < 0">-</button>
  &nbsp;
  <span>{{counter}}</span>
  &nbsp;
  <button @click.prevent="increase()">+</button>
 </div>
 </div>
</template>
<style scoped>
  .center {
    text-align: center;
  }
</style>