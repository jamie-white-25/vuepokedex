<template>
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <section class="bg-white" v-if="error">
      <div
        class="max-w-7xl mx-auto pt-16 px-4 sm:pt-52 sm:pb-0 sm:px-6 lg:px-8"
      >
        <div class="text-center">
          <p
            class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
          >
            404
          </p>

          <p
            class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
          >
            <span class="bold capitalize text-red-500">{{
              error.message
            }}</span>
          </p>
        </div>
      </div>
    </section>

    <section class="bg-white" v-else>
      <div
        class="max-w-7xl mx-auto pt-16 px-4 sm:pt-52 sm:pb-0 sm:px-6 lg:px-8"
      >
        <div class="text-center">
          <p
            class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
          >
            Welcome to the
            <span class="bold capitalize text-red-500">{{ region }}</span>
            pokedex.
          </p>
          <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Click on a <span class="text-red-500">Pokemon</span> to see more
            details, or search for a pokemon in this region below.
          </p>

          <div class="p-10 max-w-lg mx-auto mt-5">
            <div class="min-w-0 flex items-center">
              <input
                type="text"
                placeholder="Search for a Pokemon"
                class="block w-full px-4 py-3 border-b-2 text-base focus:outline-none border-red-400 text-center"
                v-model="search"
              />
            </div>
          </div>
        </div>
      </div>
      <PokemonList :list="filterPokemon" />

      <Modal :isOpen="isModalOpen" @close="closeModal">
        <PokemonModal />
      </Modal>
    </section>
  </main>
</template>

<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { computed, onMounted, watch, ref } from "vue";
import Modal from "@/components/Modal.vue";
import PokemonModal from "@/components/PokemonModal.vue";
import PokemonList from "@/components/PokemonList.vue";
import setupPokemonApi from "@/composables/getPokemon";

export default {
  components: { Modal, PokemonList, PokemonModal },
  setup() {
    const store = useStore();
    const route = useRoute();
    const search = ref("");
    const { error, getRegion } = setupPokemonApi();
    const region = computed(() => route.params.name ?? "");
    const pokedex = computed(() => store.state.Pokedex.pokedex);
    const isModalOpen = computed(() => store.state.Pokemon.isModalOpen);

    onMounted(() => {
      updatePokdex();
    });

    watch(region, () => {
      updatePokdex();
      search.value = "";
      error.value = null;
    });

    const filterPokemon = computed(() => {
      return pokedex.value.filter((pokemon) => {
        return pokemon.name.includes(search.value);
      });
    });

    const updatePokdex = async () => {
      store.dispatch(
        "Pokedex/setPokedex",
        await getRegion(region.value.toLocaleLowerCase())
      );
      store.dispatch("Pokedex/setRegion", region.value.toLocaleLowerCase());
    };

    const closeModal = () => {
      store.dispatch("Pokemon/setPokemon", null);
      store.dispatch("Pokemon/setIsModalOpen", false);
    };

    return {
      error,
      search,
      region,
      pokedex,
      closeModal,
      isModalOpen,
      filterPokemon,
    };
  },
};
</script>

<style></style>
