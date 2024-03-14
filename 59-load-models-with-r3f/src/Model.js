import {Clone, useGLTF} from "@react-three/drei";
import {Hamburger} from "./Hamburger.js";

export default function Model()
{
    // const model = useLoader(GLTFLoader, './hamburger.glb', loader => {
    //     const dracoLoader = new DRACOLoader();
    //     dracoLoader.setDecoderPath('./draco/');
    //     loader.setDRACOLoader(dracoLoader);
    // });

    // const model = useGLTF('./hamburger-draco.glb');
    // useGLTF.preload('./hamburger-draco.glb')

    return <>
        <Hamburger position-y={0} scale={0.35}/>
    </>
}