import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/views/HomeBody.vue'
import Main from '../components/views/MainBody.vue'
import Todos from '../components/views/TodoView.vue'
import Done from '../components/views/DoneView.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/main',
    name: 'main',
    component: Main,
    children: [
      {
        path: '/main/todoList',
        name: 'todos',
        component: Todos
      },
      {
        path: '/done',
        name: 'done',
        component: Done
      }
    ]
  }
]

export default new Router({
  routes
})
