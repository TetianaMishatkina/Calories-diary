import React, { useState } from 'react';
import Select from "react-select";

const options = [
    { value: "Bubus", label: "Bubus" },
    { value: "Kokosik", label: "Kokosik" }
];

export const CustomSelect = () => {
    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);

    return (
        <Select
            isClearable={isClearable}
            isSearchable={isSearchable}
            options={options} />
    )

}