import React from "react"
import { Outlet } from "react-router-dom"

function Heroes(): JSX.Element {
  return (
    <div>
      heroes
      <Outlet />
    </div>
  )
}

export default Heroes
