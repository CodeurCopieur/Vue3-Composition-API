import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import MyComponents from './components/MyComponents.vue'

const app = createApp(App)
app.component('MyComponents', MyComponents)
app.mount('#app')

const app2 = createApp(App)
app2.mount('#app2')
