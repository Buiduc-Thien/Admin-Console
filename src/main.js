import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { createRouter, createWebHashHistory } from "vue-router";

import FormRegisterUser from "./components/form-register-user.vue";
import ListProduct from "./components/list-product.vue";

const app = createApp(App);

app.provide('myGlobalVariable', 'Hello, world!');


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/list-product",
      component: ListProduct,
    },
    {
      path: "/register",
      component: FormRegisterUser,
    },
  ],
});

createApp(App).use(router).mount("#app");
