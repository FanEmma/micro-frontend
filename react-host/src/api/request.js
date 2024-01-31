import axios from "axios";
import { publish } from "../utility";

const service = axios.create({
  baseURL: process.env.APP_BASE_URI,
  timeout: 5000,
});

const eventName = "fetchEvent";

service.interceptors.request.use(
  (config) => {
    publish(eventName, true);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error && error.response) {
      switch (error.response.status) {
        case 403:
          error.message = "拒絕請求";
        case 502:
          error.message = "服務端錯誤";
        default:
          error.message = `錯誤${error.response.status}`;
      }
    } else {
      error.message = "連線超時，請刷新頁面";
    }
    return Promise.resolve(error.response);
  }
);

const apiRequest = async (url, options = {}) => {
  const { method = "get", params = {} } = options;
  try {
    if (method.toLowerCase() === "get") {
      const response = await service.get(url, { params });
      publish(eventName, false);
      return response.data;
    } else {
      const response = await service.post(url, params);
      publish(eventName, false);
      return response.data;
    }
  } catch (error) {
    publish(eventName, false);
    throw error;
  }
};

export default apiRequest;
