import React, { useState } from "react";

import cn from "classnames";
import styles from "./style.module.css";

import Button from "../Button";

import getWeather, {
    getCloudinessDescription,
    getWindSpeedDescription,
    getWeatherImage,
} from "../../utils/weather";

const Weather = ({ resortsArray }) => {
    const [weatherMap, setWeatherMap] = useState(null);

    const onClickButton = (event, { coord, location }) => {
        const activeButton = document.querySelector(`.${styles.button_active}`);

        if (activeButton) activeButton.classList.remove(styles.button_active);
        event.target.classList.add(styles.button_active);

        (async () => {
            const result = { ...(await getWeather(coord)), origin: location };
            setWeatherMap(result);
        })();
    };

    const weather = (
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
                            src={getWeatherImage(weatherMap)}
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
                                    {Math.round(weatherMap.main.temp)} &#8451;
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
    );

    return weather;
};

export default Weather;
