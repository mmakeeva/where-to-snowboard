import React from "react";
import styles from "./style.module.css";

const Icon = ({ src, alt }) => {
    const icon = <img src={src} alt={alt} className={styles.icon} />;
    return icon;
};

export default Icon;
