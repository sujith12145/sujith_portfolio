import { Analytics } from "@vercel/analytics/react"

import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { StrictMode, Suspense } from 'react'

import Loader from './Components/Loader.jsx'
import App from './App.jsx'
import './index.css'
import DashboardOverlay from './Components/DashboardOverlay.jsx'

console.log("Hi if you notice a bug please contact me at anso2020vja@gmail.com")


const isMobile = () => {
    return ( ( window.innerWidth <= 1000 ) && ( window.innerHeight <= 800 ) );
  }

const root = ReactDOM.createRoot(document.querySelector('#root'))

const fovForMobile = 100
const fovForPc = 45

root.render(
    <StrictMode>
        <Canvas
            camera={{
            fov: isMobile() ? fovForMobile : fovForPc,
            near: 0.1,
            far: 200,
            position: [52, 7, 12],
        }}
        >
            <Suspense fallback={<Loader/>}>
                <App/>   
            </Suspense>

            {/*<Perf position="top-left" />*/}
        </Canvas>

        <Analytics/>
        <DashboardOverlay />
        <div style={{ display: "none" }}>
  <section aria-hidden="true">
    <h1>Sujith Rachagulla - AI Developer & IoT Engineer</h1>
    <h2>B.Tech CSE | AI & IoT Builder | Full-Stack Web Developer</h2>
    <h2>Specialized in Deep Learning, Computer Vision, and Real-Time IoT Systems</h2>
  </section>
  <section aria-hidden="true">
    <h2>Skills and Expertise</h2>
    <ul>
      <li>AI & Machine Learning (TensorFlow, MobileNet, CNNs)</li>
      <li>IoT & Embedded Systems (GPS Tracking, Sensor Integration, Alert Systems)</li>
      <li>Full-Stack Web Development (Flask, MySQL, React, JavaScript, HTML5/CSS3)</li>
      <li>Data Analytics & Visualization</li>
    </ul>
  </section>
  <section aria-hidden="true">
    <p>
      Welcome to the 3D portfolio of Sujith Rachagulla. This immersive portfolio has 
      been created using React Three Fiber, Three.js, and GSAP. Explore intelligent systems 
      that blend AI, IoT, and modern web engineering.
    </p>
  </section>
  <noscript>
    <p>
      This 3D portfolio of Sujith Rachagulla showcases creative web development, 
      machine learning workflows, and IoT solutions. Please enable JavaScript to explore 
      the immersive experience.
    </p>
  </noscript>
</div>



    </StrictMode>

        
    
)