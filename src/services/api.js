import axios from "axios";

const API = axios.create({
  baseURL: "ecommerce-backend-production-637a.up.railway.app/api"
});

export default API;
