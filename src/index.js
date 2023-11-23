/**
 * WhereToSnowboard пригодится любителям сноуборда, где каждый может посмотреть карту горнолыжных комплексов и погоду,
 * а также выбрать подходящий курорт для катания
 *
 * Технологии: HTML5, CSS3, JS, React, Redux
 * Дополнительные пакеты: React Router, React Yandex Map, React Geolocated
 */

import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store/store";

import "./null.css";
import "./index.css";

// Импорт компонентов
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import Weather from "./components/Weather";

// Импорт изображений
import elbrusImg from "./assets/img/images/Elbrus.jpg";
import sheregeshImg from "./assets/img/images/Sheregesh.jpg";
import sochiImg from "./assets/img/images/Sochi.jpg";
import arkhyzImg from "./assets/img/images/Arkhyz.jpg";
import soldenImg from "./assets/img/images/Solden.jpg";
import tirolImg from "./assets/img/images/Tirol.jpg";
import chamonixImg from "./assets/img/images/Chamonix.jpg";
import dolomitesImg from "./assets/img/images/Dolomites.jpg";
import livignoImg from "./assets/img/images/Livigno.jpg";
import kirovskImg from "./assets/img/images/BigWood.jpg";
import dombayImg from "./assets/img/images/Dombay.jpg";
import gudauriImg from "./assets/img/images/Gudauri.jpg";
import priiskImg from "./assets/img/images/Priisk.jpg";
import mamayImg from "./assets/img/images/Mamay.jpg";
import kamchatkaImg from "./assets/img/images/Kamchatka.jpg";

// Цвета для меток на карте
const RED = "islands#redIcon";
const BLUE = "islands#blueIcon";
const ORANGE = "islands#darkorangeIcon";
const BLACK = "islands#blackIcon";
const PINK = "islands#pinkIcon";

// Список горнолыжных курортов. Хранится в виде массива объектов
// Содержит информацию о локации
const resortsData = [
    {
        id: 0,
        src: elbrusImg,
        alt: "Elbrus",
        location: "Elbrus, Russia",
        skill: ["middle", "pro"],
        style: ["all", "jibbing"],
        season: "open",
        visible: true,
        coord: [43.2, 42.26],
        colorIcon: RED,
        skiArea: 12.2,
        heightDiff: 1497,
    },
    {
        id: 1,
        src: sheregeshImg,
        alt: "Sheregesh",
        location: "Sheregesh, Russia",
        skill: ["middle", "pro"],
        style: ["all", "freeride"],
        season: "open",
        visible: true,
        coord: [52.55, 87.59],
        colorIcon: RED,
        skiArea: 35,
        heightDiff: 680,
    },
    {
        id: 2,
        src: sochiImg,
        alt: "Krasnaya polyana",
        location: "Krasnaya polyana, Russia",
        skill: ["begginer", "middle", "pro"],
        style: ["all", "jibbing", "freeride"],
        season: "close",
        visible: true,
        coord: [43.62, 40.31],
        colorIcon: RED,
        skiArea: 105,
        heightDiff: 1569,
    },
    {
        id: 3,
        src: arkhyzImg,
        alt: "Arkhyz",
        location: "Arkhyz, Russia",
        skill: ["begginer", "middle", "pro"],
        style: ["all", "jibbing", "freeride"],
        season: "close",
        visible: false,
        coord: [43.33, 41.16],
        colorIcon: RED,
        skiArea: 27,
        heightDiff: 854,
    },
    {
        id: 4,
        src: soldenImg,
        alt: "Solden",
        location: "Solden, Austria",
        skill: ["begginer", "middle", "pro"],
        style: ["all", "jibbing", "freeride"],
        season: "open",
        visible: false,
        coord: [47, 11],
        colorIcon: BLUE,
        skiArea: 140,
        heightDiff: 3250,
    },
    {
        id: 5,
        src: tirolImg,
        alt: "Tirol",
        location: "Tirol, Austria",
        skill: ["begginer", "middle", "pro"],
        style: ["all", "freeride"],
        season: "close",
        visible: false,
        coord: [47.19, 11.11],
        colorIcon: BLUE,
        skiArea: 170,
        heightDiff: 1873,
    },
    {
        id: 6,
        src: chamonixImg,
        alt: "Chamonix",
        location: "Chamonix, France",
        skill: ["begginer", "middle", "pro"],
        style: ["all", "jibbing", "freeride"],
        season: "open",
        visible: false,
        coord: [45.55, 6.52],
        colorIcon: ORANGE,
        skiArea: 170,
        heightDiff: 1873,
    },
    {
        id: 7,
        src: dolomitesImg,
        alt: "Dolomites",
        location: "Dolomites, Italy",
        skill: ["begginer", "middle", "pro"],
        style: ["all", "jibbing", "freeride"],
        season: "open",
        visible: false,
        coord: [46.25, 11.5],
        colorIcon: BLACK,
        skiArea: 170,
        heightDiff: 1873,
    },
    {
        id: 8,
        src: livignoImg,
        alt: "Livigno",
        location: "Livigno, Italy",
        skill: ["begginer", "middle", "pro"],
        style: ["all", "jibbing", "freeride"],
        season: "open",
        visible: false,
        coord: [46.538, 10.135],
        colorIcon: BLACK,
        skiArea: 170,
        heightDiff: 1873,
    },
    {
        id: 9,
        src: kirovskImg,
        alt: "Kirovsk",
        location: "Kirovsk, Russia",
        skill: ["begginer", "middle"],
        style: ["all", "freeride"],
        season: "close",
        visible: false,
        coord: [67.37, 33.4],
        colorIcon: RED,
        skiArea: 25,
        heightDiff: 550,
    },
    {
        id: 10,
        src: dombayImg,
        alt: "Dombay",
        location: "Dombay, Russia",
        skill: ["begginer", "middle", "pro"],
        style: ["all", "freeride"],
        season: "close",
        visible: false,
        coord: [43.17, 41.37],
        colorIcon: RED,
        skiArea: 20,
        heightDiff: 1400,
    },
    {
        id: 11,
        src: gudauriImg,
        alt: "Gudauri",
        location: "Gudauri, Georgia",
        skill: ["begginer", "middle", "pro"],
        style: ["all", "jibbing", "freeride"],
        season: "close",
        visible: false,
        coord: [42.27, 44.28],
        colorIcon: PINK,
        skiArea: 70,
        heightDiff: 547,
    },
    {
        id: 12,
        src: priiskImg,
        alt: "Priiskovoe",
        location: "Priiskovoe, Russia",
        skill: ["pro"],
        style: ["freeride"],
        season: "close",
        visible: false,
        coord: [54.39, 88.42],
        colorIcon: RED,
        skiArea: 10,
        heightDiff: 400,
    },
    {
        id: 13,
        src: mamayImg,
        alt: "Mamay",
        location: "Mamay, Russia",
        skill: ["pro"],
        style: ["freeride"],
        season: "close",
        visible: false,
        coord: [51.425, 104.562],
        colorIcon: RED,
        skiArea: 12,
        heightDiff: 800,
    },
    {
        id: 14,
        src: kamchatkaImg,
        alt: "Kamchatka",
        location: "Kamchatka, Russia",
        skill: ["pro"],
        style: ["freeride"],
        season: "close",
        visible: false,
        coord: [53.18, 158.27],
        colorIcon: RED,
        skiArea: 12,
        heightDiff: 700,
    },
];

// Стартовый компонент WhereToSnowboard рендерит следующие компоненты:
// Header - шапка сайта
// Navigation - навигация по сайту, форма поиска и аватар пользователя
// Home - галерея брендов и карта горнолыжных курортов
// About - галерея горнолыжных курортов с возможностью фильтрации по параметрам
// Weather - информация об акуальной погоде на горнолыжных курортах
// Footer - подвал сайта

const WhereToSnowboard = () => {
    const wrapper = (
        <div className="wrapper">
            <Header />
            <Navigation />

            <main className="content__wrapper">
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Home resortsArray={resortsData} />}
                        errorElement={<ErrorPage />}
                    />
                    <Route
                        path="/about"
                        element={
                            <About
                                resortsArray={resortsData.map((item) => {
                                    const copy = { ...item, visible: true };
                                    return copy;
                                })}
                            />
                        }
                    />

                    <Route
                        path="/weather"
                        element={<Weather resortsArray={resortsData} />}
                    />
                </Routes>
            </main>
            <Footer />
            <div className="overlay" />
        </div>
    );
    return wrapper;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <Router basename="/where-to-snowboard">
            <Provider store={store}>
                <WhereToSnowboard />
            </Provider>
        </Router>
    </StrictMode>
);
