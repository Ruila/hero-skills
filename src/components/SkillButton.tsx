import React from "react"
import styled from "styled-components"
import { SkillButtonProps } from "../types/SkillButtonProps"

const ButtonLayout = styled.div<Omit<SkillButtonProps, "text" | "action">>`
  border: ${props => (props.disabled ? "2px solid #e5e5e5" : "2px solid #000")};
  color: ${props => (props.disabled ? "#e5e5e5" : "#000")};
  width: 25px;
  height: 25px;
  text-align: center;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`

function SkillButton({
  text,
  action,
  disabled,
}: SkillButtonProps): JSX.Element {
  return (
    <ButtonLayout onClick={!disabled ? action : undefined} disabled={disabled}>
      {text}
    </ButtonLayout>
  )
}

export default SkillButton
