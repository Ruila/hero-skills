import React, { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { getHeroes } from "../api/apis"
import styled from "styled-components"
import { HeroType } from "../types/HeroType"
import { HeroesBox } from "../components/HeroesBox"

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

function Heroes(): JSX.Element {
  const [heroes, setHeroes] = useState<Array<HeroType>>([])
  const getData = async () => {
    const res = await getHeroes()
    setHeroes(res.data)
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <Layout>
      <HeroesBox data={heroes} />
      <Outlet />
    </Layout>
  )
}

export default Heroes
