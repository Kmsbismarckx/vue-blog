import { createRouter, createWebHistory } from 'vue-router'
import { Route } from '@/router/Route'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: Route.HOME.path,
      name: 'home',
      component: () => import('../pages/HomePage.vue')
    },
    {
      path: Route.POSTS.path,
      name: 'posts',
      component: () => import('../pages/PostsPage.vue')
    },
    {
      path: Route.POST.path,
      name: 'post',
      component: () => {}
    },
    {
      path: Route.USERS.path,
      name: 'users',
      component: () => {}
    },
    {
      path: Route.USER.path,
      name: 'user',
      component: () => {}
    }
  ]
})

export default router
