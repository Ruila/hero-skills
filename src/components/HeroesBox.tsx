import React from "react"
import styled from "styled-components"
import { HeroCard } from "./HeroCard"
import { useParams } from "react-router-dom"
import { HeroesBoxProps } from "../types/HeroesBoxProps"

const CardsBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 16px;
  width: 45vw;
`

export const HeroesBox = ({ data }: HeroesBoxProps): JSX.Element => {
  const { heroId } = useParams()
  const renderCards = data.map(item => (
    <HeroCard
      key={item.image}
      id={item.id}
      name={item.name}
      image={item.image}
      active={heroId === item.id}
    />
  ))
  return <CardsBox>{renderCards}</CardsBox>
}
