<template>
  <section>
    <teleport to="#modals">
      <transition
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        enter-active-class="ease-out duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
        leave-active-class="ease-in duration-200"
      >
        <div class="fixed z-10 inset-0 overflow-y-auto" v-if="toggle">
          <div
            class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
          >
            <div class="fixed inset-0 transition-opacity" aria-hidden="true">
              <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <!-- This element is to trick the browser into centering the modal contents. -->
            <span
              class="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
              >&#8203;
            </span>

            <div
              class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
              v-if="toggle"
            >
              <div class="flex pb-8">
                <button
                  type="button"
                  class="inline-flex ml-auto items-center p-2 border border-transparent rounded-full shadow-sm text-gray-400 bg-gray-200 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                  @click="closeModal"
                >
                  <!-- Heroicon name: outline/plus -->
                  <svg
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
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
              <slot>
                <div>
                  <div
                    class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100"
                  >
                    <!-- Heroicon name: outline/check -->
                    <svg
                      class="h-6 w-6 text-green-600"
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div class="mt-3 text-center sm:mt-5">
                    <h3
                      class="text-lg leading-6 font-medium text-gray-900"
                      id="modal-headline"
                    >
                      {{}}
                    </h3>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Eius aliquam laudantium explicabo pariatur iste
                        dolorem animi vitae error totam. At sapiente aliquam
                        accusamus facere veritatis.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense"
                >
                  <button
                    type="button"
                    class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                  >
                    Deactivate
                  </button>
                  <button
                    type="button"
                    class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </slot>
            </div>
          </div>
        </div>
      </transition>
    </teleport>
  </section>
</template>

<script>
import { computed } from "vue";
export default {
  emits: ["close"],
  name: "Modal",
  props: {
    isOpen: {
      type: Boolean,
    },
  },
  setup(props, ctx) {
    const toggle = computed(() => props.isOpen);
    const closeModal = () => {
      ctx.emit("close");
    };

    return { toggle, closeModal };
  },
};
</script>

<style></style>
