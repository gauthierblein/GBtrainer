import React from "react";

import { FaBurn } from "react-icons/fa";
import { GiStrong } from "react-icons/gi";
import { FaCut } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";
import { GiUnbalanced } from "react-icons/gi";
import { RiTimerFlashLine } from "react-icons/ri";

import './Programmes.css'

const Programmes = () => {

  const programs = [
    {
      id: 1,
      name: "FatBurn",
      icon: <FaBurn size={40} color="orangered" />,
      description: "Pour cibler la perte de masse grasse, en combinant HIIT, cardio classique et exercices musculaires. Suivi nutritionnel + approfondi. ",
    },
    {
      id: 2,
      name: "MuscleUp",
      icon: <GiStrong size={40} color="indigo" />,
      description: "Gains de masse musculaire sur des cycles de 12 semaines. Musculation avec charges et au poids de corps. Possibilité de conseils en compléments alimentaires.",
    },
    {
      id: 3,
      name: "Shaper",
      icon: <FaCut size={40}  color="crimson"/>,
      description: "Programme customisable, visant à améliorer l'apparence physique, pour avoir un corps sculpté.",
    },
    {
      id: 4,
      name: "NoPain",
      icon: <FaUserShield size={40} color="blue" />,
      description: "Exercices de renforcement musculaire, notamment des muscles stabilisateurs et profonds, afin d'avoir un corps sans douleur. ",
    },
    {
      id: 5,
      name: "Balance",
      icon: <GiUnbalanced size={40} color="red" />,
      description: "Programme visant à améliorer la souplesse, la tonicité musculaire et l'endurance musculaire.",
    },
    {
      id: 6,
      name: "Performance",
      icon: <RiTimerFlashLine size={40} color="teal" />,
      description: "Programmes customisables visant à améliorer les performances athlétiques, notamment dans la pratique d'un sport.",
    },
  ];

  return (
    <div name="programmes" className="programmes">
      <div className="programmes-container">
        <h2>Programmes</h2>
        <p>Travaillons ensembles à distance, et profitons des outils numériques pour mettre en route un programme et suivre les résultats.</p>
        
        <div className="programs-list">
        {programs.map(({ id, name, icon, description }) => (
          <div className="programs-type" key={id}>
            <div className="programs-title"><h3>{name}</h3><span>{icon}</span></div>
            <p>{description}</p>
          </div>
        ))}

        </div>

      </div>
    </div>
  );
};

export default Programmes;
