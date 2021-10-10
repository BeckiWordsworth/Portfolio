import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Landing from "./Components/Landing";
import ProjectPage from "./Components/ProjectPage";
import About from "./Components/About";
import PageNotFound from "./Components/PageNotFound";
import ProjectPageTech from "./Components/ProjectPageTech";
import ContactPage from "./Components/ContactPage";
import PhDPage from "./Components/Phd";

const projectsJson = require("./Data/projects.json");

class App extends Component {
  render() {
    return (
      <Router>
        <div className="page-container">
          <Header />

          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/about-me/" component={About} />
            <Route path="/project/:id" component={ProjectPage} />
            <Route path="/my-projects/" component={ProjectPageTech} />
            <Route path="/phd/" component={PhDPage} />
            <Route path="/contact-me/" component={ContactPage} />

            <Route component={PageNotFound} />
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
