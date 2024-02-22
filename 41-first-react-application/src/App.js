import Clicker from "./clicker.js";
import {useMemo, useState} from "react";
import People from "./People.js";

export default function App({clickersCount, children}) {
    const [hasClicker, setHasClicker] = useState(true)
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const colors = useMemo(() => {
        const colors = []
        for (let i = 0; i < clickersCount; i++) {
            colors[i] = `hsl(${Math.random() * 360}deg , 100%, 70%)`
        }
        return colors
    }, [clickersCount])


    return (
        <>
            {children}
            <div>Total clicks: {count}</div>
            <h1>Clicker</h1>
            <button onClick={() => setHasClicker(!hasClicker)}>{hasClicker ? 'Hide' : 'Show'} clicker</button>
            {hasClicker && <>
                {[...Array(clickersCount)].map((value, index) =>
                    <Clicker key={index}
                        increment={increment}
                        keyName={`clicker-${index}`}
                        color={colors[index]}
                    />)}
            </>}
            <People/>
        </>)
}