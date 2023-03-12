import axios from "axios";

export const API_URL = "http://127.0.0.1:8080/api/";

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
