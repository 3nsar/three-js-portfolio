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

  { img: reactIcon, name: "react"},
  { img: firebase, name: "firebase" },
  { img: nodeIcon, name: "node js" },
  { img: jsIcon, name: "javascript" },
  { img: javaIcon, name: "java" },
  { img: vite, name: "vite" },
  { img: gitCat, name: "github-desktop" },
  { img: webmot, name: "framer-motion" },
  { img: reactBoot, name: "react-bootstrap" },
  { img: material, name: "material ui" },
  { img: npm, name: "npm" },
  { img: git, name: "git" },
  
];

const Skills = () => {
  return (
    <div className='skills-container'>
      
      <div className="skills-content">
      <h1>SKILLS</h1>
        <motion.div className="skills-content-cards" 
          initial={{opacity: 0, scale: 0, }}
          whileInView={{opacity: 1, scale: 1,}}
          transition={{duration: 1, type:"spring", delay: 0.1}}
          viewport={{once: true}}>

          {ballTexts.map((item, index) => (
            <img key={index} src={item.img} alt={`Skill ${index + 1}`} title={item.name} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
