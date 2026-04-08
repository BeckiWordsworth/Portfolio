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
          I am a Software Developer and Engineering Leader with a PhD in Physics, a passion for innovation, and a (not
          so mild) obsession with data. My career spans academia, technical recruiting, and software development, giving
          me a unique perspective on delivering impactful technical solutions that drive business value and building and
          empowering high-performing engineering teams.
          <br /> <br />
          Over the years, I’ve taken multiple products from concept to production and beyond, always with a focus on
          delivering business value through scalable, reliable, and user-friendly solutions. My toolkit has revolved
          around JavaScript/TypeScript, React, Next.js, and Node.js, with side quests into PHP, Python, and now Rust -
          basically whatever the problem at hand demands. <br /> <br />
          Outside of work, I continue to feed my technical curiosity by building small apps, tinkering with hardware,
          and exploring machine learning and AI (a long term passion of mine - I refer you back to my mild obsession
          with data). I also enjoy sharing knowledge through blogs (you can read some of them on{" "}
          <a href="https://medium.com/@becki.wordsworth" target="_blank" rel="noopener noreferrer">
            Medium{" "}
          </a>
          ), conference talks, and events.
          <br /> <br />
          Community is very important to me. I am a co-organiser of{" "}
          <a href="https://www.meetup.com/sthlm-js/" target="_blank" rel="noopener noreferrer">
            sthlm.js
          </a>
          , Stockholm’s largest JavaScript meetup, and the Stockholm chapter of{" "}
          <a href="https://www.meetup.com/leaddev-meetup-stockholm/" target="_blank" rel="noopener noreferrer">
            LeadDev
          </a>
          . I also collaborate with initiatives like Code Excursion, running workshops and events aimed at bringing more
          women into tech.
          <br /> <br />
          At the end of the day, I simply want to work with innovative technology alongside passionate people and,
          hopefully, make a bit of a difference in the world.
          <br />
          <br /> Current Stack: JavaScript/Typescript, SolidJS, Rust, PostgresSQL
        </p>
      </section>

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
