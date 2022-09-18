import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    pokemons: [],
    pokemon: {},
    init: 0,
  },
  getters: {
    getNext(state) {
      return (state.init += 15)
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
    },
    getOnePoke: (state, poke) => {
      state.pokemon = poke
      console.log(poke)
    }
  },
  actions: {
    async getPokes({ commit }, init) {
      const pokes = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${init}&limit=15`).then(response => response.data.results)
      commit('fullPokes', pokes)
    },
    async getMorePokes({ commit }, init) {
      const morePokes = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${init}&limit=15`).then(response => response.data.results)
      commit('morePokes', morePokes)
    },
    async getPoke({ commit }, url) {
      const poke = await axios.get(url).then(response => response.data)
      commit('getOnePoke', poke)
      console.log(poke)
    },
  },
  modules: {
  }
})
