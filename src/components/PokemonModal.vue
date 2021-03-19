<template>
  <div v-if="pokemon">
    <div class="flex pb-5 justify-between items-center">
      <h1 class="text-md capitalize font-medium text-gray-500">
        {{ pokemon.name }}
      </h1>
      <div class="flex items-center">
        <span class="mr-3" id="annual-billing-label">
          <span class="text-sm font-medium text-gray-500">Toggle shiny</span>
        </span>
        <button
          type="button"
          class="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none"
          :class="shinyToggle ? 'bg-red-400' : 'bg-gray-200'"
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

    <div class="flex mb-5">
      <div
        class="border bg-gray-200 p-5 w-full flex justify-around rounded-lg"
        v-if="!shinyToggle"
      >
        <img
          class="inline-block h-32 w-32 border-0"
          :src="pokemon.sprites.front_default"
          alt=""
        />
        <img
          class="inline-block h-32 w-32"
          :src="pokemon.sprites.back_default"
          alt=""
        />
      </div>
      <div
        class="border bg-gray-200 p-5 w-full flex justify-around rounded-lg"
        v-else
      >
        <img
          class="inline-block h-32 w-32 border-0"
          :src="pokemon.sprites.front_shiny"
          alt=""
        />
        <img
          class="inline-block h-32 w-32"
          :src="pokemon.sprites.back_shiny"
          alt=""
        />
      </div>
    </div>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div
        class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
      >
        <div class="flex-shrink-0">
          <img
            class="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=LH3tR9FOVB&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div class="flex-1 min-w-0">
          <a href="#" class="focus:outline-none">
            <span class="absolute inset-0" aria-hidden="true"></span>
            <p class="text-sm font-medium text-gray-900">
              Leslie Alexander
            </p>
            <p class="text-sm text-gray-500 truncate">
              {{ pokemon.name }}
            </p>
          </a>
        </div>
      </div>

      <div
        class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
      >
        <div class="flex-shrink-0">
          <img
            class="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=LH3tR9FOVB&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div class="flex-1 min-w-0">
          <a href="#" class="focus:outline-none">
            <span class="absolute inset-0" aria-hidden="true"></span>
            <p class="text-sm font-medium text-gray-900">
              Michael Foster
            </p>
            <p class="text-sm text-gray-500 truncate">
              Co-Founder / CTO
            </p>
          </a>
        </div>
      </div>

      <div
        class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
      >
        <div class="flex-shrink-0">
          <img
            class="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixqx=LH3tR9FOVB&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div class="flex-1 min-w-0">
          <a href="#" class="focus:outline-none">
            <span class="absolute inset-0" aria-hidden="true"></span>
            <p class="text-sm font-medium text-gray-900">
              Dries Vincent
            </p>
            <p class="text-sm text-gray-500 truncate">
              Manager, Business Relations
            </p>
          </a>
        </div>
      </div>

      <div
        class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
      >
        <div class="flex-shrink-0">
          <img
            class="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixqx=LH3tR9FOVB&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div class="flex-1 min-w-0">
          <a href="#" class="focus:outline-none">
            <span class="absolute inset-0" aria-hidden="true"></span>
            <p class="text-sm font-medium text-gray-900">
              Lindsay Walton
            </p>
            <p class="text-sm text-gray-500 truncate">
              Front-end Developer
            </p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
export default {
  name: "PokemonModal",
  props: {
    pokemonDetails: {
      type: Object,
    },
  },
  setup(props) {
    const pokemon = computed(() => props.pokemonDetails);
    const shinyToggle = ref(false);

    watch(pokemon, () => {
      console.log(pokemon.value);
      shinyToggle.value = false;
    });

    return {
      pokemon,
      shinyToggle,
    };
  },
};
</script>

<style></style>
