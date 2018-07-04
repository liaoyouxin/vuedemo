// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import layout from './components/layout'
import router from './router'
import VueResource from 'vue-resource'
import Store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueResource)

new Vue({
  el: '#app',
  router,
  store:Store,
  components: { layout },
  template: '<layout/>'
})
