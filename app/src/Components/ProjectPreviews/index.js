import React from "react";
import ProjectPreview from "../ProjectPreview";
import "./style.css";

const projectsJson = require("../../Data/projects.json");

const ProjectPreviews = () => {
  return (
    <div className="project-container">
      {projectsJson.projects.map((project) => {
        return (
          <ProjectPreview
            id={project.id}
            name={project.title}
            image={project.previewImage}
            icon={project.icon}
            shortDescription={project.shortDescription}
            veryShortDescription={project.veryShortDescription}
            Description={project.Description}
            deliveryTime={project.deliveryTime}
          />
        );
      })}
    </div>
  );
};

export default ProjectPreviews;
