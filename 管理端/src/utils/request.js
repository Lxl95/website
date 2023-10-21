import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '@/store'
import Cookies from 'js-cookie'
import { getToken } from '@/utils/auth'
import syncConfig from './syncConfig.js'

// create an axios instance
const service = axios.create({
    // baseURL: process.env.VUE_APP_BASE_API // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    baseURL: Cookies.get('lan') == 1 ? syncConfig.baseNeiUrl : syncConfig.baseUrl
})

// request interceptor
service.interceptors.request.use(
    config => {
        if (!store.getters.jsonInfo) {
            store.dispatch('user/setJsonInfo', configs)
        }
        if (store.getters.token) {
            if (config.params) {
                config.params.accessToken = getToken()
            } else if (config.data) {
                config.data.accessToken = getToken()
            } else {
                config.params = {
                    accessToken: getToken()
                }
            }
            config.headers['accessToken'] = getToken()
        }
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    response => {
        const res = response.data

        // if (res.code !== 200) {
        //   if (res.code === 410) {
        //     MessageBox.confirm('登录信息已过期，请重新登录', '提示', {
        //       confirmButtonText: '确定',
        //       cancelButtonText: '取消',
        //       type: 'warning'
        //     }).then(() => {
        //       store.dispatch('user/resetToken').then(() => {
        //         window.top.location.reload()
        //       })
        //     })
        //   } else if (res.code === 420) {
        //     MessageBox.confirm('您的账户已经在其它地方登陆，请确认后重新登录', '提示', {
        //       confirmButtonText: '确定',
        //       type: 'warning'
        //     }).then(() => {
        //       store.dispatch('user/resetToken').then(() => {
        //         window.top.location.reload()
        //       })
        //     })
        //   } else {
        //     Message({
        //       message: res.info || '请求失败！',
        //       type: 'error',
        //       duration: 5 * 1000
        //     })
        //   }
        //  return Promise.reject(new Error(res.info || '请求失败！'))
        // } else {
        return res
            // }
    },
    error => {
        console.log(error) // for debug
        Message({
            message: '服务器没有响应，请稍后重试！',
            type: 'error',
            showClose: true,
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default service