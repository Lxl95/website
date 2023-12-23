import Cookies from 'js-cookie'

const TokenKey = 'RX-Token'
const YthTokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey) || Cookies.get(YthTokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
