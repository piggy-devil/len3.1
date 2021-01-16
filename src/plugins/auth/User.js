import Api from '../axios'

export default {
  register(form) {
    return Api().post("/auths", form);
  },

  login(form) {
    return Api().post("/login", form);
  },

  logout(id) {
    return Api().delete("/auths/" + id);
  },

  user() {
    return Api().get("/users");
  },

  // store() {
  //   return Api().post("/auths");
  // }
};
