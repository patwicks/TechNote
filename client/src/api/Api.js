import axios from "axios";

const API = axios.create({
  // baseURL: "https://technote-dev.herokuapp.com/api",
  baseURL: "http://localhost:4000/api",
  headers: {
    Accept: "application/json",
    "Content-type": "application/json; charset=UTF-8",
  },
});

export default API;
