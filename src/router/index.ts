import {
  createRouter,
  createWebHistory,
  RouteRecordRaw
} from 'vue-router'

import Container from '@/components/container/src/index.vue'
import ChooseIcons from '@/views/chooseIcons/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Container,
    redirect: '/chooseArea',
    children: [
      {
        path: '/chooseIcons',
        component: ChooseIcons
      },
      {
        path: '/chooseArea',
        component: () =>
          import('@/views/chooseArea/index.vue')
      },
      {
        path: '/trend',
        component: () => import('@/views/trend/index.vue')
      },
      {
        path: '/notification',
        component: () =>
          import('@/views/notification/index.vue')
      }
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
