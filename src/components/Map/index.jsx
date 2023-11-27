import "./style.css";
import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useGeolocated } from "react-geolocated";

import mountainImg from "../../assets/img/icons/mountain.jpeg";

// Компонент ResortMap - карта горнолыжных курортов с метками
// пропс resortsArray - принимает из Home список объектов с курортами

// coords - текущие координаты формата {широта, долгота}, получаемые с помощью геолокации браузера
// если координаты получить не удалось, будут взяты координаты по-умолчанию [55.98, 37.17]

// YMaps - контейнер для объекта карты Yandex Map
// Placemark - метки на карте

const ResortMap = ({ resortsArray }) => {
    const { coords } = useGeolocated({
        positionOptions: {
            enableHighAccuracy: false,
        },
        userDecisionTimeout: 5000,
    });

    const map = (
        <div className="map">
            <div className="map__container _container">
                <YMaps
                    query={{
                        apikey: process.env.REACT_APP_MAP_API_KEY,
                    }}
                >
                    <Map
                        defaultState={{
                            center: [55.751574, 37.573856],
                            zoom: 3,
                            controls: ["zoomControl", "fullscreenControl"],
                        }}
                        modules={[
                            "control.ZoomControl",
                            "control.FullscreenControl",
                        ]}
                        className="ymap__container"
                    >
                        <Placemark
                            modules={["geoObject.addon.hint"]}
                            geometry={
                                coords
                                    ? [coords.latitude, coords.longitude]
                                    : [55.98, 37.17]
                            }
                            options={{ preset: "islands#greenStretchyIcon" }}
                            properties={{
                                iconContent: "You are here",
                            }}
                        />
                        {resortsArray.map((elem) => {
                            const content = `<img src=${mountainImg} alt=${
                                elem.alt
                            } class="mapHint" /><br/><span><b>Skills</b>: ${elem.skill.join(
                                ", "
                            )}</span><br/><span><b>Style</b>: ${elem.style.join(
                                ", "
                            )}</span><br/><span><b>Ski area</b>:${
                                elem.skiArea
                            } km</span><br/><span><b>Height difference</b>:${
                                elem.heightDiff
                            } m</span>`;
                            return (
                                <Placemark
                                    modules={[
                                        "geoObject.addon.balloon",
                                        "geoObject.addon.hint",
                                    ]}
                                    defaultGeometry={elem.coord}
                                    key={elem.id}
                                    options={{
                                        preset: elem.colorIcon,
                                    }}
                                    properties={{
                                        balloonContentHeader: `<strong>${elem.location}</strong>`,
                                        balloonContentBody: [content],
                                        hintContent: elem.location,
                                        iconContent: elem.id,
                                    }}
                                />
                            );
                        })}
                    </Map>
                </YMaps>
            </div>
        </div>
    );

    return map;
};

export default ResortMap;
