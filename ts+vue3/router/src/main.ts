import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementUi from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(router)
app.use(ElementUi)

app.mount('#app')
