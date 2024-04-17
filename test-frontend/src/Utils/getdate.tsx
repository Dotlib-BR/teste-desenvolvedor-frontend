import { useEffect, useState } from "react"

export function getDate() {
    const [dateInfo, setDateInfo] = useState({})
    const [search, setSearch] = useState('')
    const typeUrl = search ? 'data/:id' : 'data'

    const fetchDate = async () => {
        try {
            const res = await fetch('http://localhost:3000/' + `${typeUrl}`)
            const data = await res.json()

            setDateInfo(data)
        } catch (err) {
            console.log("Error ==>", err)
        }

    }
    useEffect(() => {
        fetchDate()
    }, [])

    return {
        dateInfo,
        setSearch
    }
}