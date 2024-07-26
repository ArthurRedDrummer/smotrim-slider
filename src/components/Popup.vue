<template>
  <transition>
    <div v-if="isActive"
      class="fixed top-0 left-0 w-full h-full z-50 flex flex-col justify-center items-center backdrop-blur-sm bg-light-gray/50 overflow-auto">
      <div class="relative w-1/2 tablet:w-2/3 mobile:w-4/5 h-auto max-h-[70vh] min-h-[200px] p-8 mobile:p-4 rounded-2xl bg-white overflow-hidden shadow-xs">
        <button class="absolute top-6 right-6 w-8 h-8 bg-icon-close bg-cover bg-center"
          @click="popupStore.hidePopup()" />
          <slot/>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { usePopupStore } from '@stores/popup'
import { storeToRefs } from 'pinia'

const popupStore = usePopupStore();
const { isActive } = storeToRefs(popupStore);
</script>