import axios from "axios";

export const Api = axios.create({
  baseURL: "https://capstone-m3-server-group5.herokuapp.com",
});
