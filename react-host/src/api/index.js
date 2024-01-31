import baseAxios from "./request";
import axios from "axios";

export const user = {
  login(params) {
    return baseAxios("auth/login", { method: "post", params });
  },
  getProfile(token) {
    return axios.get(`${process.env.APP_BASE_URI}auth/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
