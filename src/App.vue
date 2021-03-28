<template>
  <Navbar />
  <router-view v-slot="{ Component }">
    <transition
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      enter-active-class="ease-out duration-500"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
      leave-active-class="ease-in duration-300"
    >
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import Navbar from "@/components/layouts/Navbar.vue";

export default {
  components: { Navbar },
};
</script>

<style>
* {
  outline: none !important;
}
</style>
