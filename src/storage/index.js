// storage封装
const STORAGE_KEY = 'mart'

export default {
  // 存储值
  setItem(key, value, module_name) {
    if (module_name) {
      const val = this.getItem(module_name)
      val[key] = value
      this.setItem(module_name, val)
    } else {
      const val = this.getStorage()
      val[key] = value
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
  },

  // 获取某一模块下的key对应的值
  getItem(key, module_name) {
    if (module_name) {
      const val = this.getItem(module_name)
      if (val) return val[key]
    }
    this.getStorage()[key]
  },

  // 获取sessionStorage
  getStorage() {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  },

  // 清除
  clear(key, module_name) {
    const val = this.getStorage()
    if (module_name) {
      if (!val[module_name]) {
        return
      }
      delete val[module_name][key]
    } else {
      delete val[key]
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
  }
}
