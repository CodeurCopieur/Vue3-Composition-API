<script setup>
import { ref } from 'vue';

  const count =  ref(0);
  const increment = (name, e)=> {count.value++, console.log(name, e);}
  const onClickClick = ()=> console.log('link clicked');
  const onParentClick = () => {
    console.log('parent clicked');
  };
</script>

<template>
 <h3>Event Handling</h3>
  <p>count : {{ count }}</p>
  <div @click.capture="onParentClick">
    <a href="https://www.youtube.com/watch?v=r4HrgittfLk&t=195s" @click.stop.prevent="onClickClick"> click here</a>
  </div>

  <div>

  </div>
 <button @click="increment('leela', $event)">counter click increment</button>
 <button @click="count++">counter click</button>
</template>

<style lang="scss" scoped>
  
</style>hr