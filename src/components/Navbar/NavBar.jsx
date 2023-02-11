import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import './Navbar.css'

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "accueil",
    },
    {
      id: 2,
      link: "me connaître",
    },
    {
      id: 3,
      link: "programmes",
    },
    {
      id: 4,
      link: "personal training",
    },
    {
      id: 5,
      link: "small group training"    
    },
    {
      id: 6,
      link: "contact",
    },
  ];

  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <span>GB</span><span className="navbar-logo-trainer">Trainer</span>
      </div>

      <ul className="navbar-menu">
        {links.map(({ id, link }) => (
          <li key={id}>
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="navbar-icons"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="navResponsive-container">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="navResponsive-links"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
