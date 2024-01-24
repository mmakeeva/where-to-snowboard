import React from "react";
import { Link } from "react-router-dom";

import styles from "./style.module.scss";

import avatarPng from "../../assets/img/icons/user.png";

// Avatar - аватар пользователя с формой входа и формой регистрации

const Avatar = () => {
    const avatar = (
        <div className={styles.avatar}>
            <div className={styles.avatar__container}>
                <Link to="/avatar">
                    <img src={avatarPng} alt="Avatar" />
                </Link>
            </div>
        </div>
    );

    return avatar;
};

export default Avatar;
