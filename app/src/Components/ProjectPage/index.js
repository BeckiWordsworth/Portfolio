import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./style.css";

const projectsJson = require("../../Data/projects.json");

const ProjectPage = () => {
  const [project, setProject] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const newProject = projectsJson.projects.find((proj) => {
      return proj.id == id;
    });

    setProject(newProject);
  }, []);

  if (!project) {
    return <div>Loading...</div>;
  }

  let demoLink = "";
  let gitLink = "";

  if (project) {
    if (project.demoUrl) {
      demoLink = (
        <a href={project.demoUrl} className="button">
          See it Live
        </a>
      );
    }

    if (project.gitUrl) {
      gitLink = (
        <a href={project.gitUrl} className="button">
          Github Repo
        </a>
      );
    }
  }

  return (
    <div className="project-page">
      <div className="project-page-writing content-padding">
        <h1>{project.title}</h1>
        <img className="project-image" src={"/" + project.heroImage} alt={project.title} />
        <p>{project.description}</p>
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
              {project.techSpecs.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
          </div>
          <div className="toolbox-component">
            <h3>Toolbox</h3>
            <ul>
              {project.toolBox.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
          </div>
          <div className="toolbox-component">
            <h3>More</h3>
            <ul>
              {project.more.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
