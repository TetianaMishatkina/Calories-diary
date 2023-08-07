import React, { useEffect, useState } from 'react'

export const usePostItemDetailes = () => {
    const [data, setData] = useState([])

    const postItems = async (value) => {
        if (!value) {
            return;
        }
        const res = await fetch(`https://trackapi.nutritionix.com/v2/natural/nutrients`, {
            headers: {
                "x-app-id": "5f8b809f",
                "x-app-key": "22eb1e8b5d9ff95e5a7deeb212ee0e74",
                "x-remote-user-id": 0
            },
            body: {
                query: value
            },
            method: "POST"
        })
        const json = await res.json()
        console.log('GET', json)
        setData(json.foods)


    }






    return {
        data,
        postItems
    }
}