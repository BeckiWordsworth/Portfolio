import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

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
import ArticlePage from "./Components/Articles";
import TalksPage from "./Components/Articles";

const projectsJson = require("./Data/projects.json");

class App extends Component {
  render() {
    return (
      <Router>
        <div className="page-container">
          <Header />

          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about-me/" element={<About />} />
            <Route path="/project/:id" element={<ProjectPage />} />
            <Route path="/my-projects/" element={<ProjectPageTech />} />
            <Route path="/articles/" element={<ArticlePage />} />
            <Route path="/talks/" element={<TalksPage />} />
            <Route path="/phd/" element={<PhDPage />} />
            <Route path="/contact-me/" element={<ContactPage />} />

            <Route element={<PageNotFound />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
