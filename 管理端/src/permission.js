import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' // 进度条样式
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'
import Layout from '@/layout'
const _import = require('./router/_import_' + process.env.NODE_ENV) // 获取组件的方法
// eslint-disable-next-line no-unused-vars
import { asyncRoutes } from '@/router'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/auth-redirect'] // 路由白名单

router.beforeEach(async(to, from, next) => {
    // start progress bar
  NProgress.start()

    // set page title
    document.title = getPageTitle(to.meta.title)

    // determine whether the user has logged in
    const hasToken = getToken()

    if (hasToken) {
        if (to.path === '/login') {
            // next({ path: '/' })
            next()
            NProgress.done()
        } else {
            // determine whether the user has obtained his permission roles through getInfo
            const hasRoles = store.getters.name
            if (hasRoles) {
              next()
            } else {
                try {
                    const { meau } = await store.dispatch('user/getInfo')
                    // eslint-disable-next-line no-unused-vars
                    const fommatRouters = filterAsyncRouter(meau)
                        // console.log(fommatRouters)
                        // 获取异步路由 + 固定路由
                        // console.log(fommatRouters)
                    const accessRoutes = await store.dispatch('permission/generateRoutes', fommatRouters)
                        // const accessRoutes = await store.dispatch('permission/generateRoutes', asyncRoutes)
                        // 调用addRoutes方法，挂载路由
                    router.addRoutes(accessRoutes)

                    next({ ...to, replace: true })
                } catch (error) {
                    // remove token and go to login page to re-login
                    await store.dispatch('user/resetToken')
                    Message.error(error || '请求异常，请刷新页面！')
                    next(`/login?redirect=${to.path}`)
                    NProgress.done()
                }
            }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            // 路由白名单的直接next()
            next()
        } else {
            // 否则进登录页
            // next()
            next(`/login?redirect=${to.path}`)
            NProgress.done()
        }
    }
})

router.afterEach(() => {
    // finish progress bar
    NProgress.done()
})

function filterAsyncRouter(asyncRouterMap) { // 遍历后台传来的路由字符串，转换为组件对象
    const accessedRouters = asyncRouterMap.filter(route => {
      try {
        if (route.component) {
          if (route.component === 'Layout') { // Layout组件特殊处理
              route.component = Layout
          } else {
              route.component = _import(route.component)
          }
      }
      if (!route.redirect) {
          delete route.redirect
      }
      if (route.children && route.children.length > 0) {
          route.children = filterAsyncRouter(route.children)
      }
      return true
      } catch (error) {
        console.log(route)
        return false
      }

    })
    return accessedRouters
}
