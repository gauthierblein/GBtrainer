import React from "react";
import arrayDestruct from "../../assets/portfolio/arrayDestruct.jpg";
import installNode from "../../assets/portfolio/installNode.jpg";
import navbar from "../../assets/portfolio/navbar.jpg";
import reactParallax from "../../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../../assets/portfolio/reactWeather.jpg";

import './Portfolio.css'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
    },
    {
      id: 2,
      src: reactParallax,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactSmooth,
    },
    {
      id: 5,
      src: installNode,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];

  return (
    <div name="portfolio" className="portfolio">
      <div className="portfolio-container">
        <h2>Portfolio</h2>
        <p>Voici quelques projets que j'ai réalisé dernièrement</p>

        <div className="projects-container">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="projects">
              <img src={src} alt=""/>
              <div className="btn-container">
                <button className="portfolio-btn">Demo</button>
                <button className="portfolio-btn">Code</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
