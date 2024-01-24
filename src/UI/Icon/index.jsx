import React from "react";
import styles from "./style.module.scss";

const Icon = ({ src, alt, extraClass }) => {
    const icon = (
        <img
            src={src}
            alt={alt}
            className={`${styles["icon_align-center"]} ${
                extraClass ? styles.icon_big : styles.icon_small
            }`}
        />
    );
    return icon;
};

export default Icon;
