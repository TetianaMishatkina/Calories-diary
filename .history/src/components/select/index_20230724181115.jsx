import React, { useState } from 'react';
import Select from "react-select";

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
    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);

    return (
        <Select
            isClearable={isClearable}
            formatOptionLabel={formatOptionLabel}
            isSearchable={isSearchable}
            options={options} />
    )

}