import axios from "axios";

let BaseApi = axios.create({
  baseURL: "https://lpnb.dev/api"
});

// const headers = new HttpHeaders({
//   'Authorization': "Bearer " + token,
//   'Content-Type': 'application/json'
// });
// window.axios = require('axios');
// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// let token = document.head.querySelector('meta[name="csrf-token"]');
// window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;

let Api = function() {
  let token = localStorage.getItem("token");

  if (token) {
    BaseApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    // BaseApi.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    // BaseApi.defaults.headers.common["X-CSRF-TOKEN"] = token;
    // BaseApi.defaults.headers.common["Content-Type"] = 'application/json';
  }

  return BaseApi;
};

export default Api;
