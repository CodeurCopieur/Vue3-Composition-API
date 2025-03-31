<script setup>
   import { ref } from 'vue'
   const title = ref('Mon titre')
   const content = ref('Mon contenu')
</script>
<template>
   <h1>Vue 3 Composition API</h1>

   <my-components :msg="'lol'"></my-components>
   <hr>
   <Counter></Counter>
   <hr>
   <TemplateSyntax></TemplateSyntax>
   <hr>
   <ComputedComponent></ComputedComponent>
   <hr>
   <ClassComponent class="ClassComponent"></ClassComponent>
   <hr>
   <StyleComponent></StyleComponent>
   <hr>
   <ConditionalComponent></ConditionalComponent>
   <hr>
   <ListRendering></ListRendering>
   <hr>
   <EventHandling></EventHandling>
   <hr>
   <FormInput></FormInput>
   <hr>
   <WatchComponent></WatchComponent>
   <hr>
   <WatchEffectComponent></WatchEffectComponent>
   <hr>
   <SinglePost :title="title" :content="content"></SinglePost>
</template>
