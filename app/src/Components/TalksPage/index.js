import React from "react";
import "./style.css";
import ListCard from "../ListCard";

const talksJson = require("../../Data/talks.json");

const TalksPage = () => {
  return (
    <div className="TechPageContainer">
      <section className="landing-section my-projects">
        <h2>Selected!! Talks</h2>
        <hr />
        <div className="project-container content-padding">
          {talksJson.talks.map((talk) => {
            if (talk.type === "talk") {
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
            }
          })}
        </div>
        <div className="button-container-tech">
          <a href="https://medium.com/@becki.wordsworth" target="_blank" className="button-tech">
            Visit Medium
          </a>
        </div>
      </section>
      <section className="landing-section my-projects">
        <h2>Selected Webinars</h2>
        <hr />
        <div className="project-container content-padding">
          {talksJson.talks.map((talk) => {
            if (talk.type === "webinar") {
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
            }
          })}
        </div>
        <div className="button-container-tech">
          <a href="https://medium.com/@becki.wordsworth" target="_blank" className="button-tech">
            Visit Medium
          </a>
        </div>
      </section>
      <section className="landing-section my-projects">
        <h2>Other Events</h2>
        <hr />
        <div className="project-container content-padding">
          {talksJson.talks.map((talk) => {
            if (talk.type === "other") {
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
            }
          })}
        </div>
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
