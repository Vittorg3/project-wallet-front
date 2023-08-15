import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Modal from '@/components/modal/Modal.vue'

const app = createApp(App)

// registrando componentes globalmente
app.component('modal', Modal)

app.use(createPinia())
app.use(router)

app.mount('#app')
