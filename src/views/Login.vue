<template>
  <div class="min-h-screen w-full p-6 flex justify-center items-center">
    <div class="w-full max-w-xs">
      <div class="bg-white border p-8 shadow rounded w-full mb-6">
        <div class="text-lg text-center text-gray-600 mb-6">
          Login to your account
        </div>

        <form @submit.prevent="submitForm">
          <div class="w-full mx-auto">
            <div
              class="flex items-center bg-white rounded shadow-md mb-4 text-gray-500 focus-within:text-gray-700"
            >
              <span class="px-3">
                <svg
                  fill="currentColor"
                  class="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"
                  />
                </svg>
              </span>
              <input
                class="w-full h-12 focus:outline-none"
                type="email"
                name="email"
                id="email"
                v-model.trim="form.email"
                placeholder="Email"
              />
            </div>
          </div>

          <div class="w-full flex justify-end items-center">
            <a
              class="text-xs font-thin text-blue no-underline hover:underline"
              href="#"
            >
              Forgotten password?
            </a>
          </div>
          <div
            class="flex items-center bg-white rounded shadow-md mb-4 text-gray-500 focus-within:text-gray-700"
          >
            <span class="px-3">
              <svg
                fill="currentColor"
                class="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M4 8V6a6 6 0 1 1 12 0h-3v2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                />
              </svg>
            </span>
            <input
              class="w-full h-12 focus:outline-none"
              :type="form.showPassword ? 'text' : 'password'"
              name="password"
              id="password"
              v-model.trim="form.password"
              placeholder="Password"
            />
            <span v-if="form.showPassword" @click="toggle" class="px-3">
              <svg
                id="eye"
                fill="currentColor"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 4.5c-5.234 0-9.771 3.048-12 7.5 2.229 4.452 6.766 7.5 12 7.5s9.771-3.048 12-7.5c-2.229-4.452-6.766-7.5-12-7.5zM17.917 8.477c1.41 0.899 2.605 2.104 3.502 3.523-0.897 1.418-2.092 2.623-3.502 3.523-1.772 1.13-3.818 1.727-5.917 1.727s-4.145-0.597-5.917-1.727c-1.41-0.899-2.605-2.104-3.502-3.523 0.897-1.419 2.092-2.623 3.502-3.523 0.092-0.059 0.185-0.115 0.278-0.171-0.233 0.64-0.361 1.332-0.361 2.053 0 3.314 2.686 6 6 6s6-2.686 6-6c0-0.721-0.128-1.413-0.361-2.053 0.093 0.056 0.186 0.113 0.278 0.171v0zM12 9.75c0 1.243-1.007 2.25-2.25 2.25s-2.25-1.007-2.25-2.25 1.007-2.25 2.25-2.25 2.25 1.007 2.25 2.25z"
                ></path>
              </svg>
            </span>
            <span v-else @click="toggle" class="px-3">
              <svg
                id="eyeOff"
                fill="currentColor"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M22.171 0.329c-0.439-0.439-1.152-0.439-1.591 0l-4.738 4.738c-1.217-0.369-2.507-0.568-3.841-0.568-5.234 0-9.771 3.048-12 7.5 0.964 1.925 2.359 3.587 4.055 4.854l-3.726 3.726c-0.439 0.439-0.439 1.152 0 1.591 0.22 0.22 0.508 0.33 0.795 0.33s0.576-0.11 0.796-0.329l20.25-20.25c0.439-0.439 0.439-1.152 0-1.591zM9.75 7.5c0.99 0 1.83 0.64 2.131 1.528l-2.853 2.853c-0.888-0.301-1.528-1.141-1.528-2.131 0-1.243 1.007-2.25 2.25-2.25zM2.581 12c0.897-1.419 2.092-2.623 3.502-3.523 0.092-0.059 0.185-0.115 0.278-0.171-0.233 0.64-0.361 1.332-0.361 2.053 0 1.286 0.405 2.478 1.095 3.455l-1.428 1.428c-1.229-0.863-2.278-1.966-3.086-3.242z"
                ></path>
                <path
                  d="M18 10.359c0-0.637-0.1-1.25-0.284-1.826l-7.542 7.542c0.576 0.184 1.189 0.283 1.826 0.283 3.314 0 6-2.686 6-6z"
                ></path>
                <path
                  d="M19.454 6.796l-1.626 1.626c0.030 0.018 0.059 0.037 0.089 0.056 1.41 0.899 2.605 2.104 3.502 3.523-0.897 1.418-2.092 2.623-3.502 3.523-1.772 1.13-3.818 1.727-5.917 1.727-0.906 0-1.802-0.112-2.671-0.329l-1.802 1.802c1.4 0.503 2.905 0.777 4.473 0.777 5.234 0 9.771-3.048 12-7.5-1.055-2.107-2.628-3.9-4.546-5.204z"
                ></path>
              </svg>
            </span>
          </div>

          <div class="pt-1 pb-5 text-sm text-gray-darker font-thin">
            <label
              ><input
                class="mr-1"
                type="checkbox"
                name="remember"
                id="remember"
              />
              Remember me</label
            >
          </div>
          <button
          type="submit"
            class="block w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-sm shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Sign in
          </button>
        </form>
        <div class="text-center text-gray-600 py-4">
          <p class="text-center text-sm text-gray-600 font-thin">
            ยังไม่มีบัญชีผู้ใช้งาน ?
            <a
              href="/register"
              class="text-blue-500 no-underline hover:underline"
              >สมัครใหม่</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const form = reactive({
      email: "",
      password: "",
      showPassword: false,
      mode: "login",
      isLoading: false,
      formIsValid: true,
      error: null,
    });

    function toggle() {
      form.showPassword = !form.showPassword;
    }

    async function submitForm() {
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

      form.isLoading = true;

      try {
        if (form.mode === "login") {
          await store.dispatch("login", actionPayload);
        }

        const redirectUrl = "/";
        router.replace(redirectUrl);
      } catch (err) {
        form.error = err.message || "Failed to autheticate, try later.";
      }
      // form.isLoading = false;
    }

    return { form, submitForm, toggle };
  },
};
</script>

<style></style>
