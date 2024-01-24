import React from "react";

import styles from "./style.module.scss";

const Input = ({
    type,
    id,
    label,
    value,
    autoComplete,
    required,
    placeholder,
}) => {
    const input = (
        <label htmlFor={id} className={styles.label}>
            {label}
            <input
                type={type}
                id={id}
                className={styles[type]}
                autoComplete={autoComplete}
                required={required}
                value={value}
                placeholder={placeholder}
            />
        </label>
    );

    return input;
};

export default Input;
