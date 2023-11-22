import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

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
            <ul className="menu">
                {menuArray.map((elem) => (
                    <li key={elem.id} className="menu-item">
                        <NavLink className="link" to={`/${elem.path}`} end>
                            {elem.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
    return menu;
};

export default Menu;
