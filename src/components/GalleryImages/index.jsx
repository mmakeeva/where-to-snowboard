import React from "react";

import cn from "classnames";
import styles from "./style.module.scss";

import Icon from "../../UI/Icon";
import locImg from "../../assets/img/icons/location.png";

// Компонент GalleryImages - изображения для галереи
// пропс images - принимает из Gallery список объектов с изображениями
// пропс extraClass - позволяет переносить изображения на новую строку при переполнении

const GalleryImages = ({ images, extraClass }) => {
    const galleryImages = (
        <div className={cn(styles.gallery_images, styles[extraClass])}>
            {images.map((item) => {
                const divClassName = item.visible ? "" : "hiddenItem";
                const div = (
                    <div
                        key={item.id}
                        className={cn(
                            styles.gallery__item,
                            styles[divClassName]
                        )}
                    >
                        <div className={styles.gallery__item_image}>
                            <img src={item.src} alt={item.alt} />
                        </div>
                        {item.location && (
                            <div className={styles.location}>
                                <Icon src={locImg} alt="Location" />
                                <p>{item.location}</p>
                            </div>
                        )}
                    </div>
                );
                return div;
            })}
        </div>
    );
    return galleryImages;
};

export default GalleryImages;
