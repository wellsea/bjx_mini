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
      'content-type': method === 'get' ? 'application/json' : 'application/x-www-form-urlencoded'
    }
  })
}
const json2Form = function (json) {
  var str = []
  for (let p in json) {
    str.push(encodeURIComponent(p) + '=' + encodeURIComponent(json[p]))
  }
  return str.join('&')
}
const api = {
  getBanner: params => http('post', 'home/home/homePage', params),
  getInvest: params => http('post', 'home/home/borrowIndexList', params),
  getStatic: params => http('get', 'borrow/statistics/count', params),
  getInvestList: params => http('post', 'invest/investments/investList', json2Form(params)),
  getBondList: params => http('post', 'invest/bonds/bondList', json2Form(params))
}
export default api
