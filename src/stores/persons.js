import { defineStore } from 'pinia'
import {ref, computed} from 'vue'
import { request } from '../utils/request'
import { getPictureById } from '../utils/picture'

export const usePersonsStore = defineStore('persons', () => {
  const box = ref(null);

  const persons = computed(() => box.value?.content?.find(item => {
    return item.template === 'persons'
  })?.content?.map(item => {
    return {
      id: item.id,
      key: `persons-list-item-${item.id}`,
      name: item.name,
      surname: item.surname,
      title: `${item.name} ${item.surname}`,
      picture: getPictureById(item.picId)
    }
  }) || []);
  async function getBox() {
    box.value = await request('/boxes/vesti2');
  }

  return {
    persons,
    getBox
  }
});