import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    pokemons: {},
  },
  getters: {
  },
  mutations: {
    fullPokes: (state, pokesAction) => {
      state.pokemons = pokesAction
    }
  },
  actions: {
    async getPokes({ commit }) {
      const pokes = await axios.get(`https://pokeapi.co/api/v2/pokemon`).then(response => response.data.results)
      commit('fullPokes', pokes)
    },
  },
  modules: {
  }
})
