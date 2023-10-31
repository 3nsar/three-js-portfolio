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
              <motion.li 
              initial={{opacity: 0, scale: 0, y:-10}}
              whileInView={{opacity: 1, scale: 1, y:0}}
              transition={{duration: 1, type:"spring", delay: 0.5}}
              viewport={{once: true}}>
                <Link activeClass="active" to="about-container" smooth={true}  duration={500}>
                   About
                </Link>
              </motion.li> 

              <motion.li 
              initial={{opacity: 0, scale: 0, y:-10}}
              whileInView={{opacity: 1, scale: 1, y:0}}
              transition={{duration: 1, type:"spring", delay: 0.6}} 
              viewport={{once: true}}>
                <Link activeClass="active" to="about-container" smooth={true}  duration={500}>
                   Projects
                </Link>
              </motion.li> 

              <motion.li 
              initial={{opacity: 0, scale: 0, y:-10}}
              whileInView={{opacity: 1, scale: 1, y:0}}
              transition={{duration: 1, type:"spring", delay: 0.7}} 
              viewport={{once: true}}>
                <Link activeClass="active" to="about-container" smooth={true}  duration={500}>
                   Skills
                </Link>
              </motion.li> 
      </ul>

    </div>
  )

}

export default Navbar