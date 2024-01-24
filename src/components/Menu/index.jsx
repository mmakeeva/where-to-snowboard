import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./style.module.scss";

// Вкладки для меню навигации
const menuArray = [
    {
        id: 0,
        path: "",
        name: "Home",
    },
    {
        id: 1,
        path: "about",
        name: "About",
    },

    {
        id: 2,
        path: "weather",
        name: "Weather",
    },
];

// Компонент Menu - навигация по сайту
const Menu = () => {
    const menu = (
        <nav>
            <ul className={styles.menu}>
                {menuArray.map(({ id, path, name }) => (
                    <li key={id} className={styles["menu__menu-item"]}>
                        <NavLink className="link" to={`/${path}`} end>
                            {name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
    return menu;
};

export default Menu;
