<template>
  <transition>
    <div v-if="person" class="flex flex-col gap-5 font-inter h-full">
      <div class="flex flex-row gap-8 justify-start items-center mobile:flex-col mobile:items-start">
        <picture class="basis-1/4 shrink-0">
          <img class="w-full h-auto rounded-xl" :src="person?.picture" :alt="person?.title">
        </picture>
        <h1 class="flex flex-col text-4xl font-bold">
          <span v-text="person?.name" />
          <span v-text="person?.surname" />
        </h1>
      </div>
      <div class="flex flex-col gap-5 overflow-auto" v-if="person?.body" v-html="person?.body" />
    </div>
    <loader v-else/>
  </transition>
</template>

<script setup>
import Loader from '@components/Loader'
import { usePersonsStore } from '@stores/persons'
import { storeToRefs } from 'pinia'

const personsStore = usePersonsStore();
const { person } = storeToRefs(personsStore);
</script>