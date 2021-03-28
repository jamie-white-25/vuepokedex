export const PokedexMoudle = {
    namespaced: true,
    state: {
        pokedex: null,
    },
    getters: {

    },
    mutations: {
        SET_POKEDEX(state, region) {
            state.pokedex = region
        }
    },
    actions: {
        setPokex({ commit }, region) {
            commit('SET_POKEDEX', region);
        }
    }
}// this is overkill and not needed...... yet? 