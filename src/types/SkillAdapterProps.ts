import { HeroSkillType } from "./HeroSkillType"

export type SkillAdapterProps = {
  label: keyof HeroSkillType
  value: number
  restSkill: number
  add: (skillKey: keyof HeroSkillType) => void
  minus: (skillKey: keyof HeroSkillType) => void
}
