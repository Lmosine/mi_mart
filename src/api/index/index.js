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
  async geyPhoneList() {
    const res = await request.get('/products', {
      params: {
        categoryId: '100012',
        pageSize: 8
      }
    })
    const phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)]
    return phoneList
  },
  async addCart(id) {
    // await request.post('/carts', {
    //   productId: id,
    //   selected: true
    // })
    const showModal = true
    return { showModal, id }
  }
}
