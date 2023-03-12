import { createRouter, createWebHashHistory } from "vue-router";

import FormRegisterUser from "../components/form-register-user.vue";
import ListProduct from "../components/list-product.vue";

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
export default router;
