import {useControls} from "leva";

export default function Cube()
{
    const {position, scale} = useControls('cube', {
        scale: 1,
        position: {
            value : {
                x: 2,
                y: 0
            },
        joystick: 'invertY'
        }
    })
    return <mesh position-x={position.x} position-y={position.y} scale={scale}>
                <boxGeometry/>
                <meshStandardMaterial color="mediumpurple"/>
            </mesh>
}