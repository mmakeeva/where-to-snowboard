import React from "react";
import ResortMap from "../../modules/Map";

import styles from "./style.module.scss";

import Gallery from "../../modules/Gallery";

// Компонент Home - домашняя страница
// пропс resortsArray - список горнолыжных курортов, передается из WhereToSnowboard

// Вложенные компоненты
// Gallery - галерея изображений
// ResortMap - карта горнолыжных курортов

const Home = ({ resortsArray }) => {
    const home = (
        <div className={styles.home}>
            <Gallery />
            <div className="_container">
                <p className={styles.home__content}>
                    Snowboarding as&nbsp;a&nbsp;hobby: the perfect way
                    to&nbsp;get your adrenaline fix
                </p>
            </div>
            <ResortMap resortsArray={resortsArray} />
        </div>
    );
    return home;
};

export default Home;
