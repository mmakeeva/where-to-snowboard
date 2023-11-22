import React from "react";
import "./style.css";

import Checkbox from "../Checkbox";
import avatarPng from "../../assets/img/icons/user.png";

// Открывает превью для выбора входа/регистрации при клике по аватару
const avatarClickHandler = (event) => {
    document.querySelector(".enterForm").classList.toggle("showPopUp");
};

// Открывает модальное окно
const loginClickHandler = (event) => {
    const element0 = document.querySelector(".loginPopUp");
    const element1 = document.querySelector(".registrationPopUp");
    const overlay = document.querySelector(".overlay");

    if (event.target.classList.value.includes("enter"))
        element0.classList.add("showPopUp");

    if (event.target.classList.value.includes("registration"))
        element1.classList.add("showPopUp");

    overlay.classList.add("showOverlay");
};

// Закрывает модальное окно
const closePopUp = (event) => {
    const element0 = document.querySelector(".loginPopUp");
    const element1 = document.querySelector(".registrationPopUp");
    const overlay = document.querySelector(".overlay");

    if (event.target.closest(".loginPopUp"))
        element0.classList.remove("showPopUp");

    if (event.target.closest(".registrationPopUp"))
        element1.classList.remove("showPopUp");

    overlay.classList.remove("showOverlay");
};

// Avatar - аватар пользователя с формой входа и формой регистрации
// loginPopUp - форма входа с логином и паролем для зарегистрированных пользователей
// registrationPopUp - форма с полями для регистрации

// Вложенные компоненты
// Checkbox - чекбокс для формы регистрации

const Avatar = () => {
    const avatar = (
        <div>
            <div className="loginPopUp">
                <p>Welcome back!</p>
                <form className="loginForm">
                    <div>
                        <label htmlFor="user_email" className="loginLabel">
                            Email
                            <input
                                type="email"
                                id="user_email"
                                className="loginInput"
                                autoComplete="off"
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="user_pass" className="loginLabel">
                            Password
                            <input
                                type="password"
                                id="user_pass"
                                className="loginInput"
                                autoComplete="off"
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Login"
                            className="loginInput loginSubmit"
                        />
                    </div>
                </form>
                <div
                    className="close"
                    role="button"
                    onClick={closePopUp}
                    aria-hidden="true"
                >
                    <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20.63 10.315C20.63 10.2335 20.6291 10.1523 20.6272 10.0712C20.4972 4.49574 15.9212 0 10.315 0C4.62737 0 0 4.62737 0 10.315C0 15.9721 4.57776 20.5802 10.2234 20.6296C10.2539 20.6299 10.2844 20.63 10.315 20.63C10.3456 20.63 10.3761 20.6299 10.4066 20.6296C16.0522 20.5802 20.63 15.9721 20.63 10.315ZM14.2303 13.1855C14.1879 13.0885 14.1265 13.0009 14.0497 12.928L11.4373 10.315L14.0497 7.70203C14.1922 7.55202 14.2705 7.35226 14.2679 7.14536C14.2652 6.93846 14.1819 6.74077 14.0355 6.59446C13.8892 6.44814 13.6915 6.36477 13.4846 6.36212C13.2777 6.35947 13.078 6.43775 12.928 6.58028L10.315 9.19275L7.70203 6.58028C7.55202 6.43775 7.35226 6.35947 7.14536 6.36212C6.93846 6.36477 6.74077 6.44814 6.59446 6.59446C6.44814 6.74077 6.36477 6.93846 6.36212 7.14536C6.35947 7.35226 6.43775 7.55202 6.58028 7.70203L9.19275 10.315L6.58028 12.928C6.43775 13.078 6.35947 13.2777 6.36212 13.4846C6.36477 13.6915 6.44814 13.8892 6.59446 14.0355C6.74077 14.1819 6.93846 14.2652 7.14536 14.2679C7.35226 14.2705 7.55202 14.1922 7.70203 14.0497L10.315 11.4373L12.928 14.0497C13.0009 14.1265 13.0885 14.1879 13.1855 14.2303C13.2826 14.2727 13.3872 14.2952 13.4931 14.2966C13.599 14.298 13.7041 14.2781 13.8022 14.2382C13.9003 14.1983 13.9894 14.1392 14.0643 14.0643C14.1392 13.9894 14.1983 13.9003 14.2382 13.8022C14.2781 13.7041 14.298 13.599 14.2966 13.4931C14.2953 13.3872 14.2727 13.2826 14.2303 13.1855Z"
                            fill="#5E5E5E"
                        />
                    </svg>
                </div>
            </div>
            <div className="registrationPopUp">
                <p>Fill the registration form</p>
                <form className="loginForm">
                    <div>
                        <label htmlFor="user_email_regs" className="loginLabel">
                            Email
                            <input
                                type="email"
                                id="user_email_regs"
                                className="loginInput"
                                autoComplete="off"
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="user_name_regs" className="loginLabel">
                            First name
                            <input
                                type="text"
                                id="user_name_regs"
                                className="loginInput"
                                autoComplete="off"
                                placeholder="Ivan"
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label
                            htmlFor="user_surname_regs"
                            className="loginLabel"
                        >
                            Last name
                            <input
                                type="text"
                                id="user_surname_regs"
                                className="loginInput"
                                autoComplete="off"
                                placeholder="Ivanov"
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="user_pass_regs" className="loginLabel">
                            Password
                            <input
                                type="password"
                                id="user_pass_regs"
                                className="loginInput"
                                autoComplete="off"
                                required
                            />
                        </label>
                    </div>
                    <div className="checkbox">
                        <Checkbox
                            filter={{
                                value: "isSigned",
                                name: "update",
                                label: "Sign me up for email updates from WhereToSnowboard",
                            }}
                            handler={() => {}}
                        />
                    </div>
                    <div className="checkbox">
                        <Checkbox
                            filter={{
                                value: "isAgree",
                                name: "privacy",
                                label: "I agree to the Privacy Notice",
                            }}
                            handler={() => {}}
                        />
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Send"
                            className="loginInput loginSubmit"
                        />
                    </div>
                </form>
                <div
                    className="close"
                    role="button"
                    onClick={closePopUp}
                    aria-hidden="true"
                >
                    <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20.63 10.315C20.63 10.2335 20.6291 10.1523 20.6272 10.0712C20.4972 4.49574 15.9212 0 10.315 0C4.62737 0 0 4.62737 0 10.315C0 15.9721 4.57776 20.5802 10.2234 20.6296C10.2539 20.6299 10.2844 20.63 10.315 20.63C10.3456 20.63 10.3761 20.6299 10.4066 20.6296C16.0522 20.5802 20.63 15.9721 20.63 10.315ZM14.2303 13.1855C14.1879 13.0885 14.1265 13.0009 14.0497 12.928L11.4373 10.315L14.0497 7.70203C14.1922 7.55202 14.2705 7.35226 14.2679 7.14536C14.2652 6.93846 14.1819 6.74077 14.0355 6.59446C13.8892 6.44814 13.6915 6.36477 13.4846 6.36212C13.2777 6.35947 13.078 6.43775 12.928 6.58028L10.315 9.19275L7.70203 6.58028C7.55202 6.43775 7.35226 6.35947 7.14536 6.36212C6.93846 6.36477 6.74077 6.44814 6.59446 6.59446C6.44814 6.74077 6.36477 6.93846 6.36212 7.14536C6.35947 7.35226 6.43775 7.55202 6.58028 7.70203L9.19275 10.315L6.58028 12.928C6.43775 13.078 6.35947 13.2777 6.36212 13.4846C6.36477 13.6915 6.44814 13.8892 6.59446 14.0355C6.74077 14.1819 6.93846 14.2652 7.14536 14.2679C7.35226 14.2705 7.55202 14.1922 7.70203 14.0497L10.315 11.4373L12.928 14.0497C13.0009 14.1265 13.0885 14.1879 13.1855 14.2303C13.2826 14.2727 13.3872 14.2952 13.4931 14.2966C13.599 14.298 13.7041 14.2781 13.8022 14.2382C13.9003 14.1983 13.9894 14.1392 14.0643 14.0643C14.1392 13.9894 14.1983 13.9003 14.2382 13.8022C14.2781 13.7041 14.298 13.599 14.2966 13.4931C14.2953 13.3872 14.2727 13.2826 14.2303 13.1855Z"
                            fill="#5E5E5E"
                        />
                    </svg>
                </div>
            </div>
            <div className="avatar">
                <button
                    type="button"
                    onClick={(event) => avatarClickHandler(event)}
                    className="avatar__image"
                >
                    <img src={avatarPng} alt="Avatar" />
                </button>
                <div className="enterForm">
                    <button
                        type="button"
                        className="login__ref enter"
                        onClick={(event) => loginClickHandler(event)}
                    >
                        Login
                    </button>
                    <button
                        type="button"
                        className="login__ref registration"
                        onClick={(event) => loginClickHandler(event)}
                    >
                        Registration
                    </button>
                </div>
            </div>
        </div>
    );

    return avatar;
};

export default Avatar;
