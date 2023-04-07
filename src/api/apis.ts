import { axiosInstance } from "./axiosInstance"
import { AxiosResponse } from "axios"
import { HeroType } from "../types/HeroType"
import { HeroSkillType } from "../types/HeroSkillType"

export const getHeroes = (): Promise<AxiosResponse<Array<HeroType>>> =>
  axiosInstance.get("/heroes")

export const getHeroSkill = (
  id: number
): Promise<AxiosResponse<HeroSkillType>> =>
  axiosInstance.get(`/heroes/${id}/profile`)
