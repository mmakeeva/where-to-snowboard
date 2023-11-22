import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { shiftLeft, shiftRight, selectBrands } from "../../store/store";

import "./style.css";

import arrowLeft from "../../assets/img/icons/arrow-left.png";
import arrowRight from "../../assets/img/icons/arrow-right.png";

import GalleryImages from "../GalleryImages";

// Компонент Gallery - галерея изображений с кнопками для переключения

// Вложенные компоненты
// GalleryImages - изображения для галереи
// пропс images - принимает список объектов с изображениями
// пропс extraClass - позволяет переносить изображения на новую строку при переполнении
// brandsImageList - список брендов для отображения в галерее, берется из глобального хранилища store

// При разрешении окна до 768px галерея брендов скрывается и появляется кнопка showBrandsButton для раскрытия/сокрытия галереи
function showBrands() {
    document
        .querySelector(".gallery__container")
        .classList.toggle("showGallery");
}
const Gallery = () => {
    const brandsImageList = useSelector(selectBrands);
    const dispatch = useDispatch();

    const gallery = (
        <div className="gallery">
            <button
                type="button"
                className="button showBrandsButton"
                onClick={showBrands}
            >
                Show brands
            </button>
            <div className="gallery__container">
                <button
                    type="button"
                    className="leftSide"
                    onClick={() => dispatch(shiftLeft())}
                >
                    <img
                        src={arrowLeft}
                        alt="arrow-left"
                        className="buttonPng"
                    />
                </button>
                <GalleryImages images={brandsImageList} extraClass="" />
                <button
                    type="button"
                    className="rightSide"
                    onClick={() => dispatch(shiftRight())}
                >
                    <img
                        src={arrowRight}
                        alt="arrow-right"
                        className="buttonPng"
                    />
                </button>
            </div>
        </div>
    );
    return gallery;
};

export default Gallery;
