
import aplus from './utils/aplus';
import Vue from 'vue'
import App from './App'

// Vue.use(aplus)
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
