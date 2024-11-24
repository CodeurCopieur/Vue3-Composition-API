<script setup>
  import { ref, reactive, watch } from 'vue';

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

  const x = ref(0)
  const y = ref(0);

  // watch(x, (newValue, oldValue) => {
  //   console.log('nouvelle valeur x : ' + newValue + ' et ancienne valeur x : ' + oldValue)
  // });

  watch(y, (newValue, oldValue) => {
    console.log('nouvelle valeur y : ' + newValue + ' et ancienne valeur y : ' + oldValue)
  });

  // watch([x, y], ([newX, newY]) => {
  //   console.log(' valeur x : ' + newX + ' et  valeur y : ' + newY)
  // });

  // watch(()=> x.value + y.value, (sum) => {
  //   console.log(`le resultat est ${sum}`);
    
  // })

  // watch([x, ()=> y.value], ([newX, newY]) => {
  //   console.log(`valeur de x et y is ${newX} et ${newY}`);
    
  // })

  const obj = reactive({count: 0, name: "codwerk"});

  watch(()=> obj.count, (newValue) => {
    console.log('newValue : ' + newValue)
  });

  // watch(obj, (newValue, oldValue) => {
  //   console.log('newValue & oldValue : ' + newValue.count + ' - ' + oldValue.count )
  //   console.log('newValue & oldValue : ' + newValue.name + ' - ' + oldValue.name )
  // });

  watch(()=> obj.count, (newValue, oldValue) => {
    console.log('count : newValue & oldValue : ' + newValue + ' - ' + oldValue )
  }, {deep: true});

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

    <hr>

      <p>v-model : x - <input type="text" v-model="x"></p>
      <p>v-model : y - <input type="text" v-model="y"></p>

    <hr>

    <div>Count : <input type="text" v-model="obj.count"></div>
    <div>Name : <input type="text" v-model="obj.name"></div>
  </div>
</template>

<style lang="scss" scoped>
  
</style>