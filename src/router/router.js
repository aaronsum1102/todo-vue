import Vue from 'vue'
import Router from 'vue-router'
import Todos from '../components/views/TodosBody.vue'
import Done from '../components/views/DoneBody.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Todos
  },
  {
    path: '/done',
    component: Done
  }
]

export default new Router({
  routes
})
