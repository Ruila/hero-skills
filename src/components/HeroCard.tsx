import React from "react"
import styled from "styled-components"
import { HeroType } from "../types/HeroType"
import { useNavigate } from "react-router-dom"

const Card = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgb(0 0 0 / 20%) 0 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px,
    rgb(0 0 0 / 12%) 0px 1px 3px 0px;
  cursor: pointer;
`

const ImageBox = styled.img`
  width: 80px;
  height: 80px;
`

function HeroCard({ id, name, image }: HeroType): JSX.Element {
  const navigate = useNavigate()
  return (
    <Card onClick={() => navigate(`/heroes/${id}`)}>
      <ImageBox src={image} />
      <div>{name}</div>
    </Card>
  )
}

export default HeroCard
