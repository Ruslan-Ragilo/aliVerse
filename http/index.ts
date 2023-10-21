import axios from "axios";

const BASE_URL = "https://api.aliverse.ru";

const $api = axios.create({
  baseURL: BASE_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem(storageTokenKey))}`;
  return config;
});

export default $api;
