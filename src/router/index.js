import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomeView from '../views/FirstPage.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHashHistory(import.meta.env.BASE_URL), // Switch to hash mode
  history: createWebHashHistory('/RouteProject/'), // Switch to hash mode

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/secondpage',
      name: 'secondpage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SecondPage.vue')
    },
    {
      path: '/thirdpage',
      name: 'thirdpage',
      component: () => import('../views/ThirdPage.vue')
    },
    {
      path: '/fourthpage',
      name: 'fourthpage',
      component: () => import('../views/FourthPage.vue')
    },
  ]
})

export default router
