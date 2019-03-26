import httpsPromisify from './util'
// baseUrl: isPro ? 'http://test.wap.bjxcaifu.com/' : 'api/' // test
// baseUrl: isPro ? 'http://uat.wap.bjxcaifu.com/' : 'api/' //uat
// baseUrl: isPro ? 'https://www.bjxcaifu.com/weChat/' : 'api/' //pro
const root = 'https://www.bjxcaifu.com/weChat/'

const getRequest = httpsPromisify(wx.request)

const http = (method, url, data = {}) => {
  return getRequest({
    url: root + url,
    data: data,
    method: method,
    header: {
      'content-type': 'application/json'
    }
  })
}

const api = {
  getBanner: params => http('post', 'home/home/homePage', params),
  getInvest: params => http('post', 'home/home/borrowIndexList', params),
  getStatic: params => http('get', 'borrow/statistics/count', params)
}
export default api
