/* eslint no-param-reassign: ["error", { "props": false }] */
import { createSlice, configureStore } from "@reduxjs/toolkit";

import burtonImg from "../assets/img/logo/burton.png";
import joneslImg from "../assets/img/logo/jones.jpg";
import quiksilverImg from "../assets/img/logo/quiksilver.png";
import dcImg from "../assets/img/logo/dc.jpg";
import roxyImg from "../assets/img/logo/roxy.jpg";

// ============ STORE ==============

// начальное состояние для инициализации store
const brandsData = [
    {
        id: 0,
        src: burtonImg,
        alt: "Burton",
        visible: true,
    },
    {
        id: 1,
        src: quiksilverImg,
        alt: "Quiksilver",
        visible: true,
    },
    {
        id: 2,
        src: dcImg,
        alt: "DC",
        visible: true,
    },
    {
        id: 3,
        src: roxyImg,
        alt: "Roxy",
        visible: false,
    },
    {
        id: 4,
        src: joneslImg,
        alt: "Jones",
        visible: false,
    },
];

const MAX_IMG_COUNT = 3;

const brandsSlice = createSlice({
    name: "brands",
    // инициализация
    initialState: {
        value: brandsData,
    },
    // reducers - функции изменения состояния в зависимости от actions. получает в качестве параметра текущее состояние
    // RTK позволяет мутировать состояние
    reducers: {
        // сдвинуть массив влево
        shiftLeft: (state) => {
            const first = state.value.shift();
            first.visible = false;
            state.value.push(first);
            state.value[MAX_IMG_COUNT - 1].visible = true;
        },
        // сдвинуть массив вправо
        shiftRight: (state) => {
            const last = state.value.pop();
            last.visible = true;
            state.value.unshift(last);
            state.value[MAX_IMG_COUNT].visible = false;
        },
    },
});

const articlesData = [
    {
        id: 0,
        date: "2023-11-23",
        title: "Обзор горнолыжного комплекса Роза Хутор",
        content:
            "«Роза Хутор» — самый новый, большой и современный горнолыжный комплекс Красной Поляны. По мнению многих туристов, это лучший в России горнолыжный курорт. Для любителей истории, Роза Хутор получила свое название от фамилии эстонской семьи Рооза, хутор которой находился на месте сегодняшнего горнолыжного курорта.",
    },
    {
        id: 1,
        date: "2022-10-04",

        title: "Подъёмники Роза Хутор",
        content:
            "Основные подъемники — это скоростные 8-местные гондолы и современные креселки.Общая пропускная способность Роза Хутор с открытием всех новых подъемников на сегодня до 18000 человек в день. Диких очередей на курорте практически нет, кроме как по праздникам. За исключением подъемника Эдельвейс на Южном склоне, который облуживает 17 км трасс. Поэтому уже после 11-12 часов там может быть очередь на полчаса, которая, кстати, легко обнаруживается через вебкамеры и устные объявления на курорте. Поэтому если вы ее опасаетесь, то перед спуском просто посмотрите на экран, который есть на Роза Пик. Постоянно работают два основных гондольных подъемника с нижней очереди. Первый, Олимпия, доставляет на высоту 1170 м в Горную Олимпийскую деревню, а второй, Стрела, сразу на 1600 м. Это позволяет достаточно эффективно работать утром на подъем и вечером на спуск. Но само собой, дни типа открытия сезона или новогодних праздников все равно «радуют» очередями. Опытным катальщикам мы рекомендуем пользоваться Стрелой, так как туда пускают только со сняряжением, а на Олимпию — всех. Поэтому вам остается до Роза Пик только один сегмент подъемника Кавказский экспресс.",
    },
    {
        id: 2,
        date: "2021-08-01",

        title: "Главные курорты Тироля",
        content:
            "Убедиться, что высокогорный курорт Тироль не обманет ожиданий даже самых притязательных сноубордистов и лыжников, можно на трассах, общая протяженность которых 3500 км. Шесть зон катания в окрестностях столицы объединены в «Большой лыжный абонемент Инсбрука» из 53 подъемников.",
    },
    {
        id: 3,
        date: "2016-08-16",

        title: "Доломитовые Альпы",
        content:
            "Dolomiti Superski – горнолыжный альянс, объединивший в себе 12 горных регионов в единую зону катания для более чем 40 курортов. Это один ски-пасс на 1200 км трасс и 460 подъемников, это возможность не только увидеть невероятные высоты Италии, а и побывать во многих горных областях, не снимая лыж. На территории отлично развита инфраструктура: находится более 30 сноу-парков, десятки трасс любой сложности, более сотни кафе и ресторанов, множество школ для начинающих лыжников, развлекательных и спортивных центров.",
    },
];

const articlesSlice = createSlice({
    name: "articles",
    // инициализация
    initialState: {
        value: articlesData,
    },
    reducers: {
        searchArticle: (state, action) => {
            state.value = articlesData.filter((elem) =>
                elem.content
                    .toLocaleLowerCase()
                    .includes(action.payload.toLocaleLowerCase())
            );
        },
    },
});

// configureStore создает хранилище для состояния приложения
const store = configureStore({
    reducer: {
        brands: brandsSlice.reducer,
        articles: articlesSlice.reducer,
    },
});

export default store;
export const { shiftLeft, shiftRight } = brandsSlice.actions;
export const { searchArticle } = articlesSlice.actions;

// selector
export function selectBrands(state) {
    return state.brands.value;
}

export function selectArticles(state) {
    return state.articles.value;
}

// dispatch получает объект actions и вызывает reducer для обновления состояния
// dispatch(shiftRight())
