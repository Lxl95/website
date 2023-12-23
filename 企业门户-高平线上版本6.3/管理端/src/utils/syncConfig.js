/**
 * 获取登录的接口地址
 */
let config
const syncConfigData = function(url) {
  const xhr = new XMLHttpRequest()
  xhr.open('get', url, false)
  xhr.send()
  return JSON.parse(xhr.responseText)
}
// eslint-disable-next-line prefer-const
config = syncConfigData('./js/config.json?r=' + Math.random())
export default config
