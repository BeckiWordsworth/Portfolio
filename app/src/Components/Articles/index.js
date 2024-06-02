import React from "react";
import "./style.css";
import Grid from "@mui/material/Grid";
import ArticleCard from "../ArticleCard";

const articlesJson = require("../../Data/articles.json");

class ArticlePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleSubmit = () => {};

  queryChange = (evt) => {
    this.setState({ query: evt.target.value });
  };

  render() {
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
  }
}

export default ArticlePage;
