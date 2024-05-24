import React from "react";
import "./style.css";
import ListCard from "../ListCard";

const talksJson = require("../../Data/talks.json");

const TalksPage = () => {
  return (
    <div className="TechPageContainer">
      <section className="landing-section my-projects">
        <h2>Selected Talks and Workshops</h2>
        <hr />

        <div className="project-container content-padding">
          {talksJson.talks.map((talk) => {
            return (
              <ListCard
                id={talk.id}
                title={talk.title}
                conference={talk.conference}
                date={talk.date}
                previewImage={talk.previewImage}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default TalksPage;
