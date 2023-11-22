import React from "react";
import { useRouteError } from "react-router-dom";
import "./style.css";

const ErrorPage = () => {
    const error = useRouteError();

    const errorElem = (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
    return errorElem;
};

export default ErrorPage;
