import { ref } from "@vue/reactivity";
import Axios from "axios";

const setup = () => {
    const pokedex = ref([]);
    const pokemon = ref(null);
    const error = ref(null);

    const getRegion = async (region) => {
        switch (region) {
            case "kanto":
                region = 1;
                break;
            case "johto":
                region = 2;
                break;
            case "hoenn":
                region = 3;
                break;
            case "sinnoh":
                region = 4;
                break;
            case "unova":
                region = 5;
                break;
            case "kalos":
                region = 6;
                break;
            case "alola":
                region = 7;
                break;
            case "galar":
                region = 8;
                break;
            default:
                region = 0;
                break;
        }

        try {
            let res = await Axios({
                url: `https://pokeapi.co/api/v2/generation/${region}/`,
            });

            let data = await getNumberAndImage(res.data.pokemon_species);
            pokedex.value = data;
        } catch (err) {
            error.value = err;
        }
    };

    const getPokemon = async (num) => {
        try {
            let res = await Axios({
                url: `https://pokeapi.co/api/v2/pokemon/${num}/`,
            });
            pokemon.value = res.data;
        } catch (err) {
            error.value = err;
        }
    };

    return { pokedex, pokemon, error, getRegion, getPokemon };
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

export default setup;
