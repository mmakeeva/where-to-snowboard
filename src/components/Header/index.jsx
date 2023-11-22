import React from "react";
import "./style.css";
// Компонент Header - шапка сайта
const Header = () => {
    const header = (
        <header className="header">
            <div className="header__container _container">
                <h1 className="title">
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
