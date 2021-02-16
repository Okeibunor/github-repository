import axios from "axios"

const state = {
    repos:[],
    user:'',
    request_status:null,
}

const getters = {
    getAllRepos: (state) => state.repos,
    getUser:(state)=>state.user,
}

const actions = {
    fetchAllRepos({commit}){
        return new Promise((resolve,reject)=>{
            commit('request')
            axios.get('/api/users/Okeibunor/repos')
            .then(res => {
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
    fetchSingleUser({commit}){
      return new Promise((resolve,reject)=>{
        commit('request')
        axios.get('/api/users/Okeibunor')
        .then(res=>{
          commit('SET_USER',res.data)
          commit('request_success')
          resolve(res)
        })
        .catch(err=>{
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
    request(state){
      state.request_status = "processing"
    },
    request_success(state){
      state.request_status = "success"
    },
    request_error(state){
      state.request_status = "failed"
    },
}

export default{
    state,
    getters,
    actions,
    mutations
}
