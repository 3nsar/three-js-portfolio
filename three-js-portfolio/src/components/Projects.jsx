import React from 'react'
import cryptoMoon from "../assets/1crymoon.png"
import quizapp from "../assets/quizapp.png"
import portfolio from "../assets/portfolio.png"
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
        <p className="tech-stack"><span className='techstack-title'>Tech-Stack:</span> React, Firebase V9, Material UI5, Chart JS, Coingecko API</p>
        <div className="projects-text-btns">

         <a href="https://github.com/3nsar/crypto-moon" target="_blank" className="btn-link">
          <button>CODE</button>
         </a>

         <a href="https://crypto-moon-e93ab.web.app/" target="_blank" className="btn-link">
           <button>LIVE</button>
         </a>

          <a href="https://www.youtube.com/watch?v=BlRrCEzMBp8" target="_blank" className="btn-link">
            <button>VIDEO</button>
          </a>
        

        </div>
      </div>
      <motion.div initial={{opacity: 0, scale: 0,}}
         whileInView={{opacity: 1, scale: 1}}
         transition={{duration: 0.5}} viewport={{once: true}}>
      <img src={cryptoMoon} alt="pic"/>
      </motion.div>
      </div>

      <div className="projects-content">
      <div className="projects-text">
      <motion.h1  
         initial={{opacity: 0, scale: 0,}}
         whileInView={{opacity: 1, scale: 1}}
         transition={{duration: 0.5}}
         viewport={{once: true}}>PORTFOLIO</motion.h1>
        <p>This portfolio website serves as a comprehensive showcase of my work and skills, 
          providing visitors with valuable insights into my journey. Explore my projects and and discover the passion I bring to frontend development.
        </p>
        <p className='tech-stack'><span className='techstack-title'>Tech-Stack:</span> React, Vite, Framer-Motion, Figma, Three JS</p>
        <div className="projects-text-btns">

        <a href="https://github.com/3nsar/three-js-portfolio" target="_blank" className="btn-link">
          <button>CODE</button>
         </a>

         <a href="https://ensar-mehmedovic.netlify.app/" target="_blank" className="btn-link">
           <button>LIVE</button>
         </a>
         
        </div>
      </div>
      <motion.div initial={{opacity: 0, scale: 0,}}
         whileInView={{opacity: 1, scale: 1}}
         transition={{duration: 0.5}} viewport={{once: true}}>
      <img src={portfolio} alt="pic" />
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
        <p className='tech-stack'><span className='techstack-title'>Tech-Stack:</span> React, Firebase V9, Trivia API</p>
        <div className="projects-text-btns">

        <a href="https://github.com/3nsar/firebase-quiz-app" target="_blank" className="btn-link">
          <button>CODE</button>
         </a>

         <a href="https://react-quiz-bd372.web.app/" target="_blank" className="btn-link">
           <button>LIVE</button>
         </a>

          <a href="https://www.youtube.com/watch?v=9zcSNLiMEbE" target="_blank" className="btn-link">
            <button>VIDEO</button>
          </a>
        </div>
      </div>
      <motion.div initial={{opacity: 0, scale: 0,}}
         whileInView={{opacity: 1, scale: 1}}
         transition={{duration: 0.5}} viewport={{once: true}}>
      <img src={quizapp} alt="pic" />
      </motion.div>
      </div>

    </motion.div>
  )
}

export default Projects