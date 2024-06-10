import axios from "axios";

export const apiInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URI}/api/`,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
