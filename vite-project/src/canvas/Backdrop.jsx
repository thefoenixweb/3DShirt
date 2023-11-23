import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'; 
const Backdrop = () => {
    const shadows = useRef(); 

  return (
    <AccumulativeShadows
    ref={shadows}
    temporal
    frames={60}
    alphaTest={0.85}
    scae={10}
    rotation={[Math.PI / 2,0,0]}
    position={[0,0,-0.14]}>

    <RandomizedLight
    amount={5}
    radius={10}
    intensity={0.5}
    ambient={0.2}
    position={[4,4,-8]}
    />

    <RandomizedLight
    amount={5}
    radius={5}
    intensity={0.2}
    ambient={0.5}
    position={[-4,4,-7]}
    />
    </AccumulativeShadows>



  )
}

export default Backdrop