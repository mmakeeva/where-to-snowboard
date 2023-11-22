import React from "react";
import "./style.css";

import Menu from "../Menu";
import SearchForm from "../SearchForm";
import Avatar from "../Avatar";

// Компоненты
// Menu - навигация по сайту (меню со ссылками)
// SearchForm - форма поиска
// Avatar - аватар пользователя с формой входа и формой регистрации

const Navigation = () => {
    const navigation = (
        <nav className="navigation">
            <div className="navigation__container _container">
                <Menu />
                <SearchForm />
                <Avatar />
            </div>
        </nav>
    );

    return navigation;
};

export default Navigation;
