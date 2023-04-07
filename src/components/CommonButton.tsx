import React from "react"
import styled from "styled-components"

type CommonButtonProps = {
  text: string
  width?: number
}

const ButtonLayout = styled.div<Omit<CommonButtonProps, "text">>`
  border: 2px solid #000;
  text-align: center;
  padding: 4px 8px;
  width: ${props => props.width}px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`

function CommonButton({ text, width }: CommonButtonProps): JSX.Element {
  return <ButtonLayout width={width}>{text}</ButtonLayout>
}

export default CommonButton
