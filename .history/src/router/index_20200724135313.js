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
    children:[
      {
        path: 'Myself',
        name: 'Myself',
        component: () => import('../views/Myself/Myself.vue'),
        meta: {
          title: '我的'
        }

      }, {
        path: 'Shopping',
        name: 'Shopping',
        component: () => import('../views/Shopping/Shopping.vue'),
        meta: {
          title: '购物车'
        }

      }, {
        path: 'Mall',
        name: 'Mall',
        component: () => import('../views/Mall/Mall.vue'),
        meta: {
          title: '商城'
        }

      }, {
        path: 'Kind',
        name: 'Kind',
        component: () => import('../views/Kind/Kind.vue'),
        meta: {
          title: '分类'
        }

      },
    ]
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
    path: '/Details',
    name: 'Details',
    component: () => import('../views/Details/Details.vue'),
     meta: {
       title: '详情'
     }

  },
  {
    path: '/Settlement',
    name: 'Settlement',
    component: () => import('../views/Settlement/Settlement.vue'),
     meta: {
       title: '订单结算'
     }

  },
  {
    path: '/Address',
    name: 'Address',
    component: () => import('../views/Address/Address.vue'),
     meta: {
       title: '地址列表'
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
