import { Link } from "react-scroll";
import sgtPic from '../../assets/workout-5914643__340.jpg'

import './smallGroupTraining.css'

const SmallGroupTraining = () => {

  return (
    <div name="small group training" className="smallGroupTraining">
      
        <h2>Small Group Training</h2>
        <p>Des résultats et du fun en groupe. Team Building. Bootcamps</p>
      <div className="smallGroupTraining-container">
        <div className="smallGroupTraining-img">
          <img src={sgtPic} alt="personal training" />
        </div>
        <div className="smallGroupTraining-text">
            <p>Vivez une expérience de groupe, sous forme de Cross-Training, permettant d'améliorer tous les aspects de la condition physique, mais également de créer du lien entre les participants.</p>
            <br />
            <p>Sessions de 45 minutes à 2 heures, dans vos locaux ou en extérieur.</p>
            <br />
            <p>A partir de <span className="tarifs">CHF 12.- </span>par personne. 
              <Link className="smt-link" to="contact"> Contactez-moi</Link> et regardons ensembles quel type de séance vous conviendrait.
            </p>
            <h3>Points forts</h3>
            <ul>
              <li>Grande expérience de ce type d'activité</li>
              <li>Matériel fourni</li>
              <li>Tous niveaux</li>
              <li>Paiements possibles en CHF, Euros et crypto-monnaies</li>
            </ul>
          </div>


      </div>
    </div>
  );
};

export default SmallGroupTraining;

