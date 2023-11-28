import React from "react";
import { useDispatch, useSelector } from "react-redux";

import cn from "classnames";
import styles from "./style.module.css";

import { shiftLeft, shiftRight, selectBrands } from "../../store/store";

import arrowLeft from "../../assets/img/icons/arrow-left.png";
import arrowRight from "../../assets/img/icons/arrow-right.png";

import Button from "../Button";
import GalleryImages from "../GalleryImages";

// Компонент Gallery - галерея изображений с кнопками для переключения

// Вложенные компоненты
// GalleryImages - изображения для галереи
// пропс images - принимает список объектов с изображениями
// пропс extraClass - позволяет переносить изображения на новую строку при переполнении
// brandsImageList - список брендов для отображения в галерее, берется из глобального хранилища store

// При разрешении окна до 768px галерея брендов скрывается и появляется кнопка show_brands_button для раскрытия/сокрытия галереи
function showBrands() {
    document
        .querySelector(".gallery__container")
        .classList.toggle("show_gallery");
}
const Gallery = () => {
    const brandsImageList = useSelector(selectBrands);
    const dispatch = useDispatch();

    const gallery = (
        <div className={styles.gallery}>
            <Button
                value="Show brands"
                handler={showBrands}
                extraclass={styles.show_brands_button}
            />
            <div className={styles.gallery__container}>
                <button
                    type="button"
                    className={styles.leftSide}
                    onClick={() => dispatch(shiftLeft())}
                >
                    <img
                        src={arrowLeft}
                        alt="arrow-left"
                        className={styles.arrow}
                    />
                </button>
                <GalleryImages images={brandsImageList} extraClass="" />
                <button
                    type="button"
                    className={styles.rightSide}
                    onClick={() => dispatch(shiftRight())}
                >
                    <img
                        src={arrowRight}
                        alt="arrow-right"
                        className={styles.arrow}
                    />
                </button>
            </div>
        </div>
    );
    return gallery;
};

export default Gallery;
