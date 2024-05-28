<script setup>
import { reactive, ref } from 'vue';

  const word = ref('title')
  const books = reactive([
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    { id: 3, title: 'Book 3', author: 'Author 3' },
  ])

  const myObject = reactive({
    title: 'Book 1 ', author: 'Author 1'
  })

  const shuffle = ()=> {
    books.sort(()=>Math.random() - 0.5)
  }
  ;
</script>

<template>
  <h3>List Rendering</h3>

  <ul>
    <li v-for="item in books" :key="item.title">
    {{ word }} - {{ item.title }}
    </li>
  </ul>

  <ul>
    <li v-for="(item, key, i) in myObject" :key="i">
    {{ key }} - {{ item }}
    </li>
  </ul>
  
  <ul>
    <li v-for="n in 10" :key="n">Codwerk - {{ n }}</li>
  </ul>


  <template  v-for="n in 5" :key="n">
    <ul>
    <li>template - {{ n }}</li>
  </ul>
  </template>

  <ul>
    <li v-for="(item, index) in books" :key="item.id">
      <p>{{ word }} - {{ item.title }}</p>
      <input type="text" :name="index" :id="index">
    </li>

    <button @click="shuffle">Shuffle</button>
  </ul>

</template>

<style scoped>
  ul {
    list-style: none;
  }
</style>