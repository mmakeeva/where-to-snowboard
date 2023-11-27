import React, { useState } from "react";

import cn from "classnames";
import styles from "./style.module.css";

import Button from "../Button";

const windSpeedDescriptions = [
    {
        descr: "Calm",
        min: 0,
        max: 0.2,
    },
    {
        descr: "Light air",
        min: 0.3,
        max: 1.5,
    },
    {
        descr: "Light breeze",
        min: 1.6,
        max: 3.3,
    },
    {
        descr: "Gentle breeze",
        min: 3.4,
        max: 5.4,
    },
    {
        descr: "Moderate breeze",
        min: 5.5,
        max: 7.9,
    },
    {
        descr: "Fresh breeze",
        min: 8.0,
        max: 10.7,
    },
    {
        descr: "Strong breeze",
        min: 10.8,
        max: 13.8,
    },
    {
        descr: "Moderate gale",
        min: 13.9,
        max: 17.1,
    },
    {
        descr: "Fresh gale",
        min: 17.2,
        max: 20.7,
    },
    {
        descr: "Strong gale",
        min: 20.8,
        max: 24.4,
    },
    {
        descr: "Storm",
        min: 24.5,
        max: 28.4,
    },
    {
        descr: "Violent storm",
        min: 28.5,
        max: 32.6,
    },
    {
        descr: "Hurricane",
        min: 32.7,
        max: 1000,
    },
];

// getWindSpeedDescription - получает описание скорости ветра по значению
// speed - принимает значение скорости ветра (number)
// возвращает текстовое описание (string)

function getWindSpeedDescription(speed) {
    const speedRounded = Math.round(speed);
    return windSpeedDescriptions.find(
        (elem) => elem.min <= speedRounded && speedRounded <= elem.max
    ).descr;
}

const cloudinessDescriptions = [
    {
        descr: "No clouds",
        min: 0,
        max: 0,
    },
    {
        descr: "Few clouds",
        min: 0,
        max: 10,
    },
    {
        descr: "Isolated clouds",
        min: 10,
        max: 25,
    },
    {
        descr: "Scattered clouds",
        min: 25,
        max: 50,
    },
    {
        descr: "Broken clouds",
        min: 50,
        max: 90,
    },
    {
        descr: "Overcast clouds",
        min: 90,
        max: 100,
    },
];

// getCloudinessDescription - получает описание облачности по значению
// percents - принимает значение облачности (number)
// возвращает текстовое описание (string)
function getCloudinessDescription(percents) {
    if (percents < 0 || percents > 160) return "";
    return cloudinessDescriptions.find(
        (elem) => percents >= elem.min && percents <= elem.max
    ).descr;
}

// Компонент Weather - отображает текущую погоду в горнолыжном курорте
// weatherMap - объект с данными о погоде, хранится в состоянии компонента Weather
// Данные для weatherMap подгружаются с сайта openweathermap при клике по кнопке с курортом

const APY_KEY = "c6c392533b9490521a883d71b5a1bb55";
const OPENWEATHER_BASEURL = "https://api.openweathermap.org/";

const Weather = ({ resortsArray }) => {
    const [weatherMap, setWeatherMap] = useState(null);

    const onClickButton = (event, elem) => {
        const activeButton = document.querySelector(`.${styles.button_active}`);

        if (activeButton) activeButton.classList.remove(styles.button_active);
        event.target.classList.add(styles.button_active);

        // Запрос и получение данных о погоде с сайта
        const url = `${OPENWEATHER_BASEURL}data/2.5/weather?lat=${elem.coord[0]}&lon=${elem.coord[1]}&appid=${APY_KEY}&units=metric`;

        const promise = fetch(url);
        promise
            .then((response) => response.json())
            .then((json) => {
                const result = { ...json, origin: elem.location };

                setWeatherMap(result);
            })
            .catch((err) => console.error(err.message));
    };

    const weather = (
        <div className={styles.weather}>
            <div className={cn(styles.weather__container, "_container")}>
                <div className={styles.resorts__buttons}>
                    {resortsArray.map((elem) => (
                        <Button
                            key={elem.id}
                            value={elem.location.split(",")[0]}
                            handler={(event) => onClickButton(event, elem)}
                            extraclass="button_resort"
                        />
                    ))}
                </div>
                {weatherMap ? (
                    <div className={styles.weather__data}>
                        <h1 className={styles.weather__data_title}>
                            <span className={styles.title__color}>
                                {weatherMap.weather[0].main}
                            </span>{" "}
                            in {weatherMap.origin}
                            <img
                                src={`http://openweathermap.org/img/wn/${weatherMap.weather[0].icon}@2x.png`}
                                alt={weatherMap.weather[0].description}
                                className={styles.weather__icon}
                            />
                        </h1>
                        <table className={styles.weather__data_table}>
                            <thead>
                                <tr>
                                    <th>Props</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Temperature</th>
                                    <td>
                                        {Math.round(weatherMap.main.temp)}{" "}
                                        &#8451;
                                    </td>
                                </tr>
                                <tr>
                                    <th>Wind</th>
                                    <td>
                                        {getWindSpeedDescription(
                                            weatherMap.wind.speed
                                        )}{" "}
                                        ({weatherMap.wind.speed} m/h)
                                    </td>
                                </tr>
                                <tr>
                                    <th>Cloudiness</th>
                                    <td>
                                        {getCloudinessDescription(
                                            weatherMap.clouds.all
                                        )}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <span className={styles.weather__advice}>
                        Push the button and get the weather!
                    </span>
                )}
            </div>
        </div>
    );

    return weather;
};

export default Weather;
