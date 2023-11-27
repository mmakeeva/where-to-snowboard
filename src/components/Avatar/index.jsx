import React from "react";

import cn from "classnames";
import styles from "./style.module.css";

import Login from "../Login";
import Close from "../Close";
import Button from "../Button";
import Registration from "../Registration";

import avatarPng from "../../assets/img/icons/user.png";

// Открывает превью для выбора входа/регистрации при клике по аватару
const avatarClickHandler = () => {
    document
        .querySelector(`.${styles["enter-popup"]}`)
        .classList.toggle(styles["show-popup"]);
};

// Открывает модальное окно
const showPopUp = (event) => {
    const element0 = document.querySelector(`.${styles["login-popup"]}`);
    const element1 = document.querySelector(`.${styles["registration-popup"]}`);
    const overlay = document.querySelector(".overlay");

    if (event.target.classList.value.includes("login"))
        element0.classList.add(styles["show-popup"]);

    if (event.target.classList.value.includes("registration"))
        element1.classList.add(styles["show-popup"]);

    overlay.classList.add("show-overlay");
};

// Закрывает модальное окно
const closePopUp = (event) => {
    const element0 = document.querySelector(`.${styles["login-popup"]}`);
    const element1 = document.querySelector(`.${styles["registration-popup"]}`);
    const overlay = document.querySelector(".overlay");
    const element2 = document.querySelector(`.${styles["enter-popup"]}`);

    if (event.target.closest(`.${styles["login-popup"]}`))
        element0.classList.remove(styles["show-popup"]);

    if (event.target.closest(`.${styles["registration-popup"]}`))
        element1.classList.remove(styles["show-popup"]);

    if (event.target.closest(`.${styles["enter-popup"]}`))
        element2.classList.remove(styles["show-popup"]);

    overlay.classList.remove("show-overlay");
};

// Avatar - аватар пользователя с формой входа и формой регистрации
// login-popup - форма входа с логином и паролем для зарегистрированных пользователей
// registration-popup - форма с полями для регистрации

// Вложенные компоненты
// Checkbox - чекбокс для формы регистрации

const Avatar = () => {
    const avatar = (
        <div>
            <div
                className={cn(
                    styles["login-popup"],
                    styles["login-popup_position_c"]
                )}
            >
                <p>Welcome back!</p>
                <Login />
                <Close handler={closePopUp} />
            </div>
            <div
                className={cn(
                    styles["registration-popup"],
                    styles["registration-popup_position_c"]
                )}
            >
                <p>Fill the registration form</p>
                <Registration />
                <Close handler={closePopUp} />
            </div>
            <div className={styles.avatar}>
                <div className={styles.avatar__container}>
                    <button type="button" onClick={avatarClickHandler}>
                        <img src={avatarPng} alt="Avatar" />
                    </button>
                    <div
                        className={cn(
                            styles["enter-popup"],
                            styles["enter-popup_position_m"]
                        )}
                    >
                        <Close handler={closePopUp} />
                        <Button
                            value="Login"
                            handler={showPopUp}
                            extraclass="login button_width_150"
                        />
                        <Button
                            value="Registration"
                            handler={showPopUp}
                            extraclass="registration button_width_150"
                        />
                    </div>
                </div>
            </div>
        </div>
    );

    return avatar;
};

export default Avatar;
