import React, { Component } from "react";
import "./style.css";

class Skills extends React.Component {
  render() {
    return (
      <div className="skills-component">
        <div className="coding-skills">
          <h3>Coding</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>Javascript (ES6+)</li>
            <li>React</li>
            <li>Redux</li>
            <li>Node</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Docker</li>
            <li>ElasticSearch</li>
            <li>Python</li>
            <li>Swift</li>
          </ul>
        </div>

        <div className="toolbox-skills">
          <h3>Toolbox</h3>
          <ul>
            <li>Git</li>
            <li>Jira</li>
            <li>SQL</li>
            <li>Trello</li>
            <li>Slack</li>
          </ul>
        </div>

        <div className="more-skills">
          <h3>Other</h3>
          <ul>
            <li>Research</li>
            <li>Leadership</li>
            <li>Data Analysis</li>
            <li>Machine Learning</li>
            <li>Data Visualisation</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Skills;
