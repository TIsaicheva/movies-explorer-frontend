import React from "react";
import "./Article.css";

function Article({ title, text, articleClass, titleModifyClass, subtitleModifyClass }) {
  return (
    <article className={articleClass} >
      <h3 className={`article__content-title ${titleModifyClass}`}>{title}</h3>
      <p className={`article__content-subtitle ${subtitleModifyClass}`}>{text}</p>
    </article>
  );
}

export default Article;
