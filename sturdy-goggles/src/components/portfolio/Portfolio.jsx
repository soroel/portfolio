/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import "./portfolio.css";

import IMG2 from "../../assets/Capture1.PNG";
import IMG4 from "../../assets/Capture3.PNG";
import IMG5 from "../../assets/Capture4.PNG";
import IMG6 from "../../assets/Capture5.PNG";

import pr1 from "../../assets/projects/loans.png";
import pr2 from "../../assets/projects/crimemap.png";
import pr3 from "../../assets/projects/waste.png";
import pr4 from "../../assets/projects/gym.png";

//Array
const data = [
  {
    id: 1,
    title: "Microlend Finance",
    Image: pr1,
    github: "https://github.com/soroel/loans_website.git",
    demo: "https://64af1b08c35f5726f9ea2bc0--grand-cocada-b48e88.netlify.app/",
  },

  {
    id: 2,
    title: "Crimemap",
    Image: pr2,
    github: "https://github.com/soroel/crimemap.git",
    demo: "",
  },
  {
    id: 3,
    title: "Resource-Waste Connect",
    Image: pr3,
    github: "https://github.com/soroel/TeamClean.git",
    demo: "",
  },
  {
    id: 4,
    title: "Wellness site ",
    Image: pr4,
    github: "https://github.com/soroel/wellness-site.git",
    demo: "https://wellness-site-84tkeb2sy-soroels-projects.vercel.app/",
  },
  

  // {
  //   id: 8,
  //   Image: IMG4,
  //   title: "LinkedIn Clone",
  //   github: "https://github.com/KakwiriStephen/LinkedIn-Clone",
  //   demo: "https://linkedin-clone-kakwiri.netlify.app/",
  // },
  // {
  //   id: 9,
  //   Image: IMG5,
  //   title: "FeedBack Generator",
  //   github: "https://github.com/KakwiriStephen/Team-Sardinew2",
  //   demo: "https://team-sardinew2-jk6y-git-fork-zuri-training-main-damil27.vercel.app/",
  // },
  // {
  //   id: 10,
  //   Image: IMG2,
  //   title: "Forkify Recipe Web-App",
  //   github: "https://github.com/KakwiriStephen/Forkify",
  //   demo: "",
  // },
  // {
  //   id: 11,
  //   Image: IMG6,
  //   title: "PowerPlus Fitness Mentor",
  //   github: "https://github.com/KakwiriStephen/PowerPulse-MuscleMentor",
  //   demo: "https://muscle-mentor-kakwiri.netlify.app/",
  // },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, Image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfoli__item-image">
                <img src={Image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
