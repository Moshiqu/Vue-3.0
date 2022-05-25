import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/reset.less'
import mitt from 'mitt'

const Mit = mitt()
const app = createApp(App)

declare module 'vue' {
    export interface ComponentCustomProperties {
        $Bus: typeof Mit
    }
}

app.config.globalProperties.$Bus = Mit
app.mount('#app')