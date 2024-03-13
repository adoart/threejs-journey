import './style.css'
import ReactDOM from 'react-dom/client'
import {Canvas} from "@react-three/fiber";
import Experience from "./Experience.jsx";
import * as THREE from 'three'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
        // dpr={[1, 2]} //default [1, 2]
        flat={false}
        gl={
            {
                antialias: true,
                toneMapping: THREE.ACESFilmicToneMapping,
                outputColorSpace: THREE.SRGBColorSpace
            }
        }
        camera={
            {
                fov: 75,
                near: 0.1,
                far: 100,
                position: [3, 2, 6]
            }
        }>
        <Experience/>
    </Canvas>
)