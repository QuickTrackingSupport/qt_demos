import App from './App'



// #ifndef VUE3
import Vue from 'vue'

// #ifdef MP
import aplus from './utils/aplus.js'
Vue.use(aplus);
// #endif

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  
  // #ifdef MP
  import aplus from './utils/aplus.js'
  app.use(aplus);
  // #endif
  
  return {
    app
  }
}
// #endif

