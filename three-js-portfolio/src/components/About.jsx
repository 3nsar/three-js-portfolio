import React,{Suspense, useRef} from 'react'
import {Canvas} from "@react-three/fiber"
import {OrbitControls, PerspectiveCamera, RenderTexture, Text} from "@react-three/drei"
import {motion} from "framer-motion"
import Box from "../figures/Box"


const About = () => {

  return (
    <div className='about-container'>
      <div className="about-content">
          
        <h1>ABOUT ME</h1>

            <p>I'm a passionate  <span>Front End Developer</span> with a love for learning and building applications. With a focus on <span>React</span> and various <span>APIs</span>, 
              I thrive on exploring new technologies and expanding my skill set. 
              From designing and implementing innovative solutions, I am driven to create <span>meaningful and impactful software</span>. 
              Constantly seeking new challenges and opportunities, I am <span>committed </span>to improving my skills and creating applications that 
              prioritize user satisfaction. Let's bring ideas to life through code and make a <span>positive impact</span> in the digital world.</p>
        </div>


       <Canvas>  
       <OrbitControls enableZoom={false} autoRotate/>
       <ambientLight intensity={1.5}/>
       <directionalLight position={[-2,5,2]} intensity={1}/>
           <Suspense fallback={null}>
            <Box/>
            </Suspense>
        </Canvas> 
    </div>
  )
}

export default About