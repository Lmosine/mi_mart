import request from '@/utils/request'

export default {
  async getProductList() {
    const res = await request.get('/products', {
      params: {
        categoryId: '100012'
      }
    })

    if (res.list.length > 6) {
      const resData = res.list.slice(0, 6)
      return resData
    }

    return res.list
  }
}
