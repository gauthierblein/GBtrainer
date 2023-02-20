import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import './SocialLinks.css'

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Instagram <FaInstagram size={40} />
        </>
      ),
      href: "https://www.instagram.com/gauthierbtrainer",
    },
    {
      id: 2,
      child: (
        <>
          Mail <HiOutlineMail size={40} />
        </>
      ),
      href: "mailto:gauthierbtrainer@gmail.com",
    },
    {
      id: 3,
      child: (
        <>
          LinkedIn <FaLinkedin size={40} />
        </>
      ),
      href: "https://linkedin.com",
    },
  ];

  return (
    <div className=" top-[35%] left-0 fixed sociallinks">
      <ul>
        {links.map(({ id, child, href, download }) => (
          <li key={id} >
            <a
              href={href}
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
