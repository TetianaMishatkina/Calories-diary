import React from 'react';
import Select from "react-select";

const options = [
    { value: "Bubus", label: "Misio" }
];

export const Select = () => {
    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);

    return (
        <Select
            isClearable={isClearable}
            isSearchable={isSearchable}
            options={options} />
    )

}