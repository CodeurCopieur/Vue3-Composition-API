<script setup>
  import { reactive, ref } from 'vue'

  const counter = ref(0);

  const increase = () => {
    counterData.counter++;
  };
  const decrease = () => {
    counterData.counter--;
  };

  const NameTemplate = ref('Template Component');

  const counterData = reactive({
    counter: 0,
    name: 'Template Component',
  })
</script>

<template>
 <div class="center">
  <h1>ref : {{ NameTemplate }} <br> reactive : {{counterData.name}}</h1>
 <div>
  <button @click.prevent="decrease()">-</button>
  &nbsp;
  <span>{{counterData.counter}}</span>
  &nbsp;
  <button @click.prevent="increase()">+</button>
 </div>

  <input type="text" v-model="counterData.name" name="" id="">
 </div>
</template>
<style scoped>
  .center {
    text-align: center;
  }
</style>