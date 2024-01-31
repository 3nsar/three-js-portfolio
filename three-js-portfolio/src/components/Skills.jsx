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
import sass from "../assets/sass.png";
import scss from "../assets/scss.png";
import typescript from "../assets/typescript.png";

const ballTexts = [

  { img: reactIcon, name: "react"},
  { img: firebase, name: "firebase" },
  { img: nodeIcon, name: "node js" },
  { img: jsIcon, name: "javascript" },
  { img: typescript, name: "typescript" },
  { img: javaIcon, name: "java" },
  { img: vite, name: "vite" },
  { img: gitCat, name: "github-desktop" },
  { img: webmot, name: "framer-motion" },
  { img: sass, name: "sass" },
  { img: scss, name: "scss" },
  { img: npm, name: "npm" },
  { img: git, name: "git" },
  { img: reactBoot, name: "react-bootstrap" },
  { img: material, name: "material ui" },

  
];

const Skills = () => {
  return (
    <div className='skills-container'>
      
      
      <div className="skills-content">
      <h1>SKILLS</h1>
        <motion.div className="skills-content-cards" >
          {ballTexts.map((item, index) => (
            <>
            <motion.img           
            initial={{opacity: 0, scale: 0, }}
            whileInView={{opacity: 1, scale: 1,}}
            transition={{duration: 1, type: "spring", delay: index *0.2}}
            viewport={{once: true}} 
            key={index} src={item.img} alt={`Skill ${index + 1}`} title={item.name} />
            </>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
