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

  let externalLink = "";

  if (talk) {
    if (talk.externalLink) {
      externalLink = (
        <a href={talk.externalLink} className="button">
          See it Live
        </a>
      );
    }
  }

  return (
    <div className="talk-page">
      <div className="talk-page-writing content-padding">
        <h1>{talk.title}</h1>
        <img className="talk-image" src={"/" + talk.previewImage} alt={talk.title} />
      </div>

      <section className="talk-page-section content-padding">
        <h2>Overview</h2>
        <hr />

        <div className="talk-specs-box">
          <p>{talk.description}</p>
        </div>

        <div className="button-container content-padding">{externalLink}</div>
      </section>

      <section className="talk-page-section content-padding">
        <h2>Details</h2>
        <hr />

        <div className="talk-specs-container">
          <div className="toolbox-component" style={{ display: "grid", gridTemplateColumns: "150px 1fr" }}>
            <div>
              <strong>Event Type</strong>
            </div>
            <div>{talk.type.charAt(0).toUpperCase() + talk.type.slice(1)}</div>

            <div>
              <strong>Event Name</strong>
            </div>
            <div>{talk.conference}</div>

            <div>
              <strong>City</strong>
            </div>
            <div>{talk.city}</div>

            <div>
              <strong>Date</strong>
            </div>
            <div>{talk.date}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TalkPage;
