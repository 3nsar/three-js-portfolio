import React, { useContext, useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';
import {motion} from "framer-motion"

const Navbar = () => {

  const [showNav, setShowNav] = useState(false);


  const handleNavClick = () => {
    setShowNav(!showNav);
  };


  return (
  <div className="navbar-container ">


      <motion.h1 onClick={()=>navigate('/main')}
      initial={{opacity: 0, scale: 0, y:-10}}
      whileInView={{opacity: 1, scale: 1, y:0}}
      transition={{duration: 0.4, type:"spring"}}
      viewport={{once: true}}>E M</motion.h1>

      <div className='nav-icon' onClick={handleNavClick}>
      {showNav ? <AiOutlineClose fontSize="25px"/> : <FaBars fontSize="25px"/>}
      </div>


      <ul className={`navbar-list ${showNav ? 'show' : ''}`}>
      <li>
                <Link activeClass="active" to="about-container" smooth={true}  duration={500}>
                   About
                </Link>
              </li> 
              <li>
              <Link activeClass="active" to="projects-container" smooth={true}  duration={500}>
                   Projects
                </Link>
              </li> 
               <li>              
                <Link activeClass="active" to="contact-container" smooth={true}  duration={500}>
                 Contact
                </Link>
                </li> 
      </ul>

    </div>
  )

}

export default Navbar