<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script>
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore();
    
    store.dispatch("tryLogin", store.getters);

    return { store };
  },
};
</script>
