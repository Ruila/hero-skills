import React from "react"
import styled from "styled-components"
import { HeroType } from "../types/HeroType"
import HeroCard from "./HeroCard"

const CardsBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 16px;
`

type HeroesBoxProps = {
  data: Array<HeroType>
}

export const HeroesBox = React.memo(({ data }: HeroesBoxProps): JSX.Element => {
  const renderCards = data.map(item => (
    <HeroCard
      key={item.image}
      id={item.id}
      name={item.name}
      image={item.image}
    />
  ))
  return <CardsBox>{renderCards}</CardsBox>
})

HeroesBox.displayName = "HeroesBox"
