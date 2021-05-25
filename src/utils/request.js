import axios from 'axios'

// mock开关
// const mock = false
// if (mock) {
//   require('../mock/api')
// }

const request = axios.create({
  baseURL: '/api',
  timeout: 5000
})

request.interceptors.response.use(response => {
  const res = response.data
  const path = location.hash
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) {
    if (path != '#/index') {
      window.location.href = '/#/login'
    }
    throw new Error()
  } else {
    throw new Error()
  }
})

export default request
