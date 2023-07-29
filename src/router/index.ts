import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'

let isAuthenticated = true;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AuthView.vue')
    },
     {
      path: '/wallets',
      name: 'wallets',
      component: () => import('../views/Wallets.vue')
     }
  ]
})

router.beforeEach((to, from, next) => {
  if (!isAuthenticated) {
    if (to.path !== '/sign-in') {
      next('/sign-in')
    } else {
      next()
    }
  } else if(isAuthenticated && to.path === '/sign-in') {
    next('/')
  } else {
    next()
  }
})

export default router
