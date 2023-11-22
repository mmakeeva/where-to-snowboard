import React, { useState } from "react";
import "./style.css";

const Checkbox = ({ filter, handler }) => {
    const [isChecked, setChecked] = useState(false);

    const checkedHandler = (event) => {
        setChecked(!isChecked);
        handler(event);
    };

    const checkbox = (
        <label htmlFor={filter.value}>
            <input
                type="checkbox"
                id={filter.value}
                value={filter.value}
                name={filter.name}
                onChange={checkedHandler}
                checked={isChecked}
            />
            {filter.label}
            <span className="checkbox-custom" />
        </label>
    );

    return checkbox;
};

export default Checkbox;
