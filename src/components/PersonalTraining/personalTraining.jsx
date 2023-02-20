import { Link } from "react-scroll";
import ptPic from '../../assets/kettlebell-3361559_960_720.jpg'

import './personalTraining.css'

const PersonalTraining = () => {

  return (
    <div name="personal training" className="personalTraining">
      
        <h2>Personal Training</h2>
        <p>La meilleure solution pour un apprentissage rapide et des résultats marquants</p>
      <div className="personalTraining-container">
        <div className="personalTraining-img">
          <img src={ptPic} alt="personal training" />
        </div>
        <div className="personalTraining-text">
            <p>Quels sont vos objectifs ? Travaillons ensembles pour définir un projet et maximiser les chances de succès.</p>
            <br />
            <p>Entraînements en direct, selon vos dispobilités et votre proximité géographique.</p>
            <br />
            <p>A partir de <span className="tarifs">CHF 70.- </span>par séance d'une heure. 
              <Link className="pt-link" to="contact"> Planifions une séance d'essai</Link> et démarrons sans attendre.
            </p>
            <h3>Points forts</h3>
            <ul>
              <li>+ de 200 personnes déjà coachées</li>
              <li>Matériel fourni</li>
              <li>Conseils en nutrition inclus</li>
              <li>Paiements possibles en CHF, Euros et crypto-monnaies</li>
            </ul>
          </div>


      </div>
    </div>
  );
};

export default PersonalTraining;
