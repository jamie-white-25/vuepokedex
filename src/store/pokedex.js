export const PokedexModule = {
    namespaced: true,
    state: {
        pokedex: [],
        region: null
    },
    getters: {},
    mutations: {
        SET_POKEDEX(state, region) {
            state.pokedex = region;
        },
        SET_REGION(state, region) {
            state.region = region;
        }
    },
    actions: {
        setPokedex({ commit }, region) {
            commit("SET_POKEDEX", region);
        },
        setRegion({ commit }, region) {
            commit("SET_REGION", region);
        }
    }
}; // this is overkill and not needed...... yet?
