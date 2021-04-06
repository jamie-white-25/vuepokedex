<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
    :duration="500"
    appear
    mode="out-in"
  >
    <ul
      class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 justify-self-center mt-16"
      v-if="pokemonList.length && timer"
    >
      <li
        class="col-span-1 flex flex-col text-center bg-white rounded-lg hover:bg-gray-200 py-12 animate__animated animate__bounceIn"
        v-for="pokemon in pokemonList"
        :key="pokemon.number"
        :data-id="pokemon.number"
        @click="clickedPokemon(pokemon.number)"
      >
        <div class="flex-1 flex flex-col  mx-6">
          <img
            class="w-auto h-36 lg:h-40 mx-auto rounded"
            :src="pokemon.img"
            :alt="pokemon.name"
          />
          <div class="">
            <h3 class="mt-6 text-gray-900 text-sm font-medium">
              {{ pokemon.name }}
            </h3>
            <dl class="mt-2 flex-grow flex flex-col justify-between">
              <dd class="text-gray-500 text-sm">
                {{ "#" + pokemon.number }}
              </dd>
            </dl>
          </div>
        </div>
      </li>
    </ul>

    <ul
      v-else-if="pokemonList.length && !timer"
      class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 justify-self-center mt-16 "
    >
      <li
        class="col-span-1 flex flex-col text-center py-12 animate-pulse animate__animated animate__heartBeat"
        v-for="n in 20"
        :key="n"
      >
        <div
          class="flex justify-items-center justify-center right-1/2 bottom-1/2 "
        >
          <div
            style="border-top-color:transparent"
            class="border-solid animate-spin  rounded-full border-red-400 border-8 h-24 w-24"
          ></div>
        </div>
      </li>
    </ul>

    <p v-else class="max-w-xl text-center mt-5 mx-auto text-xl text-gray-500">
      No Pokemon found.
    </p>
  </transition>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted, ref, watch } from "vue";
import setupPokemonApi from "@/composables/getPokemon";

export default {
  name: "PokemonList",
  props: {
    list: {
      require: true,
    },
  },
  setup(props) {
    const store = useStore();
    const timer = ref(false);
    const { getPokemon } = setupPokemonApi();
    const pokemonList = computed(() => props.list);

    const clickedPokemon = async (num) => {
      store.dispatch("Pokemon/setPokemon", await getPokemon(num));
      store.dispatch("Pokemon/setIsModalOpen", true);
    };

    onMounted(() => {
      setTimer();
    });

    watch(pokemonList, () => {
      timer.value = false;
      setTimer();
    });

    const setTimer = () => {
      setTimeout(() => {
        timer.value = true;
      }, 1800);
    };

    return {
      timer,
      pokemonList,
      clickedPokemon,
    };
  },
};
</script>

<style scoped>
.img-placeholder {
  height: 144px;
  width: 144px;
}
.fade-eneter-from {
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
</style>
