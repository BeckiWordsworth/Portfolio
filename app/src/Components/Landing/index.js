import React from "react";
import "./style.css";
import ProjectPreviews from "../ProjectPreviews";
import Skills from "../Skills";
import Education from "../Education";

const Landing = () => {
  return (
    <div className="landing-page">
      <div className="landing-hero-image">
        <h1>
          My name is <strong>Becki</strong>
        </h1>
        <div class="tagline">
          I am an Engineering Leader, Software Developer, and Researcher who loves new technology, science, and Formula
          1.
        </div>
      </div>

      <section className="landing-section content-padding">
        <h2>About Me</h2>
        <hr />
        <p>
          I am an Engineering Leader and Software Developer with a PhD in Physics, a passion for innovation, and a mild
          obsession with data. I have a history of building and scaling engineering teams and I’m at my best when
          combining my technical and people skills to motivate and guide others.
          <br /> <br />
          While working in research, I focussed on statistical analysis and digging into different forms of data
          visualisation - trying to present complex concepts in a understandable way - which pushed me to delve deeper
          into programming. <br /> <br />
          After research, I spent 3 years as a technical recruiter, growing tech teams with some of the most innovative
          companies in the world. This inspired me to dive deeper into understanding technology and software development
          from a business context and now I am putting all these pieces together. <br /> <br />
          I enjoy the challenge of balancing technical and business requirements so that we can efficiently create
          exciting and robust products. Whenever possible, I am always looking to use a data-driven approach - for
          instance, to ensure our products are intuitive and easy to use. <br /> <br />
          In my spare time, I like to stay up to date by building small applications with JavaScript/Typescript and
          Python, improving my knowledge and skills in the area of machine learning and AI (a long term passion of mine
          - I refer you back to my mild obsession with all things data related), and reading and writing blogs relating
          to tech, leadership, and recruitment. You can read some of them on{" "}
          <a href="https://medium.com/@becki.wordsworth" target="_blank" rel="noopener noreferrer">
            Medium{" "}
          </a>{" "}
          <br /> <br />I also enjoy getting involved and giving back to the tech community. I am a co-organiser of{" "}
          <a href="https://www.meetup.com/sthlm-js/" target="_blank" rel="noopener noreferrer">
            sthlm.js
          </a>
          , a large Javascript Meetup group in Stockholm, and head of events and workshop leader for{" "}
          <a href="https://www.code-excursion.com/" target="_blank" rel="noopener noreferrer">
            {" "}
            Code Excursion
          </a>
          , an organisation runnning programming classes and events aimed at bringing more women into tech.
          <br /> <br />
          Overall, I just enjoy working with innovative technology alongside passionate people, and make a bit of a
          difference in the world.
          <br />
          <br /> Tech: HTML5, CSS, JavaScript/Typescript, React, Redux, NodeJS, Python, MongoDB, Docker, Kubernetes
        </p>
      </section>

      {/* <section className="landing-section content-padding">
        <h2>Technology</h2>
        <hr />
        <Tech />
      </section> */}

      <section className="landing-section content-padding">
        <h2>
          Selected <strong>Projects</strong>
        </h2>
        <hr />
        <ProjectPreviews />
      </section>

      <section className="landing-section content-padding">
        <h2>Skills</h2>
        <hr />
        <Skills />
      </section>

      <section className="landing-section content-padding">
        <h2>Education</h2>
        <hr />
        <Education />
      </section>
    </div>
  );
};

export default Landing;
