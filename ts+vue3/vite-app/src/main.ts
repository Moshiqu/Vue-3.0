import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/reset.less'
import mitt from 'mitt'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'

const store = createPinia()

const Mit = mitt()
const app = createApp(App)

// vue3全局挂载
type Filter = {
    format: <T>(str: T) => string
}
declare module 'vue' {
    export interface ComponentCustomProperties {
        $Bus: typeof Mit,
        $filters: Filter
    }
}
app.config.globalProperties.$Bus = Mit

app.config.globalProperties.$filters = {
    format<T>(str: T): string {
        return `filter.${str}`
    }
}
app.use(ElementPlus)
app.use(store)
app.mount('#app')