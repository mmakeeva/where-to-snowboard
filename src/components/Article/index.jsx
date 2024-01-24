import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import cn from "classnames";
import styles from "./style.module.scss";

import { selectArticles } from "../../store/store";

export const FullArticle = () => {
    const { id } = useParams();
    const articlesList = useSelector(selectArticles);
    const article = articlesList.filter((elem) => elem.id === Number(id))[0];

    const fullArticle = (
        <div className="_container">
            <Article
                key={article.id}
                id={article.id}
                title={article.title}
                content={article.content}
                date={article.date}
                full
            />
        </div>
    );

    return fullArticle;
};

const Article = ({ id, title, date, content, full = false }) => {
    const article = (
        <article
            className={
                full ? cn(styles.article_full, styles.article) : styles.article
            }
        >
            <h3 className={styles.article__title}>{title}</h3>
            <span className={styles.article__date}>
                {new Date(Date.parse(date)).toDateString()}
            </span>
            <p className={styles.article__content}>{content}</p>
            {!full && (
                <>
                    <span>...</span>
                    <Link
                        to={`article/${id}`}
                        className={styles.article__button}
                    >
                        Continue
                    </Link>
                </>
            )}
        </article>
    );

    return article;
};

const ArticleList = () => {
    const articlesList = useSelector(selectArticles);

    const articles = (
        <div className={cn(styles.article_list, "_container")}>
            {articlesList.map(({ id, title, date, content }) => (
                <Article
                    key={id}
                    id={id}
                    title={title}
                    content={content}
                    date={date}
                />
            ))}
        </div>
    );

    return articles;
};

export default ArticleList;
