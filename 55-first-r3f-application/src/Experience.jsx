import {extend, useFrame, useThree} from "@react-three/fiber";
import {useRef} from "react";
import {OrbitControls} from "three/addons";
import CustomObject from "./CustomObject.jsx";

extend( {OrbitControls} )

export default function Experience() {
    const {camera, gl} = useThree();

    const cubeRef = useRef();
    const groupRef = useRef();
    useFrame((state, delta) => {
        cubeRef.current.rotation.y += delta

        // const angle = state.clock.elapsedTime
        // state.camera.position.x = Math.sin(angle) * 5
        // state.camera.position.z = Math.cos(angle) * 5
        // state.camera.lookAt(groupRef.current.position)
    })

    return <>
        <orbitControls args={[camera, gl.domElement]}/>

        <ambientLight intensity={1.5}/>
        <directionalLight position={[1, 2, 3]} intensity={4.5}/>

        <group ref={groupRef}>
            <mesh position-x={-2}>
                <sphereGeometry/>
                <meshStandardMaterial color="orange"/>
            </mesh>
            <mesh ref={cubeRef} rotation-y={Math.PI * 0.25} position-x={2} scale={1.5}>
                <boxGeometry/>
                <meshStandardMaterial color="mediumpurple"/>
            </mesh>
        </group>
        <mesh position-y={-2} scale={10} rotation-x={Math.PI * -0.5}>
            <planeGeometry args={[1.5, 1.5]}/>
            <meshStandardMaterial color="greenyellow"/>
        </mesh>
        <CustomObject/>
    </>
}