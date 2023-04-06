import React from "react"
import { Outlet } from "react-router-dom"
import { getHeroes } from "../api/apis"
import { useAxios } from "../hooks/useAxios"

function Heroes(): JSX.Element {
  const [response, loading, error] = useAxios({ api: getHeroes, mounted: true })
  console.log("aaaa", response, loading, error)
  return (
    <div>
      heroes
      <Outlet />
    </div>
  )
}

export default Heroes
