import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./style.css";

const projectsJson = require("../../Data/projects.json");

const ProductPage = () => {
  const [project, setProject] = useState("");
  const { id } = useParams();

  console.log(projectsJson);

  console.log(id);

  useEffect(() => {
    console.log(projectsJson);

    const newProject = projectsJson.projects.find((proj) => {
      return proj.id == id;
    });

    console.log({ newProject });
    setProject(newProject);
  }, []);

  console.log({ project });

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
        <img className="project-image" src={"/" + project.heroImage} alt="project Image" />
        <p>{project.description}</p>
      </div>

      <div className="button-container content-padding">
        {demoLink}
        {gitLink}
      </div>

      <section className="project-page-section content-padding">
        <h2>Specs</h2>
        <hr />
      </section>
    </div>
  );
};

export default ProductPage;

//       return (
// <div className="project-page">
//   <div className="project-page-writing content-padding">
//     <h1>{this.state.project.title}</h1>
//     <img className="project-image" src={"/" + this.state.project.heroImage} alt="project Image" />
//     <p>{this.state.project.description}</p>
//   </div>

//   <div className="button-container content-padding">
//     {demoLink}
//     {gitLink}
//   </div>

//   <section className="project-page-section content-padding">
//     <h2>Specs</h2>
//     <hr />

//     <div className="tech-specs-container">
//       <div className="toolbox-component">
//         <h3>Tech</h3>
//         <ul>
//           {this.state.project.techSpecs.map((item) => {
//             return <li>{item}</li>;
//           })}
//         </ul>
//       </div>

//       <div className="toolbox-component">
//         <h3>Toolbox</h3>
{
  /* <ul>
  {this.state.project.toolBox.map((item) => {
    return <li>{item}</li>;
  })}
</ul>; */
}
//       </div>

//       <div className="toolbox-component">
//         <h3>More</h3>
//         <ul>
//           {this.state.project.more.map((item) => {
//             return <li>{item}</li>;
//           })}
// //         </ul>
//       </div>
//     </div>
//   </section>
// </div>
// //       );
//     } else {
//       return <div>NO PROJECT FOUND</div>;
//     }
//     );
//   };

// export default ProductPage;
