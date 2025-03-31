<script setup>
  defineProps({
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  })    
</script>

<template>
   <div>
    <h3>Single Post</h3>
    <h4>{{ title }}</h4>
    <p>{{ content }}</p>
   </div>
</template>

<style lang="scss" scoped>
  
</style>