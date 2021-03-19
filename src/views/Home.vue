<template>
  <div
    class="pb-10 sm:pb-32 lg:pt-8 lg:pb-14 lg:overflow-hidden bg-gradient-to-r from-red-500 to-pink-600 flex items-center h-calc"
  >
    <div class="mx-auto max-w-7xl lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8">
        <div
          class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center"
        >
          <div class="lg:py-24">
            <a
              href="#"
              class="inline-flex items-center text-gray-600 bg-gray-100 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-red-700"
            >
              <span
                class="px-3 py-0.5 text-white bg-red-500 text-xs font-semibold leading-5 uppercase tracking-wide rounded-full"
                >the pokedex</span
              >
              <span class="ml-4 text-sm">Visit the Kanto page</span>
              <svg
                class="ml-2 w-5 h-5 text-gray-500"
                x-description="Heroicon name: solid/chevron-right"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <h1
              class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"
            >
              <span class="block text-white">Welcome to the Pokedex</span>
              <!-- <span class="bg-clip-text text-gray-300 block"
                >ship web apps</span
              > -->
            </h1>
            <p
              class="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
            >
              Click on each region to show the new pokemon of that generation,
              or search for a pokemon.
            </p>
            <div class="mt-10 sm:mt-12">
              <form action="#" class="sm:max-w-xl sm:mx-auto lg:mx-0">
                <div class="sm:flex">
                  <div class="min-w-0 flex-1">
                    <label for="email" class="sr-only">Email address</label>
                    <input
                      type="text"
                      placeholder="Search for a Pokemon"
                      class="block w-full px-4 py-3 border-b text-base text-gray-900 placeholder-gray-500 focus:outline-none border-red-500"
                    />
                  </div>
                  <div class="mt-3 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      class="block w-full py-3 px-4 rounded-md shadow bg-red-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 focus:ring-offset-red-900"
                    >
                      Find Pokemon
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative flex">
          <div
            class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:ml-auto lg:mr-0 self-center"
          >
            <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
            <img
              class="lg:inset-y-0 lg:left-0 w-auto h-44 md:h-48 lg:h-96 self-center hidden lg:flex"
              src="https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536848_960_720.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.h-calc {
  height: calc(100vh - 64px);
}
</style>
