import { ref } from "@vue/reactivity";
import Axios from "axios";
import validatedRegion from "./validateRegion";

const setupPokemonApi = () => {
    const error = ref(null);

    const getRegion = async (region) => {
        region = await validatedRegion(region)

        if (!region.value) {
            error.value = { message: 'Region not found' };
            return [];
        }

        try {
            let res = await Axios({
                url: `https://pokeapi.co/api/v2/generation/${region.value}/`,
            });
            let data = await getNumberAndImage(res.data.pokemon_species);
            return data;
        } catch (err) {
            error.value = err;
        }
    };

    const getPokemon = async (num) => {
        try {
            let res = await Axios({
                url: `https://pokeapi.co/api/v2/pokemon/${num}/`,
            });
            return res.data;
        } catch (err) {
            error.value = err;
        }
    };

    return { error, getRegion, getPokemon };
};

const getNumberAndImage = (pokemonArr) => {
    pokemonArr.forEach((pokemon) => {
        let url = pokemon.url.substr(42, 4);
        let number = url.replace("/", "");
        let spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`;
        pokemon.number = number;
        pokemon.img = spriteUrl;
    });

    pokemonArr.sort((a, b) => {
        return a.number - b.number;
    });

    return pokemonArr;
};

export default setupPokemonApi;
