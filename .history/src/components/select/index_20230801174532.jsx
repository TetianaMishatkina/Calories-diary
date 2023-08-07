import React, { useState, useEffect } from 'react';
import { StyledSelect } from './styled'

import { useGetItems } from '../../hooks/useGetItems';
import { useDebounce } from '../../hooks/useDebounce';
import { usePostItemDetailes } from '../../hooks/usePostItemDetails';
import { CaloriesOfMeal } from '../caloriesOfMeal';

export const CustomSelect = () => {
    const { data, getItems } = useGetItems()
    const { dataDetails, postItems } = usePostItemDetailes()
    const [foodList, setFoodList] = useState(dataDetails || [])
    const [value, setValue] = useState('')
    const debouncedValue = useDebounce(value, 300)

    useEffect(() => {
        getItems(debouncedValue)
    }, [debouncedValue])

    useEffect(() => {
        setFoodList(dataDetails)
        console.log('KUKU')
    }, [dataDetails])

    const handleChange = (e) => {
        setValue(e)
    }

    const handleMoreDetails = (item) => {
        postItems(item.food_name)
    }
    const handleRemoveFood = (name) => {
        const copy = foodList.filter((element) => { return element.food_name !== name })
        setFoodList(copy)
        localStorage.setItem('products', JSON.stringify(copy))
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

            {foodList.map((product) => {
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