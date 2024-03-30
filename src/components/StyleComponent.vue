<script setup>
import { ref, reactive, computed } from 'vue';

  const  color = ref('red');
  const  colorGround = ref('blue');
  const  fontSize = ref(30);

  const styleObject = reactive({
    color: 'white',
    backgroundColor: color.value,
    border: '1px solid blue'
  });

  const styleObject1 = computed(() => {
    return {
      color: colorGround.value,
      backgroundColor: color.value,
      border: '1px solid blue'
    }
  });

  const baseStyles = reactive({
    color: 'red',
    fontSize: '10px'
  });

  const styles2 = reactive({
    border: '1px solid blue'
  })

  setTimeout(()=> {
    color.value = 'white'
  }, 2000);
</script>

<template>
 <section>
  <h2>Style Bindings</h2>  

  <p :style="{color: color, fontSize: fontSize+'px', backgroundColor: colorGround}">Style w/ ref</p>
  <p :style="styleObject">Style w/ reactive</p>
  <p :style="styleObject1">Style w/ computed</p>
  <p :style="[baseStyles, styles2]">Array Styles</p>
  <p :style="{display: ['flex', '-webkit-box', '-ms-flexbox']}">Array value</p>
 </section>
</template>

<style lang="scss" scoped>
  
</style>