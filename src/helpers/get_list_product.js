import { API_URL, apiClient } from "../api";

export async function getProducts() {
  return apiClient
    .get(API_URL + "admin/products")
    .then((response) => {
      if (response && response.data) {
        return response.data;
      } else {
        throw new Error("Invalid response");
      }
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
}
