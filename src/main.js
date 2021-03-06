import Vue from 'vue'
import App from './App.vue'


import routes from "./router";

Vue.config.productionTip = false

new Vue({
  routes,
  render: h => h(App),
}).$mount('#app')
