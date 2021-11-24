import Vue from 'vue'
import App from './App.vue'
import './css/tailwind.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import store from './store';

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.prototype.$library = library


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
