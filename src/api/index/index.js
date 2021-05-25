import request from '@/utils/request'

export default {
  async getProductList() {
    const res = await request.get('/products', {
      params: {
        categoryId: '100012',
        pageSize: 6
      }
    })
    return res.list
  },
  async getPhoneList() {
    const res = await request.get('/products', {
      params: {
        categoryId: '100012',
        pageSize: 8
      }
    })
    const phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)]
    return phoneList
  }
}
