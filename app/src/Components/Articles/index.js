import React from "react";
import "./style.css";

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
    return <div>Articles</div>;
  }
}

export default ArticlePage;
