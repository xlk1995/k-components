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
    redirect: '/chooseIcons',
    children: [
      {
        path: '/chooseIcons',
        component: ChooseIcons
      }
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
