import store from '@/store'

const uploadUrl = store.state.app.baseUrl + '/upload/imgUpload'
console.log(uploadUrl);
export default uploadUrl