<template>
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <section class="bg-white">
      <div
        class="max-w-7xl mx-auto pt-16 px-4 sm:pt-52 sm:pb-0 sm:px-6 lg:px-8"
      >
        <div class="text-center">
          <p
            class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
          >
            Searched:
            <span class="bold capitalize text-red-500">
              {{ pokemon ? pokemon.name : paramsPokemon }}
            </span>
          </p>
          <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Search for another pokemon
          </p>

          <div class="p-10 max-w-lg mx-auto mt-5">
            <div class="min-w-0 flex items-center">
              <input
                type="text"
                placeholder="Enter name or number E.g: mewtwo, or 150"
                class="block w-full px-4 py-3 border-b-2 text-base focus:outline-none border-red-400 text-center"
                v-model="search"
                @change="searchForPokemon"
              />
              <svg
                class="animate-spin -ml-8 h-5 w-5 text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                :class="search.length > 2 ? 'show' : 'hidden'"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-16 max-w-lg mx-auto" v-if="pokemon">
      <section class="flex mb-8">
        <div
          class="border bg-gray-200 p-5 w-full flex justify-around rounded-lg"
        >
          <img
            class="inline-block h-32 w-32 border-0"
            :src="
              shinyToggle
                ? pokemon.sprites.front_shiny
                : pokemon.sprites.front_default
            "
            alt=""
          />
          <img
            class="inline-block h-32 w-32"
            :src="
              shinyToggle
                ? pokemon.sprites.back_shiny
                : pokemon.sprites.back_default
            "
            alt=""
          />
        </div>
      </section>

      <section>
        <div
          class="flex pb-2 justify-between items-center transform transition-all"
        >
          <h3 class="text-md capitalize text-gray-500 font-bold">
            Basic Information
          </h3>
          <div class="flex items-center">
            <span class="mr-3" id="annual-billing-label">
              <span class="text-sm font-medium text-gray-500"
                >Toggle shiny</span
              >
            </span>
            <button
              type="button"
              class="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none"
              :class="shinyToggle ? pokemon.types[0].type.name : 'bg-gray-200'"
              :aria-pressed="shinyToggle"
              aria-labelledby="annual-billing-label"
              @click="shinyToggle = !shinyToggle"
            >
              <span class="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                :class="shinyToggle ? 'translate-x-5' : 'translate-x-0'"
              ></span>
            </button>
          </div>
        </div>

        <div class="flex flex-col">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div
              class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
            >
              <div
                class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
              >
                <table class="min-w-full divide-y divide-gray-200">
                  <tbody class="bg-gray-100">
                    <!-- Odd row -->
                    <tr>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                      >
                        Name:
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-600 capitalize font-bold"
                      >
                        {{ pokemon.name }}
                      </td>
                    </tr>

                    <!-- Type row -->
                    <tr>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                      >
                        Type:
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-bold"
                      >
                        <div class="flex">
                          <span
                            v-for="types in pokemon.types"
                            :key="types"
                            :class="types.type.name"
                            class="inline-flex items-center px-2.5 py-0.5 rounded-md text-md mr-2 text-gray-100 font-bold capitalize tracking-wider"
                          >
                            {{ types.type.name }}
                          </span>
                        </div>
                      </td>
                    </tr>

                    <!-- ID row -->
                    <tr>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                      >
                        ID:
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-bold"
                      >
                        {{ pokemon.id }}
                      </td>
                    </tr>

                    <!-- Type row -->
                    <tr>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                      >
                        Abilities:
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-bold"
                      >
                        <div class="flex flex-wrap">
                          <span
                            v-for="abilities in pokemon.abilities"
                            :key="abilities.ability.name"
                            class="flex flex-wrap items-center px-2.5 py-0.5
                            rounded-md text-md mr-2 text-gray-100 font-bold
                            capitalize tracking-wider mb-1"
                            :class="pokemon.types[0].type.name"
                          >
                            {{ abilities.ability.name }}
                          </span>
                        </div>
                      </td>
                    </tr>

                    <!-- Weight row -->
                    <tr>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                      >
                        Weight:
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-bold"
                      >
                        {{ pokemon.weight / 10 }} kg
                      </td>
                    </tr>

                    <!-- Height row -->
                    <tr>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                      >
                        Height:
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-bold"
                      >
                        {{ pokemon.height / 10 }}
                        meters
                      </td>
                    </tr>

                    <!-- Experience row -->
                    <tr>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                      >
                        Base Experience:
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-bold"
                      >
                        {{ pokemon.base_experience }} xp
                      </td>
                    </tr>

                    <!-- stats row -->
                    <tr v-for="stats in pokemon.stats" :key="stats.name">
                      <td
                        class="px-6 py-4 capitalize whitespace-nowrap text-sm font-medium text-gray-900"
                      >
                        {{ stats.stat.name }}:
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-bold">
                        <!-- <h2 class="px-2 text-gray-600">{{ stats.base_stat }}</h2> -->
                        <div class="shadow w-full bg-gray-400">
                          <div
                            class="text-md leading-none py-1 text-center text-white"
                            :class="pokemon.types[0].type.name"
                            :style="
                              'width:' +
                                Math.floor((stats.base_stat / 255) * 100) +
                                '%'
                            "
                          >
                            {{ stats.base_stat }}
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section v-if="pokemon.moves.length > 0">
        <div>
          <div
            class="flex pb-2 justify-between items-center transform transition-all mt-8"
          >
            <h3 class="text-md capitalize text-gray-500 font-bold">
              Moves
            </h3>
          </div>

          <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div
                class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
              >
                <div
                  class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
                >
                  <table class="min-w-full divide-y divide-gray-200">
                    <tbody class="bg-gray-100">
                      <!-- moves -->
                      <tr v-for="moves in pokemon.moves" :key="moves">
                        <td
                          class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                        >
                          {{ moves.move.name }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </main>
</template>

<script>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import setupPokemonApi from "@/composables/getPokemon";

export default {
  name: "Search",
  setup() {
    const search = ref("");
    const route = useRoute();
    const pokemon = ref(null);
    const shinyToggle = ref(false);
    const paramsPokemon = ref(route.params.pokemon);
    const { getPokemon } = setupPokemonApi();

    onMounted(() => {
      searchPokemon(paramsPokemon);
      //   console.log(paramsPokemon.value);
    });

    const searchForPokemon = () => {
      if (search.value !== "" && search.value.length > 2) {
        setTimeout(() => {
          searchPokemon(search);
          search.value = "";
        }, 1000);
      }
    };

    const searchPokemon = async (seachedPokemon) => {
      console.log(pokemon);
      pokemon.value = await getPokemon(
        seachedPokemon.value.trim().toLowerCase()
      );
    };

    return {
      search,
      pokemon,
      shinyToggle,
      paramsPokemon,
      searchForPokemon,
    };
  },
};
</script>

<style></style>
