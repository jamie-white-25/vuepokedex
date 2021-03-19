export const PokedexMoudle = {
    namespaced: true,
    state: {
        pokedex: {
            kanto: null,
        }
    },
    mutations: {
        SET_POKEDEX(state, region) {

        }
    },
    actions: {
        setPokex({ commit }, region) {
            commit('SET_POKEDEX', region);
        }
    }
}// this is overkill and not needed...... yet? 