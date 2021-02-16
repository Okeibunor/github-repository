
const state = {
    darkMode:false
}

const getters = {
    getDarkMode: (state) => state.darkMode,
}

const actions = {
    toggleDarkMode({commit}){
      commit('toggleDarkMode')
    }
}

const mutations = {
    toggleDarkMode(state){
      state.darkMode = !state.darkMode;
    },
}

export default{
    state,
    getters,
    actions,
    mutations
}
