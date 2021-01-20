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
    <reclips :recipes="state.reclips"></reclips>
  <!-- </div> -->
</template>

<script>
import { reactive } from 'vue';
import { useStore } from "vuex";
import TheHeader from "./components/layout/TheHeader.vue";
import Reclips from "./views/products/Reclips.vue";
// import Login from "./views/Login.vue";
// import TheSidebar from "./components/layout/TheSidebar.vue";
export default {
  components: {
    TheHeader,
    Reclips,
    // TheSidebar,
    // Login
  },
  setup() {
    const store = useStore();
    const state = reactive({
      reclips: {
        id: '1',
        image: "https://static.bangkokpost.com/media/content/20200813/c1_1967767.jpg",
        title: "test",
      time: "17.00",
      difficulty: "easy",
      servings: "4",
      author: "muups",
      rating: 4.5
      }
    })

    console.log(state);

    store.dispatch("tryLogin", store.getters);

    return { store, state };
  },
};
</script>
