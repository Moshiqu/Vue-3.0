import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import DoneVue from '@/components/Done.vue'
import AddVue from '@/components/Add.vue'
import DeleteVue from '@/components/Delete.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        redirect: { name: 'add' }
      },
      {
        path: '/add',
        name: 'add',
        component: AddVue
      }, {
        path: '/done',
        name: 'done',
        component: DoneVue
      }, {
        path: '/delete',
        name: 'delete',
        component: DeleteVue
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkExactActiveClass: 'active'
})

export default router
