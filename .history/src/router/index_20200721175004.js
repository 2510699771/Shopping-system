import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Lay from 'better-scroll'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login/Login.vue'),
     meta: {
       title: '注册'
     }

  },
  {
    path: '/Myself',
    name: 'Myself',
    component: () => import('../views/Myself/Myself.vue'),
    meta: {
      title: '我的'
    }

  },
  {
    path: '/Shopping',
    name: 'Shopping',
    component: () => import('../views/Shopping/Shopping.vue'),
    meta: {
      title: '购物车'
    }

  },
  {
    path: '/Mall',
    name: 'Mall',
    component: () => import('../views/Mall/Mall.vue'),
    meta: {
      title: '购物车'
    }

  },
  {
    path: '/Kind',
    name: 'Kind',
    component: () => import('../views/Kind/Kind.vue'),
    meta: {
      title: '购物车'
    }

  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//路由源信息，改变页面的标题
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
export default router
