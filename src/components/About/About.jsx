import { Link } from "react-scroll";
import './About.css'

const About = () => {
  return (
    <div
      name="me connaître"
      className="about"
    >
      <div className="about-container">
        <h2>À propos</h2>
        <p>
          Diplômé en tant qu'instructeur de fitness, Personal Trainer, je vous accompagne dans vos projets de fitness et de santé, qu'ils soient individuels ou en groupe.</p>
        <br />
        <p>
          Je m'adapte à vos objectifs et vous apporte mon expertise sur le terrain ou à distance, grâce aux outils numériques.
        </p>
        <br />
        <p>
          <Link className="about-link" to="contact">Contactez-moi</Link> pour m'expliquer votre projet, et travaillons ensembles à un plan d'action.
        </p>
      </div>
    </div>
  );
};

export default About;
