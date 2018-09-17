import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const getNextTaskNumber = todos => {
  return todos.length
}

const isEmptyString = (value) => {
  if (value === '') {
    return true
  } else {
    return false
  }
}

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
  ],
  todoForm: '',
  alert: {
    displayAlert: false,
    message: 'Invalid input! Please check again.'
  }

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
  },
  updateTodoForm (state, payload) {
    state.todoForm = payload
  },
  addTodo (state) {
    state.alert.displayAlert = isEmptyString(state.todoForm)
    if (!state.alert.displayAlert) {
      state.todos.push({
        id: getNextTaskNumber(state.todos),
        item: state.todoForm,
        status: false
      })
    }
  },
  clearAlert (state) {
    state.alert.displayAlert = false
  }
}

const actions = {
  setStatus (context, todo) {
    context.commit('setStatus', todo)
  },
  updateTodoForm (context, payload) {
    context.commit('updateTodoForm', payload)
  },
  addTodo ({ commit }) {
    commit('addTodo')
    setTimeout(() => {
      commit('clearAlert')
    }, 2000)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
