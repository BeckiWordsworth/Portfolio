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
        <p>{talk.description}</p>
      </div>
    </div>
  );
};

export default TalkPage;
