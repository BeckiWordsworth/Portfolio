import React, { Component } from "react";
import "./style.css";
import ProjectsPreview from "../ProjectPreviews";
import Skills from "../Skills";

const projectsJson = require("../../Data/projects.json");

class ProjectPage extends React.Component {
  render() {
    return (
      <header className="page-header">
        <div className="logo">
          <span className="page-title">Becki Wordsworth</span>
          <br />
          <span className="page-subtitle">Software Developer &amp; Engineering Leader</span>
        </div>
        <div className="navigation">
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about-me/">About Me</a>
              </li>
              <li>
                <a href="/my-projects/">Projects</a>
              </li>
              <li>
                <a href="/articles/">Articles</a>
              </li>
              <li>
                <a href="/phd/">PhD</a>
              </li>
              <li>
                <a href="/contact-me/">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="social">
          <ul>
            <li>
              <a href="https://twitter.com/BeckiWordsworth" target="_blank">
                <img src="/twitter-64.png" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/beckiwordsworth/" target="_blank">
                <img src="/linkedin-64.png" />
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default ProjectPage;
