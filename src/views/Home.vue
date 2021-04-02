<template>
  <main
    class="pb-10 sm:pb-32 lg:pt-8 lg:pb-14 lg:overflow-hidden bg-gradient-to-r from-red-500 to-pink-600 flex items-center h-calc"
  >
    <div class="mx-auto max-w-7xl lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8">
        <div
          class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center"
        >
          <div class="lg:py-24">
            <a
              href="#"
              class="inline-flex items-center text-gray-600 bg-gray-100 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-red-700"
            >
              <span
                class="px-3 py-0.5 text-white bg-red-500 text-xs font-semibold leading-5 uppercase tracking-wide rounded-full"
                >the pokedex</span
              >
              <span class="ml-4 text-sm"
                >Click on a page to see the region</span
              >
              <svg
                class="ml-2 w-5 h-5 text-gray-500"
                x-description="Heroicon name: solid/chevron-right"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <h1
              class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"
            >
              <span class="block text-white">Welcome to the Pokedex</span>
              <!-- <span class="bg-clip-text text-gray-300 block"
                >ship web apps</span
              > -->
            </h1>
            <p
              class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
            >
              Click on each region to show the pokedex for that region, or
              search for a pokemon.
            </p>
            <div class="mt-10 sm:mt-12">
              <div class="min-w-0 flex items-center">
                <input
                  type="text"
                  v-model="search"
                  @change="searchForPokemon"
                  placeholder="Search for a Pokemon"
                  class="block w-full px-4 py-3 border-b-2 text-base
                focus:outline-none border-white text-left placeholder-gray-100
                bg-transparent text-white"
                />
                <svg
                  class="animate-spin -ml-8 h-5 w-5 text-white"
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
        <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative flex">
          <div
            class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:ml-auto lg:mr-0 self-center"
          >
            <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->

            <img
              class="lg:inset-y-0 lg:left-0 w-auto h-44 md:h-48 lg:h-96 self-center hidden lg:flex"
              :src="pokemonImg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
// @ is an alias to /src

export default {
  setup() {
    const search = ref("");
    const router = useRouter();
    const pokemonImg = ref(0);

    onMounted(() => {
      pokemonImg.value = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Math.floor(
        Math.random() * 898
      ) + 1}.png`;
    });

    const searchForPokemon = () => {
      setTimeout(() => {
        if (search.value !== "" && search.value.length > 2) {
          router.push({
            name: "Search",
            params: {
              pokemon: search.value,
            },
          });
        }
      }, 1000);
    };

    return {
      search,
      pokemonImg,
      searchForPokemon,
    };
  },
};
</script>

<style scoped>
.h-calc {
  height: calc(100vh - 64px);
}
</style>
