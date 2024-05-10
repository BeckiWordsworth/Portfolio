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
    return (
      <div class="row">
        <div class="column">
          <div class="card">..</div>
        </div>
        <div class="column">
          <div class="card">..</div>
        </div>
        <div class="column">
          <div class="card">..</div>
        </div>
        <div class="column">
          <div class="card">..</div>
        </div>
      </div>
    );
  }
}

export default ArticlePage;
