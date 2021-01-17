<template>
  <the-header></the-header>
  <!-- <login></login> -->
  <!-- <div class="flex flex-col flex-1 h-screen overflow-y-hidden">
    <div class="flex overflow-y-hidden flex-1"> -->
      <!-- <the-sidebar></the-sidebar> -->
      <!-- <div class="overflow-x-hidden w-2/3">
        <router-view />
      </div>
    </div> -->
    <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
    <router-view />
  <!-- </div> -->
</template>

<script>
import { useStore } from "vuex";
import TheHeader from "./components/layout/TheHeader.vue";
// import Login from "./views/Login.vue";
// import TheSidebar from "./components/layout/TheSidebar.vue";
export default {
  components: {
    TheHeader,
    // TheSidebar,
    // Login
  },
  setup() {
    const store = useStore();

    store.dispatch("tryLogin", store.getters);

    return { store };
  },
};
</script>
