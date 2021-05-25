import request from '@/utils/request'

export default {
  async login(username, password) {
    return await request.post('/user/login', {
      username,
      password
    })
  },
  async register() {
    await request.post('/user/register', {
      username: 'wsh666',
      password: 'wsh666',
      email: 'wsh666@163.com'
    })
  },
  async getUser() {
    return await request.get('/user')
  }
}
