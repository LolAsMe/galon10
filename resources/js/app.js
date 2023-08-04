import '../css/app.css';
import { createPinia } from 'pinia'

import { createApp } from 'vue'
const pinia = createPinia()

import App from './App.vue'
import router from './router/router'

const MyApp = createApp(App);
MyApp.use(router)
MyApp.use(pinia)
MyApp.mount("#app")
