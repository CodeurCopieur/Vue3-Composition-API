import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import MyComponents from './components/MyComponents.vue'
import ComputedComponent from './components/ComputedComponent.vue'
import TemplateSyntax from './components/TemplateSyntax.vue'
import Counter from './components/Counter.vue'

const app = createApp(App)
app.component('MyComponents', MyComponents)
app.component('Counter', Counter)
app.component('TemplateSyntax', TemplateSyntax)
app.component('ComputedComponent', ComputedComponent)
app.mount('#app')

// const app2 = createApp(App)
// app2.mount('#app2')
