import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three'; // Import TextureLoader
import textures from '../assets/textures.png';

const Box = () => {
  // Load the texture using TextureLoader
  const texture = useLoader(TextureLoader, textures);

  return (
    <mesh rotation={[90, 0, 20]}>
      <boxGeometry attach="geometry" args={[2, 2,2]} />
      <meshStandardMaterial attach="material" map={texture} /> {/* Apply the texture to the material */}
    </mesh>
  );
}

export default Box;
