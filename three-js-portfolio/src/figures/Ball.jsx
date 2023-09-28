import React,{useRef} from 'react'
import {Canvas} from "@react-three/fiber"
import {MeshDistortMaterial, OrbitControls, PerspectiveCamera, RenderTexture, Text} from "@react-three/drei"
import { useFrame } from '@react-three/fiber'

const Ball = () => {
  const textRef = useRef()
    useFrame(
        (state)=>(textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
    )

  return (
    <mesh> {/*YOU need to add this to start */}
    <sphereGeometry args={[1,100,100]}/>
    <meshStandardMaterial>
        <RenderTexture attach="map">
            <PerspectiveCamera
                makeDefault
                position={[0,0,5]}
            />
            <color attach="background" args={["#00d9ff"]}/>
            <Text ref={textRef} fontSize={0.5} color="black">
            WELCOME
            </Text>
        </RenderTexture>
    </meshStandardMaterial>
  </mesh>
  )
}

    

export default Ball