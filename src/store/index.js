import { createStore } from "vuex";
import { PokedexModule } from "./pokedex";
import { PokemonModule } from "./pokemon";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Pokedex: PokedexModule,
    Pokemon: PokemonModule
  }
});
