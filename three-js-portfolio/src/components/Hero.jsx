import React from 'react'
import {BsGithub, BsLinkedin} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
import avatar from "../assets/avatar.png"
import {motion} from "framer-motion"

const Hero = () => {
  return (
    <div className='hero-container'> 
    <div className='hero-content'> 
      <h1>Hi, I'm <span>Ensar</span></h1>
      <p>Frontend Developer and Software Developer </p>

      <div className="contact-links">
                <motion.a 
                initial={{opacity: 0, scale: 0,y:100}}
                whileInView={{opacity: 1, scale: 1, y:0 }}
                transition={{duration: 1, delay: 0.09}} viewport={{once: true}}
                target='_blank' 
                href="https://github.com/3nsar">
                  <BsGithub/>
                </motion.a>



                <motion.a 
                initial={{opacity: 0, scale: 0,y:100}}
                whileInView={{opacity: 1, scale: 1, y:0 }}
                transition={{duration: 1, delay: 0.1}} viewport={{once: true}}
                target='_blank' 
                href="https://www.linkedin.com/in/ensar-mehmedovic/">
                  <BsLinkedin/>
                </motion.a>

                <motion.a 
                initial={{opacity: 0, scale: 0,y:100}}
                whileInView={{opacity: 1, scale: 1, y:0 }}
                transition={{duration: 1, delay: 0.2}} viewport={{once: true}}
                target='_blank' 
                href="mailto:ensar.m021@gmail.com">
                  <AiOutlineMail/>
                </motion.a>


            </div>
    </div>
    <motion.div initial={{opacity: 0, scale: 0,x:100}}
         whileInView={{opacity: 1, scale: 1, x:0 }}
         transition={{duration: 1, delay: 0.2}} viewport={{once: true}}>
    <img src={avatar} alt="pic" />
    </motion.div>
  </div>
  )
}

export default Hero