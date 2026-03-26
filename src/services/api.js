import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce-backend-production-222b.up.railway.app/api"
});

export default API;
