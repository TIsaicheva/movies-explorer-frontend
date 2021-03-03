import React from "react";
import Heading from "../Heading/Heading";
import myPthoto from '../../images/my_photo.jpg'
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="aboutMe">
      <div className="aboutMe__container">
        <Heading text="Студент" />
        <article className="aboutMe__content">
          <h2 className="aboutMe__title">Татьяна</h2>
          <p className="aboutMe__subtitle">Фронтенд-разработчик, 35 лет</p>
          <p className="aboutMe__description">
            Я родилась и живу в Нижнем Новгороде, закончила ГБПОУ Нижегородский
            авиационный технический колледж по специальности
            экономист-бухгалтер. Я люблю слушать музыку, люблю читать
            приключенческую литературу, увлекаюсь изучение немецкого языка. С
            2013 года работаю в IT-сфере специалистом по тестированию
            программного обеспечения. После того, как я прошла курс по
            веб-разработке, планирую работать и развиваться в новом направлении.
          </p>
          <ul className="aboutMe__links">
            <li>
              <a className="aboutMe__link" href="https://ru-ru.facebook.com" rel="noreferrer" target="_blank">Facebook</a>
            </li>
            <li>
              <a className="aboutMe__link" href="https://github.com" rel="noreferrer" target="_blank">Github</a>
            </li>
          </ul>
        </article>
        <img
          alt="Фотография Исаичевой Татьяны"
          src={myPthoto}
          className="aboutMe__photo"
        />
      </div>
    </section>
  );
}

export default AboutMe;