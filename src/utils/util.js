function httpsPromisify (fn) {
  wx.showLoading({
    title: '加载中'
  })
  return function (obj = {}) {
    return new Promise((resolve, reject) => {
      obj.success = function (res) {
        resolve(res.data)
        wx.hideLoading()
      }
      obj.fail = function (res) {
        reject(res)
        wx.hideLoading()
      }
      fn(obj)
    })
  }
}

export default httpsPromisify
