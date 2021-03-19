<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    hi poke fans from {{ region }}
    <h1 v-if="error">{{ error.status }}</h1>
    <PokemonList :list="pokedex" @open="openModal" />
  </div>
  <Modal :isOpen="toggleModal" @close="toggleModal = false">
    <PokemonModal :pokemonDetails="pokemon" />
  </Modal>
</template>

<script>
import Modal from "@/components/Modal.vue";
import PokemonModal from "@/components/PokemonModal.vue";
import PokemonList from "@/components/PokemonList.vue";
import setup from "@/composables/getPokemon";
import { computed, onMounted, watch, ref } from "vue";
import { useRoute } from "vue-router";

export default {
  components: { Modal, PokemonList, PokemonModal },
  setup() {
    const toggleModal = ref(false);
    const route = useRoute();
    const region = computed(() => route.params.name ?? "");
    const { pokedex, pokemon, error, getRegion, getPokemon } = setup();

    onMounted(() => {
      region.value !== "" ? getRegion(region.value.toLocaleLowerCase()) : "";
    });

    watch(region, () => {
      region.value !== "" ? getRegion(region.value.toLocaleLowerCase()) : "";
    });

    const openModal = (num) => {
      getPokemon(num);
      toggleModal.value = true;
    };

    return {
      region,
      pokedex,
      error,
      toggleModal,
      openModal,
      pokemon,
    };
  },
};
</script>

<style></style>
