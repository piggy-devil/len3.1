<template>
  <nav class="w-full px-6 bg-white shadow-lg relative z-20">
    <div
      class="container mx-auto max-w-4xl h-16 flex justify-between text-xs md:text-sm"
    >
      <div class="h-full flex items-center">
        <a href="#" class="text-gray-600 no-underline mr-4">Home</a>
        <a href="#" class="text-gray-600 no-underline mr-4">About</a>
      </div>

      <div v-if="false" class="pt-4">
        <a
          href="#"
          class="block w-16 h-16 md:w-24 md:h-24 rounded-full border-2 overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1522322659370-3c98da30c99c?w=300"
            class="w-full h-full object-cover"
          />
        </a>
      </div>

      <div class="h-full flex items-center">
        <a href="/products" class="text-gray-600 no-underline ml-4">Products</a>
        <a href="#" class="text-gray-600 no-underline ml-4">Contact</a>
        <a href="" v-if="isAuthenticated" class="text-gray-600 no-underline ml-4" @click="logout">
          <span class="px-3">
            <svg
              id="off"
              width="32"
              height="32"
              class="fill-current text-gray-500"
            >
              <path
                d="M20 4.581v4.249c1.131 0.494 2.172 1.2 3.071 2.099 1.889 1.889 2.929 4.4 2.929 7.071s-1.040 5.182-2.929 7.071c-1.889 1.889-4.4 2.929-7.071 2.929s-5.182-1.040-7.071-2.929c-1.889-1.889-2.929-4.4-2.929-7.071s1.040-5.182 2.929-7.071c0.899-0.899 1.94-1.606 3.071-2.099v-4.249c-5.783 1.721-10 7.077-10 13.419 0 7.732 6.268 14 14 14s14-6.268 14-14c0-6.342-4.217-11.698-10-13.419zM14 0h4v16h-4z"
              ></path>
            </svg>
          </span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
    setup() {
        const store = useStore();

        const isAuthenticated = computed( () => {
            return store.getters.isAuthenticated;
        });

        function logout() {
            store.dispatch("logout");
        }

        return { logout, isAuthenticated }
    }
};
</script>

<style></style>
