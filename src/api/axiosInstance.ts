import axios, { AxiosInstance } from "axios"

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://hahow-recruit.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
})
