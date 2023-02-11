import React from "react";
import HeroImage from "../../assets/heroImage2.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import './Home.css'

const Home = () => {
  return (
    <div
      name="home"
      className="home"
    >
      <div className="home-container">
        <div className="heroText-container">
          <h2>GB Trainer</h2>
          <p>Professionnel du fitness depuis 2011.</p>
          <p>Coaching sur Genève et ses alentours.</p>

          <div className="btnHome-container">
          <div className="btn">
            <Link to="programmes"  className="group">
              <span>Programmes</span>
              <span>
                <MdOutlineKeyboardArrowRight className="arrow" />
              </span>
            </Link>
          </div>

          <div className="btn">
            <Link to="personal training"  className="group">
              <span>Personal Training</span>
              <span>
                <MdOutlineKeyboardArrowRight className="arrow" />
              </span>
            </Link>
          </div>
          <div className="btn">
            <Link to="small group training"  className="group">
              <span>Small Group Training</span>
              <span>
                <MdOutlineKeyboardArrowRight className="arrow" />
              </span>
            </Link>
          </div>
        </div>

        </div>

        <div className="heroImg-container">
          <img src={HeroImage} alt="my profile"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
