import React from "react"
import ProjectPreview from "../ProjectPreview"
import "./style.css"


const projectsJson = require("../../Data/projects.json")

class ProjectPreviews extends React.Component {
  render() {
    return (
      <div className="project-container">
        { projectsJson.projects.map((project) => {
            return (
              <ProjectPreview id={project.id}
                name={project.title}
                image={project.previewImage}
                shortDescription={project.shortDescription}
                Description={project.Description}
                deliveryTime={project.deliveryTime} />
              )
            }
          )
        }

      </div>
    )
  }
}

export default ProjectPreviews
