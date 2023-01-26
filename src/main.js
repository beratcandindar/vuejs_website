import { createApp } from 'vue'
import { createPinia } from 'pinia'


import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import App from './App.vue'
import router from './router'
import './assets/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas,fab);

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('fa', FontAwesomeIcon)
app.mount('#app')
