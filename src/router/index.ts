// src\router\index.ts
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import AppLayout from '@/layouts/AppLayout.vue'
import { store } from '@/store'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue'),
      },
      {
        path: 'profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "profile" */ '@/views/profile/index.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'watch/:videoId',
        name: 'watch',
        component: () => import(/* webpackChunkName: "watch" */ '@/views/watch/index.vue'),
      },
    ],
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import(/* webpackChunkName: "signin" */ '@/views/signin/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const { user } = store.state
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!user) {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      })
    }
    else {
      next()
    }
  }
  else {
    next()
  }
})

export default router
