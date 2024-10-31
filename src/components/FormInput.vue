<script setup>
import { ref } from 'vue';

  const text = ref('text 1');
  const text2 = ref('text 2');
  const message = ref('message');
  const checked = ref('lol');
  const checkedNames = ref([]);
  const picked = ref('fcb');
  const selected = ref('fcb');
</script>

<template>
  <h3>Form Input Bindings</h3>

  <div>
    <input type="text" :value="text" @input="event => text = event.target.value"> <br>
    <span>text : {{ text }}</span>
  </div>
  <div>
    <input type="text" v-model="text2"><br>
    <span>text 2 : {{ text2 }}</span>
  </div>
  <div>
    <textarea type="text" v-model="message" /><br>
    <span>message : {{ message }}</span>
  </div>
  <div>
    <input type="checkbox" v-model="checked" true-value="lol" false-value="merde" /><br>
    <span>checked : {{ checked }}</span>
  </div>
  <div>
    <input type="checkbox" value="boss1" v-model="checkedNames" />
    <input type="checkbox" value="boss2" v-model="checkedNames" />
    <input type="checkbox" value="boss3" v-model="checkedNames" /><br>
    <span>checkedNames : {{ checkedNames }}</span>
  </div>
  <div>
    <input type="radio" value="fcb" v-model="picked" /> fcb
    <input type="radio" value="om" v-model="picked" /> om <br>
    <span>picked : {{ picked }}</span>
  </div>
  <div>
    <select name="" v-model="selected">
      <option value="fcb">fcb</option>
      <option value="om">om</option>
      <option value="bl">bl</option>
    </select><br>
    <span>{{ selected }}</span>
  </div>
</template>

<style lang="scss" scoped>
  
</style>