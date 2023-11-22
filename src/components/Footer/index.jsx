import React from "react";
import "./style.css";

import facebookImg from "../../assets/img/icons/facebook.png";
import instagramImg from "../../assets/img/icons/instagram.png";
import twitterImg from "../../assets/img/icons/twitter.png";

const list0 = [
    {
        id: 0,
        value: "How it works",
    },
    {
        id: 1,
        value: "Contact Support",
    },
    {
        id: 2,
        value: "Privacy Policy",
    },
    {
        id: 3,
        value: "FAQ",
    },
];

const list1 = [
    {
        id: 0,
        value: "About",
    },
    {
        id: 1,
        value: "Blog",
    },
    {
        id: 2,
        value: "Contact",
    },
    {
        id: 3,
        value: "Jobs",
    },
];

const Footer = () => {
    const footer = (
        <footer className="footer">
            <div className="footer__top">
                <div className="footer__container _container">
                    <div className="soical">
                        <h3>FOLLOW US</h3>
                        <div className="social__icons">
                            <a
                                href="http://facebook.com/"
                                className="social_logo"
                            >
                                <img src={facebookImg} alt="facebook_image" />
                            </a>
                            <a
                                href="http://instagram.com/"
                                className="social_logo"
                            >
                                <img src={instagramImg} alt="instagram_image" />
                            </a>
                            <a
                                href="http://twitter.com/"
                                className="social_logo"
                            >
                                <img src={twitterImg} alt="twitter_image" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__container _container">
                <div className="footer__middle">
                    <div className="middle__column">
                        <h3>HELP AND ADVICE</h3>
                        <ul>
                            {list0.map((element) => (
                                <li key={element.id}>
                                    <a
                                        href="http://localhost:3000/"
                                        className="link"
                                    >
                                        {element.value}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="middle__column">
                        <h3>COMPANY</h3>
                        <ul>
                            {list1.map((element) => (
                                <li key={element.id}>
                                    <a
                                        href="http://localhost:3000/"
                                        className="link"
                                    >
                                        {element.value}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="middle__column">
                        <div className="middle__column-item">
                            <span className="middle__column__text">Phone</span>
                            <a
                                href="tel:+79001234567"
                                className="middle__column__value"
                            >
                                +7 900 1234567
                            </a>
                        </div>
                        <div className="middle__column-item">
                            <span className="middle__column__text">
                                Address
                            </span>
                            <address className="middle__column__value">
                                Zelenograd
                            </address>
                        </div>
                        <div className="middle__column-item">
                            <span className="middle__column__text">Mail</span>
                            <a
                                href="mailto:gmail@gmail.com"
                                className="middle__column__value"
                            >
                                gmail@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <small className="copyright">
                        &copy;&nbsp;2023@WhereToSnowboard. All rights reserved
                    </small>
                </div>
            </div>
        </footer>
    );

    return footer;
};

export default Footer;
