import React, { useState, useEffect } from 'react';
import { StyledSelect } from './styled'

import { useGetItems } from '../../hooks/useGetItems';
import { useDebounce } from '../../hooks/useDebounce';
import { usePostItemDetailes } from '../../hooks/usePostItemDetails';
import { CaloriesOfMeal } from '../caloriesOfMeal';
import { format } from 'date-fns'

export const CustomSelect = ({ date, mealOfDay, postItems, dataDetails, handleRemoveFood }) => {
    const { data, getItems } = useGetItems()
    const [selectedItems, setSelectedItems] = useState({
        value: '',
        label: ''
    })

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
        console.log('asdasd', item)
        postItems(item.food_name, date, mealOfDay)
        setSelectedItems({
            label: item.food_name,
            value: item.food_name
        })
    }

    return (
        <>
            <StyledSelect
                isClearable
                value={selectedItems}
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
                                handleRemoveFood(product.food_name, date, mealOfDay)
                            }}
                        />
                    </React.Fragment>

                )
            })}

        </>
    )

}