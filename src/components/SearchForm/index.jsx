import React, { useState } from "react";

import styles from "./style.module.css";

import searchImg from "../../assets/img/icons/Search.png";
import Icon from "../Icon";

const articles = [
    {
        id: 0,
        idResort: 0,
        title: "Обзор горнолыжного комплекса Роза Хутор",
        content:
            "«Роза Хутор» — самый новый, большой и современный горнолыжный комплекс Красной Поляны. По мнению многих туристов, это лучший в России горнолыжный курорт. Для любителей истории, Роза Хутор получила свое название от фамилии эстонской семьи Рооза, хутор которой находился на месте сегодняшнего горнолыжного курорта.",
    },
    {
        id: 1,
        idResort: 0,
        title: "Подъёмники Роза Хутор",
        content:
            "Основные подъемники — это скоростные 8-местные гондолы и современные креселки.Общая пропускная способность Роза Хутор с открытием всех новых подъемников на сегодня до 18000 человек в день. Диких очередей на курорте практически нет, кроме как по праздникам. За исключением подъемника Эдельвейс на Южном склоне, который облуживает 17 км трасс. Поэтому уже после 11-12 часов там может быть очередь на полчаса, которая, кстати, легко обнаруживается через вебкамеры и устные объявления на курорте. Поэтому если вы ее опасаетесь, то перед спуском просто посмотрите на экран, который есть на Роза Пик. Постоянно работают два основных гондольных подъемника с нижней очереди. Первый, Олимпия, доставляет на высоту 1170 м в Горную Олимпийскую деревню, а второй, Стрела, сразу на 1600 м. Это позволяет достаточно эффективно работать утром на подъем и вечером на спуск. Но само собой, дни типа открытия сезона или новогодних праздников все равно «радуют» очередями. Опытным катальщикам мы рекомендуем пользоваться Стрелой, так как туда пускают только со сняряжением, а на Олимпию — всех. Поэтому вам остается до Роза Пик только один сегмент подъемника Кавказский экспресс.",
    },
    {
        id: 2,
        idResort: 5,
        title: "Главные курорты Тироля",
        content:
            "Убедиться, что высокогорный курорт Тироль не обманет ожиданий даже самых притязательных сноубордистов и лыжников, можно на трассах, общая протяженность которых 3500 км. Шесть зон катания в окрестностях столицы объединены в «Большой лыжный абонемент Инсбрука» из 53 подъемников.",
    },
    {
        id: 3,
        idResort: 7,
        title: "Доломитовые Альпы",
        content:
            "Dolomiti Superski – горнолыжный альянс, объединивший в себе 12 горных регионов в единую зону катания для более чем 40 курортов. Это один ски-пасс на 1200 км трасс и 460 подъемников, это возможность не только увидеть невероятные высоты Италии, а и побывать во многих горных областях, не снимая лыж. На территории отлично развита инфраструктура: находится более 30 сноу-парков, десятки трасс любой сложности, более сотни кафе и ресторанов, множество школ для начинающих лыжников, развлекательных и спортивных центров.",
    },
];

// Компонент SearchForm - форма поиска
const SearchForm = () => {
    const [searchValue, setSearchValue] = useState("");

    const onChangeHandler = (event) => {
        setSearchValue(event.target.value);
    };

    const onSearchArticles = (e) => {
        e.preventDefault();
        const found = articles.filter((elem) =>
            elem.content
                .toLocaleLowerCase()
                .includes(searchValue.toLocaleLowerCase())
        );

        if (found.length === 0) {
            alert("Oops! Nothing was found");
            return 0;
        }

        const div = document.createElement("div");
        div.className = "articles _container";
        const ul = document.createElement("ul");
        const button = document.createElement("button");
        button.className = "button";
        button.textContent = "Clear";
        button.onclick = () => {
            div.remove();
        };

        const articlesList = found.map(
            (elem) =>
                `<li key=${elem.id}><article><h3>${elem.title}</h3><p>${elem.content}</p></article></li>`
        );

        ul.insertAdjacentHTML("afterbegin", articlesList.join(""));
        div.append(ul);
        div.append(button);

        document
            .querySelector(".navigation")
            .insertAdjacentElement("afterend", div);

        return 0;
    };

    const search = (
        <div className={styles.search}>
            <form className={styles["search-form"]} onSubmit={onSearchArticles}>
                <button
                    type="submit"
                    aria-label="Search"
                    className={styles["search-form__icon"]}
                >
                    <Icon src={searchImg} alt="search" />
                </button>
                <input
                    className="input"
                    type="text"
                    value={searchValue}
                    onChange={onChangeHandler}
                    placeholder="Пример: роза хутор"
                    name="search-form__input"
                />
            </form>
        </div>
    );
    return search;
};

export default SearchForm;
