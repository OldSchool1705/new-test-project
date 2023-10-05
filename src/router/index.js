import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/index.vue'
import ItemPage from '../views/ItemPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/card/:id',
      name: 'itemPage',
      component: ItemPage
    }
  ]
})

export default router
