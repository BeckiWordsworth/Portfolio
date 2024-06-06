import React from "react";
import "./style.css";

const Skills = () => {
  return (
    <div className="education-Component">
      <div className="phD-skills">
        <h3>PhD Medical Physics </h3>
        <p>
          Independent research developing a haemodynamic model system that can isolate and evaluate the impact of
          pressure and cyclic strain, commensurate with that seen in the microvasculature, on endothelial cell function
          in patients with Type 2 Diabetes.{" "}
        </p>
      </div>

      <div className="masters-skills">
        <h3>Masters in Physics</h3>
        <p>
          {" "}
          4 year course at The University of Exeter, UK. Modules included: Statistical Physics, Quantum Mechanics,
          Practical Electronics, and Nuclear and High-Energy Particle Physics. My dissertation used MRI techniques to
          map previously unfound touch receptors in the skin
        </p>
      </div>

      <div className="javascript-skills">
        <h3>Javascript Development Bootcamp</h3>
        <p>
          {" "}
          {
            "I studied at an intense 12 week program with Technigo, which focussed on JavaScript (ES6), React, and server-side programming with Node.\
          I was coding everyday, working on individual and group assignments which see us working and producing projects with real clients, such as Volumnetal, Svenska Spel and Bonnier News, in an agile environment."
          }{" "}
        </p>
      </div>
    </div>
  );
};

export default Skills;
