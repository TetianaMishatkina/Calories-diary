import React, { useEffect, useState } from 'react'

export const useGetItems = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('products'))
        if (data) {
            setData(data)
        }
    }, [])

    const getItems = async (value) => {
        if (!value) {
            return;
        }
        const res = await fetch(`https://trackapi.nutritionix.com/v2/search/instant?query=${value}`, {
            headers: {
                "x-app-id": "5f8b809f",
                "x-app-key": "22eb1e8b5d9ff95e5a7deeb212ee0e74",
                "x-remote-user-id": 0
            },
            method: "GET"
        })
        const json = await res.json()
        setData(json.common)
    }






    return {
        data,
        getItems
    }
}