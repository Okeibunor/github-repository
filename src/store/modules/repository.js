import axios from "axios"

const state = {
  repos: [],
  user: '',
  request_status: null,
}

const getters = {
  getAllRepos: (state) => state.repos,
  getUser: (state) => state.user,
}

const actions = {
  fetchAllRepos({ commit }) {
    let repos = JSON.parse(localStorage.getItem('repos'))
    if (repos) {
      commit('SET_REPOS', repos);
      return;
    }
    return new Promise((resolve, reject) => {
      commit('request')
      axios.get('/api/users/Okeibunor/repos')
        .then(res => {
          localStorage.setItem('repos', JSON.stringify(res.data))
          commit('SET_REPOS', res.data)
          commit('request_success')
          resolve(res)
        })
        .catch(err => {
          commit('request_error')
          reject(err)
        })
    })
  },
  fetchSingleUser({ commit }) {
    let user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      commit('SET_USER', user);
      return;
    }
    return new Promise((resolve, reject) => {
      commit('request')
      axios.get('/api/users/Okeibunor')
        .then(res => {
          localStorage.setItem('user', JSON.stringify(res.data))
          commit('SET_USER', res.data)
          commit('request_success')
          resolve(res)
        })
        .catch(err => {
          commit('request_error')
          reject(err)
        })
    })
  }
}

const mutations = {
  SET_REPOS(state, repos) {
    state.repos = repos;
  },
  SET_USER(state, user) {
    state.user = user;
  },
  request(state) {
    state.request_status = "processing"
  },
  request_success(state) {
    state.request_status = "success"
  },
  request_error(state) {
    state.request_status = "failed"
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
