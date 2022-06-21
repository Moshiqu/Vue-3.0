import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementUi from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(router)
app.use(ElementUi)

const whiteList = ['/', '/beforeGuard']
// 前置守卫
router.beforeEach((to, from, next) => {
    console.log(to.path);
    if (whiteList.includes(to.path) || localStorage.getItem('token')) {
        next()
    } else {
        next('/beforeGuard')
    }
})

router.afterEach((to, from) => {
    if (to.meta.title) document.title = to.meta.title
})

app.mount('#app')
