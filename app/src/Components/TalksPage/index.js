import React from "react";
import "./style.css";
import ListCard from "../ListCard";

const talksJson = require("../../Data/talks.json");

const TalksPage = () => {
  return (
    <div className="TechPageContainer">
      <section className="landing-section my-projects">
        <h2>Selected Talks &amp; Webinars</h2>
        <hr />
        <div className="talks-container content-padding">
          {talksJson.talks.map((talk) => {
            return (
              <ListCard
                id={talk.id}
                title={talk.title}
                previewImage={talk.previewImage}
                conference={talk.conference}
                date={talk.date}
                city={talk.city}
              />
            );
          })}
        </div>
      </section>
      <section>
        <div className="button-container-tech">
          <a href="https://medium.com/@becki.wordsworth" target="_blank" className="button-tech">
            Visit Medium
          </a>
        </div>
      </section>
    </div>
  );
};

export default TalksPage;
