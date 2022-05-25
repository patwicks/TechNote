import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/api",
  headers: {
    Accept: "application/json",
    "Content-type": "application/json; charset=UTF-8",
  },
});

export default API;
