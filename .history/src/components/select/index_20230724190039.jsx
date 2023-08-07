import React, { useState, useEffect } from 'react';
import Select from "react-select";
import { useGetItems } from '../../hooks/useGetItems';
import { useDebounce } from '../../hooks/useDebounce';

export const CustomSelect = () => {
    const { data, getItems } = useGetItems()
    const [value, setValue] = useState('')
    const debouncedValue = useDebounce(value, 300)

    useEffect(() => {
        getItems(debouncedValue)
    }, [debouncedValue])


    const handleChange = (e) => {
        setValue(e)
    }

    console.log(data)
    return (
        <Select
            isClearable
            onInputChange={handleChange}
            isSearchable
            options={data.map((item) => {
                return {
                    ...item,
                    value: item.food_name,
                    label: item.tag_name
                }

            })} />
    )

}