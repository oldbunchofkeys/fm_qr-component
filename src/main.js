import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  created() {
    const html = document.documentElement // returns the html tag
    html.setAttribute('lang', 'en')
  }
}).$mount('#app')
