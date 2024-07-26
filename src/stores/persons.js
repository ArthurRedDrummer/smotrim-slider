import { defineStore } from 'pinia'
import {ref, computed} from 'vue'
import { request } from '../utils/request'
import { getPictureById } from '../utils/picture'

export const usePersonsStore = defineStore('persons', () => {
  const box = ref(null);
  const current = ref(null);

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

  const person = computed(() => {
    let person = current.value;

    return person ? {
      picture: persons.value.find(item => item.id === person.id)?.picture,
      name: person?.name,
      surname: person?.surname,
      title: `${person.name} ${person.surname}`,
      body: person?.body
    } : null;
  })
  async function getBox() {
    box.value = await request('/boxes/vesti2');
  }

  async function getPerson(id) {
    current.value = null;
    current.value = await request(`/persons/${id}`);
  }

  return {
    persons, person,
    getBox, getPerson
  }
});