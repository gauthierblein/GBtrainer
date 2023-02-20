import { Link } from "react-scroll";
import aboutPic from "../../assets/heroImage3.jpg"
import './About.css'

const About = () => {
  return (
    <div name="me connaître" className="about">

      <h2>Me connaître</h2>

      <div className="about-container">
          <div className="about-container-img">
              <img src={aboutPic} alt="gbTrainer" />
          </div>
          <div className="about-container-text">
            <p>Diplômé en tant qu'instructeur de fitness, Personal Trainer, mais aussi en nutrition et en management du sport, je vous accompagne dans vos projets de fitness et de santé, qu'ils soient individuels ou en groupe.</p>
            <br />
            <p>Je m'adapte à vos objectifs et vous apporte mon expertise sur le terrain ou à distance, grâce aux outils numériques.</p>
            <br />
            <p>
              <Link className="about-link" to="contact">Contactez-moi</Link> pour m'expliquer votre projet, et travaillons ensembles à un plan d'action.
            </p>
            <h3>Mes valeurs</h3>
            <ul>
              <li>Disponibible pour tous niveaux</li>
              <li>Humilité et travail</li>
              <li>Musculation naturelle et sans dopage</li>
              <li>Paiements possibles en crypto-monnaies</li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default About;
