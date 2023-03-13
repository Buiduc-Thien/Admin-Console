import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
    // You can set your default options here
};

import router from "./routes/web";
import store from "./store/store";
createApp(App).use(router).use(store).use(Toast, options).mount("#app");
