import { axiosInstance } from "./axiosInstance"
import { AxiosResponse } from "axios"
import { HeroType } from "../types/HeroType"

export const getHeroes = (): Promise<AxiosResponse<Array<HeroType>>> =>
  axiosInstance.get("/heroes")
