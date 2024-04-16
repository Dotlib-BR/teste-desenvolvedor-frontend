import { formatDate } from "@/helpers/format-date"
import { Medicine } from "@/types/medicine"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const MedicinePage = () => {
  const [data, setData] = useState<Medicine>()
  const [loading, setLoading] = useState(true)
  const params = useParams()
  const { id } = params
  useEffect(() => {
    const getData = async () => {
      const req = await fetch(`http://localhost:3000/data/${id}`)
      const res = (await req.json()) as Medicine
      setData(res)
    }
    getData()
    setLoading(false)
  }, [])

  if (loading) {
    return <div>Carregando...</div>
  }

  return (
    <main className="min-h-dvh w-full bg-zinc-800 p-4">
      <div className="container mx-auto flex min-h-[calc(100dvh-32px)] flex-col rounded-md bg-white p-4 py-4">
        <div>{data?.company}</div>
        <div>{data?.name}</div>
        <div>{data?.published_at && formatDate(data.published_at)}</div>
      </div>
    </main>
  )
}

export default MedicinePage
