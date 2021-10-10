import React from "react";
import "./style.css";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  render() {
    return (
      <div className="aboutPageContainer">
        <section className="about-me">
          <h2> About me </h2>
          <hr />

          <ul class="timeline">
            <li>
              <div class="direction-l">
                <div class="flag-wrapper">
                  <span class="hexa"></span>
                  <span class="flag">Software Developer</span>
                  <span class="time-wrapper">
                    <span class="time">Apr 2020 - Present</span>
                  </span>
                </div>
                <div class="desc">
                  <strong>Hiotlabs AB, Stockholm</strong>
                  <br /> <br />
                  At Hiotlabs we are developing tech to prevent and minimise
                  property damage.
                  <br /> <br />
                  We are a product company that leverages IoT and Machine
                  Learning to create new and innovative solutions to re-define
                  the insurance industry for the better. My role is across the
                  whole of our stack, with a bit more focus on the backend, but
                  I enjoy working with everything from our React Native apps all
                  the way down to our sensors.
                  <br /> <br />
                  Highlights: Javascript (ES6+), React, React Native, Redux,
                  Node, MongoDB, Docker, and occasionally Python
                </div>
              </div>
            </li>

            <li>
              <div class="direction-r">
                <div class="flag-wrapper">
                  <span class="hexa"></span>
                  <span class="flag">Software Developer</span>
                  <span class="time-wrapper">
                    <span class="time">Feb 2019 - Apr 2020</span>
                  </span>
                </div>
                <div class="desc">
                  <strong>Baffin Bay Networks AB, Stockholm</strong>
                  <br /> <br />
                  Baffin Bay Networks offer a cloud-based Threat Protection
                  Platform. <br /> <br />
                  My role is the development of our interactive portal where
                  customers can customise, monitor, and visualise their threat
                  protection in real-time. <br /> <br /> Tech: Javascript
                  (ES6+), React, Redux, Node, MariaDB, Docker
                </div>
              </div>
            </li>

            <li>
              <div class="direction-l">
                <div class="flag-wrapper">
                  <span class="hexa"></span>
                  <span class="flag">Software Developer</span>
                  <span class="time-wrapper">
                    <span class="time">Nov 2018 - Feb 2019</span>
                  </span>
                </div>
                <div class="desc">
                  <strong>Doctrin AB, Stockholm</strong>
                  <br /> <br />
                  Javascript development on an existing product with Javascript,
                  React, Redux, and Node.
                  <br /> <br />
                  Startup was struggling with money and had to lose 1/4 of their
                  staff.
                </div>
              </div>
            </li>

            <li>
              <div class="direction-r">
                <div class="flag-wrapper">
                  <span class="hexa"></span>
                  <span class="flag">Javascript Developer</span>
                  <span class="time-wrapper">
                    <span class="time">Sept 2018 - Dec 2018</span>
                  </span>
                </div>
                <div class="desc">
                  <strong>Technigo AB, Stockholm</strong>
                  <br /> <br />
                  An intense 12 week program, which is focussed on JavaScript
                  (ES6), React, and server-side programming with Node,
                  Express.js and MongoDB. I was coding every day, working on
                  individual and group assignments which saw us working and
                  producing projects with clients such as Bonnier, Svenska Spel
                  and Volunmental in an agile environment.
                </div>
              </div>
            </li>

            <li>
              <div class="direction-l">
                <div class="flag-wrapper">
                  <span class="hexa"></span>
                  <span class="flag">Head of Recruitment</span>
                  <span class="time-wrapper">
                    <span class="time">Sept 2015 - Sept 2018</span>
                  </span>
                </div>
                <div class="desc">
                  <strong>C/MIND AB, Stockholm</strong>
                  <br /> <br />
                  At C/MIND I specialise in building teams for both large and
                  small tech companies in Sweden. We are recruiting the best
                  developers from around the world and helping build and scale
                  teams for companies like Truecaller, and Apple. • Leading full
                  cycle recruitment activities within both internally and
                  externally at C/MIND. • End-end recruitment of software
                  developers from around the world. • Building relationships
                  with our clients and developers who have a passion for
                  technology. • Researching the latest industry standards and
                  new technologies. • Supporting the relocation and integration
                  of candidates. • Spearheading our internship scheme. • A
                  little bit of coding when I have the time......
                </div>
              </div>
            </li>

            <li>
              <div class="direction-r">
                <div class="flag-wrapper">
                  <span class="hexa"></span>
                  <span class="flag">Research Scientist</span>
                  <span class="time-wrapper">
                    <span class="time">Jan 2014 - Sept 2014</span>
                  </span>
                </div>
                <div class="desc">
                  <strong>University of Bristol, UK</strong>
                  <br /> <br />• Fixed-term role on two studies investigating
                  osteoporosis and scoliosis. • Recruited participants after
                  identification of eligible people. • Used an SQL-like query
                  language, along with SPSS and Stata, to analyse a subset of
                  over 400 million data points and produce charts and reports. •
                  Made use of regression modelling, significance testing and
                  data visualisation techniques to interpret and present data at
                  conferences. • Managed the overall progress of the project by
                  developing and maintaining study documents and governance
                  paperwork.
                </div>
              </div>
            </li>

            <li>
              <div class="direction-l">
                <div class="flag-wrapper">
                  <span class="hexa"></span>
                  <span class="flag">Travelling in Canada</span>
                  <span class="time-wrapper">
                    <span class="time">Jan 2013 - Dec 2013</span>
                  </span>
                </div>
                <div class="desc"></div>
              </div>
            </li>

            <li>
              <div class="direction-r">
                <div class="flag-wrapper">
                  <span class="hexa"></span>
                  <span class="flag">Content Scientist</span>
                  <span class="time-wrapper">
                    <span class="time">Jan 2014 - Sept 2014</span>
                  </span>
                </div>
                <div class="desc">
                  <strong>Sparx, UK</strong>
                  <br /> <br />• Sparx is an education based start-up,
                  developing a tablet-based learning system • Fixed-term role on
                  an iPad-based learning app in an Agile environment. •
                  Developed course materials and in-app activities for students.
                  • Analysed user data, using a variety of techniques, to
                  understand problems and produce better content. • Provided bug
                  reports and feature ideas to developers using JIRA.
                </div>
              </div>
            </li>

            <li>
              <div class="direction-l">
                <div class="flag-wrapper">
                  <span class="hexa"></span>
                  <span class="flag">PhD/Researcher</span>
                  <span class="time-wrapper">
                    <span class="time">Oct 2006 - May 2012</span>
                  </span>
                </div>
                <div class="desc">
                  <strong>
                    Peninsula Medical School, University of Exeter, UK
                  </strong>
                  <br /> <br />• Developed an electronic model and associated
                  software (LabVIEW) to research the effects of type-2 diabetes
                  on the microvascular system. • Collected and analysed data
                  sets consisting of 100,000+ data points using MATLAB, R, SPSS
                  and Excel to successfully validate my hypothesis. • Developed
                  and evaluated statistical data for individual studies. •
                  Extensively used standard parametric and non-parametric tests,
                  alongside significance testing and other modelling techniques.
                  • Designed and presented papers at conferences. • Heavy use of
                  problem-solving skills while developing hardware/software.
                </div>
              </div>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default About;
