import React from "react"
import styled from "styled-components"

const ButtonLayout = styled.div`
  border: 2px solid #000;
  width: 25px;
  height: 25px;
  text-align: center;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`

type SkillButtonProps = {
  text: string
}

function SkillButton({ text }: SkillButtonProps): JSX.Element {
  return <ButtonLayout>{text}</ButtonLayout>
}

export default SkillButton
