import Vue from 'vue'
import Router from 'vue-router'
import { getToken } from '@/utils/auth'


Vue.use(Router)

// 当进入/ 如果没有token 就去登录?

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/pages/index')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/login')   //性能优化 开始时不会加载 只有再用到时才会加载
    }
  ]
})
let token = getToken()
const whiteList = ['/login','/signup','/auth-redirect']//白名单，这些路由的页面不用登陆
router.beforeEach((to,from,next) => {
  if(token) {
    
  } else {
    console.log(to.path)
    if(whiteList.includes(to.path)) {
      next()
    }else {
      next(`/login?redirect=${to.path}`)
    } 
  }
})
export default router
/*to from 路由就是从哪里来到哪儿去  #router 路由都有path /

*/