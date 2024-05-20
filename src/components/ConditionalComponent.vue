<script setup>
import { ref } from 'vue';

  const isAwesome = ref(true)
  const type= ref(1)
  const showArticle = ref(true)
  ;
</script>

<template>
 <h2>Conditional Rendering</h2>  

 <button @click="isAwesome = !isAwesome">Toggle</button>
 <p v-if="isAwesome">Vue est génial</p>
 <p v-else>Oh no! React n'est pass génial</p>

 <div v-show="isAwesome">v-show property</div>

  <div v-if="type === 1">1</div>
  <div v-else-if="type === 2">2</div>
  <div v-else-if="type === 3">3</div>
  <div v-else>Not a number</div>

  <template v-if="showArticle">
    <h4>Titre paragraph</h4>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione qui laboriosam iste sequi delectus pariatur magni similique deleniti perspiciatis nobis. Alias dignissimos assumenda ut fuga consequuntur.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione qui laboriosam iste sequi delectus pariatur magni similique deleniti perspiciatis nobis. Alias dignissimos assumenda ut fuga consequuntur.</p>
  </template>
</template>

<style lang="scss" scoped>
  
</style>