import React from "react";
import "./style.css";

import ProjectPreview from "../ProjectPreview";
import "./style.css";

const projectsJson = require("../../Data/projects.json");

class ProjectPageTech extends React.Component {
  render() {
    return (
      <div className="TechPageContainer">
        <section className="landing-section my-projects">
          <h2>Selected Projects</h2>
          <hr />

          <div className="project-container content-padding">
            {projectsJson.projects.map(project => {
              return (
                <ProjectPreview
                  id={project.id}
                  name={project.title}
                  image={project.previewImage}
                  shortDescription={project.shortDescription}
                  Description={project.Description}
                  deliveryTime={project.deliveryTime}
                  gitURL={project.gitURL}
                />
              );
            })}
          </div>

          <div className="button-container-tech">
            <a
              href="https://github.com/BeckiWordsworth"
              className="button-tech"
            >
              Visit Github
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default ProjectPageTech;
