import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/Layout/Layout.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    component: Layout,
    children: [{
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

    }, ]
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
  {
    path: '/Addres',
    name: 'Addres',
    component: () => import('../views/Addres/Addres.vue'),
    meta: {
      title: '地址列表'
    }

  },
  {
    path: '/Newaddress',
    name: 'Newaddress',
    component: () => import('../views/Newaddress/Newaddress.vue'),
    meta: {
      title: '新增地址'
    }

  },
  {
    path: '/Modifyaddress',
    name: 'Modifyaddress',
    component: () => import('../views/Modifyaddress/Modifyaddress.vue'),
    meta: {
      title: '修改地址'
    }

  },
  {
    path: '/Collection',
    name: 'Collection',
    component: () => import('../views/Collection/Collection.vue'),
    meta: {
      title: '我的收藏'
    }

  },
  {
    path: '/Setup',
    name: 'Setup',
    component: () => import('../views/Setup/Setup.vue'),
    meta: {
      title: '个人资料'
    }

  },
  {
    path: '/Settle',
    name: 'Settle',
    component: () => import('../views/Settle/Settle.vue'),
    meta: {
      title: '订单结算'
    }

  },
  {
    path: '/MyOrder',
    name: 'MyOrder',
    component: () => import('../views/MyOrder/MyOrder.vue'),
    meta: {
      title: '我的订单'
    }

  },
  {
    path: '/Evaluation',
    name: 'Evaluation',
    component: () => import('../views/Evaluation/Evaluation.vue'),
    meta: {
      title: '评价中心'
    }

  },
  {
    path: '/Evacenter',
    name: 'Evacenter',
    component: () => import('../views/Evacenter/Evacenter.vue'),
    meta: {
      title: '评价中心'
    }

  },
  {
    path: '/Search',
    name: 'Search',
    component: () => import('../views/Search/Search.vue'),
    meta: {
      title: '搜索'
    }

  },
  {
    path: '/Recentbrowse',
    name: 'Recentbrowse',
    component: () => import('../views/Recentbrowse/Recentbrowse.vue'),
    meta: {
      title: '最近浏览'
    }

  },
  {
    path: '/Dingwei',
    name: 'Dingwei',
    component: () => import('../views/Dingwei/Dingwei.vue'),
    meta: {
      title: '选择定位'
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
//to去的路由，from从哪个路由来，
router.beforeEach((to, from, next) => {
  document.title = to.meta.title //跳转路由的标题为在meta中定义的名字
  let user = localStorage.getItem('admitUser') //根据本地存储的名字作为判断
  if (to.path === "/login") next() //先判断跳转路由是否为去登录页面
  else user ? next() : next("/login") //再判断是否本地有名字，有的话正常跳转，没有的话跳转到登录页面
})

export default router