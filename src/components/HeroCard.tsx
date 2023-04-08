import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { HeroCardProps } from "../types/HeroCardProps"

const Card = styled.div<{ active: boolean }>`
  padding: 12px;
  display: flex;
  flex-direction: column;
  margin: 8px;
  align-items: center;
  box-shadow: rgb(0 0 0 / 20%) 0 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px,
    rgb(0 0 0 / 12%) 0px 1px 3px 0px;
  cursor: pointer;
  background-color: ${props => (props.active ? "#39d0ff" : "#fff")};
`

const ImageBox = styled.img`
  width: 80px;
  height: 80px;
`

export const HeroCard = React.memo(
  ({ id, name, image, active }: HeroCardProps): JSX.Element => {
    return (
      <Link to={`/heroes/${id}`}>
        <Card active={active}>
          <ImageBox src={image} />
          <div>{name}</div>
        </Card>
      </Link>
    )
  }
)

HeroCard.displayName = "HeroCard"
