import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>PROBLEM SOLVING</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Defining the problems</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Generating possible solutions</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Developing an action plan</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Implementing solutions</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Evaluating the results</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Continuous improvement</p>
            </li>
          </ul>
        </article>

        {/* End of UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>FRONTEND</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>UI/UX design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>HTML/CSS development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>JavaScript development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive design</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Frontend frameworks and libraries</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Performance optimization</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cross-browser compatibility testing</p>
            </li>
          </ul>
        </article>

        {/* End of web development */}

        <article className="service">
          <div className="service__head">
            <h3>BACKEND</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Building APIs</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Developing server-side logic</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Integrating with databases</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Implementing security measures</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Deploying and managing servers</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Continuous integration and deployment</p>
            </li>
          </ul>
        </article>

        {/* End of content creation */}
      </div>
    </section>
  );
};

export default Services;
