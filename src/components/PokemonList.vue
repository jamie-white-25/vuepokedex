<template>
  <ul
    class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 justify-self-center mt-16"
    :class="(pokedex.length > 0, timer) ? 'flex' : 'hidden'"
  >
    <li
      class="col-span-1 flex flex-col text-center bg-white rounded-lg hover:bg-gray-200 py-12"
      v-for="pokemon in pokedex"
      :key="pokemon.number"
      :data-id="pokemon.number"
      @click="clicked(pokemon.number)"
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
    class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 justify-self-center mt-16"
    :class="(pokedex.length < 0, timer === false) ? 'flex' : 'hidden'"
  >
    <li
      class="col-span-1 flex flex-col text-center py-12 animate-pulse"
      v-for="n in 20"
      :key="n"
    >
      <div
        class="rounded-full bg-gradient-to-r from-red-500 to-pink-600  img-placeholder lg:h-40 mx-auto"
      ></div>
      <div class="">
        <h3 class="mt-2 text-gray-900 text-sm font-medium"></h3>
        <div
          class="h-4 mt-6 mx-auto bg-gradient-to-r from-red-500 to-pink-600  rounded w-1/4"
        ></div>
        <div
          class="h-4 mt-3 mx-auto bg-gradient-to-r from-red-500 to-pink-600 rounded w-1/5"
        ></div>
        <dl class="mt-1 flex-grow flex flex-col justify-between">
          <dd class="text-gray-500 text-sm"></dd>
        </dl>
      </div>
    </li>
  </ul>
</template>

<script>
import { computed, onMounted, ref, watch } from "vue";

export default {
  name: "PokemonList",
  emits: ["open"],
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  setup(props, ctx) {
    const timer = ref(false);
    const pokedex = computed(() => props.list);

    const clicked = function(number) {
      ctx.emit("open", number);
    };

    onMounted(() => {
      setTimer();
    });

    watch(pokedex, () => {
      timer.value = false;
      setTimer();
    });

    const setTimer = () => {
      setTimeout(() => {
        timer.value = true;
      }, 3000);
    };

    return {
      pokedex,
      clicked,
      timer,
    };
  },
};
</script>

<style scoped>
.img-placeholder {
  height: 144px;
  width: 144px;
}
</style>
