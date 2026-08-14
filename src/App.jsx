import {Sky, Float, Text, ScrollControls, useGLTF } from "@react-three/drei"

import Scene from './Components/Scene.jsx'
import Ocean from "./Components/Ocean.jsx"
import CameraScroll from './Components/CameraScroll.jsx'

import "./App.css";
import ScrollHelper from "./Components/ScrollHelper.jsx";
import { profile } from "./data/profile.js";

export default function App() {

  const { nodes } = useGLTF('./Model/House.glb')
  
  return (
    <>
      <directionalLight position={ [1, 2, 3] } intensity={ 2.5 }/>

      <Ocean/>
      <Sky sunPosition={[1, 0.1, 1]}/>
      
      <Float rotationIntensity={0.9}>
        <group>
          <Text
            font="./fonts/font.ttf"
            position-y={ 15 }
            rotation-y={ 0.48 * Math.PI }
            curveRadius={ -50 }
            fontSize={ 3.8 }
          >
            {profile.name}
          </Text>
          <Text
            font="./fonts/font.ttf"
            position-y={ 11.8 }
            rotation-y={ 0.48 * Math.PI }
            curveRadius={ -50 }
            fontSize={ 1.2 }
            color="#ffeaa7"
          >
            {profile.subtitle}
          </Text>
          <Text
            font="./fonts/font.ttf"
            position-y={ 9.8 }
            rotation-y={ 0.48 * Math.PI }
            curveRadius={ -50 }
            fontSize={ 0.6 }
            maxWidth={ 20 }
            color="#dfe6e9"
            textAlign="center"
          >
            {profile.shortIntro}
          </Text>
        </group>
      </Float>

      <Scene nodes= { nodes }/>
     
          
      <ScrollControls pages={25} damping={0.2}>    
        <CameraScroll nodes= { nodes }/>
      </ScrollControls>

      <ScrollHelper/>
      
    </>
  )
}

useGLTF.preload('./Model/House.glb')
