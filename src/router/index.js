import Vue from 'vue'
import VueRouter from 'vue-router'
import Client from '../views/client/Client.vue'
import Admin from '../views/admin/Admin.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'client',
    component: Client,
    redirect:'/home',
    children:[
      {
        path: 'home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/client/Home.vue')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/client/About.vue')
      },
      {
        path: 'gallery',
        name: 'gallery',
        component: () => import(/* webpackChunkName: "gallery" */ '../views/client/Gallery.vue')
      },
      {
        path: 'products',
        name: 'product',
        component: () => import(/* webpackChunkName: "product" */ '../views/client/Product.vue')
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import(/* webpackChunkName: "contact" */ '../views/client/Contact.vue')
      },
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '../views/client/Login.vue')
      }

    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    redirect:'/admin/dashboard',
    children:[

    ]
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
