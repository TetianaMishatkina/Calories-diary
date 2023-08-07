import React, { useState, useEffect } from 'react';
import { StyledSelect } from './styled'

import { useGetItems } from '../../hooks/useGetItems';
import { useDebounce } from '../../hooks/useDebounce';
import { usePostItemDetailes } from '../../hooks/usePostItemDetails';
import { CaloriesOfMeal } from '../caloriesOfMeal';

export const CustomSelect = () => {
    const { data, getItems } = useGetItems()
    const { dataDetails, postItems } = usePostItemDetailes()
    const [foodList, setFoodList] = useState(dataDetails)
    const [value, setValue] = useState('')
    const debouncedValue = useDebounce(value, 300)

    useEffect(() => {
        getItems(debouncedValue)
    }, [debouncedValue])

    const handleChange = (e) => {
        setValue(e)
    }

    const handleMoreDetails = (item) => {
        postItems(item.food_name)
    }
    const handleRemoveFood = () => {



        const copy = dataDetails.filter((element) => { return element.id !== id })
        setFoodList(copy)
        console.log(foodList, 'HOME')
    }

    return (
        <>
            <StyledSelect
                placeholder="Choose"
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

            {dataDetails.map((product, index) => {
                return (
                    <React.Fragment key={product.id}>
                        <CaloriesOfMeal
                            value={product.food_name}
                            calories={product.nf_calories}
                            foodToRemove={() => {
                                handleRemoveFood(product.id)
                            }}
                        />
                    </React.Fragment>

                )
            })}

        </>
    )

}