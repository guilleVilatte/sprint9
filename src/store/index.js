import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    pokemons: [],
    pokemon: {},
    init: 0,
    showModalLog: false,
    showModalReg: false,
    showBurgerModal: false
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
    },
    restartingInit: (state) => {
      state.init = 0
    },
    viewLogin: (state) => {
      state.showModalLog = true
    },
    viewRegister: (state) => {
      state.showModalReg = true
    },
    closeModal: (state) => {
      state.showModalLog = false
      state.showModalReg = false
    },
    closeModalBurger: (state) => {
      state.showBurgerModal = false
    },
    mostrarBurgerModal: (state) => {
      state.showBurgerModal = true
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
    async getPoke({ commit }, id) {
      const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(response => response.data)
      commit('getOnePoke', poke)
    },
  },
  modules: {
  }
})
