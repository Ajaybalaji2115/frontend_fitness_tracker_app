import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080", // your backend URL
});

// Automatically attach JWT if present
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
