import request from '@/utils/request'

export default {
  async getCartCount() {
    return await request.get('/carts/products/sum')
  },
  async addCart(id) {
    const res = await request.post('/carts', {
      productId: id,
      selected: true
    })
    const showModal = true
    return { showModal, id, res }
  }
}
