import React from "react";
import "./style.css";
import ListCard from "../ListCard";

const talksJson = require("../../Data/talks.json");

const TalksPage = () => {
  return (
    <div className="TechPageContainer">
      <section className="landing-section my-projects">
        <h2>Conferences</h2>
        <hr />
        <div className="talks-container content-padding">
          {talksJson.talks.map((talk) => {
            if (talk.type === "conference") {
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
      </section>

      <section className="landing-section my-projects">
        <h2>Selected Talks and Workshops</h2>
        <hr />
        <div className="talks-container content-padding">
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
      </section>

      <section className="landing-section my-projects">
        <h2>Event Organiser</h2>
        <hr />
        <div className="talks-container content-padding">
          {talksJson.talks.map((talk) => {
            if (talk.type === "event") {
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
      </section>

      <section className="landing-section my-projects">
        <h2>Mentoring</h2>
        <hr />
        <div className="talks-container content-padding">
          {talksJson.talks.map((talk) => {
            if (talk.type === "mentor") {
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
      </section>
      {/* <section>
        <div className="button-container-tech">
          <a href="https://medium.com/@becki.wordsworth" target="_blank" className="button-tech">
            Visit Medium
          </a>
        </div>
      </section> */}
    </div>
  );
};

export default TalksPage;
