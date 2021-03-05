import React from "react";
import Heading from "../Heading/Heading";
import Article from '../Article/Article';
import "./Techs.css";

function Techs() {
  return (
    <section className="techs">
      <div className="techs__container">
        <Heading text="Технологии" />
        <Article
          title="7 технологий"
          text="На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте."
          articleClass="techs__article"
          titleModifyClass="techs__article_title"
          subtitleModifyClass="techs__article_subtitle"
        />
        <ul className="techs__list">
            <li className="techs__list-item">HTML</li>
            <li className="techs__list-item">CSS</li>
            <li className="techs__list-item">JS</li>
            <li className="techs__list-item">React</li>
            <li className="techs__list-item">Git</li>
            <li className="techs__list-item">Express.js</li>
            <li className="techs__list-item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
