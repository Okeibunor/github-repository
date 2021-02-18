import axios from "axios"

const state = {
  commits: [],
  commit_status: ''
}

const getters = {
  getAllCommits: (state) => state.commits,
  getCommitStatus: (state) => state.commit_status,
}

const actions = {
  fetchAllCommits({ commit }, repo) {
    let commits = JSON.parse(localStorage.getItem(repo))
    if (commits) {
      commit('SET_COMMITS', commits);
      return;
    }
    return new Promise((resolve, reject) => {
      commit('request')
      axios.get(`/api/repos/Okeibunor/${repo}/stats/commit_activity`)
        .then(res => {
          localStorage.setItem(`${repo}`, JSON.stringify(res.data))
          commit('SET_COMMITS', res.data)
          commit('request_success')
          resolve(res)
        })
        .catch(err => {
          commit('request_error')
          reject(err)
        })
    })
  },
}

const mutations = {
  SET_COMMITS(state, commits) {
    state.commits = commits;
  },
  request(state) {
    state.commit_status = "processing"
  },
  request_success(state) {
    state.commit_status = "success"
  },
  request_error(state) {
    state.commit_status = "failed"
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
