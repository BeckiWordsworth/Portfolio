import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./style.css";

const talksJson = require("../../Data/talks.json");

const TalkPage = () => {
  const [talk, setTalk] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const newTalk = talksJson.projects.find((proj) => {
      return proj.id == id;
    });

    setTalk(newTalk);
  }, []);

  if (!talk) {
    return <div>Loading...</div>;
  }

  return (
    <div className="project-page">
      <div className="project-page-writing content-padding">
        <h1>{talk.title}</h1>
        <img className="project-image" src={"/" + talk.previewImage} alt={talk.title} />
        <p>{talk.conference}</p>
      </div>

      {/* <div className="button-container content-padding">
        {demoLink}
        {gitLink}
      </div> */}

      {/* <section className="project-page-section content-padding">
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
      </section> */}
    </div>
  );
};

export default TalkPage;
