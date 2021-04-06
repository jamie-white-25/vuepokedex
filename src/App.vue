<template>
  <Navbar />
  <router-view v-slot="{ Component }">
    <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
      :duration="300"
      appear
      mode="out-in"
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
.router-link-exact-active {
  border-bottom: 2px solid white;
}
</style>
