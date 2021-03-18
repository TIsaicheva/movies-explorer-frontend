import React from "react";
import "./Footer.css";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <h4 className="footer__tittle">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h4>
      <p className="footer__copyright">© {year}</p>
      <ul className="footer__links">
        <li>
          <a className="footer__link" href="https://praktikum.yandex.ru" rel="noreferrer" target="_blank">Яндекс.Практикум</a>
        </li>
        <li>
          <a className="footer__link" href="https://github.com" rel="noreferrer" target="_blank">Github</a>
        </li>
        <li>
          <a className="footer__link" href="https://ru-ru.facebook.com" rel="noreferrer" target="_blank">Facebook</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
