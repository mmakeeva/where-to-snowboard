import React from "react";

import cn from "classnames";
import styles from "./style.module.scss";

import Menu from "../Menu";
import SearchForm from "../SearchForm";
import Avatar from "../Avatar";

// Компоненты
// Menu - навигация по сайту (меню со ссылками)
// SearchForm - форма поиска
// Avatar - аватар пользователя с формой входа и формой регистрации

const Navigation = () => {
    const navigation = (
        <nav className={styles.navigation}>
            <div className={cn(styles.navigation__container, "_container")}>
                <Menu />
                <SearchForm />
                <Avatar />
            </div>
        </nav>
    );

    return navigation;
};

export default Navigation;
