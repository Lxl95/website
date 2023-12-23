import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'
import { getadmininfo } from '@/api/seats'
import Cookies from 'js-cookie'
import { Message } from 'element-ui'
import { themeChange } from "@/utils/theme";
const state = {
    token: getToken(),
    name: '',
    user: null,
    avatar: require('@/assets/logo.png'),
    roles: '',
    jsonInfo: '',
    thisDN: null,
    exten: Cookies.get('exten')
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
        state.roles = roles
    },
    SET_USER: (state, user) => {
        state.user = user
    },
    SET_JSONINFO: (state, jsonInfo) => {
        state.jsonInfo = jsonInfo
    },
    SET_THISDN: (state, thisDN) => {
        state.thisDN = thisDN
    },
    SET_EXTEN: (state, exten) => {
        state.exten = exten
    }
}

const actions = {
    // 接口地址
    setJsonInfo({ commit }, state) {
        commit('SET_JSONINFO', state)
    },
    setExten({ commit }, exten) {
        Cookies.set('exten', exten)
        commit('SET_EXTEN', exten)
    },
    setToken({ commit }, token) {
        commit('SET_TOKEN', token)
    },
    // user login 登陆
    login({ commit }, userInfo) {
        const { username, password } = userInfo
        return new Promise((resolve, reject) => {
            login({ username: username.trim(), password: password }).then(response => {
                const { data } = response
                commit('SET_TOKEN', data.accessToken)
                setToken(data.accessToken)
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },

    // get user info 获取动态菜单
    getInfo({ commit, state, dispatch }) {
        return new Promise((resolve, reject) => {
            getInfo({}).then(response => {
                const { data } = response
                const { user } = data
                commit('SET_USER', user)
                if (user.TYPESIZE) { // 兼容判断
                    dispatch("app/setSize", user.TYPESIZE, { root: true }); // 提交字号
                    window.document.documentElement.setAttribute("data-size", user.TYPESIZE);
                }
                if (user.THEME) { // 兼容判断
                    dispatch("app/setTheme", user.THEME, { root: true }); // 提交主题
                    window.document.documentElement.setAttribute("data-theme", user.THEME);
                    themeChange(user.THEME);
                } else {
                    window.document.documentElement.setAttribute("data-theme", "white");
                }
                resolve(data)
            }).catch(error => {
                reject(error)
            })
        })
    },

    // user logout 登出
    logout({ commit, state }) {
        return new Promise((resolve, reject) => {
            logout(state.token).then(() => {
                commit('SET_TOKEN', '')
                commit('SET_USER', '')
                removeToken()
                resetRouter()
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },

    // remove token
    resetToken({ commit }) {
        return new Promise(resolve => {
            commit('SET_TOKEN', '')
            commit('SET_USER', '')
            removeToken()
            resolve()
        })
    },

    // dynamically modify permissions
    changeRoles({ commit, dispatch }, role) {
        return new Promise(async resolve => {
            const token = role + '-token'
            commit('SET_TOKEN', token)
            setToken(token)
            const { roles } = await dispatch('getInfo')
            resetRouter()
                // generate accessible routes map based on roles
            const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })
                // dynamically add accessible routes
            router.addRoutes(accessRoutes)
                // reset visited views and cached views
            dispatch('tagsView/delAllViews', null, { root: true })
            resolve()
        })
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}