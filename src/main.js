import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes.js'
import './style.css'
import App from './App.vue'
import 'sweetalert2/src/sweetalert2.scss'

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })
  
const app = createApp(App)

app.use(router)

app.mount('#app')
