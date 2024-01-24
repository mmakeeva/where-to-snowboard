import React, { useState } from "react";

import styles from "./style.module.scss";

const Checkbox = ({ chb, handler }) => {
    const [isChecked, setChecked] = useState(false);

    const checkedHandler = (event) => {
        setChecked(!isChecked);
        handler(event);
    };

    const checkbox = (
        <div className={styles.checkbox}>
            <input
                type="checkbox"
                id={chb.value}
                value={chb.value}
                name={chb.name}
                onChange={checkedHandler}
                checked={isChecked}
                className={styles.checkbox_input}
            />
            <label htmlFor={chb.value} className={styles.checkbox_label}>
                {chb.label}
            </label>
        </div>
    );

    return checkbox;
};

export default Checkbox;
