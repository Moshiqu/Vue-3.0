import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

declare module 'vue-router' {
    interface RouteMeta {
        title: string
    }
}


const route: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('@/components/root.vue'),
        alias: ['/root', '/root1'],
        children: [
            {
                path: '/user1',
                components: {
                    default: () => import('@/components/A.vue')
                },
                meta: {
                    title: 'user1 页面'
                }
            },
            {
                path: '/user2',
                components: {
                    bbb: () => import('@/components/B.vue'),
                    ccc: () => import('@/components/C.vue'),
                },
                meta: {
                    title: 'user2 页面'
                }
            }
        ]
    }, {
        path: '/beforeGuard',
        component: () => import('@/views/Login.vue'),
        meta: {
            title: 'beforeGuard页面'
        }
    }, {
        path: '/index',
        component: () => import('@/views/Index.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: route
})

export default router