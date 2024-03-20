<script setup>
  import { computed, reactive, ref } from 'vue'

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
  });

  const pairOrimpair = computed(()=> { return counterData.counter % 2 === 0 ? 'Pair' : 'Impair' });
</script>

<template>
 <div class="center">
    <h2>ref : {{ NameTemplate }} <br> reactive : {{counterData.name}}</h2>
    <div>
      <button @click.prevent="decrease()">-</button>
      &nbsp;
      <span>{{counterData.counter}}</span>
      &nbsp;
      <button @click.prevent="increase()">+</button>
    </div>
    <hr />
    <p>La valeur du counter is {{ pairOrimpair }}</p>
    <input type="text" v-model="counterData.name" name="" id="">
 </div>
</template>
<style scoped>
  .center {
    text-align: center;
  }
</style>