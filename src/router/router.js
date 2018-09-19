import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/views/HomeBody.vue'
import Main from '../components/views/MainBody.vue'
import Todos from '../components/views/TodosView.vue'
import Done from '../components/views/DoneView.vue'
import TodoItemView from '../components/views/TodoItemView.vue'

Vue.use(Router)

const routes = [
  {
    path: '/main',
    name: 'main',
    component: Main,
    children: [
      {
        path: '/main/todoList/',
        name: 'todos',
        component: Todos
      },
      {
        path: '/main/done',
        name: 'done',
        component: Done
      },
      {
        path: '/main/todoList/:id',
        name: 'todoItem',
        component: TodoItemView,
        props: true
      }
    ]
  },
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

export default new Router({
  mode: 'history',
  routes
})
