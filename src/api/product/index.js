import request from '@/utils/request'

export default {
  async getProductInfo(productId) {
    return await request.get(`/products/${productId}`)
  }
}
