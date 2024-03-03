import axios from "axios";
import { storageTokenKey } from "@/stores/auth";

const BASE_URL = "https://api.aliverse.ru";

const $api = axios.create({
  baseURL: BASE_URL,
});

$api.interceptors.request.use((config) => {
  const token = localStorage.getItem(storageTokenKey);
  config.headers.Authorization = `Bearer ${token ? JSON.parse(token) : null}`;
  return config;
});

export default $api;
