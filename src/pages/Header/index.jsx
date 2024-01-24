import React from "react";

import cn from "classnames";
import styles from "./style.module.scss";
// Компонент Header - шапка сайта
const Header = () => {
    const header = (
        <header className={styles.header}>
            <div className={cn(styles.header__container, "_container")}>
                <h1 className={styles.header__title}>
                    Welcome to
                    <br />
                    WhereToSnowboard
                </h1>
            </div>
        </header>
    );
    return header;
};

export default Header;
