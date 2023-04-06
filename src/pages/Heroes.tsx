import React from "react"
import { Outlet } from "react-router-dom"
import { getHeroes } from "../api/apis"
import { useData } from "../hooks/useData"
import HeroCard from "../components/HeroCard"
import { CardsBox } from "../components/CardsBox"
import { Layout } from "../components/Layout"

function Heroes(): JSX.Element {
  const [response] = useData({ api: getHeroes })
  const renderCards =
    response &&
    response.map(item => (
      <HeroCard
        key={item.image}
        id={item.id}
        name={item.name}
        image={item.image}
      />
    ))
  return (
    <Layout>
      <CardsBox>{renderCards}</CardsBox>
      <Outlet />
    </Layout>
  )
}

export default Heroes
