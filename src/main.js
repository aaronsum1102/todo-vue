import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router/router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faListUl, faPlus, faExclamationTriangle, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faListUl, faPlus, faExclamationTriangle, faTrash)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
