import React from 'react';

import {motion} from "framer-motion"

import reactIcon from '../assets/reactIcon.png';
import javaIcon from '../assets/javaIcon.png';
import jsIcon from '../assets/jsIcon.png';
import nodeIcon from '../assets/nodeIcon.png';

import gitCat from '../assets/gitCat.png';
import firebase from '../assets/firebase.png';
import reactBoot from '../assets/reactBoot.jpg';
import material from '../assets/material.png';
import vite from '../assets/vite.png';
import webmot from '../assets/webmot.png';
import npm from '../assets/npm-logo.png';
import git from '../assets/git.png';

const ballTexts = [

  { img: reactIcon },
  { img: firebase },
  { img: nodeIcon },
  { img: jsIcon },
  { img: javaIcon },
  { img: vite },
  { img: gitCat },
  { img: webmot },
  { img: reactBoot },
  { img: material },
  { img: npm },
  { img: git },
  
];

const Skills = () => {
  return (
    <motion.div className='skills-container'
    initial={{opacity: 0, scale: 0}}
    whileInView={{opacity: 1, scale: 1}}
    transition={{duration: 0.6}}
    viewport={{once: true}}
    >
      
      <div className="skills-content">
      <h1>SKILLS</h1>
        <div className="skills-content-cards">
          {ballTexts.map((item, index) => (
            <img key={index} src={item.img} alt={`Skill ${index + 1}`} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
