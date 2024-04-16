import { useState } from "react"

export async function getDate() {
    const [dateInfo, setDateInfo] = useState([])

    try {
        const res = await fetch('')
        const data = await res.json()

        setDateInfo(data)
    } catch (err) {
        console.log("Error ==>", err)
    }

    return {
        dateInfo
    }
}