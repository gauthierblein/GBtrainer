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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero blanditiis, nulla sit voluptatibus tempora doloremque quaerat nobis, voluptatum cupiditate quidem eos quo cum rem ex est debitis, nesciunt saepe? Quidem?</p>
        </div>


      </div>
    </div>
  );
};

export default PersonalTraining;
