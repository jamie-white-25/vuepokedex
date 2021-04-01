
export const PokemonModule = {
    namespaced: true,
    state: {
        pokemon: false,
        isModalOpen: false,
    },
    getters: {
    },
    mutations: {
        SET_POKEMON(state, pokemon) {
            state.pokemon = pokemon
            console.log(pokemon)
        },
        SET_IS_MODEL_OPEN(state, isOpen) {
            state.isModalOpen = isOpen
        },
    },
    actions: {
        setPokemon({ commit }, pokemon) {
            commit('SET_POKEMON', pokemon);
        },
        setIsModalOpen({ commit }, isOpen) {
            commit('SET_IS_MODEL_OPEN', isOpen);
        }
    }
}// this is overkill and not needed...... yet? 