import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/home',
    component: () => import('../components/Home.vue'),
    redirect: '/welcome',
    children: [
      { path: '/Welcome', component: () => import('../components/Welcome.vue') },
      { path: '/users', component: () => import('../components/user/Users.vue') },
      { path: '/rights', component: () => import('../components/power/Rights.vue') },
      { path: '/roles', component: () => import('../components/power/Roles.vue') },
      { path: '/categories', component: () => import('../components/goods/Cate.vue') },
      { path: '/params', component: () => import('../components/goods/Params.vue') },
      { path: '/goods', component: () => import('../components/goods/List.vue') },
      { path: '/goods/add', component: () => import('../components/goods/Add.vue') },
      { path: '/reports', component: () => import('../components/report/Report.vue') }
    ]
  }
]

const router = new Router({
  routes
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数，表示放行
  //     next()  放行    next('/login')  强制跳转
  if (to.path === '/login') return next()
  const token = window.sessionStorage.getItem('token')
  if (!token) return next('/login')
  next()
})

export default router
