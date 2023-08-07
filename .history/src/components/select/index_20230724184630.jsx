import React, { useState, useEffect } from 'react';
import Select from "react-select";
import { useGetItems } from '../../hooks/useGetItems';

const options = [
    { value: "Bubus", label: "Bubus" },
    { value: "Kokosik", label: "Kokosik" }
]

const formatOptionLabel = ({ value, label }) => (
    <div style={{ display: "flex" }}>
        <div>{label}</div>
        <div style={{ marginLeft: "10px", color: "#ccc" }}>
            {value}
        </div>
    </div>
);

export const CustomSelect = () => {
    const { data, getItems } = useGetItems()
    const [item, setItem] = useState('')




    const handleChange = (e) => {
        getItems(e)
    }

    return (
        <Select
            isClearable
            onInputChange={handleChange}
            formatOptionLabel={formatOptionLabel}
            isSearchable
            options={options} />
    )

}