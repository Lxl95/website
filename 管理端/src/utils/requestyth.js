import axios from 'axios'
import { MessageBox } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import configs from './syncConfig.js'
// create an axios instance
const service = axios.create({
    baseURL: configs.ythUrl // url = base url + request url
        // withCredentials: true, // send cookies when cross-domain requests
})

// request interceptor
service.interceptors.request.use(
    config => {
        if (store.getters.token || getToken()) {
            if (config.params) {
                config.params.accessToken = store.getters.token || getToken()
            } else if (config.data) {
                config.data.accessToken = store.getters.token || getToken()
            } else {
                config.params = {
                    accessToken: store.getters.token || getToken()
                }
            }
        }
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    response => {
        const res = response.data

        // if the custom code is not 200, it is judged as an error.
        if (res.code !== 200) {
            if (res.code === 410) {
                // to re-login
                MessageBox.confirm('登录信息已过期，请重新登录', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    store.dispatch('user/resetToken').then(() => {
                        window.top.location.reload()
                    })
                })
            } else if (res.code === 420) {
                MessageBox.confirm('您的账户已经在其它地方登陆，请确认后重新登录', '提示', {
                    confirmButtonText: '确定',
                    type: 'warning'
                }).then(() => {
                    store.dispatch('user/resetToken').then(() => {
                        window.top.location.reload()
                    })
                })
            }
            return Promise.reject(new Error(res.message || '请求失败！'))
        } else {
            return res
        }
    },
    error => {
        console.log('err' + error) // for debug
            // Message({
            //   message: error.message,
            //   type: "error",
            //   duration: 5 * 1000
            // });
        return Promise.reject(error)
    }
)

export default service