import React from "react";
import "./style.css";
import locImg from "../../assets/img/icons/location.png";

// Компонент GalleryImages - изображения для галереи
// пропс images - принимает из Gallery список объектов с изображениями
// пропс extraClass - позволяет переносить изображения на новую строку при переполнении

const GalleryImages = ({ images, extraClass }) => {
    const galleryImages = (
        <div className={`galleryImages ${extraClass}`}>
            {images.map((item) => {
                const div = (
                    <div
                        key={item.id}
                        className={`gallery__item ${
                            item.visible ? "" : "hiddenItem"
                        }`}
                    >
                        <div className="gallery__item_image">
                            <img src={item.src} alt={item.alt} />
                        </div>
                        {item.location && (
                            <div className="location">
                                <img
                                    src={locImg}
                                    alt="Location"
                                    className="iconPng"
                                />
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
