import React, { useState } from "react"
import styled from "styled-components"
import SkillButton from "./SkillButton"

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
`

const SkillValue = styled.div`
  font-size: 20px;
  margin: 0 4px;
  width: 60px;
  text-align: center;
`

type SkillAdapterProps = {
  label: string
  value: number
}

function SkillAdapter({ label, value }: SkillAdapterProps): JSX.Element {
  const [skillVal, setSkillVal] = useState<number>(value)
  return (
    <SkillBox>
      <SkillLabel>{label}</SkillLabel>
      <SkillButton text="+" />
      <SkillValue>{value}</SkillValue>
      <SkillButton text="-" />
    </SkillBox>
  )
}

export default SkillAdapter
