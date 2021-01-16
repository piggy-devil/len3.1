export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.didAutoLogout = false;
  },
  setAutoLogout(state) {
    state.didAutoLogout = true;
  },
  // LOGIN(state, status) {
  //   state.auth.login = status;
  //   state.auth.user = [];
  // },

  // AUTH_USER(state, user) {
  //   state.auth.user = user;
  // },
};