<script setup>
  import { computed, reactive, ref } from 'vue';

  const employees = reactive(['emp1', 'emp2']);

  const isEmployeesPresent = computed( () => employees.length > 0 ? 'Yes computed' : 'No');

  const firstName = ref('Codwerk');
  const lastName = ref('Dev Front');

  const fullName = computed(()=> firstName.value  + " " + lastName.value);

  const fullName1 = computed({
    get() {
      return firstName.value  + " " + lastName.value
    },
    set(newValue){
      [firstName.value ,lastName.value] = newValue.split(" ");
    }
  });

  fullName1.value = 'Hi Boss'

</script>

<template>
 <h2>Computed Property </h2>  
 <p>Employees Present : {{ isEmployeesPresent }}</p>
 <p>fullName : {{ fullName }}</p>
 <p>fullName1 : {{ fullName1 }}</p>
</template>