import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const root = '#app';
const app = createApp(App);
const pinia = createPinia();

app
  .use(pinia)
  .mount(root);
