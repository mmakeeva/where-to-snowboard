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
// configureStore создает хранилище для состояния приложения
const store = configureStore({
    reducer: {
        brands: brandsSlice.reducer,
    },
});

export default store;
export const { shiftLeft, shiftRight } = brandsSlice.actions;

// selector
export function selectBrands(state) {
    return state.brands.value;
}

// dispatch получает объект actions и вызывает reducer для обновления состояния
// dispatch(shiftRight())
