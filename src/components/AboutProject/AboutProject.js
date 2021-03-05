import React from "react";
import Heading from "../Heading/Heading";
import Article from '../Article/Article';
import "./AboutProject.css";

function AboutProject() {
  return (
    <section id="aboutProject" className="aboutProject">
      <div className="aboutProject__container">
        <Heading text="О проекте" />
        <article className="aboutProject__content">
          <Article
            title="Дипломный проект включал 5 этапов"
            text="Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки."
            articleClass="aboutProject__article"
            titleModifyClass="aboutProject__article_title"
            subtitleModifyClass="aboutProject__article_subtitle"
          />
          <Article
            title="На выполнение диплома ушло 5 недель"
            text="У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься."
            articleClass="aboutProject__article"
            titleModifyClass="aboutProject__article_title"
            subtitleModifyClass="aboutProject__article_subtitle"
          />
        </article>
        <article className="aboutProject__diagram">
          <article className="aboutProject__diagram-column-back">
            <h4 className="aboutProject__diagram-title aboutProject__diagram-title-back">
              1 неделя
            </h4>
            <p className="aboutProject__diagram-subtitle">Back-end</p>
          </article>
          <article className="aboutProject__diagram-column-front">
            <h4 className="aboutProject__diagram-title aboutProject__diagram-title-front">
              4 недели
            </h4>
            <p className="aboutProject__diagram-subtitle">Front-end</p>
          </article>
        </article>
      </div>
    </section>
  );
}

export default AboutProject;
