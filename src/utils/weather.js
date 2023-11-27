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

export function getWindSpeedDescription(speed) {
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
export function getCloudinessDescription(percents) {
    if (percents < 0 || percents > 160) return "";
    return cloudinessDescriptions.find(
        (elem) => percents >= elem.min && percents <= elem.max
    ).descr;
}

const APY_KEY = "c6c392533b9490521a883d71b5a1bb55";
const OPENWEATHER_API_BASEURL = "https://api.openweathermap.org/";
const OPENWEATHER_BASEURL = "https://openweathermap.org/";

// getWeatherImage - получает изображение погоды
export function getWeatherImage(weather) {
    return `${OPENWEATHER_BASEURL}/img/wn/${weather.weather[0].icon}@2x.png`;
}

const getWeather = async ([lat, lon]) => {
    // Запрос и получение данных о погоде с сайта
    const url = `${OPENWEATHER_API_BASEURL}data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APY_KEY}&units=metric`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            console.error(`Fetch status: ${response.status}`);
            return false;
        }
        return await response.json();
    } catch (err) {
        console.error(err.message);
        return false;
    }
};

export default getWeather;
