import React from "react";

import cn from "classnames";
import styles from "./style.module.css";

const Button = ({ value, handler, extraclass }) => {
    const button = (
        <button
            type="button"
            className={cn(
                styles.button,
                extraclass
                    ? extraclass.split(" ").map((elem) => styles[elem] || elem)
                    : extraclass
            )}
            onClick={handler}
        >
            {value}
        </button>
    );
    return button;
};

export default Button;
