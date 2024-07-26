<template>
  <div class="flex flex-col justify-center items-center min-h-screen px-10 font-rf-dewi">
    <swiper class="w-full" v-if="persons && persons.length" :breakpoints="breakpoints" :space-between="16">
      <swiper-slide v-for="person in persons" :key="person.key">
        <div class="flex flex-col gap-3">
          <div class="px-3">
            <img class="h-full w-full rounded-full" :src="person.picture" :alt="person.title">
          </div>
          <h2 class="flex flex-col justify-start items-center text-sm leading-4">
            <span v-text="person.name" />
            <span v-text="person.surname" />
          </h2>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import 'swiper/css'
import { onMounted } from 'vue'
import {storeToRefs} from 'pinia'
import { usePersonsStore } from './stores/persons'
import {Swiper, SwiperSlide} from 'swiper/vue';

const personsStore = usePersonsStore();
const { persons } = storeToRefs(personsStore);

const breakpoints = {
  0: {
    slidesPerView: 2
  },
  768: {
    slidesPerView: 4
  },
  1024: {
    slidesPerView: 6
  },
  1440: {
    slidesPerView: 8
  }

}

onMounted(async () => {
  await personsStore.getBox();
})
</script>