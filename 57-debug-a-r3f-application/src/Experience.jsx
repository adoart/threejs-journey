import {OrbitControls} from '@react-three/drei'
import Cube from "./Cube.js";
import {button, useControls} from "leva";
import {Perf} from "r3f-perf";



export default function Experience() {

    const {perfVisible} = useControls('Perf', {
        perfVisible: false
    })

    const {position, color, wireframe} = useControls('sphere', {
        position: {
            value: { x: -2, y: 0},
            min: -4,
            max: 4,
            step: 0.01,
            joystick: 'invertY'
        },
        color : {
            value: 'orange'
        },
        wireframe: false,
        clickMe: button(() => console.log('clicked')),
        choice: {
            options: ['a', 'b', 'c'],
            value: 'a'
        }
    })

    return <>

        {perfVisible && <Perf position="top-left" />}
        <OrbitControls makeDefault/>

        <directionalLight position={[1, 2, 3]} intensity={4.5}/>
        <ambientLight intensity={1.5}/>

        <mesh position={[position.x, position.y, 0]} >
            <sphereGeometry/>
            <meshStandardMaterial color={color} wireframe={wireframe}/>
        </mesh>

        <Cube scale={2}/>

        <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
            <planeGeometry/>
            <meshStandardMaterial color="greenyellow"/>
        </mesh>

    </>
}
