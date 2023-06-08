import React, { useRef ,useMemo} from "react";
import { useGLTF } from "@react-three/drei";
import { Physics, usePlane, useBox, useSphere, useCylinder } from '@react-three/cannon'
import * as THREE from "three";
import { Debug } from "@react-three/cannon";
import { isDisabled } from "@testing-library/user-event/dist/utils";


export function Pins(props,) {
  const { nodes, materials } = useGLTF("/BowlingAssets/3dmodels/pinNoHands.glb");
  const [ref] = useBox(() => ({ mass: 70, args: [350,950,250], friction: .1, ...props}))

  

  
  return (
    
      <mesh
      ref={ref}
      dispose={null}
        // castShadow
        // receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        scale={[200,200,100]}
       
      >
        
      </mesh>
      
    
  );
}

useGLTF.preload("/BowlingAssets/3dmodels/pinNoHands.glb");