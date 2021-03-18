import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h4 className="portfolio__title">Портфолио</h4>
        <ul className="portfolio__links">
          <li>
            <a
              className="portfolio__link"
              href="https://github.com/TIsaicheva/how-to-learn"
              rel="noreferrer"
              target="_blank"
            >
              Статичный сайт
              <div className="portfolio__icon"></div>
            </a>
          </li>
          <li>
            <a
              className="portfolio__link"
              href="https://tisaicheva.github.io/russian-travel/index.html"
              rel="noreferrer"
              target="_blank"
            >
              Адаптивный сайт
              <div className="portfolio__icon"></div>
            </a>
          </li>
          <li>
            <a
              className="portfolio__link portfolio__link_last"
              href="https://tisaicheva.github.io/mesto/"
              rel="noreferrer"
              target="_blank"
            >
              Одностраничное приложение
              <div className="portfolio__icon"></div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
