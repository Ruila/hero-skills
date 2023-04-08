import React from "react"
import styled from "styled-components"
import SkillButton from "./SkillButton"
import { SkillAdapterProps } from "../types/SkillAdapterProps"

const SkillBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const SkillLabel = styled.div`
  font-size: 20px;
  margin: 0 8px;
  width: 60px;
  text-align: center;
  text-transform: uppercase;
`

const SkillValue = styled.div`
  font-size: 20px;
  margin: 0 4px;
  width: 60px;
  text-align: center;
`

function SkillAdapter({
  label,
  value,
  add,
  minus,
  restSkill,
}: SkillAdapterProps): JSX.Element {
  return (
    <SkillBox>
      <SkillLabel>{label}</SkillLabel>
      <SkillButton
        text="+"
        action={() => add(label)}
        disabled={restSkill === 0}
      />
      <SkillValue>{value}</SkillValue>
      <SkillButton
        text="-"
        action={() => minus(label)}
        disabled={value === 0}
      />
    </SkillBox>
  )
}

export default SkillAdapter
