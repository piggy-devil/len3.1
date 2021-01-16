<template>
  <div>
    <button @click="Logout">Logout</button>
    <button @click="Test">Test</button>
  </div>
  <div class="about">
    <table class="border-separate border border-green-800 ...">
      <thead>
        <tr>
          <th class="border border-green-600 ...">State</th>
          <th class="border border-green-600 ...">City</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-green-600 ...">Indiana</td>
          <td class="border border-green-600 ...">Indianapolis</td>
        </tr>
        <tr>
          <td class="border border-green-600 ...">Ohio</td>
          <td class="border border-green-600 ...">Columbus</td>
        </tr>
        <tr>
          <td class="border border-green-600 ...">Michigan</td>
          <td class="border border-green-600 ...">Detroit</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { useStore } from 'vuex';
// import { useRouter } from 'vue-router';
import User from '../plugins/auth/User'
// import axios from 'axios'
export default {
  setup() {
    const store = useStore();
    // const router = useRouter();

    function Logout() {
      // axios.delete('https://lpnb.dev/api/auths/'+ store.getters.userId)
      // .then((data) => {
      //   console.log(data);
      // });

      store.dispatch("logout");
    }

    function Test() {
      User.store();
      console.log('store');
    }
    return { Logout, store, Test };
  },
};
</script>
