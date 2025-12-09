import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue'
import Dashboard from '../pages/Dashboard.vue'
import Notas from '../pages/Notas.vue'
import { components } from 'vuetify/dist/vuetify.js'

const routes = [
  { 
    path: '/login', 
    component: Login,
    meta: { noLayout: true}
  },
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/notas',
    component: Notas,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
