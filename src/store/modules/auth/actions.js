let timer;
import User from "../../../plugins/auth/User";

export default {
  async login(context, payload) {
    return context.dispatch("auth", {
      ...payload,
      mode: "login",
    });
  },
  async signup(context, payload) {
    return context.dispatch("auth", {
      ...payload,
      mode: "signup",
    });
  },
  async auth(context, payload) {
    const mode = payload.mode;
    if (mode === "login") {
      const { data } = await User.login({
        email: payload.email,
        password: payload.password,
      });
      const responseData = data;

      if (!responseData.ok) {
        const error = new Error(
          responseData.message ||
            "Failed to authenticate. Check your login data."
        );
        throw error;
      }

      const expiresIn = +responseData.expiresIn * 1000;
      const expirationDate = new Date().getTime() + expiresIn;
      // const expiresIn = 5000;
      // const expirationDate = expiresIn;

      localStorage.setItem("token", responseData.idToken);
      localStorage.setItem("userId", responseData.localId);
      localStorage.setItem("tokenExpiration", expirationDate);

      timer = setTimeout(function() {
        context.dispatch("autoLogout");
      }, expiresIn);

      context.commit("setUser", {
        token: responseData.idToken,
        userId: responseData.localId,
      });
    } else if (mode === "signup") {
      const { data } = await User.register({
        name: payload.name,
        email: payload.email,
        password: payload.password,
        password_confirmation: payload.password_confirmation,
      });
      console.log(data);
    }
  },
  tryLogin(context, getters) {

    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const tokenExpiration = localStorage.getItem("tokenExpiration");
    // console.log(localStorage.getItem("token"));

    const expiresIn = +tokenExpiration - new Date().getTime();

    if (expiresIn < 0) {
      context.dispatch("logout", getters);
      context.commit("setAutoLogout");
      return;
    }

    timer = setTimeout(function() {
      context.dispatch("autoLogout");
    }, expiresIn);

    if (token && userId) {
      context.commit("setUser", {
        token: token,
        userId: userId,
      });
    }
  },
  async logout(context) {

    const userId = localStorage.getItem("userId");
    if (userId !== null){
      User.logout(userId);
    }

    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("tokenExpiration");

    clearTimeout(timer);

    context.commit("setUser", {
      token: null,
      userId: null,
    });
  },
  autoLogout(context) {
    context.dispatch("logout");
    context.commit("setAutoLogout");
  },
};
