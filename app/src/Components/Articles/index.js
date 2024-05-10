import React from "react";
import "./style.css";
import ArticleCard from "../ArticleCard";

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
    return <ArticleCard></ArticleCard>;
  }
}

export default ArticlePage;
