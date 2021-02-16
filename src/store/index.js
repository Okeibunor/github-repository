import Vuex from 'vuex'
import Vue from 'vue'
import repository from './modules/repository'
import commit from './modules/commit'

// Load Vuex
Vue.use(Vuex)

// Create Store
export default new Vuex.Store({
  modules: {
    repository: repository,
    commit:commit
  },
})
