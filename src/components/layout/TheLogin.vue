<template>
  <len-dialog :show="!!form.error" title="An error occurred" @close="handleError">
    <p>{{ form.error }}</p>
  </len-dialog>
  <len-dialog :show="form.isLoading" title="Authenticating..." fixed>
    <len-spinner></len-spinner>
  </len-dialog>
  <len-card>
    <form @submit.prevent="submitForm">
      <h1 class="text-center">{{ submitButtonCaption }}</h1>
      <div v-if="form.mode !== 'login'" class="flex-1 mx-4">
        <label for="name">Name</label>
        <input
          class="w-64 pl-4 h-8 bg-gray-200 rounded-full focus:outline-none focus:ring text-sm"
          type="name"
          id="name"
          v-model.trim="form.name"
        />
      </div>
      <div class="flex-1 mx-4">
        <label for="email">E-Mail</label>
        <input
          class="w-64 pl-4 h-8 bg-gray-200 rounded-full focus:outline-none focus:ring text-sm"
          type="email"
          id="email"
          v-model.trim="form.email"
        />
      </div>
      <div class="flex-1 mx-4">
        <label for="password">Password</label>
        <input
          class="w-64 pl-4 h-8 bg-gray-200 rounded-full focus:outline-none focus:ring text-sm"
          type="password"
          id="password"
          v-model.trim="form.password"
        />
      </div>
      <div v-if="form.mode !== 'login'" class="flex-1 mx-4">
        <label for="password_confirmation">confirmation</label>
        <input
          class="w-64 pl-4 h-8 bg-gray-200 rounded-full focus:outline-none focus:ring text-sm"
          type="password"
          id="password_confirmation"
          v-model.trim="form.passwordConfirm"
        />
      </div>
      <p v-if="!form.formIsValid">Please enter a valid email and password</p>
      <len-button>{{ submitButtonCaption }}</len-button>
      <len-button type="button" @click="switchAuthMode">{{
        switchModeButtonCaption
      }}</len-button>
    </form>
  </len-card>
</template>

<script>
import { reactive, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const form = reactive({
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      mode: "login",
      isLoading: false,
      formIsValid: true,
      error: null,
    });

    async function submitForm() {
      form.formIsValid = true;

      if (
        form.email === "" ||
        !form.email.includes("@") ||
        form.password.length < 6
      ) {
        form.formIsValid = false;
        return;
      }

      const actionPayload = {
        email: form.email,
        password: form.password,
      };

      if (form.mode === "signup") {
        if (form.name === "" || form.password !== form.passwordConfirm) {
          form.formIsValid = false;
          return;
        }
        actionPayload.name = form.name;
        actionPayload.password_confirmation = form.passwordConfirm;
      }

      form.isLoading = true;

      try {
        if (form.mode === "login") {
          await store.dispatch("login", actionPayload);
        } else {
          await store.dispatch("signup", actionPayload);
          router.replace("/");
        }
        const redirectUrl = "/";
        router.replace(redirectUrl);
      } catch (err) {
        form.error = err.message || "Failed to autheticate, try later.";
      }
      form.isLoading = false;
    }

    function switchAuthMode() {
      if (form.mode === "login") {
        form.mode = "signup";
      } else {
        form.mode = "login";
      }
      form.formIsValid = true;
    }

    function handleError() {
      form.error = null;
    }

    function logout() {
      console.log("logout");
    }

    const submitButtonCaption = computed(() => {
      if (form.mode === "login") {
        return "เข้าสู่ระบบ";
      } else {
        return "ลงทะเบียน";
      }
    });

    const switchModeButtonCaption = computed(() => {
      if (form.mode !== "login") {
        return "เข้าสู่ระบบ";
      } else {
        return "ลงทะเบียน";
      }
    });

    return {
      form,
      submitForm,
      logout,
      submitButtonCaption,
      switchModeButtonCaption,
      switchAuthMode,
      handleError
    };
  },
};
</script>
