<template>
  <div>
    <ul class="flex flex-row gap-5" v-if="persons && persons.length">
      <li v-for="person in persons" :key="person.key">
        <div class="flex flex-col gap-5">
          <picture class="p-5">
            <img class="rounded-full" :src="person.picture" :alt="person.title">
          </picture>
          <h2 class="flex flex-col justify-start items-center gap-3">
            <span v-text="person.name"/>
            <span v-text="person.surname"/>
          </h2>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import {storeToRefs} from 'pinia'
import { usePersonsStore } from './stores/persons'

const personsStore = usePersonsStore();
const { persons } = storeToRefs(personsStore);


onMounted(async () => {
  await personsStore.getBox();

  console.log(persons.value);
})
</script>