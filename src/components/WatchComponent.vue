<script setup>
import { ref, watch } from 'vue';

  
  const question = ref('');
  const answer = ref('Les questions contiennent généralement ?');
  const responseData = ref('')

  watch(question, async (newQ, oldQ) => {
    if(newQ.indexOf('?') > -1){
      answer.value = 'Je pense ...';
      responseData.value = '';

      try {
        const res = await fetch('https://yesno.wtf/api');
        const resJson = await res.json()

        responseData.value = resJson
        answer.value = resJson.answer

      } catch (error) {
        answer.value = 'Erreur ! Impossible d\accéder à l\'API'
      }
    }
  });

</script>

<template>
  <div>
    <h3>Watcher Property</h3>

    <div>
      <p>Poser une question oui/non</p>
      <input type="text" v-model="question">

      <p>Reponse : {{ answer }}</p>
      <img :src="responseData.image">
    </div>
  </div>
</template>

<style lang="scss" scoped>
  
</style>