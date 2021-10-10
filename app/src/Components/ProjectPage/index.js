import React, { Component } from 'react';
import "./style.css"
import Header from '../Header'

const projectsJson = require("../../Data/projects.json")

class ProductPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const projectId = this.props.match.params.id;
    const project = projectsJson.projects.find((project) => {
      if (project.id == projectId) {
        return true;
      } else {
        return false;
      }
    })

    this.setState({
      project: project
    })
  }

  render() {
    if ( this.state.project )
    {
      let demoLink = "";
      let gitLink = "";

      if ( this.state.project.demoUrl ) {
          demoLink = <a href={this.state.project.demoUrl} className="button">See it Live</a>
      }

      if ( this.state.project.gitUrl ) {
          gitLink = <a href={this.state.project.gitUrl} className="button">Github Repo</a>
      }

      return (
        <div className="project-page">

          <div className="project-page-writing content-padding">
            <h1>{this.state.project.title}</h1>
            <img className="project-image" src={"/" + this.state.project.heroImage} alt="project Image"  />
            <p>{this.state.project.description}</p>
          </div>

          <div className="button-container content-padding">
            {demoLink}
            {gitLink}
          </div>

          <section className="project-page-section content-padding">
            <h2>Specs</h2>
            <hr />

            <div className="tech-specs-container">
              <div className="toolbox-component">
                <h3>Tech</h3>
                <ul>
                  {this.state.project.techSpecs.map((item)=> {
                  return <li>{item}</li>
                  })}
                </ul>
              </div>

              <div className="toolbox-component">
                <h3>Toolbox</h3>
                <ul>
                  {this.state.project.toolBox.map((item) => {
                  return <li>{item}</li>
                  })}
                </ul>
              </div>

              <div className="toolbox-component">
                <h3>More</h3>
                <ul>
                  {this.state.project.more.map((item) => {
                  return <li>{item}</li>
                  })}
                </ul>
              </div>
            </div>
          </section>
        </div>
      )
    } else {
      return (
        <div>NO PROJECT FOUND</div>
      )
    }
  }
}


export default ProductPage
