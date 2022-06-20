import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const route: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('@/components/root.vue'),
        alias:['/root','/root1'],
        children: [
            {
                path: '/user1',
                components: {
                    default: () => import('@/components/A.vue')
                }
            },
            {
                path: '/user2',
                components: {
                    bbb: () => import('@/components/B.vue'),
                    ccc: () => import('@/components/C.vue'),
                }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: route
})

export default router