import axios from "axios";

export const apiInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URI}/api/`,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});
