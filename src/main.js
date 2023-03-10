import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { createRouter, createWebHashHistory } from "vue-router";

import FormRegister from "./components/FormRegister.vue";
import HomePage from "./components/HomePage.vue";

const app = createApp(App);

app.provide('myGlobalVariable', 'Hello, world!');


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/register",
      component: FormRegister,
    },
  ],
});

createApp(App).use(router).mount("#app");
