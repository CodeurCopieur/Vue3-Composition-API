<script setup>
  const dynamicId = 'my-id'
  const message = '<h2>Bonjour</h2>'
  const objectOfAttrs = {
    id: dynamicId,
    class: 'container'
  };

  const titleAttr = "title";
  const titleValue = "C'est est un titre"
  const eventName = 'click';

  const changeTitle = ()=> {
    alert('changeTitle')
  };
</script>

<template>
  <h2>Template Component</h2>
 <div :id="dynamicId" :[titleAttr] = "titleValue">Template Code</div>
 <div v-bind="objectOfAttrs">Test objectOfAttrs</div>
 <div v-html="message" @[eventName]="changeTitle()"></div>
 <p @click="changeTitle()">{{ message ? 'Yes' : 'No' }}</p>
</template>