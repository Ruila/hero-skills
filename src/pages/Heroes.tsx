import React, { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { getHeroes } from "../api/apis"
import HeroCard from "../components/HeroCard"
import styled from "styled-components"
import { HeroType } from "../types/HeroType"

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const CardsBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 16px;
`

function Heroes(): JSX.Element {
  const [heroes, setHeroes] = useState<Array<HeroType>>([])
  const getData = async () => {
    const res = await getHeroes()
    setHeroes(res.data)
  }
  const renderCards = heroes.map(item => (
    <HeroCard
      key={item.image}
      id={item.id}
      name={item.name}
      image={item.image}
    />
  ))
  useEffect(() => {
    getData()
  }, [])
  return (
    <Layout>
      <CardsBox>{renderCards}</CardsBox>
      <Outlet />
    </Layout>
  )
}

export default Heroes
