import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import router from './router'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')