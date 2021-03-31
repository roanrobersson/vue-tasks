import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    updateTasks (state, tasks) {
      state.tasks = tasks
    }
  }
})

new Vue({
  render: h => h(App),
  store: store,
}).$mount('#app')
