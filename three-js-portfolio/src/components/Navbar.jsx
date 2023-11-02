import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNavClick = () => {
    setShowNav(!showNav);
  };

  const closeNav = () => {
    setShowNav(false);
  };

  return (
    <div className="navbar-container">
      <motion.h1
        initial={{ opacity: 0, scale: 0, y: -10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, type: 'spring' }}
        viewport={{ once: true }}
      >
        E M
      </motion.h1>

      <div className="nav-icon" onClick={handleNavClick}>
        {showNav ? <AiOutlineClose fontSize="25px" /> : <FaBars fontSize="25px" />}
      </div>

      <ul className={`navbar-list ${showNav ? 'show' : ''}`}>
      <Link
            activeClass="active"
            to="about-container"
            smooth={true}
            duration={500}
            onClick={closeNav}
            className="nav-link"
      >
        <li>
          About
        </li>

        </Link>

        <Link
            activeClass="active"
            to="projects-container"
            smooth={true}
            duration={500}
            onClick={closeNav}
            className="nav-link"
      >
        <li>
          Projects
        </li>

        </Link>

        <Link
            activeClass="active"
            to="skills-container"
            smooth={true}
            duration={500}
            onClick={closeNav}
            className="nav-link"
      >
        <li>
          Skills
        </li>

        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
