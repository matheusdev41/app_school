import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue'
import Dashboard from '../pages/Dashboard.vue'

const routes = [
  { 
    path: '/login', 
    component: Login,
    meta: { noLayout: true}
  },
  {
    path: '/',
    component: Dashboard,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default createRouter({
  history: createWebHistory(),
  routes
})
