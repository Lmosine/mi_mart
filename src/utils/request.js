import axios from 'axios'

// mock开关
const mock = false
if (mock) {
  require('../mock/api')
}

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

request.interceptors.response.use(response => {
  const res = response.data
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) {
    window.location.href = '/#/login'
  } else {
    alert(res.msg)
  }
})

export default request
