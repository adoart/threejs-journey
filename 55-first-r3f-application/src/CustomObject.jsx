import * as THREE from 'three'
import {useEffect, useMemo, useRef} from "react";
export default function CustomObject() {
    const verticesCount = 10 * 3

    const positionsCache = useMemo(() => {
        const positions = new Float32Array(verticesCount * 3)

        for (let i = 0; i < verticesCount * 3; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 3
            positions[i * 3 + 1] = (Math.random() - 0.5) * 3
            positions[i * 3 + 2] = (Math.random() - 0.5) * 3
        }

        return positions
    }, []);

    const geomRef = useRef();
    useEffect(() => {
        geomRef.current.computeVertexNormals()
    }, []);

    return <mesh>
        <bufferGeometry ref={geomRef}>
            <bufferAttribute attach="attributes-position" count={verticesCount} itemSize={3} array={positionsCache} />
        </bufferGeometry>
        {/*<boxGeometry />*/}
        <meshStandardMaterial color="red" side={THREE.DoubleSide}/>
    </mesh>
}