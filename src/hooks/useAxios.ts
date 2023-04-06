import { useEffect, useState } from "react"
import { AxiosResponse } from "axios"
import { UseAxiosResponse } from "../types/UseAxiosResponse"

interface useAxiosProps<T> {
  api: () => Promise<AxiosResponse<T>>
  mounted?: boolean
}

export function useAxios<T>({
  api,
  mounted,
}: useAxiosProps<T>): UseAxiosResponse<T> {
  const [response, setResponse] = useState<T>()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)

  const fetchData = () => {
    api()
      .then(res => {
        setResponse(res.data)
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    mounted && fetchData()
  }, [])

  return [response, loading, error]
}
