import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import styles from "./style.module.css";

import searchImg from "../../assets/img/icons/Search.png";
import Icon from "../../UI/Icon";
import { searchArticle } from "../../store/store";

// Компонент SearchForm - форма поиска
const SearchForm = () => {
    const [searchValue, setSearchValue] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onChangeHandler = (event) => {
        setSearchValue(event.target.value);
    };

    const onSearchArticles = (e) => {
        e.preventDefault();
        dispatch(searchArticle(searchValue));
        navigate("/search/articles");
    };

    const search = (
        <div className={styles.search}>
            <form className={styles["search-form"]} onSubmit={onSearchArticles}>
                <button
                    type="submit"
                    aria-label="Search"
                    className={styles["search-form__icon"]}
                >
                    <Icon src={searchImg} alt="search" />
                </button>

                <input
                    className="input"
                    type="text"
                    value={searchValue}
                    onChange={onChangeHandler}
                    placeholder="Пример: роза хутор"
                    name="search-form__input"
                />
            </form>
        </div>
    );
    return search;
};

export default SearchForm;
