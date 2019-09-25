import Vue from 'vue'
import App from './App.vue'
import 'common/config.js' // eslint-disable-line no-unused-vars
Vue.config.productionTip = false
new Vue({ 
  render: h => h(App),
}).$mount('#app')
