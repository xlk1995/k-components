import {
  createRouter,
  createWebHistory,
  RouteRecordRaw
} from 'vue-router'
import Home from '@/views/home.vue'
import Container from '@/components/container/src/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Container,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: Home
      }
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
