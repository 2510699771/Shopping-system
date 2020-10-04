import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/Layout/Layout.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    component: Layout,
    children:[]
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login/Login.vue'),
     meta: {
       title: '注册'
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
