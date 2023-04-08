import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Home(): JSX.Element {
  const navigate = useNavigate()
  useEffect(() => {
    navigate("/heroes")
  }, [])
  return <div>home</div>
}

export default Home
