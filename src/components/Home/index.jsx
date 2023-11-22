import React from "react";
import ResortMap from "../Map";
import "./style.css";

import Gallery from "../Gallery";

// Компонент Home - домашняя страница
// пропс resortsArray - список горнолыжных курортов, передается из WhereToSnowboard

// Вложенные компоненты
// Gallery - галерея изображений
// ResortMap - карта горнолыжных курортов

const Home = ({ resortsArray }) => {
    const home = (
        <div className="home">
            <Gallery />
            <ResortMap resortsArray={resortsArray} />
        </div>
    );
    return home;
};

export default Home;
