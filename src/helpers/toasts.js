import { useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";


export const toastSuccess = (message) => {
  const toast = useToast();
  toast.success(message, {
    position: "top-right",
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: {
      iconClass: 'material-icons',  // Optional
      iconChildren: 'code', // Optional
      iconTag: 'span'               // Optional
    },
    rtl: false,
  });
};
