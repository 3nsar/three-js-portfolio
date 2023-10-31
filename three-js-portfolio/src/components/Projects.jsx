import React from 'react'
import cryptoMoon from "../assets/1crymoon.png"
import quizapp from "../assets/quizapp.png"
import {motion} from "framer-motion"

const Projects = () => {
  return (
    <motion.div  className='projects-container'>
      <motion.h1  
         initial={{opacity: 0, scale: 0,}}
         whileInView={{opacity: 1, scale: 1}}
         transition={{duration: 0.5}}
         viewport={{once: true}}
             className='projects-title'>PROJECTS
      </motion.h1>
      <div className="projects-content">
      
      <div className="projects-text">
      <motion.h1  
         initial={{opacity: 0, scale: 0,}}
         whileInView={{opacity: 1, scale: 1}}
         transition={{duration: 0.5}}
         viewport={{once: true}}>CRYPTO MOON</motion.h1>
        <p>With the Crypto-Moon app, you are able to see the latest updates in the crypto market. This is possible, thanks to multiple APIs. You can also sort them in many categories. 
          This app also contains a chat room where you can chat with people around the world.
        </p>
        <p className="tech-stack">TechStack: REACT, FIREBASE V9, MATERIAL UI5, Chart JS, Coingecko API</p>
        <button>CODE</button>
        <button>CODE</button>
        <button>CODE</button>
      </div>
      <motion.div initial={{opacity: 0, scale: 0,}}
         whileInView={{opacity: 1, scale: 1}}
         transition={{duration: 0.5}} viewport={{once: true}}>
      <img src={cryptoMoon} alt="" height="200px"/>
      </motion.div>
      </div>

      
      <div className="projects-content">
      <div className="projects-text">
      <motion.h1  
         initial={{opacity: 0, scale: 0,}}
         whileInView={{opacity: 1, scale: 1}}
         transition={{duration: 0.5}}
         viewport={{once: true}}>QUIZ APP</motion.h1>
        <p>This quiz app allows you to advance to higher levels by answering 7 out of 10 questions correctly. The main goal is to unlock all the secret cards. For this project, I used React JS and Firebase V9. 
          With the help of Firebase's assistance, your progress will be saved automatically.
        </p>
        <p className='tech-stack'>TechStack: REACT, FIREBASE V9, TRIVIA API</p>
        <button>CODE</button>
        <button>CODE</button>
        <button>CODE</button>
      </div>
      <motion.div initial={{opacity: 0, scale: 0,}}
         whileInView={{opacity: 1, scale: 1}}
         transition={{duration: 0.5}} viewport={{once: true}}>
      <img src={quizapp} alt="pic" height="200px"/>
      </motion.div>
      </div>

    </motion.div>
  )
}

export default Projects