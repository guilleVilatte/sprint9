import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    pokemons: {},
    init: 0,
  },
  getters: {
    getNext(state) {
      return (state.init += 20)
    }
  },
  mutations: {
    fullPokes: (state, pokesAction) => {
      state.pokemons = pokesAction
    },
    morePokes: (state, pokesAction) => {
      let i = 0
      while (pokesAction[i]){
        state.pokemons.push(pokesAction[i])
        i++
      }
    }
  },
  actions: {
    async getPokes({ commit }, init) {
      const pokes = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${init}&limit=15`).then(response => response.data.results)
      commit('fullPokes', pokes)
    },
    async getMorePokes({ commit }, init, final) {
      const morePokes = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${init}&limit=15`).then(response => response.data.results)
      commit('morePokes', morePokes)
    },
  },
  modules: {
  }
})
