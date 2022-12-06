import { createApp } from 'vue'
import App from './App.vue'
import './CS3321-E-Reader/assets/main.css'
import router from './router'

createApp(App)
    .use(router)
    .mount('#app')

