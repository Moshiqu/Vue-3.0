import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/reset.less'
import mitt from 'mitt'

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
app.mount('#app')