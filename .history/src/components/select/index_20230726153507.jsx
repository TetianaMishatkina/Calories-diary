import React, { useState, useEffect } from 'react';
import { StyledSelect } from './styled'

import { useGetItems } from '../../hooks/useGetItems';
import { useDebounce } from '../../hooks/useDebounce';
import { usePostItemDetailes } from '../../hooks/usePostItemDetails';
import { CaloriesOfMeal } from '../caloriesOfMeal';

export const CustomSelect = () => {
    const { data, getItems } = useGetItems()
    const { dataDetails, postItems } = usePostItemDetailes()
    const [value, setValue] = useState('')
    const [arrayValue, setArrayValue] = useState([])
    const debouncedValue = useDebounce(value, 300)

    useEffect(() => {
        getItems(debouncedValue)
    }, [debouncedValue])

    useEffect(() => {
        const arrayValue = JSON.parse(localStorage.getItem('products'))
        if (arrayValue) {
            setArrayValue(arrayValue)
        }
    }, [arrayValue])


    const handleChange = (e) => {
        setValue(e)

    }

    const handleMoreDetails = (item) => {
        postItems(item.food_name)
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

            {dataDetails.map((detail) => {
                return (
                    <React.Fragment key={detail.id}>
                        <CaloriesOfMeal
                            value={detail.food_name}
                            calories={detail.nf_calories} />
                    </React.Fragment>

                )
            })}

        </>
    )

}