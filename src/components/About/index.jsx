/* eslint-disable react/jsx-no-bind */
import React, { useState } from "react";

import cn from "classnames";
import styles from "./style.module.css";

import GalleryImages from "../GalleryImages";
import Checkbox from "../Checkbox";

// Фильтр по стране
const countryArray = [
    {
        value: "Russia",
        name: "location",
        label: "Russia",
    },
    {
        value: "Austria",
        name: "location",
        label: "Austria",
    },
    {
        value: "France",
        name: "location",
        label: "France",
    },
    {
        value: "Italy",
        name: "location",
        label: "Italy",
    },
];

// Фильтр по уровню катания
const skillArray = [
    {
        value: "begginer",
        name: "skill",
        label: "begginer",
    },
    {
        value: "middle",
        name: "skill",
        label: "middle",
    },
    {
        value: "pro",
        name: "skill",
        label: "pro",
    },
];

// Фильтр по стилю катания
const styleArray = [
    {
        value: "all",
        name: "style",
        label: "all",
    },
    {
        value: "freeride",
        name: "style",
        label: "freeride",
    },
    {
        value: "jibbing",
        name: "style",
        label: "jibbing",
    },
];

// Фильтр по сезону
const seasonArray = [
    {
        value: "open",
        name: "season",
        label: "open",
        checked: true,
    },
];

// Сортировка списка курортов по стране
function sortResorts(a, b) {
    if (b.location.split(", ")[1] > a.location.split(", ")[1]) return 1;
    if (b.location.split(", ")[1] < a.location.split(", ")[1]) return -1;

    return 0;
}

// Компонент About - галерея горнолыжных курортов с возможностью фильтрации по параметрам
// пропс resortsArray - список горнолыжных курортов, передается из WhereToSnowboard

// Вложенные компоненты
// Checkbox - чекбокс для фильтра

// Фильтрация осуществляется по 4 параметрам

const About = ({ resortsArray }) => {
    const [resorts, setResorts] = useState({
        filtered: {
            location: [],
            skill: [],
            style: [],
            season: [],
        },
        currentResorts: [...resortsArray].sort(sortResorts),
    });

    function onCheckHandler(event) {
        const propName = event.target.name;
        const propValue = event.target.value;
        const isChecked = event.target.checked;

        const resortsFiltered = { ...resorts.filtered };

        if (!isChecked) {
            // удаляем элементы из фильтра при снятии параметра

            resortsFiltered[propName] = resortsFiltered[propName].filter(
                (elem) => !elem[propName].includes(propValue)
            );
        } else {
            // фильтр по заданному параметру
            resortsFiltered[propName] = resortsArray
                .filter((resort) => resort[propName].includes(propValue))
                .concat(resorts.filtered[propName]);
        }
        // объединяем массивы для поиска общих элементов
        // фильтруем элементы
        const union = Object.values(resortsFiltered).filter(
            (elem) => elem.length !== 0
        );
        const isEmptyFilter = union.length === 0;

        let filtered;

        if (!isEmptyFilter) {
            filtered = union.reduce((prev, next) =>
                prev.filter((elem) => next.includes(elem))
            );
        }

        const array = resortsArray.map((resort) => ({
            ...resort,
            visible: isEmptyFilter ? true : filtered.includes(resort),
        }));

        setResorts({
            filtered: resortsFiltered,
            currentResorts: array,
        });
    }

    const about = (
        <div className={styles.about}>
            <div className={cn(styles.about__container, "_container")}>
                <div className={styles.about__content}>
                    <p>Find a&nbsp;resort especially for yourself!</p>
                    <div className={styles.resorts__filter}>
                        <ul className={styles.filter__list}>
                            <p className={styles.list__title}>Choose country</p>
                            {countryArray.map((elem) => (
                                <li key={elem.value}>
                                    <Checkbox
                                        chb={elem}
                                        handler={onCheckHandler}
                                    />
                                </li>
                            ))}
                        </ul>
                        <ul className={styles.filter__list}>
                            <p className={styles.list__title}>
                                Choose skill level
                            </p>
                            {skillArray.map((elem) => (
                                <li key={elem.value}>
                                    <Checkbox
                                        chb={elem}
                                        handler={onCheckHandler}
                                    />
                                </li>
                            ))}
                        </ul>
                        <ul className={styles.filter__list}>
                            <p className={styles.list__title}>Choose style</p>
                            {styleArray.map((elem) => (
                                <li key={elem.value}>
                                    <Checkbox
                                        chb={elem}
                                        handler={onCheckHandler}
                                    />
                                </li>
                            ))}
                        </ul>
                        <ul className={styles.filter__list}>
                            <p className={styles.list__title}>
                                Choose season open/close
                            </p>
                            {seasonArray.map((elem) => (
                                <li key={elem.value}>
                                    <Checkbox
                                        chb={elem}
                                        handler={onCheckHandler}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <GalleryImages
                        images={resorts.currentResorts}
                        extraClass="gallery_images_wrap"
                    />
                </div>
            </div>
        </div>
    );

    return about;
};

export default About;
