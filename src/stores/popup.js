import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePopupStore = defineStore('popup-store', () => {
  const isActive = ref(false);

  function showPopup() {
    isActive.value = true;
  }

  function hidePopup() {
    isActive.value = false;
  }

  return {
    isActive,
    showPopup, hidePopup
  }
});