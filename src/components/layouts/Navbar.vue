<template>
  <nav class="bg-gradient-to-r from-red-500 to-pink-600  shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <h2
              class="text-2xl font-bold leading-7 text-white sm:text-2xl sm:truncate font-mono"
            >
              Pokedex
            </h2>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
            <router-link
              to="about"
              class="text-gray-100 inline-flex items-center px-1 pt-1 text-md font-bold hover:border-gray-100 hover:border-b-2"
            >
              Kanto
            </router-link>
          </div>
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-100 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-100"
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click="state.menu = !state.menu"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Icon when menu is closed. -->
            <!--
            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!-- Icon when menu is open. -->
            <!--
            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
            <svg
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div
      class="sm:hidden"
      :class="state.menu ? 'block' : 'hidden'"
      id="mobile-menu"
    >
      <div class="pt-2 pb-3 space-y-1">
        <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
      </div>
    </div>
  </nav>
</template>

<script>
import { reactive } from "vue";
// @ is an alias to /src

export default {
  name: "Navbar",
  components: {},
  setup() {
    const state = reactive({
      menu: false,
    });

    return {
      state,
    };
  },
};
</script>

<style></style>
