import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const getNextTaskNumber = todos => {
  return todos.length
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
  todoForm: {
    description: ''
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
    state.todoForm.description = payload
  },
  addTodo (state) {
    state.todos.push({
      id: getNextTaskNumber(state.todos),
      item: state.todoForm.description,
      status: false
    })
  }
}

const actions = {
  setStatus (context, todo) {
    context.commit('setStatus', todo)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
