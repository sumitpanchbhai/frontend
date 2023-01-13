import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue') 
  },
  {
    path: '/newUser',
    name: 'newUser', 
    component: () => import('../views/newUser.vue') 
  },
  
  {
    path: '/',
    name: 'login',
    component: () => import('../views/loginPage.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/contact.vue')
  },
  {
    path: '/forgetUser',
    name: 'forget',
    component: () => import('../views/forgetUser.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
