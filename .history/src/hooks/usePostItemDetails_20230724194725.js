import React, { useEffect, useState } from 'react'

export const usePostItemDetailes = () => {
    const [dataDetails, setDataDetails] = useState([])

    const postItems = async (value) => {
        if (!value) {
            return;
        }
        const res = await fetch(`https://trackapi.nutritionix.com/v2/natural/nutrients`, {
            headers: {
                "x-app-id": "5f8b809f",
                "x-app-key": "22eb1e8b5d9ff95e5a7deeb212ee0e74",
                "x-remote-user-id": 0,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                query: value
            }),
            method: "POST"
        })
        const json = await res.json()
        console.log('asdsad', json)
        // setDataDetails([...dataDetails, json.foods])


    }






    return {
        dataDetails,
        postItems
    }
}