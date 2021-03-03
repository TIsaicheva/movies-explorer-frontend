import React from "react";
import { Link } from "react-router-dom";

import "./PageNotFound.css";

function PageNotFound() {
    return(
        <section className="notfound">
            <h3 className="notfound__title">404</h3>
            <span className="notfound__text">Страница не найдена</span>
            <Link className="notfound__link" to="/">Назад</Link>
        </section>
    );
}

export default PageNotFound;