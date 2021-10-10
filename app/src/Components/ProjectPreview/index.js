import React from "react"
import "./style.css"

class ProjectPreview extends React.Component {

  render() {
    return (
      <div className="project-preview">
        <div className="project-preview-inner">
          <div className="project-preview-image">
            <a href={"/project/" + this.props.id}><img src={"/" + this.props.image} alt="project Image" /></a>
          </div>
          <div className="project-preview-summary">
            <a href={"/project/" + this.props.id}><span class="project-title">{this.props.name}</span></a>
            <p class="project-description">{this.props.shortDescription}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectPreview
