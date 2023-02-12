import sgtPic from '../../assets/workout-5914643__340.jpg'

import './smallGroupTraining.css'

const SmallGroupTraining = () => {

  return (
    <div name="small group training" className="smallGroupTraining">
      
        <h2>Small Group Training</h2>
        <p>Des résultats en groupe. Team Building. Bootcamps</p>
      <div className="smallGroupTraining-container">
        <div className="smallGroupTraining-img">
          <img src={sgtPic} alt="personal training" />
        </div>
        <div className="smallGroupTraining-text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero blanditiis, nulla sit voluptatibus tempora doloremque quaerat nobis, voluptatum cupiditate quidem eos quo cum rem ex est debitis, nesciunt saepe? Quidem?</p>
        </div>


      </div>
    </div>
  );
};

export default SmallGroupTraining;

