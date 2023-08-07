import React, { useState, useEffect } from 'react';
import { StyledSelect } from './styled'

import { useGetItems } from '../../hooks/useGetItems';
import { useDebounce } from '../../hooks/useDebounce';
import { usePostItemDetailes } from '../../hooks/usePostItemDetails';
import { CaloriesOfMeal } from '../caloriesOfMeal';
import { format } from 'date-fns'

export const CustomSelect = ({ date, mealOfDay, postItems, dataDetails }) => {
    const { data, getItems } = useGetItems()

    const [foodList, setFoodList] = useState(dataDetails || {})
    const [value, setValue] = useState('')
    const debouncedValue = useDebounce(value, 300)

    useEffect(() => {
        getItems(debouncedValue)
    }, [debouncedValue])

    useEffect(() => {
        setFoodList(dataDetails)
    }, [dataDetails])

    const handleChange = (e) => {
        setValue(e)
    }

    const handleMoreDetails = (item) => {
        postItems(item.food_name, date, mealOfDay)
    }
    const handleRemoveFood = (name) => {
        const newFoodList = foodList[format(date, 'yyyy-MM-dd')]?.[mealOfDay]?.filter((element) => { return element.food_name !== name })
        setFoodList(newFoodList)
        localStorage.setItem('products', JSON.stringify(newFoodList))


        // const copy = foodList.filter((element) => { return element.food_name !== name })
        // setFoodList(copy)
        // localStorage.setItem('products', JSON.stringify(copy))
    }

    return (
        <>
            <StyledSelect
                isClearable
                onChange={handleMoreDetails}
                onInputChange={handleChange}
                isSearchable
                options={data.map((item) => {
                    return {
                        ...item,
                        value: item.food_name,
                        label: item.tag_name
                    }
                })} />

            {foodList[format(date, 'yyyy-MM-dd')]?.[mealOfDay]?.map((product) => {

                return (
                    <React.Fragment key={product.id}>
                        <CaloriesOfMeal
                            value={product.food_name}
                            calories={product.nf_calories}
                            foodToRemove={() => {
                                handleRemoveFood(product.food_name)
                            }}
                        />
                    </React.Fragment>

                )
            })}

        </>
    )

}