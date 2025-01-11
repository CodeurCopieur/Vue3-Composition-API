<script setup>
import { ref, watch, watchEffect } from 'vue';

  const todoId1 = ref(1),
        todoId2 = ref(2),
        count = ref(0),
        data = ref(null),
        data2 = ref(null);

        /*** 
         watch	Surveillance ciblée, comparaison de valeurs, exécution conditionnelle	Actions spécifiques en réponse à des changements de valeur
          watchEffect	Surveillance automatique, effet de bord, exécution immédiate	Effets de bord réactifs, mises à jour du DOM, requêtes HTTP

          Qu'est-ce que immediate: true ?

          Dans watch: Lorsque vous ajoutez immediate: true à un appel de watch, cela signifie que le callback de watch sera exécuté immédiatement lors de la création de la composante, avant même que la première mise à jour se produise. Cela est utile si vous voulez que votre effet secondaire se déclenche dès le début, en fonction de la valeur initiale de la propriété surveillée.
          Dans watchEffect: L'option n'est pas nécessaire car watchEffect s'exécute toujours immédiatement par défaut.
         */

  watch(todoId1, 
      async () => {
        try {
          let res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId1.value}`);
          data.value = await res.json()

        } catch (error) {
          data.value = 'Erreur ! Impossible d\accéder à l\'API'
        }
      },
      {
        immediate: true, // exécuter la fonction de surveillance dès le début
      });


      watchEffect(async () => {
        console.log(count.value);
        let res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId2.value}`);
        data2.value = await res.json()
        console.log(data2.value,document.getElementById('channel').innerText);
        
      });

</script>

<template>
    <div>
      <h3> Watch vs WatchEffect differences</h3>

      <div>
        <p>Id</p>
        <input type="text" v-model="todoId1"><br>
        <input type="text" v-model="todoId2">
      </div>

      <div id="channel">
        <input type="text" v-model="count"><br>
        nb abo : {{ count }}
        </div>
    </div>
</template>