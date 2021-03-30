<template>
  <transition
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    enter-active-class="ease-out duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
    leave-active-class="ease-in duration-200"
  >
    <div
      v-if="!pokemon"
      class="flex justify-items-center justify-center right-1/2 bottom-1/2 pb-12 pt-4"
    >
      <div
        style="border-top-color:transparent"
        class="border-solid animate-spin  rounded-full border-red-400 border-8 h-24 w-24"
      ></div>
    </div>

    <div v-else>
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

      <section
        class="flex pb-2 justify-between items-center transform transition-all"
      >
        <h3 class="text-md capitalize text-gray-500 font-bold">
          Basic Information
        </h3>
        <div class="flex items-center">
          <span class="mr-3" id="annual-billing-label">
            <span class="text-sm font-medium text-gray-500">Toggle shiny</span>
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
      </section>

      <section class="flex flex-col">
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

                  <!-- Even row -->
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

                  <!-- Odd row -->
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

                  <!-- Odd row -->
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

                  <!-- Even row -->
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
      </section>

      <div v-if="pokemon.moves.length > 0">
        <section
          class="flex pb-2 justify-between items-center transform transition-all mt-8"
        >
          <h3 class="text-md capitalize text-gray-500 font-bold">
            Moves
          </h3>
        </section>

        <section class="flex flex-col">
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
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";

export default {
  name: "PokemonModal",
  setup() {
    const store = useStore();
    const pokemon = computed(() => store.state.Pokemon.pokemon);
    const shinyToggle = ref(false);

    watch(pokemon, () => {
      shinyToggle.value = false;
    });

    return {
      pokemon,
      shinyToggle,
    };
  },
};
</script>

<style lang="css" scoped>
table tr:nth-child(even) {
  background: white;
}
</style>
