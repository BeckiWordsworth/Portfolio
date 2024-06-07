import React from "react";
import "./style.css";

const ProjectPreview = () => {
  return (
    <div
      className="project-preview"
      onClick={() => {
        window.location.href = "/project/" + this.props.id;
      }}
    >
      <div className="project-preview-inner">
        <div className="project-preview-top">
          <img src={"/" + this.props.icon} />
          <p>{this.props.name}</p>
        </div>
        <div className="project-preview-bottom">{this.props.veryShortDescription}</div>
      </div>
    </div>
  );
};

export default ProjectPreview;
