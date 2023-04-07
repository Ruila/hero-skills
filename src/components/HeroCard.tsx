import React from "react"
import styled from "styled-components"
import { HeroType } from "../types/HeroType"
import { useNavigate, useParams } from "react-router-dom"

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

function HeroCard({ id, name, image }: HeroType): JSX.Element {
  const navigate = useNavigate()
  const { heroId } = useParams()
  return (
    <Card onClick={() => navigate(`/heroes/${id}`)} active={heroId === id}>
      <ImageBox src={image} />
      <div>{name}</div>
    </Card>
  )
}

export default HeroCard
