import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from '@/stores/auth'

export const AppRoute = {
  index: '/',
  account: {
    login: '/account/login'
  }
} as const

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: AppRoute.index,
      name: 'home',
      component: HomeView
    },
    {
      path: AppRoute.account.login,
      name: 'home',
      component: () => import('../views/account/LoginView.vue')
    }
  ]
})

router.beforeEach(async (to) => {
  console.log('beforeEach')
  const authStore = useAuthStore()

  !authStore.user && (await authStore.getSession())

  const publicPages = [AppRoute.account.login] as string[]
  if (!authStore.user && !publicPages.includes(to.path)) {
    return AppRoute.account.login
  }
})

export default router
