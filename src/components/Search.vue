<template>
  <div class="min-w-0 flex-1">
    <input
      type="text"
      placeholder="Search for a Pokemon"
      class="block w-full px-4 py-3 border-b-2 text-base focus:outline-none border-red-400"
      :class="cssStyles"
    />
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "Search",
  props: {
    styles: {
      require: false,
    },
  },
  setup(props) {
    const cssStyles = computed(() => props.styles ?? "");

    return {
      cssStyles,
    };
  },
};
</script>

<style></style>
