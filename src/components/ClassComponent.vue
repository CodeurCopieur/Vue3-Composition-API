<script setup>
  import { ref, reactive, computed } from 'vue';
  const isActive = ref(true);
  const hasError = ref(false);

  const classObjects = reactive({
    active: true,
    'has-error':true
  });

  const classObject = computed(()=> {
    return {
      active: isActive.value && !hasError.value,
      'has-error': hasError.value
    }
  })

  const isDev = ref('Codwerk');
  const isGenre = ref('Boy');
</script>

<template>
  <section>
    <h2>Class Bindings</h2>  
  <p :class="{ active : isActive, 'has-error': hasError}">
    Appliquée une class : {{ isActive ? 'active' : 'false'}} <br>
    Appliquée une class : {{ hasError ? 'has-error' : 'false'}}
  </p>
  <p :class="classObjects">class : {{classObjects.active ? 'active' : 'false'}}</p>
  <p :class="classObjects">class : {{classObjects.active ? 'has-error' : 'false'}}</p>

  <p :class="classObject"> Appliquée une class w/ computed sur cet élément</p>

  <p :class="[{[isDev] : isActive}, {[isGenre] : isActive}, isDev, isGenre]">class : isDev, isGenre</p>

  <p :class="$attrs.class"> via $attrs.class </p>
  </section>
</template>

<style lang="scss" scoped>
  
</style>