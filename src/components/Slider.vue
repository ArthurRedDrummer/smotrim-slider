<template>
  <transition>
    <div v-if="persons && persons.length" class="relative w-full">
      <swiper class="w-full" :breakpoints="breakpoints" :space-between="16" :modules="[Navigation]" :navigation="{
        prevEl: prev,
        nextEl: next,
        disabledClass: 'opacity-0',
      }">
        <swiper-slide v-for="person in persons" :key="person.key">
          <div class="flex flex-col gap-3 w-full" @click="showPerson(person.id)">
            <div class="px-3">
              <img class="w-full h-auto rounded-full cursor-pointer" :src="person.picture" :alt="person.title">
            </div>
            <h2 class="flex flex-col justify-start items-center text-sm leading-4 cursor-pointer">
              <span v-text="person.name" />
              <span v-text="person.surname" />
            </h2>
          </div>
        </swiper-slide>
      </swiper>
      <div class="absolute top-1/2 left-0 w-full h-0 -translate-y-4 z-10 -m-1 mobile:hidden">
        <div ref="prev"
          class="absolute top-1/2 -left-2 -translate-y-1/2 h-12 w-12 rounded-full bg-white shadow-md z-10 cursor-pointer flex items-center justify-center">
          <i class="h-6 w-6 bg-icon-arrow bg-center bg-cover rotate-180" />
        </div>
        <div ref="next"
          class="absolute top-1/2 -right-2 -translate-y-1/2 h-12 w-12 rounded-full bg-white shadow-md z-10 cursor-pointer flex items-center justify-center">
          <i class="h-6 w-6 bg-icon-arrow bg-center bg-cover" />
        </div>
      </div>
    </div>
    <loader v-else/>
  </transition>
</template>

<script setup>
import Loader from '@components/Loader'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { usePersonsStore } from '@stores/persons'
import { usePopupStore } from '@stores/popup'

const personsStore = usePersonsStore();
const popupStore = usePopupStore();
const { persons } = storeToRefs(personsStore);

const prev = ref(null);
const next = ref(null);

const breakpoints = {
  0: {
    slidesPerView: 2,
    slidesPerGroup: 1
  },
  768: {
    slidesPerView: 4,
    slidesPerGroup: 4
  },
  1024: {
    slidesPerView: 6,
    slidesPerGroup: 6
  },
  1440: {
    slidesPerView: 8,
    slidesPerGroup: 8
  }
}

async function showPerson(id) {
  popupStore.showPopup();
  await personsStore.getPerson(id);
}

onMounted(async () => {
    await personsStore.getBox();
})
</script>