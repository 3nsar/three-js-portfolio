import React from 'react'
import cryptoMoon from "../assets/1crymoon.png"

const Projects = () => {
  return (
    <div className='projects-container'>
      <h1 className='projects-title'>PROJECTS</h1>
      <div className="projects-content">
      
      <div className="projects-text">
      <h1>CRYPTO MOON</h1>
        <p>With the Crypto-Moon app, you are able to see the latest updates in the crypto market. This is possible, thanks to multiple APIs. You can also sort them in many categories. 
          This app also contains a chat room where you can chat with people around the world.
        </p>
        <p className="tech-stack">TechStack: REACT, FIREBASE V9, MATERIAL UI5, Chart JS</p>
        <button>CODE</button>
        <button>CODE</button>
        <button>CODE</button>
      </div>
      <img src={cryptoMoon} alt="" height="200px"/>
      </div>

      
      <div className="projects-content">
      <div className="projects-text">
      <h1>QUIZ APP</h1>
        <p>This quiz app allows you to advance to higher levels by answering 7 out of 10 questions correctly. The main goal is to unlock all the secret cards. For this project, I used React JS and Firebase V9. 
          With the help of Firebase's assistance, your progress will be saved automatically.
        </p>
        <p>TechStack: REACT, FIREBASE V9, MATERIAL UI5, Chart JS</p>
        <button>CODE</button>
        <button>CODE</button>
        <button>CODE</button>
      </div>
      <img src={cryptoMoon} alt="" height="200px"/>
      </div>

    </div>
  )
}

export default Projects