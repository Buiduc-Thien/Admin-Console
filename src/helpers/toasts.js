import { useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";

export const toastSuccess = (message) => {
  const toast = useToast();
  toast.success(message, {
    position: "top-right",
    timeout: 7000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: {
      iconClass: "material-icons", // Optional
      iconChildren: "code", // Optional
      iconTag: "span", // Optional
    },
    rtl: false,
  });
};
export const toastError = (message) => {
  const toast = useToast();
  toast.error(message, {
    position: "top-right",
    timeout: 7000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: {
      iconClass: "material-icons", // Optional
      iconChildren: "code_off", // Optional
      iconTag: "span", // Optional
    },
    rtl: false,
  });
};
