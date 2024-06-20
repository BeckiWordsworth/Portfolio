import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./style.css";

const talksJson = require("../../Data/talks.json");

const TalkPage = () => {
  const [talk, setTalk] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const newTalk = talksJson.talks.find((proj) => {
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
      </div>

      <section className="project-page-section content-padding">
        <h2>Overview</h2>
        <hr />

        <div className="tech-specs-box">
          <p>{talk.description}</p>
        </div>
      </section>

      <section className="project-page-section content-padding">
        <h2>Details</h2>
        <hr />

        <div className="tech-specs-container">
          <div className="toolbox-component">
            <ul>
              <b>Event Type</b>
            </ul>
            <ul>Name</ul>
            <ul>City</ul>
            <ul>Date</ul>
          </div>
          <div className="toolbox-component">
            <ul>{talk.type.charAt(0).toUpperCase() + talk.type.slice(1)}</ul>
            <ul>{talk.conference}</ul>
            <ul>{talk.city}</ul>
            <ul>{talk.date}</ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TalkPage;
