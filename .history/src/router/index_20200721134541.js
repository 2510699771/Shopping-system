import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    name: 'Myself',
    component: () => import('../views/Myself/Myself.vue'),
    meta: {
      title: '我的'
    }

  }
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
