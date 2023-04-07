import React from "react"
import styled from "styled-components"

type CommonButtonProps = {
  text: string
  width?: number
  action: () => void
  disabled?: boolean
}

const ButtonLayout = styled.div<Omit<CommonButtonProps, "text" | "action">>`
  border: ${props => (props.disabled ? "2px solid #e5e5e5" : "2px solid #000")};
  color: ${props => (props.disabled ? "#e5e5e5" : "#000")};
  text-align: center;
  padding: 4px 8px;
  width: ${props => props.width}px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`

function CommonButton({
  text,
  width,
  action,
  disabled,
}: CommonButtonProps): JSX.Element {
  return (
    <ButtonLayout
      width={width}
      onClick={!disabled ? action : undefined}
      disabled={disabled}
    >
      {text}
    </ButtonLayout>
  )
}

export default CommonButton
