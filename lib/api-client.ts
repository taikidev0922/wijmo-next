import axiosClient from "@aspida/axios";
import api from "@/api/$api";
import axios from "axios";
const baseURL = process.env.BASE_URL;

const headers = {
  "Content-Type": "application/json",
  referer: process.env.BASE_URL as string,
};
const axiosInstance = axios.create({
  baseURL: baseURL || "http://localhost:3001",
  headers,
  withCredentials: true,
  timeout: 10000,
});
axiosInstance.interceptors.request.use(async (request: any) => {
  request.params = { ...request.params, limit: 1000 };
  return request;
});
// axiosの初期設定
export const ApiClient = api(axiosClient(axiosInstance)).api;
