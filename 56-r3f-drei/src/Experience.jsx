// import { useThree, extend } from '@react-three/fiber'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// extend({ OrbitControls })

import {
    Text,
    Html,
    OrbitControls,
    PivotControls,
    TransformControls,
    Float,
    MeshReflectorMaterial
} from "@react-three/drei";
import {useRef} from "react";

export default function Experience()
{
    // const { camera, gl } = useThree()

    const cube = useRef()
    const sphere = useRef()


    return <>

        {/*<orbitControls args={ [ camera, gl.domElement ] } />*/}
        <OrbitControls makeDefault />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
        <ambientLight intensity={ 1.5 } />


        <PivotControls anchor={[0, 0, 0]} depthTest={false} lineWidth={4} axisColors={ [ '#9381ff', '#ff4d6d', '#7ae582' ] } scale={100} fixed={true}>
            <mesh ref={ sphere } position-x={ - 2 }>
                <Html position={[1,1,0]} wrapperClass="label" center distanceFactor={6} occlude={[sphere, cube]}>That's a sphere 👍</Html>
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
            </mesh>
        </PivotControls>

        <mesh ref={ cube } position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>
        <TransformControls object={cube}/>


        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <MeshReflectorMaterial resolution={ 512 } blur={[1000, 1000]} mixBlur={1} mirror={0.75} color="greenyellow"/>
            {/*<meshStandardMaterial color="greenyellow" />*/}
        </mesh>

        <Float>
            <Text font={"./bangers-v20-latin-regular.woff"} fontSize={1} color="salmon" position-y={2} maxWidth={2} textAlign="center">
                I love R3F
                <meshNormalMaterial />
            </Text>
        </Float>




    </>
}