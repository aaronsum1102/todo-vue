import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  todos: [
    { id: 0,
      item: 'working on css.',
      status: false },
    { id: 1,
      item: 'working on vue',
      status: true },
    { id: 2,
      item: 'working on vuex',
      status: false }
  ]
}

const getters = {
  taskToDo: state => {
    return state.todos.filter(todo => todo.status === false).length
  },
  taskCompleted: state => {
    return state.todos.filter(todo => todo.status === true).length
  }
}

const mutations = {
  setStatus (state, taskObject) {
    const status = taskObject.status
    state.todos[taskObject.id].status = !status
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations
})
