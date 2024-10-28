import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import MyComponents from './components/MyComponents.vue'
import StyleComponent from './components/StyleComponent.vue'
import ClassComponent from './components/ClassComponent.vue'
import ComputedComponent from './components/ComputedComponent.vue'
import TemplateSyntax from './components/TemplateSyntax.vue'
import Counter from './components/Counter.vue'
import ConditionalComponent from './components/ConditionalComponent.vue'
import ListRendering from './components/ListRendering.vue'
import EventHandling from './components/EventHandling.vue'

const app = createApp(App)
app.component('MyComponents', MyComponents)
app.component('Counter', Counter)
app.component('TemplateSyntax', TemplateSyntax)
app.component('ComputedComponent', ComputedComponent)
app.component('ClassComponent', ClassComponent)
app.component('StyleComponent', StyleComponent)
app.component('ConditionalComponent', ConditionalComponent)
app.component('ListRendering', ListRendering)
app.component('EventHandling', EventHandling)
app.mount('#app')

// const app2 = createApp(App)
// app2.mount('#app2')
