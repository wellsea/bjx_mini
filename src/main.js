import Vue from 'vue'
import App from './App'
import api from './utils/api'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$http = api
const app = new Vue(App)
app.$mount()
