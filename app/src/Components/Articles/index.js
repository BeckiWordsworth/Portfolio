import React from "react";
import "./style.css";
import ArticleCard from "../ArticleCard";

const articlesJson = require("../../Data/articles.json");

const ArticlePage = () => {
  return (
    <div className="TechPageContainer">
      <section className="landing-section my-projects">
        <h2>Selected Articles</h2>
        <hr />

        <div className="project-container content-padding">
          {articlesJson.articles.map((article) => {
            return (
              <ArticleCard
                id={article.id}
                title={article.title}
                previewImage={article.previewImage}
                previewText={article.previewText}
                mediumURL={article.mediumUrl}
              />
            );
          })}
        </div>

        <div className="button-container-tech">
          <a href="https://medium.com/@becki.wordsworth" target="_blank" className="button-tech">
            Visit Medium
          </a>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;
