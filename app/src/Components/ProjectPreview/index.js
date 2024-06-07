import React from "react";
import "./style.css";

const ProjectPreview = ({ icon, name, id, veryShortDescription }) => {
  return (
    <div
      className="project-preview"
      onClick={() => {
        window.location.href = "/project/" + id;
      }}
    >
      <div className="project-preview-inner">
        <div className="project-preview-top">
          <img src={"/" + icon} alt="icon for project" />
          <p>{name}</p>
        </div>
        <div className="project-preview-bottom">{veryShortDescription}</div>
      </div>
    </div>
  );
};

export default ProjectPreview;
