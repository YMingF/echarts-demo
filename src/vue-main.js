import VueApp from './vue-app.vue'
import Vue from 'vue'

new Vue({
  render: h => h(VueApp)
}).$mount(document.getElementById('root'))