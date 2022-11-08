import Vue from 'vue'
import App from './App.vue'
import firebase from './firebase.js';
Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  firebase,
}).$mount('#app')
