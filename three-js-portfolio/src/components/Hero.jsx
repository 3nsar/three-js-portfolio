import React,{useRef} from 'react'
import {motion,useScroll,useTransform} from "framer-motion"



const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
       target: ref,
       offset: ["start start", "end start"],
      });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);


  return (
    <div className='hero-container' ref={ref}>
        <motion.h1 style={{ y: textY }}  initial={{opacity: 0, scale: 0, y: -210}}
        whileInView={{opacity: 1, scale: 1, y:0}}
        transition={{ type: "spring", stiffness: 100, duration:0.7 }}
        viewport={{once: true}}>
          HI I'M <span>ENSAR</span></motion.h1>
        <motion.div className="img1" style={{y:backgroundY}}/>
        <div className="img2"/>
        
    </div>
  ) 
}

export default Hero