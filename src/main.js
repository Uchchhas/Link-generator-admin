import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/feature.min.css'
import './assets/scss/admin.scss'

require('bootstrap')

createApp(App).use(router).mount('#app')
