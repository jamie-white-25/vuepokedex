import { createStore } from "vuex";

export default createStore({
  state: {
    pokemon: null,
  },
  mutations: {
    SET_POKEMON(state, pokemon) {
      state.pokemon = pokemon;
    }
  },
  actions: {
    setPokemon({ commit }, pokemon) {
      commit('SET_POKEMON', pokemon);
    }

  },
  modules: {

  }
});
