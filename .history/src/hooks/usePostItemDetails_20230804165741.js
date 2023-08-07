import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'

/*
 {
    2025-06-02: {
        breakfast: [adsasdad],
        supper: [adsasdad],
        dinner: [adsasdad],
    }
 }

 Obj[date].breakfast.map(()=> mamy mape zarelka perlka na sniadanko)
 

*/

export const usePostItemDetailes = () => {
    const [dataDetails, setDataDetails] = useState({})

    useEffect(() => {
        const dataFromLs = JSON.parse(localStorage.getItem('products'))
        if (dataFromLs) {
            setDataDetails(dataFromLs)
        }
    }, [])

    const handleRemoveFood = (name, date, mealOfDay) => {
        console.log('name', name)
        const newFoodList = dataDetails[format(date, 'yyyy-MM-dd')]?.[mealOfDay]?.filter((element) => {
            console.log('kkuku', element.food_name, name, element.food_name !== name)
            return element.food_name !== name
        })
        setDataDetails(newFoodList)
        localStorage.setItem('products', JSON.stringify(newFoodList))
    }


    const postItems = async (value, date, mealOfDay) => {
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
                query: value,
            }),
            method: "POST"
        })
        const json = await res.json()
        setDataDetails((prev) => {
            const formatDate = format(date, 'yyyy-MM-dd')
            const newData = {
                ...prev,
                [formatDate]: {
                    ...prev[formatDate],
                    [mealOfDay]: [...(prev?.[formatDate]?.[mealOfDay] || []), json.foods[0]]
                }
            }
            localStorage.setItem('products', JSON.stringify(newData));
            return newData
        })

    }

    return {
        dataDetails,
        postItems,
        handleRemoveFood

    }
}