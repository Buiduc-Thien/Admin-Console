import { createRouter, createWebHashHistory } from "vue-router";

import FormRegisterUser from "../components/form-register-user.vue";
import ListProduct from "../components/list-product.vue";
import FormLoginUser from "../components/form-login.vue";
import DashboardAdmin from "../components/admin/dashboard-admin.vue";
import requireAuth from "../middleware/requireAuth";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/admin",
      component: DashboardAdmin,
      beforeEnter: requireAuth, // sử dụng hàm requireAuth làm middleware
    },
    {
      path: "/list-product",
      component: ListProduct,
    },
    {
      path: "/register",
      component: FormRegisterUser,
    },
    {
      path: "/login",
      component: FormLoginUser,
    },
  ],
});
export default router;
