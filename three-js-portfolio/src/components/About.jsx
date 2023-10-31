import React,{useRef} from 'react'
import {Canvas} from "@react-three/fiber"
import {OrbitControls, PerspectiveCamera, RenderTexture, Text} from "@react-three/drei"
import {motion} from "framer-motion"


const About = () => {

  return (
    <div className='about-container'>
      <div className="about-content" 
        
        initial={{opacity: 0, scale: 0, x: 400}}
        whileInView={{opacity: 1, scale: 1, x:0}}
        transition={{ type: "spring", stiffness: 50, duration:0.7 }}
        viewport={{once: true}}
        >
          
        <h1>ABOUT ME</h1>

            <p>I'm a passionate  <span>Front End Developer</span> with a love for learning and building applications. With a focus on <span>React</span> and various <span>APIs</span>, 
              I thrive on exploring new technologies and expanding my skill set. 
              From designing and implementing innovative solutions, I am driven to create <span>meaningful and impactful software</span>. 
              Constantly seeking new challenges and opportunities, I am <span>committed </span>to improving my skills and creating applications that 
              prioritize user satisfaction. Let's bring ideas to life through code and make a <span>positive impact</span> in the digital world.</p>
        </div>


       {/* <Canvas camera={{fov:25, position:[5,5,5]}}> {/*FRAME AND INSIDE WE CAN NOT CREATE SOME HTML CODE LIKE <div>
            <OrbitControls enableZoom={false} autoRotate/> 
            <ambientLight intensity={1}/>
            <directionalLight position={[3,2,1]}/>
            <Ball/>
        </Canvas> */}
    </div>
  )
}

export default About