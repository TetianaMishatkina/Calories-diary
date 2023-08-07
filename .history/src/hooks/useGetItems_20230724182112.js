import React, { useEffect, useState } from 'react'

export const useGetItems = () => {
    const [data, setData] = useState()

    useEffect(() => {
        fetch("https://trackapi.nutritionix.com/v2/search/instant", {
            headers: {
                ‘x - app - id’: ‘your id’,
   ‘x - app - key’: ‘your key’,
            }

        })


    }, [])




return ()
}